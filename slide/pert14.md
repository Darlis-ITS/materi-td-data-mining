# Slide 00 - Cover

EF235161 - TD Data Mining  

Pertemuan 14

## Emerging Data Mining: Foundation Models, Generative & Privacy-Preserving Learning

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D  

Departemen Teknik Informatika - ITS

---

# Slide 01 - Agenda dan Peta Pertemuan 14

## Agenda

1. Generative modeling dan synthetic tabular data
2. Tabular Foundation Models
3. LLM untuk table understanding dan LLM-assisted analysis
4. In-context learning
5. Federated learning dan privacy-preserving mining
6. Causal perspectives dalam data mining
7. Analisis kritis: teknologi baru vs meaningful scientific contribution

## Peta Perkuliahan

- Pertemuan 13 membahas explainability, trust, dan responsible data mining.
- Pertemuan 14 memperluas wawasan ke arah emerging approaches.
- Pertemuan 15 akan memandu bagaimana hasil eksperimen disusun menjadi kontribusi ilmiah.

---

# Slide 02 - Posisi Pertemuan dalam RPS

## Sebelumnya

- XAI, robustness, fairness, dan responsible AI.
- Praktikum 6: prediction + SHAP + error analysis.

## Sekarang

- Emerging technologies: foundation models, generative models, federated learning, dan privacy.
- Fokus: apakah penggunaan teknologi baru benar-benar menghasilkan kontribusi ilmiah.

## Berikutnya

- Dari hasil eksperimen menuju scientific contribution.
- Ablation, sensitivity, statistical analysis, dan penulisan paper.

---

# Slide 03 - Tujuan Pembelajaran dan CPMK

## Capaian yang Didukung

- **CPMK-1** — Menganalisis konsep dan perkembangan modern data mining.
- **CPMK-2** — Mengevaluasi secara kritis penelitian data mining mutakhir.
- **CPMK-5** — Membandingkan metode klasik, ML modern, dan emerging approaches.

## Setelah Pertemuan Ini

Mahasiswa mampu:

- Menjelaskan ide dasar generative modeling dan synthetic tabular data.
- Mengidentifikasi potensi dan keterbatasan tabular foundation models.
- Memahami peran LLM dalam data analysis, termasuk risiko metodologisnya.
- Menjelaskan federated learning dan privacy-preserving mining.
- Membedakan sekadar "menggunakan teknologi tren" dengan kontribusi ilmiah yang bermakna.

---

# Slide 04 - Performance Improvement vs Scientific Contribution

## Peringatan Utama

> Model baru yang lebih akurat belum tentu merupakan kontribusi ilmiah.

## Dua Pertanyaan Berbeda

| Performa | Kontribusi |
|---|---|
| Akurasi naik 2%? | Mengapa naik? |
| F1 lebih tinggi? | Pada kasus apa gagal? |
| Lebih baik dari baseline? | Apakah hasil generalizable? |
| Model lebih besar? | Apakah cost sebanding? |
| Cocok di dataset ini? | Pengetahuan baru apa yang diperoleh? |

## Implikasi

- Teknologi baru harus diuji secara adil.
- Perbaikan angka harus disertai analisis mekanisme dan batasannya.

---

# Slide 05 - Kerangka Berpikir Kritis untuk Emerging Methods

## Lima Pertanyaan Kunci

1. **Research question** — Apakah pertanyaannya jelas dan bermakna?
2. **Fair comparison** — Apakah baseline dituning sebaik metode baru?
3. **Attribution** — Apakah peningkatan dari metode, data, atau compute?
4. **Evidence** — Apakah klaim didukung oleh analisis statistik dan error analysis?
5. **Scientific insight** — Apakah hasilnya mengubah cara kita memahami data atau model?

## Prinsip

- Jangan terpesona oleh demografi teknologi.
- Nilai berdasarkan metodologi, bukan label "SOTA".

---

# Slide 06 - Generative Modeling: Dasar

## Definisi

Model generatif mempelajari distribusi data \( P(X) \), bukan hanya \( P(Y|X) \).

## Generative vs Discriminative

| Discriminative | Generative |
|---|---|
| Memodelkan batas keputusan | Memodelkan distribusi bersama |
| Prediksi \( P(Y|X) \) | Sampling \( X \) baru |
| Klasifikasi, regresi | Augmentasi, deteksi anomali, synthetic data |

## Mengapa Penting

- Data sintetis untuk augmentasi dan imbalance.
- Synthetic tabular data untuk privasi.
- Representasi latent untuk understanding data.

---

# Slide 07 - VAE, GAN, dan Diffusion

## Tiga Keluarga Besar

- **VAE** — Encoder-decoder, latent space, optimasi ELBO.
- **GAN** — Generator vs discriminator, adversarial training.
- **Diffusion** — Denoising bertahap dari noise ke data.

## Perbandingan

| Aspek | VAE | GAN | Diffusion |
|---|---|---|---|
| Stabilitas training | Sedang | Sulit | Relatif stabil |
| Kualitas sampel | Cukup | Tajam | Sangat baik |
| Mode collapse | Jarang | Ada | Jarang |
| Kecepatan sampling | Cepat | Cepat | Lambat |

## Relevansi pada Tabular

- Data tabular memiliki tipe campuran, missing values, dan distribusi non-normal.
- Model generatif perlu menangani fitur kategorikal dan numerik sekaligus.

---

# Slide 08 - Synthetic Tabular Data

## Motivasi

- **Privasi** — membagikan data sintetis tanpa membocorkan data asli.
- **Ketidakseimbangan** — menghasilkan sampel kelas minoritas.
- **Augmentasi** — memperbesar dataset terbatas.
- **Benchmarking** — menguji model tanpa data sensitif.

## Risiko

- Model sintetis dapat mempelajari noise atau pola palsu.
- Evaluasi fidelitas saja tidak cukup.
- Privasi tidak otomatis terjamin hanya karena data "sintetis".

## Pertanyaan Penelitian

> Apakah data sintetis mampu menggantikan data asli untuk training atau evaluasi?

---

# Slide 09 - Evaluasi Data Sintetis

## Tiga Dimensi Evaluasi

| Dimensi | Pertanyaan | Metrik/Contoh |
|---|---|---|
| Fidelity | Apakah sampel mirip data asli? | Distribusi, marginals, correlation distance |
| Utility | Apakah model yang dilatih pada data sintetis tetap berguna? | Downstream accuracy, F1, AUC |
| Privacy | Apakah data asli terlindungi? | Membership inference, nearest-neighbor distance |

## Diagram Evaluasi

```text
Data Asli ──> Generator ──> Data Sintetis
                              │
        ┌─────────────┬───────┴────────┐
        ▼             ▼                ▼
   Distribusi    Downstream        Privacy
   similarity    model eval        risk eval
```

---

# Slide 10 - Workflow Sintesis Data Tabular

## Alur Kerja

```text
1. Analisis data asli (EDA)
2. Preprocessing (encoding, scaling)
3. Training generative model
4. Sampling synthetic dataset
5. Evaluasi fidelity, utility, privacy
6. Iterasi 1-5
```

## Contoh Pseudocode (Python)

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

## Latih model generatif pada data training
## generator.fit(X_train)

## Sampel data sintetis
## X_syn = generator.sample(n_samples=len(X_train))

## Evaluasi: bandingkan model downstream
## model_real.fit(X_train, y_train)
## model_syn.fit(X_syn, y_train_syn)
## compare_metrics(model_real, model_syn, X_test, y_test)
```

## Catatan

- Selalu pisahkan data asli dan sintetis secara ketat saat evaluasi downstream.
- Laporkan varians sampling sintetis dengan beberapa seed.

---

# Slide 11 - Tabular Foundation Models

## Apa Itu

- Model pre-trained pada beragam tabel untuk memahami struktur tabular.
- Target: transfer learning, few-shot, zero-shot reasoning.

## Ide Dasar

- Tokenisasi sel, baris, atau kolom.
- Representasi kolom dan relasi antarkolom.
- Pre-training objectives: mask cell prediction, row reconstruction, schema understanding.

## Penelitian

- Apakah model semacam ini mengalahkan GBDT pada tabular?
- Apa biaya train/inference dan kebutuhan data?
- Bagaimana interpretability dibanding metode klasik?

---

# Slide 12 - Fondasi Model vs Baselines Kuat

## Hasil Empiris Sering Menunjukkan

- GBDT (XGBoost/LightGBM/CatBoost) tetap kuat.
- Foundation model unggul pada dataset besar dengan struktur kompleks.
- Keunggulan tidak selalu konsisten lintas dataset.

## Implikasi

- Benchmarking harus mencakup dataset beragam.
- Baseline harus di-tuning, bukan default saja.
- Ukur waktu training, inference, dan kebutuhan memori.

## Pertanyaan

> Kapan tabular foundation model benar-benar menjadi pilihan yang lebih baik, bukan sekadar alternatif?

---

# Slide 13 - Eksperimen Adil untuk Tabular Foundation Models

## Checklist

- [ ] Baseline GBDT di-tuning dengan hyperparameter optimization
- [ ] Dataset memiliki skala yang sesuai dengan asumsi foundation model
- [ ] Embedding dan tokenizer tidak menyebabkan data leakage
- [ ] Evaluasi menggunakan multiple seeds dan confidence interval
- [ ] Dilakukan cross-dataset generalization test
- [ ] Ablation terhadap komponen model (pre-training, fine-tuning, prompt)

## Kode Contoh: Multiple Seeds

```python
scores = []
for seed in [0, 1, 2, 3, 4]:
    model = BaselineModel(random_state=seed)
    model.fit(X_train, y_train)
    scores.append(evaluate(model, X_test, y_test))

print(f"Mean: {mean(scores):.4f} ± {std(scores):.4f}")
```

---

# Slide 14 - LLM for Table Understanding

## Tugas yang Diperkuat LLM

- **Table QA** — menjawab pertanyaan dari data tabel.
- **Schema linking** — menghubungkan kolom dengan semantik.
- **Data cleaning** — imputasi, deduplication, outlier detection.
- **Feature engineering** — menghasilkan fitur baru secara otomatis.
- **Natural language to pandas/SQL** — menerjemahkan permintaan menjadi kode.

## Kelebihan

- Zero-shot dan few-shot tanpa retraining.
- Menangkap konteks bahasa alami.

## Keterbatasan

- Tidak dirancang untuk statistik presisi tinggi.
- Halusinasi dapat menghasilkan angka atau kode salah.

---

# Slide 15 - In-Context Learning

## Definisi

Kemampuan model bahasa mempelajari pola dari contoh dalam prompt, tanpa update bobot.

```text
Zero-shot:  "Klaskan sentimen: 'Bagus sekali' ->"
Few-shot:   "Contoh: 'Luar biasa' -> positif.
            'Jelek' -> negatif.
            'Cukup memadai' ->"
```

## Mengapa Relevan

- Memungkinkan eksperimen cepat tanpa training.
- Digunakan untuk data mining pada tabel kecil dan data teks.

## Risiko

- Sensitif terhadap urutan dan pemilihan contoh.
- Tidak ada jaminan konsistensi.
- Hasil dapat sulit direproduksi.

---

# Slide 16 - LLM-Assisted Data Analysis Workflow

## Pipeline Umum

```text
Natural language question
       │
       ▼
Prompt construction
       │
       ▼
LLM generation (code / SQL / insight)
       │
       ▼
Execution / verification
       │
       ▼
Interpretation
```

## Prinsip Metodologis

- Setiap langkah harus dapat direproduksi.
- Validasi output kode dengan eksekusi.
- Dokumentasikan versi LLM dan suhu/temperature.
- Bandingkan dengan baseline analisis konvensional yang deterministik.

---

# Slide 17 - Contoh Prompt dan Konteks

## Prompt Sederhana

```text
Data: tabel dengan kolom age, income, churn.
Pertanyaan: "Apakah ada hubungan antara income dan churn?"

Tuliskan langkah analisis yang dapat dijalankan.
```

## Hasil yang Diinginkan

- Kode Python yang valid.
- Interpretasi statistik.
- Limitasi analisis.

## Evaluasi yang Harus Dilakukan

- Apakah kode menghasilkan output yang benar?
- Apakah interpretasi sesuai bukti statistik?
- Apakah replikasi dengan seed berbeda menghasilkan sama?

---

# Slide 18 - Risiko LLM-Assisted Analysis

## Data Leakage dan Reproducibility

- LLM mungkin "mengingat" dataset publik.
- Output bisa berubah antar versi model.
- Randomness pada sampling dapat mengubah hasil.

## Bias dan Validitas

- Prompt bias dapat memengaruhi analisis.
- Model dapat memberikan jawaban percaya diri tetapi salah.
- Tidak ada jaminan statistical soundness.

## Rekomendasi

- Gunakan sebagai alat eksplorasi, bukan pengganti metode statistik.
- Selalu verifikasi dengan prosedur klasik.
- Report model version, temperature, prompts, dan seed.

---

# Slide 19 - Federated Learning

## Definisi

Melatih model secara kolaboratif antar klien tanpa memusatkan data mentah.

## Arsitektur

```text
Server
  ▲    ▲    ▲
 c1   c2   c3
 |    |    |
D1   D2   D3
```

## Jenis

- **Horizontal Federated Learning** — fitur sama, sampel beda.
- **Vertical Federated Learning** — sampel sama, fitur beda.
- **Federated Transfer Learning** — domain berbeda.

## Tantangan

- Non-IID data antar klien.
- Komunikasi cost.
- Heterogenitas perangkat.
- Serangan poisoning.

---

# Slide 20 - Federated Learning: Pseudocode

## Prosedur Federated Averaging

```text
Inisialisasi model global w0

untuk t = 0, 1, ..., T:
    pilih subset klien
    untuk setiap klien terpilih:
        w_local = w_t
        untuk epoch lokal:
            w_local = update(w_local, data_klien)
        kirim w_local ke server
    w_{t+1} = rata-rata bobot klien
```

## Pertanyaan Penelitian

- Apakah agregasi bobot cukup untuk data tabular?
- Bagaimana menangani distribusi berbeda antar klien?
- Bagaimana mengukur kontribusi klien secara adil?

---

# Slide 21 - Privacy-Preserving Mining

## Teknik Utama

| Teknik | Gagasan | Contoh |
|---|---|---|
| Differential Privacy | Tambahkan noise terkalibrasi | DP-SGD |
| Secure Multiparty Computation | Komputasi bersama tanpa membuka data | Secure aggregation |
| Homomorphic Encryption | Operasi pada data terenkripsi | Encrypted inference |
| Synthetic data | Publikasikan data sintetis | GAN/VAE |

## Keterbatasan

- Trade-off privasi vs utilitas selalu ada.
- Implementasi kompleks dan mahal.
- Definisi privasi harus dijelaskan rigorus.

## Fokus Penelitian

> Bagaimana meminimalkan kebocoran privasi tanpa mengorbankan akurasi yang dapat dipertanggungjawabkan?

---

# Slide 22 - Differential Privacy dan Trade-off

## Ide Dasar

Suatu algoritma memenuhi DP jika output hampir tidak berubah ketika satu sampel diubah.

\[
Pr[\mathcal{M}(D) \in S] \le e^{\varepsilon} Pr[\mathcal{M}(D') \in S] + \delta
\]

## Trade-off

| Epsilon Kecil | Epsilon Besar |
|---|---|
| Privasi kuat | Privasi lemah |
| Noise besar | Noise kecil |
| Utilitas turun | Utilitas naik |

## Eksperimen yang Adil

- Bandingkan model DP versus non-DP pada kurva \(\varepsilon\).
- Ukur utility dalam skenario nyata, bukan hanya pada satu epsilon.
- Laporkan sensitivitas noise dan pengaruhnya terhadap metrik.

---

# Slide 23 - Causal Perspectives dalam Data Mining

## Tiga Level Pertanyaan

1. **Association** — Apakah X dan Y berhubungan?
2. **Intervention** — Apa efek X jika kita mengubahnya?
3. **Counterfactual** — Apa yang terjadi seandainya X berbeda?

## Pentingnya

- Feature importance berbasis korelasi belum tentu causal.
- Model prediktif dapat gagal ketika distribusi berubah karena intervensi.
- Causal inference memberikan landasan untuk decision making.

## Contoh

- Prediktif: "umur berpengaruh pada churn."
- Kausal: "menurunkan harga mengurangi churn?"
- Counterfactual: "jika pelanggan diberi diskon, apakah ia akan tetap?"

---

# Slide 24 - Metode Causal Inference

## Struktur Causal Model

```text
   Z (confounder)
  / \
 v   v
X --> Y
```

## Pendekatan

- **Do-calculus** — menganalisis efek intervensi.
- **Potential Outcomes** — membandingkan hasil potensial.
- **Structural Causal Model (SCM)** — memodelkan mekanisme variabel.

## Aplikasi Data Mining

- Feature selection berbasis kausal.
- Robust generalization di bawah distribution shift.
- Analisis bias dan fairness.

## Catatan

- Asumsi strong (mis. ignorability) harus dijustifikasi.
- Efek kausal tidak dapat diidentifikasi dari data observasional saja tanpa asumsi.

---

# Slide 25 - Kausal vs Prediktif: Perbandingan

| Pertanyaan | Machine Learning | Causal Inference |
|---|---|---|
| "Bagaimana memprediksi churn?" | Klasifikasi | Tidak langsung |
| "Apa efek diskon terhadap churn?" | Tidak cukup | Perlu intervensi |
| "Berapa churn jika semua pelanggan diberi diskon?" | Memerlukan asumsi | Counterfactual |
| Data historis | Cukup | Sering tidak cukup |

## Takeaways

- Pahami pertanyaan penelitian: prediksi atau keputusan?
- Jangan mencampur korelasi dan kausalitas dalam klaim.
- Gunakan causal language hanya jika desain mendukung.

---

# Slide 26 - Emerging Research Opportunities

## Area Belum Mapan

- Evaluasi yang adil untuk tabular foundation models.
- Synthetic tabular data untuk rare-event dan privacy.
- In-context learning untuk tabel dengan skema kompleks.
- Federated learning dengan data tabular heterogen.
- Privacy-preserving feature engineering.
- Causal discovery pada data tabular modern.

## Syarat Kontribusi Ilmiah

- Bukan hanya "menerapkan metode X pada dataset Y".
- Harus menghasilkan insight, metode, benchmark, atau teori baru.

---

# Slide 27 - Comparative Discussion: Tren vs Kontribusi

## Diskusi Kelas

Untuk setiap paper mutakhir, jawab:

1. Apa novelty sesungguhnya?
2. Apakah baseline cukup kuat?
3. Apakah eksperimen menjawab research question?
4. Apakah klaim terlalu luas?
5. Apa kontribusi yang bertahan setelah hype mereda?

## Contoh Pola Lemah

```text
"Kami menggunakan LLM untuk melakukan klasifikasi.
Hasil: accuracy 0.90."
```

## Contoh Pola Kuat

```text
"Kami menganalisis kapan LLM outperforms GBDT
dalam klasifikasi tabular dan menemukan faktor X,
dengan ablasi dan evaluasi pada 15 dataset."
```

---

# Slide 28 - Checklist Menilai Klaim Emerging Methods

## Checklist

- [ ] Ada research question yang spesifik
- [ ] Baseline bukan sekadar default
- [ ] Ada ablasi terhadap komponen baru
- [ ] Ada analisis sensitivitas terhadap hyperparameter
- [ ] Evaluasi mencakup dataset beragam
- [ ] Ada uji statistik atau confidence interval
- [ ] Kompleksitas komputasi dilaporkan
- [ ] Reproducibility: seed, kode, environment

## Kesimpulan

- Checklist ini juga berlaku untuk final research project.
- Pertemuan 15 akan merinci argumen ilmiah dari evidence.

---

# Slide 29 - Final Experiment dan Deep Analysis

## Pada Pertemuan 14, Research Project Ditargetkan

- **Final experiment** — eksperimen utama dengan konfigurasi final.
- **Ablation study** — menguji kontribusi tiap komponen metode.
- **Sensitivity analysis** — menguji stabilitas terhadap hyperparameter/data.
- **Statistical analysis** — uji signifikansi dan interval konfidensi.

## Peringatan

- Jangan melakukan banyak eksperimen tanpa hipotesis.
- Gunakan pre-registered analysis plan.
- Simpan semua konfigurasi dan seed.

---

# Slide 30 - Contoh Desain Eksperimen

## Tabel Rancangan

| Kelompok | Metode | Dataset | Metric | Baseline |
|---|---|---|---|---|
| Utama | Proposed | D1, D2, D3 | F1, AUC | GBDT tuned |
| Ablasi | - Komponen A | D1 | F1 | Proposed full |
| Sensitivitas | Hyperparameter | D1 | F1 | Range tertentu |
| Generalisasi | Proposed | D4 (cross-domain) | AUC | Baseline |

## Prinsip

- Fokus pada satu pertanyaan utama.
- Ablasi menjawab "mengapa metode bekerja".
- Sensitivitas menjawab "apakah hasil stabil".

---

# Slide 31 - Statistical Analysis: Pseudocode

## Contoh: Bootstrap Confidence Interval

```text
fungsi bootstrap_ci(model, X_test, y_test, n_iter=1000):
    scores = []
    untuk i dalam n_iter:
        sampel_index = random_choice(len(X_test), replace=True)
        X_boot = X_test[sampel_index]
        y_boot = y_test[sampel_index]
        scores.append(metric(model, X_boot, y_boot))
    return quantile(scores, 0.025), quantile(scores, 0.975)
```

## Contoh: Uji Signifikansi

```text
H0: tidak ada perbedaan performa antara A dan B
Gunakan paired bootstrap atau Wilcoxon signed-rank
p-value < 0.05 -> tolak H0
```

## Laporan

- Sertakan effect size.
- Jangan hanya mengandalkan p-value.

---

# Slide 32 - Menuju Pertemuan 15

## Setelah Hasil Terkumpul

- Pertemuan 15 membahas bagaimana mengubah hasil menjadi klaim ilmiah.
- Perlu dibedakan: statistical significance vs practical significance.
- Error analysis dan failure cases menjadi bahan diskusi utama.

## Yang Dipersiapkan

- Ringkasan eksperimen utama.
- Output ablasi/sensitivitas.
- Analisis error/kasus gagal.
- Draft interpretasi temuan.

---

# Slide 33 - Studi Kasus: Evaluasi Synthetic Tabular Data

## Pertanyaan

> Apakah model yang dilatih pada data sintetis memiliki performa setara dengan model yang dilatih pada data asli?

## Langkah

1. Latih model generatif pada training set asli.
2. Sampel data sintetis sejumlah training set.
3. Latih classifier pada: data asli, data sintetis, data campuran.
4. Evaluasi pada test set asli.
5. Ulangi dengan beberapa seed.

## Contoh Interpretasi

```text
Jika data sintetis hanya mencapai 80% akurasi data asli,
termasuk apakah ini kontribusi ilmiah?
Jawab: tergantung konteks privasi atau kelangkaan data.
```

---

# Slide 34 - Studi Kasus: LLM-Assisted Feature Engineering

## Tujuan

Membandingkan fitur buatan LLM dengan fitur manual atau auto-featurization konvensional.

## Desain

- Dataset tabular dengan target klasifikasi.
- Bangun baseline: fitur asli + GBDT.
- Treatment: fitur tambahan dari LLM + GBDT.
- Evaluasi: cross-validation berulang, multiple seeds.

## Ukuran yang Dilaporkan

- Performa (AUC/F1) dan selisihnya.
- Waktu dan biaya API.
- Stabilitas antar prompt dan iterasi.
- Apakah fitur yang dihasilkan interpretable dan dapat dipertanggungjawabkan?

---

# Slide 35 - Aktivitas Pertemuan 14

## Kuliah dan Diskusi

- Presentasi konsep emerging methods.
- Seminar paper mutakhir oleh mahasiswa.
- Comparative discussion: tren vs scientific contribution.

## Praktik

- Analisis paper: identifikasi klaim, baseline, dan evidence.
- Mini reproduction: jalankan eksperimen sederhana untuk menguji klaim.

## Output

- Rekomendasi riset arah baru yang beralasan.
- Critical review singkat pada paper terpilih.

---

# Slide 36 - Checkpoint Research Project

## Status yang Diharapkan

- Final experiment telah dijalankan.
- Ablation/sensitivitas minimal sebagian selesai.
- Statistical analysis mulai dikerjakan.
- Interpretasi awal hasil tersedia.

## Jika Belum

- Prioritaskan eksperimen inti yang menjawab RQ.
- Jangan menambah fitur baru.
- Dokumentasikan apa pun yang sudah dilakukan.

## Yang Dinilai

- Hubungan antara hasil dan RQ.
- Kedalaman analisis, bukan jumlah model.
- Kesiapan untuk menulis full paper pada pertemuan 15.

---

# Slide 37 - Penutup

TERIMA KASIH

Pertemuan berikutnya

**From Experimental Results to Scientific Contribution**