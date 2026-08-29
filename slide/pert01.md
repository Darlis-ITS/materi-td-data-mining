# Slide 00 - Cover

EF235161 - TD Data Mining
Pertemuan 01
# Modern Data Mining & Research Landscape

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D

Departemen Teknik Informatika - ITS

---

# Slide 01 - Tujuan Pembelajaran dan Peta Pertemuan

## Tujuan Pertemuan 01

1. Memahami posisi Data Mining dalam ekosistem ilmu data modern.
2. Membedakan Data Mining, KDD, Machine Learning, dan Data Science.
3. Menjelaskan proses knowledge discovery.
4. Menguraikan perkembangan Data Mining dari pendekatan klasik hingga modern.
5. Memetakan research landscape Data Mining.
6. Membedakan *engineering problem* dan *research problem*.
7. Membedakan *performance improvement* dan *scientific contribution*.

## Hasil Belajar Langsung

- Mahasiswa mampu menjelaskan mengapa sebuah hasil akurasi tinggi belum tentu merupakan kontribusi ilmiah.
- Mahasiswa mulai mengidentifikasi **2–3 candidate research area** untuk research project.

---

# Slide 02 - Posisi Pertemuan 1 dalam RPS

## Alur Mata Kuliah EF235161

- **Sebelumnya:** tidak ada.
- **Saat ini:** fondasi konseptual Data Mining dan arah penelitian.
- **Berikutnya:** EDA, preprocessing, dan experimental validity.

## Mengapa Pertemuan 1 Menentukan Arah Satu Semester?

- Seluruh pertemuan berikutnya menggunakan kerangka berpikir yang sama:

```text
Problem → Literature → Gap → RQ → Baseline → Method → Experiment → Evidence → Contribution
```

- Pertemuan 2–7 membangun fondasi teknis dan eksperimen.
- Pertemuan 8–16 mengarahkan mahasiswa pada critical review, riset, dan paper.

---

# Slide 03 - Definisi Data Mining

## Data Mining dalam Satu Kalimat

> Proses menemukan pola, hubungan, struktur, atau pengetahuan yang berguna dari data dalam jumlah besar secara otomatis atau semiotomatis.

## Karakteristik Utama

- Bekerja pada data yang tersedia, bukan data yang dikumpulkan khusus untuk eksperimen terkontrol.
- Menekankan pada penemuan pola yang tidak sepele.
- Hasil harus dapat ditafsirkan dan digunakan untuk pengambilan keputusan atau penelitian lanjutan.
- Melibatkan pembersihan data, transformasi, pemodelan, evaluasi, dan interpretasi.

## Perhatian Penting

Data Mining bukan sekadar menjalankan algoritma. Data Mining adalah proses ilmiah yang membutuhkan pemahaman data dan konteks masalah.

---

# Slide 04 - Knowledge Discovery in Databases (KDD)

## KDD sebagai Proses Menyeluruh

KDD adalah rangkaian proses untuk mengubah data mentah menjadi pengetahuan yang valid, berguna, dan dapat dipahami.

## Tahapan KDD

1. Data selection
2. Data preprocessing
3. Data transformation
4. Data mining
5. Interpretation and evaluation

## Posisi Data Mining dalam KDD

- Data Mining adalah salah satu langkah inti dalam KDD.
- Data Mining berfokus pada penerapan algoritma untuk mengekstraksi pola.
- KDD mencakup konteks yang lebih luas, termasuk memahami domain dan memvalidasi pengetahuan.

---

# Slide 05 - Hubungan AI, Machine Learning, Data Mining, dan Data Science

## Istilah yang Sering Tertukar

- **Artificial Intelligence:** bidang luas tentang agen cerdas dan kemampuan meniru kognitif manusia.
- **Machine Learning:** cabang AI yang belajar pola dari data melalui model.
- **Data Mining:** penemuan pola dan pengetahuan dari data, beririsan kuat dengan machine learning dan statistik.
- **Data Science:** disiplin yang mengintegrasikan statistik, komputasi, domain knowledge, dan komunikasi untuk menghasilkan wawasan dari data.

## Inti Perbedaan

```text
AI          : kemampuan meniru dan melakukan tugas cerdas
ML          : belajar dari data untuk membuat prediksi/keputusan
DM          : menemukan pola dan pengetahuan baru dari data
Data Science: proses lengkap dari data hingga wawasan dan produk data
```

---

# Slide 06 - Perbandingan: Data Mining vs Machine Learning vs Data Science

| Aspek | Data Mining | Machine Learning | Data Science |
|---|---|---|---|
| Tujuan utama | Menemukan pola dan pengetahuan | Membangun model prediktif | Menjawab masalah bisnis/penelitian dengan data |
| Fokus | Discovery, deskripsi, prediksi | Learning dari data | Siklus data, produk, dan keputusan |
| Metode umum | Association, clustering, classification | Supervised, unsupervised, reinforcement | EDA, modeling, evaluation, deployment |
| Luaran | Pola, aturan, insight | Model, prediksi | Insight, rekomendasi, sistem data |
| Hubungan | Memanfaatkan teknik ML dan statistik | Sebagian teknik menjadi alat DM | Memayungi DM dan ML |

Data Mining dan Machine Learning saling tumpang tindih, tetapi bukan berarti identik. Data Mining menekankan penemuan pengetahuan; Machine Learning menekankan kemampuan belajar dan generalisasi model.

---

# Slide 07 - Predictive vs Descriptive Mining

## Predictive Mining

- Membangun model untuk memprediksi nilai atau label data baru.
- Contoh: klasifikasi, regresi, anomaly score.
- Evaluasi menggunakan metrik prediktif seperti accuracy, precision, recall, F1, RMSE.

## Descriptive Mining

- Menemukan pola, struktur, atau relasi yang mendeskripsikan data.
- Contoh: clustering, association rules, frequent pattern.
- Evaluasi lebih bersifat interpretatif dan bergantung pada konteks domain.

## Implikasi Penelitian

Pilihan *predictive* atau *descriptive* menentukan jenis research question, metode, evaluasi, dan kontribusi ilmiah yang dapat dihasilkan.

---

# Slide 08 - Contoh Predictive dan Descriptive

| Pendekatan | Pertanyaan yang Dijawab | Metode Umum | Contoh Luaran |
|---|---|---|---|
| Predictive | Apakah transaksi ini fraud? | Logistic Regression, Random Forest, XGBoost | Skor probabilitas fraud |
| Predictive | Berapa permintaan energi esok hari? | Regression, time series model | Nilai ramalan |
| Descriptive | Bagaimana segmen pelanggan terbentuk? | K-Means, DBSCAN, hierarchical clustering | Profil cluster |
| Descriptive | Produk apa yang sering dibeli bersamaan? | Apriori, FP-Growth | Association rules |

Keduanya dapat digunakan dalam satu penelitian, misalnya *clustering untuk memahami struktur data*, kemudian *klasifikasi untuk membangun prediksi berbasis struktur tersebut*.

---

# Slide 09 - Workflow Proses Knowledge Discovery

```text
Data mentah
   ↓
Seleksi data
   ↓
Preprocessing
   ↓
Transformasi / Feature Engineering
   ↓
Data Mining
   ↓
Interpretasi & Evaluasi
   ↓
Pengetahuan / Kontribusi ilmiah
   ↑
Umpan balik dari evaluasi
```

Proses ini bersifat iteratif. Jika hasil tidak valid atau tidak bermakna, peneliti kembali ke preprocessing, transformasi, atau bahkan seleksi data.

---

# Slide 10 - Peta Research Landscape Data Mining

## Empat Pilar Utama

1. **Data Understanding & Preparation:** EDA, preprocessing, feature engineering.
2. **Core Mining Methods:** pattern mining, classification, regression, clustering, anomaly detection.
3. **Advanced & Representation Learning:** deep tabular learning, graph mining, temporal modeling.
4. **Trustworthy & Responsible Mining:** explainability, fairness, privacy, robustness.

## Research Landscape Meliputi

- Metode, algoritma, dan teori.
- Masalah terapan di berbagai domain.
- Karakteristik data seperti tabular, graph, teks, temporal, streaming.
- Aspek evaluasi, reproduksibilitas, dan dampak sosial.

Research landscape membantu peneliti menemukan posisi pertanyaan penelitiannya.

---

# Slide 11 - Perkembangan Data Mining: dari Klasik ke Modern

| Era | Karakteristik | Contoh Fokus |
|---|---|---|
| Klasik | Pola sederhana, data tabular kecil | Association rules, decision tree, k-means |
| Machine Learning | Evaluasi model, feature engineering | SVM, Random Forest, boosting |
| Deep Learning | Representasi otomatis, data besar | Neural networks, embedding, self-supervised learning |
| Modern Emerging | Model besar, multimodal, privacy-aware | Tabular foundation models, graph neural networks, federated learning |

Perkembangan ini tidak menggantikan metode klasik. Metode klasik tetap penting sebagai baseline dan kerangka berpikir.

---

# Slide 12 - Topik Modern Data Mining

## Area yang Menjadi Perhatian Saat Ini

- Advanced tabular learning dan perbandingan tree-based vs neural models.
- AutoML dan hyperparameter optimization.
- Self-supervised learning untuk data tabular.
- Graph mining dan Graph Neural Networks.
- Temporal, streaming data, dan concept drift.
- Explainable AI dan trustworthy Data Mining.
- Federated learning dan privacy-preserving learning.
- Synthetic tabular data dan generative models.
- Tabular / foundation models.

## Pertanyaan Kritis

> Apakah metode baru benar-benar membuka pengetahuan baru, atau hanya memindahkan masalah ke kompleksitas komputasi yang lebih tinggi?

---

# Slide 13 - Keterkaitan dengan CPMK-1 dan CPMK-2

## CPMK-1 — Konsep dan Metode Data Mining

Menganalisis konsep, algoritma, dan perkembangan modern Data Mining, termasuk asumsi, kelebihan, keterbatasan, dan kondisi penggunaan.

## CPMK-2 — Critical Literature Analysis

Mengevaluasi secara kritis penelitian Data Mining berdasarkan problem, gap, metodologi, eksperimen, evidence, validity, limitation, dan scientific contribution.

## Dampak pada Pertemuan Ini

- Mahasiswa tidak hanya menerima daftar metode.
- Mahasiswa mulai melatih cara membaca paper sebagai peneliti.
- Pemahaman research landscape menjadi dasar untuk critical review pada pertemuan 8 dan research project sepanjang semester.

---

# Slide 14 - Research Project dalam Mata Kuliah Ini

## Luaran Utama

Paper penelitian yang diarahkan pada international conference terindeks Scopus.

## Bentuk Penelitian yang Diperbolehkan

- Comparative study.
- Method improvement.
- Representation, benchmarking, explainability, robustness, generalization, atau efficiency study.
- Evaluasi metode emerging seperti foundation model, graph learning, streaming, atau privacy-preserving learning.

## Progress Minggu 1

> Identifikasi 2–3 candidate research area yang ingin didalami sepajang semester.

Tidak perlu langsung menentukan metode atau dataset. Fokus adalah memilih area yang cukup luas tetapi terarah.

---

# Slide 15 - Engineering Problem vs Research Problem

## Engineering Problem

- Masalah teknis yang solusinya dapat langsung diimplementasikan.
- Kriteria sukses: sistem berjalan, kebutuhan terpenuhi, performa cukup.
- Contoh: membangun dashboard prediksi penjualan.

## Research Problem

- Masalah yang membutuhkan penyelidikan untuk menghasilkan pengetahuan baru.
- Kriteria sukses: ada klaim yang dapat diuji, evidence yang valid, dan kontribusi ilmiah.
- Contoh: mengapa model tertentu lebih unggul pada data dengan missing value yang tidak seragam?

## Perbedaan Kunci

Engineering problem menjawab **“bagaimana membuat sesuatu bekerja”**.
Research problem menjawab **“apa yang belum diketahui dan bagaimana membuktikannya”**.

---

# Slide 16 - Contoh Perbandingan Masalah Teknik dan Masalah Penelitian

| Aspek | Engineering Problem | Research Problem |
|---|---|---|
| Pertanyaan | Bagaimana membangun sistem klasifikasi email spam? | Bagaimana pengaruh label noise terhadap peringkat pentingnya fitur? |
| Luaran | Sistem yang berfungsi | Klaim ilmiah yang didukung evidence |
| Evaluasi | Akurasi, kecepatan, kepuasan pengguna | Validitas, generalisasi, signifikansi |
| Kontribusi | Produk atau solusi teknis | Pengetahuan, metode, insight baru |
| Risiko | Gagal memenuhi kebutuhan | Gagal membuktikan klaim atau tidak ada novelty |

Mata kuliah ini menekankan research problem, bukan sekadar engineering solution.

---

# Slide 17 - Merumuskan Research Problem dan Research Gap

## Research Problem

Pernyataan tentang fenomena atau keterbatasan yang belum terpecahkan.

## Research Gap

Kesenjangan antara penelitian yang sudah ada dengan apa yang seharusnya diketahui atau dilakukan.

## Contoh Kerangka Pikir

```text
Hasil-hasil penelitian sebelumnya?
Keterbatasan metode atau dataset?
Asumsi yang belum diuji?
Perilaku yang belum dijelaskan?
Kebutuhan domain yang belum terpenuhi?
```

## Output pada Tahap Ini

- 2–3 candidate research area.
- Calon permasalahan yang layak diteliti.
- Arah literatur yang perlu dibaca.

---

# Slide 18 - Research Question dan Hipotesis

## Research Question (RQ)

Pertanyaan jelas yang dapat dijawab melalui data dan eksperimen.

## Ciri RQ yang Baik

- Spesifik dan terukur.
- Berhubungan dengan gap.
- Dapat diuji secara empiris.
- Memberikan arah untuk memilih dataset, metode, dan metrik.

## Hipotesis

Pernyataan awal yang dapat disangkal atau didukung oleh bukti eksperimen.

## Contoh Pola RQ

- Seberapa besar peningkatan generalisasi jika ...?
- Kondisi seperti apa yang membuat metode X lebih unggul daripada Y?
- Apakah interpretasi model berubah ketika distribusi data bergeser?

---

# Slide 19 - Performance Improvement vs Scientific Contribution

## Performance Improvement

- Hasil eksperimen menunjukkan angka lebih tinggi daripada metode lain.
- Contoh: F1 naik dari 0.90 menjadi 0.92.

## Scientific Contribution

- Memberikan pengetahuan, metode, konsep, teori, atau insight baru yang dapat digunakan peneliti lain.
- Contoh: menjelaskan mengapa metode lebih unggul pada data dengan ketidakseimbangan tinggi.

## Pertanyaan Pembeda

- Apakah peningkatan tersebut konsisten?
- Apakah peningkatan tersebut signifikan secara statistik?
- Apakah penyebab peningkatan dapat dijelaskan?
- Apakah hasil dapat digeneralisasi?
- Apakah komunitas ilmiah memperoleh hal yang sebelumnya tidak diketahui?

---

# Slide 20 - Ilustrasi: Accuracy Naik tetapi Kontribusi Lemah

## Skenario

Sebuah paper mengklaim:

> Model neural network mencapai akurasi 98%, sedangkan Random Forest 96%.

## Masalah

- Dataset terlalu kecil.
- Hanya satu dataset digunakan.
- Tidak ada ablasi komponen.
- Tidak ada analisis error.
- Tidak ada perbandingan komputasi.
- Klaim tidak disertai pemahaman mengapa neural network menang.

## Kesimpulan

Peningkatan akurasi 2% belum tentu bermakna. Tanpa analisis yang mendalam, temuan tersebut hanya *performance improvement*, bukan *scientific contribution*.

---

# Slide 21 - Pola Klaim Ilmiah yang Kuat vs Lemah

| Klaim Lemah | Klaim yang Lebih Kuat |
|---|---|
| Metode kami lebih baik. | Metode kami lebih unggul pada dataset dengan jumlah sampel kecil dan fitur kategorikal tinggi karena ... |
| Akurasi meningkat. | Peningkatan F1 konsisten pada lima dataset dan signifikan secara statistik. |
| Model deep learning bagus. | Deep tabular model lebih baik saat terdapat interaksi non-linear antar fitur, tetapi lebih mahal secara komputasi. |
| Hasil menunjukkan performa terbaik. | Keunggulan performa hilang ketika data memiliki missing value tidak acak. |

Ilmuwan data yang baik tidak hanya melaporkan angka, tetapi menjelaskan kondisi dan keterbatasan.

---

# Slide 22 - Critical International Paper Review sebagai Strategi Belajar

## Mengapa Review Paper?

- Melatih membaca penelitian dengan standar ilmiah.
- Menemukan gap antara klaim dan evidence.
- Menyusun critical thinking yang menjadi dasar riset sendiri.

## Struktur Review yang Digunakan Sepanjang Semester

1. Research context
2. Research gap
3. Research question
4. Proposed method
5. Dataset
6. Baseline
7. Experimental design
8. Evaluation
9. Results and evidence
10. Ablation / sensitivity
11. Limitations
12. Reproducibility
13. Scientific contribution
14. Research opportunity

## Aktivitas di Kelas

Pembahasan contoh paper Data Mining modern untuk mengidentifikasi bagian-bagian tersebut.

---

# Slide 23 - Metodologi Penelitian Data Mining

## Alur Penelitian yang Sehat

```text
Research Problem
  ↓
Literature Review
  ↓
Research Gap
  ↓
Research Question
  ↓
Hypothesis
  ↓
Dataset Selection + EDA
  ↓
Baseline + Proposed Method
  ↓
Experimental Design
  ↓
Experiment + Evidence
  ↓
Analysis / Failure / Robustness
  ↓
Scientific Finding
  ↓
Paper
```

Alur ini menjadi tulang punggung penelitian mahasiswa pada minggu 1–16.

---

# Slide 24 - Desain Eksperimen yang Valid

## Komponen Eksperimen yang Adil

- Dataset representatif terhadap research question.
- Preprocessing yang sama untuk semua metode.
- Hyperparameter tuning dicatat dan dilakukan secara adil.
- Cross-validation atau split yang tidak bocor.
- Metric sesuai dengan karakteristik data.

## Evaluasi yang Dianjurkan

- Statistical significance.
- Confidence interval.
- Multiple dataset.
- Ablation study.
- Sensitivity analysis.
- Computational cost.
- Error / failure analysis.

## Catatan Penting

Desain eksperimen harus dapat direplikasi oleh peneliti lain.

---

# Slide 25 - Dataset, Baseline, dan Metrik

## Dataset

- Dipilih karena relevan dengan RQ, bukan karena mudah menang.
- Karakteristik data harus dianalisis sejak awal.

## Baseline

- Metode sederhana tetapi kuat.
- Contoh: Logistic Regression, Linear Regression, Decision Tree, K-Means.
- Baseline diperlukan untuk menguji apakah metode baru benar-benar unggul.

## Metrik

- Klasifikasi: accuracy, precision, recall, F1, ROC-AUC, PR-AUC.
- Regresi: MAE, RMSE, R².
- Clustering: silhouette, internal/external validity.
- Anomaly detection: precision at k, AUC, recall pada rare class.

Pemilihan metrik harus disesuaikan dengan pertanyaan dan data.

---

# Slide 26 - Strong Baseline dan Fair Comparison

## Mengapa Baseline Harus Kuat?

- Mencegah klaim berlebihan tentang metode baru.
- Memberikan batas bawah yang wajar.
- Menunjukkan bahwa improvement benar-benar berasal dari kontribusi metode, bukan karena baseline yang sengaja dibuat lemah.

## Prinsip Fair Comparison

- Gunakan tuning yang sebanding.
- Gunakan preprocessing yang sama.
- Gunakan jumlah evaluasi yang serupa.
- Laporkan variansi hasil.

## Contoh Tuning yang Tidak Fair

```text
Metode baru : tuning 100 iterasi Optuna
Baseline    : default scikit-learn tanpa tuning
```

Hasil yang tidak fair akan mengurangi kredibilitas penelitian.

---

# Slide 27 - Reproducibility dan Experimental Validity

## Reproducibility

Peneliti lain harus dapat menjalankan ulang eksperimen dan memperoleh hasil yang kurang lebih sama.

## Praktik Dasar

- Tetapkan random seed.
- Simpan versi library.
- Catat konfigurasi hyperparameter.
- Gunakan pipeline yang terdokumentasi.
- Simpan data yang sudah diproses jika memungkinkan.

## Contoh Python

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
```

Random seed bukan jaminan reproducibility mutlak, tetapi langkah awal yang penting.

---

# Slide 28 - Eksplorasi Research Landscape: Pertanyaan Panduan

## Pertanyaan untuk Memetakan Area

- Apa masalah utama di bidang ini?
- Data apa yang digunakan?
- Metode apa yang dominan?
- Apa keterbatasan metode tersebut?
- Apa dataset dan baseline yang menjadi rujukan?
- Apa peluang penelitian yang belum dijawab?

## Cara Menjawab

- Baca 3–5 paper terkini dari venue bereputasi.
- Buat tabel perbandingan paper.
- Catat istilah yang belum dipahami.
- Cari tahu metode baseline yang digunakan.

Luaran eksplorasi ini bukan ringkasan paper, tetapi peta masalah dan celah penelitian.

---

# Slide 29 - Area Riset Data Mining yang Relevan

| Area Riset | Fokus Utama |
|---|---|
| Advanced tabular learning | Membandingkan tree-based dan neural models |
| Graph mining & GNN | Node classification, link prediction, community detection |
| Temporal & streaming | Concept drift, online learning, time series |
| AutoML & HPO | Otomasi desain model dan tuning |
| Explainable & trustworthy | Interpretability, fairness, robustness |
| Privacy-preserving | Federated learning, synthetic data |
| Foundation models | Tabular foundation models, LLM for table understanding |
| Data-centric mining | Karakterisasi dataset, data quality, feature engineering |

Mahasiswa dapat memilih 2–3 area untuk dieksplorasi lebih lanjut.

---

# Slide 30 - Research Project: Identifikasi 2–3 Candidate Research Area

## Tugas Minggu Ini

Pilih **2–3 candidate research area** untuk research project.

## Format yang Diharapkan

| Candidate | Deskripsi Area | Alasan Pemilihan | Pertanyaan Awal |
|---|---|---|---|
| 1 | ... | ... | ... |
| 2 | ... | ... | ... |
| 3 | ... | ... | ... |

## Tips

- Pilih area yang menyenangkan dan relevan dengan latar belakang.
- Pastikan area cukup tersedia dataset publik.
- Hindari area yang terlalu luas tanpa fokus.
- Diskusikan dalam kelas untuk memperoleh umpan balik awal.

---

# Slide 31 - Aktivitas Pertemuan 1 dan Luaran

## Aktivitas

- Kuliah interaktif dan diskusi.
- Eksplorasi research landscape.
- Pembahasan contoh paper Data Mining modern.
- Diskusi perbedaan engineering problem dan research problem.

## Bukti Belajar

- Partisipasi aktif dalam diskusi.
- Catatan eksplorasi research landscape.
- Rancangan 2–3 candidate research area.

## Target Sebelum Pertemuan 2

- Membaca satu paper singkat dari area yang diminati.
- Menyiapkan pertanyaan tentang EDA, preprocessing, atau validitas eksperimen.

---

# Slide 32 - Tools dan Lingkungan Eksperimen

## Bahasa Pemrograman

- Python.

## Tools Utama

| Fungsi | Library |
|---|---|
| Data manipulation | pandas, NumPy |
| Visualisasi & EDA | Matplotlib, Seaborn, ydata-profiling |
| Machine learning | scikit-learn |
| Gradient boosting | XGBoost, LightGBM, CatBoost |
| Hyperparameter tuning | Optuna |
| AutoML | AutoGluon |
| Explainability | SHAP |
| Deep learning | PyTorch |
| Graph learning | PyTorch Geometric, NetworkX |
| Experiment tracking | MLflow / Weights & Biases |
| Notebook | Jupyter, Google Colab |

## Catatan

Tools adalah alat, bukan tujuan penelitian. Pemilihan tools harus mengikuti kebutuhan eksperimen.

---

# Slide 33 - Jembatan ke Pertemuan 2: EDA, Preprocessing, dan Validitas Eksperimen

## Mengapa Pertemuan 2 Krusial?

- Data yang tidak dipahami akan menghasilkan eksperimen yang menyesatkan.
- EDA bukan sekadar membuat grafik, tetapi memahami struktur dan masalah data.
- Preprocessing memengaruhi keadilan perbandingan antar metode.
- Validitas eksperimen menentukan apakah klaim ilmiah dapat dipercaya.

## Yang Akan Datang

- Dataset profiling.
- Missing values, outliers, imbalance.
- Data leakage dan dataset bias.
- Train/validation/test split.
- Cross-validation.
- Praktikum 1: EDA terstruktur dan experimental pipeline.

---

# Slide 34 - Ringkasan

## Poin Utama Pertemuan 01

- Data Mining adalah bagian dari proses KDD, bukan sekadar kumpulan algoritma.
- Predictive dan descriptive mining memiliki tujuan dan evaluasi yang berbeda.
- Perkembangan Data Mining bergerak dari metode klasik menuju model yang lebih kompleks dan modern.
- Research landscape membantu menemukan posisi penelitian dan gap.
- Engineering problem berbeda dengan research problem.
- Peningkatan performa belum tentu kontribusi ilmiah.
- Scientific contribution harus didukung oleh evidence, analisis, dan kejelasan manfaat pengetahuan baru.

## Aksi Setelah Kelas

Identifikasi 2–3 candidate research area untuk dibawa ke pertemuan berikutnya.

---

# Slide 35 - Referensi Utama

## Buku Utama

- Han, Pei, dan Tong. *Data Mining: Concepts and Techniques*.
- Tan, Steinbach, Karpatne, dan Kumar. *Introduction to Data Mining*.
- Witten, Frank, Hall, dan Pal. *Data Mining: Practical Machine Learning Tools and Techniques*.
- Leskovec, Rajaraman, dan Ullman. *Mining of Massive Datasets*.

## Buku Pendukung Modern

- Géron. *Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow*.
- Murphy. *Probabilistic Machine Learning: An Introduction*.
- Hamilton. *Graph Representation Learning*.
- Molnar. *Interpretable Machine Learning*.

## Referensi Venue

Paper terkini dapat dicari pada KDD, ICDM, SDM, CIKM, WWW, AAAI, NeurIPS, ICML, ICLR, TKDE, dan Data Mining and Knowledge Discovery.

---

# Slide 36 - Penutup

TERIMA KASIH

Pertemuan berikutnya

**Exploratory Data Analysis (EDA), Data Preprocessing & Experimental Validity**