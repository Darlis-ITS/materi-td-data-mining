# Slide 00 - Cover

EF235161 - TD Data Mining  

Pertemuan 16

## Final Research Presentation & Paper Defense

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D  

Departemen Teknik Informatika - ITS

---

# Slide 01 - Agenda & Peta Pertemuan

## Agenda Hari Ini

- Presentasi final penelitian oleh setiap mahasiswa/kelompok
- Sesi paper defense (tanya jawab dan sanggahan akademik)
- Evaluasi penelitian oleh dosen penguji
- Diskusi ilmiah antar peserta
- Penyerahan Final Research Project

## Catatan

- Pertemuan ini adalah puncak dari seluruh rangkaian perkuliahan.
- Menghubungkan seluruh tahapan dari pertemuan 1–15 ke dalam satu presentasi utuh.
- Tidak ada pertemuan berikutnya; seluruh luaran menjadi bahan evaluasi akhir.

---

# Slide 02 - Posisi Pertemuan 16 dalam RPS

## Alur Perkuliahan

| Fase | Pertemuan | Luaran Utama |
|---|---|---|
| Fondasi dan eksperimen | 1–7 | Baseline, research gap, RQ, hipotesis |
| Proposal dan pengembangan | 8–10 | Research proposal, implementasi |
| Eksperimen lanjutan | 11–14 | Hasil, generalization, error analysis, robustness |
| Penulisan ilmiah | 15 | Full paper draft |
| **Final** | **16** | **Final paper, source code, presentasi, defense** |

## Keterkaitan

- Pertemuan 15 membahas bagaimana mengubah hasil eksperimen menjadi kontribusi ilmiah.
- Pertemuan 16 menguji sejauh mana mahasiswa mampu mempertahankan argumen ilmiah tersebut.
- Evaluasi akhir mencakup kualitas paper, kelengkapan deliverable, dan kemampuan defense.

---

# Slide 03 - Tujuan Pembelajaran & CPMK

## Capaian yang Dinilai

| CPMK | Fokus Penilaian |
|---|---|
| CPMK-3 | Research problem, research gap, research question, hipotesis |
| CPMK-4 | Eksperimen valid, reproducible, analisis hasil |
| CPMK-6 | Paper berkualitas, kontribusi ilmiah, komunikasi publikasi |

## Indikator Keberhasilan

- Mahasiswa mampu mempresentasikan penelitian secara runtut.
- Mahasiswa mampu menjawab pertanyaan penguji berdasarkan bukti dan literatur.
- Mahasiswa menyerahkan seluruh deliverable dengan standar yang dapat direproduksi.

---

# Slide 04 - Alur Penelitian Menuju Akhir

## Dari Masalah ke Kontribusi

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
Dataset & Strong Baseline
      ↓
Experimental Design
      ↓
Experiment
      ↓
Evidence
      ↓
Failure / Robustness Analysis
      ↓
Scientific Finding
      ↓
Contribution
      ↓
Final Paper & Defense
```

## Penekanan

- Pertemuan 16 adalah ujian atas keseluruhan alur tersebut.
- Mahasiswa harus mampu menunjukkan keterkaitan setiap langkah secara jelas.

---

# Slide 05 - Final Deliverables

## Luaran yang Harus Diserahkan

| Deliverable | Deskripsi Singkat |
|---|---|
| Final paper | Naskah lengkap sesuai struktur paper ilmiah |
| Source code | Kode eksperimen yang siap dijalankan |
| Dataset atau sumber dataset | Data yang digunakan beserta referensi dan lisensi |
| Experimental configuration | Pengaturan hyperparameter, seed, environment |
| Experimental results | Hasil lengkap, tabel, dan visualisasi |
| Presentation | Slide presentasi final |

## Target Kualitas

- Paper diarahkan minimal memenuhi standar international conference terindeks Scopus.
- Seluruh deliverable harus saling konsisten dan dapat mereproduksi hasil yang diklaim.

---

# Slide 06 - Final Paper: Struktur

## Struktur Paper Ilmiah

1. **Title** — mencerminkan kontribusi utama
2. **Abstract** — latar belakang, metode, hasil, kontribusi
3. **Introduction** — research problem dan research gap
4. **Related Work** — posisi penelitian terhadap literatur
5. **Methodology** — detail metode yang diusulkan
6. **Experimental Setup** — dataset, baseline, metrik, konfigurasi
7. **Results** — tabel, analisis, perbandingan
8. **Discussion** — interpretasi hasil, validitas, keterbatasan
9. **Conclusion** — kontribusi dan future work

## Catatan

- Pastikan setiap klaim didukung oleh tabel atau hasil eksperimen.
- Hindari pernyataan yang tidak dapat diverifikasi ulang.

---

# Slide 07 - Source Code & Reproducibility

## Prinsip Source Code yang Baik

- Kode dapat dijalankan ulang dari awal hingga akhir.
- Sertakan `requirements.txt` atau `environment.yml`.
- Tulis komentar pada bagian penting, bukan pada baris yang sudah jelas.
- Gunakan path relatif dan hindari hardcoded path absolut.
- Sertakan README berisi petunjuk menjalankan eksperimen.
- Simpan versi kode yang sesuai dengan hasil pada paper.

## Contoh Struktur Skrip

```text
src/
├── prepare_data.py
├── train_baseline.py
├── train_proposed.py
└── evaluate.py
```

---

# Slide 08 - Dataset & Reproducibility

## Dokumentasi Dataset

- Nama dataset, sumber asli, dan tautan.
- Lisensi dan batasan penggunaan.
- Versi dataset jika tersedia.
- Proses pengunduhan dan preprocessing yang dilakukan.
- Split train/validation/test dan mekanisme cross-validation.

## Jika Dataset Tidak Dapat Dibagikan

- Jelaskan cara memperoleh dataset.
- Sertakan deskripsi statistik dan karakteristik utama.
- Pastikan eksperimen tetap dapat direplikasi pada dataset serupa.

## Etika

- Jangan menyertakan data pribadi tanpa anonimisasi.
- Patuhi ketentuan penggunaan data.

---

# Slide 09 - Experimental Configuration

## Yang Harus Didokumentasikan

- Hyperparameter setiap model (baseline dan proposed).
- Jumlah fold dan seed acak.
- Strategi tuning (manual, random search, Bayesian).
- Lingkungan: versi Python, library, GPU/CPU, sistem operasi.
- Waktu pelatihan dan komputasi yang digunakan.

## Contoh Tabel Konfigurasi

| Model | Parameter | Nilai |
|---|---|---|
| XGBoost | n_estimators | 500 |
| XGBoost | max_depth | 6 |
| XGBoost | learning_rate | 0.01 |
| Proposed NN | hidden_units | [128, 64] |

## Tujuan

- Memastikan perbandingan fair.
- Memungkinkan peneliti lain mereproduksi eksperimen.

---

# Slide 10 - Experimental Results

## Format Penyajian Hasil

- Gunakan tabel dengan rata-rata dan standar deviasi.
- Laporkan semua metrik yang relevan dengan research question.
- Sertakan hasil per dataset jika menggunakan lebih dari satu dataset.
- Jika ada, tampilkan hasil uji statistik atau confidence interval.

## Contoh Tabel

| Dataset | Model | F1 | ROC-AUC |
|---|---|---|---|
| D1 | Baseline | 0.812 ± 0.03 | 0.891 ± 0.02 |
| D1 | Proposed | 0.835 ± 0.02 | 0.912 ± 0.01 |

## Catatan

- Jangan hanya menampilkan model terbaik tanpa konteks.
- Jelaskan mengapa perbedaan ini terjadi.

---

# Slide 11 - Presentasi Final: Tujuan dan Audiens

## Tujuan Presentasi

- Mengomunikasikan alur penelitian secara ringkas dan jelas.
- Mempertahankan setiap keputusan metodologis.
- Menunjukkan kontribusi ilmiah yang nyata.
- Memperlihatkan kedalaman pemahaman terhadap bidang data mining.

## Audiens

- Dosen penguji.
- Mahasiswa lain sebagai pendengar.
- Calon pengguna hasil penelitian.

## Implikasi

- Fokus pada penalaran ilmiah, bukan sekadar mengoperasikan model.
- Hindari terlalu banyak detail teknis; utamakan keterkaitan antarbagian.

---

# Slide 12 - Struktur Presentasi Final

## Usulan Alokasi Waktu

| Bagian Presentasi | Durasi (menit) |
|---|---|
| Research problem & gap | 2 |
| Research question & hipotesis | 1 |
| Methodology | 3 |
| Baseline & experimental design | 2 |
| Results | 4 |
| Validity & limitations | 2 |
| Contribution & future work | 1 |
| **Total** | **15** |

## Catatan

- Durasi dapat disesuaikan dengan ketentuan dosen.
- Sediakan waktu lebih di bagian results dan validity.
- Latih agar tidak melebihi batas waktu.

---

# Slide 13 - Slide Presentasi 1: Research Context & Problem

## Yang Harus Ditampilkan

- Latar belakang domain atau permasalahan nyata.
- Mengapa masalah ini penting dan relevan saat ini.
- Contoh kasus atau data awal yang memotivasi penelitian.
- Dampak jika masalah tidak diselesaikan.

## Pertanyaan Panduan

- Apa masalah besarnya?
- Siapa yang terkena dampak?
- Bagaimana data mining dapat berperan?

## Kesalahan Umum

- Langsung ke metode tanpa menjelaskan konteks.
- Masalah yang terlalu luas atau terlalu sempit.
- Tidak menunjukkan urgensi.

---

# Slide 14 - Slide Presentasi 2: Research Gap & Research Question

## Menampilkan Gap

- Ringkas hasil penelitian sebelumnya.
- Tunjukkan keterbatasan pada metode, dataset, atau evaluasi.
- Jelaskan mengapa gap tersebut belum terjawab.

## Menyatakan Research Question

- RQ harus spesifik, terukur, dan dapat diuji.
- Contoh format: "Sejauh mana metode X meningkatkan F1 dibandingkan baseline pada data dengan ketidakseimbangan tinggi?"

## Hipotesis

- Nyatakan hipotesis awal yang mendasari desain eksperimen.
- Hubungkan hipotesis dengan hasil yang akan ditampilkan.

---

# Slide 15 - Slide Presentasi 3: Methodology

## Konten yang Perlu Disertakan

- Alur atau arsitektur metode secara visual.
- Komponen utama dan peran masing-masing.
- Mengapa metode ini lebih cocok dibandingkan pendekatan lain.
- Asumsi yang digunakan.

## Contoh Diagram ASCII

```text
Input Data
    ↓
Preprocessing
    ↓
Feature Representation
    ↓
Model Training
    ↓
Prediction & Evaluation
```

## Hindari

- Menjelaskan setiap baris kode.
- Memperlihatkan rumus tanpa interpretasi.
- Meninggalkan detail penting untuk pertanyaan defense.

---

# Slide 16 - Slide Presentasi 4: Baseline & Experimental Design

## Menampilkan Baseline

- Sebutkan baseline dengan alasan pemilihan.
- Pastikan baseline merupakan representasi praktik terbaik.

## Menampilkan Experimental Design

- Dataset dan pembagian data.
- Validasi: k-fold, hold-out, atau temporal split.
- Metrik yang digunakan.
- Pengaturan hyperparameter yang fair.

## Pertanyaan yang Harus Terjawab

- Apakah eksperimen dapat menjawab research question?
- Apakah perbandingan antar model dilakukan secara adil?

---

# Slide 17 - Slide Presentasi 5: Results

## Struktur Penyajian Hasil

- Tampilkan tabel utama di awal.
- Jelaskan hasil satu per satu dengan interpretasi.
- Bandingkan dengan baseline dan penelitian sebelumnya.
- Tunjukkan analisis tambahan: error analysis, robustness, ablasi.

## Contoh Kalimat Hasil

> "Pada dataset D1, metode yang diusulkan mencapai F1 0,835, meningkat 2,3 poin dibandingkan baseline terbaik. Peningkatan ini konsisten pada tiga seed yang berbeda."

## Kesalahan Umum

- Menampilkan terlalu banyak angka tanpa logika.
- Menyembunyikan hasil yang gagal.
- Mengklaim superioritas tanpa mempertimbangkan varians.

---

# Slide 18 - Slide Presentasi 6: Validity & Limitations

## Jenis Validitas

| Jenis | Pertanyaan Kunci |
|---|---|
| Internal | Apakah ada data leakage atau confounding? |
| External | Apakah hasil berlaku pada data lain? |
| Construct | Apakah metrik mencerminkan kontribusi yang diklaim? |
| Conclusion | Apakah kesimpulan didukung oleh jumlah eksperimen yang cukup? |

## Cara Menyajikan

- Akui keterbatasan secara jujur.
- Sebutkan langkah mitigasi yang telah dilakukan.
- Jelaskan pengaruh keterbatasan terhadap interpretasi hasil.

---

# Slide 19 - Slide Presentasi 7: Scientific Contribution & Future Work

## Identifikasi Kontribusi

- Temuan empiris baru.
- Metode atau modifikasi metode.
- Analisis mendalam terhadap karakteristik data.
- Benchmark atau dataset baru.
- Penjelasan mengapa suatu pendekatan bekerja atau gagal.

## Future Work

- Usulan lanjutan yang logis dari keterbatasan.
- Peluang penerapan pada domain lain.
- Pengembangan dari aspek komputasi atau skalabilitas.

## Pertanyaan Kunci

- Apa pengetahuan baru yang diperoleh?
- Mengapa kontribusi ini penting bagi komunitas data mining?

---

# Slide 20 - Paper Defense: Aspek Penilaian

## Apa yang Dinilai Penguji

- Pemahaman research problem dan gap.
- Keterkaitan antara RQ, metode, dan hasil.
- Kekuatan baseline dan desain eksperimen.
- Kualitas bukti dan analisis.
- Kejujuran dalam melaporkan keterbatasan.
- Kemampuan mempertahankan argumen secara ilmiah.

## Prinsip Defense

- Setiap jawaban harus berbasis data dan literatur.
- Jika dinyatakan "belum diuji", akui dan jelaskan alasannya.
- Tunjukkan bahwa keputusan penelitian dibuat secara sadar dan beralasan.

---

# Slide 21 - Pertanyaan Kunci: Problem & Gap

## Contoh Pertanyaan

- Mengapa masalah ini penting untuk diselesaikan?
- Apa perbedaan penelitian Anda dengan penelitian sebelumnya?
- Apakah gap yang Anda sebutkan benar-benar belum dijawab?
- Mengapa memilih domain atau dataset tertentu?
- Apakah masalah Anda merupakan engineering problem atau research problem?

## Strategi Menjawab

- Ulangi research problem dan research gap secara ringkas.
- Rujuk pada beberapa paper yang relevan.
- Jelaskan bahwa pemilihan domain didasari keterwakilan data dan relevansi.

---

# Slide 22 - Pertanyaan Kunci: Method & Baseline

## Contoh Pertanyaan

- Mengapa memilih metode ini dibandingkan alternatif lain?
- Apa asumsi dasar metode Anda?
- Apakah baseline yang digunakan sudah cukup kuat?
- Bagaimana Anda memastikan bahwa peningkatan bukan hanya karena tuning yang lebih baik?
- Berapa sumber daya komputasi yang dibutuhkan?

## Strategi Menjawab

- Jelaskan kesesuaian metode dengan karakteristik masalah.
- Tunjukkan bahwa baseline di-tuning dengan budget yang sama.
- Sebutkan kompleksitas komputasi secara jujur.

---

# Slide 23 - Pertanyaan Kunci: Experimental Design & Validity

## Contoh Pertanyaan

- Bagaimana Anda membagi data training dan testing?
- Apakah preprocessing dilakukan sebelum split data?
- Bagaimana Anda menghindari data leakage?
- Mengapa memilih metrik ini?
- Apakah perbedaan hasil signifikan secara statistik?

## Strategi Menjawab

- Gambarkan alur eksperimen secara singkat.
- Tunjukkan bahwa seluruh preprocessing di-fit pada data training saja.
- Jelaskan pemilihan metrik berdasarkan karakteristik data, misalnya data tidak seimbang.

---

# Slide 24 - Pertanyaan Kunci: Results & Evidence

## Contoh Pertanyaan

- Dapatkah Anda menjelaskan mengapa metode Anda lebih unggul pada kasus tertentu?
- Bagaimana jika jumlah seed diperbanyak?
- Apakah Anda melakukan error analysis?
- Apa pola dari failure case yang Anda temukan?
- Bagaimana hasil pada dataset di luar yang dilaporkan?

## Strategi Menjawab

- Gunakan tabel atau grafik untuk menunjukkan bukti.
- Jelaskan bahwa hasil adalah rata-rata dari beberapa seed.
- Akui jika analisis tambahan belum dilakukan, tetapi sebutkan rencana.

---

# Slide 25 - Pertanyaan Kunci: Contribution & Future Work

## Contoh Pertanyaan

- Apa kontribusi ilmiah utama Anda?
- Apa yang pembaca ketahui setelah membaca paper Anda?
- Apakah kontribusi Anda dapat direplikasi oleh peneliti lain?
- Bagaimana penelitian ini dapat dikembangkan lebih lanjut?
- Apa implikasi praktis bagi industri?

## Strategi Menjawab

- Nyatakan kontribusi dalam satu kalimat yang jelas.
- Bedakan antara kontribusi metode, empiris, dan analisis.
- Gunakan future work sebagai bukti bahwa Anda memahami keterbatasan.

---

# Slide 26 - Strategi Menjawab Defense

## Prinsip Dasar

- Dengarkan pertanyaan sampai selesai tanpa menyela.
- Jika perlu, ulangi pertanyaan untuk memastikan pemahaman.
- Jawab dengan alur: **klaim → bukti → keterbatasan**.
- Gunakan istilah yang konsisten dengan paper.
- Jika tidak yakin, katakan "Ini belum saya uji secara langsung, tetapi berdasarkan literatur..."

## Kerangka Jawaban

```text
Menjawab pertanyaan penguji:
1. Konfirmasi pertanyaan
2. Nyatakan posisi singkat
3. Berikan evidence dari eksperimen
4. Akui keterbatasan jika ada
5. Tutup dengan kesimpulan yang sopan
```

---

# Slide 27 - Menangani Pertanyaan Sulit

## Tips Tetap Tenang

- Jangan panik ketika mendapat pertanyaan di luar dugaan.
- Ambil napas, ulangi pertanyaan dengan kata-kata sendiri.
- Minta izin untuk berpikir sejenak.
- Kaitkan pertanyaan dengan bagian yang sudah dipresentasikan.

## Jika Jawaban Tidak Diketahui

- Jangan mengarang data atau hasil.
- Akui dengan jujur: "Pertanyaan yang baik, dan ini belum menjadi fokus eksperimen saya."
- Jelaskan mengapa pertanyaan tersebut belum dijawab dan bagaimana seharusnya dijawab.

## Pola Pikir

- Defense adalah diskusi ilmiah, bukan ujian hafalan.
- Penguji menilai proses berpikir, bukan kesempurnaan.

---

# Slide 28 - Rubrik Penilaian Final Research Project

## Komponen dan Bobot

| Aspek | Bobot |
|---|---:|
| Research problem | 10% |
| Literature dan research gap | 10% |
| Research question / hypothesis | 10% |
| Methodology | 15% |
| Experimental design | 15% |
| Results dan analysis | 15% |
| Scientific contribution | 15% |
| Paper quality dan reproducibility | 10% |

## Implikasi

- Research question dan eksperimen memiliki bobot terbesar.
- Kualitas paper dan kemampuan presentasi tetap diperhitungkan.
- Kontribusi ilmiah menjadi pembeda antara nilai tinggi dan sangat tinggi.

---

# Slide 29 - Threats to Validity yang Harus Disiapkan

## Empat Kategori Utama

| Kategori | Contoh dalam Data Mining |
|---|---|
| Internal validity | Data leakage, preprocessing yang salah, confounding |
| External validity | Dataset terlalu kecil, tidak representatif |
| Construct validity | Metrik tidak sesuai, evaluasi tidak mengukur kontribusi |
| Conclusion validity | Terlalu sedikit seed, distribusi tidak normal |

## Cara Menyiapkan

- Buat daftar keterbatasan yang mungkin ditanyakan.
- Siapkan tanggapan dan langkah mitigasi.
- Jangan menutupi kelemahan; tunjukkan bahwa Anda menyadarinya.

---

# Slide 30 - Checklist Sebelum Presentasi

## Persiapan Teknis

- [ ] Final paper sudah diunggah atau dicetak sesuai ketentuan
- [ ] Source code dan data sudah disimpan pada repositori
- [ ] Slide dapat ditampilkan dengan baik (font, grafik, warna)
- [ ] File presentasi memiliki cadangan (cloud atau USB)
- [ ] Timer untuk menjaga durasi presentasi

## Persiapan Akademik

- [ ] Hafalkan research question dan kontribusi utama
- [ ] Latihan menjawab pertanyaan dari rekan
- [ ] Periksa kembali tabel dan angka pada slide
- [ ] Siapkan slide validitas dan keterbatasan lebih awal

---

# Slide 31 - Contoh Tabel Hasil Eksperimen

## Contoh Tabel yang Informatif

| Dataset | Model | Accuracy | F1 | ROC-AUC |
|---|---|---|---|---|
| D1 | Logistic Regression | 0.812 ± 0.02 | 0.783 ± 0.03 | 0.891 ± 0.01 |
| D1 | Random Forest | 0.835 ± 0.01 | 0.802 ± 0.02 | 0.914 ± 0.01 |
| D1 | XGBoost | 0.840 ± 0.01 | 0.810 ± 0.02 | 0.918 ± 0.01 |
| D1 | Proposed | **0.855** ± 0.01 | **0.833** ± 0.02 | **0.929** ± 0.01 |

## Keterangan

- Nilai merupakan rata-rata 5-fold cross-validation.
- Semua model menggunakan tuning yang sama (Optuna, 50 trials).
- Model yang diusulkan menunjukkan peningkatan konsisten.

---

# Slide 32 - Workflow Persiapan Defense

## Alur Kerja Sebelum Hari H

```text
1. Jalankan ulang eksperimen utama untuk memastikan hasil konsisten
2. Periksa kembali semua angka pada paper dan slide
3. Siapkan gambar dan tabel untuk setiap klaim penting
4. Susun slide dengan alur problem → RQ → metode → eksperimen → hasil → kontribusi
5. Latihan presentasi dengan timer dan rekaman
6. Uji sesi tanya jawab bersama teman
7. Unggah seluruh deliverable ke platform yang ditentukan
8. Tinjau kembali paper dan slide satu hari sebelum presentasi
```

## Catatan

- Jangan menambah eksperimen baru setelah paper dikumpulkan kecuali sangat penting.
- Fokus pada konsistensi antar deliverable.

---

# Slide 33 - Etika Akademik dan Plagiarisme

## Prinsip Etika

- Kutip seluruh referensi yang digunakan dengan benar.
- Tidak memanipulasi hasil untuk mendapatkan skor lebih baik.
- Tidak menghilangkan data yang tidak mendukung klaim.
- Menyebutkan kontribusi anggota tim secara proporsional.
- Menghindari self-plagiarism dengan tidak mendaur ulang publikasi tanpa atribusi.

## Konsekuensi

- Pelanggaran etika dapat membatalkan nilai dan mengganggu reputasi akademik.
- Hasil penelitian yang tidak jujur akan sulit dipertahankan saat direproduksi.

## Pesan

- Kejujuran ilmiah lebih penting daripada hasil yang sempurna.

---

# Slide 34 - Penyerahan Final Research Project

## Cara Penyerahan

- Serahkan sesuai panduan yang diberikan oleh dosen.
- Gunakan format penamaan file yang jelas, misalnya:

```text
NIM_Nama_FinalProject.zip
```

## Isi Arsip

- `paper/`  → final paper dalam bentuk PDF atau DOCX
- `code/`   → seluruh source code
- `data/`   → dataset atau README dengan tautan dataset
- `config/` → file konfigurasi eksperimen
- `results/` → hasil eksperimen dalam format CSV/JSON
- `slides/` → file presentasi final

## Tenggat Waktu

- Pastikan semua berkas lengkap sebelum sesi presentasi dimulai.
- Jika ada pengecualian, koordinasikan dengan dosen.

---

# Slide 35 - Struktur Folder/Repositori Penelitian

## Contoh Struktur yang Direkomendasikan

```text
project/
├── README.md
├── requirements.txt
├── environment.yml
├── data/
│   ├── raw/
│   └── processed/
├── src/
│   ├── data_preprocessing.py
│   ├── baseline.py
│   ├── proposed_model.py
│   └── evaluate.py
├── configs/
│   ├── baseline_config.yaml
│   └── proposed_config.yaml
├── results/
│   ├── tables/
│   ├── figures/
│   └── logs/
├── paper/
│   └── final_paper.pdf
└── slides/
    └── presentation_final.pdf
```

## Manfaat

- Mempermudah penguji menelusuri ulang eksperimen.
- Meningkatkan nilai reproducibility.
- Menunjukkan profesionalisme riset.

---

# Slide 36 - Susunan Acara Hari Ini

## Rencana Kegiatan

| No | Kegiatan | Waktu |
|---|---|---|
| 1 | Pembukaan dan penjelasan teknis | 5 menit |
| 2 | Presentasi mahasiswa 1 | 15 menit |
| 3 | Paper defense mahasiswa 1 | 10 menit |
| 4 | Presentasi mahasiswa 2 | 15 menit |
| 5 | Paper defense mahasiswa 2 | 10 menit |
| 6 | Presentasi selanjutnya | sesuai daftar |
| 7 | Diskusi umum dan evaluasi | 15 menit |
| 8 | Penyerahan berkas final | akhir sesi |

## Catatan

- Ikuti urutan yang ditentukan oleh dosen pengampu.
- Hadir di ruangan sebelum sesi dimulai.
- Siapkan alat bantu presentasi dan cadangan file.

---

# Slide 37 - Penutup

TERIMA KASIH

Pertemuan berikutnya

**Evaluasi akhir mata kuliah**