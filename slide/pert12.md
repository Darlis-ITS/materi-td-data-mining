# Slide 00 - Cover

EF235161 - TD Data Mining  

Pertemuan 12  

## Temporal, Streaming Data & Concept Drift  

Dr. Darlis Herumurti, Hadziq Fabroyir Ph.D  

Departemen Teknik Informatika - ITS

---

# Slide 01 - Agenda & Peta Pertemuan

## Agenda

- Temporal data dan time-series mining
- Stream mining dan online learning
- Sliding window dan incremental learning
- Distribution shift dan concept drift
- Drift detection dan continual adaptation
- Evaluasi streaming dan tools
- Kaitan dengan research project: extended experiment / cross-dataset / generalization analysis

## Posisi Pertemuan 12 dalam RPS

| Sebelumnya | Saat Ini | Berikutnya |
|---|---|---|
| Graph Mining & GNN | Temporal, Streaming Data & Concept Drift | Explainable, Trustworthy & Responsible Data Mining |

---

# Slide 02 - Tujuan Pembelajaran & CPMK

## Capaian Pembelajaran Mata Kuliah

Pertemuan ini mendukung **CPMK-1, CPMK-4, CPMK-5**.

| CPMK | Fokus |
|---|---|
| CPMK-1 | Menganalisis konsep dan metode temporal/stream mining serta asumsi yang mendasarinya |
| CPMK-4 | Merancang eksperimen yang valid ketika distribusi data berubah |
| CPMK-5 | Membandingkan perilaku model klasik, batch, dan online pada data yang dinamis |

## Setelah pertemuan ini, mahasiswa diharapkan mampu

- Menjelaskan perbedaan data statis, data temporal, dan data stream.
- Mengidentifikasi jenis concept drift serta dampaknya pada performa model.
- Menerapkan strategi deteksi drift dan adaptasi model.
- Menyusun desain eksperimen streaming yang adil dan reproducible.
- Menghubungkan topik ini dengan extended experiment pada research project.

---

# Slide 03 - Peta Konsep: Temporal, Stream, Concept Drift

```text
Data Temporal
      |
      v
Time-Series Mining  ----->  Stream Mining
      |                        |
      v                        v
Forecast/Classification   Online Learning
      |                  Sliding Window
      |                  Incremental Learning
      +--------------------------+
                                 |
                                 v
                    Distribution Shift
                                 |
                                 v
                         Concept Drift
                                 |
                                 v
                    Drift Detection
                                 |
                                 v
                     Continual Adaptation
```

- Temporal/streaming mining menekankan bahwa **data datang seiring waktu**.
- Model harus mampu menyesuaikan diri saat **karakteristik data berubah**.
- Konsep ini berhubungan erat dengan **generalisasi**: model yang baik pada satu periode belum tentu baik pada periode berikutnya.

---

# Slide 04 - Temporal Data: Definisi dan Jenis

## Definisi

Temporal data adalah data yang memiliki **dimensi waktu** sebagai atribut utama. Setiap observasi dapat dikaitkan dengan waktu terjadinya, urutan, atau interval tertentu.

## Jenis data temporal

| Jenis | Deskripsi | Contoh |
|---|---|---|
| Time series | Observasi numerik diukur secara berurutan pada interval waktu | Harga saham harian, suhu sensor per menit |
| Panel data | Banyak entitas diamati dalam beberapa periode waktu | Penjualan beberapa toko per bulan |
| Event sequence | Kejadian tidak teratur dengan timestamp | Log transaksi, klik pengguna |
| Spatial-temporal | Data memiliki lokasi dan waktu | Data GPS kendaraan |

## Implikasi penelitian

- Urutan observasi **tidak boleh diacak sembarangan**.
- Pemilihan train/test split harus menghormati **batas waktu** untuk menghindari data leakage.

---

# Slide 05 - Karakteristik Data Temporal

## Sifat-sifat penting

- **Dependensi temporal**: nilai pada waktu `t` sering dipengaruhi oleh nilai pada waktu sebelumnya.
- **Trend**: pergerakan jangka panjang.
- **Seasonality**: pola berulang dalam periode tetap.
- **Non-stasioneritas**: distribusi data dapat berubah seiring waktu.

## Beberapa konsekuensi untuk data mining

- Observasi tidak *independent and identically distributed* (i.i.d.).
- Evaluasi berbasis *random shuffle* bisa menghasilkan optimisme palsu.
- Model perlu menangkap **konteks waktu**, bukan hanya pola statis.

## Contoh ilustrasi

```text
Hari     1   2   3   4   5   6   7   8   9  10
Nilai   10  12  13  11  25  27  26  40  42  41
```

Perhatikan bahwa nilai pada hari ke-6 lebih tinggi dari hari ke-5; hubungan antar hari penting.

---

# Slide 06 - Time-Series Mining: Identifikasi Tugas

## Tugas utama

| Tugas | Tujuan | Contoh |
|---|---|---|
| Forecasting | Memprediksi nilai masa depan | Prediksi penjualan bulan depan |
| Classification | Memberi label pada deret waktu | Deteksi aktivitas dari sinyal sensor |
| Clustering | Mengelompokkan deret waktu serupa | Segmentasi pola konsumsi listrik |
| Anomaly detection | Menemukan pola yang tidak biasa | Deteksi lonjakan trafik |
| Change point detection | Menemukan titik perubahan distribusi | Deteksi perubahan perilaku pengguna |

## Catatan untuk penelitian

- Time-series mining berbeda dengan regresi/klasifikasi statis karena **urutan waktu** merupakan sumber informasi utama.
- Pemilihan model sangat bergantung pada horizon waktu dan granularitas data.
- Pada pertemuan ini, penekanan diberikan pada perubahan distribusi dalam waktu, bukan sekadar akurasi prediksi.

---

# Slide 07 - Komponen Deret Waktu

## Dekomposisi dasar

```text
Nilai deret waktu = Trend + Seasonal + Cyclical + Irregular/Noise
```

| Komponen | Penjelasan |
|---|---|
| Trend | Kecenderungan jangka panjang naik/turun |
| Seasonal | Pola berulang dengan periode tetap, misal harian/mingguan/tahunan |
| Cyclical | Fluktuasi tanpa periode tetap, misal siklus ekonomi |
| Irregular | Fluktuasi acak yang tidak dapat dijelaskan |

## Mengapa penting dalam konteks drift?

- Jika musiman berubah, model forecasting dapat mengalami **performance drop** walaupun konsep dasar belum berubah.
- Ketika mengevaluasi drift, kita harus membedakan antara **perubahan musiman normal** dan **perubahan konsep yang sesungguhnya**.
- Deteksi drift yang baik harus menggunakan baseline yang memperhitungkan trend dan seasonality.

---

# Slide 08 - Autokorelasi dan Stasioneritas

## Autokorelasi

Autokorelasi mengukur korelasi antara deret waktu dengan **nilai lag-nya**.

- Lag `k`: korelasi antara `X_t` dan `X_{t-k}`.
- Nilai tinggi menunjukkan **memori temporal** kuat.
- ACF (Autocorrelation Function) digunakan untuk melihat pola lag signifikan.

## Stasioneritas

- Deret waktu **stasioner**: mean dan varians cenderung konstan sepanjang waktu.
- Deret **non-stasioner**: karakteristik berubah seiring waktu.
- Banyak model statistik mengasumsikan stasioneritas, sedangkan model machine learning modern berusaha menangkap perubahan.

## Relevansi untuk streaming

- Konsep drift dapat dilihat sebagai **pelanggaran stasioneritas**.
- Metode sliding window dan online learning membantu menangani non-stasioneritas dengan menggunakan data terbaru.

---

# Slide 09 - Dari Temporal ke Stream Mining

## Keterbatasan pendekatan batch pada data berubah-ubah

| Aspek | Batch Learning | Kebutuhan Stream Mining |
|---|---|---|
| Data tersedia | Seluruh dataset | Datang bertahap |
| Pelatihan | Sekali atau berkala | Terus-menerus |
| Asumsi | Distribusi tetap | Distribusi dapat berubah |
| Evaluasi | Hold-out/cross-validation | Prequential/test-then-train |
| Adaptasi | Retrain ulang dari awal | Update incremental |

## Pertanyaan kunci

- Apakah model harus diubah setiap ada data baru?
- Bagaimana mendeteksi bahwa model lama sudah tidak relevan?
- Apa trade-off antara memperbarui model dan stabilitas model?

Pertemuan ini berfokus pada pertanyaan-pertanyaan tersebut dalam konteks penelitian data mining.

---

# Slide 10 - Stream Mining: Definisi dan Karakteristik

## Definisi

Stream mining adalah proses mengekstraksi pengetahuan dari **aliran data yang kontinu, cepat, dan berpotensi tak terbatas**.

## Karakteristik data stream

- **Datang terus-menerus**: sulit atau tidak mungkin menyimpan seluruh data.
- **Cepat**: setiap instance harus diproses dalam waktu terbatas.
- **Non-stasioner**: distribusi dapat berubah sewaktu-waktu.
- **Satu pass**: tidak dapat mengakses data lama secara bebas.

## Implikasi desain algoritma

- Algoritma harus **sederhana secara komputasi**.
- State model diperbarui **incremental**.
- Evaluasi dilakukan **online**, bukan dengan validasi silang konvensional.

## Contoh domain

- Prediksi klik iklan.
- Deteksi fraud transaksi kartu kredit.
- Monitoring mesin/sensor industri.
- Analisis sentimen media sosial secara real-time.

---

# Slide 11 - Batch Learning vs Online Learning

## Definisi

| | Batch Learning | Online Learning |
|---|---|---|
| Data untuk training | Tersedia lengkap | Datang per instance |
| Update model | Setelah batch selesai | Setiap instance |
| Memory | Besar | Kecil |
| Adaptasi terhadap drift | Lambat | Lebih cepat |
| Evaluasi umum | Train/validation/test | Prequential |

## Online learning dalam praktik

- Model memprediksi label sebelum menerima label asli.
- Setelah label asli diterima, model memperbarui parameternya.
- Proses ini disebut **test-then-train** atau **prequential evaluation**.

## Contoh algoritma

- Stochastic Gradient Descent (SGD)
- Passive-Aggressive
- Hoeffding Tree / Very Fast Decision Tree

---

# Slide 12 - Sliding Window

## Ide dasar

Hanya sebagian data terbaru yang digunakan untuk melatih atau memperbarui model.

```text
Stream: ... t1 t2 t3 t4 t5 t6 t7 t8
Window size 3:
t1 t2 t3
   t2 t3 t4
      t3 t4 t5
         t4 t5 t6
            t5 t6 t7
               t6 t7 t8
```

## Kelebihan

- Sederhana dan mudah dipahami.
- Membatasi pengaruh data lama yang mungkin sudah tidak relevan.

## Kelemahan

- Ukuran window sulit ditentukan.
- Window tetap tidak adaptif terhadap perubahan cepat/lambat.
- Perubahan besar dalam window dapat membuat model tidak stabil.

## Varian

- **Fixed window** dengan ukuran tetap.
- **Adaptive window** yang memperbesar/memperkecil ukuran berdasarkan deteksi drift.
- **Fading window** yang memberi bobot lebih kecil pada data lama.

---

# Slide 13 - Incremental Learning

## Definisi

Incremental learning memperbarui model secara bertahap tanpa melatih ulang dari data lama.

## Sifat yang diharapkan

- Memproses satu instance pada satu waktu.
- Tidak menyimpan seluruh data mentah.
- Dapat menyesuaikan model dengan perubahan konsep.
- Memiliki kompleksitas waktu dan memori yang terkendali.

## Perbedaan dengan retraining batch

| | Retraining Batch | Incremental Learning |
|---|---|---|
| Data lama | Diakses lagi | Tidak perlu |
| Biaya per update | Tinggi | Rendah |
| Kesesuaian stream | Kurang | Tinggi |
| Risiko lupa | Rendah | Perlu manajemen catastrophic forgetting |

## Catatan penelitian

- Incremental learning tidak selalu sama dengan *continual learning*, tetapi keduanya berbagi tujuan adaptasi bertahap.
- Evaluasi harus mencakup **stabilitas** dan **plasticity**: model harus belajar konsep baru tanpa kehilangan kemampuan lama secara drastis.

---

# Slide 14 - Algoritma Online Learning

## Contoh algoritma / model

| Algoritma | Tipe | Keunggulan |
|---|---|---|
| SGDClassifier / SGDRegressor | Linear online | Murah, scalable |
| Passive-Aggressive | Linear margin | Update cepat untuk klasifikasi/regresi |
| Hoeffding Tree | Decision tree incremental | Membangun pohon dari stream |
| Adaptive Random Forest | Ensemble | Menggabungkan adaptasi dengan bagging |
| KNN Stream | Lazy learning | Menyimpan contoh terbaru |

## Prinsip umum

- Setiap instance baru berkontribusi terhadap update parameter.
- Learning rate / jumlah update diatur agar model tidak terlalu sensitif terhadap noise.

## Dalam scikit-learn / River

```python
from sklearn.linear_model import SGDClassifier
model = SGDClassifier(loss='log_loss')
```

Secara konseptual, `model.partial_fit(X, y, classes=classes)` menerapkan pembaruan per-batch.

---

# Slide 15 - Distribution Shift

## Definisi

Distribution shift adalah perubahan distribusi data antara waktu training dan waktu deployment.

## Bentuk umum

| Shift | Perubahan | Formula sederhana |
|---|---|---|
| Covariate shift | Perubahan `P(X)` sementara `P(y|X)` tetap | `P_train(X) != P_test(X)` |
| Label shift | Perubahan `P(y)` sementara `P(X|y)` tetap | `P_train(y) != P_test(y)` |
| Concept drift | Perubahan `P(y|X)` | `P_train(y|X) != P_test(y|X)` |

## Mengapa penting

- Model dengan akurasi tinggi pada data historis dapat gagal di dunia nyata.
- Evaluasi standar yang mengabaikan shift memberikan ilusi keberhasilan.

## Catatan untuk pertemuan ini

- Fokus utama diskusi adalah **concept drift**, yaitu perubahan hubungan antara fitur dan target.
- Distribution shift juga relevan untuk **cross-dataset generalization** pada research project.

---

# Slide 16 - Concept Drift: Definisi

## Definisi

Concept drift terjadi ketika **distribusi probabilitas target atau hubungan fitur-target berubah seiring waktu**.

Formal:

```text
P_t(y | X) != P_{t+1}(y | X)
```

## Konsekuensi

- Model yang dilatih pada periode lama menjadi kurang relevan.
- Keputusan berbasis model menjadi tidak akurat.
- Perubahan dapat terjadi mendadak atau bertahap.

## Contoh nyata

- Perilaku belanja pelanggan berubah karena tren baru.
- Pola serangan siber berubah karena metode penyerang berubah.
- Makna sentimen kata berubah karena konteks sosial.

## Pentingnya dalam penelitian

- Menjelaskan performa model yang menurun adalah bagian dari **generalization analysis**.
- Deteksi drift menjadi evidence untuk argumentasi bahwa model membutuhkan adaptasi.

---

# Slide 17 - Tipe Concept Drift

| Jenis | Deskripsi | Ilustrasi |
|---|---|---|
| **Sudden / Abrupt** | Perubahan langsung pada satu titik waktu | `ooooxxxxx` |
| **Incremental** | Perubahan bertahap dengan banyak tahap kecil | `ooooxxxxx` (transisi) |
| **Gradual** | Dua konsep muncul bergantian selama periode transisi | `ooooxooxoxx` |
| **Recurring / Seasonal** | Konsep lama muncul kembali | `ooxxooxx` |

Catatan: huruf `o` dan `x` mewakili konsep/kelas yang dominan pada waktu tertentu.

## Mengapa klasifikasi drift penting?

- Menentukan strategi adaptasi: reset model vs update bertahap vs menyimpan konsep lama.
- Mempengaruhi desain eksperimen simulasi drift.

---

# Slide 18 - Dampak Concept Drift terhadap Model

## Dampak langsung

- Akurasi/prediksi menurun seiring waktu.
- Kesalahan model menjadi tidak acak, tetapi membentuk pola.
- Interpretasi model menjadi menyesatkan jika distribusi berubah.

## Dampak pada penelitian

- Klaim performa model hanya valid pada rentang waktu data yang dievaluasi.
- Cross-validation acak dapat menyembunyikan penurunan performa akibat waktu.
- Error analysis harus menyertakan **analisis performa per periode waktu**.

## Contoh

```text
Bulan       Jan Feb Mar Apr Mei Jun
Akurasi     0.90 0.91 0.88 0.80 0.72 0.70
```

Penurunan dari Mei ke Juni perlu diselidiki: apakah karena drift, data baru, atau bug pipeline?

---

# Slide 19 - Deteksi Drift: Pendekatan Error-Rate

## Ide dasar

- Amati **error rate** model online setiap kali data masuk.
- Jika error rate naik secara signifikan, indikasi konsep berubah.
- Error rate yang stabil = tidak ada drift atau drift lambat.

## Konsep statistik

- Distribusi error rate seharusnya berada dalam rentang tertentu.
- Bila error rate melampaui batas, detector memberi sinyal drift.
- Detector perlu menyeimbangkan **false alarm** dengan **detection delay**.

## Contoh detector berbasis error

- DDM (Drift Detection Method)
- EDDM (Early Drift Detection Method)
- ADWIN (Adaptive Windowing)

## Kelebihan dan keterbatasan

| Kelebihan | Keterbatasan |
|---|---|
| General untuk supervised learning | Bergantung pada kualitas model |
| Mudah diimplementasikan | Tidak mendeteksi drift sebelum error muncul |
| Dapat dipasang pada model apapun | Tidak membedakan jenis drift |

---

# Slide 20 - DDM dan EDDM

## DDM (Drift Detection Method)

- Menggunakan mean dan standar deviasi error rate dari prediksi online.
- Diasumsikan distribusi binomial dari error.
- Dua ambang batas:
  - *warning level*: mulai waspada.
  - *drift level*: reset model / window.

## EDDM (Early Drift Detection Method)

- Memperbaiki DDM untuk drift **bertahap**.
- Memonitor jarak antara dua kesalahan berurutan, bukan hanya error rate.
- Lebih sensitif terhadap perubahan gradual.

## Kapan digunakan?

| Detector | Kesesuaian |
|---|---|
| DDM | Drift mendadak |
| EDDM | Drift bertahap / gradual |
| ADWIN | Perubahan distribusi tanpa model |

## Catatan

- Ambang batas harus ditentukan berdasarkan data atau eksperimen awal.
- Deteksi dini yang terlalu agresif dapat menyebabkan model sering reset secara tidak perlu.

---

# Slide 21 - ADWIN

## ADWIN: Adaptive Windowing

- ADWIN mempertahankan window data yang ukurannya berubah secara adaptif.
- Jika ada dua sub-window yang rata-ratanya berbeda signifikan, bagian lama dibuang.
- Detector bekerja tanpa perlu mengetahui label error? Secara umum ADWIN dapat digunakan pada nilai error atau pada data apa pun.

## Keunggulan

- Tidak memerlukan asumsi distribusi tertentu.
- Dapat mendeteksi perubahan mean dalam stream.
- Memberi estimasi ukuran window yang sesuai.

## Ilustrasi

```text
Data stream:  1 2 1 2 1 2 8 9 8 9
ADWIN membuang data lama ketika pergeseran mean terdeteksi.
```

## Keterbatasan

- Sensitif terhadap parameter confidence.
- Hanya menangkap perubahan distribusi univariat; untuk multi-dimensi perlu ekstensi.

---

# Slide 22 - Deteksi Drift: Distribution-Based

## Ide dasar

- Bandingkan distribusi data pada periode lama dengan periode terbaru.
- Jika perbedaan signifikan, nyatakan drift.
- Tidak bergantung pada error model supervised.

## Teknik umum

| Teknik | Deskripsi |
|---|---|
| Two-sample Kolmogorov-Smirnov test | Membandingkan distribusi satu variabel |
| Maximum Mean Discrepancy (MMD) | Mengukur jarak antar distribusi dalam RKHS |
| Domain classifier | Melatih classifier untuk membedakan data lama vs baru |
| Density ratio estimation | Mengestimasi rasio `P_new / P_old` |

## Penerapan

- Mendeteksi **covariate shift**.
- Membantu menjelaskan **mengapa** performa model berubah.
- Dapat digunakan pada data tanpa label, tetapi perlu hati-hati dengan high-dimensional features.

## Catatan eksperimen

- Uji statistik membutuhkan ukuran sampel cukup.
- Hasil signifikan secara statistik belum berarti drift praktis yang besar.

---

# Slide 23 - Alur Kerja Deteksi dan Adaptasi

## Pseudocode umum

```text
INISIALISASI model
INISIALISASI drift_detector

UNTUK setiap instance (X, y) dalam stream:
    y_pred = model.predict(X)
    error = (y_pred != y)  # untuk klasifikasi
    drift_detector.update(error)

    JIKA drift_detector.detected():
        BUANG window lama
        RESET / PERBARUI model dengan data terbaru
    ATAU JIKA drift_detector.warning():
        MULAI menyimpan data untuk potensi reset
    LAINNYA:
        model.partial_fit(X, y)
```

## Prinsip penting

- **Deteksi sebelum adaptasi**: adaptasi tanpa deteksi dapat merusak model akibat noise.
- **Adaptasi berdasarkan detector**: memilih reset, retrain, atau update bertahap.
- **Evaluasi terus berjalan**: setiap instance digunakan sebagai test set sebelum update.

---

# Slide 24 - Contoh Implementasi Python

## Menggunakan River (contoh konseptual)

```python
from river.linear_model import LogisticRegression
from river.drift import ADWIN

model = LogisticRegression()
detector = ADWIN()

for x, y in stream:
    # 1. Prediksi
    y_pred = model.predict_one(x)

    # 2. Update detector
    error = int(y_pred != y)
    detector.update(error)

    # 3. Jika drift terdeteksi
    if detector.drift_detected:
        model = LogisticRegression()  # reset model

    # 4. Online update
    model.learn_one(x, y)
```

## Catatan

- Kode di atas adalah ilustrasi sederhana; implementasi nyata perlu menangani fitur, tipe data, dan hyperparameter.
- Pada skenario klasifikasi dengan data tabular, Anda dapat menggunakan `SGDClassifier.partial_fit` sebagai pengganti ketika data telah dikonversi menjadi vektor numerik.

---

# Slide 25 - Strategi Continual Adaptation

## Pendekatan adaptasi model

| Strategi | Deskripsi | Kapan cocok |
|---|---|---|
| Retraining berkala | Melatih ulang pada batch terbaru | Drift lambat |
| Sliding window | Menggunakan data terbaru dalam window | Drift gradual |
| Fading / weighted data | Data lama diberi bobot kecil | Drift bertahap |
| Model reset | Mengganti model saat drift terdeteksi | Drift abrupt |
| Ensemble adaptif | Menggabungkan beberapa model dengan bobot dinamis | Drift bervariasi |

## Pertimbangan desain

- **Plasticity vs stability**: seberapa cepat model beradaptasi dibanding resistensi noise.
- **Computational cost**: adaptasi harus feasible untuk kecepatan stream.
- **Memory**: menyimpan data lama untuk reset membutuhkan buffer.

## Research angle

- Tidak semua adaptasi harus kompleks; baseline sederhana seperti sliding window sering sulit dikalahkan.
- Penelitian dapat membandingkan strategi adaptasi pada jenis drift berbeda.

---

# Slide 26 - Adaptive Ensemble untuk Data Stream

## Konsep ensemble streaming

- Memelihara beberapa model yang dilatih pada segmen waktu berbeda.
- Bobot setiap model ditentukan oleh performa terbaru.
- Jika drift terjadi, model yang tidak relevan diturunkan bobotnya atau diganti.

## Contoh

- **Online Bagging**: bootstrap via Poisson distribution.
- **Adaptive Random Forest**: pohon dapat di-reset pada node tertentu.
- **Hoeffding Adaptive Tree**: mengganti sub-tree saat drift terdeteksi.

## Kelebihan

- Lebih stabil daripada satu model yang direset penuh.
- Mampu menyimpan beberapa kondisi konsep untuk recurring drift.

## Kelemahan

- Lebih mahal secara komputasi.
- Bobot ensemble perlu dievaluasi dengan metrik yang tepat.

---

# Slide 27 - Evaluasi Streaming: Prequential

## Prequential / test-then-train

- Untuk setiap instance baru:
  1. Prediksi menggunakan model saat ini;
  2. Hitung error;
  3. Baru update model.
- Setiap instance menjadi **test set** dan **training set** secara berurutan.

## Keuntungan

- Menggunakan seluruh stream untuk evaluasi.
- Mencerminkan kondisi deployment sebenarnya.
- Menghasilkan kurva performa seiring waktu.

## Perhatian

- Evaluasi awal mungkin sangat buruk sebelum model belajar.
- Perlu warm-up period atau evaluasi dengan sliding window pada metrik.
- Jangan gunakan random shuffle.

## Validasi silang konvensional

Cross-validation standar tidak cocok untuk data stream karena:

- asumsi i.i.d. dilanggar;
- waktu diabaikan;
- distribusi masa depan tidak tersedia saat training.

---

# Slide 28 - Metrik untuk Streaming

## Metrik utama

| Metrik | Deskripsi |
|---|---|
| Prequential accuracy / error | Akurasi kumulatif sepanjang stream |
| Kappa statistic (`KappaM`) | Akurasi relatif terhadap majority class dinamis |
| Running time / memory | Biaya komputasi per instance |
| Detection delay | Waktu antara drift aktual dan deteksi |
| False positive rate | Alarm drift yang tidak perlu |

## Kappa statistic

```text
Kappa = (p0 - pc) / (1 - pc)

p0 = akurasi model
pc = probabilitas kesepakatan dengan majority class
```

- Nilai 1: sempurna.
- Nilai 0: setara majority class.
- Negatif: lebih buruk dari majority class.

## Visualisasi

- Plot prequential accuracy terhadap waktu.
- Tandai titik drift yang terdeteksi.
- Bandingkan kurva model adaptif vs non-adaptif.

---

# Slide 29 - Tools dan Library

## Ekosistem Python

| Library | Fungsi |
|---|---|
| River | Streaming ML, drift detection, online learning |
| scikit-multiflow | Konsep stream mining, evaluasi prequential |
| Alibi Detect | Deteksi drift berbasis statistik dan model |
| PyODDS | Outlier detection pada data stream |
| scikit-learn | `partial_fit` untuk model online |
| pandas / numpy | Manipulasi data temporal |
| matplotlib / seaborn | Visualisasi perubahan distribusi |

## Memilih tools untuk penelitian

- Gunakan satu library utama untuk pipeline stream.
- Pastikan versi library tercatat demi reproducible research.
- Bandingkan hasil dengan baseline dari library yang sama agar fair.

## Catatan praktis

- `River` menyediakan detektor ADWIN, DDM, dan model streaming.
- `Alibi Detect` cocok untuk analisis distribution shift pada data batch.

---

# Slide 30 - Studi Kasus: Perubahan Distribusi Data

## Contoh 1: Deteksi fraud transaksi

- Pola fraud berubah seiring modus baru penyerang.
- Model lama mendeteksi fraud tipe lama; tipe baru lolos.
- Drift detector memicu pembaruan model.

## Contoh 2: Prediksi churn pelanggan

- Perilaku pelanggan berubah setelah kampanye promosi.
- Fitur penting dapat berubah; interpretasi model menjadi tidak stabil.

## Contoh 3: Monitoring sensor mesin

- Sensor menghasilkan data stream non-stasioner.
- Downtime mesin mengubah distribusi sinyal.
- Anomaly detection harus membedakan drift normal vs kondisi abnormal.

## Analisis untuk research

- Jelaskan jenis drift pada data.
- Tunjukkan dampak terhadap performa model baseline.
- Evaluasi apakah metode Anda mengatasi drift lebih baik daripada retraining berkala.

---

# Slide 31 - Extended Experiment dan Cross-Dataset

## Kaitan dengan research project

Pada pertemuan ini, progress project diarahkan ke **extended experiment / cross-dataset / generalization analysis**.

## Jenis eksperimen

| Nama | Pertanyaan |
|---|---|
| Cross-dataset | Apakah metode bekerja pada dataset lain dengan distribusi berbeda? |
| Temporal cross-validation | Apakah performa bertahan pada periode waktu berikutnya? |
| Robustness test | Bagaimana performa saat drift buatan diterapkan? |
| Ablation drift handling | Apakah komponen deteksi/adaptasi benar-benar berkontribusi? |

## Contoh desain

- Train pada data bulan 1–6, test pada bulan 7–8.
- Bandingkan model batch vs model online adaptif.
- Lakukan simulasi drift dengan mengubah distribusi target pada data sintetis.

## Prinsip generalization

> Jika peningkatan hanya muncul pada satu dataset dan satu kondisi, klaim ilmiah masih lemah.

---

# Slide 32 - Research Question dan Desain Eksperimen

## Contoh research question

- Bagaimana pengaruh jenis concept drift terhadap performa model X dibanding model Y?
- Apakah deteksi drift dengan ADWIN meningkatkan stabilitas model pada data stream?
- Seberapa cepat model online beradaptasi dibanding retraining batch pada data non-stasioner?

## Desain eksperimen yang adil

1. Tentukan dataset stream atau dataset temporal.
2. Definisikan skenario drift (abrupt, gradual, recurring).
3. Pilih baseline kuat: linear online, tree online, SGD, sliding window.
4. Terapkan evaluasi prequential.
5. Laporkan akurasi, Kappa, waktu, dan memori.
6. Gunakan beberapa seed jika ada elemen stokastik.

## Hipotesis

Nyatakan hipotesis sebelum eksperimen, misal:

- H1: Adaptive ensemble lebih unggul pada drift recurring.
- H0: Tidak ada perbedaan signifikan.

---

# Slide 33 - Diskusi Paper: Pertanyaan Kritis

## Poin yang perlu dikritisi

- Apakah paper menggunakan **prequential evaluation** atau validasi silang biasa?
- Bagaimana **jenis drift** disimulasikan / terjadi pada dataset?
- Apakah **baseline streaming** dibandingkan secara fair?
- Apakah **computational cost** dilaporkan?
- Bagaimana penulis memastikan hasil tidak hanya karena hyperparameter tuning?
- Apakah metode diuji pada **lebih dari satu dataset**?
- Apakah klaim generalization didukung oleh evidence?

## Pertanyaan untuk diskusi kelas

- Apakah deteksi drift selalu diperlukan? Kapan lebih baik tetap mempertahankan model lama?
- Bagaimana membedakan drift dengan noise?
- Apa trade-off antara adaptasi cepat dan stabilitas model?

## Output diskusi

- Catatan pemetaan ke CPMK-2: analisis validity dan limitation paper.
- Ide riset lanjutan untuk research project.

---

# Slide 34 - Ringkasan

## Konsep kunci

- **Temporal data**: data dengan urutan waktu yang berpengaruh pada pemodelan.
- **Stream mining**: pembelajaran dari aliran data yang datang terus-menerus.
- **Online learning**: update model per instance, bukan batch besar.
- **Sliding window / incremental learning**: strategi membatasi data lama dan memperbarui model.
- **Distribution shift & concept drift**: perubahan distribusi atau hubungan fitur-target.
- **Drift detection**: DDM, EDDM, ADWIN, distribution-based test.
- **Continual adaptation**: reset, window, fading, adaptive ensemble.
- **Evaluasi streaming**: prequential, Kappa, detection delay.

## Pesan untuk penelitian

- Model yang baik pada data historis belum tentu generalisasi pada data masa depan.
- Eksperimen harus mempertimbangkan **perubahan distribusi**.
- Extended experiment perlu dilakukan lintas dataset dan lintas waktu.

---

# Slide 35 - Bacaan Lanjutan

## Buku dan materi pengayaan

- Han, J., Pei, J., Tong, H. *Data Mining: Concepts and Techniques*, 4th ed., Elsevier.
- Tan, P.-N., Steinbach, M., Karpatne, A., Kumar, V. *Introduction to Data Mining*, 2nd ed., Pearson.
- Gama, J. *Knowledge Discovery from Data Streams*, Chapman & Hall/CRC.
- Dokumentasi River: https://riverml.xyz
- Dokumentasi scikit-multiflow: https://scikit-multiflow.github.io

## Bacaan yang disarankan untuk diskusi paper

- Paper tentang concept drift detection pada data stream.
- Paper tentang adaptive random forest / Hoeffding tree.
- Paper tentang evaluasi streaming dan prequential error.

## Catatan

- Gunakan sumber primer ketika mengutip klaim penelitian.
- Selalu verifikasi venue melalui Scopus untuk critical review.

---

# Slide 36 - Penutup

TERIMA KASIH

Pertemuan berikutnya

**Explainable, Trustworthy & Responsible Data Mining**