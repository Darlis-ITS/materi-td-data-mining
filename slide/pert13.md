# Slide 00 - Cover

EF235161 - TD Data Mining

Pertemuan 13

## Explainable, Trustworthy & Responsible Data Mining

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D

Departemen Teknik Informatika - ITS

---

# Slide 01 - Agenda dan Peta Pertemuan

## Agenda Pertemuan 13

- Memahami posisi explainable, trustworthy, dan responsible data mining dalam penelitian data mining.
- Menguasai konsep interpretability vs explainability, global vs local explanation.
- Mempelajari metode SHAP, LIME, dan counterfactual explanation.
- Memahami aspek trustworthiness: robustness, fairness, dataset bias, dan privacy.
- Mempraktikkan prediction + SHAP analysis + error analysis + failure-case analysis (Praktikum 6).
- Menghubungkan materi dengan research project: robustness, explainability, dan error analysis.

## Peta RPS

| Pertemuan | Topik |
|---|---|
| 12 (sebelumnya) | Temporal, Streaming Data & Concept Drift |
| **13 (saat ini)** | **Explainable, Trustworthy & Responsible Data Mining** |
| 14 (berikutnya) | Emerging Data Mining: Foundation Models, Generative & Privacy-Preserving Learning |

---

# Slide 02 - Tujuan Pembelajaran dan CPMK

## Capaian Pembelajaran Mata Kuliah

Pertemuan 13 mendukung tiga CPMK utama:

- **CPMK-2** — Critical Literature Analysis: mengevaluasi secara kritis penelitian data mining, termasuk aspek explainability dan trustworthiness.
- **CPMK-4** — Experimental Data Mining Research: merancang eksperimen yang valid, termasuk evaluasi penjelasan model dan analisis kegagalan.
- **CPMK-5** — Analisis Metode Modern: membandingkan metode berdasarkan interpretability, robustness, fairness, dan generalization.

## Tujuan Khusus

1. Mahasiswa mampu membedakan interpretability, explainability, dan responsibility dalam konteks data mining.
2. Mahasiswa mampu menggunakan SHAP dan LIME untuk analisis prediksi.
3. Mahasiswa mampu melakukan error analysis dan failure-case analysis secara sistematis.
4. Mahasiswa memahami dimensi trustworthiness: robustness, fairness, bias, dan privacy.

---

# Slide 03 - Recap: Perjalanan Penelitian Data Mining

## Dari Pertemuan Sebelumnya

```text
Pertemuan 1-7          Pertemuan 8-12              Pertemuan 13
Fondasi & metode  →  Deep learning, AutoML,   →  Mempertanyakan:
klasik                graph, temporal              mengapa model
                                                    membuat prediksi?
```

- Pertemuan 12 membahas **concept drift**: model yang performanya menurun karena distribusi data berubah.
- Pertemuan 13 melanjutkan pertanyaan kritis: **kapan model dapat dipercaya?**
- Pertemuan 14 akan membahas teknologi emerging: foundation models, generative & privacy-preserving learning.

## Perubahan Pertanyaan Penelitian

| Pertanyaan lama | Pertanyaan baru |
|---|---|
| Model mana yang akurasinya tertinggi? | Mengapa model bekerja atau gagal? |
| Apakah metode baru lebih baik? | Apakah peningkatan tersebut dapat dipercaya? |
| Seberapa besar F1-score? | Pada kasus apa model salah, dan mengapa? |

---

# Slide 04 - Mengapa Explainability Menjadi Krusial?

## Konteks Penelitian Magister

Model yang kompleks (XGBoost, deep learning) sering mencapai akurasi tinggi tetapi sulit dipahami. Dalam penelitian, akurasi saja tidak cukup:

- Reviewer akan bertanya: **mengapa metode Anda bekerja?**
- Kontribusi ilmiah membutuhkan pemahaman mekanisme, bukan hanya angka performa.
- Error analysis dan explainability menjadi bukti bahwa klaim didukung oleh pemahaman.

## Konteks Industri dan Regulasi

- Sektor kesehatan, keuangan, dan hukum menuntut keputusan yang dapat dijelaskan.
- Regulasi seperti GDPR di Eropa memberikan hak untuk memperoleh penjelasan atas keputusan otomatis.
- Model yang tidak dapat dijelaskan sulit diadopsi pada domain berisiko tinggi.

---

# Slide 05 - Interpretability vs Explainability: Definisi

## Interpretability

- Kemampuan model untuk **dipahami secara langsung oleh manusia**.
- Model interpretable: linear regression, decision tree, logistic regression.
- Semakin sederhana struktur model, semakin tinggi interpretability.

## Explainability

- Kemampuan untuk **memberikan penjelasan tentang prediksi tertentu**, meskipun model internalnya kompleks.
- Model complex (XGBoost, neural network) dapat dijelaskan secara post-hoc menggunakan SHAP, LIME, dll.

## Hubungan Keduanya

```text
Interpretability: Model-nya yang sederhana → manusia paham cara kerja model.
Explainability:   Model-nya kompleks     → alat bantu menjelaskan prediksi.
```

---

# Slide 06 - Interpretability vs Explainability: Perbandingan

| Aspek | Interpretability | Explainability |
|---|---|---|
| Fokus | Struktur model | Prediksi atau perilaku model |
| Waktu | Inherent (sejak desain) | Post-hoc (setelah training) |
| Contoh metode | Linear regression, decision tree | SHAP, LIME, counterfactual |
| Keuntungan | Transparan sejak awal | Fleksibel untuk model apa pun |
| Kelemahan | Sering mengorbankan performa | Penjelasan dapat tidak sempurna |
| Penggunaan | Baseline, domain kritis | Model kompleks, audit, debugging |

## Implikasi Penelitian

- Interpretable model dapat menjadi **strong baseline** yang wajar dalam penelitian.
- Explainability tools dapat digunakan untuk **menganalisis model kompleks** tanpa mengganti model tersebut.

---

# Slide 07 - Global vs Local Explanation

## Global Explanation

- Menjelaskan **perilaku model secara keseluruhan**.
- Fitur apa yang paling berpengaruh secara rata-rata?
- Bagaimana model membuat keputusan secara umum?
- Contoh: feature importance dari Random Forest, SHAP summary plot.

## Local Explanation

- Menjelaskan **prediksi tunggal untuk satu instance**.
- Mengapa model memprediksi instance ini sebagai positif?
- Fitur mana yang mendorong prediksi ini naik/turun?
- Contoh: SHAP force plot, LIME.

## Analogi

```text
Global:  "Secara umum, model memutuskan berdasarkan jam tidur dan tekanan darah."
Local:   "Untuk pasien ini, model memprediksi risiko tinggi terutama karena tekanan darah sangat tinggi."
```

---

# Slide 08 - Feature Importance: Definisi dan Masalah

## Apa itu Feature Importance?

- Mengukur kontribusi setiap fitur terhadap prediksi model.
- Ada dua kategori utama:
  - Model-based importance (misal: gain, split count pada tree).
  - Permutation importance (mengacak fitur dan mengamati penurunan performa).

## Masalah pada Feature Importance

| Masalah | Penjelasan |
|---|---|
| Tidak konsisten | Urutan fitur dapat berbeda antara metode importance |
| Tidak stabil | Importance berubah pada data dengan noise kecil |
| Tidak selalu faithful | Importance tidak selalu mencerminkan proses keputusan sebenarnya |
| Tidak menangkap interaksi | Fitur dengan efek interaksi bisa tampak tidak penting |
| Skala tidak seragam | Nilai importance antar model tidak dapat dibandingkan langsung |

## Kesimpulan untuk Penelitian

Feature importance sederhana berguna untuk eksplorasi awal, tetapi tidak cukup sebagai bukti ilmiah explainability.

---

# Slide 09 - SHAP: Konsep Dasar

## SHapley Additive exPlanations (SHAP)

- SHAP berbasis **Shapley value** dari teori permainan kooperatif.
- Setiap fitur dianggap sebagai "pemain" yang berkontribusi terhadap "hadiah" prediksi.
- Shapley value membagi prediksi secara adil ke setiap fitur berdasarkan kontribusi marginalnya.

## Ide Intuitif

```text
Prediksi model = baseline (nilai rata-rata) + kontribusi tiap fitur
```

Contoh untuk prediksi harga rumah:

```text
Prediksi = 500 juta (baseline)
           + 80 juta  (luas tanah)
           + 40 juta  (lokasi)
           + 20 juta  (kondisi bangunan)
           - 10 juta  (usia bangunan)
```

---

# Slide 10 - SHAP: Sifat-sifat Penting

## Shapley Value Memiliki Sifat-sifat yang Diinginkan

| Sifat | Makna |
|---|---|
| **Efficiency** | Jumlah kontribusi semua fitur sama dengan selisih prediksi terhadap baseline |
| **Symmetry** | Dua fitur yang memberikan kontribusi sama mendapat nilai yang sama |
| **Dummy** | Fitur yang tidak memengaruhi prediksi mendapat nilai nol |
| **Additivity** | Kontribusi dapat dijumlahkan secara linear |

## Implikasi

- SHAP memberikan penjelasan yang **konsisten secara matematis**.
- SHAP lebih dapat dipercaya daripada feature importance berbasis impurity atau permutation.
- SHAP dapat dihitung untuk berbagai model: tree, linear, neural network.

## Catatan

- Nilai SHAP dapat bernilai **positif atau negatif**.
- Positif: fitur mendorong prediksi lebih tinggi dari baseline.
- Negatif: fitur mendorong prediksi lebih rendah dari baseline.

---

# Slide 11 - Jenis-jenis Visualisasi SHAP

## Waterfall Plot

- Menampilkan perjalanan prediksi dari baseline ke prediksi akhir.
- Cocok untuk **local explanation** satu instance.

## Force Plot

- Mirip waterfall tetapi dalam bentuk gaya "dorongan".
- Berguna untuk **interactive explanation** di notebook.

## Summary (Beeswarm) Plot

- Menampilkan SHAP value semua instance untuk semua fitur.
- Cocok untuk **global explanation**.

## Dependence Plot

- Menampilkan hubungan antara nilai fitur dan SHAP value.
- Dapat mengungkap **interaksi** dengan fitur lain.

---

# Slide 12 - SHAP: Workflow Praktis dengan Python

## Library

```python
import shap

## Model: misal GradientBoostingClassifier dari scikit-learn
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

## Local explanation: satu instance
shap.waterfall_plot(shap.Explainer(model)(X_test.iloc[[0]]))

## Global explanation
shap.summary_plot(shap_values, X_test)
```

## Alur Umum

```text
Latih model → buat explainer → hitung SHAP values → visualisasi → interpretasi
```

## Catatan Penting

- Gunakan data training sebagai background untuk explainer.
- SHAP computation dapat lambat pada data besar; gunakan sampling jika perlu.
- Pilih explainer yang sesuai dengan tipe model.

---

# Slide 13 - SHAP untuk Model Tree vs Model Linear

## TreeExplainer

- Untuk XGBoost, LightGBM, CatBoost, Random Forest, scikit-learn tree.
- Menggunakan struktur tree untuk menghitung nilai secara efisien.
- Hasil dapat bersifat **exact** dan **interaction-aware**.

## LinearExplainer

- Untuk linear regression, logistic regression.
- SHAP value sebanding dengan koefisien model dikalikan nilai fitur.
- Sederhana tetapi hanya berlaku untuk model linear.

## Perbandingan

| Aspek | TreeExplainer | LinearExplainer |
|---|---|---|
| Model target | Tree-based | Linear |
| Interaksi fitur | Ditangkap | Tidak ditangkap |
| Kecepatan | Cepat | Sangat cepat |
| Akurasi | Exact | Exact untuk model linear |

---

# Slide 14 - SHAP: Contoh Interpretasi Model Klasifikasi

## Studi Kasus: Prediksi Risiko Kredit

- Model memprediksi probabilitas gagal bayar.
- Baseline (rata-rata prediksi) = 0.20.
- Untuk satu nasabah, prediksi = 0.65.

## Interpretasi Waterfall

```text
Base value        : 0.20
+ Pendapatan rendah        : +0.25
+ Riwayat terlambat        : +0.15
+ Jumlah pinjaman besar    : +0.10
- Lama bekerja (stabil)    : -0.05
Prediksi                   : 0.65
```

## Insight untuk Penelitian

- Fitur **riwayat terlambat** adalah faktor dominan.
- Model tidak hanya "menebak": keputusan dapat dilacak.
- Analisis ini membantu menemukan **kasus kontradiktif** (misal: pendapatan tinggi tetapi diprediksi gagal).

---

# Slide 15 - LIME: Konsep Dasar

## Local Interpretable Model-agnostic Explanations (LIME)

- LIME menjelaskan prediksi lokal dengan **membuat model sederhana** di sekitar instance.
- Ide: meskipun model global kompleks, di sekitar instance tertentu model dapat didekati dengan model linear.

## Cara Kerja

```text
1. Pilih instance yang akan dijelaskan.
2. Sampling data di sekitar instance (perturbasi fitur).
3. Hitung prediksi model asli untuk data hasil perturbasi.
4. Latih model sederhana (misal: linear regression) berbobot.
5. Koefisien model sederhana menjadi penjelasan lokal.
```

## Kelebihan

- Model-agnostic: dapat digunakan untuk model apa pun.
- Penjelasan lokal yang mudah dipahami.

## Kelemahan

- Sampling dan perturbasi dapat menghasilkan penjelasan yang **tidak stabil**.
- Hasil dapat berbeda antar percobaan.

---

# Slide 16 - LIME vs SHAP: Perbandingan

| Aspek | LIME | SHAP |
|---|---|---|
| Dasar teori | Model linear lokal | Shapley value |
| Konsistensi matematis | Lemah | Kuat |
| Stabilitas | Kurang stabil | Lebih stabil |
| Kecepatan | Bergantung sampling | Bergantung jenis explainer |
| Global explanation | Tidak langsung | Ya (summary plot) |
| Interaksi fitur | Terbatas | Dapat ditangkap |
| Penggunaan utama | Local explanation | Global + local |

## Rekomendasi untuk Penelitian

- Gunakan **SHAP sebagai metode utama** karena memiliki fondasi teoritis yang kuat.
- Gunakan **LIME sebagai pembanding atau triangulasi**.
- Laporkan jika penjelasan SHAP dan LIME berbeda: ini adalah temuan penting tentang stabilitas explainability.

---

# Slide 17 - Counterfactual Explanation

## Definisi

- Counterfactual explanation menjawab pertanyaan: **perubahan minimal apa pada fitur agar prediksi berubah?**
- Contoh: "Jika pendapatan nasabah naik dari 3 juta menjadi 5 juta, maka prediksi berubah dari gagal bayar menjadi tidak gagal bayar."

## Karakteristik Counterfactual

| Sifat | Penjelasan |
|---|---|
| **Actionable** | Fitur yang diubah harus dapat diubah secara realistis (usia tidak bisa diubah, pendapatan bisa) |
| **Minimal** | Perubahan dibuat seminimal mungkin |
| **Sparse** | Sedikit fitur yang diubah, agar mudah dipahami |
| **Valid** | Setelah perubahan, prediksi benar-benar berubah |

## Contoh Pseudocode

```text
Input: instance x, model f, target prediksi y_target
Output: counterfactual x'

1. Mulai dari x.
2. Secara iteratif, ubah fitur yang paling berpengaruh (misal berdasarkan SHAP).
3. Pantau prediksi f(x').
4. Berhenti ketika f(x') = y_target dan jumlah perubahan minimal.
```

---

# Slide 18 - Evaluasi Kualitas Penjelasan

## Explainability Tidak Cukup Sekadar Visualisasi

Empat aspek yang harus dianalisis dalam penelitian:

| Aspek | Pertanyaan Kunci |
|---|---|
| **Validity** | Apakah penjelasan benar-benar menggambarkan model? |
| **Stability** | Apakah penjelasan berubah drastis untuk input yang hampir sama? |
| **Faithfulness** | Apakah penjelasan setia terhadap perilaku model yang sebenarnya? |
| **Usefulness** | Apakah penjelasan membantu pengguna mengambil keputusan? |

## Implikasi

- Visualisasi SHAP yang indah belum tentu bermakna.
- Penelitian yang baik harus menguji kualitas penjelasan, bukan hanya menampilkannya.
- Bandingkan penjelasan antar model atau antar metode.

---

# Slide 19 - Validity dan Faithfulness dalam Explainability

## Validity

- Penjelasan dikatakan valid jika sesuai dengan **mekanisme aktual model**.
- Contoh: jika model menggunakan interaksi fitur A dan B, penjelasan yang hanya menyebut A secara terpisah kurang valid.

## Faithfulness

- Penjelasan faithful jika **mengikuti prediksi model dengan akurat**.
- Uji sederhana: hapus fitur yang dijelaskan penting, apakah prediksi berubah signifikan?
- Jika tidak berubah, penjelasan tidak faithful.

## Uji Sederhana dalam Praktikum

```text
1. Hitung SHAP untuk instance tertentu.
2. Pilih fitur dengan SHAP terbesar.
3. Ubah nilai fitur tersebut menjadi nilai baseline/noise.
4. Amati perubahan prediksi.
5. Jika prediksi tidak banyak berubah, penjelasan perlu dipertanyakan.
```

---

# Slide 20 - Stability Penjelasan

## Definisi

- Stability mengukur apakah penjelasan **konsisten untuk data yang mirip**.
- Model yang baik seharusnya memberikan penjelasan serupa untuk instance yang hampir identik.

## Uji Stabilitas

1. Ambil satu instance.
2. Tambahkan noise kecil pada fitur.
3. Hitung ulang SHAP/LIME.
4. Bandingkan jarak vektor penjelasan.

## Metrik Sederhana

```text
stability = 1 - normalized_distance(explanation(x), explanation(x + epsilon))
```

## Penyebab Ketidakstabilan

- Model overfit pada noise.
- Metode penjelasan berbasis sampling (LIME).
- Model tidak deterministik (deep learning dengan dropout).

---

# Slide 21 - Usefulness Penjelasan

## Definisi

- Penjelasan dikatakan useful jika **dapat digunakan untuk tindakan nyata**.
- Apakah penjelasan membantu debugging model?
- Apakah penjelasan membantu pengguna mempercayai atau menolak prediksi?
- Apakah penjelasan mengungkapkan kelemahan yang dapat diperbaiki?

## Contoh Usefulness

| Situasi | Penjelasan yang useful |
|---|---|
| Dokter menolak prediksi sepsis | Penjelasan menunjukkan fitur vital yang wajar |
| Data scientist memperbaiki model | SHAP mengungkap fitur leakage yang tidak semestinya |
| Perusahaan kredit menjelaskan penolakan | Counterfactual memberi tahu cara meningkatkan skor |

## Kesimpulan

- Penjelasan yang tidak actionable hanya menjadi **artifact visual**, bukan kontribusi penelitian.
- Pada research project, jelaskan tindakan apa yang diambil dari hasil explainability.

---

# Slide 22 - Trustworthy Data Mining: Dimensi-dimensi Utama

## Trustworthy Data Mining

Terdiri dari beberapa dimensi yang saling terkait:

```text
Trustworthy Data Mining
├── Robustness        → Model tetap andal saat data berubah/noise
├── Fairness          → Keputusan tidak bias terhadap kelompok tertentu
├── Dataset Bias      → Data yang melatih model tidak representatif
├── Privacy           → Data sensitif tidak bocor melalui model
├── Explainability    → Keputusan dapat dijelaskan
└── Accountability    → Ada pihak yang bertanggung jawab atas keputusan
```

## Relevansi dengan Pertemuan Lain

- Robustness berkaitan dengan concept drift (pertemuan 12) dan generalization.
- Privacy akan dibahas lebih lanjut pada pertemuan 14 (privacy-preserving learning).

---

# Slide 23 - Robustness: Definisi dan Pengujian

## Definisi

- Robustness: kemampuan model untuk tetap menghasilkan prediksi yang benar ketika:
  - Input mengandung noise.
  - Distribusi data berubah (distribution shift).
  - Terdapat adversarial perturbation.
  - Terdapat data yang tidak lengkap.

## Jenis Pengujian Robustness

| Jenis | Deskripsi | Contoh |
|---|---|---|
| Noise robustness | Menambah noise kecil pada input | Gaussian noise pada fitur numerik |
| Perturbation | Mengubah sedikit nilai fitur | Perubahan fitur sebesar epsilon |
| Adversarial | Serangan yang dirancang untuk menipu | Mengubah fitur agar prediksi berubah |
| Distribution shift | Menguji pada data di luar distribusi training | Data dari domain lain |

---

# Slide 24 - Robustness: Workflow Evaluasi

## Langkah-langkah

```text
1. Latih model pada training set.
2. Siapkan test set asli.
3. Buat versi perturbasi:
   - Tambah noise (Gaussian, uniform).
   - Ubah fitur kategorikal secara acak.
   - Buat adversarial examples sederhana.
4. Evaluasi metrik pada data asli dan data perturbasi.
5. Bandingkan degradasi performa.
```

## Metrik Robustness

```text
degradation = metric(clean_test) - metric(perturbed_test)
robustness_score = 1 - degradation / metric(clean_test)
```

## Laporan dalam Paper

- Laporkan metrik pada test asli dan test perturbasi.
- Gunakan **beberapa tingkat kekuatan perturbasi**.
- Analisis fitur mana yang paling rentan.

---

# Slide 25 - Fairness: Definisi dan Konsep Dasar

## Definisi

- Fairness dalam data mining berarti model **tidak diskriminatif** terhadap kelompok berdasarkan atribut sensitif seperti:
  - Usia, gender, ras, agama, disabilitas, status sosial, dll.
- Atribut sensitif disebut **protected attribute**.

## Beberapa Notion Fairness

| Notion | Pertanyaan |
|---|---|
| **Demographic parity** | Apakah probabilitas prediksi positif sama antar kelompok? |
| **Equalized odds** | Apakah true positive rate dan false positive rate sama antar kelompok? |
| **Equal opportunity** | Apakah true positive rate sama antar kelompok? |
| **Individual fairness** | Apakah instance serupa diperlakukan serupa? |

## Catatan

- Tidak ada satu definisi fairness yang universal.
- Pemilihan notion bergantung pada domain dan konsekuensi keputusan.

---

# Slide 26 - Dataset Bias: Sumber dan Dampak

## Sumber Dataset Bias

| Sumber | Penjelasan |
|---|---|
| Sampling bias | Data tidak mewakili populasi sebenarnya |
| Label bias | Label dipengaruhi oleh keputusan manusia yang tidak konsisten |
| Measurement bias | Fitur diukur dengan cara berbeda antar kelompok |
| Historical bias | Data mencerminkan ketidakadilan historis |
| Selection bias | Proses pengumpulan data memfilter kelompok tertentu |

## Dampak

- Model mempelajari **pola bias sebagai pola yang valid**.
- Prediksi menjadi tidak adil untuk kelompok yang kurang terwakili.
- Evaluasi akurasi keseluruhan bisa tinggi, tetapi akurasi per-kelompok sangat rendah.

## Contoh

- Model rekrutmen dilatih dengan data karyawan lama yang didominasi satu gender.
- Model mempelajari preferensi tersebut sebagai fitur, bukan karena kompetensi.

---

# Slide 27 - Bias pada Dataset: Cara Mendeteksi

## Langkah Deteksi Awal

1. **Buat profil demografis data**: hitung proporsi tiap kelompok pada setiap fitur.
2. **Evaluasi per-kelompok**:

```text
Akurasi keseluruhan vs akurasi per kelompok.
Confusion matrix per kelompok.
False positive rate per kelompok.
```

3. **Analisis perbedaan prediksi**:

```text
Prediksi pada test set yang memiliki atribut sensitif dihapus atau diacak.
Jika hasil berubah drastis, model sangat bergantung pada atribut tersebut.
```

4. **Visualisasi distribusi join** antara atribut sensitif dan label.

## Catatan

- Bias dapat terjadi meskipun atribut sensitif tidak digunakan sebagai fitur.
- Bias dapat bocor melalui fitur proxy (misal: kode pos sebagai proxy untuk ras).

---

# Slide 28 - Fairness: Intervensi dan Mitigasi

## Tiga Kategori Intervensi

```text
Pre-processing  → Perbaiki data sebelum training.
                 Contoh: reweighting sampel, menghapus fitur proxy.

In-processing    → Ubah algoritma training.
                 Contoh: tambahkan regularisasi fairness.

Post-processing  → Ubah keputusan model setelah training.
                 Contoh: penyesuaian threshold per kelompok.
```

## Contoh Pendekatan Sederhana

- **Pre-processing:** resample agar proporsi label antar kelompok seimbang.
- **Post-processing:** pilih threshold berbeda untuk setiap kelompok agar equalized odds terpenuhi.

## Peringatan

- Perbaikan fairness dapat menurunkan akurasi keseluruhan.
- Ada trade-off yang harus dilaporkan dengan jujur.

---

# Slide 29 - Privacy dalam Data Mining

## Apa yang Dimaksud dengan Privacy?

- Privacy: melindungi informasi pribadi individu dari kebocoran.
- Ancaman tidak hanya pada data mentah, tetapi juga pada **model yang dilatih dari data**.

## Ancaman Privacy pada Model

| Ancaman | Deskripsi |
|---|---|
| **Membership inference** | Menebak apakah sebuah individu ada di dalam training set model |
| **Model inversion** | Merekonstruksi data training dari output model |
| **Attribute inference** | Menebak nilai atribut sensitif dari prediksi model |

## Contoh

- Model prediksi penyakit dilatih pada data pasien.
- Attacker mengirim banyak query ke model dan merekonstruksi sebagian data pasien.

## Hubungan dengan Pertemuan 14

- Federated learning dan differential privacy akan dibahas sebagai solusi protection pada pertemuan berikutnya.
- Pada pertemuan ini, kita fokus pada bagaimana **menyadari risiko privacy** saat melaporkan model dan eksperimen.

---

# Slide 30 - Responsible AI: Prinsip dan Praktik

## Prinsip Responsible AI

- **Transparansi:** keputusan model dan proses pengembangannya terdokumentasi.
- **Akuntabilitas:** ada pihak yang bertanggung jawab atas dampak model.
- **Keamanan dan privasi:** model dan data terlindungi.
- **Keadilan:** dampak tidak merugikan kelompok tertentu.
- **Manfaat sosial:** model memberikan nilai positif bagi masyarakat.

## Praktik dalam Penelitian

- Laporkan **batasan dataset** (representasi, sumber, bias potensial).
- Laporkan **batasan model** (kapan model tidak boleh digunakan).
- Sertakan **analisis etika** jika data berisi informasi sensitif.
- Dokumentasikan **asumsi** yang dibuat selama eksperimen.

---

# Slide 31 - Hubungan Explainability dan Trustworthiness

## Keterkaitan

```text
Explainability
      │
      ├── memperkuat Robustness analysis (menemukan penyebab kegagalan)
      ├── membantu Fairness audit (menemukan fitur yang menyebabkan bias)
      └── mendukung Privacy accountability (menjelaskan bagaimana data digunakan)
```

## Contoh

- SHAP menunjukkan bahwa model sangat mengandalkan variabel proxy ras.
- Hasil ini menjadi bukti adanya **dataset bias**.
- Dilanjutkan dengan intervensi fairness dan evaluasi ulang.
- Seluruh proses dilaporkan sebagai **responsible data mining**.

## Kesimpulan

- Explainability bukan tujuan akhir, melainkan sarana untuk mencapai trustworthy data mining.
- Research project yang baik mengintegrasikan keduanya.

---

# Slide 32 - Praktikum 6: Outline dan Tujuan

## Praktikum 6 - Prediction + SHAP Analysis + Error Analysis + Failure-Case Analysis

## Tujuan

1. Melakukan prediksi menggunakan model yang sudah dilatih (bisa model terbaik dari praktikum sebelumnya).
2. Menghitung SHAP value dan menginterpretasikannya.
3. Melakukan error analysis: mengelompokkan kesalahan prediksi.
4. Melakukan failure-case analysis: memeriksa kasus-kasus spesifik yang gagal.

## Hubungan dengan Research Project

- Praktikum ini adalah **miniatur** dari tahap deep analysis pada research project minggu 13.
- Hasil praktikum dapat digunakan sebagai template analisis untuk project masing-masing.

---

# Slide 33 - Praktikum 6: Workflow Lengkap

```text
┌─────────────────────────────┐
│ 1. Data Preparation         │
│    - Load dataset           │
│    - Split train/test       │
│    - Preprocessing pipeline │
└─────────────┬───────────────┘
              ↓
┌─────────────────────────────┐
│ 2. Prediction               │
│    - Latih model (baseline) │
│    - Prediksi test set      │
│    - Hitung metrik: F1, AUC │
└─────────────┬───────────────┘
              ↓
┌─────────────────────────────┐
│ 3. SHAP Analysis            │
│    - Hitung SHAP values     │
│    - Global & local plot    │
│    - Interpretasi fitur     │
└─────────────┬───────────────┘
              ↓
┌─────────────────────────────┐
│ 4. Error Analysis           │
│    - Identifikasi FP & FN   │
│    - Karakterisasi pola error│
└─────────────┬───────────────┘
              ↓
┌─────────────────────────────┐
│ 5. Failure-Case Analysis    │
│    - Pilih kasus konkret    │
│    - SHAP untuk kasus tsb   │
│    - Interpretasi kegagalan │
└─────────────────────────────┘
```

---

# Slide 34 - Praktikum 6: Prediction Step

## Pilihan Model

- Gunakan model terbaik dari praktikum sebelumnya.
- Pastikan model sudah melalui hyperparameter tuning.
- Gunakan cross-validation untuk estimasi performa yang stabil.

## Contoh kode

```python
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import classification_report, roc_auc_score

model = GradientBoostingClassifier(
    n_estimators=300, max_depth=3, learning_rate=0.05
)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
y_proba = model.predict_proba(X_test)[:, 1]

print(classification_report(y_test, y_pred))
print("AUC:", roc_auc_score(y_test, y_proba))
```

## Catatan Metodologis

- Jangan lakukan SHAP analysis sebelum model dievaluasi dengan benar.
- Jika model belum lebih baik dari baseline sederhana, analisis penjelasan menjadi kurang bermakna.

---

# Slide 35 - Praktikum 6: SHAP Analysis Step

## Kode

```python
import shap

explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

## Global explanation
shap.summary_plot(shap_values, X_test)

## Local explanation untuk instance 0
shap.force_plot(
    explainer.expected_value,
    shap_values[0, :],
    X_test.iloc[0, :],
    matplotlib=True
)
```

## Output yang Diharapkan

- Summary plot menunjukkan fitur-fitur paling penting secara global.
- Force plot untuk beberapa instance menunjukkan arah kontribusi fitur.
- Dependensi fitur yang menarik dapat dianalisis dengan dependence_plot.

## Interpretasi

- Jelaskan mengapa fitur tertentu penting.
- Periksa apakah kontribusi fitur sesuai dengan pengetahuan domain.
- Laporkan jika ada fitur yang tidak masuk akal sebagai penanda data leakage atau bias.

---

# Slide 36 - Praktikum 6: Error Analysis

## Definisi Error Analysis

- Mengelompokkan kesalahan model ke dalam pola-pola yang dapat dipahami.
- Tujuan: menemukan **kelemahan sistematis** model.

## Kategori Kesalahan

| Jenis Kesalahan | Deskripsi |
|---|---|
| False Positive (FP) | Prediksi positif, label asli negatif |
| False Negative (FN) | Prediksi negatif, label asli positif |

## Langkah-langkah

1. Identifikasi semua FP dan FN dari test set.
2. Hitung proporsi masing-masing.
3. Bandingkan karakteristik distribusi FP vs FN pada fitur penting.
4. Pertanyaan kunci:
   - Apakah FN lebih sering terjadi pada kelompok tertentu?
   - Apakah FP berkaitan dengan nilai ekstrem pada fitur tertentu?
   - Apakah kesalahan terjadi pada instance dengan confidence rendah?

---

# Slide 37 - Praktikum 6: Error Analysis dengan Kode

## Contoh Analisis

```python
import pandas as pd

results = X_test.copy()
results["y_true"] = y_test
results["y_pred"] = y_pred
results["y_proba"] = y_proba

false_positive = results[(results["y_true"] == 0) & (results["y_pred"] == 1)]
false_negative = results[(results["y_true"] == 1) & (results["y_pred"] == 0)]

print(f"FP count: {len(false_positive)}")
print(f"FN count: {len(false_negative)}")

## Bandingkan distribusi fitur
print("Mean fitur pada FP:\n", false_positive.mean(numeric_only=True))
print("Mean fitur pada FN:\n", false_negative.mean(numeric_only=True))
```

## Pertanyaan Lanjutan

- Apakah cluster of errors membentuk pola yang jelas?
- Visualisasikan errors menggunakan scatter plot atau PCA.
- Korelasikan errors dengan probabilitas prediksi.

---

# Slide 38 - Praktikum 6: Failure-Case Analysis

## Definisi

- Failure-case analysis adalah **pendalaman dari error analysis**.
- Fokus pada **contoh konkret** yang representatif dari kegagalan model.
- Tujuan: menjelaskan mengapa model gagal pada kasus spesifik.

## Prosedur

1. Pilih 2-3 kasus dari error analysis.
2. Untuk setiap kasus, tampilkan:
   - Nilai fitur asli.
   - Prediksi dan probabilitas.
   - Label asli.
   - SHAP value untuk kasus tersebut.
3. Interpretasi:
   - Fitur mana yang mendorong model salah?
   - Apakah nilainya ekstrem?
   - Apakah ada interaksi antar fitur yang tidak tertangkap?
4. Simpulkan **pola umum** dari kegagalan.

## Kode

```python
## Pilih satu FN
case = false_negative.iloc[[0]]

## SHAP local explanation
shap.force_plot(
    explainer.expected_value,
    explainer.shap_values(case)[0],
    case,
    matplotlib=True
)
```

---

# Slide 39 - Menghubungkan Praktikum 6 dengan Research Project

## Posisi Praktikum 6 dalam Research Project

Pada minggu 13, research project Anda harus memasuki tahap:

```text
Experiment V1 selesai (minggu 11-12)
          ↓
Extended experiment (minggu 12)
          ↓
Robustness, explainability, error analysis  ← Anda di sini
          ↓
Final experiment + ablation (minggu 14)
```

## Apa yang Harus Dihasilkan untuk Project

1. Evaluasi robustness model pada data yang di-perturbasi.
2. SHAP analysis untuk memahami fitur-fitur penting.
3. Error analysis untuk menemukan pola kegagalan.
4. Failure-case analysis untuk contoh konkret.
5. Diskusi tentang implikasi temuan terhadap klaim ilmiah.

## Template Laporan

```text
Bagian A: Evaluasi performa model (metrik + CI).
Bagian B: SHAP global (fitur penting + interpretasi).
Bagian C: SHAP lokal (contoh instance berhasil dan gagal).
Bagian D: Error analysis (FP/FN, pola distribusi).
Bagian E: Failure cases (2-3 kasus + SHAP + interpretasi).
Bagian F: Implikasi untuk research question dan kontribusi.
```

---

# Slide 40 - Penutup dan Kaitan dengan Pertemuan Berikutnya

## Ringkasan

- Explainability: SHAP, LIME, counterfactual.
- Evaluasi penjelasan: validity, stability, faithfulness, usefulness.
- Trustworthiness: robustness, fairness, dataset bias, privacy.
- Praktikum 6: prediction + SHAP + error analysis + failure-case analysis.

## Kaitan dengan Pertemuan 14

- Pertemuan 14 akan membahas **Emerging Data Mining: Foundation Models, Generative & Privacy-Preserving Learning**.
- Model-generatif dan foundation model menimbulkan tantangan explainability dan trustworthiness yang baru.
- Pertanyaan penting yang akan muncul: bagaimana menjelaskan model yang menghasilkan data sintetis? Bagaimana menjaga privacy dalam federated learning?

## Tindak Lanjut

- Selesaikan Praktikum 6 sebelum pertemuan berikutnya.
- Terapkan template analysis pada research project masing-masing.
- Siapkan hasil robustness/explainability/error analysis untuk dibahas pada research clinic minggu 14-15.

---

# Slide 41 - TERIMA KASIH

Pertemuan berikutnya

**Emerging Data Mining: Foundation Models, Generative & Privacy-Preserving Learning**