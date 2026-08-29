# Narasi TD Data Mining - Pertemuan 01

## Modern Data Mining & Research Landscape

Sumber: markdown/pert01-modern-data-mining-research-landscape.md

---

## Slide 000 - Cover

### Narasi

Pertemuan pertama ini membuka pembahasan dengan fokus pada lanskap penelitian dan perkembangan terkini dalam bidang Data Mining. Pada jenjang magister, pemahaman mendalam mengenai posisi disiplin ini dalam ekosistem ilmu data modern menjadi fondasi utama sebelum memasuki implementasi teknis atau eksperimen lanjutan. Topik ini tidak hanya membahas definisi, tetapi juga menelusuri evolusi metodologi dari pendekatan klasik berbasis aturan dan statistik hingga integrasi machine learning, deep learning, dan teknik mutakhir seperti Graph Neural Networks, federated learning, serta generative models.

Dalam konteks penelitian tingkat S2, mahasiswa dituntut untuk mampu memetakan celah pengetahuan (*research gap*) yang masih terbuka di industri maupun akademisi. Perkembangan pesat tools otomatisasi seperti AutoML dan foundation models untuk data tabular memang meningkatkan produktivitas rekayasa, namun sekaligus menuntut peneliti untuk bergerak melampaui sekadar peningkatan metrik performa. Fokus beralih pada bagaimana merancang kontribusi ilmiah yang valid, dapat direproduksi, dan memberikan wawasan baru terhadap mekanisme pembelajaran mesin, interpretabilitas, atau efisiensi komputasi pada skala besar.

Peta perjalanan perkuliahan kali ini akan mengarahkan Anda untuk membedakan secara tegas antara masalah rekayasa (*engineering problem*) dan masalah penelitian (*research problem*), serta memahami mengapa akurasi model yang tinggi belum otomatis menjadikannya sebuah kontribusi ilmiah. Kita akan menguraikan alur knowledge discovery secara sistematis, mengidentifikasi area kandidat penelitian yang relevan dengan tren terkini, dan menyiapkan kerangka berpikir kritis untuk evaluasi paper internasional serta perancangan eksperimen yang rigor di semester ini.

### Inti yang Harus Ditekankan

- Posisi Data Mining dalam ekosistem ilmu data modern dan evolusinya dari pendekatan klasik ke teknik mutakhir.
- Perbedaan fundamental antara *engineering problem* (fokus pada implementasi & optimisasi) dan *research problem* (fokus pada novelty & kontribusi ilmiah).
- Akurasi tinggi bukan jaminan kontribusi ilmiah; diperlukan analisis ablation, robustness, dan justifikasi metodologis yang kuat.
- Identifikasi awal 2–3 area kandidat penelitian sebagai dasar proyek akhir semester.

### Transisi ke Slide Berikutnya

Untuk melihat secara rinci capaian kompetensi yang harus Anda kuasai sepanjang pertemuan ini, mari kita lanjutkan ke peta tujuan pembelajaran dan rincian materi yang akan dibahas lebih terstruktur.

---

## Slide 001 - Tujuan Pembelajaran dan Peta Pertemuan

### Narasi

Pada pertemuan pertama ini, kita langsung memasuki inti pembangunan fondasi konseptual sekaligus penyesuaian pola pikir menuju standar penelitian tingkat magister. Tujuh tujuan pembelajaran yang tercantum dirancang untuk menempatkan Data Mining dalam ekosistem ilmu data yang lebih luas, sekaligus membedakan secara tegas antara Data Mining, Knowledge Discovery in Databases (KDD), Machine Learning, dan Data Science. Meskipun istilah-istilah ini sering digunakan secara bergantian dalam industri, masing-masing memiliki cakupan dan fokus metodologis yang berbeda: Machine Learning berpusat pada pengembangan dan optimasi algoritma prediktif, Data Science mencakup siklus holistik mulai dari akuisisi data, analisis eksploratif, hingga implementasi solusi berbasis data untuk pengambilan keputusan, sedangkan Data Mining dan KDD menekankan ekstraksi pola yang bermakna, dapat ditafsirkan, dan dapat ditindaklanjuti dari kumpulan data berskala besar. Proses knowledge discovery itu sendiri bukanlah sekadar menjalankan baris kode, melainkan alur sistematis yang meliputi seleksi domain, pemilihan data, pra-pemrosesan, transformasi, pemodelan, evaluasi, dan interpretasi hasil.

Perkembangan Data Mining dari pendekatan klasik seperti decision tree, association rule mining, atau clustering berbasis jarak menuju era modern telah mengubah lanskap riset secara fundamental. Saat ini, tantangan tidak lagi hanya terletak pada tuning hyperparameter atau meningkatkan akurasi model tabular konvensional, tetapi meluas ke arsitektur yang lebih kompleks seperti Graph Neural Networks, self-supervised learning, temporal dan streaming data mining, serta foundation models untuk data terstruktur. Memetakan landscape riset ini penting agar Anda memahami di mana celah inovasi masih terbuka, sehingga proyek penelitian Anda tidak sekadar mengulang eksperimen yang sudah mapan. Di sinilah perbedaan mendasar antara *engineering problem* dan *research problem* harus dipahami dengan sangat jelas. Masalah teknik biasanya menuntut solusi praktis, skalabilitas, efisiensi komputasi, atau integrasi sistem, sementara masalah penelitian menuntut orisinalitas, generalisasi, validitas metodologis, dan kontribusi pengetahuan baru yang dapat dipertanggungjawabkan secara akademis.

Poin kritis yang sering menjadi jebakan bagi peneliti pemula adalah mengasumsikan bahwa pencapaian akurasi atau metrik evaluasi tinggi secara otomatis merupakan kontribusi ilmiah. Dalam konteks publikasi internasional atau tugas akhir magister, peningkatan performa semata tanpa justifikasi teoretis, analisis ablation yang ketat, studi error yang mendalam, atau pemahaman mengenai mengapa suatu metode bekerja lebih baik pada distribusi data tertentu, tidak cukup dianggap sebagai *scientific contribution*. Sebaliknya, *performance improvement* hanyalah temuan empiris, sedangkan kontribusi ilmiah terletak pada bagaimana Anda menjawab *research question*, menutup *gap* literatur, dan memberikan bukti yang robust melalui desain eksperimen yang adil dan reproducible. Oleh karena itu, salah satu hasil belajar langsung yang diharapkan setelah sesi ini adalah kemampuan Anda untuk segera mengidentifikasi dua hingga tiga area kandidat riset yang relevan dengan minat, ketersediaan dataset, dan tren perkembangan terkini, yang nantinya akan menjadi benang merah sepanjang proyek akhir semester.

Panduan filosofis dan metodologis ini akan menjadi kerangka berpikir yang konsisten diterapkan pada seluruh pertemuan berikutnya. Alur penelitian yang akan kita gunakan—mulai dari identifikasi masalah, tinjauan literatur, penentuan gap, perumusan pertanyaan penelitian, pembuatan baseline, pengembangan metode, pelaksanaan eksperimen, hingga penyajian bukti dan klaim kontribusi—bukanlah sekadar langkah administratif, melainkan standar rigor akademik yang harus dipenuhi setiap mahasiswa S2. Dengan memahami peta perjalanan ini sejak awal, Anda dapat memposisikan diri secara strategis dalam memilih topik, merancang eksperimen, dan menghindari jebakan penelitian yang hanya bersifat rekayasa tanpa nilai tambah ilmiah.

### Inti yang Harus Ditekankan

- Data Mining, KDD, Machine Learning, dan Data Science memiliki tumpang tindih namun perbedaan fokus metodologis yang harus dipahami secara presisi.
- Akurasi tinggi atau peningkatan metrik evaluasi saja TIDAK otomatis menjadi kontribusi ilmiah; orisinalitas, validitas eksperimen, dan justifikasi teoretis adalah syarat mutlak.
- Perbedaan mendasar antara *engineering problem* (solusi praktis/efisiensi) dan *research problem* (pengetahuan baru/generalisasi/kontribusi akademis).
- Identifikasi 2–3 kandidat area riset sejak pertemuan ini menjadi fondasi strategis untuk kelancaran proyek akhir semester.
- Seluruh aktivitas teknis dan eksperimen di pertemuan berikutnya harus selalu dikaitkan dengan alur: Problem → Literature → Gap → RQ → Baseline → Method → Experiment → Evidence → Contribution.

### Transisi ke Slide Berikutnya

Untuk melihat bagaimana tujuh tujuan ini diterjemahkan ke dalam struktur perkuliahan secara keseluruhan, mari kita lihat posisi Pertemuan 1 dalam RPS dan alur metodologis yang akan menjadi panduan utama Anda selama satu semester penuh.

---

## Slide 002 - Posisi Pertemuan 1 dalam RPS

### Narasi

Slide ini memetakan perjalanan akademik mata kuliah EF235161 secara keseluruhan, sehingga mahasiswa dapat memahami mengapa pertemuan pertama bukan sekadar pengantar umum, melainkan fondasi penentu arah satu semester penuh. Sesuai dengan alur yang tertera, materi sebelumnya telah menyusun tujuan pembelajaran dan peta kompetensi, sementara pertemuan saat ini menetapkan kerangka berpikir penelitian yang akan menjadi standar kerja seluruh kelas. Secara teknis, pertemuan berikutnya akan langsung masuk ke ranah eksplorasi dan validitas eksperimen melalui topik Exploratory Data Analysis serta preprocessing, yang merupakan langkah operasional pertama setelah kerangka konseptual ini terbentuk.

Poin krusial dari slide ini terletak pada pipeline penelitian yang ditampilkan dalam blok teks. Alur `Problem → Literature → Gap → RQ → Baseline → Method → Experiment → Evidence → Contribution` bukanlah sekadar checklist tugas, melainkan metodologi baku untuk menghasilkan karya ilmiah berkualitas tinggi di bidang data mining. Setiap tahap memiliki bobot metodologis yang spesifik: identifikasi masalah harus berasal dari celah praktis atau literatur terkini, tinjauan pustaka dilakukan secara sistematis untuk menemukan research gap yang valid, rumusan pertanyaan penelitian dirumuskan agar terukur dan dapat diuji, baseline dibangun menggunakan metode state-of-the-art yang relevan, pengembangan metode atau modifikasi arsitektur dilakukan dengan justifikasi teoretis, eksperimen dirancang dengan kontrol variabel dan metrik evaluasi yang ketat, bukti empirik dikumpulkan melalui analisis statistik atau visualisasi yang robust, dan kontribusi ilmiah diekstrak sebagai nilai tambah yang membedakan karya ini dari pekerjaan sebelumnya. Pada jenjang magister, penguasaan alur ini lebih penting daripada sekadar kemampuan mengimplementasikan algoritma.

Struktur semester dibagi secara strategis untuk mendukung alur tersebut. Pertemuan 2 hingga 7 difokuskan pada pembangunan fondasi teknis dan eksperimen, mencakup pemahaman data, pembersihan dan transformasi fitur, teknik pemodelan klasik hingga modern, serta strategi validasi model. Tahap ini memastikan setiap mahasiswa memiliki baseline yang kuat dan pemahaman mendalam tentang bias, overfitting, serta kompleksitas komputasi sebelum memasuki fase penelitian mandiri. Mulai pertemuan 8 hingga 16, fokus bergeser secara signifikan ke arah critical review terhadap paper internasional terindeks Scopus, perancangan riset independen, penulisan akademis, dan penyusunan naskah penelitian. Pembagian ini mencerminkan siklus hidup publikasi ilmiah sesungguhnya, di mana penguasaan alat hanya menjadi prasyarat, sedangkan kemampuan merancang, mengevaluasi, dan menyumbangkan pengetahuan baru menjadi inti dari capaian pembelajaran.

Koneksi antara slide ini dengan slide sebelumnya sangat erat, khususnya terkait diferensiasi antara engineering problem dan research problem, serta performance improvement versus scientific contribution. Akurasi atau F1-score yang tinggi semata-mata belum menjamin adanya kontribusi ilmiah jika tidak disertai dengan analisis gap yang jelas, desain eksperimen yang adil, dan interpretasi hasil yang berbasis bukti. Dengan memahami peta ini sejak awal, mahasiswa dapat menghindari praktik trial-and-error tanpa arah, serta mulai mengidentifikasi area kandidat penelitian yang selaras dengan tren mutakhir seperti advanced tabular learning, graph mining, atau trustworthy AI. Penekanan pada alur metodologis ini juga akan menjadi lensa utama ketika kita membahas definisi formal data mining dan karakteristik unik proses knowledge discovery pada slide berikutnya.

### Inti yang Harus Ditekankan

- Pipeline penelitian `Problem → Literature → Gap → RQ → Baseline → Method → Experiment → Evidence → Contribution` adalah standar metodologis wajib yang harus diikuti secara konsisten sepanjang semester, bukan sekadar urutan tugas.
- Pertemuan 2–7 berfungsi sebagai laboratorium teknis untuk membangun baseline dan validitas eksperimen, sedangkan pertemuan 8–16 mentransformasi mahasiswa menjadi peneliti aktif yang mampu melakukan critical review, merancang hipotesis, dan menulis naskah ilmiah.
- Kontribusi ilmiah ditentukan oleh kejelasan research gap, rigor dalam desain eksperimen, dan kemampuan mengaitkan temuan empiris dengan perkembangan literatur, bukan semata-mata oleh angka performa model.

### Transisi ke Slide Berikutnya

Dengan kerangka penelitian yang sudah terpeta, kini kita akan mendalami hakikat objek yang akan kita teliti. Mari kita beralih ke definisi formal Data Mining, karakteristik unik proses knowledge discovery, serta mengapa pendekatan ini menuntut pemahaman kontekstual yang melampaui eksekusi algoritma belaka.

---

## Slide 003 - Definisi Data Mining

### Narasi

Data Mining dapat didefinisikan secara ringkas sebagai proses menemukan pola, hubungan, struktur, atau pengetahuan yang berguna dari data dalam jumlah besar secara otomatis atau semiotomatis. Dalam konteks penelitian tingkat magister, definisi ini bukan sekadar deskripsi teknis, melainkan fondasi metodologis yang mengarahkan seluruh aktivitas analitis. Kita tidak hanya berbicara tentang ekstraksi informasi berbasis kode, tetapi tentang transformasi data observasional menjadi insight yang valid, reproducible, dan dapat diuji secara empiris. Proses ini menuntut keseimbangan antara otomasi komputasional dan intervensi analitis manusia untuk memastikan bahwa pola yang diekstrak benar-benar bermakna secara statistik maupun kontekstual.

Ada empat karakteristik utama yang membedakan Data Mining dari analisis data konvensional atau eksperimen laboratorium terkontrol. Pertama, Data Mining bekerja pada data yang sudah tersedia, biasanya berasal dari sumber dunia nyata, sistem produksi, atau repository publik, bukan data yang dikumpulkan khusus dalam kondisi eksperimen yang ketat. Kedua, penekanannya terletak pada penemuan pola yang tidak sepele; kita tidak berhenti pada statistik deskriptif atau fakta yang sudah jelas terlihat, melainkan menggali struktur tersembunyi yang memerlukan pendekatan algoritmik spesifik untuk diungkap. Ketiga, hasil akhir haruslah dapat ditafsirkan dan siap digunakan untuk pengambilan keputusan strategis atau sebagai landasan penelitian lanjutan. Keempat, aktivitas ini bersifat holistik, mencakup siklus penuh mulai dari pembersihan data, transformasi fitur, pemodelan, evaluasi kinerja model, hingga interpretasi hasil di depan stakeholder atau komunitas akademik.

Poin kritis yang perlu ditegaskan berulang kali adalah bahwa Data Mining sama sekali bukan sekadar menjalankan algoritma melalui library seperti scikit-learn, pandas, atau NumPy. Menjalankan perintah `.fit()`, `.transform()`, atau `.predict()` tanpa pemahaman mendalam terhadap distribusi data, potensi bias sampling, missing mechanism, atau konteks domain masalah hanyalah praktik komputasi dangkal. Data Mining adalah proses ilmiah yang ketat, menuntut peneliti untuk memahami karakteristik data secara eksploratif, merumuskan hipotesis yang terukur, memilih representasi fitur yang tepat, serta memvalidasi temuan melalui metrik yang relevan dan robust. Tanpa fondasi pemahaman data dan konteks riset yang kuat, output algoritma berisiko menjadi artefak numerik yang menyesatkan atau overfitted terhadap noise.

Karakteristik dan peringatan ini selaras dengan alur penelitian yang telah kita paparkan pada slide sebelumnya, di mana tahap identifikasi masalah dan tinjauan literatur harus diterjemahkan ke dalam langkah-langkah analitis yang terstruktur dan dapat dipertanggungjawabkan. Pemahaman mendalam terhadap batasan serta esensi Data Mining akan menjadi panduan operasional kita saat memasuki kerangka Knowledge Discovery in Databases (KDD) pada slide berikutnya, yang akan menguraikan bagaimana setiap karakteristik tersebut diimplementasikan dalam tahapan seleksi, pra-pemrosesan, transformasi, mining itu sendiri, hingga evaluasi interpretatif yang menjamin kualitas pengetahuan yang dihasilkan.

### Inti yang Harus Ditekankan

- Data Mining adalah proses ilmiah holistik, bukan sekadar eksekusi kode atau penggunaan black-box algorithm.
- Fokus utama terletak pada penemuan pola non-sepele dari data observasional nyata, bukan data eksperimen terkontrol.
- Validitas hasil bergantung pada pemahaman domain, konteks masalah, dan siklus lengkap preprocessing hingga interpretasi.

### Transisi ke Slide Berikutnya

Dengan memahami bahwa Data Mining hanyalah satu komponen dalam ekosistem penemuan pengetahuan, kita kini akan melihat bagaimana konsep ini dioperasionalkan secara sistematis melalui kerangka Knowledge Discovery in Databases (KDD), yang mengatur urutan tahapan dari data mentah hingga pengetahuan yang tervalidasi.

---

## Slide 004 - Knowledge Discovery in Databases (KDD)

### Narasi

Pada slide sebelumnya, kita telah mendefinisikan Data Mining sebagai proses ilmiah untuk menemukan pola yang tidak sepele dari data dalam jumlah besar, dengan penekanan bahwa ini bukan sekadar menjalankan algoritma secara membabi buta. Untuk memahami posisi Data Mining secara utuh, kita perlu melihatnya sebagai bagian dari kerangka kerja yang lebih komprehensif, yaitu Knowledge Discovery in Databases atau KDD. KDD merupakan sebuah proses end-to-end yang dirancang untuk mengubah data mentah menjadi pengetahuan yang valid, berguna, dan dapat ditafsirkan oleh manusia atau sistem pendukung keputusan.

Proses KDD terdiri dari lima tahapan utama yang saling berkesinambungan. Pertama, *Data Selection*, yaitu tahap identifikasi dan pengambilan subset data yang relevan berdasarkan pertanyaan penelitian atau kebutuhan domain. Kedua, *Data Preprocessing*, yang mencakup pembersihan data dari noise, penanganan nilai hilang (*missing values*), serta deteksi dan penanganan outlier. Tahap ini sangat krusial karena kualitas hasil akhir sangat bergantung pada kebersihan data awal. Ketiga, *Data Transformation*, di mana data dikonversi ke format yang sesuai untuk proses penambangan, seperti normalisasi, agregasi, atau konstruksi fitur baru. Keempat, *Data Mining*, di sinilah berbagai algoritma diterapkan secara komputasional untuk mengekstraksi pola, hubungan, atau struktur tersembunyi dari data yang sudah siap. Kelima, *Interpretation and Evaluation*, tahap kritis di mana pola-pola yang ditemukan divalidasi terhadap kriteria kegunaan, kebaruan, dan konsistensi statistik. Pola yang dianggap tidak signifikan atau hanya kebetulan akan disaring keluar sebelum diimplementasikan.

Penting untuk dipahami bahwa Data Mining hanyalah satu langkah inti di tengah rangkaian KDD. Banyak peneliti pemula yang keliru menganggap Data Mining sebagai keseluruhan proses, padahal tanpa pemilihan data yang tepat, pra-pemrosesan yang rigor, dan evaluasi interpretatif, hasil penambangan pola cenderung bersifat artifak atau tidak bermakna. Dalam konteks penelitian tingkat magister, pemahaman mendalam terhadap setiap tahapan KDD menjadi fondasi metodologis. Anda harus mampu memberikan justifikasi mengapa subset data tertentu dipilih, teknik pra-pemrosesan apa yang paling sesuai dengan karakteristik dataset, serta metrik evaluasi mana yang digunakan untuk memvalidasi temuan tersebut agar memenuhi standar akademik yang ketat.

Memahami KDD sebagai ekosistem proses juga membantu kita membedakan batasan konseptual antara Data Mining dengan disiplin lain yang sering tumpang tindih, seperti Machine Learning, Artificial Intelligence, dan Data Science. Pembahasan mengenai perbedaan ruang lingkup dan fokus masing-masing istilah ini akan kita bahas secara eksplisit pada slide berikutnya.

### Inti yang Harus Ditekankan

- KDD adalah kerangka kerja holistik yang mencakup lima tahapan berurutan: seleksi, pra-pemrosesan, transformasi, penambangan, dan evaluasi/interpretasi.
- Data Mining hanyalah satu komponen teknis dalam KDD yang berfokus pada penerapan algoritma ekstraksi pola, bukan keseluruhan siklus discovery.
- Validitas dan kegunaan pengetahuan sangat bergantung pada ketelitian pada tahap pra-pemrosesan dan evaluasi; mengabaikan tahap ini menghasilkan temuan yang tidak reliabel untuk penelitian atau aplikasi nyata.

### Transisi ke Slide Berikutnya

Setelah memahami alur kerja KDD, mari kita bedah bagaimana posisi Data Mining beririsan dan berbeda secara konseptual dengan istilah-istilah populer lainnya seperti Artificial Intelligence, Machine Learning, dan Data Science.

---

## Slide 005 - Hubungan AI, Machine Learning, Data Mining, dan Data Science

### Narasi

Pada slide sebelumnya, kita telah membahas Knowledge Discovery in Databases atau KDD sebagai kerangka kerja metodologis yang mengubah data mentah menjadi pengetahuan yang valid, berguna, dan dapat dipahami. Dalam alur KDD tersebut, langkah *data mining* menempati posisi inti sebagai proses penerapan algoritma untuk mengekstraksi pola. Namun, dalam praktik akademis maupun industri, istilah *data mining* sering kali disamakan atau tertukar dengan *Artificial Intelligence*, *Machine Learning*, dan *Data Science*. Padahal, meskipun keempat bidang ini memiliki irisan yang sangat erat, masing-masing memiliki cakupan filosofis, tujuan teknis, dan ruang lingkup metodologi yang berbeda. Pemahaman yang presisi terhadap batas-batas ini menjadi fondasi penting bagi peneliti tingkat magister dalam merumuskan *research gap* dan memilih pendekatan yang tepat.

Mari kita bedah definisi operasionalnya secara bertahap. *Artificial Intelligence* merupakan payung konseptual terbesar yang mencakup segala upaya rekayasa untuk menciptakan agen cerdas yang mampu meniru kemampuan kognitif manusia, seperti penalaran, perencanaan, persepsi, dan pengambilan keputusan otonom. Di dalamnya berkembang *Machine Learning*, yang secara spesifik berfokus pada pengembangan model matematis dan komputasional yang mampu belajar representasi dari data melalui optimisasi fungsi kerugian, tanpa memerlukan pemrograman aturan eksplisit untuk setiap skenario. Sementara itu, *Data Mining* lebih menekankan pada aspek *discovery* atau penemuan pola, struktur, dependensi, atau anomali yang tersembunyi dalam dataset berskala besar, dengan fondasi teoretis yang kuat pada statistika inferensial, teori graf, dan logika deskriptif. Terakhir, *Data Science* hadir sebagai disiplin interdisipliner yang mengintegrasikan statistika, ilmu komputer, pemahaman domain (*domain knowledge*), serta keterampilan komunikasi data untuk menghasilkan wawasan strategis, rekomendasi kebijakan, hingga produk berbasis data yang siap di-deploy.

Jika dirumuskan secara esensial sesuai blok teks pada slide, perbedaannya terletak pada orientasi utamanya. *AI* bertujuan membangun sistem yang mampu melakukan tugas-tugas cerdas secara mandiri atau semi-otonom. *ML* berpusat pada mekanisme pembelajaran mesin dari data guna meningkatkan akurasi prediksi atau pengambilan keputusan seiring bertambahnya pengalaman data. *DM* berorientasi pada eksplorasi dan penemuan pengetahuan baru yang belum diketahui sebelumnya, seringkali bersifat deskriptif atau prediktif tanpa menekankan generalisasi model ke produksi. Sedangkan *Data Science* mencakup siklus hidup data secara end-to-end, mulai dari pengumpulan, pembersihan, analisis eksploratori, pemodelan, evaluasi, hingga penyampaian insight atau pembangunan pipeline data yang bernilai bisnis maupun penelitian. Bagi mahasiswa S2, kejelasan terminologi ini menentukan bagaimana kita mendesain eksperimen, memilih baseline yang relevan, dan memposisikan kontribusi ilmiah kita dalam peta literatur internasional.

### Inti yang Harus Ditekankan

- AI adalah payung konsep kecerdasan buatan, sedangkan ML adalah subbidang teknis yang memungkinkan mesin belajar pola dari data melalui optimisasi model.
- Data Mining berfokus pada *discovery* atau penemuan pola/knowledge tersembunyi, dengan penekanan kuat pada validitas statistik dan interpretasi domain.
- Data Science bersifat holistik dan interdisipliner, mencakup seluruh siklus data hingga implementasi insight, visualisasi, dan deployment produk berbasis data.
- Perbedaan terminologi ini secara langsung mempengaruhi perumusan research question, pemilihan metodologi eksperimen, dan strategi publikasi paper di konferensi bereputasi.

### Transisi ke Slide Berikutnya

Untuk memperjelas perbedaan konseptual tersebut secara praktis dan terstruktur, pada slide berikutnya kita akan membedah perbandingan langsung antara Data Mining, Machine Learning, dan Data Science berdasarkan tujuan utama, fokus analitik, metode yang umum digunakan, hingga luaran yang dihasilkan. Perbandingan tabel ini akan membantu Anda menentukan pendekatan metodologis yang paling tepat ketika merancang proposal penelitian atau eksperimen komparatif di jenjang magister.

---

## Slide 006 - Perbandingan: Data Mining vs Machine Learning vs Data Science

### Narasi

Pada slide kelima, kita telah membedah definisi konseptual dari Artificial Intelligence, Machine Learning, Data Mining, dan Data Science secara terpisah. Kini, mari kita tinjau bagaimana ketiga disiplin inti—Data Mining, Machine Learning, dan Data Science—berinteraksi dan dibandingkan melalui lima dimensi operasional yang terangkum dalam tabel ini. Pemahaman perbandingan ini menjadi fondasi kritis bagi peneliti tingkat magister dalam merancang metodologi eksperimen yang tepat sasaran.

Dari segi tujuan utama, Data Mining berorientasi pada discovery atau penemuan pola dan pengetahuan yang belum terekspos dalam dataset. Machine Learning berfokus pada pembangunan model yang mampu belajar dari data historis untuk menghasilkan prediksi atau keputusan otomatis. Sementara itu, Data Science memiliki cakupan yang lebih holistik, yaitu menjawab pertanyaan bisnis atau penelitian secara komprehensif dengan mengintegrasikan data sebagai bahan baku utama. Terkait fokus, Data Mining menekankan pada eksplorasi, deskripsi, dan prediksi analitik. Machine Learning berpusat pada proses pembelajaran algoritma untuk mencapai generalisasi yang robust. Data Science mencakup seluruh lifecycle data, mulai dari pemahaman masalah, eksplorasi awal, pemodelan, evaluasi ketat, hingga integrasi hasil ke dalam sistem atau kebijakan.

Jika ditelusuri lebih lanjut pada aspek metode dan luaran, Data Mining banyak memanfaatkan teknik association rule mining, clustering, dan klasifikasi tradisional yang berakar pada statistik inferensial dan ilmu komputer. Machine Learning memperluas arsenal ini dengan pendekatan supervised, unsupervised, dan reinforcement learning yang mengandalkan optimisasi fungsi kerugian serta validasi silang. Data Science mengadopsi seluruh teknik tersebut, dilengkapi dengan langkah wajib seperti EDA, feature engineering, metric selection yang kontekstual, dan deployment pipeline. Akibatnya, deliverable-nya pun berbeda: Data Mining menghasilkan pola, aturan asosiasi, atau insight analitik; Machine Learning menghasilkan model siap pakai beserta skor prediktifnya; dan Data Science menghasilkan insight strategis, rekomendasi berbasis evidence, hingga arsitektur sistem data yang terstandarisasi.

Hubungan ketiganya bersifat simbiotik dan hierarkis. Data Mining secara praktis memanfaatkan teknik Machine Learning dan statistik sebagai engine utama. Sebaliknya, sebagian besar teknik Machine Learning kini dipandang sebagai subset atau toolkit fundamental dalam praktik Data Mining modern. Data Science bertindak sebagai payung metodologis yang memayungi kedua bidang tersebut, memastikan bahwa temuan teknis tidak hanya akurat secara matematis, tetapi juga relevan secara domain dan dapat ditransformasikan menjadi nilai nyata. Perlu ditekankan bahwa meskipun terdapat tumpang tindih yang signifikan, Data Mining dan Machine Learning bukanlah entitas yang identik. Data Mining menempatkan penekanan utama pada discovery dan interpretasi pengetahuan, sedangkan Machine Learning menempatkan penekanan pada kemampuan belajar, adaptasi parameter, dan generalisasi model terhadap data未见.

Dalam konteks penelitian S2, pembedaan ini menentukan bagaimana Anda merumuskan research question, memilih baseline, hingga mendefinisikan kontribusi ilmiah. Apakah riset Anda bertujuan menggali struktur tersembunyi dalam data kompleks? Itu masuk ranah Data Mining. Apakah tujuannya meningkatkan akurasi atau efisiensi prediksi pada benchmark tertentu? Itu masuk ranah Machine Learning. Dan jika Anda perlu mengintegrasikan keduanya ke dalam alur penelitian lengkap, mulai dari perumusan hipotesis, ablation study, hingga implikasi praktis, maka Anda beroperasi dalam ekosistem Data Science. Batasan antar-ketiganya memang semakin cair seiring hadirnya tools seperti AutoML dan framework end-to-end, namun fondasi filosofis orientasi discovery versus prediction versus problem-solving tetap menjadi pedoman metodologis yang tak tergantikan.

### Inti yang Harus Ditekankan

- Data Mining, Machine Learning, dan Data Science memiliki irisan teknik yang luas, tetapi berbeda secara filosofis dalam tujuan, fokus, dan jenis luaran yang dihasilkan.
- Data Mining berorientasi pada discovery dan interpretasi pengetahuan; Machine Learning berorientasi pada pembelajaran algoritma dan generalisasi model; Data Science berorientasi pada penyelesaian masalah end-to-end dari data hingga keputusan.
- Pemilihan posisi riset di salah satu atau gabungan dari ketiga bidang ini akan secara langsung mempengaruhi desain eksperimen, metrik evaluasi, dan bentuk kontribusi ilmiah yang diharapkan.

### Transisi ke Slide Berikutnya

Dengan memahami peta konsep ini, langkah logis selanjutnya adalah menyoroti bagaimana orientasi tersebut termanifestasi dalam dua paradigma utama praktik Data Mining, yaitu pendekatan predictive dan descriptive, yang akan kita bedah pada slide berikutnya.

---

## Slide 007 - Predictive vs Descriptive Mining

### Narasi

Pada slide sebelumnya, kita telah menguraikan perbedaan konseptual antara Data Mining, Machine Learning, dan Data Science, dengan penekanan bahwa Data Mining berorientasi pada penemuan pengetahuan (*knowledge discovery*) dari dalam kumpulan data. Dari fondasi tersebut, praktik *data mining* secara operasional terbagi menjadi dua paradigma utama yang sering menjadi landasan perumusan penelitian, yaitu *predictive mining* dan *descriptive mining*. Bagi mahasiswa pascasarjana, pembedaan ini bukan sekadar taksonomi teknis, melainkan keputusan strategis yang akan membentang ke seluruh desain penelitian, mulai dari formulasi masalah hingga validasi temuan.

Mari kita bedah terlebih dahulu *predictive mining*. Pendekatan ini bertujuan membangun model komputasional yang mampu memprediksi nilai kontinu atau label diskrit untuk observasi data baru yang belum pernah dilatih sebelumnya. Dalam konteks penelitian tingkat magister, implementasinya umumnya berupa tugas klasifikasi untuk kategorisasi, regresi untuk estimasi nilai numerik, atau *anomaly scoring* untuk deteksi penyimpangan. Karena sifatnya yang terukur dan berorientasi pada generalisasi, evaluasi model *predictive* sangat bergantung pada metrik kuantitatif yang baku seperti akurasi, presisi, *recall*, skor F1, atau *Root Mean Squared Error* (RMSE). Pemilihan metrik ini harus dipertimbangkan secara kritis terhadap ketidakseimbangan kelas (*class imbalance*), biaya kesalahan (*cost of false positive/negative*), serta kebutuhan domain aplikasi.

Sebaliknya, *descriptive mining* berfokus pada penggalian pola, struktur, atau relasi laten yang mendeskripsikan karakteristik intrinsik data tanpa target prediksi yang ditetapkan sebelumnya. Metode yang lazim digunakan mencakup *clustering* untuk segmentasi alami, aturan asosiasi (*association rules*) untuk mengungkap ketergantungan antar variabel, serta penambangan pola sering (*frequent pattern mining*) untuk identifikasi kombinasi item yang dominan. Evaluasi pada pendekatan ini bersifat lebih kualitatif dan interpretatif. Keberhasilan model dinilai dari koherensi dengan teori yang ada, kedalaman insight yang dihasilkan, serta relevansi kontekstualnya terhadap permasalahan bisnis atau ilmiah yang sedang dikaji. Hal ini menuntut peneliti untuk mampu menerjemahkan output statistik menjadi narasi analitis yang bermakna.

Implikasi penelitian dari pilihan antara *predictive* dan *descriptive* sangat fundamental. Paradigma yang dipilih akan secara langsung menentukan jenis *research question* yang diajukan, algoritma yang diimplementasikan, kerangka evaluasi yang dipakai, hingga bentuk kontribusi ilmiah yang diharapkan. Penelitian prediktif biasanya berkontribusi pada peningkatan akurasi model, efisiensi komputasi, atau robustness terhadap noise, sedangkan penelitian deskriptif cenderung menawarkan kerangka konseptual baru, pemahaman struktur data yang sebelumnya tidak terlihat, atau dasar empiris untuk pembuktian hipotesis. Pada slide berikutnya, kita akan melihat contoh konkret penerapan kedua pendekatan ini dalam skenario riil, termasuk strategi hibridisasi di mana analisis deskriptif digunakan sebagai tahap eksplorasi sebelum membangun model prediktif.

Sebagai penutup penjelasan slide ini, pastikan Anda menyelaraskan paradigma *data mining* dengan tujuan penelitian Anda. Jika fokus Anda adalah akurasi prediksi, validasi silang yang ketat, dan generalisasi ke populasi baru, maka *predictive mining* adalah jalur yang tepat. Namun, jika tujuan Anda adalah eksplorasi struktur data, identifikasi klaster tersembunyi, atau pembentukan teori berbasis data, maka *descriptive mining* lebih relevan. Kesadaran akan perbedaan ini akan memperkuat justifikasi metodologis dan meningkatkan kualitas argumentasi dalam paper penelitian Anda.

### Inti yang Harus Ditekankan

- Pilihan antara *predictive* dan *descriptive* bukan soal mana yang lebih baik, melainkan penyesuaian dengan tujuan penelitian dan jenis *research question* yang ingin dijawab.
- Evaluasi *predictive mining* bersifat kuantitatif dan terstandarisasi (accuracy, precision, recall, F1, RMSE), sedangkan *descriptive mining* mengandalkan interpretasi kontekstual dan signifikansi domain.
- Dalam penelitian tingkat magister, kedua pendekatan dapat digabungkan secara bertahap: eksplorasi deskriptif untuk memahami struktur data, dilanjutkan dengan pemodelan prediktif berbasis wawasan yang ditemukan.
- Justifikasi metodologis harus jelas mengapa suatu paradigma dipilih, bagaimana metrik evaluasinya dirancang, dan apa kontribusi ilmiah spesifik yang dihasilkan dari paradigma tersebut.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan konseptual dan implikasi metodologisnya, mari kita lihat bagaimana kedua pendekatan ini diwujudkan dalam studi kasus nyata melalui tabel perbandingan pada slide berikutnya, serta strategi integrasinya dalam satu alur penelitian yang kohesif.

---

## Slide 008 - Contoh Predictive dan Descriptive

### Narasi

Slide ini berfungsi sebagai jembatan antara konsep teoretis yang dibahas pada slide sebelumnya dengan implementasi praktisnya dalam skenario penelitian nyata. Tabel yang disajikan memetakan empat kasus khas ke dalam dua kategori pendekatan, lengkap dengan pertanyaan riset yang mendasarinya, algoritma yang lazim digunakan, serta tipe keluaran yang dihasilkan.

Pada sisi *predictive*, dua contoh yang ditampilkan adalah deteksi penipuan transaksi dan peramalan permintaan energi. Untuk kasus fraud detection, peneliti umumnya memanfaatkan model yang mampu menghasilkan probabilitas risiko, seperti Logistic Regression, Random Forest, atau XGBoost. Keluaran yang dihasilkan bukan label biner kaku, melainkan skor kontinuitas yang dapat disesuaikan threshold-nya berdasarkan trade-off antara false positive dan false negative. Sementara itu, untuk peramalan beban energi, pendekatan regresi atau model deret waktu diterapkan untuk memproyeksikan nilai numerik di masa depan. Keduanya menuntut evaluasi ketat terhadap metrik akurasi, RMSE, atau MAE guna menjamin generalisasi pada data uji yang belum pernah dilihat model.

Di sisi lain, pendekatan *descriptive* tidak berorientasi pada prediksi variabel target, melainkan pada pengungkapan struktur atau relasi intrinsik data. Segmentasi pelanggan mengandalkan algoritma klasterisasi seperti K-Means, DBSCAN, atau *hierarchical clustering* untuk mengelompokkan observasi berdasarkan kemiripan fitur. Hasilnya berupa profil klaster yang mendeskripsikan karakteristik perilaku atau demografis masing-masing segmen. Dalam konteks *market basket analysis*, teknik penambangan aturan asosiasi seperti Apriori atau FP-Growth digunakan untuk mengidentifikasi item yang sering muncul bersamaan. Luaran utamanya adalah aturan implikasi berserta metrik kualitas seperti *support*, *confidence*, dan *lift*.

Dari perspektif penelitian tingkat magister, penting untuk dipahami bahwa kedua paradigma ini jarang dieksekusi secara terpisah. Dalam alur penelitian modern, pendekatan deskriptif sering menjadi tahap eksplorasi awal yang menyiapkan fondasi bagi model prediktif. Misalnya, Anda dapat menjalankan klasterisasi untuk mengidentifikasi heterogenitas populasi atau mereduksi noise, kemudian memasukkan atribut klaster tersebut sebagai fitur tambahan dalam pipeline klasifikasi atau regresi. Integrasi semacam ini tidak hanya memperkuat baseline eksperimen, tetapi juga meningkatkan interpretabilitas model dan membuka ruang kontribusi ilmiah yang lebih bernilai daripada sekadar optimisasi metrik tunggal.

### Inti yang Harus Ditekankan

- Perbedaan mendasar terletak pada tujuan riset: *predictive* berfokus pada akurasi prediksi nilai atau label, sedangkan *descriptive* berfokus pada pemahaman pola, struktur, atau relasi yang ada dalam data.
- Pemilihan algoritma harus konsisten dengan bentuk pertanyaan riset dan tipe keluaran yang diharapkan, apakah berupa skor probabilitas, estimasi numerik, profil kelompok, atau aturan asosiatif.
- Dalam praktik penelitian mutakhir, kombinasi kedua pendekatan (*hybrid pipeline*) sangat disarankan karena menggabungkan kekuatan eksplorasi data dengan kemampuan eksploitasi prediktif, sehingga menghasilkan analisis yang lebih robust dan bermakna secara domain.

### Transisi ke Slide Berikutnya

Setelah melihat bagaimana kedua pendekatan ini dioperasionalkan dalam skenario nyata dan potensi kombinasinya, langkah logis selanjutnya adalah menempatkan seluruh proses tersebut ke dalam kerangka kerja yang terstruktur. Kita akan melanjutkan ke slide berikutnya yang membahas *Knowledge Discovery in Databases (KDD) workflow*, sebuah alur iteratif yang menghubungkan seleksi data hingga ekstraksi pengetahuan yang valid secara metodologis.

---

## Slide 009 - Workflow Proses Knowledge Discovery

### Narasi

Setelah membahas contoh penerapan pendekatan prediktif dan deskriptif pada slide sebelumnya, kita kini memasuki tahap operasionalisasi keduanya melalui kerangka kerja yang terstruktur. Dalam penelitian tingkat magister, tidak cukup hanya menjalankan algoritma secara instan; kita harus mengikuti alur *Knowledge Discovery in Databases* (KDD) yang sistematis dan dapat dipertanggungjawabkan secara metodologis. Workflow ini dimulai dari data mentah yang biasanya masih kotor, tidak seimbang, atau mengandung redundansi. Langkah pertama adalah seleksi data, di mana peneliti memfilter sampel berdasarkan relevansi langsung dengan rumusan masalah dan batasan domain. Data yang terpilih kemudian masuk ke tahap pra-pemrosesan (*preprocessing*), yang mencakup penanganan *missing values*, koreksi outlier, encoding variabel kategorikal, serta normalisasi atau standarisasi skala fitur.

Setiap data bersih, proses berlanjut ke transformasi dan rekayasa fitur (*feature engineering*). Pada jenjang S2, tahap ini sangat kritis karena kualitas representasi data sering kali menentukan batas atas performa model. Teknik seperti reduksi dimensi (PCA, t-SNE), pembuatan fitur polinomial, atau ekstraksi fitur berbasis domain knowledge digunakan untuk mengubah struktur data agar lebih mudah dipelajari oleh algoritma inti. Data yang telah direpresentasikan dengan optimal kemudian dipasok ke modul *data mining*, tempat berbagai metode seperti Random Forest, XGBoost, SVM, atau arsitektur deep learning dijalankan untuk mengekstrak pola tersembunyi.

Keluaran dari algoritma mining tidak langsung dianggap sebagai kesimpulan ilmiah. Ia harus melalui tahap interpretasi dan evaluasi yang ketat. Peneliti memeriksa metrik performa, melakukan analisis kesalahan (*error analysis*), menguji robustness terhadap variasi data, dan memastikan tidak terjadi kebocoran informasi (*data leakage*). Jika hasil evaluasi menunjukkan performa rendah, bias sistematis, atau temuan yang tidak konsisten secara statistik, panah umpan balik dalam diagram mengarahkan peneliti untuk kembali ke tahap preprocessing, eksperimen ulang dengan teknik transformasi fitur yang berbeda, atau bahkan memilih ulang dataset awal. Sifat iteratif ini menjamin bahwa setiap keputusan teknis didokumentasikan, dijustifikasi, dan dapat direplikasi oleh komunitas akademik.

Ketika siklus iteratif telah mencapai titik konvergensi di mana model stabil, interpretable, dan memberikan kontribusi novel yang terukur, proses resmi berakhir pada pembentukan pengetahuan atau kontribusi ilmiah. Alur ini menjadi jembatan antara eksperimen teknis di lingkungan Python/Jupyter Notebook atau Google Colab dengan penulisan paper konferensi internasional, karena setiap putaran iterasi harus mencerminkan rigour penelitian, transparansi metodologi, dan keselarasan dengan standar publikasi bereputasi.

### Inti yang Harus Ditekankan

- Workflow KDD bersifat iteratif, bukan linier; kegagalan evaluasi mengharuskan revisi upstream (preprocessing, feature engineering, atau seleksi data) secara sistematis.
- Rekayasa fitur dan pra-pemrosesan adalah fondasi metodologis yang sering kali memberi dampak lebih signifikan terhadap performa akhir dibandingkan pemilihan algoritma itu sendiri.
- Evaluasi harus melampaui akurasi sederhana; mencakup analisis error, pengujian generalisasi, deteksi data leakage, dan ablation study untuk menjamin validitas ilmiah.
- Dokumentasi setiap putaran iterasi dan justifikasi perubahan parameter sangat penting untuk reproduksibilitas penelitian dan kesiapan penulisan paper tingkat internasional.

### Transisi ke Slide Berikutnya

Dengan memahami alur kerja dasar ini, kita dapat menempatkan setiap tahapan tersebut ke dalam peta yang lebih komprehensif. Slide berikutnya akan membahas *Research Landscape Data Mining*, di mana kita akan melihat bagaimana empat pilar utama—mulai dari persiapan data hingga aspek *trustworthy mining*—membantu peneliti memposisikan pertanyaan riset, mengidentifikasi research gap, dan merancang kontribusi ilmiah yang berdampak serta relevan dengan perkembangan mutakhir bidang ini.

---

## Slide 010 - Peta Research Landscape Data Mining

### Narasi

Setelah menelaah alur iteratif Knowledge Discovery pada slide sebelumnya, langkah selanjutnya adalah menempatkan setiap tahapan tersebut dalam konteks yang lebih luas, yaitu peta landscape penelitian data mining secara menyeluruh. Landscape ini tidak lagi dilihat sebagai kumpulan algoritma terpisah, melainkan sebagai ekosistem yang terstruktur menjadi empat pilar utama yang saling beririsan dan berkembang secara simultan.

Pilar pertama adalah Data Understanding & Preparation, yang menjadi fondasi kritis dan mencakup eksplorasi data awal, preprocessing, serta feature engineering untuk menjamin kualitas input sebelum masuk ke tahap modeling. Pilar kedua, Core Mining Methods, merupakan inti dari ekstraksi pengetahuan yang meliputi pattern mining, classification, regression, clustering, dan anomaly detection. Pilar ketiga merepresentasikan kemajuan metodologis melalui Advanced & Representation Learning, seperti deep tabular learning, graph mining, dan temporal modeling yang mampu menangkap relasi non-linear dan struktural dalam data kompleks. Terakhir, pilar keempat, Trustworthy & Responsible Mining, menekankan aspek keberlanjutan dan etika penelitian, mencakup explainability, fairness, privacy, dan robustness model terhadap noise maupun adversarial perturbation.

Cakupan research landscape ini jauh melampaui sekadar teknik komputasi. Ia mencakup seluruh spektrum mulai dari pengembangan metode, algoritma, dan teori dasar, hingga implementasi masalah terapan di berbagai domain spesifik. Karakteristik data yang beragam, seperti tabular, graph, teks, temporal, dan streaming, turut membentuk dinamika penelitian. Selain itu, aspek evaluasi ketat, standar reproduksibilitas eksperimen, serta pertimbangan dampak sosial menjadi komponen wajib dalam penelitian tingkat magister yang menuntut rigor metodologis.

Fungsi strategis dari peta landscape ini adalah membantu peneliti menentukan posisi pertanyaan penelitiannya secara presisi. Dengan memetakan riset Anda terhadap empat pilar dan cakupan landscape tersebut, Anda dapat secara objektif mengidentifikasi research gap, memilih baseline yang tepat, dan merancang kontribusi ilmiah yang benar-benar mengisi celah yang belum tuntas dieksplorasi oleh literatur terkini, sekaligus memastikan bahwa eksperimen Anda memiliki relevansi dan dampak yang terukur.

### Inti yang Harus Ditekankan

- Landscape data mining bersifat multidimensi, terdiri dari empat pilar utama yang saling melengkapi: persiapan data, metode inti, pembelajaran representasi mutakhir, dan aspek kepercayaan/tanggung jawab.
- Penelitian tingkat magister harus menempatkan diri secara eksplisit dalam peta ini untuk mengidentifikasi research gap, menghindari duplikasi, dan merumuskan hipotesis yang terukur.
- Aspek evaluasi, reproduksibilitas, dan dampak sosial bukan pelengkap, melainkan syarat mutlak dalam penelitian data mining modern yang layak publikasi di konferensi terindeks Scopus.

### Transisi ke Slide Berikutnya

Untuk memahami bagaimana masing-masing pilar dalam landscape ini berevolusi seiring waktu, mari kita lihat pergeseran paradigma dari pendekatan klasik menuju metode modern yang mendominasi penelitian saat ini.

---

## Slide 011 - Perkembangan Data Mining: dari Klasik ke Modern

### Narasi

Evolusi data mining dapat dipahami sebagai respons adaptif terhadap keterbatasan komputasi, pertumbuhan volume data, dan kebutuhan representasi yang semakin kompleks. Pada era klasik, fokus utama tertuju pada ekstraksi pola sederhana dari dataset tabular berukuran kecil. Algoritma seperti association rules, decision tree, dan k-means mendominasi karena sifatnya yang transparan, efisien secara komputasi, dan mudah diinterpretasikan. Fase ini menetapkan pondasi metodologis tentang cara memformulasikan masalah pencarian pengetahuan dari data terstruktur tanpa bergantung pada infrastruktur komputasi berat.

Pergeseran menuju era Machine Learning ditandai oleh penekanan pada evaluasi model yang ketat, validasi silang, dan rekayasa fitur manual. Di fase ini, algoritma seperti Support Vector Machine (SVM), Random Forest, dan teknik boosting berkembang pesat berkat penguatan landasan teori pembelajaran statistik dan peningkatan akurasi generalisasi. Selanjutnya, era Deep Learning mengubah paradigma dengan kemampuan representasi otomatis melalui jaringan saraf berlapis. Didorong oleh ketersediaan data berskala besar dan akselerasi hardware, pendekatan ini mengandalkan embedding, arsitektur neural network, dan belakangan mulai mengintegrasikan self-supervised learning untuk mengekstrak representasi hierarkis tanpa bergantung sepenuhnya pada anotasi label manusia.

Saat ini, kita memasuki fase Modern Emerging yang dicirikan oleh skalabilitas model besar, integrasi multimodal, serta kesadaran kuat terhadap privasi dan etika data. Sorotan penelitian bergeser ke arah tabular foundation models, Graph Neural Networks (GNN) untuk data relasional, serta federated learning yang memungkinkan kolaborasi pelatihan model tanpa sentralisasi data sensitif. Poin krusial yang perlu ditekankan adalah bahwa perkembangan ini bersifat komplementer, bukan substitutif. Metode klasik tidak usang; justru dalam konteks riset tingkat S2, algoritma tradisional tetap menjadi baseline wajib untuk mengukur kontribusi inovasi baru, sekaligus berfungsi sebagai kerangka berpikir analitis yang menjaga kejelasan interpretasi dan mendukung desain ablation study yang rigor.

### Inti yang Harus Ditekankan

- Evolusi data mining bergerak dari eksploitasi pola sederhana pada data kecil menuju representasi otomatis dan model skala besar yang aware terhadap privasi serta skalabilitas.
- Setiap era menjawab keterbatasan teknis dan ilmiah pada masanya, namun tidak saling menghapus; terjadi akumulasi dan spesialisasi domain.
- Metode klasik tetap menjadi standar baseline dan kerangka interpretasi yang esensial dalam desain eksperimen, validasi hipotesis, dan pelaporan hasil riset tingkat magister.

### Transisi ke Slide Berikutnya

Memahami peta evolusi ini memberikan konteks mengapa topik-topik mutakhir seperti advanced tabular learning, autoML, hingga graph mining dan federated learning kini menjadi sorotan utama dalam literatur terkini. Pada slide berikutnya, kita akan membedah secara spesifik area-area riset yang sedang aktif dikembangkan, sekaligus menguji kritisitas apakah kompleksitas komputasi yang meningkat benar-benar menghasilkan terobosan epistemologis atau sekadar pergeseran beban pemrosesan.

---

## Slide 012 - Topik Modern Data Mining

### Narasi

Pada slide sebelumnya, kita telah menelusuri evolusi data mining dari pendekatan klasik berbasis aturan dan statistik sederhana hingga era model besar yang mengandalkan representasi otomatis. Slide ini akan membedah secara spesifik area-area penelitian yang sedang menjadi sorotan utama dalam komunitas akademik dan industri saat ini. Sebagai mahasiswa pascasarjana, tujuan kita bukan sekadar menghafal daftar metode, melainkan menggunakan peta topik ini sebagai kompas untuk mengidentifikasi research gap, merumuskan pertanyaan penelitian yang tajam, dan merancang eksperimen yang berkontribusi secara ilmiah.

Advanced tabular learning saat ini menjadi medan kompetisi yang sangat aktif. Meskipun deep learning mendominasi domain visual dan bahasa, data tabular tetap menjadi tulang punggung keputusan bisnis dan ilmiah. Riset terkini banyak mengeksplorasi perbandingan langsung antara model tree-based ensemble seperti XGBoost, LightGBM, dan CatBoost dengan arsitektur neural network khusus tabular. Fokusnya bergeser dari sekadar meningkatkan akurasi menjadi optimalisasi trade-off antara performa, interpretabilitas, dan biaya inferensi. Sejalan dengan itu, AutoML dan hyperparameter optimization terus disempurnakan untuk mengurangi beban rekayasa manual, namun tantangannya kini terletak pada stabilitas pencarian ruang parameter, generalisasi lintas dataset, dan transparansi proses seleksi model.

Self-supervised learning untuk data tabular juga mulai mendapat perhatian serius. Berbeda dengan computer vision atau NLP yang sudah memiliki paradigma pretraining matang, data tabular memiliki heterogenitas tipe kolom numerik, kategorikal, dan missing value yang kompleks. Metode seperti masked column modeling, contrastive learning pada representasi tabel, dan proxy task generation sedang dieksplorasi untuk memanfaatkan data unlabeled dalam skala besar guna meningkatkan downstream performance.

Di sisi struktur relasional, graph mining dan Graph Neural Networks (GNNs) membuka dimensi analitik yang jauh melampaui asumsi i.i.d. tradisional. Kemampuan GNNs dalam menangkap dependensi struktural dan node features menjadikannya sangat powerful untuk deteksi anomali jaringan, rekomendasi kontekstual, analisis penyebaran informasi, dan pemetaan biomolekuler. Sementara itu, karakteristik dinamis data menuntut pendekatan temporal dan streaming data mining yang mampu mendeteksi concept drift secara online, melakukan incremental learning, serta menjaga konsistensi prediksi tanpa memerlukan retraining penuh yang mahal secara komputasi.

Aspek kepercayaan dan etika kini menjadi pilar utama trustworthy data mining. Explainable AI (XAI) tidak lagi dipandang sebagai fitur tambahan, melainkan requirement metodologis untuk audit model, terutama di sektor regulatif seperti keuangan, kesehatan, dan kebijakan publik. Teknik post-hoc explanation dan intrinsic interpretability terus dikembangkan agar kompleksitas model tidak mengaburkan alasan pengambilan keputusan. Privasi data juga dijawab melalui federated learning dan privacy-preserving techniques seperti differential privacy dan secure multi-party computation, yang memungkinkan kolaborasi pelatihan model lintas entitas tanpa pernah bertukar data mentah.

Generatif model untuk synthetic tabular data, termasuk GANs, VAEs, dan diffusion models, kini dimanfaatkan untuk augmentasi kelas minoritas, simulasi skenario langka, dan pengujian bias algoritma. Perkembangan paling transformatif saat ini adalah kemunculan tabular/foundation models yang berusaha menciptakan arsitektur serbaguna, terlatih secara masif, yang dapat diadaptasi ke berbagai tugas tabular dengan sedikit fine-tuning, mirip dengan transformers di domain teks dan gambar.

Namun, seluruh kemajuan teknis ini harus diuji melalui kerangka berpikir ilmiah yang skeptis. Pertanyaan kritis pada slide ini mengajak kita untuk mempertanyakan esensi inovasi: apakah metode baru benar-benar membuka pengetahuan baru, atau hanya memindahkan masalah ke kompleksitas komputasi yang lebih tinggi? Dalam konteks penelitian tingkat magister, sebuah kontribusi dianggap valid jika ia menawarkan peningkatan validitas eksternal, efisiensi sumber daya yang terukur, robustness yang terbukti, atau wawasan konseptual yang tidak bisa dicapai oleh baseline konvensional. Peningkatan skor metrik semata, tanpa ablation study, error analysis, dan evaluasi biaya komputasi, bukanlah terobosan ilmiah melainkan optimasi permukaan.

### Inti yang Harus Ditekankan

- Inovasi metodologis harus dievaluasi berdasarkan nilai tambah ilmiah dan efisiensi sumber daya, bukan hanya peningkatan akurasi permukaan.
- Data tabular, foundation models, dan GNNs merupakan area riset yang sangat aktif karena relevansi langsungnya dengan aplikasi industri dan kebutuhan representasi relasional.
- Trustworthiness, explainability, dan privacy-preserving mechanisms adalah syarat metodologis mutlak untuk publikasi berkualitas dan implementasi bertanggung jawab.
- Identifikasi research gap dimulai dari pemahaman mendalam terhadap keterbatasan baseline, dinamika data, dan kesenjangan antara teori algoritma dengan realitas deployment.

### Transisi ke Slide Berikutnya

Pemahaman terhadap lanskap penelitian modern ini menjadi fondasi langsung bagi capaian pembelajaran mata kuliah. Pada slide berikutnya, kita akan mengaitkan topik-topik tersebut dengan CPMK-1 dan CPMK-2, serta menjelaskan bagaimana sikap kritis dan metodologi penelitian akan diinternalisasi sepanjang semester menuju penyusunan proyek penelitian mandiri.

---

## Slide 013 - Keterkaitan dengan CPMK-1 dan CPMK-2

### Narasi

Pada slide ini, kita mengaitkan pembahasan materi dengan dua Capaian Pembelajaran Mata Kuliah (CPMK) yang menjadi acuan utama penilaian dan pengembangan kompetensi Anda selama semester ini. CPMK-1 berfokus pada penguasaan konsep dan metode Data Mining secara mendalam. Mahasiswa dituntut untuk tidak hanya mengenal algoritma atau library Python, tetapi mampu menganalisis asumsi matematis dan statistik di balik setiap pendekatan, mengidentifikasi kelebihan dan keterbatasan masing-masing metode, serta menentukan kondisi optimal penggunaannya dalam berbagai skenario data. Analisis ini mencakup perkembangan terkini seperti advanced tabular learning, graph neural networks, hingga self-supervised learning, dengan pertimbangan trade-off antara akurasi, skalabilitas, dan interpretabilitas model.

Sementara itu, CPMK-2 menuntut kemampuan analisis literatur secara kritis sesuai standar penelitian tingkat magister. Membaca paper internasional tidak lagi bersifat pasif, melainkan sebuah proses evaluatif yang memeriksa kejelasan perumusan masalah, ketajaman research gap, kesesuaian metodologi, rigoritas eksperimen, serta kekuatan evidence yang mendukung klaim kontribusi ilmiah. Evaluasi juga mencakup pemeriksaan terhadap validitas internal dan eksternal, batasan studi, potensi bias, serta konsistensi logika dari hipotesis hingga implikasi praktis. Kemampuan ini menjadi prasyarat mutlak sebelum Anda memasuki tahap critical review paper di pertemuan ke-8 dan penyusunan proposal penelitian mandiri.

Dampak langsung dari penekanan ganda ini pada pertemuan awal adalah transformasi pola pikir dari konsumen informasi menjadi peneliti aktif. Alih-alih sekadar mengumpulkan daftar teknik atau benchmark performa, Anda mulai dilatih untuk membaca struktur paper sebagai peta riset yang terstruktur. Pemahaman landscape modern yang kita singgung di slide sebelumnya—termasuk pertanyaan kritis mengenai apakah metode baru hanya memindahkan beban komputasi tanpa menambah nilai ilmiah—berfungsi sebagai lensa analitis. Landasan inilah yang akan menjadi kerangka kerja baku untuk critical review, ablation study, error analysis, dan akhirnya mengarah pada penyusunan research project yang berorientasi pada publikasi conference terindeks Scopus.

### Inti yang Harus Ditekankan

- CPMK-1 menekankan analisis kritis terhadap asumsi, trade-off, dan kondisi penggunaan metode data mining, bukan sekadar implementasi teknis atau black-box modeling.
- CPMK-2 menuntut evaluasi menyeluruh terhadap alur penelitian: dari perumusan masalah, identifikasi gap, validitas eksperimen, hingga bukti kontribusi ilmiah yang dapat direplikasi.
- Pertemuan ini berfungsi sebagai jembatan konseptual yang mengubah mindset mahasiswa dari penerima materi menjadi peneliti aktif yang siap membaca paper secara struktural dan merancang proyek berbasis evidence.

### Transisi ke Slide Berikutnya

Dengan pemahaman bahwa analisis konseptual dan evaluasi literatur merupakan pondasi utama, langkah selanjutnya adalah menerjemahkan wawasan tersebut ke dalam bentuk konkret berupa proyek penelitian. Mari kita lihat bagaimana ruang lingkup, jenis karya ilmiah yang diperbolehkan, serta langkah awal yang harus Anda lakukan minggu ini untuk memulai perjalanan penelitian ini.

---

## Slide 014 - Research Project dalam Mata Kuliah Ini

### Narasi

Pada pertemuan ini, kita akan membahas secara eksplisit bagaimana proyek penelitian dirancang dan dieksekusi sepanjang semester mata kuliah ini. Sebagaimana telah disinggung pada pembahasan sebelumnya mengenai keterkaitan dengan CPMK-1 dan CPMK-2, fokus pembelajaran tidak lagi sekadar menguasai algoritma atau metode data mining secara teknis, melainkan melatih pola pikir peneliti. Luaran utama yang ditargetkan dari aktivitas ini adalah sebuah naskah paper penelitian yang kualitasnya diarahkan untuk dipublikasikan pada konferensi internasional terindeks Scopus. Standar ini sengaja ditetapkan karena pada jenjang magister, kemampuan menghasilkan kontribusi ilmiah yang dapat dipertanggungjawabkan secara akademis menjadi kompetensi inti yang harus dikuasai.

Untuk mencapai target tersebut, mahasiswa diberikan fleksibilitas dalam menentukan bentuk penelitian yang sesuai dengan minat dan kapasitas masing-masing. Beberapa bentuk penelitian yang diperbolehkan mencakup comparative study untuk membandingkan kinerja atau karakteristik beberapa pendekatan secara sistematis; method improvement yang berfokus pada modifikasi atau pengembangan algoritma agar lebih efektif pada kondisi tertentu; serta studi mendalam mengenai aspek-aspek seperti representasi data, benchmarking, explainability, robustness, generalization, atau efisiensi komputasi. Selain itu, evaluasi terhadap metode-metode emerging juga sangat didorong, misalnya penerapan foundation model, graph learning, temporal dan streaming data mining, maupun teknik privacy-preserving learning. Setiap bentuk penelitian ini menuntut desain eksperimen yang ketat, validitas statistik yang jelas, dan analisis ablation atau error analysis yang mendalam.

Sebagai langkah awal pada minggu pertama, tugas Anda adalah mengidentifikasi dua hingga tiga kandidat research area yang ingin Anda dalami selama satu semester penuh. Perlu ditekankan bahwa pada tahap ini, Anda belum perlu terpaku pada pemilihan metode spesifik atau dataset tertentu. Fokus utamanya adalah menemukan ruang lingkup masalah yang cukup luas untuk memberikan kebebasan eksplorasi, namun tetap terarah sehingga tidak kehilangan arah seiring berjalannya proses penelitian. Area yang dipilih sebaiknya memiliki kesenjangan literatur yang jelas, relevan dengan perkembangan terkini, dan memungkinkan pengumpulan evidence yang kuat melalui eksperimen terkontrol.

Pemilihan area penelitian ini akan menjadi fondasi kritis sebelum kita membedah perbedaan fundamental antara engineering problem dan research problem pada slide berikutnya. Memahami batas antara keduanya akan membantu Anda merumuskan research question yang tepat, menghindari jebakan implementasi semata, dan memastikan bahwa setiap klaim yang diajukan dalam paper nanti didukung oleh bukti empiris yang solid.

### Inti yang Harus Ditekankan

- Luaran akhir adalah paper penelitian berkualitas yang diarahkan ke konferensi internasional terindeks Scopus, bukan sekadar laporan praktikum atau tugas biasa.
- Bentuk penelitian sangat fleksibel, mencakup comparative study, method improvement, studi sifat non-fungsional (explainability, robustness, generalization, efisiensi), hingga evaluasi metode emerging.
- Minggu pertama hanya meminta identifikasi 2–3 candidate research area tanpa harus menentukan metode atau dataset terlebih dahulu.
- Area penelitian harus seimbang: cukup luas untuk eksplorasi metodologis, namun terarah agar fokus penelitian terjaga dan dapat diselesaikan tepat waktu.
- Tahap ini berfungsi sebagai jembatan konseptual untuk membedakan penelitian berbasis implementasi (engineering) dengan penelitian berbasis pengetahuan baru (research).

### Transisi ke Slide Berikutnya

Setelah Anda memiliki gambaran tentang area penelitian yang diminati, langkah selanjutnya adalah memastikan bahwa masalah yang Anda angkat benar-benar merupakan pertanyaan ilmiah yang layak diselidiki. Mari kita bedah secara konkret perbedaan mendasar antara engineering problem dan research problem, serta bagaimana cara merumuskannya agar memenuhi standar publikasi internasional.

---

## Slide 015 - Engineering Problem vs Research Problem

### Narasi

Pada slide sebelumnya, kita telah menetapkan bahwa luaran utama mata kuliah ini adalah penyusunan paper penelitian yang diarahkan ke konferensi internasional terindeks Scopus, dengan langkah awal mengidentifikasi dua hingga tiga area kandidat penelitian. Sebelum melangkah lebih jauh, sangat penting bagi mahasiswa pascasarjana untuk memahami perbedaan fundamental antara *engineering problem* dan *research problem*. Pembedaan ini bukan sekadar semantik, melainkan fondasi metodologis yang menentukan bagaimana Anda merumuskan pertanyaan, mendesain eksperimen, dan mengevaluasi hasil kerja di bidang data mining.

*Engineering problem* berorientasi pada pemecahan masalah teknis yang solusinya dapat langsung diimplementasikan dalam lingkungan produksi atau aplikasi nyata. Kriteria keberhasilannya bersifat pragmatis dan terukur secara operasional: sistem harus berjalan stabil, kebutuhan fungsional terpenuhi, dan performa sudah cukup memadai untuk digunakan. Sebagai contoh, ketika Anda diminta membangun dashboard prediksi penjualan menggunakan pipeline Python dengan pandas dan scikit-learn, fokus utamanya adalah memastikan preprocessing data, pemilihan model, tuning hyperparameter, dan integrasi antarmuka berjalan lancar sehingga output dapat dipertanggungjawabkan oleh stakeholder bisnis.

Di sisi lain, *research problem* menuntut penyelidikan sistematis untuk menghasilkan pengetahuan baru atau kontribusi akademik yang orisinal. Kriteria suksesnya tidak diukur dari kelancaran implementasi, melainkan dari keberadaan klaim yang dapat diuji secara empiris, ketersediaan *evidence* yang valid, serta kejelasan kontribusi ilmiah terhadap literatur yang ada. Contoh konkretnya adalah menyelidiki mengapa arsitektur model tertentu menunjukkan kinerja yang lebih robust pada dataset dengan pola *missing value* yang tidak seragam. Pertanyaan ini mendorong Anda untuk melakukan studi komparatif, analisis error, pengujian generalisasi, atau bahkan mengusulkan mekanisme imputasi atau representasi fitur baru yang dapat direproduksi.

Perbedaan kunci antara keduanya terletak pada orientasi pertanyaan dan tujuan akhir. *Engineering problem* menjawab “bagaimana membuat sesuatu bekerja” dengan penekanan pada efisiensi, skalabilitas, dan kepuasan pengguna. Sebaliknya, *research problem* menjawab “apa yang belum diketahui dan bagaimana membuktikannya”, yang menuntut desain eksperimen yang ketat, kontrol variabel, serta analisis statistik atau komputasional yang rigor. Dalam konteks penelitian tingkat magister, penekanan selalu diberikan pada kemampuan mengidentifikasi *research gap*, membangun baseline yang kuat, merumuskan hipotesis, dan membuktikan klaim melalui evidence yang dapat diverifikasi, bukan sekadar menghasilkan solusi teknis yang berfungsi.

### Inti yang Harus Ditekankan

- Mahasiswa harus mampu membedakan secara tegas antara tujuan praktis (*engineering*) dan tujuan akademik (*research*), karena pendekatan metodologis dan kriteria evaluasi keduanya berbeda.
- Keberhasilan penelitian diukur dari validitas klaim, kekuatan *evidence*, replikasi eksperimen, dan novelty kontribusi ilmiah, bukan hanya dari peningkatan akurasi metrik atau kelancaran kode.
- Perumusan masalah penelitian harus selalu mengarah pada pertanyaan yang dapat diuji secara empiris, mendukung desain eksperimen yang ketat, dan berpotensi mengisi celah dalam literatur data mining.

### Transisi ke Slide Berikutnya

Untuk memperjelas perbedaan konseptual tersebut, mari kita tinjau perbandingan spesifik antar aspek yang membedakan *engineering problem* dan *research problem* dalam bentuk tabel, yang akan membantu Anda memetakan arah penelitian dan ekspektasi evaluasi sepanjang semester ini.

---

## Slide 016 - Contoh Perbandingan Masalah Teknik dan Masalah Penelitian

### Narasi

Pada slide sebelumnya, kita telah membedah perbedaan konseptual antara masalah teknik dan masalah penelitian. Untuk memperjelas pemahaman tersebut, mari kita tinjau secara sistematis melalui lima dimensi yang tercantum dalam tabel ini. Dimulai dari bentuk pertanyaan, masalah teknik umumnya berorientasi pada implementasi praktis, misalnya “bagaimana membangun sistem klasifikasi email spam?”. Sebaliknya, masalah penelitian menuntut eksplorasi terhadap mekanisme atau hubungan kausal di balik fenomena tertentu, seperti “bagaimana pengaruh label noise terhadap peringkat pentingnya fitur?”. Pergeseran ini menandai peralihan dari sekadar menerapkan algoritma menjadi menyelidiki dinamika yang mempengaruhi perilaku model.

Dari perspektif luaran, solusi teknik menghasilkan artefak yang berfungsi penuh, seperti pipeline preprocessing, model yang sudah dilatih, atau aplikasi yang siap deploy. Dalam konteks penelitian akademik, luaran yang diharapkan adalah klaim ilmiah yang dapat diuji dan didukung oleh bukti empiris yang ketat. Hal ini secara langsung menentukan kriteria evaluasi. Evaluasi teknik cenderung mengutamakan metrik operasional seperti akurasi, latency, skalabilitas, atau kepuasan pengguna akhir. Sementara itu, evaluasi penelitian menekankan validitas metodologis, kemampuan generalisasi lintas dataset atau domain, serta signifikansi statistik dari temuan yang dihasilkan. Kontribusi pun memiliki arah yang berbeda: teknik berkontribusi pada pemecahan masalah industri atau penyempurnaan produk, sedangkan penelitian berkontribusi pada perluasan tubuh pengetahuan, pengembangan metode alternatif, atau insight teoritis yang belum tereksplorasi.

Aspek risiko juga memerlukan penanganan yang berbeda. Kegagalan dalam proyek teknik biasanya berarti ketidakmampuan memenuhi spesifikasi fungsional atau target bisnis. Dalam penelitian, risiko utamanya bersifat epistemik, yaitu ketidakmampuan membuktikan hipotesis, hasil yang tidak menunjukkan signifikansi, atau ketiadaan novelty dibandingkan state-of-the-art. Karena itu, desain eksperimen yang rigor, pemilihan baseline yang representatif, serta penggunaan teknik seperti ablation study dan error analysis menjadi komponen wajib untuk memitigasi risiko tersebut. Mata kuliah ini secara eksplisit menekankan pembentukan pola pikir berbasis research problem. Kemampuan mengimplementasikan stack tools seperti pandas, scikit-learn, atau Matplotlib memang menjadi fondasi, namun penekanan utama pada jenjang magister ini adalah bagaimana Anda merumuskan inquiry yang layak diteliti, menyusun evidence yang valid, dan menghasilkan kontribusi ilmiah yang bermakna bagi komunitas data mining.

### Inti yang Harus Ditekankan

- Pergeseran fokus dari “bagaimana membangun” (engineering) ke “bagaimana pengaruh/mengapa” (research) menentukan seluruh alur metodologi, mulai dari perancangan eksperimen hingga interpretasi hasil.
- Luaran penelitian bukan sekadar kode atau model yang berjalan, melainkan klaim ilmiah yang divalidasi melalui evidence kuantitatif, uji signifikansi, dan analisis robustness/generalization.
- Risiko penelitian bersifat epistemik (gagal membuktikan klaim atau tidak ada novelty), sehingga memerlukan baseline yang kuat, kontrol variabel yang ketat, dan strategi fallback analitik yang terstruktur.
- Kompetensi inti yang harus dikuasai mahasiswa S2 adalah kemampuan merumuskan pertanyaan penelitian yang tajam dan menjawabnya dengan standar evidensi akademik, bukan hanya keahlian teknis implementasi.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan mendasar dalam setiap aspek, langkah selanjutnya adalah menerjemahkan wawasan ini ke dalam praktik penelitian nyata. Kita akan beralih ke cara merumuskan research problem dan mengidentifikasi research gap secara sistematis, termasuk kerangka berpikir yang membantu Anda menemukan celah literatur yang layak untuk dieksplorasi lebih lanjut.

---

## Slide 017 - Merumuskan Research Problem dan Research Gap

### Narasi

Setelah membedakan secara tegas antara masalah teknik yang berorientasi pada pembangunan sistem fungsional dan masalah penelitian yang berorientasi pada pembentukan pengetahuan baru, kita kini masuk ke tahap operasionalisasi: merumuskan research problem dan mengidentifikasi research gap. Research problem bukan sekadar keinginan untuk meningkatkan akurasi model atau mempercepat komputasi, melainkan sebuah pernyataan yang menyoroti fenomena, anomali, atau keterbatasan mendasar yang belum berhasil dipecahkan oleh state-of-the-art saat ini. Dalam konteks data mining tingkat magister, ini berarti Anda harus mampu menunjukkan bahwa metode yang ada memiliki kelemahan struktural, bias implisit, atau asumsi statistik yang tidak lagi relevan terhadap karakteristik data modern.

Research gap merupakan konsekuensi logis dari identifikasi tersebut, yaitu kesenjangan spesifik antara apa yang telah dipublikasikan atau diterapkan versus apa yang seharusnya diketahui atau dicapai. Celah ini tidak muncul secara kebetulan, melainkan ditemukan melalui proses kurasi literatur yang kritis. Untuk memetakannya, gunakan kerangka berpikir sistematis yang tercantum pada slide: tinjau kembali hasil-hasil penelitian sebelumnya apakah sudah mencapai plateau performa atau justru menghasilkan trade-off yang tidak diinginkan? Identifikasi keterbatasan pada metode atau dataset yang digunakan, misalnya dominasi data sintetis atau ketiadaan representasi kelas minoritas. Evaluasi asumsi matematis atau mekanistik yang belum diuji di lingkungan nyata, serta amati pola perilaku data yang masih belum terjelaskan secara empiris. Terakhir, pertimbangkan kebutuhan domain spesifik yang belum terpenuhi oleh solusi generik.

Proses penyaringan ini akan menghasilkan output konkret pada tahap awal penelitian: dua hingga tiga kandidat area penelitian yang paling menjanjikan. Dari kandidat tersebut, pilih satu permasalahan yang layak diteliti berdasarkan ketersediaan data, kompleksitas komputasi, dan potensi kontribusi ilmiahnya. Tahap ini juga sekaligus menentukan arah literatur yang perlu Anda baca secara mendalam; Anda tidak lagi membaca secara acak, melainkan melakukan targeted literature review untuk memperkuat posisi gap dan membangun baseline yang kuat sebelum merancang eksperimen.

### Inti yang Harus Ditekankan

- Research problem harus bersifat analitis dan berbasis bukti, bukan sekadar permintaan teknis atau peningkatan metrik tanpa justifikasi ilmiah.
- Research gap adalah ruang kosong yang terdefinisi jelas antara kondisi eksisting dan kebutuhan pengetahuan baru, sehingga novelty penelitian dapat dibuktikan secara empiris.
- Penggunaan kerangka pertanyaan sistematis (evaluasi prior work, batasan metode/dataset, asumsi, perilaku data, kebutuhan domain) wajib dilakukan untuk mempersempit fokus menjadi kandidat area penelitian yang feasible dan berkontribusi signifikan.

### Transisi ke Slide Berikutnya

Sebagai kelanjutan alami dari pemetaan masalah dan kesenjangan ini, kita akan menerjemahkan keduanya ke dalam bentuk yang lebih terstruktur dan dapat diuji, yaitu merumuskan Research Question yang spesifik serta Hipotesis yang dapat divalidasi melalui eksperimen data mining.

---

## Slide 018 - Research Question dan Hipotesis

### Narasi

Setelah pada slide sebelumnya kita berhasil memetakan research problem dan mengidentifikasi research gap dari tinjauan literatur, langkah metodologis berikutnya adalah menerjemahkan kesenjangan tersebut menjadi sebuah pertanyaan penelitian yang konkret dan terstruktur. Inilah fungsi utama dari Research Question atau RQ. Dalam konteks penelitian data mining jenjang magister, RQ bukan sekadar pertanyaan exploratif, melainkan pernyataan tanya yang jelas, terarah, dan secara eksplisit dapat dijawab melalui analisis data serta eksperimen komputasional. RQ berperan sebagai kompas desain penelitian yang menentukan arah pemilihan dataset, algoritma, teknik preprocessing, hingga metrik evaluasi yang akan digunakan.

Sebuah RQ yang berkualitas harus memenuhi empat karakteristik kunci. Pertama, spesifik dan terukur, sehingga menghindari ambiguitas dan memungkinkan pengukuran kuantitatif yang presisi. Kedua, harus memiliki keterkaitan langsung dengan research gap yang telah Anda temukan; jika tidak, penelitian kehilangan urgensi dan relevansi ilmiahnya. Ketiga, RQ harus dapat diuji secara empiris, artinya jawaban atas pertanyaan tersebut harus dapat diverifikasi melalui data nyata dan prosedur eksperimen yang reproducible. Keempat, RQ harus memberikan arahan operasional untuk memilih dataset, metode, dan metrik yang tepat. Tanpa keempat ciri ini, penelitian cenderung terjebak pada deskripsi statistik biasa tanpa menghasilkan kontribusi metodologis atau teoretis yang bermakna.

Paralel dengan perumusan RQ, kita juga wajib merancang hipotesis. Dalam penelitian data mining, hipotesis bukanlah dugaan sembarangan, melainkan pernyataan awal yang bersifat falsifiable atau dapat dibantah/didukung oleh bukti empiris dari hasil eksperimen. Hipotesis menjembatani logika penelitian dengan implementasi teknis di lingkungan pemrograman seperti Python, Jupyter Notebook, atau Google Colab. Ketika Anda menyiapkan baseline menggunakan scikit-learn atau library advanced tabular learning, hipotesis akan mendefinisikan variabel independen (misalnya variasi arsitektur model, strategi sampling, atau teknik feature engineering) dan variabel dependen (metrik seperti F1-score, AUC-ROC, inference latency, atau stabilitas cross-validation) yang akan diukur dan dibandingkan.

Pola perumusan RQ dalam riset data mining modern umumnya mengikuti struktur kondisional atau komparatif untuk memastikan kedalaman analisis. Beberapa contoh pola yang efektif antara lain: "Seberapa besar peningkatan generalisasi jika kita menerapkan teknik domain adaptation pada data yang mengalami covariate shift?", "Kondisi seperti apa yang membuat metode ensemble lebih unggul daripada single-model pada dataset dengan noise tinggi atau class imbalance ekstrem?", atau "Apakah interpretasi model berubah ketika distribusi data bergeser antar-kawasan geografis atau periode waktu?". Pola-pola ini memaksa peneliti untuk tidak hanya melaporkan angka performa, tetapi juga menjelaskan mekanisme di balik kinerja model. Hal ini menjadi fondasi kritis sebelum kita mengevaluasi apakah perbaikan numerik yang dihasilkan benar-benar setara dengan kontribusi ilmiah, topik yang akan kita bedah secara mendalam pada slide berikutnya mengenai perbedaan antara performance improvement versus scientific contribution.

### Inti yang Harus Ditekankan

- RQ harus spesifik, terukur, terkait langsung dengan research gap, dan dapat diuji secara empiris melalui data dan eksperimen.
- Hipotesis bersifat falsifiable dan berfungsi sebagai jembatan logis antara pertanyaan penelitian dengan implementasi teknis serta definisi variabel eksperimen.
- Pola RQ komparatif/kondisional memastikan bahwa setiap eksperimen menghasilkan insight mekanistik, bukan sekadar pelaporan angka metrik.
- Perumusan RQ dan hipotesis yang kuat secara otomatis mengarahkan pilihan dataset, metode, dan metrik evaluasi yang konsisten dan reproducible.

### Transisi ke Slide Berikutnya

Dengan RQ dan hipotesis yang telah dirumuskan secara ketat, kita siap memasuki fase perancangan eksperimen. Namun, keberhasilan penelitian tidak diukur hanya dari kenaikan angka metrik pada confusion matrix atau report. Pada slide berikutnya, kita akan membedah perbedaan fundamental antara sekadar performance improvement versus scientific contribution, serta kriteria objektif yang menentukan apakah temuan Anda layak dianggap sebagai kemajuan pengetahuan bagi komunitas ilmiah.

---

## Slide 019 - Performance Improvement vs Scientific Contribution

### Narasi

Dalam penelitian data mining jenjang magister, pembedaan antara sekadar peningkatan performa dan kontribusi ilmiah menjadi fondasi utama dalam menilai kualitas dan kelayakan publikasi sebuah karya. Peningkatan performa merujuk pada pencapaian angka metrik evaluasi yang lebih tinggi dibandingkan baseline atau metode referensi. Contoh konkretnya adalah ketika nilai F1-Score suatu model naik dari 0,90 menjadi 0,92 pada set uji tertentu. Secara permukaan, kenaikan numerik ini memang terdengar menjanjikan, namun dalam ekosistem akademik, skor yang lebih tinggi saja belum cukup untuk mengklaim sebuah temuan sebagai kontribusi ilmiah yang valid.

Kontribusi ilmiah menuntut adanya penambahan pengetahuan, metode, konsep, teori, atau insight baru yang dapat digunakan kembali oleh peneliti lain. Fokusnya bergeser dari “berapa angkanya” menjadi “mengapa dan bagaimana hal itu bisa terjadi”. Misalnya, jika sebuah pendekatan terbukti unggul secara konsisten pada data dengan ketidakseimbangan kelas yang ekstrem, maka kontribusi ilmiahnya terletak pada penjelasan mekanisme di balik keunggulan tersebut, bagaimana model menangani bias kelas minoritas, serta kondisi batas di mana pendekatan itu masih efektif atau justru mengalami degradasi. Insight semacam ini memungkinkan komunitas peneliti membangun studi lanjutan tanpa harus mengulang proses trial-and-error dari nol.

Untuk memastikan bahwa hasil eksperimen benar-benar memenuhi standar kontribusi ilmiah, kita harus mengajukan serangkaian pertanyaan kritis yang menjadi tolok ukur evaluasi paper internasional. Pertama, apakah peningkatan tersebut konsisten? Konsistensi harus dibuktikan melalui validasi silang, pengulangan eksperimen dengan seed berbeda, atau penggunaan multiple train-test splits. Kedua, apakah peningkatan tersebut signifikan secara statistik? Kenaikan metrik wajib diuji menggunakan uji statistik seperti paired t-test atau Wilcoxon signed-rank test untuk menolak hipotesis nol bahwa perbedaan performa terjadi secara kebetulan. Ketiga, apakah penyebab peningkatan dapat dijelaskan? Di sinilah analisis ablasi dan error analysis berperan vital untuk mengisolasi komponen yang memberikan dampak nyata terhadap performa model. Keempat, apakah hasil dapat digeneralisasi? Model harus divalidasi pada berbagai distribusi data, domain, atau skenario dunia nyata untuk memastikan robustness-nya. Kelima, apakah komunitas ilmiah memperoleh hal yang sebelumnya tidak diketahui? Sebuah paper harus menawarkan novelty yang jelas, baik berupa arsitektur baru, strategi preprocessing yang inovatif, maupun pemahaman teoritis yang mengubah perspektif kita terhadap masalah tertentu.

Pembahasan ini secara langsung melanjutkan landasan dari slide sebelumnya tentang perumusan Research Question dan Hipotesis. Ketika Anda telah merumuskan RQ yang spesifik dan hipotesis yang dapat diuji, langkah selanjutnya adalah mendesain eksperimen yang mampu menjawab pertanyaan-pertanyaan kritis di atas, bukan sekadar mengejar skor tertinggi. Tanpa kerangka evaluasi yang rigor, bahkan kenaikan akurasi yang tampak impresif pun berisiko jatuh ke dalam jebakan performa semu, sebagaimana akan kita bedah secara konkret dalam ilustrasi kasus pada slide berikutnya.

### Inti yang Harus Ditekankan

- Peningkatan metrik (F1, Accuracy, dll.) hanyalah indikator awal; nilai ilmiah sesungguhnya terletak pada kemampuan menjelaskan mekanisme, kausalitas, dan batasan penerapan model.
- Standar penelitian S2 menuntut pembuktian konsistensi, signifikansi statistik, kejelasan kausalitas (melalui ablasi & error analysis), dan daya generalisasi lintas dataset atau domain.
- Novelty dan reusable insight bagi komunitas peneliti adalah tolok ukur utama apakah sebuah eksperimen layak dipublikasikan sebagai kontribusi ilmiah, bukan sekadar laporan benchmarking.

### Transisi ke Slide Berikutnya

Mari kita lihat secara konkret bagaimana fokus berlebihan pada peningkatan metrik tanpa analisis mendalam dapat menghasilkan klaim yang lemah, melalui ilustrasi kasus pada slide berikutnya.

---

## Slide 020 - Ilustrasi: Accuracy Naik tetapi Kontribusi Lemah

### Narasi

Mari kita lihat ilustrasi konkret yang sering muncul dalam penulisan penelitian data mining tingkat lanjut. Bayangkan sebuah naskah paper yang mengklaim bahwa model neural network berhasil mencapai akurasi sebesar 98%, sementara baseline Random Forest hanya menghasilkan 96%. Secara permukaan, angka ini tampak menjanjikan dan seolah menunjukkan kemajuan signifikan. Namun, jika kita menelaah metodologi eksperimennya lebih dalam, klaim tersebut justru sangat rapuh. Pertama, dataset yang digunakan terlalu kecil, sehingga risiko overfitting sangat tinggi dan hasil tidak dapat digeneralisasi ke populasi yang lebih luas. Kedua, evaluasi hanya dilakukan pada satu dataset tunggal, padahal validitas ilmiah menuntut konsistensi across multiple benchmarks atau domain data yang berbeda. Ketiga, tidak ada ablasi komponen untuk menguji kontribusi masing-masing modul dalam arsitektur neural network, sehingga kita tidak tahu bagian mana yang benar-benar memberi dampak. Keempat, absence of error analysis membuat peneliti tidak memahami pola kesalahan model, apakah salah prediksi terjadi pada kelas minoritas, fitur noisy, atau boundary decision yang ambigu. Kelima, tidak ada perbandingan biaya komputasi atau latency, padahal dalam praktik industri dan riset terapan, efisiensi sama pentingnya dengan akurasi. Terakhir, klaim kemenangan neural network tidak disertai penjelasan mekanistik mengapa ia menang—apakah karena kapasitas representasi yang lebih tinggi, kemampuan menangani non-linearitas, atau sekadar lucky initialization? Tanpa jawaban atas pertanyaan-pertanyaan kritis ini, peningkatan akurasi sebesar 2% tersebut hanyalah sebuah performance improvement semu, bukan scientific contribution yang layak dipublikasikan di venue bereputasi. Hal ini selaras dengan diskusi pada slide sebelumnya mengenai syarat-syarat pembeda antara sekadar menaikkan angka metrik versus memberikan pengetahuan baru kepada komunitas ilmiah.

### Inti yang Harus Ditekankan

- Peningkatan metrik numerik (seperti akurasi) belum otomatis menjadi kontribusi ilmiah tanpa validasi yang ketat, reproducible, dan kontekstual.
- Riset magister wajib mencakup analisis mendalam: ablasi komponen, error analysis, uji multi-dataset, serta pertimbangan kompleksitas komputasi.
- Klaim keunggulan model harus didukung oleh pemahaman kausal atau mekanistik, bukan hanya pengamatan korelasional pada satu angka akhir.
- Tanpa eksplanasi "mengapa" dan "pada kondisi apa" metode bekerja, temuan hanya bersifat deskriptif dan sulit direplikasi atau dikembangkan oleh peneliti lain.

### Transisi ke Slide Berikutnya

Untuk menghindari jebakan klaim lemah seperti contoh tadi, kita perlu mempelajari bagaimana merumuskan pernyataan ilmiah yang tepat, kontekstual, dan transparan terhadap keterbatasan. Pada slide berikutnya, kita akan membedah pola-pola klaim ilmiah yang kuat versus klaim yang lemah, lengkap dengan contoh kalimat yang bisa langsung diadaptasi dalam penulisan paper Anda.

---

## Slide 021 - Pola Klaim Ilmiah yang Kuat vs Lemah

### Narasi

Pada slide ini, kita beralih dari ilustrasi masalah pada slide sebelumnya—di mana peningkatan akurasi semata tanpa analisis mendalam hanya menghasilkan klaim kontribusi yang lemah—kepada kerangka konkret untuk membedakan pola klaim ilmiah yang kuat versus lemah dalam publikasi data mining tingkat lanjut. Di jenjang magister, kemampuan merumuskan klaim bukan sekadar menyatakan bahwa model baru lebih baik, melainkan mendefinisikan secara eksplisit kondisi batas, mekanisme penyebab, validasi statistik, dan trade-off yang relevan terhadap state-of-the-art.

Mari kita bedah empat pasangan klaim yang disajikan dalam tabel ini. Klaim lemah cenderung bersifat generik dan absolut, seperti “metode kami lebih baik” atau “akurasi meningkat”. Pernyataan semacam ini tidak memberikan informasi apa pun kepada reviewer maupun pembaca mengenai mengapa keunggulan itu terjadi, di mana batasan penerapannya, atau seberapa robust temuan tersebut. Sebaliknya, klaim yang lebih kuat selalu menyertakan konteks spesifik dan justifikasi empiris. Misalnya, klaim keunggulan metode dikaitkan langsung dengan karakteristik dataset tertentu, seperti jumlah sampel terbatas atau dominansi fitur kategorikal, disertai penjelasan mekanistik mengapa struktur model tersebut cocok dengan kondisi tersebut.

Pada dimensi evaluasi, klaim yang lemah hanya mengandalkan metrik tunggal seperti akurasi, padahal dalam banyak skenario data mining, akurasi bisa sangat misleading jika kelas tidak seimbang atau jika terdapat bias sampling. Klaim yang kuat akan melaporkan konsistensi performa melalui metrik yang lebih informatif seperti F1-score atau AUC-ROC, memvalidasinya pada minimal lima dataset heterogen, dan membuktikan signifikansi statistik menggunakan uji seperti paired t-test atau Wilcoxon signed-rank test. Hal ini menjawab pertanyaan mendasar apakah peningkatan yang diamati benar-benar berasal dari intervensi metodologis, atau hanya akibat noise acak.

Selain itu, klaim ilmiah yang matang juga mengakui trade-off dan keterbatasan. Pengakuan bahwa model deep tabular unggul dalam menangkap interaksi non-linear antar fitur harus diimbangi dengan transparansi mengenai beban komputasi, kebutuhan data training yang besar, atau risiko overfitting. Demikian pula, pernyataan “hasil menunjukkan performa terbaik” menjadi sangat lemah jika tidak diuji terhadap skenario dunia nyata seperti missing value yang tidak acak (MNAR), drift distribusi, atau adversarial perturbation. Dengan mengungkap kapan dan mengapa keunggulan performa menghilang, peneliti justru memperkuat kredibilitas karya mereka karena menunjukkan pemahaman holistik terhadap dinamika data. Inti dari pesan slide ini adalah bahwa ilmuwan data dan peneliti yang kompeten tidak berhenti pada pelaporan angka mentah. Mereka wajib menjelaskan kondisi operasional, asumsi implisit, dan batasan generalisasi dari setiap temuan. Dalam konteks penulisan paper internasional terindeks Scopus, paragraf discussion dan conclusion harus dibangun di atas fondasi ini: klaim didukung evidence, dikontekstualisasikan, dan dibatasi secara jelas agar dapat direplikasi dan dikembangkan oleh komunitas riset selanjutnya.

### Inti yang Harus Ditekankan

- Klaim ilmiah yang kuat harus spesifik, kontekstual, dan didukung bukti empiris (multi-dataset, signifikansi statistik, metrik yang tepat seperti F1/AUC).
- Selalu sertakan trade-off dan keterbatasan model sebagai bagian integral dari kontribusi, bukan sebagai kelemahan yang disembunyikan atau diabaikan.
- Hindari klaim absolut atau generik; ganti dengan pernyataan yang menjelaskan “kapan”, “mengapa”, dan “sejauh mana” sebuah metode bekerja optimal.
- Pelaporan angka saja tidak cukup; penjelasan kondisi batas, mekanisme penyebab, dan analisis error adalah standar wajib untuk publikasi bereputasi di jenjang S2.

### Transisi ke Slide Berikutnya

Untuk melatih kemampuan membedakan klaim kuat dan lemah secara sistematis, kita akan menerapkan kerangka critical review terhadap paper internasional. Slide berikutnya akan membahas struktur penilaian paper yang akan kita gunakan sepanjang semester, mulai dari identifikasi research gap hingga evaluasi reproducible experimental design, sehingga Anda dapat langsung menerapkannya dalam tugas tinjauan literatur dan pengembangan proyek penelitian mandiri.

---

## Slide 022 - Critical International Paper Review sebagai Strategi Belajar

### Narasi

Setelah pada slide sebelumnya kita membedah karakteristik klaim ilmiah yang kuat versus klaim yang lemah, langkah logis selanjutnya adalah melatih kemampuan evaluasi tersebut secara langsung melalui literatur primer. Di sinilah strategi *Critical International Paper Review* menjadi instrumen pembelajaran yang sangat vital. Membaca dan mengkritisi paper internasional bukan sekadar kewajiban akademis, melainkan fondasi utama untuk mengembangkan standar berpikir ilmiah yang ketat. Melalui proses review kritis, mahasiswa terlatih membaca penelitian sesuai kaidah ilmiah, menemukan kesenjangan antara klaim yang diajukan penulis dengan bukti empiris yang sebenarnya disajikan, serta membangun pola pikir kritis yang akan menjadi dasar kokoh dalam merancang riset mandiri. Kemampuan ini menjadi pembeda utama antara praktisi yang hanya menjalankan algoritma dengan peneliti yang mampu berkontribusi secara metodologis.

Untuk memastikan review dilakukan secara sistematis, komprehensif, dan dapat direplikasi oleh siapa saja, semester ini kita akan mengadopsi struktur evaluasi berstandar internasional yang terdiri dari empat belas poin kunci. Evaluasi dimulai dengan menelusuri *research context* untuk memetakan latar belakang masalah, dilanjutkan dengan identifikasi presisi terhadap *research gap* atau celah pengetahuan yang belum terjawab. Dari celah tersebut, kita akan menilai kejelasan dan keterukuran *research question* yang dirumuskan. Selanjutnya, fokus beralih ke teknis penelitian: mengkaji *proposed method*, validitas pemilihan *dataset*, serta relevansi dan kekuatan *baseline* yang digunakan sebagai pembanding. Desain eksperimen dan metrik evaluasi harus diperiksa ketat terhadap potensi bias, kemudian diikuti dengan analisis mendalam terhadap *results and evidence*. Poin lanjutan mencakup pemeriksaan *ablation study* atau uji sensitivitas untuk membuktikan kontribusi masing-masing komponen model, hingga penilaian objektif terhadap *limitations*, tingkat *reproducibility*, *scientific contribution*, dan akhirnya mengidentifikasi *research opportunity* untuk pengembangan studi lanjutan.

Penerapan struktur ini akan dilakukan secara intensif melalui aktivitas diskusi kelas, di mana kita akan membahas contoh paper data mining modern secara bertahap. Setiap sesi, mahasiswa akan diajak mengidentifikasi keempat belas elemen tersebut pada artikel yang sedang dikaji, sehingga pemahaman teoritis dapat langsung diterjemahkan ke dalam praktik evaluatif yang konkret. Pendekatan ini juga berfungsi sebagai jembatan alami menuju kerangka metodologi yang lebih terstruktur, karena setiap poin review akan menyatu menjadi alur kerja ilmiah yang koheren dan saling terkait. Pada slide berikutnya, kita akan melihat bagaimana seluruh proses evaluasi, penemuan gap, dan perancangan eksperimen ini tertuang dalam sebuah alur metodologi penelitian data mining yang sehat, mulai dari perumusan masalah hingga penyusunan naskah ilmiah siap publikasi.

### Inti yang Harus Ditekankan

- Review paper internasional adalah latihan wajib untuk membedakan klaim ilmiah yang kuat dari yang lemah, sekaligus melatih ketajaman akademik jenjang magister.
- Struktur 14 poin evaluasi memberikan kerangka baku yang memastikan setiap aspek penelitian (dari konteks, metode, eksperimen, hingga reproduktibilitas) diperiksa secara kritis dan transparan.
- Kemampuan mengidentifikasi *research gap* dan *research opportunity* dari paper terbitan merupakan keterampilan inti yang langsung diterapkan dalam proyek akhir semester.

### Transisi ke Slide Berikutnya

Struktur review yang baru saja kita bahas bukanlah kumpulan poin yang berdiri sendiri, melainkan bagian integral dari alur penelitian yang terarah. Mari kita lihat bagaimana keempat belas elemen evaluasi ini tersusun rapi menjadi metodologi penelitian data mining yang sehat dan siap dipandu selama minggu pertama hingga keenam belas perkuliahan.

---

## Slide 023 - Metodologi Penelitian Data Mining

### Narasi

Setelah sebelumnya kita membedah struktur sebuah paper internasional melalui aktivitas critical review, kini kita akan mengonversi pemahaman tersebut menjadi sebuah peta jalan penelitian yang terstruktur. Alur yang ditampilkan pada slide ini bukan sekadar daftar tugas administratif, melainkan metodologi inti yang harus diikuti secara konsisten sepanjang semester. Penelitian data mining tingkat magister menuntut pendekatan yang sistematis, dimulai dari identifikasi Research Problem yang jelas, terukur, dan relevan dengan perkembangan terkini. Masalah ini kemudian dipetakan melalui Literature Review untuk memastikan bahwa kontribusi yang diusulkan benar-benar mengisi celah pengetahuan yang belum terjawab. Dari sinilah Research Gap muncul secara organik, yang kemudian diturunkan menjadi Research Question yang spesifik dan Hypothesis yang dapat diuji secara empiris.

Tahap selanjutnya berfokus pada data dan arsitektur metode. Pemilihan Dataset harus selaras secara langsung dengan hipotesis, dan tidak boleh dilewatkan tahap Exploratory Data Analysis (EDA). Pada jenjang S2, EDA berfungsi ganda: sebagai alat validasi asumsi statistik, deteksi skewness atau missing patterns, serta sebagai dasar untuk merancang strategi preprocessing dan feature engineering yang tepat sebelum model dijalankan. Setelah data siap, peneliti wajib membangun Baseline menggunakan algoritma standar atau model referensi yang diakui di komunitas ilmiah. Hanya setelah baseline terukur dan stabil, Proposed Method dapat diperkenalkan. Langkah ini mencegah klaim kinerja yang berlebihan dan memberikan titik pembanding yang objektif bagi reviewer maupun pembaca.

Fase eksperimental dirancang untuk menguji hipotesis secara ketat. Experimental Design menentukan bagaimana variabel dikontrol, bagaimana train-test split atau cross-validation dilakukan, dan metrik apa yang paling representatif. Eksekusi Experiment menghasilkan Evidence berupa angka, grafik, dan log komputasi. Namun, penelitian yang berkualitas tidak berhenti pada hasil terbaik saja. Analisis mendalam terhadap Failure Cases, uji Robustness terhadap noise atau distribusi data yang berubah, serta evaluasi generalisasi menjadi pembeda antara proyek akademis biasa dan karya ilmiah yang layak publikasi. Temuan ilmiah yang solid inilah yang kemudian dirangkum menjadi naskah Paper. Perlu ditekankan bahwa alur ini bersifat iteratif; temuan di tengah eksperimen sering kali mengharuskan peneliti kembali menyempitkan gap, menyesuaikan hipotesis, atau bahkan merombak desain eksperimen. Kerangka inilah yang akan menjadi tulang punggung pengembangan proyek riset individu maupun tim Anda selama minggu 1 hingga 16.

### Inti yang Harus Ditekankan

- Alur penelitian bersifat sistematis dan iteratif, bukan langkah linier kaku; setiap fase saling mempengaruhi dan memerlukan penyesuaian berdasarkan evidence yang terkumpul.
- Validitas klaim penelitian sangat bergantung pada pemilihan baseline yang kompetitif dan pelaksanaan EDA yang mendalam sebelum implementasi metode usulan.
- Analisis kegagalan (failure analysis) dan pengujian ketahanan (robustness testing) memiliki bobot ilmiah yang setara dengan pelaporan metrik akurasi atau F1-score utama.
- Seluruh komponen dalam alur ini merupakan standar wajib yang akan dievaluasi secara bertahap selama pengembangan proyek riset selama 16 minggu perkuliahan.

### Transisi ke Slide Berikutnya

Ketika masalah penelitian, hipotesis, dan metode telah ditetapkan, langkah kritis berikutnya adalah memastikan bahwa cara kita mengujinya benar-benar adil dan dapat dipercaya. Mari kita bedah lebih lanjut mengenai komponen-komponen yang membentuk Desain Eksperimen yang Valid, mulai dari penanganan dataset, teknik tuning, hingga metrik evaluasi yang diperlukan untuk menjamin reproduktibilitas hasil.

---

## Slide 024 - Desain Eksperimen yang Valid

### Narasi

Setelah menelusuri alur metodologi penelitian pada slide sebelumnya, kini kita memasuki tahap operasional yang menentukan kredibilitas temuan ilmiah Anda, yaitu desain eksperimen. Pada tingkat magister, klaim keunggulan suatu metode tidak dapat hanya didasarkan pada perbandingan angka performa di satu kondisi tunggal. Eksperimen harus dirancang secara ketat agar hasilnya bebas dari bias sistematis dan dapat dipertanggungjawabkan secara akademis. Komponen pertama dari eksperimen yang adil adalah pemilihan dataset yang benar-benar representatif terhadap research question. Hindari praktik memilih dataset semata-mata karena kemudahan akses atau karena secara inheren menguntungkan model yang Anda usulkan; relevansi kontekstual harus menjadi prioritas utama.

Konsistensi dalam preprocessing menjadi syarat mutlak yang tidak bisa dinegosiasikan. Seluruh metode yang dibandingkan, mulai dari baseline konvensional hingga proposed method, harus melewati pipeline preprocessing yang identik untuk mencegah bias artifak. Proses hyperparameter tuning juga harus dilakukan secara transparan dan adil, misalnya dengan menerapkan search strategy yang sama dan mendokumentasikan seluruh konfigurasi yang digunakan. Pembagian data train-test-split atau penerapan cross-validation wajib memastikan tidak terjadi kebocoran data (data leakage), khususnya pada tahap scaling, imputasi missing value, atau feature selection yang harus dilatih hanya pada subset training. Selain itu, pemilihan metrik evaluasi harus disesuaikan dengan karakteristik data, seperti penanganan class imbalance atau distribusi target yang miring.

Untuk memperkuat validitas statistik dan generalisasi, evaluasi eksperimen harus melampaui pelaporan metrik tunggal. Anda disarankan untuk melakukan uji statistical significance, seperti paired t-test atau Wilcoxon signed-rank test, serta melaporkan confidence interval guna menunjukkan rentang ketidakpastian performa. Penggunaan multiple dataset sangat dianjurkan agar kesimpulan tidak terjebak pada overfitting terhadap satu distribusi data tertentu. Lakukan pula ablation study untuk mengisolasi kontribusi setiap modul atau fitur dalam proposed method, sensitivity analysis untuk mengukur ketahanan model terhadap variasi parameter atau noise input, serta catat computational cost sebagai indikator efisiensi praktis. Terakhir, error atau failure analysis wajib dilakukan secara mendalam untuk memetakan pola kesalahan model dan memahami konteks kegagalan prediksinya.

Poin penutup yang paling fundamental dalam desain eksperimen adalah replikabilitas. Setiap langkah, dari seleksi data, transformasi fitur, hingga implementasi kode, harus didokumentasikan secara rinci sehingga peneliti lain dapat menjalankan ulang eksperimen Anda dan menghasilkan output yang konsisten. Tanpa kemampuan replikasi, sebuah penelitian data mining kehilangan nilai ilmiahnya. Dokumentasi yang rigor dan ketersediaan kode sumber merupakan standar wajib dalam publikasi berstandar internasional.

### Inti yang Harus Ditekankan

- Validitas eksperimen bergantung pada konsistensi preprocessing, fairness dalam tuning, dan pencegahan ketat terhadap data leakage.
- Evaluasi harus bersifat multidimensi: gunakan statistical significance, confidence interval, multiple datasets, ablation study, sensitivity analysis, dan error analysis.
- Replikabilitas adalah standar emas penelitian S2; desain eksperimen harus dapat dijalankan ulang oleh peneliti lain dengan hasil yang reproduktif.

### Transisi ke Slide Berikutnya

Dengan prinsip desain eksperimen yang adil, terkontrol, dan dapat direplikasi, langkah selanjutnya adalah menentukan fondasi konkret pengujian tersebut, yaitu pemilihan dataset yang relevan, establishment baseline yang kuat, serta penyesuaian metrik evaluasi yang tepat sesuai dengan karakteristik tugas data mining.

---

## Slide 025 - Dataset, Baseline, dan Metrik

### Narasi

Setelah menyusun kerangka desain eksperimen yang valid pada slide sebelumnya, langkah operasional berikutnya dalam metodologi penelitian adalah menetapkan fondasi empiris melalui pemilihan dataset, pembentukan baseline, dan penentuan metrik evaluasi. Pemilihan dataset tidak boleh didorong oleh keinginan untuk mencari data yang secara artifisial memudahkan metode baru mencapai skor tinggi, melainkan harus sepenuhnya relevan dengan research question yang ingin dijawab. Pada level magister, karakteristik data seperti distribusi kelas, sebaran fitur, tingkat noise, missing value pattern, dan skala sampel wajib dianalisis secara eksploratif sejak tahap awal. Pemahaman mendalam terhadap karakteristik ini akan memandu strategi preprocessing, seleksi algoritma, serta cara menafsirkan hasil evaluasi agar tidak terjebak pada bias statistik.

Dalam ekosistem evaluasi model, baseline berperan sebagai standar pembanding yang fundamental. Baseline yang baik bukanlah model yang sengaja dibuat lemah, melainkan metode yang sederhana, mudah direplikasi, namun tetap memberikan performa yang kuat dan stabil. Contoh yang umum dan disarankan meliputi Logistic Regression untuk klasifikasi biner/multikelas, Linear Regression untuk tugas regresi, Decision Tree untuk menangkap hubungan non-linear dengan interpretasi struktural, serta K-Means untuk clustering berbasis jarak Euclidean. Keberadaan baseline diperlukan untuk menguji klaim keunggulan metode baru secara objektif. Jika pendekatan inovatif hanya menunjukkan peningkatan marginal atau bahkan kalah dibandingkan baseline sederhana, maka kontribusi metodologis atau teoretisnya perlu ditinjau ulang.

Penentuan metrik evaluasi harus secara eksplisit disesuaikan dengan jenis tugas machine learning dan distribusi data yang dihadapi. Untuk klasifikasi, reliance pada accuracy saja sangat berisiko; peneliti harus melengkapi dengan precision, recall, F1-score, serta kurva ROC-AUC dan PR-AUC, terutama saat menghadapi class imbalance. Pada regresi, MAE memberikan gambaran error absolut yang robust terhadap outlier, RMSE menghukum error besar lebih berat, sedangkan R² mengukur proporsi varians target yang berhasil dijelaskan model. Untuk clustering, silhouette score menjadi indikator utama kohesi dan separasi cluster, sementara external validity metrics digunakan bila ground truth tersedia. Khusus anomaly detection, metrik seperti precision at k, AUC, dan recall pada kelas minoritas menjadi acuan utama mengingat dominasi instance normal dalam dataset.

Secara ringkas, metrik bukanlah sekadar angka pelengkap laporan, melainkan alat ukur yang harus selaras dengan pertanyaan penelitian dan realitas data. Pemilihan yang tepat akan mengubah output model menjadi bukti empiris yang dapat dipertanggungjawabkan secara akademis. Dengan memahami prinsip-prinsip pemilihan dataset, baseline, dan metrik ini, kita telah menyiapkan landasan yang kokoh untuk membahas bagaimana membangun perbandingan yang ketat dan transparan antar metode, yang akan menjadi inti pembahasan pada slide berikutnya.

### Inti yang Harus Ditekankan

- Dataset dipilih berdasarkan kesesuaian dengan research question dan memerlukan analisis karakteristik data awal yang komprehensif, bukan berdasarkan kemudahan memperoleh hasil yang menguntungkan.
- Baseline harus berupa metode sederhana namun kuat (seperti Logistic Regression, Decision Tree, atau K-Means) untuk membuktikan bahwa peningkatan performa benar-benar berasal dari kontribusi metode baru, bukan dari perbandingan yang tidak seimbang.
- Metrik evaluasi harus dipilih secara spesifik sesuai jenis tugas (klasifikasi, regresi, clustering, anomaly detection) dan karakteristik data, menghindari ketergantungan tunggal pada accuracy dan memperhatikan aspek imbalance serta interpretasi klinis/bisnis.

### Transisi ke Slide Berikutnya

Memahami dasar pemilihan dataset dan metrik hanyalah separuh dari proses evaluasi; langkah kritis berikutnya adalah memastikan bahwa seluruh perbandingan dilakukan secara ketat, transparan, dan bebas dari bias implementasi. Mari kita lanjutkan ke slide berikutnya untuk membahas prinsip strong baseline dan fair comparison dalam praktik penelitian data mining.

---

## Slide 026 - Strong Baseline dan Fair Comparison

### Narasi

Pada slide sebelumnya, kita telah menyepakati bahwa pemilihan dataset harus relevan dengan research question, baseline harus sederhana namun kuat, serta metrik evaluasi harus selaras dengan karakteristik data. Namun, keberadaan baseline saja tidak menjamin validitas eksperimen jika cara pembangunannya tidak dilakukan secara metodologis. Slide ini menekankan bahwa baseline haruslah kuat, bukan sekadar metode default yang dijalankan tanpa penyetelan. Dalam penelitian tingkat magister, klaim keunggulan suatu model baru sering kali muncul dari perbandingan dengan baseline yang sengaja dibuat lemah atau di-set pada konfigurasi factory-default. Hal ini dapat menimbulkan bias positif yang menyesatkan dan mengurangi validitas ilmiah dari temuan Anda. Baseline yang kuat berfungsi sebagai batas bawah yang realistis; jika metode usulan Anda hanya unggul tipis dibandingkan baseline yang sudah dioptimalkan, maka kontribusi inovasi tersebut perlu dikaji lebih dalam mengenai signifikansi praktis dan teoritisnya.

Untuk memastikan perbandingan yang adil, terdapat empat prinsip utama yang wajib diterapkan dalam setiap eksperimen data mining. Pertama, proses tuning hyperparameter harus dilakukan secara setara antara metode baru dan baseline. Kedua, pipeline preprocessing data, termasuk handling missing value, encoding kategorikal, scaling, dan feature selection, harus identik untuk semua model yang dibandingkan. Ketiga, jumlah evaluasi atau iterasi validasi silang harus sebanding agar estimasi performa mencerminkan stabilitas yang serupa. Keempat, hasil eksperimen wajib melaporkan variansi atau interval kepercayaan, karena performa model sangat bergantung pada partisi data dan inisialisasi acak. Tanpa penerapan prinsip-prinsip ini, perbedaan skor metrik yang terlihat signifikan secara numerik belum tentu bermakna secara statistik.

Sebagai ilustrasi praktik yang sering keliru, mari kita perhatikan blok teks pada slide yang menggambarkan tuning yang tidak adil. Ketika sebuah metode baru menggunakan framework optimisasi seperti Optuna dengan 100 iterasi pencarian ruang hyperparameter, sementara baseline hanya mengandalkan parameter bawaan dari pustaka scikit-learn tanpa proses tuning sama sekali, maka celah performa yang dihasilkan hampir pasti akan menguntungkan metode baru. Perbedaan ini bukan berasal dari keunggulan arsitektur atau algoritma, melainkan dari ketidakseimbangan usaha komputasi dan eksplorasi ruang solusi. Dalam publikasi bereputasi, reviewer akan langsung menyoroti praktik semacam ini karena mengindikasikan kurangnya rigoritas dalam desain eksperimen. Kredibilitas penelitian justru dibangun ketika baseline juga mengalami proses tuning yang intensif, sehingga margin improvement yang dilaporkan benar-benar merefleksikan nilai tambah dari kontribusi metodologis Anda.

### Inti yang Harus Ditekankan

- Baseline harus kuat dan dioptimalkan secara setara untuk mencegah klaim berlebihan dan memastikan improvement benar-benar berasal dari kontribusi metode.
- Prinsip fair comparison menuntut kesetaraan dalam tuning, preprocessing, jumlah evaluasi, serta pelaporan variansi hasil eksperimen.
- Ketidakadilan dalam setup eksperimen merusak kredibilitas ilmiah dan harus dihindari dalam standar penelitian tingkat magister.

### Transisi ke Slide Berikutnya

Setelah memastikan baseline yang kuat dan perbandingan yang adil, langkah selanjutnya adalah menjamin bahwa seluruh prosedur eksperimen dapat dilacak dan diulang oleh peneliti lain. Hal ini membawa kita pada pembahasan tentang reproducibility dan experimental validity, di mana kita akan mengeksplorasi praktik teknis seperti pengaturan random seed, pencatatan versi library, dan dokumentasi pipeline dalam kode Python.

---

## Slide 027 - Reproducibility dan Experimental Validity

### Narasi

Setelah membahas pentingnya baseline yang kuat dan perbandingan yang adil pada slide sebelumnya, kita kini beralih ke fondasi metodologis yang tak kalah krusial dalam penelitian data mining tingkat lanjut, yaitu Reproducibility atau Reproduktibilitas, serta Experimental Validity atau Validitas Eksperimental. Dalam konteks penelitian magister maupun publikasi internasional, sebuah klaim kinerja model tidak akan dianggap valid secara ilmiah jika eksperimen yang Anda lakukan tidak dapat direproduksi oleh peneliti lain. Reproduktibilitas berarti bahwa ketika seseorang menjalankan ulang kode, pipeline preprocessing, dan prosedur evaluasi Anda dengan dataset yang sama, mereka harus memperoleh hasil numerik yang kurang lebih identik. Tanpa ini, temuan penelitian Anda hanya bersifat anekdotal dan sulit diverifikasi secara akademis.

Untuk mencapai reproduktibilitas yang konsisten, terdapat beberapa praktik dasar yang wajib diterapkan dalam setiap siklus eksperimen. Pertama, tetapkan random seed secara eksplisit di seluruh komponen yang melibatkan unsur acak, seperti pembagian data, inisialisasi bobot model, atau sampling stratified. Kedua, dokumentasikan versi pustaka atau library yang digunakan, karena pembaruan minor pada scikit-learn atau pandas sering kali mengubah algoritma default atau perilaku fungsi tertentu. Ketiga, catat secara rinci konfigurasi hyperparameter yang digunakan selama tuning, jangan hanya mengandalkan nilai default. Keempat, bangun pipeline preprocessing dan training yang terdokumentasi dengan baik, sehingga alur transformasi data hingga evaluasi dapat diikuti langkah demi langkah. Kelima, jika memungkinkan, simpan dataset yang sudah diproses atau fitur yang telah diekstraksi, bukan hanya data mentah, untuk menghindari variasi hasil akibat perbedaan skrip preprocessing.

Sebagai ilustrasi praktis dalam ekosistem Python, perhatikan potongan kode berikut yang menggunakan fungsi `train_test_split` dari scikit-learn:
```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
```
Penetapan `random_state=42` pada baris ketiga memastikan bahwa setiap kali kode ini dijalankan, indeks sampel yang masuk ke set pelatihan dan pengujian akan tetap sama. Ini adalah langkah fundamental untuk menjamin konsistensi awal eksperimen. Namun, perlu dipahami bahwa menetapkan random seed bukanlah jaminan mutlak untuk reproduktibilitas absolut. Faktor lain seperti arsitektur CPU/GPU, paralelisasi, versi compiler C/C++ di balik library, atau bahkan perubahan non-deterministik pada operasi floating-point dapat menyebabkan deviasi kecil pada hasil akhir. Oleh karena itu, seed hanyalah titik awal yang penting, namun harus dibarengi dengan kontrol ketat terhadap lingkungan komputasi dan dokumentasi lengkap.

Validitas eksperimental sendiri menuntut bahwa metrik performa yang dilaporkan benar-benar mencerminkan kemampuan generalisasi model, bukan artefak dari kebocoran data atau pengaturan eksperimen yang bias. Kombinasi antara praktik dokumentasi yang disiplin dan pemahaman akan keterbatasan deterministik inilah yang membedakan penelitian data mining akademis yang solid dari sekadar percobaan teknis biasa.

### Inti yang Harus Ditekankan

- Reproduktibilitas adalah syarat mutlak validitas ilmiah; tanpa kemampuan replikasi, klaim kinerja model kehilangan kredibilitas akademik.
- Random seed (`random_state`) adalah langkah wajib, namun bukan jaminan absolut karena faktor lingkungan komputasi, versi library, dan operasi non-deterministik juga berpengaruh.
- Dokumentasi lengkap mencakup versi library, konfigurasi hyperparameter, pipeline preprocessing, dan penyimpanan data terproses untuk meminimalkan varians eksperimen.
- Validitas eksperimental dibangun melalui kontrol ketat terhadap sumber ketidakpastian non-deterministik dan transparansi penuh dalam pelaporan metodologi.

### Transisi ke Slide Berikutnya

Dengan fondasi eksperimen yang reproducible dan valid, langkah selanjutnya adalah memetakan area penelitian secara sistematis. Kita akan melihat bagaimana merumuskan pertanyaan panduan untuk mengeksplorasi research landscape, mengidentifikasi celah penelitian, dan menentukan arah kontribusi yang relevan.

---

## Slide 028 - Eksplorasi Research Landscape: Pertanyaan Panduan

### Narasi

Setelah pada slide sebelumnya kita membahas fondasi metodologis berupa reproducibility dan validitas eksperimental—mulai dari penetapan random seed, pencatatan konfigurasi hyperparameter, hingga dokumentasi pipeline—langkah kritis berikutnya adalah melakukan eksplorasi landscape riset secara sistematis. Sebelum merancang eksperimen atau menyusun proposal penelitian, Anda wajib memetakan wilayah ilmu yang akan Anda tekuni. Hal ini bertujuan untuk menghindari duplikasi karya, memastikan kontribusi penelitian Anda signifikan, serta menempatkan studi Anda dalam konteks perkembangan mutakhir bidang data mining.

Untuk memetakan area riset secara komprehensif, gunakan enam pertanyaan panduan berikut. Pertama, identifikasi apa masalah inti atau pain point yang sedang dihadapi komunitas peneliti di bidang tersebut. Kedua, karakterisasi data yang biasa digunakan, apakah berupa tabel tabular, teks, graf, data deret waktu, atau multimodal. Ketiga, tentukan metode atau algoritma apa yang saat ini mendominasi solusi atas masalah tersebut. Keempat, evaluasi keterbatasan dari metode-metode dominan itu, seperti asumsi distribusi data, kerentanan terhadap concept drift, kompleksitas komputasi, atau bias dalam representasi fitur. Kelima, cari tahu dataset standar dan model baseline yang menjadi acuan umum dalam literatur terkini. Terakhir, temukan peluang penelitian atau celah (research gap) yang belum terjawab oleh studi-studi sebelumnya.

Proses menjawab pertanyaan-pertanyaan ini memerlukan disiplin akademik yang ketat. Mulailah dengan membaca tiga hingga lima paper terbaru dari venue bereputasi seperti konferensi KDD, SIGIR, NeurIPS, atau jurnal IEEE TKDE dan ACM TKDD. Jangan berhenti pada abstrak; bedah secara mendalam bagian metodologi, desain eksperimen, dan analisis kesalahan. Susunlah sebuah tabel perbandingan yang menyoroti persamaan dan perbedaan pendekatan, metrik evaluasi, serta performa relatif masing-masing paper. Selama proses ini, catat setiap istilah teknis, arsitektur model, atau teknik preprocessing yang belum Anda kuasai, lalu telusuri referensi primernya. Pastikan Anda juga mengidentifikasi baseline yang digunakan penulis sebagai titik awal eksperimen Anda. Penting untuk diingat bahwa luaran dari aktivitas ini bukanlah rangkuman isi paper, melainkan pemetaan masalah yang terstruktur beserta celah penelitian yang spesifik dan dapat diuji secara empiris.

Pemetaan ini akan menjadi fondasi yang kokoh sebelum Anda terjun ke pemilihan topik. Pada slide berikutnya, kita akan meninjau daftar area riset data mining yang sangat relevan dan aktif diteliti saat ini, mulai dari advanced tabular learning, graph mining, hingga foundation models dan data-centric approaches. Dari area-area tersebut, Anda dapat menyaring dua hingga tiga topik yang paling selaras dengan minat, keahlian komputasi, dan ketersediaan data untuk dieksplorasi lebih lanjut.

### Inti yang Harus Ditekankan

- Eksplorasi landscape riset harus bersifat analitis, bukan sekadar membaca paper secara pasif.
- Enam pertanyaan panduan dirancang untuk mengungkap masalah, data, metode, keterbatasan, baseline, dan research gap secara simultan.
- Outcomes utama dari tahap ini adalah peta masalah dan celah penelitian yang terdefinisi jelas, bukan rangkuman literatur.
- Baseline yang teridentifikasi dari paper terkini menjadi titik tolak wajib untuk eksperimen Anda, sejalan dengan prinsip validitas eksperimental yang dibahas di slide sebelumnya.

### Transisi ke Slide Berikutnya

Dengan peta masalah dan celah penelitian yang telah Anda identifikasi, langkah selanjutnya adalah menyelaraskannya dengan area riset yang sedang berkembang pesat. Mari kita lihat bersama area-area riset data mining yang paling relevan saat ini, serta bagaimana Anda dapat memposisikan diri di dalamnya.

---

## Slide 029 - Area Riset Data Mining yang Relevan

### Narasi

Setelah pada slide sebelumnya kita menyusun kerangka pertanyaan untuk memetakan lanskap penelitian, langkah selanjutnya adalah mengidentifikasi area riset spesifik dalam bidang Data Mining yang memiliki dinamika perkembangan tinggi dan layak dijadikan fokus studi tingkat magister. Pemilihan area ini bukan sekadar mengikuti tren, melainkan harus didasarkan pada keberadaan research gap yang jelas, ketersediaan dataset publik yang memadai, serta kelayakan eksperimental dalam konteks metodologi penelitian.

Area pertama adalah advanced tabular learning, yang berfokus pada perbandingan dan integrasi antara model berbasis pohon seperti XGBoost atau LightGBM dengan arsitektur neural untuk data terstruktur. Meskipun deep learning mendominasi gambar dan teks, performa model tabular masih menjadi arena kompetisi aktif, terutama dalam hal efisiensi komputasi dan akurasi prediktif. Area kedua, graph mining dan Graph Neural Networks (GNN), mengeksplorasi struktur relasional melalui node classification, link prediction, dan community detection. Pendekatan ini sangat krusial untuk sistem rekomendasi, analisis jaringan sosial, hingga pemetaan interaksi biologis yang tidak dapat dimodelkan secara efektif oleh metode tradisional.

Ketiga, temporal dan streaming data mining menyoroti tantangan data dinamis seperti concept drift, online learning, dan analisis deret waktu. Dalam skenario dunia nyata, distribusi data sering berubah seiring waktu, sehingga model statis cenderung mengalami degradasi performa. Keempat, AutoML dan Hyperparameter Optimization (HPO) mendorong otomasi dalam pemilihan arsitektur model dan penyetelan parameter menggunakan framework seperti Optuna atau Ray Tune, yang meningkatkan reproduktibilitas eksperimen dan mengurangi bias manusia dalam desain model.

Kelima, explainable dan trustworthy data mining menekankan interpretabilitas model, keadilan algoritmik, dan ketahanan terhadap adversarial attacks. Penggunaan teknik seperti SHAP atau LIME menjadi standar wajib sebelum implementasi model di domain sensitif. Keenam, privacy-preserving mining mencakup federated learning dan generasi data sintetis, yang menjawab kebutuhan kepatuhan regulasi privasi tanpa mengorbankan kualitas pelatihan model. Ketujuh, foundation models mulai merambah ke domain terstruktur melalui tabular foundation models dan pemanfaatan Large Language Models untuk pemahaman tabel otomatis, membuka paradigma baru dalam transfer learning antar-dataset. Terakhir, data-centric mining menggeser fokus dari optimisasi algoritma menuju karakterisasi dataset, penilaian kualitas data, dan rekayasa fitur yang lebih sistematis, mengingat bahwa kualitas data sering kali menjadi penentu utama keberhasilan eksperimen.

Mahasiswa diharapkan mampu memilih dua hingga tiga area yang paling selaras dengan minat, latar belakang akademik, dan ketersediaan sumber daya. Setiap area yang dipilih harus disertai dengan justifikasi metodologis yang kuat, karena pilihan ini akan menjadi fondasi proposal penelitian semester berikutnya.

### Inti yang Harus Ditekankan

- Area riset Data Mining modern telah bergeser dari pendekatan model-centric ke arah integrasi multi-disiplin yang mencakup trustworthiness, privasi, otomasi, dan fondasi model.
- Kelayakan riset tingkat S2 ditentukan oleh kejelasan research gap, ketersediaan baseline yang kompetitif, dan kesiapan dataset publik untuk validasi eksperimental.
- Pemilihan area harus mempertimbangkan kompleksitas komputasi, ketersediaan literatur terkini, serta potensi kontribusi metodologis yang dapat dipublikasikan di venue bereputasi.
- Fokus pada data-centric mining dan explainable AI menjadi tren strategis yang meningkatkan kredibilitas penelitian dan kesiapan deploy model di industri.

### Transisi ke Slide Berikutnya

Berdasarkan peta area yang telah kita bahas, kini saatnya menerjemahkan eksplorasi tersebut ke dalam dokumen formal research project. Pada slide berikutnya, Anda akan diminta mengidentifikasi dan mendokumentasikan dua hingga tiga candidate research area beserta deskripsi, alasan pemilihan, dan pertanyaan awal penelitian sebagai langkah konkret menuju penyusunan proposal.

---

## Slide 030 - Research Project: Identifikasi 2–3 Candidate Research Area

### Narasi

Setelah pada pertemuan sebelumnya kita memetakan lanskap riset terkini mulai dari *advanced tabular learning*, *graph mining*, hingga *data-centric mining*, saatnya Anda melakukan penyempitan topik secara metodologis. Slide ini mengarahkan Anda untuk memilih dua hingga tiga kandidat area riset yang akan menjadi landasan proyek akhir semester ini. Pada jenjang magister, pemilihan area bukan sekadar preferensi subjektif, melainkan langkah strategis yang menentukan kerangka kerja penelitian, ketersediaan sumber daya komputasi, dan kelayakan validasi empiris.

Untuk menjaga struktur pemikiran Anda tetap terorganisir, silakan isi tabel panduan yang tersedia. Kolom pertama meminta penamaan kandidat area. Kolom kedua berisi deskripsi operasional area tersebut, misalnya apakah Anda berfokus pada *concept drift detection* dalam streaming data atau mekanisme *link prediction* pada graph neural networks. Kolom ketiga menuntut justifikasi akademis dan praktis; jelaskan mengapa area ini relevan dengan latar belakang Anda, serta bagaimana ia mengisi celah (*research gap*) yang belum banyak dieksplorasi. Kolom terakhir berfungsi sebagai jembatan menuju perumusan *research question*. Tuliskan minimal satu pertanyaan spesifik yang mengarah pada variabel terikat dan bebas yang akan Anda uji, seperti bagaimana pengaruh teknik *feature engineering* berbasis domain terhadap stabilitas model pada dataset yang mengalami *class imbalance*.

Terdapat empat prinsip kunci dalam menyeleksi area ini. Pertama, prioritaskan ketertarikan intrinsik karena penelitian tingkat S2 memerlukan durasi pengerjaan yang panjang dan konsistensi analisis. Kedua, verifikasi ketersediaan dataset publik yang terdokumentasi dengan baik; tanpa data yang representatif, tahap *Exploratory Data Analysis* dan pembangunan baseline tidak dapat dilakukan secara objektif. Ketiga, hindari cakupan yang terlalu abstrak atau luas tanpa batas metodologis. Fokuskan pada masalah yang dapat dioperasionalkan menjadi hipotesis, metrik evaluasi, dan protokol eksperimen yang terkontrol. Keempat, manfaatkan forum diskusi kelas untuk mendapatkan *peer review* dan masukan dosen. Umpan balik awal ini sangat efektif untuk menyaring potensi bias desain penelitian sebelum Anda masuk ke tahap implementasi kode di Jupyter Notebook atau Google Colab.

Secara mendasar, identifikasi kandidat area riset ini adalah fondasi epistemologis proyek Anda. Dengan mendeskripsikan cakupan, memberikan argumen yang terukur, dan merumuskan pertanyaan awal secara sistematis, Anda telah menerapkan standar penelitian ilmiah yang ketat. Langkah ini meminimalkan risiko *scope creep*, memastikan keselarasan antara alat analisis (seperti pandas, scikit-learn, atau library khusus GNN), dan mempersiapkan Anda untuk merancang ablation study serta error analysis yang bermakna di tahap selanjutnya.

### Inti yang Harus Ditekankan

- Pemilihan area riset harus didasarkan pada keseimbangan antara minat akademis, ketersediaan dataset publik, dan kejelasan batasan metodologis.
- Tabel panduan memaksa mahasiswa berpikir secara terstruktur: dari deskripsi teknis, justifikasi relevansi, hingga perumusan pertanyaan penelitian yang teruji.
- Diskusi kelas bersifat kritis untuk menyaring ide, mencegah topik yang terlalu luas, dan memastikan kesiapan data sebelum memasuki tahap eksperimen.

### Transisi ke Slide Berikutnya

Setelah Anda menyelesaikan formulir kandidat area riset ini, langkah selanjutnya adalah mengonfirmasi aktivitas pertemuan hari ini serta menyiapkan bahan bacaan awal. Mari kita lihat ringkasan kegiatan, bukti belajar yang diharapkan, serta target konkret yang harus Anda capai sebelum Pertemuan 2, termasuk membaca satu paper terpilih dan menyusun pertanyaan terkait validitas eksperimen.

---

## Slide 031 - Aktivitas Pertemuan 1 dan Luaran

### Narasi

Pada pertemuan pertama ini, fokus utama kita adalah membangun fondasi pemahaman mengenai lanskap penelitian data mining modern dan bagaimana cara mengidentifikasi masalah penelitian yang tepat. Selama sesi berlangsung, kita telah melaksanakan kuliah interaktif yang dipadukan dengan diskusi terbuka, di mana mahasiswa diajak untuk mengeksplorasi berbagai area riset terkini. Kita juga membahas beberapa contoh paper data mining mutakhir sebagai referensi konkret, sekaligus membedah perbedaan mendasar antara engineering problem dan research problem. Perbedaan ini sangat krusial karena dalam konteks magister, kita tidak hanya dituntut untuk menerapkan algoritma secara teknis, melainkan merumuskan pertanyaan penelitian yang orisinal, memiliki research gap yang jelas, dan dapat diuji secara metodologis.

Sebagai bukti belajar atau capaian pembelajaran pada pertemuan ini, diharapkan setiap mahasiswa menunjukkan partisipasi aktif selama diskusi, mencatat poin-poin penting dari eksplorasi research landscape, serta menyusun rancangan awal berisi dua hingga tiga kandidat area penelitian. Dokumen atau catatan ini akan menjadi acuan dasar untuk pengembangan project penelitian mandiri atau berkelompok sepanjang semester. Pastikan bahwa kandidat area yang Anda pilih sudah mempertimbangkan ketersediaan dataset publik, relevansi dengan latar belakang akademik atau minat profesional, serta tingkat kompleksitas yang sesuai dengan ruang lingkup penelitian S2. Hal ini juga selaras dengan tugas pada slide sebelumnya untuk mengidentifikasi candidate research area secara terstruktur.

Menjelang pertemuan kedua, terdapat dua target persiapan yang harus diselesaikan terlebih dahulu. Pertama, bacalah satu paper singkat yang relevan dengan salah satu area kandidat yang telah Anda tentukan. Fokuskan pembacaan pada struktur metodologi, teknik validasi eksperimen, dan celah penelitian yang diusulkan oleh penulis. Kedua, siapkan sejumlah pertanyaan kritis terkait tahapan Exploratory Data Analysis (EDA), strategi preprocessing data, atau aspek validitas eksperimen. Persiapan ini akan sangat membantu ketika kita memasuki pembahasan teknis pada pertemuan berikutnya, khususnya dalam penyiapan lingkungan kerja dan pemilihan tools yang tepat untuk eksekusi eksperimen.

### Inti yang Harus Ditekankan

- Pembedaan fundamental antara engineering problem dan research problem menjadi pondasi metodologi penelitian S2 yang membedakan penerapan teknis dengan kontribusi ilmiah.
- Bukti belajar bersifat proses-oriented: partisipasi aktif, dokumentasi eksplorasi landscape, dan draft terstruktur berisi 2–3 kandidat area riset.
- Persiapan sebelum Pertemuan 2 berfokus pada literatur review awal dan penyusunan pertanyaan kritis teknis (EDA, preprocessing, validitas eksperimen) untuk memaksimalkan efektivitas diskusi lanjutan.

### Transisi ke Slide Berikutnya

Setelah memahami aktivitas dan target pertemuan ini, langkah selanjutnya adalah menyiapkan ekosistem kerja yang efisien dan terstandarisasi. Pada slide berikutnya, kita akan membahas tools dan lingkungan eksperimen yang akan digunakan sepanjang semester, mulai dari library manipulasi data hingga framework tracking eksperimen, sehingga Anda siap mengeksekusi penelitian dengan alur kerja yang reproducible dan sesuai standar akademis.

---

## Slide 032 - Tools dan Lingkungan Eksperimen

### Narasi

Setelah pada slide sebelumnya kita mengidentifikasi ruang lingkup penelitian dan merumuskan masalah riset yang relevan, langkah selanjutnya adalah menyiapkan infrastruktur teknis yang memadai untuk mengeksekusi eksperimen secara metodologis. Pada jenjang magister, pemilihan lingkungan kerja bukan sekadar soal kenyamanan atau kecepatan coding, melainkan fondasi bagi reproduktibilitas, skalabilitas, dan validitas ilmiah hasil penambangan data.

Ekosistem Python menjadi standar de facto dalam praktik modern karena fleksibilitasnya dan dukungan komunitas yang masif. Untuk manipulasi dan transformasi data, pasangan pandas dan NumPy berfungsi sebagai tulang punggung operasional. Sementara itu, eksplorasi awal data akan didukung oleh Matplotlib dan Seaborn untuk visualisasi kustom, serta ydata-profiling yang mampu menghasilkan laporan statistik, korelasi, dan deteksi anomali secara otomatis. Ketika memasuki tahap pemodelan, scikit-learn menyediakan antarmuka seragam untuk algoritma klasik, sedangkan keluarga gradient boosting seperti XGBoost, LightGBM, dan CatBoost menawarkan performa tinggi khusus untuk data bertipe tabular.

Optimasi model tidak lagi mengandalkan trial-and-error manual. Library Optuna memungkinkan pencarian hyperparameter berbasis Bayesian optimization yang efisien, sementara AutoGluon dapat dijadikan baseline cepat melalui pendekatan AutoML. Dalam konteks trustworthy data mining, interpretasi model menjadi wajib; SHAP digunakan untuk mengungkap kontribusi fitur terhadap prediksi secara lokal maupun global. Untuk topik lanjutan seperti deep learning dan graph mining, PyTorch menjadi framework utama, dilengkapi PyTorch Geometric dan NetworkX untuk representasi dan pembelajaran pada struktur graf. Terakhir, manajemen eksperimen yang ketat didukung oleh MLflow atau Weights & Biases untuk melacak metrik, konfigurasi, dan artifact, semuanya dijalankan dalam lingkungan notebook seperti Jupyter atau Google Colab agar iterasi penelitian tetap terdokumentasi rapi.

Penting untuk dicatat bahwa seluruh perangkat lunak ini hanyalah alat bantu, bukan tujuan akhir dari sebuah penelitian akademik. Keputusan penggunaan library tertentu harus selalu didorong oleh karakteristik dataset, kompleksitas masalah riset, dan kriteria evaluasi yang telah dirumuskan. Penggunaan tools yang berlebihan tanpa justifikasi metodologis justru dapat mengganggu fokus pada novelty dan kontribusi ilmiah.

### Inti yang Harus Ditekankan

- Tools bersifat instrumental; kesesuaiannya harus selaras dengan research question dan desain eksperimen, bukan mengikuti tren atau popularitas semata.
- Reproduksi penelitian sangat bergantung pada pelacakan eksperimen (experiment tracking) dan dokumentasi konfigurasi yang sistematis sejak hari pertama.
- Pemilihan stack teknologi harus mempertimbangkan trade-off antara kemudahan implementasi, kebutuhan interpretasi model, dan skalabilitas komputasi.
- Lingkungan eksperimen yang terstruktur dan disiplin menjadi prasyarat mutlak sebelum masuk ke tahap analisis data mendalam dan validasi hipotesis.

### Transisi ke Slide Berikutnya

Dengan ekosistem teknis yang telah siap dan dipahami batas fungsionalnya, kita kini akan beralih ke fase paling kritis dalam pipeline penelitian: pemahaman data dan persiapan eksperimen. Pertemuan berikutnya akan membahas mengapa EDA dan preprocessing yang rigor menjadi penentu keberhasilan klaim ilmiah, serta bagaimana menghindari jebakan umum seperti data leakage dan bias distribusi sebelum kita langsung terjun ke praktikum pertama.

---

## Slide 033 - Jembatan ke Pertemuan 2: EDA, Preprocessing, dan Validitas Eksperimen

### Narasi

Setelah kita menelaah ekosistem tools di slide sebelumnya, penting untuk menegaskan kembali bahwa library seperti pandas, scikit-learn, atau Optuna hanyalah instrumen. Nilai ilmiah dari sebuah penelitian data mining justru ditentukan oleh kedalaman pemahaman kita terhadap data sebelum memasuki tahap pemodelan. Pertemuan 2 sengaja dirancang sebagai jembatan metodologis yang akan membentuk kebiasaan riset rigor sejak awal. Tanpa pemahaman struktur data yang matang, bahkan algoritma paling mutakhir sekalipun hanya akan menghasilkan artefak statistik yang menyesatkan dan tidak dapat direplikasi.

Exploratory Data Analysis (EDA) dalam konteks penelitian tingkat magister jauh melampaui pembuatan grafik deskriptif. EDA berfungsi sebagai proses diagnostik sistematis untuk mengidentifikasi asumsi distribusi, ketergantungan antar fitur, pola temporal, atau anomali yang mungkin mengindikasikan masalah mendasar dalam pengumpulan data. Langkah preprocessing yang mengikuti EDA—seperti imputasi missing values, strategi penanganan outlier, atau teknik resampling untuk class imbalance—bukanlah prosedur teknis belaka. Setiap keputusan preprocessing merupakan pilihan metodologis yang secara langsung memengaruhi keadilan perbandingan antar metode. Jika pipeline preprocessing tidak konsisten atau mengandung bias implisit, klaim peningkatan performa model kehilangan landasan empiris yang kuat.

Validitas eksperimen adalah inti dari kontribusi ilmiah yang dapat dipertanggungjawabkan. Kita akan membahas praktik-praktik kritis yang sering menjadi sumber kegagalan replikasi, seperti data leakage yang terjadi ketika informasi dari set uji bocor ke proses pelatihan, serta dataset bias yang mendistorsi representasi populasi asli. Pembahasan juga mencakup kerangka pembagian data yang ketat (train/validation/test split) serta implementasi cross-validation untuk memastikan estimasi performa yang stabil dan generalizable. Seluruh konsep ini akan langsung diuji coba dalam Praktikum 1, di mana Anda akan membangun pipeline eksperimental terstruktur mulai dari dataset profiling hingga evaluasi baseline, sehingga terbiasa dengan alur kerja penelitian yang transparan dan terukur.

### Inti yang Harus Ditekankan

- EDA adalah proses diagnostik data untuk mengungkap struktur dan masalah tersembunyi, bukan sekadar aktivitas visualisasi.
- Keputusan preprocessing berdampak langsung pada fair comparison, stabilitas model, dan reproduktibilitas hasil eksperimen.
- Validitas eksperimen (pencegahan data leakage, mitigasi bias, split yang tepat, dan cross-validation) adalah prasyarat mutlak agar klaim ilmiah dapat dipercaya dan dipublikasikan.
- Pipeline eksperimental harus dibangun secara sistematis dan dokumentatif, menghindari pendekatan ad-hoc yang umum ditemukan pada praktik non-research.

### Transisi ke Slide Berikutnya

Dengan pondasi metodologis ini telah diletakkan, mari kita tutup pertemuan pertama dengan merangkum poin-poin kunci yang telah dibahas hari ini, sekaligus menyiapkan langkah konkret untuk tugas identifikasi area penelitian Anda.

---

## Slide 034 - Ringkasan

### Narasi

Pada pertemuan pertama ini, kita telah menelusuri fondasi konseptual yang menjadi landasan seluruh perjalanan akademik di mata kuliah Topik Dalam Data Mining. Sebelum kita beralih secara teknis pada pertemuan kedua untuk membahas Exploratory Data Analysis dan preprocessing, penting bagi kita untuk mengikat kembali seluruh konsep kunci yang telah dibahas. Data mining sering kali disalahartikan hanya sebagai penerapan sekumpulan algoritma machine learning. Padahal, dalam perspektif penelitian dan industri yang matang, data mining merupakan komponen integral dari proses Knowledge Discovery in Databases (KDD). Algoritma hanyalah alat eksekusi, sedangkan nilai sebenarnya terletak pada bagaimana data tersebut dipahami, diproses, dimodelkan, dan hasilnya ditafsirkan menjadi pengetahuan yang dapat divalidasi dan ditindaklanjuti.

Secara lebih spesifik, kita membedakan dua pendekatan utama: predictive mining dan descriptive mining. Predictive mining berfokus pada akurasi prediksi terhadap target masa depan, sehingga evaluasinya sangat kuantitatif dan berbasis metrik seperti akurasi, F1-score, atau AUC-ROC. Sebaliknya, descriptive mining bertujuan untuk mengungkap pola, struktur, atau segmentasi tersembunyi dalam data tanpa target label yang ketat, sehingga evaluasinya cenderung kualitatif atau berbasis kohesi dan kompleksitas kluster. Perkembangan bidang ini juga menunjukkan pergeseran signifikan dari metode statistik klasik menuju model arsitektural yang lebih kompleks, termasuk deep learning, graph neural networks, hingga foundation models. Namun, kompleksitas model tidak serta merta menjamin kedalaman insight atau generalisasi yang robust.

Di tingkat magister, penekanan bergeser dari sekadar "bagaimana menjalankan kode" menjadi "mengapa dan untuk apa penelitian ini dilakukan". Kita harus tegas membedakan engineering problem dan research problem. Engineering problem menuntut solusi yang efisien, scalable, dan siap produksi. Research problem menuntut novelty, validitas metodologis, dan kontribusi ilmiah yang jelas. Peningkatan performa model sekalipun signifikan belum tentu dianggap sebagai kontribusi ilmiah jika tidak disertai analisis ablation, studi komparatif yang adil, kontrol variabel yang ketat, atau penjelasan mekanisme mengapa peningkatan tersebut terjadi. Sebuah klaim penelitian hanya akan diakui secara akademis jika didukung oleh evidence yang kuat, analisis error yang mendalam, serta kejelasan manfaat pengetahuan baru yang dihasilkan.

Untuk menginternalisasi poin-poin ini, tugas Anda setelah kelas ini adalah mengidentifikasi dua hingga tiga candidate research area yang relevan dengan minat dan perkembangan terkini. Area-area ini akan menjadi bahan diskusi kritis pada pertemuan berikutnya, di mana kita akan mulai menerapkan kerangka kerja penelitian secara konkret. Pastikan kandidat area tersebut memiliki ketersediaan dataset yang memadai, kesenjangan literatur yang teridentifikasi secara jelas, dan potensi untuk menjawab pertanyaan penelitian yang spesifik dan terukur.

### Inti yang Harus Ditekankan

- Data mining adalah bagian dari siklus KDD, bukan sekadar kumpulan algoritma atau aktivitas pemrograman semata.
- Perbedaan fundamental antara predictive dan descriptive mining menentukan pilihan metrik evaluasi, desain eksperimen, dan interpretasi hasil.
- Peningkatan akurasi atau performa model tidak otomatis menjadi kontribusi ilmiah; novelty, rigor metodologis, dan evidence-driven analysis adalah syarat mutlak di jenjang S2.
- Mahasiswa harus mampu merumuskan research problem yang berbeda dari engineering problem, dengan fokus pada identifikasi gap, validitas internal/eksternal, dan signifikansi pengetahuan baru.

### Transisi ke Slide Berikutnya

Dengan pemahaman konseptual dan mindset penelitian yang telah kita rangkum ini, langkah selanjutnya adalah memastikan bahwa setiap ide penelitian yang Anda kembangkan didasarkan pada literatur yang kredibel, terkini, dan terstruktur. Mari kita lihat referensi utama baik dari buku teks klasik maupun publikasi venue bereputasi yang akan menjadi panduan metodologis dan eksperimental kita selama semester ini.

---

## Slide 035 - Referensi Utama

### Narasi

Pada jenjang magister, kemampuan menyusun literatur yang kuat bukan sekadar kelengkapan administratif, melainkan fondasi metodologis yang menentukan kualitas penelitian. Sebagaimana ditekankan pada ringkasan pertemuan sebelumnya bahwa peningkatan akurasi atau efisiensi komputasi belum otomatis menjadi kontribusi ilmiah, maka setiap klaim temuan harus berakar pada pemahaman mendalam terhadap karya-karya seminal dan perkembangan terkini. Slide ini menyajikan kerangka referensi terstruktur yang akan menjadi panduan utama dalam membangun baseline yang solid, merumuskan research question, serta melakukan critical review terhadap paper internasional sepanjang semester.

Untuk fondasi teoritis, empat buku utama dipilih berdasarkan cakupan dan kedalaman materi. Han, Pei, dan Tong menyajikan struktur komprehensif tentang konsep inti data mining, mulai dari preprocessing hingga pattern mining, dengan penekanan pada kejelasan definisi dan algoritma dasar. Tan, Steinbach, Karpatan, dan Kumar memperluas perspektif tersebut dengan pembahasan prinsip desain sistem, skalabilitas, serta integrasi antar-tahap KDD. Witten, Frank, Hall, dan Pal sangat strategis karena menjembatani teori machine learning dengan praktik implementasi, termasuk diskusi tentang validasi silang, seleksi fitur, dan interpretasi model. Sementara itu, Leskovec, Rajaraman, dan Ullman fokus pada tantangan data berskala besar, memperkenalkan teknik hashing, sampling, dan paralelisasi yang esensial ketika bekerja dengan dataset modern yang tidak muat dalam memori tunggal.

Seiring evolusi bidang ini menuju model hibrida dan pendekatan berbasis bukti, buku pendukung modern menjadi pelengkap yang tak kalah vital. Géron menekankan implementasi hands-on menggunakan ekosistem Python seperti scikit-learn, Keras, dan TensorFlow, yang selaras dengan praktikum di Jupyter Notebook maupun Google Colab. Murphy membangun jembatan matematis antara statistik Bayesian dan pembelajaran mesin probabilistik, penting untuk evaluasi model yang rigor dan analisis ketidakpastian. Hamilton membahas representasi node dan edge dalam bentuk vektor, membuka jalan bagi pemahaman Graph Neural Networks yang semakin dominan dalam riset relational data. Molnar, di sisi lain, mendalami interpretabilitas model, SHAP, LIME, serta trade-off antara transparansi dan performa—komponen kunci dalam trustworthy data mining dan explainable AI. Penguasaan kombinasi ini memastikan mahasiswa mampu tidak hanya menjalankan pipeline, tetapi juga memahami asumsi, batasan, serta implikasi epistemologis dari setiap pilihan metodologis.

Sumber daya akademik tidak berhenti pada literatur cetak. Paper terkini harus secara rutin dipantau melalui venue bereputasi tinggi seperti KDD, ICDM, SDM, CIKM, WWW, AAAI, NeurIPS, ICML, ICLR, serta jurnal TKDE dan Data Mining and Knowledge Discovery. Mengakses publikasi di venue-venue ini akan membantu Anda mengidentifikasi research gap yang aktual, membandingkan metrik evaluasi secara konsisten, merancang ablation study yang terstruktur, dan menentukan target publikasi realistis untuk proyek akhir. Dengan membekali diri pada referensi ini, Anda telah siap memasuki fase operasional yang menuntut penerjemahan konsep menjadi eksperimen terkontrol dan analisis data yang ketat.

### Inti yang Harus Ditekankan

- Buku utama berfungsi sebagai pondasi konseptual dan metodologis; pahami bukan hanya rumus, tetapi juga konteks penggunaan dan asumsi masing-masing algoritma.
- Buku pendukung modern menghubungkan teori dengan implementasi Python, probabilitas, graf, dan interpretabilitas—empat pilar yang mewarnai riset data mining kontemporer.
- Venue konferensi dan jurnal adalah sumber primer untuk melacak state-of-the-art, menghindari duplikasi riset, dan menetapkan standar evaluasi yang diakui komunitas internasional.
- Kuasai referensi ini secara aktif: catat, bandingkan, dan kaitkan dengan candidate research area yang akan Anda identifikasi untuk tugas mingguan.

### Transisi ke Slide Berikutnya

Dengan landasan literatur yang mapan, kita kini beralih ke tahap eksekusi penelitian: bagaimana mentransformasi data mentah menjadi artefak analitis yang valid melalui Exploratory Data Analysis, preprocessing yang tepat, serta prinsip-prinsip experimental validity yang menjamin reproducible dan generalizable findings.

---

## Slide 036 - Penutup

### Narasi

Pertemuan pertama ini telah menguraikan lanskap modern data mining beserta tuntutan metodologis penelitian pada jenjang magister. Kita telah membahas bagaimana bidang ini tidak lagi sekadar mengandalkan penerapan algoritma, melainkan menuntut integrasi antara pemahaman mendalam terhadap arsitektur model mutakhir, strategi eksperimen yang ketat, serta kemampuan mengidentifikasi celah penelitian yang relevan dengan perkembangan terkini. Pada tingkat S2, fokus bergeser dari sekadar implementasi teknis menuju perancangan penelitian yang sistematis, mulai dari perumusan hipotesis, pemilihan baseline yang kuat, hingga evaluasi performa yang didukung oleh evidence empiris.

Sebagai referensi utama, daftar buku dan venue publikasi yang telah disajikan menjadi peta jalan akademik yang harus terus Anda pelajari dan gunakan sebagai acuan. Buku-buku fundamental seperti karya Han et al., Tan et al., serta Witten et al. memberikan fondasi konseptual yang kokoh, sementara literatur modern mencakup AutoML, Graph Representation Learning, explainable AI, dan privacy-preserving learning yang sedang mendominasi riset terkini. Venue-venue terkemuka seperti KDD, NeurIPS, ICML, ICLR, TKDE, dan SDM bukan hanya tempat publikasi, melainkan cerminan standar kualitas yang harus dicapai dalam proyek akhir maupun paper internasional yang akan Anda kembangkan sepanjang semester ini.

Sebelum masuk ke tahap implementasi kode atau tuning hyperparameter, langkah kritis berikutnya adalah memahami bagaimana data mentah ditransformasi menjadi representasi yang bermakna. Eksplorasi data dan pra-pemrosesan merupakan pondasi yang menentukan validitas seluruh eksperimen Anda. Tanpa EDA yang komprehensif dan preprocessing yang tepat, bias tersembunyi dapat mengganggu generalisasi model, sedangkan kesalahan dalam penanganan missing value, scaling, atau encoding kategorikal akan merusak integritas hasil ablation study dan error analysis. Oleh karena itu, pertemuan selanjutnya akan secara khusus membahas prinsip-prinsip EDA, teknik preprocessing yang robust, serta kerangka kerja untuk memastikan validitas eksperimental dalam konteks penelitian data mining.

Dengan pemahaman lanskap riset dan referensi yang telah kita rangkum hari ini, kita kini siap beralih ke praktik langsung. Mari lanjutkan ke sesi berikutnya untuk mendalami bagaimana melakukan Exploratory Data Analysis yang informatif, menerapkan teknik Data Preprocessing yang sesuai dengan karakteristik dataset, serta merancang protokol Experimental Validity agar setiap temuan penelitian Anda memiliki dasar yang kuat dan dapat dipertanggungjawabkan secara ilmiah.

### Inti yang Harus Ditekankan

- Penguasaan literatur fundamental dan publikasi venue top-tier merupakan syarat mutlak untuk mengidentifikasi research gap yang orisinal, terukur, dan layak dipublikasikan.
- EDA dan preprocessing bukan sekadar langkah administratif, melainkan komponen strategis yang secara langsung memengaruhi validitas internal, reproduktibilitas, dan generalisasi model.
- Rigor metodologis harus diterapkan sejak awal, termasuk desain eksperimen yang adil, penggunaan baseline yang kompetitif, serta analisis kegagalan yang berbasis bukti empiris.

### Transisi ke Slide Berikutnya

Kita telah menyelesaikan gambaran besar lanskap riset dan sumber literatur kunci. Sekarang, mari langsung masuk ke praktik lapangan dengan membahas langkah konkret pertama dalam pipeline penelitian: Exploratory Data Analysis, teknik Data Preprocessing yang tepat, serta prinsip Experimental Validity yang akan menjamin kredibilitas setiap eksperimen Anda di pertemuan berikutnya.
