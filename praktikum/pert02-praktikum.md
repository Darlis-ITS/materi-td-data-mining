# MODUL PRAKTIKUM 02

## EF235161 — Topik Dalam Data Mining (P)

### Exploratory Data Analysis (EDA), Data Preprocessing & Experimental Validity

**Jenjang:** S2  
**Pertemuan:** 02  
**Platform:** Jupyter Notebook / JupyterLab / Google Colab  
**Bahasa:** Python  
**Notebook utama:** `Praktikum_02_EDA_Preprocessing_Experimental_Validity.ipynb`

---

# 1. Posisi Praktikum dalam Mata Kuliah

Praktikum ini merupakan implementasi dari materi Pertemuan 02:

**Exploratory Data Analysis (EDA) → Data Preprocessing → Experimental Validity**

Fokus utama praktikum bukan sekadar menghasilkan model dengan nilai akurasi tinggi, melainkan membangun alur eksperimen yang:

- memahami karakteristik data sebelum modeling;
- menggunakan evidence dari EDA untuk mengambil keputusan preprocessing;
- menghindari data leakage;
- menjaga pemisahan training dan test;
- menggunakan pipeline yang reproducible;
- memilih metric yang sesuai;
- menghasilkan kesimpulan yang dapat dipertanggungjawabkan secara ilmiah.

Alur utama:

```text
Research Problem
      ↓
Dataset
      ↓
Dataset Understanding
      ↓
EDA
      ↓
Temuan / Evidence
      ↓
Preprocessing Decision
      ↓
Valid Data Split
      ↓
Pipeline
      ↓
Cross-Validation
      ↓
Final Evaluation
      ↓
Interpretation
```

---

# 2. Capaian Praktikum

Setelah menyelesaikan praktikum, mahasiswa mampu:

1. melakukan **dataset profiling**;
2. menghitung dan menginterpretasikan **descriptive statistics**;
3. melakukan **univariate analysis**;
4. melakukan **bivariate analysis**;
5. melakukan **multivariate analysis**;
6. menganalisis distribusi target;
7. mengidentifikasi **class imbalance**;
8. menganalisis **missing values**;
9. mendeteksi **outlier dan nilai tidak wajar**;
10. menemukan duplicate dan inkonsistensi data;
11. mengidentifikasi **redundant features**;
12. menemukan indikasi **data leakage**;
13. menghubungkan temuan EDA dengan keputusan preprocessing;
14. melakukan train/test split dengan benar;
15. membangun `Pipeline` dan `ColumnTransformer`;
16. melakukan cross-validation yang bebas leakage;
17. mengevaluasi model menggunakan metric yang sesuai;
18. menjelaskan konsep **experimental validity**;
19. mendokumentasikan eksperimen secara reproducible;
20. menerapkan alur yang sama pada candidate dataset research project.

---

# 3. Prinsip Utama Praktikum

Praktikum menggunakan prinsip:

> **EDA bukan sekadar membuat grafik.**

Setiap hasil EDA harus berakhir pada salah satu dari:

- pemahaman karakteristik data;
- pertanyaan baru;
- hipotesis awal;
- identifikasi masalah kualitas data;
- keputusan preprocessing;
- pemilihan metric;
- perubahan experimental design;
- pembatasan klaim generalisasi.

Format yang digunakan:

```text
Temuan
   ↓
Evidence
   ↓
Dampak pada Eksperimen
   ↓
Keputusan Metodologis
```

Contoh:

```text
Temuan:
Target sangat tidak seimbang.

Evidence:
82% kelas 0 dan 18% kelas 1.

Dampak:
Accuracy dapat terlihat tinggi walaupun model gagal
mendeteksi kelas minoritas.

Keputusan:
Tambahkan balanced accuracy, recall, F1, ROC-AUC,
dan PR-AUC. Uji class weighting.
```

---

# 4. Dataset Praktikum

Untuk memastikan notebook dapat dijalankan tanpa koneksi internet, modul menyediakan:

`customer_churn_eda.csv`

Dataset merupakan **dataset simulasi customer churn untuk tujuan pembelajaran**.

Dataset sengaja mengandung beberapa masalah yang harus ditemukan mahasiswa melalui EDA:

- missing values;
- outlier;
- inkonsistensi kategori;
- duplicate rows;
- class imbalance;
- high-cardinality identifier;
- redundant feature;
- target leakage.

Dataset bukan benchmark penelitian dan tidak boleh digunakan untuk membuat klaim empiris dunia nyata.

Notebook juga memiliki fallback:

```text
CSV tersedia
    ↓
pd.read_csv()

CSV tidak tersedia
    ↓
Generate teaching dataset
    ↓
Simpan CSV
    ↓
pd.read_csv()
```

Dengan demikian notebook tetap dapat dijalankan secara mandiri.

---

# 5. Struktur Dataset

Target:

```text
churn
```

Interpretasi:

```text
0 = tidak churn
1 = churn
```

Beberapa fitur yang tersedia:

| Fitur | Makna Praktikum |
|---|---|
| `customer_id` | Identifier pelanggan |
| `age` | Umur |
| `monthly_income` | Pendapatan bulanan |
| `tenure_months` | Lama menjadi pelanggan |
| `monthly_spend` | Pengeluaran bulanan |
| `transactions_per_month` | Jumlah transaksi |
| `support_tickets` | Jumlah tiket bantuan |
| `satisfaction_score` | Skor kepuasan |
| `city` | Kota |
| `segment` | Segmen pelanggan |
| `channel` | Kanal layanan |
| `premium_member` | Status premium |
| `annual_spend` | Fitur redundant yang sengaja ditambahkan |
| `churn_next_month_confirmed` | Fitur leakage yang sengaja ditambahkan |
| `churn` | Target |

Mahasiswa tidak diberi instruksi untuk langsung menghapus kolom mencurigakan. Kolom tersebut harus ditemukan dan dianalisis melalui proses EDA.

---

# 6. Software dan Library

Gunakan:

```text
Python
Jupyter Notebook / JupyterLab / Google Colab
NumPy
pandas
Matplotlib
SciPy
scikit-learn
imbalanced-learn
joblib
```

Instalasi:

```bash
pip install -r requirements_praktikum02.txt
```

atau di notebook:

```python
%pip install numpy pandas matplotlib scipy scikit-learn imbalanced-learn joblib
```

---

# 7. Struktur File

Direkomendasikan:

```text
praktikum02/
│
├── Praktikum_02_EDA_Preprocessing_Experimental_Validity.ipynb
├── customer_churn_eda.csv
├── requirements_praktikum02.txt
│
└── output/
```

Notebook dapat dijalankan walaupun CSV tidak tersedia karena dataset latihan dapat dibuat otomatis.

---

# 8. Cara Menjalankan Praktikum

## Jupyter

```bash
jupyter notebook
```

Kemudian buka:

```text
Praktikum_02_EDA_Preprocessing_Experimental_Validity.ipynb
```

## JupyterLab

```bash
jupyter lab
```

## Google Colab

1. Upload notebook.
2. Upload `customer_churn_eda.csv` jika ingin menggunakan file yang disediakan.
3. Jika CSV tidak di-upload, notebook akan membuat dataset latihan otomatis.
4. Jalankan cell secara berurutan.

---

# 9. Aturan Praktikum

Mahasiswa harus:

- menjalankan notebook dari awal sampai akhir;
- membaca penjelasan Markdown;
- tidak hanya menjalankan kode tanpa interpretasi;
- mencatat evidence penting;
- menjawab pertanyaan analisis;
- mendokumentasikan keputusan preprocessing;
- menjaga test set dari proses tuning;
- tidak menggunakan leakage feature pada eksperimen valid.

---

# 10. Tahap 0 — Setup dan Reproducibility

Notebook mencatat:

- versi Python;
- versi NumPy;
- versi pandas;
- versi Matplotlib;
- versi SciPy;
- versi scikit-learn;
- random seed.

Digunakan:

```python
RANDOM_STATE = 42
```

## Tujuan

Random seed diperlukan agar:

- train-test split dapat diulang;
- sampling dapat diulang;
- hasil eksperimen lebih mudah direproduksi.

Namun random seed **bukan jaminan reproducibility penuh**.

Mahasiswa tetap harus mencatat:

- versi dataset;
- konfigurasi preprocessing;
- parameter model;
- library;
- lingkungan eksekusi.

---

# 11. Tahap 1 — Membaca dan Memeriksa Struktur Dataset

Gunakan:

```python
df.head()
df.shape
df.info()
df.columns
```

## Tujuan

Menjawab:

- berapa jumlah observasi?
- berapa jumlah kolom?
- tipe data apa yang tersedia?
- kolom mana yang memiliki missing?
- apakah terdapat target?
- apakah terdapat identifier?

## Yang Harus Dicatat

Minimal:

```text
Rows:
Columns:
Target:
Numeric features:
Categorical features:
Potential ID:
Potential suspicious features:
```

## Jangan Dilakukan

Jangan langsung:

```python
df.dropna()
```

atau:

```python
StandardScaler().fit_transform(df)
```

karena kita belum memahami data dan belum melakukan split.

---

# 12. Tahap 2 — Mengidentifikasi Tipe Fitur

Bedakan antara:

## File Type

Contoh:

```text
int64
float64
object
```

## Semantic Type

Contoh:

```text
numeric
categorical
ordinal
binary
identifier
datetime
target
```

Contoh penting:

```text
premium_member = 0 / 1
```

Walaupun bertipe integer, secara semantik merupakan fitur biner.

## Output

Mahasiswa membuat **data dictionary**.

Minimal:

| Feature | File Type | Semantic Type | Description |
|---|---|---|---|

---

# 13. Tahap 3 — Dataset Profiling

Profil minimal berisi:

- dtype;
- jumlah nilai unik;
- jumlah missing;
- persentase missing;
- contoh nilai.

Contoh fungsi:

```python
profile = pd.DataFrame({
    "dtype": df.dtypes.astype(str),
    "n_unique": df.nunique(),
    "n_missing": df.isna().sum(),
    "missing_pct": df.isna().mean() * 100
})
```

## Analisis Cardinality

Cari kolom dengan:

```text
n_unique ≈ jumlah observasi
```

Kondisi tersebut dapat mengindikasikan:

- identifier;
- nomor transaksi;
- timestamp unik;
- high-cardinality category.

High cardinality tidak otomatis berarti kolom harus dihapus.

---

# 14. Tahap 4 — Descriptive Statistics

Untuk numerik:

```python
df.describe()
```

Analisis:

- count;
- mean;
- standard deviation;
- min;
- Q1;
- median;
- Q3;
- max.

Tambahkan:

```python
median
variance
IQR
skewness
```

## Interpretasi

### Mean jauh lebih besar dari median

Dapat mengindikasikan:

```text
right-skewed distribution
```

### Mean jauh lebih kecil dari median

Dapat mengindikasikan:

```text
left-skewed distribution
```

### Max sangat jauh dari Q3

Periksa kemungkinan:

- outlier;
- long-tail;
- kesalahan data;
- perbedaan satuan.

---

# 15. Tahap 5 — Univariate Analysis Numerik

Untuk setiap fitur numerik, periksa:

- distribusi;
- skewness;
- outlier;
- rentang;
- nilai tidak wajar.

Gunakan:

```text
Histogram
Boxplot
```

Notebook menampilkan beberapa fitur penting satu per satu.

## Pertanyaan

Untuk setiap grafik:

1. Apakah distribusi simetris?
2. Apakah skewed?
3. Apakah terdapat long-tail?
4. Apakah ada nilai ekstrem?
5. Apakah transformasi diperlukan?
6. Apakah scaling mungkin diperlukan?

---

# 16. Tahap 6 — Univariate Analysis Kategorikal

Analisis:

- jumlah kategori;
- frekuensi;
- proporsi;
- missing;
- inkonsistensi penulisan.

Contoh yang sengaja tersedia:

```text
Surabaya
surabaya
```

Secara domain kemungkinan mewakili kategori yang sama.

Keputusan:

```python
df["city"] = df["city"].str.strip().str.title()
```

Operasi tersebut menggunakan aturan tetap dan tidak mempelajari statistik target.

---

# 17. Tahap 7 — Analisis Distribusi Target

Gunakan:

```python
df["churn"].value_counts()
df["churn"].value_counts(normalize=True)
```

Hitung:

```text
majority count
minority count
minority proportion
imbalance ratio
```

## Mengapa Penting?

Misalnya:

```text
82% kelas 0
18% kelas 1
```

Model yang selalu memprediksi:

```text
0
```

dapat memperoleh accuracy:

```text
≈ 82%
```

tetapi gagal total mendeteksi kelas minoritas.

---

# 18. Metric untuk Imbalanced Data

Selain accuracy, gunakan:

```text
Balanced Accuracy
Precision
Recall
F1
ROC-AUC
PR-AUC / Average Precision
```

Interpretasi harus bergantung pada tujuan penelitian.

Contoh:

Jika target adalah mendeteksi churn sebanyak mungkin, recall kelas positif dapat lebih penting daripada accuracy.

---

# 19. Tahap 8 — Missing Values

Gunakan:

```python
df.isna().sum()
df.isna().mean()
```

Buat tabel:

| Feature | Missing Count | Missing % |
|---|---:|---:|

## Analisis Missingness

Pertanyaan:

- fitur apa yang missing?
- berapa proporsinya?
- apakah missing terlihat sistematis?
- apakah missing berkaitan dengan target?
- apakah missing berkaitan dengan fitur lain?

## Mekanisme Konseptual

### MCAR

Missing sepenuhnya acak.

### MAR

Missing berkaitan dengan variabel lain yang dapat diamati.

### MNAR

Missing berkaitan dengan nilai yang hilang itu sendiri.

EDA hanya memberikan indikasi, bukan otomatis membuktikan mekanisme missing.

---

# 20. Tahap 9 — Outlier

Gunakan IQR:

```text
IQR = Q3 - Q1

Lower Fence = Q1 - 1.5 × IQR

Upper Fence = Q3 + 1.5 × IQR
```

Outlier:

```text
x < Lower Fence
atau
x > Upper Fence
```

## Peringatan

Jangan menggunakan:

```text
outlier → drop
```

secara otomatis.

Investigasi:

- data error?
- rare event?
- unit salah?
- kondisi valid?
- bagian dari research problem?

---

# 21. Penanganan Outlier

Pilihan dapat berupa:

```text
Tidak diubah
Transformasi
Winsorization
Robust scaling
Removal
Treat as anomaly
```

Keputusan harus berdasarkan:

- domain knowledge;
- karakteristik distribusi;
- tujuan penelitian;
- behavior model.

Pada notebook, fitur dengan long-tail diuji menggunakan:

```python
np.log1p()
```

---

# 22. Tahap 10 — Bivariate Analysis Numerik terhadap Target

Analisis distribusi fitur pada:

```text
churn = 0
vs
churn = 1
```

Contoh:

```text
tenure_months
support_tickets
satisfaction_score
```

Gunakan:

- group mean;
- group median;
- boxplot.

## Kesimpulan yang Diperbolehkan

```text
Kelompok churn tampak memiliki distribusi tenure
yang berbeda dibanding non-churn.
```

## Kesimpulan yang Tidak Diperbolehkan dari EDA Saja

```text
Tenure menyebabkan churn.
```

EDA tidak membuktikan kausalitas.

---

# 23. Tahap 11 — Bivariate Analysis Kategorikal terhadap Target

Gunakan:

```python
pd.crosstab()
```

Contoh:

```text
city vs churn
segment vs churn
channel vs churn
premium_member vs churn
```

Dapat dihitung:

```text
churn rate per kategori
```

Periksa apakah suatu kategori:

- jauh lebih berisiko;
- terlalu sedikit sampelnya;
- berpotensi menyebabkan interpretasi yang tidak stabil.

---

# 24. Tahap 12 — Multivariate Analysis

Notebook menggunakan:

- correlation matrix;
- hubungan beberapa fitur;
- Cramér's V untuk beberapa fitur kategorikal.

Konsep yang perlu dipahami:

## Pearson

Hubungan linear numerik–numerik.

## Spearman

Hubungan monotonik / ordinal.

## Cramér's V

Asosiasi kategorikal–kategorikal.

## Catatan

```text
Correlation ≠ Causation
```

dan:

```text
Correlation ≈ 0
```

tidak berarti tidak ada hubungan non-linear.

---

# 25. Tahap 13 — Duplicate Data

Gunakan:

```python
df.duplicated().sum()
```

Duplicate dapat menyebabkan:

- statistik bias;
- overweight observasi;
- train-test contamination jika duplicate tersebar antar split.

Sebelum menghapus, pastikan:

```text
duplicate identik memang bukan kejadian valid yang berulang.
```

---

# 26. Tahap 14 — Redundant Features

Contoh dalam dataset:

```text
monthly_spend
annual_spend
```

Jika:

```text
annual_spend = monthly_spend × 12
```

maka informasi hampir sepenuhnya redundant.

Dampak:

- interpretasi lebih sulit;
- multikolinearitas;
- bobot informasi ganda;
- model linear dapat menjadi tidak stabil.

---

# 27. Tahap 15 — Data Leakage

Data leakage adalah kondisi ketika model memperoleh informasi yang seharusnya tidak tersedia saat prediction.

Dataset latihan sengaja memiliki:

```text
churn_next_month_confirmed
```

Fitur ini mengetahui target.

## Cara Mendeteksi

Periksa:

- nama fitur;
- waktu fitur tersedia;
- korelasi dengan target;
- proses pembuatan fitur;
- domain meaning.

Red flag:

```text
korelasi hampir sempurna dengan target
```

---

# 28. Jenis Leakage yang Harus Dipahami

## Target Leakage

Fitur mengandung informasi target.

## Preprocessing Leakage

Contoh salah:

```python
scaler.fit(X_total)
train_test_split(...)
```

## Temporal Leakage

Menggunakan data masa depan untuk memprediksi masa lalu.

## Test Leakage

Menggunakan test set untuk:

- feature selection;
- tuning;
- threshold selection.

---

# 29. Tahap 16 — Dataset Bias dan Representativeness

EDA juga harus bertanya:

- dari mana data berasal?
- siapa yang terwakili?
- siapa yang tidak terwakili?
- periode pengambilan data?
- apakah ada dominasi kelompok tertentu?

Contoh:

Jika 50% data berasal dari satu kota, kesimpulan tidak otomatis dapat digeneralisasikan ke semua kota di Indonesia.

Hal ini termasuk:

```text
Threats to External Validity
```

---

# 30. Menuliskan Temuan EDA

Notebook membangun tabel dengan format:

| Temuan | Evidence | Dampak | Keputusan |
|---|---|---|---|

Mahasiswa wajib menuliskan minimal **5 temuan**.

Contoh:

```text
Temuan:
monthly_income memiliki missing 7%.

Evidence:
df["monthly_income"].isna().mean()

Dampak:
Estimator tertentu tidak dapat menerima NaN.

Keputusan:
Median imputation dilakukan di dalam pipeline.
```

---

# 31. Keputusan Preprocessing Berdasarkan EDA

Notebook menggunakan keputusan berikut untuk dataset latihan:

## Drop

```text
customer_id
annual_spend
churn_next_month_confirmed
```

Alasan berbeda:

```text
customer_id
→ identifier

annual_spend
→ redundant

churn_next_month_confirmed
→ leakage
```

Jangan menggunakan alasan umum:

```text
"karena tidak diperlukan"
```

Setiap drop harus memiliki argumentasi.

---

# 32. Normalisasi Kategori

Contoh:

```python
df["city"] = df["city"].str.strip().str.title()
```

Ini dilakukan berdasarkan aturan deterministik.

Tidak menggunakan:

- statistik target;
- mean seluruh data;
- informasi test set.

---

# 33. Split Sebelum Learned Preprocessing

Gunakan:

```python
train_test_split(
    X,
    y,
    test_size=0.20,
    stratify=y,
    random_state=42
)
```

## Mengapa Stratify?

Agar proporsi kelas:

```text
train
test
```

relatif sama.

---

# 34. Test Set Harus Dikunci

Setelah split:

```text
Training Set
→ EDA lanjutan untuk modeling
→ preprocessing fit
→ CV
→ tuning

Test Set
→ hanya final evaluation
```

Test set tidak boleh dipakai untuk memilih konfigurasi.

---

# 35. ColumnTransformer

Dataset memiliki fitur:

```text
numeric
categorical
```

Karena itu digunakan:

```python
ColumnTransformer
```

Pipeline numerik dan kategorikal dapat berbeda.

---

# 36. Pipeline Numerik Skewed

Fitur contoh:

```text
monthly_income
monthly_spend
```

Pipeline:

```text
SimpleImputer(median)
      ↓
log1p
      ↓
StandardScaler
```

Mengapa median?

Median lebih robust terhadap outlier dibanding mean.

---

# 37. Pipeline Numerik Lain

Pipeline:

```text
SimpleImputer(median)
      ↓
StandardScaler
```

Scaler di-fit pada training fold.

---

# 38. Pipeline Kategorikal

Pipeline:

```text
SimpleImputer(most_frequent)
      ↓
OneHotEncoder(handle_unknown="ignore")
```

`handle_unknown="ignore"` membantu ketika validation/test memiliki kategori yang tidak muncul pada training.

---

# 39. Experimental Pipeline

Alur:

```text
Raw Training Fold
      ↓
Imputation
      ↓
Transformation
      ↓
Scaling / Encoding
      ↓
Classifier
```

Seluruhnya berada dalam:

```python
Pipeline
```

Hal ini penting untuk mencegah leakage saat cross-validation.

---

# 40. Model Baseline

Notebook menggunakan Logistic Regression untuk fokus pada experimental workflow.

Tiga pembanding:

```text
Dummy Majority
Minimal Valid Pipeline
EDA-Informed Pipeline
```

## Dummy Majority

Selalu memprediksi kelas mayoritas.

Tujuannya:

mengetahui apakah model sungguhan memberikan nilai di atas baseline paling sederhana.

---

# 41. Minimal Valid Pipeline

Minimal pipeline tetap valid karena:

- imputasi berada dalam pipeline;
- encoding berada dalam pipeline;
- split sudah dilakukan.

Namun belum menggunakan semua keputusan yang berasal dari EDA.

---

# 42. EDA-Informed Pipeline

Pipeline menggunakan:

- median imputation;
- log transform pada skewed feature;
- scaling;
- one-hot encoding;
- class weighting.

Tujuannya menunjukkan bagaimana evidence EDA diterjemahkan ke konfigurasi eksperimen.

---

# 43. Cross-Validation

Gunakan:

```python
StratifiedKFold(
    n_splits=5,
    shuffle=True,
    random_state=42
)
```

Pada setiap fold:

```text
Training Fold
   ↓
Fit Preprocessing
   ↓
Fit Model
   ↓
Validation Fold
```

Validation fold tidak digunakan untuk menghitung median, mean, scaler, atau encoder.

---

# 44. Metric Cross-Validation

Notebook membandingkan:

```text
Accuracy
Balanced Accuracy
Precision
Recall
F1
ROC-AUC
PR-AUC
```

Mahasiswa tidak boleh memilih model hanya berdasarkan satu metric tanpa argumentasi.

---

# 45. Interpretasi Accuracy

Jika target tidak seimbang, model yang gagal mendeteksi kelas positif dapat tetap memiliki accuracy tinggi.

Karena itu selalu bandingkan:

```text
Accuracy
vs
Balanced Accuracy
vs
Recall
vs
F1
```

---

# 46. Evaluasi Final

Setelah model selection selesai:

```python
pipeline.fit(X_train, y_train)
```

kemudian:

```python
pipeline.predict(X_test)
pipeline.predict_proba(X_test)
```

Test set menghasilkan estimasi final.

---

# 47. Confusion Matrix

Confusion matrix membantu melihat:

```text
True Negative
False Positive
False Negative
True Positive
```

Untuk rare event / churn:

False Negative dapat menjadi penting karena merupakan churn yang gagal dideteksi.

---

# 48. ROC-AUC

ROC-AUC mengevaluasi ranking probabilitas pada berbagai threshold.

Namun pada data sangat imbalance, ROC-AUC tidak selalu cukup.

---

# 49. Precision-Recall Curve dan PR-AUC

PR curve lebih fokus pada performa kelas positif.

Pada kelas minoritas, PR-AUC sering memberikan gambaran yang lebih relevan dibanding hanya accuracy.

---

# 50. Eksperimen Demonstrasi Leakage

Notebook sengaja melakukan eksperimen yang **salah**:

```text
target leakage feature
      ↓
model
      ↓
performance ≈ sempurna
```

Tujuannya:

menunjukkan bahwa performa sangat tinggi dapat menjadi **red flag**.

Mahasiswa harus memahami:

> Model dengan ROC-AUC 1.00 belum tentu merupakan model luar biasa.

Bisa jadi eksperimennya tidak valid.

---

# 51. Resampling yang Benar

Prinsip:

```text
Split / CV
   ↓
Training Fold
   ↓
Preprocessing
   ↓
Resampling
   ↓
Model
```

Bukan:

```text
Seluruh Dataset
   ↓
Resampling
   ↓
Train-Test Split
```

---

# 52. Demonstrasi RandomOverSampler

Notebook menggunakan:

```python
RandomOverSampler
```

di dalam:

```python
imblearn.pipeline.Pipeline
```

sehingga oversampling hanya terjadi pada training fold.

---

# 53. Catatan tentang SMOTE

SMOTE tidak boleh digunakan secara mekanis.

Untuk mixed numeric/categorical features, mahasiswa harus memahami:

- ruang fitur tempat interpolasi dilakukan;
- efek encoding;
- apakah synthetic sample bermakna secara domain.

Materi class imbalance dibahas lebih dalam pada Pertemuan 07.

---

# 54. Experimental Validity

Empat jenis validitas yang perlu dipikirkan:

## Internal Validity

Apakah peningkatan benar-benar berasal dari metode?

Ancaman:

- leakage;
- unfair preprocessing;
- tuning budget berbeda.

## External Validity

Apakah hasil dapat digeneralisasikan?

Ancaman:

- dataset bias;
- populasi tidak representatif.

## Construct Validity

Apakah metric benar-benar mewakili tujuan penelitian?

Contoh:

accuracy mungkin tidak merepresentasikan tujuan deteksi rare event.

## Statistical Validity

Apakah evaluasi cukup stabil dan tepat?

Contoh:

- satu random split saja;
- dataset terlalu kecil;
- tidak ada variance estimate.

---

# 55. Fair Comparison

Jika akan membandingkan model A dan model B:

usahakan:

```text
Dataset sama
Split sama
Preprocessing policy sama
Metric sama
CV sama
Tuning budget sebanding
```

Jika preprocessing berbeda karena kebutuhan model, dokumentasikan secara eksplisit.

---

# 56. Reproducibility Log

Notebook menyimpan:

```text
experiment_log_praktikum02.json
```

Berisi:

- seed;
- target;
- test size;
- CV;
- dropped features;
- feature groups;
- versi library.

---

# 57. Menyimpan Pipeline

Notebook menyimpan:

```text
eda_pipeline_praktikum02.joblib
```

Tujuannya:

- reproducibility;
- reuse;
- audit konfigurasi.

---

# 58. Output Tambahan

Notebook juga menghasilkan:

```text
eda_findings_praktikum02.csv
cv_results_praktikum02.csv
test_comparison_praktikum02.csv
```

File ini dapat digunakan untuk laporan atau paper draft.

---

# 59. Menerapkan pada Candidate Dataset Research Project

Setelah memahami dataset latihan, mahasiswa harus mengulang proses pada candidate dataset.

## Langkah

1. tentukan research problem;
2. tentukan candidate dataset;
3. tentukan target;
4. baca dokumentasi dataset;
5. buat data dictionary;
6. lakukan profiling;
7. descriptive statistics;
8. univariate analysis;
9. bivariate analysis;
10. multivariate analysis;
11. missingness analysis;
12. outlier analysis;
13. imbalance analysis;
14. duplicate check;
15. leakage check;
16. bias/representativeness analysis;
17. catat minimal lima temuan;
18. tentukan preprocessing;
19. tentukan split strategy;
20. susun experimental pipeline.

---

# 60. Pemilihan Split pada Dataset Penelitian

Tidak semua penelitian boleh menggunakan random split.

## Classification Biasa

```text
Stratified split
```

## Data dengan Subject Berulang

Contoh:

```text
pasien
pelanggan
perangkat
```

Gunakan:

```text
Group split
```

## Temporal Data

Gunakan:

```text
Time-based split
```

Jangan mencampur masa depan ke training untuk memprediksi masa lalu.

---

# 61. Deliverable Praktikum

Mahasiswa mengumpulkan:

## A. Notebook

```text
Praktikum_02_NRP_Nama.ipynb
```

Notebook harus berjalan dari kernel baru tanpa error.

## B. Dataset Profile

Minimal:

- shape;
- data types;
- cardinality;
- missing;
- target;
- duplicate.

## C. Visualisasi Utama

Visualisasi harus mendukung pertanyaan EDA.

Tidak perlu memasukkan semua grafik ke laporan.

## D. Tabel Masalah Kualitas Data

Contoh:

| Masalah | Feature | Evidence | Tindakan |
|---|---|---|---|

## E. Minimal 5 Temuan EDA

Format:

```text
Temuan
Evidence
Dampak
Keputusan
```

## F. Preprocessing Decision

Setiap keputusan harus memiliki alasan.

## G. Experimental Pipeline

Harus:

- reproducible;
- bebas leakage;
- menggunakan split yang tepat.

## H. Evaluasi

Minimal:

- cross-validation;
- final test evaluation;
- metric yang relevan.

---

# 62. Pertanyaan Analisis Wajib

Jawab menggunakan hasil eksperimen.

1. Apa lima karakteristik paling penting dari dataset?
2. Fitur mana yang memiliki missing paling besar?
3. Apakah missing terlihat berkaitan dengan target?
4. Fitur mana yang paling skewed?
5. Apakah terdapat outlier? Apakah harus dihapus?
6. Apakah terdapat inkonsistensi kategori?
7. Apakah terdapat duplicate rows?
8. Apakah terdapat high-cardinality identifier?
9. Fitur mana yang redundant?
10. Fitur mana yang mengindikasikan leakage?
11. Seberapa besar class imbalance?
12. Mengapa accuracy saja tidak cukup?
13. Bagaimana dummy classifier berperilaku?
14. Apa perbedaan minimal pipeline dan EDA-informed pipeline?
15. Metrik apa yang paling berubah?
16. Apa trade-off precision vs recall?
17. Apa yang terjadi ketika leakage feature dimasukkan?
18. Mengapa preprocessing harus berada dalam pipeline?
19. Mengapa scaler tidak boleh di-fit pada seluruh data?
20. Mengapa resampling tidak boleh dilakukan sebelum split?
21. Apa ancaman internal validity?
22. Apa ancaman external validity?
23. Apakah dataset mewakili populasi target?
24. Temuan EDA mana yang paling memengaruhi experimental design?
25. Bagaimana pendekatan ini diterapkan pada research project?

---

# 63. Checklist Validitas

Sebelum menyatakan eksperimen valid:

- [ ] Target jelas.
- [ ] Unit observasi jelas.
- [ ] Identifier telah diperiksa.
- [ ] Leakage candidate telah diperiksa.
- [ ] Duplicate telah diperiksa.
- [ ] Missing telah dianalisis.
- [ ] Outlier telah dianalisis.
- [ ] Imbalance telah dilaporkan.
- [ ] Bias dataset telah didiskusikan.
- [ ] Split sesuai jenis data.
- [ ] Preprocessing fit hanya pada training.
- [ ] Resampling hanya pada training.
- [ ] CV dilakukan pada training set.
- [ ] Test set tidak digunakan untuk tuning.
- [ ] Metric sesuai research objective.
- [ ] Seed dan versi library tercatat.
- [ ] Keputusan preprocessing terdokumentasi.

---

# 64. Checklist Notebook

Sebelum submit:

- [ ] Restart kernel.
- [ ] Run All.
- [ ] Tidak ada error.
- [ ] Tidak ada hard-coded hasil eksperimen.
- [ ] Semua grafik memiliki judul.
- [ ] Semua tabel memiliki interpretasi.
- [ ] Tidak ada cell eksperimen yang tidak dijelaskan.
- [ ] Leakage demonstration diberi label sebagai eksperimen tidak valid.
- [ ] Test set hanya dipakai final.
- [ ] Kesimpulan sesuai evidence.

---

# 65. Hubungan dengan Research Project

Target Minggu 02:

```text
Candidate Problem
      +
Candidate Dataset
      +
Initial EDA / Dataset Profiling
```

Mahasiswa seharusnya sudah mulai dapat menjawab:

- apakah dataset cukup relevan dengan research problem?
- apakah target tersedia?
- apakah data berkualitas cukup baik?
- apakah ada masalah yang membuat eksperimen tidak valid?
- apakah jumlah data memadai?
- apakah ada bias serius?
- apakah ada leakage candidate?
- apakah baseline realistis untuk dibangun?

---

# 66. Hubungan dengan Pertemuan Berikutnya

## Pertemuan 03

**Pattern Mining & Knowledge Discovery**

Temuan EDA dapat membantu menemukan:

- pola yang menarik;
- hubungan variabel;
- karakteristik transaksi;
- kandidat pattern.

## Pertemuan 04

**Classification, Regression & Strong Baselines**

Pipeline dari praktikum ini menjadi fondasi untuk membangun strong baseline yang fair.

## Pertemuan 07

**Anomaly Detection, Imbalanced Data & Rare Events**

Outlier dan imbalance yang ditemukan pada EDA akan dianalisis lebih dalam.

---

# 67. Troubleshooting

## `FileNotFoundError`

Notebook memiliki fallback generator. Pastikan cell loading dataset dijalankan.

## `ModuleNotFoundError`

Install:

```python
%pip install -r requirements_praktikum02.txt
```

atau install library yang disebut pada error.

## Notebook sangat lambat

Pastikan tidak menjalankan visualisasi pada seluruh pasangan fitur jika dataset sangat besar.

Gunakan sampling untuk visualisasi, tetapi **jangan menggunakan sample tersebut sebagai pengganti data eksperimen tanpa alasan**.

## `ValueError: Input contains NaN`

Pastikan estimator berada setelah `SimpleImputer` dalam pipeline.

## Unknown category saat test

Gunakan:

```python
OneHotEncoder(handle_unknown="ignore")
```

## Performa terlalu tinggi

Periksa:

- target leakage;
- duplicate contamination;
- temporal leakage;
- preprocessing seluruh data;
- train/test overlap.

---

# 68. Tantangan Lanjutan untuk Mahasiswa S2

Setelah modul inti selesai, pilih minimal satu:

## A. Missingness Experiment

Bandingkan:

```text
Median Imputation
vs
KNN Imputation
```

Pertanyaan:

Apakah perbedaannya konsisten pada CV?

## B. Outlier Robustness

Bandingkan:

```text
StandardScaler
vs
RobustScaler
```

## C. Class Imbalance

Bandingkan:

```text
No Handling
Class Weight
Random Oversampling
```

## D. Cross-Dataset Evaluation

Jika memiliki dua dataset domain serupa, latih pada satu dan evaluasi pada yang lain.

## E. Leakage Audit

Buat daftar semua feature dan tulis:

```text
Kapan feature ini tersedia?
```

Feature yang baru tersedia setelah target terjadi tidak boleh digunakan pada prediction time.

---

# 69. Format Ringkasan Hasil

Gunakan struktur:

## Dataset

```text
Nama:
Sumber:
Rows:
Features:
Target:
```

## EDA Findings

```text
Finding 1:
Evidence:
Impact:
Decision:
```

## Experimental Setup

```text
Split:
CV:
Preprocessing:
Model:
Metrics:
Seed:
```

## Results

```text
CV Mean ± Std
Final Test Performance
```

## Validity

```text
Internal:
External:
Construct:
Statistical:
```

## Conclusion

Jelaskan:

- apa yang diketahui;
- apa yang belum dapat disimpulkan;
- langkah eksperimen berikutnya.

---

# 70. Pesan Utama

> **Data yang dipahami dengan baik menghasilkan eksperimen yang lebih valid.**

Urutan yang harus dipertahankan dalam penelitian:

```text
Understand
    ↓
Explore
    ↓
Question
    ↓
Decide
    ↓
Experiment
    ↓
Validate
    ↓
Interpret
```

Bukan:

```text
Load Data
    ↓
Fit Model
    ↓
Accuracy
    ↓
Selesai
```

Pada jenjang S2, mahasiswa harus mampu menjelaskan **mengapa setiap keputusan eksperimen dibuat dan evidence apa yang mendukungnya**.
