# Slide 00 - Cover

EF235161 - TD Data Mining  
Pertemuan 04

## Classification, Regression & Strong Baselines: Landasan Klasifikasi dan Regresi untuk Penelitian Data Mining

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D  

Departemen Teknik Informatika - ITS

---

# Slide 01 - Peta Perkuliahan dan Posisi Pertemuan 04

## Rangkaian Pertemuan

| Pertemuan | Topik |
|---|---|
| 1-2 | Fondasi, Data Understanding, EDA & Experimental Validity |
| 3 | Pattern Mining & Knowledge Discovery |
| **4** | **Classification, Regression & Strong Baselines** |
| 5 | Ensemble Learning & Gradient Boosting |
| 6-7 | Clustering, Anomaly Detection & Data Tidak Seimbang |
| 8-16 | Paper Review, Research Project, dan Topik Lanjutan |

## Keterkaitan

- **Sebelumnya**: Pemahaman data melalui EDA dan preprocessing sebagai prasyarat untuk membangun model yang valid.
- **Saat ini**: Mempelajari algoritma klasifikasi dan regresi klasik sebagai *strong baseline* sebelum mengklaim keunggulan metode kompleks.
- **Berikutnya**: Ensemble Learning & Gradient Boosting yang secara langsung membangun dari konsep dasar yang dibahas pada pertemuan ini.

---

# Slide 02 - Tujuan Pembelajaran (CPMK)

## Capaian yang Dibangun

| CPMK | Fokus |
|---|---|
| CPMK-1 | Menganalisis konsep dan karakteristik algoritma klasifikasi/regresi |
| CPMK-4 | Merancang eksperimen yang fair dengan baseline yang kuat |
| CPMK-5 | Membandingkan metode berdasarkan performa, kompleksitas, dan interpretabilitas |

## Kaitannya dengan Research Project

- Mahasiswa mampu menentukan **strong baseline** untuk penelitiannya.
- Mahasiswa memahami mengapa baseline kuat diperlukan sebelum mengklaim keunggulan metode baru.
- Mahasiswa mampu memilih metrik evaluasi yang sesuai dengan permasalahan.

---

# Slide 03 - Mengapa "Strong Baseline" Menjadi Krusial?

## Masalah Umum dalam Penelitian

```text
Metode baru  →  Akurasi 98%  →  "Lebih baik dari metode lama"
Metode lama  →  Akurasi 96%  →  "Terbukti kalah"
```

## Kenyataannya

- Metode lama sering **belum dituning** secara optimal.
- Baseline dibangun dengan *default hyperparameter*, sementara metode baru dioptimalkan secara intensif.
- Perbedaan performa bisa berasal dari **computational budget**, bukan inovasi metodologis.

## Pertanyaan Kunci

> Apakah peningkatan performa berasal dari novelty metode, atau hanya karena model baseline yang tidak dimaksimalkan?

---

# Slide 04 - Definisi Strong Baseline

## Kriteria Baseline yang Kuat

1. **Dikenal dan mapan** — memiliki rekam jejak baik di berbagai dataset.
2. **Dituning secara wajar** — hyperparameter dioptimalkan, bukan sekadar default.
3. **Dijalankan dalam kondisi eksperimen yang sama** — preprocessing, split data, dan random seed konsisten.
4. **Performanya sulit dikalahkan secara signifikan** — karena sudah mendekati batas performa yang dapat dicapai metode sederhana.
5. **Diinterpretasikan dengan baik** — kita memahami mengapa ia bekerja atau gagal.

## Contoh Baseline Kuat untuk Data Tabular

- Logistic Regression (dengan tuning regularization).
- Random Forest (dengan tuning jumlah pohon dan kedalaman).
- SVM dengan kernel RBF (dengan tuning C dan gamma).

---

# Slide 05 - Roadmap Pertemuan 04

## Alur Materi

1. **Supervised Learning Recap** — klasifikasi vs regresi.
2. **Logistic Regression** — model linear probabilistik.
3. **Decision Tree** — split berbasis aturan.
4. **Random Forest** — ensemble of trees.
5. **Support Vector Machine** — margin maksimum.
6. **k-Nearest Neighbors** — instance-based learning.
7. **Regresi** — prediksi nilai kontinu.
8. **Bias-Variance** — memahami trade-off kompleksitas.
9. **Metrik Evaluasi** — classification metrics.
10. **Regression Metrics** — metrik untuk nilai kontinu.
11. **Praktikum 2** — implementasi dan komparasi baseline.

---

# Slide 06 - Recap: Supervised Learning

## Konsep Dasar

```text
Training Data (X, y)  →  Model f  →  Prediksi ŷ
```

- **X**: fitur / variabel independen.
- **y**: target / label.
- Model pembelajaran memetakan X ke y dari data berlabel.

## Dua Jenis Tugas Utama

| Tugas | Target y | Contoh |
|---|---|---|
| Klasifikasi | Diskret / kategorikal | Email spam vs bukan spam |
| Regresi | Kontinu / numerik | Prediksi harga rumah |

## Koneksi dengan Pertemuan 02

Kualitas model sangat ditentukan oleh kualitas preprocessing: scaling, encoding, dan handling missing value yang telah dipelajari dalam EDA & experimental pipeline.

---

# Slide 07 - Klasifikasi: Definisi dan Notasi

## Definisi

Klasifikasi adalah tugas memprediksi **label kategori** dari data berdasarkan fitur.

## Notasi Formal

- Dataset: $D = \{(x_i, y_i)\}_{i=1}^{n}$
- $x_i \in \mathbb{R}^d$ — vektor fitur berdimensi $d$
- $y_i \in \{C_1, C_2, ..., C_k\}$ — label kelas

## Tujuan

Membangun fungsi $f: \mathbb{R}^d \to \{C_1, ..., C_k\}$ yang meminimalkan kesalahan prediksi pada data baru (generalization).

## Karakteristik Data

- Fitur dapat berupa numerik, kategorikal, atau campuran.
- Label dapat biner (2 kelas) atau multikelas.

---

# Slide 08 - Logistic Regression: Konsep Dasar

## Model Probabilistik Linear

- Bukan regresi dalam arti memprediksi nilai kontinu, melainkan model **klasifikasi**.
- Memodelkan probabilitas suatu sampel masuk kelas tertentu.

## Persamaan

$$P(y=1 \mid x) = \sigma(w^T x + b)$$

Dengan fungsi sigmoid:

$$\sigma(z) = \frac{1}{1 + e^{-z}}$$

## Interpretasi

```text
z = w0 + w1*x1 + w2*x2 + ... + wd*xd
        ↓ sigmoid(z) = probabilitas
```

- Jika $P(y=1) \geq 0.5$ → kelas positif.
- Jika $P(y=1) < 0.5$ → kelas negatif.

---

# Slide 09 - Logistic Regression: Pelatihan dan Tuning

## Loss Function

- Meminimalkan **binary cross-entropy / log loss**:

$$L(w) = -\frac{1}{n} \sum_{i=1}^{n} \left[ y_i \log \hat{y}_i + (1-y_i) \log(1-\hat{y}_i) \right]$$

## Hyperparameter yang Perlu Dituning

| Hyperparameter | Pengaruh | Nilai yang Umum Dicoba |
|---|---|---|
| `C` (inverse regularization strength) | Semakin kecil → semakin kuat regularisasi | 0.01, 0.1, 1, 10, 100 |
| `penalty` | Jenis regularisasi | l1, l2, elasticnet |
| `solver` | Algoritma optimasi | lbfgs, liblinear, saga |

## Keunggulan Sebagai Baseline

- Sederhana, cepat, dan mudah diinterpretasikan.
- Memberikan batas bawah yang wajar untuk metode kompleks.

---

# Slide 10 - Decision Tree: Ide Dasar

## Struktur

```text
            [Root: Fitur A > 5?]
           /                    \
        Ya                      Tidak
    [Fitur B == "X"?]        [Fitur C <= 3?]
     /        \               /        \
  Kelas 1    Kelas 2      Kelas 1    Kelas 0
```

## Konsep

- Membuat aturan if-then secara hierarkis untuk memisahkan data.
- Setiap node melakukan **splitting** berdasarkan fitur terbaik.
- Setiap leaf node berisi prediksi kelas.

## Kriteria Split

- **Gini Impurity**
- **Entropy** / Information Gain

---

# Slide 11 - Decision Tree: Gini Impurity dan Entropy

## Gini Impurity

$$Gini(t) = 1 - \sum_{j=1}^{k} p_j^2$$

- $p_j$: proporsi sampel kelas $j$ pada node $t$.
- Nilai 0 → node murni (satu kelas); nilai maksimum → semua kelas seragam tersebar.

## Entropy

$$Entropy(t) = -\sum_{j=1}^{k} p_j \log_2 p_j$$

## Information Gain

$$IG = Entropy(parent) - \sum_{i} \frac{n_i}{n} Entropy(child_i)$$

## Intuisi

Model memilih fitur yang **paling mengurangi ketidakmurnian** setelah split.

---

# Slide 12 - Decision Tree: Kelebihan dan Bahaya Overfitting

## Kelebihan

- Mudah diinterpretasikan dan divisualisasikan.
- Tidak memerlukan scaling.
- Dapat menangkap interaksi non-linear antar fitur.

## Masalah Utama: Overfitting

- Pohon yang terlalu dalam menghafal training data.
- Generalisasi buruk pada data baru.

## Mitigasi

| Strategi | Deskripsi |
|---|---|
| `max_depth` | Membatasi kedalaman pohon |
| `min_samples_split` | Minimum sampel untuk melakukan split |
| `min_samples_leaf` | Minimum sampel pada leaf node |
| `ccp_alpha` | Cost-complexity pruning |

## Peran di Pertemuan Ini

Decision tree adalah **blok pembangun** Random Forest dan Gradient Boosting (pertemuan 5).

---

# Slide 13 - Random Forest: Bagging + Randomisasi Fitur

## Ide Utama

Membangun banyak decision tree dan menggabungkan hasilnya melalui voting (klasifikasi) atau rata-rata (regresi).

## Dua Sumber Keacakan

1. **Bootstrap sampling** — setiap pohon dilatih pada sampel acak dengan penggantian (*bagging*).
2. **Random feature selection** — setiap split hanya mempertimbangkan subset fitur acak.

## Efek

- Mengurangi variance dibanding decision tree tunggal.
- Mengurangi korelasi antar pohon → ensemble lebih stabil.

```text
Dataset asli
   ↓ bootstrap sampling
Tree 1  Tree 2  Tree 3  ...  Tree B
   ↓         ↓       ↓          ↓
           Voting / Rata-rata
```

---

# Slide 14 - Random Forest: Hyperparameter Utama

## Tuning yang Perlu Diperhatikan

| Hyperparameter | Fungsi | Catatan |
|---|---|---|
| `n_estimators` | Jumlah pohon | 100–1000; performa naik lalu jenuh |
| `max_depth` | Kedalaman maksimum | Lebih dalam → lebih kompleks |
| `min_samples_split` | Minimal sampel untuk split | Mengontrol overfitting |
| `min_samples_leaf` | Minimal sampel per leaf | Mengontrol overfitting |
| `max_features` | Jumlah fitur per split | Auto/sqrt/log2 |
| `bootstrap` | Sampling dengan penggantian | True untuk bagging |

## Efisiensi

- Dapat dilatih secara paralel.
- Tahan terhadap outlier dan skala fitur yang berbeda.

## Peran dalam Penelitian

Random Forest sering menjadi **baseline yang sangat sulit dikalahkan** pada data tabular, terutama tanpa feature engineering ekstensif.

---

# Slide 15 - Support Vector Machine (SVM): Intuisi Geometris

## Konsep Dasar

Mencari **hyperplane pemisah** dengan margin maksimum antara dua kelas.

```text
          Kelas +            Kelas -
             +                -
             +    margin     -
             +  ←----------→ -
             +   hyperplane   -
             +                -
```

## Definisi Hyperplane

$$w^T x + b = 0$$

- $w$: vektor bobot.
- $b$: bias.

## Margin

- Jarak antara hyperplane dan titik data terdekat dari setiap kelas (support vectors).
- Tujuan: **memaksimalkan margin** → meningkatkan generalisasi.

---

# Slide 16 - SVM: Kernel Trick untuk Data Non-Linear

## Masalah

Data sering tidak terpisah secara linear di ruang fitur asli.

## Kernel Trick

Memetakan data ke ruang berdimensi lebih tinggi tanpa menghitung transformasi secara eksplisit.

| Kernel | Formula | Kapan Digunakan |
|---|---|---|
| Linear | $K(x_i, x_j) = x_i^T x_j$ | Data terpisah linear |
| Polynomial | $(x_i^T x_j + r)^d$ | Interaksi non-linear |
| **RBF** | $\exp(-\gamma \|\|x_i - x_j\|\|^2)$ | Umum, fleksibel |

## Hyperparameter Kunci untuk RBF Kernel

- **C**: trade-off antara margin dan misclassification.
- **gamma**: pengaruh satu sampel terhadap keputusan.

```text
C kecil → margin besar, toleran terhadap error
C besar → meminimalkan misclassification, rawan overfitting
gamma kecil → keputusan lebih halus
gamma besar → keputusan sangat lokal, overfitting
```

---

# Slide 17 - SVM: Kelebihan, Keterbatasan, dan Kapan Digunakan

## Kelebihan

- Efektif pada data berdimensi tinggi.
- Margin maksimum memberikan dasar teoretis generalisasi yang kuat.
- Kernel RBF dapat menangkap hubungan non-linear kompleks.

## Keterbatasan

- Kurang efisien pada dataset sangat besar.
- Sulit diinterpretasikan.
- Sensitif terhadap scaling fitur → **wajib dilakukan StandardScaler**.

## Kapan Menjadi Baseline Kuat

- Dataset tabular berukuran menengah (ribuan–puluhan ribu sampel).
- Data numerik dengan distribusi yang dapat dipisahkan.
- Saat baseline linear terbukti kurang kuat dan metode neural terlalu kompleks.

---

# Slide 18 - k-Nearest Neighbors (kNN): Instance-Based Learning

## Konsep

- Tidak ada fase pelatihan eksplisit; model menyimpan seluruh training data.
- Prediksi berdasarkan **kemiripan** dengan k tetangga terdekat.

## Alur Prediksi

```text
Input x_baru
   ↓
Hitung jarak ke semua training data
   ↓
Ambil k data terdekat
   ↓
Klasifikasi: voting mayoritas kelas tetangga
Regresi: rata-rata nilai target tetangga
```

## Metrik Jarak Umum

- **Euclidean distance** (default).
- Manhattan distance.
- Cosine similarity (untuk data high-dimensional).

---

# Slide 19 - kNN: Peran k, Skala Fitur, dan Keterbatasan

## Pengaruh Nilai k

| Nilai k | Karakteristik |
|---|---|
| Kecil (1-3) | Low bias, high variance → rawan overfitting |
| Sedang (5-15) | Trade-off yang wajar |
| Besar | High bias, low variance → keputusan terlalu halus |

## Masalah Skala

Semua fitur harus dalam skala yang sama karena jarak dihitung dari seluruh dimensi.

```python
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
```

## Keterbatasan

- Kompleksitas prediksi O(n × d) → lambat untuk dataset besar.
- **Curse of dimensionality** → jarak menjadi kurang informatif pada dimensi tinggi.
- Mudah dikalahkan oleh model lain tetapi tetap penting sebagai **reference point**.

---

# Slide 20 - Regression: Konsep dan Perbedaan dengan Klasifikasi

## Definisi

Regresi memprediksi **nilai numerik kontinu** berdasarkan fitur.

## Perbedaan Utama

| Aspek | Klasifikasi | Regresi |
|---|---|---|
| Target | Kategori | Nilai kontinu |
| Output model | Probabilitas kelas | Nilai numerik |
| Metrik evaluasi | Accuracy, F1, AUC | MAE, RMSE, R² |
| Contoh | Spam vs bukan spam | Prediksi harga rumah |

## Model Regresi yang Umum

- Linear Regression.
- Ridge / Lasso Regression.
- Decision Tree Regressor.
- Random Forest Regressor.
- SVR / SVM Regressor.
- kNN Regressor.

---

# Slide 21 - Linear Regression dan Variasi Regularisasi

## Model Dasar

$$\hat{y} = w_0 + w_1 x_1 + w_2 x_2 + ... + w_d x_d$$

## Loss Function (MSE)

$$MSE = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$

## Regularisasi

| Model | Penalti | Efek |
|---|---|---|
| Ridge | $\lambda \sum w_j^2$ | Menyusutkan bobot, tidak ke nol |
| Lasso | $\lambda \sum \|w_j\|$ | Bobot bisa menjadi nol → feature selection |
| ElasticNet | Kombinasi | Trade-off antara keduanya |

## Peran dalam Penelitian

- Linear Regression merupakan **baseline minimal** untuk masalah regresi.
- Jika model kompleks tidak mengalahkan Linear Regression yang telah dituning, klaim kontribusi ilmiah harus dipertanyakan.

---

# Slide 22 - Bias-Variance Trade-off: Landasan Teoretis

## Dekomposisi Error

$$Error = Bias^2 + Variance + Irreducible Error$$

| Komponen | Definisi |
|---|---|
| **Bias** | Kesalahan sistematis akibat asumsi model terlalu sederhana |
| **Variance** | Sensitivitas model terhadap variasi training data |
| **Irreducible Error** | Noise yang tidak dapat dihilangkan dengan model apa pun |

## Visualisasi

```text
Bias tinggi ←——————→ Variance tinggi
   ↓                      ↓
Underfitting          Overfitting
   ↓                      ↓
Model terlalu        Model hafal
sederhana            data latih
```

---

# Slide 23 - Menerapkan Bias-Variance dalam Praktik

## Matriks Kompleksitas Model

| Model | Bias | Variance | Ciri Umum |
|---|---|---|---|
| Linear Regression | Tinggi | Rendah | Sering underfit pada data kompleks |
| Decision Tree dalam | Rendah | Tinggi | Overfit mudah terjadi |
| Random Forest | Sedang | Sedang | Mengurangi variance via averaging |
| SVM dengan C besar | Rendah | Tinggi | Sensitif pada tiap titik data |
| kNN dengan k kecil | Rendah | Tinggi | Sangat sensitif terhadap noise |

## Implikasi dalam Penelitian

- **Baseline yang kuat** berarti berada pada titik trade-off yang wajar, bukan sekadar model yang dituning sembarangan.
- Cross-validation membantu menemukan kompleksitas optimal.
- Model dengan variance tinggi bisa tampak unggul pada satu fold tetapi rapuh pada fold lain.

---

# Slide 24 - Evaluasi Klasifikasi: Confusion Matrix

## Definisi

```text
                 Prediksi
              Positif  Negatif
Aktual Positif    TP      FN
Aktual Negatif    FP      TN
```

| Singkatan | Arti |
|---|---|
| TP | True Positive — positif diprediksi positif |
| TN | True Negative — negatif diprediksi negatif |
| FP | False Positive — negatif diprediksi positif (Type I error) |
| FN | False Negative — positif diprediksi negatif (Type II error) |

## Catatan Penting

Confusion matrix hanya berlaku untuk **satu threshold keputusan**. Metrik turunannya bersifat threshold-dependent.

---

# Slide 25 - Metrik Klasifikasi: Accuracy, Precision, Recall, F1

## Rumus

$$Accuracy = \frac{TP + TN}{TP + TN + FP + FN}$$

$$Precision = \frac{TP}{TP + FP}$$

$$Recall = \frac{TP}{TP + FN}$$

$$F1 = 2 \times \frac{Precision \times Recall}{Precision + Recall}$$

## Kapan Menggunakan

| Metrik | Kondisi yang Tepat |
|---|---|
| Accuracy | Kelas seimbang, cost error sama |
| Precision | Cost FP tinggi (mis. spam clasification) |
| Recall | Cost FN tinggi (mis. deteksi penyakit) |
| F1 | Tidak ada preferensi yang jelas, kelas sering tidak seimbang |

---

# Slide 26 - ROC-AUC dan PR-AUC

## ROC-AUC (Receiver Operating Characteristic)

- Kurva plot **TPR (Recall)** vs **FPR** untuk berbagai threshold.
- FPR = FP / (FP + TN).
- AUC = probabilitas model memberi skor lebih tinggi pada sampel positif acak daripada sampel negatif acak.
- Cocok untuk data dengan **kelas cukup seimbang**.

## PR-AUC (Precision-Recall)

- Kurva plot **Precision** vs **Recall** untuk berbagai threshold.
- Lebih informatif untuk **data tidak seimbang**.

## Intuisi Perbandingan

| Kondisi | Metrik yang Direkomendasikan |
|---|---|
| Kelas seimbang | ROC-AUC |
| Kelas jarang / imbalanced | PR-AUC |

---

# Slide 27 - Classification Metrics: Pilihan Metrik dalam Penelitian

## Prinsip Pemilihan

1. Metrik harus **sesuai dengan research question**.
2. Metrik harus **mencerminkan tujuan praktis** masalah.
3. Perhatikan **distribusi kelas** pada dataset.
4. Tidak cukup menggunakan satu metrik — laporkan beberapa metrik sekaligus.

## Tabel Panduan

| Skema Data | Metrik Utama | Metrik Pendukung |
|---|---|---|
| Seimbang | Accuracy, ROC-AUC | Precision, Recall, F1 |
| Imbalanced moderat | F1, PR-AUC | ROC-AUC, Precision, Recall |
| Imbalanced ekstrem | PR-AUC | F1, Recall pada kelas minoritas |
| Multikelas | Macro-F1, Weighted-F1 | Confusion matrix per kelas |

## Kesalahan Umum

- Mengandalkan accuracy pada data tidak seimbang (dibahas lebih lanjut di Pertemuan 07).
- Memilih metrik setelah melihat hasil → **selection bias**.

---

# Slide 28 - Regression Metrics: MAE, MSE, RMSE, R², MAPE

## Definisi dan Rumus

| Metrik | Rumus | Karakteristik |
|---|---|---|
| MAE | $\frac{1}{n}\sum \|y_i - \hat{y}_i\|$ | Robust terhadap outlier |
| MSE | $\frac{1}{n}\sum (y_i - \hat{y}_i)^2$ | Memberi penalti besar pada error besar |
| RMSE | $\sqrt{MSE}$ | Skala sama dengan target |
| R² | $1 - \frac{SS_{res}}{SS_{tot}}$ | Proporsi variance yang dijelaskan model |
| MAPE | $\frac{100\%}{n}\sum \frac{\|y_i - \hat{y}_i\|}{\|y_i\|}$ | Mudah diinterpretasikan, bermasalah saat y ≈ 0 |

## Kapan Menggunakan

- **RMSE** — ketika error besar tidak dapat ditoleransi.
- **MAE** — ketika semua error diperlakukan linear.
- **R²** — untuk mengukur goodness-of-fit secara relatif terhadap rata-rata target.

---

# Slide 29 - Pentingnya Validasi yang Fair

## Prinsip Fair Comparison

1. **Gunakan data yang sama** untuk semua model.
2. **Preprocessing sama** — fitur scaling dan encoding harus fit di training set saja.
3. **Hyperparameter tuning di dalam cross-validation** — jangan mengevaluasi model pada data yang sudah digunakan untuk tuning.
4. **Random seed yang jelas** — dokumentasikan semua nilai random seed.

## Alur yang Benar

```text
Dataset
   ↓
Split: train / validation / test
   ↓
Tuning hyperparameter pada validation (via CV)
   ↓
Evaluasi final pada test set (sekali saja)
   ↓
Lapor hasil + varians antar fold
```

## Kesalahan yang Harus Dihindari

- Melakukan tuning pada test set.
- Melakukan EDA pada seluruh data lalu split setelahnya (data leakage).

---

# Slide 30 - Data Leakage pada Classification dan Regression

## Definisi

Bocornya informasi dari data uji ke proses pelatihan sehingga performa dievaluasi tidak realistis.

## Contoh Kasus

- **Scaling dilakukan sebelum split** — statistik data uji ikut memengaruhi training.
- **Feature engineering menggunakan target** — misal membuat fitur rata-rata target per kategori.
- **Duplicate data** — sampel yang sama muncul di train dan test.
- **Target leakage** — fitur yang hanya diketahui setelah prediksi (mis. penggunaan informasi masa depan pada data temporal).

## Pencegahan

- Gunakan `Pipeline` scikit-learn.
- Lakukan split terlebih dahulu.
- Gunakan `StratifiedKFold` untuk klasifikasi dan `KFold` untuk regresi.

---

# Slide 31 - Memilih Model Baseline: Strategi Eksperimen

## Pendekatan Sistematis

```text
1. Mulai dari model paling sederhana:
   Logistic Regression / Linear Regression
   ↓
2. Tambah variasi non-linear:
   Decision Tree, kNN, SVM-RBF, Random Forest
   ↓
3. Tuning hyperparameter masing-masing
   ↓
4. Bandingkan hasil dengan metrik yang tepat
   ↓
5. Pilih baseline terkuat untuk dibandingkan
   dengan proposed method
```

## Prinsip

- Semua model diuji pada **kerangka evaluasi yang sama**.
- Tuning dilakukan dengan budget yang **proporsional untuk setiap model**.
- Dokumentasikan konfigurasi terbaik untuk setiap model.

---

# Slide 32 - Pseudocode Eksperimen Komparasi Baseline

```text
INPUT: X, y, daftar model [LR, SVM, RF, DT, kNN]
OUTPUT: tabel hasil per model

1. Bagi data menjadi train dan test (stratified)
2. Untuk setiap model:
   a. Definisikan pipeline: preprocessing + model
   b. Lakukan GridSearchCV / RandomizedSearchCV
      pada training set dengan cross-validation
   c. Latih model terbaik pada seluruh training set
   d. Prediksi test set
   e. Hitung metrik evaluasi
3. Catat hyperparameter terbaik setiap model
4. Tampilkan perbandingan metrik seluruh model
```

---

# Slide 33 - Contoh Praktik: Membandingkan Baseline dengan scikit-learn

```python
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV, StratifiedKFold

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

## Logistic Regression dengan pipeline
pipe_lr = Pipeline([
    ("scaler", StandardScaler()),
    ("lr", LogisticRegression(max_iter=1000))
])

param_lr = {"lr__C": [0.01, 0.1, 1, 10, 100]}
grid_lr = GridSearchCV(
    pipe_lr, param_lr, cv=StratifiedKFold(5),
    scoring="f1", n_jobs=-1
)
grid_lr.fit(X_train, y_train)
```

---

# Slide 34 - Contoh Praktik: Melanjutkan ke SVM dan Random Forest

```python
## SVM RBF
pipe_svm = Pipeline([
    ("scaler", StandardScaler()),
    ("svc", SVC(kernel="rbf", probability=True))
])

param_svm = {
    "svc__C": [0.1, 1, 10, 100],
    "svc__gamma": [0.001, 0.01, 0.1, 1]
}

## Random Forest (tidak butuh scaling)
param_rf = {
    "rf__n_estimators": [100, 200, 500],
    "rf__max_depth": [None, 10, 20, 30],
    "rf__min_samples_leaf": [1, 2, 4]
}

## Simpan semua hasil ke tabel perbandingan:
## model | best_params | accuracy | precision | recall | f1 | roc_auc
```

## Catatan

- Random Forest dengan `max_depth=None` dapat sangat overfit pada dataset kecil.
- Selalu gunakan `random_state` untuk reproducible experiment.

---

# Slide 35 - Interpretasi Hasil Eksperimen

## Contoh Tabel Hasil

| Model | Best Params | F1 | ROC-AUC | Log Loss |
|---|---|---|---|---|
| Logistic Regression | C=1.0 | 0.823 | 0.891 | 0.314 |
| SVM RBF | C=10, gamma=0.1 | 0.847 | 0.912 | 0.287 |
| Decision Tree | depth=8 | 0.815 | 0.856 | 0.452 |
| Random Forest | 300 trees, depth=20 | 0.871 | 0.931 | 0.265 |
| kNN | k=7, euclidean | 0.801 | 0.872 | 0.388 |

## Cara Membaca

- Apakah Random Forest secara konsisten lebih unggul dari semua baseline lain di semua metrik?
- Apakah SVM menunjukkan performa tinggi tetapi variance besar antar fold?
- Apakah perbedaan antara model signifikan secara statistik?

---

# Slide 36 - Fokus Penelitian: Mengapa Baseline Sederhana Masih Dibutuhkan

## Konteks Publikasi Ilmiah

> Reviewer paper sering bertanya: *"Apakah metode Anda dibandingkan dengan strong baseline yang telah dituning?"*

## Alasan Utama

1. **Menjaga integritas klaim** — jika metode kompleks menang telak atas baseline sederhana, klaim kontribusi lebih meyakinkan.
2. **Memahami di mana keunggulan terjadi** — apakah pada data tertentu? pada metrik tertentu?
3. **Menghindari overfitting penelitian** — metode baru yang hanya unggul pada satu dataset dan satu baseline tidak menunjukkan generalisasi.

## Pertanyaan untuk Research Project

- Baseline apa yang paling relevan untuk masalah yang diteliti?
- Apakah baseline yang saya pilih sudah representatif terhadap *state of the art*?
- Apakah perbandingan dilakukan dengan tuning yang adil?

---

# Slide 37 - Praktikum 2: Membangun dan Membandingkan Strong Classical Baseline

## Tujuan Praktikum

- Membangun pipeline eksperimen yang reusable.
- Melatih dan mengevaluasi Logistic Regression, SVM, dan Random Forest.
- Menentukan model dengan performa terbaik sebagai strong baseline.

## Langkah Praktikum

1. Gunakan dataset dari candidate research project atau dataset publik (mis. UCI / Kaggle).
2. Lakukan EDA singkat dan dokumentasikan karakteristik data.
3. Buat pipeline preprocessing yang konsisten.
4. Tuning hyperparameter dengan cross-validation.
5. Evaluasi dengan metrik yang sesuai.
6. Laporkan tabel perbandingan dan interpretasi.

## Output

- Notebook praktikum.
- Tabel hasil komparasi.
- Penentuan strong baseline untuk penelitian.

---

# Slide 38 - Koneksi ke Pertemuan Berikutnya: Ensemble Learning

## Jembatan Konseptual

| Konsep Pertemuan Ini | Peran di Pertemuan 5 |
|---|---|
| Decision Tree | Blok dasar Gradient Boosting / XGBoost |
| Random Forest (bagging) | Dipelajari lebih dalam sebagai ensemble |
| Bias-Variance Trade-off | Dasar memahami mengapa boosting mengurangi bias |
| Metrik Evaluasi | Dipergunakan untuk membandingkan model boosting |
| Strong Baseline | Menjadi pembanding untuk klaim peningkatan model boosting |

## Implikasi Penelitian

- Gradient Boosting (XGBoost/LightGBM/CatBoost) sering menjadi **baseline yang lebih kuat** daripada Random Forest.
- Penelitian di Pertemuan 5 akan mengkaji apakah peningkatan performa boosting memang disebabkan oleh metode atau oleh tuning dan computational budget.

---

# Slide 39 - Research Project Checkpoint: Menentukan Strong Baseline

## Yang Harus Disiapkan di Minggu Ini

1. **Dataset final** yang telah melewati EDA.
2. **Preprocessing pipeline** yang terdokumentasi.
3. **Implementasi baseline** minimal:
   - Logistic Regression (linear baseline).
   - Random Forest (non-linear ensemble baseline).
   - SVM RBF (non-linear margin-based baseline).
   - Atau satu baseline yang lebih relevan untuk masalah spesifik.
4. **Metrik evaluasi** yang dipilih berdasarkan distribusi target.

## Format Dokumentasi

| Komponen Baseline | Deskripsi |
|---|---|
| Dataset | Nama, jumlah sampel, jumlah fitur, keterbatasan |
| Preprocessing | Encoding, scaling, handling missing |
| Model & konfigurasi | Hyperparameter hasil tuning |
| Hasil | Metrik + confidence interval / std dev |
| Kesimpulan | Apakah model ini cukup kuat sebagai baseline? |

---

# Slide 40 - Penutup dan Kesimpulan

## Poin Kunci Pertemuan 04

- Klasifikasi dan regresi adalah fondasi supervised learning yang wajib dikuasai.
- Logistic Regression, Decision Tree, Random Forest, SVM, dan kNN adalah **strong baseline** yang harus dibangun sebelum metode kompleks.
- Bias-variance trade-off menjelaskan mengapa model sederhana dan kompleks memiliki perilaku yang berbeda.
- Pemilihan metrik harus sesuai dengan distribusi data dan research question.
- Eksperimen yang fair membutuhkan tuning, cross-validation, dan pencegahan data leakage.

## Progress Penelitian

**Menentukan strong baseline penelitian** sebagai fondasi eksperimen selanjutnya.

---

# Slide 41 - TERIMA KASIH

Pertemuan berikutnya

**Ensemble Learning & Gradient Boosting**