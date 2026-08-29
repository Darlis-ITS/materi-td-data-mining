# Narasi TD Data Mining - Pertemuan 11

## Graph Mining & Graph Neural Networks

Sumber: markdown/pert11-graph-mining-graph-neural-networks.md

---

## Slide 000 - Cover

### Narasi

Slide ini menandai pembukaan pembahasan untuk Pertemuan 11 mata kuliah Topik Dalam Data Mining, yang secara spesifik mengangkat topik Graph Mining dan Graph Neural Networks. Pada jenjang magister, cakupan analisis data telah berkembang melampaui representasi tabel atau vektor numerik sederhana, menuju struktur relasional yang lebih kompleks dan dinamis. Graph Mining merujuk pada kumpulan metode komputasi untuk mengekstrak pola, komunitas, sentralitas, fitur topologis, dan pengetahuan laten dari data yang dimodelkan sebagai graf. Di sisi lain, Graph Neural Networks (GNN) merepresentasikan lompatan arsitektural dalam deep learning yang secara native dirancang untuk memproses data berbasis graf, memungkinkan pembelajaran representasi node, edge, maupun subgraph melalui mekanisme message passing dan aggregation.

Dalam ekosistem penelitian data mining tingkat lanjut, penguasaan topik ini menjadi prasyarat strategis karena sebagian besar fenomena riil—seperti jaringan interaksi sosial, sistem rekomendasi, deteksi anomali finansial, hingga analisis jalur metabolik dan protein—memiliki struktur inheren yang bersifat graf. Kemampuan untuk mengkonversi masalah domain ke representasi graph, memilih arsitektur GNN yang sesuai (seperti GCN, GAT, atau GraphSAGE), serta mengevaluasi generalisasi model pada data non-Euclidean akan secara signifikan meningkatkan kedalaman riset Anda. Selain itu, sesi ini juga berfungsi sebagai pengantar konseptual yang menyongsong kegiatan akademik inti semester ini, meliputi diskusi kritis paper internasional, studi kasus graph data, serta persiapan pelaksanaan Experiment V1 dalam proyek penelitian individual atau tim.

Fokus pembelajaran pada slide pembuka ini menekankan pada pergeseran perspektif analitik: dari pendekatan statistik-tabular konvensional menuju pemodelan relasional berbasis graf. Kita akan membahas mengapa struktur koneksi sering kali mengandung informasi prediktif yang lebih kaya daripada atribut node itu sendiri, serta bagaimana integrasi Graph Mining ke dalam pipeline data mining modern menuntut pertimbangan khusus terkait skalabilitas, heterogenitas relasi, dan interpretabilitas model.

### Inti yang Harus Ditekankan

- Representasi graf bukan sekadar alternatif visual, melainkan formalisme matematis yang menangkap ketergantungan struktural dan relasional antar entitas secara eksplisit.
- Graph Mining dan GNN membuka dimensi baru dalam feature engineering dan pattern discovery, khususnya untuk data yang bersifat interconnected dan non-i.i.d.
- Pemahaman teoritis harus segera diterjemahkan ke dalam praktik eksperimental yang rigorous, selaras dengan tuntutan penelitian tingkat magister dan persiapan Experiment V1.

### Transisi ke Slide Berikutnya

Untuk memastikan keselarasan antara topik ini dengan roadmap perkuliahan serta capaian pembelajaran yang ditetapkan, mari kita tinjau posisi Pertemuan 11 dalam Rencana Pembelajaran Semester, bagaimana materi ini menjembatani pendalaman data tabular modern dengan tantangan data temporal, serta rincian aktivitas dan target penelitian yang harus dicapai selama sesi ini berlangsung.

---

## Slide 001 - Peta Pertemuan dan Posisi dalam RPS

### Narasi

Pertemuan ini menempati posisi strategis dalam alur pembelajaran sebagai titik transisi dari pemrosesan data independen menuju pemodelan struktur relasional. Jika pada minggu sebelumnya kita telah mendalami AutoML, optimasi hyperparameter, dan prinsip reproduktibilitas eksperimen untuk memastikan baseline yang kuat dan fair, maka kini fokus bergeser ke data yang bersifat interconnected. Real-world phenomena jarang berdiri sendiri; interaksi sosial, jaringan biologis, sistem rekomendasi, hingga dependensi kode perangkat lunak semuanya memiliki struktur graph yang menyimpan informasi krusial di luar atribut node individual. Setelah menguasai representasi dan ekstraksi pola pada graph, minggu berikutnya kita akan melanjutkan ke dinamika waktu dengan membahas temporal data, streaming data, dan concept drift, sehingga tercipta alur pembelajaran yang utuh dari data statis-relasional menuju data dinamis-waktu.

Secara akademis, sesi ini secara eksplisit menargetkan pencapaian CPMK-1 dan CPMK-5. CPMK-1 menuntut kemampuan analisis mendalam terhadap konsep dan algoritma data mining modern yang diadaptasi khusus untuk domain graph, sementara CPMK-5 mengarahkan mahasiswa untuk melakukan evaluasi komparatif yang kritis antara pendekatan klasik graph mining, teknik graph embedding, dan arsitektur Graph Neural Networks berdasarkan dimensi performa, skalabilitas, serta karakteristik kebutuhan data. Aktivitas perkuliahan dirancang multidimensi: kuliah teori untuk fondasi konseptual, diskusi kritis terhadap paper internasional terkini, studi kasus praktis pada dataset graph riil, serta praktikum opsional bagi yang ingin memperdalam implementasi teknis menggunakan ekosistem Python yang telah dikuasai.

Dalam konteks pengembangan penelitian tingkat magister, pertemuan ini juga menjadi momentum untuk menjalankan Experiment V1 sesuai protokol metodologi yang telah ditetapkan. Anda diharapkan tidak hanya memahami teori, tetapi segera menerapkannya pada dataset pilihan, mengumpulkan metrik evaluasi awal, dan memulai proses error analysis serta ablation study sederhana. Integrasi antara penguasaan materi graph mining dengan eksekusi eksperimen ini bertujuan memperkuat argumen penelitian Anda, mengidentifikasi research gap yang valid, dan menyiapkan evidence empiris yang siap dikembangkan menjadi publikasi berkualitas konferensi terindeks Scopus.

### Inti yang Harus Ditekankan

- Posisi pertemuan 11 berfungsi sebagai jembatan konseptual dari data tabular/independen (minggu 10) menuju data relasional/struktur graph, yang kemudian berlanjut ke data temporal/dinamis (minggu 12).
- Penekanan ganda pada CPMK-1 (analisis algoritma graph modern) dan CPMK-5 (evaluasi komparatif klasik vs embedding vs GNN berdasarkan performa, skala, dan kebutuhan data).
- Sinkronisasi ketat antara kegiatan akademik (teori, diskusi paper, studi kasus, praktikum) dengan progres penelitian melalui eksekusi Experiment V1 dan analisis awal hasil untuk mendukung penulisan paper ilmiah.

### Transisi ke Slide Berikutnya

Dengan peta perjalanan dan target capaian yang telah terpetakan, mari kita turunkan ke level operasional dengan menelaah secara rinci tujuan pembelajaran spesifik yang harus Anda kuasai, serta bagaimana masing-masing CPMK berkontribusi langsung terhadap kompetensi analitis dan desain penelitian Anda pada topik Graph Mining & GNN kali ini.

---

## Slide 002 - Tujuan Pembelajaran dan CPMK

### Narasi

Slide ini merumuskan tujuan pembelajaran spesifik yang harus dicapai pada pertemuan ke-11, sekaligus memetakan capaian tersebut terhadap Capaian Pembelajaran Mata Kuliah (CPMK) yang telah disepakati di awal semester. Sesuai dengan peta kurikulum yang telah dipaparkan pada slide sebelumnya, topik ini menempati posisi strategis di antara pendalaman metode untuk data tabular dan pembahasan data temporal. Peralihan fokus ini bukan sekadar pergantian materi, melainkan perluasan paradigma analisis dari struktur independen menuju struktur relasional yang kompleks, yang menjadi ciri khas data dunia nyata dalam skala besar.

Pada tingkat magister, pemahaman mendalam dimulai dari fondasi representasi graph. Mahasiswa diharapkan mampu mendeskripsikan komponen dasar seperti node, edge, adjacency, degree, serta berbagai tipe graph yang umum ditemui dalam penelitian. Dari sana, analisis melangkah ke metrik struktural klasik seperti centrality measures, community detection, dan link prediction. Konsep-konsep ini tidak hanya berguna untuk analisis jaringan tradisional, tetapi juga menjadi landasan interpretasi hasil model deep learning berbasis graph, terutama dalam memahami bagaimana informasi mengalir dan terdistribusi di dalam jaringan sebelum dimodelkan secara matematis.

Selanjutnya, narasi beralih ke pendekatan komputasional modern. Mahasiswa akan dibekali kemampuan untuk membedakan secara konseptual antara graph embedding, node embedding, dan Graph Neural Networks (GNN). Pemahaman arsitektur GCN dan GraphSAGE menjadi poin krusial, karena kedua model ini merepresentasikan dua filosofi berbeda dalam proses neighborhood aggregation dan message passing. Mahasiswa dituntut untuk tidak hanya menjalankan kode, tetapi juga mengevaluasi kelebihan dan keterbatasan masing-masing arsitektur terkait kebutuhan memori, skalabilitas, serta fleksibilitas dalam menangani data yang tidak lengkap atau dinamis.

Tantangan lanjutan pada graph heterogen dan dynamic graph juga menjadi bagian integral dari tujuan pembelajaran. Dalam konteks penelitian, data jarang bersifat statis dan homogen. Kemampuan mengenali karakteristik khusus pada graph yang memiliki multi-tipe node/edge atau berubah seiring waktu akan menentukan pemilihan strategi preprocessing dan arsitektur model yang tepat. Hal ini sejalan dengan penekanan metodologis pada jenjang S2, di mana mahasiswa dilatih untuk melakukan ablation study dan error analysis terhadap pilihan representasi data sebelum masuk ke tahap training model.

Terkait pemetaan CPMK, pertemuan ini secara eksplisit berkontribusi pada CPMK-1 dan CPMK-5. CPMK-1 terpenuhi melalui analisis kritis terhadap konsep dan algoritma data mining modern yang diterapkan pada struktur graph, sementara CPMK-5 tercapai ketika mahasiswa mampu membandingkan pendekatan klasik, teknik embedding, dan framework GNN berdasarkan aspek performa komputasi, skalabilitas pada dataset besar, serta kebutuhan kualitas dan kuantitas data. Pencapaian ini akan langsung diuji dalam pelaksanaan Experiment V1 pada proyek penelitian, di mana mahasiswa diharapkan dapat memilih baseline yang relevan dan memberikan justifikasi metodologis atas setiap keputusan teknis yang diambil.

### Inti yang Harus Ditekankan

- Peralihan paradigma dari data independen (tabular) ke data relasional (graph) menuntut pemahaman mendalam tentang struktur jaringan sebagai sumber fitur utama, bukan sekadar noise atau tambahan metadata.
- Pemilihan antara metode klasik, embedding, dan GNN harus didasarkan pada evaluasi kritis terhadap karakteristik data (homogen/heterogen, statis/dinamis), skalabilitas, dan kebutuhan komputasi.
- Implementasi GCN dan GraphSAGE memerlukan pemahaman mekanisme message passing dan neighborhood aggregation, serta kesadaran akan trade-off antara akurasi prediksi dan efisiensi memori.
- Semua capaian pembelajaran ini harus diterjemahkan ke dalam praktik penelitian melalui Experiment V1, dengan penekanan pada justifikasi metodologis, reproduktibilitas eksperimen, dan analisis kesalahan model.

### Transisi ke Slide Berikutnya

Setelah memahami tujuan dan pemetaan kompetensi yang harus dicapai, kita akan menguraikan secara konkret mengapa struktur graph memerlukan pendekatan yang berbeda dari data tabular. Mari kita lihat perbandingan langsung antara asumsi independensi pada data tabel konvensional dengan ketergantungan struktural pada data relasional berbasis graph.

---

## Slide 003 - Dari Data Tabular ke Data Relasional

### Narasi

Pada sebagian besar metode yang telah kita bahas sejak awal semester, struktur data yang menjadi fokus utama adalah data berbentuk tabel. Dalam paradigma tabular, setiap baris merepresentasikan satu observasi atau entitas, sedangkan kolom berisi fitur-fitur numerik atau kategorikal yang mendeskripsikan observasi tersebut. Asumsi fundamental dalam pendekatan ini adalah bahwa setiap observasi bersifat independen satu sama lain. Artinya, informasi yang terkandung dalam satu baris tidak secara langsung bergantung atau memengaruhi baris lainnya. Asumsi independensi ini memudahkan penerapan algoritma statistik klasik dan machine learning tradisional, karena setiap sampel dapat diproses secara terpisah tanpa perlu mempertimbangkan konteks jaringan atau keterkaitan struktural.

Namun, ketika kita beralih ke representasi graph, asumsi independensi tersebut secara eksplisit dilanggar. Dalam konteks data relasional atau berbasis graf, hubungan antar entitas justru menjadi sumber informasi utama yang sering kali lebih bernilai daripada atribut individu node itu sendiri. Seperti yang terlihat pada ilustrasi perbandingan di slide, data tabular disusun secara rigid dalam kolom dan baris, sementara data graph direpresentasikan sebagai kumpulan simpul (node) yang saling terhubung melalui sisi (edge). Setiap node maupun edge dapat membawa atribut tambahan, sehingga membentuk jaringan kompleks di mana pola keterhubungan menentukan dinamika sistem. Ketergantungan struktural ini berarti bahwa prediksi atau analisis terhadap satu node harus memperhitungkan posisi topologisnya, tetangganya, serta peran strukturalnya dalam keseluruhan graf.

Pergeseran dari data tabular ke data relasional ini bukan sekadar perubahan format penyimpanan, melainkan transformasi mendasar dalam cara kita memandang dan mengekstrak pengetahuan dari data. Domain-domain seperti media sosial, jaringan kutipan akademik, knowledge graph, interaksi molekul dalam farmasi, infrastruktur transportasi, hingga graf transaksi keuangan, semuanya mengandalkan struktur relasional untuk menghasilkan insight yang bermakna. Pemahaman ini selaras dengan tujuan pembelajaran pertemuan sebelumnya, yaitu membangun fondasi konseptual tentang bagaimana graph merepresentasikan entitas dan hubungannya. Dengan menyadari batasan asumsi independensi pada data tabular, kita siap untuk mendalami definisi formal, komponen dasar, serta berbagai tipe graph yang akan dibahas pada slide berikutnya.

Poin krusial yang perlu ditekankan adalah bahwa kegagalan mengasumsikan independensi pada data berstruktur graph akan menghasilkan model yang bias dan kurang akurat. Sebaliknya, memanfaatkan struktur relasional secara eksplisit memungkinkan ekstraksi pola tingkat tinggi seperti komunitas, jalur kritis, dan prediksi tautan yang tidak mungkin ditangkap oleh pendekatan tabular konvensional. Bagi peneliti jenjang magister, kemampuan membedakan kapan harus tetap menggunakan representasi tabular versus kapan harus beralih ke representasi graph merupakan langkah pertama dalam merumuskan research problem yang tepat dan memilih baseline metodologis yang valid.

### Inti yang Harus Ditekankan

- Paradigma data tabular mengasumsikan independensi antar observasi, sedangkan graph secara eksplisit memodelkan ketergantungan struktural antar entitas melalui edge.
- Relasi dalam graph bukan sekadar penghubung pasif, melainkan sumber informasi utama yang mendefinisikan dinamika, propagasi pengaruh, dan perilaku sistem.
- Pergeseran ke representasi relasional memerlukan perubahan mindset analitis dan pemilihan algoritma yang mampu menangkap dependensi topologis, bukan hanya fitur statis individual.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa struktur relasional begitu fundamental dan bagaimana ia mengubah asumsi dasar pemrosesan data, langkah selanjutnya adalah membedah komponen pembentuk graph secara formal. Mari kita lanjutkan ke definisi matematis, atribut node dan edge, serta klasifikasi tipe-tipe graph yang umum ditemui dalam riset data mining modern.

---

## Slide 004 - Representasi Graph: Node, Edge, dan Tipe

### Narasi

Setelah pada slide sebelumnya kita membahas pergeseran paradigma dari data tabular yang mengasumsikan independensi antar observasi ke dalam struktur relasional di mana hubungan justru menjadi sumber informasi utama, kini kita akan mendalami fondasi matematis dan komputasional dari graph itu sendiri. Dalam literatur data mining dan ilmu jaringan, sebuah graph secara formal dinotasikan sebagai $G = (V, E)$. Di sini, $V$ merepresentasikan himpunan node atau vertex yang dapat berupa entitas apa pun seperti pengguna, dokumen, molekul, atau sensor. Sementara itu, $E$ adalah himpunan edge atau sisi yang menghubungkan pasangan node tersebut, merepresentasikan relasi, interaksi, atau ketergantungan di antara mereka.

Salah satu kekuatan utama model graph terletak pada fleksibilitasnya dalam mengakomodasi atribut. Setiap node $v \in V$ dapat membawa fitur atau atribut tersendiri yang dilambangkan sebagai $X_v$, begitu pula setiap edge $e \in E$ dapat memiliki bobot atau metadata yang direpresentasikan sebagai $X_e$. Atribut ini memungkinkan kita menggabungkan informasi struktural (siapa terhubung dengan siapa) dengan informasi konten (bagaimana karakteristik entitas atau relasinya), yang merupakan langkah krusial sebelum masuk ke tahap ekstraksi pola atau pelatihan model pembelajaran mesin.

Memahami tipe-tipe graph sangat penting karena pemilihan representasi akan menentukan algoritma mining atau arsitektur neural network yang tepat. Berikut adalah klasifikasi umum yang perlu Anda pahami:
- **Undirected Graph**: Edge tidak memiliki arah, mencerminkan hubungan simetris seperti pertemanan di media sosial atau tautan dua arah antar situs web.
- **Directed Graph**: Edge memiliki arah, cocok untuk memodelkan hubungan asimetris seperti follower di Twitter, aliran lalu lintas, atau dependensi tugas.
- **Weighted Graph**: Setiap edge dilengkapi dengan nilai numerik (bobot) yang merepresentasikan kekuatan, frekuensi, atau jarak hubungan, misalnya jumlah transaksi keuangan atau intensitas komunikasi.
- **Multigraph**: Memungkinkan lebih dari satu edge yang menghubungkan pasangan node yang sama, berguna dalam konteks kompleks seperti jaringan transportasi dengan berbagai moda perjalanan antar kota.
- **Heterogeneous Graph**: Mengandung beberapa tipe node dan edge sekaligus, sangat umum di knowledge graph atau sistem rekomendasi di mana terdapat entitas berbeda seperti pengguna, produk, dan kategori yang saling berinteraksi.
- **Dynamic Graph**: Struktur node maupun edge berubah seiring waktu, menuntut pendekatan temporal untuk menangkap evolusi jaringan, seperti jejaring komunikasi seluler atau penyebaran wabah penyakit.

Pilihan tipe graph ini bukan sekadar definisi teoretis, melainkan直接影响 desain eksperimen penelitian Anda. Sebagai contoh, jika Anda meneliti dinamika opini publik, directed dan dynamic graph mungkin menjadi pilihan utama, sedangkan untuk analisis komunitas biologis, undirected weighted graph sering kali cukup memadai. Pada slide berikutnya, kita akan mengimplementasikan konsep-konsep abstrak ini ke dalam kode menggunakan library NetworkX di Python, serta mempelajari bagaimana graph direpresentasikan secara komputasional melalui adjacency list dan adjacency matrix yang siap diolah oleh algoritma machine learning.

### Inti yang Harus Ditekankan

- Notasi formal $G=(V,E)$ dan peran atribut node ($X_v$) serta edge ($X_e$) sebagai jembatan antara data konten dan topologi jaringan.
- Kesadaran metodologis bahwa tipe graph harus dipilih secara eksplisit berdasarkan sifat domain masalah dan hipotesis penelitian, bukan hanya kebiasaan.
- Representasi graph bersifat kontekstual; kesalahan memilih tipe graph dapat menyebabkan bias struktural, hilangnya informasi kausal, atau kegagalan validasi model dalam pipeline data mining.

### Transisi ke Slide Berikutnya

Dengan pemahaman teoritis tentang komponen dan tipe graph telah terbentuk, saatnya kita menerjemahkan konsep tersebut ke dalam praktik pemrograman. Mari kita lihat bagaimana NetworkX di Python menangani konstruksi graph, penambahan atribut, serta konversinya menjadi struktur data komputasional seperti adjacency matrix untuk keperluan analisis lebih lanjut.

---

## Slide 005 - Representasi Graph dengan NetworkX

### Narasi

Pada slide sebelumnya, kita telah membahas notasi matematis graph \(G = (V, E)\) beserta klasifikasinya berdasarkan arah, bobot, dan dinamika struktural. Langkah metodologis selanjutnya dalam riset data mining adalah menerjemahkan abstraksi teoretis tersebut ke dalam implementasi komputasional yang reproducible. Di ekosistem Python, **NetworkX** menjadi library standar de facto untuk membangun, memanipulasi, dan melakukan eksplorasi awal terhadap struktur graph. Perhatikan potongan kode berikut yang mendemonstrasikan inisialisasi graph tak berarah, penambahan himpunan node, serta pembentukan edge yang membentuk siklus tertutup.

```python
import networkx as nx

G = nx.Graph()
G.add_nodes_from([1, 2, 3, 4])
G.add_edges_from([(1, 2), (2, 3), (3, 4), (4, 1)])
```

Selain merepresentasikan topologi murni, NetworkX mendukung penyimpanan metadata secara native melalui struktur dictionary yang terikat pada objek node maupun edge. Penugasan atribut seperti `G.nodes[1]["label"] = "positif"` sangat krusial dalam pipeline machine learning, terutama ketika graph akan dipasangkan dengan fitur kontekstual untuk tugas seperti node classification atau link prediction. Untuk mengukur konektivitas lokal, pemanggilan `dict(G.degree())` menghasilkan output `{1: 2, 2: 2, 3: 2, 4: 2}`, yang secara matematis mengonfirmasi bahwa setiap vertex dalam contoh ini memiliki derajat dua, konsisten dengan struktur siklus yang dibangun.

Secara komputasional, terdapat dua representasi dasar yang mendominasi implementasi graph algorithm: **adjacency list** dan **adjacency matrix**. Adjacency list menyimpan graph dalam format `{node: [tetangga]}`, yang menawarkan efisiensi memori optimal untuk graph jarang (*sparse graph*) dan mempercepat operasi traversal. Sebaliknya, adjacency matrix merepresentasikan graph sebagai matriks berukuran \(N \times N\), di mana entri \(A[i][j] = 1\) menandakan keberadaan edge, dan \(0\) menandakan ketiadaan koneksi. Konversi otomatis ke format numerik dapat dilakukan menggunakan utilitas bawaan:

```python
import numpy as np
A = nx.to_numpy_array(G)
print(A)
```

Hasil eksekusi kode di atas akan menghasilkan matriks simetris karena tipe graph yang digunakan adalah `nx.Graph()` (undirected). Dalam konteks penelitian tingkat magister, keputusan memilih representasi adjacency list versus adjacency matrix bukanlah masalah preferensi sintaksis, melainkan pertimbangan strategis terkait kompleksitas ruang dan waktu. Matriks adjacency merupakan prasyarat untuk operasi aljabar linear seperti dekomposisi eigen, spectral clustering, atau propagasi pesan pada Graph Neural Networks (GNN). Sementara itu, adjacency list tetap menjadi pilihan utama untuk algoritma berbasis pencarian jalur seperti Breadth-First Search (BFS) atau algoritma deteksi komunitas berbasis label propagation pada dataset berskala besar.

### Inti yang Harus Ditekankan

- NetworkX berfungsi sebagai lingkungan prototipe yang ideal untuk validasi ide riset graph mining sebelum beralih ke framework berbasis C++/CUDA (seperti PyTorch Geometric atau DGL) untuk komputasi skala produksi.
- Pemilihan representasi komputasional harus didasarkan pada karakteristik sparsity dataset dan kebutuhan algoritma downstream: adjacency list untuk efisiensi memori dan traversal, adjacency matrix untuk operasi tensor dan aljabar linear.
- Atribusi node dan edge bukan sekadar pelengkap visual, melainkan komponen struktural yang menghubungkan topologi jaringan dengan vektor fitur kontekstual dalam model supervised/semi-supervised learning.
- Pemahaman mendalam tentang mekanisme representasi ini menjadi fondasi metodologis untuk merancang eksperimen yang adil, mengukur overhead komputasi, dan mengoptimalkan pipeline preprocessing sebelum tahap modeling.

### Transisi ke Slide Berikutnya

Setelah menguasai cara merepresentasikan graph secara teknis dan memahami trade-off komputasional antar representasi, kita perlu menyamakan persepsi terhadap terminologi fundamental yang akan menjadi pondasi seluruh perhitungan analitik lanjutan. Konsep seperti degree, path, connected component, neighbor, hingga self-loop bukan sekadar definisi teoretis, melainkan variabel kunci yang menentukan bagaimana informasi dan pengaruh mengalir dalam jaringan. Mari kita bedah satu per satu istilah-istilah tersebut, karena presisi pemahaman terhadapnya akan langsung berdampak pada perancangan metrik centrality, strategi community detection, akurasi link prediction, hingga konfigurasi layer pada arsitektur Graph Neural Networks.

---

## Slide 006 - Node dan Edge: Konsep Dasar

### Narasi

Setelah pada slide sebelumnya kita mempelajari cara merepresentasikan graph menggunakan library NetworkX melalui adjacency list maupun adjacency matrix, kini kita akan membedah fondasi terminologi yang menjadi bahasa dasar dalam seluruh materi pertemuan ini. Setiap algoritma pattern mining maupun arsitektur Graph Neural Networks yang akan kita diskusikan sangat bergantung pada pemahaman presisi terhadap konsep-konsep struktural ini. Tanpa penguasaan vocabulary graph theory yang tepat, perumusan research question dan pemilihan metode analisis akan kehilangan landasan yang kuat.

Berikut adalah penjelasan mendetail mengenai istilah-istilah kunci yang tercantum dalam tabel:
- **Degree** adalah jumlah edge yang terhubung langsung ke suatu node. Pada directed graph, konsep ini terbagi menjadi **In-degree** (jumlah edge yang mengarah masuk ke node) dan **Out-degree** (jumlah edge yang mengarah keluar).
- **Path** merujuk pada urutan node yang dihubungkan secara berurutan oleh serangkaian edge, yang menjadi dasar perhitungan jarak topologis dan shortest path algorithm.
- **Connected component** adalah subgraph maksimal di mana setiap pasang node di dalamnya masih memiliki jalur koneksi satu sama lain, berbeda dengan weakly/strongly connected components pada directed graph.
- **Neighbor** adalah node yang terhubung langsung tanpa melalui node perantara, yang menjadi unit fundamental dalam operasi message passing.
- **Self-loop** merupakan edge unik yang menghubungkan sebuah node kepada dirinya sendiri, sering kali muncul dalam data transaksi finansial atau interaksi sosial berulang.
- **Node attribute** mewakili fitur numerik, kategorikal, atau label kelas yang melekat pada node, sedangkan **Edge attribute** menyimpan metadata relasi seperti bobot, tipe koneksi, atau timestamp kejadian. Dalam implementasi Python, atribut ini umumnya dimanipulasi menggunakan dictionary pada objek NetworkX atau dikonversi menjadi tensor fitur (`x`) dan edge index (`edge_index`) pada framework deep learning.

Penguasaan terhadap konsep derajat dan komponen konektivitas ini secara langsung menjadi prasyarat metodologis untuk empat area penelitian utama dalam graph mining:
- **Centrality**: Mengukur tingkat kepentingan atau pengaruh relatif suatu node dalam jaringan berdasarkan struktur lokal maupun global.
- **Community Detection**: Mengidentifikasi kluster atau komunitas alami berdasarkan kepadatan koneksi internal dan sparsity antar komunitas.
- **Link Prediction**: Memperkirakan kemungkinan terbentuknya edge baru atau mendeteksi edge yang hilang berdasarkan kesamaan tetangga, path proximity, dan atribut node.
- **Desain Arsitektur GNN**: Menentukan mekanisme aggregation, normalization, dan pooling pada layer message-passing sesuai dengan distribusi degree dan heterogenitas struktur neighborhood dataset Anda.
Memahami hal ini akan memudahkan Anda ketika merancang eksperimen ablation study, melakukan hyperparameter tuning pada radius aggregation, atau melakukan error analysis pada model graph-based Anda. Pembahasan teknis mengenai bagaimana konsep-konsep ini dioperasionalkan menjadi metrik kuantitatif akan dilanjutkan pada slide berikutnya yang fokus pada berbagai jenis ukuran **centrality**.

### Inti yang Harus Ditekankan

- Terminologi node dan edge bukan hanya definisi teoritis, melainkan variabel struktural yang menentukan validitas pemilihan algoritma mining dan desain arsitektur GNN.
- Atribut node dan edge harus dipetakan secara eksplisit sebelum konversi ke representasi tensor, karena kualitas fitur ini langsung berdampak pada representational capacity model.
- Distribusi degree dan pola connected component menjadi indikator utama dalam exploratory graph analysis (EGA) untuk mendeteksi skewness, outlier struktural, atau kebutuhan sampling stratified.
- Pemahaman konsep ini adalah fondasi wajib sebelum masuk ke perhitungan centrality, community detection, link prediction, dan optimasi arsitektur GNN.

### Transisi ke Slide Berikutnya

Dengan memahami bagaimana degree, path, dan atribut struktural bekerja, kita siap beralih ke langkah operasional berikutnya: mengukur pengaruh relatif setiap node melalui berbagai pendekatan **centrality**, mulai dari degree centrality hingga PageRank, serta memilih metrik yang paling relevan dengan hipotesis penelitian Anda.

---

## Slide 007 - Centrality: Mengukur Kepentingan Node

### Narasi

Setelah pada slide sebelumnya kita membangun fondasi pemahaman mengenai node, edge, degree, path, dan connected component, kini kita beralih ke tahap analisis kuantitatif untuk mengkuantifikasi peran strategis setiap simpul dalam jaringan. Pertanyaan inti yang ingin dijawab oleh metrik centrality adalah menentukan node mana yang memiliki pengaruh, otoritas, atau posisi paling kritis berdasarkan struktur topologi graf. Pemilihan metrik ini tidak bersifat universal, melainkan harus diturunkan secara eksplisit dari research question yang diajukan dalam studi.

Terdapat lima pendekatan centrality utama yang sering diimplementasikan dalam pipeline data mining dan graph analytics. Degree centrality menghitung proporsi koneksi langsung suatu node terhadap total node lain (`deg(v) / (N-1)`), menjadikannya indikator paling sederhana untuk mengidentifikasi aktor dengan interaksi lokal terbanyak. Closeness centrality mengukur efisiensi jangkauan dengan mengambil kebalikan dari rata-rata jarak terpendek ke seluruh node lain, sehingga node dengan nilai tinggi mampu menyebarkan atau mengakses informasi ke seluruh jaringan secara cepat. Betweenness centrality menghitung frekuensi kemunculan suatu node sebagai jembatan di lintasan terpendek antar pasangan node (`Σ (σ_st(v) / σ_st)`), sangat efektif untuk mendeteksi broker, pengendali aliran data, atau titik rawan kegagalan jaringan. Eigenvector centrality melampaui koneksi langsung dengan prinsip rekursif bahwa sebuah node menjadi penting jika terhubung dengan node-node yang sudah memiliki nilai tinggi, yang secara matematis diselesaikan melalui eigenvector dari matriks adjacency. Terakhir, PageRank merepresentasikan variasi eigenvector yang menambahkan komponen random jump untuk mencegah akumulasi skor pada node tanpa incoming link, menjadikan metrik ini standar de facto untuk pengukuran pengaruh global dan ranking berbasis tautan.

Dalam konteks penelitian tingkat magister, eksekusi centrality harus disertai justifikasi metodologis yang kuat. Nilai centrality jarang digunakan hanya sebagai output deskriptif; lebih sering, skor tersebut diekstraksi sebagai fitur tambahan (feature engineering) untuk memperkuat model klasifikasi, regresi, atau clustering. Namun, perhitungan ini memerlukan kehati-hatian agar tidak terjadi data leakage saat proses train-test split, karena struktur graf biasanya bersifat statis dan seluruh node saling bergantung. Penyesuaian metrik harus konsisten dengan tujuan penelitian: gunakan degree untuk pemetaan influencer lokal, betweenness untuk analisis bottleneck atau kontrol aliran, dan PageRank/eigenvector untuk evaluasi reputasi atau otoritas jaringan secara holistik.

### Inti yang Harus Ditekankan

- Centrality bukan sekadar ukuran statistik, melainkan representasi operasional dari research question tentang struktur dan dinamika jaringan.
- Setiap jenis centrality menangkap aspek berbeda: degree (koneksi langsung), closeness (efisiensi jangkauan), betweenness (posisi jembatan/broker), eigenvector/PageRank (pengaruh bertingkat dan global).
- Implementasi centrality dalam pipeline machine learning harus mempertimbangkan validitas graf, konsistensi pembagian data, dan potensi data leakage saat ekstraksi fitur.
- Pemilihan metrik harus didokumentasikan secara transparan dalam metodologi penelitian untuk memastikan reproduktibilitas dan justifikasi ilmiah yang kuat.

### Transisi ke Slide Berikutnya

Untuk memperjelas bagaimana nilai-nilai teoritis ini diterjemahkan ke dalam interpretasi praktis, mari kita bedah contoh graf sederhana beserta perhitungan perkiraan centrality-nya, sekaligus melihat bagaimana skor tersebut dimanfaatkan sebagai fitur prediktif dalam eksperimen machine learning.

---

## Slide 008 - Centrality: Contoh dan Interpretasi

### Narasi

Mari kita terapkan definisi dan formula centrality dari slide sebelumnya pada contoh graf sederhana ini. Struktur graf terdiri dari empat node: A, B, C, dan D. Koneksinya membentuk pola tertutup di mana A terhubung ke B dan C, D juga terhubung ke B dan C, serta terdapat hubungan langsung antara B dan C. Dari konfigurasi ini, posisi topologis masing-masing node menghasilkan profil centrality yang berbeda-beda.

Berdasarkan tabel perkiraan, node C mendominasi dengan degree centrality tertinggi sebesar 3, sekaligus mencatat betweenness centrality tinggi. Hal ini disebabkan oleh posisi strategis C yang sering dilalui oleh lintasan terpendek antar node lain, menjadikannya penghubung kritis dalam jaringan. Sebaliknya, node B dan D memiliki degree lebih rendah dan betweenness rendah, yang mengindikasikan mereka berada di wilayah tepi struktur dan tidak berperan sebagai jembatan utama. Node A menempati posisi menengah dengan degree 2 dan betweenness sedang, mencerminkan ketergantungannya pada dua tetangga tanpa dominasi jalur lintas jaringan. Interpretasi ini menegaskan bahwa centrality bukan sekadar jumlah koneksi, melainkan ukuran peran fungsional node dalam dinamika aliran informasi atau pengaruh.

Dalam praktik penelitian data mining tingkat magister, nilai centrality jarang berhenti pada tahap analisis deskriptif. Metrik ini sangat umum diekstrak dan dijadikan fitur tambahan (feature engineering) pada model machine learning seperti klasifikasi node atau prediksi link. Namun, implementasinya menuntut disiplin metodologis yang ketat. Perhitungan centrality wajib dilakukan secara eksklusif pada subset training sebelum proses train-test split. Menghitung centrality menggunakan seluruh graf yang mencakup data uji akan menyebabkan data leakage, sehingga performa model yang dilaporkan menjadi artifisial dan tidak generalizable. Pastikan pula graf input memenuhi asumsi validitas struktural, misalnya bebas dari edge redundan yang tidak bermakna atau bobot yang bocor ke label target.

Secara garis besar, contoh ini mengajarkan kita untuk selalu mengaitkan pilihan metrik centrality dengan formulasi research question. Apakah fokus riset pada pencarian influencer lokal, identifikasi broker informasi, atau deteksi bottleneck jaringan? Jawaban tersebut akan menentukan apakah degree, betweenness, atau eigenvector centrality yang paling tepat, sekaligus mengingatkan pentingnya pipeline preprocessing graph yang terisolasi untuk menjaga integritas eksperimen.

### Inti yang Harus Ditekankan

- Centrality mengukur peran struktural node, bukan hanya jumlah koneksi; interpretasi harus disesuaikan dengan pertanyaan riset (lokal vs global vs jembatan).
- Nilai centrality sering dimanfaatkan sebagai fitur prediktif dalam model klasifikasi/regresi, namun perhitungan harus dilakukan secara ketat pada subset training untuk mencegah data leakage.
- Validitas graf dan isolasi pipeline preprocessing merupakan syarat mutlak agar hasil eksperimen data mining dapat dipertanggungjawabkan secara akademik dan reproduktibel.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana centrality mengidentifikasi node-node kunci dalam jaringan, langkah logis berikutnya adalah melihat pola makro: bagaimana node-node tersebut berkelompok membentuk komunitas yang padat secara internal. Pada slide selanjutnya, kita akan membahas community detection beserta metode utamanya seperti Girvan-Newman, Louvain, dan Label Propagation, serta cara menilai kualitas partisi menggunakan modularity.

---

## Slide 009 - Community Detection: Menemukan Kelompok dalam Graph

### Narasi

Setelah pada slide sebelumnya kita mengidentifikasi simpul-simpul penting melalui metrik centrality, fokus analitis kita bergeser dari level mikro ke level makro jaringan. Community detection atau deteksi komunitas bertujuan untuk mengungkap struktur tersembunyi dengan mengelompokkan node menjadi cluster yang memiliki kepadatan koneksi internal yang tinggi, sementara koneksi antar-komunitas relatif jarang. Dalam konteks penelitian data mining tingkat lanjut, pengelompokan ini bukan sekadar teknik visualisasi, melainkan fondasi struktural untuk memahami arsitektur relasional pada data graf, baik itu jaringan sosial, interaksi protein, maupun keterkaitan dokumen.

Secara metodologis, terdapat empat pendekatan utama yang sering diimplementasikan, masing-masing dengan mekanisme optimasi yang berbeda. Pertama, Girvan-Newman bekerja secara bottom-up dengan menghapus edge yang memiliki betweenness tertinggi secara iteratif hingga graf terfragmentasi menjadi komponen terpisah. Kedua, Louvain menggunakan strategi greedy yang terus-menerus menggabungkan node ke dalam komunitas yang secara lokal meningkatkan skor modularity, menjadikannya sangat populer untuk graf berskala besar. Ketiga, Label Propagation memanfaatkan dinamika penyebaran informasi di mana setiap node secara iteratif mengadopsi label komunitas yang paling dominan di antara tetangganya, sehingga berjalan sangat cepat tanpa memerlukan fungsi objektif eksplisit. Keempat, Spectral clustering mempartisi graf berdasarkan dekomposisi eigen dari matriks Laplacian, memberikan solusi berbasis aljabar linear yang stabil meskipun memiliki kompleksitas komputasi lebih tinggi.

Untuk menilai kualitas partisi yang dihasilkan oleh metode-metode tersebut, modularity (`Q`) menjadi standar industri. Secara matematis, modularity dihitung sebagai selisih antara fraksi edge yang benar-benar berada di dalam komunitas versus fraksi edge yang diharapkan muncul secara acak pada graf null model dengan distribusi derajat yang sama. Nilai `Q` berkisar antara `-1` hingga `1`. Dalam praktik empiris, nilai `Q > 0.3` sering dijadikan indikator awal bahwa struktur komunitas cukup signifikan, namun perlu ditekankan bahwa ambang batas ini bersifat heuristik dan sangat context-dependent. Pada graf yang sangat padat atau sangat sparse, interpretasi nilai modularity harus disesuaikan dengan karakteristik topologi domain masalah.

Bagi peneliti tingkat magister, pemilihan algoritma deteksi komunitas harus disertai justifikasi metodologis yang kuat. Algoritma greedy seperti Louvain rentan terhadap bias resolusi (resolution limit) yang cenderung menghasilkan komunitas terlalu besar atau terlalu kecil tergantung pada seed acak dan parameter densitas. Oleh karena itu, desain eksperimen yang robust mengharuskan perbandingan lintas metode, analisis sensitivitas terhadap parameter, dan validasi menggunakan lebih dari satu metrik evaluasi. Pemahaman mendalam tentang trade-off antara efisiensi komputasi dan akurasi struktural ini akan menjadi kunci ketika kita beralih ke implementasi praktis dan protokol evaluasi yang ketat.

### Inti yang Harus Ditekankan

- Community detection mengungkap struktur makro jaringan dengan memisahkan cluster padat internal dari koneksi eksternal yang jarang, melengkapinya dengan analisis mikro via centrality pada slide sebelumnya.
- Pemilihan algoritma harus didasarkan pada karakteristik graf dan tujuan penelitian: Girvan-Newman untuk interpretasi hierarkis, Louvain untuk skalabilitas, Label Propagation untuk kecepatan, dan Spectral Clustering untuk stabilitas matematis.
- Modularity (`Q > 0.3`) hanyalah patokan awal; peneliti wajib menyadari adanya resolution limit, menghindari over-reliance pada satu metrik, dan menerapkan analisis stabilitas seed/parameter demi validitas ilmiah.

### Transisi ke Slide Berikutnya

Memahami teori dan batasan modularity membawa kita ke tahap operasional. Pada slide berikutnya, kita akan melihat implementasi langsung menggunakan NetworkX, khususnya fungsi Louvain, serta mempelajari protokol evaluasi komprehensif yang mencakup metrik internal seperti conductance dan coverage, serta metrik eksternal seperti NMI dan Adjusted Rand Index untuk validasi terhadap ground truth.

---

## Slide 010 - Community Detection: Implementasi dan Evaluasi

### Narasi

Setelah pada slide sebelumnya kita membahas fondasi teoretis dan algoritma deteksi komunitas seperti Girvan-Newman, Label Propagation, hingga optimasi modularity, langkah selanjutnya adalah menerjemahkan konsep tersebut ke dalam implementasi praktis dan mengevaluasinya secara metodologis. Pada bagian ini, kita akan melihat contoh kode sederhana menggunakan library NetworkX untuk menjalankan Louvain Community Detection pada dataset klasik `karate_club_graph`. Baris `communities = nx.community.louvain_communities(G, seed=42)` menunjukkan praktik wajib dalam penelitian tingkat magister: penetapan `seed` yang tetap agar hasil eksperimen dapat direproduksi oleh reviewer atau peneliti lain. Loop `for i, comm in enumerate(communities):` kemudian digunakan untuk mengiterasi setiap cluster yang terbentuk dan mencetak jumlah node di dalamnya, memberikan gambaran awal tentang distribusi ukuran komunitas sebelum dilakukan analisis lebih lanjut.

Evaluasi kualitas partisi komunitas tidak boleh bergantung pada satu indikator tunggal. Tabel pada slide ini merangkum empat metrik evaluasi yang umum digunakan, dibagi menjadi dua kategori berdasarkan ketersediaan label referensi. Metrik internal seperti Modularity mengukur seberapa padat koneksi di dalam komunitas dibandingkan dengan baseline graf acak, Conductance menghitung proporsi edge yang memotong keluar dari komunitas (semakin kecil nilai conductance, semakin terisolasi dan kohesif komunitas tersebut), serta Coverage mengukur fraksi total edge yang berada sepenuhnya di dalam komunitas. Ketika dataset memiliki ground truth atau label manual, metrik eksternal seperti Normalized Mutual Information (NMI) dan Adjusted Rand Index (ARI) menjadi standar emas untuk mengukur kesesuaian partisi algoritmik dengan klasifikasi sebenarnya.

Untuk konteks penelitian skripsi atau tesis, penekanan utama terletak pada desain evaluasi yang robust. Menggunakan lebih dari satu metrik secara simultan membantu menghindari bias struktural yang mungkin muncul jika hanya mengandalkan modularity. Selain itu, analisis stabilitas terhadap variasi `seed` atau parameter hyperparameter harus dilakukan secara eksplisit. Fluktuasi hasil yang signifikan saat mengubah seed menandakan bahwa algoritma belum konvergen stabil, sehingga perlu penyesuaian strategi clustering atau preprocessing graf. Pendekatan multi-metric dan uji stabilitas ini merupakan ciri khas penelitian data mining tingkat lanjut yang menuntut transparansi dan validitas empiris yang kuat.

### Inti yang Harus Ditekankan

- Penetapan `seed` yang konsisten bukan sekadar praktik coding, melainkan prasyarat reproduktibilitas dalam riset ilmiah.
- Evaluasi komunitas memerlukan kombinasi metrik internal (struktur jaringan) dan eksternal (ground truth) untuk mendapatkan gambaran holistik.
- Analisis stabilitas terhadap seed dan parameter wajib disertakan dalam laporan penelitian untuk membuktikan konsistensi dan generalisasi model.

### Transisi ke Slide Berikutnya

Setelah berhasil mengidentifikasi struktur komunitas yang kohesif dalam sebuah graf, pertanyaan alami berikutnya adalah bagaimana memprediksi hubungan yang belum terbentuk atau hilang. Hal ini membawa kita secara natural ke topik link prediction, yang akan kita bedah pada slide berikutnya.

---

## Slide 011 - Link Prediction: Memprediksi Edge yang Hilang

### Narasi

Link prediction merupakan salah satu masalah inti dalam graph mining yang bertujuan untuk memperkirakan apakah sebuah edge akan terbentuk di masa depan atau memverifikasi keberadaan edge yang hilang dalam graf saat ini. Secara konseptual, tugas ini mengubah struktur graf parsial menjadi graf yang lebih lengkap dengan menilai probabilitas koneksi antar pasangan node. Aplikasi praktisnya sangat beragam dan menyentuh berbagai domain kritis. Pada jaringan sosial, algoritma ini menjadi fondasi sistem rekomendasi pertemanan atau kolaborasi profesional dengan mengidentifikasi pengguna yang memiliki hubungan kuat namun belum terhubung. Di bidang bioinformatika, link prediction digunakan untuk memprediksi interaksi obat-protein, sehingga mempercepat proses penemuan kandidat terapi baru. Dalam knowledge graph, teknik ini berperan sebagai mekanisme completion untuk mengisi relasi yang terlewat, meningkatkan kelengkapan semantik data. Selain itu, dalam analisis jaringan keuangan dan transaksi, pendekatan ini dimanfaatkan untuk mendeteksi pola fraud dengan mengidentifikasi koneksi tersembunyi antara entitas yang mencurigakan.

Dari sisi metodologis, terdapat empat kategori pendekatan utama yang dapat dipilih sesuai dengan karakteristik data dan tujuan penelitian. Pertama, similarity-based methods mengandalkan properti struktural lokal graf tanpa memerlukan pelatihan model. Algoritma seperti Common Neighbors, Jaccard Index, Adamic-Adar, dan Preferential Attachment menghitung skor berdasarkan jumlah tetangga bersama atau derajat node, menjadikannya solusi yang cepat dan efisien sebagai baseline kuat. Kedua, embedding-based techniques memetakan node ke ruang vektor berdimensi rendah menggunakan metode seperti Node2vec atau graph embedding lainnya. Probabilitas link kemudian diturunkan dari kesamaan vektor, memungkinkan model menangkap pola laten yang melampaui lingkungan tetangga terdekat. Ketiga, Graph Neural Networks (GNN) seperti GCN atau GraphSAGE memanfaatkan mekanisme message passing untuk belajar representasi node secara end-to-end, lalu menggabungkan representasi pasangan node untuk menghasilkan skor koneksi yang lebih diskriminatif. Keempat, pendekatan temporal secara eksplisit mengintegrasikan timestamp dan riwayat perubahan edge, menjadikan metode ini wajib dipertimbangkan ketika bekerja dengan graf dinamis yang evolusi koneksinya bergantung pada urutan waktu.

Menghubungkan dengan pembahasan sebelumnya mengenai community detection, kedua tugas ini memang beroperasi pada graf yang sama namun menjawab pertanyaan analitik yang berbeda. Jika community detection berfokus pada pengelompokan node secara makro berdasarkan kepadatan koneksi internal, link prediction bekerja pada tingkat pasangan node untuk mengestimasi keberadaan atau pembentukan edge spesifik. Dalam konteks penelitian magister, pemilihan pendekatan tidak boleh dilakukan secara arbitrer. Mahasiswa harus mampu menganalisis trade-off antara kompleksitas komputasi, skalabilitas dataset, ketersediaan ground truth, dan sifat statis atau dinamis dari graf sebelum memutuskan framework evaluasi yang tepat. Implementasi praktis dan protokol validasi metrik akan kita bedah secara mendalam pada slide berikutnya.

### Inti yang Harus Ditekankan

- Link prediction bukan sekadar pelengkap teknis, melainkan tugas prediktif fundamental yang menuntut pemahaman mendalam tentang topologi graf dan dinamika pembentukan koneksi.
- Empat paradigma pendekatan (similarity-based, embedding-based, GNN, temporal) masing-masing memiliki asumsi matematis, kompleksitas, dan cakupan representasi yang berbeda; pemilihan harus didasari oleh analisis karakteristik dataset dan research question.
- Dalam standar penelitian S2, baseline similarity-based wajib diimplementasikan terlebih dahulu sebelum beralih ke model pembelajaran mesin yang lebih kompleks, guna memastikan peningkatan performa benar-benar berasal dari kapasitas model, bukan bias preprocessing atau leakage data.

### Transisi ke Slide Berikutnya

Setelah memahami landasan teoretis dan klasifikasi pendekatan tersebut, kita akan langsung menerapkannya dalam kode menggunakan NetworkX, khususnya pada skenario similarity-based, sambil membahas protokol pembuatan edge negatif serta interpretasi metrik evaluasi seperti AUC, Average Precision, dan Precision@k untuk menjamin replikasi eksperimen yang ketat.

---

## Slide 012 - Link Prediction: Contoh dan Evaluasi

### Narasi

Setelah mengidentifikasi berbagai pendekatan dalam link prediction pada slide sebelumnya, langkah selanjutnya adalah menerjemahkan teori tersebut ke dalam implementasi kode yang konkret. Pada contoh yang ditampilkan, kita menggunakan library `networkx` untuk memanipulasi graf klub karate. Proses dimulai dengan memisahkan edge menjadi dua subset: set pelatihan (`G_train`) yang hanya menyimpan 40 edge pertama, dan sisa edge yang secara implisit berperan sebagai target evaluasi atau edge yang hilang. Untuk menerapkan pendekatan similarity-based, kode memanggil `nx.common_neighbors(G_train, 0, 33)` guna menghitung jumlah tetangga bersama antara node 0 dan node 33. Fungsi ini mengembalikan iterable yang berisi node-node yang berdekatan dengan kedua target tersebut, sehingga panjang hasilnya (`len(preds)`) mencerminkan kekuatan sinyal struktural lokal yang mendukung kemungkinan terbentuknya edge baru. Implementasi sederhana ini menjadi baseline fundamental sebelum kita beralih ke metode yang lebih kompleks.

Namun, skor kesamaan semata tidak cukup untuk menilai kualitas model dalam konteks penelitian. Evaluasi link prediction memerlukan metrik yang mampu menangkap aspek diskriminatif dan ranking secara bersamaan. Metrik AUC (Area Under the ROC Curve) menjadi tolok ukur utama untuk mengukur seberapa baik model memisahkan edge positif dari edge negatif tanpa bergantung pada threshold tertentu. Sementara itu, Average Precision (AP) memberikan bobot lebih besar pada peringkat atas, yang sangat relevan ketika kita hanya peduli pada prediksi paling confident. Untuk skenario rekomendasi praktis, Precision@k dan Hits@k mengevaluasi akurasi pada daftar top-k, sedangkan Recall@k mengukur cakupan atau seberapa banyak edge ground-truth yang berhasil terekstrak di antara prediksi terbaik tersebut. Kombinasi keempat metrik ini memberikan gambaran holistik tentang performa model.

Dalam praktik penelitian tingkat lanjut, aspek yang sering menentukan validitas eksperimen adalah protokol pembentukan edge negatif. Catatan penting pada slide ini menekankan bahwa pemilihan pasangan node negatif harus dilakukan secara sistematis dan didokumentasikan dengan rinci. Strategi sampling yang berbeda—misalnya memilih pasangan acak sepenuhnya, membatasi pada node dengan derajat rendah, atau menghindari pasangan yang sudah terhubung melalui path pendek—dapat mengubah distribusi label secara signifikan dan menggeser hasil evaluasi. Oleh karena itu, kejelasan metodologi dalam pembuatan edge negatif bukan hanya soal teknis, melainkan kewajiban akademis untuk menjamin reproduktibilitas eksperimen. Tanpa prosedur yang transparan, klaim kinerja model sulit dibandingkan secara fair antar studi.

Secara garis besar, slide ini menyoroti bahwa pipeline link prediction yang robust terdiri dari tiga pilar: implementasi fitur struktural yang tepat, evaluasi multidimensi yang sensitif terhadap konteks aplikasi, serta desain eksperimen yang ketat terkait sampling negatif. Penguasaan terhadap ketiga elemen ini mempersiapkan fondasi metodologis yang diperlukan sebelum kita memasuki representasi graf yang lebih abstrak dan powerful.

### Inti yang Harus Ditekankan

- Kode `common_neighbors` pada NetworkX berfungsi sebagai baseline similarity-based yang cepat dan interpretable, namun skalabilitasnya terbatas pada graf kecil hingga menengah.
- Pemilihan metrik evaluasi harus selaras dengan tujuan aplikasi: AUC/AP untuk penilaian ranking global, sedangkan Precision@k/Recall@k untuk kebutuhan rekomendasi top-N.
- Reproduksi eksperimen sangat bergantung pada dokumentasi strategi pembentukan edge negatif; variasi sampling dapat mengubah distribusi data dan kesimpulan penelitian secara drastis.
- Evaluasi yang rigor dan transparansi metodologis merupakan standar wajib dalam publikasi data mining tingkat internasional.

### Transisi ke Slide Berikutnya

Dengan memahami cara mengevaluasi pendekatan berbasis similarity, kita kini siap melangkah ke representasi yang lebih kaya. Slide berikutnya akan membahas graph embedding, teknik yang memetakan struktur diskrit graf ke ruang vektor kontinu berdimensi rendah, sehingga membuka pintu bagi integrasi dengan algoritma machine learning standar maupun arsitektur Graph Neural Networks.

---

## Slide 013 - Graph Embedding: Representasi Low-Dimensional

### Narasi

Pada slide ini, kita membahas konsep fundamental dalam pengolahan data berbasis graf, yaitu Graph Embedding. Secara esensial, teknik ini bertujuan untuk memetakan entitas dalam graf—baik itu node, edge, maupun keseluruhan graf—ke dalam ruang vektor berdimensi rendah. Proses transformasi ini dapat direpresentasikan sebagai fungsi pemetaan $f$ yang mengubah struktur diskrit menjadi representasi kontinu $z \in \mathbb{R}^d$. Dengan menurunkan dimensi representasi, kita berhasil mengompresi informasi topologi dan relasional graf ke dalam bentuk numerik yang padat, sehingga kompatibel dengan pipeline machine learning konvensional yang memerlukan input vektor fitur.

Motivasi penerapan graph embedding sangat krusial dalam konteks penelitian data mining tingkat lanjut. Pertama, metode ini menjembatani kesenjangan antara data graf yang bersifat non-Euclidean dengan algoritma machine learning standar yang umumnya mengharapkan representasi vektor numerik. Kedua, embedding mampu menangkap pola struktur, kedekatan semantik, dan properti lokal maupun global secara efisien, menghindari masalah curse of dimensionality yang sering muncul pada matriks adjacency yang sangat jarang (sparse). Ketiga, hasil embedding ini dapat langsung diintegrasikan sebagai fitur masukan untuk berbagai tugas downstream, seperti klasifikasi node, clustering komunitas, atau melanjutkan evaluasi link prediction yang telah kita uji metriknya pada slide sebelumnya.

Penting untuk dipahami bahwa graph embedding tidak bersifat monolitik, melainkan dikategorikan berdasarkan level abstraksi yang dipilih sesuai dengan granularity research question Anda. Terdapat tiga tingkatan utama:
- **Node Embedding**: Menghasilkan satu vektor unik untuk setiap node. Metode seperti DeepWalk, node2vec, dan arsitektur GCN beroperasi pada level ini, cocok untuk tugas prediksi atribut node atau rekomendasi teman.
- **Edge Embedding**: Difokuskan pada representasi hubungan antar node. Vektor edge umumnya diturunkan dari kombinasi dua vektor node yang terhubung melalui operasi seperti perkalian Hadamard atau concatenation, sering dipakai dalam link prediction.
- **Graph Embedding**: Digunakan ketika unit analisisnya adalah seluruh graf. Teknik seperti graph2vec, diffpool, atau mean pooling merangkum seluruh struktur menjadi satu vektor tunggal, ideal untuk klasifikasi molekul atau pengelompokan jaringan sosial.

Konsep ini berfungsi sebagai jembatan konseptual yang vital menuju pembahasan Graph Neural Networks (GNN). Meskipun pendekatan tradisional dan metode berbasis pooling sudah berhasil menghasilkan embedding, prosesnya sering kali bersifat generatif dan terpisah dari tugas akhir. Di sinilah GNN menawarkan evolusi metodologis: GNN juga menghasilkan embedding untuk node atau graph, namun pembelajaran representasinya dilakukan secara end-to-end. Optimasi bobot model terjadi secara simultan dengan meminimalkan loss function dari tugas spesifik, sehingga representasi yang dihasilkan jauh lebih adaptif, kontekstual, dan secara empiris terbukti superior dalam berbagai benchmark penelitian.

### Inti yang Harus Ditekankan

- Graph embedding mentransformasi struktur diskrit dan non-Euclidean menjadi representasi vektor kontinu berdimensi rendah ($z \in \mathbb{R}^d$) agar dapat diproses oleh algoritma machine learning standar tanpa kehilangan informasi struktural kunci.
- Pemilihan level embedding (node, edge, atau graph) harus didasarkan pada granularity masalah penelitian; setiap level memiliki karakteristik metode dan use case yang berbeda, mulai dari DeepWalk hingga diffpool.
- Graph embedding merupakan fondasi transisional menuju GNN; perbedaan metodologis utamanya terletak pada mekanisme pelatihan: metode tradisional bersifat statis/transductive, sedangkan GNN mengoptimalkan embedding secara end-to-end terikat langsung pada tugas prediksi akhir.

### Transisi ke Slide Berikutnya

Setelah memahami kerangka dasar dan level-level representasi ini, langkah selanjutnya adalah mendalami implementasi konkret dari node embedding melalui DeepWalk dan node2vec. Kita akan menganalisis mekanisme random walk, peran parameter pencarian $p$ dan $q$, serta mengidentifikasi keterbatasan inheren metode tersebut yang secara natural menjadi motivasi kuat untuk beralih ke arsitektur GNN yang akan kita bedah lebih lanjut.

---

## Slide 014 - Node Embedding: DeepWalk dan node2vec

### Narasi

Setelah pada slide sebelumnya kita membahas konsep dasar pemetaan graph ke ruang vektor berdimensi rendah, slide ini secara spesifik mengupas dua algoritma foundational dalam node embedding: DeepWalk dan node2vec. DeepWalk memperkenalkan pendekatan yang sangat inovatif dengan meminjam paradigma dari Natural Language Processing. Metode ini melakukan random walk berulang kali pada graph untuk menghasilkan sekuen node. Sekuen tersebut kemudian diperlakukan layaknya kalimat, di mana setiap node berperan sebagai kata. Dengan menerapkan arsitektur skip-gram dari word2vec, DeepWalk mempelajari embedding node berdasarkan ko-kurasi mereka dalam walk tersebut. Pendekatan ini memungkinkan ekstraksi representasi padat yang secara tidak langsung menangkap pola konektivitas lokal dan struktur komunitas tanpa memerlukan label supervisi.

Namun, random walk seragam pada DeepWalk memiliki keterbatasan dalam mengeksplorasi topologi graph secara optimal. node2vec hadir sebagai pengembangan signifikan dengan memperkenalkan dua hyperparameter strategis, yaitu `p` dan `q`, yang memberikan kendali presisi atas strategi penjelajahan. Parameter `p` mengontrol probabilitas kembalinya walk ke node asal sebelum melangkah lebih jauh. Ketika `p` bernilai besar, algoritma cenderung menghindari pengembalian segera sehingga fokus pada tetangga terdekat, meniru perilaku Breadth-First Search (BFS) yang ideal untuk menangkap struktur lokal dan kluster rapat. Sebaliknya, parameter `q` mengatur keseimbangan antara penjelajahan mendalam dan luas. Nilai `q` yang besar mendorong walk untuk menjauhi titik awal, meniru Depth-First Search (DFS), yang efektif dalam menangkap struktur global atau jalur panjang antar komunitas. Dengan tuning `p` dan `q`, peneliti dapat menyesuaikan representasi node agar selaras dengan karakteristik graph dan tujuan analisis.

Meskipun robust, metode berbasis random walk ini memiliki batasan metodologis yang perlu dipertimbangkan dalam desain penelitian tingkat magister. Pertama, kedua metode bersifat transductive, artinya embedding hanya dipelajari untuk node yang hadir selama fase training. Adanya node baru atau perubahan dinamika graph mengharuskan pelatihan ulang atau mekanisme incremental learning yang kompleks, sehingga kurang cocok untuk graph yang terus berkembang. Kedua, DeepWalk dan node2vec murni mengandalkan topologi graph dan tidak secara native mengintegrasikan atribut atau fitur node; integrasi atribut biasanya memerlukan concatenation manual atau arsitektur hibrida. Ketiga, representasi yang dihasilkan diperoleh melalui pembelajaran tanpa pengawasan dan tidak dioptimalkan secara langsung terhadap tugas akhir seperti klasifikasi node atau link prediction. Keterbatasan struktural dan optimisasi ini menjadi motivasi kuat untuk beralih ke Graph Neural Networks (GNN), yang mampu menggabungkan struktur, atribut, dan fungsi loss tugas akhir dalam satu kerangka end-to-end.

### Inti yang Harus Ditekankan

- DeepWalk mentransformasi masalah graph menjadi masalah NLP via random walk + skip-gram, sementara node2vec menambahkan fleksibilitas eksplorasi melalui parameter `p` (fokus lokal/BFS) dan `q` (fokus global/DFS).
- Pemilihan nilai `p` dan `q` bukan sekadar tuning teknis, melainkan keputusan konseptual yang menentukan apakah representasi node lebih menekankan struktur mikro atau makro.
- Keterbatasan fundamental: sifat transductive, ketiadaan integrasi native atribut node, dan optimisasi yang terpisah dari downstream task, yang secara alami membuka celah penelitian menuju arsitektur GNN modern.

### Transisi ke Slide Berikutnya

Representasi node yang dihasilkan oleh DeepWalk dan node2vec bersifat individual dan belum menjawab kebutuhan tugas yang melibatkan graph secara utuh. Untuk melanjutkan pembahasan, kita akan beralih ke bagaimana kumpulan embedding node tersebut diagregasi menjadi satu vektor representasi graph, mencakup teknik pooling sederhana hingga pendekatan differentiable seperti DiffPool yang mendukung klasifikasi graph secara end-to-end.

---

## Slide 015 - Graph Embedding: Dari Node ke Keseluruhan Graph

### Narasi

Setelah mendalami node embedding melalui algoritma seperti DeepWalk dan node2vec pada slide sebelumnya, kita kini menghadapi tantangan representasi yang lebih makro: klasifikasi seluruh graph. Berbeda dengan tugas prediksi node atau link prediction yang tetap mempertahankan granularitas per simpul, klasifikasi graph menuntut satu vektor representasi tunggal yang mampu merangkum karakteristik struktural dan atribut dari keseluruhan graf. Aplikasi nyata dari paradigma ini sangat krusial dalam domain sains komputasi, misalnya dalam drug discovery untuk memprediksi apakah suatu senyawa molekul bersifat aktif atau tidak aktif terhadap target biologis tertentu.

Untuk menghasilkan representasi graph-level tersebut, terdapat empat pendekatan utama yang lazim digunakan dalam literatur data mining modern. Pertama, **graph2vec**, yang mengadaptasi kerangka kerja NLP dengan memperlakukan setiap subgraph sebagai dokumen dan kumpulan graph sebagai korpus, sehingga model dapat mengekstrak distribusi topik struktural secara unsupervised. Kedua, teknik **Pooling**, yang secara eksplisit menggabungkan embedding individual node menjadi satu vektor graph melalui operasi agregasi. Ketiga, **DiffPool** (Differentiable Pooling), yang merevolusi konsep pooling tradisional dengan membuat proses pengelompokan node dipelajari secara end-to-end melalui backpropagation, memungkinkan model membangun hierarki abstraksi graph secara adaptif. Keempat, **Graph kernel**, yang berfungsi sebagai alternatif non-neural berbasis perhitungan kesamaan matriks atau jalur terstruktur, masih sangat relevan digunakan saat volume data training terbatas atau ketika kebutuhan interpretabilitas matematis menjadi prioritas.

Pada implementasi paling fundamental, pooling sederhana mengandalkan operasi agregasi statistik terhadap himpunan embedding node, sebagaimana ditunjukkan oleh formulasi berikut:
```text
z_G = MEAN({ h_v | v ∈ V })
z_G = MAX({ h_v | v ∈ V })
```
Di sini, $h_v$ merepresentasikan embedding node ke-$v$, dan $V$ adalah himpunan seluruh node dalam graph. Operasi MEIN menghasilkan representasi rata-rata yang robust terhadap noise dan outlier, sementara MAX menangkap fitur paling dominan atau kritis dari graph tersebut. Meskipun mekanismenya statis, kedua formula ini sering dijadikan baseline kuat dalam eksperimen komparatif karena kompleksitas komputasinya yang rendah dan stabilitas konvergensi yang baik.

Dalam ekosistem deep learning terkini, mekanisme readout atau pooling ini jarang dibiarkan statis. Arsitektur GNN modern dirancang untuk melatih lapisan readout secara differentiable bersamaan dengan lapisan propagasi pesan. Artinya, bobot agregasi dan fungsi pooling akan dioptimalkan secara langsung berdasarkan loss function tugas akhir (misalnya cross-entropy untuk klasifikasi graph). Pendekatan ini secara langsung menjawab keterbatasan metode generatif sebelumnya yang bersifat transductive dan task-agnostic, karena representasi graph yang dihasilkan sekarang benar-benar teroptimasi dan kontekstual terhadap tujuan prediktif spesifik.

### Inti yang Harus Ditekankan

- Klasifikasi graph memerlukan agregasi embedding node menjadi satu vektor global ($z_G$) yang merepresentasikan seluruh struktur dan fitur graf.
- Pemilihan strategi pooling (statistik sederhana vs differentiable seperti DiffPool) berdampak signifikan terhadap kemampuan model menangkap pola hirarkis dan skalabilitas pada graph besar.
- Pelatihan readout secara end-to-end bersama arsitektur neural menjamin representasi graph teroptimasi untuk tugas spesifik, mengatasi kelemahan metode berbasis random walk yang bersifat generatif dan transductive.

### Transisi ke Slide Berikutnya

Dengan memahami bagaimana representasi graph dibangun secara global, langkah logis berikutnya adalah mengeksplorasi arsitektur inti yang memungkinkan agregasi ini terjadi secara dinamis dan kontekstual, yaitu Graph Neural Networks yang bekerja melalui mekanisme message passing.

---

## Slide 016 - Pengantar Graph Neural Networks

### Narasi

Setelah pada slide sebelumnya membahas berbagai strategi untuk mereduksi representasi node menjadi vektor tunggal guna klasifikasi graph, kita kini memasuki fondasi arsitektural yang memungkinkan proses representasi tersebut, yaitu Graph Neural Networks atau GNN. Secara definisi, GNN merupakan keluarga model jaringan saraf tiruan yang dirancang khusus untuk beroperasi langsung pada data berbentuk graph. Berbeda dengan arsitektur deep learning konvensional yang mengasumsikan struktur Euclidean seperti grid gambar atau sekuensial teks, GNN mengakomodasi hubungan non-Euclidean antar entitas melalui mekanisme pembelajaran yang terstruktur pada topologi graf itu sendiri.

Pergeseran paradigma menuju GNN didorong oleh keterbatasan metode embedding tradisional. Algoritma seperti node2vec atau DeepWalk memang efektif mengekstrak pola jalur random walk, namun mereka tidak memanfaatkan atribut atau fitur bawaan dari setiap node. Dalam konteks penelitian data mining tingkat lanjut, mengabaikan fitur node berarti membuang sinyal prediktif yang sangat berharga, terutama pada domain seperti bioinformatika, analisis jaringan sosial, atau sistem rekomendasi. GNN menutup celah ini dengan secara simultan mempelajari representasi yang mengintegrasikan dua sumber informasi utama: struktur graph dan fitur node. Integrasi ganda ini memberikan fleksibilitas tinggi, sehingga GNN dapat dilatih secara end-to-end untuk beragam tugas spesifik, mulai dari klasifikasi node individual, prediksi keberadaan edge (link prediction), hingga klasifikasi seluruh graph.

Ide dasar operasional GNN dapat dipahami melalui konsep pembaruan representasi berbasis tetangga. Setiap node tidak bekerja secara isolasi; ia secara iteratif memperbarui vektor representasinya dengan mengumpulkan dan memproses informasi dari node-node yang terhubung secara langsung. Proses ini divisualisasikan dalam alur di mana input awal berupa graph beserta fitur fiturnya diproses oleh satu atau lebih lapisan GNN. Hasil akhir dari lapisan ini adalah embedding node yang telah menjadi kontekstual, artinya representasi tersebut sudah menyatu dengan informasi lingkungan strukturalnya. Alur ini kemudian diteruskan ke head output untuk menghasilkan prediksi sesuai tugas yang ditargetkan. Seluruh mekanisme pembaruan representasi ini berjalan melalui prinsip fundamental yang dikenal sebagai message passing, yang akan kita bedah secara matematis pada pembahasan teknis berikutnya.

### Inti yang Harus Ditekankan

- GNN adalah arsitektur yang secara native dirancang untuk data non-Euclidean (graph), berbeda dengan CNN/RNN yang memerlukan transformasi struktur terlebih dahulu.
- Keunggulan kompetitif GNN terletak pada kemampuannya menggabungkan struktur graph dan atribut node secara simultan, sesuatu yang tidak mampu dilakukan embedding tradisional seperti node2vec.
- Mekanisme inti GNN adalah pembaruan representasi node berdasarkan informasi tetangga melalui proses message passing, yang menjadikannya fleksibel untuk tugas node-level, edge-level, dan graph-level.
- Dari perspektif penelitian, pemahaman konseptual ini menjadi baseline kritis sebelum merancang eksperimen ablation study untuk mengukur kontribusi struktur versus fitur, atau menganalisis efek kedalaman lapisan terhadap over-smoothing.

### Transisi ke Slide Berikutnya

Konsep pembaruan representasi berbasis tetangga ini sebenarnya adalah implementasi intuitif dari sebuah mekanisme komputasi yang lebih rigor. Pada slide berikutnya, kita akan menguraikan formulasi matematis formal dari message passing, mengurai tiga komponennya secara eksplisit, serta menganalisis bagaimana jumlah lapisan mempengaruhi radius konteks yang dapat diakses oleh setiap node.

---

## Slide 017 - Message Passing: Inti GNN

### Narasi

Berlanjut dari konsep dasar bahwa node memperbarui representasinya berdasarkan lingkungan sekitarnya, slide ini menguraikan mekanisme fundamental yang menjadi tulang punggung seluruh arsitektur Graph Neural Networks, yaitu Message Passing. Secara matematis, pembaruan representasi node $v$ pada lapisan ke-$l$ dinyatakan dengan rumus $h_v^{(l+1)} = UPDATE(h_v^{(l)}, AGG(\{h_u^{(l)} | u \in N(v)\}))$. Persamaan ini menegaskan bahwa embedding baru dihasilkan melalui dua operasi berurutan: pertama, mengumpulkan fitur dari semua node tetangga $u$ dalam himpunan lingkungan $N(v)$ melalui fungsi agregasi, dan kedua, menggabungkan hasil agregasi tersebut dengan representasi awal node $v$ itu sendiri melalui fungsi update. Proses ini terjadi secara paralel untuk setiap node dalam graf, memungkinkan pembelajaran representasi yang bersifat lokal namun kontekstual.

Mekanisme message passing dapat diurai menjadi tiga komponen fungsional yang harus dirancang secara eksplisit. Komponen pertama adalah Message, yang bertugas mentransformasi fitur tetangga menjadi sinyal yang siap dikirim, umumnya melalui operasi linear seperti perkalian matriks bobot $W h_u$. Komponen kedua adalah Aggregation, yang berfungsi menyatukan semua pesan dari tetangga menjadi satu vektor tunggal $m_v$. Pilihan operasi agregasi seperti sum, mean, atau max pooling sangat bergantung pada sifat topologi graf dan apakah model perlu mempertahankan skala magnitudo fitur atau hanya fokus pada pola keberadaan. Komponen ketiga adalah Update, yang menerima representasi lama node $h_v^{(l)}$ bersama pesan teragregat $m_v$, lalu memprosesnya melalui kombinasi linear dan fungsi aktivasi non-linear $\sigma$ untuk menghasilkan embedding baru $h_v'$. Ilustrasi pada slide menunjukkan aliran data searah dari tetangga menuju node pusat, kemudian melalui agregasi, dan berakhir pada pembaruan representasi.

Aspek krusial lain yang perlu diperhatikan adalah hubungan antara kedalaman jaringan dan jangkauan konteks. Setiap lapisan GNN memperluas receptive field node; pada lapisan pertama, node hanya mengakses informasi satu-hop tetangga. Ketika informasi diteruskan ke lapisan kedua dan ketiga, setiap node secara efektif mulai mengintegrasikan struktur hingga dua-hop atau tiga-hop. Peningkatan kedalaman ini meningkatkan kapasitas model untuk menangkap pola global, namun juga memperkenalkan risiko over-smoothing di mana representasi node menjadi terlalu homogen sehingga kehilangan diskriminasi struktural. Oleh karena itu, pemilihan jumlah lapisan harus didasarkan pada analisis radius konektivitas dataset dan strategi regularisasi yang tepat.

Pemahaman terhadap kerangka message passing ini menjadi prasyarat penting sebelum mengevaluasi arsitektur spesifik seperti Graph Convolutional Networks (GCN) pada slide berikutnya. GCN sebenarnya merupakan kasus khusus dari formulasi umum ini, dengan memilih fungsi agregasi berbasis normalisasi derajat dan self-loop adjacency. Mahasiswa tingkat magister diharapkan tidak hanya menghafal formula, tetapi mampu menganalisis mengapa komponen tertentu dipilih, bagaimana dampaknya terhadap stabilitas gradien, dan kapan modifikasi pada fungsi aggregation atau update diperlukan untuk menjawab research question yang lebih kompleks.

### Inti yang Harus Ditekankan

- Rumus message passing $h_v^{(l+1)} = UPDATE(h_v^{(l)}, AGG(\{h_u^{(l)} | u \in N(v)\}))$ adalah abstraksi universal yang mencakup hampir semua varian GNN modern.
- Tiga komponen (Message, Aggregation, Update) bersifat modular; perubahan pada salah satu komponen secara langsung mengubah kapasitas representasi dan perilaku optimasi model.
- Kedalaman lapisan GNN berbanding lurus dengan radius konteks (receptive field), namun memerlukan penanganan over-smoothing dan vanishing gradient melalui desain arsitektur yang matang.
- Fleksibilitas kerangka message passing memungkinkan peneliti merancang custom GNN yang disesuaikan dengan karakteristik domain spesifik, menjadikannya landasan metodologis untuk penelitian tingkat S2.

### Transisi ke Slide Berikutnya

Dengan memahami bagaimana pesan dialirkan dan digabungkan dalam kerangka umum message passing, kita kini akan menurunkan salah satu instantiasi paling berpengaruh, yaitu Graph Convolutional Networks (GCN), yang menerapkan normalisasi simetris dan self-loop sebagai solusi praktis terhadap masalah skalabilitas dan stabilitas numerik pada graf nyata.

---

## Slide 018 - GCN: Graph Convolutional Networks

### Narasi

Melanjutkan pembahasan tentang mekanisme message passing pada slide sebelumnya, kita kini masuk ke spesifikasi matematis yang paling dasar namun paling berpengaruh dalam keluarga Graph Neural Network, yaitu Graph Convolutional Network atau GCN. Jika slide 17 menyajikan kerangka umum pembaruan node melalui fungsi AGGREGATE dan UPDATE, GCN mengkonkretkan kedua komponen tersebut menjadi operasi matriks yang efisien dan dapat diskalakan. Representasi node pada lapisan berikutnya, $H^{(l+1)}$, dihitung menggunakan persamaan $H^{(l+1)} = \sigma(\tilde{D}^{-1/2} \tilde{A} \tilde{D}^{-1/2} H^{(l)} W^{(l)})$. Di sini, $\tilde{A}$ merepresentasikan matriks adjacency yang telah dimodifikasi dengan penambahan self-loop, yaitu $A + I$. Penambahan self-loop ini bukan sekadar formalitas, melainkan kebutuhan struktural agar setiap node tetap mempertahankan identitas dan fitur aslinya selama proses propagasi, mencegah hilangnya informasi lokal akibat rata-rata atau penjumlahan murni dari tetangga.

Matriks $\tilde{D}$ adalah matriks derajat yang dihitung dari $\tilde{A}$, yang kemudian digunakan bersama invers akar kuadratnya untuk melakukan normalisasi simetris. Normalisasi ini berperan sebagai pengaman numerik yang sangat vital. Tanpa pembagian oleh $\tilde{D}^{-1/2}$, node dengan derajat tinggi akan mengakumulasi pesan dari puluhan atau ratusan tetangga sekaligus, yang berpotensi menyebabkan nilai embedding meledak secara eksponensial atau mengalami gradient explosion saat backpropagation. Dengan normalisasi simetris, kontribusi setiap tetangga diseimbangkan berdasarkan konektivitas global graf, sehingga representasi tetap stabil dan interpretable.

Setelah bagian topologi dinormalisasi, hasil perkalian matriks tersebut dikalikan dengan $H^{(l)}$ yang berisi fitur input atau embedding dari lapisan sebelumnya, lalu diproyeksikan melalui matriks bobot learnable $W^{(l)}$. Tahap terakhir adalah penerapan fungsi aktivasi $\sigma$ secara element-wise untuk memperkenalkan non-linearitas, memungkinkan model mempelajari pola yang lebih kompleks daripada sekadar transformasi linear. Secara intuitif, setiap lapisan GCN melakukan pencampuran fitur lokal node dengan konteks tetangganya, sehingga kedalaman jaringan secara langsung menentukan radius receptive field atau jangkauan informasi yang dapat diakses oleh setiap node.

Dalam perspektif penelitian data mining tingkat magister, poin krusial yang perlu ditanamkan adalah bahwa GCN, meski terlihat sederhana, merupakan baseline yang sangat robust untuk tugas node classification. Sebelum merancang arsitektur modifikasi seperti graph attention, higher-order aggregation, atau adaptive normalization, peneliti wajib mengevaluasi performa terhadap GCN standar. Validasi ini memastikan bahwa peningkatan metrik yang dilaporkan benar-benar berasal dari inovasi struktural yang signifikan, bukan akibat konfigurasi hyperparameter yang bias atau overfitting terhadap subset data tertentu.

### Inti yang Harus Ditekankan

- Formula GCN merupakan realisasi konkret dari framework message passing umum, di mana agregasi topologi dan transformasi fitur digabung dalam satu operasi matriks linear yang dinormalisasi.
- Self-loop ($\tilde{A} = A + I$) dan normalisasi simetris ($\tilde{D}^{-1/2} \tilde{A} \tilde{D}^{-1/2}$) adalah dua pilar matematis yang menjaga stabilitas numerik, mencegah eksplosi gradien, dan mempertahankan integritas informasi node selama propagasi.
- GCN standar harus selalu dijadikan baseline eksperimen dalam penelitian node classification untuk memastikan validitas komparatif metrik dan menghindari klaim inovasi yang tidak berdasar secara metodologis.

### Transisi ke Slide Berikutnya

Setelah fondasi matematis dan interpretasi teoritis GCN terpahami, langkah logis selanjutnya adalah menerjemahkan persamaan tersebut ke dalam implementasi kode yang fungsional. Pada slide berikutnya, kita akan membedah bagaimana lapisan GCN dibangun menggunakan PyTorch, mulai dari inisialisasi bobot, forward pass melalui perkalian matriks, hingga strategi penanganan train-validation split untuk menghitung normalisasi adjacency secara konsisten tanpa data leakage.

---

## Slide 019 - GCN: Implementasi Singkat

### Narasi

Pada slide sebelumnya, kita telah menguraikan formulasi matematis lapisan Graph Convolutional Network (GCN) beserta interpretasi normalisasi simetris dan penambahan self-loop. Kini, kita beralih ke terjemahan praktis rumus tersebut ke dalam kode PyTorch. Implementasi yang disajikan pada slide ini dirancang secara modular untuk memudahkan pemahaman mekanisme propagasi pesan, sekaligus menjadi referensi dasar sebelum mengintegrasikan GCN ke dalam framework graph neural networks seperti PyTorch Geometric atau DGL yang lebih optimal untuk graf berskala besar.

Mari kita analisis kelas `GCNLayer`. Kelas ini mewarisi `nn.Module` dan menerima parameter `in_dim` serta `out_dim`. Di dalam konstruktor, `self.W = nn.Linear(in_dim, out_dim)` merepresentasikan matriks bobot $W^{(l)}$ yang mengubah ruang fitur asli menjadi embedding latent. Pada metode `forward`, argumen `H` adalah matriks fitur node saat ini, sedangkan `A_norm` merupakan matriks adjacency yang telah dinormalisasi secara simetris ($\tilde{D}^{-1/2}\tilde{A}\tilde{D}^{-1/2}$) dan dihitung di luar loop pelatihan. Urutan operasi `A_norm @ self.W(H)` mengikuti aljabar linear GCN: pertama, fitur setiap node ditransformasi secara independen oleh $W^{(l)}$, kemudian dikalikan dengan matriks normalisasi adjacency untuk melakukan agregasi terbobot dari tetangga. Hasilnya diproyeksikan melalui `torch.relu`, yang berperan sebagai fungsi aktivasi $\sigma$ pada formulasi teoretis, memberikan non-linearitas dan membantu mitigasi vanishing gradient.

Untuk membangun arsitektur berlapis, slide ini menampilkan contoh jaringan dua lapis melalui kelas `GCN`. Inisialisasi menciptakan dua instance `GCNLayer`: lapisan pertama memetakan fitur input ke dimensi tersembunyi, sementara lapisan kedua memetakannya ke jumlah kelas target. Aliran `forward` menyalurkan output lapisan pertama sebagai input ke lapisan kedua. Perlu dicatat bahwa dalam praktik klasifikasi node standar, lapisan keluaran biasanya dilewatkan tanpa aktivasi agar kompatibel dengan fungsi loss seperti Cross-Entropy, namun contoh ini sengaja disederhanakan untuk menonjolkan mekanisme chaining lapisan GCN secara eksplisit.

Poin metodologis yang paling kritis dan sering menjadi sumber bias evaluasi dalam penelitian tingkat magister terdapat pada catatan akhir slide ini: normalisasi adjacency harus dihitung hanya dari struktur graf pada data training, lalu diterapkan secara tetap pada data validasi dan test. Jika normalisasi dihitung menggunakan seluruh graf (termasuk node uji), terjadi kebocoran informasi (*information leakage*) karena distribusi derajat dan koneksi node validasi/test turut mempengaruhi pembobotan propagasi. Praktik ini menjamin bahwa eksperimen bersifat adil, transparan, dan memenuhi standar rigoritas penelitian dalam skenario transductive.

Sebagai penutup penjelasan slide ini, implementasi singkat ini menegaskan bahwa inti arsitektur GCN dapat direduksi menjadi tiga komponen utama: transformasi linear per-node, agregasi berbasis propagasi matriks adjacency, dan aktivasi non-linear pasca-agregasi. Memahami kode ini secara mendalam akan menjadi fondasi kuat ketika Anda nantinya perlu melakukan ablation study, modifikasi agregator, atau debugging pada model graph neural networks yang lebih kompleks.

### Inti yang Harus Ditekankan

- Pemetaan langsung antara rumus teoretis GCN ($H^{(l+1)} = \sigma(\tilde{D}^{-1/2}\tilde{A}\tilde{D}^{-1/2}H^{(l)}W^{(l)})$) dengan operasi tensor PyTorch, khususnya pentingnya urutan perkalian matriks `A_norm @ W(H)`.
- Kewajiban menghitung normalisasi adjacency hanya dari data training untuk mencegah *information leakage* dan memastikan validitas generalisasi model pada data unseen.
- Struktur kode bersifat edukatif dan modular; dalam riset aktual, komputasi sparse matrix multiplication dan batching biasanya di-delegasikan ke library khusus untuk efisiensi memori dan kecepatan.
- Contoh dua lapis ini mewakili arsitektur *transductive full-batch*, yang menjadi patokan performa awal sebelum mengevaluasi varian yang lebih scalable.

### Transisi ke Slide Berikutnya

Meskipun implementasi GCN di atas cukup ringkas dan efektif untuk graf berukuran kecil hingga menengah, pendekatan ini memiliki dua keterbatasan fundamental: ia memerlukan seluruh graf dalam memori (*full-batch*) dan bersifat *transductive*, sehingga tidak mampu menghasilkan embedding untuk node baru tanpa proses pelatihan ulang. Keterbatasan skalabilitas dan ketidakmampuan mengenali node baru inilah yang mendorong lahirnya GraphSAGE, yang akan kita pelajari pada slide berikutnya melalui mekanisme sampling tetangga dan agregator adaptif untuk mendukung pembelajaran induktif pada graf berskala besar.

---

## Slide 020 - GraphSAGE: Sampling dan Aggregation

### Narasi

Setelah membahas implementasi lapisan GCN pada slide sebelumnya, kita kini beralih ke arsitektur yang secara fundamental mengubah cara kita menangani graf berskala besar, yaitu GraphSAGE. Berbeda dengan GCN yang mengandalkan perkalian matriks dengan normalisasi adjacency global untuk menggabungkan informasi dari seluruh tetangga dalam satu hop, GraphSAGE dikembangkan khusus untuk mengatasi dua keterbatasan utama: beban komputasi pada graf raksasa dan sifat transduktif yang membatasi generalisasi. Dalam konteks penelitian dan aplikasi industri, kemampuan untuk menghasilkan representasi node baru tanpa perlu melatih ulang seluruh model menjadi sangat krusial, dan di sinilah konsep inductive learning dari GraphSAGE memberikan solusi struktural.

Perbedaan mendasar antara GCN dan GraphSAGE dapat diuraikan melalui tiga dimensi teknis. Pertama, pada seleksi tetangga, GCN memproses semua koneksi dalam satu hop secara eksplisit, sedangkan GraphSAGE menerapkan mekanisme sampling untuk mengambil subset tetangga saja. Kedua, pembaruan embedding pada GCN terikat pada struktur normalisasi adjacency yang statis, sementara GraphSAGE memperkenalkan agregator yang fleksibel dan dapat dikonfigurasi sesuai karakteristik data. Ketiga, dari sisi kemampuan generalisasi, GraphSAGE sepenuhnya mendukung inductive learning, artinya model dapat langsung menginisialisasi embedding untuk node yang sama sekali belum terlihat selama fase training, sebuah keunggulan strategis untuk sistem yang terus berkembang secara dinamis.

Mekanisme inti GraphSAGE berpusat pada fungsi agregator yang digunakan untuk merangkum informasi dari tetangga yang telah disampel. Slide ini menyoroti tiga tipe agregator standar yang sering dijadikan baseline dalam eksperimen. Agregator MEIN menghitung rata-rata vektor embedding tetangga secara element-wise. Agregator LSTM memperlakukan kumpulan tetangga sebagai sekuensial input, memungkinkan model menangkap ketergantungan urutan atau pola temporal jika struktur graf mengarahkannya. Agregator POOL, di sisi lain, menerapkan transformasi non-linear diikuti oleh operasi max atau mean pooling, yang umumnya memberikan stabilitas numerik dan ketahanan terhadap noise. Secara matematis, pembaruan embedding untuk node $v$ pada lapisan $l+1$ dituliskan sebagai:
```text
h_v^(l+1) = σ( W · CONCAT(h_v^(l), AGG({h_u^(l) | u ∈ S(v)})) )
```
Di sini, $S(v)$ menyatakan himpunan tetangga hasil sampling, CONCAT menggabungkan embedding asli node pusat dengan ringkasan tetangga, $\sigma$ merupakan fungsi aktivasi non-linear, dan $W$ adalah matriks bobot yang dipelajari secara end-to-end selama pelatihan.

Rumus tersebut menegaskan bahwa setiap lapisan GraphSAGE beroperasi secara lokal dan independen terhadap struktur global, sehingga memungkinkan komputasi yang terdistribusi dan efisien. Pemahaman terhadap mekanisme sampling serta pilihan agregator ini menjadi fondasi penting sebelum kita mendalami bagaimana algoritma ini diwujudkan dalam bentuk pseudocode dan dioptimalkan melalui strategi minibatch pada slide berikutnya.

### Inti yang Harus Ditekankan

- GraphSAGE mengatasi batasan transduktif dan beban memori GCN melalui mekanisme sampling tetangga dan agregasi lokal.
- Kemampuan inductive learning memungkinkan generalisasi ke node baru tanpa retraining, menjadikannya cocok untuk graf dinamis dan skala besar.
- Fleksibilitas agregator (MEAN, LSTM, POOL) memungkinkan adaptasi terhadap berbagai distribusi data dan kebutuhan representasi yang berbeda.
- Rumus update menekankan penggabungan embedding asli node dengan hasil agregasi tetangga yang disampel, menjaga informasi struktural sekaligus mengurangi noise.

### Transisi ke Slide Berikutnya

Dengan memahami bagaimana GraphSAGE merangkum informasi secara lokal melalui sampling dan agregasi, langkah selanjutnya adalah melihat bagaimana mekanisme ini diimplementasikan secara algoritmik. Pada slide berikutnya, kita akan membedah pseudocode satu lapisan GraphSAGE, menjelaskan strategi minibatch yang membuat pelatihan tetap efisien pada graf raksasa, serta melihat contoh integrasinya menggunakan pustaka PyTorch Geometric.

---

## Slide 021 - GraphSAGE: Pseudocode dan Minibatch

### Narasi

Melanjutkan konsep sampling dan agregasi yang telah dibahas pada slide sebelumnya, pseudocode ini mengoperasionalkan mekanisme GraphSAGE menjadi langkah-langkah algoritmik yang jelas untuk satu lapisan propagasi. Proses dimulai dengan pemanggilan fungsi `sample_neighbors(v, K)` pada node target $v$, yang secara selektif mengambil $K$ tetangga untuk membentuk himpunan $S(v)$. Sampling ini krusial karena menghindari beban komputasi eksponensial saat meningkatkan kedalaman lapisan. Selanjutnya, embedding dari semua node dalam $S(v)$ pada lapisan $l$ diekstrak dan dilewatkan ke fungsi agregasi, menghasilkan vektor kontekstual $m_v$. Pada tahap akhir, embedding asli node $v$ pada lapisan saat ini, $h_v^{(l)}$, digabungkan dengan $m_v$ menggunakan operasi `CONCAT`. Gabungan vektor ini kemudian diproses oleh fungsi `UPDATE`, yang secara umum berupa transformasi affine ($W \cdot x + b$) dilanjutkan dengan fungsi aktivasi non-linear seperti ReLU atau LeakyReLU, sehingga menghasilkan embedding baru $h_v^{(l+1)}$ yang telah mengintegrasikan informasi struktural lokal dan fitur atribut node itu sendiri.

Penerapan pseudocode di atas menjadi sangat efektif ketika dipadukan dengan paradigma pelatihan minibatch. Dalam skema ini, graf tidak perlu dimuat secara utuh ke dalam memori; yang diproses hanyalah subgraf yang mencakup node dalam batch aktif beserta tetangga yang telah disampel. Pendekatan ini memberikan efisiensi ruang dan waktu yang drastis, memungkinkan pelatihan pada graf berskala besar yang secara fisik tidak muat di perangkat standar. Selain aspek skalabilitas, mekanisme minibatch secara inherent mendukung sifat inductive learning GraphSAGE. Karena model tidak bergantung pada matriks adjacensi global yang statis, parameter pembelajaran difokuskan pada fungsi agregasi dan update yang bersifat general. Akibatnya, representasi untuk node baru yang muncul setelah fase pelatihan dapat dihasilkan secara instan tanpa perlu fine-tuning ulang seluruh jaringan.

Dalam praktik pengembangan berbasis Python, kompleksitas algoritma ini telah dienkapsulasi dengan rapi melalui PyTorch Geometric. Pernyataan `from torch_geometric.nn import SAGEConv` mengimpor modul konvolusi khusus yang telah dioptimasi untuk propagasi pesan pada graf. Inisialisasi `conv = SAGEConv(in_channels=16, out_channels=32)` menetapkan dimensi input dan output lapisan, di mana library secara otomatis menangani alokasi weight matrix, proses sampling neighbor, agregasi, serta backpropagation gradient. Fungsionalitas siap pakai ini menjadikan GraphSAGE sebagai baseline yang sangat robust dan mudah direplikasi untuk benchmarking pada dataset graf publik berskala masif seperti Reddit atau ogbn-arxiv, di mana trade-off antara akurasi dan efisiensi komputasi menjadi pertimbangan utama dalam desain eksperimen.

### Inti yang Harus Ditekankan

- Pseudocode GraphSAGE menekankan tiga tahapan inti: sampling tetangga terbatas, agregasi embedding lokal, dan pembaruan embedding via concatenation plus transformasi non-linear.
- Pelatihan minibatch memungkinkan skalabilitas tinggi dengan membatasi cakupan komputasi hanya pada subgraf aktif, sekaligus mempertahankan sifat inductive learning untuk node yang belum pernah dilihat.
- Implementasi praktis menggunakan PyTorch Geometric (`SAGEConv`) menyederhanakan arsitektur kompleks menjadi beberapa baris kode, menjadikan GraphSAGE standar de facto untuk baseline graph neural networks pada dataset berskala besar.

### Transisi ke Slide Berikutnya

Dengan memahami bagaimana pseudocode dan mekanisme minibatch bekerja secara internal, kita dapat mengevaluasi secara objektif kapan GraphSAGE lebih unggul dibandingkan pendekatan tradisional seperti GCN. Pada slide berikutnya, kita akan menelaah perbandingan sistematis antara kedua arsitektur tersebut dari segi mode training, kemampuan induktif, kompleksitas, hingga kesesuaian penggunaannya dalam konteks penelitian dan produksi.

---

## Slide 022 - Perbandingan GCN dan GraphSAGE

### Narasi

Setelah pada slide sebelumnya kita menguraikan pseudocode GraphSAGE serta mekanisme minibatch yang memungkinkan pemrosesan subgraph secara efisien, kini saatnya menempatkan kedua arsitektur GNN paling fundamental ini dalam perspektif komparatif. Meskipun GCN dan GraphSAGE sama-sama beroperasi berdasarkan prinsip message passing dan neighborhood aggregation, perbedaan mendasar dalam desain mereka menghasilkan karakteristik operasional yang sangat berbeda, terutama ketika diterapkan pada skenario penelitian tingkat magister yang menuntut justifikasi metodologis yang kuat.

Dari sisi mode pelatihan, Graph Convolutional Network (GCN) tradisional umumnya memerlukan pendekatan full-batch atau mini-batch yang tetap memuat seluruh tetangga setiap node dalam satu iterasi. Hal ini membuat GCN sangat bergantung pada representasi adjacency matrix penuh yang dinormalisasi secara simetris. Sebaliknya, GraphSAGE memperkenalkan sampling tetangga secara eksplisit pada setiap lapisan. Dengan hanya mengambil K tetangga terdekat secara acak, GraphSAGE memutus ketergantungan pada struktur global sekaligus mengurangi beban memori secara drastis. Perbedaan ini menjadi penentu utama dalam hal skalabilitas: GCN cenderung mengalami bottleneck memori pada graf berskala sangat besar, sedangkan GraphSAGE dirancang agar dapat diskalakan dengan mudah bahkan untuk dataset seperti Reddit atau ogbn-arxiv yang memiliki jutaan node.

Aspek lain yang krusial dalam pemilihan model adalah sifat pembelajaran induktif versus transduktif. GCN bersifat transduktif; embedding dipelajari secara bersamaan untuk seluruh node yang ada dalam graf selama pelatihan, sehingga model ini sulit menggeneralisasi ke node baru atau graf yang belum pernah dilihat. GraphSAGE, sebaliknya, dibangun khusus untuk pembelajaran induktif. Fungsi UPDATE-nya mempelajari parameter agregasi yang dapat diterapkan pada node mana pun, terlepas dari apakah node tersebut muncul dalam set pelatihan atau tidak. Fleksibilitas ini didukung oleh variasi fungsi agregator yang dapat dipilih, mulai dari Mean, LSTM, hingga Pooling, yang semuanya beroperasi pada himpunan tetangga yang telah disampling. Implementasinya memang sedikit lebih kompleks dibandingkan GCN karena memerlukan manajemen sampler dan fungsi agregasi dinamis, namun keuntungan generatifnya jauh lebih bernilai untuk aplikasi produksi atau riset yang melibatkan data streaming dan node dinamis.

Dalam konteks perancangan eksperimen tingkat S2, keputusan memilih antara GCN dan GraphSAGE tidak boleh didasarkan pada preferensi subjektif, melainkan harus dipertimbangkan melalui empat lensa strategis: ukuran dataset, kebutuhan induktif, anggaran komputasi, dan tujuan penelitian spesifik. Jika Anda bekerja dengan graf kecil hingga sedang yang strukturnya statis dan fokusnya adalah klasifikasi node berbasis pola lokal, GCN sering menjadi baseline yang cepat dan stabil. Namun, jika research question Anda menyentuh masalah node baru, graf yang terus berkembang, atau keterbatasan infrastruktur GPU, GraphSAGE menawarkan fondasi yang lebih robust dan mudah diintegrasikan ke dalam pipeline produksi menggunakan library seperti PyTorch Geometric.

### Inti yang Harus Ditekankan

- GCN bersifat transduktif dan mengandalkan normalisasi adjacency tetap, menjadikannya pilihan optimal untuk graf kecil/sedang dengan struktur statis dan kebutuhan baseline yang cepat.
- GraphSAGE dirancang khusus untuk pembelajaran induktif melalui sampling tetangga dan agregator fleksibel (Mean, LSTM, Pooling), sehingga lebih skalabel dan adaptif terhadap node baru atau graf dinamis.
- Pemilihan model harus dibenarkan secara metodologis berdasarkan empat faktor kunci: skala dataset, kebutuhan generalisasi induktif, ketersediaan sumber daya komputasi, dan kesesuaian dengan tujuan penelitian atau aplikasi akhir.

### Transisi ke Slide Berikutnya

Pemahaman tentang perbedaan operasional antara GCN dan GraphSAGE memberikan fondasi yang kuat untuk menangani graf homogen. Namun, data riil jarang sekali mengikuti struktur seragam tersebut. Pada slide berikutnya, kita akan melangkah ke tingkat kompleksitas yang lebih tinggi dengan membahas Heterogeneous Graph, di mana jaringan tidak hanya terdiri dari satu jenis node, melainkan melibatkan berbagai tipe entitas dan relasi yang saling berinteraksi.

---

## Slide 023 - Heterogeneous Graph: Banyak Tipe Node dan Edge

### Narasi

Setelah pada slide sebelumnya kita membandingkan arsitektur GCN dan GraphSAGE yang beroperasi pada graph homogen, kini kita beralih ke representasi graph yang lebih kompleks dan sering kali lebih mencerminkan struktur data riil: Heterogeneous Graph. Berbeda dengan graph homogen yang hanya memiliki satu tipe node dan satu tipe edge, heterogeneous graph diperbolehkan memiliki lebih dari satu tipe node dan/atau lebih dari satu tipe edge dalam satu struktur graf tunggal. Representasi ini membuka peluang untuk menangkap relasi semantik yang berlapis, namun sekaligus menuntut pendekatan pemodelan yang lebih canggih agar informasi dari berbagai tipe relasi tidak saling mengganggu selama proses agregasi pesan.

Sebagai contoh konkret dalam domain akademik, kita dapat melihat jaringan publikasi ilmiah. Struktur ini tidak hanya terdiri dari entitas penulis atau dokumen, tetapi juga venue penerbitan serta berbagai jenis interaksi antar entitas tersebut. Dalam representasi teks sederhana, pola ini dapat ditulis sebagai:
```text
[Author] --menulis--> [Paper] --dipublikasikan_di--> [Venue]
 [Author] --mengutip--> [Paper]
```
Poin kritis yang perlu dipahami adalah bahwa heterogenitas graph ini bukan sekadar konstruksi teknis, melainkan sangat bergantung pada pemahaman domain. Sebelum masuk ke tahap pemodelan atau eksperimentasi, peneliti wajib melakukan kurasi tipe node dan edge berdasarkan relevansinya terhadap research question. Memilih tipe relasi yang terlalu banyak atau tidak terarah justru dapat menimbulkan noise dan meningkatkan beban komputasi tanpa memberikan gain performa yang signifikan.

Untuk mengeksploitasi struktur heterogen secara matematis, kita memerlukan konsep abstraksi yang menjembatani pengetahuan domain dengan representasi vektor. Konsep pertama adalah Metapath, yaitu pola urutan tipe node dan edge yang mendefinisikan jalur semantik tertentu. Misalnya, pola `Author-Paper-Author` merepresentasikan hubungan kolaborasi atau co-authorship antar peneliti. Ketika metapath telah ditetapkan, teknik seperti Metapath2vec dapat digunakan untuk melakukan random walk yang dibatasi oleh pola tersebut, sehingga menghasilkan embedding node yang tetap mempertahankan konteks tipe relasinya.

Pada level arsitektur model, heterogeneous graph memerlukan modifikasi fundamental dari GNN standar. RGCN (Relational Graph Convolutional Network) menyelesaikan tantangan ini dengan mengalokasikan matriks transformasi bobot yang berbeda untuk setiap tipe relasi, memastikan bahwa agregasi informasi bersifat spesifik-relasi. Sementara itu, HAN (Heterogeneous Graph Attention Network) memperkenalkan mekanisme attention dua lapis: node-level attention untuk memfilter tetangga penting dalam satu tipe relasi, dan semantic-level attention untuk menilai pentingnya masing-masing metapath terhadap prediksi saat ini. Kedua pendekatan ini akan kita bedah secara teknis beserta formulasi propagasi layer-nya pada slide berikutnya.

### Inti yang Harus Ditekankan

- Heterogeneous graph merepresentasikan kompleksitas data riil dengan multiple node/edge types, namun validitas pemodelannya sangat ditentukan oleh kemampuan peneliti mendefinisikan tipe relasi yang selaras dengan research question.
- Metapath berfungsi sebagai kerangka semantik untuk mengarahkan proses ekstraksi fitur, sedangkan Metapath2vec memanfaatkan pola ini untuk menghasilkan embedding yang aware terhadap konteks relasi heterogen.
- Arsitektur GNN heterogen seperti RGCN dan HAN menawarkan solusi berbeda: RGCN mengandalkan parameterisasi per-relasi, sementara HAN mengandalkan mekanisme attention dinamis; pemilihan keduanya harus mempertimbangkan jumlah relasi, ketersediaan label, dan kebutuhan interpretability dalam penelitian.

### Transisi ke Slide Berikutnya

Dengan fondasi konseptual heterogeneous graph dan metapath yang telah kita bangun, langkah selanjutnya adalah membedah secara teknis bagaimana RGCN dan HAN mengimplementasikan konsep tersebut melalui rumus layer-wise propagation dan mekanisme attention. Mari kita lanjutkan ke slide berikutnya untuk melihat formulasi matematika, analisis kompleksitas, dan panduan praktis dalam memilih arsitektur yang tepat untuk eksperimen Anda.

---

## Slide 024 - Pendekatan Heterogeneous Graph: RGCN dan HAN

### Narasi

Setelah pada slide sebelumnya kita membedah struktur heterogeneous graph yang terdiri dari berbagai tipe node dan edge, serta memahami peran metapath dalam mendefinisikan pola relasi, kini kita akan masuk ke dua arsitektur Graph Neural Network yang secara eksplisit dirancang untuk mengolah kompleksitas tersebut: RGCN dan HAN. Keduanya menjawab tantangan agresi informasi pada graph heterogen dengan strategi yang berbeda, sehingga pemahaman mendalam tentang mekanisme masing-masing model menjadi krusial sebelum melakukan implementasi empiris.

Mari kita mulai dengan Relational Graph Convolutional Network atau RGCN. Berbeda dengan GCN konvensional yang menggunakan satu matriks bobot tunggal untuk seluruh edge, RGCN secara eksplisit memisahkan transformasi berdasarkan jenis relasi. Rumus pembaruan lapisan pada RGCN dituliskan sebagai berikut:

```text
h_v^(l+1) = σ( Σ_{r ∈ R} Σ_{u ∈ N_r(v)} W_r h_u^(l) + W_self h_v^(l) )
```

Dalam persamaan ini, setiap tipe relasi `r` memiliki matriks bobot `W_r` yang unik, sehingga model dapat mempelajari dinamika propagasi informasi yang berbeda-beda sesuai konteks relasinya. Komponen `Σ_{u ∈ N_r(v)}` melakukan agregasi fitur dari tetangga yang terhubung melalui relasi tertentu, sementara `W_self h_v^(l)` menjaga identitas asli node agar tidak terdilusi selama proses stacking lapisan. Namun, skalabilitas menjadi catatan penting: semakin banyak tipe relasi dalam dataset, semakin besar pula beban memori dan komputasi akibat banyaknya matriks `W_r` yang harus disimpan dan di-update. Dalam praktik riset, masalah ini biasanya ditangani dengan teknik regularisasi atau basis decomposition untuk mereduksi parameter tanpa mengurangi kapasitas ekspresif model.

Sebagai alternatif yang lebih adaptif, Heterogeneous Graph Attention Network atau HAN memanfaatkan mekanisme attention untuk menangani heterogenitas secara dinamis. HAN beroperasi pada dua tingkatan sekaligus. Pada node-level attention, model menghitung skor relevansi untuk setiap tetangga, sehingga hanya node yang benar-benar informatif yang berkontribusi signifikan terhadap embedding baru. Selanjutnya, pada semantic-level attention, HAN mengevaluasi berbagai metapath yang telah kita kenal dari slide sebelumnya, dan memberikan bobot berbeda kepada setiap jalur semantik berdasarkan kepentingannya terhadap tugas prediktif. Pendekatan ini memungkinkan model secara otomatis menyaring noise dan fokus pada pola relasi yang paling bermakna, tanpa memerlukan engineering fitur manual yang kaku.

Pemilihan antara RGCN dan HAN pada akhirnya bersifat kontekstual dan harus disesuaikan dengan karakteristik dataset serta tujuan penelitian Anda. Jika graf Anda memiliki jumlah relasi yang sangat masif dan constraint komputasi ketat, RGCN dengan optimasi basis decomposition cenderung lebih efisien. Di sisi lain, jika Anda bekerja dengan dataset yang relatif kecil namun kaya label supervision, serta mengutamakan interpretabilitas hasil prediksi, HAN menawarkan keunggulan karena mekanisme attention-nya yang transparan dalam menyoroti node dan metapath kritis. Evaluasi trade-off antara skalabilitas, ketersediaan data berlabel, dan kebutuhan interpretabilitas harus menjadi dasar pemilihan arsitektur sebelum memasuki tahap eksperimen.

### Inti yang Harus Ditekankan

- RGCN menggunakan matriks bobot terpisah per tipe relasi (`W_r`) untuk memodelkan dinamika propagasi yang spesifik, namun memerlukan teknik seperti regularisasi atau basis decomposition untuk mengendalikan ledakan parameter.
- HAN mengandalkan dual-layer attention: node-level untuk menyeleksi tetangga penting dan semantic-level untuk memberi bobot pada metapath, sehingga mampu secara adaptif menyaring informasi relevan dan meningkatkan interpretabilitas.
- Keputusan arsitektural harus didasarkan pada analisis empiris terhadap jumlah relasi, densitas label, dan kebutuhan interpretabilitas, bukan sekadar mengikuti tren algoritma.

### Transisi ke Slide Berikutnya

Meskipun RGCN dan HAN sangat efektif untuk memodelkan struktur graph yang statis, data dunia nyata jarang sekali diam. Struktur jaringan, interaksi antar entitas, maupun atribut node terus berevolusi seiring berjalannya waktu. Perubahan temporal ini menuntut representasi data yang lebih fleksibel, yang akan kita bahas secara sistematis pada slide berikutnya mengenai dynamic graph, mulai dari diskritisasi snapshot hingga pemrosesan continuous-time event stream.

---

## Slide 025 - Dynamic Graph: Graph yang Berubah Waktu

### Narasi

Pada slide sebelumnya, kita telah membahas bagaimana menangani graph heterogen melalui RGCN dan HAN, di mana fokus utamanya adalah mengakomodasi berbagai tipe node dan relasi dalam satu struktur statis. Namun, dalam skenario dunia nyata yang lebih kompleks, graph tidak hanya bersifat heterogen, tetapi juga dinamis. Dynamic graph merujuk pada jaringan yang strukturnya mengalami evolusi atau perubahan sepanjang waktu. Perubahan ini dapat berupa penambahan atau penghapusan node, munculnya atau hilangnya edge, maupun modifikasi atribut yang melekat pada entitas tersebut seiring berjalannya waktu. Memahami dinamika ini sangat krusial karena pola interaksi dalam sistem riil—seperti jejaring sosial, transaksi keuangan, atau komunikasi biologis—selalu bergerak dan berevolusi, bukan diam pada satu titik waktu.

Secara konseptual, terdapat dua representasi utama yang umum digunakan untuk memodelkan graph dinamis. Pertama, discrete-time dynamic graph, yang merepresentasikan perubahan struktur sebagai rangkaian snapshot graph pada interval waktu diskrit tertentu. Pendekatan ini cocok untuk data yang teragendakan atau tercatat secara berkala, seperti interaksi mingguan antar pengguna atau laporan transaksi bulanan. Kedua, continuous-time dynamic graph, yang memandang perubahan sebagai aliran event berkelanjutan tanpa batasan interval tetap. Representasi ini lebih natural untuk data yang terjadi kapan saja, seperti pengiriman email, notifikasi pesan instan, atau riwayat klik pada platform e-commerce. Pemilihan representasi ini akan sangat menentukan desain arsitektur model dan strategi sampling data yang akan kita gunakan.

Untuk continuous-time dynamic graph, data biasanya direkam dalam bentuk event stream yang mencatat triplet `(source_node, target_node, timestamp)`. Sebagai ilustrasi, perhatikan contoh stream berikut:
```text
(u1, u2, t=10)
(u1, u3, t=12)
(u2, u1, t=13)
```
Setiap baris merepresentasikan interaksi spesifik yang terjadi pada detik atau menit ke-10, ke-12, dan ke-13. Notasi ini memungkinkan kita melacak urutan kejadian, mengukur durasi antar-interaksi, dan menganalisis ketergantungan temporal. Dalam konteks data mining tingkat lanjut, format ini menjadi dasar untuk mengekstrak pola perilaku jangka pendek maupun jangka panjang, serta menjadi prasyarat penting sebelum masuk ke pembahasan tentang streaming data dan konsep concept drift.

Dengan demikian, transisi dari graph statis atau heterogen menuju dynamic graph membuka dimensi baru dalam ekstraksi pengetahuan. Kita tidak lagi hanya melihat siapa terhubung dengan siapa, tetapi juga kapan koneksi itu terbentuk, seberapa cepat topologi berubah, dan bagaimana dinamika tersebut memprediksi interaksi masa depan. Pemahaman mengenai representasi waktu dalam graph ini akan menjadi jembatan alami menuju diskusi lebih mendalam tentang penanganan temporal data, mekanisme adaptasi model terhadap perubahan distribusi data, serta tantangan metodologis dalam evaluasi model dinamis.

### Inti yang Harus Ditekankan

- Dynamic graph menekankan aspek temporalitas struktur jaringan, di mana node, edge, dan atribut dapat bertambah, hilang, atau berubah seiring waktu.
- Terdapat dua paradigma representasi utama: discrete-time (berbasis snapshot interval tetap) dan continuous-time (berbasis event stream dengan timestamp eksplisit).
- Format event stream `(u, v, t)` merupakan fondasi komputasional untuk menangkap urutan kejadian, mengukur interval temporal, dan membangun fitur dinamis bagi model machine learning.
- Konsep ini menjadi landasan kritis sebelum membahas teknik encoding waktu, manajemen sparsity temporal, dan prinsip evaluasi yang ketat untuk mencegah temporal leakage.

### Transisi ke Slide Berikutnya

Setelah memahami karakteristik dan representasi data pada dynamic graph, langkah selanjutnya adalah menelaah secara teknis bagaimana algoritma dan arsitektur model beradaptasi terhadap perubahan struktur tersebut. Pada slide berikutnya, kita akan membedah pendekatan komputasional utama seperti Snapshot GNN, EvolveGCN, serta TGAT/TGN, sekaligus mengidentifikasi tantangan metodologis krusial, terutama terkait encoding waktu, penanganan data sparse, dan pencegahan kebocoran informasi temporal selama proses validasi model.

---

## Slide 026 - Dynamic Graph: Pendekatan dan Tantangan

### Narasi

Setelah mendefinisikan konsep dynamic graph dan dua representasi utamanya pada slide sebelumnya, kita kini beralih ke aspek implementasi algoritmik. Karena struktur graph dinamis mengalami perubahan topologi, penambahan atau penghilangan node, serta variasi atribut secara terus-menerus, model statis konvensional tidak lagi memadai. Pada slide ini, kita akan menguraikan tiga pendekatan komputasional yang paling dominan dalam literatur terkini, diikuti dengan cakupan aplikasi praktis serta tantangan metodologis yang wajib diperhatikan, khususnya bagi peneliti yang merancang eksperimen tingkat magister.

Pertama, **Snapshot GNN** memperlakukan setiap momen waktu sebagai graf independen. Model GNN standar dijalankan secara terpisah pada masing-masing snapshot, lalu representasi node dari setiap periode digabungkan atau diurutkan untuk membentuk embedding temporal. Kedua, **EvolveGCN** mengintegrasikan Graph Convolutional Network dengan Recurrent Neural Network (RNN) atau LSTM, di mana matriks bobot konvolusi tidak statis, melainkan diperbarui secara dinamis mengikuti urutan waktu. Ketiga, model berbasis event stream seperti **TGAT (Temporal Graph Attention Networks)** dan **TGN (Temporal Graph Networks)** memproses interaksi secara granular. Keduanya memanfaatkan mekanisme attention atau memory module untuk melacak riwayat historis node, sehingga mampu menghasilkan representasi yang sangat peka terhadap urutan kejadian dan interval waktu antar-interaksi.

Kemampuan pemrosesan temporal ini membuka peluang aplikasi yang sangat relevan. Dalam **temporal link prediction**, model dapat memperkirakan probabilitas terbentuknya edge baru berdasarkan pola interaksi historis. Untuk sistem **rekomendasi berbasis urutan**, dinamika preferensi pengguna yang bergeser dapat dimodelkan lebih presisi dibandingkan pendekatan berbasis graf statis. Selain itu, **deteksi anomali pada interaksi** menjadi instrumen krusial dalam keamanan jaringan dan deteksi penipuan finansial, di mana penyimpangan pola perilaku dari norma temporal dapat diidentifikasi lebih awal.

Namun, penerapannya dihadapkan pada tantangan teknis dan metodologis yang tidak sederhana. Hal pertama adalah **encoding waktu secara efektif**; interval antar-event sering kali bersifat irregular dan sparse, sehingga memerlukan teknik transformasi khusus seperti temporal positional encoding atau kernel function agar model dapat membedakan kedekatan temporal yang bermakna. Tantangan kedua terletak pada **desain evaluasi yang ketat**. Kesalahan fatal yang kerap terjadi dalam penelitian adalah penggunaan informasi masa depan saat memproses data masa lalu, yang mengakibatkan temporal data leakage. Validasi harus dilakukan dengan strict chronological split, memastikan bahwa model hanya menerima input dari timestamp yang benar-benar precede target prediksi. Konsep terkait adaptasi model secara kontinu dan concept drift akan kita dalami lebih lanjut pada pertemuan berikutnya.

### Inti yang Harus Ditekankan

- Tiga paradigma utama pemrosesan graph dinamis: snapshot-based aggregation, weight-evolving hybrid (GCN-RNN), dan event-driven temporal modeling (attention/memory).
- Aplikasi strategis meliputi temporal link prediction, rekomendasi dinamis berbasis urutan, dan deteksi anomali interaksi real-time.
- Tantangan metodologis krusial: encoding interval waktu yang irregular, penanganan sparsity temporal, dan pencegahan temporal data leakage selama proses evaluasi eksperimen.

### Transisi ke Slide Berikutnya

Penguasaan terhadap pendekatan dan tantangan evaluasi ini menjadi prasyarat penting sebelum terjun ke implementasi empiris. Pada slide berikutnya, kita akan menelaah studi kasus konkret di berbagai domain industri serta dataset standar yang menjadi benchmark global, sehingga Anda dapat memilih referensi dan baseline yang tepat untuk merancang eksperimen penelitian skripsi atau publikasi jurnal Anda.

---

## Slide 027 - Aplikasi dan Dataset Graph

### Narasi

Setelah membahas pendekatan pemrosesan dynamic graph dan tantangan temporal pada slide sebelumnya, kita kini beralih ke implementasi praktis dari graph mining dan Graph Neural Networks dalam berbagai domain riset. Tabel studi kasus menyajikan lima area aplikasi utama yang menjadi fokus pengembangan algoritma graph saat ini. Di bidang media sosial, klasifikasi node sering difokuskan pada identifikasi akun bot atau spam, di mana GCN dan GraphSAGE terbukti efektif karena mampu menangkap pola keterhubungan dan fitur struktural antar pengguna. Untuk jaringan kutipan akademik, tugas inti meliputi klasifikasi paper dan prediksi tautan antar publikasi, yang dapat ditangani melalui kombinasi arsitektur GCN dan teknik representasi vektor klasik seperti node2vec.

Domain knowledge graph menuntut penanganan relasi yang bersifat heterogen dan kompleks, sehingga metode seperti Relational GCN (RGCN) atau model translational embedding seperti TransE lebih sesuai untuk klasifikasi entitas dan melengkapi grafik pengetahuan. Di sektor bioinformatika, prediksi sifat molekuler menjadi aplikasi kritis yang memanfaatkan graph embedding dan GNN untuk memetakan struktur atom serta ikatan kimia menjadi representasi numerik yang dapat dipelajari mesin. Terakhir, fraud detection atau deteksi penipuan pada transaksi keuangan mengandalkan graph embedding dan pendekatan dynamic graph untuk mengidentifikasi anomali dalam jaringan interaksi yang terus berkembang, sejalan dengan pembahasan dinamika graf pada materi sebelumnya.

Dalam konteks penelitian tingkat magister, pemilihan dataset standar menjadi fondasi metodologis yang tidak boleh diabaikan. Dataset seperti Cora, CiteSeer, dan PubMed berfungsi sebagai benchmark citation graph yang lazim digunakan untuk evaluasi node classification. Untuk skenario pengujian yang lebih ringan, Karate Club sering dipakai sebagai studi kasus community detection pada graph berskala kecil. Apabila penelitian menargetkan skalabilitas dan generalisasi, dataset besar dari Open Graph Benchmark seperti ogbn-arxiv dan ogbn-products wajib dipertimbangkan untuk tugas node classification dan link prediction. Selain itu, dataset Reddit tersedia khusus untuk mengevaluasi inductive node classification pada graph yang tidak terlihat selama training, sementara MUTAG dan PROTEINS menjadi standar industri untuk graph classification pada data molekuler. Penggunaan dataset yang sudah terstandarisasi ini bukan sekadar memudahkan akses data, melainkan syarat mutlak agar hasil eksperimen dapat dibandingkan secara adil, transparan, dan kompetitif dengan publikasi internasional terkini.

Poin krusial dari penggunaan dataset standar ini adalah mempersiapkan landasan yang kokoh bagi perancangan eksperimen. Ketika domain, tugas, dan dataset telah ditetapkan dengan jelas, langkah selanjutnya adalah menyusun alur kerja penelitian yang ketat, memastikan tidak adanya data leakage, dan menerapkan prinsip reproducible research yang akan diuraikan secara teknis pada slide berikutnya.

### Inti yang Harus Ditekankan

- Kesesuaian antara karakteristik graph (homogen/heterogen, statis/dinamis, skala kecil/besar) harus menjadi dasar pemilihan arsitektur GNN atau teknik embedding yang tepat.
- Penggunaan dataset standar (benchmark) adalah kewajiban metodologis untuk menjamin fair comparison dan reproduktibilitas hasil terhadap literatur internasional.
- Pemahaman mendalam tentang level tugas graph mining: node-level (klasifikasi entitas), edge-level (prediksi tautan), dan graph-level (klasifikasi struktur/molekul) menentukan strategi split data dan metric evaluasi.

### Transisi ke Slide Berikutnya

Memilih dataset dan mendefinisikan tugas dengan jelas hanyalah langkah awal dalam siklus penelitian. Agar kontribusi ilmiah kita dapat diverifikasi, direplikasi, dan diakui oleh komunitas riset, kita perlu menyusun workflow eksperimen yang sistematis, mulai dari preprocessing graph hingga analisis robustness, yang akan dijabarkan secara rinci pada slide berikutnya.

---

## Slide 028 - Workflow Penelitian Graph Mining

### Narasi

Setelah membahas berbagai aplikasi domain dan dataset standar pada slide sebelumnya, langkah selanjutnya adalah merancang alur penelitian yang sistematis dan metodologis. Alur ini dirancang khusus untuk memastikan bahwa setiap eksperimen graph mining dilakukan secara ketat, dapat direplikasi, dan memberikan kontribusi ilmiah yang valid sesuai standar penelitian jenjang magister.

Tahap awal dimulai dari persiapan data graph mentah, dilanjutkan dengan Exploratory Data Analysis (EDA) dan preprocessing yang spesifik untuk struktur graf. Pada tahap ini, peneliti perlu menganalisis distribusi derajat, konektivitas komponen, serta skala fitur node dan edge. Setelah memahami karakteristik data, peneliti harus menetapkan tugas utama secara eksplisit, apakah itu node classification, link prediction, atau community detection. Pemilihan tugas ini akan menentukan arsitektur model dan metrik evaluasi yang digunakan. Langkah krusial berikutnya adalah pembagian data (splitting). Peneliti harus membedakan antara setting transductive, di mana seluruh graf tersedia selama pelatihan, dan inductive, di mana model harus menggeneralisasi ke node atau graf baru yang belum pernah dilihat. Pembagian ini harus dirancang dengan hati-hati untuk mencegah data leakage, misalnya dengan memastikan tidak ada informasi dari node uji yang bocor ke proses message passing pada node latih.

Sebelum menerapkan model deep learning yang kompleks, wajib membangun baseline yang kuat. Baseline dapat mencakup metrik struktural sederhana seperti centrality (Degree, PageRank), algoritma deteksi komunitas klasik, representasi vektor tradisional seperti node2vec atau DeepWalk, atau bahkan classifier linear seperti Logistic Regression yang diterapkan pada fitur yang telah di-flatten. Setelah baseline tercapai, peneliti dapat bereksperimen dengan metode modern seperti GCN untuk graf homogen, GraphSAGE untuk skenario inductive, heterogeneous GNN untuk graf dengan tipe node dan relasi beragam, atau dynamic/temporal GNN untuk graf yang berkembang seiring waktu. Evaluasi tidak boleh hanya bergantung pada satu metrik tunggal, melainkan harus menggunakan metric yang sesuai dengan tugas, dijalankan dengan multiple random seeds untuk memastikan signifikansi statistik, serta mencatat kompleksitas komputasi meliputi waktu training, kebutuhan memori, dan skalabilitas.

Fase akhir workflow berfokus pada analisis mendalam terhadap kegagalan model dan ketahanannya. Analisis error membantu mengidentifikasi pola kesalahan sistematis, sementara uji robustness mengevaluasi performa model terhadap noise, perubahan distribusi, atau serangan adversarial. Seluruh proses ini harus didukung oleh prinsip reproducible research yang telah dibahas sebelumnya: penggunaan fixed seed untuk setiap percobaan, dokumentasi lengkap hyperparameter, pelacakan eksperimen secara terstruktur, serta penyediaan kode dan pipeline data yang bersih dan version-controlled. Dengan mengikuti kerangka ini, hasil penelitian tidak hanya menghasilkan peningkatan skor akurasi, tetapi juga memberikan landasan empiris yang solid untuk menarik kesimpulan ilmiah.

Pendekatan workflow ini menjadi fondasi penting ketika kita mulai melakukan critical review terhadap literatur terkini. Di slide berikutnya, kita akan menguji pemahaman kita dengan membedah paper GNN secara kritis, menyoroti aspek desain penelitian, validitas metode, ketajaman eksperimen, dan nilai kontribusi ilmiah yang sebenarnya.

### Inti yang Harus Ditekankan

- Validitas penelitian graph mining sangat bergantung pada pemilihan tugas yang jelas, strategi splitting data yang tepat (transductive vs inductive), dan pencegahan data leakage yang ketat dalam pipeline message passing.
- Baseline yang kuat dan komprehensif wajib dibangun sebelum mengklaim keunggulan model GNN modern, guna memastikan perbandingan yang adil dan menghindari klaim berlebihan.
- Prinsip reproducible research (fixed seed, dokumentasi hyperparameter, experiment tracking, dan kode transparan) merupakan syarat mutlak untuk validitas, replikasi, dan integritas akademik di tingkat S2.
- Evaluasi harus multidimensi: mencakup metrik tugas, signifikansi statistik melalui multiple seeds, serta analisis kompleksitas komputasi dan robustness model terhadap variasi kondisi.

### Transisi ke Slide Berikutnya

Dengan alur penelitian yang terstruktur dan prinsip reproduktibilitas yang ketat, kita kini siap menerapkannya sebagai lensa analitis saat membaca publikasi ilmiah. Mari kita lanjutkan ke diskusi kritis mengenai bagaimana mengevaluasi kualitas paper GNN berdasarkan desain, metode, eksperimen, dan kontribusi nyata yang ditawarkan.

---

## Slide 029 - Paper Discussion: Critical Review pada Paper GNN

### Narasi

Setelah kita menelaah alur penelitian graph mining dan prinsip reproducible research pada slide sebelumnya, kini saatnya menerapkannya sebagai lensa evaluasi ketika membaca literatur ilmiah di bidang Graph Neural Networks. Langkah pertama dalam critical review adalah membedah desain penelitian. Anda harus menanyakan apakah research question yang diajukan benar-benar menuntut penggunaan representasi berbasis graf, atau apakah masalah tersebut dapat diselesaikan secara memadai dengan metode tabular konvensional. Pastikan juga baseline yang digunakan cukup kuat dan fair. Banyak paper mengklaim inovasi model GNN hanya karena membandingkannya dengan baseline yang tidak dioptimalkan atau terlalu sederhana. Validitas pembagian data juga harus diperiksa ketat: apakah strategi split transductive versus inductive dijelaskan dengan transparan? Hindari studi yang mengizinkan kebocoran informasi dari set uji ke dalam proses pelatihan atau validasi, karena hal ini akan meruntuhkan klaim generalisasi model.

Pada aspek metodologi, fokuskan analisis pada kontribusi substantif dari arsitektur yang diusulkan. Apakah mekanisme GNN yang ditawarkan benar-benar memberikan peningkatan performa yang bermakna, ataukah ia hanya menambah kompleksitas komputasi tanpa justifikasi teoritis yang kuat? Evaluasi pula bagaimana paper tersebut memposisikan proses message passing dibandingkan dengan representasi alternatif yang sudah mapan seperti node2vec atau DeepWalk. Jika penulis mengklaim superioritasnya, harus terdapat ablation study atau analisis mendalam yang membuktikan mengapa propagasi pesan antar-node lebih efektif daripada embedding statis atau fitur atribut node saja. Di jenjang magister, penilaian tidak berhenti pada akurasi, melainkan pada kedalaman argumentasi teknis mengenai pemilihan arsitektur dan kemampuannya mengatasi limitation pendekatan klasik.

Selanjutnya, tinjau rigorosity pada bagian eksperimen. Paper yang kredibel harus melaporkan jumlah dataset yang digunakan serta frekuensi pengulangan eksperimen untuk menjamin stabilitas dan signifikansi statistik hasil. Periksa apakah hyperparameter tuning dilakukan secara konsisten dan adil untuk seluruh metode yang dibandingkan, bukan hanya dioptimalkan pada model usulan sementara model lain dibiarkan dengan parameter default. Jangan lupakan pengukuran efisiensi komputasi. Apakah computational cost, memori, atau waktu training dilaporkan? Dalam konteks penelitian lanjutan maupun implementasi riil, trade-off antara akurasi dan beban komputasi merupakan dimensi kritis yang sering kali terabaikan dalam publikasi awal.

Terakhir, evaluasi kontribusi intelektual yang dihasilkan. Pengetahuan baru apa yang berhasil diekstraksi dari eksperimen, bukan sekadar laporan kenaikan skor akurasi beberapa persentase. Kontribusi seharusnya berupa insight mengenai perilaku model, karakteristik struktur graf, atau pola generalisasi yang dapat direplikasi oleh peneliti lain. Diskusi kritis ini secara langsung memperkuat CPMK-5, yaitu kemampuan mahasiswa untuk membandingkan metode klasik versus modern secara objektif, berbasis bukti, dan metodologis. Dengan membiasakan diri mengajukan pertanyaan-pertanyaan sistematis ini, fondasi analitis Anda akan semakin matang untuk merancang eksperimen mandiri yang robust, yang nantinya akan langsung diuji coba pada sesi praktikum pilihan di slide berikutnya.

### Inti yang Harus Ditekankan

- Validitas desain penelitian dimulai dari pembenaran penggunaan graf, kekuatan baseline, dan transparansi pembagian data (transductive/inductive) tanpa leakage.
- Kontribusi arsitektur GNN harus dibuktikan melalui ablation study dan perbandingan yang adil terhadap metode alternatif (seperti node2vec), bukan hanya klaim akurasi.
- Rigorosity eksperimen mencakup replikasi berulang, tuning hyperparameter yang konsisten, serta pelaporan biaya komputasi yang sejalan dengan prinsip reproducible research.
- Fokus evaluasi bergeser dari sekadar skor performa menuju insight metodologis dan pengetahuan baru yang mendukung CPMK-5.

### Transisi ke Slide Berikutnya

Dengan kerangka evaluasi kritis ini, Anda telah memiliki landasan metodologis yang solid untuk merancang eksperimen sendiri. Mari kita lanjutkan ke penerapan praktisnya melalui pilihan praktikum node classification atau link prediction, di mana Anda akan langsung mengimplementasikan pipeline mulai dari EDA hingga analisis error menggunakan dataset standar.

---

## Slide 030 - Praktikum Opsional: Node Classification atau Link Prediction

### Narasi

Praktikum kali ini memberikan kebebasan pilihan antara dua skenario eksperimen yang umum digunakan dalam literatur Graph Mining, yaitu Node Classification atau Link Prediction. Pilihan ini dirancang bukan sekadar sebagai latihan implementasi kode, melainkan sebagai simulasi langkah metodologis penelitian tingkat magister. Keduanya secara langsung merespons pertanyaan kritis dari diskusi paper sebelumnya, khususnya mengenai validitas pembagian data transductive versus inductive, kekuatan baseline, serta evaluasi biaya komputasional. Mahasiswa diharapkan mampu merancang eksperimen yang adil, mendokumentasikan setiap keputusan arsitektural, dan menarik kesimpulan berbasis bukti empiris.

Jika Anda memilih Opsi A: Node Classification, alur kerja dimulai dengan Exploratory Data Analysis (EDA) pada struktur graf untuk memetakan distribusi jumlah node, edge, kelas label, serta derajat simpul. Setelah profil data dipahami, tentukan strategi splitting data apakah transductive atau inductive, lalu pastikan konsistensi dengan konteks masalah penelitian Anda. Untuk baseline, implementasikan Logistic Regression yang memanfaatkan embedding statis dari node2vec sebagai representasi fitur. Bandingkan performa ini dengan model GNN dinamis seperti GCN atau GraphSAGE yang menangkap relasi struktural melalui mekanisme message passing. Evaluasi dilakukan menggunakan metrik accuracy, F1-score, dan waktu training. Poin kritisnya adalah melakukan analisis error secara mendalam, khususnya pada kelas minoritas, untuk mengidentifikasi bias model terhadap distribusi label yang tidak seimbang atau over-smoothing pada graf yang terlalu dalam.

Sebaliknya, jika Anda mengambil Opsi B: Link Prediction, fokusnya bergeser pada inferensi keberadaan edge yang belum teramati. Langkah awalnya adalah menyembunyikan sebagian edge positif sebagai set uji, kemudian membangun pasangan edge negatif yang realistis sebagai pembanding. Evaluasi awal dapat dilakukan menggunakan metode heuristik klasik seperti Adamic-Adar Index untuk mengukur kesamaan struktural berdasarkan tetangga bersama, dilanjutkan dengan implementasi GNN link predictor yang memproyeksikan probabilitas koneksi berdasarkan pesan yang diteruskan antar node. Hasil akhir wajib dilaporkan dalam bentuk AUC-ROC dan Average Precision (AP) untuk menilai kemampuan diskriminatif model secara komprehensif tanpa bergantung pada threshold klasifikasi tetap.

Dari kedua opsi tersebut, output yang diharapkan mencakup notebook eksperimen yang terstruktur, tabel perbandingan hasil, serta analisis singkat yang menjawab mengapa suatu metode unggul atau gagal dalam konteks tertentu. Analisis ini harus ditulis sebagai evidence yang nantinya akan menjadi fondasi kuat untuk research project Anda. Praktik ini juga menyiapkan Anda untuk memasuki tahap Experiment V1 pada pertemuan berikutnya, di mana pipeline eksperimen harus sudah bersifat reproducible, mencakup pengaturan seed, versi environment, dan manajemen data yang ketat agar hasil dapat diuji ulang oleh reviewer atau peneliti lain.

### Inti yang Harus Ditekankan

- Validitas splitting data (transductive vs inductive) dan pemilihan baseline yang fair menjadi pondasi eksperimen yang kredibel, bukan sekadar mengejar skor tertinggi.
- Evaluasi model harus melampaui akurasi; analisis error pada kelas minoritas, waktu training, dan stabilitas hasil merupakan indikator robustness yang esensial untuk penelitian tingkat S2.
- Dokumentasi eksperimen yang sistematis dan pipeline yang reproducible adalah prasyarat mutlak sebelum masuk ke tahap pengembangan proposed method dan penulisan paper konferensi terindeks Scopus.

### Transisi ke Slide Berikutnya

Setelah menyelesaikan praktikum opsional ini, langkah selanjutnya adalah mengintegrasikan temuan baseline dan analisis error ke dalam pipeline penelitian utama. Pada slide berikutnya, kita akan membahas bagaimana menjalankan Experiment V1 dengan memastikan reproduktibilitas penuh, mencatat metric primer dan sekunder, serta menyiapkan template pelaporan awal yang akan menjadi bahan diskusi mendalam pada pertemuan 12.

---

## Slide 031 - Research Project: Menjalankan Experiment V1

### Narasi

Setelah menyelesaikan sesi praktikum opsional pada pertemuan sebelumnya, di mana Anda telah mengimplementasikan baseline dan metode usulan pada dataset graph seperti Cora atau CiteSeer, kita kini memasuki fase inti dari proyek penelitian Anda: menjalankan eksperimen pertama secara terstruktur (V1). Pada tahap ini, fokus bergeser dari pengembangan kode menuju eksekusi sistematis dan evaluasi awal yang ketat sesuai standar penelitian tingkat magister. Target minggu ini memastikan bahwa seluruh komponen eksperimen siap dijalankan, dengan baseline yang sudah final dan metode yang Anda pilih atau kembangkan sudah dapat berjalan tanpa error.

Langkah pertama yang wajib dilakukan adalah menjamin reproduktibilitas pipeline. Dalam penelitian data mining, hasil yang tidak dapat direproduksi kehilangan nilai ilmiahnya. Pastikan Anda menetapkan random seed secara konsisten di semua library utama (NumPy, PyTorch/TensorFlow, scikit-learn), mendokumentasikan versi lingkungan kerja melalui file requirements.txt atau environment.yml, serta mengunci versi dataset yang digunakan. Variabel eksternal apa pun yang tidak dikontrol akan mengancam validitas perbandingan performa antar-metode. Setelah pipeline tervalidasi, jalankan baseline dan metode usulan pada dataset utama secara berurutan. Catat metrik utama yang selaras dengan pertanyaan penelitian Anda, seperti Accuracy atau F1-macro, beserta metrik sekunder yang memberikan konteks tambahan seperti waktu pelatihan, latensi inferensi, atau konsumsi memori.

Jangan hanya mengandalkan angka agregat; lakukan analisis kesalahan awal secara mendalam. Identifikasi pola kesalahan klasifikasi atau prediksi link yang gagal. Apakah kesalahan terkonsentrasi pada node dengan derajat rendah? Apakah ada bias terhadap kelas minoritas? Catatan kualitatif ini sering kali menjadi petunjuk awal untuk perbaikan arsitektur atau tuning hiperparameter. Selanjutnya, bandingkan temuan awal Anda dengan ekspektasi yang diperoleh dari tinjauan literatur. Jika kinerja metode usulan melampaui State-of-the-Art yang dilaporkan dalam paper terkait, dokumentasikan faktor pembedanya. Sebaliknya, jika hasilnya masih di bawah ekspektasi, jangan menganggapnya sebagai kegagalan. Ketidaksesuaian antara hipotesis dan hasil empiris justru merupakan sinyal penelitian yang berharga.

Gunakan template tabel yang disediakan untuk mencatat setiap iterasi secara rapi. Kolom "Catatan" sangat krusial untuk mendokumentasikan anomali, kendala teknis, atau dugaan penyebab penyimpangan. Hipotesis awal mengenai mengapa hasil tidak sesuai harapan akan menjadi bahan diskusi kritis pada pertemuan ke-12 saat kita merancang extended experiment. Ingatlah bahwa eksperimen V1 bukan tentang mencapai angka sempurna, melainkan tentang membangun fondasi bukti empiris yang transparan, terukur, dan siap diuji lebih lanjut.

### Inti yang Harus Ditekankan

- Reproduktibilitas adalah fondasi mutlak: kontrol seed, lingkungan komputasi, dan versi data secara ketat agar eksperimen dapat diaudit dan diulang.
- Pencatatan metrik harus mencakup aspek utama (akurasi/F1) dan sekunder (waktu/kompleksitas) untuk analisis komprehensif dan efisiensi komputasi.
- Analisis kesalahan awal dan formulasi hipotesis atas hasil yang tidak sesuai literatur adalah keterampilan riset esensial, bukan sekadar pelaporan angka.
- Hasil eksperimen V1 berfungsi sebagai baseline empiris yang akan mengarahkan desain perbaikan, ablation study, dan penyesuaian hipotesis pada tahap lanjutan.

### Transisi ke Slide Berikutnya

Dengan hasil awal yang telah terdokumentasi, langkah selanjutnya adalah memastikan bahwa kerangka evaluasi itu sendiri tidak mengandung bias tersembunyi yang dapat merusak validitas kesimpulan. Mari kita bedah secara detail strategi pembagian data graph dan pemilihan metrik yang tepat untuk mencegah kebocoran informasi dan memastikan perbandingan yang adil.

---

## Slide 032 - Evaluasi Model GNN: Split dan Metrik

### Narasi

Pada tahap pelaksanaan eksperimen seperti yang dibahas pada slide sebelumnya, keberhasilan sebuah penelitian sangat bergantung pada bagaimana kita menyiapkan data sebelum proses training dimulai. Dalam konteks graph data, kesalahan paling fatal yang sering dilakukan peneliti adalah terjadinya **data leakage** akibat strategi pembagian data yang mengabaikan struktur ketergantungan antar node. Berbeda dengan data tabel yang umumnya berasumsi i.i.d (independent and identically distributed), node dalam graph terhubung melalui edge. Jika kita membagi node secara sembarangan tanpa memperhatikan konektivitasnya, informasi dari node training dapat “bocor” ke node test melalui jalur graf, sehingga metrik evaluasi menjadi terlalu optimistis dan tidak merepresentasikan kemampuan generalisasi model di dunia nyata.

Untuk menghindari hal tersebut, kita harus memahami perbedaan mendasar antara setting **transductive** dan **inductive**. Pada setting transductive, seluruh node dari graf terlihat selama proses training, namun label pada node test sengaja disembunyikan hingga fase evaluasi. Sebaliknya, pada setting inductive, node test sama sekali tidak pernah muncul selama training, memaksa model untuk belajar pola struktural dan fitur yang dapat digeneralisasi ke node baru yang benar-benar belum pernah dilihat. Pilihan ini akan sangat menentukan desain arsitektur, protokol pelatihan, dan klaim kontribusi penelitian Anda.

Berdasarkan karakteristik tugas dan jenis graf, terdapat tiga strategi split utama yang perlu dipilih secara sadar. Pertama, **node splitting**, yaitu membagi node secara acak ke dalam himpunan train, validation, dan test; pendekatan ini umumnya menghasilkan setting transductive. Kedua, **graph splitting**, yang digunakan khusus untuk tugas graph classification, di mana setiap graf utuh dialokasikan ke salah satu himpunan agar tidak ada kebocoran informasi antar graf. Ketiga, **temporal splitting**, yang wajib diterapkan pada dynamic atau temporal graph, di mana data dibagi berdasarkan kronologi waktu sehingga train selalu berasal dari masa lalu dan test dari masa depan, meniru skenario prediksi riil.

Setelah split ditetapkan, pemilihan metrik evaluasi harus disesuaikan dengan level tugas graph mining. Untuk node classification, Accuracy dan F1 score (baik macro maupun micro) menjadi standar. Link prediction mengandalkan AUC, Average Precision (AP), dan Hits@k untuk mengukur peringkat relasi. Graph classification menggunakan Accuracy dan ROC-AUC, sedangkan community detection biasanya mengevaluasi Modularity atau Normalized Mutual Information (NMI) jika ground truth tersedia. Sebagai catatan penting untuk level magister, jangan pernah melaporkan hasil hanya dari satu kali eksekusi. Anda wajib menjalankan eksperimen dengan berbagai seed acak, kemudian melaporakn **rata-rata dan standar deviasi** sebagai bukti robustnes statistik dan transparansi metodologis penelitian.

### Inti yang Harus Ditekankan

- Kesalahan umum data leakage pada graph terjadi karena mengabaikan struktur ketergantungan antar node saat melakukan split.
- Perbedaan fundamental antara setting transductive dan inductive menentukan bagaimana kita merancang eksperimen dan menguji generalisasi model.
- Pelaporan hasil penelitian wajib menyertakan rata-rata dan standar deviasi dari beberapa seed acak untuk menjamin keandalan statistik dan reproduktibilitas.
- Pemilihan metrik evaluasi harus selaras secara ketat dengan jenis tugas graph mining (node, link, atau graph level).

### Transisi ke Slide Berikutnya

Fondasi evaluasi yang ketat melalui split dan metrik yang tepat telah kita bangun, namun dalam praktiknya, performa model GNN sering kali tetap menghadapi hambatan teknis yang kompleks. Mari kita lanjutkan ke tantangan arsitektural dan metodologis yang masih menjadi open problem dalam riset graph mining modern.

---

## Slide 033 - Tantangan dan Open Problems dalam Graph Mining

### Narasi

Setelah menyelesaikan pembahasan evaluasi model GNN pada slide sebelumnya, kita kini memasuki fase yang paling relevan untuk penelitian jenjang magister: mengidentifikasi batasan teoritis dan celah riset yang masih terbuka. Tabel ini menyajikan enam tantangan fundamental yang mendominasi literatur graph mining terkini. Pertama, **oversmoothing** muncul ketika kedalaman jaringan GNN bertambah, menyebabkan proses message passing berulang kali mendistribusikan fitur hingga embedding node menjadi semakin homogen dan kehilangan identitas aslinya. Mitigasi yang umum diteliti meliputi penggunaan residual atau skip connection untuk mempertahankan sinyal awal, serta penerapan layer normalization atau weight normalization yang menstabilkan distribusi aktivasi.

Kedua, asumsi homophily sering kali tidak hold di dataset dunia nyata. Pada kondisi **heterophily**, node yang terhubung justru memiliki label atau atribut yang sangat berbeda. Agregasi standar seperti mean atau sum pada GCN cenderung menghasilkan smoothing berlebihan yang merusak performa, sehingga diperlukan arsitektur khusus yang mampu mengeksploitasi pola perbedaan antar tetangga tanpa mengaburkan representasi. Ketiga, masalah **scalability** menjadi bottleneck praktis karena graph skala industri tidak mungkin dimuat utuh ke dalam memori GPU/CPU. Strategi yang menjadi standar riset meliputi neighbor sampling, mini-batch training, serta integrasi dengan framework komputasi terdistribusi untuk menangani jutaan node dan miliaran edge secara efisien.

Keempat, mayoritas model tradisional mengasumsikan graph statis, padahal struktur relasional sering berubah. **Dynamic atau temporal graph** menuntut mekanisme yang dapat mengakomodasi evolusi topologi dan aliran data bertahap. Arah pengembangan saat ini mengarah pada Temporal GNN yang mengintegrasikan komponen temporal encoding, serta paradigma online learning yang memungkinkan pembaruan model secara inkremental tanpa full retraining. Kelima, aspek **explainability** masih menjadi hambatan serius karena mekanisme black-box GNN sulit diaudit. Riset aktif berfokus pada interpretasi berbasis attention weight, gradient-based attribution, dan ekstraksi subgraph kritis yang menjadi penentu utama prediksi. Terakhir, isu **fairness** menunjukkan bahwa bias dalam atribut atau struktur relasional dapat menyebar dan diperkuat melalui edge, sehingga memerlukan algoritma fair graph learning yang secara eksplisit mengoptimalkan ketidakberpihakan selama proses embedding.

Perlu ditekankan bahwa keenam poin ini bukan sekadar catatan teknis, melainkan kandidat research gap yang sah untuk dirumuskan sebagai pertanyaan penelitian atau hipotesis dalam proyek akademik Anda. Secara khusus, pembahasan mengenai explainability dan trustworthiness akan kami kaji lebih sistematis pada pertemuan ke-13, sehingga slide ini berfungsi sebagai landasan konseptual bagi modul evaluasi model yang bertanggung jawab.

### Inti yang Harus Ditekankan

- Oversmoothing dan heterophily adalah dua kendala struktural mendasar yang menentukan pemilihan arsitektur GNN.
- Skalabilitas dan dinamika temporal menuntut pergeseran metodologis dari pelatihan batch statis menuju sampling cerdas dan pembelajaran berkelanjutan.
- Explainability dan fairness merupakan pilar essential untuk deployment model GNN di domain sensitif, bukan sekadar fitur pelengkap.
- Setiap tantangan dalam tabel dapat langsung dikonversi menjadi research question, baseline comparison, atau ablation study untuk proyek penelitian.

### Transisi ke Slide Berikutnya

Dengan memetakan peta tantangan riset ini, kita dapat merangkum seluruh konsep graph mining yang telah dibahas mulai dari analisis struktur klasik, embedding, hingga arsitektur GNN mutakhir. Mari kita tinjau kembali poin-poin kunci sebagai penutup topik ini, sebelum Anda memulai Execution V1 untuk eksperimen proyek akhir Anda.

---

## Slide 034 - Kesimpulan

### Narasi

Pertemuan ini menandai peralihan fundamental dari pengolahan data tabular konvensional menuju representasi berbasis graph. Berbeda dengan tabel relasional yang hanya menyimpan atribut secara terpisah tanpa konteks ketergantungan, graph secara eksplisit memodelkan entitas beserta hubungan atau relasi di antaranya. Representasi ini sangat krusial karena banyak fenomena dunia nyata—mulai dari jaringan sosial, rekomendasi produk, hingga interaksi biologis—memiliki struktur keterkaitan yang tidak dapat ditangkap secara memadai oleh pendekatan tabular standar.

Secara teknis, kita telah membahas berbagai metode inti untuk mengekstrak wawasan dari struktur graph. Analisis centrality dan community detection memberikan fondasi untuk memahami hierarki pengaruh dan pengelompokan node. Sementara itu, link prediction memanfaatkan pola koneksi yang sudah ada untuk mengidentifikasi kemungkinan relasi baru yang belum teramati. Untuk integrasi dengan model machine learning, node dan graph embedding menghasilkan representasi vektor berdimensi rendah yang mempertahankan informasi struktural dan semantik. Pada tingkat arsitektur, Graph Neural Networks (GNN) beroperasi melalui mekanisme message passing, di mana setiap node memperbarui representasinya dengan mengagregasi fitur dari tetangganya secara iteratif. Sebagai titik awal, Graph Convolutional Network (GCN) menawarkan implementasi yang sederhana dan efektif, namun ketika menghadapi skala besar atau kebutuhan generalisasi ke node yang belum pernah dilihat selama pelatihan, GraphSAGE menjadi pilihan yang lebih unggul berkat pendekatan sampling dan kemampuan inductive learning. Selain itu, penanganan heterogeneous dan dynamic graph menjawab kompleksitas data riil yang sering kali melibatkan multi-tipe relasi dan perubahan struktur seiring waktu. Hal ini juga secara langsung merujuk pada tantangan dan open problem yang dibahas pada slide sebelumnya, seperti oversmoothing, heterophily, skalabilitas, serta kebutuhan akan penjelasan dan fairness dalam model graph.

Untuk komponen penelitian, penekanan utama diletakkan pada pelaksanaan Experiment V1 dalam proyek akhir kalian. Sebagai mahasiswa pascasarjana, desain eksperimen harus memenuhi prinsip fairness dan validitas metodologis. Pastikan kalian membangun baseline yang kuat sebagai acuan komparatif, memilih metrik evaluasi yang sesuai dengan karakteristik tugas graph mining, serta mendokumentasikan seluruh pipeline eksperimen secara transparan. Dokumentasi yang lengkap bukan sekadar formalitas administratif, melainkan prasyarat mutlak untuk memastikan reproducibility hasil riset, yang merupakan standar emas dalam publikasi ilmiah internasional dan fondasi utama untuk pengembangan knowledge discovery yang kredibel.

### Inti yang Harus Ditekankan

- Graph mining menggeser paradigma analisis dari atribut statis ke pemahaman relasi dinamis antar entitas, membuka dimensi baru dalam ekstraksi pengetahuan.
- Pemilihan arsitektur GNN harus dipertimbangkan berdasarkan kebutuhan skalabilitas, tipe pembelajaran (transduktif vs induktif), dan kompleksitas struktur graph.
- Rigor metodologis dalam eksperimen, termasuk penggunaan baseline yang kompetitif, evaluasi yang tepat, dan dokumentasi penuh, adalah kunci keberhasilan riset tingkat magister.

### Transisi ke Slide Berikutnya

Dengan fondasi graph mining yang telah kita bangun, kini saatnya kita menyoroti aspek lain yang tak kalah kritis dalam sistem data modern: bagaimana model dan infrastruktur analitik beradaptasi ketika struktur dan distribusi data terus berubah seiring waktu. Mari kita lanjutkan ke pembahasan mengenai Temporal, Streaming Data, dan Concept Drift.
