# Slide 00 - Cover

EF235161 - TD Data Mining
Pertemuan 11
# Graph Mining & Graph Neural Networks

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D
Departemen Teknik Informatika - ITS

---

# Slide 01 - Peta Pertemuan dan Posisi dalam RPS

Pertemuan ini berada di antara pendalaman metode modern untuk data tabular dan pengenalan data yang berubah terhadap waktu.

| Minggu | Topik | Peran |
|---|---|---|
| 10 | AutoML, Hyperparameter Optimization & Reproducible Research | Memberikan cara tuning yang fair dan eksperimen reproducible |
| **11** | **Graph Mining & Graph Neural Networks** | **Memperluas analisis dari data tabular ke data relasional/struktur graph** |
| 12 | Temporal, Streaming Data & Concept Drift | Membahas perubahan distribusi data seiring waktu |

- CPMK yang dicapai: **CPMK-1** dan **CPMK-5**.
- Aktivitas: kuliah, paper discussion, studi kasus graph data, dan praktikum opsional.
- Research project: **menjalankan Experiment V1** dan melakukan analisis awal hasil.

---

# Slide 02 - Tujuan Pembelajaran dan CPMK

Setelah mengikuti pertemuan ini, mahasiswa diharapkan mampu:

- Memahami representasi graph: node, edge, adjacency, degree, dan tipe graph.
- Menjelaskan dan menerapkan konsep centrality, community detection, dan link prediction.
- Membedakan graph embedding, node embedding, dan Graph Neural Networks.
- Menjelaskan arsitektur GCN dan GraphSAGE serta kelebihan/keterbatasannya.
- Mengenali tantangan pada heterogeneous graph dan dynamic graph.
- Membandingkan pendekatan klasik graph mining dengan GNN secara kritis.

### Kaitan dengan CPMK

| CPMK | Kontribusi Pertemuan 11 |
|---|---|
| CPMK-1 | Menganalisis konsep dan algoritma data mining modern pada data graph |
| CPMK-5 | Membandingkan metode klasik, embedding, dan GNN dari aspek performa, skala, dan kebutuhan data |

---

# Slide 03 - Dari Data Tabular ke Data Relasional

Sejak awal semester, sebagian besar metode bekerja pada data berbentuk **tabel**: baris adalah observasi, kolom adalah fitur, dan observasi dianggap **independen**.

Pada graph, asumsi independensi tidak berlaku karena **relasi antar entitas** justru menjadi sumber informasi utama.

```text
Data tabular:
  id | fitur1 | fitur2 | label
  ---+--------+--------+------
   1 |  0.2   |  1.1   |  A
   2 |  0.9   |  2.3   |  B

Data graph:
  (A) --- (B)
   |       |
  (C) --- (D)
   + atribut pada node dan edge
```

Contoh domain: media sosial, jaringan kutipan, knowledge graph, interaksi molekul, jaringan transportasi, dan graf transaksi keuangan.

---

# Slide 04 - Representasi Graph: Node, Edge, dan Tipe

Graph dinotasikan sebagai:

```text
G = (V, E)
V = himpunan node/vertex
E = himpunan edge/relasi
```

Node dapat memiliki **atribut** `X_v`, dan edge dapat memiliki **atribut** `X_e`.

### Tipe Graph

| Tipe | Deskripsi | Contoh |
|---|---|---|
| Undirected | Edge tidak memiliki arah | Jaringan sosial friendship |
| Directed | Edge memiliki arah | Follower di Twitter |
| Weighted | Edge memiliki bobot | Jumlah transaksi |
| Multigraph | Lebih dari satu edge antar node | Jaringan transportasi dengan mode berbeda |
| Heterogeneous | Lebih dari satu tipe node/edge | Knowledge graph |
| Dynamic | Struktur berubah terhadap waktu | Jaringan komunikasi temporal |

---

# Slide 05 - Representasi Graph dengan NetworkX

Python menggunakan **NetworkX** untuk membangun, memanipulasi, dan menganalisis graph.

```python
import networkx as nx

G = nx.Graph()
G.add_nodes_from([1, 2, 3, 4])
G.add_edges_from([(1, 2), (2, 3), (3, 4), (4, 1)])

## Menambah atribut node
G.nodes[1]["label"] = "positif"
G.nodes[2]["label"] = "negatif"

## Derajat
print(dict(G.degree()))
## Output: {1: 2, 2: 2, 3: 2, 4: 2}
```

Terdapat dua representasi dasar:

- **Adjacency list**: `{node: [tetangga]}`.
- **Adjacency matrix**: matriks `N x N` dengan `A[i][j] = 1` jika terdapat edge.

```python
import numpy as np
A = nx.to_numpy_array(G)
print(A)
```

---

# Slide 06 - Node dan Edge: Konsep Dasar

Beberapa istilah penting yang menjadi dasar seluruh materi pertemuan ini:

| Istilah | Definisi |
|---|---|
| Degree | Jumlah edge yang terhubung ke node |
| In-degree / Out-degree | Derajat masuk/keluar pada directed graph |
| Path | Urutan node yang dihubungkan oleh edge |
| Connected component | Subgraph yang semua node-nya saling terhubung |
| Neighbor | Node yang terhubung langsung |
| Self-loop | Edge dari node ke dirinya sendiri |
| Node attribute | Fitur/ label yang dimiliki node |
| Edge attribute | Bobot, tipe, timestamp pada edge |

Pemahaman terhadap derajat dan komponen menjadi dasar untuk:

- centrality,
- community detection,
- link prediction,
- desain arsitektur GNN.

---

# Slide 07 - Centrality: Mengukur Kepentingan Node

Centrality menjawab pertanyaan: **node mana yang paling penting/pengaruh dalam graph?**

| Jenis | Ide | Formula sederhana |
|---|---|---|
| Degree centrality | Semakin banyak tetangga, semakin penting | `deg(v) / (N-1)` |
| Closeness centrality | Semakin cepat menjangkau node lain | `1 / rata-rata jarak ke semua node` |
| Betweenness centrality | Node yang sering dilalui lintasan terpendek | `Σ (σ_st(v) / σ_st)` |
| Eigenvector centrality | Penting jika tetangganya penting | Eigenvector dari adjacency matrix |
| PageRank | Variasi eigenvector dengan random jump | Iterasi `PR(v)` berbasis in-link |

Pemilihan centrality bergantung pada pertanyaan penelitian:

- **Degree** untuk influencer lokal.
- **Betweenness** untuk broker/pemutus koneksi.
- **PageRank** untuk pengaruh global.

---

# Slide 08 - Centrality: Contoh dan Interpretasi

Misalkan graph sederhana berikut:

```text
   A
  / \
 B---C
  \ /
   D
```

Perkiraan centrality:

| Node | Degree | Betweenness (pada lintasan terpendek) | Interpretasi |
|---|---|---|---|
| A | 2 | Sedang | Terhubung ke B dan C |
| C | 3 | Tinggi | Menghubungkan banyak lintasan antar simpul |
| B | 2 | Rendah | Terletak di tepi |
| D | 2 | Rendah | Hanya terhubung ke B dan C |

**Catatan untuk penelitian**: centrality sering dijadikan **fitur tambahan** pada model klasifikasi, bukan hanya untuk deskripsi graph. Pastikan centrality dihitung pada graph yang valid dan tidak mengandung data leakage saat split.

---

# Slide 09 - Community Detection: Menemukan Kelompok dalam Graph

Community detection mengelompokkan node menjadi **cluster yang padat secara internal** dan **jarang terhubung ke luar**.

### Metode umum

| Metode | Ide |
|---|---|
| Girvan-Newman | Hapus edge dengan betweenness tertinggi secara iteratif |
| Louvain | Optimasi modularity secara greedy |
| Label Propagation | Node mengadopsi label mayoritas tetangga |
| Spectral clustering | Partisi berdasarkan eigenvector Laplacian |

### Modularity

Modularity `Q` mengukur kualitas partisi:

```text
Q = (fraksi edge di dalam komunitas) - (fraksi yang diharapkan pada random graph)
```

Kisaran umum: `-1` sampai `1`. Nilai `> 0.3` sering dianggap komunitas yang cukup baik, tetapi interpretasi tetap konteks-dependent.

---

# Slide 10 - Community Detection: Implementasi dan Evaluasi

Contoh dengan NetworkX:

```python
import networkx as nx

G = nx.karate_club_graph()
communities = nx.community.louvain_communities(G, seed=42)

for i, comm in enumerate(communities):
    print(f"Komunitas {i}: {len(comm)} node")
```

### Evaluasi komunitas

| Metrik | Jenis | Kegunaan |
|---|---|---|
| Modularity | Internal | Seberapa baik struktur komunitas dibanding random |
| Conductance | Internal | Proporsi edge yang keluar dari komunitas |
| Coverage | Internal | Proporsi edge internal terhadap seluruh edge |
| NMI / Adjusted Rand Index | Eksternal | Perbandingan dengan label ground truth jika tersedia |

Untuk penelitian, gunakan **lebih dari satu metrik** dan lakukan analisis stabilitas terhadap seed/parameter.

---

# Slide 11 - Link Prediction: Memprediksi Edge yang Hilang

Link prediction adalah masalah memperkirakan **apakah sebuah edge akan terbentuk** atau **apakah edge yang hilang benar-benar ada**.

Aplikasi:

- Rekomendasi pertemanan di media sosial.
- Prediksi interaksi obat-protein.
- Knowledge graph completion.
- Deteksi fraud berbasis transaksi.

### Pendekatan

| Kategori | Contoh |
|---|---|
| Similarity-based | Common neighbors, Jaccard, Adamic-Adar, Preferential Attachment |
| Embedding-based | Node2vec + similarity, graph embedding |
| Graph Neural Network | GCN/GraphSAGE untuk scoring pasangan node |
| Temporal | Memanfaatkan timestamp dan riwayat edge |

---

# Slide 12 - Link Prediction: Contoh dan Evaluasi

Contoh similarity-based dengan NetworkX:

```python
import networkx as nx
from sklearn.metrics import roc_auc_score

G = nx.karate_club_graph()

## Hapus sebagian edge untuk evaluasi
edges = list(G.edges())
G_train = nx.Graph()
G_train.add_nodes_from(G.nodes())
G_train.add_edges_from(edges[:40])

## Common neighbors score
preds = list(nx.common_neighbors(G_train, 0, 33))
print(len(preds))
```

### Evaluasi link prediction

| Metrik | Kegunaan |
|---|---|
| AUC | Kemampuan membedakan edge positif dan negatif |
| Average Precision (AP) | Presisi pada peringkat atas |
| Precision@k / Hits@k | Kualitas rekomendasi top-k |
| Recall@k | Seberapa banyak edge sebenarnya ditemukan |

**Penting**: proses pembuatan edge negatif harus dilakukan secara hati-hati dan dijelaskan dalam paper agar eksperimen reproducible.

---

# Slide 13 - Graph Embedding: Representasi Low-Dimensional

Graph embedding memetakan node, edge, atau keseluruhan graph ke **vektor numerik berdimensi rendah**.

```text
Node/graph  -->  f  -->  z ∈ R^d
```

### Motiivasi

- Menghubungkan graph dengan machine learning standar.
- Menangkap struktur dan properti graph dalam representasi padat.
- Dapat digunakan sebagai fitur untuk klasifikasi, clustering, atau link prediction.

### Node embedding vs graph embedding

| Level | Output | Contoh metode |
|---|---|---|
| Node embedding | Satu vektor per node | DeepWalk, node2vec, GCN |
| Edge embedding | Satu vektor per pasangan/edge | Dari node embedding, Hadamard, concat |
| Graph embedding | Satu vektor per graph | graph2vec, diffpool, mean pooling |

Ini merupakan jembatan menuju GNN karena GNN juga menghasilkan embedding, tetapi dilatih secara end-to-end.

---

# Slide 14 - Node Embedding: DeepWalk dan node2vec

### DeepWalk

1. Lakukan random walk pada graph.
2. Perlakukan urutan node seperti kalimat pada word2vec.
3. Gunakan skip-gram untuk mempelajari embedding node.

### node2vec

Memperluas DeepWalk dengan random walk berparameter `p` dan `q`:

- `p` mengontrol peluang **kembali ke node sebelumnya**.
- `q` mengontrol peluang **menjelajah lebih jauh (BFS vs DFS)**.

```text
p besar  : lebih fokus pada struktur lokal (BFS-like)
q besar  : lebih menangkap struktur global (DFS-like)
```

### Keterbatasan

- Bersifat **transductive**: node baru membutuhkan pelatihan ulang.
- Tidak memanfaatkan atribut node jika hanya berbasis struktur.
- Tidak dioptimasi terhadap tugas akhir.

Keterbatasan inilah yang mendorong penggunaan GNN.

---

# Slide 15 - Graph Embedding: Dari Node ke Keseluruhan Graph

Untuk tugas klasifikasi graph (misalnya molekul aktif/tidak aktif), diperlukan satu vektor untuk seluruh graph.

### Pendekatan

| Pendekatan | Deskripsi |
|---|---|
| graph2vec | Menganggap subgraph sebagai dokumen dan graph sebagai korpus |
| Pooling | Menggabungkan node embedding menjadi graph embedding |
| DiffPool | Pooling yang dipelajari secara differentiable |
| Graph kernel | Alternatif non-neural untuk similaritas graph |

### Pooling sederhana

```text
z_G = MEAN({ h_v | v ∈ V })
z_G = MAX({ h_v | v ∈ V })
```

GNN dapat dilatih dengan readout/pooling di akhir lapisan untuk menghasilkan representasi graph.

---

# Slide 16 - Pengantar Graph Neural Networks

GNN adalah arsitektur neural network yang bekerja langsung pada struktur graph.

### Mengapa GNN?

- Embedding konvensional seperti node2vec tidak menggunakan **atribut node**.
- GNN mempelajari representasi node dengan mempertimbangkan **struktur + fitur**.
- Dapat dilatih untuk tugas spesifik: klasifikasi node, link prediction, graph classification.

### Ide dasar

Setiap node memperbarui representasinya berdasarkan informasi dari **tetangganya**.

```text
Input: graph + fitur node
       |
       v
 Layer GNN -> embedding node berkonteks
       |
       v
 Output: prediksi (node/edge/graph)
```

GNN bekerja melalui mekanisme **message passing**.

---

# Slide 17 - Message Passing: Inti GNN

Pada lapisan `l`, representasi node `v` diperbarui dengan:

```text
h_v^(l+1) = UPDATE( h_v^(l), AGG({ h_u^(l) | u ∈ N(v) }) )
```

### Komponen utama

| Komponen | Fungsi | Contoh |
|---|---|---|
| Message | Menghasilkan pesan dari tetangga | `W h_u` |
| Aggregation | Menggabungkan pesan tetangga | sum, mean, max |
| Update | Memperbarui representasi node | `σ(W h_v + aggregated)` |

Ilustrasi:

```text
   h_u1
    |
    v
 h_v +-- AGG --> m_v --> UPDATE --> h_v'
```

Semakin banyak lapisan, semakin jauh jangkauan konteks tetangga yang dilihat.

---

# Slide 18 - GCN: Graph Convolutional Networks

GCN adalah salah satu arsitektur GNN paling dasar dan banyak digunakan.

### Formula lapisan GCN

```text
H^(l+1) = σ( D~^(-1/2) A~ D~^(-1/2) H^(l) W^(l) )
```

dengan:

- `A~ = A + I` → adjacency matrix ditambah self-loop.
- `D~` adalah degree matrix dari `A~`.
- `H^(l)` adalah matriks embedding pada lapisan `l`.
- `W^(l)` adalah matriks bobot yang dipelajari.
- `σ` adalah fungsi aktivasi.

### Interpretasi

- Self-loop membantu node mempertahankan informasi dirinya.
- Normalisasi simetris mencegah nilai embedding membesar pada node berderajat tinggi.
- Setiap lapisan menggabungkan fitur node dengan fitur tetangga.

GCN sederhana sudah menjadi **baseline kuat** untuk node classification.

---

# Slide 19 - GCN: Implementasi Singkat

Gambaran implementasi lapisan GCN dengan PyTorch-style:

```python
import torch
import torch.nn as nn

class GCNLayer(nn.Module):
    def __init__(self, in_dim, out_dim):
        super().__init__()
        self.W = nn.Linear(in_dim, out_dim)

    def forward(self, H, A_norm):
        # A_norm = D^-1/2 A~ D^-1/2 (sudah dihitung sebelumnya)
        return torch.relu(A_norm @ self.W(H))
```

Untuk jaringan dua lapis:

```python
class GCN(nn.Module):
    def __init__(self, in_dim, hidden_dim, n_classes):
        super().__init__()
        self.layer1 = GCNLayer(in_dim, hidden_dim)
        self.layer2 = GCNLayer(hidden_dim, n_classes)

    def forward(self, H, A_norm):
        H = self.layer1(H, A_norm)
        return self.layer2(H, A_norm)
```

**Catatan**: untuk eksperimen yang adil, normalisasi adjacency dihitung hanya dari data training dan diterapkan konsisten pada data validasi/test.

---

# Slide 20 - GraphSAGE: Sampling dan Aggregation

GraphSAGE dikembangkan untuk mengatasi keterbatasan GCN pada graph besar dan kebutuhan **inductive learning**.

### Perbedaan utama dengan GCN

| Aspek | GCN | GraphSAGE |
|---|---|---|
| Tetangga | Semua tetangga dalam satu hop | Tetangga disampel |
| Update | Normalisasi adjacency global | Agregator fleksibel |
| Inductive | Terbatas | Dapat mengenali node baru |

### Agregator

```text
MEAN : rata-rata embedding tetangga
LSTM : LSTM pada urutan tetangga
POOL : max/mean pooling
```

Formula sederhana:

```text
h_v^(l+1) = σ( W · CONCAT(h_v^(l), AGG({h_u^(l) | u ∈ S(v)})) )
```

`S(v)` adalah himpunan tetangga hasil sampling.

---

# Slide 21 - GraphSAGE: Pseudocode dan Minibatch

### Pseudocode untuk satu lapisan

```text
Input: graph G, node v, embedding h_v^(l), fungsi sample
1. S(v) = sample_neighbors(v, K)
2. m_v = AGG({ h_u^(l) for u in S(v) })
3. h_v^(l+1) = UPDATE( CONCAT(h_v^(l), m_v) )
```

### Keuntungan minibatch

- Hanya memproses subgraph yang dibutuhkan.
- Cocok untuk graph besar yang tidak muat di memori.
- Mendukung learning pada node yang belum pernah terlihat.

### Contoh library

```python
from torch_geometric.nn import SAGEConv
conv = SAGEConv(in_channels=16, out_channels=32)
```

GraphSAGE sering menjadi baseline yang kuat sekaligus scalable untuk dataset graph besar seperti Reddit atau ogbn-arxiv.

---

# Slide 22 - Perbandingan GCN dan GraphSAGE

| Kriteria | GCN | GraphSAGE |
|---|---|---|
| Mode training | Full-batch atau mini-batch dengan seluruh tetangga | Mini-batch dengan sampling tetangga |
| Inductive learning | Terbatas | Dirancang untuk inductive |
| Agregasi | Normalisasi adjacency yang tetap | Mean, LSTM, pooling |
| Skalabilitas | Sulit pada graph sangat besar | Lebih mudah diskalakan |
| Kompleksitas implementasi | Lebih sederhana | Sedikit lebih kompleks |
| Kapan cocok | Dataset graph kecil/sedang, baseline cepat | Graph besar, node dinamis, aplikasi produksi |

Pemilihan GCN vs GraphSAGE harus disesuaikan dengan:

- ukuran dataset,
- kebutuhan induktif,
- budget komputasi,
- target penelitian.

---

# Slide 23 - Heterogeneous Graph: Banyak Tipe Node dan Edge

Heterogeneous graph memiliki **lebih dari satu tipe node** dan/atau **lebih dari satu tipe edge**.

Contoh: jaringan publikasi

```text
[Author] --menulis--> [Paper] --dipublikasikan_di--> [Venue]
 [Author] --mengutip--> [Paper]
```

### Konsep penting

- **Metapath**: pola perjalanan antar tipe node, misalnya `Author-Paper-Author` untuk penulis bersama.
- **Metapath2vec**: melakukan random walk berdasarkan metapath.
- **RGCN**: relasi yang berbeda menggunakan transformasi bobot yang berbeda.
- **HAN**: menggunakan attention pada level node dan level metapath.

Heterogeneous graph membutuhkan pemahaman domain untuk menentukan tipe relasi yang relevan dengan research question.

---

# Slide 24 - Pendekatan Heterogeneous Graph: RGCN dan HAN

### RGCN (Relational Graph Convolutional Network)

Rumus lapisan RGCN:

```text
h_v^(l+1) = σ( Σ_{r ∈ R} Σ_{u ∈ N_r(v)} W_r h_u^(l) + W_self h_v^(l) )
```

- Setiap relasi `r` memiliki matriks `W_r`.
- Kompleksitas meningkat dengan jumlah relasi; regularisasi atau basis decomposition dapat digunakan.

### HAN (Heterogeneous Graph Attention Network)

- Menggunakan `node-level attention` untuk memilih tetangga penting.
- Menggunakan `semantic-level attention` untuk memilih metapath penting.

Pendekatan mana yang dipilih tergantung pada:

- jumlah relasi,
- ketersediaan label,
- interpretability yang dibutuhkan.

---

# Slide 25 - Dynamic Graph: Graph yang Berubah Waktu

Dynamic graph adalah graph yang strukturnya berubah seiring waktu: node bertambah/hilang, edge muncul/hilang, atau atribut berubah.

### Dua representasi utama

| Tipe | Deskripsi | Contoh |
|---|---|---|
| Discrete-time dynamic graph | Rangkaian snapshot graph pada waktu tertentu | Interaksi mingguan |
| Continuous-time dynamic graph | Aliran event `(u, v, t)` | Email, transaksi, pesan |

### Contoh event stream

```text
(u1, u2, t=10)
(u1, u3, t=12)
(u2, u1, t=13)
```

Dynamic graph menjadi jembatan menuju pertemuan berikutnya: **Temporal, Streaming Data & Concept Drift**.

---

# Slide 26 - Dynamic Graph: Pendekatan dan Tantangan

### Pendekatan

| Pendekatan | Ide |
|---|---|
| Snapshot GNN | Terapkan GNN pada setiap snapshot, gabungkan representasi |
| EvolveGCN | Evolusi bobot GCN dengan RNN |
| TGAT/TGN | Memproses event secara temporal dengan attention atau memory |

### Aplikasi

- Link prediction temporal.
- Rekomendasi berbasis urutan.
- Deteksi anomali pada interaksi.

### Tantangan

- Encoding waktu secara efektif.
- Menangani sparsity dan irregular time.
- Evaluasi yang benar harus menghindari **penggunaan masa depan** saat memproses data masa lalu.

Konsep drift dan adaptasi kontinu akan dibahas lebih dalam pada pertemuan 12.

---

# Slide 27 - Aplikasi dan Dataset Graph

### Studi kasus

| Domain | Problem | Pendekatan |
|---|---|---|
| Media sosial | Node classification (akun bot/spam) | GCN, GraphSAGE |
| Jaringan kutipan | Paper classification, link prediction | GCN, node2vec |
| Knowledge graph | Entity classification, completion | RGCN, TransE |
| Bioinformatika | Molecule property prediction | Graph embedding, GNN |
| Fraud detection | Anomaly detection pada transaksi | Graph embedding, dynamic graph |

### Dataset yang umum digunakan

| Dataset | Tipe | Tugas |
|---|---|---|
| Cora, CiteSeer, PubMed | Citation graph | Node classification |
| Karate Club | Social graph kecil | Community detection |
| ogbn-arxiv, ogbn-products | Large graph | Node classification, link prediction |
| Reddit | Social graph | Inductive node classification |
| MUTAG, PROTEINS | Molecular graph | Graph classification |

Penggunaan dataset yang sudah umum membantu perbandingan dengan publikasi lain secara fair.

---

# Slide 28 - Workflow Penelitian Graph Mining

Berikut alur penelitian yang disarankan, sejalan dengan **Experiment V1**:

```text
Data graph
   ↓
EDA & preprocessing graph
   ↓
Pilih tugas: node classification / link prediction / community
   ↓
Split data: transductive / inductive, hindari leakage
   ↓
Baseline: centrality, community, classic embedding, logistik
   ↓
Metode: GCN / GraphSAGE / hetero / dynamic
   ↓
Evaluasi: metric tugas + multiple seeds + complexity
   ↓
Analisis error dan robustness
   ↓
Kesimpulan & kontribusi penelitian
```

Gunakan prinsip reproducible research dari pertemuan 10:

- fixed seed,
- dokumentasi hyperparameter,
- experiment tracking,
- kode dan data yang jelas.

---

# Slide 29 - Paper Discussion: Critical Review pada Paper GNN

Saat membaca paper graph mining / GNN, pertanyaan kritis yang perlu diajukan:

### Desain penelitian

- Apa research question dan mengapa graph diperlukan?
- Apakah baseline yang digunakan cukup kuat dan fair?
- Apakah split data valid? Transductive vs inductive dijelaskan dengan jelas?

### Metode

- Apakah arsitektur GNN benar-benar memberi kontribusi, atau hanya menambah kompleksitas?
- Apakah message passing dibandingkan dengan representasi alternatif seperti node2vec?

### Eksperimen

- Berapa banyak dataset dan berapa kali pengulangan?
- Apakah hyperparameter tuning dilakukan secara adil untuk semua metode?
- Apakah diukur computational cost / waktu training?

### Kontribusi

- Pengetahuan baru apa yang didapat dari eksperimen, bukan sekadar skor akurasi?

Diskusi ini menguatkan CPMK-5 dalam membandingkan metode klasik vs modern.

---

# Slide 30 - Praktikum Opsional: Node Classification atau Link Prediction

Praktikum dapat memilih salah satu:

### Opsi A: Node classification

1. Gunakan dataset Cora atau CiteSeer.
2. Lakukan EDA graph: jumlah node, edge, kelas, derajat.
3. Buat split transductive/inductive.
4. Implementasi baseline: Logistic Regression dengan node2vec embedding.
5. Implementasi GCN/GraphSAGE.
6. Bandingkan accuracy, F1, dan waktu training.
7. Lakukan analisis error pada kelas minoritas.

### Opsi B: Link prediction

1. Gunakan dataset graph kecil.
2. Sembunyikan sebagian edge sebagai test positif.
3. Bangun edge negatif.
4. Evaluasi similarity (Adamic-Adar) dan GNN link predictor.
5. Laporkan AUC / AP.

### Output

- Notebook eksperimen.
- Tabel hasil.
- Analisis singkat: mengapa metode lebih baik/gagal.
- Kesimpulan sebagai evidence untuk research project.

---

# Slide 31 - Research Project: Menjalankan Experiment V1

Pada minggu ini, project penelitian diharapkan memasuki **eksperimen pertama (V1)**.

### Target

- Implementasi baseline sudah selesai pada pertemuan 9–10.
- Proposed/selected method sudah berjalan pada pertemuan 10.
- Sekarang: jalankan eksperimen dan analisis awal hasil.

### Langkah

1. Pastikan pipeline reproducible: seed, environment, data version.
2. Jalankan baseline dan metode pada dataset utama.
3. Catat metric utama dan metric sekunder.
4. Lakukan analisis kesalahan awal.
5. Bandingkan dengan ekspektasi dari literature review.

### Template hasil awal

| Metode | Accuracy | F1-macro | Waktu train | Catatan |
|---|---|---|---|---|
| Baseline A | ... | ... | ... | ... |
| Proposed B | ... | ... | ... | ... |

Jika hasil tidak sesuai harapan, catat hipotesis penyebabnya. Ini akan menjadi bahan diskusi pada pertemuan 12 (extended experiment).

---

# Slide 32 - Evaluasi Model GNN: Split dan Metrik

Kesalahan umum pada eksperimen graph adalah **data leakage** akibat split yang tidak mempertimbangkan struktur.

### Transductive vs inductive

```text
Transductive : semua node terlihat saat training, tapi label test tidak digunakan
Inductive    : node test tidak terlihat sama sekali saat training
```

Pilih strategi split:

- **Node splitting**: membagi node secara acak → transductive.
- **Graph splitting**: untuk graph classification, membagi per graph.
- **Temporal splitting**: untuk dynamic graph, pastikan train di masa lalu, test di masa depan.

### Metrik

| Tugas | Metrik |
|---|---|
| Node classification | Accuracy, F1 macro/micro |
| Link prediction | AUC, AP, Hits@k |
| Graph classification | Accuracy, ROC-AUC |
| Community detection | Modularity, NMI (jika ada label) |

Laporkan rata-rata dan standar deviasi dari beberapa seed.

---

# Slide 33 - Tantangan dan Open Problems dalam Graph Mining

| Tantangan | Deskripsi singkat | Arah riset |
|---|---|---|
| Oversmoothing | GNN terlalu dalam membuat embedding node homogen | Residual/skip connection, normalisasi |
| Heterophily | Tetangga sering berbeda label | Arsitektur khusus heterophily |
| Scalability | Graph besar tidak muat dalam memori | Sampling, minibatch, distribusi |
| Dynamic/temporal | Struktur berubah dan data datang bertahap | Temporal GNN, online learning |
| Explainability | Keputusan GNN sulit diinterpretasikan | Attention, subgraph explanation |
| Fairness | Bias pada graph dapat menyebar melalui relasi | Fair graph learning |

Topik ini akan berhubungan dengan pertemuan 13 tentang explainability dan trustworthiness.

---

# Slide 34 - Kesimpulan

Pertemuan 11 membahas transisi dari data tabular ke data graph.

### Poin kunci

- Graph merepresentasikan entitas dan relasi yang tidak dapat ditangkap oleh tabel konvensional.
- Centrality dan community detection membantu memahami struktur graph.
- Link prediction memanfaatkan pola koneksi untuk memprediksi relasi baru.
- Node/graph embedding menghasilkan representasi vektor untuk tugas machine learning.
- GNN mempelajari representasi melalui message passing.
- GCN adalah baseline sederhana; GraphSAGE menawarkan skalabilitas dan inductive learning.
- Heterogeneous dan dynamic graph menangani kompleksitas dunia nyata.

### Untuk research project

- Jalankan **Experiment V1** dengan desain yang fair.
- Gunakan baseline kuat dan evaluasi yang tepat.
- Dokumentasikan seluruh eksperimen untuk reproducibility.

---

## TERIMA KASIH

Pertemuan berikutnya

**Temporal, Streaming Data & Concept Drift**