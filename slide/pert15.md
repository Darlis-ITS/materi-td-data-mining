# Slide 00 - Cover

EF235161 - TD Data Mining  
Pertemuan 15

## From Experimental Results to Scientific Contribution

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D  
Departemen Teknik Informatika - ITS

---

# Slide 01 - Peta Pertemuan dan Agenda

## Posisi dalam Alur Perkuliahan

```text
Pertemuan 14                          Pertemuan 15                          Pertemuan 16
Final Experiment                 From Experimental Results              Final Research
Ablation/Sensitivity              to Scientific Contribution           Presentation &
Statistical Analysis                   Research Clinic                   Paper Defense
       |                                       |                               |
       v                                       v                               v
   Evidence                              Scientific Claims                 Research Paper
```

## Agenda Pertemuan 15

- Membaca dan menginterpretasi hasil eksperimen.
- Statistical vs practical significance.
- Ablation study dan sensitivity analysis.
- Error analysis, failure cases, dan threats to validity.
- Generalization dan scientific claims.
- Struktur paper ilmiah: Abstract hingga Conclusion.
- Research clinic, paper workshop, peer review manuscript.
- Target luaran: **Full Paper Draft**.

---

# Slide 02 - Posisi Pertemuan 15 dalam RPS

## Keterkaitan dengan Pertemuan Sebelumnya dan Berikutnya

| Minggu | Fokus | Luaran |
|---|---|---|
| 14 | Final experiment, ablation, sensitivity, statistical analysis | Evidence lengkap |
| **15** | **Interpretasi evidence, argumentasi ilmiah, revisi paper** | **Full Paper Draft** |
| 16 | Final Research Presentation & Paper Defense | Final paper + presentasi |

## Aktivitas RPS yang Didukung

- Research clinic
- Paper workshop
- Peer review manuscript
- Analisis argumentasi ilmiah
- Revisi paper berdasarkan evidence

## CPMK yang Diperkuat

- **CPMK-2** — Critical literature analysis
- **CPMK-4** — Experimental data mining research
- **CPMK-6** — Scientific contribution dan publication

---

# Slide 03 - Dari Rangkaian Eksperimen ke Kontribusi Ilmiah

## Alur Berpikir

```text
Experiment
    ↓
Results & Evidence
    ↓
Analysis: significance, ablation, sensitivity, error, validity
    ↓
Interpretation: why, when, for whom
    ↓
Scientific Claim
    ↓
Contribution: method, insight, benchmark, theory
    ↓
Paper
```

## Inti Pertemuan Ini

- Eksperimen bukan tujuan akhir.
- Hasil eksperimen harus dibaca secara kritis dan jujur.
- Kontribusi ilmiah muncul dari **pengetahuan baru**, bukan sekadar angka performa.
- Paper adalah media untuk mengkomunikasikan bukti dan klaim secara transparan.

---

# Slide 04 - Pertanyaan Kunci Pertemuan 15

> Apa yang dapat diketahui pembaca setelah membaca penelitian ini yang sebelumnya belum diketahui?

## Makna Pertanyaan Ini bagi Penulis Paper

- Pembaca harus memperoleh **pengetahuan baru** yang dapat digunakan atau diuji lanjut.
- Angka performa hanyalah sarana untuk mendukung pengetahuan tersebut.
- Jika jawaban atas pertanyaan ini tidak jelas, paper belum layak disebut kontribusi ilmiah.

## Yang Bukan Kontribusi Ilmiah

- Menjalankan model yang sudah ada pada dataset baru tanpa analisis.
- Melaporkan akurasi yang sedikit lebih tinggi tanpa penjelasan mengapa.
- Menambahkan kompleksitas tanpa menunjukkan kondisi di mana kompleksitas diperlukan.

---

# Slide 05 - Membaca Hasil Eksperimen

## Bukan Sekadar Membaca Tabel

- Melihat tren performa antar model.
- Memeriksa varians antar fold atau antar seed.
- Membandingkan hasil dengan baseline yang kuat.
- Mengidentifikasi kasus di mana metode gagal.
- Menghubungkan hasil dengan karakteristik dataset.

## Pertanyaan Saat Membaca Hasil

| Pertanyaan | Tujuan |
|---|---|
| Apakah model A konsisten lebih baik dari B? | Menilai generalisasi |
| Seberapa besar selisihnya? | Menilai practical significance |
| Apa sumber perbedaan? | Menghubungkan dengan teori/karakteristik data |
| Apa yang terjadi pada subset data tertentu? | Menemukan insight |
| Apakah perbedaan masih ada jika tuning diulang? | Menilai robustness |

---

# Slide 06 - Statistical vs Practical Significance

## Dua Jenis Signifikansi yang Berbeda

| Aspek | Statistical Significance | Practical Significance |
|---|---|---|
| Pertanyaan | Apakah perbedaan nyata secara statistik? | Apakah perbedaan cukup besar untuk berguna? |
| Diukur dengan | p-value, confidence interval, effect size | domain cost, improvement threshold, business/clinical impact |
| Dipengaruhi oleh | jumlah sampel, varians, jumlah percobaan | konteks masalah, resource, interpretability |
| Kesalahan umum | Mengabaikan effect size | Mengklaim penting tanpa uji statistik |

## Kesimpulan yang Kuat

Perbedaan dapat **signifikan secara statistik**, tetapi **tidak praktis**. Sebaliknya, perbedaan yang praktis penting harus didukung oleh analisis statistik yang memadai.

---

# Slide 07 - Statistical Significance

## Kapan Diperlukan

- Membandingkan dua atau lebih model pada beberapa dataset/fold.
- Menghindari kesimpulan dari selisih yang hanya karena noise.

## Pendekatan Umum

- Paired test: paired t-test, Wilcoxon signed-rank test.
- Beberapa dataset: sign test atau Friedman test dengan post-hoc.
- Laporkan confidence interval untuk metric utama.

## Contoh Python Sederhana

```python
from scipy import stats

## akurasi 5-fold: model_baseline vs model_proposed
baseline = [0.82, 0.84, 0.83, 0.85, 0.82]
proposed = [0.87, 0.86, 0.88, 0.86, 0.89]

t_stat, p_value = stats.ttest_rel(proposed, baseline)
print(f"p-value = {p_value:.4f}")
```

## Catatan Penting

- Banyak perbandingan → lakukan koreksi untuk multiple testing.
- Distribusi tidak normal → gunakan uji nonparametrik.
- p-value bukan ukuran effect size.

---

# Slide 08 - Practical Significance

## Definisi

Perbedaan dikatakan praktis signifikan apabila memberikan dampak nyata pada penggunaan di dunia nyata.

## Contoh Konteks

| Domain | Pertanyaan Praktis |
|---|---|
| Fraud detection | Berapa banyak transaksi fraud tambahan yang dapat dicegah? |
| Medical diagnosis | Berapa banyak false negative yang berkurang? |
| Predictive maintenance | Berapa jam downtime yang dapat dihindari? |
| Recommender system | Apakah kenaikan 0.1% AUC mengubah pengalaman pengguna? |

## Strategi Menunjukkan Practical Significance

- Hitung dampak dalam satuan domain: cost, waktu, risiko, atau sumber daya.
- Bandingkan dengan threshold yang disepakati.
- Tunjukkan trade-off: misalnya gain kecil tetapi biaya komputasi jauh lebih rendah.
- Sertakan analisis pada subset penting, bukan hanya rata-rata.

---

# Slide 09 - Statistical vs Practical: Tabel Perbandingan

## Skenario Kemungkinan

| Statistical Significance | Practical Significance | Interpretasi |
|---|---|---|
| Ya | Ya | Klaim utama terdukung kuat |
| Ya | Tidak | Efek terlalu kecil; perlu argumentasi mengapa tetap relevan |
| Tidak | Ya | Belum cukup bukti; tambah data atau kurangi noise |
| Tidak | Tidak | Klaim tidak didukung; fokus ke insight lain |

## Pesan untuk Penulis

- Laporkan keduanya secara eksplisit.
- Jangan hanya menampilkan rata-rata tanpa ukuran ketidakpastian.
- Gunakan tabel ringkas: mean ± std, median, confidence interval, p-value, dan interpretasi praktis.

---

# Slide 10 - Ablation Study

## Definisi dan Tujuan

Ablation study adalah eksperimen yang menghilangkan atau mengganti satu komponen metode untuk menguji kontribusi komponen tersebut.

## Pertanyaan yang Dijawab

- Apakah setiap modul benar-benar diperlukan?
- Apakah peningkatan berasal dari komponen inti atau komponen tambahan?
- Apakah interaksi antar komponen menghasilkan efek sinergi?

## Sistematika

```text
Full Model
   = Full Model - Component A   (uji peran A)
   = Full Model - Component B   (uji peran B)
   = Full Model - A - B         (uji interaksi)
   = Simple Baseline            (titik awal)
```

## Kaidah

- Desain ablasi harus **fair**: setiap varian di-tuning sebaik mungkin.
- Laporkan hasil pada semua dataset utama, bukan hanya dataset terbaik.
- Jelaskan mengapa suatu komponen dihapus dan apa yang diharapkan terjadi.

---

# Slide 11 - Contoh Desain Ablation Study

## Studi Kasus: Model dengan Feature Encoder dan Attention Module

| Varian | Komponen yang Aktif | Metric Utama |
|---|---|---|
| Baseline | - | 0.812 |
| Baseline + Encoder | Encoder | 0.834 |
| Baseline + Attention | Attention | 0.825 |
| Full Model | Encoder + Attention | 0.847 |

## Interpretasi

- Encoder memberikan kenaikan 0.022.
- Attention hanya efektif jika encoder aktif.
- Full model menghasilkan kenaikan 0.035, bukan 0.022 + 0.013 + noise.
- Ada efek interaksi yang harus dijelaskan dalam paper.

## Kesalahan Umum

- Hanya menguji full model dan tanpa komponen.
- Tidak menjelaskan mengapa komponen dihapus.
- Menyimpulkan kontribusi hanya dari satu dataset.

---

# Slide 12 - Sensitivity Analysis

## Definisi

Sensitivity analysis menguji bagaimana hasil berubah ketika parameter, hyperparameter, atau kondisi eksperimen sedikit diubah.

## Tujuan

- Menunjukkan **stabilitas** metode.
- Menemukan rentang parameter yang aman.
- Memahami pengaruh keputusan eksperimental tertentu.

## Yang Umum Diuji

| Jenis Perubahan | Contoh |
|---|---|
| Hyperparameter model | learning rate, depth, regularization |
| Jumlah data latih | 25%, 50%, 75%, 100% |
| Preprocessing | tanpa scaling, dengan scaling berbeda |
| Metric atau threshold | threshold klasifikasi, cost ratio |
| Random seed | beberapa seed untuk mengecek varians |

## Cara Menyajikan

- Tabel ringkas hasil untuk beberapa nilai parameter.
- Line plot atau heatmap untuk interaksi dua parameter.
- Tuliskan apakah temuan utama **bertahan** terhadap perubahan.

---

# Slide 13 - Contoh Sensitivity Analysis

## Pengaruh Parameter `max_depth` terhadap F1

| max_depth | F1 | Catatan |
|---|---|---|
| 3 | 0.812 | Model terlalu sederhana |
| 5 | 0.835 | Titik keseimbangan |
| 7 | 0.838 | Sedikit meningkat |
| 10 | 0.829 | Mulai overfit |
| 15 | 0.811 | Overfit jelas |

## Pertanyaan yang Harus Dijawab

- Apakah metode tetap unggul di seluruh rentang?
- Pada kondisi apa keunggulan hilang?
- Apakah pilihan nilai default dapat dipertanggungjawabkan?

## Pesan

Sensitivity analysis bukan formalitas, tetapi bukti bahwa kesimpulan tidak bergantung pada satu titik konfigurasi.

---

# Slide 14 - Error Analysis

## Definisi

Error analysis adalah pemeriksaan sistematis terhadap kasus yang diprediksi salah oleh model.

## Tujuan

- Menemukan pola kesalahan.
- Mengidentifikasi batas kemampuan model.
- Mengarahkan perbaikan metode atau data.
- Menyediakan bahan untuk diskusi dan future work.

## Langkah Praktis

1. Kumpulkan semua kesalahan prediksi pada test set.
2. Kelompokkan berdasarkan: kelas target, rentang nilai fitur, subset data, atau model yang salah.
3. Hitung proporsi tiap kelompok.
4. Cari pola: kesalahan terkonsentrasi di kelas minoritas? data langka? fitur tertentu?
5. Visualisasikan contoh kesalahan (confusion matrix, salah klasifikasi).
6. Tarik hipotesis tentang penyebab kesalahan.

## Contoh Code Sederhana

```python
errors = y_true != y_pred
print("Error rate:", errors.mean())
print(y_true[errors].value_counts(normalize=True))
```

---

# Slide 15 - Failure Cases

## Definisi

Failure cases adalah subset kesalahan yang paling representatif atau paling merugikan, sering kali dianalisis secara kualitatif.

## Perbedaan dengan Error Analysis

- Error analysis bersifat agregat dan kuantitatif.
- Failure cases bersifat konkret dan kualitatif: satu atau beberapa contoh nyata yang menunjukkan batas model.

## Contoh Format Analisis Failure Case

| ID | Input penting | Label asli | Prediksi | Skor keyakinan | Kemungkinan penyebab |
|---|---|---|---|---|---|
| 23 | fitur A rendah, fitur B tinggi | 1 | 0 | 0.48 | Pola kombinasi belum terlihat di train set |
| 61 | missing value besar | 0 | 1 | 0.55 | Imputasi mengubah distribusi |

## Nilai Ilmiah

Failure cases menunjukkan **kejujuran ilmiah** dan membuka arah penelitian lanjutan.

---

# Slide 16 - Threats to Validity

## Definisi

Threats to validity adalah faktor yang dapat melemahkan kepercayaan terhadap kesimpulan penelitian.

## Kategori Umum

| Kategori | Contoh |
|---|---|
| Internal validity | Data leakage, preprocessing yang tidak konsisten, tuning tidak fair |
| External validity | Dataset terbatas, hasil tidak tentu berlaku di domain lain |
| Construct validity | Metric tidak sesuai dengan research question |
| Conclusion validity | Uji statistik tidak tepat, interpretasi p-value salah |
| Reproducibility | Seed tidak dilaporkan, environment tidak terdokumentasi |

## Cara Menulis di Paper

- Nyatakan ancaman secara jujur.
- Jelaskan langkah yang diambil untuk menguranginya.
- Jelaskan sejauh mana hasil tetap dapat dipercaya.

---

# Slide 17 - Generalization

## Definisi

Generalization adalah sejauh mana hasil eksperimen berlaku pada data, domain, atau kondisi di luar pengaturan eksperimen awal.

## Tingkatan Generalization

```text
Satu dataset
   ↓
Multiple dataset dari satu domain
   ↓
Cross-domain evaluation
   ↓
Realisasi di lingkungan nyata
```

## Bukti yang Diperkuat

- Konsistensi hasil pada beberapa dataset.
- Cross-validation dan repeated holdout.
- Sensitivity terhadap distribusi data.
- Analisis pada subset yang menantang.
- Uji pada dataset dengan karakteristik berbeda.

## Pesan

Klaim generalisasi harus proporsional dengan bukti yang dimiliki.

---

# Slide 18 - Scientific Claims

## Definisi

Scientific claim adalah pernyataan bahwa penelitian menghasilkan pengetahuan baru yang didukung oleh bukti.

## Karakteristik Klaim yang Baik

- Spesifik: menyebut kondisi, populasi, atau domain.
- Dapat diuji: pembaca dapat mereplikasi atau memverifikasi.
- Proporsional: tidak melampaui bukti.
- Bermakna: memberikan pemahaman baru.

## Contoh Perubahan Klaim

| Klaim lemah | Klaim yang lebih ilmiah |
|---|---|
| "Metode kami lebih baik" | "Metode kami meningkatkan F1 secara signifikan pada data dengan missing rate > 30% dibanding baseline yang sama kompleksitasnya" |
| "Model X paling akurat" | "Model X unggul pada data tabular berukuran sedang, tetapi keunggulannya menurun pada data sangat besar" |
| "Kami mengusulkan framework baru" | "Framework kami mengurangi kebutuhan fitur engineering pada domain tertentu dengan biaya training lebih tinggi" |

---

# Slide 19 - Dari Klaim ke Bukti

## Struktur Argumentasi

```text
Claim
  → Why this claim matters
  → What evidence supports it
  → What evidence might contradict it
  → How the evidence was produced
  → What remains unknown
```

## Latihan Peer Review

Untuk setiap klaim di draft paper, tulis:

- Kalimat klaim.
- Satu paragraf bukti pendukung.
- Satu paragraf keterbatasan.
- Satu kalimat tentang apa yang tidak bisa disimpulkan.

## Output yang Diharapkan

Klaim yang dapat dipertahankan dalam paper defense, bukan klaim retoris.

---

# Slide 20 - Struktur Paper Ilmiah

## Kerangka Umum

| Bagian | Fungsi |
|---|---|
| Abstract | Ringkasan masalah, metode, hasil, kontribusi |
| Introduction | Latar belakang, gap, RQ, kontribusi |
| Related Work | Posisi penelitian terhadap literatur |
| Methodology | Desain metode dan eksperimen |
| Results | Fakta hasil eksperimen |
| Discussion | Interpretasi, keterbatasan, insight |
| Conclusion | Kesimpulan dan future work |

## Prinsip Penulisan

- Setiap bagian harus menjawab pertanyaan pembaca.
- Hasil dan interpretasi tidak boleh campur aduk tanpa kejelasan.
- Setiap klaim di bagian awal harus didukung di bagian akhir.

---

# Slide 21 - Abstract

## Fungsi

Memberikan jawaban singkat atas pertanyaan kunci:

> Apa yang dapat diketahui pembaca setelah membaca penelitian ini?

## Komponen Abstract yang Kuat

- **Masalah**: satu kalimat konteks.
- **Gap**: apa yang belum diketahui.
- **Metode**: pendekatan secara garis besar.
- **Hasil**: angka atau temuan utama.
- **Kontribusi**: pengetahuan baru yang diperoleh.

## Contoh Kerangka Abstract

```text
[Konteks] Banyak metode X bekerja baik pada data normal.
[Gap] Namun perilakunya pada data dengan missing mising tidak dipahami.
[Metode] Kami mengusulkan kerangka evaluasi Y dan menerapkannya pada 3 dataset.
[Hasil] Metode X menunjukkan penurunan F1 hingga 15% pada missing rate 40%.
[Kontribusi] Penelitian ini memberikan pemetaan batas robust metode X dan panduan pemilihan model.
```

## Latihan

Tulis ulang abstract draft Anda dalam 7 kalimat.

---

# Slide 22 - Introduction

## Alur Introduction

```text
Broad problem domain
    ↓
Specific research problem
    ↓
What is known
    ↓
What is not known (gap)
    ↓
Research question
    ↓
Contributions
    ↓
Paper organization
```

## Hal yang Harus Dihindari

- Membuka dengan kalimat terlalu umum tanpa kaitan langsung.
- Menjelaskan ulang textbook.
- Menyebut kontribusi tanpa bukti pendukung.
- Tidak menjelaskan mengapa gap penting.

## Target Yang Harus Dicapai

Pembaca memahami **mengapa penelitian ini perlu dilakukan** dan **apa yang akan dibuktikan**.

---

# Slide 23 - Related Work

## Fungsi

- Menunjukkan bahwa penulis memahami state of the art.
- Menegaskan posisi penelitian.
- Menghindari klaim kebaruan yang keliru.

## Jenis Organisasi

- Berdasarkan alur historis.
- Berdasarkan kelompok metode.
- Berdasarkan karakteristik masalah.

## Checklist Peer Review

- Apakah setiap klaim tentang literatur disertai referensi yang benar?
- Apakah pembandingan metode menjelaskan perbedaan dengan penelitian ini?
- Apakah related work lebih dari sekadar daftar paper?
- Apakah gap yang dinyatakan benar-benar belum dijawab?

## Catatan

Gunakan related work untuk membangun **research gap**, bukan untuk memamerkan banyak referensi.

---

# Slide 24 - Methodology

## Isi Methodology

- Deskripsi dataset.
- Preprocessing.
- Experimental setup.
- Metode yang diusulkan.
- Baseline.
- Metric.
- Rincian tuning.
- Lingkungan komputasi.

## Kriteria Methodology yang Baik

| Aspek | Pertanyaan |
|---|---|
| Reproducible | Dapatkah penulis lain mengulang eksperimen? |
| Fair | Apakah semua model mendapat kesempatan yang sama? |
| Complete | Apakah semua keputusan penting dijelaskan? |
| Appropriate | Apakah desain sesuai dengan research question? |

## Principle

> Methodology adalah kontrak antara penulis dan pembaca. Semakin jelas kontrak, semakin kuat kepercayaan pembaca.

---

# Slide 25 - Results

## Yang Harus Ada di Bagian Results

- Fakta hasil eksperimen.
- Tabel dan gambar yang mudah dibaca.
- Ukuran ketidakpastian.
- Hasil untuk semua dataset yang dijanjikan.
- Hasil yang tidak mendukung klaim, jika ada.

## Yang Tidak Harus Ada

- Interpretasi yang terlalu dini.
- Kalimat retoris seperti "hasil yang sangat bagus".
- Klaim kausal tanpa dukungan eksperimen.

## Struktur Umum

```text
R1: Performa keseluruhan
R2: Perbandingan dengan baseline
R3: Ablation study
R4: Sensitivity analysis
R5: Error atau failure case
```

## Catatan Penting

Hasil adalah **bukti mentah**. Interpretasi diletakkan di Discussion.

---

# Slide 26 - Discussion

## Fungsi Discussion

- Menjawab research question.
- Menjelaskan mengapa hasil terjadi.
- Menghubungkan hasil dengan literatur.
- Mengakui keterbatasan.
- Menyatakan pelajaran yang dapat dipetik.

## Pertanyaan yang Harus Dijawab

- Apakah hasil konsisten dengan hipotesis?
- Apakah ada hasil yang mengejutkan?
- Mengapa metode bekerja pada dataset A tetapi gagal pada dataset B?
- Apa implikasi praktis?
- Apa yang tidak dapat disimpulkan?

## Hubungan dengan Bagian Lain

```text
Results: "Metode unggul 5% pada data besar."
Discussion: "Keunggulan ini diduga karena kemampuan metode
dalam memanfaatkan struktur fitur yang kompleks, dan hilang
ketika ukuran data kecil karena overfitting."
```

---

# Slide 27 - Conclusion

## Isi Conclusion

- Ringkasan masalah dan gap.
- Ringkasan metode.
- Ringkasan temuan.
- Kontribusi ilmiah.
- Keterbatasan.
- Future work.

## Hal yang Harus Dihindari

- Mengulang abstract kata per kata.
- Menyatakan klaim yang tidak didukung di Results/Discussion.
- Terlalu panjang atau terlalu pendek.

## Contoh Rangkaian Kalimat

1. "Penelitian ini menguji perilaku model X pada data streaming dengan concept drift."
2. "Eksperimen pada 4 dataset menunjukkan bahwa ..."
3. "Kontribusi utama adalah ..."
4. "Keterbatasan penelitian ini adalah ..."
5. "Penelitian lanjutan dapat mengeksplorasi ..."

---

# Slide 28 - Research Clinic: Peer Review Checklist

## Checklist untuk Menilai Manuscript Teman

| No | Aspek yang Dinilai | Ya / Tidak |
|---|---|---|
| 1 | Apakah research question jelas? | |
| 2 | Apakah gap benar-benar gap? | |
| 3 | Apakah metode dijelaskan cukup untuk direproduksi? | |
| 4 | Apakah baseline cukup kuat? | |
| 5 | Apakah metric sesuai? | |
| 6 | Apakah ada uji statistik atau confidence interval? | |
| 7 | Apakah ada ablation/sensitivity? | |
| 8 | Apakah error/failure case dibahas? | |
| 9 | Apakah threats to validity dinyatakan? | |
| 10 | Apakah klaim tidak melampaui bukti? | |

## Cara Memberikan Umpan Balik

- Mulai dari pertanyaan besar, baru detail.
- Beri contoh kalimat/letak masalah.
- Bedakan "kurang" dan "salah".
- Akhiri dengan 3 prioritas perbaikan.

---

# Slide 29 - Peer Review Manuscript: Workflow Praktis

## Alur Workshop

```text
Baca paper teman tanpa menulis apa pun (10 min)
    ↓
Kategorikan: claim, evidence, analysis, conclusion (10 min)
    ↓
Identifikasi pertanyaan kunci untuk penulis (10 min)
    ↓
Tulis review terstruktur (20 min)
    ↓
Diskusikan secara lisan dan revisi (20 min)
```

## Struktur Review

| Bagian | Isi |
|---|---|
| Ringkasan | 3-5 kalimat tentang apa yang dilakukan paper |
| Kekuatan | 2-3 hal yang sudah baik |
| Kelemahan mayor | Masalah yang memengaruhi validitas klaim |
| Kelemahan minor | Masalah penulisan atau detail |
| Prioritas revisi | Langkah yang harus dilakukan sebelum submit |

## Prinsip

Review adalah alat untuk memperbaiki paper, bukan untuk menjatuhkan penulis.

---

# Slide 30 - Revisi Paper Berdasarkan Evidence

## Sumber Evidence untuk Revisi

- Hasil eksperimen yang sudah dipublikasikan di bagian Results.
- Hasil revisi jumlah fold/seed.
- Analisis statistik ulang.
- Temuan error analysis.
- Checklist peer review.

## Contoh Pola Revisi

| Temuan | Revisi yang Dilakukan |
|---|---|
| Ablation tidak menunjukkan kontribusi komponen X | Hapus klaim tentang komponen X, atau ubah desain eksperimen |
| Hasil tidak signifikan secara statistik | Perbaiki kalimat klaim: dari "lebih baik" menjadi "kompetitif tetapi lebih efisien" |
| Failure case dominan pada kelas minoritas | Tambahkan diskusi keterbatasan dan future work |
| Baseline tidak di-tuning | Jalankan ulang baseline dengan tuning yang sama |
| Dataset tidak beragam | Tambahkan dataset baru atau nyatakan keterbatasan generalisasi |

## Prinsip

> Jangan memaksa data mendukung klaim. Ubah klaim agar sesuai dengan data.

---

# Slide 31 - Dari Hasil ke Kontribusi Ilmiah

## Kontribusi Ilmiah yang Mungkin

| Jenis Kontribusi | Contoh |
|---|---|
| Metodologis | Kerangka evaluasi baru, prosedur preprocessing yang dapat direplikasi |
| Empiris | Temuan tentang kapan suatu metode bekerja/gagal |
| Teoretis | Analisis sifat algoritma, batas kompleksitas |
| Praktis | Pedoman pemilihan model berdasarkan karakteristik data |
| Dataset/benchmark | Dataset publik baru atau benchmark terstandar |

## Pertanyaan untuk Menguji Kontribusi

- Apakah kontribusi ini berguna bagi peneliti lain?
- Apakah dapat dikutip sebagai dasar penelitian lanjutan?
- Apakah kontribusi akan tetap relevan setelah metode spesifik diganti?

---

# Slide 32 - Checklist Kesiapan Full Paper Draft

## Checklist Utama

| No | Item | Status |
|---|---|---|
| 1 | Judul mencerminkan kontribusi | |
| 2 | Abstract menjawab pertanyaan kunci | |
| 3 | Introduction memuat gap dan RQ | |
| 4 | Related work memetakan posisi | |
| 5 | Methodology reproducible | |
| 6 | Results menyajikan bukti lengkap | |
| 7 | Discussion menjawab why dan when | |
| 8 | Conclusion tidak melampaui bukti | |
| 9 | Threats to validity diakui | |
| 10 | Statistik/confidence interval disertakan | |
| 11 | Ablation/sensitivity dilakukan jika relevan | |
| 12 | Source code/config tersedia | |

## Target Akhir Pertemuan 15

Semua item harus dalam status siap untuk dikonsultasikan pada research clinic atau dikirim ke peer reviewer.

---

# Slide 33 - Menuju Pertemuan 16

## Yang Akan Dinilai pada Final Defense

- Research problem dan gap.
- Research question dan hipotesis.
- Metodologi dan desain eksperimen.
- Hasil dan analisis.
- Validitas dan keterbatasan.
- Kontribusi ilmiah.
- Kemampuan mempertahankan argumentasi.

## Persiapan yang Dimulai Hari Ini

- Revisi paper berdasarkan feedback.
- Siapkan slide presentasi yang berfokus pada alur bukti.
- Latih penjelasan untuk setiap klaim.
- Siapkan jawaban untuk pertanyaan sulit tentang threats to validity.

## Pesan

Pertemuan 16 bukan sekadar presentasi proyek, tetapi **defense** terhadap pertanyaan kritis tentang klaim ilmiah.

---

# Slide 34 - Pertanyaan Kunci Sebagai Ujian Akhir

## Evaluasi Diri

> Apa yang dapat diketahui pembaca setelah membaca penelitian ini yang sebelumnya belum diketahui?

## Latihan Menulis

Tulis 3 kalimat jawaban atas pertanyaan di atas berdasarkan draft paper Anda.

## Setelah Menulis, Tanyakan:

- Apakah kalimat tersebut dapat diverifikasi dari data yang disajikan?
- Apakah kalimat tersebut baru, bukan sekadar konfirmasi hal umum?
- Apakah kalimat tersebut layak menjadi ringkasan kontribusi di abstract?

## Luaran Pertemuan 15

**Full Paper Draft** yang sudah direvisi berdasarkan evidence dan peer review.

---

# Slide 35 - Penutup

TERIMA KASIH

Pertemuan berikutnya

**Final Research Presentation & Paper Defense**