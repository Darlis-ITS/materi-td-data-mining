# Narasi TD Data Mining - Pertemuan 14

## Emerging Data Mining: Foundation Models, Generative & Privacy-Preserving Learning

Sumber: markdown/pert14-emerging-data-mining-foundation-models-generative-privacy-preserving-lea.md

---

## Slide 000 - Cover

### Narasi

Pertemuan ini membawa kita memasuki fase evolusi terkini dalam bidang data mining, di mana paradigma tradisional mulai berintegrasi secara mendalam dengan arsitektur model skala besar dan teknik komputasi modern. Fokus utama kita kali ini tertuju pada tiga pilar utama yang mendefinisikan arah riset mutakhir: Foundation Models, pendekatan generatif, serta metode privasi-preserving. Dalam konteks penelitian tingkat magister, pemahaman terhadap ketiga aspek ini bukan sekadar tren teknologi, melainkan kebutuhan metodologis untuk menjawab keterbatasan dataset terbatas, bias historis, dan kerentanan privasi dalam ekosistem data nyata.

Foundation models menawarkan kemampuan representasi fitur yang sangat kuat melalui pre-training pada corpus data masif, yang kemudian dapat diadaptasi secara efisien untuk tugas-tugas spesifik seperti klasifikasi tabel atau deteksi anomali. Di sisi lain, generative modeling telah berkembang menjadi alat krusial untuk menghasilkan synthetic tabular data, yang memungkinkan peneliti melakukan augmentasi data tanpa mengorbankan distribusi statistik asli maupun sensitivitas informasi. Sementara itu, privacy-preserving learning, khususnya melalui federated learning dan teknik kriptografi, memastikan bahwa eksplorasi pola kompleks tetap dapat dilakukan tanpa perlu memusatkan data mentah, sehingga sejalan dengan prinsip responsible AI dan regulasi perlindungan data global.

Sebagai kelanjutan dari pembahasan mengenai explainability dan trustworthy mining pada pertemuan sebelumnya, sesi ini akan menyoroti bagaimana integrasi teknologi baru tersebut harus dievaluasi secara kritis. Penekanan diberikan pada kemampuan mahasiswa untuk tidak hanya mengadopsi algoritma terbaru, tetapi juga merumuskan research question yang valid, merancang eksperimen yang terukur, dan membedakan antara novelty teknis dengan kontribusi ilmiah yang bermakna. Semua materi ini akan dipandu oleh peta perkuliahan yang terstruktur untuk mempersiapkan Anda menyusun proposal penelitian atau paper konferensi internasional.

### Inti yang Harus Ditekankan

- Pergeseran paradigma dari data mining konvensional menuju integrasi foundation models dan generative AI sebagai baseline riset modern.
- Synthetic data generation sebagai solusi strategis untuk mengatasi masalah data scarcity dan class imbalance dalam eksperimen empiris.
- Pentingnya privacy-preserving mechanisms (seperti federated learning) dalam menjaga etika penelitian dan kepatuhan regulasi tanpa mengorbankan performa model.
- Kesiapan metodologis untuk mengevaluasi teknologi emerging secara kritis, memastikan setiap adopsi alat baru didukung oleh hipotesis yang jelas dan ablation study yang rigor.

### Transisi ke Slide Berikutnya

Untuk memahami cakupan lengkap topik-topik mutakhir yang akan kita bedah secara mendalam, mari kita lihat agenda rinci dan peta perjalanan materi pertemuan ini, yang akan mengarahkan diskusi kita menuju aplikasi praktis dan evaluasi ilmiah.

---

## Slide 001 - Agenda dan Peta Pertemuan 14

### Narasi

Pada pertemuan ini, kita akan membahas agenda yang dirancang khusus untuk memperluas wawasan mengenai perkembangan mutakhir dalam bidang data mining, khususnya pada ranah *emerging technologies*. Agenda hari ini terdiri dari tujuh poin utama yang saling berkesinambungan. Pertama, kita akan mengulas *generative modeling* dan pembangkitan *synthetic tabular data*, yang kini menjadi solusi krusial ketika ketersediaan data riil terbatas atau mengandung bias sensitif. Kedua, fokus beralih ke *Tabular Foundation Models*, sebuah paradigma yang mencoba mentransfer pengetahuan dari model besar ke struktur data tabel yang selama ini tertinggal dibandingkan teks dan gambar. Ketiga, kita akan mengeksplorasi pemanfaatan Large Language Models (LLM) untuk *table understanding* serta analisis yang dibantu oleh LLM (*LLM-assisted analysis*). Keempat, konsep *in-context learning* akan dibahas sebagai mekanisme di mana model dapat beradaptasi terhadap tugas tertentu tanpa perlu melakukan fine-tuning ulang yang mahal. Kelima, kita masuk ke aspek keamanan dan etika melalui *Federated learning* dan teknik *privacy-preserving mining*, yang memungkinkan kolaborasi pemodelan tanpa pertukaran data mentah antar institusi. Keenam, perspektif kausal (*causal perspectives*) akan diangkat untuk mengingatkan bahwa korelasi statistik saja tidak cukup; kita perlu memahami hubungan sebab-akibat agar model memiliki robustness yang lebih tinggi. Terakhir, namun paling krusial untuk jenjang magister, kita akan melakukan analisis kritis mengenai bagaimana membedakan sekadar penggunaan teknologi baru versus penciptaan kontribusi ilmiah yang bermakna (*meaningful scientific contribution*).

Untuk memposisikan materi ini secara strategis, mari kita lihat peta perkuliahan yang tertera. Pertemuan 13 telah menancapkan fondasi kuat mengenai explainability, trustworthiness, fairness, dan prinsip-prinsip *responsible data mining*. Dari pondasi tersebut, Pertemuan 14 ini berfungsi sebagai jembatan yang memperluas cakrawala menuju pendekatan-pendekatan *emerging* yang sedang mendominasi literatur terkini. Dengan memahami teknologi-teknologi baru ini, mahasiswa tidak hanya diajak untuk mengenal alat-alat canggih, tetapi juga ditantang untuk mengevaluasi relevansi dan batasannya dalam konteks penelitian. Selanjutnya, pada Pertemuan 15, seluruh eksplorasi teknis dan konseptual hari ini akan disintesis menjadi panduan praktis mengenai bagaimana hasil eksperimen yang sudah dilakukan dapat dirangkum, dianalisis secara metodologis, dan dikonversi menjadi kontribusi ilmiah yang layak publikasikan. Pendekatan bertahap ini memastikan bahwa setiap langkah pembelajaran selaras dengan target luaran berupa paper penelitian berkualitas internasional.

### Inti yang Harus Ditekankan

- Penguasaan teknologi *emerging* seperti foundation models, generative AI, dan federated learning harus selalu diimbangi dengan evaluasi kritis terhadap nilai ilmiahnya, bukan sekadar tren belaka.
- Struktur pembelajaran dirancang secara progresif: dari fondasi *responsible AI* (Pertemuan 13), menuju eksplorasi teknologi mutakhir (Pertemuan 14), dan akhirnya difokuskan pada penyusunan metodologi penelitian serta penulisan paper (Pertemuan 15).
- Pada jenjang S2, kemampuan melakukan *critical review* dan merumuskan *research gap* menjadi kompetensi utama yang harus dikembangkan melalui pemahaman mendalam terhadap batasan dan peluang masing-masing pendekatan yang dibahas.

### Transisi ke Slide Berikutnya

Agar kita dapat menempatkan pembahasan teknologi mutakhir ini dalam kerangka silabus yang jelas, mari kita lanjutkan ke slide berikutnya yang akan menguraikan posisi tepat pertemuan ini dalam Rencana Pembelajaran Semester (RPS), beserta kaitannya dengan praktikum sebelumnya dan persiapan menuju penulisan karya ilmiah.

---

## Slide 002 - Posisi Pertemuan dalam RPS

### Narasi

Dalam konteks silabus dan alur perkuliahan, posisi pertemuan ini menempati fase transisi penting dari penguasaan fondasi menuju eksplorasi metode mutakhir. Pada pertemuan sebelumnya, kita telah menyelesaikan pembahasan mengenai explainable AI, robustness, fairness, dan prinsip-prinsip responsible data mining. Hal ini juga tercermin dari selesainya Praktikum 6, di mana mahasiswa melakukan implementasi prediksi model dilengkapi dengan analisis interpretabilitas menggunakan SHAP serta evaluasi kesalahan model. Fondasi ini sangat krusial karena sebelum melangkah ke teknologi yang lebih kompleks, mahasiswa perlu memahami bagaimana menilai kepercayaan dan keandalan model secara kritis.

Saat ini, fokus perkuliahan bergeser ke arah emerging technologies dalam data mining. Agenda mencakup generative modeling untuk pembuatan synthetic tabular data, pengembangan tabular foundation models, pemanfaatan Large Language Models (LLM) untuk table understanding dan analisis yang dibantu AI, konsep in-context learning, serta pendekatan federated learning dan privacy-preserving mining. Namun, pada jenjang magister, penekanan utamanya bukan sekadar penerapan alat-alat tren tersebut. Kita dituntut untuk mengevaluasi secara kritis apakah adopsi teknologi baru ini benar-benar menghasilkan kontribusi ilmiah yang bermakna, atau hanya menjadi eksplorasi teknis tanpa landasan riset yang kuat. Pertanyaan mendasar yang terus dipegang adalah bagaimana mengidentifikasi research gap, merumuskan hipotesis, dan membuktikan bahwa pendekatan baru memberikan peningkatan signifikan baik secara metodologis maupun empiris dibandingkan baseline klasik.

Melihat ke depan, materi ini akan menjadi jembatan menuju tahap penyusunan karya ilmiah. Setelah memahami lanskap teknologi mutakhir, langkah selanjutnya adalah mengubah hasil eksperimen menjadi scientific contribution yang terstruktur. Fase berikutnya akan membahas teknik validasi ketat seperti ablation study, sensitivity analysis, dan pengujian statistik untuk memastikan robustness dan generalisasi model. Seluruh proses ini akan diarahkan pada penulisan paper penelitian yang memenuhi standar publikasi internasional terindeks Scopus. Dengan demikian, pemahaman tentang posisi pertemuan ini dalam RPS membantu mahasiswa menempatkan setiap topik tidak sebagai isolasi teknis, melainkan sebagai bagian dari siklus penelitian yang utuh dan berorientasi pada kontribusi akademik.

### Inti yang Harus Ditekankan

- Pertemuan ini berfungsi sebagai titik balik dari penguasaan responsible AI menuju eksplorasi frontier research, menuntut sikap kritis terhadap validitas ilmiah di balik penggunaan teknologi mutakhir.
- Adopsi alat canggih seperti foundation models, generative AI, atau federated learning harus selalu diiringi dengan pertanyaan penelitian yang jelas, desain eksperimen yang adil, dan bukti empiris yang menunjukkan keunggulan metodologis.
- Mahasiswa perlu menyadari bahwa tujuan akhir dari seluruh rangkaian eksperimen dan analisis adalah transformasi temuan teknis menjadi kontribusi ilmiah yang terdokumentasi, tervalidasi secara statistik, dan siap dipublikasikan di forum akademik bereputasi.

### Transisi ke Slide Berikutnya

Untuk memastikan kita memiliki peta jalan yang jelas dalam menjembatani teori dan praktik penelitian ini, mari kita tinjau secara spesifik capaian pembelajaran yang diharapkan serta bagaimana materi hari ini selaras dengan kompetensi inti mata kuliah. Silakan buka slide berikutnya mengenai Tujuan Pembelajaran dan CPMK.

---

## Slide 003 - Tujuan Pembelajaran dan CPMK

### Narasi

Slide ini memetakan bagaimana pertemuan ke-14 selaras dengan capaian pembelajaran mata kuliah secara keseluruhan. Materi ini secara eksplisit mendukung tiga CPMK utama: CPMK-1 untuk menganalisis konsep dan perkembangan mutakhir dalam data mining, CPMK-2 untuk mengevaluasi penelitian terkini secara kritis, serta CPMK-5 untuk membandingkan pendekatan klasik, machine learning modern, dan emerging approaches. Penekanan pada jenjang magister bukan sekadar penguasaan tools, melainkan kemampuan menempatkan teknologi baru dalam kerangka metodologi penelitian yang ketat.

Setelah mengikuti sesi ini, mahasiswa diharapkan mampu menjelaskan ide dasar generative modeling dan pembentukan synthetic tabular data. Kita akan membedah bagaimana teknik generasi data berbeda dari pemodelan prediktif konvensional, serta mengapa sintesis data menjadi krusial dalam konteks augmentasi dataset, imbalance handling, dan simulasi skenario yang jarang terjadi di dunia nyata. Pemahaman ini menjadi fondasi sebelum beralih ke arsitektur yang lebih kompleks.

Mahasiswa juga harus mampu mengidentifikasi potensi sekaligus keterbatasan tabular foundation models. Berbeda dengan LLM yang beroperasi pada ruang vektor teks yang relatif terstruktur, foundation model untuk data tabular menghadapi tantangan heterogenitas fitur, missing patterns yang non-random, dan kurangnya standar pretraining yang seragam. Mengenal batasan ini penting agar penerapan model tidak dilakukan secara blind trust, melainkan disertai verifikasi empiris terhadap stabilitas representasi dan generalisasi lintas domain.

Peran Large Language Models dalam alur data analysis akan dibahas secara kritis. Meskipun LLM dapat mempercepat exploratory data analysis, feature engineering, hingga penulisan baseline code, terdapat risiko metodologis yang signifikan seperti hallucination statistik, propagasi bias implisit, dan ilusi pemahaman hubungan kausal-korelasional. Pada level penelitian, output LLM harus selalu divalidasi melalui uji statistik, cross-validation, dan ablation study, bukan dianggap sebagai ground truth.

Kita juga akan membahas federated learning dan teknik privacy-preserving mining lainnya. Pendekatan ini memungkinkan kolaborasi pelatihan model lintas institusi atau perangkat tanpa mentransfer data mentah, menjawab tuntutan regulasi privasi dan etika data kontemporer. Mahasiswa perlu memahami trade-off antara efisiensi komunikasi, konsistensi global model, dan jaminan diferensial privacy dalam setting distributed environment.

Poin paling krusial dari slide ini adalah pergeseran mindset dari sekadar mengadopsi teknologi tren menuju penciptaan kontribusi ilmiah yang bermakna. Menggunakan arsitektur baru atau framework mutakhir tidak otomatis memenuhi syarat sebagai penelitian akademik. Nilai ilmiah justru terletak pada desain eksperimen yang adil, analisis error yang mendalam, klarifikasi mekanisme kerja model, dan artikulasi jelas mengenai pengetahuan baru yang dihasilkan. Hal ini menjadi jembatan alami menuju diskusi di slide berikutnya, di mana kita akan membedakan antara peningkatan metrik performa semata versus validasi kontribusi pengetahuan yang robust.

### Inti yang Harus Ditekankan

- Keselarasan materi dengan CPMK-1, CPMK-2, dan CPMK-5 menekankan bahwa evaluasi kritis dan perbandingan metodologis adalah inti dari penelitian tingkat magister.
- Penguasaan emerging paradigms (generative modeling, tabular foundation models, LLM-assisted analysis, federated learning) wajib diimbangi dengan kesadaran akan keterbatasan teknis dan risiko metodologis masing-masing pendekatan.
- Novelty teknologi tidak setara dengan scientific contribution; nilai penelitian ditentukan oleh rigor eksperimen, transparansi mekanisme, analisis batas generalisasi, dan kejelasan knowledge gap yang diisi.

### Transisi ke Slide Berikutnya

Dengan memahami cakupan dan tujuan pembelajaran ini, kita kini akan menguji bagaimana klaim kemajuan teknologi tersebut dapat diverifikasi secara ilmiah. Mari kita bedah perbedaan mendasar antara peningkatan performa numerik semata versus kontribusi pengetahuan yang valid, serta mengapa analisis mekanisme dan batas model menjadi kunci dalam penelitian tingkat magister.

---

## Slide 004 - Performance Improvement vs Scientific Contribution

### Narasi

Dalam konteks penelitian tingkat magister pada bidang data mining, kita sering dihadapkan pada tekanan akademis dan industri untuk melaporkan peningkatan metrik performa. Namun, perlu ditegaskan secara tegas bahwa model yang menghasilkan angka lebih akurat belum otomatis menjadi sebuah kontribusi ilmiah yang valid. Peningkatan numerik semata hanyalah indikator permukaan; nilai sebenarnya terletak pada kedalaman pemahaman yang kita dapatkan dari eksperimen tersebut. Penelitian yang berkualitas tidak berhenti pada klaim "model saya lebih baik", melainkan menjawab mengapa hal itu terjadi, di mana batasannya, dan apa implikasi teoretis atau praktis dari temuan tersebut.

Mari kita bedah perbedaan mendasar antara fokus pada performa versus fokus pada kontribusi ilmiah melalui tabel yang tertera. Ketika kita hanya mengejar performa, pertanyaan yang muncul bersifat kuantitatif dan sempit: apakah akurasi naik dua persen? apakah F1-score lebih tinggi? apakah model ini unggul dibandingkan baseline? atau apakah modelnya sekadar lebih besar? Sebaliknya, pertanyaan ilmiah menuntut eksplorasi analitis: mengapa akurasi bisa naik? pada skenario atau subset data apa model justru gagal? apakah hasil ini generalizable ke domain lain? apakah kompleksitas komputasi dan biaya training sebanding dengan manfaat yang didapat? dan yang paling krusial, pengetahuan baru apa yang berhasil kita ekstrak dari proses ini?

Implikasi dari perbedaan perspektif ini sangat menentukan desain eksperimen Anda. Teknologi atau arsitektur baru wajib diuji secara adil dengan baseline yang telah dituning secara optimal, bukan dibandingkan dengan model standar yang kurang dioptimalkan. Setiap perbaikan angka harus dibarengi dengan analisis mekanisme internal model, seperti ablation study, error analysis, atau evaluasi robustness. Tanpa analisis tersebut, peningkatan performa bisa saja berasal dari kebocoran data, bias sampling, atau simply karena model yang lebih besar memiliki kapasitas memorisasi yang lebih tinggi, bukan kemampuan generalisasi yang lebih baik.

Sebagai peneliti, tugas Anda adalah mentransformasikan laporan eksperimen dari sekadar daftar angka menjadi narasi ilmiah yang koheren. Fokuskan energi pada pengujian hipotesis, identifikasi failure cases, dan ekstraksi insight yang dapat memperkaya literatur data mining. Dengan demikian, karya Anda tidak hanya memenuhi standar teknis, tetapi juga memberikan dampak metodologis yang berkelanjutan bagi komunitas akademik, sekaligus menjawab salah satu capaian pembelajaran sebelumnya tentang membedakan penggunaan teknologi tren dengan kontribusi ilmiah yang bermakna.

### Inti yang Harus Ditekankan

- Peningkatan metrik performa (akurasi, F1, dll.) bukanlah tujuan akhir penelitian, melainkan titik awal untuk investigasi ilmiah yang lebih dalam.
- Kontribusi ilmiah diukur dari kejelasan mekanisme, generalisasi, efisiensi biaya-kompleksitas, dan novelty insight yang dihasilkan, bukan sekadar pencapaian label SOTA.
- Eksperimen yang rigor memerlukan fair comparison, analisis kegagalan, dan evaluasi kritis terhadap sumber peningkatan performa agar terhindar dari klaim semu atau overfitting terselubung.

### Transisi ke Slide Berikutnya

Untuk memastikan setiap klaim performa benar-benar mencerminkan kontribusi ilmiah, kita perlu menerapkan kerangka evaluasi yang sistematis dan terstruktur. Pada slide berikutnya, kita akan membahas lima pertanyaan kunci yang berfungsi sebagai filter kritis dalam menilai metode emerging, mulai dari kejelasan research question hingga validasi evidence statistik dan error analysis. Mari kita lanjutkan ke kerangka berpikir kritis tersebut.

---

## Slide 005 - Kerangka Berpikir Kritis untuk Emerging Methods

### Narasi

Setelah pada slide sebelumnya kita menekankan bahwa peningkatan performa numerik semata belum otomatis merupakan kontribusi ilmiah, kini kita perlu menerjemahkan peringatan tersebut menjadi sebuah kerangka evaluasi yang konkret dan terstruktur. Dalam konteks penelitian jenjang magister, terutama ketika menyoroti metode-metode mutakhir seperti foundation models atau teknik learning terbaru, sangat krusial untuk memiliki filter analitis yang ketat agar tidak terjebak pada tren teknologi belaka. Slide ini menghadirkan lima pertanyaan kunci yang harus dijawab secara rigor sebelum suatu karya penelitian dapat dikategorikan sebagai kemajuan ilmiah yang valid.

Pertama, **research question** harus ditelaah ulang: apakah pertanyaan penelitian yang diajukan benar-benar jelas, terukur, dan memberikan celah pengetahuan yang signifikan, atau hanya sekadar penerapan algoritma pada dataset standar tanpa tujuan investigatif yang kuat? Kedua, **fair comparison** menuntut objektivitas dalam eksperimen. Metode baru sering kali mengklaim keunggulan karena baseline-nya dievaluasi secara asal-asalan. Kita harus memastikan model pembanding telah melalui proses hyperparameter tuning, feature engineering, dan preprocessing yang setara ketat dengan metode usulan. Ketiga, **attribution** meminta kita untuk melakukan dekomposisi penyebab kinerja. Ketika akurasi naik, apakah itu benar-benar berasal dari inovasi arsitektur atau loss function, dari strategi augmentasi data, atau murni akibat penambahan kapasitas komputasi? Keempat, **evidence** menegaskan bahwa klaim keberhasilan harus didukung oleh analisis statistik yang robust, termasuk uji signifikansi, confidence interval, serta error analysis mendalam yang mengidentifikasi pola kegagalan model pada subset data tertentu, bukan hanya mengandalkan metrik agregat. Kelima, **scientific insight** adalah tolak ukur tertinggi. Penelitian harus mampu menjawab apakah temuan tersebut mengubah pemahaman konseptual kita terhadap struktur data, hubungan kausal, atau dinamika model, atau hanya berupa rekayasa teknis incremental.

Prinsip yang menyertai kerangka ini sangat tegas: jangan pernah terpesona oleh demografi atau label marketing teknologi. Istilah seperti "State-of-the-Art" atau "SOTA" tidak berlaku sebagai bukti kualitas ilmiah. Penilaian harus selalu berlandaskan pada transparansi metodologi, reproducible code, dan logika eksperimen yang auditable. Penerapan prinsip kritis ini akan menjadi fondasi penting saat kita mendalami materi berikutnya tentang Generative Modeling, di mana kita akan membedah secara objektif bagaimana model generatif memodelkan distribusi data \( P(X) \) versus pendekatan diskriminatif \( P(Y|X) \), serta kapan penggunaan teknik tersebut benar-benar memberikan nilai tambah metodologis daripada sekadar gimmick sintesis data.

### Inti yang Harus Ditekankan

- Performa numerik hanyalah indikator awal; kontribusi ilmiah sejati terletak pada kejelasan research question, rigoritas eksperimen, dan kedalaman insight yang dihasilkan.
- Evaluasi metode baru wajib mengontrol variabel confounding melalui fair comparison, attributability, dan evidence berbasis statistik serta error analysis.
- Hindari bias konfirmasi dan hype teknologi; penilaian penelitian harus selalu berfokus pada metodologi yang transparan dan reproducible, terlepas dari label "SOTA" yang melekat.

### Transisi ke Slide Berikutnya

Dengan kerangka kritis ini sebagai panduan, kita kini siap masuk ke pembahasan teknis tentang Generative Modeling. Mari kita bedah secara fundamental bagaimana model generatif bekerja dalam memodelkan distribusi data, serta mengapa pemahaman ini krusial untuk membedakan antara kemampuan sintesis data yang canggih dengan kontribusi penelitian yang substantif.

---

## Slide 006 - Generative Modeling: Dasar

### Narasi

Pada slide ini, kita akan membahas fondasi konseptual dari *generative modeling*. Secara matematis dan filosofis, model generatif memiliki tujuan yang berbeda secara mendasar dari model prediktif konvensional. Jika model tradisional berfokus pada memetakan fitur input ke label atau nilai target, model generatif justru mempelajari distribusi probabilitas bersama dari data itu sendiri, yang secara formal direpresentasikan sebagai \( P(X) \). Dengan kata lain, alih-alih hanya mencari batas pemisah antar kelas, model ini berusaha memahami mekanisme pembentukan data, sehingga mampu menangkap variasi, korelasi, dan struktur intrinsik yang mendasari dataset asli.

Perbedaan prinsipil antara pendekatan *generative* dan *discriminative* dapat diklasifikasikan ke dalam tiga dimensi utama. Pertama, dari segi tujuan pemodelan, model diskriminatif belajar untuk mengoptimalkan batas keputusan (*decision boundary*) guna memisahkan kategori, sedangkan model generatif memodelkan distribusi bersama (*joint distribution*) dari seluruh variabel dalam data. Kedua, dari segi keluaran, model diskriminatif memberikan estimasi probabilistik bersyarat seperti \( P(Y|X) \), sementara model generatif memungkinkan proses *sampling* untuk menghasilkan sampel data baru \( X \) yang realistis namun belum pernah diamati sebelumnya. Ketiga, dari segi aplikasi, model diskriminatif mendominasi tugas klasifikasi dan regresi standar, whereas model generatif menjadi tulang punggung untuk augmentasi data, deteksi anomali berbasis kepadatan, serta generasi data sintetis.

Memahami model generatif menjadi semakin krusial dalam riset *data mining* tingkat lanjut karena beberapa alasan strategis. Pertama, kemampuan menghasilkan data sintetis sangat efektif untuk menangani masalah ketidakseimbangan kelas (*class imbalance*) melalui augmentasi data yang mempertahankan distribusi statistik asli. Kedua, dalam era regulasi privasi data yang ketat, generasi *synthetic tabular data* memungkinkan berbagi insight analitik tanpa mengungkap informasi sensitif individu, menjadikannya solusi kompromi antara utilitas data dan kepatuhan etika. Ketiga, proses pembelajaran representasi laten (*latent representation*) dalam model generatif memberikan eksplorasi struktural yang mendalam, yang sering kali berfungsi sebagai langkah pra-pemrosesan canggih sebelum membangun pipeline analitik atau prediksi. Pendekatan ini selaras dengan kerangka berpikir kritis pada slide sebelumnya, di mana kita harus selalu memastikan bahwa manfaat tambahan dari metode baru benar-benar berasal dari inovasi algoritma, bukan sekadar manipulasi data atau bias evaluasi.

### Inti yang Harus Ditekankan

- Model generatif mempelajari distribusi bersama \( P(X) \) untuk memahami mekanisme pembentukan data, bukan sekadar memprediksi label atau nilai target.
- Perbedaan fundamental terletak pada tiga aspek: tujuan pemodelan (batas keputusan vs distribusi bersama), jenis keluaran (prediksi bersyarat vs sampling data baru), dan domain aplikasi (klasifikasi/regresi vs augmentasi/deteksi anomali/sintesis).
- Nilai strategis model generatif mencakup penanganan *class imbalance*, perlindungan privasi melalui data sintetis, dan ekstraksi representasi laten yang kaya untuk eksplorasi dan pemahaman struktur data.

### Transisi ke Slide Berikutnya

Setelah memahami konsep dasar dan motivasi penggunaan model generatif, langkah selanjutnya adalah mengeksplorasi implementasi teknisnya. Pada slide berikutnya, kita akan membedah tiga keluarga arsitektur utama yang mendominasi bidang ini: Variational Autoencoder (VAE), Generative Adversarial Network (GAN), dan Diffusion Models, beserta perbandingan karakteristik pelatihan, kualitas sampel, serta tantangan penerapannya khusus pada data tabular.

---

## Slide 007 - VAE, GAN, dan Diffusion

### Narasi

Setelah membahas dasar pemodelan generatif pada slide sebelumnya, di mana kita membedakan pendekatan generatif yang memodelkan distribusi bersama \( P(X) \) versus diskriminatif yang fokus pada \( P(Y|X) \), kini kita masuk ke tiga arsitektur utama yang mendominasi literatur mutakhir: Variational Autoencoder (VAE), Generative Adversarial Network (GAN), dan Diffusion Models. Ketiganya merupakan fondasi dari generasi data sintetis, namun masing-masing memiliki mekanisme matematis, strategi pelatihan, dan trade-off yang sangat berbeda.

Pertama, VAE menggabungkan prinsip teori informasi dan inferensi Bayesian melalui struktur encoder-decoder. Encoder memetakan data input ke dalam ruang laten probabilistik, bukan titik deterministik, sehingga setiap titik dalam latent space merepresentasikan distribusi Gaussian. Decoder kemudian melakukan rekonstruksi data dari sampel yang diambil dari distribusi tersebut. Proses optimasinya tidak menggunakan loss function standar, melainkan Evidence Lower Bound (ELBO). ELBO secara simultan meminimalkan error rekonstruksi dan menjaga agar distribusi laten tetap mendekati prior standar, yang menjamin kelancaran interpolasi, regularisasi alami, dan kualitas sampling yang konsisten.

Kedua, GAN memperkenalkan paradigma kompetitif melalui dua jaringan neural yang dilatih secara bersamaan: Generator dan Discriminator. Generator bertugas menghasilkan data sintetis yang semakin realistis, sementara Discriminator berusaha membedakan antara data asli dan data buatan. Pelatihan ini berlangsung dalam permainan minimax, di mana kedua model saling meningkatkan kemampuan satu sama lain. Meskipun mampu menghasilkan sampel dengan ketajaman struktural atau visual yang luar biasa, GAN terkenal sulit distabilkan selama pelatihan, sensitif terhadap hyperparameter, dan rentan terhadap mode collapse, di mana generator hanya memproduksi variasi terbatas dari data target.

Ketiga, Diffusion Model bekerja berdasarkan prinsip proses stokastik bertahap. Model ini terdiri dari dua arah: forward process yang secara iteratif menambahkan noise Gaussian hingga data berubah menjadi noise murni, dan reverse process yang mempelajari cara menghilangkan noise tersebut langkah demi langkah untuk merekonstruksi data asli. Berbeda dengan VAE yang mengoptimalkan batas bawah likelihood, atau GAN yang mengandalkan kompetisi adversarial, Diffusion mengandalkan prediksi residual noise pada setiap timesteps. Pendekatan ini terbukti sangat stabil, jarang mengalami mode collapse, dan mampu menghasilkan sampel dengan kualitas tertinggi saat ini, meskipun membutuhkan komputasi lebih intensif saat sampling karena harus melewati banyak langkah denoising.

Jika kita merangkum perbandingan ketiga keluarga ini, terdapat trade-off yang jelas antara stabilitas pelatihan, kualitas output, risiko mode collapse, dan kecepatan inference. VAE menawarkan keseimbangan yang baik dengan sampling cepat, GAN unggul dalam ketajaman tetapi rawan tidak stabil, sedangkan Diffusion memberikan kualitas terbaik dengan biaya komputasi sampling yang lebih tinggi. Ketika diterapkan pada data tabular, tantangan utamanya berbeda dari domain gambar atau teks. Data tabular umumnya mengandung tipe fitur campuran antara numerik dan kategorikal, sering kali disertai missing values dan distribusi yang sangat non-normal. Oleh karena itu, model generatif untuk tabular tidak dapat sekadar menyalin arsitektur CNN atau Transformer secara mentah. Diperlukan modifikasi khusus, seperti penggunaan embedding untuk fitur kategorikal, penanganan missing data secara eksplisit, serta desain loss function yang mampu menangkap korelasi antar kolom tanpa merusak struktur diskrit maupun kontinu dari dataset.

### Inti yang Harus Ditekankan

- Mekanisme pelatihan VAE (ELBO & latent space probabilistik), GAN (adversarial minimax), dan Diffusion (denoising bertahap) memiliki filosofi matematis dan trade-off yang berbeda, sehingga pemilihan arsitektur harus didasarkan pada tujuan riset dan ketersediaan sumber daya komputasi.
- Perbandingan stabilitas training, kualitas sampel, kerentanan terhadap mode collapse, dan kecepatan sampling menjadi kriteria evaluasi kritis sebelum memilih model generatif untuk eksperimen tingkat magister.
- Penerapan pada data tabular menuntut penanganan khusus terhadap fitur campuran, missing values, dan distribusi non-normal, bukan sekadar adaptasi langsung dari model vision atau NLP tanpa penyesuaian arsitektur dan metrik evaluasi.

### Transisi ke Slide Berikutnya

Dengan memahami karakteristik dan keterbatasan masing-masing arsitektur generatif, langkah selanjutnya adalah mengevaluasi bagaimana model-model ini diaplikasikan secara spesifik untuk menghasilkan Synthetic Tabular Data, serta mempertimbangkan motivasi praktis, risiko kebocoran privasi, dan pertanyaan penelitian kritis yang perlu diuji secara empiris dalam konteks data mining lanjutan.

---

## Slide 008 - Synthetic Tabular Data

### Narasi

Setelah membahas fondasi arsitektur dari VAE, GAN, dan Diffusion pada slide sebelumnya, kita kini menyoroti aplikasi praktisnya dalam domain data tabular melalui generasi Synthetic Tabular Data. Dalam praktik data mining tingkat lanjut, sintesis data bukan sekadar teknik augmentasi, melainkan strategi metodologis yang menjawab keterbatasan akses dan kualitas data nyata. Motivasi utamanya dapat dikelompokkan menjadi empat pilar. Pertama, aspek privasi dan kepatuhan regulasi, di mana institusi dapat mendistribusikan dataset kepada pihak ketiga atau komunitas riset tanpa membocorkan identitas atau informasi sensitif dari subjek asli. Kedua, penanganan ketidakseimbangan kelas, di mana model generatif dapat mensintesis sampel tambahan untuk kelas minoritas guna menyeimbangkan distribusi prior sebelum pelatihan classifier. Ketiga, augmentasi dataset, yang sangat krusial ketika volume data terbatas, mahal untuk diperoleh, atau memerlukan anotasi ahli yang intensif. Keempat, benchmarking dan validasi algoritma, memungkinkan peneliti menguji robustness dan generalisasi model dalam skenario controlled environment tanpa bergantung pada data sensitif yang sering kali memiliki batasan lisensi ketat.

Namun, sebagai peneliti S2, kita wajib mengkritisi asumsi bahwa data sintetis selalu aman dan siap pakai. Terdapat risiko inheren yang sering terabaikan dalam implementasi naif. Model generatif dapat overfit terhadap noise atau artefak sampling pada data asli, sehingga menghasilkan pola palsu yang menyesatkan proses inferensi downstream. Evaluasi yang hanya berpatokan pada fidelitas statistik—seperti kesamaan distribusi marginal atau jarak korelasi—sudah tidak memadai lagi untuk menjamin kelayakan data. Lebih penting lagi, klaim privasi sering kali bersifat ilusif. Status "sintetis" tidak secara otomatis menghapus risiko re-identifikasi atau serangan membership inference, terutama jika mekanisme regularisasi seperti clipping gradient, noise injection, atau jaminan differential privacy tidak diintegrasikan secara eksplisit ke dalam fungsi loss generator. Tanpa protokol keamanan berlapis, data sintetis justru dapat menjadi vektor kebocoran informasi yang sulit dideteksi.

Dari dinamika antara peluang dan risiko tersebut, muncul pertanyaan penelitian mendasar yang menjadi poros diskusi kita: apakah data sintetis mampu menggantikan data asli secara utuh untuk tahap training maupun evaluasi model? Jawaban atas pertanyaan ini tidak bersifat absolut, melainkan bergantung pada trade-off antara fidelitas, utility, dan privasi, serta bagaimana ketiganya diukur secara empiris. Untuk menjawabnya secara rigor, kita memerlukan kerangka evaluasi multidimensi yang memisahkan penilaian kualitas statistik dari dampak fungsional pada model downstream dan potensi kebocoran privasi. Kerangka inilah yang akan kita bedah secara teknis pada slide berikutnya.

### Inti yang Harus Ditekankan

- Data sintetis tabular lahir dari kebutuhan praktis (privasi, imbalance, augmentasi, benchmarking), namun penggunaannya harus dibarengi dengan kesadaran kritis terhadap risiko pembelajaran noise dan pola palsu.
- Fidelitas statistik saja tidak cukup; status "sintetis" tidak menjamin privasi otomatis tanpa mekanisme perlindungan eksplisit seperti differential privacy atau analisis serangan membership inference.
- Pertanyaan penelitian inti mengarah pada validasi empiris: penggantian data asli harus dibuktikan melalui evaluasi downstream utility dan security risk, bukan hanya kesamaan distribusi.

### Transisi ke Slide Berikutnya

Untuk menjawab pertanyaan penelitian tersebut secara metodologis, kita perlu beralih ke kerangka evaluasi komprehensif yang memetakan tiga dimensi kunci: fidelitas, utility, dan privasi, beserta metrik dan diagram alir validasinya.

---

## Slide 009 - Evaluasi Data Sintetis

### Narasi

Pada slide ini, kita beralih dari motivasi dan risiko pembuatan data sintetis menuju kerangka evaluasi yang rigor. Mengingat pertanyaan penelitian pada slide sebelumnya menanyakan apakah data sintetis mampu menggantikan data asli, maka penilaian kualitas tidak dapat diserahkan pada satu metrik tunggal. Kita harus mengevaluasi data sintetis melalui tiga dimensi yang saling berinteraksi: Fidelity, Utility, dan Privacy. Ketiganya membentuk fondasi metodologis untuk validasi empiris dalam penelitian data mining tingkat lanjut.

Dimensi pertama adalah Fidelity atau kesetiaan statistik. Pertanyaan utamanya adalah apakah distribusi data sintetis secara akurat mereplikasi karakteristik data asli? Evaluasi ini berfokus pada kemiripan marginal distribution, struktur korelasi antar fitur, dan pola interaksi multivariat. Dalam praktik, kita dapat menggunakan metrik seperti Maximum Mean Discrepancy (MMD), Frechet Distance, atau menghitung distance matrix berdasarkan korelasi Pearson/Spearman antara data asli dan sintetis. Jika fidelity rendah, berarti generator gagal menangkap kompleksitas data sumber, sehingga setiap analisis downstream akan bermasalah sejak awal.

Dimensi kedua adalah Utility atau kegunaan praktis. Di sini, kita menguji apakah model machine learning yang dilatih sepenuhnya pada data sintetis tetap menghasilkan performa yang kompetitif ketika diujikan pada data uji asli. Metrik yang dipakai mengikuti standar evaluasi model konvensional, seperti accuracy, F1-score, precision-recall, atau AUC-ROC. Perlu dicatat bahwa utility tinggi tidak selalu berkorelasi linear dengan fidelity tinggi, karena model mungkin hanya belajar subspace fitur yang relevan untuk tugas prediksi tanpa mereplikasi seluruh varians data. Namun, untuk tujuan penelitian, kita harus membuktikan bahwa penurunan kinerja downstream berada dalam batas toleransi yang dapat dipertanggungjawabkan secara statistik.

Dimensi ketiga adalah Privacy atau jaminan privasi. Karena salah satu pilar utama sintesis data adalah mitigasi risiko kebocoran informasi sensitif, kita harus melakukan audit keamanan terhadap data sintetis. Evaluasi ini biasanya melibatkan simulasi serangan seperti Membership Inference Attack, yang mengukur seberapa besar kemungkinan algoritma mendeteksi apakah suatu record spesifik berasal dari dataset pelatihan asli. Selain itu, nearest-neighbor distance antara sampel sintetis dan data asli juga dihitung; jarak yang terlalu kecil mengindikasikan overfitting atau kebocoran identitas. Privasi yang baik harus menyeimbangkan utilitas data tanpa mengorbankan anonimitas subjek.

Diagram evaluasi pada slide ini menggambarkan alur logis tersebut secara visual. Data asli masuk ke dalam generative model untuk menghasilkan data sintetis. Dari output generator, evaluasi bercabang menjadi tiga jalur paralel: analisis kemiripan distribusi untuk fidelity, pengujian model downstream untuk utility, dan analisis risiko kebocoran untuk privacy. Ketiga jalur ini harus dijalankan secara simultan dan terkontrol. Tanpa integrasi ketiganya, kita berisiko menghasilkan dataset yang tampak realistis secara visual namun mengandung bias struktural, sangat privat hingga kehilangan nilai analitis, atau justru membocorkan informasi sensitif meskipun memiliki fidelity tinggi.

### Inti yang Harus Ditekankan

- Evaluasi data sintetis wajib bersifat multidimensi; fidelity, utility, dan privacy harus diukur secara bersamaan karena terdapat trade-off alami di antaranya.
- Tidak ada metrik tunggal yang cukup untuk klaim "data sintetis siap pakai"; validasi harus didasarkan pada benchmark downstream task yang jelas dan reproducible.
- Diagram evaluasi menegaskan bahwa proses validasi bersifat paralel dan iteratif, bukan sekadar perbandingan distribusi mentah, melainkan uji fungsional dan keamanan yang ketat.

### Transisi ke Slide Berikutnya

Setelah memahami kerangka teoretis evaluasi ini, langkah selanjutnya adalah menerjemahkannya ke dalam implementasi praktis. Pada slide berikutnya, kita akan membahas alur kerja lengkap sintesis data tabular beserta contoh pseudocode Python untuk menjalankan pipeline evaluasi fidelity, utility, dan privacy secara sistematis dan terstruktur.

---

## Slide 010 - Workflow Sintesis Data Tabular

### Narasi

Setelah pada slide sebelumnya kita menguraikan tiga dimensi kunci evaluasi data sintetis, yaitu fidelity, utility, dan privacy, langkah selanjutnya adalah memahami bagaimana kedua hal tersebut dioperasionalkan secara metodologis. Sintesis data tabular tidak dapat dilakukan secara ad-hoc; diperlukan alur kerja terstruktur yang menjamin reproduktibilitas dan validitas ilmiah, terutama dalam konteks penelitian tingkat magister. Alur ini terdiri dari enam tahapan berurutan yang membentuk siklus iteratif. Tahap pertama dimulai dengan analisis data asli melalui Exploratory Data Analysis (EDA) untuk memetakan distribusi marginal, korelasi antar kolom, pola missing value, serta outlier. Pemahaman mendalam pada tahap ini menjadi fondasi pemilihan arsitektur model generatif yang tepat. Tahap kedua adalah preprocessing, yang mencakup encoding variabel kategorikal, scaling numerik, serta penanganan skewness atau imbalance kelas. Tanpa preprocessing yang konsisten, model generatif akan kesulitan menangkap struktur data yang kompleks dan menghasilkan bias sistematis.

Tahap ketiga melibatkan pelatihan model generatif, seperti CTGAN, TVAE, CopulaGAN, atau arsitektur berbasis diffusion, menggunakan data yang telah diproses. Setelah model konvergen, tahap keempat melakukan sampling untuk menghasilkan dataset sintetis dengan jumlah baris yang dapat disesuaikan. Hasil sampling kemudian masuk ke tahap kelima, yaitu evaluasi komprehensif terhadap fidelity, utility, dan privacy sesuai kerangka yang telah dibahas sebelumnya. Karena performa awal jarang memenuhi seluruh kriteria sekaligus, tahap keenam menekankan pentingnya iterasi kembali ke langkah satu hingga lima. Penyesuaian hyperparameter, perubahan arsitektur, atau revisi strategi preprocessing dilakukan secara sistematis berdasarkan hasil evaluasi sebelum dataset sintetis dinyatakan layak untuk digunakan.

Pada bagian pseudocode Python, alur ini direpresentasikan secara konseptual untuk memastikan praktik validasi yang ketat. Baris pertama melakukan pemisahan data asli menjadi set training dan testing menggunakan `train_test_split` dengan proporsi 80-20 dan seed tetap untuk menjamin reproduktibilitas eksperimen. Bagian yang dikomentari menunjukkan bahwa model generatif hanya dilatih pada `X_train`, kemudian melakukan sampling untuk menghasilkan `X_syn`. Poin kritis terletak pada evaluasi downstream: model prediktif standar dilatih terpisah pada data asli (`model_real`) dan data sintetis (`model_syn`), lalu keduanya diuji pada `X_test` yang murni berasal dari data asli. Perbandingan metrik seperti accuracy, F1-score, atau AUC antara kedua model inilah yang mengukur utility sejati. Catatan penting yang harus selalu diingat adalah pemisahan ketat antara data asli dan sintetis selama evaluasi downstream untuk mencegah data leakage, serta pelaporan varians hasil sampling dengan menjalankan beberapa seed berbeda guna menangkap ketidakpastian stokastik inherent pada model generatif.

### Inti yang Harus Ditekankan

- Workflow sintesis data tabular bersifat siklik dan iteratif; hasil evaluasi fidelity, utility, dan privacy secara langsung menentukan kebutuhan iterasi ulang pada EDA, preprocessing, atau konfigurasi model.
- Validasi downstream harus memisahkan data asli dan sintetis secara mutlak; data sintetis hanya boleh digunakan sebagai pengganti training set, never sebagai proxy untuk test/validation set.
- Pelaporan hasil penelitian wajib menyertakan variasi performa akibat randomness sampling dengan menjalankan multi-seed, sehingga klaim utility dan privacy didukung oleh bukti statistik yang robust.

### Transisi ke Slide Berikutnya

Dengan workflow yang sudah mapan dan protokol evaluasi yang ketat, kita kini siap menelaah perkembangan paling mutakhir yang mengubah paradigma ini secara fundamental, yaitu hadirnya Tabular Foundation Models yang menawarkan pendekatan pre-trained lintas domain untuk reasoning few-shot dan zero-shot.

---

## Slide 011 - Tabular Foundation Models

### Narasi

Tabular Foundation Models merepresentasikan pergeseran paradigma dalam pemrosesan data tabel dari pendekatan model yang spesifik-domain menjadi arsitektur umum yang telah dilatih secara masif pada kumpulan data tabel yang heterogen. Berbeda dengan algoritma tradisional yang umumnya memerlukan pelatihan ulang untuk setiap skema, distribusi, atau tugas prediksi tertentu, model fondasi tabular dirancang untuk menangkap pola struktural, semantik, dan statistik yang mendasari berbagai jenis tabel. Target utamanya adalah memungkinkan transfer learning, kemampuan few-shot learning, bahkan zero-shot reasoning pada downstream task tanpa memerlukan fine-tuning ekstensif. Dalam konteks penelitian tingkat magister, pendekatan ini menuntut evaluasi kritis mengenai apakah investasi komputasi dan akuisisi data skala besar untuk melatih model semacam ini memberikan peningkatan marginal yang signifikan dibandingkan pipeline klasik yang lebih efisien.

Secara teknis, ide dasar dari arsitektur ini berpusat pada transformasi struktur tabel yang inherently non-sekuensial menjadi representasi yang kompatibel dengan model berbasis transformer atau sequence modeling. Proses tokenisasi dapat diterapkan pada tiga level granularitas: sel, baris, atau kolom. Tokenisasi sel mempertahankan detail numerik dan kategorikal paling halus namun meningkatkan beban komputasi secara eksponensial; tokenisasi baris menangkap dependensi intra-record secara utuh; sedangkan tokenisasi kolom fokus pada representasi fitur beserta metadata tipenya. Selain itu, model harus mempelajari representasi kolom serta relasi fungsional, korelasional, atau kausal antar kolom. Selama fase pre-training, model dikenalkan pada beberapa objective utama: mask cell prediction untuk memulihkan nilai yang hilang berdasarkan konteks lokal dan global; row reconstruction untuk menjaga konsistensi struktural antar atribut; serta schema understanding yang mengajarkan model mengenali tipe data, hierarki, dan aturan validasi skema sebelum melakukan inferensi pada konten tabel aktual.

Dari perspektif riset, keberadaan Tabular Foundation Models membuka sejumlah pertanyaan metodologis yang harus dijawab melalui eksperimen yang terkontrol dan reproducible. Pertama, apakah model ini benar-benar mampu mengalahkan ensemble method klasik seperti Gradient Boosted Decision Trees (GBDT) yang telah terbukti robust dan efisien untuk data tabular? Kedua, apa saja overhead biaya pelatihan dan inference, serta seberapa besar kebutuhan data berkualitas tinggi dan diversifikasi skema untuk mencapai generalisasi yang stabil? Ketiga, bagaimana tingkat interpretabilitas dan transparansi keputusan model fondasi dibandingkan dengan metode klasik yang menyediakan feature importance, split rules, atau decision path yang mudah diaudit? Sebagai peneliti, mahasiswa diharapkan tidak hanya mengandalkan metrik akurasi tunggal, tetapi juga merancang ablation study pada mekanisme tokenisasi, menganalisis scaling behavior, serta menguji ketahanan model terhadap missing mechanisms, class imbalance, dan distribution shift yang lazim ditemui pada dataset riil.

Evaluasi terhadap klaim-klaim teoretis ini harus selalu dikaitkan dengan praktik evaluasi yang ketat, termasuk pemisahan data asli dan sintetis yang jelas serta pelaporan varians sampling, sebagaimana dibahas pada alur kerja sintesis data sebelumnya. Ketika fondasi model mulai diintegrasikan ke dalam pipeline, batas antara preprocessing, representasi, dan pembelajaran mesin menjadi semakin cair, sehingga menuntut standarisasi benchmarking yang komprehensif.

### Inti yang Harus Ditekankan

- Tabular Foundation Models memanfaatkan pre-training masif pada data tabel beragam untuk mendukung transfer learning, few-shot, dan zero-shot reasoning tanpa fine-tuning berat.
- Mekanisme tokenisasi (sel/baris/kolom) dan objective pre-training (mask cell prediction, row reconstruction, schema understanding) menjadi fondasi representasi struktur tabular.
- Penelitian kritis diperlukan untuk mengevaluasi keunggulan vs GBDT, efisiensi komputasi, kebutuhan data, serta trade-off interpretabilitas dan transparansi model.

### Transisi ke Slide Berikutnya

Dengan memahami arsitektur, mekanisme representasi, dan pertanyaan riset yang mendasari Tabular Foundation Models, langkah logis berikutnya adalah menelaah bukti empiris yang menunjukkan kapan model-model ini benar-benar unggul atau justru kalah bersaing dengan baseline konvensional. Mari kita bahas hasil perbandingan langsung antara fondasi model dan baseline kuat, serta implikasi praktisnya terhadap desain eksperimen dan pemilihan metode dalam praktik data mining modern.

---

## Slide 012 - Fondasi Model vs Baselines Kuat

### Narasi

Setelah membahas konsep tokenisasi, mekanisme pre-training, dan tujuan pembelajaran mandiri pada model fondasi tabular di slide sebelumnya, kita kini harus menyoroti realitas empiris yang dominan dalam literatur data mining terkini. Hasil-hasil penelitian menunjukkan bahwa algoritma berbasis ensemble tree, khususnya GBDT seperti XGBoost, LightGBM, dan CatBoost, masih memegang posisi sangat kuat pada sebagian besar benchmark tabular. Model fondasi tabular memang menawarkan potensi peningkatan performa yang signifikan, terutama ketika berhadapan dengan dataset berskala sangat besar yang memiliki struktur relasional, dependensi kolom yang kompleks, atau pola semantik yang sulit direpresentasikan secara manual. Namun, keunggulan ini tidak bersifat universal. Performa model fondasi sangat fluktuatif dan tidak selalu konsisten melampaui baseline klasik di setiap jenis dataset, tergantung pada distribusi data, rasio fitur terhadap sampel, dan karakteristik target variable.

Dari temuan empiris tersebut, terdapat implikasi metodologis yang krusial bagi praktik penelitian tingkat magister. Pertama, proses benchmarking wajib mencakup kumpulan dataset yang heterogen dan representatif, bukan hanya mengandalkan satu atau dua dataset populer, untuk menghindari bias seleksi dan overfitting terhadap karakteristik tertentu. Kedua, baseline seperti GBDT tidak boleh dievaluasi menggunakan konfigurasi factory-default saja. Dalam standar penelitian yang ketat, baseline harus melalui proses hyperparameter optimization yang sistematis agar perbandingan menjadi adil dan mencerminkan potensi maksimal masing-masing pendekatan. Ketiga, aspek efisiensi komputasi tidak boleh diabaikan. Peneliti wajib melaporkan metrik waktu training, latency inference, serta konsumsi memori (RAM/VRAM), mengingat model fondasi umumnya menuntut infrastruktur yang jauh lebih berat dibandingkan metode tradisional yang ringan dan cepat.

Pertanyaan mendasar yang perlu dijawab secara kritis adalah kapan model fondasi tabular benar-benar layak dipilih sebagai solusi inti, bukan sekadar alternatif atau eksperimen akademis. Jawabannya terletak pada kondisi di mana data tersedia dalam volume masif, struktur tabel mengandung ketergantungan kompleks yang sulit ditangkap oleh fitur statis, dan biaya komputasi tambahan dapat dibenarkan oleh peningkatan generalisasi, kemampuan few-shot learning, atau transfer knowledge antar-dataset. Pada skenario tersebut, investasi dalam fine-tuning atau prompt engineering model fondasi akan memberikan nilai tambah yang nyata. Sebaliknya, untuk masalah tabular konvensional dengan data terbatas atau kebutuhan deployment low-latency, pendekatan ensemble berbasis tree tetap menjadi pilihan yang lebih pragmatis, interpretable, dan hemat sumber daya.

### Inti yang Harus Ditekankan

- Dominasi GBDT masih sangat kuat pada sebagian besar kasus tabular umum dan dataset berskala menengah.
- Keunggulan foundation model bersifat kondisional: memerlukan data besar, struktur kompleks, dan infrastruktur komputasi memadai.
- Evaluasi riset harus adil: baseline wajib di-tuning penuh, benchmark mencakup dataset beragam, dan metrik komputasi (waktu/memori) harus dilaporkan secara transparan.
- Keputusan pemilihan model didasarkan pada trade-off objektif antara performa prediksi, skalabilitas data, interpretabilitas, dan ketersediaan sumber daya komputasi.

### Transisi ke Slide Berikutnya

Untuk memastikan bahwa klaim kinerja model fondasi versus baseline klasik benar-benar valid secara ilmiah dan bebas dari bias evaluasi, langkah selanjutnya adalah menerapkan kerangka eksperimen yang ketat. Mari kita lanjutkan ke slide berikutnya yang membahas checklist eksperimen adil, mulai dari penggunaan multiple seeds, pengujian generalisasi lintas dataset, hingga teknik ablation study untuk mengisolasi kontribusi masing-masing komponen arsitektur model.

---

## Slide 013 - Eksperimen Adil untuk Tabular Foundation Models

### Narasi

Setelah pada slide sebelumnya kita menyoroti bahwa model fondasi tabular tidak selalu unggul mutlak dibandingkan baseline kuat seperti GBDT, langkah kritis selanjutnya dalam penelitian tingkat magister adalah memastikan bahwa setiap klaim kinerja didasarkan pada eksperimen yang adil dan metodologis. Perbandingan yang tidak terkontrol sering kali menguntungkan salah satu pihak karena perbedaan setup, preprocessing, atau optimisasi yang tidak setara. Oleh karena itu, kita perlu menerapkan kerangka evaluasi yang ketat untuk menguji apakah model fondasi benar-benar memberikan peningkatan signifikan, atau sekadar variasi arsitektur tanpa gain substantif.

Mari kita uraikan enam poin dalam checklist eksperimen adil ini. Pertama, baseline GBDT wajib di-tuning secara menyeluruh melalui hyperparameter optimization, bukan dijalankan dengan konfigurasi default. Kedua, skala dataset harus selaras dengan asumsi desain model fondasi; mengevaluasi model yang dilatih untuk pola kompleks pada dataset kecil akan menghasilkan bias negatif. Ketiga, proses embedding dan tokenizer harus diverifikasi ketat agar tidak terjadi data leakage, misalnya dengan memastikan bahwa statistik global atau informasi dari set validasi/test tidak pernah digunakan saat membangun representasi fitur. Keempat, evaluasi performa harus menggunakan multiple seeds disertai perhitungan confidence interval untuk menangkap varians acak dan menjamin stabilitas hasil. Kelima, lakukan cross-dataset generalization test guna mengukur apakah keunggulan model bertahan lintas distribusi data yang heterogen. Terakhir, lakukan ablation study terhadap komponen inti model, seperti fase pre-training, strategi fine-tuning, atau mekanisme prompt, untuk mengisolasi kontribusi masing-masing blok terhadap performa akhir.

Implementasi prinsip multiple seeds dapat diwujudkan melalui skrip berikut:
```python
scores = []
for seed in [0, 1, 2, 3, 4]:
    model = BaselineModel(random_state=seed)
    model.fit(X_train, y_train)
    scores.append(evaluate(model, X_test, y_test))

print(f"Mean: {mean(scores):.4f} ± {std(scores):.4f}")
```
Dalam praktik penelitian, satu kali eksekusi model tidak cukup untuk menarik kesimpulan ilmiah. Loop di atas menjalankan pelatihan dan evaluasi berulang kali dengan seed acak yang berbeda, kemudian mengumpulkan metrik performa ke dalam list. Hasil akhir tidak disajikan sebagai angka tunggal, melainkan sebagai rata-rata beserta standar deviasinya. Pendekatan ini memberikan gambaran statistik yang robust tentang konsistensi model, sekaligus memenuhi standar reproduktibilitas yang menjadi syarat utama publikasi di konferensi internasional bereputasi.

Dengan menerapkan checklist ini, kita telah membangun landasan empiris yang kuat untuk membedakan antara noise eksperimental dan peningkatan kinerja nyata. Evaluasi yang ketat terhadap baseline, kontrol kebocoran data, pengujian silang dataset, serta analisis komponen model akan menentukan apakah fondasi tabular layak diadopsi atau masih memerlukan penyempurnaan arsitektural. Pembahasan ini juga membuka jalan menuju eksplorasi bagaimana model bahasa besar berinteraksi langsung dengan struktur tabel, yang akan kita telaah lebih lanjut pada slide berikutnya.

### Inti yang Harus Ditekankan

- Eksperimen adil menuntut baseline yang dioptimalkan penuh, bukan sekadar dijalankan dengan setting default.
- Kesesuaian skala dataset dan pencegahan data leakage selama embedding/tokenizer adalah prasyarat fundamental sebelum membandingkan model.
- Penggunaan multiple seeds dan confidence interval wajib diterapkan untuk menjamin reproduktibilitas dan stabilitas statistik hasil evaluasi.
- Ablation study dan cross-dataset generalization test diperlukan untuk mengisolasi kontribusi komponen model dan menguji ketahanan model di luar distribusi data pelatihan.

### Transisi ke Slide Berikutnya

Setiap kerangka eksperimen yang ketat akan semakin relevan ketika kita mulai memanfaatkan Large Language Model untuk memahami dan memanipulasi data tabel secara langsung, di mana kemampuan zero-shot dan few-shot menawarkan fleksibilitas baru namun juga membawa risiko halinasi yang perlu dikontrol.

---

## Slide 014 - LLM for Table Understanding

### Narasi

Setelah kita menekankan pentingnya desain eksperimen yang adil dan rigor dalam mengevaluasi foundation model untuk data tabular pada slide sebelumnya, kini kita beralih ke salah satu aplikasi paling transformatif dari Large Language Models (LLM) dalam domain ini, yaitu pemahaman tabel atau *table understanding*. Kapabilitas LLM telah melampaui pemrosesan teks linier dan kini mampu mengurai struktur, relasi, serta semantik yang terkandung dalam matriks data tabular secara kontekstual.

Dalam ekosistem data mining modern, LLM memperkuat lima tugas inti yang sebelumnya bergantung pada pemrograman eksplisit atau algoritma statistik tradisional. Pertama, *Table QA* memungkinkan peneliti atau analis mengajukan pertanyaan berbasis bahasa alami terhadap dataset tabel dan menerima jawaban yang dipetik langsung dari sel terkait tanpa penulisan query manual. Kedua, *schema linking* berfungsi memetakan nama kolom yang ambigu atau singkatan teknis ke representasi semantik yang baku, sehingga meminimalisir kesalahan interpretasi struktur data. Ketiga, pada tahap *data cleaning*, LLM dapat melakukan imputasi nilai hilang berdasarkan pola baris-kolom, melakukan deduplikasi cerdas, serta mendeteksi *outlier* dengan mempertimbangkan konteks domain. Keempat, *feature engineering* otomatis dapat dihasilkan melalui inferensi LLM yang mengenali interaksi nonlinier antar variabel. Kelima, kemampuan *natural language to pandas/SQL* menerjemahkan instruksi analitis menjadi skrip kode yang siap dieksekusi, mempercepat iterasi Eksploratory Data Analysis (EDA) secara drastis.

Keunggulan utama integrasi LLM dalam pipeline penelitian terletak pada efisiensi sumber daya dan fleksibilitas adaptasi. Dukungan terhadap *zero-shot* dan *few-shot learning* memungkinkan model beroperasi pada dataset baru tanpa memerlukan proses *retraining* atau fine-tuning yang memakan waktu komputasi besar. Selain itu, LLM unggul dalam menangkap nuansa bahasa alami, sehingga mampu menafsirkan permintaan analitis yang kompleks atau multi-kondisi, sesuatu yang sering kali kaku jika hanya mengandalkan pendekatan berbasis aturan (*rule-based*).

Namun, sebagai peneliti tingkat magister, kita harus memandang keterbatasan ini secara kritis. LLM tidak dioptimalkan untuk komputasi statistik presisi tinggi; mereka beroperasi berdasarkan distribusi probabilitas token, bukan perhitungan numerik eksak. Konsekuensinya, risiko *hallucination* tetap ada, di mana model dapat menghasilkan nilai agregat yang menyimpang dari data asli atau bahkan kode Python/SQL yang tampak syntactically correct namun mengandung logika yang keliru. Validasi silang, verifikasi manual, dan prinsip *human-in-the-loop* wajib diterapkan sebelum output LLM diadopsi sebagai bagian dari temuan empiris atau basis generalisasi penelitian.

### Inti yang Harus Ditekankan

- LLM memperluas cakupan tugas data mining tabular (QA, schema linking, cleaning, feature engineering, NL-to-code) dengan memanfaatkan pemahaman semantik kontekstual.
- Fleksibilitas zero-shot/few-shot menghilangkan beban retraining, namun menuntut validasi ketat karena sifat model yang probabilistik, bukan deterministik.
- Risiko hallucination numerik dan sintaksis mengharuskan peneliti menerapkan protokol verifikasi independen dan menjaga prinsip reproduktibilitas dalam setiap eksperimen.

### Transisi ke Slide Berikutnya

Memahami bahwa kinerja LLM sangat bergantung pada bagaimana contoh dan instruksi disusun dalam prompt, langkah metodologis berikutnya adalah membedah mekanisme In-Context Learning, termasuk mengapa pendekatan ini menjadi fondasi eksperimen cepat, serta risiko sensitivitas urutan dan konsistensi yang perlu dikontrol dalam riset tingkat lanjut.

---

## Slide 015 - In-Context Learning

### Narasi

In-Context Learning (ICL) merupakan mekanisme fundamental dalam arsitektur model bahasa besar yang memungkinkan model mengadaptasi perilakunya secara instan berdasarkan contoh-contoh yang disediakan langsung dalam prompt, tanpa melakukan pembaruan bobot atau proses pelatihan ulang. Berbeda dengan paradigma data mining tradisional yang mengandalkan ekstraksi fitur manual dan penyesuaian parameter melalui backpropagation, ICL memanfaatkan kapasitas representasi yang telah dipelajari selama pra-pelatihan untuk mengekstrak pola dari konteks yang diberikan. Pada praktiknya, pendekatan ini terbagi menjadi dua skenario utama: zero-shot learning, di mana model menyelesaikan tugas hanya berdasarkan instruksi teks tanpa contoh tambahan, dan few-shot learning, di mana beberapa pasangan input-output disajikan sebagai referensi agar model dapat meniru distribusi, struktur, dan gaya respons yang diharapkan. Mekanisme ini secara efektif mengubah tugas klasifikasi, regresi, atau transformasi data menjadi masalah pelengkapan pola berbasis bahasa alami.

Dalam konteks data mining tingkat magister, relevansi ICL terletak pada kemampuannya mempercepat siklus eksperimen secara signifikan. Untuk dataset tabel berukuran kecil atau korpus teks terbatas, peneliti tidak perlu mengalokasikan sumber daya komputasi yang besar untuk fine-tuning model; cukup dengan merancang prompt yang tepat, model sudah dapat menghasilkan prediksi label, skrip pandas, atau kueri SQL yang fungsional. Hal ini melengkapi pembahasan sebelumnya mengenai pemanfaatan LLM untuk pemahaman tabel, di mana kemampuan zero-shot dan few-shot memungkinkan pengujian cepat terhadap skema linking, imputasi data, atau rekayasa fitur otomatis. Namun, efisiensi ini membawa risiko metodologis yang harus dikelola dengan ketat. Performa ICL sangat sensitif terhadap urutan penyajian contoh, pemilihan sampel yang mungkin mengandung bias implisit, serta variasi tokenisasi. Tidak ada jaminan konsistensi deterministik antar eksekusi, dan hasil yang dihasilkan sering kali sulit direproduksi secara persis kecuali konfigurasi prompt, versi model, dan parameter seperti temperature dicatat secara rinci.

Dari perspektif penelitian, ICL menuntut disiplin metodologis yang tinggi. Peneliti wajib memperlakukan desain prompt sebagai variabel eksperimen yang perlu diuji melalui ablation study, mengukur varians performa terhadap perubahan urutan few-shot, dan membandingkan hasilnya dengan baseline konvensional yang deterministik. Tanpa protokol validasi silang dan dokumentasi parameter yang transparan, temuan berbasis ICL berisiko dianggap sebagai artefak dari prompt engineering daripada kontribusi ilmiah yang substantif. Oleh karena itu, integrasi ICL dalam pipeline analisis data harus disertai mekanisme verifikasi eksplisit, memastikan bahwa setiap output generatif dapat ditelusuri, diuji eksekusinya, dan dikaitkan kembali dengan hipotesis penelitian awal.

### Inti yang Harus Ditekankan

- ICL memungkinkan adaptasi model tanpa update bobot, mengandalkan pola dalam prompt (zero-shot vs few-shot) untuk tugas klasifikasi, transformasi, dan generasi kode.
- Sangat relevan untuk eksplorasi cepat pada data tabel kecil dan teks, namun kinerjanya sangat sensitif terhadap urutan, pemilihan contoh, dan parameter sampling.
- Memerlukan kontrol metodologis ketat: dokumentasi lengkap prompt, temperature, versi model, serta validasi reproduktibilitas sebelum digunakan dalam laporan penelitian.
- Hasil ICL harus selalu divalidasi secara empiris dan dibandingkan dengan baseline deterministik untuk menghindari klaim yang didasarkan pada artefak acak.

### Transisi ke Slide Berikutnya

Mengingat kerentanan ICL terhadap ketidakstabilan dan kebutuhan akan validasi sistematis, langkah selanjutnya adalah mengintegrasikan mekanisme ini ke dalam alur kerja analisis data yang terstruktur. Kita akan membahas bagaimana membangun pipeline LLM-assisted data analysis yang menjamin reproduktibilitas, verifikasi kode, dan interpretasi yang transparan.

---

## Slide 016 - LLM-Assisted Data Analysis Workflow

### Narasi

Setelah pada slide sebelumnya membahas mekanisme In-Context Learning dan mengidentifikasi risikonya seperti sensitivitas terhadap urutan prompt serta potensi inkonsistensi hasil, langkah selanjutnya adalah menata kemampuan tersebut ke dalam alur kerja analisis data yang sistematis dan dapat dipertanggungjawabkan secara akademis. Slide ini memperkenalkan LLM-Assisted Data Analysis Workflow, sebuah kerangka yang mengubah interaksi ad-hoc dengan model bahasa menjadi pipeline terstruktur yang selaras dengan standar penelitian tingkat magister.

Pipeline ini terdiri dari lima tahapan berurutan yang saling terkait. Pertama, formulasi pertanyaan dalam bahasa alami yang mendefinisikan masalah penelitian atau hipotesis awal secara eksplisit. Kedua, konstruksi prompt yang tidak hanya berisi pertanyaan, tetapi juga menyertakan konteks dataset, batasan teknis, dan format output yang diharapkan. Ketiga, generasi oleh LLM yang dapat berupa skrip Python, query SQL, atau insight analitik awal. Keempat, eksekusi dan verifikasi, di mana kode atau kueri yang dihasilkan dijalankan pada lingkungan komputasi nyata untuk memastikan fungsionalitas dan akurasi. Kelima, interpretasi, di mana peneliti melakukan penelaahan mendalam terhadap hasil eksekusi, memvalidasi temuan statistik, dan menyelaraskannya dengan domain pengetahuan.

Untuk menjaga integritas ilmiah, setiap tahap harus beroperasi di bawah prinsip metodologis yang ketat. Reproduktibilitas menjadi fondasi utama; setiap langkah mulai dari pemilihan prompt hingga hasil akhir harus dapat dilacak dan diulang. Validasi output kode melalui eksekusi langsung wajib dilakukan untuk mencegah ketergantungan pada teks generatif yang mungkin mengandung kesalahan logika atau sintaks. Dokumentasi versi model LLM dan pengaturan suhu (temperature) juga harus dicatat secara rinci, karena kedua faktor ini secara langsung memengaruhi determinisme dan variasi hasil. Terakhir, pendekatan ini harus selalu dibandingkan dengan baseline analisis konvensional yang deterministik, seperti implementasi manual menggunakan pandas atau metode statistik klasik, guna mengukur kontribusi aktual LLM versus risiko bias atau inefisiensi yang diperkenalkannya.

Kerangka ini secara langsung menjawab tantangan reproduktibilitas dan konsistensi yang disebutkan pada slide sebelumnya, sekaligus menyiapkan landasan bagi implementasi praktis yang akan dibahas lebih lanjut.

### Inti yang Harus Ditekankan

- Alur kerja LLM-assisted harus bersifat iteratif dan terverifikasi, bukan sekadar permintaan pasif yang langsung diterima sebagai kebenaran.
- Reproduktibilitas dan dokumentasi parameter (versi model, temperature, seed) merupakan syarat mutlak dalam standar penelitian tingkat magister.
- Peran peneliti sebagai validator kritis tetap dominan; LLM berfungsi sebagai akselerator prototipe, bukan pengganti penalaran analitis atau validasi statistik.
- Komparasi eksperimental dengan baseline deterministik diperlukan untuk membuktikan nilai tambah, mengukur overhead komputasi, dan mengisolasi potensi hallucination atau bias.

### Transisi ke Slide Berikutnya

Dengan memahami struktur pipeline dan prinsip validasi ini, kita akan langsung menerapkannya pada studi kasus konkret. Pada slide berikutnya, kita akan membedah contoh prompt sederhana, ekspektasi output yang terukur, serta rubrik evaluasi ketat yang harus dipenuhi agar hasil analisis berbasis LLM dapat dianggap layak secara metodologis.

---

## Slide 017 - Contoh Prompt dan Konteks

### Narasi

Pada slide ini, kita menguraikan bagaimana mengonstruksi prompt yang efektif dalam alur analisis berbasis Large Language Model (LLM), yang merupakan tahap kedua setelah perumusan pertanyaan riset pada pipeline sebelumnya. Prompt sederhana yang ditampilkan menggunakan struktur tiga lapis: definisi konteks data, perumusan pertanyaan analitis, dan instruksi eksekusi. Dengan menyebutkan kolom `age`, `income`, dan `churn`, kita memberi LLM batasan ruang pencarian fitur yang relevan. Pertanyaan `"Apakah ada hubungan antara income dan churn?"` mengarahkan model untuk memilih metode statistik yang tepat, seperti uji korelasi Pearson/Spearman atau regresi logistik, tergantung pada distribusi dan skala pengukuran variabel. Perintah `"Tuliskan langkah analisis yang dapat dijalankan"` memastikan output berupa skrip Python yang siap dieksekusi di lingkungan Jupyter atau Colab, bukan sekadar penjelasan teoretis.

Output yang diharapkan dari interaksi ini bersifat tripartit. Pertama, kode Python yang valid dan modular, umumnya memanfaatkan `pandas` untuk cleaning dan aggregation, serta `scipy.stats` atau `statsmodels` untuk pengujian hipotesis. Kedua, interpretasi statistik yang menerjemahkan angka mentah menjadi insight bermakna, misalnya menjelaskan arah dan kekuatan hubungan berdasarkan koefisien korelasi atau nilai p-value. Ketiga, identifikasi limitasi analisis, seperti asumsi linearitas yang mungkin dilanggar, potensi confounding effect dari variabel `age`, atau bias seleksi jika data tidak representatif. Pada level magister, mahasiswa dituntut tidak hanya menyalin kode, tetapi juga menilai apakah output LLM memenuhi standar rigor statistik dan etika penelitian.

Evaluasi terhadap hasil generasi LLM harus dilakukan secara sistematis melalui tiga kriteria verifikasi. 
- Apakah kode menghasilkan output yang benar? Verifikasi ini mencakup pengecekan syntax, kompatibilitas versi library, dan kesesuaian logika statistik dengan pertanyaan riset.
- Apakah interpretasi sesuai bukti statistik? LLM cenderung melakukan hallucination interpretatif; maka setiap klaim harus dicocokkan langsung dengan tabel ringkasan atau plot yang dihasilkan kode.
- Apakah replikasi dengan seed berbeda menghasilkan sama? Menjalankan ulang analisis dengan `random_state` atau `np.random.seed` yang bervariasi menguji stabilitas numerik dan determinisme prosedur statistik yang digunakan.

Prinsip evaluasi ini memperkuat fondasi metodologis yang telah dibahas pada slide sebelumnya, di mana reproduktibilitas dan validasi eksekusi menjadi syarat mutlak sebelum output LLM diintegrasikan ke dalam laporan penelitian. Dengan menerapkan kerangka kerja prompt-engineering yang disiplin dan protokol evaluasi berlapis, LLM dapat difungsikan sebagai akselerator EDA dan prototyping model, bukan pengganti pertimbangan metodologis peneliti.

### Inti yang Harus Ditekankan

- Struktur prompt harus eksplisit menyertakan metadata data, pertanyaan analitis terukur, dan instruksi output yang terarah agar mengurangi ambiguitas model.
- Output LLM wajib diverifikasi secara tripartit: validitas kode, kesesuaian interpretasi statistik, dan konsistensi hasil under varying random seeds.
- Penggunaan LLM dalam alur riset S2 harus tetap berlandaskan prinsip reproduktibilitas dan transparansi parameter, sehingga setiap langkah dapat diaudit dan direplikasi.

### Transisi ke Slide Berikutnya

Meskipun prompt yang terstruktur dan evaluasi ketat dapat menekan kesalahan, karakteristik probabilistik LLM tetap membawa risiko inheren yang perlu diwaspadai. Pada slide berikutnya, kita akan mengkaji secara kritis potensi data leakage, drift reproduktibilitas akibat pembaruan model, serta bias implisit dalam prompt yang dapat mengancam validitas statistik.

---

## Slide 018 - Risiko LLM-Assisted Analysis

### Narasi

Setelah pada slide sebelumnya kita membahas contoh konkret prompt dan konteks analisis yang dapat diberikan kepada Large Language Model (LLM), serta kriteria evaluasi dasar untuk memastikan kualitas output-nya, kini kita perlu menyoroti sisi kritis dari pemanfaatan LLM dalam proses data mining: risiko sistemik yang melekat pada pendekatan ini. Penggunaan LLM sebagai asisten analisis memang mempercepat eksplorasi data dan generasi kode, namun tanpa kesadaran akan batasannya, peneliti dapat terjebak pada hasil yang tampak meyakinkan tetapi secara metodologis rapuh.

Pertama, aspek *data leakage* dan *reproducibility* menjadi tantangan utama. Karena LLM dilatih pada kumpulan data publik yang sangat masif, terdapat risiko nyata bahwa model telah "mengingat" atau secara tidak langsung terekspos terhadap pola dari dataset yang sedang Anda analisis, terutama jika dataset tersebut tersedia di repositori terbuka seperti GitHub, Kaggle, atau literatur akademik. Hal ini berpotensi menyebabkan kebocoran informasi yang mengancam validitas eksperimen. Selain itu, karena sifat model generatif yang bergantung pada arsitektur dan pembaruan versi, output yang dihasilkan tidak statis; perubahan kecil pada versi model, parameter, atau bahkan urutan token input dapat menghasilkan respons yang berbeda. Ditambah dengan elemen randomness dalam proses sampling atau penulisan kode, replikasi eksperimen menjadi jauh lebih sulit dibandingkan metode statistik tradisional yang bersifat deterministik.

Kedua, isu *bias* dan *validitas* statistik tidak boleh diabaikan. Prompt yang dirancang oleh peneliti secara inheren membawa bias kognitif dan domain tertentu, yang kemudian dapat mengarahkan model untuk menghasilkan interpretasi yang sesuai dengan ekspektasi penulis, bukan berdasarkan bukti data yang objektif. LLM cenderung memberikan jawaban dengan nada percaya diri tinggi (*overconfident*), bahkan ketika fondasi statistiknya lemah atau salah. Penting untuk diingat bahwa LLM pada dasarnya adalah model bahasa prediktif berbasis probabilitas, bukan mesin inferensi statistik. Oleh karena itu, tidak ada jaminan *statistical soundness* dalam setiap rekomendasi yang diberikan, seperti pemilihan uji hipotesis yang tepat, penanganan missing value, atau asumsi distribusi data.

Mengingat risiko-risiko tersebut, strategi mitigasi harus terintegrasi langsung ke dalam workflow penelitian tingkat magister. LLM sebaiknya diposisikan sebagai alat bantu eksplorasi awal (*exploratory companion*) untuk mempercepat prototyping kode atau brainstorming variabel, bukan sebagai pengganti rigor metode statistik klasik. Setiap output yang dihasilkan wajib diverifikasi ulang melalui prosedur standar, baik secara manual maupun menggunakan library terpercaya seperti pandas, NumPy, atau scikit-learn. Terakhir, demi transparansi dan reproduktibilitas ilmiah, peneliti wajib mendokumentasikan seluruh konfigurasi eksperimen LLM secara rinci: nama dan versi model, nilai temperature, prompt lengkap, serta random seed yang digunakan. Dokumentasi ini menjadi syarat mutlak bagi publikasi penelitian yang mengedepankan integritas metodologis.

### Inti yang Harus Ditekankan

- LLM rentan terhadap data leakage jika dataset penelitian pernah muncul dalam training data publik, sehingga validitas eksperimen dapat terganggu.
- Reproduktibilitas menurun drastis akibat variasi versi model, non-deterministic generation, dan randomness sampling yang sulit dikontrol sepenuhnya.
- LLM tidak memiliki pemahaman statistik sejati; outputnya bisa akurat secara sintaks Python tetapi keliru secara inferensi atau asumsi uji statistik.
- Verifikasi ketat dengan metode statistik klasik dan dokumentasi penuh (model, temperature, prompt, seed) wajib dilakukan sebelum menarik kesimpulan penelitian.

### Transisi ke Slide Berikutnya

Meskipun LLM menawarkan kecepatan eksplorasi, keterbatasan privasi dan keamanan datanya mendorong kebutuhan akan paradigma pembelajaran mesin yang lebih aman. Untuk mengatasi tantangan ini, kita akan beralih ke Federated Learning, sebuah pendekatan kolaboratif yang memungkinkan pelatihan model tanpa perlu memusatkan data mentah di satu server pusat.

---

## Slide 019 - Federated Learning

### Narasi

Federated Learning merepresentasikan pergeseran paradigma fundamental dalam pipeline data mining, di mana pelatihan model tidak lagi bergantung pada pengumpulan data mentah ke repositori terpusat. Konsep ini lahir sebagai respons langsung terhadap regulasi privasi data yang semakin ketat dan kebutuhan etis dalam menangani informasi sensitif. Pada pendekatan ini, proses pembelajaran mesin dilakukan secara kolaboratif di antara berbagai entitas atau klien yang menyimpan data masing-masing. Alih-alih membagikan dataset, setiap klien melakukan komputasi lokal dan hanya mengirimkan pembaruan parameter model kepada server pusat. Mekanisme ini secara inheren mendukung prinsip *privacy by design* dan meminimalkan jejak data, menjadikannya solusi krusial untuk penelitian di bidang trustworthy data mining dan privacy-preserving learning yang sedang kita bahas.

Secara arsitektur, sistem Federated Learning beroperasi melalui siklus iteratif yang melibatkan koordinasi sentral dan komputasi terdistribusi. Diagram pada slide menggambarkan alur standar di mana server pusat memegang peran sebagai orchestrator yang menginisialisasi model global dan mendistribusikannya ke subset klien yang dipilih. Setiap klien, yang dilengkapi dengan dataset lokal unik (D1, D2, D3), menjalankan proses training secara independen menggunakan infrastruktur komputasinya sendiri. Setelah mencapai konvergensi lokal, klien hanya mengirim balik vektor bobot atau gradien pembaruan ke server. Server kemudian melakukan agregasi statistik untuk memperbarui model global sebelum memulai putaran komunikasi berikutnya. Arsitektur ini memastikan bahwa data never leaves its source, sekaligus mempertahankan skalabilitas sistem.

Implementasi Federated Learning dapat disesuaikan dengan karakteristik distribusi data melalui tiga kategori utama. *Horizontal Federated Learning* adalah skenario paling umum, di mana klien memiliki ruang fitur yang identik tetapi kumpulan sampel yang berbeda, seperti kasus prediksi churn pelanggan di cabang bank yang terpisah. *Vertical Federated Learning* muncul ketika klien berbagi populasi sampel yang tumpang tindih namun koleksi fitur yang saling melengkapi, misalnya integrasi data perilaku pengguna dari platform e-commerce dengan data historis pembayaran dari institusi keuangan. Sementara itu, *Federated Transfer Learning* dirancang untuk lingkungan heterogen secara semantik, di mana domain atau tugas antar klien berbeda, sehingga memerlukan mekanisme adaptasi pengetahuan lintas domain tanpa mengkompromi isolasi data lokal.

Meskipun menawarkan keunggulan privasi dan efisiensi penyimpanan, Federated Learning menghadirkan tantangan teknis yang kompleks dan sering menjadi objek penelitian tingkat magister. Distribusi data yang *Non-IID* antar klien dapat menyebabkan drift konvergensi, bias model, atau penurunan performa generalisasi. Biaya komunikasi (*communication cost*) menjadi bottleneck praktis, terutama ketika dimensi model besar dan frekuensi sinkronisasi tinggi. Heterogenitas perangkat keras dan jaringan juga mempersulit penjadwalan pelatihan yang adil, mengingat variasi kapasitas komputasi dan latensi koneksi. Terakhir, aspek keamanan siber menuntut ketahanan terhadap serangan *poisoning*, di mana klien malicios dapat menyuntikkan pembaruan bobot yang dimanipulasi untuk merusak integritas model global atau melakukan inference attack. Menangani tantangan-tantangan ini memerlukan inovasi dalam algoritma agregasi robust, protokol komunikasi efisien, dan mekanisme verifikasi klien yang rigor.

### Inti yang Harus Ditekankan

- Federated Learning mengubah paradigma pelatihan dari sentralisasi data menjadi kolaborasi terdistribusi yang menjaga privasi dan kepatuhan regulasi.
- Pemilihan jenis FL (Horizontal, Vertical, atau Transfer) harus didasarkan pada kesamaan fitur, tumpang tindih sampel, atau kompatibilitas domain antar partisipan.
- Tantangan teknis seperti Non-IID data, overhead komunikasi, heterogenitas perangkat, dan kerentanan poisoning menjadi celah riset strategis untuk pengembangan metode agregasi dan keamanan yang lebih robust.
- Dalam konteks penelitian S2, mahasiswa didorong untuk merumuskan hipotesis yang menguji efektivitas protokol FL pada struktur data spesifik, bukan sekadar menerapkan framework secara hitam putih.

### Transisi ke Slide Berikutnya

Untuk menerjemahkan konsep arsitektural ini ke dalam implementasi algoritmik, kita akan membahas prosedur Federated Averaging beserta pseudocode resminya pada slide berikutnya, yang sekaligus membuka diskusi mengenai pertanyaan penelitian kritis seputar validitas agregasi bobot pada data tabular dan strategi pengukuran kontribusi klien yang adil.

---

## Slide 020 - Federated Learning: Pseudocode

### Narasi

Slide ini menyajikan implementasi algoritmik dari Federated Learning melalui pseudocode Federated Averaging (FedAvg), yang merupakan protokol standar untuk pelatihan model secara terdistribusi. Proses dimulai dengan inisialisasi model global $w_0$ di server pusat. Dalam setiap putaran komunikasi $t$ dari $0$ hingga $T$, server melakukan seleksi subset klien yang akan berpartisipasi. Pemilihan ini dapat bersifat acak atau berbasis strategi prioritas, namun tujuannya sama: membatasi beban komunikasi sekaligus menjaga diversitas data dalam agregasi.

Setiap klien yang terpilih mengunduh bobot model terbaru $w_t$ dan menjadikannya sebagai titik awal lokal $w_{local}$. Di sisi klien, model menjalani pelatihan mandiri menggunakan data lokal selama sejumlah epoch lokal. Selama loop epoch lokal ini, parameter model terus diperbarui oleh operator optimisasi (seperti SGD atau Adam) berdasarkan gradien yang dihitung dari batch data klien tersebut. Setelah menyelesaikan seluruh epoch lokal, klien tidak mengirimkan data mentah maupun metadata sensitif, melainkan hanya mengirimkan vektor bobot $w_{local}$ kembali ke server.

Server kemudian mengumpulkan semua bobot lokal dari klien yang aktif dan melakukan agregasi, umumnya melalui rata-rata aritmatika atau rata-rata tertimbang sesuai jumlah sampel data di masing-masing klien, untuk menghasilkan pembaruan model global $w_{t+1}$. Siklus download-training-upload-aggregate ini diulang hingga mencapai batas iterasi $T$ atau kriteria konvergensi terpenuhi. Mekanisme ini secara langsung menjawab tantangan komunikasi cost dan keamanan data yang disebutkan pada slide sebelumnya, karena aliran informasi yang berpindah hanyalah representasi numerik model, bukan dataset asli.

Selain aspek teknis, slide ini juga menonjolkan tiga pertanyaan penelitian strategis yang relevan untuk pengembangan riset tingkat magister. Pertama, apakah agregasi bobot berbasis rata-rata masih cukup robust ketika diterapkan pada data tabular yang sering kali mengandung fitur berkategorikal, skala tidak seragam, dan missing value pattern yang kompleks? Kedua, bagaimana merancang strategi penyesuaian bobot atau clipping gradient untuk menahan dampak distribusi Non-IID agar model global tidak bias terhadap klien mayoritas? Ketiga, bagaimana membangun metrik fairness yang akurat untuk mengukur kontribusi tiap klien, mengingat heterogenitas kapasitas komputasi, kualitas data, dan stabilitas koneksi jaringan dapat mendistorsi proses pembelajaran. Pertanyaan-pertanyaan ini menuntut mahasiswa untuk merumuskan hipotesis terukur, merancang eksperimen kontrol, dan melakukan ablation study terhadap komponen agregasi atau sampling.

### Inti yang Harus Ditekankan

- Federated Averaging bekerja dalam siklus komunikasi berulang: unduh bobot global, latih lokal multi-epoch, unggah bobot terupdate, lalu agregasi di server tanpa pernah mengakses data mentah.
- Efisiensi komunikasi dan privasi dasar tercapai melalui pertukaran parameter model, namun performa akhir sangat bergantung pada penanganan Non-IID, heterogenitas perangkat, dan strategi weighting.
- Pertanyaan penelitian menekankan kebutuhan inovasi metodologis: validasi FedAvg pada domain tabular, mitigasi bias distribusi, serta perancangan mekanisme fair contribution measurement yang empiris dan teruji.

### Transisi ke Slide Berikutnya

Meskipun FedAvg berhasil menyembunyikan data mentah, pengiriman bobot model dalam bentuk plaintext masih rentan terhadap serangan inference atau model inversion. Untuk menutup celah kerentanan tersebut, kita perlu mengintegrasikan lapisan proteksi kriptografi dan statistik yang lebih ketat, yang akan dibahas secara sistematis pada slide berikutnya mengenai Privacy-Preserving Mining.

---

## Slide 021 - Privacy-Preserving Mining

### Narasi

Setelah membahas prosedur Federated Averaging dan tantangan agregasi bobot pada slide sebelumnya, kita kini masuk ke lapisan keamanan yang tak kalah kritis dalam arsitektur data modern, yaitu *Privacy-Preserving Mining*. Pada jenjang magister, privasi tidak lagi dipandang sebagai modul pelengkap, melainkan sebagai constraint fundamental yang harus diintegrasikan sejak tahap perancangan algoritma, pemilihan dataset, hingga protokol evaluasi. Slide ini menyajikan empat paradigma utama yang sering menjadi baseline atau komponen inti dalam publikasi terkini, masing-masing dengan mekanisme jaminan keamanan yang berbeda.

Pertama, *Differential Privacy* menjamin bahwa keberadaan atau perubahan satu individu dalam dataset tidak dapat dideteksi dari output model, dengan cara menyuntikkan noise yang telah dikalibrasi secara matematis, seperti yang diimplementasikan dalam DP-SGD. Kedua, *Secure Multiparty Computation* memungkinkan beberapa entitas melakukan komputasi bersama tanpa pernah mengekspos data mentah mereka, contohnya melalui skema secure aggregation yang sering dipadukan dengan federated learning. Ketiga, *Homomorphic Encryption* memfasilitasi operasi aljabar langsung pada ciphertext, sehingga proses inferensi atau backpropagation dapat berjalan tanpa risiko kebocoran plaintext. Keempat, pendekatan berbasis *Synthetic Data* memanfaatkan generator probabilistik seperti GAN atau VAE untuk menciptakan dataset buatan yang mempertahankan kovarians dan pola distribusi data asli, sekaligus memutus hubungan langsung dengan subjek nyata sebelum dibagikan atau dipublikasikan.

Meskipun keempat teknik tersebut menawarkan perlindungan yang kuat, implementasinya menghadapi keterbatasan struktural yang wajib diakui dalam setiap penelitian. Selalu terdapat *trade-off* intrinsik antara privasi dan utilitas; penguatan jaminan privasi hampir selalu berbanding lurus dengan penurunan performa analitik atau akurasi prediktif. Di sisi praktis, overhead komputasi dan kompleksitas kriptografis seringkali menjadikannya mahal untuk skala besar. Lebih penting lagi dari sudut pandang metodologi, definisi privasi harus dirumuskan secara rigorus. Klaim "privasi terjaga" tidak cukup tanpa spesifikasi eksplisit mengenai parameter keamanan, asumsi ancaman (*threat model*), jenis serangan yang dilindungi, serta batasan apa yang sebenarnya dijamin oleh teori di balik teknik tersebut.

Pertanyaan penelitian yang menjadi poros pembahasan topik ini adalah bagaimana meminimalkan kebocoran privasi tanpa mengorbankan akurasi yang dapat dipertanggungjawabkan. Jawaban atas pertanyaan ini menuntut desain eksperimen yang transparan, penggunaan metrik utilitas yang kontekstual terhadap domain masalah, serta validasi ketahanan model terhadap serangan rekonsiliasi atau *membership inference*. Dengan menyeimbangkan aspek teknis dan etis ini, kita dapat membangun sistem data mining yang tidak hanya performant, tetapi juga compliant terhadap regulasi perlindungan data dan standar reproduktibilitas ilmiah.

### Inti yang Harus Ditekankan

- Empat teknik utama (Differential Privacy, Secure Multiparty Computation, Homomorphic Encryption, dan Synthetic Data) menawarkan mekanisme jaminan privasi yang berbeda, namun sama-sama memerlukan pemahaman mendalam tentang asumsi keamanan, beban komputasi, dan kesesuaiannya dengan tipe data tabular atau unstructured.
- Trade-off privasi versus utilitas adalah hukum dasar yang tidak dapat dihindari; peneliti wajib mengukur dampaknya secara kuantitatif melalui metrik yang relevan, bukan hanya mengandalkan klaim kualitatif.
- Definisi privasi harus bersifat rigorus dan eksplisit dalam setiap proposal penelitian, mencakup spesifikasi parameter keamanan, threat model, dan protokol evaluasi yang membedakan antara perlindungan teoretis dengan kinerja empiris di dunia nyata.

### Transisi ke Slide Berikutnya

Untuk mendalami salah satu teknik paling banyak diteliti dalam kategori ini, mari kita bedah secara formal bagaimana Differential Privacy didefinisikan melalui parameter epsilon dan delta, serta bagaimana kurva trade-off tersebut diukur dalam eksperimen yang adil dan reproducible.

---

## Slide 022 - Differential Privacy dan Trade-off

### Narasi

Differential Privacy (DP) merupakan kerangka kerja matematis yang memberikan jaminan privasi terukur tanpa bergantung pada asumsi tentang penyerang atau struktur data. Secara formal, suatu mekanisme algoritma $\mathcal{M}$ dikatakan memenuhi $(\varepsilon, \delta)$-Differential Privacy jika untuk setiap dua dataset tetangga $D$ dan $D'$ yang hanya berbeda pada satu entri, serta untuk setiap himpunan keluaran $S$, berlaku pertidaksamaan: $Pr[\mathcal{M}(D) \in S] \le e^{\varepsilon} Pr[\mathcal{M}(D') \in S] + \delta$. Parameter $\varepsilon$ bertindak sebagai budget privasi yang mengontrol seberapa banyak probabilitas keluaran bisa berubah ketika satu individu ditambahkan atau dihapus dari dataset. Nilai $\varepsilon$ yang mendekati nol menjamin privasi yang sangat kuat karena rasio probabilitas keluaran hampir identik, sementara nilai $\delta$ mengakomodasi kemungkinan kecil pelanggaran privasi absolut, sehingga membentuk jaminan probabilistik yang lebih realistis untuk implementasi komputasi skala besar seperti DP-SGD yang telah dibahas sebelumnya.

Konsekuensi langsung dari penerapan DP adalah adanya trade-off fundamental antara privasi dan utilitas, sebagaimana tercermin dalam tabel perbandingan nilai epsilon. Ketika $\varepsilon$ dibuat kecil untuk memperkuat jaminan privasi, mekanisme harus menyuntikkan noise dalam jumlah besar guna menutupi jejak statistik satu sampel, yang secara inheren menurunkan akurasi dan stabilitas model. Sebaliknya, peningkatan nilai $\varepsilon$ mengurangi volume noise yang diperlukan, sehingga utilitas prediktif model meningkat, namun risiko kebocoran informasi individu menjadi lebih tinggi. Dalam konteks penelitian tingkat magister, trade-off ini bukan sekadar pilihan teknis, melainkan variabel eksperimental yang harus dioptimalkan secara sistematis. Utilitas tidak boleh hanya diukur melalui akurasi tunggal, melainkan melalui dampak downstream pada metrik bisnis atau ilmiah yang relevan.

Untuk menjaga integritas penelitian, desain eksperimen yang membandingkan model berbasis DP versus non-DP harus mengikuti standar ketat. Pertama, evaluasi tidak boleh dilakukan pada satu titik $\varepsilon$ statis, melainkan harus divisualisasikan melalui kurva performa terhadap rentang nilai $\varepsilon$ agar pola degradasi utilitas terlihat jelas. Kedua, pengukuran utilitas wajib dilakukan dalam skenario penggunaan nyata, misalnya dengan menilai stabilitas prediksi pada subset populasi minoritas atau konsistensi hasil cross-validation. Ketiga, peneliti harus secara eksplisit melaporkan sensitivitas noise, metode kalibrasi noise, serta analisis ablation terhadap pengaruh agregasi gradien yang ter-noise terhadap konvergensi model. Pendekatan ini memastikan bahwa klaim efisiensi privasi didukung oleh evidence empiris yang transparan dan dapat direplikasi, sekaligus menyiapkan fondasi untuk mengevaluasi apakah model yang sudah mengalami penyederhanaan privasi masih mampu menangkap hubungan struktural yang valid sebelum beralih ke analisis kausal.

### Inti yang Harus Ditekankan

- Definisi formal DP menekankan perubahan batas probabilitas keluaran saat satu sampel diubah, dengan $\varepsilon$ sebagai pengatur budget privasi dan $\delta$ sebagai toleransi pelanggaran probabilistik.
- Trade-off privasi-utilitas bersifat invers dan deterministik: $\varepsilon$ kecil menghasilkan privasi kuat dan noise besar (utilitas turun), sedangkan $\varepsilon$ besar menghasilkan privasi lemah dan noise kecil (utilitas naik).
- Standar eksperimen S2 menuntut pelaporan kurva performa lintas nilai $\varepsilon$, pengukuran utilitas pada konteks aplikasi nyata, serta transparansi penuh terhadap sensitivitas noise dan dampaknya terhadap metrik evaluasi.

### Transisi ke Slide Berikutnya

Setelah menetapkan bagaimana privasi dan utilitas saling berinteraksi serta cara mengevaluasinya secara rigor, langkah kritis berikutnya adalah memastikan bahwa model yang dihasilkan tidak hanya stabil secara statistik, tetapi juga mampu mendukung inferensi yang valid ketika terjadi intervensi atau perubahan distribusi. Hal ini mengarahkan kita pada perspektif kausal, di mana pemahaman mendalam tentang hubungan sebab-akibat menjadi prasyarat utama untuk pengambilan keputusan yang robust.

---

## Slide 023 - Causal Perspectives dalam Data Mining

### Narasi

Setelah menelaah differential privacy dan trade-off antara jaminan privasi versus utilitas data pada slide sebelumnya, kita kini menggeser fokus ke perspektif kausal dalam data mining. Pada jenjang magister, pemahaman ini menjadi fondasi metodologis yang vital karena penelitian tidak lagi berhenti pada optimasi akurasi prediksi, melainkan mengarah pada kemampuan menjelaskan mekanisme penyebab dan mendukung pengambilan keputusan yang robust.

Dalam ekosistem analisis data, pertanyaan yang diajukan dapat dipetakan ke dalam tiga tingkatan hierarki yang semakin kompleks. Pertama adalah Association, yang menjawab pertanyaan mendasar apakah variabel X dan Y saling berkorelasi atau memiliki pola statistik bersama. Ini adalah ranah klasik machine learning prediktif di mana model mempelajari dependensi empiris dari data historis tanpa klaim sebab-akibat. Kedua adalah Intervention, yang menanyakan apa dampak pada Y apabila kita secara aktif melakukan perubahan atau intervensi pada X. Pertanyaan ini melampaui korelasi observasional dan menyentuh inti kausalitas, sering kali dimodelkan menggunakan operator do dalam kerangka do-calculus. Ketiga adalah Counterfactual, yang mengeksplorasi skenario hipotetis: bagaimana outcome akan berbeda jika kondisi X pada unit atau kasus tertentu ternyata berbeda dari kenyataan. Level ini sangat kritis untuk analisis what-if dan evaluasi kebijakan yang bersifat individual.

Mengapa perspektif kausal harus diintegrasikan ke dalam pipeline data mining modern? Praktik standar yang mengandalkan feature importance berbasis koefisien regresi atau metrik seperti Gini importance sering kali terjebak pada korelasi semu. Model prediktif murni sangat rentan terhadap distribution shift, khususnya ketika lingkungan operasional berubah akibat intervensi manusia, perubahan regulasi, atau strategi bisnis baru. Di sinilah causal inference berfungsi sebagai landasan analitis yang kokoh, memisahkan hubungan spurious dari mekanisme kausal yang stabil, sehingga rekomendasi yang dihasilkan tetap valid meskipun kondisi eksternal bergeser.

Sebagai ilustrasi praktis dalam konteks customer analytics, perbedaan ketiga level ini terlihat jelas. Pada level prediktif, kita mungkin menemukan bahwa "umur berpengaruh pada churn". Temuan ini hanya bersifat deskriptif dan tidak memberikan arahan tindakan. Ketika beralih ke level kausal, pertanyaan berubah menjadi "apakah menurunkan harga benar-benar mengurangi churn?", yang menuntut identifikasi efek intervensi diskon terhadap perilaku pelanggan. Pada level counterfactual, kita mengajukan skenario spesifik: "jika pelanggan A diberi diskon, apakah ia akan tetap berlangganan?". Jawaban atas pertanyaan counterfactual ini memerlukan pemodelan struktural yang lebih mendalam dan menjadi dasar personalisasi strategi retensi yang presisi.

### Inti yang Harus Ditekankan

- Hierarki pertanyaan data terdiri dari tiga level bertingkat: Association, Intervention, dan Counterfactual, yang masing-masing menuntut pendekatan matematis dan desain eksperimen yang berbeda.
- Feature importance berbasis korelasi tidak otomatis bersifat kausal; model prediktif tradisional dapat mengalami degradasi performa signifikan saat menghadapi distribution shift akibat intervensi.
- Causal inference merupakan landasan metodologis untuk decision making yang evidence-based, bukan sekadar alat optimasi metrik prediksi.
- Contoh aplikasi menunjukkan evolusi analitik dari deskripsi pola ("umur mempengaruhi churn"), menuju aksi terukur ("diskon mengurangi churn"), hingga analisis individual ("counterfactual untuk pelanggan spesifik").

### Transisi ke Slide Berikutnya

Memahami tiga level pertanyaan ini membuka jalan bagi implementasi teknisnya. Pada slide berikutnya, kita akan mendalami metode-metode formal dalam causal inference, mulai dari representasi Structural Causal Model, penerapan do-calculus, hingga kerangka potential outcomes, serta bagaimana menerapkannya dalam fitur selection berbasis kausal, robust generalization, dan fairness analysis di bawah asumsi identifikasi yang ketat.

---

## Slide 024 - Metode Causal Inference

### Narasi

Setelah pada slide sebelumnya kita membedah tiga tingkatan pertanyaan analitik—mulai dari sekadar asosiasi, intervensi, hingga counterfactual—slide ini membahas bagaimana pertanyaan-pertanyaan tersebut dioperasionalkan secara metodologis. Inti dari pendekatan kausal terletak pada representasi struktur hubungan antar variabel melalui Directed Acyclic Graph (DAG). Pada diagram yang ditampilkan, variabel Z berperan sebagai confounder yang memengaruhi baik treatment X maupun outcome Y. Tanpa mengontrol atau menyesuaikan pengaruh Z, estimasi hubungan antara X dan Y akan tertimpa oleh bias konfondasi, sehingga apa yang tampak sebagai efek kausal sebenarnya hanyalah artefak statistik dari variabel ketiga yang tidak teramati atau tidak dikendalikan.

Untuk memecahkan masalah identifikasi kausal tersebut, terdapat tiga pendekatan fundamental yang saling melengkapi dalam literatur modern. Pertama, do-calculus yang dikembangkan oleh Judea Pearl menyediakan kerangka aljabar probabilistik untuk memanipulasi distribusi bersyarat ketika suatu intervensi diterapkan, ditandai dengan operator `do(X)`. Pendekatan ini sangat powerful untuk menurunkan ekspresi kausal dari graf kausal dan menentukan apakah sebuah efek dapat diidentifikasi secara non-parametrik. Kedua, kerangka Potential Outcomes (atau Rubin Causal Model) berfokus pada perbandingan antara outcome faktual yang teramati dan outcome kontrafaktual yang tidak pernah terjadi jika perlakuan berbeda. Dalam praktik data mining, pendekatan ini sering diterjemahkan menjadi estimasi Average Treatment Effect (ATE) atau Conditional Average Treatment Effect (CATE) menggunakan teknik seperti propensity score matching, inverse probability weighting, atau double machine learning. Ketiga, Structural Causal Model (SCM) menggabungkan kekuatan DAG dengan persamaan struktural deterministik dan stokastik, memungkinkan peneliti mensimulasikan mekanisme generasi data secara eksplisit dan melakukan analisis sensitivitas terhadap pelanggaran asumsi.

Dalam konteks data mining tingkat lanjut, metode-metode ini bukan hanya alat teoretis, melainkan memiliki aplikasi praktis yang krusial. Pada tahap feature selection, pendekatan kausal membantu membedakan fitur prediktif murni dari fitur yang benar-benar menyebabkan outcome, sehingga mengurangi overfitting terhadap proxy variables. Untuk robust generalization, model yang dibangun dengan prinsip invariansi kausal cenderung lebih stabil saat mengalami distribution shift di lingkungan produksi. Selain itu, dalam domain AI ethics dan responsible computing, causal inference menjadi standar emas untuk analisis bias dan fairness, karena memungkinkan auditor memisahkan diskriminasi langsung dari dampak tidak langsung yang sah secara bisnis.

Namun, perlu ditegaskan bahwa kekuatan metode ini datang dengan tanggung jawab metodologis yang tinggi. Identifikasi efek kausal hampir selalu bergantung pada asumsi kuat seperti ignorability (tidak ada unmeasured confounding), positivity (semua unit memiliki peluang menerima perlakuan), dan consistency. Dalam penelitian empiris berbasis data observasional, asumsi-asumsi ini tidak dapat dibuktikan secara statistik semata; mereka harus dijustifikasi melalui domain knowledge, desain studi, atau validasi eksternal. Tanpa justifikasi yang ketat, klaim kausalitas dari model machine learning tradisional tetap bersifat spekulatif dan rentan terhadap kesalahan interpretasi kebijakan.

### Inti yang Harus Ditekankan

- Representasi struktur kausal via DAG wajib dilakukan sebelum pemilihan metode estimasi; keberadaan confounder seperti Z mengubah sepenuhnya interpretasi hubungan X → Y.
- Tiga pilar metode kausal (Do-calculus, Potential Outcomes, SCM) masing-masing menawarkan perspektif komplementer: aljabar grafis, kontraksi outcome, dan pemodelan mekanistik.
- Aplikasi dalam data mining melampaui prediksi: seleksi fitur kausal, generalisasi robust di bawah distribution shift, dan audit fairness merupakan use-case utama di industri dan riset magister.
- Identifikasi kausal dari data observasional mutlak memerlukan justifikasi asumsi (ignorability, positivity, consistency); tanpa itu, hasil estimasi tidak valid secara ilmiah.
- Mahasiswa harus mampu membedakan kapan menggunakan pendekatan kausal versus prediktif berdasarkan rumusan research question dan ketersediaan data eksperimen/observasional.

### Transisi ke Slide Berikutnya

Dengan memahami fondasi metodologis dan batasan asumsi dalam causal inference, langkah selanjutnya adalah memetakan perbedaan mendasar antara paradigma machine learning konvensional dan causal inference secara sistematis. Pada slide berikutnya, kita akan melihat tabel perbandingan langsung mengenai jenis pertanyaan yang bisa dijawab, kebutuhan data, serta implikasi terhadap penulisan klaim penelitian, agar Anda dapat memilih lensa analitik yang tepat sesuai tujuan riset Anda.

---

## Slide 025 - Kausal vs Prediktif: Perbandingan

### Narasi

Setelah membahas struktur model kausal dan pendekatan identifikasi seperti do-calculus serta potential outcomes pada slide sebelumnya, kini kita perlu memahami batasan epistemologis dan metodologis antara pendekatan prediktif berbasis machine learning dan pendekatan kausal. Keduanya sering kali dianggap interchangeable dalam praktik industri, namun dalam konteks penelitian data mining tingkat magister, pembedaan ini menjadi fondasi utama dalam merancang studi yang valid. Machine learning berorientasi pada minimisasi error prediksi berdasarkan pola statistik historis, sedangkan causal inference berorientasi pada pemahaman mekanisme generasi data dan estimasi efek intervensi yang tidak bias.

Tabel pada slide ini menyoroti empat dimensi perbandingan yang krusial. Pertama, untuk pertanyaan operasional seperti "bagaimana memprediksi churn?", machine learning memberikan jawaban langsung melalui algoritma klasifikasi yang dioptimalkan untuk akurasi atau AUC. Causal inference tidak dirancang untuk tugas prediksi label semata, melainkan untuk mengungkap struktur hubungan antar variabel. Kedua, ketika pertanyaan bergeser ke arah kebijakan seperti "apa efek diskon terhadap churn?", model prediktif konvensional sering kali gagal karena hanya merekam asosiasi permukaan tanpa mampu mengontrol confounding. Pendekatan kausal justru memerlukan simulasi intervensi atau desain quasi-experimental untuk mengisolasi dampak bersih dari treatment. Ketiga, pertanyaan counterfactual seperti "berapa churn jika semua pelanggan diberi diskon?" menuntut kerangka kerja potensial outcome atau structural causal model untuk menghitung estimasi kontrafaktual, sementara model prediktif standar hanya menghasilkan perkiraan probabilistik yang rentan terhadap distribution shift. Keempat, terkait ketersediaan data, machine learning umumnya toleran terhadap data historis observasional selama memenuhi syarat i.i.d., sedangkan causal inference sering kali membutuhkan asumsi identifikasi yang ketat, data tambahan, atau validasi eksternal karena data observasional saja jarang cukup untuk mengidentifikasi hubungan kausal tanpa bias.

Implikasi metodologis dari perbandingan ini sangat signifikan bagi penyusunan proposal penelitian. Peneliti harus secara eksplisit membedakan antara tujuan prediksi (predictive modeling) dan tujuan pengambilan keputusan berbasis intervensi (decision-making). Mencampuradukkan klaim korelasional dengan klaim kausalitas merupakan kesalahan konseptual yang umum dan dapat merusak integritas ilmiah suatu paper. Penggunaan frasa kausal seperti "X menyebabkan Y" atau "intervensi X menurunkan Y" hanya sah secara akademis apabila desain penelitian, asumsi identifikasi, dan teknik estimasi benar-benar memenuhi standar causal identification. Hal ini juga mempersiapkan kita untuk mengevaluasi peluang riset baru yang akan dibahas selanjutnya, di mana banyak tantangan modern justru muncul dari batas antara prediksi dan kausalitas.

### Inti yang Harus Ditekankan

- Tujuan penelitian menentukan pilihan metodologi: prediksi untuk optimasi sistem, kausal untuk evaluasi kebijakan dan intervensi.
- Korelasi bukan kausalitas; klaim ilmiah harus didasarkan pada desain identifikasi yang tepat, bukan sekadar pola data historis.
- Bahasa kausal hanya boleh digunakan ketika asumsi identifikasi terpenuhi dan metode analisis mendukung inferensi intervensi atau kontrafaktual.

### Transisi ke Slide Berikutnya

Pemahaman tentang batas antara prediksi dan kausalitas membuka jalan menuju area-area riset yang masih belum mapan. Pada slide berikutnya, kita akan mengeksplorasi emerging research opportunities, khususnya bagaimana foundation models, data sintetis, dan pembelajaran yang menjaga privasi dapat diintegrasikan dengan kerangka kausal maupun prediktif untuk menjawab tantangan data tabular modern.

---

## Slide 026 - Emerging Research Opportunities

### Narasi

Setelah kita mengurai perbedaan fundamental antara pendekatan prediktif dan kausal pada slide sebelumnya, kini kita beralih ke lanskap penelitian yang sedang berkembang pesat namun masih menyimpan banyak celah kosong. Slide ini menyoroti enam area riset yang belum mapan, sekaligus menetapkan standar ketat mengenai apa yang seharusnya menjadi sebuah kontribusi ilmiah yang layak dipublikasikan pada jenjang magister.

Mari kita bedah satu per satu area yang masih terbuka lebar. Pertama, evaluasi yang adil untuk *tabular foundation models*. Model-model besar yang awalnya mendominasi domain teks dan gambar kini mulai diadaptasi untuk data tabular, namun protokol evaluasi yang digunakan sering kali tidak sensitif terhadap karakteristik unik data tabel, seperti distribusi fitur yang sangat imbalanced, interaksi non-linear antar kolom, dan keberadaan missing values yang tidak acak. Kedua, pemanfaatan *synthetic tabular data* untuk menangani *rare-event* dan isu privasi. Generasi data sintetis bukan sekadar alat augmentasi sederhana, melainkan kerangka kerja strategis untuk melatih model pada kejadian langka tanpa mengorbankan kalibrasi probabilitas, sekaligus memenuhi regulasi perlindungan data yang semakin ketat. Ketiga, *in-context learning* untuk tabel dengan skema kompleks. Kemampuan model dasar memahami struktur tabel yang rumit secara langsung dari prompt masih menghadapi kendala signifikan terkait pemetaan semantik antar kolom, normalisasi skema, dan penanganan redundansi informasi yang belum terpecahkan secara komprehensif. Keempat, *federated learning* dengan data tabular heterogen. Dalam ekosistem industri dan riset, data sering tersebar di berbagai node dengan distribusi *feature* dan *label* yang tidak identik (*non-IID*). Pengembangan algoritma agregasi yang robust terhadap heterogenitas struktural dan statistik, serta efisien secara komunikasi, masih menjadi tantangan metodologis yang serius. Kelima, *privacy-preserving feature engineering*. Transformasi fitur tradisional sering kali membocorkan informasi sensitif selama proses scaling, encoding, atau seleksi fitur; pengembangan teknik yang menjaga utilitas prediktif sambil menjamin privasi melalui mekanisme seperti *differential privacy* atau *secure multi-party computation* masih sangat minim dieksplorasi. Terakhir, *causal discovery* pada data tabular modern. Merujuk kembali pada diskusi slide sebelumnya tentang pentingnya inferensi kausal, menemukan struktur kausal yang sebenarnya dari data observasional berskala besar dan berdimensi tinggi tetap menjadi masalah terbuka yang membutuhkan integrasi antara *graphical models*, representasi vektor yang kaya, dan asumsi domain yang kuat agar tidak terjebak pada korelasi spurious.

Poin kedua pada slide ini menegaskan syarat mutlak untuk sebuah kontribusi ilmiah. Dalam konteks penelitian tingkat S2, Anda tidak cukup hanya melakukan eksperimen naif berupa "menerapkan metode X pada dataset Y" lalu melaporkan peningkatan akurasi marginal. Penelitian harus melampaui aplikasi teknis semata. Sebuah karya dianggap berkontribusi secara substantif jika berhasil menghasilkan insight empiris atau teoretis yang mendalam, merancang metode atau arsitektur baru yang secara eksplisit menjawab celah metodologis yang ada, menyediakan benchmark yang lebih rigor, transparan, dan mudah direproduksi, atau bahkan mengajukan kerangka kerja konseptual yang mengubah cara komunitas memandang masalah tertentu. Ini berarti setiap klaim performa harus dibarengi dengan analisis ablation, studi kesalahan (*error analysis*), dan pembicaraan yang jujur mengenai batasan (*limitations*) dari pendekatan yang diajukan.

Dengan memahami lanskap peluang riset yang masih terbuka dan standar kontribusi yang harus dipenuhi, kita telah menyiapkan fondasi untuk mengevaluasi literatur mutakhir secara kritis. Penekanan utama pada slide ini adalah bahwa inovasi di *data mining* modern menuntut keseimbangan antara kedalaman metodologis, kesadaran etika dan privasi, serta ketajaman analitis terhadap hubungan kausal maupun prediktif. Tanpa memenuhi syarat kontribusi tersebut, sebuah pekerjaan penelitian berisiko hanya menjadi implementasi teknis yang tidak meninggalkan jejak akademik yang berkelanjutan.

### Inti yang Harus Ditekankan

- Enam area riset yang disebutkan merupakan frontiers aktif karena menggabungkan tantangan teknis (heterogenitas, skalabilitas, privasi) dengan kebutuhan metodologis baru yang belum terpenuhi oleh alat konvensional.
- Penelitian tingkat magister wajib menghindari pola "aplikasi naif"; novelty harus terlihat jelas baik dari sisi desain metode, rigor evaluasi, maupun kedalaman analisis empiris.
- Koneksi antara peluang riset ini dengan konsep kausalitas dan evaluasi model yang dibahas sebelumnya menunjukkan bahwa penelitian yang berkualitas harus mampu menjembatani prediksi akurat dengan interpretasi yang dapat dipercaya dan aman secara etika.

### Transisi ke Slide Berikutnya

Untuk memastikan kita tidak terjebak pada tren permukaan, mari kita praktikkan bagaimana memilah antara paper yang hanya mengikuti hype dengan karya yang memiliki kontribusi substansial. Pada slide berikutnya, kita akan membahas kerangka diskusi kelas untuk mengevaluasi novelty, kekuatan baseline, dan validitas klaim dalam paper mutakhir, lengkap dengan contoh pola penelitian yang lemah versus yang kuat.

---

## Slide 027 - Comparative Discussion: Tren vs Kontribusi

### Narasi

Slide ini dirancang sebagai panduan kritis dalam melakukan tinjauan literatur terhadap paper mutakhir di bidang data mining, khususnya yang berkaitan dengan foundation models, generative AI, dan teknik preservasi privasi. Mengacu pada pembahasan sebelumnya mengenai syarat kontribusi ilmiah, sebuah riset tidak boleh berhenti pada tataran aplikasi atau implementasi semata. Mahasiswa diharapkan mampu membedah setiap publikasi dengan lima pertanyaan fundamental yang menentukan kualitas argumen ilmiahnya. Pertama, identifikasi novelty sesungguhnya: apakah paper tersebut benar-benar menawarkan ide, arsitektur, atau insight baru, atau sekadar variasi marginal dari metode yang sudah ada? Kedua, evaluasi kekuatan baseline: perbandingan harus dilakukan terhadap state-of-the-art yang relevan, bukan hanya model default atau algoritma lama yang sudah usang. Ketiga, pastikan eksperimen secara langsung menjawab research question yang dirumuskan, sehingga tidak terjadi misalignment antara tujuan studi dan metodologi pengujian. Keempat, waspadai klaim yang terlalu luas atau generalisasi berlebihan tanpa dukungan bukti empiris yang memadai. Kelima, pertimbangkan kontribusi yang bertahan setelah hype teknologi mereda; fokuslah pada nilai tambah metodologis, teoretis, atau praktis yang dapat diadopsi oleh komunitas riset jangka panjang.

Untuk memperjelas standar tersebut, mari kita bandingkan dua pola penulisan hasil penelitian. Pola lemah sering kali hanya menyatakan penggunaan alat mutakhir diikuti dengan satu angka performa, seperti `"Kami menggunakan LLM untuk melakukan klasifikasi. Hasil: accuracy 0.90."` Pernyataan semacam ini gagal memberikan konteks, tidak membandingkan dengan alternatif lain, dan tidak menjelaskan mengapa hasil tersebut signifikan. Sebaliknya, pola kuat menyajikan analisis yang mendalam dan terstruktur, misalnya `"Kami menganalisis kapan LLM outperforms GBDT dalam klasifikasi tabular dan menemukan faktor X, dengan ablasi dan evaluasi pada 15 dataset."` Pola ini menunjukkan pemahaman mendalam tentang kondisi batas (boundary conditions), melakukan dekomposisi komponen model melalui ablasi, serta memvalidasi temuan pada keragaman data yang cukup besar. Dalam konteks data mining modern, pendekatan seperti ini jauh lebih bernilai karena menghasilkan prinsip yang dapat direplikasi dan dikembangkan lebih lanjut.

Kemampuan membedakan kedua pola ini merupakan kompetensi inti bagi mahasiswa pascasarjana yang sedang mempersiapkan proyek penelitian mandiri. Evaluasi kritis terhadap novelty, baseline, kesesuaian eksperimen, ruang lingkup klaim, dan daya tahan kontribusi akan membentuk fondasi kuat dalam menyusun hipotesis, merancang eksperimen, dan menulis naskah ilmiah berkualitas tinggi. Proses ini juga melatih你们 untuk tidak terjebak pada追逐 tren, melainkan membangun argumen berbasis evidence yang solid.

### Inti yang Harus Ditekankan

- Novelty harus bersifat substantif dan terukur, bukan sekadar penerapan teknologi baru pada masalah klasik tanpa analisis mendalam.
- Validitas klaim ilmiah sangat bergantung pada kekuatan baseline, kesesuaian desain eksperimen dengan research question, serta ketepatan ruang lingkup pernyataan.
- Penelitian berkualitas tinggi selalu dilengkapi dengan mekanisme ablasi, evaluasi multi-dataset, dan interpretasi faktor kinerja yang jelas, sehingga temuan tetap relevan meskipun tren teknologi berubah.

### Transisi ke Slide Berikutnya

Lima pertanyaan kritis ini akan kami formalisasikan menjadi instrumen evaluasi yang lebih terstruktur. Pada slide berikutnya, kita akan membahas checklist lengkap untuk menilai klaim metode emerging, yang sekaligus berfungsi sebagai standar penilaian bagi proyek akhir penelitian kalian. Mari kita lanjutkan ke langkah-langkah operasional dalam verifikasi bukti ilmiah.

---

## Slide 028 - Checklist Menilai Klaim Emerging Methods

### Narasi

Setelah kita membedah perbedaan mendasar antara tren yang sedang populer dengan kontribusi ilmiah yang sesungguhnya pada slide sebelumnya, langkah selanjutnya adalah memiliki instrumen evaluasi yang konkret dan terukur. Dalam ekosistem penelitian data mining tingkat magister, kita tidak lagi dapat menilai sebuah metode emerging hanya berdasarkan kesan subjektif atau popularitasnya di komunitas riset. Di sinilah checklist metodologis ini berfungsi sebagai filter kritis untuk memastikan bahwa setiap klaim kinerja didukung oleh bukti empiris yang valid.

Pertama, setiap penelitian wajib berangkat dari *research question* yang spesifik dan terbatasi. Pertanyaan penelitian harus jelas menyatakan apa yang ingin diuji, dalam konteks apa, dan menggunakan metrik apa. Kedua, pemilihan *baseline* tidak boleh bersifat asal pakai atau mengacu pada konfigurasi default saja. Baseline harus merepresentasikan pendekatan state-of-the-art yang relevan atau metode konvensional yang telah terbukti kuat, sehingga perbandingan menjadi adil dan memberikan wawasan yang bermakna. Ketiga, setiap klaim inovasi wajib disertai studi ablasi. Ablasi berfungsi mengisolasi kontribusi masing-masing komponen baru yang diajukan peneliti, sehingga kita dapat membedakan apakah peningkatan performa berasal dari ide inti atau hanya dari penyesuaian teknis sekunder.

Keempat, analisis sensitivitas terhadap hiperparameter diperlukan untuk mendemonstrasikan stabilitas model. Metode yang klaimnya robust harus menunjukkan performa konsisten di berbagai rentang nilai hiperparameter, bukan hanya pada satu set tuning yang dioptimalkan secara berlebihan (*over-tuning*). Kelima, evaluasi harus dilakukan pada kumpulan dataset yang beragam, mencakup karakteristik berbeda seperti distribusi kelas, dimensi fitur, skala data, dan tingkat noise. Evaluasi pada satu dataset saja sangat rentan terhadap bias overfitting kontekstual dan tidak menjamin generalisasi. Keenam, klaim selisih performa harus didukung oleh uji statistik atau penyajian *confidence interval*. Perbedaan akurasi atau F1-score yang tipis seringkali tidak signifikan secara statistik, sehingga laporan tanpa pengujian signifikansi berisiko menyesatkan pembaca.

Ketujuh, kompleksitas komputasi—baik dalam bentuk waktu pelatihan/inferensi, kebutuhan memori, maupun skalabilitas—harus dilaporkan secara eksplisit. Metode yang mengklaim efisiensi tinggi namun membutuhkan infrastruktur komputasi raksasa perlu dikontekstualisasikan dengan tepat agar implikasi praktisnya jelas. Kedelapan, aspek *reproducibility* adalah standar mutlak dalam penelitian akademik modern. Laporan harus mencantumkan random seed, skrip kode lengkap, serta spesifikasi lingkungan eksekusi (versi library, sistem operasi, arsitektur GPU/CPU) agar hasil dapat direplikasi dan diverifikasi oleh peneliti lain. Seluruh rangkaian poin ini bukanlah administrasi belaka, melainkan fondasi desain eksperimen yang ketat yang akan langsung Anda terapkan saat menyusun final research project semester ini.

### Inti yang Harus Ditekankan

- Checklist ini merupakan standar minimum kualitas eksperimen untuk paper internasional Scopus dan proyek akhir magister.
- Validitas klaim emerging methods bergantung pada kombinasi ablasi, uji statistik, diversitas dataset, dan transparansi komputasi.
- Reproducibility (seed, kode, environment) sama pentingnya dengan angka performa karena menentukan kredibilitas ilmiah jangka panjang.

### Transisi ke Slide Berikutnya

Dengan checklist ini sebagai landasan, kita kini siap melangkah ke tahap implementasi nyata. Pada slide berikutnya, kita akan membahas bagaimana merancang final experiment dan melakukan deep analysis yang terstruktur, mulai dari ablation study hingga interpretasi evidence berbasis statistik untuk memperkuat argumen ilmiah penelitian Anda.

---

## Slide 029 - Final Experiment dan Deep Analysis

### Narasi

Setelah menyelesaikan checklist penilaian metode pada slide sebelumnya, kita kini memasuki fase kritis dari proyek penelitian Anda, yaitu Final Experiment dan Deep Analysis. Pada jenjang magister, keberhasilan sebuah penelitian tidak diukur dari seberapa banyak algoritma yang dicoba, melainkan dari seberapa rigor dan transparan Anda menguji klaim ilmiah yang diajukan. Fase ini menuntut Anda beralih dari tahap eksplorasi menuju verifikasi sistematis dengan empat komponen utama yang harus diselesaikan secara berurutan.

Pertama, Final Experiment merupakan eksekusi utama menggunakan konfigurasi model terbaik yang telah melalui proses seleksi dan tuning. Hasil dari eksperimen ini menjadi fondasi utama laporan Anda dan harus dijalankan pada seluruh subset dataset yang telah ditetapkan sejak awal. Kedua, Ablation Study wajib dilakukan untuk mengisolasi kontribusi masing-masing komponen inovatif yang Anda usulkan. Dengan menonaktifkan atau mengganti satu per satu modul, Anda membuktikan secara empiris bahwa peningkatan performa berasal dari ide metodologis Anda, bukan dari artefak preprocessing atau bias sampling. Ketiga, Sensitivity Analysis menguji ketahanan model terhadap variasi hyperparameter maupun pergeseran distribusi data. Analisis ini menjawab apakah metode Anda stabil di berbagai kondisi, atau hanya bekerja optimal pada titik parameter tertentu saja. Keempat, Statistical Analysis memastikan bahwa selisih performa yang Anda temukan bersifat signifikan secara statistik. Penggunaan uji seperti paired t-test, Wilcoxon signed-rank, atau perhitungan confidence interval menjadi standar mutlak untuk menolak klaim berbasis angka tunggal yang rentan terhadap fluktuasi acak.

Dalam menjalankan rangkaian ini, hindari praktik p-hacking atau menjalankan puluhan eksperimen tanpa hipotesis yang terstruktur. Setiap percobaan harus memiliki tujuan spesifik yang sudah tertuang dalam pre-registered analysis plan sebelum kode pertama kali dieksekusi. Disiplin teknis juga sama pentingnya: simpan secara terstruktur semua konfigurasi environment, seed random, versi library, dan log eksekusi. Reproducibility bukan sekadar etika akademik, melainkan prasyarat agar temuan Anda dapat diverifikasi oleh reviewer atau peneliti lain di komunitas ilmiah.

Rancangan sistematis ini akan sangat relevan ketika kita menelaah contoh konkret tabel desain eksperimen pada slide berikutnya, yang memetakan setiap kelompok pengujian terhadap baseline, dataset, dan metrik evaluasi secara transparan. Kedalaman analisis dan kejelasan argumen berbasis evidence jauh lebih bernilai daripada kuantitas trial-and-error.

### Inti yang Harus Ditekankan

- Eksperimen harus didorong oleh hipotesis yang jelas, bukan pencarian pola tanpa arah (avoid p-hacking/fishing expedition).
- Ablation dan sensitivity analysis adalah bukti empiris bahwa metode Anda robust, bukan sekadar overfit pada konfigurasi tertentu.
- Pre-registered analysis plan dan pencatatan seed/konfigurasi adalah standar reproduktibilitas wajib untuk publikasi bereputasi.

### Transisi ke Slide Berikutnya

Dengan memahami pilar-pilar eksperimen ini, mari kita lihat bagaimana keempat komponen tersebut diterjemahkan ke dalam tabel rancangan praktis pada slide berikutnya, lengkap dengan pemetaan kelompok pengujian, baseline, dan prinsip fokus penelitian.

---

## Slide 030 - Contoh Desain Eksperimen

### Narasi

Pada slide ini, kita beralih dari konsep teoritis menuju operasionalisasi penelitian melalui contoh konkret rancangan eksperimen. Tabel yang ditampilkan bukan sekadar kumpulan konfigurasi teknis, melainkan peta metodologis yang harus Anda ikuti agar klaim penelitian Anda dapat dipertanggungjawabkan secara ilmiah. Kolom pertama membagi evaluasi menjadi empat kelompok strategis: Utama, Ablasi, Sensitivitas, dan Generalisasi. Untuk kelompok Utama, Anda membandingkan metode usulan terhadap baseline yang telah dioptimalkan, seperti GBDT tuned, menggunakan sekumpulan dataset (D1, D2, D3) dengan metrik evaluasi yang relevan seperti F1-score dan AUC. Ini merupakan inti kontribusi penelitian Anda dan harus direplikasi minimal tiga kali dengan seed berbeda untuk memastikan konsistensi awal.

Kelompok Ablasi dirancang untuk melakukan bedah komposisi metode Anda. Dengan menonaktifkan komponen A secara bertahap pada dataset D1 dan membandingkannya dengan Proposed full, Anda dapat mengkuantifikasi kontribusi spesifik setiap modul atau fitur. Dalam konteks penelitian tingkat magister, keunggulan numerik saja tidak cukup; Anda harus mampu menjelaskan mekanismenya. Ablasi menjawab pertanyaan mendasar mengapa metode Anda bekerja lebih baik, sehingga reviewer dapat melihat kedalaman analisis Anda terhadap arsitektur atau pipeline yang dibangun.

Kelompok Sensitivitas menguji ketahanan model terhadap fluktuasi konfigurasi. Alih-alih hanya melaporkan satu set hyperparameter terbaik, Anda harus memetakan performa melintasi range nilai tertentu. Tujuannya adalah membuktikan bahwa hasil yang Anda capai tidak bergantung pada kebetulan penyetelan parameter atau noise acak. Sementara itu, kelompok Generalisasi mengevaluasi kemampuan transfer metode Anda ke domain yang berbeda menggunakan dataset D4. Fokus pada metrik AUC dalam konteks cross-domain ini menguji apakah pola yang dipelajari benar-benar robust atau hanya mengalami overfitting terhadap distribusi data pelatihan.

Prinsip yang mengatur seluruh tabel ini sangat ketat: fokus pada satu pertanyaan penelitian utama. Hindari jebakan eksplorasi buta tanpa hipotesis yang terstruktur. Setiap baris dalam tabel ini harus memiliki tujuan analitis yang jelas, di mana ablasi mengungkap mekanisme kerja, dan sensitivitas membuktikan stabilitas empiris. Rancangan ini merupakan tindak lanjut langsung dari peringatan pada slide sebelumnya mengenai pentingnya analisis mendalam dan perencanaan eksperimen yang terdokumentasi. Jika slide berikutnya akan membahas implementasi teknis analisis statistik seperti bootstrap confidence interval dan uji signifikansi, maka tabel desain ini berfungsi sebagai fondasi yang menentukan variabel apa yang harus diuji secara statistik. Tanpa desain yang rapi, analisis statistik hanya akan menghasilkan angka tanpa makna ilmiah.

### Inti yang Harus Ditekankan

- Setiap baris dalam rancangan eksperimen harus menjawab pertanyaan penelitian spesifik; jangan melakukan pengujian tanpa hipotesis yang jelas.
- Ablasi wajib dilakukan untuk mengisolasi kontribusi tiap komponen metode, sehingga keunggulan model dapat dijelaskan secara mekanistik, bukan hanya deskriptif.
- Evaluasi sensitivitas dan generalisasi (cross-domain) adalah standar wajib pada penelitian S2 untuk membuktikan robustness dan mencegah overclaiming performa model.

### Transisi ke Slide Berikutnya

Setelah struktur eksperimen ditetapkan, langkah selanjutnya adalah mengonfirmasi apakah perbedaan performa yang teramati benar-benar signifikan secara statistik. Mari kita lihat bagaimana mengimplementasikan bootstrap confidence interval dan uji signifikansi secara algoritmik untuk mengvalidasi temuan dari tabel desain ini.

---

## Slide 031 - Statistical Analysis: Pseudocode

### Narasi

Setelah merancang rancangan eksperimen secara sistematis pada slide sebelumnya, langkah metodologis berikutnya yang tidak boleh dilewatkan adalah validasi hasil melalui analisis statistik yang ketat. Pada tingkat magister, klaim kinerja model tidak dapat hanya bertumpu pada satu kali eksekusi atau nilai rata-rata tunggal tanpa mengukur dispersi, ketidakpastian, dan signifikansi statistiknya. Slide ini memperkenalkan dua prosedur statistik inti yang wajib diimplementasikan dalam pipeline penelitian data mining modern: perhitungan Bootstrap Confidence Interval dan uji signifikansi perbandingan model.

Mari kita telaah contoh pseudocode untuk Bootstrap Confidence Interval terlebih dahulu. Fungsi ini menerima objek model yang sudah terlatih, data uji, label ground truth, serta jumlah iterasi resampling yang umumnya diset antara 1000 hingga 5000. Di dalam loop, algoritma melakukan *sampling with replacement* terhadap indeks baris data uji. Setiap subset bootstrapping yang terbentuk kemudian diproses kembali oleh model untuk menghitung skor metrik evaluasi (seperti F1-score, AUC, atau MAE), lalu disimpan dalam sebuah list. Setelah seluruh iterasi selesai, fungsi mengembalikan batas bawah dan atas interval kepercayaan 95% dengan mengekstrak kuantil ke-2,5 dan ke-97,5 dari distribusi skor bootstrap. Pendekatan ini sangat direkomendasikan karena bersifat non-parametrik, artinya tidak mensyaratkan asumsi distribusi normal pada residual atau skor model, sehingga tetap robust meskipun digunakan pada metrik kompleks atau dataset berukuran terbatas.

Untuk fase perbandingan antar-metode, slide selanjutnya menyajikan kerangka uji signifikansi. Hipotesis nol (*H0*) dirumuskan secara eksplisit: tidak ada perbedaan performa yang nyata antara metode A dan metode B. Dalam konteks penelitian tabular dan machine learning, *paired bootstrap* atau uji non-parametrik seperti *Wilcoxon signed-rank test* lebih unggul dibandingkan t-test berpasangan konvensional. Hal ini karena kedua metode tersebut secara eksplisit menangani dependensi antar-pengamatan ketika evaluasi dilakukan pada partition data yang sama. Jika nilai p-value yang dihasilkan berada di bawah ambang batas 0,05, maka *H0* ditolak, yang secara statistik menandakan bahwa selisih performa yang teramati memiliki probabilitas sangat kecil untuk muncul akibat variasi acak semata.

Namun, pelaporan hasil statistik dalam paper penelitian harus melampaui sekadar penyajian p-value. Panduan pada bagian laporan menekankan kewajiban untuk menyertakan *effect size*, misalnya Cohen’s d, Cliff’s delta, atau selisih absolut pada metrik utama. Nilai p-value yang signifikan secara statistik belum otomatis mencerminkan dampak praktis yang berarti, terutama pada dataset berskala besar di mana fluktuasi sekecil 0,1% pun dapat menghasilkan p-value mendekati nol. Oleh karena itu, integrasi antara interval kepercayaan, uji signifikansi berbasis paired design, dan ukuran efek memberikan triangulasi bukti yang diperlukan untuk mendukung claim ilmiah yang kredibel dan dapat direplikasi.

### Inti yang Harus Ditekankan

- Bootstrap Confidence Interval memberikan estimasi ketidakpastian performa model tanpa bergantung pada asumsi distribusi normal, menjadikannya standar de facto untuk metrik kompleks dan dataset terbatas.
- Uji signifikansi perbandingan model wajib menggunakan pendekatan paired (paired bootstrap atau Wilcoxon signed-rank) agar dependensi data uji yang sama tidak melanggar independensi statistik.
- Laporan penelitian S2 harus selalu melaporkan effect size alongside p-value untuk mencegah kesalahan interpretasi antara signifikansi statistik dan signifikansi praktis.

### Transisi ke Slide Berikutnya

Dengan fondasi analisis statistik yang solid ini, kita telah具备 alat untuk memverifikasi apakah perbedaan performa benar-benar bermakna secara matematis. Langkah selanjutnya adalah menerjemahkan angka-angka tersebut menjadi narasi ilmiah yang koheren. Pada slide berikutnya, kita akan membahas bagaimana membedakan signifikansi statistik dari signifikansi praktis, serta cara menyusun error analysis dan failure case study sebagai bahan diskusi kritis sebelum masuk ke penulisan paper penelitian.

---

## Slide 032 - Menuju Pertemuan 15

### Narasi

Pada slide sebelumnya, kita telah membahas implementasi pseudocode untuk bootstrap confidence interval dan uji signifikansi statistik, serta menekankan pentingnya melaporakan effect size alongside p-value. Setelah seluruh eksperimen dijalankan dan kumpulan metrik berhasil dikumpulkan, fase berikutnya dalam alur penelitian jenjang magister adalah mengubah angka-angka empiris tersebut menjadi klaim ilmiah yang koheren dan dapat dipertanggungjawabkan. Pertemuan 15 akan membimbing Anda dalam proses sintesis ini, di mana fokus bergeser dari sekadar pelaporan performa model menuju konstruksi argumen penelitian yang solid.

Pembedaan mendasar yang harus dipahami adalah statistical significance versus practical significance. Dalam konteks data mining tingkat lanjut, sebuah selisih akurasi atau AUC mungkin menghasilkan nilai p < 0,05, namun secara praktis perubahan tersebut bisa jadi terlalu marginal untuk mempengaruhi keputusan deployment atau menambah nilai bisnis. Karena itulah, error analysis dan identifikasi failure cases akan menjadi bahan diskusi utama. Memetakan di mana model gagal memberikan insight yang jauh lebih bernilai daripada sekadar mengagungkan skor rata-rata. Analisis ini meliputi klasifikasi kesalahan berdasarkan pola fitur, ketidakseimbangan kelas, atau drift distribusi, yang nantinya menjadi dasar untuk merumuskan hipotesis perbaikan atau novelty metodologis.

Untuk mendukung diskusi tersebut, terdapat empat elemen yang wajib disiapkan sebelum memasuki sesi pembahasan mendalam. Pertama, ringkasan eksperimen utama yang menyajikan perbandingan transparan antara baseline konvensional dengan metode usulan. Kedua, output dari uji ablasi dan sensitivitas hyperparameter, yang berfungsi sebagai bukti empiris bahwa peningkatan performa berasal dari komponen inovatif yang diusulkan, bukan dari overfitting atau tuning arbitrer. Ketiga, dokumentasi terstruktur mengenai analisis error dan kasus gagal, dilengkapi dengan visualisasi atau contoh input yang memicu kesalahan. Keempat, draft interpretasi temuan yang secara eksplisit menghubungkan hasil eksperimen kembali ke research question awal. Persiapan ini menjamin bahwa setiap klaim yang diajukan berlandaskan evidence-based dan memenuhi standar replikasi akademik.

### Inti yang Harus Ditekankan

- Klaim ilmiah tidak dibangun dari p-value semata, melainkan dari pemahaman mendalam tentang perbedaan antara signifikansi statistik dan signifikansi praktis.
- Error analysis dan studi kegagalan model adalah fondasi utama untuk menemukan research gap, membuktikan validitas komponen usulan, dan merancang kontribusi metodologis yang bermakna.
- Dokumen penelitian harus mencakup empat pilar persiapan: ringkasan komparatif, bukti ablasi/sensitivitas, peta kegagalan, dan draft interpretasi yang terstruktur sebelum proses penulisan paper dimulai.

### Transisi ke Slide Berikutnya

Dengan kerangka analisis dan persiapan dokumen yang telah dirinci, kita kini akan langsung mengaplikasikannya pada konteks nyata melalui studi kasus evaluasi synthetic tabular data, di mana kita akan menguji kesetaraan performa model berbasis data sintetis versus data asli, serta mempelajari cara menginterpretasikan hasilnya dalam perspektif kontribusi ilmiah yang relevan.

---

## Slide 033 - Studi Kasus: Evaluasi Synthetic Tabular Data

### Narasi

Pada slide ini, kita membahas sebuah studi kasus kritis yang kerap muncul dalam riset *data mining* kontemporer, terutama ketika peneliti memanfaatkan model generatif untuk augmentasi data atau mitigasi keterbatasan akses data. Pertanyaan inti yang diajukan adalah apakah model yang dilatih sepenuhnya pada data sintetis mampu menghasilkan performa yang setara dengan model yang dilatih menggunakan data asli. Dalam konteks penelitian jenjang magister, jawaban atas pertanyaan ini tidak boleh bersifat hitam-putih berdasarkan satu angka metrik tunggal, melainkan harus diturunkan melalui protokol eksperimen yang ketat, transparan, dan dapat direplikasi.

Untuk menjawab pertanyaan tersebut secara metodologis, kita menerapkan alur eksperimen bertahap. Pertama, kita melatih model generatif tabular—misalnya CTGAN, TVAE, atau Gaussian Copula—pada *training set* asli. Setelah model generatif mencapai konvergensi, kita melakukan sampling data sintetis dengan jumlah sampel yang identik dengan ukuran *training set* awal. Langkah selanjutnya adalah melatih classifier standar pada tiga konfigurasi data: data asli murni, data sintetis murni, dan data hibrida (*campuran*). Seluruh model kemudian diujikan pada *test set* asli yang tetap tertutup selama proses pelatihan dan sampling. Karena varians acak dalam inisialisasi bobot dan pembangkitan data dapat memengaruhi hasil, seluruh rangkaian eksperimen wajib diulang dengan beberapa nilai *seed* berbeda untuk mengukur stabilitas dan mengurangi bias stokastik.

Hasil evaluasi umumnya menunjukkan adanya degradasi performa pada data sintetis dibandingkan baseline data asli. Misalnya, jika akurasi model pada data sintetis hanya mencapai 80% dari akurasi data asli, apakah temuan ini masih relevan secara ilmiah? Jawabannya sangat bergantung pada konteks aplikasi dan batasan etika. Jika data asli mengandung variabel sensitif yang memerlukan perlindungan privasi ketat, atau jika fenomena yang dipelajari sangat langka sehingga sulit diperoleh sampel tambahan, maka pencapaian 80% tersebut justru merepresentasikan terobosan praktis yang signifikan. Hal ini menegaskan kembali perbedaan antara signifikansi statistik dan signifikansi praktis yang telah kita diskusikan sebelumnya: penurunan metrik bukan berarti kegagalan, melainkan indikasi perlunya penyesuaian ekspektasi riset berdasarkan trade-off antara utilitas analitik dan kebutuhan privasi atau kelangkaan data.

Pendekatan evaluasi ini juga berfungsi sebagai bentuk *ablation study* terhadap kualitas data sintetik itu sendiri. Dalam penulisan paper bereputasi, peneliti diharapkan tidak hanya melaporkan selisih performa, tetapi juga menganalisis distribusi margin kesalahan, konsistensi prediksi antar-*seed*, serta dampak ukuran sampel sintetis terhadap generalisasi model. Pemahaman ini menjadi landasan penting sebelum kita mengeksplorasi teknik rekayasa fitur yang lebih kompleks, di mana input fitur dapat dihasilkan secara otomatis oleh model bahasa besar atau algoritma khusus, sehingga mengubah dinamika evaluasi dari sekadar kualitas data menjadi kualitas representasi fitur.

### Inti yang Harus Ditekankan

- Desain eksperimen evaluasi data sintetis harus mencakup tiga skenario pelatihan (asli, sintetis, campuran) dan evaluasi pada test set asli yang tidak terlihat.
- Pengulangan eksperimen dengan multiple seed adalah wajib untuk menjamin stabilitas hasil dan menghindari klaim yang didorong oleh fluktuasi acak.
- Penurunan performa pada data sintetis tidak serta-merta menandakan kegagalan riset; nilai ilmiahnya harus dinilai berdasarkan konteks privasi, kelangkaan data, dan signifikansi praktis.
- Hasil studi kasus ini menjadi benchmark metodologis sebelum beralih ke teknik lanjutan seperti LLM-assisted feature engineering yang mengubah sumber variasi input.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana mengevaluasi kualitas data sintetis secara holistik, kita kini akan beralih ke aspek lain yang sama krusialnya dalam pipeline *data mining*: bagaimana fitur itu sendiri dibangun. Pada slide berikutnya, kita akan mempelajari studi kasus penggunaan Large Language Models untuk membantu rekayasa fitur, serta bagaimana mendesain eksperimen yang adil untuk membandingkan fitur buatan manusia, fitur otomatis konvensional, dan fitur yang dihasilkan oleh LLM.

---

## Slide 034 - Studi Kasus: LLM-Assisted Feature Engineering

### Narasi

Beralih dari evaluasi data sintetis pada slide sebelumnya, kita kini memasuki fase augmentasi representasi data melalui LLM-Assisted Feature Engineering. Tujuan utama studi kasus ini adalah melakukan perbandingan empiris antara fitur yang dihasilkan oleh Large Language Model dengan pendekatan rekayasa fitur manual oleh domain expert atau otomatisasi konvensional seperti One-Hot Encoding, Target Encoding, atau library auto-featurization. Dalam konteks penelitian tingkat magister, pertanyaan mendasarnya bukan hanya apakah akurasi meningkat, tetapi apakah penambahan fitur berbasis LLM memberikan kontribusi metodologis yang signifikan, reproducible, dan layak secara komputasi.

Desain eksperimen disusun dengan struktur kontrol yang ketat untuk mengisolasi pengaruh fitur tambahan. Kita menggunakan dataset tabular standar dengan target klasifikasi. Sebagai baseline, model Gradient Boosting Decision Tree (GBDT) dilatih hanya pada fitur-fitur asli dataset. Sebagai treatment, kita menyuntikkan fitur-fitur baru yang digenerate oleh LLM melalui prompting strategis, misalnya permintaan untuk mengidentifikasi pola non-linear tersembunyi, membuat interaction features berbasis konteks semantik, atau mengubah variabel kualitatif menjadi embedding numerik yang lebih informatif. Pemilihan GBDT sebagai classifier bersifat deliberate karena model ini tahan terhadap noise dan mampu menangani fitur heterogen, sehingga perbedaan performa dapat dikaitkan secara langsung pada kualitas fitur yang ditambahkan, bukan pada arsitektur model itu sendiri.

Evaluasi dirancang untuk mengatasi inherent stochasticity dari LLM dan varians split data. Eksperimen dijalankan dengan repeated k-fold cross-validation dan multiple random seeds. Setiap iterasi melibatkan generation ulang fitur melalui LLM, penyesuaian prompt jika diperlukan, dan pelatihan ulang model. Pengulangan ini memungkinkan perhitungan mean dan confidence interval untuk setiap metrik, memastikan bahwa klaim kinerja didasarkan pada distribusi statistik yang robust, bukan pada lucky split atau anomali generation tunggal. Pendekatan ini juga memungkinkan analisis ablation sederhana untuk mengukur marginal gain dari setiap batch fitur LLM.

Ukuran yang dilaporkan mencakup empat dimensi evaluasi yang saling melengkapi. Pertama, performa prediktif diukur melalui AUC-ROC dan F1-Score, dilengkapi dengan delta selisih antara baseline dan treatment. Kedua, efisiensi operasional dicatat berupa waktu inference API dan biaya finansial per fold, karena fitur LLM sering kali memerlukan panggilan model yang mahal. Ketiga, stabilitas diuji dengan membandingkan konsistensi hasil antar berbagai variasi prompt dan seed generation. Keempat, aspek interpretabilitas dan pertanggungjawaban fitur dievaluasi secara kritis; fitur yang dihasilkan harus dapat dilacak asal-usul logikanya, bebas dari bias implisit yang tidak terdeteksi, dan dapat diaudit sebelum diintegrasikan ke dalam pipeline produksi. Keseluruhan proses ini mencerminkan standar rigor metodologis S2 di mana novelty harus dibarengi dengan transparansi dan kelayakan implementasi.

### Inti yang Harus Ditekankan

- Fitur buatan LLM harus dievaluasi melalui kerangka eksperimen yang ketat (baseline vs treatment, repeated CV, multiple seeds) untuk memastikan peningkatan performa bukan akibat varians acak.
- Metrik keberhasilan tidak hanya terbatas pada AUC/F1, tetapi harus mencakup analisis biaya API, waktu eksekusi, stabilitas lintas prompt, dan tingkat interpretabilitas fitur.
- Kontribusi ilmiah terletak pada kemampuan peneliti membuktikan bahwa fitur LLM memberikan marginal gain yang signifikan, stabil, dan dapat dipertanggungjawabkan secara metodologis, bukan sekadar meningkatkan angka akurasi secara artifisial.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana merancang dan mengevaluasi studi kasus feature engineering berbasis LLM secara rigor, langkah selanjutnya adalah menerapkan mindset kritis ini langsung pada literatur terkini. Pada aktivitas pertemuan ini, kita akan membahas presentasi konsep metode emerging, diikuti oleh seminar paper mutakhir dari mahasiswa, serta diskusi komparatif antara tren industri versus kontribusi ilmiah yang sebenarnya.

---

## Slide 035 - Aktivitas Pertemuan 14

### Narasi

Setelah pembahasan pada slide sebelumnya mengenai studi kasus penggunaan Large Language Model untuk rekayasa fitur otomatis, kita kini memasuki inti aktivitas pertemuan ke-14. Pada sesi kuliah dan diskusi, fokus utama adalah mendalami metode-metode penambangan data yang sedang berkembang pesat, atau dikenal sebagai *emerging methods*. Mahasiswa akan mempresentasikan konsep-konsep fundamental dari topik-topik mutakhir tersebut, dilanjutkan dengan seminar paper yang telah mereka kurasi. Diskusi tidak hanya bersifat deskriptif, tetapi harus mengarah pada analisis komparatif antara tren industri versus kontribusi ilmiah yang substantif. Pada jenjang magister, kemampuan membedakan antara *hype* teknologi dan kemajuan metodologis yang terukur merupakan kompetensi kunci yang harus diasah.

Untuk menguji pemahaman teoritis tersebut, bagian praktik menuntut pendekatan yang lebih empiris. Anda akan melakukan analisis paper secara kritis dengan tiga elemen wajib: mengidentifikasi klaim utama peneliti, memeriksa baseline yang digunakan sebagai acuan, dan menelusuri bukti empiris (*evidence*) yang mendukung klaim tersebut. Selanjutnya, lakukan *mini reproduction*. Ini bukan replikasi penuh yang memakan waktu, melainkan eksekusi subset eksperimen sederhana menggunakan lingkungan seperti Jupyter Notebook atau Google Colab untuk memvalidasi klaim inti. Dengan menjalankan kode dasar atau menguji logika model yang dilaporkan, Anda akan langsung melihat konsistensi metodologi, potensi bias, atau celah dalam pelaporan hasil penelitian.

Dari rangkaian kegiatan ini, output yang diharapkan berupa rekomendasi riset berarah dan tinjauan kritis yang padat. Anda harus mampu merumuskan rekomendasi arah penelitian baru yang didasarkan pada *research gap* yang teridentifikasi, lengkap dengan justifikasi metodologisnya. Selain itu, susunlah *critical review* singkat yang mencakup kekuatan, kelemahan, dan potensi pengembangan lebih lanjut dari paper yang dianalisis. Poin penekanannya adalah kemampuan Anda menyaring literatur mutakhir menjadi insight yang *actionable*, yang nantinya akan menjadi fondasi kuat untuk eksperimen dan penulisan naskah penelitian akhir semester.

### Inti yang Harus Ditekankan

- Membedakan secara kritis antara tren industri yang populer dengan kontribusi ilmiah yang memiliki validitas metodologis dan dapat direproduksi.
- Verifikasi klaim paper melalui *mini reproduction* eksperimental untuk menguji konsistensi baseline dan bukti empiris sebelum mengadopsi metodenya.
- Kemampuan menerjemahkan temuan literatur menjadi rekomendasi riset yang terstruktur, berbasis *research gap*, dan siap diimplementasikan dalam proyek individual atau tim.

### Transisi ke Slide Berikutnya

Setelah Anda menyelesaikan proses analisis dan validasi empiris terhadap paper pilihan, saatnya mengevaluasi progres proyek penelitian pribadi Anda. Mari kita lihat checkpoint yang harus terpenuhi sebelum kita memasuki tahap penyusunan naskah final pada pertemuan berikutnya.

---

## Slide 036 - Checkpoint Research Project

### Narasi

Pada tahap checkpoint ini, kita melakukan evaluasi progres penelitian berdasarkan standar metodologis tingkat magister. Secara ideal, setiap mahasiswa atau tim sudah menjalankan eksperimen final yang dirancang untuk menguji hipotesis secara komprehensif. Selain itu, analisis ablation atau sensitivitas parameter harus sudah dimulai sebagian, karena pada jenjang S2, memahami kontribusi masing-masing komponen model sama pentingnya dengan melaporkan metrik performa akhir. Proses analisis statistik juga diharapkan sudah dalam tahap pengerjaan, mencakup uji signifikansi, confidence interval, dan pengukuran varians, sehingga klaim keunggulan model dapat didukung oleh evidence kuantitatif yang robust. Interpretasi awal terhadap hasil eksperimen pun sudah tersedia, memungkinkan kita mengidentifikasi pola error, bias distribusi, atau batas generalisasi sebelum masuk ke penulisan naskah lengkap.

Jika progres kalian belum mencapai titik tersebut, diperlukan strategi prioritas yang disiplin. Fokuskan seluruh sumber daya dan waktu yang tersisa hanya pada eksperimen inti yang secara langsung menjawab Research Question (RQ) utama. Hindari penambahan fitur baru, percobaan arsitektur tambahan, atau hyperparameter tuning yang tidak relevan, karena hal ini justru akan mengaburkan fokus penelitian dan menghambat penyelesaian analisis. Yang paling krusial saat ini adalah mendokumentasikan setiap langkah yang telah dilakukan secara transparan, termasuk konfigurasi environment, pipeline preprocessing menggunakan pandas dan NumPy, serta log eksekusi skrip di Jupyter Notebook atau Google Colab. Dokumentasi yang terstruktur akan menjadi fondasi metodologi yang kuat dan menjamin reproducibility penelitian kalian.

Penilaian pada checkpoint ini tidak mengukur jumlah model yang dicoba atau kerumitan kode, melainkan kedalaman analisis dan konsistensi antara temuan empiris dengan RQ yang dirumuskan di awal. Kalian diminta menunjukkan kemampuan critical analysis: mengapa baseline tertentu unggul atau kalah, bagaimana karakteristik tabular data memengaruhi perilaku model, dan apakah perbedaan performa secara statistik signifikan. Evaluasi ini merupakan kelanjutan alami dari aktivitas pertemuan sebelumnya yang menekankan pada reproduksi mini dan identifikasi klaim ilmiah. Hasil diskusi checkpoint ini akan langsung dipetakan ke dalam struktur penulisan paper, mempersiapkan你们 untuk pertemuan berikutnya yang akan membahas transformasi hasil eksperimental menjadi kontribusi ilmiah yang siap diajukan ke konferensi internasional.

### Inti yang Harus Ditekankan

- Progres penelitian dinilai berdasarkan kedalaman analisis dan keterkaitan langsung dengan RQ, bukan jumlah model atau kompleksitas eksperimen.
- Analisis ablation, pengujian statistik, dan dokumentasi replikasi adalah elemen wajib yang membedakan penelitian tingkat S2 dengan tugas biasa.
- Disiplin waktu dan manajemen scope sangat krusial; hentikan pengembangan fitur baru dan selesaikan analisis inti agar siap menulis full paper pada pertemuan 15.

### Transisi ke Slide Berikutnya

Checkpoint ini menutup fase eksperimen dan analisis, sehingga kita kini beralih ke tahap sintesis ilmiah: mengubah temuan empiris menjadi narasi kontribusi penelitian yang koheren dan siap publikasi.

---

## Slide 037 - Penutup

### Narasi

Pertemuan keempat belas ini telah menutup rangkaian pembahasan mengenai metode-metode mutakhir dalam data mining, meliputi foundation models, arsitektur generatif, serta paradigma privacy-preserving learning. Pada jenjang magister, penguasaan terhadap teknik-teknik tersebut bukan lagi tujuan akhir, melainkan alat strategis untuk merancang eksperimen yang menjawab pertanyaan penelitian secara metodologis. Seperti yang telah kita tinjau pada checkpoint sebelumnya, fokus utama kini bergeser dari implementasi algoritmik menuju validitas empiris: memastikan bahwa setiap keluaran model divalidasi melalui analisis ablation, uji sensitivitas parameter, serta evaluasi statistik yang ketat. Kedalaman interpretasi dan konsistensi temuan jauh lebih menentukan kualitas penelitian dibandingkan jumlah baseline yang dijalankan atau perbedaan marginal pada metrik akurasi.

Saat ini, Anda berada pada fase kritis di mana notebook, skrip preprocessing, dan hasil pengujian harus diterjemahkan menjadi narasi ilmiah yang koheren. Tahap penutupan ini menandai peralihan dari kerja laboratorium menuju konstruksi argumen akademik. Hasil eksperimen yang telah Anda kumpulkan—baik yang mendukung maupun yang bertentangan dengan hipotesis awal—harus diposisikan sebagai bukti empiris yang dapat mengisi celah pengetahuan (research gap) dalam literatur data mining. Dokumentasi yang transparan, kemampuan mereplikasi eksperimen, serta pemahaman mendalam terhadap trade-off antara kompleksitas komputasi dan generalisasi model akan menjadi fondasi utama saat menyusun bagian discussion dan limitation dalam naskah penelitian.

Terima kasih atas dedikasi dan analisis kritis yang telah Anda tunjukkan sepanjang sesi ini. Struktur eksperimen yang telah Anda bangun merupakan langkah nyata menuju publikasi yang kompetitif. Pada pertemuan berikutnya, kita akan membahas secara terstruktur bagaimana mengemas temuan empiris menjadi kontribusi ilmiah yang jelas, terukur, dan selaras dengan standar penulisan konferensi internasional terindeks Scopus.

### Inti yang Harus Ditekankan

- Transformasi hasil eksperimen menjadi klaim ilmiah memerlukan justifikasi metodologis, bukan sekadar pelaporan metrik atau perbandingan model.
- Kualitas penelitian ditentukan oleh kedalaman analisis, validasi statistik, dan kejelasan hubungan sebab-akibat antara desain eksperimen dengan research question.
- Fase penulisan naskah sebenarnya dimulai sejak perencanaan eksperimen; dokumentasi rapi, ablation study, dan error analysis adalah prasyarat mutlak untuk kontribusi yang orisinal dan dapat direplikasi.

### Transisi ke Slide Berikutnya

Mari kita lanjutkan diskusi tentang cara mengonstruksi argumentasi berbasis data, merumuskan novelty secara akademis, dan menyusun struktur paper yang memenuhi ekspektasi reviewer conference bereputasi.
