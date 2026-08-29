# Slide 00 - Cover

EF235161 - TD Data Mining  
Pertemuan 05

## Ensemble Learning & Gradient Boosting

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D  

Departemen Teknik Informatika - ITS

---

# Slide 01 - Peta Perkuliahan dan Alur Menuju Pertemuan 05

## Posisi Pertemuan 05 dalam RPS

| Minggu | Topik | Keterkaitan |
|---|---|---|
| 4 | Classification, Regression & Strong Baselines | Membangun baseline klasik yang kuat |
| **5** | **Ensemble Learning & Gradient Boosting** | **Memperdalam teknik ensemble dan strong baseline tabular** |
| 6 | Clustering & Unsupervised Data Mining | Beralih dari supervised ke unsupervised |

## Alur Keterkaitan

- Pertemuan 04 memperkenalkan Logistic Regression, SVM, Decision Tree, dan Random Forest sebagai *strong baseline*.
- Pertemuan 05 memperdalam konsep ensemble, khususnya **Gradient Boosting** dan turunannya: XGBoost, LightGBM, CatBoost.
- Pemahaman ini menjadi bekal untuk diskusi *advanced tabular learning* (Pertemuan 09) dan AutoML (Pertemuan 10).

---

# Slide 02 - Recap: Strong Baseline sebagai Fondasi Eksperimen

## Mengapa Strong Baseline Penting?

- Penelitian yang valid membutuhkan perbandingan yang adil.
- Klaim peningkatan performa hanya bermakna jika dibandingkan dengan baseline yang sudah dioptimalkan secara wajar.
- Baseline yang lemah membuat metode baru tampak lebih baik padahal hanya karena tuning tidak seimbang.

## Pelajaran dari Pertemuan 04

- Random Forest, SVM, dan Logistic Regression adalah contoh *strong classical baseline*.
- Data preprocessing dan *experimental pipeline* sangat memengaruhi hasil.
- Pertemuan kali ini memperkuat sisi ensemble sebagai senjata utama *strong baseline* pada data tabular.

## CPMK yang Terkait

- CPMK-1: Konsep dan metode data mining.
- CPMK-4: Eksperimen yang valid dan *reproducible*.
- CPMK-5: Perbandingan metode berdasarkan performa dan kompleksitas.

---

# Slide 03 - Konsep Dasar Ensemble Learning

## Definisi

Ensemble learning adalah pendekatan yang menggabungkan beberapa model untuk menghasilkan prediksi akhir. Tujuannya adalah memperbaiki kelemahan model tunggal.

## Ilustrasi Sederhana

```text
Data
 |
 +----> Model 1 ---\
 +----> Model 2 ------> Kombinasi -> Prediksi
 +----> Model 3 ---/
```

## Prinsip Utama

- Model yang digabungkan sebaiknya **beragam** (*diverse*).
- Kesalahan antar model sebaiknya **tidak saling berkorelasi**.
- Kombinasi dapat berupa *voting*, *averaging*, atau *weighted combination*.

## Paradigma Utama Ensemble

| Paradigma | Ide Dasar | Target Error |
|---|---|---|
| Bagging | Melatih model paralel pada sampel bootstrap | Mengurangi *variance* |
| Boosting | Melatih model sekuensial, fokus pada kesalahan sebelumnya | Mengurangi *bias* |
| Stacking | Menggabungkan model melalui meta-model | Memanfaatkan kelebihan model heterogen |

---

# Slide 04 - Bias-Variance Tradeoff dan Peran Ensemble

## Hubungan Error Model

```text
Total Error = Bias^2 + Variance + Noise
```

## Budaya Ensemble Terhadap Bias-Variance

| Strategi | Efek | Kelas Metode |
|---|---|---|
| Bagging | Mengurangi variance | Random Forest |
| Boosting | Mengurangi bias | AdaBoost, Gradient Boosting |
| Kombinasi model heterogen | Dapat mengurangi keduanya dalam praktik | Stacking, Voting |

## Implikasi

- Bagging sangat membantu model dengan variance tinggi, misalnya pohon keputusan yang dalam.
- Boosting membantu model sederhana yang cenderung *underfit*.
- Noise tidak dapat dihilangkan oleh ensemble; ensemble tetap dapat *overfit* jika terlalu kompleks.

---

# Slide 05 - Bagging: Bootstrap Aggregating

## Langkah-langkah Bagging

1. Ambil **bootstrap sample** dari data latih secara acak dengan pengembalian.
2. Latih model pada setiap sampel secara paralel.
3. Prediksi akhir diperoleh melalui:
   - *Voting* untuk klasifikasi.
   - *Averaging* untuk regresi.

## Mengapa Bagging Bekerja

- Rata-rata dari model dengan variance tinggi dapat menurunkan variance.
- Jika model identik, tidak ada perbaikan; keragaman berasal dari sampel bootstrap yang berbeda.

## Sifat Bagging

- Dapat diparalelkan.
- Lebih stabil terhadap perubahan kecil pada data.
- Tidak selalu menurunkan bias secara signifikan.

---

# Slide 06 - Random Forest: Peran Ensemble dalam Baseline

## Random Forest Sebagai Bagging + Fitur Acak

- Setiap pohon dilatih pada bootstrap sample.
- Setiap split hanya mempertimbangkan subset fitur acak.
- Hasil akhir merupakan *majority vote* atau rata-rata.

## Hyperparameter Kunci

| Parameter | Pengaruh |
|---|---|
| `n_estimators` | Jumlah pohon; semakin banyak umumnya semakin stabil |
| `max_features` | Diversifikasi pohon; memengaruhi bias-variance |
| `min_samples_leaf` | Mencegah pohon terlalu dalam dan overfit |

## Mengapa Random Forest Menjadi Baseline Kuat

- Cukup stabil dengan tuning minimal.
- Dapat menangani fitur numerik dan kategorikal dengan encoding.
- Menyediakan feature importance untuk analisis awal.

---

# Slide 07 - Boosting: Konsep Dasar

## Perbedaan dengan Bagging

| Aspek | Bagging | Boosting |
|---|---|---|
| Pelatihan | Paralel | Sekuensial |
| Fokus | Mengurangi variance | Mengurangi bias |
| Setiap model | Belajar dari data sama | Belajar dari kesalahan sebelumnya |

## Alur Boosting

```text
Data
 |
 v
Model 1 -> Kesalahan -> Model 2 -> Kesalahan -> Model 3 -> Kombinasi
```

## Prinsip

- Model berikutnya diprioritaskan pada sampel yang sulit diprediksi.
- Model akhir adalah kombinasi berbobot dari seluruh model.

---

# Slide 08 - AdaBoost: Pengantar Boosting

## Cara Kerja AdaBoost

- Sampel yang salah diklasifikasikan diberi bobot lebih besar.
- Model selanjutnya lebih fokus pada sampel berbobot tinggi.
- Setiap model memiliki bobot berdasarkan akurasinya.

## Kekuatan dan Kelemahan

| Kelebihan | Keterbatasan |
|---|---|
| Konsep sederhana | Sensitif terhadap noise dan outlier |
| Mengurangi bias secara efektif | Bobot ekstrem dapat menyebabkan overfit |
| Mudah diimplementasikan | Kurang fleksibel untuk berbagai loss function |

## Transisi ke Gradient Boosting

- AdaBoost memodifikasi bobot sampel.
- Gradient Boosting melakukan generalisasi dengan mengoptimalkan **fungsi loss melalui gradien**. Inilah dasar dari metode GBDT modern.

---

# Slide 09 - Gradient Boosting: Intuisi Residual

## Ide Utama

- Model dilatih sekuensial untuk memprediksi **residual** dari model sebelumnya.
- Residual adalah selisih antara nilai aktual dan prediksi.
- Setiap model baru memperbaiki kelemahan model gabungan saat itu.

## Contoh Analogi

```text
Prediksi awal = rata-rata target
Sisa galat   = target - prediksi
Pohon 1      = mempelajari sisa galat
Prediksi baru = prediksi awal + pohon 1
Ulangi hingga sejumlah iterasi
```

## Pseudo-Residual

- Residual yang digunakan bukan selalu selisih langsung.
- Pseudo-residual adalah **turunan negatif fungsi loss terhadap prediksi**.
- Hal ini membuat Gradient Boosting dapat digunakan untuk berbagai loss.

---

# Slide 10 - Algoritma Gradient Boosting

## Pseudocode

```text
1. Inisialisasi model F0(x) = argmin_c Σ Loss(y_i, c)

2. Untuk m = 1 sampai M:
   a. Hitung pseudo-residual:
        r_im = - [∂Loss(y_i, F(x_i)) / ∂F(x_i)]
   b. Latih regression tree h_m(x) pada data (x_i, r_im)
   c. Cari step size optimal:
        γ_m = argmin_γ Σ Loss(y_i, F_m-1(x_i) + γ h_m(x_i))
   d. Perbarui model:
        F_m(x) = F_m-1(x) + η γ_m h_m(x)

3. Keluarkan model akhir F_M(x)
```

## Keterangan Penting

- `M` adalah jumlah iterasi / pohon.
- `η` adalah learning rate yang mengecilkan kontribusi setiap pohon.
- Pohon yang digunakan adalah **regression tree**, bahkan untuk masalah klasifikasi.

---

# Slide 11 - Fungsi Loss dan Pseudo-Residual

## Kelebihan Gradient Boosting

Gradient Boosting bersifat fleksibel terhadap fungsi kehilangan.

## Contoh Loss dan Pseudo-Residual

| Masalah | Loss | Pseudo-Residual |
|---|---|---|
| Regresi | Squared error | `y - F(x)` |
| Regresi robust | Absolute error | `sign(y - F(x))` |
| Klasifikasi biner | Log loss | `y - p`, dengan `p = sigmoid(F(x))` |
| Klasifikasi multi-kelas | Softmax cross-entropy | `y_k - p_k` |

## Poin Riset

- Pemilihan loss harus disesuaikan dengan tujuan masalah.
- Loss yang berbeda menghasilkan karakteristik model yang berbeda.
- Imbalance data memerlukan custom loss, misalnya *focal loss* atau *cost-sensitive loss*.

---

# Slide 12 - XGBoost: Fitur dan Inovasi

## Apa yang Ditambahkan XGBoost?

- **Second-order gradients** untuk mempercepat optimasi.
- **Regularisasi** pada struktur pohon dan leaf value.
- Penanganan **data sparse** yang efisien.
- **Weighted Quantile Sketch** untuk split pada data besar.
- Implementasi paralel dan *cache-aware*.

## Perbedaan dengan Gradient Boosting Klasik

| Aspek | Gradient Boosting | XGBoost |
|---|---|---|
| Gradien yang digunakan | Orde pertama | Orde pertama dan kedua |
| Regularisasi | Tidak eksplisit | Termasuk pada objective |
| Efisiensi | Sequential | Paralel dan optimized |
| Penanganan missing | Perlu penggantian nilai | Bendera missing value internal |

---

# Slide 13 - XGBoost: Objective, Regularisasi, dan Split Finding

## Objective yang Dioptimalkan

```text
Obj = Σ_i L(y_i, F(x_i)) + Σ_k Ω(tree_k)
```

Dengan regularisasi per pohon:

```text
Ω = γ T + 0.5 λ ||w||^2
```

Keterangan:

- `T` adalah jumlah leaf.
- `w` adalah vektor nilai leaf.
- `γ` dan `λ` mengontrol kompleksitas model.

## Dampak Regularisasi

- Mengurangi overfit.
- Pohon tidak tumbuh terlalu kompleks.
- Nilai leaf tidak menjadi terlalu ekstrem.

## Split Finding

- XGBoost menggunakan *exact greedy* untuk data kecil dan *approximate* untuk data besar.
- *Approximate greedy* memanfaatkan *quantile sketch* sehingga efisien tanpa kehilangan akurasi yang signifikan.

---

# Slide 14 - LightGBM: GOSS dan EFB

## LightGBM

LightGBM dikembangkan untuk mempercepat training dengan menjaga akurasi.

## Dua Inovasi Utama

| Inovasi | Deskripsi |
|---|---|
| **GOSS** (Gradient-based One-Side Sampling) | Mempertahankan instance dengan gradien besar dan melakukan random sampling pada instance gradien kecil. Fokus pada data yang paling informatif. |
| **EFB** (Exclusive Feature Bundling) | Menggabungkan fitur-fitur yang jarang aktif bersamaan sehingga dimensi fitur mengecil. |

## Strategi Tumbuh Pohon

- LightGBM menggunakan **leaf-wise growth**, bukan level-wise.
- Pemilihan leaf dengan penurunan loss terbesar.
- Dapat menghasilkan model yang lebih akurat, tetapi lebih rawan overfit pada data kecil.

---

# Slide 15 - CatBoost: Ordered Boosting dan Fitur Kategorikal

## Masalah yang Diatasi CatBoost

- Encoding fitur kategorikal dengan target statistics sederhana dapat menyebabkan *target leakage*.
- Prediction shift dapat membuat hasil training tidak mencerminkan generalisasi.

## Solusi CatBoost

| Konsep | Penjelasan |
|---|---|
| Ordered Target Statistics | Menghitung statistik target secara berurutan sehingga hanya menggunakan data sebelumnya. |
| Ordered Boosting | Model di-update secara sekuensial dengan cara yang mengurangi pergeseran prediksi. |
| Symmetric Tree | Struktur pohon simetris sehingga inference lebih cepat dan regularisasi lebih kuat. |

## Keunggulan

- Bekerja baik pada data dengan banyak fitur kategorikal.
- Mengurangi kebutuhan preprocessing manual.
- Cenderung stabil pada dataset kecil hingga menengah.

---

# Slide 16 - Perbandingan Pustaka GBDT

## Tabel Perbandingan Umum

| Aspek | XGBoost | LightGBM | CatBoost |
|---|---|---|---|
| Fokus awal | Kecepatan dan regularisasi | Skala dan kecepatan training | Fitur kategorikal dan stabilitas |
| Penanganan kategorikal | Perlu encoding | Opsional native | Native |
| Strategi split | Exact/approximate | Histogram, leaf-wise | Symmetric tree |
| Memori | Sedang | Lebih hemat | Sedang |
| Overfit pada data kecil | Perlu tuning | Perlu early stopping | Lebih stabil |

## Catatan Penting

- Perbandingan di atas bersifat umum dan dapat bervariasi tergantung dataset.
- Tidak ada satu pustaka yang selalu terbaik.
- Dalam eksperimen, semua pustaka harus diperlakukan dengan budget tuning yang sama.

---

# Slide 17 - Random Forest vs Gradient Boosting

## Tabel Perbandingan Konseptual

| Aspek | Random Forest | Gradient Boosting |
|---|---|---|
| Paradigma | Bagging | Boosting |
| Pelatihan | Paralel | Sekuensial |
| Target error | Mengurangi variance | Mengurangi bias |
| Kontrol overfit | Cukup dengan `max_features`, `min_samples_leaf` | Perlu kombinasi learning rate, depth, dan regularisasi |
| Jumlah parameter kritis | Sedikit | Banyak |
| Interpretasi feature importance | Tersedia | Tersedia |

## Kapan Memilih?

- **Random Forest**: sebagai baseline cepat, stabil, dan mudah.
- **Gradient Boosting**: jika budget komputasi mencukupi dan performa tinggi dibutuhkan.
- Keduanya sering digunakan sebagai *strong baseline* dalam penelitian data tabular.

---

# Slide 18 - Model Selection: Prinsip Dasar

## Pemisahan Data

```text
Dataset
   |
   +---- Train set (untuk training)
   +---- Validation set (untuk model selection / tuning)
   +---- Test set (untuk evaluasi final)
```

## Prinsip yang Harus Dipegang

- Test set hanya digunakan **sekali** di akhir eksperimen.
- Model selection dilakukan berdasarkan validation / cross-validation.
- Preprocessing harus berada di dalam cross-validation agar tidak terjadi *data leakage*.
- Semua kandidat model diuji pada data yang sama.

## Kenapa Penting?

- Kesalahan pada pemilihan model menyebabkan hasil eksperimen tidak kredibel.
- Model yang dipilih karena overfit pada test set tidak dapat membuktikan klaim baru.

---

# Slide 19 - Hyperparameter Kunci pada GBDT

## Parameter Utama dan Pengaruhnya

| Parameter | Pengaruh | Nama pada Beberapa Library |
|---|---|---|
| Learning rate | Mengecilkan kontribusi tiap pohon | `learning_rate`, `eta`, `shrinkage` |
| Jumlah iterasi | Jumlah pohon | `n_estimators`, `num_boost_round`, `iterations` |
| Maksimum depth | Kedalaman pohon | `max_depth`, `depth` |
| Min leaf size | Mencegah daun kecil | `min_child_weight`, `min_data_in_leaf`, `min_samples_leaf` |
| Row sampling | Properti data per iterasi | `subsample`, `bagging_fraction` |
| Column sampling | Properti fitur per iterasi | `colsample_bytree`, `feature_fraction` |
| Regularisasi L1/L2 | Mengontrol magnitude leaf | `reg_alpha`, `reg_lambda` |

## Implikasi Penelitian

- Hyperparameter bukan sekadar tombol tuning.
- Keputusan tuning harus didokumentasikan agar eksperimen *reproducible*.
- Pengaruh parameter bersifat interaktif, bukan independen.

---

# Slide 20 - Pengaruh Learning Rate dan n_estimators

## Trade-off Utama

- **Learning rate kecil** membutuhkan lebih banyak iterasi.
- **Learning rate besar** dapat mencapai konvergensi cepat tetapi berisiko melompati solusi yang baik.
- **n_estimators** yang berlebihan tanpa early stopping dapat menyebabkan overfit.

## Ilustrasi Konseptual

| Learning Rate | Jumlah Tree | Hasil Validasi | Waktu Training |
|---|---|---|---|
| 0.3 | 50 | Cukup baik | Rendah |
| 0.1 | 200 | Lebih baik | Sedang |
| 0.01 | 2000 | Serupa, lebih stabil | Tinggi |

Angka ini hanya ilustrasi, bukan hasil eksperimen nyata.

## Rekomendasi Praktik

- Gunakan early stopping pada validation set.
- Tentukan budget waktu agar perbandingan fair antar metode.

---

# Slide 21 - Pengaruh Max Depth dan Min Child Weight

## Max Depth

- Depth kecil → model lebih sederhana, bias lebih tinggi.
- Depth besar → model lebih kompleks, variance lebih tinggi.
- Pada GBDT, depth yang besar dapat menyebabkan overfit terutama jika learning rate kecil dan jumlah iterasi besar.

## Min Child Weight / Min Data in Leaf

- Semakin besar nilai, pohon semakin sulit membuat leaf yang kecil.
- Efeknya adalah regularisasi dan mengontrol overfit.
- Nilai optimum bergantung pada jumlah data dan noise.

## Aturan Praktik

- Depth 3–8 sering menjadi rentang awal pada tabular data.
- Tidak ada nilai universal; harus diuji dengan cross-validation.

---

# Slide 22 - Pengaruh Subsample, Colsample, dan Regularisasi

## Subsample (Row Sampling)

- Mengambil sebagian sampel data pada setiap iterasi.
- Menambah keragaman antar tree.
- Mengurangi overfit, tetapi dapat menambah bias jika terlalu kecil.

## Colsample (Column Sampling)

- Mengambil sebagian fitur pada setiap tree/split.
- Efeknya mirip Random Forest: meningkatkan keragaman.
- Berguna pada data dengan banyak fitur.

## Regularisasi L1/L2

| Jenis | Efek |
|---|---|
| L2 (`reg_lambda`) | Menekan nilai leaf, menjaga model tetap mulus |
| L1 (`reg_alpha`) | Menyusutkan nilai leaf, dapat menghilangkan fitur tertentu |

## Interaksi

- Subsample dan colsample memengaruhi jumlah data informasi pada tiap iterasi.
- Regularisasi memungkinkan model lebih kompleks tanpa langsung overfit.

---

# Slide 23 - Cross-Validation dan Reproducibility

## Mengapa Cross-Validation?

- Mengurangi ketergantungan pada satu split.
- Memberikan estimasi performa yang lebih stabil.
- Dapat mendeteksi variasi hasil akibat data.

## Contoh Kode

```python
from sklearn.model_selection import RepeatedStratifiedKFold

cv = RepeatedStratifiedKFold(
    n_splits=5,
    n_repeats=3,
    random_state=42
)
```

## Prinsip Reproducibility

- Tetapkan `random_state` untuk seluruh komponen acak.
- Dokumentasikan versi library.
- Simpan konfigurasi hyperparameter.
- Ulangi eksperimen dengan beberapa seed untuk melihat stabilitas.

---

# Slide 24 - Model Selection Bias dan Multiple Testing

## Masalah

- Jika hyperparameter dipilih berdasarkan performa pada test set, maka test set tidak lagi independen.
- Jika banyak model diuji pada data yang sama, salah satu akan tampak unggul hanya karena kebetulan.
- Masalah ini dikenal sebagai **multiple comparisons problem** atau *selection bias*.

## Implikasi pada Penelitian

- Perbandingan model harus dilakukan pada validation set atau nested cross-validation.
- Peningkatan kecil pada test set perlu dicek signifikansi statistiknya.
- Laporan hasil harus menyertakan interval kepercayaan atau *p-value*.

## Pertanyaan Kunci

> Apakah peningkatan yang diamati berasal dari metode baru, atau dari proses pencarian hyperparameter yang lebih intensif?

---

# Slide 25 - Performance vs Complexity: Kerangka Analisis

## Evaluasi Bukan Hanya Akurasi

| Aspek | Pertanyaan |
|---|---|
| Predictive performance | Seberapa besar peningkatan terhadap baseline? |
| Statistical significance | Apakah hasil berbeda nyata? |
| Computational cost | Berapa waktu dan memori yang dibutuhkan? |
| Scalability | Bagaimana perilaku model pada data besar? |
| Interpretability | Apakah model dapat dijelaskan? |
| Simplicity | Apakah kompleksitas metode sebanding dengan manfaatnya? |

## Kesimpulan

- Peningkatan 0.1% AUC dengan kompleksitas sepuluh kali lipat belum tentu kontribusi.
- Penelitian harus melaporkan trade-off ini secara jujur.

---

# Slide 26 - Studi Kasus: Baseline yang Tidak Di-tune

## Skenario

- Penulis mengklaim metode baru mengalahkan XGBoost sebesar 2% AUC.
- Namun XGBoost dilatih dengan parameter default tanpa tuning.
- Setelah XGBoost di-tuning dengan budget yang sama, selisih menjadi 0.3% dan tidak signifikan.

## Langkah Evaluasi yang Benar

1. Reproduksi baseline dengan konfigurasi yang dilaporkan.
2. Lakukan tuning untuk semua kandidat dengan budget waktu yang sama.
3. Jalankan repeated cross-validation dengan seed berbeda.
4. Lakukan uji statistik.
5. Laporkan variance dan interval kepercayaan.

## Pelajaran

- Novelty metode tidak dapat diklaim hanya dari hasil eksperimen yang tidak adil.
- Strong baseline adalah pertahanan pertama terhadap klaim berlebihan.

---

# Slide 27 - Praktikum: Menyiapkan Lingkungan GBDT

## Instalasi Library

```bash
pip install xgboost lightgbm catboost scikit-learn pandas
```

## Import Library

```python
import pandas as pd
import numpy as np
import xgboost as xgb
import lightgbm as lgb
from catboost import CatBoostClassifier
```

## Tujuan Praktikum

- Membandingkan performa masing-masing library pada dataset yang sama.
- Menerapkan early stopping dan cross-validation.
- Mencatat waktu training dan akurasi agar analisis *performance vs complexity* dilakukan.

---

# Slide 28 - Contoh Implementasi: XGBoost

```python
from xgboost import XGBClassifier
from sklearn.model_selection import train_test_split

X_train, X_val, y_train, y_val = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = XGBClassifier(
    n_estimators=500,
    max_depth=6,
    learning_rate=0.05,
    subsample=0.8,
    colsample_bytree=0.8,
    reg_lambda=1.0,
    eval_metric="logloss",
    early_stopping_rounds=50
)

model.fit(
    X_train, y_train,
    eval_set=[(X_val, y_val)],
    verbose=False
)
```

## Catatan

- `early_stopping_rounds` membantu memilih jumlah iterasi secara otomatis.
- `eval_metric` disesuaikan dengan masalah.

---

# Slide 29 - Contoh Implementasi: LightGBM

```python
from lightgbm import LGBMClassifier

model = LGBMClassifier(
    n_estimators=500,
    max_depth=6,
    learning_rate=0.05,
    subsample=0.8,
    subsample_freq=1,
    colsample_bytree=0.8,
    reg_lambda=1.0
)

model.fit(
    X_train, y_train,
    eval_set=[(X_val, y_val)],
    callbacks=[lgb.early_stopping(50)]
)
```

## Catatan

- LightGBM memiliki parameter `subsample_freq` untuk mengontrol frekuensi row sampling.
- Callback early stopping tersedia pada versi modern.
- Kode untuk CatBoost dapat ditulis dengan pola serupa.

---

# Slide 30 - Workflow Eksperimen Komparatif

## Alur yang Disarankan

```text
EDA dan preprocessing
       |
       v
Split data (train/val/test)
       |
       v
Tuning hyperparameter pada train + validation
       |
       v
Latih semua kandidat model dengan budget sama
       |
       v
Evaluasi pada validation untuk memilih model
       |
       v
Evaluasi final pada test set (sekali)
       |
       v
Ulangi dengan seed berbeda / uji statistik
```

## Prinsip

- Jangan pernah menggunakan test set untuk tuning.
- Gunakan pipeline sklearn agar preprocessing tidak bocor ke validation.
- Dokumentasikan setiap keputusan.

---

# Slide 31 - Metrik Evaluasi

## Klasifikasi

| Metrik | Fokus |
|---|---|
| Accuracy | Cocok jika kelas seimbang |
| Precision | Ketepatan kelas positif |
| Recall | Menangkap kelas positif |
| F1-score | Keseimbangan precision dan recall |
| ROC-AUC | Kemampuan membedakan kelas |
| PR-AUC | Lebih baik untuk data imbalance |

## Regresi

| Metrik | Fokus |
|---|---|
| MAE | Error rata-rata absolut |
| RMSE | Memberi penalti besar pada error ekstrem |
| R² | Proporsi variance yang dijelaskan |

## Untuk Penelitian

- Pilih metrik primer sesuai research question.
- Laporkan metrik tambahan sebagai bukti pendukung.
- Jangan hanya memilih metrik yang membuat metode menang.

---

# Slide 32 - Feature Importance dan Interpretasi

## Jenis Feature Importance pada GBDT

| Jenis | Deskripsi |
|---|---|
| Gain-based importance | Kontribusi fitur terhadap penurunan loss |
| Split count | Frekuensi fitur digunakan dalam split |
| Permutation importance | Penurunan performa saat fitur diacak |

## Peringatan

- Feature importance tidak berarti hubungan kausal.
- Gain-based importance dihitung dari training data dan dapat bias.
- Interpretasi yang lebih dalam dapat menggunakan SHAP, yang akan dibahas pada Pertemuan 13.

## Kegunaan

- Mendeteksi fitur yang tidak relevan.
- Membantu memahami keputusan model.
- Menjadi titik awal error analysis dan explainability.

---

# Slide 33 - GBDT sebagai Strong Baseline Data Tabular

## Fakta Praktik

- Pada banyak dataset tabular, GBDT seperti XGBoost, LightGBM, dan CatBoost sering menjadi baseline terkuat.
- Random Forest dan Logistic Regression tetap penting sebagai baseline sederhana.
- Model neural tidak selalu mengalahkan GBDT pada data tabular.

## Implikasi Penelitian

- Penelitian yang mengusulkan metode baru pada tabular data harus membandingkannya dengan GBDT yang di-tuning.
- Jika metode baru hanya dapat mengalahkan GBDT dengan biaya komputasi jauh lebih besar, analisis trade-off wajib dilaporkan.
- Pertemuan 09 akan membahas apakah deep tabular learning dapat memberikan keuntungan yang nyata.

---

# Slide 34 - Critical Discussion: Pertanyaan Kunci untuk Paper

## Pertanyaan yang Harus Diajukan

1. Apakah baseline dalam paper di-tuning dengan benar?
2. Berapa banyak hyperparameter yang dieksplorasi dan dengan metode apa?
3. Apakah peningkatan performa signifikan secara statistik?
4. Berapa perbandingan waktu dan sumber daya komputasi?
5. Apakah hasil konsisten pada lebih dari satu dataset?
6. Apakah novelty terletak pada metode atau hanya pada konfigurasi?

## Hubungan dengan Tugas Paper Review

- Pertanyaan ini digunakan sebagai kerangka critical review paper terindeks Scopus.
- Fokus utama adalah membedakan **performance improvement** dari **scientific contribution**.

---

# Slide 35 - Research Project: Mengidentifikasi Candidate Research Gap

## Posisi dalam Progress Project

| Minggu | Target |
|---|---|
| 4 | Menentukan strong baseline |
| **5** | **Identifikasi candidate research gap** |
| 6 | Finalisasi research gap |

## Cara Menemukan Gap Berbasis Ensemble

- Uji GBDT pada data yang tidak biasa: data sangat imbalance, noise, atau fitur kategorikal kompleks.
- Analisis error kasus: pada instance mana GBDT gagal?
- Bandingkan interpretability GBDT dengan model lain.
- Ukur sensitivitas terhadap hyperparameter dan stabilitas pada data berubah distribusi.
- Evaluasi cost-performance jika sumber daya terbatas.

## Keluaran

- Daftar 2–3 kandidat research gap yang didukung literatur dan hasil baseline.
- Gap tersebut menjadi bahan diskusi minggu berikutnya.

---

# Slide 36 - Rangkuman dan Jembatan ke Pertemuan Berikutnya

## Rangkuman

- Ensemble learning terdiri atas bagging dan boosting.
- Gradient Boosting adalah teknik ensemble yang sangat kuat untuk data tabular.
- XGBoost, LightGBM, dan CatBoost merupakan implementasi modern GBDT.
- Perbandingan metode harus adil: baseline di-tuning, evaluasi berulang, dan kompleksitas dilaporkan.

## Jembatan ke Pertemuan 06

- Materi berikutnya membahas **Clustering & Unsupervised Data Mining**.
- Jika supervised learning menghubungkan fitur ke label, unsupervised learning mencari struktur tanpa label.
- Konsep ensemble juga dapat digunakan pada unsupervised learning, misalnya ensemble clustering.

---

# Slide 37 - Penutup

TERIMA KASIH

Pertemuan berikutnya

**Clustering & Unsupervised Data Mining**