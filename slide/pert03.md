# Slide 00 - Cover

EF235161 - TD Data Mining  
Pertemuan 03

## Pattern Mining & Knowledge Discovery

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D  

Departemen Teknik Informatika - ITS

---

# Slide 01 - Agenda dan Peta Pertemuan

## Tujuan Pembelajaran

- Memahami konsep frequent pattern mining dan association rules.
- Mampu menggunakan Apriori dan FP-Growth secara konseptual dan praktis.
- Mampu mengevaluasi makna statistik dari pola yang ditemukan.
- Mampu membedakan statistical pattern dengan meaningful knowledge.

## Agenda

1. Pattern mining dalam proses Knowledge Discovery
2. Support, confidence, lift
3. Apriori dan FP-Growth
4. Sequential pattern mining
5. Pattern interestingness
6. Constraint-based mining
7. Diskusi kritis dan kaitan dengan research project

## Posisi dalam Alur Kuliah

```text
EDA & Preprocessing
        ↓
Pattern Mining & Knowledge Discovery
        ↓
Classification, Regression & Strong Baselines
```

---

# Slide 02 - Posisi Pertemuan dalam RPS

## Hubungan dengan Pertemuan Sebelumnya

- Pertemuan 2 membahas EDA, data preprocessing, dan experimental validity.
- Pola yang ditemukan pada pertemuan ini tidak bisa lepas dari pemahaman kualitas data.
- EDA membantu menentukan representasi data, misalnya data transaksi atau data sekuensial.
- Temuan EDA seperti missing values, outlier, atau data leakage juga memengaruhi validitas pola.

## Posisi terhadap Research Project

Project minggu ini difokuskan pada penyusunan **initial literature mapping** dan **related work awal**.

## Hubungan dengan Pertemuan Berikutnya

Pada pertemuan 4, pola yang telah dipelajari akan menjadi dasar untuk berpikir tentang prediksi menggunakan classification dan regression.

---

# Slide 03 - Pattern Mining dalam Knowledge Discovery

## Knowledge Discovery in Databases

```text
Database
    ↓
Preprocessing
    ↓
Transformation
    ↓
Data Mining
    ↓
Pattern Evaluation
    ↓
Knowledge
```

## Peran Pattern Mining

- Pattern mining merupakan bagian inti dari tahap data mining.
- Fokusnya adalah menemukan struktur yang berulang, menarik, dan tidak sepele.
- Berbeda dengan supervised learning, pattern mining umumnya tidak memakai label target.
- Hasil pattern mining masih harus dievaluasi agar menjadi pengetahuan yang bermakna.

---

# Slide 04 - Terminologi Dasar

## Istilah Utama

| Istilah | Definisi |
|---|---|
| **Itemset** | Himpunan satu atau lebih item |
| **k-itemset** | Itemset dengan k item |
| **Frequent itemset** | Itemset yang memenuhi minimum support |
| **Association rule** | Implikasi berbentuk X → Y |
| **Support** | Proporsi transaksi yang memuat itemset |
| **Confidence** | Probabilitas bersyarat Y muncul jika X muncul |
| **Lift** | Ukuran kekuatan asosiasi relatif terhadap independensi |
| **Sequential pattern** | Pola yang memperhatikan urutan kejadian |

## Catatan Penting

Istilah "frequent" hanya berbicara tentang frekuensi, bukan tentang makna.

---

# Slide 05 - Representasi Data Transaksi

## Market Basket Transaction Database

| Transaksi | Item |
|---|---|
| T1 | bread, milk |
| T2 | bread, diaper, beer, eggs |
| T3 | milk, diaper, beer, cola |
| T4 | bread, milk, diaper, beer |
| T5 | bread, milk, diaper, cola |

## Contoh Representasi Biner

```text
      bread  milk  diaper  beer  eggs  cola
T1     1      1       0      0     0     0
T2     1      0       1      1     1     0
T3     0      1       1      1     0     1
T4     1      1       1      1     0     0
T5     1      1       1      0     0     1
```

---

# Slide 06 - Frequent Itemset dan Support

## Definisi Support

```text
support(X) = jumlah transaksi yang memuat X
             -----------------------------------
             jumlah seluruh transaksi
```

## Contoh pada Data Transaksi

- support({beer, diaper}) = 3/5 = 0,6
- support({bread, milk}) = 3/5 = 0,6
- support({bread, milk, diaper}) = 2/5 = 0,4

Jika minimum support = 0,4, maka semua itemset di atas tergolong frequent.

---

# Slide 07 - Support sebagai Frekuensi Statistik

## Makna Support

- Support menunjukkan seberapa umum suatu itemset muncul.
- Support tidak menunjukkan hubungan kausal.
- Support juga tidak menunjukkan apakah pola itu penting secara domain.

## Implikasi Penelitian

Pola dengan support tinggi belum tentu bermakna.

Contoh:

- Pada data restoran, `burger → fries` bisa memiliki support tinggi.
- Namun pengetahuan tersebut sudah umum dan tidak memberikan insight baru.

## Kesimpulan Awal

Support adalah gerbang awal, bukan produk akhir dari pattern mining.

---

# Slide 08 - Confidence

## Definisi

```text
confidence(X → Y) = support(X ∪ Y) / support(X)
```

Confidence mengukur seberapa sering Y muncul ketika X muncul.

## Contoh

Aturan `{diaper, beer} → {milk}`

- support({diaper, beer, milk}) = 2/5 = 0,4
- support({diaper, beer}) = 3/5 = 0,6
- confidence = 0,4 / 0,6 = 0,667

## Interpretasi

Jika pelanggan membeli diaper dan beer, maka peluang membeli milk adalah 66,7%.

---

# Slide 09 - Lift

## Definisi

```text
lift(X → Y) = support(X ∪ Y) / (support(X) × support(Y))
```

## Contoh

Aturan `{diaper, beer} → {milk}`

- support({diaper, beer, milk}) = 0,4
- support({diaper, beer}) = 0,6
- support({milk}) = 0,8
- lift = 0,4 / (0,6 × 0,8) = 0,833

## Interpretasi

- lift > 1 → asosiasi positif
- lift = 1 → independen
- lift < 1 → asosiasi negatif

Pada contoh ini, confidence tinggi tetapi lift rendah. Hal ini terjadi karena milk memang memiliki support tinggi.

---

# Slide 10 - Association Rules: Formulasi

## Bentuk Umum

```text
Antecedent → Consequent
```

Contoh:

```text
{diaper, beer} → {milk}
```

## Parameter Utama

| Parameter | Peran |
|---|---|
| min_support | Menyaring itemset yang jarang |
| min_confidence | Menyaring aturan yang tidak cukup kuat |
| min_lift | Menyaring aturan yang tidak lebih baik dari independensi |

## Proses

1. Menemukan semua frequent itemset.
2. Membangkitkan aturan dari frequent itemset.
3. Menghitung confidence dan lift.
4. Menyaring aturan berdasarkan ambang batas.

---

# Slide 11 - Workflow Analisis Pola

## Diagram Alur Praktis

```text
Data Transaksi
      ↓
Encode itemset biner
      ↓
Pilih min_support
      ↓
Temukan frequent itemsets
      ↓
Bangkitkan association rules
      ↓
Evaluasi dengan lift / conviction / domain
      ↓
Interpretasi dan validasi
```

## Catatan

Validasi tidak berakhir pada perhitungan metrik.

Pola harus diperiksa pada subset data atau periode waktu berbeda untuk menguji kestabilannya.

---

# Slide 12 - Apriori: Prinsip Dasar

## Properti Apriori

```text
Setiap subset dari frequent itemset pasti frequent
```

Sifat ini disebut **anti-monotonicity**.

## Arti Properti Tersebut

Jika `{a, b, c}` frequent, maka `{a, b}`, `{a, c}`, dan `{b, c}` juga frequent.

Sebaliknya, jika `{a, b}` infrequent, maka semua superset yang memuat `{a, b}` juga infrequent.

## Manfaat

- Kandidat itemset dapat dipangkas lebih awal.
- Pencarian frequent itemset menjadi lebih efisien.
- Menjadi dasar berbagai algoritma pattern mining.

---

# Slide 13 - Apriori: Pseudocode

## Algoritma Apriori

```text
L1 = frequent 1-itemsets
for k = 2; L(k-1) tidak kosong; k = k + 1:
    Ck = generate_candidates(L(k-1))
    Ck = prune_infrequent_subset(Ck)
    for setiap transaksi T:
        hitung support kandidat pada Ck
    Lk = kandidat dengan support >= min_support
return gabungan seluruh Lk
```

## Pembangkitan Aturan

```text
untuk setiap frequent itemset l:
    untuk setiap subset a dari l:
        b = l - a
        jika confidence(a → b) >= min_confidence:
            simpan aturan a → b
```

---

# Slide 14 - Apriori: Contoh Python

## Menggunakan mlxtend

```python
import pandas as pd
from mlxtend.frequent_patterns import apriori
from mlxtend.frequent_patterns import association_rules

## df_biner: Dataframe berisi 0/1 untuk setiap item
frequent_itemsets = apriori(
    df_biner,
    min_support=0.4,
    use_colnames=True
)

rules = association_rules(
    frequent_itemsets,
    metric="lift",
    min_threshold=1.0
)

print(rules[["antecedents", "consequents",
             "support", "confidence", "lift"]])
```

---

# Slide 15 - Keterbatasan Apriori

## Kelemahan Utama

- Melakukan banyak scan terhadap database.
- Jumlah kandidat dapat meledak pada data dengan banyak item.
- Kinerja bergantung pada nilai min_support.
- Tidak cocok langsung untuk data numerik kontinu.
- Tidak menangani data sparse secara optimal.

## Dampak pada Penelitian

- Kompleksitas komputasi perlu dilaporkan.
- Pemilihan min_support harus dijelaskan dan dijustifikasi.
- Pada dataset besar, perlu pertimbangan metode berbasis FP-Growth atau sampling.

---

# Slide 16 - FP-Growth: Konsep FP-Tree

## Ide Utama

FP-Growth menghindari pembangkitan kandidat secara eksplisit.

## Struktur Data

- FP-tree adalah pohon prefix yang memadatkan informasi transaksi.
- Setiap node merepresentasikan item.
- Setiap node menyimpan support count.
- Header table menghubungkan node yang berlabel sama.

## Keuntungan

- Database hanya dipindai dua kali.
- Tidak perlu membangkitkan kandidat seperti Apriori.
- Lebih cepat pada data padat dan data besar.

---

# Slide 17 - FP-Growth: Algoritma

## Langkah-Langkah

1. Scan pertama untuk menghitung support setiap item.
2. Urutkan item berdasarkan support menurun.
3. Scan kedua untuk membangun FP-tree.
4. Untuk setiap item frequent, bangun conditional pattern base.
5. Bangun conditional FP-tree secara rekursif.
6. Kumpulkan frequent itemsets.

## Pseudocode Sederhana

```text
FP-Growth(Tree, suffix):
    jika Tree memuat jalur tunggal:
        gabungkan semua kombinasi bersama suffix
    selain itu:
        untuk setiap item a pada header Tree:
            hasil = suffix ∪ {a}
            bangun conditional FP-tree
            jika conditional FP-tree tidak kosong:
                FP-Growth(conditional tree, hasil)
```

---

# Slide 18 - FP-Growth: Kode Python

```python
from mlxtend.frequent_patterns import fpgrowth

frequent_itemsets = fpgrowth(
    df_biner,
    min_support=0.4,
    use_colnames=True
)

print(frequent_itemsets)
```

## Perbedaan dengan Apriori

Dari sisi pemanggilan fungsi, interface mlxtend hampir sama.

Perbedaan utama ada pada algoritma internal dan kompleksitas komputasi.

## Eksperimen

Untuk praktikum, bandingkan waktu eksekusi Apriori vs FP-Growth pada ukuran data berbeda.

---

# Slide 19 - Perbandingan Apriori vs FP-Growth

## Tabel Perbandingan

| Aspek | Apriori | FP-Growth |
|---|---|---|
| Prinsip | Candidate generation | Divide and conquer |
| Scan database | Banyak scan | Dua scan |
| Kandidat | Dibangkitkan dan dipangkas | Tidak membangkitkan kandidat |
| Struktur data | Hash tree | FP-tree |
| Kompleksitas implementasi | Lebih sederhana | Lebih kompleks |
| Kinerja data padat | Relatif lambat | Lebih cepat |
| Kinerja data sparse | Masih dapat digunakan | Efisien |

## Kesimpulan

Pilihan algoritma bergantung pada ukuran data, densitas data, dan kebutuhan eksperimen.

---

# Slide 20 - Sequential Pattern Mining

## Definisi

Sequential pattern mining mencari pola yang memperhatikan urutan kejadian.

## Perbedaan dengan Association Rules

- Association rules tidak memperhatikan urutan.
- Sequential pattern menggunakan sequence database.
- Pola berbentuk `A → B → C`, artinya A terjadi sebelum B, kemudian C.

## Contoh Aplikasi

- Analisis alur pembelian pelanggan
- Web navigation mining
- Analisis alur proses bisnis
- Pemantauan alur perawatan pasien

---

# Slide 21 - Sequential Pattern: Contoh

## Sequence Database

| Customer | Sequence |
|---|---|
| C1 | beli laptop → beli mouse → beli USB |
| C2 | beli laptop → beli USB |
| C3 | beli laptop → beli mouse |

## Pola yang Dapat Ditemukan

- `laptop → mouse` muncul pada C1 dan C3, support = 2/3.
- `laptop → USB` muncul pada C1 dan C2, support = 2/3.
- `laptop → mouse → USB` hanya muncul pada C1.

## Catatan

Urutan menentukan makna. Pola yang sama tanpa urutan mungkin memberikan kesimpulan berbeda.

---

# Slide 22 - Pattern Interestingness: Masalah

## Masalah Utama

Frequent itemset mining sering menghasilkan:

- ribuan frequent itemsets;
- puluhan ribu association rules;
- banyak aturan yang sebenarnya sudah diketahui;
- banyak aturan yang secara statistik kuat tetapi tidak bermakna.

## Pertanyaan Kunci

> Apakah pola yang sering muncul secara statistik otomatis memiliki arti atau nilai ilmiah?

Jawaban singkat:

> Tidak. Frekuensi hanyalah satu bukti awal.

## Perlu Ukuran Tambahan

Diperlukan metrik interestingness dan pemeriksaan domain.

---

# Slide 23 - Metrik Tambahan Interestingness

## Metrik yang Umum Digunakan

| Metrik | Formula | Interpretasi |
|---|---|---|
| Lift | P(X∩Y) / (P(X) P(Y)) | Kekuatan asosiasi relatif terhadap independensi |
| Leverage | P(X∩Y) − P(X) P(Y) | Selisih dari independensi |
| Conviction | (1 − P(Y)) / (1 − P(Y|X)) | Seberapa jauh aturan dari implikasi salah |
| All-confidence | sup(X∪Y) / max(sup(X), sup(Y)) | Penilaian asosiasi dengan baseline kuat |

## Perhatian

Tidak ada metrik tunggal yang sempurna.

Pilih metrik yang sesuai dengan pertanyaan penelitian.

---

# Slide 24 - Pola Redundan dan Pattern Explosion

## Contoh Pola Redundan

- Jika `A → C` sudah ditemukan, maka `A, B → C` sering menjadi redundan.
- Jika `A → B` dan `B → C` trivial, maka `A → C` belum tentu menarik.

## Pattern Explosion

Semakin kecil min_support, semakin banyak pola yang dihasilkan.

## Strategi

- Gunakan closed frequent itemsets.
- Gunakan maximal frequent itemsets.
- Gunakan constraint-based mining.
- Gunakan evaluasi domain.

---

# Slide 25 - Constraint-Based Mining

## Pengertian

Constraint-based mining membatasi pola yang dicari menggunakan batasan domain.

## Tujuan

- Mengurangi jumlah pola.
- Fokus pada pola yang relevan.
- Mempercepat proses mining.
- Menghubungkan hasil dengan kebutuhan pengguna.

## Contoh Constraint

- Hanya itemset yang mengandung item kategori elektronik.
- Itemset dengan panjang maksimal 4.
- Itemset dengan total nilai transaksi di atas ambang tertentu.
- Hanya pola yang muncul pada minggu tertentu.

---

# Slide 26 - Jenis Constraint

## Kategori Constraint

| Jenis | Contoh | Sifat |
|---|---|---|
| Item constraint | itemset memuat item X | Succinct |
| Length constraint | panjang itemset ≤ 4 | Anti-monotone |
| Aggregate constraint | sum(price) ≥ 5000 | Convertible/monotone |
| Constraint berbasis aturan | min_lift > 1 | Post-processing |

## Anti-monotone

Jika itemset tidak memenuhi constraint, maka semua supersetnya juga tidak memenuhi.

Sifat ini dapat digunakan untuk pruning.

## Monotone

Jika itemset memenuhi constraint, maka supersetnya juga memenuhi.

Constraint monotone perlu ditangani dengan strategi berbeda.

---

# Slide 27 - Closed dan Maximal Frequent Itemsets

## Definisi

- **Closed frequent itemset**: itemset yang tidak memiliki superset benar dengan support yang sama.
- **Maximal frequent itemset**: itemset frequent yang tidak memiliki superset frequent.

## Ilustrasi

```text
Frequent itemsets:
A, B, C, AB, AC, BC, ABC

Jika ABC frequent dan tidak ada superset lain,
maka ABC adalah maximal.

Jika support(ABC) = support(AB),
maka AB bukan closed karena AB ⊆ ABC dengan support sama.
```

## Manfaat

- Closed itemset menghemat penyimpanan tanpa kehilangan support.
- Maximal itemset lebih ringkas tetapi kehilangan informasi support.

---

# Slide 28 - Visualisasi Association Rules

## Teknik Visualisasi

- Scatter plot: support vs confidence, warna menunjukkan lift.
- Network graph: antecedent dan consequent sebagai node.
- Bubble chart: support, confidence, dan lift dalam satu gambar.

## Contoh dengan Python

```python
import matplotlib.pyplot as plt

plt.scatter(
    rules["support"],
    rules["confidence"],
    c=rules["lift"],
    cmap="viridis",
    alpha=0.6
)
plt.xlabel("Support")
plt.ylabel("Confidence")
plt.colorbar(label="Lift")
plt.show()
```

## Catatan

Visualisasi membantu eksplorasi, tetapi tidak menggantikan validasi statistik.

---

# Slide 29 - Implementasi Praktis dengan mlxtend

## Persiapan Data

```python
import pandas as pd
from mlxtend.preprocessing import TransactionEncoder

transaksi = [
    ["bread", "milk"],
    ["bread", "diaper", "beer", "eggs"],
    ["milk", "diaper", "beer", "cola"],
    ["bread", "milk", "diaper", "beer"],
    ["bread", "milk", "diaper", "cola"]
]

encoder = TransactionEncoder()
encoded = encoder.fit_transform(transaksi)
df_biner = pd.DataFrame(encoded, columns=encoder.columns_)
```

## Selanjutnya

Gunakan `apriori` atau `fpgrowth` seperti pada slide sebelumnya.

---

# Slide 30 - Contoh Eksperimen Pola Belanja

## Parameter

- min_support = 0,4
- min_confidence = 0,6
- metric = lift

## Beberapa Hasil Potensial

| Aturan | Support | Confidence | Lift |
|---|---|---|---|
| {beer} → {diaper} | 0,6 | 0,75 | 1,25 |
| {milk} → {bread} | 0,6 | 0,75 | 1,25 |
| {diaper, beer} → {milk} | 0,4 | 0,667 | 0,833 |

## Interpretasi

Aturan ketiga memiliki confidence cukup tinggi, tetapi lift < 1.

Secara keseluruhan, keberadaan diaper dan beer justru sedikit mengurangi peluang membeli milk dibandingkan baseline.

---

# Slide 31 - Interpretasi Support, Confidence, Lift

## Support

- Mengukur popularitas pola.
- Tidak mengukur hubungan.
- Support yang terlalu rendah menghasilkan pola tidak stabil.

## Confidence

- Mengukur probabilitas bersyarat.
- Dapat menyesatkan jika consequent memiliki support tinggi.

## Lift

- Mengukur hubungan relatif terhadap baseline.
- Lift dekat 1 berarti tidak ada hubungan yang kuat.
- Lift jauh di atas 1 atau di bawah 1 lebih menarik.

## Kesimpulan Praktis

Gunakan ketiganya secara bersama-sama.

---

# Slide 32 - Statistical Pattern vs Meaningful Knowledge

## Fokus Penelitian Pertemuan Ini

Mahasiswa harus mengevaluasi apakah pola yang sering muncul secara statistik otomatis memiliki arti atau nilai ilmiah.

## Pertanyaan Evaluasi

- Apakah pola menjawab pertanyaan penelitian?
- Apakah pola sudah diketahui sebelumnya?
- Apakah pola dapat dijelaskan secara domain?
- Apakah pola stabil pada subset data berbeda?
- Apakah pola memberikan rekomendasi tindakan?
- Apakah pola lebih dari sekadar artefak data?

## Prinsip

Statistical pattern adalah kandidat pengetahuan, bukan pengetahuan final.

---

# Slide 33 - Contoh Pola Kuat tapi Tidak Bermakna

## Contoh 1: Pola Trivial

Aturan `burger → fries` di restoran cepat saji dapat memiliki support dan confidence tinggi.

Pola tersebut tidak memberikan insight baru.

## Contoh 2: Lift Mendekati 1

Aturan `kopi → gula` mungkin memiliki confidence tinggi karena gula memang umum dibeli.

Lift mendekati 1 menunjukkan tidak ada asosiasi yang kuat.

## Contoh 3: Artefak Data

Jika data bulanan digabungkan tanpa memperhatikan musim, pola musiman bisa muncul sebagai asosiasi semu.

## Pelajaran

Evaluasi pola harus menggunakan metrik, domain knowledge, dan validasi silang.

---

# Slide 34 - Critical Paper Review: Pertanyaan untuk Paper Pattern Mining

## Kerangka Review

| Aspek | Pertanyaan Kritis |
|---|---|
| Research problem | Mengapa pattern mining diperlukan pada domain tersebut? |
| Dataset | Apakah data representatif dan cukup besar? |
| Metode | Apakah algoritma sesuai dengan karakteristik data? |
| Parameter | Bagaimana min_support dan ambang lain dipilih? |
| Baselines | Apakah dibandingkan dengan metode lain secara fair? |
| Evaluasi | Apakah metrik interestingness cukup dan tepat? |
| Validitas | Apakah pola diverifikasi pada data independen? |
| Kontribusi | Apakah pengetahuan baru benar-benar dihasilkan? |

## Kesimpulan

Review bukan hanya melihat hasil, tetapi menilai kualitas bukti.

---

# Slide 35 - Research Project: Initial Literature Mapping

## Target Minggu Ini

Menyusun **initial literature mapping** dan related work awal.

## Langkah Kerja

1. Tentukan topik awal penelitian.
2. Cari paper dari venue bereputasi.
3. Kelompokkan paper berdasarkan metode, dataset, dan temuan.
4. Identifikasi kelemahan atau celah penelitian.
5. Hubungkan dengan hasil EDA awal dari pertemuan 2.

## Format Sederhana Literature Map

| Paper / Venue | Problem | Metode | Dataset | Hasil | Limitation |
|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... |

## Output

Daftar pendek paper yang relevan dan sintesis awal research gap.

---

# Slide 36 - Menghubungkan ke Pertemuan 4

## Pattern Mining vs Prediction

- Pattern mining bersifat deskriptif: menemukan struktur pada data.
- Classification dan regression bersifat prediktif: memetakan fitur ke target.

## Keterkaitan

Pola asosiasi dapat menjadi inspirasi untuk feature engineering.

Sebagai contoh, frequent itemset dapat dijadikan fitur interaksi antaritem.

## Arah Berpikir

Pertemuan 4 akan menjawab:

> Bagaimana membangun baseline prediksi yang kuat dan adil?

Setelah itu, kontribusi metode baru harus dibandingkan dengan baseline tersebut.

---

# Slide 37 - Rangkuman

## Konsep Utama

- Pattern mining mencari pola berulang dalam data.
- Support, confidence, dan lift adalah metrik dasar.
- Apriori dan FP-Growth adalah algoritma utama frequent itemset mining.
- Sequential pattern mining memperhatikan urutan kejadian.
- Constraint-based mining membatasi ruang pencarian.

## Sikap Ilmiah

- Frekuensi bukan makna.
- Pattern yang menarik secara statistik belum tentu bermakna secara ilmiah.
- Validasi harus melibatkan domain knowledge dan data independen.

## Tugas

Lanjutkan kompilasi literature mapping awal untuk project.

---

# Slide 38 - Bacaan dan Persiapan

## Bacaan Utama

- Han, Pei, dan Tong. *Data Mining: Concepts and Techniques*, 4th Edition.
  - Bab frequent pattern mining dan association rules.
  - Bab sequential pattern mining.
- Dokumentasi mlxtend untuk implementasi `apriori`, `fpgrowth`, dan `association_rules`.

## Aktivitas Sebelum Pertemuan Berikutnya

- Baca satu paper internasional tentang pattern mining.
- Siapkan ringkasan kritis singkat:
  - masalah;
  - metode;
  - dataset;
  - evaluasi;
  - kelemahan.
- Lanjutkan initial literature mapping project.

---

# Slide 39 - TERIMA KASIH

TERIMA KASIH

Pertemuan berikutnya

**Classification, Regression & Strong Baselines**