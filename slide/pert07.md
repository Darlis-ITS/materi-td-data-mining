# Slide 00 - Cover

EF235161 - TD Data Mining

Pertemuan 07

## Anomaly Detection, Imbalanced Data & Rare Events

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D

Departemen Teknik Informatika - ITS

---

# Slide 01 - Posisi Pertemuan dalam RPS

## Alur Perkuliahan

```text
Minggu 1-2: Fondasi & EDA          → Memahami data
Minggu 3-5: Pattern, Classification → Memahami pola & prediksi
Minggu 6:   Clustering              → Memahami struktur
Minggu 7:   Anomaly & Rare Events   → Memahami kejadian langka
Minggu 8:   Paper Review & Proposal → Merumuskan penelitian
```

- Pertemuan sebelumnya (6): **Clustering & Unsupervised Data Mining** — memahami kelompok normal dan struktur data tanpa label.
- Pertemuan ini (7): **Anomaly Detection, Imbalanced Data & Rare Events** — mempelajari bagaimana mendeteksi kejadian langka dan menyikapi data yang sangat tidak seimbang.
- Pertemuan berikutnya (8): **Critical International Paper Review & Research Proposal Seminar** — mahasiswa mempresentasikan proposal penelitian yang salah satunya dibangun dari research question yang dirumuskan pada pertemuan ini.

---

# Slide 02 - Capaian Pembelajaran yang Didukung

## CPMK yang Terkait

| CPMK | Fokus |
|---|---|
| CPMK-1 | Menganalisis konsep dan metode anomaly detection, imbalanced learning, dan rare-event mining |
| CPMK-3 | Merumuskan research question dan hipotesis dari permasalahan rare-event |
| CPMK-4 | Merancang eksperimen yang valid untuk data tidak seimbang, termasuk pemilihan metrik yang tepat |

## Tujuan Pertemuan

- Memahami perbedaan konseptual antara **outlier** dan **anomaly**.
- Menguasai metode deteksi anomali: Isolation Forest, Local Outlier Factor, One-Class methods, dan Autoencoder.
- Menguasai strategi penanganan data tidak seimbang: resampling, SMOTE, dan cost-sensitive learning.
- Menganalisis mengapa **accuracy** menjadi metrik yang menyesatkan pada rare-event problems.
- Menghubungkan seluruh konsep dengan studi kasus fraud, cybersecurity, dan predictive maintenance.

---

# Slide 03 - Pentingnya Rare-Event Mining dalam Penelitian

## Mengapa Topik Ini Krusial?

Banyak permasalahan dunia nyata memiliki karakteristik:

```text
Kejadian normal  → 99% data
Kejadian langka  →  1% data (namun dampaknya besar)
```

| Domain | Contoh Kejadian Langka | Dampak Jika Terlewat |
|---|---|---|
| Perbankan | Transaksi fraud | Kerugian finansial |
| Cybersecurity | Serangan jaringan | Kebocoran data, downtime |
| Industri | Kerusakan mesin | Berhentinya produksi |
| Kesehatan | Penyakit langka | Diagnosis terlambat |

## Implikasi Penelitian

- Model yang selalu memprediksi kelas mayoritas memperoleh **accuracy tinggi** tetapi **tidak berguna**.
- Penelitian rare-event membutuhkan metrik evaluasi, metode, dan desain eksperimen yang berbeda dari klasifikasi biasa.
- Pertemuan ini menjadi fondasi metodologis bagi mahasiswa yang meneliti fraud detection, intrusion detection, predictive maintenance, dan topik serupa.

---

# Slide 04 - Outlier vs Anomaly: Definisi

## Outlier

> Suatu observasi yang **menyimpang secara signifikan** dari observasi lain dalam dataset, relatif terhadap distribusi data yang ada.

- Konsepnya berbasis **statistik** dan **data**.
- Outlier dapat berupa noise, error pengukuran, atau kejadian menarik.
- Sering diidentifikasi menggunakan jarak dari pusat distribusi (z-score, IQR).

## Anomaly

> Suatu pola atau observasi yang **tidak sesuai dengan perilaku normal** yang diharapkan dalam suatu sistem atau proses.

- Konsepnya berbasis **semantik** dan **konteks**.
- Anomali memiliki makna: fraud, serangan, kegagalan.
- Tidak semua outlier adalah anomali, dan tidak semua anomali tampak sebagai outlier secara statistik.

---

# Slide 05 - Outlier vs Anomaly: Perbandingan

| Aspek | Outlier | Anomaly |
|---|---|---|
| Definisi | Data yang jauh dari mayoritas | Penyimpangan dari perilaku normal yang bermakna |
| Sumber | Noise, error, ekstrem alami | Aktivitas jahat, kegagalan, kejadian langka |
| Konteks | Didefinisikan oleh data | Didefinisikan oleh sistem/proses |
| Nilai | Dapat dibuang sebagai noise | Harus dideteksi dan ditindaklanjuti |
| Contoh | Kesalahan sensor suhu | Kartu kredit digunakan di negara lain pada jam yang sama |

## Mengapa Perbedaan Ini Penting?

- Dalam penelitian, pemilihan metode dan interpretasi hasil bergantung pada **apa yang ingin kita deteksi**.
- Studi kasus fraud/cybersecurity/predictive maintenance berfokus pada **anomaly**, bukan sekadar outlier statistik.
- Keputusan menghapus outlier pada preprocessing (Pertemuan 2) harus dibedakan dari keputusan mendeteksi anomaly sebagai objek penelitian.

---

# Slide 06 - Tipe-Tipe Anomaly

## Berdasarkan Jumlah Observasi

| Tipe | Deskripsi | Contoh |
|---|---|---|
| **Point anomaly** | Satu observasi menyimpang sendiri | Satu transaksi dengan nominal sangat besar |
| **Contextual anomaly** | Menyimpang dalam konteks tertentu | Suhu normal di siang hari tetapi anomali di malam hari |
| **Collective anomaly** | Sekumpulan observasi menyimpang bersama | Serangan DDoS: lonjakan trafik dari banyak sumber dalam waktu singkat |

## Ilustrasi Sederhana

```text
Point:      x x x x x x x [Ø] x x x x
Contextual: (pagi) 30°C → normal
            (malam) 30°C → anomali
Collective: [10, 12, 11, 13] → normal
            [50, 48, 52, 49] → anomali bersama
```

Pemilihan metode deteksi anomali sangat bergantung pada tipe anomali yang menjadi target.

---

# Slide 07 - Tantangan Deteksi Anomali

## Karakteristik Masalah

1. **Ketidakseimbangan ekstrem**: jumlah anomali sangat sedikit dibanding normal.
2. **Label tidak selalu tersedia**: sering kali hanya data normal yang diketahui.
3. **Perbatasan kabur**: tidak selalu jelas di mana normal berakhir dan anomali dimulai.
4. **Concept drift**: definisi normal dapat berubah seiring waktu.
5. **False positive vs false negative trade-off**: salah mengklasifikasikan normal sebagai anomali juga berbiaya.

## Perspektif Penelitian

- Deteksi anomali dapat dipandang sebagai:
  - **Supervised**: label anomali tersedia.
  - **Unsupervised**: tanpa label, mencari penyimpangan dari struktur mayoritas.
  - **Semi-supervised / One-Class**: hanya menggunakan data normal untuk training.
- Pemilihan paradigma harus disesuaikan dengan ketersediaan label dan tujuan penelitian.

---

# Slide 08 - Gambaran Umum Metode

## Peta Metode yang Akan Dibahas

```text
Deteksi Anomali & Rare Events
├── Metode Deteksi Anomali
│   ├── Unsupervised: Isolation Forest, LOF
│   ├── One-Class: One-Class SVM, One-Class NN
│   └── Reconstruction-based: Autoencoder
├── Penanganan Imbalanced Data
│   ├── Oversampling / Undersampling
│   ├── SMOTE dan variasi
│   └── Cost-sensitive learning
└── Evaluasi yang Tepat
    ├── Precision, Recall, F1
    ├── PR-AUC, ROC-AUC
    └── Cost-based metrics
```

Metode deteksi anomali dapat dikombinasikan dengan strategi imbalanced learning untuk membangun sistem yang andal pada rare-event problems.

---

# Slide 09 - Isolation Forest: Intuisi Dasar

## Konsep

- Anomali lebih **mudah diisolasi** daripada data normal.
- Dengan menggunakan **decision tree acak**, anomali akan terisolasi hanya dalam **sedikit pemisahan** (split).
- Semakin cepat suatu titik terisolasi, semakin besar kemungkinannya menjadi anomali.

## Ilustrasi

```text
Data normal:      x x x x x x x x x x x x
Split 1:          |--------|  x  |--------|
Split 2:                |---|  x  |---|
Split 3:                    |---x---|      ← langsung terisolasi

Anomali:  x  (jauh dari kelompok)
Split 1:  |---|---x---|---|               ← cepat terisolasi
```

## Path Length

- Setiap titik memiliki **rata-rata panjang jalur** (average path length) dalam banyak pohon.
- Anomali memiliki panjang jalur yang lebih pendek.

---

# Slide 10 - Isolation Forest: Algoritma

## Langkah-Langkah

1. Bangun **t banyak pohon isolasi** (isolation trees) dari subset data secara acak.
2. Pada setiap pohon, pilih fitur acak dan nilai split acak.
3. Rekursif bagi data hingga setiap titik terisolasi atau kedalaman maksimum tercapai.
4. Hitung **anomaly score** berdasarkan rata-rata path length.

## Anomaly Score

```text
score(x) = 2^(-E(h(x)) / c(n))

E(h(x))  = rata-rata path length x pada semua pohon
c(n)     = konstanta normalisasi berdasarkan jumlah data n

Score mendekati 1 → sangat mungkin anomali
Score ≈ 0.5      → normal
Score < 0.5      → sangat normal
```

## Karakteristik

- Efisien untuk dataset besar (kompleksitas O(t · n · log n)).
- Tidak memerlukan perhitungan jarak antar semua pasangan data.
- Cocok untuk data tabular berdimensi tinggi.

---

# Slide 11 - Isolation Forest: Pseudocode Python

```python
from sklearn.ensemble import IsolationForest
import numpy as np

X = np.array([[...], [...], ...])   # data fitur

model = IsolationForest(
    n_estimators=100,      # jumlah pohon
    max_samples="auto",    # ukuran subset per pohon
    contamination=0.01,    # perkiraan proporsi anomali
    random_state=42
)

model.fit(X)

## prediksi: 1 = normal, -1 = anomali
prediksi = model.predict(X)

## anomaly score: semakin tinggi semakin anomali
skor = model.score_samples(X)
```

## Catatan Penelitian

- Parameter `contamination` harus disesuaikan dengan pengetahuan domain atau ditentukan melalui validasi.
- Model tidak membutuhkan label saat training → cocok untuk **unsupervised anomaly detection**.

---

# Slide 12 - Local Outlier Factor (LOF): Intuisi

## Konsep

- Anomali adalah titik yang **kepadatan lokalnya jauh lebih rendah** dibandingkan tetangganya.
- LOF mengukur **derajat ke-outlier-an** berdasarkan perbandingan kepadatan lokal.

## Ilustrasi

```text
      a a a a
       a a a a        Titik C jauh dari kelompok → kepadatan rendah → LOF tinggi
        a a a a
              b
               b
                C

Titik b berada di tepi: kepadatan lokalnya masih dekat dengan kelompok
Titik C terisolasi: kepadatan lokalnya rendah → Anomali
```

## Konsep Kunci

- **k-distance**: jarak ke tetangga ke-k.
- **Reachability distance**: jarak yang dimodifikasi untuk mengurangi noise.
- **Local reachability density (lrd)**: kebalikan dari rata-rata reachability distance.
- **LOF = rata-rata lrd tetangga / lrd titik itu sendiri**.

---

# Slide 13 - Local Outlier Factor (LOF): Pseudocode Python

```python
from sklearn.neighbors import LocalOutlierFactor
import numpy as np

X = np.array([[...], [...], ...])

model = LocalOutlierFactor(
    n_neighbors=20,
    contamination=0.01
)

## LOF diimplementasikan sebagai unsupervised detector
prediksi = model.fit_predict(X)   # 1 = normal, -1 = anomali
skor = model.negative_outlier_factor_
## Semakin negatif → semakin anomali
```

## Kapan Menggunakan LOF?

- Data memiliki **cluster dengan kepadatan berbeda**.
- Anomali berbentuk **lokal**, bukan global.
- Dataset tidak terlalu besar (perhitungan tetangga dapat mahal).

## Kapan Tidak?

- Dimensi sangat tinggi → jarak menjadi kurang bermakna (curse of dimensionality).
- Dataset sangat besar → komputasi kNN mahal.

---

# Slide 14 - Perbandingan Isolation Forest vs LOF

| Aspek | Isolation Forest | Local Outlier Factor |
|---|---|---|
| Konsep utama | Kemudahan isolasi | Kepadatan lokal |
| Kompleksitas | O(t · n · log n) | O(n²) untuk jarak, dapat dipercepat dengan struktur indeks |
| Dimensi tinggi | Lebih tahan | Kurang efektif |
| Anomali global | Baik | Baik |
| Anomali lokal | Kurang sensitif | Sangat baik |
| Parameter utama | n_estimators, contamination | n_neighbors, contamination |

## Kesimpulan

- Tidak ada satu metode yang unggul secara universal.
- Penelitian yang baik membandingkan beberapa metode sebagai **baseline** (hubungan dengan Pertemuan 4).
- Hasil deteksi anomali sering menjadi **input** untuk model klasifikasi imbalanced.

---

# Slide 15 - One-Class Methods: Konsep

## Paradigma One-Class Classification

- Hanya menggunakan data dari **satu kelas** (kelas normal) saat training.
- Tujuan: mempelajari batas dari kelas normal sehingga data di luar batas dianggap anomali.
- Sangat relevan ketika data anomali sulit didapat atau terlalu langka.

## Kapan Digunakan?

- Label anomali tidak tersedia atau tidak representatif.
- Data normal mudah dikumpulkan, data anomali sangat jarang.
- Contoh: defect detection di pabrik — data produk normal melimpah, data cacat sangat sedikit.

## Varian Umum

- **One-Class SVM (OCSVM)** — memisahkan data normal dari origin di feature space.
- **One-Class Neural Networks** — mempelajari representasi yang memisahkan data normal dari pusat/distribusi.

---

# Slide 16 - One-Class SVM: Cara Kerja

## Intuisi

- Peta data ke feature space berdimensi tinggi melalui kernel.
- Cari hyperplane yang memisahkan data normal dari **origin** sejauh mungkin.
- Data yang berada di sisi origin dianggap anomali.

## Ilustrasi Sederhana

```text
Feature space:
                     ● ●
                   ● ● ●
                    ● ●        ← data normal (dipisahkan dari origin)
                        →      ← hyperplane
Origin:            ○ ○        ← sisi origin diasumsikan anomali
```

## Formula Inti

```text
min  ½||w||² + (1/(ν·n)) Σ ξᵢ - ρ
w,ρ

dengan syarat: w·Φ(xᵢ) ≥ ρ - ξᵢ, ξᵢ ≥ 0

ν = hyperparameter yang mengontrol proporsi data yang boleh menjadi
    anomali (0 < ν ≤ 1)
```

---

# Slide 17 - One-Class SVM: Implementasi dan Keterbatasan

## Implementasi Python

```python
from sklearn.svm import OneClassSVM

model = OneClassSVM(
    kernel="rbf",
    nu=0.01,          # upper bound proporsi anomali
    gamma="scale"
)
model.fit(X_normal)   # hanya data normal

prediksi = model.predict(X)      # 1 = normal, -1 = anomali
skor = model.decision_function(X)  # positif normal, negatif anomali
```

## Keterbatasan

- Pemilihan kernel dan hyperparameter `nu`, `gamma` sensitif.
- Sulit diskalakan untuk dataset sangat besar.
- Interpretasi hasil bergantung pada asumsi kernel yang dipilih.

## Catatan Penelitian

- One-Class SVM adalah **strong baseline** yang umum digunakan pada anomaly detection.
- Perbandingan dengan Isolation Forest dan LOF sering menjadi bagian dari eksperimen.

---

# Slide 18 - Autoencoder sebagai Pengantar

## Konsep Dasar Autoencoder

- Jaringan saraf yang dilatih untuk **merekonstruksi input**.
- Terdiri dari:
  - **Encoder**: memampatkan input ke representasi laten berdimensi rendah.
  - **Decoder**: merekonstruksi kembali input dari representasi laten.
- Model dilatih hanya dengan **data normal**.

## Ilustrasi Arsitektur

```text
Input x ──→ Encoder ──→ z (representasi laten) ──→ Decoder ──→ Rekonstruksi x'

               Dimensi z << dimensi x
```

## Cara Mendeteksi Anomali

- Data normal: rekonstruksi baik → error kecil.
- Anomali: rekonstruksi buruk → error besar.
- Error rekonstruksi digunakan sebagai **anomaly score**.

---

# Slide 19 - Autoencoder: Arsitektur dan Loss

## Representasi Arsitektur

```text
Input (dimensi d)
    ↓
Dense (32, ReLU)        ← Encoder
    ↓
Dense (8, ReLU)         ← Bottleneck / representasi laten
    ↓
Dense (32, ReLU)        ← Decoder
    ↓
Output (dimensi d, Linear/Sigmoid)
```

## Loss Function

```text
L = ||x - x_hat||²   (Mean Squared Error)

Semakin kecil loss, semakin baik rekonstruksi.
Pada saat inference:

anomaly_score(x) = MSE(x, x_hat)
```

## Catatan Penting

- Autoencoder adalah **pengantar** ke deep learning untuk tabular data.
- Pembahasan mendalam tentang deep tabular learning akan dilanjutkan pada **Pertemuan 9**.
- Pada pertemuan ini, fokus pada penggunaan autoencoder sebagai **unsupervised anomaly detector**.

---

# Slide 20 - Autoencoder: Pseudocode Python

```python
import tensorflow as tf
from tensorflow import keras

## 1. Definisikan arsitektur
encoder = keras.Sequential([
    keras.layers.Dense(32, activation="relu", input_shape=(d,)),
    keras.layers.Dense(8, activation="relu")
])
decoder = keras.Sequential([
    keras.layers.Dense(32, activation="relu", input_shape=(8,)),
    keras.layers.Dense(d, activation="linear")
])
autoencoder = keras.Sequential([encoder, decoder])

## 2. Compile dan training hanya pada data normal
autoencoder.compile(optimizer="adam", loss="mse")
autoencoder.fit(X_normal, X_normal, epochs=50, batch_size=64)

## 3. Hitung reconstruction error
rekonstruksi = autoencoder.predict(X)
skor = ((X - rekonstruksi) ** 2).mean(axis=1)
```

## Keputusan Anomali

```text
skor > threshold → anomali
skor <= threshold → normal
```

- Threshold ditentukan dari distribusi error pada data normal (misal: persentil 99).

---

# Slide 21 - Ringkasan Metode Deteksi Anomali

## Tabel Perbandingan

| Metode | Paradigma | Kebutuhan Label | Keunggulan | Keterbatasan |
|---|---|---|---|---|
| Isolation Forest | Unsupervised | Tidak | Cepat, skala besar | Kurang peka anomali lokal |
| LOF | Unsupervised | Tidak | Anomali lokal | Mahal, sensitif dimensi |
| One-Class SVM | One-class | Tidak (hanya normal) | Batas fleksibel | Sensitif hyperparameter |
| Autoencoder | Unsupervised | Tidak (hanya normal) | Representasi non-linear | Butuh tuning, data cukup besar |

## Pedoman Praktis

- Untuk dataset besar dan tabular: mulai dari **Isolation Forest**.
- Untuk anomali lokal pada data dengan klaster: gunakan **LOF**.
- Untuk data normal-only: gunakan **One-Class SVM**.
- Untuk data kompleks/non-linear: gunakan **Autoencoder**.

---

# Slide 22 - Imbalanced Data: Definisi dan Karakteristik

## Definisi

> Data tidak seimbang terjadi ketika distribusi kelas sangat timpang, misalnya 99% kelas mayoritas dan 1% kelas minoritas.

## Tingkat Ketidakseimbangan (Imbalance Ratio)

```text
IR = jumlah sampel kelas mayoritas / jumlah sampel kelas minoritas

IR = 1      → seimbang
IR = 10     → moderat imbalanced
IR = 100+   → ekstrem imbalanced
```

## Contoh Rare-Event Problems

| Domain | Kelas Mayoritas | Kelas Minoritas | IR Khas |
|---|---|---|---|
| Fraud detection | Transaksi normal | Transaksi fraud | 100–1000 |
| Cybersecurity | Trafik normal | Serangan | 10–100 |
| Predictive maintenance | Mesin normal | Kerusakan | 50–500 |

---

# Slide 23 - Mengapa Accuracy Menyesatkan?

## Contoh Konkret

Dataset: 10.000 transaksi, 100 di antaranya fraud (1%).

```text
Model selalu memprediksi "normal" untuk semua transaksi:

ACCURACY = 9900 / 10000 = 99%

Namun:

Fraud yang terdeteksi = 0 dari 100  → Recall = 0%
Semua transaksi fraud lolos! System tidak berguna.
```

## Ilustrasi Confusion Matrix

```text
                    Prediksi
                 Normal   Fraud
Aktual Normal     9900      0
Aktual Fraud        0       0

Accuracy = (9900 + 0) / 10000 = 99%
Recall fraud = 0 / 100 = 0%
```

## Pelajaran

- Accuracy hanya bermakna jika **biaya kesalahan klasifikasi antar kelas seimbang**.
- Pada rare-event problems, kesalahan klasifikasi kelas minoritas jauh lebih mahal.
- Evaluasi harus menggunakan metrik yang **memisahkan performa per kelas** dan/atau mempertimbangkan biaya.

---

# Slide 24 - Metrik Evaluasi untuk Imbalanced Data

## Confusion Matrix Dasar

```text
                      Prediksi Positif    Prediksi Negatif
Aktual Positif           TP                    FN
Aktual Negatif           FP                    TN
```

## Metrik Per Kelas

| Metrik | Rumus | Makna |
|---|---|---|
| Precision | TP / (TP + FP) | Dari semua prediksi positif, berapa yang benar |
| Recall / Sensitivity | TP / (TP + FN) | Dari semua aktual positif, berapa yang terdeteksi |
| Specificity | TN / (TN + FP) | Dari semua aktual negatif, berapa yang benar |
| F1-score | 2·PR / (P+R) | Harmonic mean precision & recall |

## Interpretasi pada Fraud Detection

- **Recall (fraud)** = proporsi fraud yang berhasil ditangkap.
- **Precision (fraud)** = proporsi prediksi fraud yang benar-benar fraud.
- **F1** = keseimbangan antara keduanya.

---

# Slide 25 - PR-AUC vs ROC-AUC

## ROC-AUC

- Kurva hubungan **TPR (Recall)** dan **FPR (1 - Specificity)**.
- Cocok untuk data seimbang.
- Pada data sangat tidak seimbang, ROC-AUC dapat terlihat **terlalu optimis** karena FPR dihitung dari kelas mayoritas yang sangat banyak.

## PR-AUC (Precision-Recall AUC)

- Kurva hubungan **Precision** dan **Recall**.
- Lebih sensitif terhadap performa pada kelas positif/minoritas.
- Sangat direkomendasikan untuk rare-event problems.

## Ilustrasi

```text
ROC-AUC: melihat trade-off antara True Positive Rate dan False Positive Rate
PR-AUC:  melihat trade-off antara Precision dan Recall langsung

Pada IR = 1000, area ROC dapat besar hanya karena banyak True Negative.
PR-AUC memberikan sinyal yang lebih jujur tentang kemampuan mendeteksi rare events.
```

## Rekomendasi

- Laporkan **PR-AUC** sebagai metrik utama pada rare-event problems.
- Laporkan **ROC-AUC** sebagai pelengkap.
- Selalu laporkan **precision dan recall** pada threshold yang relevan.

---

# Slide 26 - Metrik Lain: Cost-Sensitive Evaluation

## Biaya Kesalahan yang Tidak Simetris

| Keputusan | Biaya |
|---|---|
| True Positive (fraud terdeteksi) | Biaya investigasi (kecil) |
| False Negative (fraud terlewat) | Kerugian nilai transaksi (besar) |
| False Positive (normal dianggap fraud) | Biaya investigasi + reputasi (sedang) |

## Cost Matrix

```text
                    Prediksi Positif    Prediksi Negatif
Aktual Positif        C(TP) = 0             C(FN) = 100
Aktual Negatif      C(FP) = 5               C(TN) = 0
```

## Total Cost

```text
Total Cost = C(FP) × FP + C(FN) × FN

Semakin rendah total cost, semakin baik model
```

## Profit / Savings Metrics

- Bagi sebagian domain, metrik akhir adalah **nilai uang yang diselamatkan**.
- Contoh: jumlah kerugian fraud yang berhasil dicegah dikurangi biaya investigasi.
- Metrik biaya harus dilaporkan bersama metrik klasik untuk menunjukkan **practical significance**.

---

# Slide 27 - Strategi Penanganan Imbalanced Data: Overview

## Peta Strategi

```text
Menangani Imbalanced Data
├── Data-level (resampling)
│   ├── Undersampling
│   ├── Oversampling
│   └── SMOTE & variants
├── Algorithm-level
│   ├── Cost-sensitive learning
│   ├── Threshold tuning
│   └── Ensemble dengan class weighting
└── Hybrid
    ├── SMOTE + ensemble
    └── Resampling + cost-sensitive model
```

## Prinsip Penting

- Resampling dilakukan pada **training set saja** untuk menghindari data leakage.
- **Test set harus mencerminkan distribusi asli** (tidak di-resample).
- Strategi penanganan harus dipilih berdasarkan eksperimen, bukan asumsi.

---

# Slide 28 - Undersampling

## Konsep

- Mengurangi jumlah sampel kelas mayoritas secara acak agar seimbang dengan kelas minoritas.
- Contoh: 10.000 normal, 100 fraud → ambil 100 normal secara acak.

## Keunggulan

- Mengurangi ukuran dataset → komputasi lebih cepat.
- Menghilangkan dominasi kelas mayoritas.

## Keterbatasan

- **Membuang banyak informasi** dari data normal.
- Acak → dapat membuang data penting.
- Model dapat kehilangan kemampuan mengenali variasi kelas mayoritas.

## Variasi

- **Random undersampling**: pemilihan acak.
- **NearMiss**: memilih sampel mayoritas yang dekat dengan batas.
- **Tomek links**: menghapus pasangan lintas kelas yang saling berdekatan.
- **Edited Nearest Neighbors (ENN)**: menghapus sampel mayoritas yang salah diklasifikasikan oleh kNN.

---

# Slide 29 - Oversampling

## Konsep

- Menambah jumlah sampel kelas minoritas dengan **duplikasi acak** atau **sintesis**.

## Random Oversampling

- Menduplikasi sampel minoritas secara acak hingga jumlahnya seimbang.
- Keunggulan: tidak membuang informasi.
- Keterbatasan: duplikasi menyebabkan model **overfit** karena banyak sampel identik.

## SMOTE (Synthetic Minority Over-sampling Technique)

- Membuat sampel **sintetis** dengan interpolasi antar sampel minoritas.
- Mengurangi risiko overfit dibanding duplikasi.

## Ilustrasi SMOTE

```text
Sampel minoritas:  A, B, C

Buat sampel baru D di antara A dan B:

D = A + λ × (B - A), dengan λ ∈ [0,1]

Jika λ = 0.5, D berada tepat di tengah garis A-B
```

---

# Slide 30 - SMOTE: Algoritma dan Implementasi

## Langkah-Langkah SMOTE

1. Pilih sampel minoritas x.
2. Temukan k tetangga terdekat dari kelas minoritas.
3. Pilih salah satu tetangga x_neighbor.
4. Buat sampel sintetis:

```text
x_syn = x + λ × (x_neighbor - x),  λ uniform [0,1]
```

5. Ulangi hingga jumlah minoritas mencapai target.

## Implementasi Python

```python
from imblearn.over_sampling import SMOTE
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

X_train, X_test, y_train, y_test = train_test_split(
    X, y, stratify=y, test_size=0.2, random_state=42
)

## SMOTE diterapkan pada training set saja
smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)

model = RandomForestClassifier(random_state=42)
model.fit(X_resampled, y_resampled)
```

## Catatan Kritis

- SMOTE mengasumsikan interpolasi antar sampel minoritas bermakna.
- Pada data berdimensi sangat tinggi atau dengan noise besar, SMOTE dapat menghasilkan sampel sintetis yang tidak realistis.

---

# Slide 31 - Variasi SMOTE dan Risiko Data Leakage

## Variasi yang Umum

| Metode | Perbedaan |
|---|---|
| SMOTE | Interpolasi acak pada sampel minoritas |
| Borderline-SMOTE | Fokus pada sampel minoritas di dekat batas kelas |
| ADASYN | Menghasilkan lebih banyak sampel untuk area yang sulit dipelajari |
| SMOTE-ENN | SMOTE dilanjutkan ENN untuk membersihkan sampel noise |
| SMOTE-Tomek | SMOTE dilanjutkan Tomek links untuk membersihkan batas |

## Risiko Data Leakage

- Jika resampling dilakukan **sebelum split** train-test, informasi dari test set bocor ke training set.
- Hal ini menghasilkan hasil evaluasi yang **tidak valid** dan **overly optimistic**.
- Urutan yang benar:

```text
Split data → Resample hanya training set → Fit model → Evaluasi pada test set asli
```

## Hubungan dengan Pertemuan 2

- Data leakage telah diperkenalkan pada EDA dan experimental validity (Pertemuan 2).
- Pada imbalanced learning, leakage melalui resampling adalah kesalahan yang sering terjadi dan harus dihindari.

---

# Slide 32 - Cost-Sensitive Learning

## Konsep

- Tidak mengubah distribusi data, tetapi mengubah **cara model menghitung kesalahan**.
- Model diberikan **penalti lebih besar** untuk kesalahan pada kelas minoritas.
- Implementasi pada banyak model melalui parameter **class_weight** atau **sample_weight**.

## Contoh pada scikit-learn

```python
from sklearn.ensemble import RandomForestClassifier

## class_weight "balanced" menyesuaikan bobot secara otomatis
model = RandomForestClassifier(
    class_weight="balanced",
    random_state=42
)

## Format manual: bobot per kelas
model = RandomForestClassifier(
    class_weight={0: 1.0, 1: 100.0},
    random_state=42
)
```

## Contoh pada Gradient Boosting (XGBoost)

```python
scale_pos_weight = jumlah_negatif / jumlah_positif

model = XGBClassifier(scale_pos_weight=scale_pos_weight)
```

## Keunggulan

- Tidak menambah data sintetis.
- Langsung mengekspresikan prioritas pada kelas minoritas.
- Dapat dikombinasikan dengan resampling.

---

# Slide 33 - Threshold Tuning sebagai Strategi Evaluasi

## Konsep

- Banyak model menghasilkan **probabilitas**, bukan keputusan langsung.
- Default threshold adalah 0.5, tetapi pada imbalanced data threshold ini sering tidak optimal.
- Threshold dapat diturunkan agar model lebih sensitif terhadap kelas minoritas.

## Ilustrasi

```text
Model menghasilkan P(fraud) = 0.48

Default threshold 0.5 → diklasifikasikan normal   (padahal fraud)
Threshold 0.3        → diklasifikasikan fraud     (lebih baik)

Trade-off: threshold rendah → recall naik, precision turun
           threshold tinggi → precision naik, recall turun
```

## Implementasi

```python
from sklearn.metrics import precision_recall_curve

proba = model.predict_proba(X_test)[:, 1]
precision, recall, thresholds = precision_recall_curve(y_test, proba)

## Pilih threshold berdasarkan kebutuhan domain (misal recall >= 0.9)
```

## Hubungan dengan Penelitian

- Threshold tuning adalah bagian dari desain eksperimen yang harus dilaporkan.
- Menyebutkan "threshold optimal" tanpa proses validasi yang jelas adalah kelemahan ilmiah.

---

# Slide 34 - Studi Kasus 1: Fraud Detection

## Karakteristik Masalah

- Dataset: transaksi kartu kredit, IR sangat tinggi (fraud sangat jarang).
- Fitur: nominal transaksi, waktu, lokasi, pola historis.
- Target: binary — fraud atau normal.

## Tantangan

- Pola fraud terus berubah → model perlu diperbarui.
- Biaya salah klarifikasi tidak simetris.
- Fitur sering kali anonim (PCA-transformed) → interpretabilitas sulit.

## Pendekatan yang Relevan

```text
1. EDA: analisis distribusi, identifikasi imbalance ratio, visualisasi tren
   waktu & nominal transaksi.
2. Preprocessing: scaling, handling missing values.
3. Deteksi anomali: Isolation Forest untuk mengidentifikasi transaksi
   yang menyimpang dari perilaku normal.
4. Klasifikasi dengan imbalanced strategy: SMOTE + Random Forest /
   XGBoost dengan scale_pos_weight.
5. Evaluasi: precision, recall, F1, PR-AUC, dan total cost simulation.
```

---

# Slide 35 - Studi Kasus 2: Cybersecurity

## Karakteristik Masalah

- Dataset: trafik jaringan, log sistem, atau aktivitas user.
- Target: mendeteksi serangan (intrusion) di tengah trafik normal.
- Anomali bisa bersifat **point** (satu paket mencurigakan) atau **collective** (lonjakan trafik).

## Tantangan

- Data normal sangat melimpah; serangan sangat langka.
- Serangan baru (zero-day) tidak memiliki label sebelumnya.
- Perlu deteksi secara **real-time** atau near-real-time.

## Pendekatan yang Relevan

```text
1. One-Class SVM / One-Class model:
   - Train pada data normal untuk mendeteksi penyimpangan.
2. Isolation Forest:
   - Skor anomali untuk setiap session/flow.
3. Autoencoder:
   - Reconstruction error untuk mendeteksi pola baru.
4. Imbalanced classification (jika label serangan tersedia):
   - Oversampling + ensemble.
5. Evaluasi:
   - Detection rate (recall), false alarm rate (FPR), PR-AUC.
```

---

# Slide 36 - Studi Kasus 3: Predictive Maintenance

## Karakteristik Masalah

- Data sensor dari mesin/equipment.
- Target: memprediksi kerusakan **sebelum terjadi** (remaining useful life / early warning).
- Kejadian kerusakan sangat langka dibanding operasi normal.

## Tantangan

- Data sensor bersifat **time-series** → perlu windowing/feature engineering.
- Definisi "anomali" dapat berubah seiring degradasi mesin.
- Korelasi antar sensor penting untuk dideteksi.

## Pendekatan yang Relevan

```text
1. Feature engineering: rolling statistics, time windows.
2. Anomaly detection:
   - Isolation Forest / LOF pada fitur sensor untuk mendeteksi degradasi.
   - Autoencoder pada sinyal normal → residual tinggi menandakan awal
     kerusakan.
3. Imbalanced classification:
   - Jika kerusakan sudah dilabeli: SMOTE + model klasifikasi.
4. Evaluasi:
   - Recall untuk deteksi kerusakan lebih penting daripada precision.
   - Cost: false negative = downtime besar; false positive = maintenance
     tidak perlu.
```

---

# Slide 37 - Kesalahan Umum pada Rare-Event Problems

## Daftar Kesalahan

| Kesalahan | Dampak |
|---|---|
| Menggunakan accuracy sebagai metrik utama | Kesimpulan salah, model tidak berguna |
| Resampling sebelum split train-test | Data leakage, hasil over-optimistic |
| SMOTE diterapkan pada seluruh dataset | Evaluasi tidak valid |
| Mengabaikan calibration probabilitas | Threshold tuning tidak bermakna |
| Menggunakan ROC-AUC saja pada data ekstrem | Performa tampak lebih baik dari kenyataan |
| Tidak melaporkan threshold yang digunakan | Eksperimen tidak reproducible |
| Menyamakan outlier statistik dengan anomaly domain | Deteksi tidak sesuai kebutuhan bisnis |

## Prinsip Penelitian

- Selalu tanyakan: **metrik apa yang paling mencerminkan tujuan sistem?**
- Laporkan beberapa metrik sekaligus: precision, recall, F1, PR-AUC.
- Gunakan **validation set untuk memilih threshold**, bukan test set.

---

# Slide 38 - Dari Permasalahan ke Research Question

## Hubungan dengan Research Project

- Setelah memahami anomaly detection dan imbalanced data, mahasiswa diharapkan mampu merumuskan:
  - **Research problem**: masalah spesifik pada rare-event mining.
  - **Research question (RQ)**: pertanyaan yang dapat diuji secara empiris.
  - **Hypothesis**: dugaan sementara yang dapat diperkuat/diperlemah oleh eksperimen.

## Contoh Research Question

```text
RQ1: Apakah kombinasi SMOTE dengan ensemble learning memberikan
     peningkatan recall yang signifikan dibanding oversampling sederhana
     pada dataset fraud dengan IR > 100?

RQ2: Seberapa baik autoencoder berbasis reconstruction error dibandingkan
     Isolation Forest dalam mendeteksi anomali pada data sensor
     predictive maintenance dengan drift?

RQ3: Bagaimana pengaruh pemilihan threshold terhadap trade-off precision
     dan recall pada cost-sensitive classification untuk intrusion detection?
```

## Hipotesis

```text
H1: SMOTE + gradient boosting menghasilkan PR-AUC yang lebih tinggi
    dibanding random oversampling + gradient boosting.
```

---

# Slide 39 - Workflow Eksperimen Rare-Event

## Alur Lengkap

```text
1. Masalah & dataset
      ↓
2. EDA — identifikasi imbalance ratio, karakteristik kelas minoritas
      ↓
3. Split (stratified) → train / validation / test
      ↓
4. Resampling (hanya pada train) — SMOTE / undersampling / hybrid
      ↓
5. Training — baseline (LR, RF, XGB) + proposed method
      ↓
6. Threshold tuning pada validation set
      ↓
7. Evaluasi pada test set — precision, recall, F1, PR-AUC, cost metric
      ↓
8. Error analysis — sampel mana yang gagal dideteksi? Mengapa?
      ↓
9. Kesimpulan & scientific contribution
```

## Catatan

- Semua keputusan harus didokumentasikan untuk **reproducibility**.
- Hyperparameter tuning dilakukan dengan **cross-validation pada training set** saja.
- Hasil akhir dilaporkan beserta **statistical significance** jika memungkinkan.

---

# Slide 40 - Terima Kasih

## TERIMA KASIH

Pertemuan berikutnya

**Critical International Paper Review & Research Proposal Seminar**