# Narasi TD Data Mining - Pertemuan 05

## Ensemble Learning & Gradient Boosting

Sumber: markdown/pert05-ensemble-learning-gradient-boosting.md

---

## Slide 000 - Cover

### Narasi

Pertemuan kelima ini menempatkan kita pada salah satu fondasi paling dominan dalam praktik data mining kontemporer, khususnya untuk pemodelan supervised learning pada struktur data tabular: Ensemble Learning dan Gradient Boosting. Pada tingkat magister, pembahasan topik ini tidak berhenti pada tataran penggunaan library atau tuning hyperparameter semata, melainkan menuntut pemahaman mendalam mengenai mekanisme reduksi error melalui penggabungan model. Framework ensemble mengubah paradigma dari pencarian satu model optimal tunggal menjadi konstruksi kolektif di mana kelemahan satu estimator dikompensasi oleh kekuatan estimator lainnya. Pendekatan ini secara matematis terbukti mampu menekan varians tanpa mengorbankan bias secara signifikan, sehingga menghasilkan generalisasi yang lebih stabil pada data uji.

Gradient Boosting muncul sebagai evolusi strategis dari metode ensemble awal seperti Bagging dan Random Forest. Berbeda dengan pendekatan paralel, Gradient Boosting beroperasi secara sekuensial dengan melatih setiap pohon keputusan berikutnya untuk memperbaiki residual kesalahan prediksi dari iterasi sebelumnya. Proses ini pada dasarnya merupakan penerapan gradient descent pada ruang fungsi prediktor, di mana fungsi loss diminimalkan langkah demi langkah. Variasi modern seperti XGBoost, LightGBM, dan CatBoost kemudian menyempurnakan kerangka kerja ini dengan penambahan regularisasi, histogram-based splitting, dan penanganan native terhadap missing value, sehingga menjadikannya pilihan utama baik dalam kompetisi data science maupun riset akademis yang mensyaratkan baseline kuat dan reproducible.

Memahami arsitektur dan filosofi di balik teknik-teknik ini menjadi prasyarat metodologis untuk tahap penelitian selanjutnya. Ketika kita memasuki fase perancangan eksperimen, pemilihan ensemble method harus didasarkan pada analisis trade-off antara kompleksitas komputasi, interpretabilitas, dan robustness terhadap noise. Materi ini juga menyiapkan landasan konseptual untuk diskusi lanjutan mengenai advanced tabular learning, otomatisasi pipeline model, serta evaluasi performa yang ketat sesuai standar publikasi internasional.

### Inti yang Harus Ditekankan

- Ensemble Learning adalah strategi sistematik untuk menurunkan error total melalui dekomposisi bias dan varians, bukan sekadar penggabungan model acak.
- Gradient Boosting bekerja dengan prinsip iterative residual correction dan gradient descent pada loss function, menjadikannya sangat efektif untuk pola non-linear pada data tabular.
- XGBoost, LightGBM, dan CatBoost masing-masing menawarkan optimasi spesifik: regularisasi L1/L2, leaf-wise growth dengan histogram binning, dan categorical feature handling, yang harus dipilih sesuai karakteristik dataset dan constraint komputasi.
- Penguasaan konsep ini wajib untuk membangun strong baseline yang valid dalam penelitian jenjang magister dan menjadi rujukan utama saat melakukan ablation study atau perbandingan model.

### Transisi ke Slide Berikutnya

Untuk memetakan posisi materi ini dalam roadmap perkuliahan serta melihat keterkaitan logisnya dengan fondasi klasifikasi yang telah dibahas sebelumnya dan rencana eksplorasi lanjutan, mari kita tinjau peta perkuliahan dan alur pembelajaran yang telah disusun.

---

## Slide 001 - Peta Perkuliahan dan Alur Menuju Pertemuan 05

### Narasi

Pada slide ini, kita akan melihat posisi Pertemuan 05 dalam Rencana Pembelajaran Semester (RPS) serta alur keterkaitan materi yang telah disusun secara sistematis untuk jenjang magister. Seperti terlihat pada tabel, Pertemuan 04 berfokus pada Classification, Regression, dan penguatan *strong baselines* menggunakan model klasik seperti Logistic Regression, Support Vector Machine, Decision Tree, dan Random Forest. Langkah ini sengaja dirancang sebagai fondasi eksperimen yang kuat sebelum memasuki teknik yang lebih kompleks. Pertemuan 05, yang sedang kita bahas sekarang, secara spesifik memperdalam konsep *Ensemble Learning*, dengan penekanan utama pada **Gradient Boosting** dan berbagai implementasi industrinya seperti XGBoost, LightGBM, dan CatBoost. Setelah pemahaman tentang boosting terbangun, Pertemuan 06 akan mengalihkan fokus ke arah *Clustering & Unsupervised Data Mining*, menandai transisi terstruktur dari paradigma *supervised* menuju *unsupervised*.

Alur keterkaitan ini bukan sekadar urutan topik, melainkan sebuah metodologi penelitian yang terencana. Pemahaman mendalam mengenai Gradient Boosting dan framework turunannya menjadi bekal krusial untuk diskusi pada Pertemuan 09 mengenai *advanced tabular learning* dan Pertemuan 10 tentang *AutoML*. Dalam konteks penelitian tingkat S2, kemampuan mengimplementasikan dan membandingkan model ensemble berbasis boosting adalah standar mutlak untuk membangun *baseline* yang kompetitif pada data tabular. Model-model ini tidak hanya mendominasi kompetisi data science, tetapi juga menjadi arsitektur default dalam banyak aplikasi industri karena kemampuannya menangani heterogenitas fitur, *missing values*, dan interaksi non-linear secara efisien tanpa memerlukan transformasi fitur yang berlebihan. Dengan menguasai materi pertemuan ini, mahasiswa akan memiliki kerangka kerja yang solid untuk merancang eksperimen perbandingan metode yang adil, terukur, dan siap dikembangkan menjadi kontribusi ilmiah.

### Inti yang Harus Ditekankan

- Posisi Pertemuan 05 berfungsi sebagai jembatan metodologis antara model klasikal (*strong baseline*) dan teknik ensemble modern yang mendominasi pemrosesan data tabular.
- Gradient Boosting beserta varian industrinya (XGBoost, LightGBM, CatBoost) harus dipahami secara konseptual maupun praktis sebagai fondasi eksperimen tingkat lanjut.
- Alur perkuliahan dirancang agar pemahaman ensemble menjadi prasyarat logis dan teknis untuk topik *advanced tabular learning* serta *AutoML* di minggu-minggu berikutnya.
- Penekanan riset: penguasaan teknik ensemble diperlukan untuk menciptakan perbandingan eksperimen yang valid, reproducible, dan memenuhi standar publikasi internasional.

### Transisi ke Slide Berikutnya

Untuk memastikan pemahaman kita tentang mengapa pendekatan ensemble ini begitu vital dalam praktik penelitian, mari kita telaah kembali konsep *strong baseline* dan bagaimana ia menjadi landasan utama dalam desain eksperimen data mining yang rigor.

---

## Slide 002 - Recap: Strong Baseline sebagai Fondasi Eksperimen

### Narasi

Pada peta perkuliahan yang telah kita bahas sebelumnya, pertemuan ini menempati posisi strategis sebagai kelanjutan langsung dari fondasi klasifikasi dan regresi yang dibangun pada pertemuan keempat. Dalam ekosistem penelitian data mining tingkat magister, validitas sebuah klaim ilmiah tidak pernah berdiri sendiri; ia selalu bergantung pada kerangka perbandingan yang adil dan terkontrol. Ketika kita mengajukan kontribusi metodologis baru, peningkatan performa yang dilaporkan hanya akan memiliki bobot akademis jika dibandingkan dengan baseline yang telah dioptimalkan secara ketat dan wajar. Sebuah klaim inovasi sering kali kehilangan kredibilitasnya ketika metrik evaluasi tidak didasarkan pada pembanding yang representatif, melainkan pada model standar yang dibiarkan tanpa penyetelan parameter atau preprocessing yang memadai.

Masalah umum yang sering terjadi dalam praktik eksperimen adalah penggunaan baseline yang lemah, yang secara tidak sadar menciptakan bias konfirmasi. Ketika baseline tidak dituning secara optimal, metode baru cenderung tampak superior secara artifisial. Keunggulan tersebut sebenarnya bukan berasal dari arsitektur atau mekanisme pembelajaran yang lebih canggih, melainkan murni akibat ketidakseimbangan dalam proses tuning dan evaluasi. Oleh karena itu, standarisasi experimental pipeline menjadi prasyarat mutlak. Kualitas input data, penanganan missing value, normalisasi, encoding kategorikal, serta strategi validasi silang secara langsung menentukan batas atas performa yang bisa dicapai oleh model manapun. Tanpa kontrol ketat terhadap variabel-variabel ini, reproduktibilitas hasil penelitian akan sulit dipertanggungjawabkan.

Sebagai ringkasan dari pertemuan empat, model-model klasik seperti Random Forest, Support Vector Machine, dan Logistic Regression tetap bertahan sebagai strong classical baseline yang sangat kompetitif, terutama pada domain data tabular. Kekuatan mereka tidak terletak pada kesederhanaan, melainkan pada stabilitas dan ketahanan terhadap overfitting ketika dipadukan dengan pipeline preprocessing yang konsisten. Pertemuan kali ini secara eksplisit memperdalam salah satu pilar utama dari strong baseline tersebut, yaitu ensemble learning. Pendekatan ini tidak lagi mengandalkan satu estimator tunggal, melainkan memanfaatkan agregasi keputusan dari banyak model untuk menekan varians dan meningkatkan generalisasi, sehingga menjadikannya senjata utama dalam membangun benchmark yang tangguh untuk eksperimen tabular modern.

Pembahasan ini juga dirancang agar selaras sepenuhnya dengan Capaian Pembelajaran Mata Kuliah (CPMK) yang menjadi acuan akademik kita. CPMK-1 menuntut penguasaan konsep dan metode data mining, di mana ensemble learning dipahami sebagai evolusi sistematis dari single-model classifiers. CPMK-4 menekankan rancangan eksperimen yang valid dan reproducible; penggunaan strong baseline memastikan bahwa setiap metrik dapat dilacak, diulang, dan divalidasi lintas studi. Sementara itu, CPMK-5 mengarahkan mahasiswa untuk mengevaluasi dan membandingkan metode berdasarkan dimensi performa dan kompleksitas komputasi, yang akan menjadi parameter kritis saat kita menguji trade-off antara akurasi ensemble versus beban inferensi di tahap berikutnya.

### Inti yang Harus Ditekankan

- Validitas penelitian data mining sangat bergantung pada fairness comparison; klaim inovasi hanya sah jika dibandingkan dengan baseline yang dioptimalkan secara ketat.
- Baseline yang lemah atau tidak dituning seimbang menciptakan ilusi performa dan merusak integritas eksperimen serta reproduktibilitas hasil.
- Random Forest, SVM, dan Logistic Regression tetap menjadi benchmark kuat pada data tabular, namun kekuatannya sangat bergantung pada konsistensi preprocessing dan experimental pipeline.
- Ensemble learning diperkenalkan sebagai langkah natural untuk memperkuat baseline tabular, sekaligus menjadi jembatan metodologis menuju topik advanced tabular learning dan AutoML di pertemuan mendatang.
- Seluruh diskusi ini berorientasi pada CPMK-1, CPMK-4, dan CPMK-5, yang menekankan penguasaan konsep, desain eksperimen yang reproducible, serta analisis trade-off performa dan kompleksitas.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa strong baseline menjadi pondasi wajib dalam setiap eksperimen data mining, kita kini akan beralih ke mekanisme bagaimana baseline tersebut dibangun secara kolektif. Pada slide berikutnya, kita akan membedah konsep dasar ensemble learning, mulai dari prinsip diversitas model, cara kerja voting dan averaging, hingga tiga paradigma utama ensemble: bagging, boosting, dan stacking, yang akan menjadi landasan teknis untuk membahas gradient boosting dan turunannya di slide-slide selanjutnya.

---

## Slide 003 - Konsep Dasar Ensemble Learning

### Narasi

Pada slide ini, kita membahas fondasi konseptual dari *Ensemble Learning*. Secara definisi, pendekatan ini merupakan teknik yang menggabungkan prediksi dari beberapa model individu untuk menghasilkan satu keputusan atau estimasi akhir. Tujuan utamanya adalah menutupi kelemahan intrinsik yang sering dimiliki oleh model tunggal, seperti sensitivitas terhadap noise, kecenderungan *overfitting*, atau batasan kapasitas representasi. Ilustrasi pada slide menggambarkan alur data yang diproses secara paralel oleh tiga model berbeda, kemudian keluarannya disatukan melalui mekanisme kombinasi sebelum menjadi prediksi final. Dalam konteks penelitian data mining tingkat magister, mekanisme ini bukan sekadar praktik teknis, melainkan strategi metodologis yang terukur untuk meningkatkan stabilitas dan daya generalisasi sistem prediktif.

Agar penggabungan model memberikan peningkatan performa yang signifikan, terdapat dua prinsip utama yang harus terpenuhi. Pertama, model-model yang digabungkan sebaiknya bersifat beragam (*diverse*). Keragaman ini dapat dicapai melalui penggunaan algoritma berbeda, variasi subset fitur, atau sampling data yang tidak seragam selama proses pelatihan. Kedua, kesalahan (*error*) yang dihasilkan oleh masing-masing model sebaiknya tidak saling berkorelasi. Jika semua model gagal pada pola data yang sama, agregasi mereka hanya akan mengkonsolidasikan kesalahan tersebut. Kombinasi hasil prediksi umumnya dilakukan melalui mekanisme *voting* majority untuk tugas klasifikasi, *averaging* aritmatik untuk regresi, atau penjumlahan tertimbang (*weighted combination*) ketika tingkat kepercayaan terhadap kinerja tiap model tidak setara.

Dari perspektif paradigma, terdapat tiga pendekatan utama yang mendominasi literatur dan praktik industri. *Bagging* melatih model-model secara paralel menggunakan sampel bootstrap dari dataset asli, dan secara teoretis terbukti efektif menurunkan *variance*, sehingga sangat ideal untuk model yang kompleks dan rentan *overfit*. *Boosting* melatih model secara sekuensial di mana setiap iterasi berfokus pada perbaikan kesalahan prediksi dari tahap sebelumnya; pendekatan ini secara agresif menekan *bias*, namun memerlukan kontrol ketat agar tidak terjebak *overfitting* pada *noise*. Terakhir, *Stacking* memanfaatkan sebuah meta-model untuk mempelajari pola optimal dalam menggabungkan keluaran dari berbagai model heterogen, sehingga mampu mengeksploitasi kekuatan komplementer masing-masing algoritma. Pemahaman atas ketiga paradigma ini menjadi landasan kritis untuk merancang eksperimen yang adil, sekaligus memperkuat posisi *ensemble* sebagai *strong baseline* yang wajib diuji sebelum mengajukan kontribusi metodologis baru.

### Inti yang Harus Ditekankan

- Keberhasilan ensemble bergantung pada diversitas model dan ketidak-korelasian error antar model, bukan sekadar menambah jumlah model.
- Setiap paradigma memiliki target optimasi error yang spesifik: Bagging menargetkan penurunan varians, Boosting menargetkan penurunan bias, sedangkan Stacking bertujuan mengintegrasikan keunggulan model heterogen.
- Mekanisme ensemble harus dipahami secara matematis dan metodologis sebagai fondasi eksperimental, karena implementasinya secara langsung memengaruhi validitas perbandingan performa dalam penelitian data mining.

### Transisi ke Slide Berikutnya

Dengan memahami bagaimana masing-masing paradigma bekerja secara kualitatif, langkah selanjutnya adalah membedah dampak teknisnya terhadap komponen error model secara kuantitatif. Mari kita lanjutkan ke pembahasan mengenai *bias-variance tradeoff* dan bagaimana ensemble secara spesifik memanipulasi keseimbangan tersebut dalam praktiknya.

---

## Slide 004 - Bias-Variance Tradeoff dan Peran Ensemble

### Narasi

Memahami dekomposisi error merupakan fondasi analitis yang wajib dikuasai sebelum merancang eksperimen berbasis ensemble. Secara matematis, total error dari sebuah model dapat diuraikan menjadi tiga komponen independen: Total Error = Bias² + Variance + Noise. Komponen Bias² mencerminkan kesalahan sistematis akibat asumsi model yang terlalu restriktif sehingga gagal menangkap hubungan nonlinier atau pola kompleks dalam data, yang secara operasional disebut sebagai underfitting. Variance mengukur seberapa besar variasi prediksi model ketika dilatih pada subset data yang berbeda; model yang sangat fleksibel cenderung memiliki varians tinggi karena sensitif terhadap fluktuasi acak pada data latih. Sementara itu, Noise merepresentasikan ketidakpastian intrinsik dalam distribusi data yang tidak dapat dipelajari oleh algoritma manapun. Dalam konteks penelitian data mining tingkat magister, kerangka ini menjadi dasar objektif untuk melakukan diagnosis model, merumuskan hipotesis perbaikan arsitektur, dan menghindari penumpukan algoritma tanpa justifikasi teoretis.

Berdasarkan tabel yang disajikan, setiap paradigma ensemble memiliki target optimisasi error yang berbeda secara spesifik. Strategi Bagging bekerja dengan melatih banyak model identik secara paralel pada sampel bootstrap yang berbeda, kemudian menggabungkan prediksinya melalui voting atau averaging. Secara statistik, rata-rata dari variabel acak yang tidak saling berkorelasi akan menurunkan varians keseluruhan, sehingga Bagging efektif menekan komponen Variance tanpa mengubah bias secara signifikan. Di sisi lain, Boosting melatih model secara sekuensial di mana setiap iterasi memberikan bobot lebih pada observasi yang salah diprediksi oleh model sebelumnya. Mekanisme koreksi bertahap ini secara agresif menekan komponen Bias, menjadikannya pilihan utama untuk model dasar yang cenderung underfitting. Kombinasi model heterogen seperti Stacking atau Voting juga berpotensi mengurangi kedua jenis error sekaligus, namun keberhasilannya sangat bergantung pada kualitas meta-pembelajar dan komplementaritas fitur antar model.

Implikasi praktis dari tradeoff ini sangat krusial dalam desain eksperimen dan validasi model. Struktur model dengan varians tinggi, seperti decision tree yang tumbuh sangat dalam atau k-nearest neighbors dengan tetangga sedikit, akan mendapatkan manfaat maksimal dari teknik Bagging. Sebaliknya, model linear atau shallow tree yang mengalami underfitting lebih responsif terhadap mekanisme Boosting. Perlu ditekankan bahwa noise bersifat irreducible; ensemble bukan alat penghilang noise, melainkan mekanisme stabilisasi dan koreksi bias. Jika kompleksitas ensemble tidak dikontrol dengan ketat—misalnya melalui jumlah estimator yang berlebihan, depth yang tidak dibatasi, atau learning rate yang tidak dituning—model tetap rentan terhadap overfitting meskipun menggunakan pendekatan ensemble. Oleh karena itu, pemilihan metode harus selalu didasari oleh analisis diagnostik error dan bukti empiris, bukan sekadar adopsi algoritma populer.

### Inti yang Harus Ditekankan

- Dekomposisi error (Bias² + Variance + Noise) adalah kerangka diagnosa wajib untuk mengidentifikasi apakah model mengalami underfitting, overfitting, atau terpengaruh noise, sebelum memutuskan strategi ensemble.
- Bagging secara teoretis menargetkan reduksi Variance melalui averaging model paralel, sedangkan Boosting menargetkan reduksi Bias melalui koreksi error sekuensial; keduanya tidak interchangeable tanpa mempertimbangkan karakteristik model dasar.
- Noise bersifat irreducible, dan ensemble yang tidak dikontrol kompleksitasnya tetap dapat overfit; validasi silang, early stopping, dan ablation study mutlak diperlukan dalam riset tingkat magister.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana Bagging secara spesifik berperan menekan varians melalui agregasi model paralel, kita akan mendalami mekanisme teknis Bootstrap Aggregating, mulai dari proses sampling dengan pengembalian, pelatihan paralel, hingga strategi aggregasi voting dan averaging yang menentukan stabilitas prediksi akhir. Mari lanjutkan ke pembahasan langkah-langkah implementasi Bagging.

---

## Slide 005 - Bagging: Bootstrap Aggregating

### Narasi

Setelah memetakan hubungan matematis antara bias, varians, dan noise pada slide sebelumnya, kita kini mengupas mekanisme ensemble learning yang secara eksplisit dirancang untuk menekan komponen varians, yaitu Bagging atau Bootstrap Aggregating. Prosedur ini dimulai dengan pengambilan *bootstrap sample* dari dataset pelatihan. Sampling dilakukan secara acak dengan pengembalian (*with replacement*), yang memungkinkan suatu observasi muncul lebih dari sekali dalam satu sampel, sementara observasi lain mungkin terlewat sepenuhnya. Setiap sampel bootstrap kemudian digunakan untuk melatih model *base learner* secara independen. Karena tidak ada ketergantungan antar-iterasi pelatihan, seluruh proses dapat dieksekusi secara paralel, menjadikan arsitektur ini sangat efisien secara komputasi. Setelah fase pelatihan selesai, prediksi dari seluruh model digabungkan melalui agregasi: untuk tugas klasifikasi, sistem menggunakan *voting* mayoritas, sedangkan untuk regresi, hasil akhir diperoleh melalui *averaging* atau rata-rata aritmatika dari seluruh prediksi model.

Efektivitas Bagging berakar pada prinsip statistik bahwa rata-rata dari variabel acak yang tidak berkorelasi sempurna akan memiliki varians yang lebih rendah daripada varians individualnya. Model yang sering kali memiliki varians tinggi, seperti pohon keputusan yang tumbuh bebas hingga mencapai kedalaman maksimal, sangat rentan terhadap fluktuasi data. Dengan merata-ratakan prediksi dari banyak model yang dilatih pada distribusi bootstrap yang berbeda, fluktuasi acak tersebut cenderung saling meniadakan, sehingga varians keseluruhan menurun drastis. Namun, penting untuk dicatat bahwa perbaikan ini hanya terjadi jika terdapat keragaman antar-model. Jika semua model identik atau menghasilkan prediksi yang sangat berkorelasi, agregasi tidak akan memberikan penurunan varians yang signifikan. Diversitas justru lahir dari variasi struktur data yang terbentuk secara alami dari proses bootstrap itu sendiri.

Secara karakteristik, Bagging menawarkan stabilitas prediktif yang lebih robust terhadap perubahan kecil pada data latih karena hasilnya bersifat kolektif dan tidak bergantung pada satu titik data tunggal. Meskipun demikian, Bagging tidak secara inheren menurunkan bias. Jika model dasar sudah memiliki bias tinggi akibat *underfitting*, menggabungkan banyak model serupa hanya akan menghasilkan agregat yang tetap underfit. Oleh karena itu, Bagging paling tepat diaplikasikan pada model yang cenderung overfit atau memiliki varians tinggi. Prinsip agregasi bootstrap inilah yang menjadi landasan teoritis bagi pengembangan algoritma ensemble modern, termasuk pendekatan yang akan kita bahas pada slide berikutnya, yaitu Random Forest, yang mengintegrasikan mekanisme Bagging dengan teknik diversifikasi berbasis fitur untuk menciptakan baseline yang sangat kuat.

### Inti yang Harus Ditekankan

- Bagging secara spesifik menargetkan reduksi varians, bukan bias, sehingga paling efektif untuk model dasar yang rentan overfit seperti decision tree.
- Keragaman antar-model adalah syarat mutlak; tanpa perbedaan distribusi data akibat bootstrap, agregasi tidak akan menurunkan varians secara meaningful.
- Mekanisme voting untuk klasifikasi dan averaging untuk regresi memastikan prediksi akhir lebih stabil dan kurang sensitif terhadap noise lokal.
- Sifat paralelisasi membuat Bagging skalabel untuk dataset besar dan komputasi intensif, serta lebih stabil terhadap fluktuasi data dibanding model tunggal.

### Transisi ke Slide Berikutnya

Dengan memahami bagaimana Bagging memanfaatkan bootstrap dan agregasi untuk menstabilkan model, kita dapat melihat evolusi logisnya menuju Random Forest. Pada slide berikutnya, kita akan mengkaji bagaimana penambahan seleksi fitur acak pada setiap split pohon keputusan mengubah Bagging standar menjadi salah satu baseline terkuat dalam pembelajaran mesin tabular, lengkap dengan analisis hyperparameter kunci dan alasan metodologis penggunaannya sebagai benchmark penelitian.

---

## Slide 006 - Random Forest: Peran Ensemble dalam Baseline

### Narasi

Lanjut dari konsep Bagging pada slide sebelumnya, Random Forest merupakan evolusi langsung dari teknik Bootstrap Aggregating yang memperluas keragaman antar model. Pada Random Forest, setiap pohon keputusan tetap dilatih menggunakan bootstrap sample dari data latih, namun terdapat modifikasi krusial pada proses splitting. Alih-alih mempertimbangkan seluruh fitur untuk mencari pemisahan terbaik, setiap node hanya mengevaluasi subset fitur yang dipilih secara acak. Mekanisme ini memastikan bahwa pohon-pohon dalam ensemble menjadi lebih independen satu sama lain, sehingga mengurangi korelasi antar prediksi. Hasil akhir diperoleh melalui agregasi sederhana berupa majority vote untuk tugas klasifikasi atau rata-rata aritmatik untuk regresi.

Kinerja Random Forest sangat bergantung pada pengaturan beberapa hiperparameter kunci yang perlu dipahami secara mendalam, terutama dalam konteks penelitian tingkat magister. Parameter `n_estimators` menentukan jumlah pohon dalam hutan; peningkatan nilai ini umumnya meningkatkan stabilitas model dan mengurangi varians, meskipun memberikan diminishing return setelah titik tertentu. Parameter `max_features` mengontrol seberapa banyak fitur yang dievaluasi saat melakukan split, berfungsi sebagai tuas utama untuk mendiversifikasi pohon dan menyeimbangkan trade-off antara bias dan varians. Sementara itu, `min_samples_leaf` bertindak sebagai regularisasi struktural yang mencegah pohon tumbuh terlalu dalam, sehingga secara efektif menekan risiko overfitting pada noise dalam dataset.

Dalam metodologi penelitian data mining, Random Forest sering dijadikan baseline kuat karena kombinasi efisiensi dan robustness-nya. Model ini cukup stabil bahkan dengan tuning hiperparameter yang minimal, menjadikannya titik awal yang andal sebelum eksperimen kompleks dilakukan. Secara praktis, algoritma ini mampu menangani campuran fitur numerik dan kategorikal (setelah encoding yang tepat) tanpa memerlukan standarisasi skala yang ketat. Selain performa prediktif, Random Forest juga menyediakan metrik feature importance secara bawaan, yang sangat berharga untuk analisis eksploratif awal dan justifikasi pemilihan variabel dalam paper penelitian.

### Inti yang Harus Ditekankan

- Random Forest menggabungkan prinsip Bagging dengan seleksi fitur acak per split untuk menurunkan korelasi antar pohon dan meningkatkan generalisasi.
- Hiperparameter `n_estimators`, `max_features`, dan `min_samples_leaf` secara bersama-sama mengatur stabilitas, diversifikasi model, dan pencegahan overfitting.
- Keunggulan sebagai baseline terletak pada ketahanan terhadap tuning, kemampuan menangani berbagai tipe fitur, serta ketersediaan feature importance untuk analisis awal.

### Transisi ke Slide Berikutnya

Meskipun Random Forest berhasil menekan varians melalui pendekatan paralel seperti Bagging, pendekatan tersebut memiliki batas inherent dalam mengurangi bias. Untuk mengatasi keterbatasan ini dan secara sistematis memperbaiki kesalahan prediksi, kita akan beralih ke mekanisme pelatihan yang berbeda secara fundamental, yaitu Boosting, yang akan dibahas pada slide berikutnya.

---

## Slide 007 - Boosting: Konsep Dasar

### Narasi

Setelah membahas Random Forest sebagai representasi kuat dari metode ensemble berbasis bagging pada slide sebelumnya, kita kini beralih ke paradigma ensemble lainnya yang memiliki filosofi dan mekanisme berbeda, yaitu boosting. Berbeda dengan bagging yang melatih banyak model secara independen dan paralel untuk kemudian menggabungkan hasilnya guna mengurangi varians, boosting bekerja secara sekuensial. Setiap model dalam rangkaian boosting tidak dilatih pada dataset yang sama persis tanpa modifikasi, melainkan secara bertahap difokuskan pada kesalahan prediksi yang dihasilkan oleh model-model pendahulunya.

Secara konseptual, perbedaan mendasar antara kedua pendekatan ini dapat dilihat dari tiga aspek utama. Pertama, dari sisi pelatihan, bagging bersifat paralel sehingga setiap pohon keputusan dapat dibangun secara bersamaan, sedangkan boosting bersifat sekuensial karena model ke-n hanya bisa dimulai setelah model ke-(n-1) selesai dievaluasi. Kedua, dari segi tujuan optimasi, bagging terutama bertujuan menurunkan varians model agar lebih stabil terhadap fluktuasi data training, sementara boosting berfokus pada pengurangan bias dengan terus memperbaiki area prediksi yang masih meleset. Ketiga, dalam hal pembelajaran, setiap model bagging belajar dari distribusi data awal yang identik, whereas dalam boosting, setiap iterasi model baru secara eksplisit mempelajari pola kesalahan atau residual dari model sebelumnya.

Alur kerja boosting dapat divisualisasikan sebagai proses koreksi bertahap. Data training pertama kali dilewatkan ke model dasar, biasanya decision tree dangkal (stump). Model ini menghasilkan prediksi, lalu sistem menghitung kesalahan atau residualnya. Informasi kesalahan inilah yang menjadi input utama untuk melatih model berikutnya. Proses berulang hingga jumlah model tertentu tercapai, dan akhirnya seluruh model digabungkan menjadi satu prediktor final yang jauh lebih akurat.

Dua prinsip kunci mendominasi mekanisme boosting. Pertama, prioritas pembelajaran dialihkan secara dinamis ke sampel-sampal yang sulit diprediksi atau sering salah diklasifikasikan oleh model sebelumnya. Dengan demikian, upaya komputasi tidak terdistribusi merata, melainkan terkonsentrasi pada bagian ruang fitur yang paling ambigu. Kedua, hasil akhir bukan sekadar rata-rata atau voting mayoritas seperti pada bagging, melainkan merupakan kombinasi linear berbobot. Model yang performanya lebih baik akan mendapat bobot kontribusi yang lebih besar dalam pengambilan keputusan final, sementara model yang kurang akurat perannya diminimalkan.

### Inti yang Harus Ditekankan

- Boosting bekerja secara sekuensial dan berfokus pada reduksi bias, berbeda dengan bagging yang paralel dan menargetkan reduksi varians.
- Setiap model baru secara eksplisit mempelajari kesalahan/residual dari model pendahulunya, membentuk alur koreksi bertahap yang terstruktur.
- Prediksi akhir adalah kombinasi berbobot di mana model dengan akurasi tinggi memberikan kontribusi lebih dominan daripada model lemah.
- Mekanisme ini menjadikan boosting sangat powerful untuk meningkatkan akurasi, namun menuntut kontrol hyperparameter dan regularisasi yang ketat untuk mencegah overfitting pada noise.

### Transisi ke Slide Berikutnya

Dengan memahami konsep dasar dan alur sekuensial boosting, langkah selanjutnya adalah mengimplementasikan prinsip tersebut melalui algoritma spesifik yang paling foundational, yaitu AdaBoost. Pada slide berikutnya, kita akan membedah bagaimana AdaBoost memodifikasi bobot sampel secara eksplisit berdasarkan kesalahan klasifikasi, serta mengeksplorasi kekuatan dan keterbatasan metodologi ini sebelum melangkah ke generalisasi matematisnya dalam Gradient Boosting.

---

## Slide 008 - AdaBoost: Pengantar Boosting

### Narasi

Pada slide sebelumnya, kita telah membahas prinsip dasar boosting sebagai metode ensemble sekuensial yang berfokus pada pengurangan bias melalui penyesuaian bobot sampel yang sulit diprediksi. Sekarang, kita akan mengupas salah satu algoritma boosting paling fundamental dan banyak diimplementasikan, yaitu AdaBoost atau Adaptive Boosting. Cara kerja AdaBoost dapat dipahami melalui mekanisme adaptif yang beroperasi secara iteratif. Di awal proses, setiap sampel dalam dataset pelatihan diberikan bobot yang sama. Setelah weak learner pertama (biasanya decision stump) dilatih, sampel-sampel yang diklasifikasikan secara salah akan dinaikkan bobotnya. Weak learner berikutnya kemudian dilatih pada distribusi data yang telah direweight ini, sehingga secara otomatis lebih memprioritaskan region data yang sebelumnya gagal diprediksi. Proses ini berlanjut hingga sejumlah iterasi tertentu tercapai. Tidak hanya bobot sampel yang berubah, setiap weak learner juga memperoleh bobot kontribusi berdasarkan akurasinya sendiri. Model yang lebih akurat akan memiliki pengaruh lebih besar dalam voting akhir, sedangkan model dengan performa buruk kontribusinya diminimalkan.

Dari sisi implementasi dan karakteristik kinerja, AdaBoost menawarkan beberapa keunggulan sekaligus keterbatasan yang perlu dipertimbangkan dalam konteks penelitian data mining. Kekuatannya terletak pada konsep yang relatif sederhana namun sangat efektif dalam menekan bias, serta kemudahan implementasinya menggunakan library standar seperti scikit-learn. Namun, mekanisme peningkatan bobot secara eksponensial pada sampel yang salah membuat algoritma ini sangat sensitif terhadap noise dan outlier. Jika terdapat label yang tidak akurat atau titik data ekstrem dalam dataset, AdaBoost akan terus-menerus mencoba memperbaiki prediksi pada titik-titik tersebut, yang berpotensi menyebabkan overfitting. Selain itu, formulasi asli AdaBoost mengasumsikan penggunaan exponential loss function, sehingga kurang fleksibel dibandingkan varian modern yang mendukung berbagai jenis fungsi kerugian sesuai dengan masalah optimisasi yang dihadapi.

Penting untuk memahami bahwa modifikasi bobot sampel pada AdaBoost merupakan pendekatan heuristik yang efektif, namun memiliki batasan teoretis ketika kita ingin mengoptimalkan fungsi loss yang lebih kompleks. Inilah yang menjadi jembatan konseptual menuju generalisasi boosting. Daripada secara manual mengubah distribusi probabilitas sampel, pendekatan selanjutnya merumuskan boosting sebagai proses minimisasi fungsi loss secara bertahap melalui turunan gradien. Konsep inilah yang membuka jalan bagi Gradient Boosting dan GBDT modern, di mana fokus bergeser dari penyesuaian bobot empiris menuju optimisasi matematis berbasis gradien.

### Inti yang Harus Ditekankan

- Mekanisme adaptive weighting pada AdaBoost secara dinamis mengalihkan fokus pembelajaran ke sampel yang sebelumnya salah klasifikasi, sehingga secara agresif mengurangi bias.
- Kontribusi setiap weak learner dalam ensemble ditentukan oleh akurasinya, memberikan voting power yang proporsional terhadap kinerja model individual.
- Sensitivitas tinggi terhadap noise dan outlier merupakan kelemahan utama karena bobot kesalahan dapat melonjak secara eksponensial, meningkatkan risiko overfitting jika jumlah iterasi tidak dikontrol dengan ketat.
- Keterbatasan pada exponential loss function menjadi motivasi utama pengembangan metode berbasis gradien yang lebih umum, fleksibel, dan mudah diintegrasikan dengan berbagai metrik evaluasi.

### Transisi ke Slide Berikutnya

Untuk mengatasi keterbatasan penyesuaian bobot sampel secara manual, kita perlu melihat bagaimana boosting dapat diformulasikan ulang sebagai optimisasi fungsi loss. Pada slide berikutnya, kita akan mengeksplorasi intuisi residual dalam Gradient Boosting, di mana model baru dilatih untuk memprediksi sisa galat atau pseudo-residual yang dihitung langsung dari turunan negatif fungsi loss. Pendekatan ini memungkinkan kita meminimalkan berbagai jenis error metric secara sistematis melalui langkah-langkah gradien.

---

## Slide 009 - Gradient Boosting: Intuisi Residual

### Narasi

Pada slide sebelumnya, kita telah membahas bagaimana AdaBoost bekerja dengan memodifikasi bobot pada setiap sampel data berdasarkan kesalahan klasifikasinya. Namun, pendekatan tersebut memiliki keterbatasan dalam hal fleksibilitas terhadap berbagai jenis fungsi kerugian. Gradient Boosting hadir sebagai generalisasi yang lebih kuat dengan menggeser fokus dari penyesuaian bobot sampel menjadi optimisasi langsung terhadap fungsi loss melalui konsep gradien. Ide utamanya adalah melatih model secara sekuensial, di mana setiap model baru tidak lagi mencoba memprediksi nilai target secara langsung, melainkan mempelajari residual atau sisa galat dari model gabungan yang sudah terbentuk sebelumnya. Residual ini didefinisikan sebagai selisih antara nilai aktual dan prediksi saat ini. Dengan demikian, setiap iterasi bertujuan untuk memperbaiki kelemahan akumulatif dari model-model sebelumnya.

Untuk memahami mekanisme ini secara intuitif, mari kita perhatikan analogi yang disajikan. Proses dimulai dengan prediksi awal yang sangat sederhana, misalnya menggunakan rata-rata dari seluruh nilai target. Selanjutnya, kita hitung sisa galatnya, yaitu target dikurangi prediksi awal. Model pertama dalam rangkaian boosting akan dilatih khusus untuk memprediksi sisa galat tersebut. Setelah itu, prediksi baru diperoleh dengan menjumlahkan prediksi awal dan output dari pohon pertama. Langkah ini diulang secara iteratif hingga mencapai jumlah iterasi yang ditentukan. Setiap penambahan model baru berfungsi seperti koreksi bertahap yang semakin mendekati pola sebenarnya dalam data, membentuk sebuah model aditif yang progresif.

Dalam implementasi praktis, khususnya ketika kita berhadapan dengan fungsi loss yang kompleks atau tidak simetris, penggunaan residual biasa sering kali kurang optimal. Di sinilah konsep pseudo-residual berperan penting. Pseudo-residual bukan sekadar selisih langsung, melainkan turunan negatif dari fungsi loss terhadap prediksi saat ini. Secara matematis, ini merepresentasikan arah gradien yang paling curam untuk mengurangi nilai loss. Dengan memanfaatkan pseudo-residual, Gradient Boosting dapat diadaptasi untuk mengoptimalkan hampir semua fungsi loss yang terdiferensiasi, mulai dari squared error untuk regresi, log-loss untuk klasifikasi, hingga Huber loss yang robust terhadap outlier. Pendekatan ini menjadikan Gradient Boosting sebagai kerangka kerja yang sangat serbaguna dan menjadi fondasi teoretis utama bagi pengembangan algoritma GBDT modern.

### Inti yang Harus Ditekankan

- Gradient Boosting beroperasi secara sekuensial dengan melatih model baru untuk memprediksi residual (galat) dari agregasi model sebelumnya, sehingga terjadi perbaikan kesalahan yang bertahap dan terarah.
- Penggunaan pseudo-residual sebagai turunan negatif fungsi loss memungkinkan algoritma ini beradaptasi dengan berbagai jenis fungsi kerugian, melampaui batasan rigid dari metode boosting konvensional.
- Konsep ini merupakan jembatan metodologis dari modifikasi bobot (AdaBoost) menuju optimisasi berbasis gradien, yang menjadi dasar prinsip kerja ensemble learning tingkat lanjut pada jenjang magister.

### Transisi ke Slide Berikutnya

Setelah memahami intuisi di balik koreksi residual dan peran pseudo-residual, langkah selanjutnya adalah menerjemahkan konsep tersebut ke dalam prosedur algoritmik yang terstruktur. Pada slide berikutnya, kita akan membedah pseudocode lengkap Gradient Boosting, mulai dari inisialisasi model awal, perhitungan iteratif pseudo-residual, pencarian step size optimal, hingga pembaruan model dengan bantuan learning rate. Mari kita lihat bagaimana setiap komponen ini dirangkai menjadi satu pipeline komputasi yang efisien.

---

## Slide 010 - Algoritma Gradient Boosting

### Narasi

Setelah memahami intuisi bahwa setiap model dalam boosting bertugas memperbaiki galat agregat dari iterasi sebelumnya pada Slide 9, kita kini akan menguraikan algoritma Gradient Boosting secara formal melalui pseudocode yang terstruktur. Secara matematis, algoritma ini merupakan implementasi dari *functional gradient descent* di ruang fungsi, di mana optimasi dilakukan dengan menambahkan basis fungsi baru secara bertahap untuk menuruni gradien fungsi kehilangan, bukan sekadar menyesuaikan bobot numerik statis.

Mari kita bedah langkah-langkah dalam pseudocode ini. Tahap pertama adalah inisialisasi model $F_0(x)$ sebagai konstanta tunggal yang meminimalkan total fungsi kehilangan terhadap seluruh data pelatihan. Nilai ini berfungsi sebagai baseline atau titik tolak prediksi sebelum proses iteratif dimulai. Selanjutnya, kita memasuki loop utama sebanyak $M$ iterasi. Di setiap iterasi $m$, langkah pertama adalah menghitung pseudo-residual $r_{im}$, yang secara definisi merupakan turunan negatif dari fungsi kehilangan terhadap prediksi saat ini. Pseudo-residual ini bertindak sebagai sinyal error vektor yang harus dipelajari oleh komponen berikutnya. Langkah kedua adalah melatih sebuah *regression tree* $h_m(x)$ menggunakan pasangan data $(x_i, r_{im})$. Perlu dicatat bahwa meskipun masalahnya berupa klasifikasi, kita tetap menggunakan regresi tree karena tujuannya adalah memetakan fitur ke nilai kontinu yang merepresentasikan arah perbaikan gradien, bukan memprediksi label kelas diskrit.

Setelah struktur pohon $h_m(x)$ terbentuk, algoritma melakukan optimasi satu dimensi untuk mencari step size optimal $\gamma_m$ yang meminimalkan fungsi kehilangan ketika kontribusi pohon tersebut ditambahkan ke model sebelumnya. Langkah ini memastikan setiap penambahan pohon memberikan penurunan galat yang maksimal dan terukur. Terakhir, model diperbarui menjadi $F_m(x) = F_{m-1}(x) + \eta \gamma_m h_m(x)$. Di sini, $\eta$ berperan sebagai *learning rate* yang mengecilkan kontribusi setiap pohon. Dalam konteks penelitian tingkat magister, pengaturan $\eta$ yang kecil (biasanya antara 0.01 hingga 0.1) dikombinasikan dengan $M$ yang besar membentuk strategi *slow learning*. Pendekatan ini bekerja sebagai bentuk regularisasi implisit yang mencegah model terlalu cepat mengikuti noise pada data pelatihan, sehingga meningkatkan stabilitas dan kemampuan generalisasi.

Struktur algoritma ini menegaskan bahwa Gradient Boosting adalah kerangka optimasi berbasis gradien yang sangat disiplin. Fleksibilitasnya terletak pada pemisahan antara mekanisme pembelajaran (tree fitting) dan tujuan optimasi (loss function). Hal ini secara langsung menghubungkan materi ini dengan Slide 11, di mana kita akan mengeksplorasi bagaimana variasi fungsi loss—mulai dari squared error, absolute error, hingga log loss dan softmax cross-entropy—secara otomatis mengubah bentuk pseudo-residual dan karakteristik perilaku model. Pemahaman mendalam terhadap alur pseudocode ini menjadi fondasi metodologis untuk merancang eksperimen, melakukan ablation study, dan melakukan tuning hyperparameter secara rasional dalam penelitian data mining Anda.

### Inti yang Harus Ditekankan

- Gradient Boosting beroperasi sebagai *functional gradient descent*, di mana setiap iterasi menambahkan pohon yang mempelajari turunan negatif fungsi kehilangan (pseudo-residual).
- Pohon yang digunakan selalu *regression tree*, bahkan untuk masalah klasifikasi, karena tujuannya adalah memprediksi nilai kontinu yang merepresentasikan arah gradien, bukan label kelas.
- Learning rate ($\eta$) dan jumlah iterasi ($M$) bekerja secara invers: $\eta$ kecil dengan $M$ besar menghasilkan model yang lebih stabil, mengurangi overfitting, dan meningkatkan generalisasi.
- Pencarian step size optimal ($\gamma_m$) pada setiap iterasi menjamin bahwa setiap penambahan pohon memberikan penurunan fungsi kehilangan yang maksimal dan terkontrol.
- Algoritma ini bersifat modular; perubahan fungsi loss akan otomatis mengubah pseudo-residual, memungkinkan adaptasi terhadap berbagai jenis masalah dan distribusi data.

### Transisi ke Slide Berikutnya

Dengan memahami mekanisme iteratif dan peran masing-masing variabel dalam pseudocode di atas, kita sekarang siap menggali lebih dalam bagaimana pilihan fungsi kehilangan secara spesifik menentukan bentuk pseudo-residual dan karakteristik model, yang akan kita bahas secara komprehensif pada Slide 11.

---

## Slide 011 - Fungsi Loss dan Pseudo-Residual

### Narasi

Pada slide sebelumnya, kita telah membedah pseudocode algoritma Gradient Boosting yang secara eksplisit mengandalkan perhitungan pseudo-residual pada setiap iterasi untuk memperbarui model global. Kunci utama dari langkah tersebut terletak pada fakta bahwa pseudo-residual tidak bersifat tetap; ia merupakan turunan parsial negatif dari fungsi kehilangan (*loss function*) yang kita pilih. Inilah yang menjadikan Gradient Boosting jauh lebih fleksibel dibandingkan metode boosting generasi awal seperti AdaBoost, yang hanya terikat pada fungsi eksponensial. Dalam kerangka kerja *functional gradient descent*, pemilihan *loss function* secara langsung menentukan bagaimana model mengukur kesalahan dan menyesuaikan diri menuju solusi optimal.

Mari kita tinjau hubungan matematis antara jenis masalah, fungsi kehilangan, dan bentuk pseudo-residual yang dihasilkan. Untuk masalah regresi standar, *squared error* menjadi pilihan umum, di mana pseudo-residualnya berbentuk $y - F(x)$. Pendekatan ini memberikan penalti kuadratik terhadap kesalahan, sehingga model sangat sensitif terhadap *outlier*. Ketika data mengandung banyak nilai ekstrem atau distribusi residu tidak normal, kita dapat beralih ke *absolute error* untuk regresi yang lebih robust. Dalam kasus ini, pseudo-residual berubah menjadi $\text{sign}(y - F(x))$, yang memberikan bobot gradien seragam tanpa memperbesar pengaruh anomali, sehingga stabilisasi model meningkat secara signifikan.

Pada ranah klasifikasi, mekanisme optimasi menyesuaikan diri karena output $F(x)$ masih berupa skor margin kontinu yang perlu dikonversi ke ruang probabilitas. Untuk klasifikasi biner, *log loss* digunakan, dan pseudo-residualnya mengambil bentuk $y - p$, dengan $p = \sigma(F(x))$ sebagai probabilitas prediksi dari fungsi sigmoid. Ini merepresentasikan gradien negatif dari log-likelihood biner. Untuk klasifikasi multi-kelas, kita memanfaatkan *softmax cross-entropy*, di mana pseudo-residual dihitung per kelas sebagai $y_k - p_k$, dengan $y_k$ sebagai label one-hot dan $p_k$ sebagai probabilitas prediksi kelas tersebut. Perhatikan bahwa dalam semua skenario ini, pseudo-residual secara konsisten merepresentasikan arah penurunan gradien fungsional yang memandu pembaruan pohon regresi pada setiap tahap.

Dari perspektif penelitian tingkat magister, pemahaman ini bukan sekadar teori optimasi, melainkan landasan desain eksperimen dan kontribusi metodologis. Pemilihan fungsi kehilangan harus selaras secara ketat dengan tujuan analisis dan metrik evaluasi yang relevan. Setiap alternatif loss akan menghasilkan karakteristik generalisasi model yang berbeda, terutama dalam hal ketahanan terhadap noise dan bias terhadap populasi tertentu. Khususnya pada dataset yang mengalami ketidakseimbangan kelas (*class imbalance*), penggunaan loss standar sering kali menyebabkan model cenderung mayoritas. Sebagai strategi riset, mahasiswa didorong untuk mengeksplorasi atau merancang *custom loss function*, seperti *focal loss* yang menurunkan bobot contoh yang sudah diklasifikasikan dengan benar agar fokus belajar pada contoh sulit, atau *cost-sensitive loss* yang mengintegrasikan matriks biaya kesalahan ke dalam fungsi objektif. Implementasi teknisnya dapat dilakukan di ekosistem Python melalui penyesuaian parameter `sample_weight` di scikit-learn atau dengan membangun wrapper estimator yang menimpa metode evaluasi kerugian bawaan.

### Inti yang Harus Ditekankan

- Gradient Boosting bersifat agnostik terhadap fungsi kehilangan; fleksibilitas ini memungkinkan adaptasi terhadap berbagai karakteristik data dan tujuan optimasi.
- Pseudo-residual secara fundamental adalah negatif gradien dari fungsi kehilangan, yang menentukan arah dan magnitudo pembaruan model pada setiap iterasi boosting.
- Perancangan atau modifikasi *custom loss function* (misalnya *focal loss*, *huber loss*, atau *cost-sensitive loss*) merupakan jalur riset strategis untuk menangani masalah nyata seperti data tidak seimbang, keberadaan outlier, atau kebutuhan metrik evaluasi bisnis yang spesifik.

### Transisi ke Slide Berikutnya

Memahami mekanisme optimasi berbasis gradien pertama ini membuka pintu menuju peningkatan efisiensi dan stabilitas numerik yang lebih lanjut. Banyak peneliti menyadari bahwa pendekatan orde pertama saja seringkali memerlukan banyak iterasi untuk konvergen dan kurang tangguh terhadap permukaan loss yang kompleks. Oleh karena itu, pada slide berikutnya, kita akan membahas XGBoost yang mengintegrasikan inovasi kritis berupa pemanfaatan gradien orde kedua (*second-order gradients*), regularisasi eksplisit pada leaf value dan struktur pohon, serta penanganan data *sparse* secara native, yang secara drastis mempercepat pelatihan dan meningkatkan akurasi dibandingkan implementasi Gradient Boosting konvensional.

---

## Slide 012 - XGBoost: Fitur dan Inovasi

### Narasi

Setelah pada slide sebelumnya kita membahas bagaimana pemilihan fungsi loss menentukan bentuk pseudo-residual yang digunakan dalam proses boosting, kini kita beralih ke salah satu implementasi paling berpengaruh dari paradigma tersebut, yaitu XGBoost. Meskipun gradient boosting klasik telah terbukti sangat efektif, pendekatan tersebut memiliki beberapa keterbatasan dalam hal konvergensi, stabilitas numerik, dan skalabilitas pada dataset berskala besar. XGBoost hadir bukan sekadar sebagai library, melainkan sebagai kerangka kerja yang mereformulasi ulang proses optimasi berbasis pohon dengan serangkaian inovasi algoritmik dan sistematis yang dirancang khusus untuk kinerja tinggi dan generalisasi yang kuat.

Inovasi pertama yang paling fundamental adalah penggunaan gradien orde kedua. Berbeda dengan gradient boosting standar yang hanya memanfaatkan turunan pertama (gradien) untuk memperkirakan arah penurunan error, XGBoost menerapkan ekspansi Taylor orde dua terhadap fungsi loss. Pendekatan ini memungkinkan model menangkap kelengkungan permukaan error, sehingga langkah optimasi menjadi lebih presisi dan konvergensi dapat dicapai dalam jumlah iterasi yang lebih sedikit. Selain itu, XGBoost memperkenalkan regularisasi eksplisit yang langsung tertanam dalam objective function. Regularisasi ini bekerja pada dua level: kompleksitas struktur pohon melalui parameter gamma yang membatasi jumlah leaf, dan stabilitas bobot leaf melalui penalti L1 maupun L2. Hal ini secara drastis mengurangi risiko overfitting dibandingkan vanilla gradient boosting yang cenderung meniru noise pada data pelatihan.

Dari sisi penanganan data real-world, XGBoost dilengkapi dengan mekanisme native untuk data sparse dan missing value. Pada dataset tabular modern yang sering kali mengandung nilai kosong atau representasi matriks jarang, XGBoost tidak memerlukan imputasi manual yang dapat mengganggu distribusi statistik. Sebaliknya, algoritma secara otomatis mempelajari arah split optimal ketika encountering missing value selama proses training, sehingga informasi yang hilang justru dimanfaatkan sebagai sinyal pemisah kelas. Untuk efisiensi komputasi pada skala besar, XGBoost mengimplementasikan Weighted Quantile Sketch yang mempercepat pencarian titik split tanpa mengorbankan akurasi secara signifikan. Secara arsitektural, framework ini juga dioptimalkan dengan paralelisasi tingkat fitur dan tree building, serta desain cache-aware yang meminimalkan latency akses memori pada hardware modern.

Jika kita perhatikan perbandingan sistematis antara gradient boosting klasik dan XGBoost, terlihat jelas pergeseran paradigma dari pendekatan sequential berbasis first-order menuju sistem parallel yang terintegrasi dengan regularisasi dan penanganan missing value bawaan. Perbedaan ini bukan hanya soal kecepatan eksekusi, tetapi juga mencerminkan kematangan metodologis dalam merancang ensemble learning yang robust. Bagi peneliti tingkat magister, memahami fondasi inovasi ini sangat krusial karena menjadi dasar untuk melakukan ablation study, merancang custom boosting framework, atau menyesuaikan hyperparameter strategy sesuai karakteristik dataset spesifik yang diteliti.

### Inti yang Harus Ditekankan

- Pemanfaatan gradien orde kedua melalui ekspansi Taylor meningkatkan akurasi aproksimasi loss dan mempercepat konvergensi model.
- Regularisasi eksplisit pada struktur pohon (gamma) dan bobot leaf (lambda/alpha) menjadi pembeda utama yang mencegah overfitting secara inherent.
- Penanganan missing value dan data sparse dilakukan secara native melalui pembelajaran arah split optimal, menghilangkan kebutuhan imputasi bias.
- Optimasi sistem berupa paralelisasi, cache-aware memory access, dan Weighted Quantile Sketch memungkinkan skalabilitas tanpa degradasi performa.
- Inovasi ini membentuk fondasi metodologis untuk riset lanjutan, termasuk modifikasi objective function, custom split criterion, dan analisis komparatif dalam paper ilmiah.

### Transisi ke Slide Berikutnya

Semua inovasi struktural dan algoritmik yang baru saja dibahas akan kita turunkan secara matematis pada slide berikutnya, di mana kita akan melihat langsung bagaimana objective function diformulasikan, bagaimana regularisasi dipadukan ke dalam persamaan optimasi, serta mekanisme exact greedy versus approximate split finding yang menjadi jantung efisiensi XGBoost.

---

## Slide 013 - XGBoost: Objective, Regularisasi, dan Split Finding

### Narasi

Pada slide ini, kita akan membedah fondasi matematis dan komputasional yang membedakan XGBoost dari algoritma boosting konvensional. Inti dari XGBoost terletak pada formulasi fungsi objektif yang dioptimalkan selama proses pelatihan, yang secara eksplisit ditulis sebagai `Obj = Σ_i L(y_i, F(x_i)) + Σ_k Ω(tree_k)`. Persamaan ini terdiri dari dua komponen utama yang berjalan simultan. Komponen pertama, `Σ_i L(y_i, F(x_i))`, adalah penjumlahan fungsi kerugian (*loss function*) di seluruh observasi data. Fungsi `L` mengukur ketidakcocokan antara nilai aktual `y_i` dan prediksi agregat model `F(x_i)`, yang dapat berupa log-loss untuk klasifikasi atau mean squared error untuk regresi. Komponen kedua, `Σ_k Ω(tree_k)`, menambahkan penalti regularisasi pada setiap pohon dalam ensemble. Penambahan regularisasi ini bukan sekadar trik empiris, melainkan kerangka teoritis yang menjamin generalisasi model dengan mengontrol kompleksitas strukturalnya.

Mari kita fokus pada definisi regularisasi per pohon, yaitu `Ω = γ T + 0.5 λ ||w||^2`. Di sini, `T` merepresentasikan jumlah daun (*leaf nodes*) dalam satu pohon, yang menjadi proxy langsung untuk kedalaman dan percabangan model. Parameter `γ` (gamma) berfungsi sebagai *threshold penalty*; sebuah split hanya akan diterima jika pengurangan skor objektif akibat split tersebut melebihi nilai `γ`. Ini secara mekanis mencegah pohon tumbuh tanpa batas. Selanjutnya, `||w||^2` adalah norma kuadrat dari vektor bobot leaf (`w`), yang menerapkan regularisasi L2 pada nilai keluaran setiap daun. Koefisien `λ` (lambda) mengatur intensitas penalti ini. Dengan demikian, kombinasi `γ` dan `λ` memberikan kontrol granular kepada peneliti untuk menyeimbangkan bias dan varians, memastikan bahwa model tidak hanya menghafal data latih, tetapi juga menangkap pola yang mendasarinya.

Dampak praktis dari mekanisme regularisasi ini sangat relevan dalam konteks metodologi penelitian tingkat magister. Pertama, regularisasi secara aktif menekan fenomena *overfitting*, terutama ketika dataset mengandung noise tinggi atau fitur yang saling berkorelasi. Kedua, ia memaksa struktur pohon tetap parsimonius, sehingga interpretasi model dan stabilitas prediksi jangka panjang terjaga. Ketiga, penalti L2 pada bobot leaf mencegah nilai prediksi individual melonjak ekstrem, yang menghasilkan agregasi ensemble yang lebih halus dan robust. Dalam praktik eksperimen, tuning `gamma` dan `lambda` harus dilakukan melalui prosedur validasi silang yang ketat, karena nilai optimal sangat bergantung pada karakteristik distribusi data dan rasio signal-to-noise yang dimiliki oleh masing-masing dataset.

Setelah tujuan optimasi ditetapkan, tantangan komputasi berikutnya adalah menemukan titik belah (*split point*) yang optimal pada setiap node. XGBoost mengatasi masalah ini dengan arsitektur split finding yang adaptif. Untuk dataset berskala kecil hingga menengah, algoritma mengandalkan *exact greedy search*, yang secara exhaustif mengevaluasi semua kandidat split berdasarkan turunan orde pertama dan kedua. Namun, pada dataset berskala besar, pendekatan ini menjadi bottleneck komputasi. Di sinilah XGBoost mengaktifkan strategi *approximate greedy* yang telah disinggung pada slide sebelumnya. Metode ini memanfaatkan *Weighted Quantile Sketch* untuk membangun histogram distribusi gradien, sehingga kandidat split potensial dapat dievaluasi secara efisien tanpa perlu memeriksa setiap instance data secara individual. Pendekatan ini mempertahankan akurasi yang setara dengan metode eksak, namun meningkatkan kecepatan training secara signifikan, menjadikannya pilihan standar untuk pembelajaran tabular modern.

### Inti yang Harus Ditekankan

- Fungsi objektif XGBoost secara eksplisit menggabungkan *loss function* dan regularisasi struktur pohon, menjadikan kontrol bias-varians sebagai bagian intrinsik dari proses optimasi.
- Parameter `gamma` mengontrol kompleksitas topologi pohon (jumlah leaf), sedangkan `lambda` menstabilkan nilai leaf melalui regularisasi L2; keduanya wajib dituning secara sistematis dalam desain eksperimen.
- Mekanisme *split finding* bersifat hibrida: *exact greedy* digunakan untuk akurasi maksimal pada data kecil, sementara *approximate greedy* berbasis *quantile sketch* diaktifkan untuk skalabilitas pada data besar tanpa degradasi akurasi yang berarti.

### Transisi ke Slide Berikutnya

Meskipun XGBoost berhasil menyempurnakan keseimbangan antara akurasi dan efisiensi melalui pendekatan *approximate greedy*-nya, tantangan komputasi tetap muncul ketika dimensi fitur mencapai skala sangat tinggi atau ketika kecepatan training menjadi prioritas mutlak. Hal ini membuka jalan bagi evolusi selanjutnya menuju LightGBM, yang memperkenalkan strategi sampling berbasis gradien dan pengelompokan fitur eksklusif untuk memangkas beban komputasi lebih jauh, sekaligus mengubah paradigma pertumbuhan pohon dari level-wise menjadi leaf-wise.

---

## Slide 014 - LightGBM: GOSS dan EFB

### Narasi

Pada slide sebelumnya, kita telah membahas bagaimana XGBoost mengoptimalkan fungsi objektif dengan regularisasi ketat serta menggunakan algoritma *split finding* berbasis *approximate greedy* untuk menangani data berskala besar. Meskipun XGBoost sangat robust, proses pembangunannya masih memerlukan komputasi penuh terhadap seluruh instance dan fitur pada setiap iterasi, yang dapat menjadi bottleneck ketika dimensi dan volume data melampaui kapasitas memori atau waktu pelatihan yang tersedia. Untuk mengatasi keterbatasan ini, dikembangkanlah LightGBM, sebuah framework gradient boosting yang secara eksplisit dirancang untuk mempercepat proses training sambil mempertahankan akurasi prediksi yang tinggi.

Inovasi pertama LightGBM adalah GOSS (*Gradient-based One-Side Sampling*). Dalam konteks boosting, instance yang memiliki nilai gradien besar berkontribusi signifikan terhadap pembaruan model, sedangkan instance dengan gradien kecil memberikan informasi yang relatif minim. GOSS memanfaatkan prinsip ini dengan cara mempertahankan seluruh instance yang memiliki gradien besar, lalu melakukan sampling acak hanya pada subset instance dengan gradien kecil. Agar estimasi bias tidak terjadi akibat pengurangan sampel tersebut, nilai gradien dari instance yang tersampel akan dikalikan dengan faktor skala tertentu. Strategi ini secara drastis mengurangi jumlah komputasi histogram tanpa mengorbankan kemampuan model dalam menangkap pola penting.

Inovasi kedua terletak pada EFB (*Exclusive Feature Bundling*). Pada dataset dunia nyata, sering kali terdapat banyak fitur yang bersifat eksklusif atau jarang aktif bersamaan, seperti hasil one-hot encoding dari variabel kategorikal. EFB mengidentifikasi fitur-fitur yang saling eksklusif tersebut dan menggabungkannya menjadi satu fitur baru melalui penjumlahan nilai mereka. Dengan demikian, dimensi ruang fitur menyusut secara signifikan, yang langsung berdampak pada percepatan konstruksi histogram dan pencarian titik split terbaik. Teknik ini sangat efektif untuk data tabular berdimensi tinggi yang umumnya bersifat sparse.

Selain strategi sampling dan bundling fitur, LightGBM mengubah paradigma pertumbuhan pohon dibandingkan pendekatan level-wise yang digunakan oleh XGBoost. LightGBM menerapkan *leaf-wise growth*, di mana pada setiap langkah ekspansi, algoritma memilih cabang (leaf) yang menghasilkan penurunan fungsi loss terbesar, bukan membatasi pertumbuhan berdasarkan kedalaman level. Pendekatan ini memungkinkan model mencapai akurasi lebih tinggi dengan jumlah node yang lebih sedikit, sehingga efisiensi komputasinya meningkat. Namun, karena pohon cenderung tumbuh sangat dalam pada cabang-cabang tertentu, LightGBM lebih rentan terhadap overfitting jika diterapkan pada dataset berukuran kecil. Oleh karena itu, dalam praktik penelitian maupun produksi, parameter pembatas seperti maksimum kedalaman pohon (*max_depth*) atau minimum data per daun (*min_data_in_leaf*) harus dikonfigurasi dengan hati-hati.

### Inti yang Harus Ditekankan

- LightGBM mengutamakan efisiensi komputasi tanpa mengorbankan akurasi melalui dua mekanisme inti: GOSS untuk optimasi seleksi instance berdasarkan gradien, dan EFB untuk reduksi dimensi fitur eksklusif.
- Penggunaan *leaf-wise growth* memungkinkan konvergensi lebih cepat dan akurasi lebih tinggi dibanding *level-wise*, namun menuntut regulasi kompleksitas pohon yang ketat untuk mencegah overfitting pada data terbatas.
- Dalam konteks riset data mining tingkat lanjut, pemahaman mendalam tentang trade-off antara kecepatan training, stabilitas model, dan karakteristik distribusi data menjadi kunci pemilihan algoritma ensemble modern.

### Transisi ke Slide Berikutnya

Sementara LightGBM fokus pada efisiensi komputasi melalui manipulasi instance dan fitur, tantangan lain dalam gradient boosting muncul ketika menangani fitur kategorikal yang tidak terencode dengan baik. Slide berikutnya akan membahas CatBoost, yang memperkenalkan *Ordered Boosting* dan penanganan statistik target secara berurutan untuk mengatasi masalah *target leakage* serta menjaga stabilitas generalisasi model.

---

## Slide 015 - CatBoost: Ordered Boosting dan Fitur Kategorikal

### Narasi

Setelah membahas LightGBM yang mengandalkan GOSS untuk sampling berbasis gradien dan EFB untuk pengurangan dimensi fitur, kita beralih ke pendekatan lain yang sangat kuat dalam menangani data tabular modern, yaitu CatBoost. Salah satu tantangan klasik dalam ensemble learning berbasis boosting adalah penanganan fitur kategorikal. Pada praktikum atau eksperimen sebelumnya, sering kali kita menggunakan label encoding atau target encoding sederhana. Namun, teknik ini rentan terhadap masalah *target leakage*, di mana informasi dari target bocor ke dalam fitur selama proses training, sehingga model terlihat terlalu optimis pada data latih namun gagal menggeneralisasi pada data uji. Selain itu, terjadi fenomena *prediction shift* atau pergeseran prediksi akibat distribusi target yang berubah secara tidak konsisten antar iterasi boosting, yang membuat hasil evaluasi internal tidak mencerminkan performa sebenarnya pada data tak terlihat.

CatBoost mengatasi kedua masalah fundamental ini melalui tiga mekanisme inti yang terintegrasi dalam arsitekturnya. Pertama, *Ordered Target Statistics*. Berbeda dengan perhitungan statistik target konvensional yang melihat seluruh dataset sekaligus, metode ini menghitung nilai imputasi secara berurutan berdasarkan urutan acak data. Hanya data yang muncul sebelum indeks saat ini yang digunakan untuk menghitung mean atau modus target, sehingga mencegah kebocoran informasi masa depan dan menjaga integritas validasi. Kedua, *Ordered Boosting*. Algoritma ini memodifikasi cara pembaruan model secara sekuensial dengan memperkenalkan transformasi khusus pada gradien dan hessian, yang secara efektif mengurangi bias yang ditimbulkan oleh *prediction shift* dan membuat proses pembelajaran lebih stabil. Ketiga, penggunaan *Symmetric Tree* atau pohon simetris. Setiap split node pada tingkat kedalaman tertentu memiliki probabilitas split yang sama, menghasilkan struktur pohon yang sangat teratur. Hal ini tidak hanya mempercepat proses inferensi karena komputasi yang lebih efisien, tetapi juga berfungsi sebagai regularisasi bawaan yang kuat, mencegah model menjadi terlalu kompleks dan overfit.

Keunggulan praktis CatBoost sangat terasa ketika berhadapan dengan dataset yang kaya akan fitur kategorikal, seperti data bisnis, rekam medis, atau survei sosial. Dengan dukungan native handling untuk fitur kategorikal, kebutuhan preprocessing manual seperti one-hot encoding yang sering menyebabkan ledakan dimensi dapat diminimalkan. Selain itu, stabilitas modelnya menjadikannya pilihan yang sangat handal untuk dataset berukuran kecil hingga menengah, di mana regularisasi eksplisit dan penanganan leakage menjadi krusial. Dalam konteks penelitian data mining tingkat magister, memahami mekanisme internal ini penting karena pemilihan library bukan sekadar soal akurasi, tetapi juga tentang kontrol terhadap bias, efisiensi komputasi, dan reproduktibilitas eksperimen. Ketika merancang ablation study atau membandingkan baseline, kemampuan CatBoost dalam mempertahankan konsistensi performa tanpa tuning berlebihan menjadi nilai tambah metodologis yang signifikan.

### Inti yang Harus Ditekankan

- Target leakage dari simple target encoding adalah masalah serius yang merusak generalisasi model; CatBoost menyelesaikannya dengan Ordered Target Statistics yang hanya memanfaatkan informasi historis.
- Ordered Boosting dan Symmetric Tree bekerja sinergis untuk mengurangi prediction shift dan memberikan regularisasi struktural yang kuat, sehingga model lebih tahan terhadap overfitting.
- Native handling fitur kategorikal dan stabilitas pada dataset kecil-menengah menjadikan CatBoost unggul untuk eksperimen yang membutuhkan preprocessing minimal, kecepatan inferensi tinggi, dan robustness metodologis.

### Transisi ke Slide Berikutnya

Dengan pemahaman mendalam tentang mekanisme unik masing-masing algoritma boosting, langkah selanjutnya adalah membandingkan ketiga pustaka utama GBDT—XGBoost, LightGBM, dan CatBoost—secara holistik untuk menentukan strategi implementasi yang paling sesuai dengan karakteristik dataset dan tujuan penelitian Anda.

---

## Slide 016 - Perbandingan Pustaka GBDT

### Narasi

Setelah mendalami mekanisme internal CatBoost, khususnya bagaimana *Ordered Target Statistics* dan *Symmetric Tree* mengurangi *target leakage* serta meningkatkan stabilitas pada data berukuran kecil hingga menengah, saatnya kita memperluas perspektif ke ekosistem pustaka GBDT secara keseluruhan. Pada slide ini, kita memetakan karakteristik teknis XGBoost, LightGBM, dan CatBoost agar dapat dijadikan acuan dalam pemilihan alat komputasi yang tepat sesuai dengan sifat dataset dan tujuan eksperimen penelitian.

Dari sisi fokus awal dan strategi pemotongan pohon (*split strategy*), XGBoost dibangun dengan penekanan pada kecepatan inferensi dan mekanisme regularisasi yang eksplisit, menjadikannya pilihan robust untuk berbagai kasus umum. Namun, penanganan fitur kategorikal masih mengandalkan preprocessing manual. LightGBM, sebaliknya, dioptimalkan untuk skala besar melalui pendekatan *leaf-wise splitting* dan teknik *histogram binning*, yang secara signifikan mengurangi kebutuhan memori dan mempercepat proses pelatihan. Pendekatan ini memang mengorbankan sedikit stabilitas struktural dibandingkan metode *level-wise*, sehingga sangat bergantung pada penerapan *early stopping* dan batasan kedalaman pohon. CatBoost melengkapi ekosistem ini dengan arsitektur *symmetric tree* yang menjamin keseimbangan struktur pohon, mendukung encoding kategorikal secara native, dan menawarkan stabilitas empiris yang lebih tinggi pada dataset dengan dimensi terbatas atau noise tinggi.

Dalam konteks penelitian tingkat magister, catatan di bagian bawah tabel merupakan prinsip metodologis yang tidak boleh diabaikan. Performa relatif ketiga pustaka ini sangat kontekstual terhadap distribusi data, rasio sinyal-terhadap-noise, dan struktur korelasi antarfitur. Klaim keunggulan suatu library hanya valid jika dievaluasi di bawah kondisi eksperimen yang terkontrol. Oleh karena itu, setiap perbandingan pustaka wajib menerapkan *equal tuning budget*, protokol validasi silang yang identik, dan metrik evaluasi yang konsisten. Mengabaikan kesetaraan perlakuan ini akan menghasilkan bias seleksi yang melemahkan validitas internal penelitian dan menyulitkan replikasi oleh komunitas akademik.

### Inti yang Harus Ditekankan

- Tidak ada pustaka GBDT yang secara universal terbaik; pemilihan harus didasarkan pada karakteristik dataset (skala, tipe fitur, ukuran sampel) dan kendala komputasi.
- Validitas ilmiah perbandingan library menuntut kesetaraan eksperimen: *hyperparameter tuning budget* yang setara, protokol validasi identik, dan lingkungan evaluasi yang terkendali.
- XGBoost unggul dalam stabilitas & regularisasi eksplisit, LightGBM dominan pada kecepatan & efisiensi memori untuk data skala besar, sedangkan CatBoost menawarkan kemudahan preprocessing & ketahanan terhadap overfitting pada data kecil-menengah.

### Transisi ke Slide Berikutnya

Memahami nuansa teknis masing-masing pustaka GBDT memberi fondasi yang kuat untuk menempatkan algoritma-algoritma boosting ini dalam kerangka ensemble yang lebih luas. Pada slide selanjutnya, kita akan mengontraskan secara konseptual antara paradigma boosting dengan bagging melalui perbandingan mendalam antara Gradient Boosting dan Random Forest, guna menentukan kriteria objektif dalam memilih pendekatan yang paling sesuai dengan tujuan reduksi error dan efisiensi komputasi dalam pipeline penelitian.

---

## Slide 017 - Random Forest vs Gradient Boosting

### Narasi

Pada slide sebelumnya, kita telah membandingkan tiga pustaka populer untuk Gradient Boosting Decision Tree (XGBoost, LightGBM, dan CatBoost) serta menekankan bahwa tidak ada satu pun yang selalu unggul mutlak tanpa alokasi budget tuning yang setara. Melangkah lebih fundamental, slide ini menyoroti perbandingan konseptual antara dua pilar utama ensemble learning: Random Forest dan Gradient Boosting. Perbedaan mendasar terletak pada paradigma pelatihan mereka. Random Forest menerapkan teknik Bagging (Bootstrap Aggregating), di mana banyak pohon keputusan dilatih secara paralel pada sampel acak dengan penggantian. Sebaliknya, Gradient Boosting menggunakan pendekatan Boosting, di mana pohon-pohon dilatih secara sekuensial, dengan setiap iterasi model baru berusaha keras meminimalkan residual atau kesalahan prediksi dari agregat model sebelumnya.

Dari sisi tujuan optimasi statistik, Random Forest dirancang terutama untuk mengurangi varians model. Dengan menggabungkan prediksi dari banyak pohon yang beragam dan tidak berkorelasi tinggi, fluktuasi akibat noise dalam data dapat diredam secara efektif. Sementara itu, Gradient Boosting berfokus pada pengurangan bias. Melalui koreksi bertahap terhadap kesalahan prediksi, model ini mampu menangkap pola hubungan yang lebih kompleks dan non-linear, meskipun risiko overfitting cenderung lebih tinggi jika tidak dikendalikan dengan mekanisme regulerisasi yang tepat.

Terkait kontrol overfitting, Random Forest relatif lebih toleran dan mudah distabilkan hanya dengan mengatur beberapa parameter kunci seperti `max_features` dan `min_samples_leaf`. Di sisi lain, Gradient Boosting menuntut penyetelan parameter yang lebih komprehensif dan hati-hati, termasuk kombinasi learning rate, kedalaman maksimum pohon, subsampling, serta bobot kelas. Jumlah parameter kritis pada Gradient Boosting memang lebih banyak, namun keduanya tetap menyediakan metrik feature importance yang sangat berguna untuk eksplorasi data awal dan interpretasi hasil penelitian.

Dalam praktik eksperimen, pemilihan antara keduanya sering kali bergantung pada sumber daya komputasi dan target performa. Random Forest direkomendasikan sebagai baseline cepat, stabil, dan minim tuning, sangat cocok untuk prototipe awal atau dataset dengan keterbatasan waktu. Gradient Boosting menjadi pilihan utama ketika anggaran komputasi mencukupi dan akurasi tertinggi menjadi prioritas. Penting untuk dicatat bahwa dalam konteks penelitian tingkat magister, kedua algoritma ini harus selalu dijadikan strong baseline untuk benchmarking data tabular sebelum menguji arsitektur atau metode yang lebih inovatif, guna memastikan fairness comparison.

Memahami karakteristik masing-masing model ini merupakan fondasi penting sebelum memasuki tahap validasi eksperimen. Pemilihan model yang tepat harus didukung oleh protokol evaluasi yang ketat, yang akan kita bahas secara mendalam pada slide berikutnya mengenai prinsip dasar model selection dan strategi pemisahan data yang benar.

### Inti yang Harus Ditekankan

- Random Forest (Bagging) melatih model secara paralel untuk mengurangi varians, sedangkan Gradient Boosting (Boosting) melatih secara sekuensial untuk mengurangi bias dan meningkatkan kapasitas fit terhadap pola kompleks.
- Kontrol overfit pada Random Forest lebih sederhana berkat parameter yang terbatas, sementara Gradient Boosting memerlukan penyetelan ketat pada learning rate, kedalaman pohon, dan regularisasi untuk mencegah memorisasi noise.
- Keduanya wajib digunakan sebagai strong baseline dalam penelitian data mining tabular untuk memastikan fair comparison, reproducibility, dan kredibilitas klaim kontribusi penelitian.

### Transisi ke Slide Berikutnya

Setelah menetapkan baseline model yang sesuai dengan karakteristik dataset dan tujuan penelitian, langkah krusial berikutnya adalah merancang protokol evaluasi yang metodologis. Kita akan membahas prinsip dasar model selection, khususnya tata cara pemisahan dataset dan pencegahan data leakage, agar klaim kinerja model Anda dapat dipertanggungjawabkan secara ilmiah dan siap untuk publikasi.

---

## Slide 018 - Model Selection: Prinsip Dasar

### Narasi

Setelah pada slide sebelumnya kita membandingkan karakteristik konseptual antara Random Forest dan Gradient Boosting, langkah kritis selanjutnya adalah menetapkan kerangka evaluasi yang ketat sebelum melakukan pemilihan atau optimasi model. Diagram pemisahan data pada slide ini menggambarkan praktik standar industri maupun akademik: dataset dibagi menjadi tiga subset yang memiliki fungsi berbeda namun saling melengkapi. Train set digunakan secara eksklusif untuk mempelajari pola dan menyesuaikan bobot model. Validation set berfungsi sebagai arena seleksi model dan penyetelan hiperparameter, sementara test set berperan sebagai evaluator akhir yang meniru kondisi deployment di dunia nyata. Pembagian ini bukan sekadar rutinitas teknis, melainkan fondasi metodologis yang menentukan kredibilitas temuan penelitian.

Empat prinsip utama yang tercantum dalam slide ini harus dipatuhi tanpa kompromi. Pertama, test set hanya boleh diakses dan dievaluasi satu kali, tepat di akhir seluruh siklus eksperimen. Kedua, proses model selection dan hyperparameter tuning wajib dilakukan berdasarkan validation set atau teknik cross-validation, bukan melalui pengamatan langsung terhadap performa di test set. Ketiga, seluruh tahap preprocessing seperti scaling, imputasi missing value, atau encoding kategorikal harus dibungkus di dalam loop cross-validation. Hal ini bertujuan mencegah data leakage, yaitu kebocoran informasi dari data uji ke proses pelatihan yang akan menghasilkan estimasi performa yang terlalu optimistis dan menyesatkan. Keempat, setiap kandidat model yang dibandingkan harus diuji pada potongan data yang identik agar perbandingan bersifat adil dan statistik.

Penerapan prinsip-prinsip ini sangat krusial, terutama pada jenjang magister yang menuntut rigor metodologis. Kesalahan dalam alur seleksi model sering kali berujung pada hasil eksperimen yang tidak dapat direproduksi atau bahkan tidak valid secara ilmiah. Jika model dipilih karena performanya yang tinggi semata-mata akibat overfitting terhadap test set, maka klaim kontribusi baru atau keunggulan algoritma yang diajukan tidak lagi berbasis bukti empiris yang kuat, melainkan artefak dari kesalahan desain eksperimen. Disiplin dalam pemisahan data dan isolasi proses evaluasi memastikan bahwa setiap peningkatan metrik benar-benar mencerminkan kemampuan generalisasi model, bukan kebocoran informasi.

Dengan kerangka evaluasi yang telah dikunci, fokus kita kemudian bergeser ke pengaturan konfigurasi internal model. Pemilihan model yang baik tidak cukup hanya dengan memilih algoritma, tetapi juga memerlukan penyetelan parameter yang sistematis. Pada slide berikutnya, kita akan mendalami parameter-parameter kunci pada Gradient Boosting Decision Trees (GBDT), bagaimana masing-masing parameter mempengaruhi perilaku model, serta mengapa dokumentasi proses tuning menjadi syarat mutlak untuk menjaga transparansi dan reproduktibilitas penelitian.

### Inti yang Harus Ditekankan

- Pemisahan data (Train / Validation / Test) harus dipisahkan secara tegas sejak awal dan tidak boleh terjadi tumpang tindih antar subset.
- Test set adalah "final exam" yang sakral: hanya dievaluasi satu kali setelah seluruh proses seleksi model dan tuning selesai.
- Preprocessing wajib dijalankan di dalam fold cross-validation untuk mencegah data leakage yang merusak validitas generalisasi.
- Semua kandidat model harus dibandingkan pada data split yang sama agar perbandingan bersifat adil dan kesimpulan penelitian dapat dipertanggungjawabkan.

### Transisi ke Slide Berikutnya

Setelah landasan evaluasi dan pemisahan data ditegakkan, kita akan masuk ke tahap operasional penyetelan model. Slide berikutnya akan menguraikan hyperparameter kunci pada GBDT, implikasi masing-masing parameter terhadap perilaku model, serta bagaimana pendokumentasian proses tuning menjadi prasyarat fundamental bagi eksperimen yang reproducible dalam penelitian tingkat magister.

---

## Slide 019 - Hyperparameter Kunci pada GBDT

### Narasi

Setelah membahas prinsip pemisahan data dan validasi silang pada slide sebelumnya, kita kini masuk ke tahap operasional pemilihan model, yaitu penyetelan hyperparameter pada algoritma Gradient Boosting Decision Tree (GBDT). Dalam konteks penelitian tingkat magister, proses ini bukan sekadar eksperimen coba-coba, melainkan bagian integral dari desain eksperimental yang harus terukur, terkontrol, dan dapat dipertanggungjawabkan secara ilmiah.

Tabel pada slide ini merangkum tujuh hyperparameter utama yang paling dominan mempengaruhi perilaku GBDT. Learning rate atau shrinkage berfungsi untuk mengecilkan kontribusi setiap pohon keputusan yang ditambahkan secara bertahap, sehingga model belajar lebih perlahan namun cenderung menghasilkan solusi yang lebih halus dan stabil. Jumlah iterasi atau n_estimators menentukan berapa banyak pohon yang akan dibangun; penambahan pohon meningkatkan kapasitas model hingga mencapai titik jenuh di mana perbaikan marginal mulai habis. Maksimum depth mengontrol kedalaman maksimal setiap pohon, sementara min leaf size atau min_child_weight mencegah pembentukan daun yang terlalu kecil yang biasanya menandakan overfitting terhadap noise dalam data. Selain itu, row sampling dan column sampling memperkenalkan elemen stokastik dengan mengambil sebagian baris atau fitur secara acak pada setiap iterasi boosting, mirip dengan prinsip subsampling pada Random Forest tetapi diterapkan dalam kerangka gradien. Terakhir, regularisasi L1 dan L2 bekerja langsung pada bobot daun untuk menekan magnitudo prediksi ekstrem dan meningkatkan generalisasi. Perlu dicatat bahwa penamaan parameter ini bervariasi tergantung library yang digunakan, seperti `learning_rate`/`eta`/`shrinkage` di XGBoost, LightGBM, atau CatBoost, serta `reg_alpha` dan `reg_lambda` untuk kontrol regulasi.

Dari sisi metodologi penelitian, ada tiga implikasi kritis yang harus diperhatikan. Pertama, hyperparameter bukanlah tombol putar sembarangan yang bisa diubah tanpa dasar teoritis atau empiris; setiap nilai harus memiliki justifikasi terkait karakteristik dataset dan tujuan evaluasi. Kedua, setiap keputusan tuning wajib didokumentasikan secara rinci termasuk versi library, seed acak, dan protokol pencarian, agar eksperimen bersifat fully reproducible sesuai standar publikasi internasional. Ketiga, pengaruh antar parameter bersifat interaktif, bukan independen. Misalnya, penurunan learning rate harus diimbangi dengan peningkatan jumlah iterasi, dan pembatasan depth akan berinteraksi kuat dengan regulasi L2. Mengabaikan ketergantungan ini dapat menghasilkan konfigurasi yang secara matematis tidak optimal atau bahkan menyebabkan konvergensi yang gagal.

### Inti yang Harus Ditekankan

- Hyperparameter GBDT mengontrol kompleksitas model dan mekanisme pembelajaran bertahap, bukan sekadar alat optimasi hitam-hitam.
- Dokumentasi konfigurasi lengkap mutlak diperlukan untuk menjamin reproduktibilitas eksperimen penelitian tingkat S2.
- Efek parameter bersifat saling bergantung; tuning harus mempertimbangkan interaksi antar variabel, bukan perubahan satu per satu secara isolatif.

### Transisi ke Slide Berikutnya

Memahami interaksi tersebut membawa kita langsung pada hubungan paling fundamental dalam GBDT, yaitu pertukaran antara learning rate dan jumlah estimasi pohon, yang akan kita bedah lebih lanjut pada slide berikutnya bersama strategi early stopping untuk menjaga efisiensi komputasi.

---

## Slide 020 - Pengaruh Learning Rate dan n_estimators

### Narasi

Pada slide ini, kita akan membahas interaksi fundamental antara dua parameter paling krusial dalam Gradient Boosting Decision Tree (GBDT), yaitu learning rate dan n_estimators. Seperti yang telah disinggung pada slide sebelumnya bahwa hyperparameter bukan sekadar tombol pengatur, melainkan komponen yang saling berinteraksi secara dinamis. Learning rate, atau sering disebut juga sebagai shrinkage, berfungsi untuk mengecilkan kontribusi setiap pohon keputusan yang ditambahkan secara bertahap. Ketika nilai learning rate dibuat kecil, model akan bergerak lebih hati-hati menuju minimum error, namun hal ini menuntut jumlah iterasi atau n_estimators yang jauh lebih besar agar konvergensi tercapai. Sebaliknya, learning rate yang besar mempercepat proses pembelajaran, tetapi berisiko menyebabkan model melompati solusi optimal karena langkah update yang terlalu agresif pada setiap iterasi.

Interaksi ini menciptakan trade-off klasik dalam penyetelan model. Ilustrasi pada tabel menunjukkan bagaimana kombinasi kedua parameter tersebut memengaruhi hasil validasi dan waktu komputasi. Dengan learning rate 0.3 dan hanya 50 pohon, model mungkin mencapai performa yang cukup baik dengan waktu training rendah, namun seringkali masih underfit atau belum stabil. Menurunkan learning rate menjadi 0.1 dan meningkatkan n_estimators menjadi 200 biasanya menghasilkan generalisasi yang lebih baik karena model memiliki kesempatan lebih banyak untuk memperbaiki residual secara halus. Sementara itu, learning rate sangat kecil seperti 0.01 memerlukan hingga 2000 iterasi untuk mencapai performa serupa, namun hasilnya cenderung lebih stabil terhadap noise data, meskipun biaya komputasinya meningkat signifikan. Perlu ditekankan bahwa angka-angka dalam tabel ini bersifat ilustratif konseptual dan tidak menggantikan hasil eksperimen empiris pada dataset spesifik.

Dari perspektif metodologi penelitian tingkat magister, pengelolaan trade-off ini harus dilakukan secara sistematis. Pertama, penggunaan early stopping pada validation set menjadi praktik wajib untuk mencegah overfitting akibat n_estimators yang berlebihan. Early stopping memungkinkan model berhenti tepat ketika performa validasi mulai menurun, sehingga menghemat sumber daya tanpa mengorbankan akurasi. Kedua, peneliti harus menetapkan budget waktu atau batas iterasi maksimal sebelum memulai eksperimen. Hal ini penting untuk memastikan perbandingan antar metode atau konfigurasi hyperparameter dilakukan secara adil. Tanpa batasan yang jelas, perbedaan performa bisa saja disebabkan oleh durasi training yang berbeda, bukan oleh kualitas algoritma itu sendiri.

### Inti yang Harus Ditekankan

- Learning rate dan n_estimators memiliki hubungan invers: learning rate kecil membutuhkan lebih banyak iterasi, sedangkan learning rate besar mempercepat konvergensi namun berisiko tidak stabil.
- Overfitting dapat terjadi jika n_estimators dibiarkan bertambah terus-menerus tanpa mekanisme penghentian dini (early stopping) pada data validasi.
- Dalam konteks penelitian, penetapan budget waktu dan penggunaan early stopping adalah syarat mutlak untuk memastikan replikabilitas dan fair comparison antar eksperimen.

### Transisi ke Slide Berikutnya

Setelah memahami dinamika antara learning rate dan jumlah iterasi, langkah selanjutnya adalah menelaah bagaimana kompleksitas struktural masing-masing pohon mempengaruhi perilaku model. Pada slide berikutnya, kita akan membahas pengaruh max depth dan min child weight dalam mengendalikan kapasitas representasi pohon serta dampaknya terhadap bias-variance tradeoff.

---

## Slide 021 - Pengaruh Max Depth dan Min Child Weight

### Narasi

Setelah kita menganalisis dinamika antara learning rate dan jumlah estimator pada slide sebelumnya, kini kita beralih ke parameter struktural yang secara langsung menentukan kapasitas pembelajaran setiap pohon individu dalam ensemble gradient boosting, yaitu max_depth dan min_child_weight. Pada level penelitian magister ini, penguasaan terhadap parameter ini bukan sekadar soal penyetelan teknis, melainkan fondasi metodologis untuk mengendalikan trade-off bias-varians secara eksplisit.

Parameter max_depth mengatur kedalaman maksimum rekursif yang diperbolehkan selama proses splitting. Ketika nilai max_depth dibatasi kecil, model dipaksa beroperasi dengan representasi yang lebih sederhana, yang secara inheren menghasilkan bias lebih tinggi namun varians yang rendah. Sebaliknya, memperbesar max_depth memberikan fleksibilitas tinggi bagi model untuk menangkap interaksi fitur yang kompleks dan non-linear, sehingga menurunkan bias namun secara drastis meningkatkan varians. Dalam arsitektur GBDT, penggunaan max_depth yang besar sering kali menjadi pemicu utama overfitting, terutama ketika dikombinasikan dengan learning rate yang kecil dan jumlah iterasi yang masif, karena model akan terus-menerus mengejar residual noise alih-alih sinyal umum.

Di sisi lain, min_child_weight atau min_data_in_leaf bertindak sebagai filter statistik pada setiap node daun. Parameter ini menetapkan batas minimum akumulasi bobot (atau jumlah sampel) yang harus terpenuhi sebelum suatu split dapat dieksekusi. Semakin besar nilai min_child_weight, semakin ketat batasan untuk menciptakan leaf-node yang terlalu spesifik atau berukuran mikro. Mekanisme ini berfungsi sebagai regularisasi berbasis frekuensi yang memaksa model untuk melakukan averaging pada grup data yang lebih homogen, sehingga meredam sensitivitas terhadap outlier dan fluktuasi acak. Nilai optimalnya sangat kontekstual dan bergantung pada rasio signal-to-noise serta distribusi kelas dalam dataset Anda.

Sebagai pedoman empiris yang konsisten dengan literatur competitive data mining dan best practices industri, rentang max_depth antara 3 hingga 8 umumnya menjadi titik awal yang robust untuk baseline pada data tabular. Namun, penting untuk menolak dogma nilai tetap. Sebagai peneliti, Anda wajib merancang eksperimen yang ketat menggunakan cross-validation berlapis, preferably stratified k-fold atau group k-fold tergantung struktur dependensi data, untuk memvalidasi stabilitas generalisasi. Pendekatan ini selaras dengan prinsip ablation study yang menekankan isolasi variabel struktural guna mengkuantifikasi kontribusi masing-masing parameter terhadap performa akhir model.

### Inti yang Harus Ditekankan

- Max_depth dan min_child_weight merupakan mekanisme regularisasi berbasis struktur pohon yang secara langsung mengatur kompleksitas model dan risiko overfit pada GBDT.
- Nilai max_depth yang besar berisiko tinggi menyebabkan overfitting jika tidak diimbangi dengan learning rate kecil dan kontrol iterasi yang ketat.
- Tidak ada konfigurasi hiperparameter universal; validasi rigoros melalui cross-validation dan analisis bias-varians mutlak diperlukan untuk menemukan titik optimum sesuai karakteristik dataset.

### Transisi ke Slide Berikutnya

Memahami bagaimana kedalaman pohon dan ambang batas node daun mengontrol kompleksitas struktural membuka jalan untuk mengeksplorasi teknik regularisasi berbasis sampling dan koefisien. Pada slide selanjutnya, kita akan membahas bagaimana subsample dan colsample memperkenalkan keragaman antar tree mirip konsep Random Forest, serta peran regularisasi L1 dan L2 dalam menjaga kestabilan nilai leaf tanpa mengorbankan kapasitas representasi model.

---

## Slide 022 - Pengaruh Subsample, Colsample, dan Regularisasi

### Narasi

Setelah pada slide sebelumnya kita membahas bagaimana struktur pohon dikendalikan melalui `max_depth` dan `min_child_weight`, kini kita beralih ke mekanisme stokastik dan penalitas eksplisit yang menjadi tulang punggung regulasi modern pada algoritma gradient boosting tingkat lanjut. Dalam praktiknya, membiarkan setiap iterasi melatih pohon pada seluruh dataset cenderung menghasilkan model yang sangat terkorelasi dan rentan terhadap overfitting noise. Untuk mengatasi hal ini, teknik `subsample` atau row sampling diterapkan dengan mengambil hanya sebagian acak dari baris data pada setiap tahap boosting. Pendekatan ini secara efektif mendiversifikasi pohon-pohon yang dibangun, menurunkan varians model, dan memperkuat kemampuan generalisasi. Namun, perlu diingat bahwa jika proporsi subsample terlalu kecil, model kehilangan sinyal informasi yang cukup sehingga bias justru meningkat. Penyeimbangan antara diversifikasi dan kelengkapan informasi inilah yang menjadi kunci tuning pada jenjang penelitian magister.

Selain dimensi baris, variasi juga dapat diperkenalkan melalui dimensi fitur menggunakan `colsample` atau column sampling. Prinsipnya mirip dengan subsample, tetapi diterapkan pada pemilihan fitur saat proses splitting pada setiap node atau per pohon. Dengan membatasi hanya sebagian fitur yang dipertimbangkan, kita mencegah dominasi fitur yang sangat kuat atau berkorelasi tinggi terhadap seluruh struktur pohon. Efeknya serupa dengan mekanisme bagging pada Random Forest: meningkatkan keragaman ensemble sekaligus mempercepat komputasi karena ruang pencarian split yang lebih sempit. Pada dataset tabular berdimensi tinggi yang umum ditemui dalam riset data mining, `colsample` sering kali menjadi parameter kritis untuk menjaga stabilitas numerik dan menghindari memorisasi pola artefak.

Di sisi lain, regularisasi eksplisit memberikan lapisan keamanan matematis yang langsung bekerja pada bobot leaf node. Parameter `reg_lambda` menerapkan regularisasi L2 (Ridge) yang menjumlahkan kuadrat bobot leaf. Efek utamanya adalah menekan nilai ekstrem pada leaf, menjaga permukaan prediksi tetap mulus, dan meningkatkan stabilitas numerik saat menghadapi outlier atau label yang noisy. Sebaliknya, `reg_alpha` menerapkan regularisasi L1 (Lasso) yang menjumlahkan nilai absolut bobot. Karakteristik unik L1 adalah kemampuannya mendorong bobot tertentu tepat menuju nol, sehingga secara otomatis melakukan seleksi fitur implisit di dalam proses boosting. Pemilihan antara L1, L2, atau kombinasi keduanya harus didasarkan pada karakteristik distribusi fitur dan tujuan interpretabilitas model dalam desain eksperimen.

Ketiga komponen ini tidak beroperasi secara independen. `Subsample` dan `colsample` secara fundamental mengubah jumlah informasi yang tersedia pada setiap iterasi, yang berarti learning rate dan jumlah estimator perlu disesuaikan agar konvergensi tetap optimal. Di sinilah peran regularisasi L1/L2 menjadi sangat strategis: ia memungkinkan kita mengeksplorasi arsitektur yang lebih ekspresif atau learning rate yang lebih agresif tanpa langsung jatuh ke dalam overfitting. Dalam konteks metodologi penelitian S2, interaksi ini menuntut pendekatan ablation study yang sistematis. Kita tidak bisa hanya mengandalkan grid search konvensional, melainkan perlu merancang eksperimen yang mengisolasi pengaruh masing-masing parameter terhadap trade-off bias-varians, lalu melaporkan sensitivitas model terhadap perubahan kecil dalam konfigurasi tersebut.

### Inti yang Harus Ditekankan

- Subsample dan colsample berfungsi sebagai mekanisme stokastik untuk mendiversifikasi pohon dan mengurangi korelasi antar iterasi, namun harus diseimbangkan agar tidak meningkatkan bias secara berlebihan akibat hilangnya sinyal informasi.
- Regularisasi L1 (`reg_alpha`) dan L2 (`reg_lambda`) memberikan kontrol eksplisit terhadap kompleksitas leaf node; L2 menjaga stabilitas dan kelulusan prediksi, sedangkan L1 mendorong sparsity dan seleksi fitur otomatis di dalam proses boosting.
- Parameter-parameter ini saling berinteraksi dalam mengontrol trade-off bias-varians; penyetelannya wajib dilakukan melalui eksperimen terstruktur dan ablation study, bukan sekadar heuristik, guna memastikan robustness model sebelum validasi akhir.

### Transisi ke Slide Berikutnya

Setelah konfigurasi subsample, colsample, dan regularisasi ditetapkan untuk mengendalikan kompleksitas model, langkah selanjutnya adalah memastikan bahwa performa yang terukur benar-benar mencerminkan kemampuan generalisasi, bukan sekadar keberuntungan pada satu partisi data. Oleh karena itu, kita akan membahas penerapan cross-validation yang ketat serta prinsip reproducible research untuk menjamin konsistensi dan transparansi hasil eksperimen Anda.

---

## Slide 023 - Cross-Validation dan Reproducibility

### Narasi

Setelah memahami bagaimana subsample, colsample, dan regularisasi L1/L2 memengaruhi keragaman pohon keputusan serta mencegah overfitting pada ensemble learning, langkah logis berikutnya adalah memastikan bahwa evaluasi performa model tersebut tidak bergantung pada satu kali pembagian data yang arbitrer. Pada slide ini, kita akan membahas mengapa cross-validation menjadi standar metodologis wajib dalam penelitian data mining tingkat magister, serta bagaimana menerapkan prinsip reproducibility agar temuan empiris dapat diverifikasi secara ilmiah.

Evaluasi berbasis single train-test split sangat rentan terhadap bias seleksi data dan varians tinggi akibat pengacakan. Dengan menerapkan cross-validation, dataset dibagi menjadi sejumlah fold yang digunakan secara bergiliran sebagai validation set, sehingga setiap observasi berkontribusi baik dalam proses pelatihan maupun pengujian. Pendekatan ini menghasilkan estimasi generalisasi error yang jauh lebih stabil, mengurangi ketergantungan pada keberuntungan dalam pemilihan split, dan memungkinkan peneliti mendeteksi fluktuasi performa yang mungkin terjadi karena distribusi data yang tidak merata antar subset.

Dalam implementasi praktis menggunakan ekosistem Python dan scikit-learn, strategi `RepeatedStratifiedKFold` menawarkan keseimbangan optimal antara reliabilitas statistik dan efisiensi komputasi. Perhatikan potongan kode berikut:
```python
from sklearn.model_selection import RepeatedStratifiedKFold

cv = RepeatedStratifiedKFold(
    n_splits=5,
    n_repeats=3,
    random_state=42
)
```
Konfigurasi ini melakukan pembagian stratifikasi menjadi 5 fold (`n_splits=5`), lalu mengulang proses pemecahan dan evaluasi tersebut sebanyak 3 kali dengan urutan pengacakan yang berbeda (`n_repeats=3`). Hasil akhirnya adalah 15 skor evaluasi independen yang dirata-ratakan, sehingga varians estimasi menurun drastis dibandingkan K-Fold tunggal. Parameter `random_state=42` berfungsi sebagai seed deterministik yang menjamin urutan pengacakan tetap identik setiap kali skrip dijalankan.

Namun, cross-validation yang dirancang matang tidak akan bermakna jika prinsip reproktibilitas eksperimen diabaikan. Dalam konteks penelitian S2, reproducibility menuntut kontrol ketat terhadap seluruh sumber non-deterministik. Pertama, tetapkan `random_state` secara eksplisit pada semua komponen yang melibatkan keacakan, termasuk generator data, splitter, dan algoritma optimisasi. Kedua, dokumentasikan versi paket pustaka secara presisi, karena patch minor pada scikit-learn atau NumPy dapat mengubah hasil numerik secara halus namun signifikan. Ketiga, persistensi konfigurasi hyperparameter beserta metadata eksekusi ke dalam struktur JSON atau database eksperimen. Terakhir, lakukan repeated runs dengan seed berbeda untuk mengukur stabilitas model, lalu laporkan interval kepercayaan atau standar deviasi, bukan hanya mean tunggal, guna mencerminkan ketidakpastian inherent dalam proses pembelajaran mesin.

### Inti yang Harus Ditekankan

- Cross-validation menghilangkan bias single-split dan memberikan estimasi generalisasi yang lebih robust serta deteksi dini terhadap instabilitas model.
- `RepeatedStratifiedKFold` dengan kombinasi `n_splits` dan `n_repeats` yang memadai adalah standar emas untuk evaluasi model tabular dalam penelitian akademik.
- Reproducibility bersifat sistemik: memerlukan penetapan seed global, pencatatan versi library, penyimpanan konfigurasi eksperimen, dan pelaporan metrik disertai ukuran dispersi (CI/std).
- Tanpa disiplin ini, perbandingan model dan tuning hyperparameter kehilangan validitas ilmiah dan sulit direplikasi oleh peneliti lain.

### Transisi ke Slide Berikutnya

Dengan fondasi evaluasi yang stabil dan prosedur eksperimen yang reproducible, kita kini siap menyoroti jebakan metodologis yang sering luput dari perhatian peneliti pemula. Ketika proses pemilihan model atau tuning hyperparameter dilakukan berulang kali tanpa protokol yang ketat, test set perlahan kehilangan sifatnya sebagai data independen. Hal ini membawa kita langsung ke pembahasan mengenai model selection bias dan masalah multiple testing, di mana kita akan mempelajari bagaimana menjaga integritas statistik selama fase validasi dan reporting hasil penelitian.

---

## Slide 024 - Model Selection Bias dan Multiple Testing

### Narasi

Setelah kita membahas pentingnya cross-validation dan prinsip reproducibility pada slide sebelumnya untuk memastikan estimasi performa yang stabil dan dapat direproduksi, langkah metodologis selanjutnya adalah memahami bagaimana proses evaluasi model dapat terjebak dalam jebakan statistik yang sering kali tidak disadari. Slide ini akan mengupas fenomena *Model Selection Bias* dan *Multiple Testing*, dua isu kritis yang sangat relevan dalam penelitian data mining tingkat lanjut dan praktik industri berbasis evidence.

Masalah inti muncul ketika *test set* digunakan secara tidak tepat selama tahap seleksi model atau tuning hyperparameter. Secara prinsip dasar machine learning, *test set* seharusnya berfungsi sebagai proxy untuk data dunia nyata yang benar-benar independen, yang tidak boleh dipengaruhi oleh proses pelatihan maupun pemilihan model. Namun, jika kita terus-menerus mengevaluasi berbagai kombinasi hyperparameter, melakukan feature selection berulang kali, atau mencoba beberapa arsitektur model berbeda pada *test set* yang sama, lalu memilih konfigurasi yang memberikan metrik terbaik, maka informasi dari *test set* tersebut telah secara tidak sengaja "bocor" ke dalam pipeline eksperimen. Akibatnya, *test set* kehilangan sifat independensinya, dan skor performa yang dilaporkan menjadi terlalu optimis (*overoptimistic*). Fenomena ini diperparah oleh *multiple comparisons problem*. Ketika Anda menguji puluhan atau ratusan konfigurasi pada dataset yang sama, secara statistik pasti ada satu konfigurasi yang tampak unggul hanya karena fluktuasi acak (*by chance*), bukan karena keunggulan algoritmik yang substantif. Inilah yang disebut sebagai *selection bias*.

Dalam konteks penelitian magister dan publikasi ilmiah, implikasi dari bias ini sangat serius dan menuntut disiplin metodologis yang tinggi. Perbandingan antar-model harus dilakukan secara ketat pada *validation set* yang terisolasi, atau lebih idealnya, menggunakan teknik *nested cross-validation*. Pada pendekatan ini, loop luar digunakan untuk menilai kemampuan generalisasi model terhadap data baru, sementara loop dalam digunakan eksklusif untuk seleksi model dan tuning hyperparameter tanpa pernah mengakses data uji eksternal. Selain itu, peningkatan performa yang terlihat kecil pada *test set*—misalnya kenaikan AUC atau F1-score sebesar 0,1% hingga 0,5%—tidak serta merta bisa dianggap sebagai kontribusi nyata dari metode yang diusulkan. Peningkatan tersebut wajib diuji signifikansi statistiknya menggunakan uji hipotesis berpasangan seperti paired t-test atau Wilcoxon signed-rank test, serta dilaporkan bersama interval kepercayaan (*confidence intervals*) atau nilai *p-value*. Hal ini memastikan bahwa klaim keunggulan model didasarkan pada bukti empiris yang kuat, bukan noise dalam data.

Pertanyaan kunci yang harus selalu diajukan peneliti sebelum mengklaim keberhasilan suatu eksperimen adalah: apakah peningkatan yang diamati benar-benar berasal dari inovasi metode baru, ataukah hanya akibat proses pencarian hyperparameter yang lebih intensif dan berulang kali? Untuk menjawabnya, desain eksperimen harus dirancang agar adil (*fair comparison*), dengan membatasi akses ke data uji, mendokumentasikan seluruh konfigurasi yang dicoba, dan menerapkan protokol statistik yang ketat sesuai standar publikasi internasional.

### Inti yang Harus Ditekankan

- Menggunakan *test set* untuk seleksi model atau tuning hyperparameter melanggar asumsi independensi dan menyebabkan *data leakage*, sehingga metrik performa menjadi bias dan overoptimistic.
- *Multiple testing* atau pengujian banyak model/konfigurasi pada dataset yang sama berisiko menghasilkan *false positive* akibat kebetulan statistik murni, bukan keunggulan metode.
- Penelitian harus menerapkan *nested cross-validation* atau *validation set* yang ketat, serta melaporkan signifikansi statistik (*p-value*, confidence interval) untuk setiap klaim peningkatan performa.

### Transisi ke Slide Berikutnya

Memahami batasan statistik dalam seleksi model membawa kita pada pertanyaan fundamental berikutnya: seberapa besar peningkatan performa yang benar-benar layak dipertahankan mengingat biaya komputasi dan kompleksitas model yang dihasilkan? Pada slide selanjutnya, kita akan membahas kerangka analisis komprehensif untuk menimbang antara *performance* dan *complexity*, sehingga keputusan metodologis dalam penelitian dapat diambil secara objektif, transparan, dan berdampak nyata.

---

## Slide 025 - Performance vs Complexity: Kerangka Analisis

### Narasi

Dalam penelitian data mining tingkat lanjut, penilaian kualitas sebuah model tidak boleh lagi disederhanakan hanya pada satu angka akhir seperti akurasi atau AUC. Slide ini memperkenalkan kerangka evaluasi multidimensi yang harus menjadi standar dalam setiap eksperimen algoritmik. Tabel pada slide ini memecah enam aspek kritis yang harus dijawab secara eksplisit. Pertama, predictive performance harus dievaluasi sebagai peningkatan relatif terhadap baseline yang kuat, bukan sekadar pencapaian angka mutlak. Kedua, statistical significance menjadi prasyarat mutlak untuk memastikan bahwa selisih performa yang diamati benar-benar berbeda secara nyata dan bukan produk dari noise atau fluktuasi sampling, yang secara langsung menyambung dengan pembahasan sebelumnya mengenai multiple testing dan pentingnya interval kepercayaan.

Ketiga, computational cost mengukur efisiensi sumber daya berupa waktu pelatihan dan konsumsi memori, faktor penentu utama untuk kelayakan deploy di lingkungan industri atau riset berskala besar. Keempat, scalability menguji perilaku model ketika dimensi dan volume data bertambah, sering kali dianalisis melalui profiling atau kurva learning rate. Kelima, interpretability menilai tingkat keterbacaan mekanisme pengambilan keputusan model, aspek yang semakin krusial seiring dengan tuntutan trustworthy AI dan regulasi data. Terakhir, simplicity mengingatkan kita pada prinsip Occam’s Razor: apakah penambahan lapisan arsitektur, fitur, atau hyperparameter yang rumit benar-benar menghasilkan nilai tambah yang proporsional, atau hanya menambah overhead tanpa gain substantif?

Kesimpulan slide menyoroti realitas empiris bahwa peningkatan marginal, misalnya 0,1% pada AUC, seringkali tidak berkontribusi signifikan terhadap state-of-the-art jika harus dibayar dengan kompleksitas yang sepuluh kali lipat lebih tinggi. Dalam konteks penulisan paper atau laporan penelitian magister, peneliti wajib mendokumentasikan trade-off ini secara transparan agar reviewer dan komunitas akademik dapat menilai kontribusi riil dari metode yang diajukan. Pendekatan evaluatif yang ketat ini juga menjadi landasan logis mengapa perbandingan model harus dilakukan dengan protokol yang adil, sebuah isu yang akan kita bedah secara konkret pada studi kasus berikutnya.

### Inti yang Harus Ditekankan

- Evaluasi model harus bersifat holistik dan multidimensi; metrik prediktif hanyalah salah satu pilar di samping signifikansi statistik, biaya komputasi, skalabilitas, interpretabilitas, dan kesederhanaan.
- Peningkatan performa kecil tidak otomatis menandakan kontribusi ilmiah yang valid jika dibarengi dengan lonjakan kompleksitas atau beban komputasi yang tidak proporsional.
- Transparansi dalam melaporkan trade-off antara performa dan kompleksitas merupakan standar etika dan metodologi penelitian yang wajib dipenuhi untuk klaim novelty yang kredibel.

### Transisi ke Slide Berikutnya

Memahami kerangka evaluasi ini membawa kita pada pertanyaan praktis: bagaimana memastikan perbandingan model dilakukan secara adil dalam praktik eksperimen? Pada studi kasus berikutnya, kita akan menguraikan skenario di mana klaim keunggulan metode baru justru runtuh ketika baseline dibandingkan tanpa proses tuning yang setara, serta langkah-langkah metodologis yang tepat untuk menghindari jebakan evaluasi yang bias.

---

## Slide 026 - Studi Kasus: Baseline yang Tidak Di-tune

### Narasi

Pada slide sebelumnya, kita telah membangun kerangka analisis yang mengingatkan bahwa peningkatan metrik prediktif tidak boleh dinilai secara isolatif, melainkan harus dipertimbangkan bersama beban kompleksitas dan biaya komputasi. Realitas di lapangan menunjukkan bahwa banyak klaim novelty dalam publikasi data mining justru lahir dari perbandingan yang timpang. Sebagai ilustrasi, terdapat studi kasus di mana seorang peneliti mengklaim metode barunya unggul dua persen pada metrik AUC dibandingkan XGBoost. Namun, audit metodologis mengungkap bahwa baseline XGBoost tersebut hanya dijalankan dengan konfigurasi parameter default tanpa proses hyperparameter tuning sama sekali. Dalam standar penelitian tingkat magister, hal ini merupakan pelanggaran prinsip fair comparison yang mendasar.

Ketika baseline tersebut dievaluasi ulang dengan protokol yang ketat—menggunakan budget waktu dan sumber daya komputasi yang setara dengan metode usulan—selisih performa justru menyusut menjadi tiga persepuluh persen, nilai yang secara statistik tidak signifikan. Untuk menjamin integritas eksperimen, langkah evaluasi yang benar harus mengikuti alur sistematis. Pertama, reproduksi baseline sesuai konfigurasi yang dilaporkan. Kedua, lakukan tuning hyperparameter untuk seluruh kandidat model dengan alokasi budget yang identik. Ketiga, jalankan repeated cross-validation dengan seed acak yang berbeda-beda untuk meminimalkan bias partisi data. Keempat, terapkan uji statistik inferensial untuk memverifikasi signifikansi selisih performa. Kelima, dokumentasikan varian hasil beserta confidence interval agar transparansi dan robustness klaim dapat diverifikasi oleh komunitas ilmiah.

Pelajaran krusial dari skenario ini menegaskan bahwa novelitas algoritma tidak dapat dibenarkan hanya dari hasil eksperimen yang mengandung bias seleksi atau ketidakadilan dalam benchmarking. Strong baseline berfungsi sebagai benteng pertama melawan overclaiming dan memastikan bahwa setiap kontribusi ilmiah benar-benar membawa peningkatan substantif. Prinsip evaluasi ketat ini akan segera kita operasionalkan pada sesi praktikum berikutnya, di mana kita akan menyiapkan ekosistem pemrograman untuk Gradient Boosting Decision Trees, mengintegrasikan library modern seperti XGBoost, LightGBM, dan CatBoost, serta menerapkan early stopping dan cross-validation secara terstruktur guna menganalisis trade-off antara akurasi dan efisiensi komputasi.

### Inti yang Harus Ditekankan

- Klaim novelty dan keunggulan metode hanya valid jika dibandingkan dengan baseline yang telah melalui proses tuning setara dan menggunakan budget komputasi yang sama.
- Protokol evaluasi penelitian wajib mencakup repeated cross-validation, uji statistik formal, serta pelaporan variance dan confidence interval untuk menjamin signifikansi empiris.
- Penerapan strong baseline bukan sekadar rutinitas teknis, melainkan kewajiban metodologis untuk menjaga integritas ilmiah dan mencegah klaim berlebihan dalam publikasi data mining.

### Transisi ke Slide Berikutnya

Sekarang kita akan menerjemahkan prinsip evaluasi ketat ini ke dalam kode. Pada slide berikutnya, kita akan menyiapkan lingkungan kerja Python, mengimpor library GBDT utama, dan merancang pipeline eksperimen yang siap menguji performa serta mencatat metrik kompleksitas untuk analisis trade-off yang objektif.

---

## Slide 027 - Praktikum: Menyiapkan Lingkungan GBDT

### Narasi

Setelah membahas urgensi baseline yang kuat dan protokol evaluasi yang adil pada slide sebelumnya, langkah selanjutnya adalah menerjemahkan prinsip metodologis tersebut ke dalam persiapan lingkungan komputasi yang terstandarisasi. Pada tingkat magister, kesiapan lingkungan bukan sekadar instalasi paket, melainkan fondasi untuk menjamin reproduktifitas eksperimen. Tanpa environment yang konsisten, perbedaan versi dependensi atau konfigurasi default yang tidak terdokumentasi dapat menghasilkan noise pada hasil evaluasi, sehingga klaim kinerja model kehilangan validitas ilmiah.

Untuk memulai, eksekusi perintah instalasi berikut melalui terminal atau cell notebook: `pip install xgboost lightgbm catboost scikit-learn pandas`. Perintah ini memastikan ketiga framework gradient boosting paling dominan di industri dan kompetisi tabular tersedia, bersamaan dengan stack data processing standar. Disarankan untuk menjalankan instalasi ini di virtual environment atau Conda yang terisolasi, guna mencegah konflik dependency yang sering mengganggu pipeline penelitian dan menghambat replikasi oleh reviewer atau peneliti lain.

Setelah dependensi terpasang, lakukan pengimporan modul inti menggunakan skrip berikut:
```python
import pandas as pd
import numpy as np
import xgboost as xgb
import lightgbm as lgb
from catboost import CatBoostClassifier
```
Setiap library membawa mekanisme optimasi yang berbeda. XGBoost mengandalkan regularisasi L1/L2, second-order Taylor approximation, dan sparse-aware splitting. LightGBM mengoptimalkan kecepatan melalui histogram-based binning dan leaf-wise tree growth yang mengurangi penggunaan memori. Sementara itu, CatBoost menonjolkan penanganan fitur kategorikal secara native, permutation-based target encoding, dan arsitektur symmetric tree yang meningkatkan stabilitas numerik. Pengimporan ini mempersiapkan namespace agar pipeline preprocessing, validasi silang, dan ekstraksi metrik dapat berjalan tanpa gangguan namespace collision.

Tujuan praktikum kali ini disusun khusus untuk mendukung rigor penelitian tingkat S2. Pertama, membandingkan performa masing-masing library pada dataset yang identik, sehingga kita dapat memetakan kapan suatu algoritma memberikan gain marginal versus ketika ia justru mengalami degradasi karena mismatch dengan struktur data. Kedua, menerapkan early stopping dan cross-validation secara konsisten untuk mengendalikan overfitting dan mengukur generalisasi lintas fold. Ketiga, mencatat waktu training dan akurasi secara sistematis. Data pencatatan ini akan menjadi basis analisis *performance vs complexity*, di mana kita mengevaluasi trade-off antara peningkatan akurasi versus beban komputasi, sebuah metrik kritis dalam publikasi riset yang menuntut efisiensi, skalabilitas, dan keberlanjutan eksperimen.

Persiapan lingkungan dan pemahaman filosofis masing-masing library ini akan langsung dioperasionalkan pada slide berikutnya, di mana kita akan melihat konfigurasi hyperparameter spesifik, mekanisme `eval_set`, serta penerapan `early_stopping_rounds` dalam implementasi XGBoost secara langsung.

### Inti yang Harus Ditekankan

- Konsistensi environment dan dokumentasi versi library merupakan syarat mutlak untuk reproduktifitas eksperimen dan validitas klaim penelitian di level jurnal/konferensi.
- Pemilihan framework GBDT harus didasari pada karakteristik dataset (skala data, proporsi fitur kategorikal, constraint hardware) dan bukan sekadar mengikuti tren populer.
- Pencatatan metrik waktu training dan akurasi sejak fase setup menjadi dasar objektif untuk analisis trade-off kompleksitas komputasi versus gain performa.
- Early stopping dan cross-validation bukanlah fitur opsional, melainkan komponen wajib dalam protokol evaluasi untuk mencegah data leakage dan memastikan estimasi generalisasi yang robust.

### Transisi ke Slide Berikutnya

Dengan lingkungan yang sudah siap dan tujuan evaluasi yang terstruktur, mari kita lanjutkan ke contoh implementasi konkret XGBoost untuk melihat bagaimana konfigurasi hyperparameter dan mekanisme early stopping diterapkan secara langsung dalam kode.

---

## Slide 028 - Contoh Implementasi: XGBoost

### Narasi

```python
from xgboost import XGBClassifier
from sklearn.model_selection import train_test_split

X_train, X_val, y_train, y_val = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = XGBClassifier(
    n_estimators=500,
    max_depth=6,
    learning_rate=0.05,
    subsample=0.8,
    colsample_bytree=0.8,
    reg_lambda=1.0,
    eval_metric="logloss",
    early_stopping_rounds=50
)

model.fit(
    X_train, y_train,
    eval_set=[(X_val, y_val)],
    verbose=False
)
```

Kode pada slide ini merepresentasikan alur kerja standar untuk melatih model XGBoost pada masalah klasifikasi tabular, yang menjadi fondasi eksperimen kita setelah menyiapkan lingkungan komputasi di slide sebelumnya. Langkah pertama adalah pemisahan data menggunakan `train_test_split` dari `scikit-learn`. Alokasi `test_size=0.2` memisahkan 20% data untuk validasi, sementara `random_state=42` mengunci seed numerik agar pembagian data dapat direproduksi secara identik di setiap eksekusi. Dalam konteks penelitian tingkat magister, reproduktibilitas ini wajib dicatat karena menjadi dasar validitas perbandingan antar metode.

Inisialisasi model dilakukan melalui `XGBClassifier` dengan konfigurasi hiperparameter yang dirancang untuk menyeimbangkan bias-variance tradeoff. `n_estimators=500` menetapkan batas maksimum pohon yang akan dibangun secara sequential. `max_depth=6` membatasi kompleksitas struktural setiap pohon untuk mencegah overfitting terhadap noise lokal. `learning_rate=0.05` berperan sebagai mekanisme shrinkage, di mana kontribusi setiap iterasi diredam agar model belajar secara bertahap dan stabil. Untuk memperkenalkan diversitas antar pohon, XGBoost menerapkan dua bentuk sampling acak: `subsample=0.8` mengambil 80% observasi secara acak pada setiap boosting iteration, sedangkan `colsample_bytree=0.8` mengambil 80% fitur secara acak saat membangun setiap tree. Regulasi L2 diterapkan melalui `reg_lambda=1.0` untuk menstabilkan bobot pada node daun dan menekan sensitivitas model terhadap outlier.

Proses pelatihan dipicu oleh `.fit()` yang menerima data latih serta pasangan validasi melalui `eval_set=[(X_val, y_val)]`. Argumen `eval_metric="logloss"` memberitahu engine XGBoost untuk memantau cross-entropy loss pada data validasi selama training. Kombinasi ini memungkinkan aktivasi `early_stopping_rounds=50`: jika logloss pada set validasi tidak mengalami penurunan selama 50 iterasi berturut-turut, proses training akan dihentikan secara otomatis pada iterasi terbaik. Fitur ini menghilangkan kebutuhan grid search manual untuk mencari jumlah iterasi optimal, sekaligus mengheman waktu komputasi. `verbose=False` menjaga output notebook tetap ringkas, namun metadata performa masih tersimpan dalam atribut model untuk analisis lanjutan.

Catatan pada slide menegaskan bahwa `early_stopping_rounds` berfungsi sebagai mekanisme kontrol dinamika konvergensi, bukan sekadar penghentian darurat. Penyesuaian `eval_metric` harus selalu didorong oleh definisi sukses riset atau kebutuhan domain, karena metrik yang dipilih secara langsung mengarahkan arah optimasi gradien selama proses boosting berjalan.

### Inti yang Harus Ditekankan

- Hiperparameter XGBoost bekerja secara sinergis: `learning_rate` dan `n_estimators` mengatur kecepatan konvergensi, sementara `subsample`, `colsample_bytree`, dan `reg_lambda` mengendalikan varians dan overfitting.
- `early_stopping_rounds` mengintegrasikan validasi silang implicit ke dalam loop training, memungkinkan penentuan iterasi optimal secara adaptif tanpa eksploitasi penuh kapasitas model.
- Pemilihan `eval_metric` harus selaras dengan fungsi kerugian yang ingin dioptimalkan dan metrik evaluasi akhir yang dilaporkan dalam paper atau laporan penelitian.
- Penggunaan `random_state` dan struktur kode modular menjamin transparansi eksperimen, memenuhi standar reproduktibilitas penelitian data mining tingkat lanjut.

### Transisi ke Slide Berikutnya

Struktur kode yang sama akan kita pertahankan untuk memastikan fair comparison antar library. Pada slide berikutnya, kita akan melihat implementasi LightGBM dengan penekanan pada perbedaan penanganan sampling baris melalui `subsample_freq` serta penggunaan callback bawaan untuk early stopping, yang akan kita bandingkan secara paralel bersama pola implementasi CatBoost.

---

## Slide 029 - Contoh Implementasi: LightGBM

### Narasi

Setelah sebelumnya kita mengimplementasikan XGBoost dengan pendekatan gradient boosting tradisional, kini kita beralih ke LightGBM yang menawarkan efisiensi komputasi dan penggunaan memori yang lebih optimal melalui algoritma leaf-wise tree growth dan histogram-based splitting. Pada kode di slide ini, kita mengimpor `LGBMClassifier` dari pustaka `lightgbm` dan melakukan inisialisasi model dengan serangkaian hiperparameter yang telah dikonfigurasi. Parameter `n_estimators=500` menentukan jumlah iterasi boosting, sementara `max_depth=6` membatasi kedalaman pohon untuk menjaga keseimbangan antara bias dan varians. Learning rate sebesar `0.05` diterapkan bersama dengan teknik subsampling baris (`subsample=0.8`) dan kolom (`colsample_bytree=0.8`) untuk meningkatkan generalisasi model dan mengurangi korelasi antar weak learner.

Poin teknis yang perlu diperhatikan secara khusus adalah parameter `subsample_freq=1`, yang mengontrol frekuensi pengambilan sampel baris selama proses pelatihan. Nilai `1` berarti subsampling dilakukan pada setiap iterasi boosting, sehingga setiap pohon dilatih pada subset data yang berbeda secara acak. Mekanisme ini sangat efektif dalam mencegah overfitting pada dataset berukuran besar dan mempercepat konvergensi model. Selain itu, konfigurasi regulerisasi L2 melalui `reg_lambda=1.0` tetap dipertahankan sebagai mekanisme stabilisasi bobot daun sesuai praktik terbaik dalam penyetelan model tabular.

Pada tahap pelatihan menggunakan metode `.fit()`, LightGBM memanfaatkan sistem callback untuk menangani early stopping, berbeda dengan XGBoost yang menerima parameter tersebut langsung di konstruktor. Kita meneruskan `eval_set=[(X_val, y_val)]` untuk memantau metrik evaluasi pada data validasi, serta menambahkan `callbacks=[lgb.early_stopping(50)]`. Callback ini akan secara otomatis menghentikan pelatihan jika performa validasi tidak membaik selama 50 putaran berturut-turut. Pendekatan berbasis callback ini merupakan standar pada versi modern LightGBM dan memberikan kontrol yang lebih fleksibel terhadap alur eksperimen, sekaligus menghemat sumber daya komputasi. Pola implementasi ini juga berlaku konsisten pada library gradient boosting lainnya seperti CatBoost, memudahkan peneliti untuk melakukan pertukaran model secara sistematis dalam studi komparatif.

### Inti yang Harus Ditekankan

- LightGBM menggunakan `subsample_freq` untuk mengatur frekuensi row sampling, yang menjadi pembeda utama dibandingkan mekanisme default library gradient boosting lain.
- Early stopping pada LightGBM modern diimplementasikan via `callbacks`, bukan sebagai argumen langsung di konstruktor, menuntut adaptasi dalam penulisan skrip reproduktif.
- Konsistensi pola API antar library (LightGBM, XGBoost, CatBoost) memungkinkan pertukaran model yang cepat dan adil dalam benchmarking penelitian.
- Pengaturan hiperparameter harus selalu disertai monitoring validasi eksplisit untuk memastikan generalisasi, stabilitas numerik, dan efisiensi anggaran komputasi.

### Transisi ke Slide Berikutnya

Dengan pemahaman implementasi teknis ketiga model gradient boosting utama, langkah selanjutnya adalah merangkum seluruh proses ini ke dalam sebuah workflow eksperimen yang terstruktur. Kita akan membahas alur kerja komparatif yang ketat, mulai dari pembagian data, tuning hiperparameter, hingga evaluasi final, dengan prinsip bahwa test set hanya digunakan sekali setelah model terpilih.

---

## Slide 030 - Workflow Eksperimen Komparatif

### Narasi

Setelah kita menelaah contoh implementasi kode untuk algoritma ensemble seperti LightGBM pada slide sebelumnya, langkah krusial berikutnya dalam penelitian data mining tingkat magister adalah menyusun kerangka eksperimen yang sistematis dan dapat direproduksi. Slide ini memperkenalkan workflow komparatif yang berfungsi sebagai standar metodologis untuk memastikan setiap perbandingan antar kandidat model dilakukan secara adil, transparan, dan bebas dari bias desain. Dalam konteks penelitian S2, kepatuhan terhadap alur ini bukan sekadar praktik coding, melainkan jaminan validitas ilmiah dari klaim kinerja model yang Anda ajukan.

Mari kita uraikan setiap tahapan dalam flowchart yang disajikan. Proses dimulai dari EDA dan preprocessing yang ketat, karena kualitas representasi data menentukan batas atas performa model. Segera setelah itu, data harus dipisah secara tegas menjadi subset train, validation, dan test. Tahap tuning hyperparameter hanya diperbolehkan menggunakan data train dan validation. Setelah konfigurasi optimal ditemukan, seluruh kandidat model harus dilatih ulang dengan alokasi budget komputasi yang seragam, misalnya jumlah iterasi atau epoch yang identik, untuk menghilangkan variabel bias kapasitas pelatihan. Model kemudian dievaluasi pada validation set untuk seleksi awal. Hanya setelah model terbaik definitif dipilih, kita melakukan evaluasi final sekali saja pada test set yang benar-benar tersembunyi selama seluruh fase pengembangan. Terakhir, untuk menjamin robustness dan menghindari overfitting terhadap split tertentu, seluruh workflow harus diulang dengan seed acak yang berbeda, lalu hasilnya dianalisis menggunakan uji statistik untuk memverifikasi signifikansi perbedaan performa.

Di bagian bawah slide, terdapat tiga prinsip fundamental yang bersifat mutlak. Pertama, test set tidak boleh pernah digunakan untuk tuning atau pengambilan keputusan selama pengembangan model, karena pelanggaran ini menyebabkan data leakage yang menghasilkan estimasi performa yang terlalu optimistis dan tidak generalisasi. Kedua, manfaatkan pipeline dari scikit-learn untuk membungkus preprocessing dan estimator dalam satu objek tunggal; teknik ini secara otomatis mencegah kebocoran statistik saat cross-validation atau pembagian subset, karena transformasi hanya dihitung berdasarkan data pelatihan pada setiap fold. Ketiga, dokumentasikan setiap keputusan metodologis secara rinci, mulai dari strategi splitting, jenis imputasi, scaling, hingga alasan pemilihan konfigurasi, karena reproduktibilitas dan audit trail adalah syarat wajib untuk publikasi di konferensi atau jurnal bereputasi.

Sebagai penutup penjelasan slide ini, workflow komparatif ini bertindak sebagai benteng metodologis yang melindungi integritas riset Anda. Dengan mengikuti struktur ini, Anda memastikan bahwa keunggulan suatu metode didasarkan pada bukti empiris yang kuat dan terkontrol, bukan pada kebetulan acak atau kesalahan arsitektur eksperimen. Konsistensi dalam menerapkan alur ini akan sangat memudahkan proses penulisan paper, reviewer akan melihat kejelasan prosedur dan kehati-hatian Anda dalam mengelola data.

### Inti yang Harus Ditekankan

- Test set adalah aset final yang hanya boleh diakses satu kali setelah model benar-benar selesai dikembangkan; penggunaannya untuk tuning merusak validitas generalisasi.
- Penggunaan `sklearn.pipeline.Pipeline` wajib diterapkan untuk mengisolasi preprocessing dari validation/testing, mencegah data leakage statistik yang sering luput dari peneliti pemula.
- Pengulangan eksperimen dengan seed berbeda dan analisis statistik diperlukan untuk membuktikan bahwa selisih akurasi antar model signifikan secara ilmiah, bukan sekadar noise acak.
- Dokumentasi lengkap setiap keputusan preprocessing, splitting, dan tuning adalah fondasi reproduktibilitas yang dituntut dalam standar publikasi penelitian internasional.

### Transisi ke Slide Berikutnya

Setelah workflow ini memastikan kita mendapatkan model terbaik yang telah melalui proses seleksi yang ketat dan adil, pertanyaan selanjutnya adalah bagaimana cara mengukur keberhasilan tersebut secara tepat. Pada slide berikutnya, kita akan membahas secara mendalam tentang berbagai metrik evaluasi untuk klasifikasi dan regresi, serta strategi memilih metrik primer yang selaras dengan research question Anda.

---

## Slide 031 - Metrik Evaluasi

### Narasi

Setelah menetapkan alur eksperimen komparatif pada slide sebelumnya, langkah krusial berikutnya adalah menentukan bagaimana performa model akan diukur secara objektif. Pemilihan metrik evaluasi bukan sekadar rutinitas teknis, melainkan keputusan metodologis yang harus selaras dengan sifat dataset, bobot kesalahan prediksi, dan pertanyaan penelitian. Pada tahap validasi selama tuning hyperparameter maupun pada pengujian akhir menggunakan test set, metrik yang dipilih akan menjadi penentu utama dalam seleksi model terbaik dan menghindari bias seleksi yang tidak disadari.

Untuk masalah klasifikasi, setiap metrik menyoroti aspek kinerja yang berbeda. Akurasi memberikan gambaran umum keberhasilan prediksi, namun hanya dapat diandalkan ketika distribusi kelas seimbang. Ketika terjadi ketidakseimbangan kelas atau biaya kesalahan prediksi tidak simetris, kita perlu beralih ke presisi yang mengukur ketepatan terhadap kelas positif, serta recall yang menilai seberapa baik model menangkap seluruh instance kelas positif. F1-score muncul sebagai harmonik rata-rata dari kedua metrik tersebut untuk menyeimbangkan keduanya secara adil. Selain itu, ROC-AUC mengevaluasi kemampuan model dalam membedakan kelas secara keseluruhan tanpa bergantung pada ambang batas klasifikasi tertentu, sedangkan PR-AUC lebih sensitif terhadap performa pada kelas minoritas dan direkomendasikan khusus untuk dataset yang sangat tidak seimbang.

Dalam konteks regresi, fokus pengukuran bergeser ke besaran kesalahan prediksi. Mean Absolute Error (MAE) memberikan rata-rata absolut dari selisih antara nilai prediksi dan aktual, sehingga relatif stabil terhadap outlier. Root Mean Square Error (RMSE) melakukan kuadratisasi error terlebih dahulu, yang berarti memberikan penalti lebih besar terhadap prediksi yang meleset jauh, menjadikannya pilihan tepat jika kesalahan ekstrem sangat merugikan. Sementara itu, koefisien determinasi atau R² mengkuantifikasi proporsi varians dalam variabel target yang berhasil dijelaskan oleh model, memberikan referensi langsung terhadap performa baseline sederhana seperti mean dari data training.

Dari perspektif penelitian tingkat magister, pemilihan metrik harus didorong oleh hipotesis dan tujuan spesifik penelitian. Tentukan satu metrik primer sebagai indikator kesuksesan utama yang langsung menjawab research question, lalu laporkan metrik pendukung lainnya untuk memberikan bukti triangulasi yang kuat. Hindari praktik memilih metrik secara selektif hanya karena menghasilkan angka tertinggi bagi metode usulan Anda; transparansi pelaporan semua metrik relevan justru meningkatkan kredibilitas ilmiah dan memungkinkan replikasi studi oleh peneliti lain.

Dengan model yang telah dievaluasi dan dipilih berdasarkan metrik yang tepat, langkah logis selanjutnya adalah memahami mekanisme internal model tersebut. Kita akan membahas bagaimana fitur-fitur input berkontribusi terhadap hasil prediksi melalui analisis feature importance, sekaligus mengingatkan bahwa korelasi statistik tidak sama dengan hubungan kausal, yang membuka jalan menuju teknik interpretasi yang lebih mendalam seperti SHAP.

### Inti yang Harus Ditekankan

- Metrik evaluasi adalah alat ukur metodologis, bukan sekadar angka teknis; pilihannya harus konsisten dengan sifat data dan formulasi research question.
- Gunakan ROC-AUC untuk melihat diskriminasi kelas secara global, dan PR-AUC ketika fokus penelitian tertuju pada kelas positif yang langka.
- Dalam publikasi penelitian, selalu tentukan metrik primer secara eksplisit, dukung dengan metrik sekunder, dan hindari cherry-picking agar hasil eksperimen dapat dipertanggungjawabkan secara ilmiah.

### Transisi ke Slide Berikutnya

Setelah kita memastikan model mana yang paling sesuai dengan kriteria evaluasi, saatnya membongkar "kotak hitam" tersebut dengan menganalisis kontribusi masing-masing fitur terhadap keputusan model, yang akan kita bahas pada slide mengenai Feature Importance dan Interpretasi.

---

## Slide 032 - Feature Importance dan Interpretasi

### Narasi

Setelah pada slide sebelumnya kita membahas berbagai metrik evaluasi untuk mengukur kinerja prediktif model, langkah metodologis selanjutnya dalam pipeline penelitian data mining adalah mengungkap mekanisme internal model tersebut. Pada arsitektur Gradient Boosting Decision Trees (GBDT), kemampuan untuk mengkuantifikasi kontribusi setiap variabel terhadap output sangat krusial, terutama ketika penelitian menuntut transparansi, reproducibility, dan justifikasi empiris yang kuat. Terdapat tiga pendekatan komputasional utama untuk menghitung feature importance pada GBDT. Pertama, gain-based importance mengukur akumulasi pengurangan fungsi loss atau peningkatan skor impurity setiap kali suatu fitur dipilih untuk melakukan split pada node decision tree. Pendekatan ini secara langsung mengaitkan bobot fitur dengan efisiensi pembelajaran model. Kedua, split count hanya mencatat frekuensi berapa kali suatu fitur muncul dalam struktur splitting sepanjang seluruh ensemble pohon. Meski mudah dihitung, metode ini dikenal memiliki bias struktural karena fitur dengan kardinalitas tinggi atau distribusi kontinu cenderung mendapat skor lebih tinggi hanya karena peluang splitnya lebih besar. Ketiga, permutation importance menawarkan kerangka kerja yang lebih robust secara statistik. Teknik ini bekerja dengan mengacak nilai satu fitur tertentu pada set validasi atau testing, kemudian mengukur degradasi performa model. Drop performa yang signifikan menandakan ketergantungan model yang tinggi pada fitur tersebut, terlepas dari bias struktural yang melekat pada perhitungan training.

Interpretasi skor importance memerlukan disiplin analitis yang ketat, khususnya dalam konteks penelitian tingkat magister. Perlu ditegaskan bahwa feature importance tidak menyiratkan hubungan kausal antara predictor dan target variable. Korelasi statistik yang terdeteksi oleh model mungkin saja merupakan artefak dari confounding factors, data leakage, atau multicollinearity antarfitur. Selain itu, gain-based importance yang diekstrak langsung dari data training rentan terhadap overfitting bias, di mana fitur yang secara kebetulan membentuk pola noise pada subset training akan mendapat dominasi skor meskipun gagal generalisasi. Untuk membangun interpretasi yang lebih teoretis dan dapat dipertanggungjawabkan secara statistik, kita akan membahas framework SHAP (SHapley Additive exPlanations) secara mendalam pada Pertemuan 13, yang memanfaatkan teori permainan kooperatif untuk mengalokasikan kontribusi fitur secara aditif dan konsisten.

Secara operasional, pemanfaatan feature importance dalam riset data mining berfungsi sebagai instrumen diagnostik dan strategik. Pertama, ia menjadi early warning system untuk mengidentifikasi fitur yang tidak relevan atau redundan, sehingga peneliti dapat merancang prosedur feature selection atau transformasi yang lebih efisien sebelum menjalankan eksperimen skala penuh. Kedua, visualisasi importance membantu peneliti membaca logika keputusan model, yang sangat vital ketika harus menyusun narasi temuan empiris atau menjawab pertanyaan reviewer terkait black-box nature dari ensemble methods. Ketiga, peta kontribusi fitur menjadi titik awal yang sistematis untuk conducting error analysis. Dengan mengelompokkan sampel kesalahan prediksi berdasarkan profil fitur dominan, peneliti dapat mengisolasi failure modes, merancang ablation study yang terarah, dan merumuskan hipotesis perbaikan model berbasis evidence, bukan sekadar trial-and-error.

### Inti yang Harus Ditekankan

- Feature importance pada GBDT memiliki asumsi komputasional yang berbeda; permutation importance umumnya lebih reliable untuk validasi eksternal dibanding gain-based atau split count.
- Skor importance bersifat deskriptif-korelasional, bukan kausal; klaim sebab-akibat wajib didukung domain knowledge, uji statistik independen, atau desain eksperimen yang ketat.
- Dalam penelitian, gunakan feature importance sebagai fondasi metodologis untuk error analysis, ablation study, dan justifikasi desain eksperimen, bukan sekadar pelengkap visualisasi.

### Transisi ke Slide Berikutnya

Pemahaman tentang bagaimana model menilai dan mengurutkan kontribusi fitur membuka jalan untuk mengevaluasi mengapa GBDT secara konsisten mendominasi benchmark pada data tabular. Slide berikutnya akan membahas fakta empiris bahwa GBDT sering menjadi baseline terkuat untuk masalah tabular, serta implikasi metodologisnya bagi standar perbandingan dan pelaporan penelitian tingkat magister.

---

## Slide 033 - GBDT sebagai Strong Baseline Data Tabular

### Narasi

Setelah pada slide sebelumnya kita membahas bagaimana mengekstrak dan menginterpretasikan feature importance dari model ensemble berbasis pohon, langkah metodologis berikutnya yang krusial dalam siklus penelitian data mining adalah penetapan baseline eksperimen yang rigor. Dalam praktik industri maupun literatur akademik mutakhir, algoritma Gradient Boosting Decision Tree (GBDT) beserta variannya seperti XGBoost, LightGBM, dan CatBoost secara konsisten mendominasi leaderboard dan benchmark pada dataset tabular. Dominasi ini bukan kebetulan, melainkan didorong oleh kemampuan native mereka dalam menangani missing value, ketahanan terhadap skewness dan outlier, dukungan langsung untuk encoding fitur kategorikal tanpa preprocessing berat, serta mekanisme regularisasi L1/L2 dan subsampling yang secara efektif menekan overfitting bahkan ketika jumlah boosting round cukup tinggi. Meskipun demikian, Random Forest dan Logistic Regression tetap memegang peran vital sebagai baseline acuan. Model-model ini menawarkan interpretabilitas tinggi, kecepatan training yang ekstrem, dan stabilitas varians yang baik, sehingga berfungsi sebagai tolak ukur apakah kompleksitas tambahan dari model lain benar-benar memberikan nilai tambah yang signifikan.

Secara implikasi penelitian, terutama pada konteks magister yang menekankan desain eksperimen yang ketat dan reproducibility, klaim keunggulan suatu metode baru pada domain tabular tidak akan dianggap valid secara ilmiah jika tidak dibandingkan dengan GBDT yang telah melalui proses hyperparameter tuning secara sistematis. Menggunakan tools seperti `scikit-learn`, `optuna`, atau `ray.tune` untuk melakukan exhaustive atau probabilistic search pada ruang parameter baseline adalah kewajiban, bukan opsional. Jika sebuah usulan metode baru hanya mampu mengalahkan baseline GBDT dengan selisih performa marginal (misalnya <1% improvement) namun memerlukan biaya komputasi pelatihan atau inference yang jauh lebih besar, maka analisis trade-off antara akurasi dan efisiensi sumber daya wajib dilaporkan secara transparan. Hasil yang menunjukkan dominasi GBDT justru sering kali menjadi kontribusi penting dalam literature karena mengarahkan peneliti untuk fokus pada problem formulation atau feature engineering yang lebih tepat, bukan sekadar menambah kompleksitas model. Pertanyaan mengenai apakah arsitektur deep learning dapat benar-benar memberikan keuntungan nyata pada data tabular murni akan kita bedah lebih lanjut pada Pertemuan 09, di mana kita akan menelaah arsitektur khusus seperti FT-Transformer atau TabNet.

### Inti yang Harus Ditekankan

- GBDT (XGBoost, LightGBM, CatBoost) merupakan standar industri dan akademik sebagai baseline terkuat untuk masalah klasifikasi dan regresi pada data tabular.
- Baseline sederhana seperti Random Forest dan Logistic Regression wajib disertakan untuk memvalidasi apakah penambahan kompleksitas model memberikan gain yang proporsional.
- Validitas kontribusi ilmiah sangat bergantung pada fair comparison dengan GBDT yang dituning secara optimal, bukan sekadar menjalankan default parameters.
- Setiap paper atau proposal penelitian harus menyertakan analisis trade-off komputasi; peningkatan performa kecil tidak membenarkan beban resource yang berlebihan.
- Pemahaman ini menjadi fondasi metodologis sebelum memasuki diskusi tentang deep tabular learning dan evaluasi kritis terhadap publikasi penelitian.

### Transisi ke Slide Berikutnya

Memahami standar baseline yang solid ini membawa kita pada aspek evaluatif selanjutnya dalam menilai kualitas penelitian: bagaimana kita secara sistematis menguji klaim-klaim yang diajukan dalam paper. Mari kita beralih ke kerangka pertanyaan kritis yang akan menjadi panduan utama Anda saat melakukan critical review terhadap publikasi terindeks Scopus.

---

## Slide 034 - Critical Discussion: Pertanyaan Kunci untuk Paper

### Narasi

Setelah sebelumnya membahas fakta empiris bahwa Gradient Boosting Decision Trees (GBDT) seperti XGBoost, LightGBM, dan CatBoost umumnya menjadi baseline terkuat pada dataset tabular, slide ini mengalihkan fokus ke ranah metodologi penelitian yang menjadi tulang punggung kegiatan akademik jenjang magister. Memahami kekuatan baseline saja tidak cukup; kemampuan untuk mengevaluasi rigoritas eksperimen dalam literatur maupun dalam karya ilmiah sendiri justru menentukan kualitas kontribusi penelitian Anda. Dalam konteks tugas critical review paper terindeks Scopus, terdapat enam pertanyaan kunci yang harus menjadi lensa utama setiap kali Anda menganalisis sebuah publikasi.

Pertanyaan pertama menyoroti validitas baseline: apakah model pembanding dalam paper tersebut di-tuning secara optimal? Klaim keunggulan metode baru sering kali rapuh jika dibandingkan dengan baseline yang masih menggunakan konfigurasi default atau tuning parsial. Kedua, perlu ditelusuri kedalaman eksplorasi hyperparameter dan metode optimasi yang digunakan, apakah melalui grid search, random search, Bayesian optimization, atau pendekatan lain yang terstruktur. Ketiga, peningkatan performa yang dilaporkan harus diverifikasi signifikansinya secara statistik; perbedaan margin kecil tanpa uji signifikansi seperti paired t-test atau Wilcoxon signed-rank test tidak dapat diklaim sebagai temuan ilmiah yang valid. Keempat, aspek efisiensi komputasi wajib dievaluasi melalui perbandingan waktu eksekusi dan kebutuhan sumber daya hardware, mengingat trade-off antara akurasi dan biaya komputasi adalah pertimbangan nyata dalam penerapan industri. Kelima, robustness model harus diuji konsistensinya across multiple datasets; hasil yang hanya unggul pada satu distribusi data tertentu menunjukkan generalisasi yang lemah. Terakhir, pertanyakan esensi noveltinya: apakah kontribusi penelitian terletak pada desain algoritma yang fundamentally baru, atau sekadar variasi konfigurasi dan preprocessing yang sudah lazim?

Enam pertanyaan ini membentuk kerangka kerja sistematis untuk membedakan antara *performance improvement* semu dengan *scientific contribution* yang substansial. Di tingkat pascasarjana, keberhasilan penelitian tidak diukur semata dari kenaikan persentase akurasi, melainkan dari transparansi eksperimen, ketepatan pemilihan metrik evaluasi, serta kejelasan batasan aplikasi metode yang diusulkan. Dengan membiasakan diri mengajukan pertanyaan-pertanyaan ini, Anda akan mengembangkan kapasitas analitis untuk membaca paper secara kritis, mengidentifikasi kelemahan metodologis yang sering terlewat, dan sekaligus meningkatkan standar penulisan proposal maupun laporan penelitian Anda sendiri.

### Inti yang Harus Ditekankan

- Validitas klaim keunggulan model sangat bergantung pada kualitas tuning baseline, penggunaan uji signifikansi statistik, dan transparansi pelaporan kompleksitas komputasi.
- Konsistensi hasil lintas dataset dan kejelasan novelitas metodologis merupakan indikator utama kualitas penelitian empiris di bidang data mining.
- Tujuan critical review adalah melatih mahasiswa memisahkan inovasi algoritmik yang substantif dari sekadar penyesuaian konfigurasi hiperparameter atau preprocessing.

### Transisi ke Slide Berikutnya

Dengan kerangka evaluasi kritis ini telah dipahami, langkah selanjutnya adalah menerapkannya secara langsung pada proyek penelitian Anda. Kita akan beralih ke identifikasi kandidat research gap yang konkret, khususnya dengan memanfaatkan analisis kegagalan atau keterbatasan model ensemble sebagai titik awal pengembangan hipotesis dan desain eksperimen minggu ini.

---

## Slide 035 - Research Project: Mengidentifikasi Candidate Research Gap

### Narasi

Setelah pada slide sebelumnya kita menyusun kerangka pertanyaan kritis untuk mengevaluasi paper terindeks Scopus, langkah metodologis selanjutnya dalam proyek penelitian adalah menerjemahkan temuan tersebut menjadi celah penelitian yang konkret dan dapat diuji. Slide ini memandu proses identifikasi *candidate research gap*, dengan penekanan khusus pada konteks *Ensemble Learning* dan *Gradient Boosting*. Proyek penelitian kalian dirancang secara bertahap: minggu keempat difokuskan pada penetapan *strong baseline*, minggu kelima (posisi kita saat ini) dialokasikan sepenuhnya untuk identifikasi kandidat gap, dan minggu keenam digunakan untuk memfinalisasi rumusan gap tersebut agar siap memasuki fase perancangan eksperimen.

Untuk menemukan gap yang valid dan bermakna secara ilmiah, jangan mengandalkan asumsi semata. Lakukan eksplorasi sistematis melalui lima pendekatan utama. Pertama, uji performa GBDT pada kondisi data yang tidak biasa atau menantang, seperti dataset yang sangat *imbalanced*, mengandung *noise* tinggi, atau memiliki fitur kategorikal dengan kardinalitas kompleks. Kedua, lakukan analisis error secara mendalam. Identifikasi pada instance atau sampel mana model GBDT cenderung gagal memberikan prediksi yang akurat, lalu korelasikan kegagalan tersebut dengan karakteristik fitur atau struktur data. Ketiga, bandingkan aspek *interpretability* dari GBDT dengan model *ensemble* lain atau model dasar, karena transparansi keputusan sering kali menjadi celah penelitian yang relevan di bidang *trustworthy AI*. Keempat, ukur sensitivitas model terhadap perubahan *hyperparameter* serta stabilitasnya ketika terjadi pergeseran distribusi data (*distribution shift*), mengingat robustness adalah indikator kualitas penelitian tingkat magister. Kelima, evaluasi rasio biaya komputasi versus peningkatan performa, terutama jika kalian bekerja dengan keterbatasan infrastruktur atau target aplikasi *real-time*.

Dari serangkaian uji dan observasi tersebut, keluaran yang wajib dihasilkan adalah daftar berisi dua hingga tiga kandidat *research gap*. Setiap kandidat harus didukung oleh bukti empiris dari hasil baseline yang sudah kalian jalankan, serta dikaitkan secara eksplisit dengan literatur terkini yang menunjukkan bahwa masalah tersebut belum terpecahkan secara optimal atau masih memerlukan pendekatan baru. Daftar ini akan menjadi bahan diskusi terstruktur di pertemuan berikutnya untuk diseleksi, dirumuskan ulang sebagai *research question*, dan disiapkan landasan hipotesisnya sebelum masuk tahap implementasi eksperimen lanjutan.

### Inti yang Harus Ditekankan

- Identifikasi gap bersifat empiris dan berbasis data, bukan spekulasi; setiap klaim celah penelitian harus didukung oleh hasil baseline dan tinjauan literatur.
- Fokus pengujian harus pada kondisi ekstrem atau tantangan nyata (data imbalance, noise, fitur kategorikal kompleks, distribusi berubah, interpretability, dan efisiensi komputasi).
- Keluaran wajib berupa 2–3 kandidat gap yang terdokumentasi jelas, terukur, dan siap diverifikasi bersama selama sesi diskusi minggu depan.

### Transisi ke Slide Berikutnya

Dengan kandidat gap yang telah teridentifikasi dan didokumentasikan, kita akan menutup materi pertemuan ini dengan rangkuman konsep *Ensemble Learning* dan *Gradient Boosting*, sekaligus menyiapkan jembatan menuju topik baru di pertemuan enam mengenai *Clustering* dan *Unsupervised Data Mining*.

---

## Slide 036 - Rangkuman dan Jembatan ke Pertemuan Berikutnya

### Narasi

Pada akhir sesi ini, kita merangkum kembali fondasi kunci dari *Ensemble Learning* yang telah kita bedah bersama. Secara konseptual, pendekatan ensemble terbagi menjadi dua paradigma utama: *bagging* yang bertujuan menurunkan varians melalui pelatihan model independen secara paralel pada bootstrap sample, dan *boosting* yang berfokus pada penurunan bias dengan melatih model secara berurutan untuk mengkoreksi residual kesalahan prediksi model pendahulunya. Di antara keluarga *boosting*, *Gradient Boosting Decision Tree* (GBDT) telah membuktikan diri sebagai teknik yang sangat dominan dan handal, khususnya untuk data bertipe tabular yang menjadi tulang punggung sebagian besar studi kasus riset dan aplikasi industri. Perkembangan implementasi modern seperti XGBoost, LightGBM, dan CatBoost semakin memperkuat posisi GBDT berkat optimasi komputasi tingkat tinggi, penanganan nilai hilang (*missing values*) yang native, serta mekanisme regularisasi bawaan yang menjaga generalisasi model.

Sejalan dengan standar metodologi penelitian jenjang magister, validitas klaim ilmiah sangat bergantung pada kesetaraan dalam perbandingan algoritma. Evaluasi tidak boleh bersifat ad-hoc; baseline wajib melalui proses *hyperparameter tuning* yang sistematis, hasil performa harus dievaluasi secara berulang dengan skema validasi yang konsisten untuk menangkap variabilitas acak, dan metrik kompleksitas serta kebutuhan sumber daya harus didokumentasikan secara transparan. Prinsip ini merupakan kelanjutan langsung dari aktivitas identifikasi *candidate research gap* pada slide sebelumnya, di mana analisis mendalam terhadap titik lemah model, sensitivitas terhadap noise, atau ketidakseimbangan kelas justru menjadi pintu masuk bagi kontribusi riset yang orisinal dan terukur.

Setelah menyelesaikan perjalanan mendalami *supervised learning* yang memetakan hubungan eksplisit antara fitur input dan label target, kita kini akan melakukan pergeseran perspektif menuju ranah yang lebih eksploratif. Pertemuan berikutnya akan membahas *Clustering & Unsupervised Data Mining*. Dalam paradigm ini, model tidak lagi dibimbing oleh ground truth, melainkan ditugaskan untuk mengungkap struktur internal, pola pengelompokan, atau reduksi dimensi yang tersembunyi di dalam data. Menariknya, prinsip-prinsip ensemble yang telah kita kuasai tidak berhenti pada pembelajaran terawasi; konsep tersebut dapat diadaptasi ke dalam konteks tanpa pengawasan, misalnya melalui *ensemble clustering* yang menggabungkan hasil partisi dari berbagai algoritma untuk menghasilkan konsensus pengelompokan yang lebih stabil dan robust terhadap pilihan parameter tunggal.

### Inti yang Harus Ditekankan

- GBDT dan varian modernnya (XGBoost, LightGBM, CatBoost) merupakan standar de facto untuk pemodelan data tabular karena kombinasi akurasi, efisiensi, dan fleksibilitas hyperparameter.
- Rigoritas riset ditentukan oleh protokol perbandingan yang adil: tuning berbasis validasi silang, evaluasi berulang untuk stabilitas statistik, dan pelaporan metrik kompleksitas yang lengkap.
- Pergeseran dari *supervised* ke *unsupervised learning* menuntut adaptasi dalam framing masalah, namun konsep ensemble tetap relevan sebagai strategi peningkatan konsistensi dan reliabilitas hasil pengelompokan.

### Transisi ke Slide Berikutnya

Dengan pemahaman yang solid mengenai kekuatan ensemble dan tata cara evaluasi model yang metodologis, kita kini siap membuka bab baru tentang bagaimana mesin belajar menemukan keteraturan tanpa bantuan label. Mari kita lanjutkan ke materi Clustering & Unsupervised Data Mining.

---

## Slide 037 - Penutup

### Narasi

Pada sesi ini, kita telah mengakhiri pembahasan komprehensif mengenai Ensemble Learning dan Gradient Boosting. Kita telah menelusuri mekanisme kerja bagging dan boosting dalam mengurangi varians serta bias secara simultan, serta memahami mengapa Gradient Boosting Decision Tree (GBDT) menjadi arsitektur dominan untuk data tabular dalam konteks akademik maupun industri. Implementasi modern seperti XGBoost, LightGBM, dan CatBoost tidak hanya mengandalkan optimasi komputasi melalui parallel processing dan histogram-based splitting, tetapi juga memberikan kontrol presisi terhadap regularisasi, handling missing value, dan struktur decision tree yang sangat relevan dengan kebutuhan penelitian tingkat magister. Sebagaimana telah kita praktikkan menggunakan ekosistem Python, kekuatan model ensemble sangat bergantung pada disiplin metodologis: penyusunan baseline yang ter-tuning, evaluasi berulang dengan cross-validation, pelaporan metrik kompleksitas, serta error analysis yang mendalam untuk memastikan generalisasi model.

Seiring berakhirnya topik supervised learning kali ini, kita akan beralih ke ranah Clustering & Unsupervised Data Mining. Pergeseran dari pembelajaran berbasis label menuju pencarian struktur laten dalam data tanpa anotasi merupakan langkah natural dalam siklus knowledge discovery. Dalam skenario nyata, data yang tersedia hampir selalu bersifat unlabeled atau memerlukan biaya annotasi yang sangat tinggi, sehingga kemampuan untuk mengekstrak pola, mengelompokkan observasi serupa, dan mereduksi dimensi menjadi kompetensi inti yang harus dikuasai. Di tingkat S2, fokus tidak hanya terletak pada penerapan algoritma, melainkan pada pemilihan metrik validasi internal dan eksternal yang tepat, interpretasi stabilitas cluster, serta strategi mitigasi noise dan high-dimensional curse. Menariknya, prinsip ensemble yang baru saja kita bahas juga dapat diintegrasikan ke domain ini melalui ensemble clustering, yang bertujuan meningkatkan konsistensi dan robustness pengelompokan pada distribusi data yang kompleks.

### Inti yang Harus Ditekankan

- Penguasaan ensemble learning harus dibarengi dengan standar metodologis penelitian yang ketat, meliputi perancangan eksperimen yang adil, pelaporan kompleksitas komputasi, dan analisis ablation untuk justifikasi kontribusi setiap komponen model.
- Transisi ke unsupervised learning membuka jalur riset kritis dalam struktur data laten, efisiensi penggunaan label, serta pengembangan framework evaluasi yang independen dari ground truth.
- Profisiensi dalam manipulasi data menggunakan pandas, NumPy, dan visualisasi interaktif tetap menjadi fondasi utama dalam mengimplementasikan, memvalidasi, dan mengomunikasikan temuan clustering maupun teknik mining lainnya secara akademis.

### Transisi ke Slide Berikutnya

Mari kita lanjutkan dengan mendalami prinsip dasar clustering, klasifikasi algoritma pengelompokan, serta kerangka evaluasi kualitas partisi data, sehingga kita siap menerapkannya pada studi kasus empiris di pertemuan berikutnya.
