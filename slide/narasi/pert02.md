# Narasi TD Data Mining - Pertemuan 02

## Exploratory Data Analysis (EDA), Data Preprocessing & Experimental Validity

Sumber: markdown/pert02-exploratory-data-analysis-eda-data-preprocessing-experimental-validity.md

---

## Slide 000 - Cover

### Narasi

Pertemuan kedua ini menempatkan kita pada fase krusial dalam siklus knowledge discovery, yaitu tahap pemahaman data melalui Exploratory Data Analysis atau EDA, disusul dengan teknik Data Preprocessing, serta penerapan prinsip Experimental Validity. Pada tingkat magister, ketiga komponen ini tidak diperlakukan sebagai rutinitas teknis dalam pipeline pemrograman, melainkan sebagai fondasi metodologis yang menentukan kredibilitas temuan riset dan reproduktibilitas eksperimen. EDA berperan sebagai mekanisme investigatif untuk mengurai struktur data, mengidentifikasi pola distribusi, mendeteksi outlier atau missing patterns, serta merumuskan hipotesis kerja sebelum pemilihan model dilakukan. Setelah karakterisasi data terekspos, preprocessing menjadi tahap transformatif yang menyesuaikan representasi data agar kompatibel dengan asumsi matematis algoritma machine learning, meliputi penanganan missing value, normalisasi/scaling, encoding kategorikal, serta teknik seleksi atau ekstraksi fitur. 

Namun, kekuatan sebuah eksperimen tidak hanya terletak pada akurasi numerik, melainkan pada Experimental Validity. Validitas eksperimental menuntut desain penelitian yang ketat: kontrol terhadap confounding variables, justifikasi pemilihan metrik evaluasi, pembagian data yang representative, serta prosedur hyperparameter tuning yang terstandarisasi. Tanpa payang metodologis ini, risiko bias sampling, data leakage, atau overfitting akan mengaburkan kontribusi sebenarnya dari metode yang diuji. Dalam kerangka proyek penelitian akhir semester, penguasaan atas triad ini akan menjadi penentu utama dalam membangun baseline yang solid, melakukan ablation study yang bermakna, serta menyusun klaim empiris yang dapat dipertanggungjawabkan di forum akademik internasional.

### Inti yang Harus Ditekankan

- EDA bersifat investigatif dan hipotetis, bukan sekadar pembuatan grafik; tujuannya adalah memahami mekanisme data sebelum intervensi algoritmik.
- Preprocessing adalah keputusan strategis yang secara langsung mempengaruhi inductive bias model dan interpretabilitas hasil, sehingga harus didokumentasikan secara transparan.
- Experimental Validity menjamin integritas ilmiah melalui desain eksperimen yang reproducible, terkontrol, dan berbasis evidence, sesuai standar publikasi conference terindeks Scopus.

### Transisi ke Slide Berikutnya

Untuk melihat bagaimana ketiga pilar ini diorganisir dalam alur pembelajaran, jadwal praktikum, serta keterkaitannya dengan proyek penelitian, mari kita lanjutkan ke slide agenda dan peta perjalanan materi pertemuan ini.

---

## Slide 001 - Agenda & Peta Pertemuan

### Narasi

Pada slide ini, kita akan menguraikan agenda lengkap untuk pertemuan kedua sekaligus memetakan posisi materi ini dalam alur metodologis keseluruhan perkuliahan. Sebagaimana telah dibahas pada pertemuan pertama mengenai lanskap modern data mining dan identifikasi *research problem*, kini kita memasuki fase operasional penelitian, yaitu memahami data secara mendalam melalui *Exploratory Data Analysis* atau EDA. EDA bukan sekadar langkah pra-pemrosesan teknis, melainkan pendekatan investigatif yang sistematis untuk mengungkap struktur data, mendeteksi anomali, mengidentifikasi pola tersembunyi, serta mengukur hubungan antarvariabel sebelum algoritma apa pun diterapkan.

Agenda hari ini disusun secara bertahap untuk memastikan kedalaman pemahaman sesuai standar penelitian tingkat magister. Pertama, kita akan membahas *Data Understanding* dan teknik EDA menggunakan ekosistem Python seperti pandas, NumPy, Matplotlib, dan Seaborn untuk melakukan profiling statistik, visualisasi distribusi, analisis korelasi, serta deteksi outlier. Kedua, materi berlanjut ke *Data Preprocessing*, yang mencakup strategi penanganan missing value, transformasi skala, encoding variabel kategorikal, reduksi dimensi, serta seleksi fitur berbasis domain knowledge dan metrik statistik. Ketiga, kita akan menyoroti *Experimental Validity*, aspek kritis yang menjamin bahwa desain eksperimen bebas dari bias, dapat direplikasi, dan memenuhi prinsip scientific rigor. Keempat, praktikum pertama akan dilaksanakan secara langsung untuk membangun pipeline EDA dan preprocessing pada dataset nyata. Terakhir, seluruh rangkaian proses ini akan dikaitkan secara eksplisit dengan *Research Project* masing-masing mahasiswa, sehingga setiap keputusan teknis memiliki justifikasi metodologis yang kuat.

Peta pertemuan yang ditampilkan menunjukkan kesinambungan logis antarbab. Pertemuan pertama membangun kerangka konseptual dan pemetaan area penelitian. Pertemuan kedua ini berfungsi sebagai jembatan metodologis yang menerjemahkan masalah penelitian menjadi desain eksperimen yang terstruktur dan valid. Pertemuan ketiga kemudian akan melanjutkan ke tahap *Pattern Mining* dan *Knowledge Discovery*. Pernyataan bahwa pertemuan ini menjadi fondasi bagi semua eksperimen di pertemuan berikutnya menegaskan bahwa kualitas analisis awal menentukan kredibilitas temuan akhir. Tanpa EDA dan preprocessing yang rigor, bahkan algoritma paling canggih sekalipun akan rentan terhadap overfitting, kebocoran data (*data leakage*), atau generalisasi yang lemah.

### Inti yang Harus Ditekankan

- EDA dan preprocessing merupakan fondasi metodologis yang menentukan validitas, reproduktibilitas, dan kredibilitas seluruh eksperimen data mining.
- Alur pertemuan dirancang secara berjenjang dan saling bergantung: identifikasi masalah (Pertemuan 01) → pemahaman & persiapan data (Pertemuan 02) → ekstraksi pola (Pertemuan 03).
- Setiap langkah teknis preprocessing harus selalu dipertanggungjawabkan berdasarkan pertanyaan penelitian (*research question*) dan kelayakan publikasi ilmiah, bukan hanya mengikuti tutorial umum.

### Transisi ke Slide Berikutnya

Dengan peta perjalanan dan agenda yang sudah terpetakan, mari kita bedah lebih lanjut bagaimana posisi materi hari ini menjembatani konsep penelitian dari pertemuan sebelumnya dan mempersiapkan langkah konkret menuju penambangan pola pada pertemuan berikutnya.

---

## Slide 002 - Kaitan dengan Pertemuan Sebelumnya dan Berikutnya

### Narasi

Pada pertemuan sebelumnya, kita telah membedah lanskap modern data mining dan membedakan secara tegas antara *engineering problem* yang berorientasi pada solusi praktis, dengan *research problem* yang menuntut kontribusi ilmiah baru. Di sesi itu, Anda juga diminta mengidentifikasi dua hingga tiga *candidate research area* yang potensial untuk dikembangkan lebih lanjut. Hari ini, kita melangkah ke tahap kritis berikutnya, yaitu memahami data yang akan menjadi bahan bakar bagi pertanyaan penelitian tersebut. Memahami data bukan sekadar melihat sekilas tabel atau menghitung rata-rata, melainkan proses sistematis untuk mengungkap karakteristik tersembunyi, struktur distribusi, serta potensi masalah yang dapat menggagalkan eksperimen jika tidak ditangani sejak dini.

Posisi pertemuan ini bersifat strategis karena menjembatani kesenjangan antara perumusan *research problem* di tingkat konseptual dengan implementasi *experimental design* di tingkat teknis. Sebelum algoritma apa pun dijalankan, kita harus memastikan bahwa pemilihan dataset, strategi preprocessing, dan rancangan evaluasi sudah dibangun di atas fondasi yang valid. Tanpa pemahaman mendalam terhadap data, bahkan model paling canggih sekalipun hanya akan menghasilkan artefak statistik atau kesimpulan yang menyesatkan. Oleh karena itu, fokus kita beralih dari "apa yang ingin diteliti" menjadi "bagaimana data yang tersedia memungkinkan kita menjawab pertanyaan tersebut secara metodologis".

Melihat ke depan menuju Pertemuan 03 tentang *Pattern Mining & Knowledge Discovery*, penting untuk dipahami bahwa temuan eksploratori dari EDA sering kali menjadi kompas utama dalam pencarian pola yang menarik. Pola yang ditemukan oleh algoritma clustering, association rules, atau sequence mining sangat bergantung pada kualitas dan kebersihan data yang telah melalui proses preprocessing yang tepat. Data yang buruk atau bias akan menghasilkan pola yang tidak dapat dipercaya, terlepas dari kompleksitas metode yang digunakan. Dengan demikian, pertemuan ini menyiapkan bekal teknis dan filosofis agar ketika kita memasuki tahap penambangan pengetahuan, setiap temuan memiliki dasar empiris yang kuat dan dapat dipertanggungjawabkan secara ilmiah.

### Inti yang Harus Ditekankan

- Pertemuan ini berfungsi sebagai jembatan metodologis yang menerjemahkan *research problem* menjadi desain eksperimen yang konkret dan terukur.
- Eksplorasi data dan preprocessing bukan aktivitas administratif, melainkan komponen inti dari validitas penelitian yang menentukan kredibilitas temuan selanjutnya.
- Kualitas input data secara langsung berkorelasi dengan reliabilitas pola yang akan digali pada tahap *pattern mining* dan evaluasi model.

### Transisi ke Slide Berikutnya

Setelah menempatkan pertemuan ini dalam peta besar alur penelitian, kita akan menjabarkan secara rinci capaian pembelajaran dan kompetensi teknis yang harus dicapai, mencakup teknik profiling dataset, analisis multivariat, penanganan anomali data, hingga perancangan pipeline preprocessing yang rigor dan bebas dari kebocoran informasi.

---

## Slide 003 - Tujuan Pembelajaran & CPMK

### Narasi

Pada slide ini, kita akan menguraikan tujuan pembelajaran dan capaian pembelajaran mata kuliah (CPMK) yang menjadi fondasi metodologis bagi pertemuan kedua. Secara makro, materi hari ini secara langsung mendukung dua CPMK utama program studi. Pertama, CPMK-1 yang menuntut mahasiswa mampu menganalisis konsep, algoritma, serta perkembangan mutakhir dalam bidang Data Mining. Kedua, CPMK-4 yang berfokus pada kemampuan merancang dan melaksanakan eksperimen Data Mining yang valid dan dapat direproduksi. Dalam konteks jenjang magister, penguasaan terhadap kedua capaian ini bukan sekadar keterampilan teknis, melainkan landasan rigor untuk membangun penelitian yang berkontribusi pada literatur ilmiah internasional.

Secara lebih operasional, setelah mengikuti pertemuan ini, Anda diharapkan mampu melakukan dataset profiling secara menyeluruh dan menghitung descriptive statistics yang relevan. Proses investigasi awal ini mencakup analisis univariat untuk memahami distribusi dan tendensi sentral setiap variabel secara individual, analisis bivariat untuk menginvestigasi hubungan korelasional antar dua variabel, hingga analisis multivariat yang menangkap interaksi kompleks di antara banyak fitur sekaligus. Melalui pendekatan ini, kita bergerak melampaui sekadar membuat grafik, menuju pembentukan intuisi ilmiah tentang struktur intrinsik data sebelum masuk ke tahap pemodelan.

Fokus kritis berikutnya adalah identifikasi dan penanganan masalah kualitas data yang sering menjadi sumber bias atau degradasi performa model. Kita akan mempelajari cara mendeteksi missing values, outlier yang ekstrem, class imbalance, redundansi fitur yang tidak informatif, serta indikasi data leakage yang dapat merusak integritas eksperimen. Setelah masalah teridentifikasi, langkah selanjutnya adalah menerapkan strategi data preprocessing yang tepat menggunakan ekosistem Python, khususnya library scikit-learn. Lebih dari sekadar memanggil fungsi transformasi, kita akan membahas bagaimana menyusun preprocessing pipeline yang ketat, sehingga statistik atau parameter dari test set tidak pernah bocor ke dalam proses training. Prinsip isolasi data ini sangat krusial untuk menjaga objektivitas evaluasi model.

Terakhir, seluruh praktik teknis ini harus dipahami dan dievaluasi dalam kerangka experimental validity. Validitas eksperimental dalam data mining menjamin bahwa hasil yang dilaporkan benar-benar mencerminkan kinerja metode yang diteliti, bukan artefak dari kebocoran data, desain eksperimen yang lemah, atau overfitting terselubung. Dengan menguasai profiling, preprocessing, dan prinsip validitas ini, posisi kita saat ini secara efektif menjembatani perumusan research problem dari pertemuan sebelumnya dengan tahap implementasi teknis yang terstruktur. Selanjutnya, kita akan melihat bagaimana EDA terintegrasi secara sistematis ke dalam alur kerja penelitian data mining secara keseluruhan.

### Inti yang Harus Ditekankan

- Kaitan langsung antara kompetensi teknis (EDA & preprocessing) dengan standar akademik S2 yang menekankan validitas, reproduktibilitas, dan rigor metodologis.
- Pencegahan data leakage melalui arsitektur preprocessing pipeline yang ketat sebagai syarat mutlak agar hasil evaluasi model tetap objektif dan generalizable.
- EDA diposisikan sebagai proses berpikir ilmiah investigatif, bukan sekadar rutinitas visualisasi, yang secara langsung menentukan hipotesis dan keputusan eksperimen berikutnya.

### Transisi ke Slide Berikutnya

Sekarang bahwa kita telah明确 menetapkan cakupan kompetensi dan standar validitas yang harus dicapai, mari kita tinjau bagaimana Exploratory Data Analysis (EDA) menempati posisi strategis dan terukur dalam alur kerja penelitian data mining secara sistematis.

---

## Slide 004 - EDA dalam Workflow Penelitian Data Mining

### Narasi

Exploratory Data Analysis atau EDA merupakan fondasi metodologis yang mutlak dalam setiap penelitian data mining berkualitas tinggi. Pada jenjang magister, EDA tidak boleh direduksi menjadi sekadar aktivitas membuat plot atau memanggil fungsi deskriptif secara mekanistik. EDA adalah proses investigasi sistematis yang menuntut pendekatan berpikir ilmiah untuk mengungkap struktur data, mengidentifikasi pola tersembunyi, mendeteksi anomali, serta memetakan hubungan antarvariabel sebelum keputusan pemodelan diambil. Proses ini mengubah data mentah menjadi wawasan berbasis bukti yang menjadi landasan rasional bagi seluruh tahapan penelitian selanjutnya.

Dalam kerangka workflow penelitian data mining, EDA menempati posisi strategis sebagai jembatan antara pemahaman awal dataset dan tahap pra-pemrosesan yang terstruktur. Sebagaimana digambarkan pada diagram alur, setelah merumuskan research problem dan melakukan pengumpulan data, langkah selanjutnya adalah EDA yang kemudian mengalir secara berurutan menuju preprocessing, modeling, evaluation, hingga interpretation. Posisi ini menegaskan bahwa EDA bersifat iteratif dan determinatif; ia menjadi filter kualitas pertama yang mencegah peneliti terjebak dalam asumsi keliru. Tanpa EDA yang mendalam, tahap preprocessing bisa menjadi arbitrer, model cenderung overfit atau underfit karena fitur noise tidak disaring, dan metrik evaluasi menjadi menyesatkan karena bias struktural data tidak terdeteksi sejak dini.

EDA dirancang untuk menjawab lima pertanyaan fundamental yang langsung membentuk desain eksperimen. Pertama, apa karakteristik data yang kita hadapi, mencakup distribusi marginal, skala pengukuran, dan tipe variabel? Kedua, masalah kualitas data apa yang dominan, seperti missing values yang tidak random, outlier ekstrem, class imbalance, atau redundansi fitur? Ketiga, hipotesis awal apa yang dapat dirumuskan berdasarkan korelasi, interaksi, atau tren temporal? Keempat, apakah terdapat indikasi bias seleksi atau data leakage yang dapat merusak validitas eksternal penelitian? Kelima, keputusan eksperimen apa yang paling masuk akal, seperti pemilihan baseline yang realistis, kebutuhan transformasi non-linear, atau strategi resampling? Jawaban atas pertanyaan-pertanyaan ini akan menentukan bagaimana pipeline preprocessing dibangun secara ketat agar tidak membocorkan informasi dari test set ke training set, sekaligus memastikan bahwa setiap langkah preprocessing didukung oleh bukti empiris dari data itu sendiri.

Sebagai penekanan akhir, EDA dalam konteks penelitian S2 harus dijalankan secara transparan dan terdokumentasi. Setiap insight yang diperoleh perlu dicatat, diverifikasi, dan diterjemahkan ke dalam protokol eksperimen yang reproducible. Dengan demikian, EDA berfungsi sebagai mekanisme kontrol kualitas yang melindungi integritas penelitian dari kesalahan desain metodologis, sekaligus menyiapkan pondasi kuat untuk analisis lanjutan yang lebih kompleks.

### Inti yang Harus Ditekankan

- EDA adalah proses investigasi ilmiah berbasis bukti, bukan sekadar pembuatan visualisasi atau laporan statistik deskriptif rutin.
- Posisi EDA dalam workflow bersifat kritis dan determinatif; ia menjadi dasar logis untuk setiap keputusan preprocessing, pemilihan model, dan desain evaluasi.
- EDA menjawab pertanyaan mendasar tentang karakteristik data, masalah kualitas, hipotesis awal, potensi bias/leakage, dan validitas eksperimen.
- Temuan EDA harus didokumentasikan secara sistematis untuk menjamin transparansi, reproduktibilitas, dan standarisasi praktik penelitian tingkat magister.

### Transisi ke Slide Berikutnya

Setelah memahami peran strategis EDA dalam alur penelitian, langkah konkret berikutnya adalah memulai investigasi tersebut melalui teknik dataset profiling. Kita akan membahas komponen-komponen profil yang wajib dieksplorasi, mulai dari jumlah observasi, tipe data, cardinality, hingga deteksi missing values dan duplikat, serta cara menyusun laporan profil yang terstruktur dan siap menjadi acuan teknis untuk tahap preprocessing.

---

## Slide 005 - Dataset Profiling

### Narasi

Setelah memetakan posisi Exploratory Data Analysis dalam alur penelitian data mining pada slide sebelumnya, langkah operasional pertama yang harus dijalankan adalah *dataset profiling*. Proses ini merupakan fondasi diagnostik yang bertujuan merangkum karakteristik dasar sebuah dataset secara cepat dan terstruktur, sehingga peneliti memperoleh gambaran makro yang objektif sebelum memasuki tahap preprocessing atau pemodelan. Dalam konteks penelitian tingkat magister, profil dataset bukan sekadar laporan administratif, melainkan instrumen ilmiah untuk mengidentifikasi potensi masalah kualitas data, bias sampling, atau kebocoran informasi (*data leakage*) sejak dini, yang secara langsung memengaruhi validitas eksternal dan internal eksperimen.

Komponen-komponen dalam tabel profil dataset dirancang untuk menjawab pertanyaan metodologis spesifik. Jumlah observasi dan fitur menentukan dimensi ruang data, yang berdampak pada pemilihan algoritma, kebutuhan komputasi, dan risiko *curse of dimensionality*. Identifikasi tipe data (numerik, kategorikal, ordinal, datetime, teks) menjadi penentu utama pipeline transformasi, karena operasi matematika hanya berlaku pada domain numerik, sementara encoding atau tokenisasi diperlukan untuk domain kategorikal. *Cardinality* atau jumlah nilai unik per kolom membantu peneliti membedakan antara variabel kontinu, diskrit, atau kategori berelief tinggi yang berpotensi menyebabkan overfitting jika tidak dikompresi. Informasi mengenai variabel target, termasuk keberadaannya dan tipenya, menegaskan kembali formulasi masalah apakah ini tugas supervised classification, regression, atau unsupervised learning. Pemeriksaan *missing values* perlu dicatat secara granular, baik dari persentase kehilangan maupun pola ketidakhadiran (MCAR, MAR, MNAR), karena strategi imputasi atau penghapusan harus disesuaikan dengan mekanisme kehilangan datanya. Deteksi baris duplikat penting untuk menjaga independensi sampel dan mencegah dominasi representasi tertentu dalam distribusi pelatihan. Terakhir, analisis range seperti nilai minimum, maksimum, dan keberadaan nilai ekstrem yang tidak wajar memberikan sinyal awal tentang kesalahan input, sensor error, atau outlier struktural yang memerlukan penanganan khusus.

Sebagai implementasi praktis dalam ekosistem Python, profil ini biasanya digenerate secara otomatis atau semi-otomatis menggunakan pustaka seperti `pandas` combined dengan fungsi `.info()`, `.describe()`, atau library spesialis seperti `ydata-profiling` dan `sweetviz`. Contoh panduan profil yang ditampilkan menunjukkan bagaimana metadata teknis diterjemahkan menjadi keputusan riset: pada `candidate_dataset.csv` dengan 10.000 baris dan 15 kolom, komposisi dtype (9 numerik, 4 kategorikal, 2 datetime) mengindikasikan perlunya scaling pada kolom numerik dan encoding pada kolom kategorikal. Variabel target `churn` yang bersifat biner (0/1) mengonfirmasi bahwa ini adalah masalah klasifikasi dua kelas. Temuan bahwa tiga kolom memiliki missing value >5% dan terdapat 12 baris duplikat memberi arahan eksperimental yang jelas: peneliti perlu menerapkan imputasi berbasis median atau model untuk kolom dengan missing rate moderat, menghapus atau menagihkan duplikat untuk menjaga integritas distribusi, serta menyiapkan stratified split agar proporsi kelas target tetap stabil selama cross-validation. Dokumentasi profil ini juga berfungsi sebagai baseline referensi yang memungkinkan reproduksi eksperimen dan perbandingan performa antar-varian model.

### Inti yang Harus Ditekankan

- Dataset profiling adalah langkah wajib dalam workflow penelitian data mining untuk membangun baseline pemahaman data yang objektif, terukur, dan dapat direplikasi.
- Setiap komponen profil (dimensi, tipe data, cardinality, target, missing, duplikat, range) memiliki implikasi metodologis langsung terhadap desain preprocessing, pemilihan algoritma, dan validitas evaluasi eksperimen.
- Profil dataset harus didokumentasikan secara sistematis dalam notebook atau laporan penelitian sebagai bukti transparansi metodologis dan dasar audit trail untuk ablation study atau peer review.

### Transisi ke Slide Berikutnya

Dengan gambaran makro dataset yang telah terpetakan melalui profiling, langkah selanjutnya adalah menggali lebih dalam karakteristik numerik setiap variabel. Kita akan beralih ke penggunaan statistik deskriptif untuk mengukur lokasi, sebaran, dan bentuk distribusi data, yang akan menjadi dasar kuantitatif dalam memilih teknik transformasi, mendeteksi outlier secara formal, dan mempersiapkan data untuk tahap pemodelan.

---

## Slide 006 - Descriptive Statistics

### Narasi

Setelah pada slide sebelumnya kita menyelesaikan dataset profiling untuk mendapatkan gambaran makro mengenai jumlah observasi, tipe kolom, serta keberadaan missing value dan baris duplikat, langkah analitis berikutnya adalah mengevaluasi karakteristik numerik secara mendalam melalui descriptive statistics. Tujuan utama dari tahapan ini adalah menghasilkan ringkasan kuantitatif yang sistematis guna memahami tiga dimensi fundamental dari setiap variabel numerik: lokasi pusat (location), sebaran atau dispersi (spread), dan bentuk distribusi (shape). Dalam konteks penelitian data mining tingkat magister, evaluasi ini bukan hanya bersifat deskriptif, melainkan berfungsi sebagai diagnostic baseline untuk menentukan strategi preprocessing, validasi asumsi algoritma, dan memastikan integritas data sebelum masuk ke tahap feature engineering atau modeling.

Ukuran-ukuran statistik yang menjadi fokus analisis dapat dikelompokkan berdasarkan fungsinya. Untuk mengidentifikasi lokasi pusat data, kita memanfaatkan mean, median, dan mode. Mean memberikan rata-rata aritmatika yang intuitif, namun memiliki kelemahan mendasar berupa sensitivitas tinggi terhadap nilai ekstrem. Sebagai penyeimbang, median menawarkan estimasi lokasi yang robust karena hanya bergantung pada posisi tengah data yang telah diurutkan, sehingga pengaruh outlier minimal. Mode mencatat frekuensi kemunculan tertinggi, yang berguna ketika data menunjukkan klasterisasi atau multimodality. Sementara itu, untuk mengukur sebaran, variance dan standard deviation menjadi indikator utama. Variance menghitung rata-rata kuadrat deviasi dari mean, sedangkan standard deviation mengembalikan satuan pengukuran ke skala asli data, memudahkan interpretasi praktis. Selain itu, quantile (Q1, Q2, Q3) membagi data menjadi bagian proporsional, dan interquartile range (IQR) yang dihitung dari selisih Q3 dan Q1 memberikan gambaran sebaran inti data yang tahan terhadap ekor distribusi. Nilai minimum dan maksimum tetap dipertahankan sebagai referensi rentang absolut dan deteksi early warning untuk nilai tidak wajar.

Kombinasi ukuran-ukuran ini memungkinkan interpretasi bentuk distribusi secara cepat dan objektif. Ketika nilai mean lebih besar daripada median, hal ini mengindikasikan adanya tarikan ekor panjang ke arah kanan, sehingga distribusi cenderung right-skewed. Sebaliknya, jika mean lebih kecil dari median, distribusi mengalami left-skewness. Pemahaman terhadap skewness sangat krusial dalam data mining karena banyak algoritma berbasis jarak atau asumsi normalitas memerlukan data yang mendekati simetris. Lebih lanjut, IQR berperan sebagai mekanisme deteksi outlier yang ketat melalui pendekatan Tukey’s fences. Batas bawah ditetapkan pada Q1 − 1.5 × IQR, dan batas atas pada Q3 + 1.5 × IQR. Observasi yang melampaui batas ini secara statistik dikategorikan sebagai outlier yang memerlukan penanganan khusus, apakah melalui transformasi non-linear, winsorization, imputasi berbasis robust estimator, atau penghapusan selektif, semuanya harus didasarkan pada justifikasi metodologis yang kuat sesuai dengan research question.

### Inti yang Harus Ditekankan

- Descriptive statistics berfungsi sebagai diagnostic tool esensial untuk memetakan lokasi, sebaran, dan bentuk distribusi sebelum keputusan preprocessing diambil.
- Pemilihan ukuran pemusatan harus mempertimbangkan konteks data: gunakan mean untuk data simetris tanpa outlier, dan beralih ke median ketika distribusi tidak normal atau mengandung nilai ekstrem.
- Interpretasi skewness dan penerapan IQR dengan Tukey’s fences adalah standar metodologis dalam identifikasi outlier yang objektif, menghindari bias subjektif dalam pembersihan data.
- Hasil ringkasan numerik ini menjadi dasar empiris untuk merancang eksperimen yang reproducible dan memilih transformasi yang tepat agar asumsi model machine learning terpenuhi.

### Transisi ke Slide Berikutnya

Angka-angka statistik ini memberikan kerangka kuantitatif yang solid, namun representasi visual akan memperkuat interpretasi kita terhadap pola distribusi individual. Pada slide berikutnya, kita akan melanjutkan ke univariate analysis untuk memetakan setiap variabel secara terpisah menggunakan histogram, boxplot, density plot, dan teknik visualisasi lainnya, sekaligus mengonfirmasi temuan statistik ini sebelum memutuskan langkah transformasi atau encoding yang optimal.

---

## Slide 007 - Univariate Analysis

### Narasi

Setelah pada slide sebelumnya kita mengupas statistik deskriptif berupa ukuran pemusatan, dispersi, dan interpretasi skewness melalui perbandingan mean dan median, kini kita beralih ke representasi visual dan eksplorasi mendalam yang disebut Univariate Analysis. Secara definisi, analisis univariat adalah pendekatan sistematis untuk mempelajari satu variabel secara terpisah tanpa menggabungkannya dengan variabel lain. Dalam kerangka penelitian data mining tingkat magister, langkah ini bukan sekadar praktik pelengkap, melainkan fondasi diagnostik yang menentukan validitas preprocessing dan kelayakan fitur sebelum memasuki fase pemodelan.

Analisis ini dirancang untuk menjawab lima pertanyaan inti yang menjadi indikator kesehatan sebuah dataset. Pertama, bagaimana distribusi nilai pada fitur tersebut? Untuk variabel numerik, kita dapat memanfaatkan histogram untuk melihat kerapatan frekuensi, density plot untuk estimasi distribusi yang lebih halus, boxplot atau violin plot untuk memvisualisasikan kuartil serta mendeteksi anomali, serta ECDF (Empirical Cumulative Distribution Function) ketika ingin membandingkan proporsi kumulatif antar subset. Sebaliknya, untuk variabel kategorikal, count plot dan proportion plot menjadi standar untuk memetakan dominasi kelas dan mengidentifikasi kategori yang sangat jarang (rare categories). Kedua, apakah terdapat nilai yang tidak masuk akal atau keluar dari batas logis domain masalah? Ketiga, bagaimana komposisi proporsi tiap kategori, dan keempat, apakah distribusi menunjukkan skewness ekstrem atau long-tail yang dapat mengganggu asumsi algoritma? Kelima, dan paling strategis: apakah fitur ini layak dipertahankan dalam model, atau justru berpotensi menjadi sumber noise?

Peran univariate analysis dalam Exploratory Data Analysis bersifat determinatif terhadap pipeline penelitian. Temuan dari pemeriksaan satu variabel ini menjadi dasar empiris untuk memilih transformasi yang tepat, seperti log atau Yeo-Johnson transformation untuk data yang right-skewed, serta strategi encoding seperti ordinal atau target encoding bagi variabel kategorikal yang memiliki hierarki atau imbalance. Selain itu, identifikasi outlier melalui boxplot atau analisis IQR akan menentukan apakah penanganan outlier dilakukan via winsorization, imputasi berbasis median, atau penghapusan observasi. Dengan mengimplementasikan teknik ini menggunakan ekosistem Python seperti Matplotlib dan Seaborn di Jupyter Notebook atau Google Colab, seluruh proses dapat didokumentasikan secara reproducible, memenuhi standar transparansi metodologis yang diharapkan dalam publikasi ilmiah.

### Inti yang Harus Ditekankan

- Analisis univariat memeriksa satu variabel sekaligus, berfungsi sebagai diagnosa awal yang menentukan arah preprocessing dan seleksi fitur.
- Teknik visualisasi harus diskriminatif berdasarkan tipe data: plot distribusi dan outlier detection untuk numerik, serta count/proportion mapping untuk kategorikal.
- Hasil eksplorasi ini secara langsung mengarahkan keputusan teknis krusial seperti jenis transformasi, penanganan outlier, encoding kategorikal, dan evaluasi kelayakan fitur untuk model.

### Transisi ke Slide Berikutnya

Setelah karakteristik individual setiap variabel terpetakan secara jelas melalui pendekatan univariat, langkah logis selanjutnya adalah menelusuri bagaimana variabel-variabel tersebut saling berinteraksi. Pada slide berikutnya, kita akan membahas Bivariate Analysis untuk mengungkap hubungan antar fitur maupun antara fitur dengan variabel target, sehingga kita dapat menilai relevansi prediktif, redundansi, serta pola linear atau non-linear yang tidak terlihat jika hanya mengamati satu dimensi.

---

## Slide 008 - Bivariate Analysis

### Narasi

Setelah menyelesaikan analisis univariat pada slide sebelumnya yang berfokus pada distribusi, outlier, dan karakteristik tunggal setiap fitur, langkah metodologis berikutnya dalam Eksplorasi Data adalah memahami bagaimana variabel-variabel tersebut saling berinteraksi. Analisis bivariat secara fundamental mempelajari hubungan antara dua variabel pada satu waktu. Dalam konteks penelitian data mining tingkat magister, pendekatan ini bukan sekadar pemeriksaan statistik deskriptif, melainkan fondasi kritis untuk merumuskan hipotesis awal, mengidentifikasi pola prediktif, dan memvalidasi asumsi struktural data sebelum memasuki tahap preprocessing lanjutan atau pemodelan.

Secara umum, analisis bivariat dapat dikategorikan menjadi dua jenis utama yang memiliki tujuan analitis berbeda. Pertama, hubungan antar fitur (*feature-feature*), misalnya mengkorelasikan variabel umur dengan pendapatan atau jumlah transaksi dengan frekuensi login. Tujuan utamanya adalah mendeteksi redundansi atau kolinearitas yang dapat mengganggu stabilitas model, mengurangi efisiensi komputasi, atau menyebabkan overfitting pada algoritma sensitif terhadap dependensi linier seperti regresi linear atau PCA. Kedua, hubungan antara fitur dengan variabel target (*feature-target*), seperti membandingkan distribusi pendapatan pada kelas churn = 1 versus churn = 0, atau melihat pola scatter plot antara skor kredit dengan probabilitas default. Pendekatan ini sangat vital untuk menilai relevansi prediktif suatu fitur dan menentukan apakah terdapat perbedaan distribusi atau tren yang layak dieksploitasi oleh classifier atau regressor.

Melalui eksplorasi pasangan variabel ini, kita dapat menjawab pertanyaan-pertanyaan metodologis yang krusial bagi desain eksperimen:
- Apakah fitur ini benar-benar relevan terhadap target, atau hanya noise statistik yang tidak berkontribusi pada performa model?
- Apakah dua fitur saling redundan sehingga perlu dilakukan seleksi fitur, penggabungan, atau transformasi orthogonal?
- Bagaimana bentuk hubungan yang terbentuk—apakah linear, monotonik, atau bersifat non-linear seperti interaksi kuadratik, sigmoid, atau threshold effect?
- Apakah ada interaksi yang perlu dieksplorasi lebih lanjut melalui pembuatan fitur baru atau pemilihan algoritma yang mampu menangkap struktur kompleks tersebut?

Penting untuk dicatat bahwa temuan dari analisis bivariat bersifat korelasional dan tidak cukup untuk mengklaim hubungan kausalitas. Korelasi yang kuat antara dua variabel bisa jadi merupakan artefak dari confounding variable yang belum teramati, bias sampling, atau kebetulan statistik. Oleh karena itu, hasil bivariat harus selalu ditindaklanjuti dengan validasi lebih lanjut melalui analisis multivariat, uji signifikansi statistik yang tepat, atau desain eksperimen kontrol. Pada jenjang pascasarjana, pemahaman ini menjadi dasar untuk menghindari kesesatan logika dalam penarikan kesimpulan penelitian dan memastikan bahwa setiap klaim empiris didukung oleh evidence yang robust serta reproducible.

### Inti yang Harus Ditekankan

- Analisis bivariat menjembatani univariat dan multivariat, berfungsi sebagai alat diagnostik untuk mengukur relevansi fitur terhadap target dan deteksi redundansi antar fitur.
- Bentuk hubungan (linear vs non-linear) secara langsung mempengaruhi pilihan teknik preprocessing, feature engineering, dan algoritma machine learning yang akan digunakan.
- Korelasi tidak sama dengan kausalitas; temuan bivariat bersifat eksploratif dan harus divalidasi lebih lanjut untuk mencegah bias konfonding dalam penelitian.
- Hasil analisis ini menjadi input utama dalam proses seleksi fitur, reduksi dimensi, dan perancangan baseline eksperimen yang efisien.

### Transisi ke Slide Berikutnya

Analisis bivariat memberikan peta awal tentang pasangan variabel yang saling terkait, namun realitas data jarang sekali berjalan dalam ruang dua dimensi saja. Untuk menangkap kompleksitas sebenarnya, kita perlu melangkah ke analisis multivariat yang memungkinkan kita mengamati interaksi simultan dari tiga variabel atau lebih, mengungkap struktur laten data, dan membangun hipotesis yang lebih realistis untuk tahap pemodelan lanjutan.

---

## Slide 009 - Multivariate Analysis

### Narasi

Setelah kita menyelesaikan eksplorasi melalui lensa bivariat yang membatasi pengamatan hanya pada pasangan dua variabel, kini kita naik level ke analisis yang lebih komprehensif, yaitu multivariate analysis. Sesuai definisi pada slide ini, analisis multivariat mempelajari interaksi dan struktur data secara simultan dengan melibatkan lebih dari dua variabel. Dalam praktik data mining tingkat magister, pendekatan ini bukan sekadar kelengkapan teknis, melainkan kebutuhan metodologis untuk menangkap realitas kompleks di mana target jarang sekali ditentukan oleh satu atau dua faktor secara isolatif. Kita harus mampu melihat bagaimana beberapa fitur saling berinteraksi, memperkuat, atau bahkan menetralkan pengaruh masing-masing terhadap outcome yang diprediksi.

Penerapan analisis multivariat dalam tahap EDA mencakup empat tujuan strategis yang langsung berdampak pada kualitas pipeline penelitian. Pertama, kita mencari pola kombinasi fitur yang secara kolektif berkorelasi kuat dengan target, misalnya bagaimana interaksi antara durasi sesi, jumlah klik, dan riwayat pembayaran bersama-sama membentuk profil pengguna aktif versus churn. Kedua, teknik ini mengungkap ketergantungan antar fitur atau redundansi struktural, yang menjadi alarm awal untuk menangani multicollinearity sebelum masuk ke fase pemodelan. Ketiga, analisis ini memungkinkan deteksi sub-kelompok atau klaster alami dalam populasi data yang mungkin tersembunyi jika hanya dilihat secara univariat atau bivariat. Keempat, temuan ini sering menjadi landasan empiris untuk merancang feature engineering berbasis interaksi, seperti pembuatan rasio, produk silang, atau transformasi polinomial yang secara signifikan meningkatkan kapasitas diskriminatif model.

Untuk mengeksekusi eksplorasi ini secara sistematis, terdapat sekumpulan teknik visualisasi dan statistik yang sangat relevan. Pair plot atau scatter plot matrix memberikan peta hubungan pairwise antar seluruh fitur sekaligus, dilengkapi dengan histogram atau KDE di diagonal untuk melihat distribusi marginalnya. Correlation matrix dan heatmap dengan anotasi nilai korelasi memungkinkan pengukuran cepat terhadap kekuatan dan arah hubungan linear, sementara teknik reduksi dimensi seperti PCA, t-SNE, atau UMAP membantu memproyeksikan struktur data berdimensi tinggi ke ruang dua atau tiga dimensi tanpa menghilangkan varians esensial. Dalam ekosistem Python, implementasi ini dapat diotomasi menggunakan `pandas.corr()`, `seaborn.pairplot()` dan `heatmap()`, serta integrasi `sklearn.decomposition.PCA` atau `umap-learn` untuk visualisasi manifold data yang kompleks.

Dari sudut pandang konstruksi penelitian, peran multivariate analysis melampaui batas deskriptif biasa. Analisis ini berfungsi sebagai filter validasi eksploratif yang membantu peneliti merumuskan hipotesis lebih realistis, grounded on empirical structure, sekaligus mencegah kesesatan interpretasi akibat simplifikasi berlebihan dari analisis bivariat. Namun, setelah peta interaksi dan dependensi fitur terbentuk, langkah logis berikutnya adalah memeriksa sifat distribusi masing-masing variabel tersebut. Karakteristik skewness dan fenomena long-tail distribution akan langsung memengaruhi asumsi probabilistik banyak algoritma, sehingga pemahaman mendalam mengenai transformasi data akan menjadi fondasi kritis di slide berikutnya.

### Inti yang Harus Ditekankan

- Multivariate analysis bergerak melampaui hubungan pasangan variabel untuk mengungkap struktur interaksi simultan yang lebih mencerminkan kompleksitas fenomena nyata.
- Eksplorasi ini bersifat prediktif terhadap kualitas preprocessing: mengidentifikasi redundansi, mendeteksi sub-populasi, dan menjadi dasar ilmiah untuk feature engineering berbasis interaksi.
- Teknik visualisasi dan reduksi dimensi (pair plot, heatmap korelasi, PCA/t-SNE/UMAP) bukan sekadar alat grafis, melainkan instrumen diagnostik untuk memvalidasi asumsi data sebelum pemodelan.
- Dalam kerangka penelitian S2, analisis multivariat berfungsi sebagai jembatan metodologis antara observasi eksploratif dan perumusan hipotesis yang robust, sekaligus mitigasi bias simplifikasi bivariat.

### Transisi ke Slide Berikutnya

Dengan struktur interaksi dan dependensi fitur yang telah terpetakan, perhatian kita kini beralih ke karakteristik internal masing-masing variabel. Distribusi data, khususnya skewness dan fenomena long-tail, akan menentukan apakah asumsi normalitas atau skala model terpenuhi, sehingga kita perlu membahas mengapa transformasi seperti log, Box-Cox, atau Yeo-Johnson menjadi langkah wajib dalam pipeline preprocessing yang rigor.

---

## Slide 010 - Distribusi Data, Skewness & Long-Tail

### Narasi

Setelah pada slide sebelumnya kita mengeksplorasi interaksi antar variabel melalui analisis multivariat, langkah fundamental berikutnya dalam Eksploratory Data Analysis (EDA) adalah memeriksa sifat univariat dari setiap fitur, khususnya bentuk distribusinya. Banyak algoritma machine learning, baik berbasis linear seperti regresi linier dan LDA, maupun probabilistik seperti Gaussian Naive Bayes, memiliki asumsi implisit mengenai distribusi data atau kesetaraan varians. Ketika data menunjukkan kemiringan ekstrem, asumsi-asumsi ini dapat terlanggar, yang berujung pada estimasi parameter yang bias, ketidakstabilan konvergensi optimizer, atau degradasi performa generalisasi model. Oleh karena itu, karakterisasi distribusi bukan sekadar langkah deskriptif, melainkan fondasi metodologis untuk memastikan validitas eksperimen.

Skewness atau kemiringan distribusi diukur secara kuantitatif untuk mengidentifikasi asimetri data. Nilai skewness mendekati nol menandakan distribusi yang relatif simetris, biasanya mengikuti pola normal. Jika nilai skewness positif, data bersifat right-skewed atau miring ke kanan, di mana ekor distribusi memanjang ke arah nilai besar dan mean cenderung lebih tinggi daripada median. Sebaliknya, skewness negatif mengindikasikan left-skewed atau miring ke kiri, dengan ekor yang memanjang ke nilai kecil. Dalam konteks penelitian data mining nyata, terutama pada domain finansial, e-commerce, atau perilaku pengguna, right-skewness jauh lebih sering muncul akibat adanya akumulasi massa data di rentang rendah dan beberapa observasi ekstrem yang menarik ekor distribusi.

Fenomena right-skewness yang ekstrem sering kali membentuk apa yang disebut sebagai long-tail distribution. Ciri utamanya adalah sebagian besar nilai terkonsentrasi pada rentang yang sempit dekat nol atau batas bawah, sementara hanya sedikit nilai yang sangat besar yang membentang jauh ke kanan. Contoh klasik meliputi distribusi pendapatan, frekuensi transaksi, durasi sesi pengguna, atau jumlah klik pada konten viral. Dampak teknis dari long-tail ini signifikan: fungsi kerugian berbasis kuadrat seperti Mean Squared Error (MSE) menjadi sangat sensitif terhadap ekor panjang, skala fitur dapat terdistorsi secara drastis, dan model berisiko overfit terhadap noise di bagian ekor jika tidak ditangani dengan tepat.

Untuk menormalkan distribusi yang sangat miring dan mengurangi pengaruh ekor panjang, serangkaian transformasi matematis dapat diterapkan. Log transform efektif menangani data positif yang right-skewed dengan meratakan skala logaritmik. Box-Cox transform merupakan pendekatan yang lebih sistematis dengan mengoptimalkan parameter lambda untuk mendekatkan data ke distribusi normal, namun memerlukan syarat data harus bernilai positif ketat. Sebagai alternatif yang lebih fleksibel, Yeo-Johnson transform memperluas mekanisme Box-Cox sehingga mampu memproses nilai nol maupun negatif tanpa perlu penyesuaian offset manual. Penting untuk dicatat bahwa dalam kerangka penelitian yang rigor, semua transformasi ini wajib diimplementasikan dalam preprocessing pipeline. Fitting transformator hanya dilakukan pada training set, lalu parameter yang diperoleh diterapkan pada validation dan test set. Praktik ini mencegah data leakage, menjaga independensi evaluasi, dan menjamin bahwa metrik performa mencerminkan kemampuan model sesungguhnya di lingkungan produksi.

Memahami karakteristik distribusi dan menerapkan transformasi yang sesuai mempersiapkan kita untuk verifikasi empiris. Setelah tahap kuantitatif selesai, kita perlu mengonfirmasi hasil transformasi secara visual untuk memastikan bentuk distribusi telah stabil, outlier telah tertangani, dan struktur data siap diproses oleh algoritma pembelajaran mesin.

### Inti yang Harus Ditekankan

- Validitas asumsi distribusi menjadi prasyarat kritis bagi stabilitas algoritma dan keandalan inferensi statistik dalam penelitian data mining.
- Skewness berfungsi sebagai indikator kuantitatif asimetri yang menentukan apakah transformasi diperlukan untuk menetralkan pengaruh ekor panjang.
- Long-tail distribution menuntut penanganan khusus agar tidak mendominasi fungsi kerugian dan mendistorsi proses scaling serta pelatihan model.
- Semua operasi transformasi harus dikapsulasi dalam pipeline preprocessing untuk menjamin experimental validity dan mencegah data leakage antara training dan test set.

### Transisi ke Slide Berikutnya

Setelah memetakan karakteristik distribusi dan menerapkan transformasi yang sesuai, langkah selanjutnya adalah memverifikasi perubahan bentuk data secara visual. Pada slide berikutnya, kita akan membahas berbagai teknik visualisasi numerik seperti histogram, density plot, boxplot, violin plot, dan ECDF, lengkap dengan contoh implementasi menggunakan Seaborn untuk mengonfirmasi keberhasilan transformasi dan mendeteksi anomali secara empiris sebelum masuk ke tahap pemodelan.

---

## Slide 011 - Visualisasi Numerik

### Narasi

Setelah membahas karakteristik distribusi, skewness, dan strategi transformasi pada slide sebelumnya, langkah logis berikutnya dalam pipeline Exploratory Data Analysis adalah memvisualisasikan variabel numerik secara eksplisit. Visualisasi numerik berfungsi sebagai alat diagnostik utama untuk mengonfirmasi bentuk distribusi secara empiris, mengidentifikasi outlier yang mungkin mendominasi perhitungan statistik, serta membandingkan pola antar sub-kelompok sebelum keputusan preprocessing atau pemodelan diambil. Pada jenjang magister, kemampuan memilih representasi visual yang tepat bukan hanya soal estetika, melainkan fondasi metodologis untuk memastikan validitas eksperimen dan reproducibility hasil penelitian.

Terdapat lima teknik visualisasi numerik yang menjadi standar dalam praktik data mining kontemporer. Histogram membagi rentang nilai ke dalam bin tertentu untuk menampilkan frekuensi absolut atau relatif; jumlah bin yang dipilih akan sangat menentukan apakah struktur distribusi terlihat jelas atau justru tertutup noise. Density plot, yang biasanya diestimasi melalui Kernel Density Estimation (KDE), menghasilkan kurva halus yang merepresentasikan kepadatan probabilitas kontinu, sehingga lebih efektif untuk mendeteksi multimodalitas atau puncak distribusi sekunder yang sering tersembunyi pada histogram. Boxplot menyajikan ringkasan statistik lima angka (minimum, Q1, median, Q3, maksimum) sekaligus menandai titik data yang jatuh di luar batas IQR sebagai outlier, menjadikannya alat deteksi anomali yang cepat dan robust. Violin plot menggabungkan boxplot dengan density plot, menampilkan simetri dan kerapatan data di sepanjang sumbu vertikal, sehingga ideal untuk menggambarkan distribusi yang miring atau memiliki ekor tebal. Terakhir, ECDF (Empirical Cumulative Distribution Function) memetakan proporsi kumulatif observasi yang kurang dari atau sama dengan nilai tertentu; karena tidak bergantung pada pemilihan bin, ECDF sangat unggul untuk perbandingan statistik antar kelompok atau evaluasi performa threshold dalam klasifikasi.

Dalam implementasi praktis menggunakan ekosistem Python, library Seaborn menyediakan antarmuka declarative yang efisien. Kode pada slide memanfaatkan `sns.histplot()` dengan `bins=30` sebagai titik awal yang seimbang antara resolusi dan stabilitas visual. `sns.boxplot()` diterapkan pada kolom usia untuk mengisolasi nilai ekstrem yang dapat mendistorsi mean dan varians. `sns.violinplot()` digunakan untuk membandingkan distribusi nominal transaksi antar kelas target, memungkinkan identifikasi perbedaan bentuk distribusi yang tidak terlihat pada boxplot konvensional. Sementara itu, `sns.ecdfplot()` divisualisasikan pada variabel durasi untuk mengevaluasi akumulasi probabilitas secara global tanpa bias diskritisasi. Setiap fungsi tersebut menerima parameter `data=df` yang mengacu pada objek DataFrame pandas, sehingga integrasinya dengan pipeline preprocessing berbasis scikit-learn tetap seamless.

Sebagai peneliti, Anda harus menyadari bahwa kualitas visualisasi numerik secara langsung memengaruhi kredibilitas paper Anda. Grafik yang ambigu atau tidak disertai penjelasan parameter dapat menutupi masalah fundamental seperti heteroskedastisitas, skewness berat, atau outlier leverage yang seharusnya ditangani sebelum training model. Sebaliknya, visualisasi yang rigor akan menjadi bukti empiris yang mendukung justifikasi transformasi, seleksi fitur, atau bahkan formulasi research question baru. Pastikan setiap plot dilengkapi label sumbu yang informatif, skala yang konsisten, dan legenda yang jelas agar temuan EDA dapat dikomunikasikan secara efektif kepada reviewer dan komunitas akademik.

### Inti yang Harus Ditekankan

- Setiap teknik visualisasi numerik memiliki fungsi diagnostik spesifik: histogram untuk frekuensi bin, density plot untuk estimasi halus, boxplot untuk outlier & ringkasan statistik, violin plot untuk bentuk distribusi kompleks, dan ECDF untuk perbandingan kumulatif tanpa bias bin.
- Parameter visualisasi (seperti jumlah bin pada histogram atau bandwidth pada KDE) harus disesuaikan secara eksplisit berdasarkan karakteristik dataset dan tujuan analisis, bukan mengandalkan default library.
- Visualisasi numerik adalah jembatan metodologis antara pemahaman data mentah dan keputusan preprocessing; hasil visualisasi harus menjadi dasar argumentasi dalam bab metodologi paper.
- Standar publikasi internasional menuntut reproduktibilitas dan kejelasan visual; setiap plot harus terlabel, berskala konsisten, dan mampu mendukung klaim temuan EDA secara empiris.

### Transisi ke Slide Berikutnya

Setelah menyelesaikan representasi visual untuk variabel numerik, kita akan beralih ke variabel kategorikal yang memerlukan pendekatan analitik berbeda. Karena data kategorikal tidak memiliki urutan matematis alami, teknik seperti count plot, proportion plot, dan contingency table menjadi kunci untuk mengungkap hubungan silang, mengukur dominansi kelas, serta mengevaluasi pengaruh kategori terhadap variabel target sebelum masuk ke tahap encoding dan pemodelan.

---

## Slide 012 - Visualisasi Kategorikal

### Narasi

Setelah kita mengeksplorasi distribusi dan pola melalui visualisasi numerik pada slide sebelumnya, langkah logis berikutnya dalam Eksploratory Data Analysis adalah menangani data kategorikal. Tujuan utama dari visualisasi jenis ini adalah untuk memetakan bagaimana observasi terdistribusi di antara berbagai kategori, serta mengungkap hubungan potensial antara variabel kategorikal dengan variabel lain, termasuk variabel target. Dalam konteks penelitian data mining tingkat magister, pemahaman ini menjadi prasyarat metodologis sebelum masuk ke tahap seleksi fitur, encoding, atau pemodelan prediktif.

Terdapat tiga teknik inti yang perlu dikuasai. Pertama, *count plot* menyajikan frekuensi absolut per kategori, memberikan gambaran cepat mengenai dominasi atau ketidakseimbangan kelas. Kedua, *proportion plot* mengonversi frekuensi tersebut menjadi persentase relatif, sehingga memungkinkan perbandingan yang adil antar kelompok meskipun ukuran sampelnya berbeda. Ketiga, *contingency table* atau tabel silang digunakan untuk memvisualisasikan interaksi dua variabel kategorikal sekaligus. Untuk menggerakkan analisis ini, peneliti harus mampu merumuskan pertanyaan analitis yang tajam, misalnya: berapa proporsi aktual masing-masing kelas target, apakah terdapat variasi signifikan dalam kecenderungan *churn* berdasarkan wilayah kota, atau apakah dua kategori tertentu memiliki ko-kemunculan yang tinggi dalam satu baris data.

Implementasi praktisnya dalam ekosistem Python dapat dilakukan dengan efisiensi tinggi menggunakan `seaborn` dan `pandas`. Pada cuplikan kode yang ditampilkan, fungsi `countplot(data=df, x="city")` akan menghasilkan grafik batang yang mencatat jumlah pelanggan per kota. Lebih lanjut, untuk menilai ketergantungan antara kota dan target, kita memanfaatkan `pd.crosstab(df["city"], df["target"], normalize="index")`. Argumen `normalize="index"` sangat krusial karena ia menghitung probabilitas bersyarat (conditional probability) sepanjang indeks kota, sehingga kita dapat membaca seberapa besar kemungkinan seorang pelanggan dari kota tertentu masuk ke kelas target tertentu. Outputnya adalah matriks numerik yang siap dianalisis lebih lanjut.

Praktik terbaik yang harus dipegang teguh dalam penulisan paper atau laporan penelitian adalah bahwa visualisasi kategorikal tidak boleh berdiri sendiri. Grafik memang efektif untuk komunikasi visual, namun reviewer dan pembaca akademik membutuhkan presisi kuantitatif. Oleh karena itu, setiap visualisasi kategorikal wajib disandingkan dengan tabel ringkasan atau *summary table*. Pendekatan ini menjamin transparansi data, memudahkan replikasi eksperimen, dan memperkuat validitas temuan berbasis bukti. Dengan menyelesaikan eksplorasi univariat dan bivariat untuk data kategorikal, kita telah menyiapkan fondasi yang kokoh untuk mengukur kekuatan hubungan statistik antar variabel secara formal.

### Inti yang Harus Ditekankan

- Visualisasi kategorikal berfokus pada distribusi frekuensi, proporsi relatif, dan interaksi silang antar kategori, bukan pada nilai kontinu.
- Penggunaan `normalize="index"` pada `crosstab` mengubah tabel frekuensi menjadi tabel probabilitas bersyarat, yang esensial untuk analisis pengaruh kategorikal terhadap target.
- Standar penelitian data mining menuntut penyandingan visualisasi dengan tabel ringkasan numerik guna memastikan akurasi, transparansi, dan kemudahan verifikasi oleh reviewer.

### Transisi ke Slide Berikutnya

Dengan memahami distribusi dan hubungan dasar antar variabel kategorikal, kita telah melengkapi tahap eksplorasi deskriptif. Langkah selanjutnya adalah mengkuantifikasi kekuatan dan arah hubungan tersebut secara statistik, baik untuk pasangan numerik maupun campuran, melalui analisis korelasi dan asosiasi.

---

## Slide 013 - Korelasi dan Asosiasi Antarvariabel

### Narasi

Setelah pada slide sebelumnya kita mengeksplorasi distribusi dan frekuensi data kategorikal melalui teknik seperti count plot dan contingency table, langkah analitis berikutnya dalam Eksplorasi Data adalah mengkuantifikasi hubungan antar variabel secara numerik. Korelasi dan asosiasi menjadi fondasi krusial dalam fase EDA karena memberikan ukuran objektif mengenai seberapa erat dua variabel saling terkait, yang secara langsung mempengaruhi strategi preprocessing, seleksi fitur, dan validitas desain eksperimen. Secara definisi dasar, korelasi mengukur kekuatan dan arah hubungan statistik antara sepasang variabel, namun implementasinya dalam praktik data mining menuntut pemahaman mendalam tentang asumsi dan batasan setiap metode.

Terdapat empat pendekatan utama yang tercantum dalam slide ini, masing-masing dioptimalkan untuk karakteristik data yang berbeda. Pearson correlation hanya berlaku untuk pasangan variabel numerik dan secara spesifik mengukur ketergantungan linear; metode ini sensitif terhadap outlier dan asumsi normalitas. Untuk data yang bersifat ordinal atau numerik dengan distribusi skew, Spearman rank correlation lebih direkomendasikan karena bekerja pada peringkat data dan mampu mendeteksi hubungan monotonik yang tidak harus berbentuk garis lurus. Ketika kedua variabel bersifat kategorikal, kita beralih ke Cramér's V, yang merupakan generalisasi dari koefisien kontingensi berdasarkan uji Chi-Square untuk mengukur derajat asosiasi tanpa mensyaratkan urutan kategori. Terakhir, Mutual Information menawarkan kerangka kerja berbasis teori informasi yang dapat menangani data campuran (mixed) dan secara efektif menangkap pola hubungan non-linear yang sering kali terlewat oleh metode parametrik tradisional.

Dalam praktiknya, interpretasi nilai korelasi berada pada rentang -1 hingga +1. Nilai mendekati +1 mengindikasikan hubungan positif kuat, artinya kenaikan pada satu variabel diikuti oleh kenaikan proporsional pada variabel lainnya. Nilai mendekati -1 menandakan hubungan negatif kuat, sedangkan nilai mendekati 0 menyiratkan tidak adanya hubungan linear. Perlu ditekankan bahwa nilai nol tidak berarti tidak ada hubungan sama sekali, melainkan hanya tidak ada hubungan linear. Dari sudut pandang metodologi penelitian tingkat magister, hasil korelasi ini memiliki implikasi eksperimental yang signifikan. Korelasi tinggi antar fitur (multikolinearitas) mengindikasikan redundansi informasi yang dapat membengkakkan kompleksitas model atau mengisyaratkan potensi data leakage jika fitur tersebut sebenarnya merupakan turunan prosedural dari target. Sebaliknya, korelasi tinggi antara fitur tertentu dengan variabel target perlu diselidiki lebih lanjut, karena hal ini sering menjadi indikator kuat untuk seleksi fitur awal, namun juga memerlukan pengecekan ketat agar tidak terjadi contamination data selama cross-validation.

### Inti yang Harus Ditekankan

- Pemilihan metrik korelasi/asosiasi harus selalu disesuaikan dengan skala pengukuran data (numerik, ordinal, kategorikal, atau mixed) dan sifat hubungan yang diharapkan (linear, monotonik, atau non-linear).
- Nilai korelasi nol hanya menyatakan ketiadaan hubungan linear, bukan ketiadaan hubungan statistik secara keseluruhan; hubungan non-linear tetap mungkin terjadi.
- Analisis korelasi dalam EDA berfungsi sebagai alat diagnostik metodologis: mengungkap redundansi/leakage antar prediktor, mengidentifikasi kandidat fitur paling informatif terhadap target, dan mendukung keputusan seleksi variabel yang transparan dalam penelitian.

### Transisi ke Slide Berikutnya

Memahami nilai numerik korelasi hanyalah separuh dari proses; separuh lainnya adalah memetakannya secara visual agar pola hubungan multivariat dapat diidentifikasi secara instan. Pada slide berikutnya, kita akan beralih ke implementasi praktis menggunakan scatter plot, pair plot, correlation matrix, dan heatmap untuk merepresentasikan matriks korelasi secara grafis, disertai pertimbangan teknis terkait skalabilitas dan interpretasi visual pada dataset berukuran besar.

---

## Slide 014 - Scatter Plot, Pair Plot, Correlation Matrix & Heatmap

### Narasi

Setelah membahas metrik korelasi dan asosiasi pada slide sebelumnya, langkah metodologis berikutnya dalam Eksplorasi Data adalah mentransformasi nilai numerik tersebut menjadi representasi visual yang memungkinkan deteksi pola, anomali, dan struktur data secara simultan. Visualisasi multivariat bukan sekadar pelengkap presentasi, melainkan instrumen analitis yang wajib digunakan dalam fase EDA untuk memvalidasi asumsi statistik dan mengidentifikasi masalah kualitas data sebelum masuk ke tahap pemodelan.

Scatter plot berfungsi sebagai fondasi visual untuk memetakan hubungan bivariate antara dua variabel numerik. Dengan menempatkan satu fitur pada sumbu horizontal dan fitur lainnya pada sumbu vertikal, kita dapat langsung menilai arah tren, kerapatan distribusi, keberadaan outlier ekstrem, serta kemungkinan hubungan non-linear. Ketika dataset mengandung variabel target kategorikal, penambahan parameter `hue` memungkinkan stratifikasi visual berdasarkan kelas, sehingga peneliti dapat segera menilai apakah batas keputusan antar-kelas terlihat terpisah secara alami atau tumpang tindih.

Ketika dimensi fitur bertambah, memeriksa scatter plot secara manual menjadi tidak efisien. Pair plot mengatasi keterbatasan ini dengan menghasilkan matriks scatter plot untuk semua pasangan variabel numerik sekaligus, dilengkapi dengan distribusi marginal (histogram atau KDE) pada diagonal utama. Pendekatan ini memberikan peta holistik hubungan antarfitur dalam satu tampilan. Namun, skalabilitas pair plot terbatas secara komputasi dan perseptual. Pada dataset dengan ratusan ribu observasi atau lebih dari sepuluh fitur numerik, rendering akan melambat drastis dan kepadatan titik data justru menutupi pola sebenarnya. Dalam praktik penelitian, pair plot sebaiknya diterapkan pada subset acak yang representatif atau setelah reduksi dimensi awal.

Untuk meringkas hubungan kuantitatif secara sistematis, correlation matrix dihitung menggunakan koefisien Pearson antar semua pasangan kolom numerik. Matriks ini kemudian dirender sebagai heatmap menggunakan skema warna divergen seperti `"coolwarm"`. Warna merah/oranye menandakan korelasi positif kuat, biru menandakan korelasi negatif kuat, dan putih/krem menandakan kedekatan dengan nol. Anotasi angka (`annot=True`) memastikan presisi nilai tetap terbaca, sehingga peneliti dapat melakukan screening fitur secara cepat dan objektif.

Implementasi kode pada slide ini memanfaatkan ekosistem `pandas` dan `seaborn`. Fungsi `sns.scatterplot` mengikat kolom `age` dan `income` sebagai sumbu, sementara `hue="target"` memberi warna berdasarkan label. `sns.pairplot` menerima daftar kolom spesifik dan tetap mempertahankan stratifikasi kelas. Untuk heatmap, pipeline dimulai dengan `.select_dtypes("number")` yang secara otomatis menyaring kolom non-numerik, dilanjutkan dengan `.corr()` untuk menghitung matriks simetris, lalu dilewatkan ke `sns.heatmap` dengan konfigurasi anotasi dan colormap. Urutan operasi ini menjamin kompatibilitas tipe data dan menghindari error saat rendering.

Dalam konteks penelitian tingkat magister, dua peringatan teknis pada slide ini harus menjadi checklist metodologis. Pertama, hindari penggunaan pair plot pada data skala produksi atau dataset besar tanpa strategi subsampling atau aggregasi; hasil visual yang padat tidak valid secara interpretatif. Kedua, identifikasi korelasi sempurna atau mendekati ±1 antar fitur prediktor. Nilai seperti ini mengindikasikan redundansi informasi yang dapat memicu multicollinearity, inflasi varians koefisien, atau bahkan data leakage jika fitur tersebut secara tidak sadar mengandung informasi target. Fitur redundant harus dipertahankan, digabung, atau dihapus berdasarkan domain knowledge dan tujuan eksperimen. Visualisasi ini juga menyiapkan konteks untuk pemeriksaan distribusi variabel target, yang akan kita telaah secara ketat pada slide berikutnya mengenai class imbalance.

### Inti yang Harus Ditekankan

- Visualisasi multivariat (scatter, pair plot, heatmap) adalah komponen wajib EDA untuk memvalidasi metrik statistik, mendeteksi outlier, dan mengungkap struktur data yang tidak terlihat dari tabel mentah.
- Pair plot bersifat eksploratif dan tidak skalabel; gunakan pada subset data atau dataset berdimensi rendah, serta selalu verifikasi temuan visual dengan uji statistik formal.
- Korelasi fitur independen sebesar ±1 menandakan redundansi atau potensi leakage yang harus ditangani melalui seleksi fitur atau transformasi sebelum pemodelan.
- Pipeline kode harus selalu menyaring tipe data numerik secara eksplisit (`select_dtypes`) untuk menjaga konsistensi komputasi dan mencegah error saat perhitungan korelasi.

### Transisi ke Slide Berikutnya

Setelah memetakan hubungan antar fitur dan mengidentifikasi redundansi, langkah analitis berikutnya adalah memeriksa distribusi variabel target. Ketidakseimbangan kelas sering kali tersembunyi dalam agregasi statistik dan baru terlihat jelas ketika proporsi tiap label dihitung secara eksplisit. Mari kita lanjutkan ke analisis class imbalance dan implikasinya terhadap desain eksperimen.

---

## Slide 015 - Analisis Target / Class Imbalance

### Narasi

Setelah sebelumnya kita mengeksplorasi hubungan antar variabel fitur melalui scatter plot, pair plot, dan matriks korelasi, langkah selanjutnya dalam Eksploratory Data Analysis adalah memetakan distribusi variabel target itu sendiri. Memahami komposisi kelas atau label sebelum menentukan metrik evaluasi dan merancang alur eksperimen merupakan fondasi kritis, terutama pada jenjang magister di mana validitas penelitian sangat bergantung pada kesesuaian metodologi dengan karakteristik data empiris.

Langkah analisis ini dimulai dengan menghitung jumlah absolut observasi untuk setiap kelas target, dilanjutkan dengan menghitung proporsi relatifnya. Sebagai ilustrasi, tabel pada slide menunjukkan skenario umum di mana kelas dominan mencapai 90 persen sementara kelas minoritas hanya menyisakan 10 persen. Dalam praktik data mining nyata, threshold imbalance dapat bervariasi tergantung domain, namun keberadaan kelas yang sangat minoritas sudah cukup menjadi indikasi bahwa struktur data tidak seimbang. Pada tahap ini, Anda dapat menggunakan operasi agregasi sederhana pada library pandas untuk mengkuantifikasi distribusi tersebut secara eksplisit dan menyimpannya sebagai catatan awal.

Implikasi dari ketidakseimbangan kelas ini bersifat fundamental terhadap desain eksperimen. Metrik akurasi akan kehilangan makna karena model dapat mencapai skor tinggi hanya dengan selalu memprediksi kelas mayoritas, sehingga mengabaikan performa pada kelas yang justru sering kali lebih kritis secara bisnis atau ilmiah. Oleh karena itu, pergeseran ke metrik yang lebih robust seperti precision, recall, F1-score, Precision-Recall AUC, dan ROC-AUC menjadi wajib. Penanganan teknis seperti teknik resampling atau pemberian class weight juga perlu dipertimbangkan, meskipun pembahasan mendalam mengenai strategi penanganan imbalance akan kita bahas secara khusus pada Pertemuan 07. Poin krusial yang harus dicatat selama EDA adalah mendokumentasikan temuan imbalance ini sebagai variabel pengikat yang secara langsung membatasi pilihan metrik, algoritma, dan protokol validasi silang dalam rancangan penelitian Anda.

Karakteristik struktural data tidak berhenti pada distribusi target saja. Setelah peta kelas terpetakan, fokus analisis perlu bergeser ke integritas kolom fitur itu sendiri untuk mengidentifikasi bagaimana dan mengapa data hilang, yang akan membentuk dasar bagi keputusan preprocessing berikutnya.

### Inti yang Harus Ditekankan

- Distribusi kelas target secara langsung menentukan pemilihan metrik evaluasi dan protokol validasi eksperimen.
- Akurasi bersifat menyesatkan pada data tidak seimbang; gunakan precision, recall, F1, PR-AUC, atau ROC-AUC.
- Temuan imbalance harus didokumentasikan dalam laporan EDA sebagai constraint desain penelitian.
- Strategi penanganan (resampling, class weight) adalah keputusan turunan yang didasarkan pada hasil analisis distribusi ini.

### Transisi ke Slide Berikutnya

Dengan distribusi target telah dikarakterisasi, fokus analisis kini bergeser ke kualitas kolom fitur, khususnya identifikasi pola nilai kosong dan mekanisme missingness yang akan menentukan strategi imputasi atau penghapusan data pada langkah preprocessing berikutnya.

---

## Slide 016 - Missing Values & Missingness Analysis

### Narasi

Setelah kita mengidentifikasi distribusi target dan potensi class imbalance pada slide sebelumnya, langkah metodologis berikutnya yang tak kalah krusial dalam pipeline data mining adalah analisis dan penanganan missing values. Banyak algoritma machine learning standar, termasuk implementasinya di scikit-learn, secara default menolak input yang mengandung nilai kosong atau NaN. Namun, dalam konteks penelitian S2, penanganan missing values tidak boleh dipandang hanya sebagai tugas teknis pembersihan data. Pola data yang hilang sering kali mencerminkan proses pengumpulan data yang sebenarnya. Jika缺失nya bersifat sistematis, hal ini dapat mengindikasikan bias seleksi, keterbatasan instrumen, atau preferensi responden yang akan secara langsung mengancam validitas internal dan eksternal model kita.

Untuk merancang strategi preprocessing yang ilmiah, kita wajib mengklasifikasikan mekanisme missingness terlebih dahulu. Terdapat tiga kerangka teoritis utama yang menjadi acuan. Pertama, Missing Completely At Random (MCAR), di mana probabilitas suatu nilai hilang tidak bergantung pada variabel teramapaupun yang tidak teramapaui. Kedua, Missing At Random (MAR), di mana kemungkinan nilai hilang terkait erat dengan variabel lain yang sudah tercatat dalam dataset, misalnya mahasiswa dengan IPK tinggi cenderung tidak mengisi kolom jam kerja sampingan. Ketiga, Missing Not At Random (MNAR), yaitu skenario paling kompleks di mana probabilitas missing justru bergantung pada nilai yang seharusnya ada, seperti responden dengan tingkat stres ekstrem memilih untuk tidak menjawab pertanyaan kesehatan mental. Klasifikasi ini menentukan apakah teknik imputasi sederhana masih layak digunakan atau memerlukan pendekatan berbasis model.

Secara praktis, analisis missingness dimulai dengan kuantifikasi dan visualisasi eksploratif. Kita perlu menghitung jumlah serta persentase missing value per kolom untuk mendeteksi apakah缺失nya tersebar merata atau terkonsentrasi pada fitur spesifik. Di lingkungan Python, perintah `df.isna().sum()` memberikan ringkasan cepat jumlah NaN per kolom. Selanjutnya, visualisasi matriks missing menggunakan Seaborn melalui `sns.heatmap(df.isna(), cbar=False)` akan menghasilkan peta panas di mana setiap baris mewakili observasi dan setiap kolom merepresentasikan fitur. Kotak berwarna gelap menandakan data utuh, sedangkan kotak terang menandai missing value. Visualisasi ini sangat efektif untuk mengungkap pola blok missing yang mengisyaratkan mekanisme MAR atau MNAR. Sebagai kelengkapan analisis, bandingkan distribusi statistik deskriptif (mean, median, varians, sebaran kuartil) antara subset data lengkap dan subset yang mengandung missing value. Perbedaan signifikansi antar-subset ini menjadi bukti empiris bahwa data tidak bersifat MCAR.

Berdasarkan temuan tersebut, keputusan imputasi harus didasarkan secara ketat pada mekanisme missingness dan tujuan eksperimen. Jika data terbukti MCAR, teknik seperti mean/median imputation, mode imputation, atau KNN imputer umumnya aman diterapkan. Namun, ketika mengarah ke MAR atau MNAR, imputasi naif berisiko memperkenalkan bias sistematik yang merusak generalisasi model. Pada jenjang magister, kita disarankan mempertimbangkan metode yang lebih robust seperti Multiple Imputation by Chained Equations (MICE), model-based imputation, atau bahkan memanfaatkan sifat algoritma tree-based yang mampu menangani missing value secara native. Ingatlah bahwa setiap keputusan preprocessing adalah bagian dari desain eksperimen yang harus didokumentasikan dan justifikasi secara metodologis.

### Inti yang Harus Ditekankan

- Missing values bukan sekadar noise komputasi, melainkan sinyal potensial tentang bias pengumpulan data yang harus dianalisis sebelum diimputasi.
- Mekanisme MCAR, MAR, dan MNAR menentukan validitas strategi imputasi; kesalahan klasifikasi dapat menyebabkan bias model yang sulit diperbaiki di tahap evaluasi.
- Analisis missingness wajib mencakup kuantifikasi (`df.isna().sum()`), visualisasi matriks (`sns.heatmap(df.isna())`), dan perbandingan distribusi statistik antar-subset data.
- Keputusan preprocessing harus selaras dengan tujuan eksperimen dan didokumentasikan sebagai bagian dari reproducibility penelitian.

### Transisi ke Slide Berikutnya

Setelah memastikan struktur data bebas dari missing value yang mengganggu, kita beralih ke karakteristik ekstrem dalam distribusi data. Outlier dan nilai tidak wajar sering kali muncul bersamaan dengan pola missing, namun penanganannya menuntut logika deteksi yang berbeda. Mari kita bedah definisi, sumber, serta strategi identifikasi outlier secara statistik dan visual.

---

## Slide 017 - Outlier dan Nilai Tidak Wajar

### Narasi

Setelah menyelesaikan analisis missing values pada slide sebelumnya, di mana kita telah mempelajari pentingnya mengklasifikasikan mekanisme missingness (MCAR, MAR, MNAR) sebelum memutuskan strategi imputasi, kita kini melanjutkan pipeline preprocessing ke tahap identifikasi outlier atau nilai tidak wajar. Secara konseptual, outlier didefinisikan sebagai observasi yang secara signifikan menyimpang dari distribusi atau pola mayoritas data. Dalam konteks penelitian data mining jenjang magister, penanganan outlier bukanlah prosedur mekanis, melainkan keputusan metodologis yang berdampak langsung pada validitas eksperimen, asumsi statistik, dan performa model prediktif. Pengabaian atau penghapusan outlier tanpa investigasi dapat menghilangkan sinyal penting, sementara pemeliharaan outlier noise dapat mendistorsi estimasi parameter dan menurunkan generalisasi model.

Outlier tidak selalu bermakna sebagai kesalahan sistem. Sumber penyimpangan ini umumnya terbagi menjadi empat kategori utama. Pertama, kesalahan pengukuran atau input manual, seperti typo, kalibrasi sensor yang gagal, atau entri data duplikat yang salah. Kedua, peristiwa langka yang sebenarnya valid dan memiliki makna bisnis atau ilmiah, misalnya lonjakan lalu lintas website saat peluncuran produk atau fluktuasi pasar akibat krisis ekonomi. Ketiga, kontaminasi domain, yaitu pencampuran sampel dari populasi atau lingkungan yang berbeda secara inheren. Keempat, masalah representasi, di mana proses sampling tidak menangkap keragaman populasi secara proporsional. Menguraikan sumber outlier memungkinkan peneliti memilih strategi yang tepat: koreksi, segmentasi, atau preservasi.

Untuk mendeteksi outlier, kita dapat menggabungkan tiga pendekatan komplementer. Pendekatan statistik mengandalkan metrik kuantitatif seperti z-score untuk data berdistribusi mendekati normal, atau aturan IQR (Interquartile Range) yang menetapkan batas bawah sebagai Q1 − 1.5×IQR dan batas atas sebagai Q3 + 1.5×IQR. Pendekatan visual memberikan intuisi cepat melalui boxplot yang secara grafis menyoroti titik ekstrem di luar whisker, serta scatter plot untuk mengungkap anomali dalam ruang bivariat atau multivariat. Pendekatan knowledge-based mengandalkan keahlian domain, misalnya mendeteksi nilai umur negatif, tanggal lahir yang berada di masa depan, atau pendapatan yang melampaui batas logis suatu wilayah. Implementasinya dapat dilakukan secara efisien menggunakan library standar seperti pandas untuk perhitungan statistik, seaborn/matplotlib untuk visualisasi, serta scikit-learn untuk deteksi berbasis model.

Ketika outlier teridentifikasi, keputusan tindak lanjut harus didasarkan pada audit kontekstual, bukan penghapusan otomatis. Peneliti wajib menyelidiki apakah nilai tersebut merupakan data error yang perlu dibersihkan, atau rare event yang justru menjadi fokus analisis. Jika bersifat noise, alternatif penanganan meliputi transformasi fungsi (logaritma, Box-Cox, Yeo-Johnson) untuk menstabilkan varians, winsorization untuk membatasi nilai di persentil tertentu, atau pemilihan algoritma yang inherently robust terhadap outlier seperti Random Forest, Gradient Boosting, atau SVM dengan kernel non-linear. Perlu dicatat bahwa pembahasan deteksi outlier akan diperdalam pada Pertemuan 07 mengenai anomaly detection, di mana kita akan mengeksplorasi algoritma unsupervised seperti Isolation Forest, Local Outlier Factor, dan One-Class SVM yang dirancang khusus untuk skenario data tinggi dimensi dan label tidak tersedia. Sebelum memasuki materi tersebut, kita akan menangani masalah struktural data lainnya yang sering muncul bersamaan dengan outlier.

### Inti yang Harus Ditekankan

- Outlier adalah fenomena multidimensi yang bisa berupa error, rare event, atau kontaminasi domain; klasifikasi sumber menentukan strategi penanganan yang valid secara metodologis.
- Deteksi optimal dilakukan secara triangulasi: statistik (z-score/IQR), visual (boxplot/scatter), dan knowledge-based (validasi domain), bukan bergantung pada satu metode saja.
- Penghapusan outlier secara buta dilarang dalam praktik penelitian; alternatif seperti transformasi, winsorization, atau pemilihan model robust harus dievaluasi berdasarkan tujuan eksperimen dan hipotesis penelitian.
- Konsep outlier merupakan fondasi teoretis dan praktis yang akan dikembangkan lebih lanjut pada topik anomaly detection (Pertemuan 07) dengan algoritma khusus untuk skenario kompleks.

### Transisi ke Slide Berikutnya

Setelah memastikan data bebas dari distorsi ekstrem, langkah selanjutnya dalam pembersihan data adalah memeriksa integritas struktural dataset. Pada slide berikutnya, kita akan membahas bagaimana duplicate rows, inkonsistensi format, dan fitur redundan dapat mengganggu konsistensi analisis, serta metodologi sistematis untuk menstandarisasi dan menyederhanakan struktur data sebelum masuk ke tahap feature engineering dan pemodelan.

---

## Slide 018 - Duplicate Data, Inkonsistensi & Redundant Features

### Narasi

Setelah membahas penanganan outlier pada slide sebelumnya, kita beralih ke tiga masalah kualitas data lain yang kerap muncul dalam tahap Eksplorasi Data Analysis (EDA) dan preprocessing: duplicate data, inkonsistensi data, serta fitur redundan. Masalah-masalah ini tidak kalah krusial karena dapat secara langsung merusak validitas statistik, mengganggu stabilitas algoritma, dan menurunkan generalisasi model jika tidak ditangani dengan ketat sejak awal.

Pertama, duplicate data merujuk pada baris observasi yang identik atau hampir identik yang muncul lebih dari satu kali dalam dataset. Keberadaan duplikat ini memiliki dampak serius terhadap estimasi statistik deskriptif seperti mean, varians, atau distribusi frekuensi. Saat proses training, model machine learning akan memberikan bobot atau overweight yang tidak adil terhadap sampel yang terduplikasi tersebut, sehingga pola yang dipelajari menjadi bias. Dalam praktik penelitian maupun industri, sebelum melakukan penghapusan menggunakan metode seperti `drop_duplicates()` di pandas, kita wajib memeriksa konteks bisnis atau sumber data untuk memastikan bahwa duplikat tersebut memang merupakan kesalahan rekam ulang (data entry error) dan bukan representasi dari transaksi atau kejadian legit yang terjadi berulang kali.

Kedua, inkonsistensi data sering kali berupa perbedaan format penulisan atau nilai yang saling bertentangan secara logika domain. Contoh klasik adalah kolom tanggal yang ditulis dengan format `"30-01-2025"` di sebagian baris, namun `"2025/01/30"` di baris lainnya. Selain itu, bisa muncul nilai kontradiktif seperti umur tercatat 30 tahun tetapi tanggal lahir menunjukkan tahun 1990. Penanganan inkonsistensi memerlukan pemahaman aturan domain yang kuat dan sistematis. Kita perlu melakukan normalisasi format, misalnya mengonversi semua string tanggal menjadi objek datetime standar, serta menerapkan validasi logika untuk menandai atau memperbaiki nilai yang mustahil secara faktual agar konsistensi struktural terjaga.

Ketiga, fitur redundan adalah variabel prediktor yang mengandung informasi yang sama atau dapat diturunkan secara sempurna dari fitur lain. Kasus umum adalah adanya kolom `tanggal_lahir` dan `umur` secara bersamaan, atau dua fitur numerik yang memiliki korelasi Pearson sebesar 1.0. Kehadiran fitur redundan memicu masalah multikolinearitas dalam model linear, menyulitkan interpretasi koefisien individual, dan dalam beberapa skenario justru berpotensi menyebabkan data leakage jika salah satu fitur tersebut secara tidak sadar membocorkan informasi target. Identifikasi fitur semacam ini dapat dilakukan melalui analisis korelasi matriks, perhitungan Variance Inflation Factor (VIF), atau pemeriksaan turunan logis antar-kolom secara manual.

Tindakan preprocessing yang disarankan meliputi penghapusan baris duplikat setelah verifikasi konteks, standarisasi format seluruh kolom kategorikal dan temporal, serta evaluasi mendalam terhadap fitur redundan untuk menentukan apakah harus dihapus, digabungkan, atau dipertahankan sebagai alternatif representasi. Semua langkah ini bertujuan memastikan integritas struktur data sebelum memasuki fase pemodelan dan evaluasi eksperimen.

### Inti yang Harus Ditekankan

- Duplikat data mendistorsi estimasi statistik dan memberi bobot berlebihan pada sampel tertentu; penghapusan hanya boleh dilakukan setelah verifikasi konteks bisnis atau sumber data.
- Inkonsistensi format dan nilai kontradiktif harus dinormalisasi berdasarkan aturan domain yang jelas agar data siap diproses secara seragam dan andal.
- Fitur redundan memicu multikolinearitas, mempersulit interpretasi model, dan berisiko tinggi menyebabkan data leakage; identifikasi via korelasi, VIF, atau analisis turunan logis sangat diperlukan.

### Transisi ke Slide Berikutnya

Pembersihan duplikat, normalisasi format, dan eliminasi fitur redundan adalah fondasi penting, namun masih ada indikasi kebocoran informasi yang lebih halus yang sering luput dari perhatian selama EDA. Pada slide berikutnya, kita akan membahas bagaimana mengidentifikasi tanda-tanda data leakage sejak tahap eksplorasi, sehingga evaluasi model tetap valid dan tidak terjebak pada performa artifisial.

---

## Slide 019 - Indikasi Data Leakage sejak Tahap Eksplorasi

### Narasi

Pada tahap eksplorasi data atau Exploratory Data Analysis (EDA), fokus kita tidak hanya terbatas pada pemahaman distribusi dan hubungan antarvariabel, tetapi juga harus mencakup deteksi dini terhadap fenomena yang dapat merusak validitas eksperimen secara fundamental, yaitu data leakage. Sebagaimana dibahas pada slide sebelumnya mengenai fitur redundan dan risiko multikolinearitas, keberadaan kolom yang memiliki korelasi sangat tinggi atau bahkan sempurna dengan variabel target sering kali tersembunyi di balik statistik deskriptif standar. Data leakage didefinisikan sebagai kebocoran informasi dari luar training set ke dalam proses pelatihan model, sehingga metrik evaluasi yang dihasilkan menjadi terlalu optimistis dan tidak merepresentasikan performa model saat diterapkan pada data baru. Dalam konteks penelitian tingkat magister, hal ini merupakan ancaman serius terhadap internal validity karena dapat menghasilkan klaim kontribusi metode yang palsu dan sulit direplikasi.

Terdapat lima indikasi spesifik leakage yang dapat diidentifikasi langsung selama proses EDA menggunakan library seperti pandas atau NumPy. Pertama, perhatikan jika terdapat fitur yang berkorelasi sempurna dengan target, misalnya ketika label prediksi seperti `churn_label` secara tidak sengaja tertinggal sebagai salah satu kolom input. Kedua, hindari penggunaan kolom identifier unik per baris seperti `customer_id` atau `transaction_id`, karena meskipun tidak memprediksi target secara langsung, algoritma tertentu dapat memanfaatkan ID tersebut untuk melakukan memorisasi data. Ketiga, waspadai fitur yang mengandung informasi masa depan, contohnya menghitung `total_paid_next_month` pada dataset yang seharusnya hanya berisi data historis bulan berjalan. Keempat, praktik penghitungan statistik agregat global seperti mean atau standar deviasi seluruh dataset sebelum dilakukan train-test split akan membocorkan informasi distribusi test set ke dalam proses scaling atau imputasi. Kelima, hindari pembuatan fitur turunan yang secara eksplisit menggunakan target sebagai pembilang atau penyebut, karena hal ini menciptakan hubungan kausalitas buatan yang tidak mungkin terjadi saat deployment.

Untuk menangani indikasi-indikasi tersebut, langkah awal yang krusial adalah mendokumentasikan setiap fitur mencurigakan dalam laporan EDA Anda secara sistematis. Jangan menghapus kolom secara impulsif tanpa memahami konteks bisnis atau mekanisme pengumpulan datanya, karena terkadang kolom yang tampak seperti ID justru menyimpan informasi temporal atau hierarkis yang sah. Jika keraguan masih ada, konsultasikan segera dengan domain expert untuk memastikan apakah fitur tersebut memang relevan secara logis atau murni artefak dari pipeline pengumpulan data. Prinsip utamanya adalah semua bentuk leakage harus dibersihkan dan diverifikasi validitasnya sebelum masuk ke tahap pemodelan, mengingat kesalahan pada fase ini akan meracuni seluruh alur eksperimen, mulai dari feature engineering hingga hyperparameter tuning.

Penanganan leakage ini juga berkaitan erat dengan konsep generalisasi dan kepercayaan terhadap hasil penelitian. Ketika kita berhasil mengeliminasi kebocoran informasi, kita sedang membangun fondasi ekperimental yang ketat. Namun, validitas model tidak hanya bergantung pada kualitas fitur, tetapi juga pada bagaimana data tersebut mewakili populasi sebenarnya. Oleh karena itu, setelah memastikan tidak ada leakage, perhatian kita perlu beralih ke aspek representasi data dan potensi bias sistematis yang mungkin melekat pada sampel yang dikumpulkan.

### Inti yang Harus Ditekankan

- Data leakage adalah kebocoran informasi dari luar training set yang membuat evaluasi model menjadi tidak valid dan overoptimistic.
- Indikasi utama meliputi fitur berkorelasi sempurna dengan target, penggunaan ID unik, informasi masa depan, agregat global sebelum split, dan fitur turunan berbasis target.
- Dokumentasikan fitur mencurigakan, hindari penghapusan impulsif, libatkan domain expert, dan pastikan leakage ditangani mutlak sebelum tahap pemodelan.

### Transisi ke Slide Berikutnya

Setelah memastikan pipeline fitur bebas dari kebocoran informasi, langkah selanjutnya adalah mengevaluasi apakah data yang kita miliki sudah cukup representatif untuk menjawab research question. Kita akan membahas bagaimana bias seleksi, sampling, label, maupun temporal dapat muncul selama proses pengumpulan data, serta strategi mendeteksinya melalui EDA agar validitas eksternal penelitian tetap terjaga.

---

## Slide 020 - Dataset Bias dan Keterbatasan Representasi Data

### Narasi

Setelah mengidentifikasi potensi data leakage pada tahap eksplorasi, langkah kritis berikutnya adalah menelaah bias dalam dataset serta keterbatasan representasinya. Dalam konteks penelitian tingkat magister, memahami bias bukan sekadar tugas teknis preprocessing, melainkan fondasi utama untuk menilai validitas eksternal dan internal dari setiap temuan algoritmik.

Terdapat empat jenis bias utama yang wajib diwaspadai selama proses EDA. Pertama, selection bias terjadi ketika data tidak mampu mewakili populasi target secara akurat, biasanya akibat proses seleksi fitur atau filter yang terlalu ketat tanpa pertimbangan domain. Kedua, sampling bias muncul ketika mekanisme pengambilan sampel tidak bersifat acak atau proporsional, sehingga distribusi kelas atau karakteristik tertentu terdistorsi secara sistematis. Ketiga, label bias merujuk pada ketidakakuratan atau inkonsistensi dalam penandaan target, yang sering kali disebabkan oleh ambiguitas definisi konsep atau kesalahan anotasi manusia. Keempat, temporal bias terjadi ketika data dikumpulkan pada periode waktu spesifik yang tidak mencerminkan dinamika atau pola di masa depan, membuat model menjadi cepat usang saat di-deploy.

Contoh nyata dari bias-bias ini sangat umum ditemui di lapangan. Sebuah survei kepuasan pelanggan mungkin hanya menjangkau pengguna internet aktif, sehingga mengabaikan demografi non-digital. Data transaksi ritel yang diambil hanya dari satu musim tertentu akan gagal menangkap pola musiman tahunan. Selain itu, anotasi label manual dengan subjektivitas tinggi dapat menghasilkan noise sistematis yang merusak pembelajaran model. Oleh karena itu, dalam fase EDA, Anda harus secara aktif membandingkan distribusi statistik dataset dengan pengetahuan domain yang sudah mapan. Catat secara eksplisit setiap keterbatasan representasi yang ditemukan, dan hindari klaim generalisasi performa model jika dasar empirisnya lemah.

Dari perspektif akademik, bias dataset merupakan komponen inti dari threats to validity dalam metodologi penelitian. Laporan EDA yang rigor harus secara transparan mendokumentasikan kelemahan representasi ini, karena hal tersebut menentukan seberapa jauh kesimpulan penelitian dapat digeneralisasi. Dengan mengakui dan mengkuantifikasi bias sejak awal, Anda membangun landasan eksperimen yang lebih robust, etis, dan siap untuk direplikasi.

### Inti yang Harus Ditekankan

- Bias dataset (selection, sampling, label, temporal) adalah ancaman validitas eksternal yang harus diidentifikasi, dikategorikan, dan dilaporkan sejak tahap EDA.
- Perbandingan distribusi data dengan knowledge domain serta dokumentasi keterbatasan representasi adalah praktik wajib dalam standar penelitian S2.
- Klaim generalisasi model tanpa mempertimbangkan bias dan keterbatasan sampel akan melemahkan kontribusi ilmiah dan daya terima paper internasional.

### Transisi ke Slide Berikutnya

Setelah mengidentifikasi jenis-jenis bias dan keterbatasan representasi, langkah logis selanjutnya adalah menerjemahkan temuan-temuan kualitatif dan kuantitatif tersebut menjadi keputusan desain eksperimen yang konkret. Pada slide berikutnya, kita akan membahas bagaimana setiap insight dari EDA secara langsung mengarahkan pilihan preprocessing, metrik evaluasi, hingga strategi handling data dalam pipeline penelitian.

---

## Slide 021 - Menghubungkan Temuan EDA dengan Keputusan Eksperimen

### Narasi

Exploratory Data Analysis atau EDA tidak boleh berhenti pada pembuatan grafik atau statistik deskriptif semata. Dalam konteks penelitian tingkat magister, setiap pola, anomali, atau keterbatasan yang teridentifikasi selama proses eksplorasi harus secara langsung memengaruhi desain eksperimen Anda. Tabel pada slide ini menyajikan pemetaan konkret antara temuan EDA dengan keputusan metodologis yang harus diambil. Ketika distribusi fitur menunjukkan skewness yang signifikan, keputusan eksperimennya adalah menerapkan transformasi logaritma, Yeo-Johnson, atau Box-Cox sebelum data dimasukkan ke model linear atau berbasis jarak. Jika terdapat missing value dalam jumlah besar pada satu kolom tertentu, peneliti harus memilih strategi imputasi yang sesuai dengan mekanisme missingness (MCAR, MAR, atau MNAR) atau mempertimbangkan penghapusan kolom tersebut berdasarkan signifikansi domain knowledge.

Temuan lain seperti class imbalance wajib mengubah pilihan metrik evaluasi dari akurasi biasa menjadi F1-score, ROC-AUC, atau precision-recall, serta memicu penerapan teknik resampling seperti SMOTE, ADASYN, atau cost-sensitive learning. Korelasi tinggi antara fitur dan target perlu diselidiki lebih lanjut untuk mendeteksi potensi data leakage, terutama jika fitur tersebut secara logika seharusnya belum tersedia saat prediksi dilakukan. Fitur yang redundan dapat disederhanakan melalui feature selection algoritmik atau penghapusan manual, sedangkan outlier ekstrem memerlukan penanganan khusus, baik berupa koreksi data lapangan maupun penggunaan teknik robust scaling agar tidak mendominasi proses optimisasi loss function.

Sebagai kelanjutan dari pembahasan bias dan keterbatasan representasi data pada slide sebelumnya, temuan EDA kini berfungsi sebagai *evidence* atau bukti empiris yang mendasari setiap langkah preprocessing dan pemilihan algoritma. Untuk memenuhi standar penulisan paper internasional, Anda setidaknya harus menghasilkan lima temuan utama yang relevan dengan desain eksperimen. Profil dataset yang jelas ini akan menjadi fondasi kuat dalam bagian metodologi penelitian, menunjukkan bahwa pendekatan Anda transparan, reproducible, dan grounded in data. Dengan demikian, alur penelitian bergerak dari observasi eksploratif menuju implementasi teknis yang terstruktur dan dapat dipertanggungjawabkan secara akademis.

### Inti yang Harus Ditekankan

- EDA adalah dasar empiris untuk setiap keputusan metodologis dalam eksperimen, bukan sekadar aktivitas visualisasi pasif.
- Setiap temuan analisis eksploratif harus diterjemahkan secara eksplisit menjadi tindakan preprocessing, pemilihan metrik, atau modifikasi arsitektur model yang spesifik.
- Dokumentasi minimal lima temuan kunci menjadi bukti (*evidence*) kuat yang membedakan penelitian magister berkualitas dengan praktik data science generik.

### Transisi ke Slide Berikutnya

Setelah temuan EDA mengidentifikasi masalah seperti skewness, missing values, atau class imbalance, langkah selanjutnya adalah menerjemahkan keputusan tersebut ke dalam alur kerja teknis yang konsisten. Pada slide berikutnya, kita akan membahas ringkasan alur data preprocessing secara sistematis, termasuk prinsip penting tentang bagaimana menerapkan transformasi hanya pada data training menggunakan Pipeline di scikit-learn untuk mencegah data leakage dan menjaga validitas eksternal eksperimen.

---

## Slide 022 - Data Preprocessing: Ringkasan

### Narasi

Berlanjut dari pemahaman sebelumnya bahwa setiap temuan Exploratory Data Analysis harus menjadi dasar bukti empiris untuk keputusan metodologis, kita kini merangkum seluruh langkah konkrit yang mengubah insight tersebut menjadi persiapan data yang sistematis. Tujuan utama dari tahap ini adalah mengubah data mentah yang masih heterogen dan mengandung noise menjadi representasi numerik yang siap dikonsumsi oleh algoritma machine learning, sekaligus menjamin bahwa proses transformasi dilakukan secara adil dan valid agar tidak mengotori evaluasi performa model.

Secara umum, alur preprocessing mengikuti urutan logis yang ketat dan bersifat kausal. Langkah-langkahnya berjalan sebagai berikut:
- **Cleaning**: Menangani missing values, duplikasi, dan outlier berdasarkan pola yang teridentifikasi di EDA.
- **Encoding Categorical**: Mengonversi variabel kategorikal menjadi representasi numerik yang kompatibel dengan matriks fitur model.
- **Scaling / Transformation**: Menstandarisasi atau mendistribusikan ulang skala fitur agar tidak didominasi oleh variabel dengan rentang nilai ekstrem.
- **Feature Engineering**: Mengekstrak, menggabungkan, atau menyeleksi fitur baru yang meningkatkan daya prediktif.
- **Sampling / Imbalance Handling**: Menyeimbangkan distribusi kelas target sebelum pemartisian data.
- **Train/Validation/Test Split**: Memisahkan data secara final agar evaluasi tetap independen dan mencerminkan kondisi deployment.
Hanya setelah seluruh tahapan ini selesai, data baru dilewatkan ke dalam model. Perubahan urutan langkah dapat mengubah makna statistik fitur dan merusak validitas eksperimen.

Prinsip paling kritis yang harus dijaga dalam alur ini adalah isolasi sumber informasi. Seluruh parameter transformasi—seperti mean untuk imputasi, median untuk scaling, atau mapping untuk encoding—harus dipelajari hanya dari data training. Data validation dan test bersifat blind; mereka hanya menerima transformasi menggunakan parameter yang sudah di-fit pada training set. Jika hal ini dilanggar, terjadi data leakage yang akan menghasilkan estimasi performa model yang terlalu optimistis dan tidak generalizable. Untuk memastikan prinsip ini terpenuhi secara otomatis dan aman, kita wajib memanfaatkan objek `Pipeline` dari scikit-learn. Dengan pipeline, chaining transformasi dan estimator menjadi satu unit komposit yang menjamin urutan eksekusi, menyederhanakan kode, dan mencegah kontaminasi data secara diam-diam saat melakukan cross-validation atau grid search.

Sebagai penutup ringkasan ini, preprocessing bukanlah kumpulan teknik teknis yang berdiri sendiri, melainkan kerangka kerja terstruktur yang menjembajani temuan EDA dengan implementasi model. Ketelitian dalam menerapkan urutan langkah dan menjaga batas tegas antara data latih dan data uji adalah fondasi utama validitas eksperimen di tingkat penelitian magister.

### Inti yang Harus Ditekankan

- Preprocessing adalah jembatan metodologis antara insight EDA dan implementasi model, bukan sekadar langkah administratif rutin.
- Isolasi sumber informasi mutlak diperlukan: semua parameter transformasi harus di-fit hanya pada data training, sementara validation/test hanya menerima transformasi menggunakan parameter tersebut.
- Penggunaan `Pipeline` dari scikit-learn adalah standar wajib dalam praktik modern untuk mencegah data leakage selama tuning hyperparameter dan validasi silang.
- Urutan langkah preprocessing bersifat kausal; penyimpangan urutan dapat mengubah interpretasi fitur dan menurunkan reliabilitas hasil penelitian.

### Transisi ke Slide Berikutnya

Setelah memahami peta besar alur dan prinsip keamanan data dalam preprocessing, kita akan mendalami salah satu komponen paling krusial dalam tahap cleaning, yaitu strategi penanganan missing values yang secara spesifik diturunkan dari klasifikasi mekanisme missingness seperti MCAR, MAR, dan MNAR.

---

## Slide 023 - Penanganan Missing Values

### Narasi

Setelah pada slide sebelumnya kita meninjau alur umum data preprocessing dan menegaskan prinsip fundamental bahwa seluruh transformasi harus dipelajari hanya dari data training untuk mencegah data leakage, kini kita masuk ke salah satu tahapan paling kritis dalam cleaning data, yaitu penanganan missing values. Dalam konteks penelitian data mining tingkat magister, keputusan untuk menghapus atau mengisi nilai yang hilang tidak boleh bersifat heuristik semata, melainkan harus didasari oleh pemahaman mekanistik terhadap pola kehilangan data dan dampaknya terhadap bias estimasi serta generalisasi model.

Secara konseptual, strategi penanganan missing values dibagi menjadi tiga kelompok utama. Pertama adalah deletion atau penghapusan. Teknik ini mencakup listwise deletion, yang menghilangkan seluruh observasi yang mengandung setidaknya satu nilai missing, serta column deletion, yang dilakukan ketika sebuah fitur memiliki proporsi missing yang sangat tinggi sehingga kehilangan reliabilitas informasional. Penghapusan hanya layak diterapkan jika missingness bersifat minimal dan tidak menunjukkan pola sistematis, karena pengurangan sampel secara agresif dapat menurunkan power statistik dan memperkenalkan seleksi bias yang mengganggu validitas eksperimen.

Kedua adalah imputasi statis. Metode ini mencakup penggantian dengan mean, median, atau mode, di mana median umumnya lebih disukai untuk data numerik yang skew karena ketahanannya terhadap ekstrem. Untuk situasi yang membutuhkan pemanfaatan struktur data, kita dapat beralih ke KNN imputation yang memanfaatkan kedekatan multivariat, regression imputation yang memodelkan dependensi antar fitur, maupun multiple imputation yang menghasilkan sejumlah dataset lengkap untuk mengkuantifikasi ketidakpastian estimasi. Ketiga adalah model-based imputation, di mana nilai missing diprediksi menggunakan algoritma pembelajaran mesin. Pendekatan ini sangat fleksibel, namun membawa risiko tinggi terjadinya data leakage jika siklus fit dan transformasi tidak dipisahkan secara ketat antara subset training dan subset evaluasi.

Implementasi operasionalnya dalam ekosistem Python dapat dilakukan melalui modul `sklearn.impute`. Sebagai contoh, `SimpleImputer(strategy="median")` akan mengisi sel kosong dengan nilai tengah kolom, sementara `KNNImputer(n_neighbors=5)` menghitung jarak geometris antar baris dan mengisi missing value berdasarkan rata-rata tertimbang dari lima observasi terdekatnya. Keduanya adalah objek transformer yang harus dipanggil `fit()` pada data training saja, kemudian `transform()` pada validation atau test set. Praktik ini memastikan bahwa statistik imputasi tidak pernah "melihat" data uji, sehingga menjaga integritas pipeline preprocessing yang telah kita diskusikan sebelumnya.

Keputusan metodologis dalam memilih strategi imputasi seharusnya bersandar pada hasil Exploratory Data Analysis (EDA), khususnya klasifikasi mekanisme missingness. Jika data bersifat Missing Completely At Random (MCAR), artinya probabilitas missing tidak bergantung pada variabel teramati maupun yang tidak teramati, maka imputasi sederhana umumnya sudah memadai tanpa menimbulkan bias signifikan. Jika data bersifat Missing At Random (MAR), probabilitas missing bergantung pada variabel lain yang tersedia, sehingga kita dapat memanfaatkan fitur tambahan tersebut dalam proses imputasi untuk meningkatkan akurasi prediksi. Sebaliknya, jika data Missing Not At Random (MNAR), di mana nilai yang hilang itu sendiri berkorelasi dengan nilai sebenarnya, imputasi standar berisiko besar menghasilkan distorsi sistematik. Pada skenario MNAR, peneliti wajib menggabungkan asumsi domain knowledge yang kuat, melakukan sensitivity analysis, atau merancang model khusus yang secara eksplisit memodelkan mekanisme missingness.

### Inti yang Harus Ditekankan

- Pemilihan strategi missing value harus didorong oleh diagnosis EDA dan pemahaman mekanisme MCAR, MAR, atau MNAR, bukan sekadar mengikuti praktik default library.
- Hindari deletion massal kecuali missing sangat minim dan benar-benar acak; imputasi yang tepat jauh lebih menjaga integritas statistik dan representativitas dataset.
- Selalu bungkus estimator imputasi dalam `Pipeline` scikit-learn dan pastikan `fit()` hanya berjalan pada data training untuk mencegah data leakage yang merusak validitas evaluasi model.
- Model-based imputation menawarkan akurasi tinggi namun menuntut disiplin ketat dalam pemisahan siklus pelatihan dan inferensi agar tidak terjadi kontaminasi data.

### Transisi ke Slide Berikutnya

Setelah nilai-nilai yang hilang berhasil ditangani dengan metodologi yang transparan dan terkontrol, langkah logis berikutnya dalam pipeline preprocessing adalah mengidentifikasi dan menangani outlier. Berbeda dengan missing values yang sering kali diasumsikan sebagai noise, outlier memerlukan evaluasi kontekstual yang lebih cermat karena bisa jadi merupakan sinyal valid atau rare event yang justru menjadi inti pertanyaan penelitian kita. Mari kita lanjutkan ke pembahasan teknik penanganan outlier beserta pertimbangan eksperimental dan dokumentasinya.

---

## Slide 024 - Outlier Handling

### Narasi

Setelah menyelesaikan strategi penanganan missing values pada slide sebelumnya, tahap lanjutan dalam pipeline preprocessing adalah menangani outlier atau nilai ekstrem. Prinsip fundamental yang harus dipegang teguh adalah bahwa outlier tidak selalu merepresentasikan noise atau kesalahan pengukuran. Dalam konteks penelitian data mining tingkat magister, penghapusan outlier secara otomatis tanpa justifikasi metodologis dapat menghilangkan sinyal penting yang justru menjadi inti dari research question yang sedang diuji.

Terdapat lima opsi penanganan yang dapat dipilih berdasarkan karakteristik distribusi data, robustness model, dan konteks domain. Pertama, biarkan outlier tetap ada jika algoritma yang digunakan sudah tahan terhadap nilai ekstrem, atau jika outlier tersebut merupakan kejadian valid yang relevan dengan fenomena bisnis atau ilmiah. Kedua, terapkan transformasi non-linear seperti logaritma atau Box-Cox untuk meratakan ekor distribusi panjang tanpa kehilangan observasi. Ketiga, gunakan Winsorization yang memotong atau membatasi nilai ekstrem pada persentil tertentu, sehingga mempertahankan ukuran sampel sambil mengurangi leverage statistik yang berlebihan. Keempat, hapus outlier hanya ketika terdapat bukti kuat bahwa data tersebut merupakan error input, duplikasi korup, atau hasil kalibrasi instrumen yang gagal. Kelima, perlakukan outlier sebagai anomali jika tujuan penelitian mengarah pada deteksi penyimpangan, fraud detection, atau monitoring sistem.

Sebagai implementasi praktis menggunakan ekosistem Python, kita dapat memanfaatkan pendekatan IQR (Interquartile Range) untuk filtering berbasis kuantil. Pada cuplikan kode ini, kuartil pertama (Q1) dan kuartil ketiga (Q3) dihitung dari kolom numerik target, misalnya "amount". Nilai IQR diperoleh dari selisih Q3 dan Q1. Batas bawah dan atas ditetapkan pada Q1 dikurangi 1,5 kali IQR, serta Q3 ditambah 1,5 kali IQR. Sebuah masker boolean kemudian dibangun untuk menyeleksi baris yang berada di dalam rentang valid tersebut, dan hasilnya dieksport ke dataframe bersih. Teknik ini sering dijadikan baseline filtering sebelum proses feature engineering atau modeling lebih lanjut.

Poin krusial yang harus diperhatikan adalah bahwa setiap keputusan penanganan outlier wajib didokumentasikan secara eksplisit dalam bagian metodologi penelitian. Penghapusan data tanpa pemahaman domain yang memadai berisiko menimbulkan selection bias dan menurunkan generalisasi model. Lebih jauh lagi, outlier yang merupakan rare event sering kali menjadi objek penelitian utama, terutama dalam skenario deteksi fraud, kegagalan infrastruktur, atau pola perilaku langka. Oleh karena itu, pendekatan preprocessing harus selaras dengan hipotesis penelitian dan didukung oleh evidence empiris maupun justifikasi domain expert.

Dengan struktur data numerik yang telah distabilkan melalui penanganan missing values dan outlier, fondasi preprocessing kini siap untuk menangani komponen data kualitatif. Langkah selanjutnya adalah mengubah representasi teks/kategori ke bentuk numerik yang dapat diproses oleh algoritma machine learning, yang akan kita bahas secara rinci pada slide mengenai encoding categorical variables.

### Inti yang Harus Ditekankan

- Outlier bukan selalu noise; evaluasi konteks domain dan tujuan penelitian sebelum memilih strategi penanganan.
- Pilih metode penanganan (biarkan, transformasi, winsorize, hapus, atau anggap anomali) berdasarkan karakteristik data, robustness model, dan alignmen dengan research question.
- Dokumentasikan setiap keputusan preprocessing secara transparan untuk menjamin reproducibility dan validitas metodologis penelitian.
- Outlier/rare event sering kali mengandung informasi kritis yang justru menjadi fokus kajian ilmiah, bukan sekadar gangguan statistik yang harus dihilangkan.

### Transisi ke Slide Berikutnya

Setelah distribusi data numerik telah distabilkan dan nilai ekstrem telah dikelola sesuai konteks penelitian, kita perlu memastikan bahwa variabel kategorikal juga dikonversi ke representasi numerik yang kompatibel dengan algoritma pembelajaran mesin. Mari kita lanjutkan ke pembahasan teknik encoding variabel kategorikal.

---

## Slide 025 - Encoding Categorical Variables

### Narasi

Setelah kita menyelesaikan tahapan penanganan outlier pada slide sebelumnya, di mana keputusan untuk mempertahankan, mentransformasi, atau menghapus nilai ekstrem harus didasarkan pada pemahaman domain dan dokumentasi metodologis yang ketat, langkah preprocessing berikutnya yang tak kalah krusial adalah konversi variabel kategorikal ke representasi numerik. Algoritma machine learning pada dasarnya beroperasi pada ruang vektor numerik; oleh karena itu, data teks atau label kualitatif harus diterjemahkan ke dalam bentuk matematika agar dapat diproses secara komputasional. Dalam konteks penelitian S2, pemilihan teknik encoding bukan sekadar langkah teknis rutin, melainkan keputusan desain eksperimen yang berdampak langsung pada bias model, kompleksitas komputasi, dan generalisasi hasil.

Data kategorikal secara inheren dapat dikelompokkan menjadi tiga tipe berdasarkan struktur relasinya. Pertama, data nominal seperti kota asal atau jenis kelamin, yang tidak memiliki hierarki atau urutan logis. Untuk tipe ini, one-hot encoding merupakan standar industri karena menghasilkan kolom biner independen untuk setiap kategori, sehingga menghindari penyuntikkan urutan semu yang bisa menyesatkan model linear. Kedua, data ordinal seperti tingkat pendidikan atau rating kepuasan pelanggan, yang memiliki urutan bertingkat namun jarak antar tingkatan tidak selalu ekuivalen. Ordinal encoding cocok di sini karena mengawetkan informasi peringkat melalui pemetaan integer berurutan, asalkan model yang digunakan mampu menangkap monotonic relationship. Ketiga, data dengan kardinalitas tinggi seperti kode pos, ID transaksi, atau SKU produk, yang jika di-one-hot akan menciptakan matriks sangat besar dan sparse. Pada skenario ini, teknik seperti target encoding atau feature hashing lebih unggul karena mereduksi dimensi secara agresif sambil tetap mempertahankan sinyal prediktif kategori tersebut terhadap target.

Mari kita telaah lebih dalam implikasi masing-masing teknik serta risiko metodologisnya. One-hot encoding memang aman secara konseptual, tetapi rentan terhadap curse of dimensionality yang dapat menurunkan kecepatan pelatihan dan memicu overfitting pada dataset dengan fitur unik sangat banyak. Ordinal encoding relatif ringan secara memori, namun perlu diwaspadai karena beberapa algoritma akan menginterpretasikan selisih angka sebagai interval kuantitatif yang sama, padahal dalam realitas kategorikal hal itu mungkin tidak berlaku. Sementara itu, target atau mean encoding mengganti setiap kategori dengan rata-rata nilai target dari subset data yang masuk dalam kategori tersebut. Meskipun sering meningkatkan akurasi secara signifikan, teknik ini membawa risiko data leakage yang sangat tinggi karena informasi target bocor ke dalam representasi fitur. Dalam praktik penelitian yang rigor, target encoding wajib diimplementasikan melalui nested cross-validation atau pipeline yang memastikan perhitungan mean hanya dilakukan pada fold training, bukan pada seluruh dataset sekaligus, untuk menjaga validitas eksternal evaluasi model.

Implementasi praktis teknik-teknik ini dalam ekosistem Python dapat diintegrasikan secara modular menggunakan `ColumnTransformer` bersama `OneHotEncoder`. Perhatikan cuplikan kode pada slide yang menginisialisasi encoder dengan parameter `handle_unknown="ignore"`. Parameter ini merupakan best practice kritis dalam skenario validasi silang maupun deployment, karena memungkinkan pipeline untuk secara robust mengabaikan kategori baru yang muncul pada data uji atau data produksi tanpa menyebabkan runtime error. Dengan mendefinisikan daftar kolom kategorikal secara eksplisit, kita memastikan bahwa transformasi hanya diterapkan pada fitur yang relevan, sementara kolom numerik lainnya dilewatkan tanpa gangguan. Prinsip dasar yang harus selalu diingat adalah sinkronisasi antara karakteristik data dan sensitivitas model; tree-based ensemble methods cenderung lebih toleran terhadap one-hot encoding berkat mekanisme split node mereka, sedangkan model berbasis gradien, regularisasi L1/L2, atau algoritma berbasis jarak akan lebih membutuhkan representasi numerik yang padat dan terstandarisasi.

Proses encoding ini menutup siklus transformasi kualitatif-ke-kuantitatif, namun representasi numerik yang dihasilkan masih belum siap untuk dikonsumsi oleh sebagian besar algoritma optimisasi. Rentang nilai yang dihasilkan dari berbagai teknik encoding bisa sangat bervariasi, mulai dari 0 hingga 1 pada one-hot, hingga nilai kontinu acak pada target encoding. Ketidakseragaman skala ini akan menjadi fokus pembahasan kita pada slide berikutnya, di mana kita akan mengeksplorasi mengapa feature scaling mutlak diperlukan untuk algoritma tertentu, kapan harus memilih StandardScaler versus RobustScaler, serta menerapkan prinsip fundamental preprocessing modern: fit scaler hanya pada training set, lalu apply pada test set untuk mencegah information leakage.

### Inti yang Harus Ditekankan

- Klasifikasi data kategorikal (nominal, ordinal, high-cardinality) harus menjadi dasar pemilihan teknik encoding, bukan kebiasaan semata.
- Target/mean encoding sangat powerful namun rawan data leakage; implementasinya wajib dibungkus dalam cross-validation pipeline yang ketat.
- Parameter `handle_unknown="ignore"` pada `OneHotEncoder` adalah praktik wajib untuk menjaga stabilitas pipeline saat menghadapi kategori baru di data uji atau produksi.
- Keputusan encoding harus didokumentasikan sebagai bagian dari ablation study dan reproducibility research, mengingat dampaknya langsung terhadap bias dan kompleksitas model.

### Transisi ke Slide Berikutnya

Dengan variabel kategorikal telah berhasil dikonversi ke bentuk numerik, kita kini berada di ambang fase penyetelan skala fitur. Karena representasi numerik dari encoding memiliki rentang dan distribusi yang berbeda-beda, langkah logis selanjutnya adalah memahami mengapa dan bagaimana feature scaling serta normalization diterapkan secara selektif sesuai dengan sifat algoritma yang akan kita gunakan.

---

## Slide 026 - Feature Scaling dan Normalization

### Narasi

Setelah kita menyelesaikan tahap encoding variabel kategorikal pada slide sebelumnya, langkah logis berikutnya dalam pipeline preprocessing adalah menyelaraskan skala numerik antar fitur. Proses ini dikenal sebagai Feature Scaling dan Normalization. Meskipun terdengar sederhana, penerapan scaling bukan sekadar rutinitas teknis, melainkan keputusan metodologis yang berdampak langsung pada stabilitas numerik model dan validitas eksperimen.

Penting untuk memahami kapan scaling benar-benar diperlukan. Algoritma yang mengandalkan perhitungan jarak atau geometri vektor, seperti k-Nearest Neighbors (k-NN), Support Vector Machine (SVM), dan clustering berbasis centroid seperti k-means, sangat sensitif terhadap perbedaan skala. Jika satu fitur memiliki rentang nilai ratusan ribu sementara fitur lain hanya berkisar puluhan, fitur berskala besar akan mendominasi fungsi loss atau metrik jarak, sehingga model menjadi bias secara struktural. Di sisi lain, algoritma berbasis gradient descent pada neural network juga membutuhkan skala seragam agar gradien bergerak menuju minimum global dengan laju konvergensi yang optimal dan stabil. Namun, perlu ditekankan bahwa model berbasis pohon keputusan seperti Decision Tree, Random Forest, atau Gradient Boosting secara inheren tidak memerlukan scaling, karena pembagiannya bersifat relatif terhadap threshold per node, bukan berdasarkan jarak absolut antar titik data.

Terdapat empat teknik scaling utama yang dapat dipilih berdasarkan karakteristik distribusi data dan tujuan transformasi. StandardScaler menerapkan transformasi z-score dengan rumus $(x - \mu) / \sigma$, menghasilkan data dengan mean nol dan varians satu. Teknik ini paling umum digunakan ketika data mendekati distribusi normal atau ketika kita tidak memiliki batasan nilai eksplisit. MinMaxScaler memetakan nilai ke interval tertentu, umumnya $[0, 1]$, menggunakan rumus $(x - x_{min}) / (x_{max} - x_{min})$. Pendekatan ini ideal ketika model mengasumsikan input dalam rentang tertutup atau ketika kita ingin mempertahankan proporsi relatif tanpa mengubah bentuk distribusi. RobustScaler menggunakan median dan Interquartile Range (IQR) sebagai pengganti mean dan standar deviasi. Ini adalah solusi robust ketika dataset mengandung outlier ekstrem yang dapat mendistorsi statistik parametrik. Terakhir, MaxAbsScaler membagi setiap observasi dengan maksimum absolute value-nya, menghasilkan rentang $[-1, 1]$. Teknik ini sangat direkomendasikan untuk data sparse, seperti matriks TF-IDF atau hasil count vectorization, karena menjaga struktur nol tanpa menggeser nilai atau membuat data menjadi dense.

Prinsip paling kritis dalam implementasi scaling adalah pencegahan data leakage. Scaler harus melakukan `fit` hanya pada training set untuk mengekstrak parameter statistik internal (mean, std, min, max, median, atau IQR). Parameter inilah yang kemudian diaplikasikan (`transform`) pada test set, validation set, maupun data inference di production. Jika `fit` dilakukan pada seluruh dataset sebelum pembagian train-test, informasi statistik dari data uji akan "bocor" ke proses pelatihan, yang secara artifisial inflasi metrik evaluasi dan melanggar asumsi generalisasi. Perhatikan implementasi standarnya:
```python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
```
Pada potongan kode ini, `fit_transform` pada data latih sekaligus menghitung statistik dan mentransformasi data. Sementara itu, `transform` pada data uji hanya menerapkan skema transformasi yang telah dipelajari dari training set, menjamin konsistensi pipeline dan integritas eksperimen.

### Inti yang Harus Ditekankan

- Pemilihan teknik scaling harus didasarkan pada analisis distribusi data (normal, skew, presence of outliers) dan sensitivitas algoritma, bukan sebagai langkah otomatis tanpa pertimbangan.
- Data leakage akibat scaling pada seluruh dataset sebelum split train-test adalah kesalahan metodologis fatal yang harus dihindari; selalu pisahkan operasi `fit` dan `transform`.
- Model tree-based tidak membutuhkan scaling, sehingga penambahan step ini justru menambah kompleksitas komputasi tanpa manfaat akurasi.
- Konsistensi pipeline preprocessing harus dijaga hingga tahap deployment untuk memastikan perilaku model tetap stabil pada data unseen.

### Transisi ke Slide Berikutnya

Dengan skala fitur yang telah distandarisasi dan pipeline preprocessing yang bebas dari leakage, fondasi numerik data kini siap untuk diperkaya. Pada slide berikutnya, kita akan membahas Feature Engineering, yaitu proses kreatif namun sistematis dalam merancang representasi fitur baru yang lebih informatif, yang akan menjadi jembatan langsung menuju pattern mining dan pembentukan baseline model di pertemuan-pertemuan selanjutnya.

---

## Slide 027 - Feature Engineering

### Narasi

Setelah kita menyelesaikan pembahasan tentang feature scaling dan normalization pada slide sebelumnya, di mana fokusnya adalah menyamakan rentang nilai antar variabel agar algoritma berbasis jarak maupun gradient descent dapat konvergen secara stabil, langkah logis berikutnya dalam pipeline preprocessing adalah Feature Engineering. Secara fundamental, feature engineering didefinisikan sebagai proses sistematis untuk menciptakan atau mentransformasi fitur baru dari data mentah, dengan tujuan utama memperkaya representasi data sehingga model machine learning mampu menangkap pola-pola yang lebih relevan dan kompleks. Berbeda dengan scaling yang hanya mengubah satuan atau distribusi tanpa menambah informasi, feature engineering secara aktif menambah dimensi baru yang sering kali menjadi kunci keberhasilan prediksi.

Dalam praktiknya, terdapat berbagai teknik konstruksi fitur yang dapat disesuaikan dengan karakteristik dataset. Pertama, pembuatan fitur rasio, seperti `debt / income`, sangat efektif dalam domain finansial karena merangkum hubungan proporsional antar dua variabel yang secara alami saling berkorelasi. Kedua, fitur interaksi, misalnya `age * amount`, berguna untuk mengkuantifikasi efek sinergis atau non-linear di mana dampak satu variabel bergantung pada nilai variabel lain. Ketiga, teknik binning atau diskritisasi, seperti mengelompokkan usia menjadi kategori tertentu, membantu mengurangi noise dan menstabilkan model ketika hubungan antara fitur numerik dan target bersifat bertahap atau threshold-based. Keempat, ekstraksi komponen dari tipe data datetime, seperti mengambil hari, bulan, tahun, atau flag hari kerja, sangat krusial untuk data temporal karena pola musiman dan siklus sering kali menjadi prediktor dominan. Kelima, untuk data unstructured seperti teks, kita dapat mengekstrak metrik struktural sederhana seperti panjang kalimat, atau menerapkan representasi vektor seperti TF-IDF apabila konteks permasalahan mendukung.

Namun, seluruh kreativitas ini harus dibingkai oleh prinsip metodologis yang ketat, terutama mengingat tingkat studi magister yang menekankan pada validitas eksperimen. Feature engineering tidak boleh dilakukan secara trial-and-error tanpa landasan. Pendekatan yang ilmiah harus berakar pada temuan Exploratory Data Analysis (EDA) dan pemahaman mendalam tentang domain masalah. Setiap fitur baru yang dihasilkan wajib melalui verifikasi statistik: analisis distribusi barunya, pengujian korelasi dengan target, serta pengecekan multikolinearitas yang dapat mendestabilisasi estimasi koefisien model. Selain itu, kita harus waspada terhadap overfitting akibat feature engineering yang berlebihan. Terlalu banyak fitur buatan yang spesifik untuk pola noise pada data training akan menurunkan generalisasi. Oleh karena itu, kontribusi setiap fitur buatan harus dievaluasi secara eksperimental, misalnya melalui ablation study, sebelum diintegrasikan ke dalam baseline penelitian.

Penting pula untuk menyadari bahwa kualitas feature engineering ini akan menjadi fondasi struktural bagi tahapan penelitian selanjutnya. Fitur yang telah direkayasa dengan baik akan secara langsung memengaruhi efektivitas pattern mining yang akan kita pelajari di Pertemuan 03, serta menentukan seberapa kuat dan interpretable baseline model yang akan dibangun di Pertemuan 04. Dengan demikian, tahap ini bukan sekadar pra-pemrosesan teknis, melainkan komponen inti dalam perancangan eksperimen data mining yang rigor.

### Inti yang Harus Ditekankan

- Feature engineering menambahkan dimensi informasi baru, bukan sekadar mengubah skala atau satuan variabel.
- Seluruh pembuatan fitur harus didasarkan pada temuan EDA dan domain knowledge, menghindari pendekatan coba-coba yang tidak terukur.
- Validasi statistik (distribusi, korelasi target, multikolinearitas) dan evaluasi kontribusi fitur wajib dilakukan untuk mencegah overfitting.
- Kualitas fitur merupakan fondasi kritis yang menentukan keberhasilan pattern mining dan evaluasi baseline model di pertemuan selanjutnya.

### Transisi ke Slide Berikutnya

Setelah struktur dan kualitas fitur terjamin melalui engineering yang tepat, tantangan berikutnya dalam persiapan dataset adalah bagaimana menangani distribusi kelas target yang tidak merata. Kita akan beralih ke pembahasan mengenai strategi sampling dan penanganan class imbalance, termasuk mekanisme kerja teknik resampling seperti SMOTE, pemberian class weight, serta peringatan kritis mengenai data leakage saat melakukan split dataset.

---

## Slide 028 - Sampling dan Class Imbalance Handling

### Narasi

Setelah melakukan feature engineering pada slide sebelumnya untuk meningkatkan kapasitas representasi data, langkah kritis berikutnya dalam alur preprocessing adalah menangani masalah ketidakseimbangan kelas atau *class imbalance*. Dalam praktiknya, sebagian besar dataset riil menunjukkan distribusi target yang tidak merata, di mana satu kelas mendominasi volume data sementara kelas lain sangat langka. Jika kondisi ini dibiarkan, model machine learning akan cenderung mengoptimalkan fungsi kerugian berdasarkan frekuensi kelas mayoritas, sehingga menghasilkan prediktor yang bias, memiliki akurasi semu yang tinggi, dan gagal mendeteksi pola penting dari kelas minoritas yang seringkali justru menjadi fokus investigasi bisnis atau penelitian.

Untuk mengatasi bias tersebut, terdapat empat teknik penanganan utama yang perlu dipahami secara konseptual dan teknis. Pertama, *undersampling* mengurangi jumlah observasi pada kelas mayoritas hingga mencapai keseimbangan proporsional dengan kelas minoritas, meskipun berisiko menghilangkan informasi berharga. Kedua, *oversampling* sederhana menggandakan salinan acak dari sampel minoritas, yang efektif tetapi rentan menyebabkan *overfitting* karena replikasi data identik. Ketiga, *SMOTE* (*Synthetic Minority Over-sampling Technique*) menawarkan pendekatan yang lebih robust dengan menghasilkan sampel sintetis melalui interpolasi linear antar titik data tetangga terdekat pada ruang fitur, sehingga memperluas wilayah keputusan kelas minoritas tanpa duplikasi mentah. Keempat, penyesuaian *class weight* dalam algoritma pembelajaran mesin memberikan penalty yang lebih besar pada kesalahan prediksi kelas minoritas, menjadikannya alternatif efisien yang tidak mengubah distribusi data fisik.

Dalam konteks penelitian tingkat magister dan validitas eksperimen, terdapat aturan metodologis yang mutlak harus dipatuhi: jangan pernah melakukan resampling pada seluruh dataset sebelum pembagian *train-validation-test*. Melakukan transformasi distribusi sebelum *split* akan memicu *data leakage*, di mana karakteristik statistik dari set uji ikut terbawa ke dalam proses pelatihan. Dampaknya adalah estimasi performa model menjadi terlalu optimistis, tidak generalizable, dan secara fundamental merusak desain eksperimen yang adil. Solusi yang direkomendasikan adalah menerapkan resampling hanya pada bagian *training fold* saja, preferably melalui *pipeline* scikit-learn atau `imbalanced-learn` agar setiap iterasi cross-validation hanya memproses data yang relevan. Selain itu, metric evaluasi konvensional seperti akurasi harus digantikan dengan metrik yang sensitif terhadap skewness distribusi, yaitu F1-Score, Precision-Recall AUC, atau ROC-AUC.

Implementasi praktisnya dapat dilihat pada cuplikan kode berikut yang memanfaatkan ekosistem `imbalanced-learn`:
```python
from imblearn.over_sampling import SMOTE

smote = SMOTE(random_state=42)
X_train_res, y_train_res = smote.fit_resample(X_train, y_train)
```
Kode ini menginisialisasi objek SMOTE dengan `random_state` tetap guna menjamin reproduktibilitas hasil eksperimen, kemudian menerapkan transformasi hanya pada `X_train` dan `y_train`. Outputnya adalah matriks fitur dan vektor target pelatihan yang telah diseimbangkan, siap dilewatkan ke estimator tanpa mengontaminasi set validasi atau uji. Perlu dicatat bahwa analisis komparatif mendalam mengenai dampak masing-masing teknik terhadap kompleksitas komputasi, stabilitas hyperparameter, serta strategi pemilihan metrik berbasis domain akan dibahas secara eksplisit pada Pertemuan 07, sejalan dengan pendekatan penelitian bertahap yang diterapkan dalam mata kuliah ini.

### Inti yang Harus Ditekankan

- Ketidakseimbangan kelas menyebabkan bias sistematis ke arah mayoritas; penanganan harus dilakukan secara metodologis, bukan sekadar trik preprocessing.
- Resampling WAJIB dilakukan HANYA pada data training setelah split untuk mencegah data leakage dan menjaga integritas evaluasi eksperimen.
- Ganti metrik akurasi dengan F1-Score, PR-AUC, atau ROC-AUC agar evaluasi mencerminkan performa nyata pada kelas minoritas.
- Gunakan `random_state` konsisten dan terapkan resampling melalui pipeline untuk menjamin reproduktibilitas dan isolasi proses transformasi.

### Transisi ke Slide Berikutnya

Setelah memastikan bahwa distribusi data pelatihan telah ditangani tanpa melanggar prinsip validitas eksperimen, langkah logis berikutnya adalah membagi dataset secara ketat menjadi tiga subset independen: training, validation, dan test, untuk menjamin bahwa setiap tahap pemodelan, tuning, dan evaluasi akhir berjalan secara terisolasi dan bebas dari kontaminasi informasi.

---

## Slide 029 - Train/Validation/Test Split

### Narasi

Setelah membahas penanganan ketidakseimbangan kelas pada slide sebelumnya, langkah metodologis berikutnya yang krusial dalam desain eksperimen data mining adalah pemisahan dataset yang ketat. Pembagian data menjadi tiga subset independen—Training, Validation, dan Test—bukan sekadar praktik standar, melainkan fondasi validitas eksperimental untuk mencegah optimisme palsu (optimistic bias) dan kebocoran data (data leakage). Setiap subset memiliki fungsi yang tidak dapat saling menggantikan. Set Training digunakan secara eksklusif untuk proses pembelajaran parameter model. Set Validation berperan sebagai proxy untuk evaluasi berkala selama pengembangan model, khususnya dalam pemilihan arsitektur, seleksi fitur, dan tuning hyperparameter. Sementara itu, set Test harus dijaga agar benar-benar bersih dari informasi apa pun yang digunakan selama pelatihan atau penyesuaian model, sehingga hanya digunakan sekali untuk memberikan estimasi performa akhir yang objektif terhadap data baru.

Pemilihan strategi split sangat bergantung pada karakteristik struktur data dan domain masalah. Secara umum, test set harus dipisahkan sejak awal sebelum preprocessing atau transformasi apapun dilakukan. Untuk masalah klasifikasi, gunakan stratified split guna mempertahankan proporsi kelas asli di setiap subset, sehingga distribusi label tidak terdistorsi secara acak. Jika data Anda mengandung dependensi kelompok, seperti beberapa rekam medis dari pasien yang sama atau beberapa transaksi dari merchant yang identik, terapkan group split agar sampel dari satu kelompok tidak terpisah antara training dan validation, yang dapat menyebabkan leakage berbasis subjek. Untuk data temporal atau deret waktu, gunakan time-based split yang memisahkan data berdasarkan kronologi, memastikan bahwa model hanya dilatih pada informasi masa lalu dan diuji pada kondisi masa depan, mencerminkan skenario deployment nyata.

Implementasi praktis pembagian ini dapat dilihat melalui kode berikut:
```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)
X_train, X_val, y_train, y_val = train_test_split(
    X_train, y_train, test_size=0.2, stratify=y_train, random_state=42
)
```
Kode di atas menerapkan pendekatan sequential split. Pada baris pertama, dataset awal `X` dan `y` dibagi menjadi training dan test set dengan rasio 80:20. Parameter `stratify=y` menjamin keseimbangan kelas, sementara `random_state=42` mengunci pembangkitan angka acak. Baris kedua kemudian mengambil sisa data training (`X_train`, `y_train`) dan membaginya kembali menjadi training dan validation set dengan rasio 80:20 dari subset tersebut. Hasil akhirnya adalah komposisi data sekitar 64% training, 16% validation, dan 20% test. Pendekatan dua tahap ini memastikan bahwa validation set benar-benar berasal dari distribusi yang sama dengan training set, tanpa pernah menyentuh test set.

Prinsip inti yang harus selalu dipegang teguh adalah isolasi informasi. Validasi dan pengujian tidak boleh dipengaruhi oleh pola, statistik, atau transformasi yang dihitung dari training set. Selain itu, pengaturan `random_state` bukan sekadar kenyamanan, melainkan kewajiban metodologis dalam penelitian tingkat magister dan publikasi ilmiah. Tanpa seed yang konsisten, hasil eksperimen akan sulit direproduksi, dan ablation study atau perbandingan baseline antar paper tidak akan adil. Pemisahan yang disiplin ini melindungi integritas evaluasi model dari overfitting tersembunyi dan memastikan bahwa metrik yang dilaporkan mencerminkan kemampuan generalisasi sesungguhnya.

### Inti yang Harus Ditekankan

- Fungsi ketiga subset bersifat hierarkis dan non-overlapping: training untuk belajar, validation untuk memilih/menyesuaikan, test untuk evaluasi final yang tidak bias.
- Strategi split harus disesuaikan dengan struktur data: stratified untuk klasifikasi, group untuk dependensi subjek/kelompok, dan time-based untuk data temporal guna mencegah leakage.
- Reproducibilitas eksperimen wajib dijaga melalui pengaturan `random_state` dan dokumentasi pipeline split yang transparan.
- Test set harus diisolasi sepenuhnya dari seluruh proses preprocessing, feature engineering, dan hyperparameter tuning hingga tahap evaluasi akhir.

### Transisi ke Slide Berikutnya

Pembagian statis train/validation/test memang memberikan kerangka dasar, namun estimasi performa dari satu kali split tunggal rentan terhadap varians akibat keacakan partisi. Untuk mendapatkan gambaran generalisasi yang lebih stabil dan memanfaatkan data training secara lebih efisien dalam proses seleksi model, kita perlu beralih ke teknik resampling sistematis. Pada slide berikutnya, kita akan membahas Cross-Validation sebagai mekanisme evaluasi yang lebih robust untuk model selection dan estimasi error.

---

## Slide 030 - Cross-Validation

### Narasi

Setelah pembahasan pada slide sebelumnya mengenai pembagian data menjadi training, validation, dan test set, kita kini beralih ke teknik evaluasi yang lebih robust, yaitu Cross-Validation. Secara definisi, cross-validation membagi dataset menjadi beberapa bagian yang disebut fold, kemudian melatih model berulang kali dengan setiap fold bergantian berperan sebagai set validasi. Pendekatan ini menghasilkan estimasi performa model yang jauh lebih stabil karena mengurangi bias dan varians yang sering muncul akibat pembagian data statis tunggal.

Terdapat empat jenis cross-validation utama yang perlu disesuaikan dengan karakteristik data Anda. K-Fold membagi data secara acak menjadi k subset berukuran sama untuk rotasi validasi. Stratified K-Fold mempertahankan proporsi distribusi kelas di setiap fold, sehingga sangat krusial untuk tugas klasifikasi dengan data tidak seimbang. Group K-Fold mencegah pemisahan sampel dari kelompok yang sama antar fold, ideal untuk data dengan dependensi struktural seperti data pasien atau transaksi berantai. Terakhir, TimeSeriesSplit dirancang khusus untuk data temporal agar urutan waktu tidak terbalik dan mencegah kebocoran informasi masa depan ke dalam proses pelatihan.

Dalam praktik menggunakan Python dan scikit-learn, implementasi cross-validation dapat dilakukan secara efisien melalui modul `model_selection`. Perhatikan contoh kode berikut yang menerapkan `StratifiedKFold` dengan lima split:

```python
from sklearn.model_selection import StratifiedKFold, cross_val_score
from sklearn.ensemble import RandomForestClassifier

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X_train, y_train, cv=cv, scoring="roc_auc")
print(scores.mean(), scores.std())
```

Kode ini menginisialisasi objek validasi dengan pengacakan aktif dan seed tetap untuk menjamin reproduktibilitas. Fungsi `cross_val_score` kemudian melakukan loop internal untuk melatih model pada empat fold sekaligus menguji pada satu fold yang tersisa, sebanyak lima kali. Metrik `roc_auc` digunakan untuk mengukur kemampuan diskriminasi model, sementara output `mean()` dan `std()` memberikan ringkasan statistik mengenai konsistensi performa model di seluruh fold.

Perlu ditekankan bahwa cross-validation berfungsi utama sebagai alat model selection dan estimasi generalisasi, bukan pengganti evaluasi akhir. Set data uji (test set) harus tetap dipisahkan dan tidak boleh terlibat dalam proses tuning atau pemilihan model manapun. Prinsip pemisahan informasi ini menjadi fondasi penting menuju diskusi pada slide berikutnya mengenai experimental validity, di mana kita akan mempelajari bagaimana merancang eksperimen yang secara metodologis ketat, sehingga kesimpulan yang ditarik benar-benar mencerminkan efek nyata dari metode yang diuji, bukan artefak dari prosedur evaluasi yang kurang tepat.

### Inti yang Harus Ditekankan

- Cross-validation menghasilkan estimasi performa yang lebih stabil dan mengurangi varians dibandingkan single train-test split.
- Pemilihan jenis CV (K-Fold, Stratified, Group, TimeSeries) harus didasarkan pada struktur dan karakteristik data.
- Test set wajib dijaga bersih dan hanya digunakan untuk evaluasi final setelah model dan hyperparameter dipilih via CV.

### Transisi ke Slide Berikutnya

Dengan pemahaman bahwa cross-validation adalah standar emas untuk model selection, langkah logis selanjutnya adalah memastikan seluruh rangkaian eksperimen kita memiliki landasan metodologis yang kuat. Mari kita lanjutkan ke konsep fundamental mengenai experimental validity dan empat pilar utamanya.

---

## Slide 031 - Experimental Validity: Konsep Dasar

### Narasi

Setelah kita membahas mekanisme cross-validation pada slide sebelumnya, langkah metodologis berikutnya adalah mengevaluasi seberapa kredibel estimasi performa yang dihasilkan. Experimental validity atau validitas eksperimental merujuk pada sejauh mana kesimpulan yang ditarik dari sebuah eksperimen benar, akurat, dan dapat dipertanggungjawabkan secara ilmiah. Dalam konteks penelitian tingkat magister, validitas ini menjadi fondasi yang menentukan apakah temuan kita layak disebut sebagai kontribusi pengetahuan baru atau sekadar artefak dari kesalahan desain eksperimen. Tanpa validitas yang terjaga, bahkan skor akurasi tertinggi pun kehilangan makna akademik dan praktisnya.

Terdapat empat pilar utama dalam menilai validitas eksperimental, masing-masing menjawab pertanyaan kritis yang berbeda. Pertama, validitas internal menanyakan apakah perubahan hasil pengamatan benar-benar disebabkan oleh variabel atau metode yang diuji, bukan oleh faktor pengganggu atau bias desain lainnya. Kedua, validitas eksternal menguji kemampuan generalisasi hasil ke populasi, domain industri, atau konteks aplikasi yang lebih luas. Ketiga, validitas konstruk memastikan bahwa instrumen, fitur, atau metrik yang digunakan benar-benar mengukur fenomena konseptual yang ingin diteliti. Keempat, validitas statistik berkaitan dengan kecukupan kekuatan uji, ketepatan pemilihan tes statistik, serta penanganan asumsi matematis yang mendasari inferensi empiris.

Ketika diterjemahkan ke dalam praktik Data Mining, keempat dimensi ini memiliki implikasi teknis yang sangat spesifik. Untuk validitas internal, kita harus memastikan bahwa peningkatan performa memang berasal dari inovasi algoritma, bukan dari praktik seperti hyperparameter tuning yang tidak adil, data leakage, atau perbandingan baseline yang tidak setara. Validitas eksternal menuntut pemeriksaan ketat terhadap representativitas dataset, sehingga model tidak hanya optimal pada distribusi sampel tertentu saja. Validitas konstruk menekankan pentingnya memilih evaluation metric yang selaras dengan tujuan bisnis atau hipotesis penelitian; misalnya, menggunakan precision-recall atau cost-sensitive metrics ketika biaya klasifikasi salah kelas sangat tinggi. Terakhir, validitas statistik mengharuskan peneliti melakukan uji signifikansi yang tepat, melaporkan interval kepercayaan, serta menghindari repeated testing tanpa koreksi multipel. Secara keseluruhan, experimental validity berfungsi sebagai kerangka integratif yang menghubungkan proses EDA, teknik preprocessing, hingga arsitektur desain eksperimen itu sendiri.

### Inti yang Harus Ditekankan

- Validitas eksperimental adalah ukuran kredibilitas kesimpulan penelitian, bukan sekadar angka performa model.
- Empat jenis validitas (Internal, Eksternal, Konstruk, Statistik) harus dievaluasi secara simultan dalam setiap studi Data Mining.
- Validitas internal sangat rentan terhadap bias desain eksperimen seperti unfair tuning dan data leakage.
- Pemilihan metrik evaluasi harus selalu dikaitkan kembali dengan validitas konstruk agar relevan dengan masalah riil.
- Validitas eksperimental merupakan benang merah metodologis yang menyatukan EDA, preprocessing, dan protokol eksperimen.

### Transisi ke Slide Berikutnya

Salah satu ancaman paling umum terhadap validitas internal adalah data leakage, yang sering kali terjadi secara tidak sadar selama tahap preprocessing atau feature engineering. Pada slide berikutnya, kita akan membedah bentuk-bentuk spesifik data leakage, dampaknya terhadap estimasi performa, serta strategi pencegahan sistematis menggunakan pipeline modeling.

---

## Slide 032 - Data Leakage: Ancaman Utama Validitas

### Narasi

Pada slide sebelumnya, kita telah membahas empat pilar validitas eksperimen, khususnya validitas internal yang menanyakan apakah perubahan performa benar-benar disebabkan oleh metode yang diuji, bukan oleh faktor pengganggu. Salah satu ancaman paling kritis terhadap validitas internal dalam praktik data mining adalah data leakage. Data leakage terjadi ketika informasi yang seharusnya tidak tersedia pada saat prediksi masuk ke dalam proses pelatihan model, sehingga menciptakan ilusi performa yang sangat tinggi namun tidak realistis. Dalam konteks penelitian tingkat magister, memahami mekanisme kebocoran ini sangat penting karena kesalahan kecil dalam alur kerja dapat membuat seluruh klaim kontribusi penelitian menjadi invalid.

Bentuk pertama adalah target leakage, yaitu penggunaan fitur yang hanya diketahui setelah target sebenarnya terungkap. Misalnya, jika Anda menyertakan kolom `churn_actual` atau label ground truth sebagai salah satu variabel prediktor, model akan secara instan mempelajari pola tersebut tanpa perlu melakukan inferensi yang sesungguhnya. Hal ini sering terjadi secara tidak sadar saat menggabungkan dataframe atau melakukan feature engineering yang melibatkan agregasi berdasarkan label.

Bentuk kedua adalah preprocessing leakage, yang sangat umum terjadi dalam implementasi Python menggunakan library seperti scikit-learn. Kesalahan klasik adalah menghitung statistik global seperti mean, standard deviation, min, atau max dari seluruh dataset sebelum melakukan train-test split. Contoh konkretnya adalah memanggil `StandardScaler().fit(X)` pada seluruh data, lalu baru memisahkan training dan testing. Ketika scaler tersebut ditransformasikan pada data uji, informasi distribusi dari data uji telah "bocor" ke dalam proses scaling, sehingga model mendapat keuntungan tidak adil selama evaluasi.

Bentuk ketiga adalah temporal leakage, yang relevan terutama untuk data deret waktu atau longitudinal. Kebocoran ini terjadi ketika informasi masa depan digunakan untuk memprediksi keadaan masa lalu atau sekarang. Contohnya, menggunakan `avg_next_month_sales` atau rata-rata transaksi bulan berikutnya sebagai fitur untuk memprediksi churn di bulan berjalan. Dalam skenario dunia nyata, informasi masa depan tidak pernah tersedia saat prediksi dibuat, sehingga fitur semacam ini harus dihapus atau diproses dengan teknik time-aware cross-validation.

Dampak dari ketiga bentuk kebocoran ini konsisten dan merugikan: model menunjukkan akurasi atau AUC yang sangat tinggi pada eksperimen laboratorium, tetapi performanya terjun bebas saat diterapkan pada data produksi atau lingkungan nyata. Bagi peneliti, hal ini berakibat fatal karena kesimpulan yang ditarik tidak lagi mencerminkan kemampuan sebenarnya dari algoritma, sehingga paper atau laporan penelitian kehilangan nilai ilmiahnya.

Untuk mencegah data leakage, praktik terbaik yang harus diadopsi adalah memisahkan data terlebih dahulu sebelum melakukan preprocessing apa pun. Alur yang benar adalah split dataset menjadi training dan testing, kemudian lakukan fit transformasi hanya pada data training. Di ekosistem Python, implementasi paling aman dan reproduktif adalah menggunakan `sklearn.pipeline.Pipeline`. Dengan Pipeline, setiap langkah preprocessing dan estimator dikemas dalam satu objek, sehingga operasi `fit` dan `transform` secara otomatis hanya dijalankan pada subset training selama cross-validation atau evaluasi, menghilangkan risiko kebocoran manual.

Memahami dan mengendalikan data leakage merupakan fondasi dari desain eksperimen yang robust. Namun, validitas eksperimen tidak hanya bergantung pada integritas fitur dan alur preprocessing, tetapi juga pada kualitas representasi data itu sendiri. Jika data yang digunakan sudah bersih dari kebocoran namun tidak mewakili populasi target, generalisasi hasil tetap akan bermasalah. Hal ini membawa kita secara alami ke pembahasan tentang bagaimana karakteristik dataset memengaruhi representativitas dan validitas eksternal.

### Inti yang Harus Ditekankan

- Data leakage secara langsung merusak internal validitas eksperimen dengan memberikan keuntungan tidak adil kepada model.
- Tiga bentuk utama kebocoran: target leakage (fitur mengandung label), preprocessing leakage (statistik hitung sebelum split), dan temporal leakage (informasi masa depan dipakai untuk prediksi masa lalu).
- Pencegahan wajib: lakukan train-test split sebelum preprocessing apapun, dan gunakan `sklearn.pipeline.Pipeline` untuk memastikan isolasi antara fase fit dan transform.
- Performa tinggi di notebook tidak serta merta membuktikan keunggulan algoritma; verifikasi alur data adalah syarat mutlak untuk publikasi penelitian yang kredibel.

### Transisi ke Slide Berikutnya

Setelah memastikan bahwa fitur dan alur preprocessing bebas dari kebocoran informasi, langkah selanjutnya adalah mengevaluasi apakah dataset itu sendiri sudah mencerminkan kondisi populasi secara akurat, karena bias dalam representasi data akan menjadi ancaman serius bagi eksternal validitas dan generalisasi model.

---

## Slide 033 - Dataset Bias dan Representativeness

### Narasi

Setelah membahas ancaman kebocoran data pada slide sebelumnya, langkah kritis berikutnya dalam menjamin validitas eksperimen adalah memastikan bahwa dataset yang kita gunakan benar-benar representatif terhadap populasi sasaran. Sebuah dataset dikatakan representatif ketika karakteristiknya secara akurat mencerminkan distribusi dan sifat-sifat dari populasi dunia nyata yang menjadi tujuan generalisasi model. Dalam konteks penelitian tingkat magister, klaim generalisasi tidak boleh diambil begitu saja; ia harus dibuktikan melalui eksplorasi data yang rigor dan berbasis bukti empiris.

Pada fase Exploratory Data Analysis (EDA), peneliti wajib mengajukan serangkaian pertanyaan mendasar untuk menguji representativitas ini. Pertama, identifikasi sumber dan konteks pengumpulan data: siapa subjeknya, dari institusi mana, dan melalui mekanisme apa data diperoleh. Kedua, tinjau rentang waktu pengambilan data; apakah mencakup variasi musiman atau siklus bisnis yang lengkap? Ketiga, periksa apakah ada kelompok demografis atau perilaku yang terpinggirkan atau sama sekali tidak terwakili dalam sampel. Keempat, bandingkan distribusi fitur empiris dengan pengetahuan domain; jika ada deviasi signifikan tanpa justifikasi metodologis, hal ini mengindikasikan potensi bias seleksi atau pengukuran yang perlu ditelusuri lebih lanjut.

Bias dataset sering kali muncul dalam bentuk yang halus namun berdampak fatal terhadap validitas eksternal. Misalnya, pengumpulan data hanya dari wilayah metropolitan akan mengabaikan dinamika daerah perkotaan kecil atau pedesaan. Demikian pula, sampel yang hanya terdiri dari pengguna aktif aplikasi akan melewatkan pola churn dari pengguna pasif, sementara data yang dikumpulkan selama periode krisis ekonomi ekstrem mungkin menghasilkan model yang terlalu sensitif terhadap kondisi makroekonomi tertentu. Dampak langsungnya adalah performa model yang dievaluasi hanya berlaku dalam konteks sempit tersebut. Oleh karena itu, setiap klaim generalisasi dalam publikasi ilmiah harus disertai batasan yang jelas, dan ketidakrepresentatifan dataset wajib dicantumkan secara transparan pada bagian limitation.

Untuk memitigasi masalah ini, praktik terbaik dalam penelitian data mining modern meliputi dokumentasi karakteristik dataset secara komprehensif, termasuk metadata, prosedur sampling, dan known gaps. Jika memungkinkan, lakukan evaluasi silang menggunakan dataset independen dari domain atau geografis berbeda untuk menguji robustness generalisasi. Selain itu, diskusikan bias yang teridentifikasi sebagai *threats to validity* dalam kerangka metodologi penelitian Anda. Pendekatan ini tidak hanya meningkatkan kredibilitas akademik, tetapi juga memberikan peta jalan yang jelas bagi peneliti selanjutnya untuk memperbaiki celah tersebut.

### Inti yang Harus Ditekankan

- Representativitas dataset adalah fondasi generalisasi hasil penelitian, bukan sekadar asumsi yang bisa diabaikan.
- EDA harus bersifat kritis dan selalu merujuk pada domain knowledge untuk mendeteksi bias seleksi, temporal, atau demografis sejak dini.
- Transparansi mengenai keterbatasan dataset dan pembahasan eksplisit sebagai *threats to validity* merupakan standar wajib dalam penulisan karya ilmiah tingkat S2.

### Transisi ke Slide Berikutnya

Meskipun bias dataset dapat diminimalkan melalui dokumentasi dan evaluasi silang, tantangan validitas lainnya tetap mengintai saat kita membagi data menjadi subset pelatihan dan pengujian. Salah satu kesalahan metodologis yang sering tumpang tindih dengan isu representativitas adalah kontaminasi informasi antar subset, yang akan kita bedah lebih lanjut pada slide berikutnya mengenai train-test contamination.

---

## Slide 034 - Train-Test Contamination

### Narasi

Setelah membahas bagaimana bias dan representativitas dataset dapat mengancam validitas generalisasi pada slide sebelumnya, langkah kritis berikutnya dalam desain eksperimen data mining adalah memastikan pemisahan data yang ketat antara fase pelatihan dan evaluasi. Train-test contamination merupakan salah satu kesalahan metodologis paling umum namun paling berbahaya dalam penelitian machine learning. Secara definisi, kontaminasi ini terjadi ketika informasi dari test set, atau bahkan data masa depan, secara tidak sengaja ikut memengaruhi proses pelatihan model. Hal ini melanggar prinsip dasar bahwa model hanya boleh "melihat" data pelatihan saat belajar pola, sehingga performa yang diukur menjadi bias dan tidak mencerminkan kemampuan generalisasi sebenarnya.

Kontaminasi ini sering muncul secara tidak sadar dalam berbagai tahap preprocessing dan tuning. Seperti yang terangkum dalam tabel slide, ada beberapa bentuk kesalahan yang perlu diwaspadai. Pertama, melakukan scaling sebelum split data, misalnya memanggil `fit_transform(X_total)` pada seluruh dataset sebelum dibagi, akan membuat statistik seperti mean dan variance test set bocor ke proses training. Kedua, imputasi nilai hilang dilakukan sebelum split dengan `fit(SimpleImputer)` pada seluruh data, sehingga distribusi test set memengaruhi nilai pengganti. Ketiga, feature selection yang memilih kolom berdasarkan korelasi atau importance score dihitung dari seluruh data, bukan hanya subset training. Keempat, oversampling atau SMOTE diterapkan pada seluruh dataset sebelum pembagian, sehingga sampel sintetis dari test set bisa muncul di train set. Kelima, tuning hyperparameter menggunakan test set sebagai acuan pilihan terbaik, yang secara efektif menjadikan test set bagian dari proses optimisasi model.

Dampak dari praktik-praktik tersebut sangat serius bagi integritas penelitian. Estimasi performa model akan terlihat terlalu optimis karena model seolah-olah sudah "mengintip" jawaban selama pelatihan. Dalam konteks kompetisi atau publikasi ilmiah, hal ini membuat setup eksperimen menjadi tidak adil terhadap metode lain yang dievaluasi secara ketat. Akibatnya, kesimpulan yang ditarik mengenai keunggulan suatu algoritma atau teknik preprocessing menjadi tidak valid dan sulit direplikasi oleh peneliti lain.

Untuk mencegah kontaminasi, alur kerja eksperimen harus mengikuti urutan yang ketat: lakukan split data terlebih dahulu, kemudian fit semua komponen preprocessing hanya pada data training, transform data training dan test secara terpisah, selanjutnya fit model pada data training yang sudah diproses, dan akhirnya evaluasi pada test set. Di ekosistem Python dan scikit-learn, implementasi aman dari alur ini dapat dijamin menggunakan `Pipeline` dan `ColumnTransformer`. Komponen ini secara otomatis mengelola urutan operasi, memastikan bahwa setiap estimator hanya melakukan fitting pada data yang seharusnya, serta menghindari kebocoran informasi antar subset. Pendekatan ini juga menjadi fondasi utama untuk membangun pipeline yang reproducible, yang akan kita bahas lebih lanjut pada slide berikutnya.

### Inti yang Harus Ditekankan

- Train-test contamination adalah kebocoran informasi dari test set ke proses training yang merusak validitas eksperimen dan klaim generalisasi model.
- Kesalahan umum meliputi scaling, imputasi, feature selection, oversampling, dan tuning yang dilakukan sebelum split data.
- Alur kerja yang benar wajib memisahkan split terlebih dahulu, lalu fitting preprocessing hanya pada train set.
- Penggunaan `Pipeline` dan `ColumnTransformer` di scikit-learn adalah standar industri dan akademik untuk mencegah kebocoran dan menjamin reproduktibilitas eksperimen.

### Transisi ke Slide Berikutnya

Dengan memahami cara mencegah kebocoran data melalui alur kerja yang tepat, langkah logis selanjutnya adalah mengemas seluruh proses preprocessing dan modeling ke dalam struktur kode yang terstruktur dan dapat direproduksi. Pada slide berikutnya, kita akan membahas bagaimana membangun Reproducible Preprocessing Pipeline menggunakan `Pipeline` dari scikit-learn, lengkap dengan praktik terbaik untuk dokumentasi versi library, random seed, dan pelacakan eksperimen guna memenuhi standar rigor penelitian tingkat magister.

---

## Slide 035 - Reproducible Preprocessing Pipeline

### Narasi

Setelah kita mengidentifikasi bahaya train-test contamination pada slide sebelumnya dan melihat bagaimana `Pipeline` serta `ColumnTransformer` dapat menjadi solusi teknisnya, langkah selanjutnya yang mutlak dalam penelitian data mining tingkat magister adalah memastikan bahwa seluruh alur kerja tersebut benar-benar *reproducible*. Reproduksibilitas bukan sekadar praktik administratif atau formalitas penulisan laporan, melainkan fondasi epistemologis dari penelitian ilmiah yang kredibel. Sebuah eksperimen data mining dikatakan berkualitas tinggi ketika peneliti lain dapat menjalankan ulang kode, menggunakan dataset yang sama, dan menghasilkan metrik evaluasi yang identik atau berada dalam margin error yang wajar. Praktik ini secara langsung meningkatkan kepercayaan komunitas akademik terhadap temuan yang Anda ajukan, sekaligus mempermudah proses validasi independen dan replikasi studi oleh peneliti lain.

Untuk mencapai standar reproduksibilitas yang ketat, terdapat lima komponen kunci yang harus dikelola dengan disiplin tinggi. Pertama, pengaturan *random seed* seperti `random_state=42` wajib diterapkan secara konsisten pada setiap komponen yang bersifat stokastik, mulai dari inisialisasi bobot model, pembagian data acak, hingga teknik resampling. Kedua, konsistensi lingkungan komputasi (*environment*) harus dijaga, mencakup versi Python, pustaka inti seperti pandas dan NumPy, hingga scikit-learn, karena pembaruan minor pada library sering kali mengubah perilaku default atau optimisasi internal algoritma. Ketiga, konfigurasi eksperimental, baik parameter pra-pemrosesan maupun hyperparameter model, harus dicatat secara eksplisit dan terstruktur. Keempat, *data versioning* diperlukan untuk melacak sumber data secara presisi, misalnya melalui hash SHA-256 file atau tanggal unduh, mengingat dataset publik sering diperbarui atau dikoreksi tanpa notifikasi resmi. Kelima, penggunaan alat pelacakan eksperimen (*experiment tracking*) seperti MLflow atau Weights & Biases sangat disarankan untuk mencatat metrik, konfigurasi, dan artifact secara otomatis, sehingga jejak penelitian menjadi transparan, teraudit, dan mudah dibandingkan antar percobaan.

Dari sisi implementasi teknis, scikit-learn menyediakan modul `Pipeline` yang memungkinkan kita mengemas seluruh rangkaian transformasi dan estimator ke dalam satu objek tunggal yang kohesif. Perhatikan contoh struktur kode berikut:
```python
from sklearn.pipeline import Pipeline

pipeline = Pipeline([
    ("preprocessing", preprocessor),
    ("classifier", RandomForestClassifier(random_state=42))
])
```
Dalam deklarasi ini, list berisi tupel `(nama_tahap, objek)` menentukan urutan eksekusi. Tahap `"preprocessing"` merujuk pada objek `preprocessor` yang telah Anda bangun sebelumnya (biasanya berupa `ColumnTransformer`), sedangkan tahap `"classifier"` memasukkan model dengan seed yang tetap. Keunggulan utama pendekatan ini adalah pipeline tidak hanya menjamin urutan operasi mengikuti prinsip *fit on train, transform on test*, tetapi juga membungkus state model yang telah dilatih menjadi satu entitas. Sebagai praktik terbaik, selalu simpan pipeline yang telah selesai diekspose menggunakan library `.joblib` karena format ini jauh lebih efisien dalam hal kecepatan serialisasi dan konsumsi memori dibandingkan `pickle` standar. Selain itu, sertakan seluruh skrip eksperimen beserta file `requirements.txt` atau `environment.yml` yang mencantumkan versi library, dan catat setiap keputusan desain preprocessing di dalam sel notebook Anda. Dokumentasi ini akan menjadi aset vital saat Anda menyusun bab metodologi atau merespons pertanyaan kritis dari reviewer jurnal internasional.

Dengan menerapkan pipeline yang terstruktur, terkunci konfigurasinya, dan terekam secara sistematis, Anda secara otomatis membangun fondasi untuk perbandingan metode yang adil, yang akan menjadi fokus pembahasan di slide berikutnya. Ketika semua algoritma dievaluasi menggunakan pipeline preprocessing yang identik, variasi pada skor evaluasi murni mencerminkan kapabilitas intrinsik model, bukan bias akibat perbedaan penanganan missing value, scaling, atau seleksi fitur.

### Inti yang Harus Ditekankan

- Reproduksibilitas adalah standar wajib dalam penelitian data mining tingkat S2; tanpa kontrol seed, environment, dan data versioning, hasil eksperimen kehilangan nilai ilmiahnya.
- Penggunaan `sklearn.pipeline.Pipeline` bukan hanya soal kenyamanan kode, melainkan mekanisme teknis untuk mencegah kontaminasi data dan memastikan urutan operasi yang konsisten.
- Simpan pipeline sebagai `.joblib`, dokumentasikan versi library, dan manfaatkan tools tracking (MLflow/W&B) untuk menciptakan jejak penelitian yang transparan dan siap audit.

### Transisi ke Slide Berikutnya

Memastikan setiap metode berjalan di atas pipeline yang sama membuka diskusi penting mengenai bagaimana konsistensi preprocessing secara langsung menentukan keadilan dalam perbandingan kinerja model, yang akan kita bedah lebih lanjut pada slide berikutnya.

---

## Slide 036 - Dampak Preprocessing terhadap Fairness of Comparison

### Narasi

Setelah membahas pentingnya pipeline yang dapat direproduksi pada slide sebelumnya, kita sekarang beralih ke aspek krusial lainnya dalam desain eksperimen data mining, yaitu fairnes atau keadilan dalam perbandingan metode. Dalam penelitian tingkat magister, klaim keunggulan sebuah algoritma baru hanya dapat dibuktikan secara ilmiah jika kondisi pengujian benar-benar terkontrol. Masalah utama muncul ketika langkah preprocessing diterapkan secara berbeda antar metode yang sedang dibandingkan. Jika setiap model mendapatkan perlakuan pra-pemrosesan yang unik, perbedaan performa yang diamati tidak lagi mencerminkan kapabilitas intrinsik algoritma, melainkan bias yang diperkenalkan oleh tahap preprocessing itu sendiri.

Mari kita bedah contoh-contoh ketidakadilan yang sering terjadi secara tidak sadar. Pertama, penggunaan teknik imputasi yang berbeda, seperti Metode A menggunakan KNN imputer sementara Metode B diisi dengan nilai konstanta atau mean, akan mengubah struktur distribusi fitur secara asimetris dan memberikan keuntungan artifisial. Kedua, penerapan feature selection pada seluruh dataset sebelum pembagian train-test merupakan bentuk data leakage yang fatal; hal ini membuat informasi dari data uji "bocor" ke proses seleksi, sehingga evaluasi menjadi terlalu optimis dan tidak generalizable. Ketiga, ketimpangan dalam tuning hyperparameter, misalnya Metode A di-tuning dengan grid search ekstensif atau Bayesian optimization sedangkan Metode B hanya menggunakan default parameter, jelas mendistorsi hasil benchmarking. Keempat, asimetri dalam penanganan kelas tidak seimbang, seperti penerapan class_weight atau resampling pada Metode A tetapi tidak pada Metode B, akan menggeser decision boundary secara tidak adil dan menguntungkan satu model tertentu.

Untuk menjamin fair comparison, terdapat empat prinsip fundamental yang harus dipatuhi. Prinsip pertama mewajibkan penggunaan pipeline preprocessing yang identik untuk semua metode yang diuji, memastikan urutan transformasi dan parameter tetap konsisten. Prinsip kedua menekankan bahwa semua transformasi harus diterapkan secara seragam pada subset data yang sama sesuai protokol train-validation-test. Prinsip ketiga mengatur alokasi komputasi dan waktu tuning agar proporsional dan setara antara baseline dan proposed method. Terakhir, dokumentasi menyeluruh atas setiap keputusan preprocessing bukan sekadar formalitas administratif, melainkan syarat mutlak untuk transparansi dan kemampuan peneliti lain melakukan replikasi studi.

Konsep ini sangat erat kaitannya dengan diskusi pada Pertemuan 04 dan 05 mengenai validitas eksperimental dan pembangkitan hipotesis penelitian. Sebuah strong baseline sering kali disalahartikan sebagai model sederhana yang boleh diperlakukan sembarangan. Padahal, baseline yang kuat justru harus diperlakukan dengan standar preprocessing dan tuning yang sama ketat-nya dengan proposed method. Peningkatan performa yang dilaporkan hanya bermakna secara akademik dan praktis jika setup eksperimen benar-benar fair. Tanpa kesetaraan dalam preprocessing, klaim kontribusi penelitian kehilangan landasan empiris yang kokoh dan rentan ditolak dalam proses peer-review jurnal internasional karena kelemahan metodologis.

### Inti yang Harus Ditekankan

- Perbedaan preprocessing antar metode adalah sumber bias terbesar yang dapat menipu kesimpulan penelitian; kontrol variabel pra-pemrosesan wajib dilakukan agar atribusi performa murni berasal dari algoritma.
- Feature selection atau transformasi apa pun pada data penuh sebelum split menyebabkan data leakage yang merusak validitas evaluasi; pipeline harus memisahkan fit pada training set dan transform pada validation/test set.
- Budget tuning dan kompleksitas komputasi harus setara antara baseline dan proposed method untuk menghindari overfitting selektif dan memastikan benchmarking yang objektif.
- Dokumentasi preprocessing adalah bagian integral dari metodologi penelitian; tanpa catatan lengkap, hasil eksperimen tidak dapat diverifikasi, direplikasi, atau dipertanggungjawabkan secara akademis.

### Transisi ke Slide Berikutnya

Memahami teori fair comparison ini kini saatnya kita terapkan secara langsung dalam praktik. Pada sesi praktikum berikutnya, Anda akan membangun experimental pipeline yang benar-benar reproducible dan bebas dari leakage, sekaligus melakukan EDA terstruktur untuk mengidentifikasi karakteristik dataset sebelum preprocessing diterapkan secara adil. Mari kita buka lingkungan kerja Python dan mulai menyusun pipeline tersebut.

---

## Slide 037 - Praktikum 1: EDA dan Experimental Pipeline

### Narasi

Setelah membahas prinsip fair comparison dan dampak heterogenitas preprocessing terhadap validitas evaluasi pada slide sebelumnya, kini kita masuk ke tahap implementasi metodologis melalui Praktikum 1. Fokus utama pada slide ini adalah pelaksanaan Exploratory Data Analysis (EDA) secara terstruktur terhadap candidate dataset, dilanjutkan dengan pembangunan experimental pipeline menggunakan ekosistem Python. Pada jenjang magister, EDA tidak lagi dipandang sebagai kegiatan eksploratif dangkal, melainkan sebagai fondasi investigatif yang menentukan arah desain eksperimen, seleksi teknik transformasi, dan strategi mitigasi bias sebelum model dibangun.

Tujuan praktikum ini menuntut mahasiswa untuk menggali karakteristik intrinsik dataset secara sistematis, mengidentifikasi anomali serta masalah kualitas data, dan menerjemahkan temuan tersebut menjadi keputusan desain eksperimen yang berbasis bukti. Target yang harus dicapai meliputi pemahaman mendalam mengenai struktur dan distribusi data, deteksi dini terhadap missing values, skewness, class imbalance, atau noise, serta penyusunan laporan temuan EDA yang secara eksplisit memengaruhi arsitektur pipeline. Setiap langkah preprocessing yang diusulkan harus memiliki justifikasi empiris, bukan sekadar mengikuti template umum, guna memastikan bahwa peningkatan performa model benar-benar berasal dari efektivitas metode yang diteliti.

Untuk mewujudkan target tersebut, kita akan memanfaatkan stack tools yang telah distandardisasi dalam riset data mining modern: Python sebagai inti pemrograman, Jupyter Notebook atau Google Colab sebagai lingkungan kerja interaktif, pandas dan NumPy untuk manipulasi data tabular, Matplotlib serta Seaborn untuk visualisasi statistik multidimensi, serta scikit-learn dan imbalanced-learn untuk merakit komponen preprocessing yang modular dan terintegrasi. Pemilihan library ini didasarkan pada kompatibilitas tinggi dengan estimator scikit-learn, dukungan native terhadap pipeline chaining, serta kemampuan menangani dataset berskala besar maupun tidak seimbang secara efisien.

Luaran praktikum ini dirancang sebagai deliverable akademik yang terstruktur dan auditable. Mahasiswa wajib menyerahkan notebook EDA lengkap, ringkasan profil dataset, visualisasi distribusi dan korelasi fitur, tabel komprehensif berisi katalog masalah kualitas data, daftar temuan EDA yang berdampak pada desain eksperimen, serta dokumentasi keputusan preprocessing beserta alasan metodologisnya. Seluruh komponen ini akan disatukan menjadi experimental pipeline yang reproducible, version-controlled, dan bebas dari data leakage. Sebagai tindak lanjut teknis, slide berikutnya akan menguraikan delapan tahapan operasional minimum yang harus dijalankan secara berurutan, mulai dari pemeriksaan struktur dasar dataset hingga deteksi outlier berbasis domain knowledge, sehingga praktikum ini dapat dieksekusi secara konsisten dan terukur.

Secara ringkas, slide ini menegaskan bahwa rigor dalam fase EDA dan konsistensi dalam pembangunan pipeline merupakan prasyarat mutlak bagi validitas eksperimen data mining. Tanpa fondasi EDA yang kuat dan pipeline yang dirancang tanpa kebocoran informasi, perbandingan antar metode akan kehilangan makna ilmiah, terlepas dari kompleksitas algoritma yang digunakan.

### Inti yang Harus Ditekankan

- EDA pada jenjang S2 berfungsi sebagai dasar pengambilan keputusan metodologis, bukan sekadar pelengkap laporan.
- Experimental pipeline harus dirancang agar sepenuhnya reproducible, modular, dan bebas dari data leakage.
- Setiap keputusan preprocessing wajib didokumentasikan dengan justifikasi empiris berdasarkan temuan EDA.
- Keluaran praktikum (notebook, profil dataset, tabel masalah, visualisasi, dan daftar keputusan) membentuk jejak audit yang memperkuat validitas penelitian.
- Konsistensi pipeline across semua metode menjadi kunci terwujudnya fair comparison yang telah dibahas pada slide sebelumnya.

### Transisi ke Slide Berikutnya

Dengan memahami tujuan, target, tools, dan luaran yang diharapkan, kita sekarang akan menjabarkan delapan tahapan teknis minimum yang harus dijalankan secara berurutan dalam praktikum ini, dimulai dari pemeriksaan struktur dataset hingga identifikasi outlier, agar seluruh proses EDA dan pipeline building dapat dilakukan secara sistematis dan terstandarisasi.

---

## Slide 038 - Tahapan Praktikum 1 (1–8)

### Narasi

Tahapan awal praktikum ini dirancang untuk membangun fondasi eksplorasi data yang sistematis dan terdokumentasi, selaras dengan tujuan membangun pipeline eksperimen yang reproducible dan bebas leakage. Langkah pertama dan kedua berfokus pada inspeksi struktural dataset melalui perintah `df.head()`, `df.info()`, dan `df.shape`. Operasi ini memberikan gambaran instan mengenai dimensi data sekaligus mengidentifikasi tipe variabel masing-masing fitur—numerik, kategorikal, ordinal, atau datetime. Kesalahan dalam mengasumsikan tipe data sering kali menjadi sumber bug implisit dan bias preprocessing yang sulit dilacak kemudian hari.

Setelah skema data terkonfirmasi, langkah ketiga dan keempat menuntut penyusunan dataset profile lengkap beserta evaluasi statistik deskriptif. Kita akan mencatat jumlah observasi, kolom, cardinality, serta tingkat missing value secara global. Penggunaan `df.describe()` menjadi titik kritis untuk mengevaluasi mean, median, persentil, dan standar deviasi fitur numerik. Statistik ini mengungkap skewness, heteroskedastisitas, dan perbedaan skala antarfitur yang secara langsung memengaruhi konvergensi algoritma dan kebutuhan scaling dalam tahap selanjutnya.

Analisis distribusi menjadi fokus pada langkah kelima dan keenam. Histogram untuk fitur numerik dan count plot untuk fitur kategorikal digunakan untuk memetakan pola sebaran data secara visual. Untuk variabel target, perintah `df["target"].value_counts()` diterapkan guna menghitung proporsi kelas secara eksplisit. Pemetaan distribusi ini bukan hanya rutinitas visual, melainkan langkah diagnostik untuk mengidentifikasi bias inherent, multimodalitas, atau dominasi kelas yang akan menentukan strategi sampling atau weighting dalam desain eksperimen.

Dua langkah terakhir pada rentang ini menangani kualitas ekstrem data: missing values dan outlier. Perintah `df.isna().sum()` dilengkapi dengan visualisasi pola missing memungkinkan kita membedakan mekanisme kehilangan data secara kasar. Deteksi anomali nilai dilakukan melalui boxplot dan aturan IQR, namun interpretasinya harus selalu dikalibrasi dengan domain knowledge. Dalam konteks penelitian tingkat magister, keputusan imputasi, truncation, atau penghapusan data harus didasarkan pada justifikasi metodologis yang jelas, bukan heuristik semata, guna menjaga validitas eksternal dan internal eksperimen.

### Inti yang Harus Ditekankan

- EDA harus dijalankan secara bertahap dan terdokumentasi; setiap temuan statistik atau visual menjadi input objektif untuk merumuskan hipotesis preprocessing dan desain eksperimen.
- Akurasi identifikasi tipe fitur dan pemahaman distribusi data secara mendalam menentukan kompatibilitas algoritma serta mencegah kesalahan transformasi yang merusak integritas dataset.
- Penanganan missing values dan outlier wajib menggabungkan metrik statistik (IQR, pola missing) dengan konteks domain, sehingga keputusan preprocessing memiliki dasar metodologis yang kuat dan dapat direplikasi.

### Transisi ke Slide Berikutnya

Dengan profil dataset, distribusi, dan isu kualitas data telah terpeta secara komprehensif, kita siap beralih ke analisis relasional dan persiapan implementasi teknis. Pada slide berikutnya, kita akan mengukur korelasi antarvariabel, mendeteksi redundansi serta indikasi data leakage, menilai tingkat class imbalance, lalu menerjemahkan seluruh temuan EDA menjadi rancangan preprocessing pipeline yang konkret menggunakan `Pipeline` dan `ColumnTransformer` di scikit-learn.

---

## Slide 039 - Tahapan Praktikum 1 (9–16)

### Narasi

Setelah menyelesaikan delapan langkah awal pada slide sebelumnya yang mencakup pemeriksaan struktur dataset, identifikasi tipe fitur, penyusunan profil data, analisis distribusi, serta deteksi missing values dan outlier, kita kini memasuki tahap lanjutan yang berfokus pada hubungan antarvariabel dan persiapan eksperimen. Pada langkah kesembilan, Anda diminta menganalisis korelasi atau asosiasi antarvariabel. Untuk data numerik, gunakan matriks korelasi Pearson yang divisualisasikan melalui heatmap untuk mengidentifikasi pola linear. Sementara itu, untuk pasangan variabel kategorikal, terapkan uji Cramér’s V guna mengukur kekuatan asosiasi non-linear. Pemahaman ini krusial karena fitur yang saling berkorelasi tinggi dapat mengganggu stabilitas model tertentu, terutama regresi linier atau logistik, serta berpotensi mengurangi interpretabilitas hasil penelitian.

Langkah kesepuluh menyoroti pencarian indikasi fitur redundan dan potensi data leakage. Perhatikan kolom dengan korelasi sempurna (nilai 1.0 atau -1.0), fitur yang merupakan turunan langsung dari fitur lain, atau kolom identifier seperti ID yang tidak memiliki nilai prediktif namun bisa menyebabkan kebocoran informasi jika tidak dihapus tepat waktu sebelum split data. Selanjutnya, pada langkah kesebelas, lakukan evaluasi是否存在 class imbalance dengan menghitung proporsi masing-masing kelas dan rasio minoritas terhadap mayoritas. Ketidakseimbangan kelas akan memengaruhi metrik evaluasi dan strategi sampling, sehingga perlu didokumentasikan sejak dini sebagai dasar pemilihan loss function atau teknik resampling.

Pada langkah kedua belas, pastikan setiap visualisasi yang Anda buat memiliki tujuan eksplisit—pilih jenis plot yang secara langsung menjawab pertanyaan riset atau hipotesis awal Anda, hindari visualisasi dekoratif yang tidak menambah wawasan analitis. Langkah ketiga belas mewajibkan Anda mencatat minimal lima temuan utama dari seluruh proses EDA. Temuan ini bukan sekadar deskripsi statistik, melainkan insight yang berpotensi mengubah desain eksperimen, misalnya arah transformasi data, pemilihan algoritma, atau kebutuhan penanganan imbalance.

Berbasis temuan tersebut, langkah keempat belas menuntut perancangan strategi preprocessing yang terukur. Tentukan metode imputasi yang sesuai dengan mekanisme missingness (MCAR, MAR, atau MNAR), pilih teknik scaling standar atau robust tergantung sebaran data, tentukan encoding ordinal atau one-hot untuk variabel kategorikal, serta pertimbangkan transformasi non-linear jika asumsi normalitas dilanggar. Semua langkah ini kemudian diimplementasikan dalam langkah kelima belas menggunakan ekosistem scikit-learn. Manfaatkan `ColumnTransformer` untuk menerapkan operasi berbeda pada subset kolom numerik dan kategorikal secara paralel, bungkus dalam objek `Pipeline` agar urutan transformasi dan pelatihan model menjadi atomic dan reproducible, serta validasi menggunakan `cross_val_score` untuk memastikan estimasi performa yang stabil tanpa bias split data tunggal.

Terakhir, pada langkah keenambelas, bandingkan performa baseline model sederhana sebelum dan sesudah penerapan pipeline preprocessing. Perbedaan metrik seperti akurasi, F1-score, atau AUC akan memberikan bukti empiris mengenai efektivitas preprocessing Anda. Hasil perbandingan ini sekaligus menjadi fondasi bagi deliverable pada slide berikutnya, di mana setiap keputusan preprocessing harus didukung oleh evidence dari EDA, bukan asumsi semata.

### Inti yang Harus Ditekankan

- Analisis korelasi dan asosiasi harus dibedakan berdasarkan tipe data (numerik vs kategorikal) untuk menghindari interpretasi statistik yang keliru.
- Deteksi data leakage dan fitur redundan wajib dilakukan sebelum train-test split guna menjaga validitas eksternal eksperimen.
- Implementasi `Pipeline` dan `ColumnTransformer` di scikit-learn bukan hanya praktik terbaik coding, tetapi jaminan reproduktibilitas metodologi penelitian.
- Setiap keputusan preprocessing harus diturunkan secara deduktif dari temuan EDA, bukan berdasarkan heuristik atau asumsi umum.

### Transisi ke Slide Berikutnya

Dengan rangkaian tahapan 9 hingga 16 ini, fondasi eksperimental telah terbentuk secara sistematis. Mari kita lanjutkan ke slide berikutnya untuk membahas bagaimana mendokumentasikan seluruh proses tersebut menjadi deliverable praktis yang memenuhi standar penulisan akademik dan prinsip evidence-based decision making.

---

## Slide 040 - Output Praktikum 1

### Narasi

Pada slide ini, kita akan membahas secara spesifik apa saja yang menjadi deliverable akhir untuk Praktikum 1. Setelah melalui serangkaian tahapan eksplorasi, identifikasi masalah kualitas data, dan perancangan preprocessing pada slide sebelumnya, mahasiswa diharapkan mampu mengompilasi seluruh proses analisis menjadi sebuah laporan yang terstruktur, transparan, dan siap untuk dievaluasi secara akademis. Deliverable utama mencakup notebook EDA yang terdokumentasi dengan rapi, ringkasan karakteristik dataset dalam bentuk profil, serta kumpulan visualisasi utama yang secara langsung mendukung temuan-temuan Anda. Selain itu, diperlukan tabel khusus yang mendata masalah kualitas data seperti missing value, outlier, class imbalance, hingga fitur redundan atau potensi data leakage.

Salah satu poin krusial dalam praktikum ini adalah penyusunan daftar temuan EDA minimal lima butir. Setiap temuan tidak boleh hanya berupa deskripsi statistik biasa, melainkan harus dikaitkan secara eksplisit dengan implikasinya terhadap pemodelan. Untuk memastikan konsistensi dan kedalaman analisis, gunakan format standar yang telah disediakan: deskripsi temuan, dampak terhadap eksperimen, dan keputusan preprocessing yang diambil sebagai respons atas temuan tersebut. Keputusan preprocessing—mulai dari teknik imputasi, scaling, encoding, hingga transformasi variabel—harus disertai alasan yang jelas dan terukur. Di tingkat magister, kemampuan merasionalisasi setiap langkah preprocessing sama pentingnya dengan eksekusi teknisnya, karena hal ini mencerminkan ketelitian metodologis dalam penelitian data mining.

Output terakhir yang wajib disertakan adalah experimental pipeline yang reproducible menggunakan scikit-learn, seperti yang telah dibahas pada tahap pembuatan Pipeline dan cross_val_score. Prinsip fundamental yang mengatur seluruh praktikum ini adalah bahwa setiap keputusan analitik harus didukung oleh *evidence* nyata dari hasil EDA, bukan sekadar asumsi atau kebiasaan. Hal ini sejalan dengan standar validitas eksperimen dalam penelitian tingkat lanjut, di mana reliabilitas model dibangun di atas pemahaman mendalam terhadap karakteristik data sebelum algoritma apapun dilatih. Dengan menerapkan prinsip berbasis bukti ini, Anda akan meminimalkan bias manusia, menghindari data leakage, dan memastikan bahwa peningkatan performa model benar-benar berasal dari penanganan data yang tepat, bukan dari tuning parameter yang arbitrer.

### Inti yang Harus Ditekankan

- Kelengkapan dan keterstrukturkan deliverable menjadi cerminan profesionalisme dan kesiapan metodologis untuk penelitian tingkat magister.
- Setiap keputusan preprocessing wajib memiliki justifikasi yang diturunkan langsung dari temuan EDA, menolak penggunaan asumsi tanpa dasar empiris.
- Reproducibility pipeline dan dokumentasi kode yang rapi merupakan syarat mutlak untuk validasi eksperimen, review paper, dan pengembangan riset lanjutan.

### Transisi ke Slide Berikutnya

Untuk membantu Anda menyusun profil dataset secara sistematis dan efisien, pada slide berikutnya kita akan melihat contoh implementasi kode Python menggunakan library pandas untuk menghasilkan ringkasan statistik dan deteksi missing value secara otomatis, yang dapat langsung diadaptasi sebagai fondasi awal notebook EDA Anda.

---

## Slide 041 - Contoh Kode: Dataset Profiling

### Narasi

Setelah mendefinisikan struktur deliverable dan prinsip berbasis bukti pada slide sebelumnya, langkah konkret berikutnya adalah mengonversi prinsip tersebut menjadi skrip yang dapat direproduksi. Dataset profiling merupakan fondasi eksplorasi data yang mengubah observasi kualitatif menjadi metrik kuantitatif terstruktur. Dalam kode yang ditampilkan, kita mengimpor `pandas` dan `numpy` untuk manipulasi dataframe dan operasi numerik, kemudian memuat dataset dari file CSV menggunakan `pd.read_csv()`. Langkah awal pemeriksaan dilakukan melalui `df.shape` untuk mengetahui dimensi data dan `df.info()` yang memberikan ringkasan cepat mengenai tipe data setiap kolom serta jumlah nilai non-null.

Bagian inti dari profiling terletak pada pembuatan objek `profile` berupa DataFrame baru yang mengagregasi karakteristik kunci setiap fitur. Kolom `dtype` mencatat tipe data asli, `n_unique` menghitung kardinalitas untuk mengidentifikasi fitur kategorikal dengan variasi tinggi, sedangkan `n_missing` dan `missing_pct` mengukur kelengkapan data dalam bentuk absolut maupun persentase. Untuk aspek statistik, kita memanfaatkan `df.select_dtypes("number")` agar operasi `mean()` dan `std()` hanya dijalankan pada kolom numerik, menghindari error tipe data. Hasil pembulatan tiga desimal memastikan output tetap ringkas namun informatif saat dipresentasikan dalam laporan penelitian.

Tabel hasil profiling ini berfungsi sebagai baseline empiris yang menggantikan asumsi subjektif. Dengan melihat pola missing value, sebaran statistik, dan kardinalitas secara bersamaan, peneliti dapat merumuskan hipotesis awal mengenai kebutuhan transformasi atau penanganan anomali. Misalnya, kolom dengan `missing_pct` di atas ambang batas tertentu memerlukan strategi imputasi yang berbeda dibandingkan kolom yang hampir lengkap, sementara distribusi yang sangat miring dapat mengindikasikan perlunya transformasi logaritmik atau penanganan outlier sebelum masuk ke tahap pemodelan.

Proses profiling ini juga menekankan aspek reproducibility yang kritis dalam penelitian jenjang magister. Setiap baris kode dirancang modular sehingga dapat diintegrasikan ke dalam pipeline penelitian, memudahkan validasi ulang oleh reviewer atau kolaborator. Ketika temuan dari tabel profil ini telah terdokumentasi, kita siap bergerak ke tahap operasionalisasi penanganan data tersebut secara sistematis dan aman terhadap kebocoran informasi.

### Inti yang Harus Ditekankan

- Profiling dataset mengubah eksplorasi data dari pendekatan intuitif menjadi analisis berbasis metrik yang dapat diverifikasi dan direproduksi.
- Penggunaan `select_dtypes("number")` dan pembatasan operasi statistik hanya pada kolom numerik mencegah kesalahan tipe data dan menjaga integritas analisis.
- Tabel profil harus menjadi dokumen referensi utama yang menghubungkan temuan EDA dengan keputusan preprocessing, sesuai prinsip evidence-based research.
- Struktur kode ini siap diadaptasi menjadi fungsi reusable atau bagian dari notebook penelitian standar untuk konsistensi metodologi.

### Transisi ke Slide Berikutnya

Setelah karakteristik dataset terpetakan secara komprehensif melalui profil ini, langkah selanjutnya adalah menerjemahkan temuan tersebut menjadi aksi preprocessing yang terstruktur. Pada slide berikutnya, kita akan mengimplementasikan preprocessing pipeline menggunakan scikit-learn untuk menangani missing value, encoding kategorikal, dan scaling secara serentak, sekaligus memastikan tidak terjadi data leakage selama proses validasi silang.

---

## Slide 042 - Contoh Kode: Preprocessing Pipeline

### Narasi

Setelah pada slide sebelumnya kita menyelesaikan tahap dataset profiling untuk mengidentifikasi struktur, tipe data, dan pola missing value secara eksploratif, langkah logis berikutnya dalam alur kerja data mining adalah menerapkan preprocessing secara terstruktur dan reproducible. Slide ini memperkenalkan implementasi preprocessing pipeline menggunakan ekosistem scikit-learn, yang dirancang khusus untuk menangani heterogenitas fitur numerik dan kategorikal sekaligus menjaga integritas statistik selama proses validasi model.

Kode yang ditampilkan mendefinisikan pemisahan kolom menjadi `num_cols` (age dan income) dan `cat_cols` (city). Kita memanfaatkan `ColumnTransformer` sebagai wadah utama yang memetakan transformasi spesifik kepada setiap kelompok fitur. Untuk kolom numerik, pipeline pertama menerapkan `SimpleImputer` dengan strategi median guna meredam pengaruh outlier, dilanjutkan dengan `StandardScaler` untuk menstandarisasi distribusi data agar berkontribusi seimbang dalam algoritma berbasis jarak atau gradien. Di sisi lain, untuk kolom kategorikal, pipeline kedua menggunakan imputasi most_frequent, kemudian diteruskan oleh `OneHotEncoder` dengan parameter `handle_unknown="ignore"` agar pipeline tetap stabil saat menghadapi kategori baru yang belum pernah dilihat selama pelatihan.

Aspek paling kritis dalam implementasi ini adalah disiplin penggunaan `fit_transform` versus `transform`. Operasi `fit_transform` hanya diperbolehkan pada data training karena proses ini menghitung parameter statistik (seperti median, frekuensi, mean, dan standar deviasi) berdasarkan distribusi training set saja. Sebaliknya, data validation atau test hanya menerima operasi `transform` agar tidak terjadi data leakage, yaitu kebocoran informasi dari data uji yang secara tidak sah mempengaruhi proses pelatihan. Dengan membungkus preprocessor dan estimator, seperti `RandomForestClassifier`, ke dalam objek `Pipeline` tunggal, seluruh langkah preprocessing dan prediksi menjadi terenkapsulasi secara otomatis. Hal ini memungkinkan penggunaan `cross_val_score` yang secara transparan melakukan split, fit, dan transformasi secara terpisah untuk setiap fold, sehingga menghasilkan estimasi performa model yang jauh lebih realistis dan bebas bias optimisme.

Dari perspektif metodologi penelitian tingkat magister, penggunaan pipeline bukan sekadar praktik efisiensi kode, melainkan fondasi epistemologis untuk memastikan validitas internal eksperimen. Pendekatan ini meminimalkan risiko human error dalam urutan preprocessing, memudahkan replikasi eksperimen oleh reviewer, dan menyediakan baseline yang kokoh sebelum dilakukan tuning hyperparameter atau ablation study. Struktur pipeline ini akan menjadi komponen inti dalam proyek penelitian Anda minggu ini, di mana setiap keputusan preprocessing harus didokumentasikan, dipertanggungjawabkan berdasarkan temuan EDA awal, dan siap diintegrasikan ke dalam framework evaluasi ilmiah yang ketat.

### Inti yang Harus Ditekankan

- Pemisahan operasi `fit_transform` (hanya pada data training) dan `transform` (pada data validasi/test) adalah mekanisme fundamental untuk mencegah data leakage dan menjaga objektivitas evaluasi model.
- Penggunaan `Pipeline` dan `ColumnTransformer` mengenkapsulasi seluruh langkah preprocessing hingga prediksi, menjamin konsistensi urutan transformasi dan meningkatkan reproduktibilitas eksperimen.
- Pemilihan strategi imputasi (median vs most_frequent) dan scaler harus didasarkan pada karakteristik distribusi data yang telah diungkap melalui EDA, bukan dipilih secara arbitrer.
- Integrasi pipeline dengan `cross_val_score` memastikan bahwa setiap fold validasi silang mengalami preprocessing yang independen, sehingga menghasilkan metrik generalisasi yang akurat dan layak dilaporkan dalam publikasi ilmiah.

### Transisi ke Slide Berikutnya

Dengan pipeline preprocessing yang telah divalidasi secara metodologis, kita kini beralih ke bagaimana temuan EDA dan keputusan preprocessing ini diterjemahkan langsung ke dalam kerangka kerja proyek penelitian Anda. Pada slide berikutnya, kita akan membahas target konkret minggu kedua, mulai dari penentuan candidate problem dan dataset, hingga formulasi pertanyaan kunci yang akan mengarahkan pemilihan baseline dan desain eksperimen di pertemuan-pertemuan selanjutnya.

---

## Slide 043 - Menghubungkan EDA dengan Research Project

### Narasi

Pada slide ini, kita mengintegrasikan kegiatan Exploratory Data Analysis (EDA) secara langsung ke dalam kerangka metodologi penelitian Anda. Setelah pada slide sebelumnya kita membahas implementasi teknis preprocessing menggunakan `Pipeline` dan `ColumnTransformer` di scikit-learn untuk mencegah data leakage, kini kita beralih ke aspek strategis: bagaimana temuan EDA harus menjadi fondasi pengambilan keputusan dalam research project tingkat magister.

Untuk Minggu Kedua, target utama Anda adalah menentukan tiga elemen kunci secara simultan. Pertama, Anda harus menetapkan **candidate problem** yang spesifik, terukur, dan memiliki celah penelitian yang jelas. Kedua, pilih **candidate dataset** yang relevan secara domain dan teknis dengan masalah tersebut. Ketiga, lakukan **initial EDA atau dataset profiling** secara sistematis. Proses ini bukan sekadar latihan visualisasi deskriptif, melainkan langkah investigatif untuk memvalidasi kelayakan data sebelum masuk ke tahap pemodelan algoritmik.

Dalam melakukan initial EDA, Anda wajib menjawab empat pertanyaan kritis berikut:
- Apakah struktur, dimensi, dan tipe fitur dataset benar-benar cocok dengan research question awal? Jika terjadi mismatch, apakah perlu reformulasi hipotesis atau pencarian dataset alternatif?
- Apakah data memiliki masalah kualitas seperti missing values, outliers, atau noise yang masih dapat diatasi melalui teknik preprocessing yang tepat tanpa merusak distribusi alami data?
- Apakah ada indikasi data leakage, misalnya fitur yang secara tidak langsung mengandung informasi target atau kebocoran informasi dari masa depan, yang harus diidentifikasi dan disingkirkan sejak dini?
- Apakah distribusi data cukup representatif terhadap populasi target, atau是否存在 bias sampling yang akan menurunkan generalisasi model?

Luaran yang diharapkan dari sesi ini bersifat dokumentatif dan strategis. Anda harus menyusun dokumentasi karakteristik dataset secara lengkap, merangkum daftar temuan EDA awal beserta implikasi praktisnya, serta menyusun rencana awal mengenai strategi preprocessing dan desain eksperimen. Keputusan yang Anda ambil hari ini akan sangat menentukan arah penelitian. Sebagaimana terlihat pada kode pipeline sebelumnya, penanganan imputasi, scaling, dan encoding bergantung sepenuhnya pada pemahaman mendalam tentang distribusi dan tipe data yang muncul dari EDA.

Kaitannya dengan jadwal perkuliahan, temuan EDA ini akan menjadi bahan diskusi pada Minggu Ketiga untuk melakukan initial literature mapping dan related work, memastikan bahwa pendekatan Anda selaras dengan state-of-the-art. Pada Minggu Keempat, Anda akan memilih strong baseline yang sesuai dengan karakteristik data yang telah dipetakan. Ingat, setiap eksperimen pada pertemuan berikutnya sangat bergantung pada validitas dan konsistensi keputusan yang Anda buat berdasarkan EDA saat ini.

### Inti yang Harus Ditekankan

- EDA berfungsi sebagai jembatan ilmiah antara data mentah dan desain penelitian yang valid; jangan melewatkan tahap ini demi terburu-buru memilih model.
- Validasi kelayakan dataset (kecocokan dengan RQ, kualitas data, potensi leakage, dan representativitas) harus diselesaikan sebelum memilih algoritma atau metric evaluasi.
- Dokumentasi temuan EDA menjadi dasar objektif untuk merancang preprocessing pipeline yang bebas leakage dan merancang eksperimen yang reproducible.
- Keputusan metodologis pada tahap ini menentukan keberhasilan literature mapping, pemilihan baseline, dan eksekusi eksperimen di minggu-minggu berikutnya.

### Transisi ke Slide Berikutnya

Dengan pemahaman bahwa EDA telah membentuk pondasi metodologis penelitian Anda, mari kita lanjutkan ke rangkuman menyeluruh dari seluruh materi Pertemuan 02, termasuk bagaimana semua komponen ini bersatu dalam menjaga validitas eksperimental, serta arahan tugas untuk memulai praktikum dan penyusunan proposal awal penelitian Anda.

---

## Slide 044 - Kesimpulan Pertemuan 02

### Narasi

Pada akhir pertemuan kedua ini, kita menyimpulkan seluruh alur kerja yang telah dibahas mengenai Exploratory Data Analysis dan preprocessing data. Seperti yang telah dijabarkan pada slide sebelumnya, kegiatan ini bukan sekadar langkah administratif, melainkan proses ilmiah yang sistematis untuk memahami karakteristik data, mengidentifikasi masalah tersembunyi, serta merumuskan hipotesis awal sebelum memasuki tahap pemodelan. Tanpa fondasi pemahaman data yang kuat, risiko kesalahan metodologis akan meningkat drastis dan dapat menggugurkan validitas penelitian Anda.

Langkah pertama yang mutlak dilakukan adalah dataset profiling dan perhitungan descriptive statistics. Statistik deskriptif memberikan gambaran kuantitatif mengenai distribusi, tendensi sentral, varians, serta hubungan antarvariabel, sementara visualisasi berperan strategis dalam mengomunikasikan pola, tren, dan anomali yang sering kali terlewatkan oleh angka saja. Kombinasi keduanya memungkinkan peneliti mendeteksi skewness, outliers, missing values, hingga indikasi data leakage sejak dini. Temuan dari fase ini secara langsung akan memandu keputusan strategis Anda, mulai dari pemilihan algoritma, penentuan metrik evaluasi yang sesuai, strategi penanganan missing data, hingga desain eksperimen yang realistis.

Setelah identifikasi masalah selesai, preprocessing harus dirancang menggunakan pipeline yang ketat dan bebas dari information leakage. Kebocoran data, meskipun sering tidak disengaja, dapat menghasilkan performa model yang artifisial dan menyesatkan. Menjaga experimental validity sejak fase awal memastikan bahwa setiap transformasi data hanya memanfaatkan informasi yang seharusnya tersedia pada saat inference. Dokumentasi temuan EDA, daftar perbaikan yang diterapkan, serta justifikasi pemilihan metode harus ditulis secara transparan agar dapat dipertanggungjawabkan secara akademis dan direplikasi oleh peneliti lain.

Pesan utama yang perlu tertanam kuat adalah bahwa data yang dipahami dengan baik akan menghasilkan eksperimen yang lebih valid dan kontribusi ilmiah yang lebih kuat. Keputusan berbasis insight EDA menjadi pembeda antara praktik rekayasa biasa dengan penelitian tingkat magister yang rigor. Untuk melanjutkan pembelajaran minggu ini, silakan kerjakan Praktikum 1 dengan menerapkan seluruh konsep EDA dan preprocessing yang telah dibahas. Selain itu, mulai susun candidate problem dan candidate dataset untuk research project Anda. Pastikan Anda telah menjawab pertanyaan kunci terkait kesesuaian dataset dengan research question, kelayakan kualitas data, serta indikasi leakage yang perlu dihindari, sebagaimana target yang telah ditetapkan pada slide sebelumnya.

### Inti yang Harus Ditekankan

- EDA merupakan proses ilmiah, bukan sekadar latihan coding, yang berfungsi untuk memahami data, menemukan masalah, dan membangun hipotesis penelitian.
- Dataset profiling dan descriptive statistics adalah langkah wajib yang harus didokumentasikan sebagai dasar objektif pengambilan keputusan preprocessing.
- Pipeline preprocessing harus dirancang secara ketat untuk mencegah information leakage, sehingga menjaga experimental validity dan kredibilitas hasil penelitian.
- Insight dari EDA secara langsung menentukan arah pemilihan metode, metrik evaluasi, dan desain eksperimen yang tepat sasaran.

### Transisi ke Slide Berikutnya

Dengan kesimpulan ini, kita menutup rangkaian materi Pertemuan 02. Terima kasih atas perhatian dan partisipasi aktif selama sesi berlangsung. Pada pertemuan berikutnya, kita akan beralih ke topik baru yaitu Pattern Mining & Knowledge Discovery, di mana kita akan mempelajari bagaimana mengekstrak pola berulang dan pengetahuan tersimpan dari dataset yang telah siap diproses. Sampai jumpa di sesi berikutnya.

---

## Slide 045 - Penutup

### Narasi

Kita telah menyelesaikan pertemuan kedua ini dengan eksplorasi komprehensif mengenai Exploratory Data Analysis (EDA) dan Data Preprocessing, serta bagaimana kedua komponen tersebut berfungsi sebagai pondasi metodologis bagi experimental validity dalam penelitian data mining tingkat lanjut. Seperti yang telah kita paparkan sebelumnya, EDA bukanlah aktivitas teknis belaka atau sekadar rutinitas pembuatan grafik, melainkan sebuah proses ilmiah sistematis untuk memahami karakteristik intrinsik data, mendeteksi anomali, mengkuantifikasi missing value, serta merumuskan hipotesis awal sebelum memasuki tahap pemodelan algoritmik. Penggunaan dataset profiling dan descriptive statistics memberikan landasan empiris yang objektif, sementara teknik visualisasi berperan sebagai mekanisme komunikasi kritis untuk menerjemahkan pola kompleks menjadi insight yang dapat ditindaklanjuti.

Dalam konteks penelitian magister, kedalaman pemahaman data harus selalu diimbangi dengan disiplin tinggi dalam membangun pipeline preprocessing yang ketat dan bebas dari data leakage. Setiap transformasi, imputasi, scaling, atau encoding harus diterapkan secara terpisah antara train dan test set guna menjaga integritas evaluasi model. Validitas eksperimen harus dijaga sejak fase paling awal karena setiap keputusan strategis dalam EDA dan preprocessing akan berimbas langsung pada pemilihan algoritma, konfigurasi metrik evaluasi, desain ablation study, serta interpretasi signifikansi statistik hasil akhir. Data yang dipahami dengan rigor akan menghasilkan eksperimen yang lebih robust, reproducible, dan memiliki daya kontribusi ilmiah yang kuat.

Sebagai tindak lanjut, kerjakan Praktikum 1 secara menyeluruh dengan mendokumentasikan setiap temuan EDA, tantangan preprocessing, dan justifikasi metodologis yang Anda ambil. Mulai susun candidate problem dan candidate dataset untuk research project Anda, karena catatan eksplorasi awal ini akan menjadi baseline empiris yang esensial untuk penyusunan proposal penelitian dan penentuan research gap. Terima kasih atas fokus dan kontribusi aktif Anda selama sesi pembelajaran hari ini.

### Inti yang Harus Ditekankan

- EDA adalah proses ilmiah fundamental yang menentukan arah, desain, dan kredibilitas seluruh pipeline penelitian data mining.
- Preprocessing wajib diimplementasikan dalam pipeline yang terisolasi untuk mencegah data leakage dan menjaga experimental validity.
- Kualitas pemahaman data berkorelasi langsung dengan validitas eksperimen, reproduktibilitas hasil, dan potensi kontribusi ilmiah.
- Dokumentasi EDA dan penyusunan candidate problem/dataset merupakan langkah praktis wajib menuju penelitian mandiri tingkat magister.

### Transisi ke Slide Berikutnya

Pada pertemuan berikutnya, kita akan melangkah dari fase pemahaman dan persiapan data ke tahap inti penambangan informasi, yaitu Pattern Mining & Knowledge Discovery. Di sana, kita akan mempelajari bagaimana algoritma dapat mengekstrak struktur tersembunyi, hubungan asosiatif, dan aturan pola menarik dari data yang telah divalidasi, serta bagaimana temuan tersebut dikuantifikasi dan diterjemahkan menjadi knowledge yang actionable dan siap dikembangkan menjadi kontribusi akademis. Sampai jumpa di pertemuan berikutnya.
