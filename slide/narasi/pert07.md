# Narasi TD Data Mining - Pertemuan 07

## Anomaly Detection, Imbalanced Data & Rare Events

Sumber: markdown/pert07-anomaly-detection-imbalanced-data-rare-events.md

---

## Slide 000 - Cover

### Narasi

Pertemuan ketujuh ini membawa kita ke salah satu tantangan paling krusial dalam praktik data mining modern: deteksi anomali, penanganan data tidak seimbang, dan analisis kejadian langka. Dalam konteks penelitian tingkat magister, fokus bergeser dari sekadar penerapan algoritma klasifikasi standar menuju pemahaman mendalam terhadap distribusi data yang ekstrem. Data dunia nyata jarang sekali mengikuti distribusi normal atau seimbang; justru, sinyal yang paling bernilai sering kali tersembunyi di ekor distribusi atau muncul sebagai outlier yang sangat sedikit jumlahnya. Topik ini menuntut pendekatan metodologis yang berbeda, karena metrik evaluasi konvensional seperti akurasi menjadi menyesatkan ketika proporsi kelas minoritas atau anomali sangat kecil.

Secara teknis, pembahasan akan mencakup karakteristik fundamental dari anomali dan data tidak seimbang, serta mengapa pendekatan tradisional sering gagal menangkap pola langka tersebut. Kita akan mengeksplorasi strategi sampling seperti SMOTE, ADASYN, dan undersampling berbasis density, serta metode berbasis model seperti One-Class SVM, Isolation Forest, dan autoencoder untuk representasi laten. Selain itu, penekanan diberikan pada pemilihan metrik evaluasi yang tepat—seperti Precision-Recall AUC, F-beta score, dan confusion matrix berbasis probabilitas—serta desain eksperimen yang robust untuk menangani bias seleksi dan overfitting pada kelas minoritas.

Dalam kerangka penelitian S2, kemampuan mengidentifikasi dan memodelkan kejadian langka bukan hanya keterampilan teknis, tetapi fondasi untuk merumuskan research question yang bermakna. Banyak fenomena kritis seperti fraud detection, diagnosis penyakit langka, kegagalan prediktif pada sistem industri, atau penyebaran wabah digital justru bersifat rare event. Oleh karena itu, penguasaan teknik anomaly detection dan imbalance learning menjadi prasyarat penting sebelum memasuki tahap perancangan proposal penelitian yang akan dipresentasikan pada pertemuan berikutnya.

### Inti yang Harus Ditekankan

- Data tidak seimbang dan kejadian langka adalah norma, bukan pengecualian, dalam aplikasi data mining tingkat lanjut dan penelitian empiris.
- Metrik evaluasi standar (akurasi) tidak valid untuk skenario ini; diperlukan Precision-Recall, F-beta, ROC-AUC, dan analisis error yang spesifik terhadap kelas minoritas.
- Pendekatan metodologis harus menggabungkan teknik preprocessing (sampling), model khusus (unsupervised/anomaly-aware), dan evaluasi rigor untuk mendukung penelitian yang dapat direplikasi dan generalisasi tinggi.

### Transisi ke Slide Berikutnya

Untuk melihat bagaimana topik ini menempati posisi strategis dalam alur perkuliahan dan kaitannya dengan pengembangan proposal penelitian Anda, mari kita tinjau peta konsep pertemuan ini dalam RPS.

---

## Slide 001 - Posisi Pertemuan dalam RPS

### Narasi

Mari kita tinjau posisi pertemuan ini dalam peta besar alur perkuliahan Topik Dalam Data Mining. Desain kurikulum semester ini disusun secara progresif untuk membekali mahasiswa magister dengan kompetensi analitis yang matang hingga kesiapan melakukan penelitian independen. Pada minggu pertama hingga kedua, kita telah menyelesaikan tahap fondasi dan Exploratory Data Analysis, di mana fokus utamanya adalah memahami karakteristik, kualitas, dan distribusi awal data mentah. Langkah ini menjadi prasyarat mutlak sebelum memasuki fase pemodelan. Selanjutnya, pada minggu ketiga hingga kelima, materi bergeser ke penambangan pola klasik dan algoritma klasifikasi, melatih mahasiswa untuk mengekstrak hubungan historis dan membangun model prediktif berbasis label yang sudah ada.

Pertemuan keenam membawa kita masuk ke domain unsupervised learning melalui clustering, yang berfokus pada pengelompokan data normal dan pemahaman struktur intrinsik dataset tanpa bergantung pada supervisi eksternal. Dari pemahaman struktur tersebut, kita kini melangkah ke minggu ketujuh yang menjadi inti pembahasan hari ini: Anomaly Detection, Imbalanced Data, dan Rare Events. Berbeda dengan pendekatan sebelumnya yang cenderung mengoptimalkan performa pada mayoritas data, topik kali ini menuntut pergeseran perspektif untuk justru menyoroti kejadian yang sangat langka, menyimpang, atau memiliki representasi statistik yang minimal. Dalam konteks dunia nyata, informasi bernilai tinggi seperti penipuan finansial, kegagalan mesin kritis, atau serangan siber justru terkonsentrasi pada ekor distribusi ini, bukan pada massa data yang dominan.

Penempatan materi ini juga memiliki dimensi strategis terkait metodologi penelitian tingkat magister. Pertemuan kedelapan akan diisi oleh sesi Critical International Paper Review dan Research Proposal Seminar, di mana mahasiswa diharapkan mempresentasikan rancangan penelitian mereka. Kemampuan merumuskan research question yang tajam dan hipotesis yang teruji seringkali bermula dari identifikasi gap metodologis pada penanganan rare-event atau data tidak seimbang. Dengan menguasai kerangka konseptual dan teknik komputasional pada pertemuan ini, mahasiswa akan memiliki landasan empiris yang kuat untuk menyusun proposal yang relevan, terukur, dan siap dievaluasi secara kritis pada sesi berikutnya.

### Inti yang Harus Ditekankan

- Alur perkuliahan dirancang secara hierarkis dari pemahaman data dasar menuju kompleksitas rare-event, mencerminkan siklus lengkap knowledge discovery hingga persiapan riset independen.
- Anomaly detection dan imbalanced learning bukan sekadar teknik pelengkap, melainkan kebutuhan metodologis esensial karena nilai prediktif dan bisnis tertinggi sering kali berada pada data minoritas atau kejadian langka.
- Pertemuan ini berfungsi sebagai jembatan konseptual langsung untuk penyusunan research question dan desain eksperimen yang akan dipresentasikan pada sesi proposal penelitian di pertemuan berikutnya.

### Transisi ke Slide Berikutnya

Untuk memastikan seluruh pembahasan teknis hari ini tetap terarah pada standar akademik tingkat magister, mari kita telaah secara spesifik capaian pembelajaran atau CPMK yang menjadi acun evaluasi, beserta tujuan praktis yang akan kita kerjakan bersama pada slide selanjutnya.

---

## Slide 002 - Capaian Pembelajaran yang Didukung

### Narasi

Slide ini memetakan secara eksplisit bagaimana materi pertemuan ketujuh ini berkontribusi terhadap Capaian Pembelajaran Mata Kuliah (CPMK) dan menetapkan tujuan pembelajaran spesifik yang harus dicapai oleh mahasiswa. Pada jenjang magister, penguasaan teknis algoritma saja tidak cukup; penekanan utama diberikan pada kemampuan mengintegrasikan konsep tersebut ke dalam kerangka penelitian yang metodologis dan kritis. Tabel CPMK menunjukkan bahwa pertemuan ini secara langsung mendukung tiga pilar utama: analisis konseptual dan algoritmik (CPMK-1), perumusan masalah penelitian berbasis kejadian langka (CPMK-3), serta perancangan eksperimen yang valid dengan pemilihan metrik evaluasi yang tepat (CPMK-4).

Secara lebih rinci, tujuan pertemuan ini dibagi menjadi lima poin strategis yang saling berkesinambungan. Pertama, kita akan membedah perbedaan konseptual antara *outlier* dan *anomaly*. Dalam literatur data mining, *outlier* sering kali merujuk pada titik data yang menyimpang secara statistik tanpa konteks dampak, sedangkan *anomaly* menekankan pada ketidaknormalan yang memiliki implikasi signifikan, risiko tinggi, atau nilai informasi khusus dalam konteks aplikasi nyata. Kedua, mahasiswa akan menguasai empat pendekatan deteksi anomali yang paling relevan untuk penelitian mutakhir: Isolation Forest yang memanfaatkan isolasi acak untuk efisiensi komputasi, Local Outlier Factor (LOF) yang mengukur kepadatan lokal relatif, metode One-Class seperti One-Class SVM yang mempelajari batas keputusan dari kelas mayoritas, serta Autoencoder yang memanfaatkan arsitektur neural network untuk merekonstruksi data dan mendeteksi anomali berdasarkan error rekonstruksi yang tinggi.

Ketiga, strategi penanganan data tidak seimbang (*imbalanced data*) akan dibahas secara mendalam. Kita tidak hanya akan melihat teknik dasar *resampling* seperti oversampling dan undersampling, tetapi juga memahami implementasi SMOTE (*Synthetic Minority Over-sampling Technique*) yang menghasilkan sampel sintetis di sepanjang garis antar-kelas, serta *cost-sensitive learning* yang memberikan bobot kesalahan klasifikasi berbeda antar kelas. Keempat, kita akan menganalisis mengapa akurasi (*accuracy*) menjadi metrik yang menyesatkan pada masalah *rare-event*. Model yang selalu memprediksi kelas mayoritas dapat mencapai akurasi sangat tinggi, namun gagal total dalam mendeteksi kejadian langka yang justru menjadi fokus penelitian. Kelima, seluruh konsep ini akan diikat melalui studi kasus nyata di bidang deteksi penipuan perbankan, keamanan siber, dan pemeliharaan prediktif industri, sehingga mahasiswa dapat melihat relevansi langsung antara teori algoritma dan aplikasi riset terapan.

Jika pada pertemuan sebelumnya kita telah mengeksplorasi struktur data melalui clustering yang mengelompokkan pola normal, maka pertemuan ini merupakan langkah logis selanjutnya untuk mengidentifikasi apa yang berada di luar kelompok tersebut. Pemahaman tentang karakteristik data tidak seimbang dan metode deteksinya akan menjadi fondasi krusial ketika Anda mulai merumuskan *research question* dan merancang eksperimen pada proposal penelitian yang akan dipresentasikan di pertemuan berikutnya.

### Inti yang Harus Ditekankan

- Perbedaan fundamental antara *outlier* (penyimpangan statistik murni) dan *anomaly* (kejadian langka dengan dampak/signifikansi tinggi) menentukan pendekatan metodologis dan desain penelitian yang dipilih.
- Metrik akurasi tidak valid untuk masalah *rare-event*; peneliti wajib beralih ke presisi, recall, F1-score, atau AUC-ROC sesuai dengan asimetri biaya kesalahan false negative versus false positive.
- Pemilihan metode deteksi anomali dan strategi *imbalanced learning* harus didasarkan pada karakteristik dataset, ketersediaan label, dan tujuan penelitian, bukan sekadar mengikuti tren algoritma.
- Seluruh teknik yang dibahas berfungsi sebagai alat bantu metodologis untuk menjawab pertanyaan penelitian, bukan tujuan akhir dari perkuliahan ini.

### Transisi ke Slide Berikutnya

Setelah memahami peta capaian pembelajaran dan tujuan teknis yang akan kita bahas, mari kita lihat mengapa topik *rare-event mining* ini dianggap krusial dalam konteks penelitian dunia nyata, serta bagaimana distribusi data yang ekstrem membentuk tantangan metodologis yang unik.

---

## Slide 003 - Pentingnya Rare-Event Mining dalam Penelitian

### Narasi

Mari kita masuk ke esensi mengapa *rare-event mining* atau penambangan kejadian langka menjadi salah satu topik paling krusial dalam penelitian *data mining* tingkat lanjut. Dalam banyak permasalahan dunia nyata, distribusi data sangat tidak seimbang. Kita sering menemukan pola di mana kejadian normal mendominasi hingga sekitar 99 persen dari total dataset, sementara kejadian langka hanya menyisakan sekitar 1 persen. Meskipun proporsinya kecil, kejadian langka inilah yang biasanya membawa dampak signifikan, baik secara finansial, operasional, maupun keselamatan. 

Jika kita menilik berbagai domain aplikasi, karakteristik ini sangat konsisten. Di sektor perbankan, transaksi *fraud* mungkin hanya menempati fraksi kecil dari seluruh volume transaksi harian, namun jika terlewatkan, dampaknya berupa kerugian finansial yang masif. Pada bidang *cybersecurity*, serangan siber terhadap jaringan juga bersifat jarang terjadi relatif terhadap lalu lintas data normal, tetapi konsekuensinya bisa berupa kebocoran data sensitif atau *downtime* sistem yang parah. Di manufaktur dan industri, kerusakan mesin atau komponen kritis jarang terjadi dalam siklus operasional, namun一旦发生 akan menghentikan seluruh lini produksi. Begitu pula di kesehatan, penyakit langka memiliki prevalensi rendah, namun keterlambatan deteksi dapat berakibat fatal pada prognosis pasien.

Dari perspektif penelitian, fenomena ini menuntut pergeseran metodologis yang fundamental. Model klasifikasi konvensional yang dilatih tanpa penanganan khusus terhadap ketidakseimbangan kelas cenderung akan belajar memprediksi kelas mayoritas sebagai respons terbaik. Akibatnya, model tersebut mungkin mencatatkan nilai *accuracy* yang sangat tinggi, misalnya di atas 99 persen, namun sebenarnya sama sekali tidak berguna karena gagal mengidentifikasi kejadian langka yang justru menjadi fokus analisis. Oleh karena itu, penelitian *rare-event* memerlukan rancangan eksperimen yang berbeda secara prinsipil. Kita harus meninggalkan ketergantungan pada *accuracy* sebagai metrik utama dan beralih ke metrik yang lebih informatif seperti presisi, *recall*, *F1-score*, atau *AUC-ROC*. Selain itu, pemilihan algoritma, teknik *resampling* atau *cost-sensitive learning*, serta strategi validasi silang harus dirancang khusus untuk menangkap sinyal lemah dari kelas minoritas.

Pertemuan ini sengaja diletakkan sebagai fondasi metodologis yang mendukung capaian pembelajaran pertemuan sebelumnya, khususnya terkait perumusan hipotesis dan desain eksperimen yang valid. Pemahaman mendalam tentang karakteristik *rare-event* akan membekali Anda merumuskan pertanyaan penelitian yang tajam, memilih *baseline* yang tepat, dan menghindari jebakan evaluasi yang umum terjadi pada studi awal. Dengan menguasai konteks ini, mahasiswa siap mengembangkan proyek penelitian yang relevan di bidang *fraud detection*, *intrusion detection system*, *predictive maintenance*, atau deteksi penyakit langka berbasis data klinis.

### Inti yang Harus Ditekankan

- Distribusi data dunia nyata sering kali sangat tidak seimbang (99% normal vs 1% langka), di mana kejadian minoritas justru memiliki dampak tertinggi.
- Metrik *accuracy* adalah jebakan evaluatif yang menyesatkan pada masalah *rare-event*; model yang selalu memprediksi kelas mayoritas akan terlihat "akurat" secara numerik tetapi gagal secara fungsional.
- Penelitian *rare-event* menuntut perubahan paradigma metodologis, mulai dari pemilihan metrik evaluasi, strategi sampling, hingga desain eksperimen yang ketat, yang menjadi landasan wajib sebelum implementasi teknis.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa masalah ini begitu krusial dan bagaimana ia mengubah pendekatan evaluasi penelitian, langkah selanjutnya adalah memperjelas batas konseptual antara dua istilah yang sering tertukar: *outlier* dan *anomaly*. Mari kita bedah definisi, karakteristik statistik versus semantik, serta implikasi praktisnya pada slide berikutnya.

---

## Slide 004 - Outlier vs Anomaly: Definisi

### Narasi

Setelah menelaah mengapa mining kejadian langka menjadi fondasi krusial dalam penelitian data mining, langkah selanjutnya adalah memperjelas batas konseptual antara dua istilah yang sering disamakan namun memiliki implikasi metodologis yang berbeda: outlier dan anomali. Perbedaan ini bukan sekadar semantik, melainkan menentukan bagaimana kita merancang pipeline preprocessing, memilih algoritma deteksi, hingga mengevaluasi performa model pada penelitian tingkat magister.

Outlier secara fundamental didefinisikan sebagai observasi yang menyimpang secara signifikan dari pola distribusi data lainnya dalam dataset. Konsep ini bersifat murni statistik dan data-driven. Dalam implementasinya, outlier dapat muncul karena beberapa sumber: ia bisa berupa noise atau kesalahan instrumentasi yang tidak relevan, tetapi di sisi lain, ia juga bisa merepresentasikan kejadian ekstrem yang justru informatif. Identifikasi outlier umumnya mengandalkan ukuran dispersi matematis, seperti perhitungan z-score untuk mengukur deviasi dari mean, atau penggunaan Interquartile Range (IQR) pada visualisasi boxplot. Pendekatan ini tidak mempertimbangkan konteks domain; ia hanya menghitung jarak relatif titik data terhadap pusat agregat tanpa menilai makna di balik penyimpangan tersebut.

Sebaliknya, anomali memiliki dimensi yang lebih kompleks karena berbasis pada semantik dan konteks sistem atau proses yang diamati. Anomali merujuk pada pola atau observasi yang tidak sesuai dengan perilaku normal yang diharapkan. Ciri pembeda utamanya adalah keberadaan makna atau implikasi operasional di balik penyimpangan tersebut. Misalnya, dalam konteks perbankan, transaksi bernilai sangat tinggi bisa menjadi outlier statistik jika mengikuti distribusi log-normal, tetapi baru disebut anomali ketika konteksnya menunjukkan indikasi fraud atau pencucian uang. Poin metodologis yang sering luput dari perhatian peneliti pemula adalah hubungan asimetris antara kedua konsep ini: tidak semua outlier adalah anomali (karena banyak yang hanya noise), dan tidak semua anomali tampak sebagai outlier secara statistik (misalnya, serangan zero-day atau pola penipuan yang dirancang halus sehingga tetap berada dalam rentang distribusi normal, namun melanggar aturan bisnis atau keamanan).

Pemahaman dualitas ini menjadi landasan desain eksperimen yang robust. Ketika Anda meneliti fraud detection, intrusion detection system, atau predictive maintenance, target utama Anda sebenarnya adalah anomali, bukan sekadar outlier. Mengabaikan perbedaan ini dapat menyebabkan kesalahan fatal seperti menghapus sinyal penting selama tahap cleaning data, atau sebaliknya, memasukkan noise yang justru menurunkan rasio signal-to-noise pada model machine learning. Penentuan status suatu titik data harus selalu dikaitkan dengan research question dan karakteristik domain, bukan hanya pada threshold statistik semata.

### Inti yang Harus Ditekankan

- Outlier bersifat statistik dan data-centric, sedangkan anomali bersifat kontekstual dan semantik.
- Hubungan antar keduanya tidak saling mencakup sepenuhnya: tidak semua outlier adalah anomali, dan tidak semua anomali terdeteksi sebagai outlier statistik.
- Dalam riset S2, klasifikasi ini menentukan strategi preprocessing (apakah dibersihkan atau dipertahankan) dan pemilihan metrik evaluasi yang tepat.
- Fokus penelitian rare-event mining seharusnya diarahkan pada deteksi anomali yang bermakna, bukan sekadar penyaringan nilai ekstrem.

### Transisi ke Slide Berikutnya

Untuk mengoperasionalkan perbedaan konseptual ini, mari kita lihat perbandingan sistematis antar aspek kunci outlier dan anomali, serta bagaimana pemahaman ini secara langsung memengaruhi keputusan metodologis dalam studi kasus deteksi fraud, cybersecurity, dan predictive maintenance.

---

## Slide 005 - Outlier vs Anomaly: Perbandingan

### Narasi

Setelah pada slide sebelumnya kita membedah definisi konseptual masing-masing istilah, kini kita akan menyoroti perbandingan sistematis antara outlier dan anomali melalui lima dimensi penentu. Pada kolom definisi, outlier secara matematis merujuk pada observasi yang secara numerik berada jauh dari pusat distribusi mayoritas, sedangkan anomali didefinisikan sebagai penyimpangan dari pola perilaku normal yang memiliki makna semantik atau operasional. Dari sisi sumber, outlier umumnya lahir dari noise pengukuran, human error input, atau fluktuasi ekstrem yang bersifat alami dalam populasi data. Sebaliknya, anomali hampir selalu bermuara pada fenomena spesifik seperti aktivitas fraud, serangan siber, atau degradasi komponen sistem. Aspek konteks menjadi pembeda paling fundamental: outlier bersifat dataset-centric, artinya keberadaannya ditentukan semata-mata oleh struktur statistik data itu sendiri tanpa memandang tujuan aplikasi. Anomali, di sisi lain, bersifat system-centric; sebuah titik data baru bisa disebut anomali jika dikaitkan dengan aturan, kebijakan, atau dinamika proses bisnis yang berjalan.

Implikasi praktis dari perbedaan ini tercermin pada bagaimana kita memperlakukan kedua entitas tersebut dalam pipeline data mining. Outlier sering kali dianggap sebagai gangguan statis yang dapat dibuang, di-transform, atau di-handle dengan teknik robust scaling selama tahap preprocessing agar tidak mendistorsi estimasi parameter model. Anomali justru menjadi objek penelitian yang harus ditangkap, dilabeli, dan dianalisis lebih mendalam karena mengandung sinyal kritis tentang risiko atau peluang. Contoh konkret yang disajikan pada tabel memperjelas jurang pemisah ini: pembacaan sensor suhu yang error menghasilkan outlier statistik yang mungkin hanya perlu dibersihkan, sementara transaksi kartu kredit yang digunakan di dua benua berbeda dalam rentang waktu satu jam merupakan anomali yang menuntut respons investigatif dan mitigasi segera.

Pemahaman atas matriks perbandingan ini bukan sekadar pemilahan terminologi akademis, melainkan fondasi metodologis yang menentukan desain penelitian tingkat magister. Dalam domain seperti fraud detection, cybersecurity, atau predictive maintenance, fokus eksplorasi dan modeling Anda seharusnya tertuju pada anomali, bukan sekadar mengidentifikasi outlier statistik. Kesalahan konseptual di sini dapat berakibat fatal pada validitas penelitian: jika Anda menerapkan prosedur pembersihan data standar yang secara agresif membuang titik ekstrem tanpa mempertimbangkan konteks domain, Anda justru berpotensi menghapus sinyal anomali yang sedang Anda teliti. Oleh karena itu, keputusan teknis untuk menghapus outlier pada tahap preprocessing (yang telah kita diskusikan pada Pertemuan 2) harus dipisahkan secara tegas dari keputusan strategis mendeteksi anomali sebagai variabel dependen atau objek kajian utama. Pilihan algoritma, metrik evaluasi, hingga strategi sampling akan sangat bergantung pada kejelasan posisi Anda dalam membedakan noise statistik dari event bermakna.

### Inti yang Harus Ditekankan

- Outlier bersifat statistik-dataset-centric (berbasis jarak/distribusi), sedangkan anomali bersifat kontekstual-sistem-centric (berbasis norma/proses bisnis).
- Penanganan outlier (preprocessing/cleaning) dan deteksi anomali (research objective/modeling) memiliki tujuan, metrik, dan implikasi interpretasi yang berbeda secara fundamental.
- Mengabaikan perbedaan ini dapat menyebabkan false negative kritis dalam penelitian fraud/security/reliability, karena algoritma preprocessing yang naif dapat menghapus sinyal anomali yang justru menjadi inti kajian.
- Desain penelitian S2 harus secara eksplisit menyatakan apakah titik ekstrem diperlakukan sebagai noise yang harus dinetralisasi atau sebagai event langka yang harus dimodelkan dan ditindaklanjuti.

### Transisi ke Slide Berikutnya

Memahami bahwa tidak semua anomali tampak sebagai titik tunggal yang mencolok membuka diskusi mengenai keragaman manifestasi mereka. Beberapa anomali hanya muncul ketika dilihat dalam dimensi waktu atau atribut spesifik, sementara yang lain baru terlihat ketika sekelompok data bergerak menyimpang secara kolektif. Mari kita lanjutkan dengan mengklasifikasikan anomaly berdasarkan jumlah dan pola observasinya, mulai dari point anomaly, contextual anomaly, hingga collective anomaly, serta bagaimana setiap tipe menuntut pendekatan deteksi yang berbeda.

---

## Slide 006 - Tipe-Tipe Anomaly

### Narasi

Setelah pada slide sebelumnya kita membedah perbedaan konseptual antara outlier dan anomaly, langkah selanjutnya adalah mengklasifikasikan anomaly berdasarkan bagaimana pola penyimpangan tersebut termanifestasi dalam dataset. Klasifikasi ini bukan sekadar taksonomi teoritis, melainkan menjadi fondasi kritis dalam merancang pipeline deteksi yang valid secara metodologis. Berdasarkan jumlah observasi yang terlibat dan hubungannya dengan struktur data atau dimensi kondisional, anomaly dikategorikan menjadi tiga tipe utama: point, contextual, dan collective.

Point anomaly merujuk pada satu observasi tunggal yang secara signifikan menyimpang dari mayoritas data atau distribusi umumnya. Penyimpangan ini bersifat absolut dan dapat diidentifikasi melalui metrik statistik dasar atau pengukuran jarak antar titik. Dalam praktik riset maupun industri, contoh klasiknya adalah satu transaksi keuangan dengan nilai nominal yang sangat besar yang muncul tiba-tiba tanpa riwayat serupa pada profil pengguna. Untuk tipe ini, metode berbasis jarak atau isolasi seperti Isolation Forest, Local Outlier Factor (LOF), atau bahkan threshold statistik standar sering kali menjadi baseline yang efisien karena mereka secara langsung mengukur tingkat keterisolasian sebuah titik terhadap lingkungan sekitarnya.

Berbeda dengan point anomaly, contextual anomaly menunjukkan bahwa suatu nilai mungkin saja berada dalam rentang yang wajar secara global, namun menjadi sangat tidak biasa ketika dievaluasi dalam konteks atau kondisi spesifik tertentu. Dimensi kontekstual ini biasanya berupa waktu, lokasi, atau kategori fitur lain yang memengaruhi interpretasi nilai. Sebagai ilustrasi, pembacaan suhu 30°C merupakan hal yang sepenuhnya normal pada siang hari, tetapi akan dikategorikan sebagai anomali jika tercatat pada tengah malam di wilayah beriklim sedang. Deteksi tipe ini menuntut model untuk mempertimbangkan fitur kondisional secara eksplisit, sehingga pendekatan berbasis clustering kontekstual, decision tree yang memanfaatkan split kontekstual, atau model deret waktu menjadi lebih relevan daripada metode statis konvensional.

Collective anomaly menghadirkan tantangan yang lebih kompleks karena penyimpangan tidak terlihat pada individu observasi, melainkan muncul ketika sekelompok data dipertimbangkan bersama. Secara individual, setiap titik mungkin tampak normal, tetapi kombinasi, frekuensi, atau urutan mereka membentuk pola yang melanggar aturan sistem. Serangan DDoS adalah contoh ideal di mana lonjakan trafik dari banyak sumber IP berbeda dalam jendela waktu yang sempit secara kolektif menandakan aktivitas berbahaya, meskipun masing-masing sumber sendiri mengirim paket dalam batas wajar. Penanganan collective anomaly memerlukan metode yang mampu menangkap dependensi temporal atau struktural, seperti sequence mining, hidden Markov models, atau graph-based anomaly detection yang mengevaluasi pola hubungan antar node.

Ilustrasi sederhana pada slide ini menegaskan bahwa karakteristik visual dan matematis ketiga tipe tersebut sangat berbeda. Pemahaman ini menjadi kunci strategis karena pemilihan algoritma deteksi anomali harus disesuaikan secara presisi dengan tipe anomaly yang menjadi fokus penelitian atau aplikasi Anda. Menggunakan metode yang dirancang untuk point anomaly pada masalah collective anomaly, misalnya, akan menghasilkan false negative yang tinggi karena model gagal menangkap pola kelompok. Sebaliknya, pendekatan yang terlalu kompleks untuk point anomaly justru berisiko overfitting terhadap noise dan meningkatkan beban komputasi tanpa gain signifikan.

### Inti yang Harus Ditekankan

- Klasifikasi anomaly menjadi point, contextual, dan collective didasarkan pada jumlah observasi, ketergantungan pada konteks, dan keberadaan pola kelompok yang menyimpang.
- Desain eksperimen dan pemilihan algoritma harus selaras dengan tipe anomaly: point cocok untuk distance/isolation-based methods, contextual membutuhkan pemodelan kondisional/temporal, dan collective memerlukan analisis sekuen atau graf.
- Kesalahan identifikasi tipe anomaly akan menyebabkan kegagalan fundamental dalam validasi model, interpretasi hasil, dan penentuan research gap yang tepat.

### Transisi ke Slide Berikutnya

Meskipun klasifikasi tipe anomaly memberikan peta jalan yang jelas untuk memilih algoritma, implementasinya di dunia nyata menghadapi sejumlah hambatan metodologis yang serius. Pada slide berikutnya, kita akan membahas tantangan mendasar dalam deteksi anomali, mulai dari ketidakseimbangan ekstrem, kelangkaan label, hingga trade-off antara false positive dan false negative, serta bagaimana perspektif penelitian menentukan apakah pendekatan supervised, unsupervised, atau semi-supervised yang paling tepat untuk diuji.

---

## Slide 007 - Tantangan Deteksi Anomali

### Narasi

Setelah pada slide sebelumnya kita menguraikan tiga tipe utama anomali—point, contextual, dan collective—saat ini kita beralih ke aspek yang lebih mendasar dalam perancangan sistem deteksi anomali, yaitu tantangan teknis dan metodologis yang sering dihadapi di lapangan. Karakteristik pertama yang paling dominan adalah ketidakseimbangan ekstrem. Dalam hampir semua aplikasi dunia nyata, jumlah observasi anomali jauh lebih sedikit dibandingkan dengan data normal, seringkali mencapai rasio satu banding ribuan atau bahkan jutaan. Kondisi ini menyebabkan algoritma pembelajaran mesin standar cenderung bias terhadap kelas mayoritas, sehingga sulit menangkap pola minoritas tanpa penyesuaian khusus.

Tantangan kedua berkaitan dengan ketersediaan label. Dalam banyak skenario riil, kita hanya memiliki akses historis ke data normal, sementara kasus anomali jarang terekam, mahal untuk dikoleksi, atau bahkan belum terdefinisi dengan jelas. Hal ini memaksa peneliti untuk bekerja dalam kondisi partial information. Selain itu, batas antara perilaku normal dan anomali jarang bersifat biner atau tajam. Terdapat area abu-abu di mana beberapa titik data menunjukkan karakteristik yang berada di tepi distribusi, membuat thresholding manual menjadi tidak efektif dan meningkatkan risiko kesalahan klasifikasi.

Aspek ketiga yang krusial adalah concept drift dan trade-off antara false positive serta false negative. Definisi apa yang dianggap "normal" bersifat dinamis dan dapat bergeser seiring perubahan lingkungan, pola pengguna, atau evolusi infrastruktur sistem. Model yang dilatih pada data historis bisa mengalami degradasi performa jika tidak dilengkapi mekanisme monitoring atau retraining berkala. Di sisi lain, biaya kesalahan klasifikasi sangat asimetris. False positive yang berlebihan akan mengganggu operasional dan menurunkan kepercayaan pengguna, sedangkan false negative dapat berakibat fatal pada keamanan finansial atau sistem. Penentuan bobot kerugian ini harus menjadi pertimbangan utama dalam optimasi model.

Dari perspektif penelitian tingkat magister, pemilihan paradigma deteksi anomali merupakan keputusan metodologis yang harus dipertahankan secara akademis. Jika label lengkap tersedia, pendekatan supervised dapat digunakan, meskipun jarang terjadi di domain rare-event. Pendekatan unsupervised mengandalkan estimasi densitas atau struktur statistik untuk mengidentifikasi outlier yang menyimpang dari klaster mayoritas. Sementara itu, paradigma semi-supervised atau one-class learning menjadi pilihan paling relevan ketika hanya data normal yang dapat diakses; model belajar manifold atau distribusi normal, dan setiap deviasi signifikan selama inferensi dikategorikan sebagai anomali. Kesesuaian paradigma dengan ketersediaan data dan hipotesis penelitian akan menentukan validitas kontribusi ilmiah Anda.

### Inti yang Harus Ditekankan

- Ketidakseimbangan ekstrem dan kelangkaan label adalah hambatan struktural yang mengharuskan peneliti menghindari metrik akurasi konvensional dan beralih ke pendekatan probabilistik atau one-class modeling.
- Batas normal-anomali bersifat gradasional, sehingga evaluasi model harus mempertimbangkan kurva presisi-recall, PR-AUC, serta analisis biaya kesalahan (cost-sensitive analysis).
- Concept drift menuntut desain arsitektur atau pipeline yang mendukung continuous learning, drift detection, atau scheduled retraining agar model tetap relevan secara temporal.
- Pemilihan paradigma (supervised, unsupervised, semi-supervised) bukan sekadar pilihan teknis, melainkan pernyataan metodologis yang harus selaras dengan research question, ketersediaan data, dan novelty yang ingin diajukan dalam publikasi internasional.

### Transisi ke Slide Berikutnya

Dengan memahami batasan dan perspektif penelitian ini, langkah logis selanjutnya adalah memetakan solusi algoritmik yang mampu menangani kompleksitas tersebut. Pada slide berikutnya, kita akan membahas peta komprehensif metode deteksi anomali, mencakup teknik berbasis isolasi dan kerapatan lokal, pendekatan one-class, serta metode berbasis rekonstruksi, sekaligus bagaimana strategi imbalanced learning dan metrik evaluasi yang tepat dapat diintegrasikan ke dalam pipeline penelitian Anda.

---

## Slide 008 - Gambaran Umum Metode

### Narasi

Pada slide ini, kita akan memetakan secara sistematis seluruh pendekatan metodologis yang akan kita bahas dalam modul ini, khususnya terkait deteksi anomali dan penanganan *rare events*. Peta metode yang disajikan terdiri dari tiga pilar utama yang saling melengkapi: teknik deteksi anomali, strategi penangan data tidak seimbang, serta metrik evaluasi yang tepat. Pemahaman terhadap peta ini menjadi fondasi struktural sebelum kita mendalami algoritma spesifik dan implementasinya di slide berikutnya.

Pilar pertama adalah Metode Deteksi Anomali. Sesuai dengan diskusi pada slide sebelumnya mengenai paradigma penelitian, pendekatan ini dibagi menjadi tiga kategori berdasarkan mekanisme pembelajaran. Pertama, metode *Unsupervised* seperti Isolation Forest dan Local Outlier Factor (LOF), yang bekerja dengan mengidentifikasi titik data yang menyimpang dari struktur distribusi mayoritas tanpa memerlukan informasi kelas sama sekali. Kedua, pendekatan *One-Class* seperti One-Class SVM atau jaringan saraf satu kelas (*One-Class NN*), yang secara eksplisit mempelajari batas keputusan hanya dari data normal dan menganggap segala sesuatu di luar batas tersebut sebagai anomali. Ketiga, metode berbasis rekonstruksi (*Reconstruction-based*) yang umumnya memanfaatkan Autoencoder untuk belajar merepresentasikan pola normal; titik data yang menghasilkan error rekonstruksi tinggi kemudian diklasifikasikan sebagai anomali karena gagal direpresentasikan oleh model arsitektur tersebut.

Pilar kedua membahas Penanganan Imbalanced Data. Dalam konteks *rare events*, ketidakseimbangan kelas yang ekstrem sering kali menyebabkan model machine learning standar cenderung bias terhadap kelas mayoritas. Oleh karena itu, kita perlu memahami teknik resampling seperti *Oversampling* dan *Undersampling*, serta varian canggihnya seperti SMOTE (*Synthetic Minority Over-sampling Technique*) yang menciptakan sampel sintetis di sepanjang tepi kelas minoritas untuk menyeimbangkan distribusi. Selain itu, *Cost-sensitive learning* juga akan dibahas sebagai pendekatan alternatif yang tidak memanipulasi data, melainkan mengubah fungsi kerugian (*loss function*) agar kesalahan pada kelas minoritas dikenai penalti lebih tinggi, sehingga model termotivasi untuk belajar pola langka tersebut.

Pilar ketiga, Evaluasi yang Tepat, menekankan bahwa metrik konvensional seperti akurasi sama sekali tidak relevan dalam skenario ini. Kita akan fokus pada Precision, Recall, dan F1-Score yang memberikan gambaran komprehensif tentang performa klasifikasi pada kelas minoritas. Lebih lanjut, kurva PR-AUC (*Precision-Recall Area Under Curve*) terbukti jauh lebih informatif dan stabil daripada ROC-AUC ketika proporsi kelas sangat tidak seimbang. Terakhir, metrik berbasis biaya (*Cost-based metrics*) akan diperkenalkan untuk menghubungkan performa statistik langsung dengan implikasi bisnis atau operasional, mengingat trade-off antara *false positive* dan *false negative* memiliki konsekuensi nyata di dunia nyata.

Kombinasi strategis antara algoritma deteksi anomali, teknik penyesuaian distribusi data, dan metrik evaluasi yang sensitif inilah yang akan membentuk sistem deteksi yang andal untuk masalah *rare-event*. Dengan kerangka kerja ini, kita siap untuk menyelami intuisi matematis dan implementasi praktis dari salah satu algoritma *unsupervised* paling populer, yaitu Isolation Forest, yang akan kita bedah pada slide berikutnya.

### Inti yang Harus Ditekankan

- Peta metode terbagi menjadi tiga pilar fundamental: algoritma deteksi, strategi penangan ketidakseimbangan, dan metrik evaluasi yang sesuai untuk data langka.
- Pemilihan paradigma deteksi (unsupervised, one-class, reconstruction) harus selaras dengan ketersediaan label, kompleksitas komputasi, dan tujuan penelitian.
- Metrik akurasi tidak valid untuk *rare events*; gunakan Precision, Recall, F1, PR-AUC, dan metrik berbasis biaya untuk pengukuran yang bermakna secara statistik dan operasional.
- Integrasi ketiganya diperlukan untuk membangun sistem deteksi yang robust, siap diuji secara empiris, dan memenuhi standar rigor metodologis penelitian tingkat magister.

### Transisi ke Slide Berikutnya

Mari kita mulai pendalaman teknis dengan melihat salah satu metode *unsupervised* yang paling efisien dan intuitif, yaitu Isolation Forest. Kita akan membedah mengapa konsep "isolasi" justru menjadi kunci utama dalam mengungkap anomali, serta bagaimana panjang jalur pohon keputusan dapat menjadi indikator kekuatan penyimpangan suatu titik data.

---

## Slide 009 - Isolation Forest: Intuisi Dasar

### Narasi

Setelah pada slide sebelumnya kita meninjau peta umum metode deteksi anomali dan strategi penanganan data tidak seimbang, kali ini kita akan mendalami fondasi konseptual dari salah satu algoritma paling berpengaruh dalam kategori unsupervised anomaly detection, yaitu Isolation Forest. Berbeda dengan pendekatan tradisional yang mengandalkan perhitungan jarak Euclidean atau densitas lokal seperti KNN atau DBSCAN, Isolation Forest mengajukan pertanyaan yang lebih sederhana namun strategis: seberapa mudah sebuah titik data dapat diisolasi dari seluruh dataset? 

Intuisi utamanya terletak pada sifat alami data anomali. Data normal cenderung membentuk kluster yang padat dan saling berdekatan, sehingga untuk memisahkan satu titik normal dari kelompoknya dibutuhkan banyak batas pemisah (split). Sebaliknya, anomali bersifat langka, berbeda secara signifikan, dan biasanya terletak jauh dari distribusi utama. Ketika kita membangun pohon keputusan secara acak—dengan memilih fitur dan nilai split secara random pada setiap percabangan—titik anomali akan lebih cepat terpisah hanya dalam beberapa langkah saja. Semakin sedikit jumlah split yang diperlukan untuk mengisolasi suatu titik, semakin besar probabilitas bahwa titik tersebut merupakan anomali.

Ilustrasi pada slide menggambarkan proses partisi ruang ini secara visual. Untuk data normal yang rapat, diperlukan Split 1, Split 2, hingga Split 3 agar satu titik terpisahkan sepenuhnya dari tetangganya. Sementara itu, titik anomali yang terpencil bisa langsung terisolasi hanya setelah Split 1, karena nilai split acak yang terpilih secara kebetungan berhasil memisahkannya dari mayoritas data. Karena satu pohon tunggal rentan terhadap bias struktural atau noise, Isolation Forest menggunakan pendekatan ensemble. Setiap titik data akan dilalui oleh banyak pohon, dan kita menghitung rata-rata panjang jalur (average path length) yang ditempuh titik tersebut hingga mencapai daun. Rata-rata panjang jalur inilah yang menjadi indikator utama: semakin pendek jalur rata-ratanya, semakin tinggi tingkat keanehan (anomaly) titik tersebut.

Konsep path length ini bukan sekadar ilustrasi, melainkan fondasi matematis yang akan kita turunkan secara formal pada slide berikutnya. Di sana kita akan melihat langkah-langkah algoritmik lengkap, rumus perhitungan anomaly score, serta analisis kompleksitas komputasi yang menjadikan metode ini sangat cocok untuk skala besar dan dimensi tinggi. Memahami intuisi isolasi ini adalah kunci untuk mengevaluasi kapan dan mengapa Isolation Forest memberikan hasil yang robust dibandingkan metode berbasis jarak.

### Inti yang Harus Ditekankan

- Paradigma Isolation Forest menggeser fokus dari pengukuran kesamaan/jarak menjadi pengukuran kemudahan isolasi melalui partisi ruang secara acak.
- Anomali terdeteksi lebih cepat karena posisinya yang terpencil, sehingga memerlukan jumlah split (path length) yang lebih sedikit dibanding data normal.
- Penggunaan ensemble banyak pohon acak dan penghitungan rata-rata path length mengurangi varians estimasi dan meningkatkan stabilitas deteksi.
- Pendekatan ini menghindari perhitungan pairwise distance, menjadikannya skalabel dan efisien untuk dataset besar serta berdimensi tinggi.

### Transisi ke Slide Berikutnya

Dari pemahaman konseptual tentang bagaimana pohon isolasi bekerja, kita sekarang akan beralih ke implementasi teknisnya. Pada slide berikutnya, kita akan menguraikan langkah-langkah algoritmik Isolation Forest secara sistematis, menurunkan rumus anomaly score berdasarkan path length, serta membahas karakteristik efisiensi dan kompleksitas waktu yang membuatnya menjadi pilihan standar dalam praktik data mining modern.

---

## Slide 010 - Isolation Forest: Algoritma

### Narasi

Berlanjut dari intuisi dasar pada slide sebelumnya bahwa titik anomali memang lebih mudah terisolasi daripada kluster data normal, kini kita akan mengurai secara teknis bagaimana mekanisme kerja algoritma Isolation Forest dalam mewujudkan konsep tersebut secara sistematis. Langkah pertama dalam algoritma ini adalah membangun sejumlah pohon isolasi, atau isolation trees, yang masing-masing dilatih menggunakan subset data yang diambil secara acak dari dataset awal. Pada setiap node dalam pohon, proses pembagiannya tidak melibatkan optimisasi kompleks seperti minimisasi impurity; sebaliknya, algoritma cukup memilih satu fitur secara acak dan menentukan nilai split secara acak di antara nilai minimum dan maksimum fitur tersebut. Pemisahan ini dilakukan secara rekursif hingga setiap titik data benar-benar terisolasi menjadi daun tunggal, atau hingga kedalaman maksimum pohon tercapai. Penggunaan sampling acak pada setiap iterasi ini bukan hanya strategi heuristik, melainkan fondasi matematis yang menjamin unbiased estimation terhadap path length tanpa perlu melihat seluruh ruang fitur secara eksplisit.

Setelah seluruh ensemble pohon terbentuk, langkah inti berikutnya adalah menghitung skor anomali untuk setiap observasi berdasarkan rata-rata panjang jalur (average path length) yang ditempuh titik tersebut dari akar hingga mencapai daun di semua pohon. Panjang jalur ini kemudian dipetakan ke dalam rentang probabilitas melalui rumus normalisasi berikut: `score(x) = 2^(-E(h(x)) / c(n))`. Dalam persamaan ini, `E(h(x))` merepresentasikan rata-rata panjang jalur titik x di seluruh tree ensemble, sedangkan `c(n)` berfungsi sebagai konstanta normalisasi yang bergantung pada jumlah sampel n. Secara teoretis, `c(n)` setara dengan rata-rata panjang jalur pencarian pada Binary Search Tree, yang secara analitis dapat dihitung sebagai `2H(n-1) - 2(n-1)/n`, dengan H(i) adalah harmonic number. Interpretasi skornya sangat intuitif dan konsisten dengan prinsip isolasi: nilai mendekati 1 menandakan titik sangat mungkin anomali karena jalurnya pendek; nilai sekitar 0,5 mengindikasikan data berada di wilayah normal atau perbatasan; dan nilai di bawah 0,5 menunjukkan data sangat normal dengan jalur pencarian yang panjang.

Dari perspektif karakteristik komputasi, Isolation Forest dirancang khusus untuk mengatasi keterbatasan metode deteksi anomali konvensional. Kompleksitas waktunya berada di kisaran O(t · n · log n), menjadikannya skalabel untuk dataset berukuran besar tanpa mengalami degradasi performa yang signifikan. Berbeda dengan metode berbasis densitas atau jarak seperti Local Outlier Factor atau DBSCAN, algoritma ini tidak memerlukan perhitungan pairwise distance antar semua pasangan data, sehingga menghindari bottleneck komputasi berordo O(n²). Selain itu, karena mekanismenya bergantung pada partisi fitur independen, Isolation Forest tetap robust terhadap curse of dimensionality dan sangat cocok diterapkan pada data tabular berdimensi tinggi. Dalam konteks penelitian tingkat magister, pemahaman mendalam terhadap komponen `c(n)` dan strategi penentuan `max_samples` menjadi kunci ketika Anda merancang eksperimen komparatif, melakukan ablation study pada hyperparameter, atau mengevaluasi trade-off antara akurasi deteksi dan beban komputasi pada baseline Anda.

### Inti yang Harus Ditekankan

- Mekanisme split acak pada fitur dan nilai threshold memungkinkan isolasi cepat terhadap anomali tanpa memerlukan asumsi distribusi data atau perhitungan jarak kompleks.
- Rumus skor `score(x) = 2^(-E(h(x)) / c(n))` mentransformasi path length menjadi probabilitas normalisasi, di mana nilai >0.5 secara tegas mengindikasikan anomali.
- Kompleksitas O(t · n · log n) dan sifatnya yang tidak bergantung pada pairwise distance menjadikan Isolation Forest pilihan baseline yang kuat untuk data tabular berskala besar dan berdimensi tinggi.

### Transisi ke Slide Berikutnya

Setelah memahami formulasi matematis dan karakteristik komputasi dari Isolation Forest, langkah selanjutnya adalah menerjemahkan teori tersebut ke dalam implementasi praktis menggunakan pustaka standar industri. Pada slide berikutnya, kita akan membahas pseudocode Python menggunakan `scikit-learn`, termasuk pengaturan parameter kritis seperti `n_estimators`, `max_samples`, dan `contamination`, serta cara menginterpretasikan output prediksi dan skor anomali secara langsung dari model.

---

## Slide 011 - Isolation Forest: Pseudocode Python

### Narasi

Pada slide ini, kita mengonversi konsep teoretis Isolation Forest yang telah dibahas pada slide sebelumnya menjadi implementasi praktis menggunakan pustaka scikit-learn dalam lingkungan Python. Kode di atas menunjukkan alur kerja standar untuk melatih dan mengevaluasi model deteksi anomali berbasis pohon isolasi secara sepenuhnya unsupervised. Langkah pertama adalah mengimpor kelas `IsolationForest` dari modul `ensemble` serta NumPy untuk konstruksi matriks fitur. Variabel `X` merepresentasikan dataset numerik yang telah melalui tahap pra-pemrosesan, seperti penanganan missing value, penskalaan, atau encoding kategorikal, mengingat algoritma ini beroperasi pada ruang fitur kontinu untuk menghitung kedalaman rekursif pemisahan.

Inisialisasi model dilakukan melalui konfigurasi empat hiperparameter kunci yang mendefinisikan perilaku pembelajaran. Parameter `n_estimators=100` mengatur jumlah pohon isolasi yang akan digenerate; peningkatan nilai ini meningkatkan stabilitas estimasi skor anomali namun menambah beban komputasi linear terhadap jumlah sampel. `max_samples="auto"` secara otomatis menetapkan ukuran subset data per pohon sebesar minimum antara 256 dan total observasi. Penggunaan subsampling ini merupakan strategi desain inti: dengan membatasi pembagian pada subset kecil, titik anomali yang jarang akan lebih cepat terisolasi di cabang atas pohon, sekaligus mempercepat pelatihan secara signifikan. Parameter `contamination=0.01` merupakan aspek paling kritis dalam konteks penelitian. Nilai ini menyatakan proporsi data yang diperkirakan mengandung anomali, dan penentukannya harus didasarkan pada pengetahuan domain, distribusi prior kejadian langka, atau prosedur validasi statistik, bukan ditetapkan secara arbitrer. Terakhir, `random_state=42` menjamin reproduktibilitas hasil eksperimen, sebuah praktik metodologis wajib dalam riset data mining tingkat magister untuk memastikan konsistensi benchmarking dan ablation study.

Proses pelatihan dijalankan melalui `model.fit(X)`, yang membangun seluruh hutan isolasi tanpa memerlukan vektor label. Setelah model konvergen, dua metode evaluasi utama dipanggil untuk ekstraksi insight. `model.predict(X)` memberikan klasifikasi biner di mana nilai `1` menandakan data normal dan `-1` menandakan anomali, berdasarkan ambang batas decision boundary yang diturunkan dari parameter `contamination`. Sementara itu, `model.score_samples(X)` menghasilkan skor kontinyu yang merefleksikan derajat keanehan setiap titik data. Skor yang semakin tinggi berkorelasi dengan path length rata-rata yang pendek, secara matematis selaras dengan rumus $score(x) = 2^{-E(h(x)) / c(n)}$ pada slide sebelumnya. Catatan penelitian pada slide ini menegaskan bahwa karena model tidak membutuhkan label saat training, Isolation Forest sangat cocok untuk skenario dunia nyata di mana kejadian langka sulit dilabeli secara manual, sehingga peneliti perlu mengandalkan teknik validasi tidak terawasi atau analisis residual untuk fine-tuning parameter sebelum deployment.

### Inti yang Harus Ditekankan

- Implementasi Isolation Forest bersifat sepenuhnya unsupervised, menjadikannya solusi metodologis yang robust ketika dataset tidak memiliki anotasi anomali yang tersedia atau biaya pelabelan terlalu tinggi.
- Hiperparameter `contamination` memiliki dampak langsung pada sensitivitas dan spesifisitas model; penentukannya harus dikalibrasi berdasarkan pemahaman domain atau mekanisme validasi statistik, bukan ditetapkan secara sembarangan.
- Output `predict()` dan `score_samples()` melayani tujuan analitik yang berbeda: yang pertama untuk klasifikasi operasional biner, sedangkan yang kedua diperlukan untuk ranking anomali, thresholding dinamis, atau analisis error dalam riset.
- Reproduktibilitas eksperimen dijamin oleh pengaturan `random_state`, yang menjadi standar ketat dalam penulisan paper internasional untuk memastikan replikasi hasil oleh reviewer dan komunitas akademik.

### Transisi ke Slide Berikutnya

Meskipun Isolation Forest unggul dalam efisiensi komputasi dan kemampuan menangani data berdimensi tinggi secara global, pendekatan berbasis pohon ini mengasumsikan bahwa anomali dapat diisolasi secara independen tanpa mempertimbangkan struktur kerapatan lokal sekitar titik data. Untuk mengatasi keterbatasan tersebut dan menangkap pola outlier yang sangat bergantung pada konteks tetangga terdekat, kita akan beralih ke metode berbasis kepadatan dengan membahas intuisi dasar dari Local Outlier Factor (LOF) pada slide berikutnya.

---

## Slide 012 - Local Outlier Factor (LOF): Intuisi

### Narasi

Pada slide ini, kita beralih dari pendekatan berbasis pemisahan jalur seperti Isolation Forest menuju paradigma berbasis densitas lokal, yaitu Local Outlier Factor atau LOF. Berbeda dengan metode yang menilai anomali berdasarkan posisi absolut atau distribusi global, LOF mendefinisikan sebuah titik sebagai outlier ketika kepadatan lokalnya secara signifikan lebih rendah dibandingkan dengan tetangga-tetangga terdekatnya. Prinsip dasarnya adalah bahwa anomali bersifat kontekstual dan relatif terhadap lingkungan spasialnya. Jika suatu titik berada di wilayah yang jauh lebih jarang dibandingkan area sekitarnya, maka titik tersebut memiliki skor LOF yang tinggi dan dikategorikan sebagai anomali.

Ilustrasi pada slide memberikan gambaran intuitif mengenai mekanisme ini. Perhatikan kelompok titik bertanda a yang membentuk klaster padat. Titik b terletak di tepi klaster tersebut. Meskipun posisinya agak menjauh dari pusat, kepadatan lokal titik b masih cukup sebanding dengan titik-titik di dalam klaster a, sehingga rasio kepadatannya tidak memicu deteksi sebagai outlier. Sebaliknya, titik C berada jauh di luar kelompok a tanpa adanya titik data lain di radius terdekatnya. Ketiadaan tetangga menyebabkan kepadatan lokal titik C sangat rendah. Ketika dibandingkan dengan kepadatan tetangga terdekatnya, perbedaan drastis ini menghasilkan nilai LOF yang tinggi, mengonfirmasi status C sebagai anomali lokal.

Secara matematis, LOF mengimplementasikan intuisi tersebut melalui empat komponen kunci. Pertama, k-distance merepresentasikan jarak terpendek dari suatu titik ke tetangga ke-k-nya. Kedua, reachability distance adalah versi jarak yang dimodifikasi untuk menstabilkan estimasi kepadatan dan mengurangi sensitivitas terhadap noise atau fluktuasi jarak yang sangat kecil. Ketiga, local reachability density atau lrd dihitung sebagai kebalikan dari rata-rata reachability distance antara titik target dengan seluruh tetangga ke-k-nya. Terakhir, skor LOF diperoleh dari rasio rata-rata lrd tetangga terhadap lrd titik itu sendiri. Rasio mendekati satu menandakan kepadatan seragam dengan lingkungan (data normal), sedangkan rasio jauh di atas satu mengindikasikan penurunan kepadatan lokal yang tajam, sehingga titik tersebut terdeteksi sebagai outlier.

### Inti yang Harus Ditekankan

- Anomali dalam LOF bersifat relatif dan lokal, didefinisikan berdasarkan perbandingan kepadatan titik dengan lingkungan terdekatnya, bukan jarak mutlak dari pusat cluster.
- Penggunaan reachability distance dan local reachability density (lrd) membuat LOF robust terhadap variasi kepadatan antar cluster yang tidak seragam.
- Nilai LOF ≈ 1 mengindikasikan normalitas, sementara LOF > 1 menunjukkan derajat ke-outlier-an yang meningkat seiring dengan penurunan kepadatan lokal relatif.
- Metode ini sangat efektif untuk skenario penelitian di mana anomali muncul secara terlokalisasi dan struktur data memiliki heterogenitas densitas yang kompleks.

### Transisi ke Slide Berikutnya

Setelah memahami landasan konseptual dan formulasi matematis LOF, langkah selanjutnya adalah menerjemahkan teori tersebut ke dalam implementasi kode. Pada slide berikutnya, kita akan mengeksplorasi pseudocode Python menggunakan `LocalOutlierFactor` dari scikit-learn, membahas pengaturan parameter kritis seperti `n_neighbors` dan `contamination`, serta menganalisis kondisi ideal dan batasan komputasi metode ini pada dataset berskala besar atau berdimensi tinggi.

---

## Slide 013 - Local Outlier Factor (LOF): Pseudocode Python

### Narasi

Setelah membahas konsep intuitif dan formulasi matematis kepadatan lokal pada slide sebelumnya, kita kini beralih ke implementasi praktis algoritma ini menggunakan ekosistem Python. Di `scikit-learn`, LOF tersedia sebagai kelas `LocalOutlierFactor` yang menyederhanakan proses perhitungan reachability distance dan local reachability density menjadi satu baris inisialisasi. Pada potongan kode yang ditampilkan, langkah awal adalah menyiapkan matriks fitur dalam bentuk array NumPy, misalnya variabel `X`. Model kemudian diinisialisasi dengan dua parameter utama: `n_neighbors` yang menentukan jumlah tetangga terdekat (`k`) untuk membangun konteks kepadatan lokal, dan `contamination` yang merepresentasikan estimasi proporsi anomali dalam dataset. Dalam contoh ini, `n_neighbors` diset ke 20, sementara `contamination` diatur pada 0.01 atau 1 persen.

Proses pembelajaran dan prediksi dilakukan secara simultan melalui metode `fit_predict(X)`. Penting untuk diingat bahwa LOF beroperasi sebagai detektor unsupervised, sehingga tidak memerlukan vektor label selama tahap fitting. Fungsi ini mengembalikan array integer di mana nilai `1` menandakan titik data diklasifikasikan sebagai normal, sedangkan `-1` menandakan titik tersebut terdeteksi sebagai outlier. Selain label diskrit, skor kontinuitas dapat diekstrak melalui atribut `model.negative_outlier_factor_`. Sesuai konvensi API `scikit-learn`, skor ini bernilai negatif; semakin rendah (semakin negatif) nilainya, semakin jauh kepadatan lokal titik tersebut dibandingkan rata-rata tetangganya. Nilai skor ini sangat berguna untuk analisis sensitivitas, penentuan threshold custom, atau perbandingan peringkat anomali antar-subset data.

Penggunaan LOF harus dipertimbangkan secara kritis berdasarkan karakteristik dataset dan tujuan penelitian. Algoritma ini unggul ketika data memiliki klaster dengan densitas heterogen, serta ketika anomali bersifat lokal dan tidak mudah terdeteksi oleh metode berbasis jarak global seperti Z-score atau IQR. Namun, terdapat batasan komputasi yang signifikan. Karena LOF mengandalkan perhitungan pasangan jarak untuk setiap titik, kompleksitas waktunya mendekati O(n²) tanpa bantuan struktur indeks spasial seperti Ball Tree atau KD Tree. Hal ini membuat LOF kurang efisien untuk dataset berskala sangat besar yang berpotensi menyebabkan bottleneck memori dan waktu eksekusi. Selain itu, pada ruang berdimensi sangat tinggi, fenomena curse of dimensionality menyebabkan distribusi jarak menjadi homogen, sehingga estimasi kepadatan lokal kehilangan daya diskriminatif. Validasi dimensi dan profiling skala dataset menjadi prasyarat metodologis sebelum menerapkan LOF dalam pipeline penelitian.

### Inti yang Harus Ditekankan

- LOF diimplementasikan sebagai detektor unsupervised melalui `LocalOutlierFactor` dari `scikit-learn`, dengan output prediksi (`1` normal, `-1` anomali) dan skor kontinuitas (`negative_outlier_factor_`).
- Parameter `n_neighbors` mengatur cakupan konteks lokal, sedangkan `contamination` memberikan prior estimasi proporsi outlier untuk thresholding otomatis.
- LOF ideal untuk data dengan klaster berdensitas berbeda dan anomali lokal, namun rentan terhadap curse of dimensionality dan beban komputasi O(n²) pada dataset besar.
- Dalam konteks penelitian S2, pemahaman trade-off komputasi dan karakteristik ruang fitur menjadi dasar pemilihan baseline yang tepat sebelum masuk ke tahap ablation study atau perbandingan model.

### Transisi ke Slide Berikutnya

Memahami kapan LOF tepat digunakan dan batasannya membawa kita secara alami ke pertanyaan berikutnya: bagaimana performa LOF dibandingkan dengan pendekatan lain yang juga populer dalam deteksi anomali? Pada slide selanjutnya, kita akan membandingkan LOF secara sistematis dengan Isolation Forest, melihat perbedaan konsep inti, kompleksitas, ketahanan terhadap dimensi tinggi, serta sensitivitas terhadap jenis anomali, sekaligus menempatkan kedua metode ini sebagai baseline komparatif dalam desain eksperimen data mining.

---

## Slide 014 - Perbandingan Isolation Forest vs LOF

### Narasi

Pada slide ini, kita melakukan analisis komparatif antara dua algoritma deteksi anomali yang paling sering dijadikan rujukan dalam literatur dan praktik industri: Isolation Forest dan Local Outlier Factor (LOF). Perbedaan mendasar keduanya terletak pada filosofi pendeteksiannya. Isolation Forest beroperasi berdasarkan prinsip kemudahan isolasi, di mana titik data yang memerlukan fewer split acak untuk terpisahkan dari kumpulan data lainnya diklasifikasikan sebagai anomali. Pendekatan ini bersifat non-parametrik dan tidak mengasumsikan distribusi tertentu. Sebaliknya, LOF mengukur anomali melalui lensa kepadatan lokal. Algoritma ini menghitung rasio kepadatan tetangga terdekat suatu titik terhadap kepadatan rata-rata tetangga-tetangganya. Titik yang berada di wilayah dengan kepadatan jauh lebih rendah dibandingkan lingkungannya akan mendapatkan skor LOF tinggi, menandakan keberadaan outlier.

Dari perspektif kompleksitas komputasi dan skalabilitas, kedua metode menunjukkan trade-off yang jelas. Isolation Forest memiliki kompleksitas waktu O(t · n · log n), di mana t adalah jumlah estimator/pohon dan n adalah jumlah sampel. Arsitektur berbasis tree ini membuatnya sangat ringan dan cepat, bahkan ketika n mencapai ratusan ribu hingga jutaan baris. LOF, yang secara matematis membutuhkan perhitungan jarak antar semua pasangan observasi untuk menemukan k-nearest neighbors, memiliki kompleksitas O(n²) pada implementasi dasar. Meskipun dalam library modern seperti scikit-learn kompleksitas ini dapat dioptimalkan menggunakan struktur indeks spasial, LOF tetap lebih berat secara memori dan waktu dibanding Isolation Forest. Selain itu, pada ruang berdimensi tinggi, metrik jarak tradisional menjadi kurang bermakna akibat curse of dimensionality. Isolation Forest relatif lebih robust terhadap masalah ini karena tidak bergantung penuh pada jarak geometris, sedangkan LOF mengalami degradasi performa yang signifikan tanpa preprocessing reduksi dimensi yang ketat.

Kemampuan diskriminasi terhadap jenis anomali juga menjadi pertimbangan kritis. Keduanya efektif mendeteksi anomali global, yaitu titik yang menyimpang jauh dari pusat distribusi utama. Namun, untuk anomali lokal—fenomena di mana sebuah titik tampak normal secara global namun sangat langka di lingkungan spesifiknya—LOF menunjukkan dominasi yang jelas. Isolation Forest cenderung kurang sensitif terhadap pola lokal semacam ini karena mekanisme splitting-nya bersifat lebih agregatif. Dalam konfigurasi praktis, parameter utama Isolation Forest adalah `n_estimators` yang mengatur kedalaman dan keragaman pohon, serta `contamination` yang berfungsi sebagai hyperparameter untuk menetapkan proporsi outlier yang diharapkan. Pada LOF, parameter `n_neighbors` menentukan radius pencarian tetangga dan sangat krusial dalam menangkap struktur lokal, sementara `contamination` berperan serupa sebagai threshold penentuan kelas prediksi.

Konteks perbandingan ini harus dipahami dalam kerangka metodologi penelitian tingkat magister. Sebagaimana telah ditekankan pada Pertemuan 4, validitas claim penelitian dibangun atas dasar perbandingan baseline yang ketat. Tidak ada algoritma tunggal yang secara universal superior; keberhasilan deteksi anomali sangat bergantung pada karakteristik domain data, struktur klaster, dan distribusi densitas. Hasil skor kontinuitas atau label biner dari proses deteksi ini kemudian akan mengalir sebagai fitur prediktor atau variabel target dalam tahap pemodelan lanjutan, khususnya ketika kita berhadapan dengan masalah klasifikasi pada data yang sangat tidak seimbang.

### Inti yang Harus Ditekankan

- Pemilihan algoritma harus didasari oleh karakter data: gunakan Isolation Forest untuk kecepatan, skala besar, dan data berdimensi tinggi; pilih LOF ketika anomali bersifat lokal dan variasi kepadatan antar klaster signifikan.
- Tidak ada metode deteksi anomali yang serba bisa; penelitian rigor wajib menyertakan perbandingan multi-algoritma sebagai baseline eksperimental.
- Output dari deteksi anomali (skor atau label) merupakan komponen kritis yang sering menjadi input atau basis sampling untuk model klasifikasi pada data imbalanced.

### Transisi ke Slide Berikutnya

Setelah memahami batasan dan kekuatan masing-masing metode unsupervised, kita akan beralih ke paradigma yang lebih restriktif yet powerful: One-Class Classification. Ketika data anomali benar-benar tidak tersedia atau terlalu sedikit untuk dilatih secara konvensional, pendekatan one-class menjadi solusi fundamental yang akan kita bedah bersama.

---

## Slide 015 - One-Class Methods: Konsep

### Narasi

Pada slide ini, kita memasuki paradigma yang secara fundamental berbeda dari metode deteksi anomali berbasis jarak atau kepadatan yang telah dibahas sebelumnya, yaitu *One-Class Classification*. Berbeda dengan klasifikasi multikelas yang membutuhkan sampel representatif dari setiap kategori untuk mempelajari batas keputusan antar kelompok, pendekatan *one-class* hanya memanfaatkan data dari satu kelas saja, yakni kelas normal. Selama fase pelatihan, model tidak pernah diberi tahu apa itu anomali. Sebaliknya, algoritma difokuskan sepenuhnya untuk mempelajari struktur distribusi, densitas, atau manifold dari data normal. Prinsip kerjanya sangat logis: setelah model berhasil memetakan wilayah valid kelas normal, setiap observasi baru yang jatuh di luar batas yang telah dipelajari tersebut secara otomatis diklasifikasikan sebagai outlier. Strategi ini menjadi sangat relevan dalam konteks penelitian maupun industri di mana data anomali sulit diperoleh, terlalu mahal untuk dikoleksi, atau secara inheren bersifat ekstrem langka.

Penggunaan metode *one-class* umumnya dipertimbangkan ketika dua kondisi kritis terpenuhi. Pertama, label anomali tidak tersedia sama sekali, atau jika ada, jumlahnya sangat tidak representatif sehingga tidak mampu membentuk pola statistik yang stabil. Kedua, pengumpulan data normal relatif mudah dan melimpah, sementara kejadian anomali bersifat sporadis. Sebagai ilustrasi empiris, mari kita lihat kasus *defect detection* pada lini manufaktur presisi. Dalam operasional sehari-hari, hampir seluruh produk yang dihasilkan memenuhi spesifikasi (kelas normal), sedangkan cacat produksi mungkin hanya muncul beberapa kali per juta unit. Mencoba mengumpulkan dataset anomali yang cukup besar untuk melatih model *supervised* justru tidak realistis dan berpotensi menimbulkan bias seleksi. Di sinilah *one-class methods* menawarkan kerangka kerja yang lebih pragmatis, efisien, dan sesuai dengan karakteristik *rare events* di dunia nyata.

Dari perspektif algoritmik dan implementasi, terdapat beberapa varian yang lazim digunakan dalam literatur maupun praktik data mining. Yang paling klasik dan sering dijadikan *baseline* kuat adalah *One-Class Support Vector Machine* (OCSVM). Berbeda dengan SVM standar yang mengoptimalkan margin antara dua kelas, OCSVM dirancang khusus untuk memisahkan data normal dari titik asal (*origin*) di ruang fitur yang telah dimapakan melalui fungsi kernel. Varian lainnya yang semakin dominan seiring kemajuan *deep learning* adalah *One-Class Neural Networks*, yang umumnya mengimplementasikan arsitektur seperti autoencoder atau variational autoencoder. Jaringan ini dilatih untuk mengompresi dan merekonstruksi data normal secara optimal, sehingga data yang menyimpang dari pusat distribusi akan menghasilkan *reconstruction error* tinggi dan terdeteksi sebagai anomali. Penting dicatat bahwa hasil deteksi dari metode ini sering kali berfungsi sebagai filter awal atau *input* untuk pipeline klasifikasi imbalanced, sebagaimana disinggung pada perbandingan Isolation Forest versus LOF di slide sebelumnya.

### Inti yang Harus Ditekankan

- Paradigma *one-class* menghilangkan kebutuhan akan label anomali selama pelatihan dengan cara memodelkan hanya distribusi kelas normal; segala sesuatu di luar batasnya dianggap outlier.
- Metode ini ideal untuk skenario *extreme imbalance* atau *rare events* di mana data anomali tidak tersedia, tidak representatif, atau sangat sulit dikumpulkan secara etis dan ekonomis.
- OCSVM dan *One-Class Neural Networks* mewakili dua jalur pendekatan utama: pemisahan berdasarkan geometri ruang fitur (*kernel trick*) versus pemisahan berbasis representasi terkompresi (*representation learning*), yang keduanya dapat dijadikan baseline metodologis dalam penelitian magister.

### Transisi ke Slide Berikutnya

Setelah memahami konsep dasar dan konteks penerapan *one-class methods*, langkah selanjutnya adalah membedah mekanisme matematis dan intuisi di balik salah satu varian paling berpengaruh, yaitu One-Class SVM. Kita akan melihat bagaimana pemetaan non-linear ke ruang fitur berdimensi tinggi dan optimisasi hyperplane terhadap origin memungkinkan model membedakan normalitas dari penyimpangan secara rigor, serta bagaimana parameter nu mengatur trade-off antara sensitivitas deteksi dan toleransi terhadap noise.

---

## Slide 016 - One-Class SVM: Cara Kerja

### Narasi

Setelah membahas konsep dasar one-class classification pada slide sebelumnya, di mana paradigma pembelajaran hanya mengandalkan data kelas normal tanpa memerlukan label anomali, kini kita akan mendalami mekanisme kerja dari salah satu algoritma paling fundamental dalam kategori ini, yaitu One-Class SVM. 

Intuisi utama dari pendekatan ini terletak pada transformasi data ke dalam feature space berdimensi tinggi melalui fungsi kernel. Berbeda dengan SVM standar yang mencari hyperplane pemisah antar-kelas, One-Class SVM dirancang untuk memisahkan seluruh distribusi data normal dari titik origin (titik nol) dalam ruang fitur tersebut. Model berusaha menempatkan hyperplane sedemikian rupa sehingga margin antara hyperplane dan cluster data normal dimaksimalkan. Logika deteksinya cukup langsung: jika sebuah observasi baru berada di sisi origin atau terlalu dekat dengannya, maka observasi tersebut dianggap menyimpang dari pola normal dan diklasifikasikan sebagai anomali.

Ilustrasi sederhana pada slide ini membantu memvisualisasikan konsep pemisahan tersebut. Perhatikan bahwa seluruh titik data normal (●) berkumpul di satu wilayah tertentu. Sebuah hyperplane (→) kemudian dibentuk untuk memisahkan kumpulan titik ini dari origin (○). Wilayah di sebelah kanan hyperplane diasumsikan sebagai domain normal, sementara setiap titik yang jatuh di sebelah kiri atau mendekati origin dianggap sebagai outlier. Pendekatan ini sangat efektif ketika kita tidak memiliki representasi yang memadai dari kelas anomali, sehingga model hanya perlu mempelajari "batas aman" dari data normal saja.

Secara matematis, pembentukan batas pemisah ini diformulasikan sebagai masalah optimisasi konveks dengan tujuan meminimalkan fungsi berikut: `min ½||w||² + (1/(ν·n)) Σ ξᵢ - ρ`. Dalam persamaan ini, `w` adalah vektor bobot yang menentukan orientasi hyperplane, sedangkan `ρ` bertindak sebagai threshold atau offset dari origin. Variabel `ξᵢ` berperan sebagai slack variable yang memberikan toleransi agar beberapa titik data normal dapat berada di dalam margin atau bahkan melintas ke sisi origin, sehingga model tidak overfit terhadap noise atau variasi alami data. Batasan utamanya dinyatakan sebagai `w·Φ(xᵢ) ≥ ρ - ξᵢ` dengan `ξᵢ ≥ 0`. Hyperparameter `ν` (nu) memegang peranan strategis karena ia mengontrol proporsi maksimum data yang diperbolehkan menjadi anomali atau berada di luar margin. Pemilihan nilai `ν` secara langsung mempengaruhi sensitivitas model: nilai yang lebih kecil akan membuat deteksi lebih ketat, sedangkan nilai yang lebih besar memberikan fleksibilitas lebih terhadap sebaran data normal.

Memahami mekanisme intuitif, visualisasi spasial, dan formulasi optimisasi ini sangat penting karena menjadi landasan analitis sebelum kita beralih ke implementasi praktis menggunakan library machine learning modern, sekaligus mengevaluasi kapan metode ini tepat digunakan atau justru perlu diganti dengan pendekatan lain.

### Inti yang Harus Ditekankan

- One-Class SVM memetakan data ke ruang fitur berdimensi tinggi dan mencari hyperplane yang memisahkan data normal dari origin, bukan antar-kelas.
- Titik data yang jatuh di sisi origin atau melewati batas hyperplane secara otomatis dikategorikan sebagai anomali.
- Parameter `ν` adalah pengendali utama sensitivitas deteksi, yang secara teoritis membatasi proporsi maksimum data yang dapat dianggap sebagai outlier.
- Formulasi optimisasi menggabungkan maksimisasi margin (`½||w||²`) dengan toleransi kesalahan melalui slack variables (`ξᵢ`), menjadikannya robust terhadap noise namun tetap memerlukan tuning hati-hati.

### Transisi ke Slide Berikutnya

Dengan pemahaman mendalam tentang bagaimana One-Class SVM membangun batas decision boundary secara teoretis, langkah selanjutnya adalah menerjemahkan konsep tersebut ke dalam kode praktis menggunakan scikit-learn, serta mengidentifikasi batasan komputasi dan interpretatif yang perlu dipertimbangkan saat menerapkan metode ini pada dataset skala besar maupun penelitian empiris.

---

## Slide 017 - One-Class SVM: Implementasi dan Keterbatasan

### Narasi

Setelah membahas mekanisme matematis dan intuisi pemisahan ruang fitur pada slide sebelumnya, kini kita beralih ke aspek praktis: bagaimana menerjemahkan One-Class SVM ke dalam kode executable menggunakan ekosistem Python. Pada jenjang magister, penguasaan implementasi bukan sekadar menjalankan library, melainkan memahami bagaimana setiap argumen mempengaruhi perilaku model dan bagaimana hasilnya diinterpretasikan dalam konteks eksperimen penelitian.

Mari kita telaah blok kode implementasi ini. Kita menginisialisasi objek `OneClassSVM` dari `sklearn.svm` dengan konfigurasi `kernel="rbf"`, `nu=0.01`, dan `gamma="scale"`. Parameter `kernel="rbf"` digunakan karena fungsi basis radial mampu menangkap batas keputusan non-linear tanpa perlu transformasi eksplisit yang mahal secara komputasi. Nilai `nu=0.01` bertindak sebagai batas atas proporsi data yang boleh diklasifikasikan sebagai anomali, sekaligus batas bawah fraksi vektor pendukung, sesuai dengan formulasi optimisasi pada slide sebelumnya. `gamma="scale"` secara otomatis menyesuaikan skala kernel berdasarkan varians fitur, mengurangi kebutuhan tuning manual yang intensif. Proses pelatihan hanya menerima `X_normal`, menegaskan prinsip unsupervised learning di mana model hanya mempelajari manifold distribusi data sehat. Setelah fit, `model.predict(X)` menghasilkan label diskrit `1` untuk normal dan `-1` untuk anomali. Namun, untuk keperluan analisis riset yang lebih halus, `model.decision_function(X)` jauh lebih informatif karena mengeluarkan skor kontinuitas: nilai positif menandakan kedekatan dengan cluster normal, sedangkan nilai negatif mengindikasikan derajat penyimpangan. Skor ini memungkinkan peneliti menetapkan threshold custom berdasarkan distribusi empirical rather than relying solely on hard labels.

Meskipun elegan secara teoretis, One-Class SVM membawa sejumlah keterbatasan teknis yang harus dicatat dalam rancangan metodologi penelitian. Pertama, sensitivitas ekstrem terhadap pemilihan kernel dan hyperparameter `nu` serta `gamma`. Penalaan yang kurang presisi dapat memicu overfitting pada noise atau gagal menangkap anomali bertipe subtle. Kedua, kompleksitas waktu training cenderung kuadratik hingga kubik terhadap jumlah sampel, menjadikan pendekatan ini tidak scalable untuk dataset berskala besar atau aplikasi real-time streaming. Ketiga, interpretasi hasil sangat bergantung pada asumsi kernel. Kernel RBF berasumsikan bahwa anomali berada jauh dari manifold data normal dalam ruang fitur tersembunyi; asumsi ini bisa runtuh jika data memiliki struktur hierarkis atau dependensi temporal yang tidak tertangkap oleh metrik jarak Euclidean standar.

Dari sudut pandang penelitian, One-Class SVM tetap diposisikan sebagai *strong baseline* yang wajib diuji dalam setiap studi anomaly detection. Dalam protokol eksperimen S2, sangat direkomendasikan untuk menyertakan perbandingan sistematis antara One-Class SVM dengan Isolation Forest dan Local Outlier Factor (LOF). Perbandingan ini bukan hanya mengukur metric akurasi atau AUC-ROC, tetapi juga mengevaluasi trade-off antara stabilitas prediksi, beban komputasi, dan ketahanan terhadap ketidakseimbangan kelas. Poin kritis yang harus menjadi landasan analisis Anda adalah bahwa validitas deteksi anomali sangat ditentukan oleh kesesuaian asumsi model dengan karakteristik intrinsik dataset, serta transparansi dalam melaporkan dampak variasi hyperparameter terhadap performa akhir.

### Inti yang Harus Ditekankan

- Implementasi `OneClassSVM` di scikit-learn memisahkan prediksi label (`predict`) dan skor kontinuitas (`decision_function`); skor后者 lebih disarankan untuk analisis threshold adaptif dalam riset.
- Parameter `nu` mengontrol proporsi maksimum outlier yang diizinkan, sementara `gamma` mengatur pengaruh radius lokal tiap sampel; keduanya memerlukan grid search atau Bayesian optimization yang ketat.
- Keterbatasan utama meliputi kompleksitas komputasi O(n²–n³), sensitivitas kernel, dan kesulitan skalabilitas, sehingga evaluasi harus mencakup analisis efisiensi memori dan waktu training.
- Sebagai baseline penelitian, One-Class SVM wajib dibandingkan dengan Isolation Forest dan LOF untuk membangun argumentasi empiris yang kuat mengenai keunggulan atau kelemahan relatif masing-masing pendekatan.

### Transisi ke Slide Berikutnya

Ketika skalabilitas dan asumsi kernel menjadi bottleneck pada One-Class SVM, arsitektur berbasis jaringan saraf menawarkan alternatif representasi laten yang lebih fleksibel. Pada slide berikutnya, kita akan memperkenalkan Autoencoder sebagai mekanisme deteksi anomali berbasis rekonstruksi, yang memanfaatkan encoder-decoder pipeline untuk mengkuantifikasi error sebagai skor anomali.

---

## Slide 018 - Autoencoder sebagai Pengantar

### Narasi

Setelah sebelumnya membahas One-Class SVM yang mengandalkan pemisahan geometris dalam ruang fitur kernel, kita kini beralih ke pendekatan berbasis representasi laten menggunakan jaringan saraf, yaitu Autoencoder. Berbeda dengan SVM yang bekerja secara diskriminatif atau semi-supervised melalui margin, autoencoder beroperasi berdasarkan prinsip pembelajaran representasi tanpa pengawasan. Secara fundamental, autoencoder adalah arsitektur jaringan saraf tiruan yang dirancang untuk meniru fungsi identitas, di mana output akhir diharapkan identik dengan input awal. Proses pembelajaran ini dibagi menjadi dua komponen simetris: encoder dan decoder. Encoder bertugas memampatkan vektor input berdimensi tinggi ke dalam representasi laten atau bottleneck yang berdimensi jauh lebih rendah. Sebaliknya, decoder mengambil representasi laten tersebut dan berusaha merekonstruksinya kembali ke dimensi asli input. Dalam skenario deteksi anomali, model ini secara eksplisit hanya dilatih menggunakan data normal, sehingga ia hanya mempelajari pola distribusi statistik yang dianggap "wajar" atau inheren dalam populasi target.

Ilustrasi arsitektur pada slide ini menggambarkan alur transformasi data secara linear. Input awal $x$ diproyeksikan melalui serangkaian lapisan nonlinear pada encoder hingga mencapai titik $z$, yang merupakan representasi laten berdimensi rendah. Syarat kritis dalam desain arsitektur ini adalah dimensi $z$ harus jauh lebih kecil dibandingkan dimensi $x$. Keterbatasan kapasitas pada bottleneck ini memaksa jaringan untuk melakukan seleksi fitur otomatis, hanya menyimpan informasi paling esensial dan umum dari data normal. Dari titik $z$, decoder bekerja secara terbalik untuk memetakan kembali representasi laten ke ruang input asli, menghasilkan $x'$ sebagai hasil rekonstruksi. Karena kapasitas memori model dibatasi, setiap deviasi dari pola normal akan sulit ditampung dalam ruang laten $z$.

Mekanisme pendeteksian anomali pada autoencoder sepenuhnya bergantung pada akurasi rekonstruksi. Ketika data normal disuplai, jaringan telah menghafal struktur distribusinya, sehingga error rekonstruksi antara $x$ dan $x'$ akan berada pada level minimum. Sebaliknya, ketika data anomali atau kejadian langka yang tidak pernah ditemui selama fase training dimasukkan, jaringan gagal mengekstrak fitur yang relevan ke dalam $z$. Akibatnya, decoder menghasilkan rekonstruksi yang menyimpang signifikan dari input asli. Selisih atau error rekonstruksi inilah yang dikuantifikasi sebagai anomaly score. Nilai error yang besar secara langsung mengindikasikan ketidakcocokan dengan pola normal yang telah dipelajari, menjadikannya metrik yang intuitif, berbeda skala, dan mudah diinterpretasi untuk thresholding dalam penelitian.

Dari perspektif metodologi penelitian tingkat magister, autoencoder menawarkan fleksibilitas arsitektural yang jauh lebih luas dibandingkan metode tradisional seperti SVM atau Isolation Forest. Kemampuan untuk menggabungkan lapisan non-linear, regularisasi, dan teknik optimasi modern memungkinkan penyesuaian terhadap kompleksitas dataset tabular maupun multimodal. Meskipun pembahasan teknis mendalam mengenai deep tabular learning akan dilanjutkan pada Pertemuan 9, pemahaman konsep dasar rekonstruksi dan bottleneck pada slide ini menjadi prasyarat penting untuk merancang eksperimen ablation study dan error analysis yang rigor pada tahap selanjutnya.

### Inti yang Harus Ditekankan

- Autoencoder bekerja berdasarkan prinsip rekonstruksi input, bukan klasifikasi langsung, sehingga cocok untuk skenario unsupervised anomaly detection.
- Pembatasan dimensi pada representasi laten ($z$) memaksa model hanya mempelajari pola data normal, menjadikan penyimpangan sebagai indikator anomali.
- Error rekonstruksi berfungsi sebagai anomaly score yang bersifat kontinu, mudah dihitung, dan langsung mencerminkan tingkat ketidakcocokan data dengan distribusi pelatihan.
- Konsep ini menjadi fondasi teoretis sebelum mahasiswa merancang arsitektur custom, memilih fungsi loss, dan melakukan evaluasi performa pada dataset nyata.

### Transisi ke Slide Berikutnya

Untuk menerjemahkan konsep teoretis ini ke dalam implementasi praktis, kita perlu mendefinisikan bagaimana lapisan-lapisan dense disusun secara hierarkis, serta memilih fungsi objektif yang tepat untuk meminimalkan selisih rekonstruksi. Pada slide berikutnya, kita akan membedah struktur arsitektur spesifik beserta penggunaan Mean Squared Error sebagai metrik loss utama, sekaligus menjelaskan cara mengekstraksi anomaly score saat fase inference.

---

## Slide 019 - Autoencoder: Arsitektur dan Loss

### Narasi

Melanjutkan pemahaman tentang konsep dasar autoencoder pada slide sebelumnya, kita sekarang akan mengupas secara teknis bagaimana arsitektur ini dikonfigurasi secara spesifik, serta fungsi kerugian yang menjadi inti mekanisme deteksi anomali. Perhatikan diagram arsitektur pada slide ini. Alur pemrosesan dimulai dari vektor input dengan dimensi $d$, yang kemudian disuntikkan ke lapisan dense pertama berukuran 32 neuron dengan aktivasi ReLU. Pemilihan aktivasi ReLU sangat krusial karena sifatnya yang piecewise linear, mampu mempercepat laju pembelajaran dan mencegah masalah vanishing gradient, terutama ketika kita berhadapan dengan data tabular yang sering kali bersifat sparse atau memiliki skala bervariasi. Proses penyempitan dimensi berlanjut hingga mencapai lapisan kedua dengan 32 neuron, sebelum akhirnya memasuki bottleneck atau representasi laten yang hanya terdiri dari 8 neuron. Titik bottleneck ini memaksa jaringan untuk meninggalkan noise dan hanya menyimpan pola statistik paling esensial dari data normal. Setelah melewati titik kompresi, decoder mengambil alih dengan struktur mirror image, memperluas kembali dimensi melalui lapisan dense 32 neuron, dan berakhir pada lapisan output dengan dimensi $d$. Aktivasi output dapat disesuaikan menjadi linear untuk mempertahankan rentang nilai asli, atau sigmoid jika data perlu dinormalisasi ke interval [0, 1].

Tulang punggung dari seluruh mekanisme ini terletak pada fungsi kerugiannya. Model dilatih untuk meminimalkan Mean Squared Error (MSE), yang secara matematis dinyatakan sebagai $L = ||x - \hat{x}||^2$. Selama fase training, optimizer Adam secara iteratif menyesuaikan bobot jaringan agar selisih kuadrat antara input asli $x$ dan hasil rekonstruksi $\hat{x}$ mendekati nol. Semakin kecil nilai loss, semakin baik kapasitas model dalam mempelajari manifold data normal. Namun, kekuatan sebenarnya muncul saat fase inference. Karena model tidak pernah melihat data anomali selama pelatihan, ia akan gagal merepresentasikan pola yang tidak sesuai dengan distribusi latih. Kegagalan ini termanifestasi sebagai lonjakan error rekonstruksi. Oleh karena itu, skor anomali untuk setiap sampel dihitung langsung menggunakan persamaan $anomaly\_score(x) = MSE(x, \hat{x})$. Nilai skor ini bersifat kontinu dan siap digunakan sebagai variabel prediktif dalam pengambilan keputusan berbasis ambang batas.

Perlu ditekankan bahwa pembahasan arsitektur dan loss function ini berperan sebagai jembatan metodologis menuju deep learning khusus untuk data tabular. Meskipun framework deep learning sering diasosiasikan dengan computer vision atau NLP, data tabular menuntut desain arsitektural yang lebih sederhana namun efektif, seperti multi-layer perceptron bertipe encoder-decoder ini. Pembahasan lanjutan mengenai teknik deep tabular learning, termasuk strategi handling missing values, categorical embedding, dan advanced regularization, akan kita eksplorasi secara mendalam pada Pertemuan 9. Untuk现阶段, fokus kita tetap pada penerapan autoencoder sebagai unsupervised anomaly detector yang robust dan interpretable. Pemahaman fondasi ini akan menjadi baseline wajib bagi Anda dalam merancang eksperimen penelitian, khususnya saat melakukan error analysis, mengukur generalisasi model, atau menyusun ablation study untuk membuktikan efektivitas komponen tertentu dalam pipeline deteksi anomali.

### Inti yang Harus Ditekankan

- Arsitektur autoencoder mengikuti pola simetris encoder-decoder dengan bottleneck berdimensi rendah yang memaksa ekstraksi fitur esensial dan eliminasi noise.
- Fungsi kerugian MSE ($L = ||x - \hat{x}||^2$) menjadi dasar perhitungan anomaly score; selisih rekonstruksi yang besar secara langsung mengindikasikan kemungkinan anomali.
- Autoencoder dalam konteks ini berfungsi sebagai unsupervised baseline detector, dengan penjelasan mendalam mengenai deep tabular learning akan dilanjutkan pada Pertemuan 9.

### Transisi ke Slide Berikutnya

Untuk menerjemahkan konsep arsitektur dan perhitungan loss ini ke dalam praktik komputasi, kita akan langsung melihat implementasi kode menggunakan TensorFlow/Keras pada slide berikutnya, lengkap dengan cara menghitung skor rekonstruksi dan menetapkan threshold berdasarkan distribusi error data normal.

---

## Slide 020 - Autoencoder: Pseudocode Python

### Narasi

Pada slide sebelumnya kita telah membahas arsitektur dasar dan fungsi loss dari autoencoder sebagai detektor anomali. Kini, mari kita turunkan konsep tersebut ke dalam implementasi praktis menggunakan ekosistem Python dan Keras. Kode yang ditampilkan pada slide ini mengilustrasikan langkah-langkah sistematis untuk membangun model, melatihnya, hingga mengekstrak skor anomali secara komputasional, sekaligus menyoroti praktik terbaik yang relevan untuk penelitian tingkat magister.

Bagian pertama kode mendefinisikan struktur jaringan secara modular. Encoder dibangun menggunakan dua lapisan `Dense` berturut-turut dengan neuron 32 dan 8, di mana lapisan pertama menerima input berdimensi $d$. Aktivasi ReLU digunakan untuk memperkenalkan non-linearitas agar model mampu mempelajari pola kompleks dari data tabular. Decoder kemudian merekonstruksi input kembali ke dimensi asli $d$ melalui lapisan `Dense` 32 dan lapisan output linear. Keduanya digabungkan menjadi satu objek `autoencoder` menggunakan `keras.Sequential`. Pendekatan modular ini memudahkan modifikasi arsitektur jika nanti kita ingin melakukan ablation study atau tuning hyperparameter untuk keperluan publikasi ilmiah.

Tahap kedua adalah kompilasi dan pelatihan model. Perintah `autoencoder.compile(optimizer="adam", loss="mse")` menetapkan optimizer Adam dan loss Mean Squared Error (MSE), sesuai dengan teori rekonstruksi. Poin paling kritis terdapat pada `autoencoder.fit(X_normal, X_normal, epochs=50, batch_size=64)`. Model hanya dilatih menggunakan subset data normal, dengan target prediksi sama persis dengan inputnya. Secara konseptual, ini memaksa autoencoder untuk mempelajari manifold distribusi kondisi normal saja. Ketika data anomali yang belum pernah dilihat selama training dimasukkan, jaringan akan gagal merekonstruksinya secara akurat, yang secara alami menghasilkan error rekonstruksi tinggi.

Pada tahap inferensi, kita menghitung reconstruction error untuk setiap sampel dalam dataset lengkap $X$. Fungsi `autoencoder.predict(X)` menghasilkan output terprediksi, sedangkan perhitungan `skor = ((X - rekonstruksi) ** 2).mean(axis=1)` menerapkan rumus MSE per baris secara vektorisasi. Hasilnya adalah array satu dimensi berisi skor anomali per entri data. Keputusan klasifikasi dilakukan berdasarkan aturan threshold: jika skor melebihi batas tertentu, sampel dikategorikan sebagai anomali. Dalam praktik riset, threshold ini biasanya ditentukan secara statistik dari distribusi error pada data validasi normal, misalnya mengambil persentil ke-99 atau ke-95, sehingga false positive rate dapat dikontrol secara eksplisit sesuai kebutuhan eksperimen.

Implementasi ini menegaskan bahwa kekuatan autoencoder terletak pada kemampuannya menangkap representasi non-linear tanpa bergantung pada label supervisi. Namun, robustness model sangat bergantung pada kualitas dan representativitas data normal yang digunakan untuk training, serta strategi penentuan threshold yang transparan dan dapat direproduksi. Hal ini menjadi fondasi metodologis yang kuat sebelum kita membandingkannya dengan pendekatan deteksi anomali lainnya pada slide berikutnya.

### Inti yang Harus Ditekankan

- Pelatihan autoencoder untuk anomaly detection harus eksklusif menggunakan data normal (`X_normal`), karena model belajar manifold distribusi normal dan tidak di-"kontaminasi" oleh pola anomali.
- Skor anomali dihitung via reconstruction error (MSE) per sampel, bukan rata-rata global, sehingga model tetap sensitif terhadap deviasi lokal maupun global.
- Penentuan threshold bersifat statistik (misalnya persentil 99 pada distribusi error data normal) untuk menyeimbangkan recall dan precision secara terukur, bukan dipilih secara arbitrer.
- Struktur kode yang modular dan penggunaan operasi vektorisasi memungkinkan replikasi eksperimen yang cepat, mendukung iterasi ablation study dan pelaporan metrik yang ketat untuk standar konferensi internasional.

### Transisi ke Slide Berikutnya

Setelah memahami implementasi teknis dan logika scoring dari autoencoder, mari kita luaskan perspektif dengan melihat peta metodologi deteksi anomali secara keseluruhan. Pada slide berikutnya, kita akan merangkum berbagai teknik yang telah dibahas ke dalam tabel perbandingan strategis, lengkap dengan pedoman praktis untuk memilih algoritma yang paling sesuai dengan karakteristik dataset, ketersediaan label, dan tujuan penelitian Anda.

---

## Slide 021 - Ringkasan Metode Deteksi Anomali

### Narasi

Pada slide ini, kita menyusun sintesis komparatif dari empat paradigma utama deteksi anomali yang relevan untuk penelitian dan implementasi tingkat magister. Jika pada slide sebelumnya kita menelaah secara teknis bagaimana Autoencoder dilatih secara unsupervised hanya pada data normal dan memanfaatkan reconstruction error sebagai mekanisme scoring, maka tabel berikut memperluas perspektif tersebut dengan membandingkan Isolation Forest, Local Outlier Factor (LOF), One-Class SVM, dan Autoencoder secara menyeluruh. Setiap metode beroperasi dengan asumsi matematis yang berbeda, sehingga pemahaman mendalam mengenai karakteristiknya menjadi prasyarat sebelum memilih baseline eksperimen.

Mari kita bedah tabel perbandingan tersebut secara sistematis. Isolation Forest mengandalkan prinsip pengisolasian titik data melalui partisi ruang fitur secara acak, menjadikannya sangat cepat dan scalable untuk dataset tabular berskala besar, meskipun performanya menurun ketika anomali bersifat lokal dan tersembunyi di dalam klaster yang padat. Sebaliknya, LOF mengukur anomali berdasarkan kerapatan relatif dibandingkan tetangga terdekatnya, sehingga sangat efektif mendeteksi outlier kontekstual atau lokal; namun, kompleksitas komputasinya yang tinggi membuat metode ini rentan terhadap curse of dimensionality dan membutuhkan sumber daya lebih besar. One-Class SVM membentuk decision boundary fleksibel hanya berdasarkan distribusi kelas normal, cocok untuk skenario semi-supervised di mana data negatif tidak tersedia, tetapi kinerjanya sangat sensitif terhadap pemilihan kernel dan tuning hyperparameter. Terakhir, Autoencoder memangku representasi non-linear yang kompleks dan adaptif terhadap pola data yang rumit, namun memerlukan volume data yang memadai, infrastruktur komputasi yang stabil, serta proses tuning arsitektur yang cermat untuk menghindari overfitting atau underfitting.

Dari sudut pandang pedoman praktis dan desain penelitian, pemilihan metode dapat diarahkan sesuai dengan karakteristik dataset dan tujuan analitik. Untuk eksplorasi awal pada dataset tabular berukuran besar tanpa prior knowledge, Isolation Forest menjadi baseline yang solid karena kecepatan dan skalabilitasnya. Apabila fokus penelitian adalah mendeteksi penyimpangan yang terjadi secara lokal dalam struktur klaster tertentu, LOF lebih direkomendasikan. Ketika akses terbatas hanya pada data bersih atau normal, One-Class SVM menawarkan solusi yang elegan tanpa memerlukan label negatif. Sementara itu, untuk masalah dengan hubungan fitur yang sangat non-linear atau dimensi tinggi yang sudah mengalami reduksi, Autoencoder memberikan fleksibilitas representasi terbaik, asalkan ketersediaan data dan kapasitas komputasi mendukung pelatihan model deep learning.

Poin krusial yang perlu ditekankan dalam ringkasan ini adalah bahwa tidak ada algoritma tunggal yang superior secara universal. Efektivitas setiap metode sangat bergantung pada distribusi data, keberadaan struktur klaster, ketersediaan label, serta batasan komputasi dan waktu. Dalam konteks penelitian magister, mahasiswa dituntut untuk tidak sekadar menjalankan salah satu algoritma secara otomatis, melainkan melakukan comparative evaluation atau ablation study untuk membuktikan mengapa suatu metode lebih sesuai dengan hipotesis dan karakteristik dataset yang diteliti. Kesadaran akan trade-off antara akurasi, interpretabilitas, stabilitas, dan efisiensi komputasi merupakan fondasi metodologis yang wajib dikuasai sebelum memasuki tahap evaluasi model yang lebih lanjut.

### Inti yang Harus Ditekankan

- Tidak ada metode deteksi anomali yang serba bisa; pemilihan harus didasarkan pada karakteristik data (skala, dimensi, struktur klaster, linearitas) dan ketersediaan label.
- Trade-off fundamental selalu ada: kecepatan dan skalabilitas (Isolation Forest) versus ketepatan deteksi lokal (LOF), atau fleksibilitas non-linear (Autoencoder) versus kebutuhan data besar dan tuning intensif.
- Dalam penelitian S2, validasi pemilihan metode harus didukung oleh evidence empiris melalui eksperimen terkontrol, bukan asumsi teoritis semata.

### Transisi ke Slide Berikutnya

Deteksi anomali secara inheren berkaitan erat dengan fenomena data yang jarang terjadi atau sangat timpang distribusinya. Ketika kita beralih ke pembahasan imbalanced data, kita akan melihat bagaimana rasio ketidakseimbangan kelas mempengaruhi strategi preprocessing, pemilihan metrik evaluasi, dan penyesuaian algoritma agar model tetap robust terhadap rare events.

---

## Slide 022 - Imbalanced Data: Definisi dan Karakteristik

### Narasi

Data tidak seimbang, atau *imbalanced data*, merujuk pada kondisi di mana distribusi label target mengalami ketimpangan yang signifikan antar kelas. Dalam konteks pembelajaran mesin, situasi ini terjadi ketika satu kelas mendominasi volume data secara ekstrem, misalnya komposisi 99% untuk kelas mayoritas dan hanya 1% untuk kelas minoritas. Pada tingkat magister, pemahaman mengenai fenomena ini harus melampaui definisi statistik dasar. Ketidakseimbangan kelas bukanlah sekadar catatan deskriptif, melainkan bias struktural yang secara langsung menggeser fungsi kerugian (*loss function*) dan ruang keputusan model. Algoritma yang dioptimalkan untuk meminimalkan error global akan cenderung mengabaikan pola kelas minoritas karena kontribusi mereka terhadap total loss bersifat marginal, sehingga performa prediksi pada kejadian langka akan terdegradasi secara sistematis.

Untuk mengukur derajat ketimpangan ini, kita menggunakan metrik kuantitatif yang disebut *Imbalance Ratio* (IR). Perhitungannya sangat straightforward: jumlah sampel kelas mayoritas dibagi dengan jumlah sampel kelas minoritas. Nilai IR = 1 menandakan distribusi yang ideal dan seimbang. Namun, pada praktik riil, nilai IR = 10 sudah masuk dalam kategori *moderate imbalanced*, di mana model *out-of-the-box* seperti *logistic regression* atau *random forest* tanpa penyesuaian akan mulai kehilangan sensitivitas terhadap kelas minoritas. Ketika IR melampaui 100, kita memasuki ranah *extreme imbalanced*. Pada kondisi ini, strategi penanganan harus dipilih secara eksplisit, baik melalui teknik resampling seperti SMOTE atau ADASYN, pendekatan *cost-sensitive learning* yang memberi bobut penalty lebih besar pada kesalahan kelas minoritas, maupun penggunaan algoritma yang secara inherent robust terhadap ketimpangan distribusi.

Karakteristik ini sangat umum muncul dalam berbagai *rare-event problems* di industri dan riset. Pada *fraud detection*, volume transaksi normal jauh melampaui transaksi curang, menghasilkan IR khas antara 100 hingga 1000. Di bidang *cybersecurity*, lalu lintas jaringan yang benign mendominasi log server, sementara serangan siber hanya menyisakan IR berkisar 10 hingga 100. Sementara itu, *predictive maintenance* pada infrastruktur industri mencatatkan mesin yang beroperasi stabil dalam jangka waktu panjang, versus kejadian anomali atau kerusakan yang sangat sporadis, sehingga IR berada di kisaran 50 hingga 500. Saat Anda memanipulasi dataset menggunakan pandas, pemanggilan `.value_counts()` pada kolom target akan segera mengungkap angka-angka ini. Kesadaran akan besaran IR menjadi langkah pertama yang kritis sebelum memutuskan apakah perlu dilakukan transformasi data atau pemilihan metrik evaluasi yang lebih tepat.

Memahami definisi dan karakteristik imbalanced data ini menjadi prasyarat mutlak sebelum kita menilai performa model. Seperti yang akan kita bedah pada slide berikutnya, metrik akurasi konvensional dapat menghasilkan ilusi keberhasilan yang berbahaya dalam skenario distribusi timpang. Oleh karena itu, penguasaan konsep ini akan membekali Anda untuk merancang eksperimen yang valid, memilih baseline yang sesuai, dan menghindari jebakan evaluasi yang sering menjebak peneliti pemula maupun praktisi industri.

### Inti yang Harus Ditekankan

- Ketidakseimbangan kelas adalah bias struktural yang menggeser optimisasi loss function, bukan sekadar fenomena statistik deskriptif.
- Imbalance Ratio (IR) berfungsi sebagai indikator kuantitatif: IR=1 seimbang, IR=10 moderat, dan IR>100 ekstrem, yang menentukan urgensi teknik penanganan.
- Domain *rare-event* seperti fraud, keamanan siber, dan *predictive maintenance* secara inheren memiliki IR tinggi, sehingga menuntut pemilihan metrik dan strategi preprocessing yang spesifik.

### Transisi ke Slide Berikutnya

Setelah kita memahami mengapa distribusi kelas bisa sangat timpang, pertanyaan selanjutnya adalah bagaimana model mengevaluasi dirinya sendiri dalam kondisi tersebut. Mari kita buka slide berikutnya untuk melihat secara konkret mengapa metrik akurasi konvensional justru menyesatkan, dan bagaimana confusion matrix serta metrik berbasis kelas dapat mengungkap kegagalan tersembunyi tersebut.

---

## Slide 023 - Mengapa Accuracy Menyesatkan?

### Narasi

Setelah membahas definisi, rasio ketidakseimbangan, dan contoh domain aplikasi pada slide sebelumnya, langkah logis berikutnya adalah menguji bagaimana metrik evaluasi standar merespons distribusi data yang timpang. Di sinilah akurasi (*accuracy*) sering kali menjadi jebakan analitis yang berbahaya. Mari kita telusuri contoh konkret yang disajikan pada slide ini untuk memahami mekanisme penyesatan tersebut.

Bayangkan sebuah dataset berisi 10.000 transaksi, dengan hanya 100 transaksi yang termasuk dalam kategori fraud atau penipuan. Proporsi kelas minoritas dalam kasus ini hanyalah 1%. Jika kita melatih sebuah model klasifikasi yang secara naif selalu memprediksi setiap transaksi sebagai "normal", model tersebut akan menghasilkan akurasi sebesar 9.900 dibagi 10.000, atau 99%. Secara numerik, angka 99% terlihat sangat meyakinkan dan seolah menandakan performa model yang unggul. Namun, interpretasi ini sepenuhnya keliru jika kita membedahnya melalui matriks kebingungan (*confusion matrix*) yang tertera di slide.

Dalam ilustrasi matriks kebingungan tersebut, terlihat jelas bahwa seluruh 9.900 transaksi normal diklasifikasikan dengan benar sebagai *True Negative*, sementara tidak ada satu pun prediksi positif yang dihasilkan. Akibatnya, dari 100 kasus fraud yang sesungguhnya terjadi, model gagal mendeteksinya sama sekali (*False Negative* = 100, *True Positive* = 0). Jika dihitung ulang, akurasi memang tetap 99%, tetapi nilai *recall* untuk kelas fraud jatuh menjadi 0%. Sistem deteksi fraud ini secara praktis menjadi tidak berguna karena semua anomali kritis lolos tanpa terdeteksi, padahal deteksi dini adalah tujuan utama penerapan algoritma dalam konteks ini.

Pelajaran metodologis yang harus kita tangkap dari fenomena ini adalah bahwa akurasi hanya bermakna valid ketika biaya kesalahan klasifikasi antar kelas bersifat simetris atau seimbang. Pada masalah *rare-event* seperti deteksi fraud, keamanan siber, atau pemeliharaan prediktif, konsekuensi finansial dan operasional dari kegagalan mendeteksi kelas minoritas jauh lebih besar dibandingkan kesalahan pada kelas mayoritas. Oleh karena itu, dalam praktik *data mining* maupun riset tingkat magister, akurasi tidak boleh lagi dijadikan tolok ukur tunggal. Evaluasi model harus beralih ke metrik yang mampu memisahkan kinerja per kelas, serta mengintegrasikan pertimbangan biaya (*cost-sensitive evaluation*) atau utilitas bisnis secara eksplisit.

### Inti yang Harus Ditekankan

- Akurasi (*accuracy*) adalah metrik yang menyesatkan pada data tidak seimbang karena secara matematis didominasi oleh frekuensi kelas mayoritas.
- Model yang selalu memprediksi kelas mayoritas dapat mencapai akurasi tinggi (>90%) namun memiliki recall nol untuk kelas minoritas, sehingga gagal total dalam tugas deteksi.
- Evaluasi performa pada *rare-event problems* wajib meninggalkan akurasi sebagai metrik utama dan beralih ke metrik berbasis kelas atau berbasis biaya yang sensitif terhadap performa kelas minoritas.

### Transisi ke Slide Berikutnya

Untuk membangun kerangka evaluasi yang tepat, kita perlu memahami terlebih dahulu komponen dasar pembentuk perhitungan metrik-metrik tersebut. Pada slide berikutnya, kita akan membedah struktur formal *confusion matrix* dan memperkenalkan empat metrik evaluasi inti—precision, recall, specificity, serta F1-score—yang akan menjadi fondasi analisis kita dalam menilai model secara adil dan komprehensif.

---

## Slide 024 - Metrik Evaluasi untuk Imbalanced Data

### Narasi

Setelah kita mengonfirmasi bahwa akurasi bersifat menyesatkan ketika distribusi kelas sangat timpang, langkah metodologis berikutnya adalah menguraikan komponen dasar evaluasi melalui Confusion Matrix. Matriks ini memecah hasil prediksi menjadi empat kategori fundamental: True Positive (TP) merepresentasikan kasus positif yang berhasil dikenali dengan benar; False Negative (FN) adalah kesalahan di mana model gagal mendeteksi kejadian positif yang sebenarnya terjadi; False Positive (FP) terjadi ketika model secara keliru mengklasifikasikan sampel negatif sebagai positif; dan True Negative (TN) menunjukkan prediksi yang tepat untuk kelas negatif. Pemahaman atas empat sel matriks ini menjadi prasyarat mutlak sebelum menghitung metrik apa pun, karena setiap metrik evaluasi pada dasarnya adalah transformasi aljabar dari kombinasi TP, FP, FN, dan TN.

Dari struktur matriks tersebut, kita dapat menurunkan metrik per kelas yang lebih informatif. Precision dihitung sebagai TP dibagi jumlah total prediksi positif (TP + FP). Metrik ini menjawab pertanyaan operasional: dari semua label positif yang dikeluarkan model, berapa persentase yang valid? Recall atau Sensitivitas dihitung sebagai TP dibagi jumlah total aktual positif (TP + FN). Recall mengukur kelengkapan deteksi model terhadap seluruh kejadian positif yang sesungguhnya. Specificitas dihitung dari TN dibagi jumlah total aktual negatif (TN + FP), yang mencerminkan kemampuan model dalam mempertahankan prediksi negatif pada kelas mayoritas. Terakhir, F1-score merupakan rata-rata harmonik dari Precision dan Recall, dirumuskan sebagai 2 dikalikan (Precision × Recall) dibagi (Precision + Recall). Berbeda dengan rata-rata aritmatika, rata-rata harmonik memberikan hukuman berat jika salah satu komponen mendekati nol, sehingga F1-score menjadi indikator yang lebih stabil untuk menilai keseimbangan antara ketepatan dan kelengkapan deteksi.

Dalam konteks deteksi fraud atau rare-event problems, interpretasi metrik-metrik ini harus dikaitkan langsung dengan biaya kesalahan klasifikasi. Recall pada kelas fraud mencerminkan proporsi penipuan yang tertangkap; nilai rendah berarti risiko finansial dan operasional yang tinggi akibat fraud yang lolos. Precision pada kelas fraud menunjukkan rasio peringatan yang akurat; jika rendah, sistem akan menghasilkan banyak false alarm yang membebani proses investigasi manual dan menurunkan kepercayaan pengguna. F1-score kemudian berfungsi sebagai kompromi kuantitatif antara kedua tujuan yang sering kali bertolak belakang tersebut. Sebagai peneliti pada jenjang magister, Anda tidak boleh hanya menyajikan satu angka agregat. Rancang protokol evaluasi yang melaporkan Precision, Recall, dan F1 secara terpisah, lakukan ablation study terhadap threshold yang digunakan, dan justifikasi pilihan metrik utama berdasarkan trade-off biaya yang relevan dengan domain penelitian Anda.

### Inti yang Harus Ditekankan

- Confusion Matrix adalah fondasi wajib untuk mengurai performa model menjadi TP, FP, FN, dan TN sebelum menghitung metrik apa pun.
- Precision mengukur ketepatan prediksi positif, Recall mengukur kelengkapan deteksi positif, dan Specificitas mengukur akurasi identifikasi kelas negatif.
- F1-score adalah rata-rata harmonik yang menyeimbangkan Precision dan Recall, sangat efektif untuk menghindari bias numerik pada data tidak seimbang.
- Dalam riset dan praktik, selalu laporkan Precision, Recall, dan F1 secara eksplisit, serta pilih metrik dominan berdasarkan dampak biaya kesalahan klasifikasi masing-masing kelas.

### Transisi ke Slide Berikutnya

Meskipun Precision, Recall, dan F1 memberikan gambaran performa yang jelas, ketiga metrik tersebut masih bergantung pada pemilihan threshold klasifikasi yang arbitrer. Untuk mengevaluasi kinerja model secara holistik tanpa terikat pada satu titik potong tertentu, kita perlu beralih ke metrik berbasis kurva. Pada slide berikutnya, kita akan membedah perbedaan fundamental antara ROC-AUC dan PR-AUC, serta menjelaskan mengapa PR-AUC secara statistik lebih robust dan direkomendasikan sebagai standar pelaporan pada masalah rare-event.

---

## Slide 025 - PR-AUC vs ROC-AUC

### Narasi

Pada slide sebelumnya, kita telah mengurai komponen confusion matrix dan metrik turunan seperti precision, recall, specificity, serta F1-score. Namun, dalam praktik evaluasi model data mining tingkat lanjut, kita jarang mengandalkan satu threshold klasifikasi tunggal. Model biasanya diuji di berbagai ambang batas probabilitas, sehingga diperlukan metrik agregat yang mampu merangkum performa secara menyeluruh. Konsep Area Under Curve (AUC) muncul sebagai solusi, khususnya ketika kita berhadapan dengan distribusi data yang sangat tidak seimbang atau fenomena rare events.

Kurva Receiver Operating Characteristic (ROC) memplot True Positive Rate (TPR) terhadap False Positive Rate (FPR). Secara matematis, FPR dihitung sebagai FP dibagi total aktual negatif (FP + TN). Pada dataset yang sangat imbalanced, jumlah kelas mayoritas jauh melampaui kelas minoritas. Akibatnya, meskipun model menghasilkan false positive dalam jumlah absolut yang signifikan, nilai FPR tetap tampak kecil karena penyebutnya didominasi oleh true negative yang masif. Kondisi ini menyebabkan kurva ROC-AUC sering memberikan kesan terlalu optimis atau misleading mengenai kemampuan sebenarnya model dalam mendeteksi event langka.

Sebagai alternatif yang lebih robust, Precision-Recall AUC (PR-AUC) memplot hubungan antara precision dan recall. Berbeda dengan ROC, PR-AUC tidak memperhitungkan true negative sama sekali. Fokusnya sepenuhnya tertuju pada bagaimana model menyeimbangkan ketepatan prediksi positif dengan cakupan deteksi kelas positif. Karena kedua metrik tersebut hanya bergantung pada elemen prediktor positif dan aktual positif, PR-AUC jauh lebih sensitif terhadap degradasi performa pada kelas minoritas. Ilustrasi klasik menunjukkan bahwa pada Information Ratio (IR) sebesar 1000, area ROC bisa saja bernilai tinggi semata-mata karena dominasi true negative, sedangkan PR-AUC akan langsung mencerminkan kesulitan model dalam mempertahankan precision saat recall ditingkatkan.

Untuk standar pelaporan penelitian tingkat magister dan publikasi internasional, rekomendasi evaluasinya bersifat preskriptif. Gunakan PR-AUC sebagai metrik utama untuk menilai model pada masalah rare-event atau imbalanced classification. ROC-AUC dapat tetap dilaporankan sebagai pembanding komplementer, namun jangan dijadikan acuan tunggal. Selain itu, selalu sertakan nilai precision dan recall pada threshold operasional yang relevan dengan konteks riset atau implementasi Anda, karena metrik agregat AUC tidak menggantikan kebutuhan analisis performa pada titik keputusan nyata. Pendekatan ini memastikan transparansi metodologis dan memungkinkan replikasi eksperimen yang akurat.

### Inti yang Harus Ditekankan

- ROC-AUC cenderung overoptimistic pada data sangat tidak seimbang karena FPR terdistorsi oleh jumlah besar True Negative yang menutupi kesalahan deteksi.
- PR-AUC mengabaikan True Negative sehingga lebih sensitif dan jujur dalam mengukur kemampuan diskriminasi kelas minoritas atau rare events.
- Standar pelaporan riset harus memprioritaskan PR-AUC sebagai metrik utama, melengkapi dengan ROC-AUC, serta menyajikan precision-recall pada threshold praktis yang relevan dengan domain aplikasi.

### Transisi ke Slide Berikutnya

Setelah menetapkan PR-AUC sebagai indikator evaluasi yang lebih andal dalam konteks data tidak seimbang, langkah logis berikutnya adalah mengevaluasi model bukan hanya berdasarkan kinerja statistik, tetapi berdasarkan dampak ekonomi atau risiko nyata. Kita akan beralih ke cost-sensitive evaluation, di mana setiap jenis kesalahan klasifikasi diberi bobot biaya yang tidak simetris sesuai konteks bisnis atau riset.

---

## Slide 026 - Metrik Lain: Cost-Sensitive Evaluation

### Narasi

Setelah pada slide sebelumnya kita mengonfirmasi bahwa ROC-AUC cenderung memberikan estimasi performa yang terlalu optimis pada data sangat tidak seimbang, dan beralih ke Precision-Recall AUC sebagai indikator yang lebih sensitif terhadap kelas minoritas, evaluasi model tidak boleh berhenti pada metrik probabilistik semata. Dalam praktik *data mining* tingkat lanjut, khususnya untuk masalah deteksi anomali atau fraud, setiap jenis kesalahan prediksi membawa konsekuensi operasional dan finansial yang berbeda. Kita tidak dapat lagi memperlakukan semua kesalahan dengan bobot yang sama. Di sinilah konsep evaluasi peka biaya (*cost-sensitive evaluation*) masuk sebagai standar evaluasi yang lebih realistis dan berorientasi pada dampak bisnis.

Perhatikan tabel biaya kesalahan yang tidak simetris. Ketika model berhasil mendeteksi kasus fraud (*True Positive*), biaya yang dikeluarkan relatif kecil, biasanya terbatas pada proses verifikasi manual atau penundaan sementara transaksi. Namun, jika model gagal mendeteksi fraud yang sesungguhnya terjadi (*False Negative*), kerugian yang ditimbulkan bisa sangat masif, setara dengan nilai transaksi yang hilang atau pencurian dana. Sebaliknya, ketika model salah mengklasifikasikan transaksi normal sebagai fraud (*False Positive*), dampaknya berupa biaya investigasi tambahan serta potensi penurunan kepuasan atau reputasi merek. Jelas terlihat bahwa struktur biaya ini sangat asimetris, di mana *False Negative* secara inheren jauh lebih "mahal" daripada *False Positive*.

Untuk mengkonversi perbedaan kualitatif ini menjadi ukuran kuantitatif, kita menyusun *Cost Matrix*. Pada ilustrasi skema di slide, kita menetapkan parameter biaya: keputusan yang benar (*TP* dan *TN*) memiliki biaya nol. Sementara itu, *False Negative* diberi bobot 100 unit karena mencerminkan kerugian transaksi langsung, sedangkan *False Positive* hanya bernilai 5 unit yang merepresentasikan beban administratif dan pemulihan hubungan pelanggan. Dengan kerangka ini, kinerja model dievaluasi melalui rumus *Total Cost* = C(FP) × FP + C(FN) × FN. Karena C(TP) dan C(TN) bernilai nol, mereka tidak berkontribusi pada perhitungan. Prinsip evaluasinya terbalik dibandingkan akurasi: semakin rendah nilai total cost yang dihasilkan model pada data uji independen, semakin baik model tersebut dari sudut pandang pengambilan keputusan riil.

Di banyak aplikasi industri, fokus pengukuran akhirnya bergeser dari minimisasi biaya ke maksimisasi nilai ekonomi, yang sering disebut sebagai *Profit* atau *Savings Metrics*. Contoh konkretnya adalah menghitung selisih antara total kerugian fraud yang berhasil dicegah oleh model, dikurangi dengan seluruh biaya investigasi yang timbul akibat *False Positive*. Oleh karena itu, meskipun metrik statistik klasik seperti precision, recall, dan F1-score tetap wajib dilaporkan untuk transparansi karakteristik model, integrasi metrik berbasis moneter adalah keharusan metodologis. Hal ini membuktikan *practical significance* atau signifikansi praktis model, sebuah tuntutan standar dalam penelitian magister yang menuntut validasi empiris di luar angka akurasi belaka.

### Inti yang Harus Ditekankan

- Kesalahan prediksi memiliki dampak ekonomi yang tidak simetris; *False Negative* umumnya jauh lebih merugikan daripada *False Positive*, sehingga evaluasi harus mempertimbangkan bobot biaya masing-masing.
- Model harus dinilai menggunakan *Cost Matrix* dan menghitung *Total Cost* secara eksplisit, karena metrik probabilistik murni tidak mencerminkan konsekuensi riil di lapangan.
- Pelaporan hasil eksperimen wajib menyertakan metrik berbasis nilai uang (*profit/savings*) untuk membuktikan signifikansi praktis dan kelayakan implementasi model.

### Transisi ke Slide Berikutnya

Memahami cara mengukur kinerja model melalui lensa biaya telah memberi kita kriteria objektif untuk menilai efektivitas prediksi. Langkah logis selanjutnya adalah menentukan bagaimana cara melatih atau menyesuaikan model agar mampu mencapai total cost yang minimal tersebut. Pada slide berikutnya, kita akan membedah peta strategis penanganan data tidak seimbang, mencakup pendekatan tingkat data, tingkat algoritma, hingga arsitektur hibrida, disertai prinsip ketat untuk menjaga integritas validasi dan mencegah *data leakage*.

---

## Slide 027 - Strategi Penanganan Imbalanced Data: Overview

### Narasi

Setelah membahas bagaimana evaluasi model harus mempertimbangkan biaya kesalahan yang tidak simetris pada slide sebelumnya, langkah metodologis berikutnya adalah memetakan secara komprehensif strategi apa saja yang tersedia untuk menangani masalah imbalanced data. Dalam konteks penelitian tingkat magister, pendekatan ini tidak boleh dipilih secara arbitrer atau berdasarkan kebiasaan, melainkan harus dipertimbangkan melalui kerangka kerja yang terstruktur. Peta strategi penanganan imbalanced data dapat diklasifikasikan menjadi tiga cabang utama: data-level, algorithm-level, dan hybrid. Kategori data-level berfokus pada modifikasi distribusi kelas sebelum proses pelatihan, mencakup teknik undersampling untuk memangkas sampel kelas mayoritas, oversampling untuk memperbanyak representasi kelas minoritas, serta metode generatif seperti SMOTE dan variasinya yang mensintesis sampel baru di sepanjang manifold antar kelas. Kategori algorithm-level bekerja langsung pada mekanisme pembelajaran tanpa mengubah data mentah, meliputi cost-sensitive learning yang mengintegrasikan matriks biaya ke dalam fungsi loss, penyesuaian decision threshold agar model lebih sensitif terhadap kelas langka, serta penggunaan ensemble methods yang secara native mendukung class weighting. Terakhir, strategi hybrid menggabungkan kekuatan kedua pendekatan tersebut, misalnya dengan menerapkan SMOTE bersamaan dengan Random Forest, atau memadukan pipeline resampling dengan model yang bersifat cost-sensitive.

Implementasi strategi-strategi ini memerlukan disiplin eksperimental yang ketat agar validitas ilmiah tetap terjaga. Prinsip pertama yang paling fundamental adalah bahwa operasi resampling hanya boleh dilakukan pada training set. Melakukan manipulasi distribusi pada seluruh dataset atau bahkan pada test set akan memicu data leakage, di mana pola statistik dari kelas minoritas "bocor" ke tahap seleksi fitur, scaling, atau validasi silang, sehingga menghasilkan estimasi performa yang terlalu optimistis dan gagal merepresentasikan generalisasi ke populasi sebenarnya. Kedua, test set wajib mempertahankan distribusi kelas asli sesuai dengan kondisi operasional dunia nyata. Evaluasi pada data yang sudah di-resample akan mendistorsi metrik klasifikasi klasik dan mengaburkan signifikansi praktis yang telah kita kalkulasi melalui cost matrix pada slide sebelumnya. Ketiga, pemilihan strategi penanganan harus didasarkan pada bukti empiris melalui eksperimen terkontrol, bukan asumsi teoritis semata. Setiap teknik perlu divalidasi menggunakan cross-validation yang tepat, dilanjutkan dengan analisis perbandingan kinerja dan ablation study untuk mengukur kontribusi spesifik masing-masing komponen terhadap akurasi dan stabilitas model.

### Inti yang Harus Ditekankan

- Klasifikasi strategi menjadi data-level, algorithm-level, dan hybrid menyediakan kerangka sistematis untuk align teknik penanganan dengan karakteristik dataset, constraint komputasi, dan tujuan penelitian.
- Isolasi proses resampling hanya pada training set dan menjaga distribusi asli pada test set adalah syarat mutlak untuk mencegah data leakage dan memastikan metrik evaluasi mencerminkan performa riil.
- Pemilihan teknik harus evidence-driven dan berbasis eksperimen, sejalan dengan standar penelitian S2 yang menuntut reproducibility, robustness analysis, dan justifikasi metodologis yang kuat.

### Transisi ke Slide Berikutnya

Untuk mendalami salah satu pilar utama dari kategori data-level, kita akan lanjutkan pembahasan ke teknik undersampling, mulai dari mekanisme pengambilan sampel, trade-off antara efisiensi komputasi versus kehilangan informasi, hingga berbagai varian canggih seperti NearMiss, Tomek links, dan Edited Nearest Neighbors.

---

## Slide 028 - Undersampling

### Narasi

Setelah memetakan keseluruhan strategi penanganan data tidak seimbang pada slide sebelumnya, kita kini menyoroti pendekatan tingkat data yang paling dasar, yaitu Undersampling. Konsep utamanya sangat straightforward: mengurangi jumlah sampel pada kelas mayoritas secara acak hingga distribusinya setara dengan kelas minoritas. Sebagai contoh praktis, pada dataset deteksi fraud dengan rasio 10.000 transaksi normal terhadap 100 transaksi fraud, teknik ini akan mengambil 100 sampel normal secara random untuk diseimbangkan. Dalam praktik riset data mining tingkat magister, implementasi teknik ini harus mengikuti aturan ketat bahwa operasi resampling hanya boleh diterapkan pada training set. Test set wajib dibiarkan mencerminkan distribusi populasi asli agar metrik evaluasi merepresentasikan kinerja model di lingkungan produksi yang sesungguhnya, menghindari bias optimistik yang sering muncul akibat distribusi artificial.

Dari perspektif efisiensi, keunggulan utama undersampling terletak pada pengurangan dimensi dataset secara signifikan. Pemotongan volume data ini mempercepat iterasi pelatihan model, mengurangi beban memori, dan memungkinkan eksplorasi hyperparameter space atau ablation study yang lebih agresif. Selain itu, teknik ini efektif memecah dominasi kelas mayoritas yang biasanya mendominasi fungsi loss, sehingga model tidak lagi cenderung memprediksi semua instance sebagai kelas dominan. Namun, trade-off yang harus diterima cukup besar. Pengambilan sampel secara acak berpotensi membuang informasi berharga, terutama jika sampel yang tereliminasi justru berada di vicinity decision boundary atau mengandung variasi struktural yang penting. Risiko terbesar adalah model kehilangan kapasitas generalisasi terhadap kelas mayoritas, yang dapat memicu underfitting dan menurunkan robustness prediksi pada data baru.

Untuk memitigasi kelemahan pengambilan acak tersebut, literatur data mining menawarkan beberapa variasi algoritmik yang memanfaatkan struktur geometris data. Random Undersampling tetap menjadi baseline yang mudah diimplementasikan. NearMiss memperbaiki pendekatan ini dengan memilih sampel mayoritas yang berada paling dekat dengan centroid atau tetangga terdekat kelas minoritas, sehingga mempertahankan informasi di sekitar batas klasifikasi. Tomek Links beroperasi dengan mengidentifikasi dan menghapus pasangan sampel lintas kelas yang saling berdekatan secara ekstrem, yang umumnya menandakan noise atau ambiguitas label. Terakhir, Edited Nearest Neighbors (ENN) menerapkan filter berbasis k-NN untuk mendeteksi dan membuang sampel mayoritas yang secara konsisten salah diklasifikasikan oleh tetangganya, sekaligus membersihkan outlier. Pemilihan variasi ini harus didasari oleh exploratory data analysis dan analisis error, bukan sekadar heuristik.

### Inti yang Harus Ditekankan

- Resampling wajib dieksekusi eksklusif pada training set; test set harus tetap mempertahankan distribusi asli untuk validasi eksternal yang objektif dan menghindari data leakage.
- Terdapat trade-off fundamental antara efisiensi komputasi dan risiko kehilangan informasi kritis, yang dapat menyebabkan underfitting jika pembuangan data tidak mempertimbangkan kerapatan fitur.
- Variasi seperti NearMiss, Tomek Links, dan ENN dirancang untuk mempertahankan informasi di sekitar decision boundary, namun memerlukan tuning parameter (seperti nilai k atau threshold jarak) yang hati-hati sesuai karakteristik dataset.

### Transisi ke Slide Berikutnya

Jika undersampling berfokus pada pemangkasan representasi kelas mayoritas, langkah selanjutnya adalah mengeksplorasi pendekatan simetrisnya, yaitu Oversampling, yang berupaya memperkaya sampel kelas minoritas tanpa mengorbankan data normal. Pada slide berikutnya, kita akan membedah mekanisme duplikasi acak, memahami risiko overfitting yang ditimbulkannya, serta memperkenalkan SMOTE sebagai teknik sintesis berbasis interpolasi yang menjadi standar industri dalam menangani imbalance data.

---

## Slide 029 - Oversampling

### Narasi

Setelah membahas strategi undersampling pada slide sebelumnya yang berfokus pada pengurangan sampel kelas mayoritas, kita kini beralih ke pendekatan komplementer, yaitu oversampling. Jika undersampling berisiko membuang informasi berharga dari data normal, oversampling justru berupaya menyeimbangkan distribusi kelas dengan memperbanyak representasi kelas minoritas tanpa mengurangi volume data mayoritas. Secara fundamental, teknik ini bekerja melalui dua mekanisme utama: duplikasi acak terhadap sampel minoritas yang sudah ada, atau generasi sampel baru secara sintetik berdasarkan pola distribusi data minoritas itu sendiri.

Penerapan random oversampling cukup straightforward, yaitu menduplikasi sampel-sampel kelas minoritas secara acak hingga rasio antar kelas mencapai keseimbangan. Keunggulan utamanya terletak pada preservasi seluruh informasi awal dari dataset, sehingga model tetap terpapar variasi lengkap dari kelas mayoritas. Namun, dalam konteks pembelajaran mesin tingkat lanjut, metode ini memiliki kelemahan krusial: duplikasi eksak menciptakan redundansi yang dapat mendorong model untuk overfit terhadap sampel minoritas tersebut. Model cenderung menghafal pola berulang alih-alih belajar generalisasi, yang akhirnya menurunkan performa saat diuji pada data未见 (unseen).

Untuk mengatasi keterbatasan overfitting akibat duplikasi, SMOTE (Synthetic Minority Over-sampling Technique) hadir sebagai evolusi yang lebih robust. Alih-alih menyalin data mentah, SMOTE menghasilkan sampel sintetis melalui proses interpolasi linear antar titik data minoritas terdekat. Seperti ilustrasi pada slide, jika kita memiliki sampel minoritas A dan B, sampel baru D dibentuk menggunakan rumus D = A + λ × (B - A), dengan λ bernilai antara 0 hingga 1. Nilai λ ini bertindak sebagai faktor pembobotan posisi; misalnya, ketika λ = 0,5, titik D akan jatuh tepat di tengah-tengah vektor yang menghubungkan A dan B. Pendekatan ini memastikan bahwa ruang fitur kelas minoritas diperluas secara halus dan realistis, bukan sekadar dikopi, sehingga mengurangi bias repetitif sambil mempertahankan struktur geometris asli distribusi data.

Memahami mekanisme interpolasi ini menjadi fondasi penting sebelum kita mengevaluasi langkah algoritmik dan implementasi praktisnya. Pada slide berikutnya, kita akan membedah secara teknis bagaimana SMOTE mencari tetangga terdekat, menerapkan parameter λ secara uniform, serta mengintegrasikan teknik ini ke dalam pipeline Python menggunakan library imbalanced-learn, sekaligus memperhatikan batasan kritisnya pada data berdimensi tinggi atau ber-noise besar.

### Inti yang Harus Ditekankan

- Oversampling menghindari kehilangan informasi kelas mayoritas, menjadikannya alternatif strategis dibandingkan undersampling pada dataset yang terbatas.
- Random oversampling berisiko tinggi menyebabkan overfitting karena model terpapar salinan eksak yang menciptakan redundansi dan bias repetitif.
- SMOTE menggunakan interpolasi linear (bukan duplikasi) untuk memperluas ruang fitur minoritas secara realistis, sehingga menjaga keragaman pola dan meningkatkan kemampuan generalisasi model.

### Transisi ke Slide Berikutnya

Dengan memahami konsep dasar interpolasi SMOTE, kita dapat melanjutkan ke pembahasan teknis algoritmanya, langkah-langkah implementasi dalam Python, serta catatan kritis mengenai validitas asumsi interpolasi pada berbagai karakteristik dataset.

---

## Slide 030 - SMOTE: Algoritma dan Implementasi

### Narasi

Setelah pada slide sebelumnya kita membahas konsep dasar oversampling dan ilustrasi geometris SMOTE, kali ini kita akan mengurai secara teknis bagaimana algoritma ini beroperasi langkah demi langkah. Proses dimulai dengan memilih satu sampel acak dari kelas minoritas sebagai titik referensi, yang kita sebut sebagai $x$. Selanjutnya, algoritma mencari $k$ tetangga terdekat dari kelas minoritas itu sendiri menggunakan metrik jarak seperti Euclidean. Dari $k$ tetangga tersebut, dipilih secara acak salah satu yang disebut $x_{neighbor}$. Sampel sintetis kemudian dihasilkan melalui operasi interpolasi linear: $x_{syn} = x + \lambda \times (x_{neighbor} - x)$, di mana $\lambda$ adalah bilangan acak yang terdistribusi uniform antara 0 dan 1. Nilai $\lambda$ ini menentukan posisi sampel baru tepat di sepanjang garis penghubung antara $x$ dan $x_{neighbor}$. Proses ini diulang secara iteratif hingga distribusi kelas minoritas mencapai rasio keseimbangan yang ditargetkan, tanpa perlu menduplikasi sampel asli secara mentah.

Dalam praktik implementasi menggunakan ekosistem Python, SMOTE telah terintegrasi secara matang dalam pustaka `imbalanced-learn` atau `imblearn`. Perhatikan alur kode yang ditampilkan: pertama-tama, data dibagi menjadi set pelatihan dan uji menggunakan `train_test_split` dengan parameter `stratify=y` untuk mempertahankan proporsi kelas awal selama split. Sangat penting untuk dicatat bahwa objek `SMOTE` hanya dipanggil pada data pelatihan (`X_train, y_train`) melalui metode `fit_resample`. Hasil resampling disimpan kembali ke variabel `X_resampled` dan `y_resampled`, yang kemudian digunakan untuk melatih model klasifikasi seperti `RandomForestClassifier`. Pendekatan ini bukan sekadar best practice, melainkan kewajiban metodologis dalam penelitian data mining tingkat magister, karena memastikan bahwa informasi dari set uji tidak pernah "bocor" ke proses pembentukan fitur sintetis.

Meskipun efektif dalam menetralkan skewness kelas, mahasiswa harus memahami asumsi kritis di balik SMOTE. Algoritma ini mengasumsikan bahwa ruang fitur kelas minoritas bersifat kontinu dan bahwa interpolasi linear antar dua sampel berdekatan menghasilkan instance yang bermakna secara statistik. Asumsi ini sering kali runtuh pada data berdimensi sangat tinggi akibat curse of dimensionality, di mana jarak antar titik menjadi kurang diskriminatif dan ruang menjadi sangat jarang. Selain itu, jika dataset mengandung noise atau outlier yang signifikan dalam kelas minoritas, SMOTE dapat menghasilkan sampel sintetis yang berada di area kosong atau bahkan tumpang tindih dengan kelas mayoritas, sehingga justru memperkenalkan bias baru dan memperburuk generalisasi model. Pemahaman ini menjadi fondasi ketika Anda nantinya akan melakukan ablation study atau memilih teknik preprocessing yang tepat untuk riset Anda.

### Inti yang Harus Ditekankan

- Mekanisme interpolasi linear SMOTE bergantung pada pemilihan $k$-tetangga dan nilai $\lambda$ uniform, yang menjadikannya lebih robust daripada duplikasi acak namun tetap rentan terhadap asumsi kontinuitas dan kepadatan ruang fitur.
- Penerapan SMOTE wajib dilakukan hanya pada subset data pelatihan setelah pembagian train-test split untuk mencegah data leakage dan menjaga validitas evaluasi model secara ketat.
- Efektivitas SMOTE sangat bergantung pada karakteristik data; pada dataset dengan noise tinggi, dimensi ekstrem, atau struktur manifold kompleks, teknik ini dapat menghasilkan artefak sintetis yang menyesatkan dan memerlukan analisis error atau alternatif preprocessing.

### Transisi ke Slide Berikutnya

Memahami batasan SMOTE standar membuka pintu untuk mengeksplorasi modifikasi algoritma yang dirancang khusus menangani masalah tertentu, sekaligus mengingatkan kita kembali pada risiko serius data leakage yang sering keliru diterapkan dalam pipeline preprocessing. Pada slide berikutnya, kita akan membedah berbagai variasi SMOTE seperti Borderline-SMOTE dan ADASYN, serta menganalisis mengapa urutan operasional split-resample-fit-evaluate merupakan aturan baku yang tidak boleh dilanggar dalam penelitian data mining.

---

## Slide 031 - Variasi SMOTE dan Risiko Data Leakage

### Narasi

Setelah memahami mekanisme dasar SMOTE pada slide sebelumnya, penting untuk diketahui bahwa interpolasi linier acak tidak selalu optimal untuk semua karakteristik distribusi data. Oleh karena itu, komunitas riset telah mengembangkan beberapa variasi SMOTE yang disesuaikan dengan kebutuhan spesifik. Borderline-SMOTE membatasi proses interpolasi hanya pada sampel minoritas yang berada di dekat batas keputusan antar kelas, sehingga fokus penekanan diberikan pada region kritis yang sering salah diklasifikasi. ADASYN atau Adaptive Synthetic Sampling bekerja secara adaptif dengan menghitung kepadatan lokal, lalu menghasilkan lebih banyak sampel sintetis pada area yang secara statistik lebih sulit dipelajari oleh model. Selain itu, terdapat pendekatan hibrida seperti SMOTE-ENN dan SMOTE-Tomek yang menggabungkan over-sampling dengan teknik under-sampling pembersih noise. SMOTE-ENN menerapkan Edited Nearest Neighbors untuk menghapus sampel minoritas yang bertetangga dengan kelas mayoritas, sementara SMOTE-Tomek memanfaatkan Tomek Links untuk mengidentifikasi dan membuang pasangan sampel berseberangan yang saling berdekatan, sehingga batas decision boundary menjadi lebih tajam dan bersih.

Meskipun variasi-variasi tersebut meningkatkan kualitas representasi kelas minoritas, implementasinya menyimpan risiko metodologis serius jika alurnya tidak tepat, yaitu data leakage. Kesalahan fatal yang sering terjadi adalah melakukan proses resampling sebelum data dibagi menjadi training dan testing. Ketika hal ini terjadi, informasi statistik, struktur kerapatan, maupun pola dari seluruh dataset—including bagian yang seharusnya berperan sebagai data uji—akan bocor ke dalam proses pembentukan data pelatihan. Akibatnya, model akan dinilai memiliki performa yang overly optimistic dan tidak valid secara empiris. Pipeline yang benar dan wajib dipatuhi sesuai skema pada slide ini adalah: pertama, lakukan split data dengan stratifikasi; kedua, terapkan SMOTE atau variasinya hanya pada subset training set; ketiga, latih model menggunakan data yang telah diseimbangkan; dan terakhir, evaluasi performa model secara ketat pada test set asli yang sama sekali tidak tersentuh selama tahap resampling.

Konsep validitas eksperimen dan pencegahan data leakage ini merupakan kelanjutan langsung dari pembahasan fundamental pada Pertemuan 2 mengenai EDA dan desain eksperimen yang rigor. Dalam konteks penelitian tingkat magister, kesalahan teknis seperti resampling sebelum split bukan sekadar kesalahan sintaks, melainkan pelanggaran prinsip isolasi data yang dapat meruntuhkan integritas hasil riset. Mahasiswa harus selalu memastikan bahwa setiap transformasi fitur atau manipulasi distribusi label hanya berlaku pada domain pelatihan, sehingga metrik evaluasi yang dilaporkan benar-benar mencerminkan kemampuan generalisasi model terhadap data baru yang belum pernah dilihat.

### Inti yang Harus Ditekankan

- Setiap variasi SMOTE memiliki mekanisme seleksi sampel yang berbeda; pilih berdasarkan karakteristik distribusi data dan tujuan analisis, bukan sekadar mengikuti tren.
- Data leakage melalui resampling sebelum split adalah kesalahan metodologis kritis yang menghasilkan evaluasi model bias dan tidak dapat direplikasi di dunia nyata.
- Urutan pipeline `Split → Resample Training Set → Fit Model → Evaluate Test Set` adalah standar emas yang harus dipatuhi demi menjaga validitas eksternal penelitian.
- Prinsip ini mengikat kembali konsep experimental validity dari Pertemuan 2 dan menjadi fondasi wajib sebelum memasuki teknik penanganan imbalance lainnya.

### Transisi ke Slide Berikutnya

Sementara SMOTE dan variasinya menangani ketidakseimbangan dengan menambah data sintetis, pendekatan alternatif lain tidak mengubah distribusi data, melainkan menyesuaikan bagaimana model menilai kesalahan prediksi. Pada slide berikutnya, kita akan membahas cost-sensitive learning yang memanfaatkan parameter bobot kelas untuk memberikan penalti lebih besar pada kesalahan klasifikasi kelas minoritas.

---

## Slide 032 - Cost-Sensitive Learning

### Narasi

Berbeda dengan pendekatan resampling yang telah dibahas pada slide sebelumnya, cost-sensitive learning tidak melakukan modifikasi terhadap distribusi atau struktur dataset itu sendiri. Pendekatan ini bekerja langsung pada fungsi kerugian (loss function) dan mekanisme optimisasi model. Dalam klasifikasi standar, setiap kesalahan prediksi—baik false positive maupun false negative—dihitung dengan penalti yang sama. Pada konteks data tidak seimbang, hal ini sering kali merugikan karena model cenderung mengabaikan kelas minoritas demi meminimalkan total error secara global. Cost-sensitive learning mengatasi masalah ini dengan memberikan bobot penalti yang lebih besar terhadap kesalahan yang terjadi pada kelas minoritas, sehingga algoritma secara otomatis mengalokasikan perhatian lebih tinggi pada sampel-sampel yang sulit atau jarang terjadi selama proses pelatihan.

Implementasi praktisnya sangat bergantung pada library yang digunakan. Pada ekosistem scikit-learn, mekanisme ini diakses melalui parameter `class_weight` atau `sample_weight`. Ketika Anda menginisialisasi `RandomForestClassifier` dengan `class_weight="balanced"`, library akan menghitung bobot secara otomatis berdasarkan frekuensi invers kelas, memastikan bahwa kontribusi setiap kelas terhadap perhitungan impurity (seperti Gini atau entropy) menjadi proporsional. Untuk keperluan penelitian yang membutuhkan kontrol eksperimental ketat, Anda dapat mendefinisikan bobot secara manual menggunakan dictionary, misalnya `{0: 1.0, 1: 100.0}`. Konfigurasi ini secara eksplisit menyatakan bahwa satu kesalahan prediksi pada kelas 1 harus dihukum 100 kali lebih berat dibandingkan kesalahan pada kelas 0, yang sangat berguna saat melakukan ablation study untuk mengukur sensitivitas model terhadap perubahan prioritas biaya kesalahan.

Untuk framework berbasis gradient boosting seperti XGBoost, mekanismenya sedikit berbeda namun memiliki efek yang setara. Parameter kunci yang digunakan adalah `scale_pos_weight`, yang umumnya dihitung sebagai rasio jumlah sampel negatif terhadap positif (`jumlah_negatif / jumlah_positif`). Nilai ini diteruskan ke `XGBClassifier` dan akan memengaruhi perhitungan gradien serta hessian selama iterasi boosting. Dengan demikian, pohon-pohon yang dibangun pada tahap-tahap awal akan lebih agresif dalam memperbaiki kesalahan pada kelas minoritas tanpa perlu mengubah vektor fitur asli. Pendekatan ini sangat efisien secara komputasi dan menjaga integritas statistik data asli, menjadikannya alternatif yang kuat ketika teknik sintesis data seperti SMOTE berisiko memperkenalkan bias atau noise.

Keunggulan utama dari cost-sensitive learning terletak pada kesederhanaan integrasi dan kompatibilitasnya dengan berbagai algoritma. Karena tidak menambah entitas data baru, risiko data leakage yang sempat kita bahas pada slide 31 dapat dihindari sepenuhnya. Selain itu, strategi ini bersifat modular dan dapat dikombinasikan dengan teknik resampling jika tingkat ketidakseimbangan ekstrem, memberikan fleksibilitas tinggi dalam desain eksperimen. Pada level magister, pemahaman mendalam tentang bagaimana parameter bobot memengaruhi landscape loss function menjadi fondasi penting untuk merumuskan hipotesis penelitian dan mengevaluasi trade-off antara recall dan precision secara kuantitatif.

### Inti yang Harus Ditekankan

- Cost-sensitive learning memodifikasi fungsi kerugian model, bukan distribusi data, sehingga menghindari risiko penambahan noise sintetis.
- Parameter `class_weight` pada scikit-learn dan `scale_pos_weight` pada XGBoost adalah alat utama untuk menerapkan penalti asimetris terhadap kelas minoritas.
- Kontrol manual bobot kelas memungkinkan peneliti melakukan analisis sensitivitas dan ablation study yang rigor dalam desain eksperimen.
- Strategi ini kompatibel dengan pipeline apa pun dan dapat digabungkan dengan resampling untuk menangani ketidakseimbangan ekstrem.

### Transisi ke Slide Berikutnya

Setelah model berhasil dilatih dengan penalti yang disesuaikan, langkah selanjutnya adalah menentukan ambang batas keputusan yang tepat. Default threshold 0.5 sering kali tidak optimal pada data tidak seimbang, sehingga diperlukan tuning threshold berdasarkan kurva precision-recall untuk menyeimbangkan recall dan precision sesuai kebutuhan domain.

---

## Slide 033 - Threshold Tuning sebagai Strategi Evaluasi

### Narasi

Setelah membahas pendekatan cost-sensitive learning pada slide sebelumnya yang menyesuaikan bobot kesalahan selama fase pelatihan, kita kini beralih ke strategi evaluasi pasca-pelatihan, yaitu threshold tuning. Perlu dipahami bahwa sebagian besar model klasifikasi probabilistik, seperti Random Forest atau Gradient Boosting, tidak langsung menghasilkan label diskrit melainkan nilai probabilitas keanggotaan kelas. Secara baku, sistem menggunakan ambang batas atau *threshold* sebesar 0,5 untuk memisahkan kelas positif dan negatif. Namun, dalam konteks data yang sangat tidak seimbang (*imbalanced*), penggunaan default 0,5 sering kali menghasilkan keputusan yang bias terhadap kelas mayoritas dan mengabaikan pola langka. Oleh karena itu, penyesuaian *threshold* menjadi langkah kritis untuk mengoptimalkan sensitivitas model terhadap kelas minoritas sesuai prioritas domain.

Ilustrasi berikut akan memperjelas mekanisme pengambilan keputusan ini. Misalkan sebuah model menghasilkan probabilitas kecurangan sebesar $P(\text{fraud}) = 0,48$. Jika kita tetap mempertahankan *threshold* default 0,5, transaksi tersebut akan diklasifikasikan sebagai normal, padahal sebenarnya merupakan kasus fraud yang seharusnya terdeteksi. Dengan menurunkan *threshold* menjadi 0,3, prediksi tersebut berubah menjadi fraud, yang secara logika investigasi lebih akurat. Namun, penyesuaian ini selalu melibatkan pertukaran kinerja (*trade-off*). Ketika *threshold* diturunkan, model menjadi lebih agresif dalam menandai sampel sebagai positif, sehingga *recall* meningkat karena lebih banyak kasus minoritas tertangkap. Sebaliknya, *precision* cenderung turun karena jumlah *false positive* juga bertambah. Sebaliknya, menaikkan *threshold* akan meningkatkan *precision* tetapi mengorbankan *recall*. Pemahaman dinamika ini mutlak diperlukan sebelum menentukan nilai ambang batas yang tepat.

Dari sisi implementasi teknis menggunakan ekosistem Python, proses ini dapat dieksekusi secara sistematis melalui fungsi `precision_recall_curve` dari pustaka `sklearn.metrics`. Kode yang ditampilkan menunjukkan bagaimana kita mengekstrak vektor probabilitas kelas positif menggunakan `.predict_proba(X_test)[:, 1]`, yang kemudian dipasangkan dengan label aktual `y_test`. Fungsi tersebut akan mengembalikan tiga array: `precision`, `recall`, dan `thresholds`. Array `thresholds` berisi seluruh titik potong yang mungkin, sementara `precision` dan `recall` mencatat performa model pada setiap titik tersebut. Dalam praktiknya, peneliti tidak memilih nilai secara arbitrer, melainkan memindai (`scan`) pasangan nilai tersebut untuk menemukan titik yang memenuhi kriteria domain, misalnya menetapkan syarat minimum `recall >= 0,9` untuk aplikasi deteksi penipuan, lalu mengambil nilai `threshold` yang bersesuaian.

Penting untuk ditekankan bahwa dalam konteks penelitian tingkat magister, *threshold tuning* bukan sekadar trik pra-produksi, melainkan bagian integral dari desain eksperimen yang harus didokumentasikan secara transparan. Menyebutkan adanya "threshold optimal" tanpa menjelaskan metodologi pencarian, validasi silang (*cross-validation*) pada kurva presisi-recall, atau justifikasi berbasis biaya kesalahan adalah kelemahan metodologis yang signifikan. Peneliti wajib melaporkan bagaimana sensitivitas dan spesifisitas model berubah seiring pergeseran ambang batas, serta bagaimana pilihan tersebut berdampak pada metrik evaluasi utama seperti F1-score atau PR-AUC. Dengan demikian, keputusan threshold didukung oleh bukti empiris dan relevan dengan konteks masalah nyata.

### Inti yang Harus Ditekankan

- Default threshold 0,5 jarang optimal pada data tidak seimbang; penurunannya meningkatkan recall namun mengorbankan precision.
- Pemilihan threshold harus didasarkan pada analisis kurva Precision-Recall dan kebutuhan domain (misalnya, prioritas recall tinggi untuk deteksi fraud).
- Dalam penelitian, pelaporan threshold harus disertai protokol validasi yang jelas; klaim "optimal" tanpa justifikasi metodologis dianggap lemah secara ilmiah.

### Transisi ke Slide Berikutnya

Konsep penyesuaian ambang batas ini akan langsung kita terapkan pada studi kasus nyata deteksi kecurangan kartu kredit, di mana karakteristik data dan asimetri biaya kesalahan menuntut kombinasi strategi preprocessing, pemodelan, dan evaluasi yang lebih komprehensif.

---

## Slide 034 - Studi Kasus 1: Fraud Detection

### Narasi

Pada slide ini, kita akan membahas studi kasus pertama dalam deteksi anomali, yaitu *Fraud Detection* pada transaksi kartu kredit. Masalah ini merupakan representasi klasik dari data mining dengan rasio ketidakseimbangan kelas (*imbalance ratio*) yang sangat tinggi, di mana transaksi penipuan sangat jarang terjadi dibandingkan transaksi normal. Fitur yang umumnya tersedia mencakup nominal transaksi, timestamp, lokasi geografis, serta pola historis pengguna. Karena sifatnya yang biner—fraud atau normal—model harus mampu menangkap sinyal halus yang sering kali tersembunyi di balik volume data raksasa. Dalam konteks penelitian tingkat magister, tantangan utama bukan hanya mencapai akurasi tinggi, tetapi merancang sistem yang robust terhadap pergeseran distribusi data dan efisien secara komputasional.

Tantangan teknis dalam kasus ini bersifat multidimensi. Pertama, pola fraud bersifat dinamis dan terus berevolusi seiring waktu, sehingga model statis akan mengalami *concept drift* dan memerlukan mekanisme pembaruan berkala atau *online learning*. Kedua, biaya kesalahan klasifikasi tidak simetris; salah mengklasifikasikan fraud sebagai normal (*false negative*) jauh lebih mahal secara finansial dan reputasional dibandingkan sebaliknya (*false positive*). Ketiga, fitur dalam dataset nyata sering kali telah melalui transformasi anonim seperti PCA untuk alasan privasi, yang menyulitkan interpretabilitas model dan analisis akar penyebab (*root cause analysis*). Hal ini menuntut peneliti untuk mengandalkan teknik evaluasi berbasis probabilitas dan simulasi biaya, bukan sekadar akurasi atau AUC-ROC standar.

Pendekatan metodologis yang relevan dapat diuraikan dalam lima tahap terstruktur. Tahap pertama adalah *Exploratory Data Analysis* (EDA) untuk memetakan distribusi fitur, menghitung *imbalance ratio*, serta memvisualisasikan tren temporal dan sebaran nominal transaksi guna memahami karakteristik data sebelum pemodelan. Tahap kedua meliputi *preprocessing* standar seperti scaling numerik dan penanganan nilai hilang, yang krusial karena algoritma berbasis jarak atau gradient boosting sangat sensitif terhadap skala dan missingness. Tahap ketiga memanfaatkan deteksi anomali unsupervised seperti Isolation Forest untuk mengidentifikasi outlier yang menyimpang signifikan dari perilaku normal, yang dapat berfungsi sebagai fitur tambahan atau filter awal. Tahap keempat mengarah pada klasifikasi dengan strategi penanganan ketidakseimbangan, misalnya menggabungkan SMOTE untuk oversampling kelas minoritas dengan Random Forest atau XGBoost, di mana parameter seperti `scale_pos_weight` digunakan untuk memberikan bobot lebih besar pada kelas fraud selama pelatihan. Tahap kelima adalah evaluasi komprehensif yang melampaui akurasi, mencakup precision, recall, F1-score, PR-AUC, dan yang paling kritis dalam konteks bisnis adalah simulasi total cost berdasarkan matriks konfusi. Perlu dicatat bahwa hasil tuning threshold yang dibahas pada slide sebelumnya akan langsung terintegrasi pada tahap ini untuk mengoptimalkan trade-off antara recall dan cost operasional.

### Inti yang Harus Ditekankan

- Deteksi fraud adalah masalah imbalanced classification dengan konsep drift yang menuntut pendekatan adaptif dan evaluatif berbasis biaya, bukan sekadar akurasi.
- Transformasi anonim (seperti PCA) mengurangi interpretabilitas, sehingga validasi model harus mengandalkan metrik probabilistik dan analisis residual yang ketat.
- Pipeline penelitian yang rigor harus menggabungkan EDA mendalam, preprocessing yang tepat, deteksi anomali sebagai pelengkap, klasifikasi dengan penyesuaian bobot kelas, dan evaluasi berbasis simulasi biaya bersama tuning threshold.

### Transisi ke Slide Berikutnya

Setelah memahami kerangka kerja untuk fraud detection, kita akan beralih ke domain lain yang memiliki karakteristik serupa namun dengan dinamika berbeda, yaitu deteksi ancaman keamanan siber atau *Cybersecurity*. Berbeda dengan fraud yang cenderung bersifat historis dan batch-oriented, cybersecurity menuntut deteksi hampir *real-time* dan menghadapi tantangan serangan baru (*zero-day*) yang tidak memiliki label sebelumnya. Mari kita bedah bagaimana pendekatan satu-kelas (*one-class*) dan arsitektur deep learning diterapkan dalam konteks tersebut.

---

## Slide 035 - Studi Kasus 2: Cybersecurity

### Narasi

Setelah membahas deteksi penipuan finansial pada slide sebelumnya, kita kini menggeser fokus ke domain keamanan siber atau cybersecurity. Meskipun fondasi deteksi anomali tetap sama, karakteristik data dan dinamika ancaman di lingkungan jaringan memiliki kompleksitas yang unik. Dataset yang umum digunakan dalam skenario ini mencakup log trafik jaringan, rekaman aktivitas sistem operasi, atau jejak digital perilaku pengguna. Target modelingnya adalah mengidentifikasi intrusi atau serangan di tengah arus lalu lintas normal yang masif. Hal kritis yang perlu dipahami adalah jenis anomali yang muncul bisa bersifat point anomaly, misalnya satu paket data atau sesi koneksi yang menyimpang secara statistik, maupun collective anomaly, di mana serangkaian event yang secara individual tampak wajar justru membentuk pola serangan terkoordinasi atau lonjakan trafik mendadak ketika diamati secara agregat.

Tantangan metodologis dalam kasus ini sangat signifikan. Pertama, terjadi asimetri data yang ekstrem di mana volume data normal jauh melampaui sampel serangan, menciptakan kondisi imbalance ratio yang bahkan lebih berat daripada kasus fraud. Kedua, keberadaan zero-day attack membuat sebagian besar serangan tidak memiliki label historis, sehingga pendekatan supervised murni sering kali gagal menangkap pola ancaman terbaru. Ketiga, requirement deteksi secara real-time atau near-real-time menuntut arsitektur model yang ringan dan pipeline inference yang dioptimalkan untuk throughput tinggi, berbeda dengan proses batch evaluation pada studi kasus sebelumnya.

Sesuai dengan alur kerja yang terstruktur pada slide, implementasinya dapat dijabarkan melalui lima tahapan teknis. Pertama, One-Class SVM atau model unsupervised sejenis dilatih secara eksklusif pada data normal untuk memetakan distribusi baseline, sehingga setiap deviasi di luar decision boundary otomatis terdeteksi sebagai anomali. Kedua, Isolation Forest memberikan skor kontinuitas anomali untuk setiap session atau flow jaringan berdasarkan kedalaman isolasi node; semakin pendek jalur pemotongan, semakin tinggi probabilitas outlier. Ketiga, Autoencoder memanfaatkan mekanisme reconstruction error, di mana model yang dilatih pada sinyal normal akan menghasilkan residual tinggi ketika menghadapi pola serangan baru atau zero-day yang belum pernah dilihat selama training. Keempat, jika dataset historis serangan tersedia meskipun terbatas, pendekatan klasifikasi imbalanced dapat diaktifkan dengan menerapkan oversampling diikuti ensemble learning untuk memperkuat batas keputusan pada kelas minoritas. Kelima, evaluasi performa didefinisikan ulang dengan mengabaikan akurasi konvensional, menggantinya dengan detection rate (recall) untuk memaksimalkan tangkapan ancaman, false alarm rate (FPR) untuk mengendalikan beban operasional, serta PR-AUC yang lebih robust dalam menilai performa classifier pada distribusi kelas yang sangat timpang.

Penekanan analitis pada slide ini terletak pada kemampuan membedakan antara pendekatan unsupervised untuk zero-day threats versus semi-supervised/imbalanced classification untuk known threats, serta pentingnya memilih metrik evaluasi yang selaras dengan biaya operasional false positive di infrastruktur nyata.

### Inti yang Harus Ditekankan

- Anomali dalam cybersecurity bersifat multidimensi: point anomaly untuk paket tersisolasi dan collective anomaly untuk serangan terdistribusi atau lonjakan trafik terkoordinasi.
- Zero-day attack menuntut pendekatan unsupervised atau semi-supervised karena ketiadaan label historis, menjadikan One-Class SVM, Isolation Forest, dan Autoencoder sebagai pilihan strategis.
- Constraint real-time processing mengharuskan pemilihan model yang efisien secara komputasi dan pipeline inference yang teroptimasi untuk throughput jaringan.
- Metrik evaluasi wajib bergeser dari akurasi ke detection rate (recall), false alarm rate (FPR), dan PR-AUC untuk menangani asimetri kelas yang ekstrem.
- Kombinasi teknik resampling dengan ensemble classifier tetap valid jika data serangan tersedia, namun memerlukan validasi ketat terhadap overfitting pada noise jaringan.

### Transisi ke Slide Berikutnya

Dari deteksi ancaman siber yang berfokus pada perlindungan infrastruktur digital, kita akan melanjutkan ke aplikasi industri manufaktur pada slide berikutnya, yaitu predictive maintenance, di mana prinsip deteksi degradasi dan prediksi kegagalan mesin dibangun di atas data sensor time-series dengan karakteristik imbalance dan temporal dependency yang serupa namun memiliki konteks evaluasi risiko yang berbeda.

---

## Slide 036 - Studi Kasus 3: Predictive Maintenance

### Narasi

Berbeda dengan studi kasus sebelumnya pada keamanan siber yang cenderung berfokus pada anomali titik atau lonjakan kolektif dalam aliran data diskrit, predictive maintenance menghadirkan dinamika yang lebih kompleks karena bersinggungan langsung dengan proses fisik degradasi aset. Karakteristik utamanya terletak pada penggunaan data sensor kontinu dari mesin atau peralatan industri, dengan tujuan utama memprediksi Remaining Useful Life (RUL) atau memberikan peringatan dini sebelum kegagalan operasional terjadi. Dalam konteks ini, kejadian kerusakan aktual sangat langka dibandingkan dengan periode operasi normal, sehingga masalah ini tetap masuk dalam ranah rare-event prediction, namun dengan nuansa temporal yang kental.

Tantangan metodologis muncul terutama karena sifat data sensor yang merupakan time-series. Pola degradasi tidak bersifat instan, melainkan berkembang secara gradual, sehingga analisis statis konvensional menjadi kurang efektif. Diperlukan teknik windowing dan feature engineering temporal, seperti perhitungan rolling statistics, moving averages, atau ekstraksi fitur frekuensi domain, untuk mengubah sinyal mentah menjadi representasi yang dapat dimodelkan. Selain itu, definisi "anomali" dalam konteks ini bersifat dinamis; apa yang dianggap normal pada awal siklus hidup mesin dapat berubah menjadi tanda degradasi signifikan seiring bertambahnya usia operasional. Korelasi antar berbagai sensor juga menjadi faktor kritis, karena mesin beroperasi sebagai sistem terintegrasi, bukan komponen yang berjalan secara independen.

Untuk mengatasi tantangan tersebut, pendekatan yang relevan dapat dibagi menjadi dua jalur utama. Pertama, pemanfaatan metode anomaly detection seperti Isolation Forest atau Local Outlier Factor (LOF) yang diterapkan pada fitur hasil engineering untuk mengidentifikasi penyimpangan pola operasional. Alternatifnya adalah penggunaan autoencoder yang dilatih khusus pada data kondisi sehat; peningkatan reconstruction error atau residual yang signifikan menandakan adanya pergeseran distribusi yang mengindikasikan awal kerusakan. Kedua, jika historis label kerusakan sudah tersedia, masalah dapat diformulasikan sebagai imbalanced classification dengan teknik resampling seperti SMOTE untuk menyeimbangkan kelas minoritas. Evaluasi model dalam skenario ini menuntut penekanan kuat pada recall, mengingat implikasi bisnisnya: false negative berarti kegagalan tak terduga yang menyebabkan downtime besar dan kerugian operasional, sedangkan false positive hanya mengakibatkan jadwal maintenance preventif yang tidak perlu.

Dari perspektif penelitian tingkat magister, studi kasus ini menekankan pentingnya alignment antara metrik evaluasi dan objective fungsi sistem nyata. Pemilihan pendekatan teknis harus dibarengi dengan analisis cost-benefit yang eksplisit, serta pertimbangan bagaimana mendefinisikan ground truth untuk degradasi bertahap. Hal ini juga menjadi jembatan alami menuju diskusi mengenai kesalahan metodologis yang sering terjadi ketika peneliti atau praktisi menangani data dengan event langka tanpa kerangka evaluasi yang ketat.

### Inti yang Harus Ditekankan

- Data predictive maintenance bersifat time-series dan memerlukan feature engineering temporal (rolling statistics, windowing) untuk menangkap pola degradasi gradual.
- Definisi anomali bersifat dinamis seiring proses fisik mesin, sehingga pendekatan deteksi harus mampu membedakan noise operasional dari incipient fault.
- Recall harus menjadi metrik prioritas evaluasi karena biaya false negative (downtime/kernelan total) jauh melampaui biaya false positive (maintenance preventif berlebihan).
- Kombinasi anomaly detection (untuk data unlabeled/degradasi awal) dan imbalanced classification (jika label historis tersedia) merupakan strategi komplementer yang bergantung pada ketersediaan informasi ground truth.

### Transisi ke Slide Berikutnya

Implementasi pendekatan-pendekatan di atas sering kali rentan terhadap jebakan metodologis jika tidak dirancang dengan rigor yang tepat. Pada slide berikutnya, kita akan menguraikan kesalahan-kesalahan umum yang kerap terjadi dalam pemodelan rare-event, serta prinsip-prinsip penelitian yang diperlukan untuk memastikan validitas eksperimen dan reproduktibilitas hasil.

---

## Slide 037 - Kesalahan Umum pada Rare-Event Problems

### Narasi

Dalam konteks masalah rare-event atau imbalanced data, seperti yang telah kita identifikasi pada studi kasus predictive maintenance sebelumnya, kesalahan metodologis sering kali terjadi secara implisit dan dapat menggagalkan validitas seluruh eksperimen. Tabel pada slide ini merangkum tujuh jebakan umum yang perlu diwaspadai secara ketat. Penggunaan accuracy sebagai metrik utama merupakan kesalahan fundamental; pada data dengan rare event, dominasi kelas mayoritas memungkinkan model trivial yang selalu memprediksi kelas normal mencapai akurasi tinggi, namun sama sekali gagal mendeteksi kejadian langka yang menjadi inti analisis. Selanjutnya, praktik resampling atau oversampling sebelum pembagian data menjadi train dan test menyebabkan data leakage. Informasi dari subset uji "bocor" ke proses pelatihan, sehingga skor performa yang dilaporkan menjadi terlalu optimistis dan tidak merepresentasikan kemampuan generalisasi model pada data baru. Penerapan SMOTE pada seluruh dataset tanpa memisahkan subset terlebih dahulu juga melanggar prinsip evaluasi yang ketat; teknik transformasi fitur berbasis sampling hanya boleh diterapkan pada training set agar validasi tetap independen.

Jebakan keempat berkaitan dengan pengabaian kalibrasi probabilitas. Banyak model klasifikasi menghasilkan skor kepercayaan yang bias atau tidak terdistribusi secara proporsional terhadap probabilitas kejadian aktual. Jika kalibrasi diabaikan, penentuan threshold untuk mengklasifikasikan suatu instance sebagai anomali menjadi tidak bermakna, karena batas keputusan tidak lagi mencerminkan keyakinan model yang realistis. Kelima, ketergantungan eksklusif pada ROC-AUC pada data dengan ketidakseimbangan ekstrem dapat menipu. Kurva ROC sangat sensitif terhadap volume true negative yang masif, sehingga nilai AUC bisa tampak tinggi meskipun model memiliki recall yang buruk pada minority class. Alternatif yang lebih robust dan informatif adalah Precision-Recall AUC (PR-AUC) yang secara khusus mengukur performa pada kelas positif. Keenam, kegagalan melaporkan threshold yang digunakan dalam eksperimen membuat penelitian tidak reproducible. Dalam konteks riset maupun industri, threshold adalah parameter kritis yang mengatur trade-off antara false positive dan false negative, sehingga keberadaannya harus didokumentasikan secara transparan. Terakhir, menyamakan outlier statistik dengan anomaly domain adalah kesalahpahaman konseptual yang fatal. Deteksi matematis murni belum tentu relevan secara operasional; definisi anomali harus selalu diturunkan dari kebutuhan bisnis, biaya kesalahan, dan karakteristik domain.

Untuk mengatasi risiko-risiko tersebut, prinsip penelitian pada tingkat magister menekankan evaluasi yang multidimensi dan ketat. Peneliti harus selalu mengajukan pertanyaan mendasar: metrik apa yang paling mencerminkan tujuan sistem secara nyata? Laporan eksperimen wajib menyajikan beberapa metrik komplementer secara bersamaan, seperti precision, recall, F1-score, dan PR-AUC, untuk memberikan peta performa yang holistik. Selain itu, pemilihan threshold optimal harus dilakukan menggunakan validation set, bukan test set. Test set harus dijaga sebagai benchmark akhir yang benar-benar independen dan never-seen, guna memastikan bahwa setiap klaim performa didukung oleh evidence yang kuat, reproducible, dan siap untuk diimplementasikan atau diuji lebih lanjut dalam skenario nyata.

### Inti yang Harus Ditekankan

- Accuracy adalah metrik yang menyesatkan pada rare-event; prioritas evaluasi harus bergeser ke precision, recall, F1, dan PR-AUC.
- Resampling hanya boleh diterapkan pada training set untuk mencegah data leakage dan menghasilkan estimasi performa yang realistis.
- Kalibrasi probabilitas dan pelaporan threshold mutlak diperlukan agar hasil eksperimen dapat direproduksi, divalidasi ulang, dan diaplikasikan secara praktis.
- Validasi domain krusial untuk memisahkan outlier statistik murni dari anomaly yang relevan secara bisnis atau operasional.

### Transisi ke Slide Berikutnya

Dengan memahami jebakan metodologis ini, langkah selanjutnya adalah menerjemahkan pemahaman tersebut ke dalam kerangka penelitian yang terstruktur. Kita akan membahas bagaimana merumuskan research problem yang spesifik, menyusun research question yang dapat diuji secara empiris, serta membentuk hipotesis yang jelas berdasarkan temuan-temuan awal dari eksplorasi data dan evaluasi model.

---

## Slide 038 - Dari Permasalahan ke Research Question

### Narasi

Setelah mengidentifikasi kesalahan metodologis umum pada permasalahan rare-event seperti yang dibahas pada slide sebelumnya—mulai dari ketergantungan pada accuracy, data leakage akibat resampling yang tidak terkontrol, hingga pengabaian calibration probabilitas—langkah kritis berikutnya dalam penelitian tingkat magister adalah menerjemahkan kesenjangan tersebut menjadi kerangka investigasi yang terstruktur. Pada jenjang S2, kemampuan mengimplementasikan algoritma anomaly detection atau handling imbalanced data bukan lagi tujuan akhir, melainkan sarana untuk menjawab pertanyaan ilmiah yang valid. Proses ini dibangun melalui tiga elemen yang saling berantai: research problem, research question, dan hipotesis. Research problem mendefinisikan secara spesifik celah pengetahuan atau kendala teknis dalam domain rare-event mining. Research question kemudian mengubah masalah tersebut menjadi kalimat tanya yang operasional, terukur, dan siap diuji secara empiris melalui eksperimen komputasional. Hipotesis berfungsi sebagai pernyataan dugaan awal yang menyatakan hubungan antar variabel atau kinerja metode, yang nantinya akan diperkuat atau diperlemah oleh bukti kuantitatif dari hasil eksperimen.

Untuk memperjelas implementasinya, mari kita telaah contoh research question yang disajikan dalam slide. RQ1 berfokus pada evaluasi teknik penanganan ketidakseimbangan kelas, khususnya menanyakan apakah kombinasi SMOTE dengan ensemble learning memberikan peningkatan recall yang signifikan dibandingkan oversampling sederhana pada dataset fraud dengan imbalance ratio di atas 100. Pertanyaan ini menuntut desain eksperimen yang membandingkan dua strategi resampling dengan kontrol model yang sama, sehingga isolasi variabel dapat terjaga. RQ2 mengalihkan konteks ke domain time-series atau sensor data, menanyakan seberapa baik autoencoder berbasis reconstruction error bersaing dengan Isolation Forest dalam mendeteksi anomali pada kondisi predictive maintenance yang mengalami concept drift. Sementara itu, RQ3 menyoroti aspek pengambilan keputusan sistemik, yaitu bagaimana pengaruh pemilihan threshold terhadap trade-off precision dan recall dalam cost-sensitive classification untuk deteksi intrusi jaringan. Ketiga pertanyaan ini dirancang agar jawabannya dapat diukur menggunakan metrik evaluasi yang relevan dengan biaya kesalahan (cost of error) dan karakteristik distribusi data di masing-masing domain.

Setiap research question harus didukung oleh hipotesis yang bersifat falsifiable atau dapat dibuktikan salah melalui data. Sebagai ilustrasi, hipotesis H1 menyatakan bahwa SMOTE dikombinasikan dengan gradient boosting akan menghasilkan nilai PR-AUC yang lebih tinggi dibandingkan random oversampling dengan gradient boosting. Pernyataan ini memberikan arah yang jelas untuk tahap eksperimen: Anda tidak hanya melatih model, tetapi juga menyiapkan pipeline evaluasi yang ketat untuk membandingkan distribusi skor probabilitas kedua pendekatan tersebut. Dalam praktik menggunakan ekosistem Python seperti scikit-learn dan pandas, verifikasi hipotesis ini memerlukan perhitungan PR-AUC secara konsisten pada validation set, diikuti dengan analisis signifikansi statistik jika diperlukan, sebelum hasilnya digeneralisasi ke test set. Pendekatan ini memastikan bahwa klaim ilmiah tidak didasarkan pada optimisme semu atau kebocoran data, melainkan pada perbedaan performa yang terukur dan bermakna.

Transformasi dari masalah praktis ke pertanyaan penelitian memastikan bahwa setiap baris kode, pilihan hyperparameter, dan strategi preprocessing memiliki justifikasi ilmiah yang kuat. Konsistensi antara gap yang diidentifikasi, metode yang diusulkan, dan metrik evaluasi menjadi fondasi utama paper penelitian berkualitas. Ketika kerangka pertanyaan dan hipotesis telah mapan, langkah selanjutnya adalah mengoperasikannya ke dalam alur kerja eksperimen yang sistematis agar seluruh proses dapat direproduksi, diaudit, dan diverifikasi oleh komunitas akademik.

### Inti yang Harus Ditekankan

- Research problem, research question, dan hipotesis harus membentuk rantai logika yang ketat dan saling mendukung tanpa jeda interpretatif.
- Rumusan research question harus operasional, terukur, dan secara langsung mengarah pada desain eksperimen yang dapat diuji secara empiris.
- Hipotesis bersifat falsifiable; hasil eksperimen wajib dirancang untuk memperkuat atau menolak klaim tersebut berdasarkan bukti kuantitatif yang transparan.
- Pemilihan metrik evaluasi (seperti PR-AUC, recall, atau cost metric) harus selaras dengan karakteristik domain dan trade-off bisnis yang dituju, bukan sekadar mengikuti tren alat ukur.

### Transisi ke Slide Berikutnya

Dengan research question dan hipotesis yang telah dirumuskan, kita kini memiliki peta jalan yang jelas untuk merancang eksperimen. Langkah selanjutnya adalah mengonversi kerangka konseptual tersebut menjadi workflow eksperimental yang ketat, mulai dari stratified splitting, resampling yang terisolasi, hingga evaluasi dan error analysis yang reproducible.

---

## Slide 039 - Workflow Eksperimen Rare-Event

### Narasi

Setelah merumuskan research question dan hipotesis pada pertemuan sebelumnya, langkah kritis berikutnya adalah menerjemahkan pertanyaan penelitian tersebut menjadi sebuah alur eksperimen yang sistematis, transparan, dan dapat direplikasi. Pada slide ini, kita membahas workflow lengkap khusus untuk eksperimen rare-event atau anomaly detection. Alur ini dirancang untuk meminimalkan bias evaluasi yang umum terjadi ketika menangani data dengan distribusi kelas yang sangat ekstrem.

Workflow dimulai dari klarifikasi masalah dan seleksi dataset yang relevan dengan konteks penelitian. Tahap kedua adalah Exploratory Data Analysis (EDA) yang tidak hanya bersifat deskriptif, tetapi secara spesifik menghitung Imbalance Ratio (IR) dan memetakan karakteristik fitur dari kelas minoritas. Pemahaman ini menjadi fondasi sebelum melakukan pembagian data menggunakan stratified split menjadi tiga subset: training, validation, dan test. Stratifikasi wajib digunakan karena memastikan proporsi kelas minoritas tetap stabil di setiap partisi, sehingga model tidak pernah terpapar pada distribusi yang terdistorsi selama fase pengembangan.

Poin krusial yang sering diabaikan adalah penerapan teknik resampling. SMOTE, random undersampling, atau pendekatan hibrida hanya boleh diaplikasikan pada data training. Memasukkan data yang sudah di-resample ke dalam validation atau test set akan menyebabkan data leakage dan menggerus validitas metrik evaluasi. Setelah data training dimodifikasi, proses pelatihan dimulai dengan menetapkan baseline menggunakan algoritma standar seperti Logistic Regression, Random Forest, atau XGBoost. Baseline ini berfungsi sebagai patokan objektif sebelum memperkenalkan proposed method atau arsitektur model baru yang Anda usulkan.

Karena rare-event umumnya memiliki decision boundary yang kompleks dan sangat sensitif terhadap probabilitas keluaran, penyesuaian threshold dilakukan secara eksplisit pada validation set. Tujuannya adalah menemukan operating point yang optimal sesuai dengan cost function atau prioritas penelitian. Evaluasi final kemudian dijalankan pada test set yang benar-benar tertutup selama seluruh proses training dan tuning. Fokus metrik harus dialihkan dari accuracy konvensional menuju precision, recall, F1-score, PR-AUC, serta cost metrics yang merefleksikan dampak riil dari false positive dan false negative.

Langkah kedelapan menuntut error analysis yang mendalam: mengidentifikasi sampel kelas minoritas mana yang gagal diklasifikasikan dan menganalisis akar penyebab kegagalan tersebut. Insight ini sering kali menjadi bahan utama untuk ablation study, perbaikan feature engineering, atau justifikasi pemilihan model. Terakhir, seluruh konfigurasi, log eksperimen, dan hasil evaluasi wajib didokumentasikan secara rinci untuk menjamin reproducibility. Hyperparameter tuning harus dilakukan melalui cross-validation yang hanya berjalan pada training set, dan laporan akhir perlu menyertakan uji signifikansi statistik jika memungkinkan, agar klaim ilmiah Anda memiliki dasar empiris yang kuat dan siap dipertanggungjawabkan di forum akademik.

### Inti yang Harus Ditekankan

- Pembagian data harus menggunakan stratified split dan resampling hanya diperbolehkan pada training set untuk mencegah data leakage dan menjaga integritas evaluasi.
- Evaluasi rare-event wajib meninggalkan akurasi konvensional; fokus harus beralih ke PR-AUC, cost metrics, dan analisis trade-off precision-recall yang kontekstual.
- Reproducibility dan signifikansi statistik adalah pilar utama penelitian tingkat S2; dokumentasi lengkap, CV pada train set saja, serta error analysis mendetail menentukan validitas kontribusi ilmiah.

### Transisi ke Slide Berikutnya

Dengan workflow eksperimen yang telah terstruktur dan tervalidasi secara metodologis, kita telah menutup rangkaian materi inti mengenai anomaly detection dan penanganan data imbalanced. Pertemuan berikutnya akan kita gunakan untuk menerapkan kerangka kerja ini secara kritis melalui review paper internasional dan penyusunan proposal penelitian, di mana mahasiswa diharapkan mampu mengkritisi metodologi orang lain sekaligus merancang eksperimen mereka sendiri.

---

## Slide 040 - Terima Kasih

### Narasi

Pada penghujung pembahasan topik Anomaly Detection, Imbalanced Data, dan Rare Events, kita telah menyelesaikan rangkaian konsep metodologis yang menjadi fondasi penanganan data dengan distribusi kelas tidak seimbang. Alur eksperimen yang dipaparkan pada slide sebelumnya menegaskan bahwa keberhasilan deteksi anomali atau kejadian langka tidak hanya bergantung pada pemilihan algoritma, melainkan pada kedisiplinan dalam menerapkan pipeline penelitian yang ketat. Mulai dari EDA untuk memetakan imbalance ratio, penerapan stratified split agar proporsi kelas minoritas tetap terjaga, hingga implementasi teknik resampling seperti SMOTE atau undersampling yang wajib dibatasi hanya pada domain training, setiap keputusan harus didokumentasikan secara transparan. Hal ini menjamin reproduktibilitas hasil dan mencegah data leakage yang sering menjadi kesalahan fatal dalam evaluasi model.

Evaluasi performa pada konteks rare-event juga menuntut pergeseran perspektif dari akurasi konvensional menuju metrik yang sensitif terhadap kelas minoritas, seperti precision, recall, F1-score, PR-AUC, serta cost-based metrics. Tahap threshold tuning pada validation set dan error analysis menjadi titik kritis untuk memahami mengapa sebagian sampel gagal terdeteksi, apakah karena karakteristik fitur yang ambigu, noise, atau memang representasi kelas minoritas yang belum optimal. Dengan demikian, fase implementasi teknis ini bukan sekadar latihan coding, melainkan simulasi nyata dalam membangun baseline yang kuat sebelum melangkah ke inovasi metode.

Sebagai penutup pertemuan ini, penting untuk menyadari bahwa kompetensi teknis hanyalah prasyarat awal. Pada jenjang magister, penekanan utama beralih ke pengembangan kapasitas penelitian ilmiah. Pertemuan berikutnya akan difokuskan pada Critical International Paper Review dan Research Proposal Seminar. Kegiatan ini dirancang untuk melatih Anda membaca, mengkritisi, dan mensintesis temuan dari jurnal internasional terindeks Scopus, mengidentifikasi research gap yang valid, serta merumuskan hipotesis dan desain eksperimen yang siap diuji. Persiapkan diri Anda untuk mendiskusikan bagaimana temuan literatur dapat dioperasionalkan menjadi proposal penelitian yang memiliki kontribusi ilmiah terukur dan layak disosialisasikan pada forum konferensi nasional maupun internasional.

### Inti yang Harus Ditekankan

- Metodologi eksperimen rare-event harus mengikuti alur yang ketat, transparan, dan bebas dari data leakage untuk menjamin validitas ilmiah.
- Evaluasi model pada data tidak seimbang wajib menggunakan metrik berbasis probabilitas dan biaya kesalahan (PR-AUC, cost metric), bukan akurasi semata.
- Transisi dari implementasi algoritma ke penelitian ilmiah memerlukan kemampuan critical review literatur, identifikasi research gap, dan perancangan proposal yang terstruktur sesuai standar publikasi internasional.

### Transisi ke Slide Berikutnya

Slide ini menutup sesi pembelajaran tentang penanganan data tidak seimbang dan kejadian langka. Silakan siapkan diri untuk pertemuan berikutnya yang akan membahas tinjauan kritis terhadap paper internasional serta presentasi seminar proposal penelitian, di mana Anda akan mulai menerjemahkan pemahaman metodologis menjadi rancangan studi yang orisinal dan siap diuji secara empiris.
