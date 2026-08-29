# Slide 00 - Cover

EF235161 - TD Data Mining 
 
Pertemuan 09

## Deep & Representation Learning for Tabular Data

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D  

Departemen Teknik Informatika - ITS

---

# Slide 01 - Peta Perkuliahan dan Posisi Pertemuan 09

## Konteks dalam RPS

```text
1  Modern Data Mining & Research Landscape
2  EDA, Preprocessing & Experimental Validity
3  Pattern Mining & Knowledge Discovery
4  Classification, Regression & Strong Baselines
5  Ensemble Learning & Gradient Boosting
6  Clustering & Unsupervised Data Mining
7  Anomaly Detection & Imbalanced Data
8  Critical Paper Review & Research Proposal Seminar
9  Deep & Representation Learning for Tabular Data   <- Anda di sini
10 AutoML, Hyperparameter Optimization & Reproducible Research
11 Graph Mining & Graph Neural Networks
12 Temporal, Streaming Data & Concept Drift
13 Explainable, Trustworthy & Responsible DM
14 Emerging Data Mining
15 From Experimental Results to Scientific Contribution
16 Final Research Presentation & Paper Defense
```

---

# Slide 02 - Tujuan Pembelajaran dan CPMK

## CPMK yang Dicapai

| CPMK | Fokus |
|---|---|
| CPMK-1 | Menganalisis konsep dan metode data mining modern |
| CPMK-4 | Merancang eksperimen yang valid dan reproducible |
| CPMK-5 | Membandingkan metode klasik, modern, dan emerging |

## Tujuan Khusus Pertemuan 09

- Memahami mengapa data tabular menjadi tantangan bagi deep learning.
- Menjelaskan konsep representation learning dan inductive bias.
- Menguasai arsitektur neural tabular: MLP, categorical embedding, TabNet, FT-Transformer.
- Membandingkan Gradient Boosting dengan neural tabular model secara fair.
- Menjawab research question: *Dalam kondisi apa deep learning benar-benar memberikan keuntungan pada data tabular?*

---

# Slide 03 - Recap: Pertemuan Sebelumnya

## Pertemuan 08: Critical International Paper Review & Research Proposal Seminar

Mahasiswa telah mempresentasikan:

- Research problem, research gap, dan research question.
- Novelty dan methodology yang direncanakan.
- Dataset, baseline, dan experimental plan.

## Kaitannya dengan Pertemuan 09

- Pada pertemuan 04 dan 05, Anda telah mempelajari *strong baseline*: Logistic Regression, SVM, Random Forest, dan Gradient Boosting.
- Pertemuan 09 memperluas baseline tersebut dengan **deep tabular learning**.
- Hasil implementasi baseline pada pertemuan ini menjadi langkah awal eksperimen research project Anda.

> **Pertemuan 09 adalah titik transformasi dari baseline classical menuju metode modern.**

---

# Slide 04 - Dari Pertemuan 08 ke Pertemuan 09

```text
Research Proposal V1 (Pertemuan 08)
   |
   v
Memiliki Problem, RQ, Dataset, Baseline, Experimental Plan
   |
   v
Pertemuan 09:
Implementasi strong baseline menggunakan
Gradient Boosting vs Neural Tabular Model
   |
   v
Menuju Pertemuan 10:
AutoML & Hyperparameter Optimization untuk method development
```

---

# Slide 05 - Research Question Utama Pertemuan 09

> **Dalam kondisi apa deep learning benar-benar memberikan keuntungan pada data tabular?**

## Mengapa pertanyaan ini penting?

- Selama bertahun-tahun, Gradient Boosting (XGBoost, LightGBM, CatBoost) adalah pemenang dominan pada data tabular.
- Deep learning unggul pada data gambar, teks, dan audio, tetapi **tidak selalu** pada data tabular.
- Pertanyaan ini memotivasi lahirnya metode seperti TabNet, FT-Transformer, dan self-supervised tabular learning.

## Yang akan dikaji

1. Karakteristik data yang menguntungkan neural network.
2. Peran representasi fitur dan embedding.
3. Inductive bias dari masing-masing model.
4. Bagaimana mengevaluasi secara adil.

---

# Slide 06 - Definisi Representation Learning

## Representation Learning

Representation learning adalah proses **menemukan representasi data yang membuat informasi penting lebih mudah diekstraksi** untuk suatu tugas.

```text
Input data mentah (raw features)
       |
       v
Representation learning
       |
       v
Representasi terlatih (learned representation)
       |
       v
Downstream task (klasifikasi, regresi, dll.)
```

## Tujuan

- Menangkap struktur dan pola tersembunyi dalam data.
- Mengurangi kebutuhan rekayasa fitur manual.
- Meningkatkan generalisasi dan performa downstream task.

---

# Slide 07 - Mengapa Representation Learning Relevan untuk Tabular Data?

## Tantangan Data Tabular

- Fitur memiliki tipe campuran: numerik dan kategorikal.
- Hubungan antarfitur sering non-linear dan interaktif.
- Distribusi data nyata tidak selalu Gaussian.
- Data sering mengandung missing values, outlier, dan skala yang berbeda.

## Representasi yang Baik

```text
Fitur mentah -> Representasi terlatih -> Keputusan akhir
```

Representasi yang baik harus:

- Menangkap interaksi antar fitur.
- Menghilangkan noise dan redundansi.
- Mempertahankan informasi penting untuk tugas prediksi.

---

# Slide 08 - Inductive Bias: Konsep Kunci

## Definisi

Inductive bias adalah **asumsi yang dimiliki model tentang data** yang membuat model mampu melakukan generalisasi dari contoh yang terbatas.

| Model | Inductive Bias |
|---|---|
| Decision Tree | Fitur penting dapat dipisahkan melalui threshold pada satu fitur |
| Linear Model | Hubungan fitur-target bersifat linear |
| k-NN | Objek serupa berada dekat dalam ruang fitur |
| Neural Network | Representasi hierarkis dan komposisional |

## Mengapa Penting?

Perbedaan performa antara tree model dan neural model sebagian besar disebabkan oleh perbedaan inductive bias terhadap data tabular.

---

# Slide 09 - Tree Model vs Neural Model: Perbandingan Awal

| Aspek | Tree Model (GBDT) | Neural Model |
|---|---|---|
| Representasi fitur | Splits pada fitur asli | Learned representation |
| Interaksi fitur | Terbatas pada jalur pohon | Dapat mempelajari interaksi kompleks |
| Skala fitur | Tidak sensitif | Sensitif terhadap scaling |
| Missing values | Ditangani native | Perlu imputasi/strategi khusus |
| Data kategorikal | Ordinal encoding / native | Categorical embedding |
| Generalisasi | Kuat pada data tabular kecil | Kuat pada data besar |
| Interpretabilitas | Feature importance | Perlu teknik tambahan |

---

# Slide 10 - Mengapa Gradient Boosting Sulit Dikalahkan?

## Keunggulan GBDT pada Data Tabular

1. **Threshold-based splits** bekerja baik pada fitur tabular yang tidak mulus.
2. **Invariant terhadap transformasi monotonik** pada fitur (misalnya skala).
3. Mampu menangani missing values secara native.
4. Efisien pada data dengan ukuran sedang (ratusan ribu baris).
5. Hyperparameter tuning relatif sederhana.

## Kelemahan GBDT

- Tidak mempelajari representasi fitur secara end-to-end.
- Sulit memanfaatkan data tidak berlabel.
- Kurang fleksibel untuk fitur dengan struktur (teks, gambar, graph).

---

# Slide 11 - Kapan Neural Model Bisa Lebih Unggul?

## Kondisi yang Menguntungkan Neural Tabular Model

| Kondisi | Penjelasan |
|---|---|
| Data sangat besar | Neural network memanfaatkan skala data lebih baik |
| Fitur berstruktur | Teks, gambar, dan urutan membutuhkan representation learning |
| Fitur kategorikal banyak | Embedding dapat memanfaatkan kesamaan antar kategori |
| Data tidak berlabel melimpah | Self-supervised learning dapat memberikan representasi awal |
| Hubungan non-linear kompleks | Neural network dapat mempelajari fungsi yang sangat kompleks |

## Catatan Penting

Keunggulan ini **tidak otomatis** terjadi. Harus diuji secara empiris.

---

# Slide 12 - MLP untuk Tabular Data

## Multilayer Perceptron (MLP)

- Arsitektur paling dasar untuk deep tabular learning.
- Input: vektor fitur numerik dan kategorikal yang di-encode.
- Terdiri dari lapisan fully-connected dengan aktivasi non-linear.

```text
Input (x1, x2, ..., xn)
       |
   [Dense + ReLU]
       |
   [Dense + ReLU]
       |
   [Dense + ReLU]
       |
   Output (y)
```

## Kelemahan MLP

- Tidak memiliki inductive bias struktural (tidak seperti CNN untuk gambar).
- Sering kalah dari GBDT jika tanpa tuning dan feature engineering yang baik.

---

# Slide 13 - Kapan MLP Menjadi Pilihan?

## MLP Bisa Unggul Jika

1. Dataset besar (contoh: > 100 ribu baris).
2. Fitur sudah di-preprocess dengan baik dan skala konsisten.
3. Ada fitur kategorikal yang membutuhkan embedding.
4. Target memiliki hubungan yang sangat non-linear yang tidak mudah ditangkap pohon.
5. Butuh integrasi dengan model lain (misalnya transfer learning).

## Contoh Penelitian

Beberapa studi (misalnya pada dataset dari OpenML) menunjukkan bahwa MLP dengan tuning yang tepat dapat menyaingi GBDT pada dataset skala menengah-besar, meskipun jarang mengungguli secara konsisten.

---

# Slide 14 - Categorical Embedding: Representasi Kategori

## Masalah Encoding Kategorikal

- One-hot encoding menghasilkan vektor panjang dan sparse.
- Ordinal encoding memberikan makna urutan yang salah.
- Target encoding berisiko data leakage.

## Categorical Embedding

- Setiap kategori dipetakan ke vektor berdimensi kecil yang **dipelajari**.
- Pada saat yang sama dengan model, embedding dapat mempelajari kemiripan antar kategori.

```text
Kategori "Merah" -> [0.12, -0.45, 0.87] (embedding vector)
Kategori "Biru"  -> [0.10, -0.40, 0.90] (mirip dengan Merah)
Kategori "Tinggi"-> [0.90, 0.30, -0.10] (berbeda)
```

---

# Slide 15 - Categorical Embedding: Ilustrasi Arsitektur

```text
Fitur Kategorikal                 Fitur Numerik
     |                                  |
     v                                  v
[Embedding]                       [Normalisasi]
     |                                  |
     v                                  v
[Embedding vector]               [Vektor numerik]
     \                                  /
      ------------ Concatenate ---------
                    |
                    v
             [Dense Layers]
                    |
                    v
                 [Output]
```

- Embedding adalah layer yang dapat dilatih.
- Dimensi embedding umumnya: `min(50, (cardinality+1)//2)` atau lebih kecil.
- Embedding juga dapat digunakan untuk visualisasi kategori.

---

# Slide 16 - TabNet: Attention-Based Tabular Learning

## TabNet (Arik & Pfister, 2021)

- Arsitektur neural network yang dirancang khusus untuk data tabular.
- Menggunakan **sequential attention** untuk memilih fitur secara adaptif.
- Menggabungkan kelebihan decision trees (feature selection) dan neural network (representation learning).

## Konsep Utama

| Komponen | Fungsi |
|---|---|
| Feature transformer | Transformasi fitur menjadi representasi |
| Attentive transformer | Memilih fitur penting pada setiap step |
| Sequential steps | Beberapa tahap pemrosesan seperti boosting |
| Sparsemax | Menghasilkan masker seleksi fitur |

---

# Slide 17 - TabNet: Workflow Ringkas

```text
Input features
     |
     v
[Feature transformer]
     |
     +-------------> Decision step 1
     |
     v
[Attentive transformer] -> masker fitur terpilih
     |
     v
[Feature transformer]  -> Decision step 2
     |
     v
[Attentive transformer] -> masker fitur baru
     |
     v
         ...
     |
     v
[Agregasi semua decision steps] -> Output
```

- Setiap decision step memilih subset fitur yang berbeda.
- Hasil akhir adalah kombinasi dari semua step.

---

# Slide 18 - TabNet: Kelebihan dan Keterbatasan

## Kelebihan TabNet

- Memiliki interpretability bawaan melalui masker fitur.
- Melakukan feature selection secara end-to-end.
- Mengurangi kebutuhan preprocessing ekstensif.
- Bekerja cukup baik pada data dengan interaksi kompleks.

## Keterbatasan TabNet

- Pelatihan lebih lambat daripada GBDT.
- Sensitif terhadap hyperparameter.
- Pada banyak benchmark, masih kalah dari LightGBM/CatBoost.
- Interpretasi masker tidak selalu mudah dipahami.

---

# Slide 19 - FT-Transformer: Feature Tokenizer + Transformer

## FT-Transformer (Gorishniy et al., 2021)

Mengadaptasi arsitektur Transformer untuk data tabular.

## Ide Utama

```text
Fitur 1 -> Tokenizer -> Token 1
Fitur 2 -> Tokenizer -> Token 2
...
Fitur n -> Tokenizer -> Token n
                   |
                   v
          [Transformer Encoder]
                   |
                   v
              [Output]
```

- Setiap fitur diubah menjadi token (vektor embedding) melalui Feature Tokenizer.
- Token-token ini diproses dengan Transformer encoder, sehingga interaksi antar fitur dapat dijadikan perhatian (attention).

---

# Slide 20 - FT-Transformer: Komponen

## Feature Tokenizer

```text
Fitur numerik:
   x -> [LayerNorm] -> [Linear] -> token

Fitur kategorikal:
   k -> [Embedding] -> token

Seluruh token digabung:
   [CLS] + token_1 + token_2 + ... + token_n
```

## Transformer Encoder

- Multi-head self-attention antar token.
- Feed-forward network per token.
- Layer normalization dan residual connection.

## Kelebihan

- Menangkap interaksi global antar fitur.
- Powerful, tetapi membutuhkan data cukup besar dan tuning.

---

# Slide 21 - Perbandingan Arsitektur Neural Tabular

| Arsitektur | Representasi | Feature Selection | Interaksi Fitur | Kompleksitas |
|---|---|---|---|---|
| MLP | Dense embedding | Tidak ada | Implisit | Rendah |
| TabNet | Step-wise attention | Eksplisit (masker) | Sequential | Sedang |
| FT-Transformer | Per-feature token | Tidak ada | Attention global | Tinggi |

## Implikasi

- Pilih arsitektur berdasarkan ukuran data dan kebutuhan interpretabilitas.
- FT-Transformer membutuhkan lebih banyak komputasi.
- TabNet menawarkan seleksi fitur yang dapat diinterpretasi.

---

# Slide 22 - Self-Supervised Representation Learning untuk Tabular

## Konsep

Memanfaatkan data **tanpa label** untuk mempelajari representasi fitur yang berguna, kemudian menggunakannya untuk tugas dengan label.

```text
Data tanpa label -> Self-supervised pretraining -> Representasi terlatih
                                                          |
                                                          v
                                          Fine-tuning / linear probing
                                                          |
                                                          v
                                                   Tugas akhir
```

---

# Slide 23 - Metode Self-Supervised untuk Tabular

| Metode | Ide Dasar |
|---|---|
| **Contrastive Learning** | Dua augmen dari data yang sama harus memiliki representasi yang mirip |
| **Masked Autoencoding** | Menyembunyikan sebagian fitur, lalu memprediksi fitur yang hilang |
| **Pretext Task** | Misalnya memprediksi fitur kategorikal dari fitur numerik |
| **Denoising** | Memulihkan fitur asli dari fitur yang diberi noise |

## Manfaat

- Memanfaatkan data tidak berlabel yang melimpah.
- Meningkatkan representasi awal untuk downstream task.
- Berguna saat label sedikit.

---

# Slide 24 - Self-Supervised vs Supervised Learning: Alur Lengkap

```text
Supervised Learning:
X (fitur) + y (label) -> Training langsung -> Model

Self-Supervised Learning:
X (fitur, tanpa y) -> Pretraining -> Representasi
                                |
                                v
                 X kecil + y -> Fine-tuning -> Model final
```

## Contoh Praktis

- Gunakan 100% data tanpa label untuk pretraining.
- Gunakan 10% data berlabel untuk fine-tuning.
- Bandingkan dengan model yang dilatih langsung pada 10% data.

---

# Slide 25 - Deep Tabular Learning: Peta Umum

```text
Deep Tabular Learning
   |
   +-- MLP / ResNet
   |
   +-- Categorical Embedding
   |
   +-- TabNet (attention-based)
   |
   +-- FT-Transformer (transformer-based)
   |
   +-- Self-Supervised Tabular
   |
   +-- Hybrid Neural + GBDT
```

## Pendekatan Hybrid

- GBDT dan neural model dapat dikombinasikan, misalnya dengan **stacking**.
- Neural model menghasilkan representasi, GBDT melakukan prediksi akhir.
- CatBoost, LightGBM, dan XGBoost dapat menjadi final estimator.

---

# Slide 26 - Studi Komparatif: GBDT vs Neural Tabular Model

## Hasil Umum dari Literatur

| Dataset | GBDT | MLP | TabNet | FT-Transformer |
|---|---|---|---|---|
| Data tabular kecil-medium | **Terbaik** | Setara/kalah | Setara/kalah | Kalah/setara |
| Data tabular besar | **Terbaik/setara** | Setara | Setara | Setara |
| Dengan fitur kategorikal cardinality tinggi | **Baik** | Perlu embedding | Baik | **Baik** |
| Dengan data teks/gambar | Tidak cocok | Baik | Baik | **Baik** |

> **Kesimpulan awal dari literatur: GBDT masih menjadi strong baseline yang sangat sulit dikalahkan pada data tabular murni.**

---

# Slide 27 - Analisis: Mengapa GBDT Sering Menang?

## Penyebab Utama

1. **Inductive bias yang cocok** — Decision tree mengasumsikan keputusan dapat dibuat dengan threshold pada fitur, yang sering cocok untuk data tabular.
2. **Invariance terhadap skala** — GBDT tidak peduli dengan skala fitur, sehingga tidak perlu normalisasi.
3. **Handling missing values native** — Tidak perlu imputasi.
4. **Efisiensi training** — Lebih cepat pada data ukuran sedang.
5. **Hyperparameter tidak terlalu banyak** — Tuning lebih mudah.

## Kapan Neural Model Menang?

- Neural model menang ketika data memiliki **struktur laten** yang tidak terlihat langsung oleh pohon.
- Fitur kategorikal yang sangat banyak (cardinality tinggi) sering membutuhkan embedding.

---

# Slide 28 - Inductive Bias dalam Konteks Praktik

## Eksperimen Pikiran

```text
Dataset: 100.000 baris, 10 fitur numerik, target biner.
```

- GBDT: membutuhkan hyperparameter tuning ringan. Hasil biasanya kuat.
- MLP: membutuhkan scaling, tuning learning rate, hidden size, dan regularisasi.
- FT-Transformer: membutuhkan lebih banyak data dan komputasi.

## Kesimpulan Sementara

- Pilih GBDT sebagai baseline utama.
- Gunakan neural tabular model sebagai metode pembanding.
- Jangan menyimpulkan neural model unggul hanya karena satu dataset.

---

# Slide 29 - Praktikum 4: Gradient Boosting vs Neural Tabular Model

## Tujuan Praktikum

1. Membuat experimental pipeline yang fair.
2. Membandingkan performa GBDT (LightGBM/CatBoost) dengan neural tabular model.
3. Menganalisis karakteristik dataset yang menyebabkan perbedaan performa.

## Dataset Terpilih

- Dataset dapat berasal dari research project masing-masing atau dataset publik yang telah disediakan.
- Contoh: Dataset tabular dengan fitur campuran numerik dan kategorikal, ukuran sedang-besar.

---

# Slide 30 - Desain Eksperimen Praktikum 4

```text
Dataset
   |
   +--> Train/test split (stratified, 80:20)
   |
   +--> Preprocessing pipeline yang sama:
   |      - Numerik: standardization
   |      - Kategorikal: one-hot / embedding (tergantung model)
   |
   +--> Model:
   |      A. LightGBM / CatBoost (GBDT)
   |      B. MLP / TabNet / FT-Transformer
   |
   +--> Evaluasi:
   |      - Accuracy, F1, ROC-AUC (sesuai target)
   |      - Runtime training dan inference
   |
   +--> Analisis: kapan model unggul?
```

---

# Slide 31 - Kode Python: Pustaka yang Digunakan

```python
## GBDT
from lightgbm import LGBMClassifier
from catboost import CatBoostClassifier
import xgboost as xgb

## Neural Tabular Model
from sklearn.neural_network import MLPClassifier
## atau PyTorch untuk TabNet / FT-Transformer
## pip install pytorch-tabnet
from pytorch_tabnet.tab_model import TabNetClassifier
```

- Gunakan `RandomizedSearchCV` atau `Optuna` untuk tuning (akan dibahas lebih dalam di pertemuan 10).
- Pastikan random seed diset agar reproducible.

---

# Slide 32 - Contoh: Pipeline GBDT dengan scikit-learn

```python
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from lightgbm import LGBMClassifier

numeric_features = ["age", "income", "balance"]
categorical_features = ["job", "education", "marital"]

preprocessor = ColumnTransformer([
    ("num", StandardScaler(), numeric_features),
    ("cat", OneHotEncoder(handle_unknown="ignore"), categorical_features)
])

model = Pipeline([
    ("preprocess", preprocessor),
    ("classifier", LGBMClassifier(n_estimators=500, random_state=42))
])

model.fit(X_train, y_train)
```

---

# Slide 33 - Contoh: Neural Tabular dengan PyTorch (Ringkas)

```python
import torch
import torch.nn as nn

class TabularMLP(nn.Module):
    def __init__(self, n_num, n_cat_emb, emb_dim=8, hidden=128):
        super().__init__()
        self.embeddings = nn.ModuleList([
            nn.Embedding(card, emb_dim) for card in n_cat_emb
        ])
        total_dim = n_num + len(n_cat_emb) * emb_dim
        self.net = nn.Sequential(
            nn.Linear(total_dim, hidden),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(hidden, hidden),
            nn.ReLU(),
            nn.Linear(hidden, 1)
        )

    def forward(self, x_num, x_cat):
        emb = [emb(x_cat[:, i]) for i, emb in enumerate(self.embeddings)]
        x = torch.cat([x_num] + emb, dim=1)
        return self.net(x)
```

- Jangan lupa `train/validation split`, `early stopping`, dan `learning rate scheduling`.
- Gunakan `Random Seed` yang sama untuk fair comparison.

---

# Slide 34 - Metrik Evaluasi yang Adil

## Metrik yang Disarankan

| Jenis Tugas | Metrik |
|---|---|
| Klasifikasi biner | ROC-AUC, PR-AUC, F1 |
| Klasifikasi multiclass | Macro-F1, Accuracy |
| Regresi | RMSE, MAE, R2 |

## Hal yang Harus Diperhatikan

- Jangan hanya melaporkan accuracy pada data imbalance.
- Laporkan **confidence interval** atau **statistical test** jika memungkinkan.
- Lakukan **repeated stratified CV** (misalnya 5x2 CV) untuk mengurangi variabilitas.
- Catat komputasi: waktu training, waktu inference, penggunaan memori.

---

# Slide 35 - Interpretasi Hasil Praktikum 4

## Pertanyaan yang Harus Dijawab

1. Model mana yang memiliki performa terbaik pada metrik utama?
2. Apakah perbedaan performa signifikan secara statistik?
3. Bagaimana pengaruh ukuran dataset?
4. Apakah fitur kategorikal berperan dalam keunggulan neural model?
5. Bagaimana trade-off antara performa dan kecepatan?

## Template Kesimpulan

```text
Pada dataset [nama dataset] dengan [jumlah baris] dan [jumlah fitur],
GBDT mencapai [skor] sedangkan neural tabular model mencapai [skor].
Perbedaan ini [signifikan/tidak] secara statistik.
Fitur yang paling berpengaruh adalah [fitur].
Neural model unggul pada subset data dengan [karakteristik].
```

---

# Slide 36 - Menghubungkan ke Research Project

## Implementasi Strong Baseline

- Pertemuan 09 berfokus pada **implementasi strong baseline** dalam research project.
- Gunakan hasil praktikum ini untuk menentukan baseline yang akan digunakan pada pertemuan 10.

## Checklist Baseline yang Kuat

- [ ] Preprocessing pipeline terdokumentasi.
- [ ] Hyperparameter dasar sudah ditentukan.
- [ ] Evaluasi menggunakan repeated cross-validation.
- [ ] Hasil baseline disimpan dan direproduksi.

> **Baseline yang kuat adalah fondasi untuk menghindari klaim berlebihan.**

---

# Slide 37 - Menuju Pertemuan 10: AutoML, Hyperparameter Optimization & Reproducible Research

## Keterkaitan Materi

- Pertemuan 09 memperkenalkan neural tabular model yang memerlukan banyak hyperparameter.
- Pertemuan 10 akan membahas cara tuning hyperparameter secara efisien dan adil.

## Yang Akan Dipelajari

- Grid search, random search, Bayesian optimization.
- Optuna dan AutoGluon.
- Model selection bias dan reproducible research.
- Computational budget sebagai variabel eksperimen.

---

# Slide 38 - Penutup: Deep & Representation Learning for Tabular Data

## Poin Utama Pertemuan 09

- Representation learning penting untuk memahami bagaimana model menemukan representasi data yang berguna.
- GBDT masih menjadi baseline kuat pada data tabular.
- TabNet dan FT-Transformer menawarkan pendekatan baru, tetapi belum tentu menang di semua dataset.
- Self-supervised learning membuka peluang untuk memanfaatkan data tidak berlabel.
- Perbandingan yang adil adalah fondasi dari experimental research.

## Tugas Setelah Pertemuan Ini

- Selesaikan Praktikum 4.
- Implementasikan baseline untuk research project.
- Baca paper TabNet atau FT-Transformer sebagai bahan diskusi.

---

# Slide 39 - TERIMA KASIH

Pertemuan berikutnya

**AutoML, Hyperparameter Optimization & Reproducible Research**