# Slide 00 - Cover

EF235161 - TD Data Mining

Pertemuan 06

# Clustering & Unsupervised Data Mining

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D

Departemen Teknik Informatika - ITS

---

# Slide 01 - Posisi Pertemuan dalam Perkuliahan

Pertemuan ini melanjutkan pemahaman eksperimen data mining ke sisi **descriptive/unsupervised learning**. Sebelumnya kita telah membahas ensemble learning dan gradient boosting sebagai model prediktif yang kuat. Sekarang kita berbalik ke arah eksplorasi struktur data tanpa label.

- Sebelumnya: Ensemble Learning & Gradient Boosting → membangun strong baseline, memahami trade-off performa vs kompleksitas.
- Saat ini: Clustering & Unsupervised Data Mining → K-Means, hierarchical clustering, DBSCAN, cluster validity, visualisasi PCA/t-SNE/UMAP.
- Berikutnya: Anomaly Detection, Imbalanced Data & Rare Events → masalah data tidak seimbang dan deteksi kejadian langka, yang sangat bergantung pada pemahaman distribusi dan cluster.

---

# Slide 02 - Tujuan Pembelajaran dan CPMK

## CPMK yang didukung

- **CPMK-1**: Menganalisis konsep, asumsi, kelebihan, dan keterbatasan metode clustering.
- **CPMK-4**: Merancang eksperimen clustering yang valid, termasuk pemilihan metrik evaluasi dan interpretasi hasil.

## Tujuan pembelajaran khusus

- Menjelaskan prinsip kerja K-Means, hierarchical clustering, dan DBSCAN.
- Membandingkan K-Means dengan density-based clustering pada dataset dengan karakteristik berbeda.
- Menggunakan silhouette serta metrik internal/eksternal untuk menilai kualitas cluster.
- Menggunakan PCA, t-SNE, dan UMAP sebagai alat bantu visual tanpa menghilangkan sikap kritis.
- Mengaitkan pemahaman ini dengan finalisasi research gap masing-masing.

---

# Slide 03 - Unsupervised Learning: Konsep dan Posisi dalam Data Mining

Data mining dibagi menjadi dua mode utama:

- **Predictive**: menggunakan label untuk mempelajari fungsi pemetaan dari fitur ke target (klasifikasi, regresi).
- **Descriptive**: menemukan pola/struktur yang berguna tanpa label (association, clustering, anomaly).

Clustering termasuk **descriptive mining**. Tujuannya bukan memprediksi, tetapi mengelompokkan objek sehingga anggota dalam cluster lebih mirip satu sama lain dibandingkan dengan anggota cluster lain.

```text
Supervised:   (x, y) --> f(x) --> y_pred        evaluasi langsung terhadap y
Unsupervised:  x    --> g(x) --> klaster/noise  evaluasi lebih sulit, tanpa y
```

---

# Slide 04 - Tipe-tipe Clustering

| Pendekatan | Contoh | Karakteristik |
|---|---|---|
| Partitioning | K-Means, K-Medoids | Membagi data ke k cluster, setiap titik masuk ke satu cluster; cocok untuk data dengan bentuk kurang lebih globular. |
| Hierarchical | Agglomerative, Divisive | Menghasilkan dendrogram; tidak wajib menentukan k di awal; cocok untuk eksplorasi hierarki. |
| Density-based | DBSCAN, OPTICS, HDBSCAN | Cluster didefinisikan oleh kepadatan titik; mampu menangani bentuk arbitrary dan noise. |
| Model-based / lain | GMM, spectral clustering | Diasumsikan data berasal dari campuran distribusi; tidak dibahas detail pada pertemuan ini. |

Fokus pertemuan ini adalah K-Means, hierarchical clustering, dan density-based clustering.

---

# Slide 05 - K-Means: Konsep Dasar

K-Means adalah metode partitioning yang membagi dataset menjadi **k cluster** dengan meminimalkan **inertia** / WCSS.

- Setiap cluster direpresentasikan oleh **centroid** (rata-rata titik dalam cluster).
- Jarak umumnya menggunakan Euclidean distance.
- Fungsi objektif:

```text
J = Σ_{j=1}^k Σ_{x_i ∈ C_j} ||x_i - μ_j||²
```

Semakin kecil J, semakin kompak cluster. Namun J tidak dapat digunakan untuk membandingkan k yang berbeda secara langsung.

---

# Slide 06 - K-Means: Algoritma dan Kompleksitas

**Langkah-langkah:**

```text
1. Tentukan k dan inisialisasi pusat awal (μ₁,...,μₖ)
2. Assign setiap titik ke pusat terdekat
3. Hitung ulang pusat: μ_j = rata-rata titik di cluster j
4. Ulangi langkah 2-3 sampai konvergen
```

- Inisialisasi acak dapat menghasilkan solusi lokal yang berbeda. **k-means++** adalah inisialisasi yang lebih baik dan dipakai default di scikit-learn.
- Kompleksitas rata-rata: **O(n × k × d × iterasi)**, dengan n jumlah sampel, d dimensi.
- Konvergensi ke optimum global tidak dijamin; disarankan menjalankan beberapa kali dan memilih inertia terkecil.

---

# Slide 07 - K-Means: Menentukan k dan Keterbatasan

**Cara memilih k:**

- Elbow method: inertia turun tajam lalu melandai.
- Silhouette score rata-rata.
- Gap statistic, yaitu membandingkan inertia dengan data acak.

**Keterbatasan utama:**

- Harus menentukan k sebelumnya.
- Sensitif terhadap outlier dan skala fitur.
- Mengasumsikan cluster **globular** dengan varians relatif seragam.
- Tidak dapat merepresentasikan cluster berbentuk cincin, bulan sabit, atau bercabang.

Untuk mengatasi sebagian keterbatasan, muncul varian seperti K-Medoids dan Gaussian Mixture Models, tetapi tetap berbasis jarak atau distribusi parametrik.

---

# Slide 08 - Hierarchical Clustering: Konsep Dasar

Hierarchical clustering membangun hierarki cluster, bukan satu partisi tunggal.

- **Agglomerative (bottom-up)**: mulai dari tiap titik sebagai cluster sendiri, kemudian gabungkan dua cluster terdekat secara berulang.
- **Divisive (top-down)**: mulai dari satu cluster, pecah menjadi lebih kecil.

Output utama adalah **dendrogram**, yang menunjukkan urutan dan jarak penggabungan.

---

# Slide 09 - Linkage dan Dendrogram

Jarak antar cluster didefinisikan oleh **linkage criterion**:

| Linkage | Definisi jarak antar dua cluster | Kecenderungan |
|---|---|---|
| Single | jarak minimum antar anggota | dapat menghasilkan rantai memanjang |
| Complete | jarak maksimum antar anggota | cluster kompak |
| Average | rata-rata jarak semua pasangan | kompromi |
| Ward | peningkatan WCSS terkecil | cluster globular, sering dipakai |

Contoh dendrogram sederhana:

```text
A  B   C  D
 \ /    \ /
  X      Y
   \    /
    cluster
```

Dendrogram membantu memilih jumlah cluster dengan "memotong" pada tingkat jarak tertentu.

---

# Slide 10 - Hierarchical Clustering: Kelebihan dan Keterbatasan

**Kelebihan:**

- Tidak perlu menentukan k di awal.
- Memberikan gambaran hierarki yang dapat dieksplorasi.
- Cocok untuk data berukuran kecil–sedang dan analisis taksonomi.

**Keterbatasan:**

- Kompleksitas waktu dan ruang tinggi, umumnya **O(n²)**.
- Proses penggabungan bersifat **greedy**: tidak dapat diperbaiki.
- Sensitif terhadap outlier dan pilihan linkage/metrik jarak.
- Tidak praktis untuk data besar atau streaming.

Hierarchical clustering sering menjadi alternatif interpretatif sebelum memilih partisi akhir.

---

# Slide 11 - DBSCAN: Konsep Densitas

DBSCAN mengidentifikasi cluster berdasarkan kepadatan lokal titik.

- **ε-neighborhood**: tetangga dalam radius ε.
- **MinPts**: jumlah minimum titik untuk membentuk area padat.
- **Core point**: memiliki ≥ MinPts titik dalam ε-neighborhood.
- **Border point**: bukan core, tetapi berada di neighborhood core point.
- **Noise point**: bukan core maupun border.

```text
Gambar mental:
  . . .
    C .   <- titik pada tepi area padat
  . . .
  o   <- noise di luar area padat
```

---

# Slide 12 - DBSCAN: Algoritma

```text
for setiap titik p yang belum diproses:
    ambil semua tetangga p dalam radius ε
    jika jumlah tetangga < MinPts:
        tandai p sebagai noise (sementara)
    else:
        bentuk cluster baru berisi p dan tetangganya
        perluas cluster dengan tetangga yang memenuhi syarat density
```

- Dengan spatial index, kompleksitas mendekati **O(n log n)**; tanpa index **O(n²)**.
- Cluster dapat berbentuk **non-convex**, terpisah oleh daerah jarang.
- Titik noise tidak dipaksa masuk ke cluster mana pun — berbeda dengan K-Means.

---

# Slide 13 - DBSCAN: Parameter dan Sensitivitas

Dua parameter utama:

- **ε (eps)**: radius neighborhood.
  - Terlalu kecil → banyak titik menjadi noise.
  - Terlalu besar → cluster yang berbeda bergabung.
- **MinPts**: minimum titik untuk core.
  - Nilai umum: ≥ dimensi + 1, sering dimulai dari 5.

**Cara memilih ε**: plot *k-distance graph* — urutkan jarak ke tetangga ke-MinPts; cari titik "siku".

**Kelemahan**: satu nilai ε global tidak cocok jika densitas antar cluster sangat bervariasi. Solusinya adalah OPTICS atau HDBSCAN.

---

# Slide 14 - Density-Based Lanjutan: OPTICS dan HDBSCAN

- **OPTICS** memperluas DBSCAN dengan memproduksi *reachability plot*, sehingga tidak perlu memilih satu ε tunggal.
- **HDBSCAN** menggabungkan hierarchical clustering dengan pendekatan density-based. HDBSCAN dapat menemukan cluster dengan densitas bervariasi dan tidak memerlukan parameter ε.

Keduanya berguna ketika dataset nyata memiliki kepadatan yang tidak homogen — kondisi yang sering ditemui pada data sosial, biologi, atau sensor.

---

# Slide 15 - Perbandingan K-Means vs Density-Based Clustering

| Aspek | K-Means | DBSCAN / density-based |
|---|---|---|
| Bentuk cluster | globular, convex | arbitrary / non-convex |
| Jumlah cluster | harus ditentukan | ditemukan dari kepadatan (plus noise) |
| Outlier | memengaruhi pusat cluster | dibiarkan sebagai noise |
| Densitas bervariasi | tidak ditangani dengan baik | DBSCAN lemah, HDBSCAN lebih baik |
| Parameter utama | k | ε dan MinPts (atau min_cluster_size) |
| Skalabilitas | sangat cepat | O(n log n) dengan spatial index |
| Interpretasi | centroid | wilayah padat / hierarchy |

Praktikum 3 akan membuktikan perbedaan ini pada dataset sintetis.

---

# Slide 16 - Cluster Validity: Internal vs Eksternal

Evaluasi cluster bukan sekadar melihat plot. Ada dua keluarga metrik:

- **Internal validation**: menilai kualitas cluster menggunakan data itu sendiri, misalnya kohesi dan separasi. Tidak memerlukan label.
- **External validation**: membandingkan hasil cluster dengan ground truth label yang tersedia, misalnya pada dataset sintetis atau data berlabel.

Dalam penelitian, kedua jenis evaluasi digunakan bersama. Internal validation membantu ketika label tidak tersedia; external validation menunjukkan kesesuaian dengan struktur yang sudah diketahui.

---

# Slide 17 - Internal Validation Metrics

Beberapa metrik internal yang umum:

- **Inertia / WCSS**: jumlah kuadrat jarak titik ke centroid. Semakin kecil semakin baik, tetapi monoton turun terhadap k.
- **Davies-Bouldin index**: rasio rata-rata "kedekatan antar cluster" terhadap ukuran cluster. Nilai lebih rendah lebih baik.
- **Dunn index**: jarak minimum antar cluster dibagi diameter maksimum cluster. Nilai lebih tinggi lebih baik.
- **Silhouette**: menggabungkan kohesi dan separasi dalam rentang −1 hingga 1.

Metrik ini mengasumsikan cluster yang kompak dan terpisah. Jika bentuk cluster tidak globular, interpretasi harus hati-hati.

---

# Slide 18 - Silhouette: Definisi dan Interpretasi

Untuk setiap titik i:

- `a(i)` = rata-rata jarak ke semua titik di cluster yang sama (kohesi).
- `b(i)` = rata-rata jarak ke semua titik di cluster terdekat yang berbeda (separasi).

```text
s(i) = (b(i) - a(i)) / max(a(i), b(i))
```

- `s(i)` mendekati 1 → titik berada jauh dari cluster tetangga.
- `s(i)` mendekati 0 → titik berada di perbatasan dua cluster.
- `s(i)` negatif → titik kemungkinan salah cluster.

Silhouette rata-rata sering dipakai untuk membandingkan jumlah cluster k, tetapi tidak selalu sepakat dengan ground truth.

---

# Slide 19 - Silhouette: Contoh Interpretasi

- Rata-rata silhouette > 0.5 umumnya menunjukkan struktur yang cukup jelas.
- Jika banyak nilai di bawah 0 atau menumpuk di sekitar 0, cluster saling tumpang tindih atau parameter kurang tepat.
- Untuk K-Means, silhouette membantu memilih k optimal; untuk DBSCAN, silhouette dihitung hanya jika cluster yang terbentuk cukup dan berisi ≥ 2.
- Silhouette tidak menangkap bentuk kompleks: dua cluster "cincin" konsentris dapat menghasilkan silhouette rendah meskipun label terpisah sempurna.

Gunakan silhouette bersama metrik lain dan visualisasi.

---

# Slide 20 - External Validation Metrics

Jika label tanah (ground truth) tersedia, hasil cluster dapat dibandingkan dengan label:

- **Purity**: proporsi label mayoritas di tiap cluster.
- **Normalized Mutual Information (NMI)**: mengukur informasi bersama, dinormalisasi [0,1].
- **Adjusted Rand Index (ARI)**: kesamaan pasangan titik yang dikoreksi oleh chance; 1 = cocok sempurna, ~0 = acak.
- **Fowlkes-Mallows Index (FMI)**: geometric mean precision/recall pada pasangan titik.

External validation membantu mengukur seberapa dekat metode dengan label yang diketahui, tetapi label bukan satu-satunya "kebenaran" karena struktur natural data bisa berbeda.

---

# Slide 21 - Mengapa Evaluasi Unsupervised Lebih Sulit?

| Supervised | Unsupervised |
|---|---|
| Ada label y sebagai ground truth | Tidak ada label yang diterima universal |
| Metric jelas: accuracy, F1, AUC | Definisi "cluster yang baik" bergantung konteks |
| Perbandingan antar model sederhana | Internal metric tidak konsisten antar dataset |
| Visualisasi hanya pendukung | Visualisasi sering dipakai sebagai bukti |

Masalah utama:

- Tidak ada objective tunggal.
- Hasil dapat tidak stabil terhadap random seed, inisialisasi, atau parameter.
- Interpretasi domain diperlukan.

Dalam penelitian, hindari klaim "cluster terlihat benar di plot"; gunakan bukti kuantitatif dan analisis stabilitas.

---

# Slide 22 - PCA: Reduksi Dimensi Linear

**Principal Component Analysis (PCA)** adalah teknik reduksi dimensi linear.

- Mencari arah (komponen utama) yang memaksimalkan variansi.
- Menggunakan dekomposisi eigen pada matriks kovarians.
- Hasilnya berupa proyeksi data ke ruang berdimensi lebih rendah, biasanya 2D untuk visualisasi.
- Komponen pertama menjelaskan variansi terbesar, kemudian komponen berikutnya.

**Catatan**: PCA mengoptimalkan variansi global, bukan keterpisahan cluster. Dua cluster yang berbeda dapat tampak tumpang tindih pada PC1-PC2 karena PCA tidak "tahu" label.

---

# Slide 23 - PCA: Implementasi di Python

```python
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

X_scaled = StandardScaler().fit_transform(X)

pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

print("Explained variance:", pca.explained_variance_ratio_)

plt.scatter(X_pca[:, 0], X_pca[:, 1], c=y_pred, alpha=0.6)
plt.xlabel("PC1")
plt.ylabel("PC2")
plt.show()
```

- Standarisasi fitur sangat penting sebelum PCA.
- Gunakan explained variance untuk membantu memilih jumlah komponen.

---

# Slide 24 - t-SNE: Visualisasi Non-Linear

**t-SNE** (t-distributed Stochastic Neighbor Embedding) memetakan data berdimensi tinggi ke 2D/3D sambil mempertahankan kesamaan lokal.

- Konversi jarak menjadi probabilitas bersyarat; poin serupa memiliki probabilitas tinggi.
- Non-linear, sehingga bentuk cluster non-globular dapat terlihat lebih jelas daripada PCA.
- Parameter penting: `perplexity` (keseimbangan lokal-global), `learning_rate`, dan jumlah iterasi.

**Peringatan**:

- Hasil antar run dapat berbeda; selalu set `random_state` untuk reproduksibilitas.
- Jarak antar cluster di plot **tidak selalu bermakna**.
- Ukuran cluster di t-SNE bisa menipu.

---

# Slide 25 - UMAP: Visualisasi Non-Linear Modern

**UMAP** adalah teknik manifold learning yang dirancang untuk mempertahankan struktur global sekaligus lokal.

- Lebih cepat daripada t-SNE pada data besar.
- Parameter utama: `n_neighbors`, `min_dist`, `n_components`.
- Hasil visual sering lebih stabil dan menunjukkan hierarki antar kelompok.

```python
import umap
reducer = umap.UMAP(n_neighbors=15, min_dist=0.1, random_state=42)
X_umap = reducer.fit_transform(X_scaled)
```

UMAP dapat digunakan untuk eksplorasi data dan *cluster tendency*, tetapi bukan pengganti validasi kuantitatif.

---

# Slide 26 - Perbandingan PCA, t-SNE, dan UMAP

| Sifat | PCA | t-SNE | UMAP |
|---|---|---|---|
| Transformasi | linear | non-linear | non-linear |
| Interpretasi | explained variance | visual saja | visual + struktur |
| Kecepatan | sangat cepat | lambat pada data besar | sedang–cepat |
| Reproducibility | deterministik | perlu seed | perlu seed |
| Kegunaan | preprocessing, EDA | eksplorasi lokal | eksplorasi global/lokal |
| Ketepatan jarak | terjaga secara linear | jarak antar cluster tidak bermakna | jarak relatif lebih dipercaya |

Untuk riset, gunakan reduksi dimensi sebagai eksplorasi, bukan metrik evaluasi.

---

# Slide 27 - Menghindari Kesimpulan Berlebihan dari Visualisasi

Visualisasi cluster sering mengesankan struktur yang jelas, padahal belum tentu valid. Beberapa jebakan:

1. **PCA menunjukkan pemisahan karena skala/outlier**, bukan struktur sebenarnya.
2. **t-SNE selalu membuat kelompok terlihat**, bahkan pada data acak.
3. **K-Means memaksa semua titik ke cluster**, sehingga noise ikut terlihat seperti cluster.
4. **Plot warna** membuat pemisahan tampak lebih tajam daripada kenyataannya.

Cara memitigasi:

- Periksa metrik internal/eksternal.
- Jalankan metode pada data acak sebagai null model.
- Ulangi dengan seed dan parameter berbeda.
- Laporkan parameter secara transparan.

---

# Slide 28 - Praktikum 3: Tujuan dan Ruang Lingkup

Praktikum ini adalah **experimental assignment** yang menghubungkan konsep klasterisasi dengan evaluasi metodologis.

**Tujuan:**

- Membandingkan K-Means dengan density-based clustering (DBSCAN) pada dataset dengan karakteristik berbeda.
- Menganalisis kualitas cluster menggunakan internal dan external metrics.
- Melakukan interpretasi hasil, bukan sekadar menjalankan fungsi.

**Alat:** Python, scikit-learn, pandas, matplotlib/seaborn, Jupyter/Colab.

**Output:** notebook yang memuat eksperimen, visualisasi, dan analisis kritis.

---

# Slide 29 - Praktikum 3: Karakteristik Dataset

Gunakan dataset sintetis yang mewakili kondisi berbeda:

| Dataset | Karakteristik | Algoritma yang semestinya unggul |
|---|---|---|
| Blobs | cluster globular, ukuran sama | K-Means |
| Varied blobs | cluster globular, varians beda | K-Means dengan scaling |
| Moons | cluster non-linear, bulan sabit | DBSCAN |
| Circles / rings | cluster konsentris | DBSCAN |
| Density varied | kepadatan antar cluster berbeda | HDBSCAN / DBSCAN dengan tuning sulit |
| Noise + blobs | ada outlier | DBSCAN lebih robust |

Untuk tiap dataset, catat jumlah titik, noise, dan label asli untuk evaluasi eksternal.

---

# Slide 30 - Praktikum 3: Prosedur Eksperimen

Berikut alur yang disarankan:

```text
1. Muat/generate dataset, standarisasi fitur.
2. Tentukan k atau parameter awal.
3. Latih K-Means (n_init ≥ 10) dan DBSCAN.
4. Evaluasi eksternal: ARI, NMI, purity (jika label tersedia).
5. Evaluasi internal: silhouette, Davies-Bouldin.
6. Visualisasi data asli, hasil cluster, dan PCA/t-SNE.
7. Analisis sensitivity: ubah eps/min_samples, bandingkan.
8. Interpretasi: metode mana yang cocok untuk setiap dataset dan mengapa.
```

Jangan lupa menetapkan `random_state` agar hasil reproducible.

---

# Slide 31 - Praktikum 3: Contoh Kode Python

```python
from sklearn.cluster import KMeans, DBSCAN
from sklearn.metrics import silhouette_score, adjusted_rand_score

## K-Means
km = KMeans(n_clusters=3, n_init=10, random_state=0)
y_km = km.fit_predict(X_scaled)

## DBSCAN
db = DBSCAN(eps=0.5, min_samples=5)
y_db = db.fit_predict(X_scaled)

print("KMeans  Silhouette:", silhouette_score(X_scaled, y_km))
print("DBSCAN  Silhouette:", silhouette_score(X_scaled, y_db))

## Jika y_true ada
print("ARI KMeans :", adjusted_rand_score(y_true, y_km))
print("ARI DBSCAN :", adjusted_rand_score(y_true, y_db))
```

Catatan: DBSCAN bisa menghasilkan label -1 (noise); `silhouette_score` hanya dihitung jika jumlah cluster ≥ 2 dan semua sampel tidak noise.

---

# Slide 32 - Praktikum 3: Analisis Kualitas dan Interpretasi Cluster

Dalam analisis, jawab pertanyaan berikut:

- Berapa jumlah cluster yang dihasilkan K-Means dan DBSCAN?
- Apakah DBSCAN menghasilkan noise? Bagaimana pengaruhnya terhadap metrik?
- Silhouette mana yang lebih tinggi? Apakah itu sejalan dengan ARI/NMI?
- Pada dataset moons/circles, mengapa K-Means menghasilkan partisi yang "terlihat" masuk akal tetapi salah terhadap label?
- Bagaimana perubahan `eps` memengaruhi jumlah cluster dan noise?

Kesimpulan yang baik menghubungkan karakteristik dataset dengan asumsi algoritma, bukan sekadar "DBSCAN menang".

---

# Slide 33 - Fokus Penelitian: Interpretasi dan Validitas

Fokus utama pertemuan ini adalah kesadaran metodologis:

> Evaluasi unsupervised learning lebih sulit daripada supervised learning.

Beberapa implikasi untuk penelitian:

- Jika Anda mengusulkan metode clustering baru, Anda harus membandingkan dengan baseline dan menguji stabilitas.
- Visualisasi PCA/t-SNE/UMAP hanyalah pelengkap, bukan bukti.
- Hasil clustering perlu divalidasi dengan metrik internal, eksternal (jika ada), dan pengetahuan domain.

Hindari kesimpulan berlebihan seperti "cluster yang dihasilkan jelas terpisah" tanpa angka pendukung.

---

# Slide 34 - Research Project: Finalisasi Research Gap

Pada minggu ini, progress project Anda adalah **finalisasi research gap**.

Pertanyaan pemandu:

- Apakah gap tersebut sudah didukung oleh literatur dan EDA awal?
- Apakah metode yang Anda rencanakan memiliki kondisi evaluasi yang jelas?
- Apakah Anda mampu merancang eksperimen yang menjawab research question?

Hubungan dengan clustering:

- Jika topik Anda berkaitan dengan pola data tanpa label, gap harus menyebut kelebihan/keterbatasan metode clustering terkait.
- Jika topik Anda supervised, tetap gunakan sudut pandang unsupervised untuk memahami distribusi data.

Setelah minggu ini, Anda siap menyusun research question dan hipotesis di pertemuan berikutnya.

---

# Slide 35 - Checkpoint: Yang Harus Anda Kuasai

Setelah mempelajari materi ini, Anda diharapkan mampu menjawab:

1. Kapan K-Means cocok digunakan? Apa asumsinya?
2. Bagaimana cara kerja agglomerative hierarchical clustering dan apa peran dendrogram?
3. Apa definisi core, border, dan noise point pada DBSCAN?
4. Mengapa silhouette digunakan, dan apa keterbatasannya?
5. Apa perbedaan internal vs external evaluation?
6. Bagaimana PCA, t-SNE, dan UMAP membantu eksplorasi, tetapi tidak membuktikan kualitas cluster?
7. Mengapa visualisasi cluster bisa menyesatkan?

Jika ragu, diskusikan melalui forum atau research clinic.

---

# Slide 36 - Referensi dan Bacaan Lanjut

- Han, J., Pei, J., & Tong, H. *Data Mining: Concepts and Techniques*, 4th Edition. Morgan Kaufmann, 2023.
- Tan, P.-N., Steinbach, M., Karpatne, A., & Kumar, V. *Introduction to Data Mining*, 2nd Edition. Pearson, 2019.
- Scikit-learn documentation: Clustering, Decomposition, Manifold learning. https://scikit-learn.org/stable/
- Pedregosa et al., "Scikit-learn: Machine Learning in Python", JMLR 12, 2011.
- McInnes, L., Healy, J., & Melville, J. "UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction", 2018.

Gunakan referensi ini untuk memperdalam detail matematis dan implementasi.

---

# Slide 37 - Penutup

TERIMA KASIH

Pertemuan berikutnya

**Anomaly Detection, Imbalanced Data & Rare Events**