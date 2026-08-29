# Slide 00 - Cover

EF235161 - TD Data Mining 
 
Pertemuan 10

## AutoML, Hyperparameter Optimization & Reproducible Research

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D 
 
Departemen Teknik Informatika - ITS

---

# Slide 01 - Peta Perkuliahan dan Posisi Pertemuan 10

| Pertemuan | Topik | Kaitannya |
|---|---|---|
| 9 | Deep & Representation Learning for Tabular Data | Membandingkan Gradient Boosting vs neural tabular model; membangun strong baseline |
| **10** | **AutoML, Hyperparameter Optimization & Reproducible Research** | **Memastikan model dibandingkan secara adil dan hasil dapat direproduksi** |
| 11 | Graph Mining & Graph Neural Networks | Melanjutkan eksperimen pada data non-tabular |

- Pertemuan 10 juga menjadi tahap implementasi **proposed/selected method** dalam research project.
- Fokus utama: bagaimana membuat eksperimen data mining yang **valid**, **fair**, dan **reproducible**.

---

# Slide 02 - Tujuan Pembelajaran Pertemuan 10

Pertemuan ini mendukung **CPMK-4** dan **CPMK-5**.

- **CPMK-4** — Merancang dan melaksanakan eksperimen data mining yang valid dan reproducible, termasuk model selection dan hyperparameter tuning.
- **CPMK-5** — Membandingkan metode berdasarkan predictive performance, computational cost, robustness, dan generalization.

Setelah pertemuan ini, mahasiswa diharapkan mampu:

- Menjelaskan perbedaan Grid Search, Random Search, Bayesian Optimization, dan AutoML.
- Menggunakan Optuna untuk hyperparameter optimization.
- Menggunakan AutoGluon untuk otomatisasi pipeline tabular.
- Menganalisis model selection bias dan computational budget.
- Menerapkan prinsip reproducible research dalam eksperimen.

---

# Slide 03 - Recap: Pertemuan 9 dan Jembatan ke AutoML

- Pertemuan 9 membahas perbandingan **Gradient Boosting** vs **neural tabular model**.
- Pertanyaan besar: *Dalam kondisi apa deep learning benar-benar memberikan keuntungan pada data tabular?*
- Eksperimen tersebut sangat rentan terhadap **ketidakadilan tuning**.
  - Model neural bisa tampak buruk jika tidak di-tuning.
  - Model boosting bisa tampak hebat karena tuning tambahan.

AutoML dan hyperparameter optimization membantu menjawab pertanyaan tersebut secara lebih objektif:

- Memberi kesempatan yang adil kepada setiap model.
- Mendokumentasikan proses pencarian hyperparameter.
- Memisahkan tuning dan evaluasi secara ketat.

---

# Slide 04 - Hyperparameter vs Parameter Model

| Aspek | Parameter Model | Hyperparameter |
|---|---|---|
| Dipelajari saat training | Ya | Tidak |
| Ditentukan sebelum training | Tidak | Ya |
| Contoh | Bobot linear regression, split points pohon | `learning_rate`, `max_depth`, `n_estimators`, `C` |
| Nilai | Berubah selama training | Tetap selama training |

- Hyperparameter mengontrol **kapasitas model**, **regularisasi**, dan **proses optimasi**.
- Pemilihan hyperparameter yang tepat dapat mengubah performa secara signifikan.
- Hyperparameter merupakan bagian dari **experimental design**, bukan sekadar engineering.

---

# Slide 05 - Mengapa Hyperparameter Optimization Penting?

- Performa model sangat sensitif terhadap hyperparameter tertentu.
- Baseline yang tidak di-tuning dapat **tampak lebih lemah** daripada seharusnya.
- Klaim penelitian seperti *"metode A lebih baik daripada metode B"* hanya valid jika kedua metode diberi **kesempatan tuning yang setara**.
- Hyperparameter optimization memungkinkan pencarian yang sistematis dibanding trial-and-error manual.
- Dalam research project, hyperparameter tuning yang transparan meningkatkan **reproducibility** dan **kredibilitas ilmiah**.

---

# Slide 06 - Ruang Pencarian Hyperparameter

Hyperparameter dapat memiliki tipe berbeda:

- **Kontinu**: `learning_rate`, `weight_decay`, `C` (SVM).
- **Diskret**: `max_depth`, `n_layers`, `n_estimators`.
- **Kategorikal**: optimizer (`adam`, `sgd`), activation (`relu`, `gelu`).

Contoh ruang pencarian untuk Random Forest:

```text
n_estimators    : 100, 200, 300
max_depth       : 3, 5, 7, None
min_samples_split : 2, 5, 10
criterion       : gini, entropy
```

Ruang pencarian dapat menjadi sangat besar jika tidak dibatasi dengan baik.

---

# Slide 07 - Taksonomi Strategi Hyperparameter Optimization

```text
Hyperparameter Optimization
├── Manual / Heuristic
├── Grid Search
├── Random Search
├── Bayesian Optimization
│   ├── Gaussian Process / SMBO
│   └── TPE (Optuna default)
├── Multi-fidelity / Bandit
│   └── Hyperband, BOHB
└── AutoML (framework-level)
    └── AutoGluon, Auto-sklearn, H2O AutoML
```

- Setiap strategi memiliki tradeoff antara **efisiensi**, **kompleksitas**, dan **jaminan konvergensi**.
- Pemilihan strategi bergantung pada ukuran ruang pencarian dan biaya evaluasi model.

---

# Slide 08 - Grid Search: Definisi dan Mekanisme

Grid Search mencoba **semua kombinasi nilai hyperparameter** yang telah ditentukan.

Contoh:

```text
learning_rate = [0.01, 0.1, 0.3]
max_depth     = [3, 5, 7]
```

Total kombinasi = `3 × 3 = 9`.

Implementasi sklearn:

```python
from sklearn.model_selection import GridSearchCV

grid = {
    "learning_rate": [0.01, 0.1, 0.3],
    "max_depth": [3, 5, 7]
}
search = GridSearchCV(model, grid, cv=5)
search.fit(X_train, y_train)
```

---

# Slide 09 - Grid Search: Kelebihan dan Keterbatasan

| Kelebihan | Keterbatasan |
|---|---|
| Sederhana dan mudah dipahami | Jumlah kombinasi tumbuh eksponensial |
| Eksplorasi ruang secara sistematis | Tidak efisien untuk ruang berdimensi tinggi |
| Mudah diparalelkan | Titik optimal sering berada di antara grid |
| Dapat diulang dengan deterministik | Banyak kombinasi yang tidak berpengaruh |

- Jumlah kombinasi = perkalian semua nilai kandidat.
- Untuk 10 hyperparameter dengan masing-masing 5 nilai, total = `5^10 ≈ 9.7 juta` evaluasi.
- Grid Search cocok hanya untuk ruang kecil atau ketika waktu komputasi sangat murah.

---

# Slide 10 - Random Search: Definisi dan Mekanisme

Random Search mencoba **kombinasi acak** dari distribusi nilai, bukan semua kombinasi.

Contoh:

```python
from sklearn.model_selection import RandomizedSearchCV
import scipy.stats as stats

random_grid = {
    "learning_rate": stats.uniform(0.001, 0.5),
    "max_depth": stats.randint(3, 10)
}
search = RandomizedSearchCV(model, random_grid, n_iter=30, cv=5, random_state=42)
search.fit(X_train, y_train)
```

- Setiap konfigurasi dipilih secara independen dari distribusi tertentu.
- `n_iter` menentukan jumlah percobaan yang dialokasikan.

---

# Slide 11 - Random Search: Efisiensi pada Dimensi Tinggi

Pada ruang berdimensi tinggi, seringkali sebagian hyperparameter **tidak sensitif**.

Ilustrasi sederhana:

```text
Semua kombinasi grid:
    x berpengaruh, y tidak berpengaruh
    +---+---+---+
    |   |   |   |   Grid mencoba seluruh nilai y yang sama
    +---+---+---+
    |   |   |   |   Random search mencoba lebih banyak nilai x
    +---+---+---+
```

- Dengan budget yang sama, Random Search dapat mencoba **lebih banyak variasi per hiperparameter yang berpengaruh**.
- Ini meningkatkan peluang menemukan konfigurasi yang baik dibandingkan Grid Search pada ruang berukuran besar.

---

# Slide 12 - Perbandingan Grid Search vs Random Search

| Aspek | Grid Search | Random Search |
|---|---|---|
| Cakupan | Menyeluruh pada grid | Acak berdasarkan distribusi |
| Efisiensi dimensi tinggi | Rendah | Lebih tinggi |
| Determinisme | Ya | Perlu `random_state` |
| Implementasi | Sederhana | Sederhana |
| Kapan cocok | Ruang kecil, semua kombinasi penting | Ruang besar, banyak hiperparameter kurang sensitif |
| Risiko | Boros komputasi | Tidak menjamin sampel di area optimal |

- Random Search sering menjadi **baseline** untuk perbandingan dengan metode yang lebih canggih.
- Hasil harus dilaporkan dengan seed yang dipakai.

---

# Slide 13 - Bayesian Optimization: Prinsip Dasar

Bayesian Optimization membangun **model probabilistik** yang memetakan hyperparameter ke performa model.

```text
                       ┌─────────────────────┐
Hyperparameter x  ───▶ │  Surrogate Model    │ ───▶ Prediksi performa
                       └─────────────────────┘
                                ▲
                                │ update setelah trial
                       ┌─────────────────────┐
                       │  Acquisition Func   │ ───▶ menentukan x berikutnya
                       └─────────────────────┘
```

- Tujuan: menemukan hyperparameter terbaik dengan **sedikit evaluasi**.
- Evaluasi model dianggap sebagai **black-box function**.
- Bayesian Optimization cocok untuk fungsi yang mahal seperti training model besar.

---

# Slide 14 - Bayesian Optimization: Surrogate Model dan Acquisition Function

**Surrogate model**:

- Memperkirakan mean dan ketidakpastian performa pada setiap titik.
- Contoh: Gaussian Process, Random Forest, atau Tree Parzen Estimator (TPE).

**Acquisition function**:

- Menyeimbangkan **exploration** dan **exploitation**.
- Memilih titik berikutnya yang paling menjanjikan.
- Contoh: Expected Improvement (EI), Upper Confidence Bound (UCB).

Setiap trial memperbarui surrogate sehingga pencarian menjadi semakin terarah.

---

# Slide 15 - Kelebihan Bayesian Optimization dan Kapan Menggunakannya

| Kelebihan | Keterbatasan |
|---|---|
| Efisien untuk ruang besar dan evaluasi mahal | Overhead untuk memilih titik berikutnya |
| Menangani tradeoff eksplorasi-eksploitasi | Kurang cocok untuk evaluasi sangat cepat |
| Dapat menggunakan prior knowledge | Hasil bervariasi antar run |
| Lebih sedikit trial daripada Random Search | Sensitif terhadap inisialisasi awal |

Kapan digunakan:

- Training model memakan waktu menit hingga jam.
- Jumlah hyperparameter sedang (5–20).
- Computational budget terbatas.

---

# Slide 16 - Optuna: Framework Hyperparameter Optimization Modern

Optuna adalah framework HPO berbasis Python dengan pendekatan **define-by-run**.

Fitur utama:

- **TPE sampler** sebagai default Bayesian optimization.
- **Pruning** untuk menghentikan trial yang tidak menjanjikan.
- Integrasi dengan scikit-learn, XGBoost, LightGBM, PyTorch.
- Visualisasi hasil: `plot_optimization_history`, `plot_param_importances`.
- Mendukung `study.optimize` dengan `n_trials` atau `timeout`.

```python
import optuna

def objective(trial):
    x = trial.suggest_float("x", -10, 10)
    y = trial.suggest_float("y", -10, 10)
    return (x - 2) ** 2 + (y + 3) ** 2

study = optuna.create_study(direction="minimize")
study.optimize(objective, n_trials=50)
print(study.best_params)
```

---

# Slide 17 - Optuna: API Dasar dan Studi Kasus

Contoh optimasi hyperparameter Random Forest:

```python
import optuna
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score

def objective(trial):
    params = {
        "n_estimators": trial.suggest_int("n_estimators", 50, 300),
        "max_depth": trial.suggest_int("max_depth", 3, 20),
        "min_samples_split": trial.suggest_int("min_samples_split", 2, 10),
        "criterion": trial.suggest_categorical("criterion", ["gini", "entropy"])
    }
    model = RandomForestClassifier(**params, random_state=42)
    score = cross_val_score(model, X_train, y_train, cv=5, scoring="f1_macro").mean()
    return score

study = optuna.create_study(direction="maximize")
study.optimize(objective, n_trials=30)
```

- `suggest_float`, `suggest_int`, `suggest_categorical` menentukan ruang pencarian.
- `direction` diatur sesuai metrik yang digunakan.

---

# Slide 18 - Optuna: Integrasi dengan Model Machine Learning

Optuna dapat digunakan bersama learning rate scheduling, early stopping, dan pruning callback.

```python
from optuna.integration import XGBoostPruningCallback
import xgboost as xgb

def objective(trial):
    param = {
        "max_depth": trial.suggest_int("max_depth", 3, 9),
        "learning_rate": trial.suggest_float("learning_rate", 0.01, 0.3, log=True),
        "subsample": trial.suggest_float("subsample", 0.5, 1.0)
    }
    dtrain = xgb.DMatrix(X_train, label=y_train)
    pruning = XGBoostPruningCallback(trial, "validation-auc")

    model = xgb.train(
        param, dtrain,
        evals=[(dtrain, "validation")],
        early_stopping_rounds=10,
        callbacks=[pruning]
    )
    return model.best_score
```

- **Pruning** menghentikan trial yang tidak menjanjikan lebih awal.
- Menghemat waktu dan memungkinkan lebih banyak trial dalam budget yang sama.

---

# Slide 19 - AutoML: Definisi dan Alur Kerja

AutoML mengotomasi seluruh pipeline machine learning:

```text
Raw data
   ↓
Preprocessing otomatis (missing values, encoding, scaling)
   ↓
Feature engineering / selection
   ↓
Model selection
   ↓
Hyperparameter optimization
   ↓
Ensemble / stacking
   ↓
Final model
```

- Hyperparameter optimization adalah **salah satu komponen inti** AutoML.
- Contoh framework: **AutoGluon**, **Auto-sklearn**, **H2O AutoML**, **FLAML**.

---

# Slide 20 - Komponen AutoML dan Toolbox

| Komponen | Fungsi |
|---|---|
| Data preprocessing | Menangani missing values, kategorikal, outlier |
| Feature engineering | Membuat fitur baru, seleksi fitur |
| Model selection | Memilih algoritma yang sesuai |
| Hyperparameter optimization | Mencari konfigurasi terbaik |
| Ensemble | Menggabungkan beberapa model |
| Evaluation | Memilih model berdasarkan validation score |
| Termination | Menghentikan pencarian sesuai budget |

AutoML tidak selalu berarti tanpa intervensi manusia.

- Peneliti tetap perlu mendefinisikan **problem**, **dataset**, **metric**, dan **budget**.
- AutoML membantu membangun **strong baseline** secara cepat dan adil.

---

# Slide 21 - AutoGluon: AutoML untuk Data Tabular

AutoGluon adalah library AutoML dari Amazon.

Fokus utama: **tabular data**.

Keunggulan:

- Otomatisasi preprocessing dan data cleaning.
- Mendukung banyak model sekaligus.
- Melakukan **multi-layer stack ensemble**.
- Memiliki `predictor.leaderboard()` untuk melihat hasil semua model.
- Cukup beberapa baris kode.

Cocok digunakan untuk membangun baseline yang sangat kuat dalam penelitian.

---

# Slide 22 - AutoGluon: Contoh Implementasi

```python
from autogluon.tabular import TabularDataset, TabularPredictor

train_data = TabularDataset("train.csv")
test_data = TabularDataset("test.csv")

predictor = TabularPredictor(
    label="class",
    eval_metric="f1_macro"
)

predictor.fit(
    train_data,
    time_limit=600,   # budget waktu 600 detik
    presets="medium_quality"
)

leaderboard = predictor.leaderboard(test_data)
print(leaderboard)
```

- `time_limit` membatasi total waktu AutoML.
- `presets` menentukan tradeoff kualitas vs kecepatan.
- Evaluasi akhir tetap harus dilakukan secara terpisah.

---

# Slide 23 - AutoGluon: Ensemble dan Bagging Otomatis

AutoGluon menggabungkan berbagai model menjadi ensemble:

```text
Model 1: Random Forest
Model 2: XGBoost
Model 3: LightGBM
Model 4: CatBoost
Model 5: Neural Net
            │
       Stacked Ensemble
            │
       Weighted Ensemble
```

Mengapa ensemble kuat:

- Mengurangi variance.
- Memanfaatkan kekuatan berbagai algoritma.
- Dapat meningkatkan performa tanpa perubahan data.

Tradeoff:

- Waktu training lebih lama.
- Model sulit diinterpretasi.
- Reproducibility membutuhkan pencatatan seed dan versi library.

---

# Slide 24 - Manual Tuning vs Automated HPO: Konteks Praktikum 5

**Praktikum 5**: membandingkan *manual tuning* dengan *automated hyperparameter optimization*.

Pertanyaan utama:

> Apakah automated HPO memberikan peningkatan performa yang signifikan dibanding manual tuning?

Langkah umum:

1. Pilih dataset (dapat berasal dari research project).
2. Tetapkan protocol evaluasi (CV atau hold-out).
3. Lakukan manual tuning dengan budget tertentu.
4. Lakukan automated HPO dengan budget yang wajar.
5. Bandingkan hasil pada test set.
6. Analisis apakah perbedaan berasal dari metode tuning atau hanya dari budget.

---

# Slide 25 - Desain Praktikum 5: Manual Tuning

Manual tuning dilakukan dengan:

- Menggunakan default hyperparameter.
- Atau mencoba beberapa kombinasi berdasarkan pengalaman / intuisi.
- Tanpa pencarian sistematis.

Contoh pencatatan:

| Percobaan | `max_depth` | `learning_rate` | F1 validasi |
|---|---|---|---|
| 1 | 3 | 0.1 | 0.82 |
| 2 | 5 | 0.1 | 0.84 |
| 3 | 7 | 0.05 | 0.83 |

Waktu yang dihabiskan dan jumlah percobaan perlu dicatat.

---

# Slide 26 - Desain Praktikum 5: Automated HPO dengan Optuna

```python
def objective(trial):
    param = {
        "max_depth": trial.suggest_int("max_depth", 3, 12),
        "learning_rate": trial.suggest_float("learning_rate", 0.01, 0.30, log=True),
        "subsample": trial.suggest_float("subsample", 0.5, 1.0)
    }
    model = HistGradientBoostingClassifier(**param, random_state=42)
    return cross_val_score(model, X_train, y_train, cv=5, scoring="f1_macro").mean()

study = optuna.create_study(direction="maximize")
study.optimize(objective, n_trials=30)   # budget = 30 trial
```

- Automated HPO menggunakan informasi dari trial sebelumnya.
- Budget dapat berupa `n_trials` atau `timeout`.
- Setiap trial dievaluasi dengan cross-validation yang sama agar fair.

---

# Slide 27 - Evaluasi Perbandingan yang Adil

Agar perbandingan manual vs automated HPO tidak bias:

- Gunakan **split data yang sama** untuk kedua strategi tuning.
- Lakukan pemilihan hyperparameter hanya pada **validation data**.
- Setelah tuning selesai, evaluasi model terbaik pada **test data** yang tidak pernah digunakan.
- Catat **computational budget** kedua strategi.
- Gunakan **beberapa seed** untuk mengecek stabilitas.

```text
Training data ──▶ Cross-validation / validation for tuning
Test data     ──▶ Evaluasi final, hanya sekali
```

---

# Slide 28 - Model Selection Bias: Definisi

Model selection bias terjadi ketika model dipilih berdasarkan performa terbaik pada data yang sama dengan data evaluasi.

Contoh:

- Mencoba 100 konfigurasi, lalu mengambil yang terbaik pada test set, lalu melaporkan hasilnya sebagai generalisasi.
- Melakukan tuning dan evaluasi pada dataset yang sama tanpa memisahkan data.

Akibat:

- Generalization error **diremehkan**.
- Klaim ilmiah menjadi tidak valid.

---

# Slide 29 - Dampak Model Selection Bias pada Kesimpulan Penelitian

Ketika semakin banyak konfigurasi dicoba, peluang overfitting pada validation set semakin besar.

- Jika model A dicoba dengan 1000 konfigurasi dan model B hanya 1 konfigurasi, perbandingan tidak adil.
- Improvement yang tampak dapat disebabkan oleh **selection bias**, bukan metode baru.

Cara mengatasi:

- Gunakan **nested cross-validation**.
- Gunakan **final test set** yang sangat dijaga.
- Laporkan jumlah trial dan budget tuning.
- Lakukan **significance testing** atau repeated k-fold.

---

# Slide 30 - Computational Budget: Konsep dan Kendali

Computational budget adalah jumlah sumber daya komputasi yang dialokasikan untuk tuning.

Bentuk budget:

- `n_trials` / jumlah iterasi.
- `time_limit` dalam detik.
- `max_epochs` dalam training neural network.
- jumlah GPU / CPU.

Mengapa penting dilaporkan:

- Membantu pembaca menilai fair comparison.
- Metode yang sangat kompleks dapat memakan budget lebih besar tanpa peningkatan signifikan.
- Reproducibility memerlukan informasi budget.

---

# Slide 31 - Random Seed: Variabilitas dan Pengendaliannya

Random seed mengontrol:

- Pembagian train/test.
- Sampling cross-validation.
- Inisialisasi model.
- Bagging / subsampling.
- Random Search.

Cara menangani seed:

```python
seed = 42
## set seed untuk library utama
import random, numpy as np
random.seed(seed)
np.random.seed(seed)
```

- Gunakan beberapa seed untuk melihat stabilitas:

| Seed | F1 model A | F1 model B |
|---|---|---|
| 0 | 0.84 | 0.85 |
| 1 | 0.85 | 0.84 |
| 2 | 0.83 | 0.86 |

- Laporkan rata-rata dan standar deviasi, bukan hanya satu angka.

---

# Slide 32 - Reproducible Research: Prinsip dan Pentingnya

Reproducible research berarti hasil penelitian dapat diulang dengan:

- Data yang sama.
- Kode yang sama.
- Konfigurasi yang didokumentasikan.
- Lingkungan yang jelas.

Mengapa penting:

- Membantu validasi klaim ilmiah.
- Memungkinkan peneliti lain membangun di atas hasil kita.
- Meningkatkan kepercayaan terhadap kontribusi.

Tantangan:

- Nondeterminism GPU.
- Versi library berubah.
- Data yang berubah seiring waktu.
- Random seed tidak mengontrol seluruh proses.

---

# Slide 33 - Experiment Tracking: MLflow dan Weights & Biases

Experiment tracking mencatat:

- Hyperparameter.
- Metric.
- Artifact / model.
- Kode dan environment.

MLflow:

```python
import mlflow

mlflow.start_run()
mlflow.log_param("learning_rate", 0.1)
mlflow.log_param("max_depth", 5)
mlflow.log_metric("valid_f1", 0.85)
mlflow.end_run()
```

Weights & Biases (W&B):

```python
import wandb
run = wandb.init(project="dm-project", config={"lr": 0.1})
wandb.log({"valid_f1": 0.85})
```

Tracking membantu membandingkan banyak percobaan secara sistematis.

---

# Slide 34 - Reproducibility Checklist untuk Penelitian Data Mining

Checklist minimum:

- [ ] Versi dataset dan sumber data dicatat.
- [ ] Preprocessing pipeline terdokumentasi.
- [ ] Daftar hyperparameter dan ruang pencarian.
- [ ] Jumlah trial / budget tuning.
- [ ] Random seed yang digunakan.
- [ ] Versi library dan environment.
- [ ] Source code diunggah ke repository (misal GitHub).
- [ ] Instruksi menjalankan eksperimen dari awal.

Bonus:

- Sertakan konfigurasi eksperimen dalam file YAML/JSON.
- Sertakan hasil lengkap, bukan hanya metric ringkas.
- Gunakan virtual environment / Docker.

---

# Slide 35 - Interpretasi Hasil: Improvement karena Metode atau Tuning?

Pertanyaan penting dalam mengevaluasi hasil eksperimen:

> Apakah peningkatan performa berasal dari metode baru, atau hanya dari tuning yang lebih intensif?

Analisis yang perlu dilakukan:

- Bandingkan metode dengan **budget tuning yang sama**.
- Buat **learning curve** performa terhadap jumlah trial.
- Periksa apakah metode baru membutuhkan resource jauh lebih besar.
- Lakukan **ablation study** untuk memisahkan kontribusi komponen.
- Laporkan computational cost dan waktu inference.

Kesimpulan yang tidak didukung budget dapat menjadi *threat to validity*.

---

# Slide 36 - Research Project: Implementasi Proposed/Selected Method

Pada minggu ini, research project memasuki tahap:

> **Implementasi proposed/selected method.**

Yang perlu dilakukan:

- Terapkan metode yang dipilih sesuai research question.
- Gunakan hyperparameter tuning yang **fair** dan terdokumentasi.
- Gunakan AutoML atau Optuna untuk mencari konfigurasi kuat.
- Pastikan semua eksperimen disimpan dengan experiment tracking.
- Siapkan data, kode, dan konfigurasi agar reproducible.

Hubungkan dengan progress minggu lalu:

- Strong baseline masih dievaluasi dengan protokol yang sama.
- Proposed method harus dibandingkan dengan baseline yang sama.

Research clinic: diskusikan kesulitan implementasi dan hambatan eksperimen.

---

# Slide 37 - Penutup

TERIMA KASIH

Pertemuan berikutnya

**Graph Mining & Graph Neural Networks**