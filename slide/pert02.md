# Slide 00 - Cover

EF235161 - TD Data Mining

Pertemuan 02

## Exploratory Data Analysis (EDA), Data Preprocessing & Experimental Validity

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D

Departemen Teknik Informatika - ITS

---

# Slide 01 - Agenda & Peta Pertemuan

## Agenda

- Data Understanding dan Exploratory Data Analysis (EDA)
- Data Preprocessing
- Experimental Validity
- Praktikum 1: EDA dan Experimental Pipeline
- Kaitan dengan Research Project

## Peta Pertemuan

```text
Pertemuan 01: Modern Data Mining & Research Landscape
            ↓
Pertemuan 02: EDA, Data Preprocessing & Experimental Validity
            ↓
Pertemuan 03: Pattern Mining & Knowledge Discovery
```

Pertemuan ini menjadi fondasi untuk semua eksperimen pada pertemuan berikutnya.

---

# Slide 02 - Kaitan dengan Pertemuan Sebelumnya dan Berikutnya

## Dari Pertemuan 01: Modern Data Mining & Research Landscape

- Pada pertemuan sebelumnya, mahasiswa memahami perbedaan *engineering problem* dan *research problem*.
- Mahasiswa juga telah mengidentifikasi 2–3 *candidate research area*.
- Sekarang kita masuk ke tahap **memahami data** yang akan digunakan dalam penelitian.

## Menuju Pertemuan 03: Pattern Mining & Knowledge Discovery

- Temuan EDA sering menjadi dasar untuk mencari pola yang menarik.
- Kualitas data yang baik adalah prasyarat agar pola yang ditemukan dapat dipercaya.

## Posisi Pertemuan Ini

- Menjembatani *research problem* dengan *experimental design*.
- Memberikan bekal untuk memilih dataset, preprocessing, dan evaluasi yang valid.

---

# Slide 03 - Tujuan Pembelajaran & CPMK

## Capaian Pembelajaran Mata Kuliah yang Didukung

- **CPMK-1**: Menganalisis konsep, algoritma, dan perkembangan modern Data Mining.
- **CPMK-4**: Merancang dan melaksanakan eksperimen Data Mining yang valid dan reproducible.

## Tujuan Khusus Pertemuan 02

Setelah mengikuti pertemuan ini, mahasiswa mampu:

- Melakukan **dataset profiling** dan **descriptive statistics**.
- Menjelaskan dan menerapkan **univariate, bivariate, multivariate analysis**.
- Mengidentifikasi **missing values, outlier, imbalance, redundant features, indikasi leakage**.
- Menjelaskan strategi **data preprocessing** menggunakan Python/scikit-learn.
- Membangun **preprocessing pipeline** yang tidak membocorkan informasi test set ke training.
- Menjelaskan konsep **experimental validity** dalam konteks data mining.

---

# Slide 04 - EDA dalam Workflow Penelitian Data Mining

## Definisi EDA

- **Exploratory Data Analysis (EDA)** adalah proses investigasi awal data untuk memahami struktur, pola, anomali, dan hubungan antarvariabel.
- EDA bukan sekadar membuat grafik, melainkan proses berpikir ilmiah tentang data.

## Workflow Penelitian Data Mining

```text
Research Problem
      ↓
Dataset & Data Understanding
      ↓
EDA  →  Preprocessing  →  Modeling  →  Evaluation  →  Interpretation
```

## EDA Menjawab Pertanyaan:

- Apa karakteristik data?
- Masalah kualitas apa yang ada?
- Hipotesis awal apa yang dapat dibangun?
- Apakah ada indikasi bias atau leakage?
- Keputusan eksperimen apa yang paling masuk akal?

---

# Slide 05 - Dataset Profiling

## Pengertian Dataset Profiling

Dataset profiling adalah proses merangkum karakteristik dasar dataset secara cepat dan terstruktur.

## Komponen Profil Dataset

| Aspek | Informasi yang Dicari |
|---|---|
| Jumlah observasi | Berapa banyak baris/record? |
| Jumlah fitur | Berapa banyak kolom/variabel? |
| Tipe data | numerik, kategorikal, ordinal, datetime, teks |
| Cardinality | jumlah nilai unik tiap fitur |
| Target | ada/tidak, tipe target, distribusi |
| Missing values | jumlah dan pola missing tiap kolom |
| Duplicate | apakah terdapat baris duplikat |
| Range | min, max, nilai tidak wajar |

## Contoh Panduan Profil

```text
Dataset: candidate_dataset.csv
Rows: 10,000
Columns: 15
Dtypes: 9 numeric, 4 categorical, 2 datetime
Target: churn (binary: 0/1)
Missing: 3 columns with >5% missing
Duplicated rows: 12
```

---

# Slide 06 - Descriptive Statistics

## Tujuan

Ringkasan numerik untuk memahami lokasi, sebaran, dan bentuk distribusi variabel numerik.

## Ukuran Utama

| Ukuran | Kegunaan |
|---|---|
| Mean | Nilai rata-rata; sensitif terhadap outlier |
| Median | Nilai tengah; robust terhadap outlier |
| Mode | Nilai yang paling sering muncul |
| Variance | Sebaran data dari mean |
| Standard deviation | Akar variance; skala sebaran |
| Quantile | Nilai pada posisi tertentu (Q1, Q2, Q3) |
| IQR | Q3 - Q1; ukuran sebaran tengah |
| Min / Max | Rentang nilai; deteksi nilai ekstrem |

## Interpretasi

- Jika mean > median, distribusi cenderung **right-skewed**.
- Jika mean < median, distribusi cenderung **left-skewed**.
- IQR membantu mendeteksi outlier dengan metode *Tukey's fences*.

---

# Slide 07 - Univariate Analysis

## Definisi

Univariate analysis mempelajari **satu variabel pada satu waktu**.

## Pertanyaan yang Dijawab

- Bagaimana distribusi nilai pada fitur ini?
- Apakah ada nilai yang tidak masuk akal?
- Bagaimana proporsi tiap kategori?
- Apakah ada skewness atau long-tail?
- Apakah fitur ini layak dimasukkan ke model?

## Teknik

- Numerik: histogram, density plot, boxplot, violin plot, ECDF.
- Kategorikal: count plot, proportion plot.

## Peran dalam EDA

Univariate analysis menjadi dasar untuk menentukan transformasi, encoding, dan perlu tidaknya penanganan outlier.

---

# Slide 08 - Bivariate Analysis

## Definisi

Bivariate analysis mempelajari **hubungan antara dua variabel**.

## Dua Jenis Utama

1. **Hubungan antar fitur**: misalnya korelasi antara `umur` dan `pendapatan`.
2. **Hubungan fitur dengan target**: misalnya distribusi `pendapatan` pada kelas `churn = 1` vs `churn = 0`.

## Pertanyaan yang Dijawab

- Apakah fitur ini relevan terhadap target?
- Apakah dua fitur saling redundan?
- Apakah hubungan bersifat linear atau non-linear?
- Apakah ada interaksi yang perlu dieksplorasi lebih lanjut?

## Catatan

- Bivariate analysis tidak cukup untuk mengklaim kausalitas.
- Perlu dilanjutkan ke multivariate analysis.

---

# Slide 09 - Multivariate Analysis

## Definisi

Multivariate analysis mempelajari **interaksi dan struktur data** dengan melibatkan lebih dari dua variabel secara bersamaan.

## Contoh Penggunaan

- Menemukan pola kombinasi fitur yang berkaitan dengan target.
- Mengidentifikasi fitur yang saling bergantung.
- Mendeteksi sub-kelompok dalam data.
- Menentukan apakah diperlukan feature engineering berbasis interaksi.

## Teknik yang Relevan

- Pair plot / scatter plot matrix
- Correlation matrix
- Dimensionality reduction (PCA, t-SNE, UMAP — dibahas di pertemuan 6)
- Heatmap dengan anotasi korelasi

## Peran dalam Penelitian

Multivariate analysis membantu membangun hipotesis yang lebih realistis dan mencegah kesimpulan yang terlalu sederhana dari analisis bivariat.

---

# Slide 10 - Distribusi Data, Skewness & Long-Tail

## Mengapa Distribusi Penting

- Banyak model mengasumsikan data berada pada skala tertentu.
- Distribusi yang sangat miring dapat memengaruhi stabilitas model.

## Jenis Skewness

| Kondisi | Interpretasi |
|---|---|
| Skewness ≈ 0 | Distribusi relatif simetris |
| Skewness > 0 | Right-skewed / ekor di kanan |
| Skewness < 0 | Left-skewed / ekor di kiri |

## Long-Tail Distribution

- Sebagian besar nilai berada di rentang kecil.
- Terdapat sedikit nilai yang sangat besar.
- Contoh: pendapatan, frekuensi transaksi.

## Transformasi yang Mungkin Diperlukan

- Log transform
- Box-Cox transform
- Yeo-Johnson transform (mendukung nilai non-positif)

> Catatan: transformasi harus dihitung dalam pipeline agar tidak membocorkan informasi test set.

---

# Slide 11 - Visualisasi Numerik

## Tujuan Visualisasi

- Memahami bentuk distribusi.
- Mendeteksi outlier.
- Membandingkan beberapa kelompok.

## Teknik

| Visualisasi | Kegunaan |
|---|---|
| Histogram | Frekuensi nilai dalam bin |
| Density plot | Estimasi distribusi kontinu yang halus |
| Boxplot | Ringkasan lima angka; deteksi outlier |
| Violin plot | Distribusi + boxplot |
| ECDF | Proporsi kumulatif; perbandingan antar kelompok |

## Contoh Kode Singkat

```python
import seaborn as sns
sns.histplot(data=df, x="income", bins=30)
sns.boxplot(data=df, y="age")
sns.violinplot(data=df, x="target", y="amount")
sns.ecdfplot(data=df, x="duration")
```

Visualisasi yang baik membantu mengomunikasikan temuan EDA kepada pembaca paper.

---

# Slide 12 - Visualisasi Kategorikal

## Tujuan

Memahami distribusi data kategorikal dan hubungannya dengan variabel lain.

## Teknik

| Teknik | Deskripsi |
|---|---|
| Count plot | Jumlah observasi tiap kategori |
| Proportion plot | Proporsi tiap kategori |
| Contingency table | Tabel silang dua variabel kategorikal |

## Contoh Pertanyaan

- Berapa proporsi kelas target?
- Apakah kota memiliki pengaruh terhadap kecenderungan churn?
- Apakah dua kategori sering muncul bersama?

## Contoh Kode

```python
import pandas as pd
from seaborn import countplot

countplot(data=df, x="city")
pd.crosstab(df["city"], df["target"], normalize="index")
```

Visualisasi kategorikal harus disertai dengan tabel ringkasan agar angka tetap dapat dibaca.

---

# Slide 13 - Korelasi dan Asosiasi Antarvariabel

## Definisi

Korelasi mengukur kekuatan dan arah hubungan antara dua variabel.

## Metode

| Metode | Jenis Data | Catatan |
|---|---|---|
| Pearson correlation | Numerik-numerik | Mengukur hubungan linear |
| Spearman rank | Numerik-numerik / ordinal | Mengukur hubungan monotonik |
| Cramér's V | Kategorikal-kategorikal | Mengukur asosiasi |
| Mutual Information | Mixed | Menangkap hubungan non-linear |

## Interpretasi

- Korelasi mendekati +1: hubungan positif kuat.
- Korelasi mendekati -1: hubungan negatif kuat.
- Korelasi mendekati 0: tidak ada hubungan linear.

> Korelasi tinggi antar fitur dapat mengindikasikan redundansi atau leakage; korelasi tinggi fitur dengan target perlu diselidiki lebih jauh.

---

# Slide 14 - Scatter Plot, Pair Plot, Correlation Matrix & Heatmap

## Multivariate Visualization

| Visualisasi | Kegunaan |
|---|---|
| Scatter plot | Hubungan dua variabel numerik |
| Pair plot | Matriks scatter untuk banyak variabel |
| Correlation matrix | Ringkasan korelasi berpasangan |
| Heatmap | Visualisasi nilai korelasi dengan warna |

## Contoh Kode

```python
import matplotlib.pyplot as plt
import seaborn as sns

## Scatter plot
sns.scatterplot(data=df, x="age", y="income", hue="target")

## Pair plot
sns.pairplot(df[["age", "income", "amount", "target"]], hue="target")

## Correlation heatmap
corr = df.select_dtypes("number").corr()
sns.heatmap(corr, annot=True, cmap="coolwarm")
plt.show()
```

## Perhatian

- Pair plot pada dataset besar dapat menjadi lambat dan sulit dibaca.
- Periksa korelasi sempurna (`±1`) sebagai indikasi fitur redundant.

---

# Slide 15 - Analisis Target / Class Imbalance

## Tujuan

Memahami distribusi label/target sebelum menentukan metric dan desain eksperimen.

## Langkah Analisis

- Hitung jumlah observasi tiap kelas.
- Hitung proporsi tiap kelas.
- Perhatikan apakah ada kelas sangat minoritas.

## Contoh Tabel Imbalance

| Kelas | Jumlah | Proporsi |
|---:|---:|---:|
| 0 | 9,000 | 90% |
| 1 | 1,000 | 10% |

## Implikasi

- Akurasi tidak lagi menjadi metric yang tepat.
- Diperlukan precision, recall, F1, PR-AUC, ROC-AUC.
- Resampling atau class weight mungkin diperlukan.
- Masalah class imbalance dibahas lebih lanjut pada Pertemuan 07.

> EDA harus mencatat adanya imbalance sebagai *temuan* yang memengaruhi desain eksperimen.

---

# Slide 16 - Missing Values & Missingness Analysis

## Mengapa Missing Values Penting

- Banyak algoritma tidak dapat menangani nilai kosong.
- Pola missing dapat mengindikasikan bias data.

## Mekanisme Missing

| Mekanisme | Deskripsi |
|---|---|
| MCAR | Missing sepenuhnya acak |
| MAR | Missing terkait dengan variabel lain yang teramati |
| MNAR | Missing terkait dengan nilai yang hilang itu sendiri |

## Analisis Missingness

- Buat tabel jumlah dan persentase missing per kolom.
- Visualisasikan matriks missing.
- Bandingkan distribusi data lengkap vs data missing.

## Contoh

```python
df.isna().sum()
sns.heatmap(df.isna(), cbar=False)
```

Keputusan imputasi harus didasarkan pada mekanisme missing dan tujuan eksperimen.

---

# Slide 17 - Outlier dan Nilai Tidak Wajar

## Definisi

Outlier adalah observasi yang sangat berbeda dari mayoritas data.

## Sumber Outlier

- Kesalahan pengukuran / input.
- Peristiwa langka yang valid.
- Data dari domain berbeda.
- Masalah representasi.

## Deteksi

- Statistik: z-score, IQR (Q1 - 1.5*IQR; Q3 + 1.5*IQR).
- Visual: boxplot, scatter plot.
- Knowledge-based: nilai tidak mungkin (misal umur negatif).

## Keputusan

- Jangan langsung buang.
- Selidiki apakah outlier merupakan *data error* atau *rare event*.
- Pertimbangkan transformasi, winsorization, atau model yang robust.
- Kaitkan dengan topik anomaly detection pada Pertemuan 07.

---

# Slide 18 - Duplicate Data, Inkonsistensi & Redundant Features

## Duplicate Data

- Baris yang sama dapat muncul lebih dari sekali.
- Dampak: estimasi statistik bias; overweight terhadap duplikat.

## Data Inconsistency

- Format tidak konsisten (misal `"30-01-2025"` vs `"2025/01/30"`).
- Nilai kontradiktif (misal umur 30 tetapi tanggal lahir 1990).
- Perlu dicek dengan aturan domain.

## Redundant Features

- Fitur yang dapat diturunkan dari fitur lain (misal `tanggal_lahir` dan `umur`).
- Korelasi sempurna antara dua fitur.
- Dampak: multikolinearitas, interpretasi sulit, potensi leakage.

## Tindakan

- Drop duplicate rows setelah memeriksa konteks.
- Standarkan format.
- Identifikasi dan pertimbangkan untuk drop fitur redundant.

---

# Slide 19 - Indikasi Data Leakage sejak Tahap Eksplorasi

## Definisi Leakage

Data leakage adalah kebocoran informasi dari luar training set ke dalam proses training, sehingga evaluasi menjadi tidak valid.

## Indikasi dari EDA

| Indikasi | Contoh |
|---|---|
| Fitur berkorelasi sempurna dengan target | Kolom `churn_label` tertinggal sebagai fitur |
| Kolom ID yang unik per baris | `customer_id` dipakai sebagai fitur |
| Fitur berisi informasi masa depan | `total_paid_next_month` pada data saat ini |
| Pemrosesan agregat global | statistik dataset penuh dipakai sebelum split |
| Fitur turunan target | rasio yang menggunakan target sebagai pembilang |

## Tindakan Awal

- Catat fitur-fitur mencurigakan dalam laporan EDA.
- Jangan langsung menghapus tanpa pemahaman.
- Diskusikan dengan domain expert bila perlu.

Leakage harus ditangani sebelum membangun model.

---

# Slide 20 - Dataset Bias dan Keterbatasan Representasi Data

## Jenis Bias

| Bias | Deskripsi |
|---|---|
| Selection bias | Data tidak mewakili populasi target |
| Sampling bias | Pengambilan sampel tidak acak |
| Label bias | Label tidak akurat / tidak konsisten |
| Temporal bias | Data diambil pada periode tertentu yang tidak mencerminkan masa depan |

## Contoh

- Data survei hanya dari pengguna internet.
- Data transaksi hanya dari satu musim.
- Label anotasi manual dengan subjektivitas tinggi.

## Yang Harus Dilakukan dalam EDA

- Bandingkan distribusi data dengan pengetahuan domain.
- Catat keterbatasan dataset.
- Jangan mengklaim generalisasi tanpa dasar.

Dataset bias adalah bagian dari *threats to validity* yang harus dilaporkan dalam paper.

---

# Slide 21 - Menghubungkan Temuan EDA dengan Keputusan Eksperimen

## EDA Tidak Berhenti pada Gambar

Setiap temuan harus memengaruhi keputusan penelitian.

| Temuan EDA | Keputusan Eksperimen |
|---|---|
| Fitur skewed | Menerapkan transformasi log |
| Missing besar pada suatu kolom | Memilih metode imputasi atau drop kolom |
| Class imbalance | Memilih metric dan resampling |
| Korelasi tinggi fitur-target | Menyelidiki potensi leakage |
| Fitur redundant | Feature selection / drop fitur |
| Outlier ekstrem | Perbaiki data atau pertimbangkan robust scaling |

## Output EDA

- Daftar minimal **5 temuan** yang relevan dengan desain eksperimen.
- Profil dataset yang jelas.
- Dasar untuk preprocessing dan pemilihan model.

Temuan EDA menjadi *evidence* untuk keputusan metodologis.

---

# Slide 22 - Data Preprocessing: Ringkasan

## Tujuan

Mengubah data mentah menjadi data yang siap digunakan oleh model secara adil dan valid.

## Alur Umum

```text
Raw Data
   ↓
Cleaning (missing, duplicate, outlier)
   ↓
Encoding categorical
   ↓
Scaling / transformation
   ↓
Feature engineering
   ↓
Sampling / imbalance handling
   ↓
Train/validation/test split
   ↓
Model
```

## Prinsip Utama

- Seluruh transformasi harus dipelajari **hanya dari data training**.
- Transformasi yang sama diterapkan ke validation/test menggunakan parameter yang sudah di-fit.
- Gunakan `Pipeline` dari scikit-learn untuk menghindari leakage.

---

# Slide 23 - Penanganan Missing Values

## Strategi

### 1. Deletion
- Listwise deletion: hapus baris dengan missing.
- Column deletion: hapus kolom jika missing terlalu besar.
- Cocok jika missing kecil dan tidak berpola sistematis.

### 2. Imputation
- Mean/median/mode imputation.
- KNN imputation.
- Regression imputation.
- Multiple imputation.

### 3. Model-Based Imputation
- Prediksi nilai missing menggunakan model.
- Perhatikan risiko leakage.

## Contoh scikit-learn

```python
from sklearn.impute import SimpleImputer, KNNImputer

SimpleImputer(strategy="median")
KNNImputer(n_neighbors=5)
```

## Keputusan Berdasarkan EDA

- MCAR dapat diimputasi sederhana.
- MAR dapat memanfaatkan variabel lain.
- MNAR perlu asumsi domain.

---

# Slide 24 - Outlier Handling

## Prinsip

Outlier harus ditangani dengan hati-hati; tidak selalu merupakan *noise*.

## Opsi Penanganan

| Metode | Deskripsi |
|---|---|
| Biarkan | Jika model robust atau outlier adalah kejadian valid |
| Transformasi | Log / Box-Cox mengurangi pengaruh ekor panjang |
| Winsorize | Batasi nilai pada batas quantile tertentu |
| Remove | Hanya jika terbukti data error |
| Treat as anomaly | Jika konteksnya deteksi anomali |

## Contoh Kode Sederhana

```python
Q1 = df["amount"].quantile(0.25)
Q3 = df["amount"].quantile(0.75)
IQR = Q3 - Q1
mask = (df["amount"] >= Q1 - 1.5*IQR) & (df["amount"] <= Q3 + 1.5*IQR)
df_clean = df[mask]
```

## Catatan

- Keputusan harus didokumentasikan.
- Jangan menghapus outlier tanpa understanding domain.
- Outlier yang merupakan *rare event* dapat menjadi fokus penelitian.

---

# Slide 25 - Encoding Categorical Variables

## Kategori Data Kategorikal

| Jenis | Contoh | Encoding yang Umum |
|---|---|---|
| Nominal | kota, warna | One-hot encoding |
| Ordinal | pendidikan, rating | Ordinal encoding |
| High-cardinality | kode pos, produk | Target encoding / feature hashing |

## Teknik Encoding

### One-hot
- Membuat kolom biner untuk tiap kategori.
- Rentan terhadap dimensi besar pada high-cardinality.

### Ordinal
- Memberi angka berurutan berdasarkan urutan kategori.

### Target/Mean Encoding
- Mengganti kategori dengan mean target.
- **Risiko leakage tinggi**; harus dilakukan dalam cross-validation dengan hati-hati.

## Contoh ColumnTransformer

```python
from sklearn.preprocessing import OneHotEncoder

cat_cols = ["city", "education"]
encoder = OneHotEncoder(handle_unknown="ignore")
```

Pilih encoding berdasarkan jenis data dan kebutuhan model.

---

# Slide 26 - Feature Scaling dan Normalization

## Mengapa Perlu Scaling

- Algoritma berbasis jarak (k-NN, SVM, k-means) sangat sensitif terhadap skala.
- Neural network dan gradient descent konvergen lebih cepat dengan skala yang seragam.
- Tree-based model tidak membutuhkan scaling.

## Teknik Scaling

| Teknik | Formula / Pustaka | Kapan Digunakan |
|---|---|---|
| StandardScaler | (x - mean) / std | Data kira-kira normal; tidak harus, tapi umum |
| MinMaxScaler | (x - min) / (max - min) | Data dalam rentang [0,1] |
| RobustScaler | (x - median) / IQR | Data banyak outlier |
| MaxAbsScaler | x / max(abs(x)) | Data sparse |

## Prinsip

- Fit scaler pada **training set saja**.
- Gunakan scaler yang sama untuk transform test set.

```python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
```

---

# Slide 27 - Feature Engineering

## Definisi

Feature engineering adalah proses membuat fitur baru dari data mentah untuk membantu model menangkap pola yang relevan.

## Contoh

- Rasio dua fitur: `debt / income`.
- Interaksi: `age * amount`.
- Binning: mengubah umur menjadi kelompok.
- Ekstraksi datetime: hari, bulan, tahun, hari kerja.
- Teks: panjang kalimat, TF-IDF (jika relevan).

## Prinsip

- Berbasis EDA dan domain knowledge, bukan sekadar mencoba-coba.
- Setiap fitur baru harus dicek distribusi dan hubungannya dengan target.
- Feature engineering yang berlebihan dapat menyebabkan overfitting.

## Hubungan dengan Pertemuan Berikutnya

- Feature engineering berpengaruh pada pattern mining (Pertemuan 03) dan baseline model (Pertemuan 04).

---

# Slide 28 - Sampling dan Class Imbalance Handling

## Masalah

Model cenderung bias ke kelas mayoritas jika data tidak seimbang.

## Teknik Umum

| Teknik | Cara Kerja |
|---|---|
| Undersampling | Mengurangi kelas mayoritas |
| Oversampling | Menggandakan kelas minoritas |
| SMOTE | Membuat sintetis kelas minoritas |
| Class weight | Memberi bobot lebih besar pada kelas minoritas |

## Peringatan Penting

- **Jangan resampling sebelum split** karena dapat menyebabkan leakage dan evaluasi optimis.
- Gunakan pipeline atau lakukan resampling hanya pada training fold.
- Metric evaluasi harus sesuai (F1, PR-AUC, ROC-AUC).

## Contoh

```python
from imblearn.over_sampling import SMOTE

smote = SMOTE(random_state=42)
X_train_res, y_train_res = smote.fit_resample(X_train, y_train)
```

Masalah imbalance dibahas lebih dalam pada Pertemuan 07.

---

# Slide 29 - Train/Validation/Test Split

## Tiga Set Data

| Set | Fungsi |
|---|---|
| Training | Melatih model |
| Validation | Memilih hyperparameter / validasi berkala |
| Test | Evaluasi final yang tidak pernah digunakan untuk tuning |

## Aturan Umum

- Pisahkan test set sejak awal.
- Gunakan **stratified split** untuk klasifikasi agar proporsi kelas terjaga.
- Gunakan **group split** jika data memiliki kelompok (misal pasien).
- Gunakan **time-based split** untuk data temporal.

## Contoh Kode

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)
X_train, X_val, y_train, y_val = train_test_split(
    X_train, y_train, test_size=0.2, stratify=y_train, random_state=42
)
```

## Prinsip

- Validation dan test harus bersih dari informasi training.
- Random seed harus diatur agar hasil reproducible.

---

# Slide 30 - Cross-Validation

## Definisi

Cross-validation membagi data menjadi beberapa fold dan melatih model beberapa kali untuk mendapatkan estimasi performa yang lebih stabil.

## Jenis

| Jenis | Deskripsi |
|---|---|
| K-Fold | Data dibagi menjadi k fold; tiap fold menjadi validasi bergantian |
| Stratified K-Fold | Proporsi kelas dijaga di tiap fold |
| Group K-Fold | Kelompok data tidak terpisah antar fold |
| TimeSeriesSplit | Split berurutan untuk data temporal |

## Contoh Kode

```python
from sklearn.model_selection import StratifiedKFold, cross_val_score
from sklearn.ensemble import RandomForestClassifier

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X_train, y_train, cv=cv, scoring="roc_auc")
print(scores.mean(), scores.std())
```

## Catatan

- Cross-validation digunakan untuk model selection dan estimasi generalisasi.
- Test set tetap harus disimpan untuk evaluasi final.

---

# Slide 31 - Experimental Validity: Konsep Dasar

## Pengertian

Experimental validity adalah sejauh mana kesimpulan eksperimen benar dan dapat dipercaya.

## Empat Jenis Validitas

| Validitas | Pertanyaan |
|---|---|
| Internal | Apakah perubahan hasil benar-benar disebabkan oleh perlakuan/metode? |
| Eksternal | Apakah hasil dapat digeneralisasi ke populasi/konteks lain? |
| Konstruk | Apakah pengukuran benar-benar mengukur konsep yang dimaksud? |
| Statistik | Apakah analisis statistik cukup kuat dan tepat? |

## Dalam Data Mining

- Internal: apakah perbedaan performa berasal dari metode, bukan dari leakage/tuning tidak fair?
- Eksternal: apakah dataset mewakili populasi?
- Konstruk: apakah metric benar-benar merepresentasikan tujuan bisnis/penelitian?
- Statistik: apakah signifikansi diuji dengan benar?

Experimental validity menghubungkan EDA, preprocessing, dan desain eksperimen.

---

# Slide 32 - Data Leakage: Ancaman Utama Validitas

## Bentuk Data Leakage

### 1. Target Leakage
- Fitur yang hanya tersedia setelah target diketahui.
- Contoh: kolom `churn_actual` pada data saat ini.

### 2. Preprocessing Leakage
- Menggunakan statistik seluruh data (`mean`, `std`, `min`, `max`) sebelum split.
- Contoh: `StandardScaler().fit(X)` pada seluruh dataset, lalu split.

### 3. Temporal Leakage
- Menggunakan informasi masa depan untuk memprediksi masa lalu.
- Contoh: menggunakan `avg_next_month_sales` sebagai fitur.

## Dampak

- Performa pada eksperimen sangat tinggi.
- Performa pada dunia nyata jauh lebih rendah.
- Kesimpulan penelitian menjadi invalid.

## Pencegahan

- Gunakan `sklearn.pipeline.Pipeline`.
- Fit transformasi hanya pada training.
- Lakukan split sebelum preprocessing apapun.

---

# Slide 33 - Dataset Bias dan Representativeness

## Representativeness

Dataset dikatakan representatif jika mencerminkan karakteristik populasi yang menjadi target generalisasi.

## Pertanyaan yang Harus Diajukan dalam EDA

- Siapa/sumber data ini berasal?
- Berapa lama periode pengambilan data?
- Apakah ada kelompok yang tidak terwakili?
- Apakah distribusi fitur wajar dibandingkan domain?

## Contoh Bias

- Data hanya dari kota besar.
- Data hanya dari pengguna aktif.
- Data hanya dari periode krisis ekonomi.

## Dampak pada Eksperimen

- Hasil mungkin tidak berlaku di luar konteks.
- Klaim generalisasi harus dibatasi.
- Perlu disebutkan dalam *limitation* paper.

## Solusi

- Dokumentasikan karakteristik dataset.
- Gunakan cross-dataset evaluation bila memungkinkan.
- Diskusikan bias sebagai *threats to validity*.

---

# Slide 34 - Train-Test Contamination

## Definisi

Train-test contamination terjadi ketika informasi dari test set (atau data masa depan) ikut memengaruhi proses training.

## Bentuk Contamination

| Kesalahan | Contoh |
|---|---|
| Scaling sebelum split | `fit_transform(X_total)` lalu split |
| Imputasi sebelum split | `fit(SimpleImputer)` pada seluruh data |
| Feature selection sebelum split | memilih fitur berdasarkan seluruh data |
| Oversampling sebelum split | membuat sintetis dari semua data lalu split |
| Tuning dengan test set | memilih hyperparameter berdasarkan test set |

## Dampak

- Estimasi performa terlalu optimis.
- Setup eksperimen tidak fair terhadap metode lain.
- Kesimpulan tidak valid.

## Solusi

```text
Split → Fit preprocessing on train → Transform train & test
     → Fit model on train → Evaluate on test
```

Gunakan `Pipeline` dan `ColumnTransformer` untuk memastikan alur ini.

---

# Slide 35 - Reproducible Preprocessing Pipeline

## Mengapa Reproducibility Penting

- Penelitian yang baik harus dapat direproduksi oleh peneliti lain.
- Reproducibility meningkatkan kepercayaan terhadap hasil.

## Komponen Reproducibility

| Komponen | Contoh |
|---|---|
| Random seed | `random_state=42` |
| Environment | Python version, library version |
| Configuration | parameter preprocessing dan model |
| Data versioning | hash/hash dataset, tanggal unduh |
| Experiment tracking | MLflow, Weights & Biases |

## Pipeline dengan scikit-learn

```python
from sklearn.pipeline import Pipeline

pipeline = Pipeline([
    ("preprocessing", preprocessor),
    ("classifier", RandomForestClassifier(random_state=42))
])
```

## Praktik Baik

- Simpan pipeline sebagai file `.joblib`.
- Sertakan script eksperimen dan versi library dalam dokumentasi.
- Catat semua keputusan preprocessing dalam notebook.

---

# Slide 36 - Dampak Preprocessing terhadap Fairness of Comparison

## Masalah

Jika preprocessing berbeda untuk metode yang dibandingkan, hasil perbandingan menjadi tidak adil.

## Contoh Ketidakadilan

- Metode A menggunakan imputasi KNN, Metode B tidak.
- Metode A menggunakan feature selection seluruh data, Metode B tidak.
- Metode A di-tuning lebih intensif daripada Metode B.
- Metode A menggunakan class weighting, Metode B tidak.

## Prinsip Fair Comparison

1. Gunakan **pipeline preprocessing yang sama** untuk semua metode.
2. Terapkan transformasi yang sama pada semua metode.
3. Lakukan tuning dengan budget yang wajar dan sebanding.
4. Dokumentasikan semua keputusan preprocessing.

## Kaitannya dengan Pertemuan 04 dan 05

- Strong baseline harus diperlakukan sama dengan proposed method.
- Peningkatan performa baru bermakna jika setup eksperimen fair.

---

# Slide 37 - Praktikum 1: EDA dan Experimental Pipeline

## Tujuan Praktikum

Melakukan **EDA terstruktur terhadap candidate dataset** dan membangun preprocessing pipeline menggunakan Python.

## Target

- Memahami karakteristik dataset.
- Menemukan masalah kualitas data.
- Menyusun temuan EDA yang memengaruhi desain eksperimen.
- Membangun pipeline yang reproducible dan bebas leakage.

## Tools

- Python, Jupyter Notebook / Google Colab
- pandas, NumPy
- Matplotlib, Seaborn
- scikit-learn, imbalanced-learn

## Luaran

- Notebook EDA.
- Ringkasan karakteristik dataset.
- Visualisasi utama.
- Tabel masalah kualitas data.
- Daftar temuan EDA.
- Keputusan preprocessing beserta alasannya.
- Experimental pipeline yang reproducible.

---

# Slide 38 - Tahapan Praktikum 1 (1–8)

Berikut tahapan minimum yang harus dilakukan:

1. **Membaca dan memeriksa struktur dataset**
   - `df.head()`, `df.info()`, `df.shape`

2. **Mengidentifikasi tipe setiap fitur**
   - numerik, kategorikal, ordinal, datetime

3. **Menyusun dataset profile**
   - jumlah baris, kolom, cardinality, missing

4. **Menghitung descriptive statistics**
   - `df.describe()`, mean, median, quantile

5. **Menganalisis distribusi fitur numerik dan kategorikal**
   - histogram, count plot

6. **Menganalisis distribusi target**
   - `df["target"].value_counts()`

7. **Memeriksa missing values**
   - `df.isna().sum()`, visualisasi missing

8. **Mengidentifikasi outlier dan anomali nilai**
   - boxplot, IQR, domain knowledge

---

# Slide 39 - Tahapan Praktikum 1 (9–16)

9. **Menganalisis korelasi / asosiasi antarvariabel**
   - correlation matrix, heatmap, Cramér's V

10. **Mencari indikasi redundant features dan data leakage**
    - korelasi sempurna, fitur turunan, kolom ID

11. **Mengidentifikasi class imbalance**
    - proporsi kelas, rasio minoritas

12. **Membuat visualisasi yang relevan**
    - pilih visualisasi yang menjawab pertanyaan EDA

13. **Mencatat minimal 5 temuan EDA**
    - temuan yang berpotensi memengaruhi desain eksperimen

14. **Merancang preprocessing berdasarkan hasil EDA**
    - pilih imputasi, scaling, encoding, transformasi

15. **Membangun preprocessing dan experimental pipeline menggunakan scikit-learn**
    - `Pipeline`, `ColumnTransformer`, `cross_val_score`

16. **Membandingkan hasil sebelum dan sesudah preprocessing**
    - gunakan baseline model sederhana

---

# Slide 40 - Output Praktikum 1

## Deliverable yang Harus Diserahkan

- **Notebook EDA** yang terdokumentasi dengan baik.
- **Ringkasan karakteristik dataset** dalam bentuk profil.
- **Visualisasi utama** yang mendukung temuan.
- **Tabel masalah kualitas data**: misalnya missing, outlier, imbalance, redundant.
- **Daftar temuan EDA** minimal 5 butir.
- **Keputusan preprocessing** beserta alasannya.
- **Experimental pipeline** yang reproducible.

## Format Penulisan Temuan

```text
Temuan 1: [deskripsi]
- Dampak: [pengaruh pada eksperimen]
- Keputusan: [tindakan yang diambil]
```

## Prinsip

Setiap keputusan harus dapat dijelaskan dengan *evidence* dari EDA, bukan asumsi semata.

---

# Slide 41 - Contoh Kode: Dataset Profiling

## Kode Python

```python
import pandas as pd
import numpy as np

df = pd.read_csv("candidate_dataset.csv")

## Struktur dataset
print("Shape:", df.shape)
print(df.info())

## Profil sederhana
profile = pd.DataFrame({
    "dtype": df.dtypes.astype(str),
    "n_unique": df.nunique(),
    "n_missing": df.isna().sum(),
    "missing_pct": (df.isna().mean() * 100).round(2),
    "mean": df.select_dtypes("number").mean().round(3),
    "std": df.select_dtypes("number").std().round(3),
})

print(profile)
```

## Output yang Diharapkan

- Tabel ringkas untuk setiap kolom.
- Informasi jumlah missing dan tipe data.
- Dasar untuk langkah EDA selanjutnya.

---

# Slide 42 - Contoh Kode: Preprocessing Pipeline

## Kode Python

```python
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

num_cols = ["age", "income"]
cat_cols = ["city"]

preprocessor = ColumnTransformer([
    ("num", Pipeline([
        ("imputer", SimpleImputer(strategy="median")),
        ("scaler", StandardScaler()),
    ]), num_cols),
    ("cat", Pipeline([
        ("imputer", SimpleImputer(strategy="most_frequent")),
        ("onehot", OneHotEncoder(handle_unknown="ignore")),
    ]), cat_cols),
])

X_train_pre = preprocessor.fit_transform(X_train)
X_test_pre = preprocessor.transform(X_test)

## Untuk cross-validation, masukkan pipeline ke estimator
pipeline = Pipeline([
    ("prep", preprocessor),
    ("clf", RandomForestClassifier(random_state=42))
])
scores = cross_val_score(pipeline, X_train, y_train, cv=5)
```

## Catatan

- Gunakan `fit_transform` hanya pada data training.
- Gunakan `transform` pada data validation/test.
- Pipeline memastikan tidak ada leakage.

---

# Slide 43 - Menghubungkan EDA dengan Research Project

## Target Minggu 02 pada Research Project

- Menentukan **candidate problem**.
- Menentukan **candidate dataset**.
- Melakukan **initial EDA / dataset profiling**.

## Pertanyaan Kunci

- Apakah dataset cocok dengan research question awal?
- Apakah data memiliki masalah kualitas yang dapat diatasi?
- Apakah ada indikasi leakage yang harus dihindari?
- Apakah distribusi data cukup representatif?

## Luaran yang Diharapkan

- Dokumentasi karakteristik dataset.
- Daftar temuan EDA awal.
- Rencana preprocessing dan eksperimen awal.

## Kaitan dengan Minggu Berikutnya

- Minggu 03: initial literature mapping dan related work.
- Minggu 04: memilih strong baseline.
- Eksperimen pada pertemuan berikutnya bergantung pada keputusan yang dibuat hari ini.

---

# Slide 44 - Kesimpulan Pertemuan 02

## Poin Kunci

- EDA adalah proses ilmiah untuk **memahami data**, **menemukan masalah**, dan **membangun hipotesis**.
- Dataset profiling dan descriptive statistics menjadi langkah awal yang wajib.
- Visualisasi membantu mengomunikasikan pola dan anomali.
- Preprocessing harus dilakukan dengan **pipeline yang bebas leakage**.
- **Experimental validity** harus dijaga sejak awal agar hasil penelitian dapat dipertanggungjawabkan.
- Temuan EDA berdampak pada pemilihan metode, metric, preprocessing, dan desain eksperimen.

## Pesan Utama

> Data yang dipahami dengan baik akan menghasilkan eksperimen yang lebih valid dan kontribusi ilmiah yang lebih kuat.

## Tugas

- Kerjakan Praktikum 1.
- Mulai susun candidate problem dan candidate dataset untuk research project.

---

# Slide 45 - Penutup

TERIMA KASIH

Pertemuan berikutnya

**Pattern Mining & Knowledge Discovery**