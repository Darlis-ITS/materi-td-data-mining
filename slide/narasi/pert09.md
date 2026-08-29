# Narasi TD Data Mining - Pertemuan 09

## Deep & Representation Learning for Tabular Data

Sumber: markdown/pert09-deep-representation-learning-for-tabular-data.md

---

## Slide 000 - Cover

### Narasi

Pertemuan kesembilan ini mengantar kita pada salah satu frontier terkini dalam penelitian data mining: penerapan deep learning dan representation learning khusus untuk data tabular. Secara historis, model berbasis pohon seperti XGBoost, LightGBM, dan CatBoost mendominasi benchmark tabular berkat efisiensi komputasi dan ketahanannya terhadap outlier serta missing value. Namun, evolusi arsitektur neural network yang dirancang secara eksplisit untuk struktur tabel telah mengubah lanskap penelitian ini secara fundamental. Pada jenjang magister, penguasaan konsep representation learning menjadi prasyarat kritis untuk merancang eksperimen yang tidak hanya menghasilkan performa tinggi, tetapi juga dapat dipertanggungjawabkan secara metodologis dan berkontribusi pada pengembangan ilmu pengetahuan.

Fokus utama sesi ini adalah membedah bagaimana representasi fitur diekstraksi, dipadatkan, dan dioptimalkan melalui jaringan saraf tanpa bergantung sepenuhnya pada feature engineering manual. Kita akan mengeksplorasi arsitektur mutakhir seperti FT-Transformer, TabNet, dan varian ResNet untuk tabel, serta memahami mekanisme attention, sparse gating, dan embedding layer yang disesuaikan dengan heterogenitas kolom (numerik, kategorikal ordinal, dan nominal high-cardinality). Selain itu, strategi pelatihan modern seperti self-supervised pretraining, contrastive learning, dan teknik regularisasi yang ditargetkan untuk mencegah overfitting pada dataset tabular berukuran menengah akan dibahas secara mendalam. Penekanan diberikan pada cara melakukan ablation study terhadap komponen representasi, menganalisis trade-off antara kapasitas model dan kebutuhan komputasi, serta mengevaluasi stabilitas training pada distribusi data yang imbalanced atau noisy.

Topik ini juga berfungsi sebagai jembatan konseptual menuju praktik penelitian lanjutan. Dengan memahami fondasi representation learning untuk tabular, mahasiswa akan lebih mampu mengidentifikasi research gap, merumuskan hipotesis mengenai efektivitas arsitektur tertentu pada domain spesifik, dan membangun baseline yang kuat sebelum melangkah ke tahap optimasi hyperparameter atau integrasi dengan metode ensemble. Pemahaman ini akan memperkuat kemampuan dalam merancang eksperimen yang adil, mengukur kompleksitas model secara rigor, serta menyusun argumentasi ilmiah yang siap diarahkan ke publikasi konferensi terindeks Scopus.

### Inti yang Harus Ditekankan

- Deep learning untuk data tabular memerlukan desain representasi yang secara eksplisit menangani karakteristik unik tabel: heterogenitas tipe kolom, sparsity, skala nilai yang tidak seragam, dan ketergantungan antar-fitur yang sering kali bersifat non-linear.
- Representation learning memungkinkan ekstraksi fitur otomatis yang lebih robust, mengurangi bias manusia dalam feature engineering, dan membuka peluang pemanfaatan self-supervised/pretraining pada dataset berskala besar.
- Evaluasi model harus selalu disertai analisis ablation, studi kompleksitas memori dan waktu inference, serta perbandingan ketat dengan strong baselines berbasis gradient boosting untuk memastikan kontribusi ilmiah yang terukur dan dapat direproduksi.

### Transisi ke Slide Berikutnya

Untuk memetakan posisi topik ini secara sistematis dalam perjalanan perkuliahan, mari kita tinjau peta keseluruhan RPS dan bagaimana pertemuan ini berintegrasi dengan materi sebelumnya serta mempersiapkan landasan teoritis menuju sesi optimasi hyperparameter dan reproducible research di pertemuan berikutnya.

---

## Slide 001 - Peta Perkuliahan dan Posisi Pertemuan 09

### Narasi

Slide ini menyajikan peta perjalanan perkuliahan sepanjang satu semester berdasarkan Rencana Pembelajaran Semester (RPS), memberikan konteks strategis mengenai posisi kita saat ini dalam alur pembelajaran Topik Dalam Data Mining. Jika kita menelusuri urutan topik dari pertemuan pertama hingga kedelapan, kita telah menyelesaikan fondasi metodologis yang komprehensif, mulai dari lanskap riset data mining modern, eksplorasi dan pra-pemrosesan data, penambangan pola, hingga pembangunan baseline kuat melalui klasifikasi, regresi, ensemble learning, dan gradient boosting. Kita juga telah membahas teknik unsupervised seperti clustering, penanganan data tidak seimbang, serta deteksi anomali. Pertemuan sebelumnya ditutup dengan sesi kritis review paper dan seminar proposal penelitian, yang secara langsung mengintegrasikan aspek teoritis dengan kesiapan akademik tingkat magister untuk merumuskan research gap dan desain eksperimen yang valid.

Pada titik ini, tepatnya di Pertemuan 09, fokus kita beralih ke ranah yang lebih spesifik namun sangat relevan dengan perkembangan mutakhir: Deep & Representation Learning for Tabular Data. Pergeseran ini bukan sekadar penambahan materi algoritma baru, melainkan respons terhadap pertanyaan fundamental dalam komunitas riset data mining: mengapa arsitektur deep learning yang begitu sukses pada data tak terstruktur sering kali menghadapi tantangan signifikan ketika diterapkan pada data tabular? Karakteristik data tabular yang heterogen, mengandung fitur numerik, kategorikal, dan ordinal secara bersamaan, menuntut mekanisme representasi yang berbeda. Di sinilah konsep representation learning dan inductive bias menjadi kunci, karena model harus mampu mengekstrak struktur laten tanpa kehilangan informasi kontekstual yang dimiliki oleh metode klasik.

Posisi pertemuan ini juga berfungsi sebagai jembatan konseptual menuju topik-topik lanjutan yang akan dibahas di sisa semester, termasuk AutoML, Graph Mining, temporal data mining, serta explainable dan trustworthy data mining. Pemahaman mendalam tentang bagaimana neural network memproses data tabular akan menjadi landasan penting ketika kita nantinya mengevaluasi fair comparison antara gradient boosting dan arsitektur neural, melakukan hyperparameter optimization, serta merancang ablation study untuk mengukur kontribusi setiap komponen model. Dengan demikian, materi hari ini tidak berdiri sendiri, melainkan terintegrasi penuh dengan kerangka kerja penelitian yang menekankan pada validitas eksperimen, reproducible research, dan kemampuan menarik kesimpulan berbasis evidence.

### Inti yang Harus Ditekankan

- Peta RPS menunjukkan progresi logis dari fondasi data mining tradisional menuju pendekatan modern dan riset tingkat lanjut, dengan Pertemuan 09 menandai transisi eksplisit ke domain deep learning khusus untuk data tabular.
- Tantangan utama data tabular bagi deep learning terletak pada heterogenitas fitur dan kebutuhan akan representasi yang tepat, sehingga pemahaman tentang inductive bias dan arsitektur khusus menjadi prasyarat sebelum evaluasi performa.
- Pada jenjang S2, penekanan bukan pada implementasi black-box, melainkan pada kemampuan kritis membandingkan metode klasik dan neural secara adil, merumuskan research question yang terukur, dan menghubungkan temuan eksperimen dengan kontribusi ilmiah yang dapat direproduksi.

### Transisi ke Slide Berikutnya

Untuk memastikan kita memiliki arah yang jelas dalam mengeksplorasi topik ini, mari kita lihat secara spesifik kompetensi apa yang akan dicapai dan tujuan pembelajaran yang menjadi target utama pada pertemuan kali ini.

---

## Slide 002 - Tujuan Pembelajaran dan CPMK

### Narasi

Slide ini menetapkan peta jalan akademis untuk pertemuan ke-9 dengan mengaitkan materi secara eksplisit pada Capaian Pembelajaran Mata Kuliah (CPMK) yang menjadi acuan evaluasi akhir semester. Terdapat tiga CPMK utama yang akan diaktivasi melalui sesi ini: CPMK-1 menuntut mahasiswa menganalisis konsep dan metode data mining modern secara kritis; CPMK-4 menekankan kemampuan merancang eksperimen yang valid, terkontrol, dan dapat direproduksi; serta CPMK-5 mengarahkan mahasiswa untuk melakukan komparasi sistematis antara pendekatan klasik, modern, dan emerging. Pada jenjang magister, pencapaian ketiga CPMK ini tidak lagi bersifat deskriptif, melainkan harus diterjemahkan ke dalam desain penelitian yang rigor, di mana setiap klaim performa model didukung oleh metrik evaluasi yang konsisten dan analisis ablation yang transparan.

Tujuan spesifik pertemuan ini difokuskan pada empat pilar utama. Pertama, memahami mengapa data tabular tetap menjadi tantangan signifikan bagi arsitektur deep learning dibandingkan domain vision atau NLP. Karakteristik data tabular yang umumnya berukuran lebih kecil, memiliki heterogenitas tipe fitur (numerik, kategorikal, teks), serta minim struktur spasial-temporal membuat model neural cenderung overfit jika tidak dirancang dengan representasi yang tepat. Kedua, menjelaskan konsep representation learning dan inductive bias dalam konteks tabular. Inductive bias menentukan bagaimana model memprioritaskan pola tertentu selama pelatihan, dan pemilihan bias yang sesuai sangat krusial agar jaringan saraf tidak kehilangan efisiensi komputasi yang menjadi keunggulan model tree-based konvensional. Ketiga, menguasai arsitektur neural tabular mutakhir seperti Multi-Layer Perceptron (MLP) standar, teknik categorical embedding yang efisien, TabNet yang memperkenalkan mekanisme attention berbasis sparse mask, serta FT-Transformer yang mengadaptasi arsitektur transformer untuk menangani dependensi antar-fitur secara global. Keempat, melakukan perbandingan yang adil (fair comparison) antara Gradient Boosting Decision Trees (GBDT) sebagai strong baseline dengan model neural tabular, termasuk penyesuaian preprocessing, stratifikasi data, dan protokol tuning hyperparameter. Seluruh pembahasan ini bermuara pada satu research question inti: dalam kondisi empiris apa deep learning benar-benar memberikan peningkatan signifikansi pada data tabular, atau apakah kompleksitas tambahan tersebut hanya menghasilkan marginal gain yang tidak sebanding dengan biaya komputasi dan interpretabilitas?

Konteks slide ini selaras dengan posisi pertemuan 9 dalam peta perkuliahan yang telah dipetakan sebelumnya, yaitu sebagai titik transisi dari fondasi klasikal menuju metodologi modern. Penekanan pada fair comparison dan research question juga menjadi jembatan alami menuju recap pertemuan sebelumnya, di mana Anda telah menyusun proposal penelitian dan mengidentifikasi baseline kuat. Implementasi praktis terhadap arsitektur yang dibahas hari ini akan langsung Anda integrasikan ke dalam rancangan eksperimen project akhir, memastikan bahwa setiap langkah pengembangan model mengikuti prinsip reproducible research yang ketat.

### Inti yang Harus Ditekankan

- Pencapaian CPMK-1, CPMK-4, dan CPMK-5 harus tercermin dalam desain eksperimen yang mengutamakan validitas statistik, kontrol variabel, dan dokumentasi pipeline yang fully reproducible.
- Data tabular memerlukan representasi learning yang disesuaikan dengan karakteristik heterogenitas fitur dan ukuran dataset yang terbatas, sehingga inductive bias model harus dipilih secara strategis.
- Arsitektur seperti TabNet dan FT-Transformer menawarkan mekanisme attention dan feature masking yang berbeda dari MLP konvensional, namun implementasinya tetap membutuhkan preprocessing dan tuning yang setara dengan GBDT agar perbandingan bersifat adil.
- Fokus penelitian bukan sekadar mencapai akurasi tertinggi, tetapi menjawab research question tentang boundary condition kapan deep learning memberikan keuntungan nyata versus ketika model tradisional sudah cukup optimal.

### Transisi ke Slide Berikutnya

Sebelum kita mendalami arsitektur dan implementasi kode, mari kita tinjau kembali progres penelitian Anda dari pertemuan sebelumnya. Slide berikutnya akan merekap presentasi proposal dan mengaitkannya langsung dengan baseline yang telah Anda pelajari, sekaligus menegaskan bagaimana pertemuan ini menjadi titik transformasi dari pendekatan klasik menuju metode modern dalam pipeline penelitian data mining Anda.

---

## Slide 003 - Recap: Pertemuan Sebelumnya

### Narasi

Pada pertemuan sebelumnya, kita telah menyelesaikan sesi Critical International Paper Review dan Research Proposal Seminar. Dalam sesi tersebut, Anda telah mempresentasikan seluruh komponen esensial dari rencana penelitian Anda, mulai dari perumusan research problem yang jelas, identifikasi research gap terhadap state-of-the-art literature, hingga penyusunan research question yang terukur dan dapat diuji. Selain itu, novelty atau kebaruan pendekatan yang Anda usulkan, beserta metodologi yang direncanakan, telah dikaji secara kritis. Pemilihan dataset, penentuan baseline awal, serta rancangan experimental plan juga telah Anda siapkan sebagai fondasi agar penelitian Anda memiliki arah yang solid, valid, dan reproducible sesuai standar publikasi internasional.

Mari kita hubungkan progres ini dengan fokus pertemuan hari ini. Jika pada pertemuan 04 dan 05 Anda telah mempelajari dan mengimplementasikan strong baseline klasik seperti Logistic Regression, SVM, Random Forest, dan Gradient Boosting, maka pertemuan 09 ini akan memperluas cakupan baseline tersebut ke dalam domain deep tabular learning. Pada jenjang magister, penguasaan model neural untuk data tabular menuntut pemahaman mendalam mengenai representasi fitur, inductive bias, serta mekanisme regularisasi yang membedakan perilakunya dari ensemble methods tradisional. Implementasi komparatif antara gradient boosting dan arsitektur neural tabular yang akan kita kerjakan hari ini merupakan langkah awal yang sangat strategis dalam pipeline eksperimen research project Anda.

Poin kunci yang perlu Anda pegang adalah bahwa pertemuan 09 berfungsi sebagai titik transformasi metodologis. Kita beralih dari paradigma klasikal machine learning menuju metode modern yang memanfaatkan representation learning secara eksplisit untuk menangkap interaksi kompleks pada data tabular. Hasil benchmarking yang akan kita lakukan hari ini tidak hanya bersifat akademis, tetapi akan langsung menjadi dasar untuk ablation study, error analysis, dan komparasi performa dalam paper penelitian Anda. Dengan memahami secara evidensial kapan deep learning memberikan peningkatan signifikan—orang justru sering mengalami overfitting atau degradasi performa pada data tabular skala kecil—Anda akan mampu merancang eksperimen yang lebih robust dan menjawab research question dengan justifikasi teknis yang kuat.

### Inti yang Harus Ditekankan

- Pertemuan 08 telah menyiapkan fondasi penelitian melalui proposal yang mencakup problem, gap, RQ, baseline, dan experimental plan.
- Pertemuan 09 memperluas baseline klasik (Gradient Boosting, dll.) ke deep tabular learning sebagai langkah evolusi metodologis.
- Implementasi baseline hari ini adalah tahap awal eksperimental yang langsung terhubung dengan proyek penelitian akhir mahasiswa.
- Pertemuan 09 menandai transisi fundamental dari pendekatan classical machine learning menuju metode modern berbasis representation learning.

### Transisi ke Slide Berikutnya

Setelah memahami peta perjalanan dari proposal awal hingga implementasi baseline hari ini, mari kita lihat secara visual bagaimana alur perkembangan metode ini berjalan. Pada slide berikutnya, kita akan membedah flowchart transformasi dari Research Proposal V1 menuju implementasi baseline, yang nantinya akan menjadi landasan bagi diskusi kita tentang AutoML dan Hyperparameter Optimization di pertemuan 10. Silakan perhatikan diagram alur berikut.

---

## Slide 004 - Dari Pertemuan 08 ke Pertemuan 09

### Narasi

Diagram alur pada slide ini merepresentasikan peta jalan metodologis yang menghubungkan fase perencanaan penelitian dengan eksekusi eksperimen. Pada pertemuan sebelumnya, Anda telah menyelesaikan penyusunan Research Proposal V1 yang mencakup definisi research problem, perumusan research question, seleksi dataset, penetapan baseline klasik, serta rancangan rencana eksperimental. Dokumen-dokumen strategis tersebut kini menjadi fondasi yang akan kita operasionalkan secara teknis dan empiris.

Fokus utama pada pertemuan ini adalah implementasi komparatif antara dua paradigma pemodelan yang berbeda secara fundamental: algoritma Gradient Boosting sebagai representasi metode ensemble klasik yang telah terbukti robust, versus Neural Tabular Model yang mewakili pendekatan deep learning untuk data tabel. Implementasi ini bukan sekadar latihan pemrograman, melainkan langkah kritis dalam membangun baseline empiris yang kuat. Anda akan melatih kedua model menggunakan ekosistem tools standar seperti pandas, NumPy, scikit-learn, dan framework neural network, kemudian mengevaluasi kinerjanya di bawah kondisi eksperimen yang terkontrol, reproducible, dan konsisten.

Hasil perbandingan awal ini akan menjadi bahan analisis mendalam mengenai kapan dan mengapa arsitektur tertentu lebih unggul atau justru tertinggal dalam konteks data tabular. Setelah fase implementasi dan evaluasi baseline selesai, alur penelitian akan berlanjut ke pertemuan berikutnya yang membahas AutoML dan Hyperparameter Optimization. Tahap ini bertujuan untuk mengembangkan metode secara sistematis, mengoptimalkan konfigurasi model, serta meningkatkan performa melampaui baseline awal melalui tuning yang terstruktur dan berbasis bukti empiris.

Dengan demikian, slide ini menegaskan bahwa transisi dari proposal teoretis ke eksekusi praktis harus dilakukan secara disiplin. Setiap keputusan teknis selama implementasi Gradient Boosting versus Neural Tabular harus didokumentasikan dengan rapi, karena data hasil eksperimen inilah yang nantinya akan menjawab pertanyaan penelitian Anda dan menjadi dasar untuk ablation study, error analysis, serta generalization assessment di tahap selanjutnya.

### Inti yang Harus Ditekankan

- Alur penelitian bersifat iteratif dan terstruktur, bergerak secara logis dari perumusan masalah hingga optimasi metode lanjutan.
- Implementasi baseline komparatif (Gradient Boosting vs Neural Tabular) merupakan fondasi empiris wajib sebelum melakukan pengembangan atau modifikasi model.
- Konsistensi kondisi eksperimen, kontrol variabel, dan dokumentasi hasil sangat krusial untuk memastikan validitas dan reproduktibilitas penelitian tingkat magister.

### Transisi ke Slide Berikutnya

Setelah memahami peta jalan eksperimen ini, mari kita lanjutkan ke slide berikutnya untuk merumuskan pertanyaan penelitian utama yang akan memandu seluruh pengujian hari ini, yaitu secara spesifik mengkaji kondisi apa saja yang membuat deep learning benar-benar memberikan keunggulan signifikan pada data tabular.

---

## Slide 005 - Research Question Utama Pertemuan 09

### Narasi

Setelah pada pertemuan sebelumnya kita menyusun kerangka dasar penelitian berupa proposal versi pertama yang mencakup identifikasi masalah, perumusan pertanyaan penelitian, pemilihan dataset, penentuan baseline, serta rencana eksperimen, kini kita akan menyoroti inti dari pertanyaan penelitian yang akan menjadi panduan utama dalam implementasi praktikum kali ini. Pertanyaan utama yang kita ajukan adalah: dalam kondisi apa deep learning benar-benar memberikan keuntungan pada data tabular? Pertanyaan ini bukan sekadar eksplorasi teknis, melainkan sebuah inquiry metodologis yang menuntut analisis kritis terhadap batas-batas kemampuan model neural network ketika berhadapan dengan struktur data yang berbeda dari domain vision atau NLP.

Secara historis, ensemble tree-based methods seperti Gradient Boosting—terutama XGBoost, LightGBM, dan CatBoost—telah mendominasi benchmark data tabular selama bertahun-tahun karena konsistensi performanya, ketahanan terhadap noise, dan efisiensi komputasinya. Di sisi lain, deep learning telah menunjukkan keunggulan revolusioner pada data gambar, teks, dan audio berkat kapasitas representasionalnya yang tinggi. Namun, pada data tabular, penerapan arsitektur neural network konvensional sering kali gagal mengungguli metode tradisional, bahkan cenderung overfit ketika jumlah sampel terbatas atau dimensi fitur sangat tinggi. Ketimpangan performa inilah yang memotivasi lahirnya berbagai inovasi arsitektur khusus untuk tabular, seperti TabNet yang memanfaatkan attention mechanism berbasis sparse mask, FT-Transformer yang mengadaptasi arsitektur transformer untuk fitur numerik dan kategorikal, serta pendekatan self-supervised tabular learning yang mengeksploitasi struktur korelasi antar fitur tanpa bergantung sepenuhnya pada label.

Untuk menjawab pertanyaan penelitian tersebut secara sistematis, kita akan mengkaji empat aspek kunci. Pertama, karakteristik data yang menguntungkan neural network, seperti ukuran dataset yang besar, kompleksitas hubungan non-linear yang tinggi, serta keberadaan fitur kategorikal dengan kardinalitas tinggi yang dapat direpresentasikan secara dense. Kedua, peran representasi fitur dan embedding, di mana transformasi fitur mentah menjadi ruang vektor yang bermakna menjadi prasyarat agar jaringan saraf dapat menangkap pola tersembunyi. Ketiga, perbedaan inductive bias antara model berbasis pohon keputusan yang secara inheren melakukan partisi ruang fitur secara hierarkis, versus model neural network yang mengandalkan optimisasi gradien dan fungsi aktivasi non-linear untuk mempelajari manifold data. Keempat, prinsip evaluasi yang adil, yang mensyaratkan kontrol ketat terhadap preprocessing, stratified splitting, hyperparameter tuning yang setara, serta metrik yang relevan dengan konteks bisnis atau ilmiah dari dataset tersebut.

Pemahaman mendalam mengenai keempat aspek ini akan menjadi landasan empiris dan teoretis sebelum kita masuk ke tahap implementasi kode menggunakan library seperti pandas, scikit-learn, dan framework deep learning. Lebih lanjut, jawaban atas pertanyaan penelitian ini tidak dapat dipisahkan dari konsep fundamental yang akan kita bahas pada slide berikutnya, yaitu bagaimana data mentah ditransformasi menjadi representasi yang optimal untuk tugas downstream.

### Inti yang Harus Ditekankan

- Deep learning tidak secara otomatis unggul pada data tabular; keuntungannya bersifat kondisional dan sangat bergantung pada karakteristik dataset serta desain arsitektur yang sesuai.
- Metode modern seperti TabNet, FT-Transformer, dan self-supervised learning muncul sebagai respons terhadap keterbatasan neural network konvensional pada struktur data tabular.
- Perbandingan model harus dilakukan secara metodologis ketat, dengan memperhatikan inductive bias masing-masing algoritma, kualitas representasi fitur, dan protokol evaluasi yang transparan.
- Pertanyaan penelitian ini mengarahkan fokus praktikum dari sekadar "mencoba model" menuju analisis kritis mengapa suatu model bekerja lebih baik dalam skenario tertentu.

### Transisi ke Slide Berikutnya

Untuk memahami secara teknis bagaimana model deep learning mampu bersaing atau melampaui baseline tradisional, kita perlu terlebih dahulu membedah mekanisme inti yang memungkinkan neural network belajar dari data mentah, yaitu representation learning. Mari kita lanjutkan ke definisi formal, alur pemrosesan, dan tujuan strategis dari representasi learning dalam konteks data mining.

---

## Slide 006 - Definisi Representation Learning

### Narasi

Representation learning merupakan fondasi konseptual yang mengubah cara kita memandang pemrosesan data dalam machine learning, terutama ketika menjembatani gap antara data mentah dan model prediktif. Secara definisi, representasi learning adalah proses sistematis untuk menemukan atau mempelajari transformasi data yang membuat informasi penting lebih mudah diekstraksi dan dimanfaatkan untuk suatu tugas tertentu. Dalam konteks penelitian data mining tingkat magister, pendekatan ini bukan sekadar teknik augmentasi, melainkan paradigma yang menggeser beban kerja dari rekayasa fitur manual berbasis heuristik menuju ekstraksi pola laten secara otomatis melalui mekanisme pembelajaran mesin.

Alur kerja yang digambarkan pada slide ini menunjukkan bagaimana data mengalir melalui tiga tahapan kunci. Tahap awal dimulai dengan input data mentah yang terdiri dari fitur-fitur raw, yang sering kali mengandung redundansi, skala tidak seragam, atau hubungan non-linear yang tersembunyi. Fitur-fitur ini kemudian diproses melalui lapisan atau fungsi representasi learning, yang dapat diimplementasikan menggunakan arsitektur neural network, autoencoder, atau teknik embedding khusus. Hasilnya adalah representasi terlatih yang telah mengalami optimisasi matematis untuk memampatkan informasi relevan sambil membuang noise. Representasi inilah yang kemudian disalurkan ke downstream task seperti klasifikasi atau regresi, sehingga model tidak perlu lagi bekerja langsung pada ruang fitur asli yang kompleks.

Tujuan dari penerapan representasi learning dapat diuraikan menjadi tiga pilar strategis yang saling melengkapi. Pertama, model dituntut untuk menangkap struktur dan pola tersembunyi dalam data yang tidak terlihat pada representasi awal. Kedua, pendekatan ini secara drastis mengurangi kebutuhan akan rekayasa fitur manual, yang seringkali memakan waktu, sulit direproduksi, dan sangat bergantung pada keahlian domain peneliti. Ketiga, dengan memiliki representasi yang lebih diskriminatif dan kompak, model diharapkan mampu meningkatkan kemampuan generalisasi serta performa pada downstream task. Hal ini sangat relevan dengan pertanyaan riset pada pertemuan sebelumnya mengenai kapan deep learning benar-benar memberikan keuntungan, karena kualitas representasi yang terbentuk menjadi penentu utama keunggulan model dibandingkan metode tradisional seperti gradient boosting.

Konsep definisi ini menjadi landasan teoritis yang wajib dipahami sebelum kita mengevaluasi keberterimaan teknik tersebut pada domain spesifik. Meskipun prinsip representasi learning bersifat universal, implementasinya pada data tabular memerlukan pertimbangan matang mengingat karakteristik data yang berbeda jauh dari gambar atau teks. Pembahasan mengenai tantangan unik data tabular dan kriteria apa yang membuat sebuah representasi dapat dikategorikan sebagai "baik" akan dijabarkan secara mendalam pada slide berikutnya.

### Inti yang Harus Ditekankan

- Representation learning adalah proses otomatis mengubah data mentah menjadi bentuk yang lebih informatif, terstruktur, dan siap pakai untuk tugas downstream.
- Alur kerjanya mengikuti pipeline: data raw → transformasi representasi → representasi terlatih → downstream task (klasifikasi/regresi).
- Tiga tujuan utamanya adalah menangkap struktur laten, menghilangkan ketergantungan pada rekayasa fitur manual, dan meningkatkan generalisasi serta performa model.
- Pemahaman mendalam tentang mekanisme ini menjadi prasyarat metodologis bagi peneliti S2 dalam merancang eksperimen deep learning yang valid dan reproducible.

### Transisi ke Slide Berikutnya

Setelah memahami definisi dan tujuan fundamentalnya, langkah selanjutnya adalah menguji relevansi konsep ini pada konteks yang paling menantang: data tabular. Mari kita bedah karakteristik unik data tabular dan kriteria objektif yang menentukan apakah sebuah representasi layak digunakan dalam pipeline prediksi.

---

## Slide 007 - Mengapa Representation Learning Relevan untuk Tabular Data?

### Narasi

Pada slide sebelumnya, kita telah mendefinisikan representation learning sebagai proses transformasi data mentah menjadi representasi terlatih yang memudahkan ekstraksi informasi penting untuk tugas downstream. Kini, kita aplikasikan konsep tersebut secara spesifik pada domain data tabular, yang merupakan bentuk data paling dominan dalam aplikasi industri, riset ilmiah, dan sistem enterprise. Meskipun sering dianggap lebih sederhana dibanding data gambar atau teks, data tabular justru menghadirkan tantangan struktural yang kompleks dan menuntut pendekatan representasi yang matang.

Tantangan utama terletak pada heterogenitas dan karakteristik statistik data tabular itu sendiri. Fitur dalam satu dataset biasanya berupa campuran tipe numerik dan kategorikal, sehingga memerlukan encoding atau embedding yang tepat agar makna semantik kategori tetap terjaga. Selain itu, hubungan antarfitur jarang bersifat linear murni; sebaliknya, interaksi antarvariabel sering kali bersifat non-linear dan saling bergantung. Distribusi data di dunia nyata juga jarang mengikuti asumsi Gaussian yang ideal, sementara kualitas data sering terdegradasi oleh missing values, outlier ekstrem, serta variasi skala yang lebar antarfitur. Kondisi ini membuat model tradisional yang mengandalkan asumsi statistik kaku cenderung mengalami underfitting atau overfitting jika tidak ditangani dengan strategi representasi yang adaptif.

Dalam konteks ini, representasi yang baik berperan sebagai mekanisme penyaring dan penguat sinyal. Sebagaimana digambarkan dalam alur `Fitur mentah -> Representasi terlatih -> Keputusan akhir`, tahap pembelajaran representasi bertugas menangkap interaksi kompleks antarfitur yang mungkin tersembunyi pada ruang asli, sekaligus menghilangkan noise dan redundansi yang dapat mengganggu stabilitas optimasi. Yang tak kalah kritis, representasi tersebut harus tetap mempertahankan informasi prediktif esensial sehingga downstream task seperti klasifikasi atau regresi dapat mencapai akurasi dan generalisasi optimal. Dengan kata lain, representation learning pada data tabular bukan sekadar reduksi dimensi, melainkan rekayasa ulang ruang fitur agar selaras dengan kapasitas ekspresif model yang akan digunakan.

Pemahaman tentang relevansi representation learning ini menjadi fondasi penting sebelum kita membahas bagaimana berbagai arsitektur model menafsirkan struktur data tersebut. Perbedaan performa antara tree-based model dan neural network pada data tabular tidak hanya berasal dari kapasitas komputasi, melainkan sangat dipengaruhi oleh asumsi bawaan masing-masing model terhadap pola data. Hal ini membawa kita secara alami ke pembahasan konsep inductive bias, yang akan menjelaskan mengapa pilihan arsitektur harus selaras dengan karakteristik inductif data tabular.

### Inti yang Harus Ditekankan

- Data tabular memiliki karakteristik unik (campuran tipe fitur, hubungan non-linear, distribusi non-Gaussian, dan masalah kualitas data) yang menuntut representasi khusus agar sinyal prediktif dapat diekstraksi secara efektif.
- Representasi yang baik berfungsi sebagai jembatan transformasi yang mengompresi redundansi, menyaring noise, dan mengungkap interaksi antarfitur tanpa mengorbankan informasi kritis untuk tugas prediksi.
- Kesuksesan pipeline `Fitur mentah -> Representasi terlatih -> Keputusan akhir` bergantung pada keselarasan antara strategi representasi dengan kapasitas dan asumsi model yang dipilih, yang kemudian mengarah pada pentingnya pemahaman inductive bias.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa representasi learning menjadi komponen krusial dalam pemrosesan data tabular, langkah logis berikutnya adalah mengevaluasi bagaimana asumsi bawaan setiap model memengaruhi kemampuannya dalam menangkap pola tersebut. Mari kita lanjutkan ke pembahasan mengenai inductive bias dan perannya dalam menentukan kesesuaian arsitektur model terhadap karakteristik data tabular.

---

## Slide 008 - Inductive Bias: Konsep Kunci

### Narasi

Setiap algoritma pembelajaran mesin tidak beroperasi sebagai *blank slate* yang menerima data secara pasif. Sebaliknya, setiap model membawa serangkaian asumsi struktural bawaan mengenai bagaimana data disusun dan bagaimana pola harus diekstraksi. Asumsi inilah yang dikenal sebagai *inductive bias*. Dalam konteks pembelajaran mendalam dan representasi untuk data tabular, inductive bias merupakan mekanisme fundamental yang membatasi ruang hipotesis sehingga model mampu melakukan generalisasi dari sampel pelatihan yang terbatas menjadi prediksi yang valid pada data未见. Tanpa bias ini, proses optimisasi akan menghadapi masalah underconstrained yang parah, di mana kombinasi parameter tak terhingga dapat menghasilkan error nol pada data latihan tanpa jaminan stabilitas atau akurasi pada data uji.

Mari kita bedah bagaimana inductive bias termanifestasi pada empat paradigma model yang sering menjadi baseline dalam riset data mining. Pada *Decision Tree*, bias utamanya adalah keyakinan bahwa fitur-fitur prediktif dapat dipisahkan secara efektif melalui pemotongan (*axis-aligned split*) pada satu dimensi fitur secara bertahap, membentuk struktur keputusan yang modular. *Linear Model* berasumsi bahwa hubungan antara fitur dan target dapat didekati oleh kombinasi linear sederhana, sehingga sangat bergantung pada asumsi keteraturan statistik seperti linearitas dan homoskedastisitas. *k-Nearest Neighbors* mengandalkan prinsip lokalitas, yaitu anggapan bahwa objek dengan label sama cenderung berkerumun di wilayah yang berdekatan dalam ruang fitur multidimensi. Sementara itu, *Neural Network* memiliki bias kuat terhadap struktur hierarkis dan komposisional, di mana fitur tingkat rendah digabungkan secara berulang melalui transformasi non-linear untuk membentuk representasi abstrak yang semakin kompleks hingga mencapai lapisan keluaran.

Pemahaman ini menjadi sangat krusial pada jenjang magister karena perbedaan kinerja signifikan antara model berbasis pohon (seperti GBDT atau XGBoost) dan model jaringan saraf pada dataset tabular bukanlah sekadar masalah arsitektur atau skalabilitas, melainkan cerminan langsung dari kesesuaian (*alignment*) antara inductive bias model dengan karakteristik intrinsik data tabular. Seperti yang telah disinggung pada slide sebelumnya, data tabular nyata sering kali mengandung interaksi non-linear yang tersembunyi, tipe fitur campuran, serta distribusi yang menyimpang dari asumsi ideal. Ketika bias model selaras dengan pola data, generalisasi terjadi secara efisien dan stabil. Ketidaksesuaian bias justru menyebabkan model terjebak pada fitting noise atau gagal menangkap dependensi kritis. Pengetahuan ini menjadi landasan metodologis sebelum kita mengevaluasi implikasi praktis dari masing-masing bias tersebut dalam bentuk perbandingan teknis.

### Inti yang Harus Ditekankan

- Inductive bias adalah asumsi struktural bawaan model yang mutlak diperlukan agar generalisasi dari data terbatas menjadi mungkin dan stabil.
- Setiap keluarga model memiliki bias unik: Decision Tree (pemisahan sumbu), Linear Model (kombinasi linear), k-NN (lokalitas spasial), Neural Network (hierarki komposisional).
- Performa relatif model pada data tabular sangat ditentukan oleh seberapa baik inductive bias-nya cocok dengan karakteristik, distribusi, dan struktur data nyata.
- Pemilihan model dalam penelitian harus didasarkan pada analisis kesesuaian bias dengan problem domain, bukan sekadar tren popularitas atau kompleksitas arsitektur.

### Transisi ke Slide Berikutnya

Dengan memahami bahwa inductive bias menentukan bagaimana model "melihat" dan memproses informasi, langkah analitis selanjutnya adalah menelaah secara konkret bagaimana bias-bias tersebut diterjemahkan ke dalam perilaku operasional. Kita akan menguraikan perbandingan sistematis antara Tree Model dan Neural Model dalam menangani aspek-aspek kunci seperti representasi fitur, kapasitas interaksi non-linear, sensitivitas terhadap penskalaan, serta strategi penanganan missing value dan data kategorikal.

---

## Slide 009 - Tree Model vs Neural Model: Perbandingan Awal

### Narasi

Berlanjut dari konsep inductive bias yang telah dibahas pada slide sebelumnya, perbedaan fundamental antara model berbasis pohon dan model neural network dalam konteks data tabular sangat bergantung pada bagaimana masing-masing arsitektur memproses dan mentransformasi informasi. Tabel perbandingan ini menyoroti tujuh aspek kunci yang menjadi penentu performa, efisiensi, dan kesesuaian penggunaan kedua pendekatan tersebut dalam praktik data mining maupun riset akademis.

Pada aspek representasi fitur, model pohon seperti Gradient Boosting Decision Trees (GBDT) bekerja langsung pada nilai asli fitur melalui proses pemotongan bertingkat atau threshold-based splits. Sebaliknya, model neural mengandalkan learned representation yang dipelajari secara end-to-end melalui komposisi fungsi linear dan non-linear di setiap lapisan. Pendekatan ini berdampak langsung pada kemampuan interaksi fitur: pohon hanya mampu menangkap interaksi secara eksplisit sepanjang jalur keputusan yang spesifik pada setiap iterasi boosting, sedangkan jaringan saraf dapat merepresentasikan hubungan non-linear dan kompleks antar fitur secara implisit melalui propagasi mundur dan aktivasi yang saling terhubung.

Sensitivitas terhadap skala fitur juga menjadi pembeda metodologis yang signifikan. Model pohon bersifat invariant terhadap transformasi monotonik, sehingga tidak memerlukan standarisasi atau normalisasi data sebelum training, berbeda dengan model neural yang sangat bergantung pada scaling agar proses optimisasi gradien dan konvergensi loss function berjalan stabil. Dalam penanganan missing values, GBDT memiliki mekanisme native untuk mengarahkan sampel kosong ke cabang kiri atau kanan berdasarkan distribusi target selama training, sementara neural network umumnya memerlukan imputasi statistik, masking layer, atau embedding khusus agar tidak mengganggu aliran gradien. Untuk data kategorikal, pohon memanfaatkan ordinal encoding atau struktur categorical split secara bawaan, whereas neural model mengandalkan categorical embedding yang mengubah kategori diskrit menjadi vektor dense berdimensi rendah yang dapat dioptimalkan bersama bobot model.

Dari sisi generalisasi dan interpretabilitas, model pohon terbukti sangat kuat pada dataset tabular berukuran kecil hingga menengah karena inductive bias-nya yang selaras dengan distribusi diskrit dan pola threshold yang umum dijumpai pada data industri. Sebaliknya, model neural menunjukkan keunggulan skalabilitas ketika volume data melampaui ratusan ribu hingga jutaan baris, di mana kapasitas representasinya dapat termanfaatkan sepenuhnya tanpa overfitting dini. Terkait interpretabilitas, feature importance dari pohon relatif mudah diekstrak, dinormalisasi, dan divalidasi secara statistik, sedangkan model neural memerlukan teknik post-hoc seperti SHAP, LIME, atau integrated gradients untuk memberikan penjelasan yang setara. Ketujuh dimensi perbandingan inilah yang membentuk landasan empiris mengapa gradient boosting masih mendominasi benchmark tabular, yang akan kita bedah lebih lanjut pada slide berikutnya terkait keunggulan teknis dan batasan arsitekturalnya.

### Inti yang Harus Ditekankan

- Perbedaan inductive bias menentukan kapan tree model atau neural model lebih relevan untuk dipilih dalam pipeline data mining.
- Tree model (GBDT) lebih robust terhadap variasi skala, missing values, dan dataset kecil-menengah berkat sifat threshold-based splits yang invariant.
- Neural model menawarkan representasi learned dan interaksi fitur kompleks, namun menuntut data berskala besar, preprocessing scaling, serta strategi imputasi/embedding yang cermat.
- Interpretabilitas tree model bersifat native dan transparan, sedangkan neural model memerlukan framework explainability tambahan untuk keperluan audit model atau publikasi riset.

### Transisi ke Slide Berikutnya

Dengan peta perbandingan ini sebagai acuan, langkah selanjutnya adalah mengurai secara mendalam mengapa gradient boosting decision trees secara konsisten memenangkan kompetisi tabular, serta mengidentifikasi celah metodologis di mana model neural justru memiliki peluang strategis untuk mengambil alih dominasi tersebut.

---

## Slide 010 - Mengapa Gradient Boosting Sulit Dikalahkan?

### Narasi

Setelah membandingkan karakteristik dasar antara model berbasis pohon dan model neural pada slide sebelumnya, kini kita akan mengurai alasan mendasar mengapa algoritma Gradient Boosting Decision Tree (GBDT) seperti XGBoost, LightGBM, atau CatBoost masih bertahan sebagai baseline yang sangat dominan dalam pembelajaran mesin untuk data tabular. Dominasi ini bukan tanpa alasan, melainkan hasil dari serangkaian keunggulan struktural yang secara alami selaras dengan sifat data tabular di dunia nyata.

Pertama, mekanisme threshold-based splits memungkinkan GBDT bekerja secara optimal pada fitur tabular yang umumnya tidak mulus atau memiliki distribusi yang terfragmentasi. Berbeda dengan jaringan saraf yang mengandalkan propagasi gradien halus, split berdasarkan ambang batas dapat menangkap perubahan mendadak dan pola diskrit tanpa memerlukan proses smoothing atau asumsi distribusi tertentu. Kedua, model ini bersifat invariant terhadap transformasi monotonik pada fitur, artinya operasi penskalaan atau normalisasi data tidak secara signifikan mengubah hasil akhir model. Hal ini mengurangi beban preprocessing dan membuat pipeline eksperimen lebih stabil. Ketiga, penanganan missing value dilakukan secara native melalui mekanisme belajar arah split yang secara otomatis memutuskan apakah cabang kiri atau kanan lebih optimal untuk nilai yang hilang, sehingga menghilangkan ketergantungan pada teknik imputasi manual yang berpotensi memperkenalkan bias. Keempat, efisiensi komputasi GBDT sangat tinggi untuk dataset berukuran sedang hingga besar (ratusan ribu baris), menjadikannya pilihan standar dalam kompetisi data science maupun aplikasi industri yang menuntut latency rendah dan akurasi tinggi. Kelima, tuning hyperparameter relatif lebih sederhana dan intuitif dibandingkan arsitektur neural network yang kompleks; parameter inti seperti learning rate, maximum tree depth, dan subsample sudah memberikan kontrol yang memadai terhadap trade-off antara underfitting dan overfitting.

Meskipun demikian, keunggulan tersebut dibarengi dengan batasan-batasan fundamental yang perlu dipahami dalam konteks penelitian tingkat magister. Secara arsitektural, GBDT tidak mempelajari representasi fitur secara end-to-end. Setiap keputusan split tetap bergantung pada fitur mentah, sehingga interaksi antar fitur hanya terjalin secara implisit melalui jalur hierarkis pohon. Selain itu, karena sifatnya yang sepenuhnya supervised, GBDT kesulitan memanfaatkan data tidak berlabel untuk tahap pre-training atau augmentasi representasi, yang merupakan kekuatan utama dari paradigma self-supervised learning. Terakhir, fleksibilitas model ini menurun drastis ketika berhadapan dengan data yang memiliki struktur kompleks seperti teks, citra, atau graph, di mana pendekatan berbasis embedding, convolutions, atau message passing jauh lebih natural dan efektif dalam mengekstrak pola semantik.

Pemahaman dualisme ini penting sebagai landasan metodologis sebelum kita mengevaluasi kapan arsitektur neural benar-benar bisa melampaui GBDT, yang akan menjadi fokus pembahasan pada slide berikutnya.

### Inti yang Harus Ditekankan

- Keunggulan GBDT bersumber dari kesesuaian strukturalnya dengan sifat data tabular: robust terhadap fitur tidak mulus, invariant terhadap penskalaan, native handling missing value, efisien secara komputasi, dan mudah dituning.
- Batasan utama terletak pada ketiadaan representasi end-to-end, ketergantungan penuh pada label, serta infleksibilitas terhadap data berstruktur kompleks (teks, gambar, graph).
- Dalam riset data mining, pemilihan model harus didasarkan pada analisis empiris terhadap karakteristik dataset, bukan sekadar tren algoritma terbaru.

### Transisi ke Slide Berikutnya

Jika GBDT unggul dalam stabilitas dan kemudahan penggunaan pada data tabular konvensional, pertanyaan selanjutnya adalah pada kondisi spesifik apa neural model justru mampu menunjukkan superioritas yang signifikan. Mari kita lanjutkan ke slide berikutnya untuk mengidentifikasi skenario di mana arsitektur neural tabular benar-benar layak dipertimbangkan.

---

## Slide 011 - Kapan Neural Model Bisa Lebih Unggul?

### Narasi

Setelah menguraikan mengapa Gradient Boosting Decision Tree (GBDT) sering menjadi baseline yang sulit dikalahkan pada data tabular, kita perlu menempatkan kembali posisi model neural dalam ekosistem pembelajaran mesin. Neural network tidak dirancang untuk menggantikan GBDT secara universal, melainkan menawarkan keunggulan kompetitif ketika karakteristik data dan tujuan penelitian memenuhi kondisi spesifik. Pertama, pada skala data yang sangat besar, arsitektur neural memanfaatkan komputasi paralel pada GPU dan kapasitas parameter yang luas untuk mengekstrak pola hierarkis yang tidak mampu ditampung oleh struktur decision tree. Kedua, ketika dataset mengandung fitur berstruktur kompleks seperti teks, gambar, audio, atau urutan temporal, representation learning menjadi faktor penentu. Neural network mampu memproses data tidak terstruktur ini secara end-to-end melalui lapisan khusus, menghindari kebutuhan preprocessing manual yang masif dan rentan terhadap human bias. Ketiga, fitur kategorikal berkardeinalitas tinggi sering kali menjadi bottleneck bagi model berbasis tree. Teknik embedding mengatasi hal ini dengan memetakan setiap kategori ke dalam ruang vektor berdimensi rendah, sehingga menangkap kesamaan semantik dan relasi laten antar kategori tanpa mengalami curse of dimensionality. Keempat, kelimpahan data tidak berlabel membuka pintu bagi self-supervised learning. Model neural dapat dilatih terlebih dahulu menggunakan pretext task untuk mempelajari representasi awal yang kaya, yang kemudian dapat di-fine-tune pada tugas supervised dengan jumlah label terbatas, sebuah paradigma yang sulit diadopsi pada framework gradient boosting konvensional. Kelima, hubungan non-linear yang sangat kompleks dan interaksi fitur tingkat tinggi sering kali lebih mudah dipelajari oleh jaringan neural dalam dengan fungsi aktivasi non-linear bertumpuk, yang memberikan kapasitas aproksimasi universal.

Namun, catatan kritis yang harus ditanamkan dalam praktik penelitian tingkat magister adalah keunggulan ini tidak terjadi secara otomatis. Klaim superioritas model neural harus selalu diverifikasi secara empiris melalui eksperimen yang terkontrol dan metodologis. Tanpa feature engineering yang tepat, normalisasi data yang konsisten, arsitektur yang sesuai dengan karakteristik tabular, serta hyperparameter tuning yang rigor, model neural justru cenderung overfit, gagal konvergen, atau menghasilkan generalisasi yang buruk pada data berskala kecil hingga menengah. Oleh karena itu, evaluasi performa harus dilakukan dengan baseline yang kuat, metrik yang relevan, serta analisis error dan ablation study yang mendalam untuk memastikan bahwa peningkatan akurasi atau efisiensi memang berasal dari kapasitas representasi model, bukan dari konfigurasi eksperimen yang tidak adil atau kebocoran data.

### Inti yang Harus Ditekankan

- Superioritas neural model bersifat kondisional dan muncul secara signifikan pada data berskala besar, fitur berstruktur/kategorikal tinggi, ketersediaan data tidak berlabel, serta kebutuhan pemodelan non-linear kompleks.
- Representation learning dan embedding merupakan diferensiator utama yang memungkinkan neural network menangani data tabular modern secara end-to-end tanpa dependensi berlebihan pada preprocessing manual.
- Validasi empiris adalah syarat mutlak; keunggulan teoretis harus dibuktikan melalui eksperimen yang ketat, perbandingan dengan baseline GBDT yang dioptimalkan, serta analisis robustness dan generalisasi yang transparan.

### Transisi ke Slide Berikutnya

Untuk melihat bagaimana prinsip-prinsip representasi dan arsitektur neural diterapkan secara konkret pada data tabular, mari kita bahas arsitektur paling mendasar dalam deep tabular learning, yaitu Multilayer Perceptron (MLP), beserta mekanisme kerja dan keterbatasan inductive bias-nya.

---

## Slide 012 - MLP untuk Tabular Data

### Narasi

Multilayer Perceptron atau MLP mewakili arsitektur paling dasar dan fundamental dalam penerapan deep learning pada data tabular. Sebagai titik awal yang wajib dipahami sebelum beralih ke model yang lebih kompleks seperti ResNet, FT-Transformer, atau AutoInt, MLP mengandalkan rangkaian lapisan fully-connected yang menghubungkan setiap neuron pada satu layer ke seluruh neuron pada layer berikutnya. Setiap unit menerima vektor input yang telah dikonversi menjadi bentuk numerik, baik berasal dari fitur kontinu maupun fitur kategorikal yang telah di-encode menggunakan teknik seperti One-Hot Encoding atau Embedding Layer. Setelah proses linearisasi melalui bobot dan bias, sinyal diteruskan ke fungsi aktivasi non-linear, umumnya Rectified Linear Unit (ReLU), yang memberikan kemampuan kepada jaringan untuk mempelajari pemetaan fungsi yang jauh lebih kompleks daripada sekadar regresi linier.

Diagram alur pada slide menggambarkan mekanisme stacking yang khas: input `(x1, x2, ..., xn)` masuk ke dalam blok `[Dense + ReLU]`, kemudian hasilnya diteruskan secara beruntun melalui beberapa blok serupa, dan akhirnya menghasilkan prediksi pada layer output. Arsitektur berlapis ini memungkinkan MLP menangkap interaksi orde tinggi antar fitur secara otomatis tanpa perlu ekspresi manual. Namun, fleksibilitas ini datang dengan konsekuensi arsitektural yang signifikan. Berbeda dengan Convolutional Neural Network yang memiliki inductive bias spasial untuk gambar, atau Recurrent Neural Network yang dirancang khusus untuk data sekuensial, MLP tidak membawa asumsi struktural apa pun mengenai hubungan antar kolom tabel. Semua fitur diperlakukan sebagai entitas yang setara dan saling terhubung penuh, sehingga model sangat rentan terhadap noise, redundansi, dan curse of dimensionality jika data tidak dikelola dengan ketat.

Kondisi inilah yang menyebabkan MLP sering kali kalah performa dibandingkan Gradient Boosted Decision Trees (GBDT) seperti XGBoost, LightGBM, atau CatBoost ketika digunakan tanpa preprocessing matang dan tuning hyperparameter yang sistematis. Algoritma berbasis pohon secara inheren mampu menangani missing value, skala fitur yang tidak seragam, dan interaksi non-linear melalui partisi ruang fitur yang adaptif. Sebaliknya, MLP menuntut normalisasi atau standardisasi yang presisi, skema initialization bobot yang tepat, strategi regularisasi (seperti Dropout atau Weight Decay), serta penyesuaian learning rate dan batch size yang hati-hati. Pada tingkat penelitian magister, kegagalan mencapai baseline GBDT bukan berarti MLP tidak berguna, melainkan menjadi indikasi bahwa pipeline eksperimental belum memenuhi standar rigor metodologis yang diperlukan untuk isolasi variabel dan validasi klaim ilmiah.

Sebagai fondasi representational learning, MLP mengajarkan prinsip penting bahwa arsitektur saja tidak menjamin keunggulan kinerja. Kemampuan model neural untuk melampaui metode tradisional sangat bergantung pada kualitas data, konsistensi preprocessing, dan desain eksperimen yang terukur. Evaluasi harus mencakup analisis kesalahan (error analysis), ablation study terhadap komponen embedding atau activation, serta pengujian robustness terhadap distribusi shift. Dengan pendekatan ini, peneliti dapat menentukan apakah peningkatan kompleksitas arsitektur benar-benar memberikan gain marginal yang signifikan, atau justru menambah overhead komputasi tanpa manfaat empiris yang jelas.

### Inti yang Harus Ditekankan

- MLP adalah arsitektur baseline fundamental untuk deep tabular learning, bekerja melalui lapisan fully-connected bertumpuk dengan aktivasi non-linear (ReLU) untuk memodelkan interaksi fitur.
- Model ini tidak memiliki inductive bias struktural, sehingga sangat bergantung pada kualitas preprocessing, scaling, feature engineering, dan tuning hyperparameter yang ketat.
- Secara empiris, MLP cenderung kalah dari GBDT pada dataset tabular umum; keunggulan hanya muncul jika pipeline eksperimen dirancang secara sistematis dan divalidasi dengan metrik serta analisis kesalahan yang rigor.
- Untuk riset tingkat S2, penggunaan MLP harus dibingkai sebagai bagian dari ablation study dan komparasi baseline, bukan sebagai solusi instan, guna memastikan kontribusi ilmiah yang terukur dan dapat direplikasi.

### Transisi ke Slide Berikutnya

Mengingat keterbatasan inherent MLP terhadap metode berbasis pohon, langkah logis berikutnya adalah mengidentifikasi kondisi eksperimental spesifik di mana MLP justru dapat bersaing atau bahkan mengungguli GBDT. Pada slide berikutnya, kita akan membahas kriteria empiris mulai dari skala dataset, konsistensi preprocessing, hingga kebutuhan integrasi arsitektur, lengkap dengan temuan komparatif dari literatur terkini yang menunjukkan kapan investasi pada MLP memberikan return yang sah secara metodologis.

---

## Slide 013 - Kapan MLP Menjadi Pilihan?

### Narasi

Setelah pada slide sebelumnya kita membahas arsitektur dasar Multilayer Perceptron dan kelemahan inherennya, yaitu ketiadaan *inductive bias* struktural serta kecenderungan umum untuk kalah dari algoritma berbasis pohon seperti GBDT tanpa rekayasa fitur yang matang, pertanyaan kritis berikutnya adalah kapan sebenarnya MLP layak menjadi pilihan utama dalam pipeline *data mining*. Dalam konteks pembelajaran mendalam untuk data tabular, MLP bukan lagi sekadar model *baseline* yang mudah diimplementasikan, melainkan alat yang memerlukan pertimbangan strategis berdasarkan karakteristik data, skalabilitas, dan tujuan penelitian.

MLP cenderung memberikan performa unggul ketika lima kondisi berikut terpenuhi secara simultan. Pertama, skala dataset sangat krusial; MLP umumnya membutuhkan jumlah sampel yang besar, biasanya di atas seratus ribu baris, agar lapisan-lapisan dalamnya dapat belajar representasi yang stabil tanpa jatuh ke dalam *overfitting*. Kedua, kualitas pra-pemrosesan harus konsisten; fitur numerik perlu distandarisasi atau dinormalisasi, dan distribusi nilai harus seragam agar gradien selama pelatihan konvergen dengan optimal. Ketiga, keberadaan fitur kategorikal berkarieritas tinggi menjadi penguat utama, karena MLP dapat memanfaatkan mekanisme *embedding* untuk memetakan kategori tersebut ke ruang vektor berdimensi rendah yang padat. Keempat, hubungan antara fitur dan target harus bersifat sangat non-linear dan kompleks, sehingga struktur hierarkis pohon keputusan sering kali kesulitan menangkap pola halus dibandingkan jaringan saraf. Kelima, kebutuhan integrasi arsitektur lebih lanjut, seperti *transfer learning* dari domain lain atau penggabungan dengan komponen *deep learning* lainnya, menjadikan MLP sebagai fondasi yang lebih fleksibel dibanding model tradisional.

Dari perspektif penelitian tingkat magister, literatur terkini menunjukkan bahwa MLP dengan penyetelan hiperparameter yang ketat dan eksperimen yang terkontrol dapat menyaingi performa GBDT pada dataset skala menengah hingga besar, seperti yang banyak diuji melalui benchmark OpenML. Namun, penting dicatat bahwa keunggulan konsisten jarang terjadi; selisih akurasinya biasanya marginal. Oleh karena itu, pemilihan MLP harus didasarkan pada bukti empiris melalui *ablation study* dan analisis kesalahan, bukan hanya pada asumsi teoretis. Mahasiswa didorong untuk merancang eksperimen yang adil, mengukur kompleksitas komputasi, dan memastikan bahwa peningkatan performa sebanding dengan biaya pelatihan model yang jauh lebih tinggi.

### Inti yang Harus Ditekankan

- MLP unggul secara signifikan terutama pada dataset berskala besar (>100k baris) dengan fitur yang telah dipreprocessing secara ketat dan konsisten.
- Kemampuan MLP menangani fitur kategorikal melalui *embedding* dan menangkap relasi non-linear kompleks menjadikannya kompetitif, meski jarang mengungguli GBDT secara konsisten.
- Keputusan menggunakan MLP harus didukung oleh evaluasi eksperimental rigor, termasuk analisis kompleksitas, *error analysis*, dan justifikasi ilmiah yang jelas dalam konteks penelitian.

### Transisi ke Slide Berikutnya

Salah satu syarat utama keunggulan MLP adalah pemanfaatan fitur kategorikal yang efektif, yang membawa kita langsung pada pembahasan teknik representasi modern. Pada slide selanjutnya, kita akan mendalami bagaimana *categorical embedding* bekerja untuk mengatasi keterbatasan *one-hot encoding* dan *target encoding*, serta bagaimana vektor embedding ini dipelajari secara bersamaan dengan model untuk menangkap kemiripan semantik antar kategori.

---

## Slide 014 - Categorical Embedding: Representasi Kategori

### Narasi

Pada slide sebelumnya, kita telah membahas kriteria kapan sebuah Multi-Layer Perceptron (MLP) menjadi pilihan yang tepat untuk menangani data tabular, di mana salah satu prasyarat utamanya adalah keberadaan fitur kategorikal yang memerlukan representasi khusus. Sebelum masuk ke implementasi arsitektur, penting untuk memahami mengapa teknik encoding konvensional sering kali menjadi bottleneck dalam pipeline machine learning modern. One-hot encoding memang aman secara konseptual, tetapi menghasilkan matriks yang sangat panjang dan sparse, terutama ketika cardinalitas kategori tinggi, yang berdampak langsung pada peningkatan kompleksitas komputasi dan kebutuhan memori. Di sisi lain, ordinal encoding secara implisit menyuntikkan hubungan urutan yang sebenarnya tidak dimiliki oleh data kategorikal murni, sehingga dapat menciptakan bias sistematis. Sementara itu, target encoding meskipun mampu mereduksi dimensi secara drastis, sangat rentan terhadap data leakage apabila tidak divalidasi dengan skema cross-validation yang ketat.

Untuk mengatasi keterbatasan tersebut, categorical embedding hadir sebagai mekanisme representasi yang adaptif dan efisien. Berbeda dengan encoding statis yang nilai transformasinya ditentukan secara eksplisit oleh manusia, setiap kategori pada fitur ini dipetakan ke dalam vektor berdimensi kecil yang nilainya dipelajari secara langsung selama proses pelatihan model. Mekanisme ini bekerja secara simultan bersama lapisan jaringan saraf lainnya. Melalui propagasi mundur (backpropagation), bobot pada layer embedding akan terus diperbarui berdasarkan fungsi loss, hingga menemukan konfigurasi numerik yang paling optimal untuk menangkap pola tersembunyi dan dependensi non-linear di balik kategori-kategori tersebut.

Keunggulan fundamental dari pendekatan ini terletak pada kemampuannya mempelajari kemiripan antar kategori secara otomatis. Seperti yang terlihat pada contoh pemetaan di slide, kategori "Merah" direpresentasikan oleh vektor `[0.12, -0.45, 0.87]`, sedangkan "Biru" memiliki vektor `[0.10, -0.40, 0.90]`. Secara geometris, jarak kosinus atau euclidean antara kedua vektor ini akan relatif dekat, menandakan bahwa model telah belajar bahwa keduanya berbagi karakteristik serupa dalam konteks masalah yang sedang ditangani. Sebaliknya, kategori "Tinggi" dengan vektor `[0.90, 0.30, -0.10]` menempati posisi yang jauh berbeda, mencerminkan sifat kategorikal yang independen. Dalam praktik pengkodean menggunakan library standar seperti PyTorch (`torch.nn.Embedding`) atau TensorFlow/Keras, struktur ini umumnya didefinisikan sebagai lookup table yang mengubah indeks diskrit menjadi dense vector representation, yang kemudian dapat langsung di-concatenate dengan fitur numerik yang telah dinormalisasi.

Representasi yang dihasilkan tidak hanya berfungsi sebagai jembatan input, tetapi juga membuka ruang untuk analisis interpretabilitas dan riset lanjutan. Karena vektor embedding bersifat kontinu dan padat, kita dapat memanfaatkannya untuk reduksi dimensi menggunakan t-SNE atau UMAP, mengidentifikasi kluster kategori yang bermakna secara domain, atau bahkan melakukan transfer learning antar dataset. Pendekatan ini selaras dengan metodologi penelitian tingkat magister, di mana evaluasi tidak berhenti pada akurasi prediksi, tetapi juga mencakup analisis bagaimana representasi fitur berkontribusi terhadap robustness dan generalisasi model.

### Inti yang Harus Ditekankan

- Teknik encoding tradisional (one-hot, ordinal, target) memiliki kelemahan inheren berupa sparsity ekstrem, asumsi urutan palsu, atau risiko data leakage yang sulit dikontrol.
- Categorical embedding memetakan kategori ke vektor berdimensi kecil yang nilainya dipelajari secara dinamis bersama parameter model melalui backpropagation.
- Kedekatan geometris antar vektor embedding secara otomatis merefleksikan kemiripan semantik atau fungsional antar kategori tanpa intervensi manual.
- Implementasi embedding memungkinkan integrasi mulus dengan fitur numerik, sekaligus menyediakan fondasi untuk analisis visualisasi dan interpretasi model berbasis vektor.

### Transisi ke Slide Berikutnya

Setelah memahami konsep dasar dan mekanisme pembelajaran vektor embedding, langkah selanjutnya adalah melihat bagaimana layer ini diintegrasikan secara struktural ke dalam arsitektur neural network untuk data tabular. Mari kita bahas ilustrasi alur data mulai dari concatenation vektor embedding dengan fitur normalisasi, pemilihan dimensi optimal, hingga aliran menuju lapisan dense pada slide berikutnya.

---

## Slide 015 - Categorical Embedding: Ilustrasi Arsitektur

### Narasi

Mari kita bedah alur pemrosesan data pada diagram ini secara bertahap. Pipeline dimulai dengan pembagian jalur berdasarkan tipe fitur. Di sisi kiri, fitur kategorikal dimasukkan ke dalam lapisan Embedding. Berbeda dengan teknik encoding konvensional yang bersifat statis, lapisan ini merupakan komponen dinamis yang parameternya akan terus diperbarui selama proses pelatihan model. Setiap kategori unik akan dipetakan ke vektor berdimensi kecil, di mana posisi vektor tersebut mencerminkan hubungan semantik atau pola frekuensi yang muncul dalam data. Di sisi kanan, fitur numerik melewati tahap normalisasi standar untuk menyamakan skala distribusi, sehingga menghasilkan vektor numerik yang siap diintegrasikan.

Setelah kedua representasi terbentuk, terjadi proses concatenation atau penggabungan vektor embedding dan vektor numerik menjadi satu tensor fitur gabungan. Tensor ini kemudian dilewatkan ke lapisan Dense (fully connected) yang berperan sebagai inti komputasi model. Lapisan dense inilah yang bertanggung jawab untuk mempelajari interaksi non-linear antar fitur, mengekstrak pola hierarkis, dan memproyeksikan representasi gabungan ke ruang output sesuai dengan tugas prediksi yang dihadapi. Pendekatan ini menjamin bahwa informasi kualitatif dari kategori tidak terdegradasi menjadi vektor sparse, melainkan terintegrasi secara mulus dengan sinyal kuantitatif dari fitur numerik.

Secara implementasi, pemilihan dimensi embedding sangat krusial untuk stabilitas model. Praktik standar yang direkomendasikan adalah menggunakan rumus `min(50, (cardinality+1)//2)`. Aturan ini membatasi dimensi maksimum menjadi 50 untuk menghindari ledakan dimensi pada fitur dengan kardinalitas sangat tinggi, sementara tetap menyesuaikan dimensi secara proporsional untuk fitur dengan kategori terbatas. Dimensi yang lebih kecil dibandingkan jumlah kategori sebenarnya justru menguntungkan karena memaksa model untuk merangkum informasi penting ke dalam representasi padat, sehingga mengurangi risiko overfitting dan mempercepat konvergensi saat training.

Selain fungsinya dalam pipeline prediktif, embedding vector membuka peluang analitis yang signifikan untuk tahap riset. Karena setiap kategori direpresentasikan sebagai koordinat dalam ruang vektor berdimensi rendah, Anda dapat menerapkan teknik reduksi dimensi seperti t-SNE atau UMAP untuk memvisualisasikan kluster kategori yang saling berdekatan. Dalam konteks penelitian data mining tingkat magister, visualisasi ini sangat berguna untuk conducting error analysis atau ablation study berbasis kategori, membantu Anda mengidentifikasi apakah bias prediksi terkonsentrasi pada subgroup tertentu yang mungkin memerlukan strategi feature engineering atau sampling yang berbeda.

### Inti yang Harus Ditekankan

- Embedding adalah lapisan yang dapat dilatih (trainable layer), sehingga vektor kategorikalnya berevolusi bersama bobot model selama backpropagation, bukan sekadar tabel lookup statis.
- Dimensi embedding harus diatur hati-hati menggunakan rumus `min(50, (cardinality+1)//2)` untuk menyeimbangkan kapasitas representasi, efisiensi memori, dan pencegahan overfitting.
- Mekanisme concatenation antara embedding vector dan fitur numerik yang dinormalisasi memungkinkan arsitektur neural network menangkap interaksi kompleks antar tipe data heterogen.
- Representasi embedding tidak hanya dipakai untuk prediksi, tetapi juga dapat dieksploitasi untuk visualisasi klaster kategori guna mendukung eksplorasi data dan investigasi kesalahan model secara sistematis.

### Transisi ke Slide Berikutnya

Dengan memahami fondasi arsitektural yang menggabungkan representasi kategorikal dan numerik secara terpadu, kita dapat melangkah ke pendekatan yang lebih selektif dalam memanfaatkan fitur-fitur tersebut. Pada slide berikutnya, kita akan membahas TabNet, sebuah arsitektur neural network khusus data tabular yang mengimplementasikan sequential attention untuk secara adaptif memilih subset fitur penting pada setiap tahap pemrosesan, sehingga menggabungkan efisiensi seleksi fitur dari decision tree dengan kekuatan representasi dari neural network.

---

## Slide 016 - TabNet: Attention-Based Tabular Learning

### Narasi

Setelah pada slide sebelumnya membahas bagaimana fitur kategorikal diproses melalui layer embedding dan digabungkan dengan fitur numerik yang telah dinormalisasi, kita kini memasuki arsitektur inti pemrosesan data: TabNet. Diperkenalkan oleh Arik dan Pfister pada tahun 2021, TabNet merupakan arsitektur jaringan saraf tiruan yang dirancang secara eksplisit untuk menangani karakteristik unik data tabular. Berbeda dengan model deep learning umum seperti MLP atau CNN yang sering kali mengabaikan struktur hubungan antar fitur dalam tabel dan cenderung overfit pada dimensi rendah, TabNet mengadopsi mekanisme seleksi fitur yang adaptif, efisien, dan interpretable.

Filosofi utama TabNet terletak pada kemampuannya menjembatani dua paradigma machine learning yang selama ini dianggap terpisah. Di satu sisi, ia meniru sifat decision tree yang sangat kuat dalam melakukan seleksi fitur secara hierarkis dan toleran terhadap skala data yang berbeda. Di sisi lain, ia memanfaatkan representasi learning dari neural network untuk menangkap interaksi non-linear yang kompleks. Kunci dari pendekatan ini adalah penggunaan sequential attention, di mana model tidak memproses seluruh fitur sekaligus dalam satu langkah forward pass, melainkan memilih subset fitur yang paling relevan secara bertahap selama proses training maupun inference.

Untuk mengimplementasikan konsep tersebut, TabNet terdiri dari empat komponen utama yang bekerja secara terintegrasi. Pertama, Feature Transformer berfungsi sebagai blok dasar yang mentransformasi vektor input menjadi representasi berdimensi tinggi menggunakan lapisan dense dan batch normalization, mirip dengan hidden layer pada neural network konvensional. Kedua, Attentive Transformer bertanggung jawab untuk menghitung bobot perhatian terhadap setiap fitur pada setiap tahap, sehingga model dapat memfokuskan komputasi hanya pada informasi yang benar-benar berdampak pada prediksi saat itu. Ketiga, proses dijalankan melalui Sequential Steps yang berulang beberapa kali, menyerupai mekanisme boosting di mana setiap tahap menyempurnakan pemahaman model dan memperbaiki residual error dari tahap sebelumnya. Keempat, fungsi Sparsemax digunakan sebagai pengganti softmax dalam perhitungan attention. Sparsemax menghasilkan masker seleksi fitur yang bersifat sparse secara eksak, artinya sebagian besar fitur akan mendapatkan bobot tepat nol, sementara hanya fitur kritis yang tetap aktif. Hal ini tidak hanya meningkatkan efisiensi komputasi, tetapi juga memberikan transparansi kuantitatif mengenai kontribusi masing-masing variabel.

Dalam konteks penelitian tingkat magister, arsitektur ini sangat relevan karena memungkinkan analisis ablation study yang ketat terhadap peran setiap subset fitur, serta evaluasi stabilitas masker attention across different data splits. Struktur ini juga menjadi fondasi metodologis yang kuat sebelum beralih ke visualisasi alur kerja lengkapnya pada slide berikutnya.

### Inti yang Harus Ditekankan

- TabNet adalah arsitektur khusus tabular yang berhasil menggabungkan seleksi fitur ala decision tree dengan kapasitas representasi learning neural network.
- Mekanisme sequential attention memungkinkan model fokus pada subset fitur berbeda di setiap tahap, meniru cara kerja ensemble boosting.
- Sparsemax adalah komponen matematis kunci yang menghasilkan masker seleksi fitur yang benar-benar sparse, meningkatkan interpretabilitas dan mengurangi noise.
- Desain ini mendukung praktik penelitian S2 seperti ablation study, feature importance analysis berbasis mask, dan evaluasi robustness/generalization yang lebih transparan.

### Transisi ke Slide Berikutnya

Dengan memahami peran fungsional masing-masing komponen di atas, kita sekarang akan melihat bagaimana keempat elemen tersebut disusun secara berurutan dalam sebuah workflow lengkap, mulai dari penerimaan input fitur hingga agregasi keputusan akhir pada setiap decision step.

---

## Slide 017 - TabNet: Workflow Ringkas

### Narasi

Slide ini menyajikan alur kerja atau workflow ringkas dari arsitektur TabNet yang telah diperkenalkan pada pembahasan sebelumnya. Diagram ini menggambarkan bagaimana input fitur diproses secara iteratif melalui serangkaian tahap yang secara konseptual menyerupai mekanisme boosting dalam model tree-based. Proses dimulai ketika vektor fitur mentah dimasukkan ke dalam Feature Transformer, yang bertugas mengubah representasi awal menjadi embedding numerik yang lebih kaya dan siap untuk analisis prediktif. Setelah transformasi pertama, model memasuki Decision Step 1 untuk menghasilkan representasi atau prediksi parsial.

Tahapan krusial berikutnya adalah interaksi dinamis antara Attentive Transformer dan mekanisme masking. Attentive Transformer bekerja untuk mengevaluasi relevansi setiap fitur berdasarkan konteks prediktif saat ini, lalu menghasilkan masker berbasis Sparsemax. Masker ini bersifat sparse, artinya hanya memberikan bobot signifikan pada subset fitur yang paling informatif untuk langkah tersebut, sementara fitur lain ditekan mendekati nol. Hasil seleksi fitur ini kemudian diteruskan kembali ke Feature Transformer untuk tahap selanjutnya, menciptakan siklus berulang di mana setiap Decision Step berfokus pada aspek atau kombinasi fitur yang berbeda dari langkah sebelumnya.

Siklus ini dapat berlangsung selama beberapa iterasi tergantung pada konfigurasi hyperparameter seperti jumlah langkah sekuensial (n_steps). Setiap langkah menghasilkan representasi atau keputusan parsial yang menangkap pola unik dari subset fitur yang dipilihnya. Pada tahap akhir, semua output dari Decision Step 1 hingga Decision Step terakhir akan diagregasi secara linear atau melalui fungsi gabungan tertentu untuk membentuk prediksi akhir model. Pendekatan agregasi ini memastikan bahwa informasi dari berbagai perspektif fitur tidak hilang, melainkan dikombinasikan secara komprehensif sebelum menghasilkan keluaran final.

Dari perspektif penelitian tingkat magister, workflow ini menunjukkan pergeseran paradigma dari model tabular tradisional yang mengandalkan satu kali forward pass atau struktur pohon diskrit, menuju representasi pembelajaran yang adaptif dan interpretable secara bawaan. Mekanisme seleksi fitur bertahap ini secara eksplisit mengungkap kontribusi relatif masing-masing fitur terhadap prediksi, sekaligus mengurangi noise dari fitur redundan. Pemahaman mendalam mengenai alur ini menjadi fondasi penting untuk mengevaluasi kapan TabNet layak diaplikasikan dan apa tantangan implementasinya dalam skenario nyata, yang akan kita bedah lebih lanjut pada diskusi mengenai kelebihan dan keterbatasan metode ini.

### Inti yang Harus Ditekankan

- Alur kerja TabNet bersifat iteratif dan sekuensial, meniru prinsip boosting di mana setiap langkah memproses subset fitur yang berbeda.
- Attentive Transformer menghasilkan masker sparse pada setiap tahap untuk melakukan seleksi fitur dinamis dan adaptif.
- Prediksi akhir diperoleh melalui agregasi hasil dari seluruh Decision Step, bukan hanya dari lapisan jaringan terdalam.
- Desain workflow ini memungkinkan interpretabilitas fitur yang transparan tanpa mengorbankan kapasitas representasi model.

### Transisi ke Slide Berikutnya

Dengan memahami bagaimana komponen-komponen ini berinteraksi secara berurutan, kita dapat menilai secara objektif mengapa arsitektur ini dianggap promising namun juga memiliki tantangan tersendiri. Mari kita lanjutkan ke slide berikutnya untuk membahas secara spesifik kelebihan praktis serta keterbatasan teknis yang perlu dipertimbangkan saat menerapkan TabNet dalam riset maupun aplikasi industri.

---

## Slide 018 - TabNet: Kelebihan dan Keterbatasan

### Narasi

Setelah memahami alur kerja TabNet pada slide sebelumnya yang menunjukkan bagaimana setiap decision step secara dinamis memilih subset fitur melalui mekanisme attentive transformer, kini saatnya kita melakukan evaluasi kritis terhadap kelebihan dan keterbatasan arsitektur ini dalam konteks pembelajaran mesin untuk data tabular. TabNet menawarkan beberapa keunggulan signifikan yang menjadikannya alternatif menarik bagi pendekatan tradisional. Pertama, model ini memiliki interpretability bawaan melalui penggunaan masker fitur yang dihasilkan pada setiap tahap keputusan. Masker ini memberikan bobot perhatian terhadap setiap fitur input, sehingga peneliti dapat melacak kontribusi relatif masing-masing variabel tanpa memerlukan teknik post-hoc seperti SHAP atau LIME. Kedua, proses seleksi fitur dilakukan secara end-to-end selama pelatihan, yang secara otomatis mengidentifikasi dan menonaktifkan fitur yang kurang relevan atau redundan. Hal ini secara langsung mengurangi kebutuhan akan preprocessing ekstensif dan pipeline seleksi fitur terpisah yang biasanya memakan waktu dan rentan terhadap bias manusia. Ketiga, arsitektur TabNet dirancang untuk menangani data dengan interaksi non-linear yang kompleks berkat kombinasi fungsi aktivasi non-linear dan mekanisme attention bertingkat, memungkinkan model menangkap dependensi高阶 antar kolom tabel secara lebih efektif dibandingkan model linear atau tree-based sederhana.

Namun, sebagai peneliti tingkat magister, kita juga harus mengakui keterbatasan praktis yang perlu dipertimbangkan sebelum mengadopsi TabNet. Dari sisi komputasi, waktu pelatihan TabNet umumnya lebih lambat dibandingkan algoritma Gradient Boosted Decision Trees (GBDT) seperti XGBoost atau LightGBM, mengingat beban arsitektur deep learning dan kebutuhan iterasi berulang melalui multiple decision steps. Model ini juga sangat sensitif terhadap pemilihan hyperparameter; perubahan kecil pada learning rate, dimensi embedding, atau jumlah langkah keputusan dapat berdampak signifikan terhadap konvergensi dan stabilitas performa. Dalam berbagai benchmark publik, TabNet seringkali masih tertinggal oleh LightGBM atau CatBoost yang telah sangat dioptimalkan secara khusus untuk struktur data tabular. Selain itu, meskipun masker fitur menyediakan sinyal interpretasi, pemahaman terhadap output masker tersebut tidak selalu intuitif. Nilai perhatian yang rendah pada sebuah fitur belum tentu menandakan ketidakterkaitan kausal, melainkan bisa disebabkan oleh multikolinearitas, redundansi informasi, atau cara model mendistribusikan bobot perhatian secara terdistribusi.

Secara keseluruhan, slide ini menekankan bahwa TabNet merupakan terobosan arsitektural yang berhasil menggabungkan representasi deep learning dengan seleksi fitur diferensiable, namun penggunaannya memerlukan pertimbangan matang antara trade-off akurasi, efisiensi komputasi, dan kebutuhan interpretabilitas. Untuk penelitian Anda, pertimbangkan apakah masalah yang ditangani menuntut interpretasi fitur eksplisit atau justru mengutamakan predictive performance pada dataset dengan dimensi tinggi dan interaksi kompleks.

### Inti yang Harus Ditekankan

- TabNet menyediakan interpretability bawaan melalui masker fitur yang dihasilkan secara end-to-end, mengurangi ketergantungan pada metode post-hoc dan menyederhanakan pipeline analisis.
- Seleksi fitur otomatis dan penanganan interaksi kompleks menjadikan model ini kuat untuk data tabular berdimensi tinggi, meski memerlukan preprocessing yang lebih ringan.
- Kelemahan utama meliputi kecepatan pelatihan yang lebih lambat dari GBDT, sensitivitas tinggi terhadap hyperparameter, dan performa yang sering kali masih kalah kompetitif dibanding LightGBM/CatBoost pada benchmark standar.
- Interpretasi masker fitur perlu dikontekstualisasikan dengan hati-hati karena nilai perhatian yang rendah dapat dipengaruhi oleh korelasi atau redundansi antar fitur, bukan semata-mata ketidakrelevanan.

### Transisi ke Slide Berikutnya

Mengingat keterbatasan interpretasi masker dan efisiensi komputasi TabNet, komunitas riset kemudian bereksperimen dengan adaptasi langsung arsitektur Transformer klasik ke domain data tabular. Pada slide berikutnya, kita akan membahas FT-Transformer, sebuah pendekatan yang mengubah setiap kolom menjadi token embedding sebelum memprosesnya melalui encoder Transformer standar, sehingga membuka peluang pemanfaatan mekanisme self-attention untuk pemodelan interaksi fitur yang lebih ekspresif.

---

## Slide 019 - FT-Transformer: Feature Tokenizer + Transformer

### Narasi

Slide ini memperkenalkan FT-Transformer, sebuah arsitektur yang diusulkan oleh Gorishniy dkk. pada tahun 2021 sebagai respons terhadap kebutuhan pemrosesan data tabular yang lebih ekspresif dan scalable. Model ini mengadaptasi arsitektur Transformer yang awalnya dikembangkan untuk pemrosesan bahasa alami, lalu mentransformasikannya agar dapat beroperasi secara native pada data tabular. Ide fundamental yang ditampilkan dalam diagram alur menunjukkan bahwa setiap fitur tidak lagi diproses sebagai bagian dari vektor datar tunggal, melainkan dikonversi terlebih dahulu menjadi representasi vektor individual yang disebut token melalui komponen Feature Tokenizer. Setelah proses tokenisasi selesai, seluruh token tersebut disuplai secara paralel ke dalam Transformer Encoder.

Peran Feature Tokenizer sangat menentukan karena ia menjaga integritas struktural masing-masing fitur sebelum terjadi interaksi. Dengan memetakan setiap kolom fitur ke dalam ruang embedding berdimensi tetap, model menghindari bias yang sering muncul ketika fitur numerik dan kategorikal dicampur tanpa penanganan khusus. Selanjutnya, Transformer Encoder memproses kumpulan token ini menggunakan mekanisme self-attention. Mekanisme ini memungkinkan model untuk secara dinamis menghitung bobot ketergantungan antar fitur, sehingga interaksi non-linear, dependen, dan bersifat global dapat dimodelkan secara efektif tanpa perlu rekayasa fitur manual yang ekstensif.

Jika dikaitkan dengan pembahasan sebelumnya mengenai TabNet, terdapat pergeseran paradigma yang signifikan. TabNet mengandalkan pengambilan keputusan berurutan dengan masking fitur yang bersifat sparse, yang meskipun memberikan interpretasi parsial, sering kali terhambat oleh kecepatan pelatihan dan sensitivitas hyperparameter. FT-Transformer, di sisi lain, memanfaatkan komputasi paralel khas Transformer yang lebih efisien saat skala data meningkat, serta memberikan kerangka kerja yang konsisten untuk mempelajari dependensi fitur secara simultan. Namun, keunggulan ini datang dengan tuntutan pengelolaan representasi yang lebih ketat, yang akan kita bedah secara teknis pada slide berikutnya.

### Inti yang Harus Ditekankan

- FT-Transformer menandai pergeseran metodologis dari pendekatan MLP/Tree-based konvensional menuju arsitektur berbasis attention yang secara native dirancang untuk data tabular.
- Feature Tokenizer berfungsi sebagai lapisan representasi yang memisahkan dan meng-embed setiap fitur secara independen, sehingga mempertahankan distribusi dan karakteristik unik masing-masing kolom.
- Mekanisme self-attention pada Transformer Encoder memungkinkan pemodelan interaksi fitur secara global dan kontekstual, mengatasi batasan model additive atau lokal yang umum pada algoritma tradisional.
- Dalam konteks penelitian tingkat magister, arsitektur ini menawarkan landasan kuat untuk melakukan ablation study, analisis kompleksitas komputasi, dan evaluasi generalisasi pada benchmark tabular berskala besar.

### Transisi ke Slide Berikutnya

Untuk memahami bagaimana konsep arsitektural ini diimplementasikan secara konkret, mari kita telaah secara rinci komponen penyusunnya, mulai dari prosedur transformasi fitur numerik dan kategorikal, penggunaan token khusus, hingga konfigurasi lengkap Transformer Encoder.

---

## Slide 020 - FT-Transformer: Komponen

### Narasi

Pada slide ini, kita akan mengurai secara teknis bagaimana arsitektur FT-Transformer diimplementasikan melalui dua komponen utamanya, yaitu Feature Tokenizer dan Transformer Encoder. Mari kita mulai dari Feature Tokenizer, yang berfungsi sebagai jembatan fundamental antara data tabular mentah dan representasi vektor yang siap diproses oleh mekanisme attention. Untuk fitur numerik, nilai input $x$ terlebih dahulu melewati Layer Normalization guna menstabilkan distribusi statistik, kemudian dialirkan ke lapisan Linear untuk memproyeksikan nilai tersebut ke dalam ruang embedding berdimensi tetap. Sebaliknya, untuk fitur kategorikal, nilai indeks $k$ langsung diarahkan ke lapisan Embedding Lookup yang mengubah kategori diskrit menjadi vektor dense. Proses konversi paralel ini memastikan bahwa baik data kontinu maupun kategorikal memiliki representasi matematis yang seragam sebelum memasuki tahap agregasi.

Setelah seluruh fitur individual dikonversi menjadi token, langkah kritis berikutnya adalah penggabungan atau concatenation. Seluruh token hasil tokenizer ditumpuk secara berurutan, namun terdapat satu elemen khusus yang selalu ditempatkan di posisi terdepan, yaitu token `[CLS]`. Token ini tidak merepresentasikan fitur kolom mana pun, melainkan bertindak sebagai pembawa konteks holistik yang akan mempelajari agregasi informasi dari seluruh baris data. Struktur akhir yang dimasukkan ke dalam encoder berbentuk urutan token: `[CLS] + token_1 + token_2 + ... + token_n`, yang memungkinkan model memperlakukan setiap kolom tabel sebagai elemen sekuensial layaknya token dalam pemrosesan bahasa alami.

Urutan token tersebut kemudian diproses oleh Transformer Encoder. Di dalamnya, mekanisme Multi-head Self-Attention bekerja secara intensif untuk menghitung bobot ketergantungan antar semua token, termasuk interaksi antara `[CLS]` dengan setiap fitur, serta antar fitur itu sendiri. Setiap layer attention diikuti oleh Feed-Forward Network (FFN) yang diterapkan secara independen pada setiap token untuk melakukan transformasi non-linear. Agar pelatihan stabil dan mencegah masalah vanishing gradient, arsitektur ini menerapkan Layer Normalization serta Residual Connection setelah setiap sub-layer. Kombinasi ini memungkinkan FT-Transformer menangkap pola kompleks dan dependensi jangka panjang antar fitur tanpa asumsi struktur data yang kaku.

Kelebihan utama dari pendekatan ini terletak pada kemampuannya menangkap interaksi fitur secara global dan simultan, berbeda dengan metode tradisional yang sering kali hanya melihat interaksi lokal atau bertahap. Namun, kekuatan ini datang dengan biaya komputasi yang lebih tinggi dan kebutuhan akan dataset berukuran besar agar model dapat belajar representasi yang optimal tanpa overfitting. Hal ini sangat relevan dalam konteks penelitian tingkat magister, dimana pemilihan arsitektur harus mempertimbangkan trade-off antara kapasitas model, ketersediaan data, dan strategi hyperparameter tuning. Sebagaimana dibahas di slide sebelumnya, adaptasi Transformer ke domain tabular memang menuntut penyesuaian pada tahap tokenisasi, dan slide ini memberikan fondasi teknis mengapa penyesuaian tersebut diperlukan sebelum kita mengevaluasi performanya secara komparatif.

### Inti yang Harus Ditekankan

- Pipeline tokenisasi harus membedakan penanganan fitur numerik (LayerNorm → Linear) dan kategorikal (Embedding) agar representasi vektornya kompatibel.
- Token `[CLS]` di awal urutan bersifat wajib karena berfungsi sebagai aggregator global yang membawa informasi holistik untuk head prediksi.
- Mekanisme self-attention memungkinkan interaksi fitur secara global dan simultan, menjadikan model sangat powerful namun sensitif terhadap ukuran data dan kebutuhan tuning yang ketat.

### Transisi ke Slide Berikutnya

Dengan memahami rincian komponen FT-Transformer, langkah logis berikutnya adalah menempatkan arsitektur ini dalam perspektif yang lebih luas dengan membandingkannya secara sistematis terhadap arsitektur neural tabular lainnya seperti MLP dan TabNet, khususnya dari segi representasi data, mekanisme seleksi fitur, hingga kompleksitas komputasinya.

---

## Slide 021 - Perbandingan Arsitektur Neural Tabular

### Narasi

Setelah kita mengurai komponen-komponen internal dari FT-Transformer pada slide sebelumnya, kini saatnya menempatkan arsitektur tersebut dalam konteks evaluasi yang lebih komprehensif melalui perbandingan sistematis dengan model neural tabular lain yang umum digunakan, yaitu MLP dan TabNet. Tabel pada slide ini menyajikan empat dimensi kritis yang menjadi dasar pemilihan arsitektur dalam penelitian data mining: representasi data, mekanisme seleksi fitur, pola interaksi fitur, serta kompleksitas komputasi. 

MLP atau Multi-Layer Perceptron merepresentasikan data sebagai dense embedding tanpa mekanisme seleksi fitur eksplisit. Interaksi antar fitur terjadi secara implisit melalui propagasi gradien di lapisan tersembunyi, sehingga kompleksitasnya rendah dan sangat efisien untuk baseline eksperimen. Berbeda dengan MLP, TabNet memperkenalkan mekanisme step-wise attention yang memungkinkan seleksi fitur secara eksplisit melalui penggunaan masker biner. Interaksi fiturnya bersifat sequential, artinya model memproses subset fitur yang relevan pada setiap langkah waktu, menghasilkan kompleksitas sedang namun memberikan transparansi tinggi dalam identifikasi fitur dominan. Sementara itu, FT-Transformer mengubah setiap kolom fitur menjadi token individual yang kemudian diproses oleh self-attention global. Pendekatan ini mampu menangkap ketergantungan jangka panjang dan interaksi non-linear antar seluruh fitur secara simultan, namun menuntut kompleksitas komputasi yang tinggi karena overhead perhitungan attention matrix yang berskala kuadratik terhadap jumlah fitur.

Dari perspektif metodologi penelitian tingkat magister, implikasi tabel ini sangat krusial untuk merancang justifikasi teknis dalam paper Anda. Pemilihan arsitektur harus didasarkan pada trade-off antara ukuran dataset, ketersediaan sumber daya komputasi, dan kebutuhan interpretabilitas hasil. Jika penelitian Anda berfokus pada dataset skala kecil hingga menengah dengan batasan komputasi ketat, MLP tetap menjadi pilihan yang robust. Namun, jika aspek interpretabilitas menjadi variabel dependen dalam analisis Anda—misalnya dalam konteks regulasi atau domain kritis seperti kesehatan—TabNet menawarkan keunggulan melalui maskernya yang dapat dilacak. Sebaliknya, ketika akurasi prediksi menjadi prioritas utama dan dataset berskala besar tersedia, FT-Transformer akan memberikan peningkatan performa signifikan, meskipun Anda perlu mengalokasikan lebih banyak waktu untuk hyperparameter tuning dan monitoring resource usage.

Penting untuk dipahami bahwa ketiga arsitektur ini umumnya beroperasi dalam paradigm supervised learning yang bergantung sepenuhnya pada data berlabel. Ketika menghadapi realita di mana pengumpulan label manusia sangat mahal atau terbatas, strategi pembelajaran tradisional ini mulai menunjukkan batasannya. Oleh karena itu, pemahaman mendalam tentang karakteristik masing-masing arsitektur menjadi prasyarat sebelum kita beralih ke teknik modern yang memanfaatkan data unlabeled secara optimal.

### Inti yang Harus Ditekankan

- Pemilihan arsitektur neural tabular harus dibuktikan secara empiris melalui ablation study, bukan dipilih secara arbitrer berdasarkan tren semata.
- Terdapat trade-off fundamental antara interpretabilitas (TabNet) dan akurasi/representasi global (FT-Transformer) yang harus dijustifikasi secara eksplisit sesuai research question.
- Kompleksitas komputasi FT-Transformer menuntut perencanaan eksperimen yang matang, termasuk manajemen batch size, mixed precision training, dan profiling resource di lingkungan seperti Google Colab atau cluster lokal.

### Transisi ke Slide Berikutnya

Karena keterbatasan data berlabel sering menjadi bottleneck dalam pengembangan model neural tabular, langkah logis selanjutnya adalah mempelajari bagaimana kita dapat melatih representasi yang kuat tanpa bergantung pada anotasi manual. Pada slide berikutnya, kita akan membahas konsep self-supervised representation learning yang memanfaatkan struktur intrinsik data tabular unlabeled untuk meningkatkan performa fine-tuning pada tugas akhir.

---

## Slide 022 - Self-Supervised Representation Learning untuk Tabular

### Narasi

Pada slide ini, kita membahas fondasi konseptual dari Self-Supervised Representation Learning (SSL) yang diterapkan khusus pada data tabular. Berbeda dengan pendekatan supervised learning konvensional yang sepenuhnya bergantung pada ketersediaan anotasi manual, SSL memanfaatkan kelimpahan data tanpa label untuk mempelajari struktur, korelasi, dan pola intrinsik dari fitur-fitur tabel secara mandiri. Ide sentralnya adalah bahwa representasi fitur yang diekstraksi melalui proses konstruksi tugas pretext akan menjadi abstraksi yang kaya dan umum, sehingga dapat diwariskan ke berbagai tugas downstream yang memerlukan label.

Alur kerja yang ditampilkan pada diagram slide menggambarkan proses dua tahap yang menjadi standar dalam praktik modern. Tahap pertama adalah self-supervised pretraining, di mana model dilatih secara intensif hanya menggunakan kolom-kolom numerik atau kategorikal tanpa membutuhkan label target. Selama fase ini, arsitektur neural belajar menangkap distribusi marginal, interaksi non-linear antar fitur, serta dependensi kontekstual yang tersembunyi dalam data mentah. Output dari tahap ini adalah representasi terlatih yang padat dan bermakna. Tahap kedua merupakan fase transfer pengetahuan ke tugas akhir, yang dapat dilakukan melalui dua mekanisme utama: fine-tuning atau linear probing. Pada fine-tuning, seluruh parameter model yang telah pretrained disesuaikan kembali dengan learning rate yang sangat kecil agar adaptif terhadap distribusi label spesifik. Sebaliknya, linear probing membekukan representasi hasil pretraining dan hanya melatih classifier linier ringan di atasnya, yang memberikan evaluasi cepat dan stabil terhadap kualitas representasi awal.

Konteks ini melengkapi diskusi pada slide sebelumnya mengenai perbandingan arsitektur neural tabular. Jika FT-Transformer atau TabNet menuntut sumber daya komputasi besar dan data berlabel masif untuk mencapai konvergensi, SSL menawarkan kerangka kerja yang lebih efisien dan scalable, terutama ketika rasio data tidak berlabel jauh melampaui data berlabel. Dalam perspektif penelitian tingkat magister, penguasaan konsep ini menjadi prasyarat untuk merancang eksperimen yang robust, mengembangkan baseline yang kuat, dan mengeksplorasi potensi foundation models untuk domain tabular. Metode-metode spesifik untuk mengimplementasikan prinsip SSL ini akan diuraikan secara teknis pada slide berikutnya.

### Inti yang Harus Ditekankan

- SSL mengubah paradigma pembelajaran dari ketergantungan penuh pada label menjadi pemanfaatan struktur intrinsik data tanpa label sebagai fondasi representasi.
- Proses dua tahap (pretraining diikuti fine-tuning atau linear probing) memungkinkan transfer pengetahuan yang fleksibel, efisien, dan mudah di-evaluasi kualitasnya.
- Pendekatan ini menjadi solusi strategis untuk bottleneck kurasi label, meningkatkan generalisasi model pada data terbatas, dan mendukung pengembangan foundation models tabular.

### Transisi ke Slide Berikutnya

Setelah memahami konsep dasar dan alur kerja SSL, langkah selanjutnya adalah mendalami bagaimana prinsip ini dioperasionalkan secara teknis. Pada slide berikutnya, kita akan mengurai empat metode utama self-supervised untuk data tabular, mulai dari contrastive learning, masked autoencoding, pretext task, hingga denoising, beserta implikasi masing-masing terhadap kualitas representasi.

---

## Slide 023 - Metode Self-Supervised untuk Tabular

### Narasi

Setelah pada slide sebelumnya kita membahas konsep dasar Self-Supervised Representation Learning dan alur kerjanya dari data tanpa label hingga representasi terlatih, pada slide ini kita akan mendalami metode-metode spesifik yang dapat diterapkan khusus untuk data tabular. Berbeda dengan data gambar atau teks di mana teknik augmentasi sudah sangat matang, data tabular memiliki tantangan unik karena campuran fitur numerik dan kategorikal serta struktur tabel yang kaku. Oleh karena itu, empat pendekatan utama sering digunakan dalam literatur terkini untuk mengeksploitasi pola intrinsik data tanpa bergantung pada anotasi manusia.

Pertama, **Contrastive Learning**. Ide dasarnya adalah menciptakan dua versi augmen dari sampel data yang sama, kemudian melatih model agar representasi vektor dari kedua augmen tersebut saling mendekat di ruang embedding, sementara sampel dari kelas atau sampel berbeda didorong untuk menjauh. Dalam konteks tabular, augmentasi bisa berupa dropout fitur, masking sebagian baris, atau perturbasi nilai numerik. Model belajar bahwa karakteristik intrinsik data tetap terjaga meskipun ada variasi input, sehingga menghasilkan embedding yang diskriminatif dan stabil.

Kedua, **Masked Autoencoding**. Metode ini mengadopsi filosofi pemaskeran namun diadaptasi untuk tabel. Sebagian fitur (bisa kolom atau sel tertentu) disembunyikan secara acak, lalu arsitektur model ditugaskan untuk merekonstruksi nilai asli dari fitur yang hilang tersebut. Proses ini memaksa encoder untuk menangkap ketergantungan antar fitur secara mendalam, sehingga menghasilkan representasi awal yang sangat kaya informasi sebelum tahap fine-tuning pada downstream task.

Ketiga, **Pretext Task** berbasis prediksi silang tipe fitur. Misalnya, model diberi tugas memprediksi nilai fitur kategorikal hanya berdasarkan fitur numerik yang tersedia, atau sebaliknya. Karena tipe data yang berbeda memiliki distribusi statistik yang berbeda, tugas ini menuntut model untuk mempelajari hubungan non-linear dan semantik antar dimensi tabel secara eksplisit, yang sering kali sulit dipelajari melalui supervised learning konvensional pada dataset kecil.

Keempat, **Denoising Autoencoder**. Di sini, fitur asli sengaja diberi gangguan noise seperti Gaussian noise pada fitur numerik atau pengacakan label pada fitur kategorikal. Model kemudian dilatih untuk memulihkan sinyal asli dari input yang sudah rusak. Pendekatan ini meningkatkan robustness model terhadap outlier dan kesalahan pengukuran yang umum terjadi pada dataset dunia nyata, sekaligus mencegah overfitting selama fase pretraining.

Manfaat penerapan keempat metode ini sangat strategis, terutama bagi penelitian tingkat magister yang berfokus pada efisiensi data dan validasi metodologis. Kita dapat memanfaatkan data tidak berlabel yang biasanya melimpah di repository publik atau log sistem perusahaan. Representasi yang dihasilkan dari pretraining ini secara signifikan meningkatkan kualitas titik awal (initial representation) untuk downstream task, sehingga mengurangi risiko konvergensi ke local minimum dan mempercepat proses pelatihan. Hal ini menjadi solusi kritis ketika kita menghadapi skenario di mana获取 label sangat mahal atau terbatas, misalnya pada deteksi anomali medis atau financial fraud, di mana jumlah sampel berlabel seringkali hanya berkisar puluhan hingga ratusan.

### Inti yang Harus Ditekankan

- Empat metode inti SSL untuk tabular: Contrastive Learning, Masked Autoencoding, Pretext Task, dan Denoising, masing-masing mengeksploitasi struktur tabel melalui augmentasi, masking, prediksi silang tipe, atau pemulihan noise.
- SSL mengubah paradigma pembelajaran dari ketergantungan penuh pada label menjadi pemanfaatan pola intrinsik data tabular yang tidak berlabel, sehingga sangat relevan untuk riset dengan batasan data berlabel.
- Keuntungan utama terletak pada peningkatan kualitas representasi awal, optimalisasi penggunaan data unlabeled, dan ketangguhan model saat data berlabel sangat sedikit (few-shot scenario).

### Transisi ke Slide Berikutnya

Untuk memahami bagaimana metode-metode ini diimplementasikan secara praktis dan dibandingkan dengan pendekatan konvensional, mari kita lanjutkan ke slide berikutnya yang akan membedah perbedaan alur kerja lengkap antara Self-Supervised Learning dan Supervised Learning, beserta contoh eksperimen perbandingan penggunaan proporsi data berlabel versus tidak berlabel.

---

## Slide 024 - Self-Supervised vs Supervised Learning: Alur Lengkap

### Narasi

Slide ini memetakan secara eksplisit perbedaan mendasar antara alur kerja pembelajaran terawasi (*supervised learning*) tradisional dengan pembelajaran tanpa pengawasan sendiri (*self-supervised learning*), khususnya dalam ekosistem data tabular. Pada pendekatan *supervised learning*, prosesnya bersifat monolitik dan langsung: seluruh data yang tersedia, baik vektor fitur maupun target label, dimasukkan sekaligus ke dalam algoritma untuk melakukan pelatihan penuh hingga menghasilkan model akhir. Pendekatan ini sangat bergantung pada ketersediaan dataset berlabel yang lengkap, konsisten, dan berkualitas tinggi sejak tahap awal pengumpulan data.

Sebaliknya, alur *self-supervised learning* dirancang sebagai proses dua tahap yang modular dan jauh lebih efisien dalam memanfaatkan potensi data tidak berlabel. Tahap pertama adalah *pretraining*. Di sinilah kita menerapkan mekanisme yang telah dibahas pada slide sebelumnya—seperti *contrastive learning*, *masked autoencoding*, *pretext task*, atau *denoising*—kepada seluruh kumpulan data hanya menggunakan fitur tanpa memerlukan label sama sekali. Tujuan utamanya bukan untuk menyelesaikan tugas prediksi bisnis atau klinis, melainkan agar jaringan saraf mempelajari struktur intrinsik, korelasi antar-fitur, dan manifold distribusi data. Hasil dari tahap ini adalah representasi fitur yang sudah matang, robust, dan siap pakai. Tahap kedua adalah *fine-tuning*. Representasi yang telah dipelajari tersebut kemudian digunakan sebagai titik awal atau arsitektur dasar, lalu dilatih ulang hanya dengan subset kecil data yang berlabel. Proses ini secara signifikan mengurangi kebutuhan komputasi, mempercepat konvergensi, dan meminimalkan risiko *overfitting* ketika data label langka.

Contoh praktis pada slide ini mengilustrasikan desain eksperimen yang sangat relevan untuk penelitian tingkat magister. Misalkan Anda mengakses 100% data operasional institusi, namun hanya 10% di antaranya yang berhasil diverifikasi dan diberi label oleh pakar domain. Dengan alur *self-supervised*, Anda melakukan *pretraining* pada seluruh 100% data untuk membangun representasi yang kaya, kemudian melakukan *fine-tuning* hanya pada 10% data berlabel tersebut. Sebagai kontrol ketat, Anda juga melatih baseline *supervised learning* konvensional yang hanya "melihat" 10% data berlabel itu saja tanpa fase *pretraining*. Dalam literatur dan praktik industri terkini, model berbasis *self-supervised* hampir consistently menunjukkan akurasi generalisasi yang lebih tinggi, stabilitas optimasi yang lebih baik selama *fine-tuning*, serta ketahanan yang lebih kuat terhadap kebisingan data. Rancangan perbandingan semacam ini menjadi standar metodologis untuk membuktikan nilai tambah representasi yang dipelajari secara mandiri versus pelatihan langsung dari nol.

### Inti yang Harus Ditekankan

- Alur *self-supervised learning* memecah proses menjadi dua fase terpisah: *pretraining* pada data tanpa label untuk ekstraksi representasi umum, dilanjutkan *fine-tuning* pada subset kecil berlabel untuk adaptasi tugas spesifik.
- Pendekatan ini secara fundamental mengurangi ketergantungan pada anotasi masif; representasi awal yang berkualitas memungkinkan performa prediktif tinggi bahkan dengan rasio data berlabel yang sangat minim.
- Dalam konteks penelitian S2, perbandingan ketat antara *SSL + fine-tuning* versus *supervised murni pada data terbatas* harus menjadi protokol evaluasi wajib untuk mengukur peningkatan *generalization*, efisiensi sumber daya, dan robustness model.
- Blok *pretraining* dan *fine-tuning* dalam alur ini akan dijalankan oleh berbagai arsitektur *deep tabular* yang akan kita bedah secara teknis pada slide berikutnya.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana alur *self-supervised* bekerja secara konseptual dan mengapa ia menawarkan keunggulan empiris dalam skenario data terbatas, langkah selanjutnya adalah melihat peta lengkap arsitektur *deep tabular learning* yang bisa kita pilih untuk mengimplementasikan kedua tahap tersebut, mulai dari jaringan feed-forward klasik hingga transformer khusus tabular, serta strategi hibrida yang menggabungkan kekuatan neural network dengan model tree-based.

---

## Slide 025 - Deep Tabular Learning: Peta Umum

### Narasi

Slide ini menyajikan peta komprehensif dari ekosistem *Deep Tabular Learning*, yang mengorganisir berbagai arsitektur dan metodologi menjadi beberapa cabang utama. Pada tingkat paling dasar, kita memiliki pendekatan berbasis jaringan saraf standar seperti *Multi-Layer Perceptron* (MLP) dan varian arsitektur residual seperti ResNet yang diadaptasi khusus untuk data tabel. Pendekatan ini mengandalkan transformasi fitur numerik secara langsung melalui lapisan *fully connected*. Namun, tantangan fundamental pada data tabular sering kali terletak pada heterogenitas tipe data, khususnya fitur kategorikal. Di sinilah teknik *Categorical Embedding* berperan krusial, yaitu memetakan variabel diskrit ke dalam ruang vektor berdimensi rendah yang mempertahankan hubungan semantik antar kategori, sehingga dapat diproses secara efisien oleh jaringan saraf tanpa menyebabkan ledakan dimensi.

Seiring evolusi arsitektur, muncul model-model yang dirancang khusus untuk struktur tabular. *TabNet* memperkenalkan mekanisme *attention-based* yang memungkinkan model memilih subset fitur relevan secara adaptif pada setiap langkah keputusan, meningkatkan interpretabilitas dan efisiensi komputasi. Di sisi lain, *FT-Transformer* (*Feature-Tuned Transformer*) mengadopsi arsitektur transformer yang awalnya populer di bidang pemrosesan bahasa alami, dengan modifikasi khusus agar mampu menangani campuran fitur numerik dan kategorikal secara simultan tanpa memerlukan *pipeline* preprocessing yang rumit. Jika merujuk pada slide sebelumnya tentang alur *Self-Supervised vs Supervised Learning*, maka cabang *Self-Supervised Tabular* merupakan implementasi praktis dari konsep pretraining pada data tanpa label, dilanjutkan dengan *fine-tuning* pada subset kecil berlabel untuk mengekstrak representasi yang lebih robust sebelum tahap prediksi akhir.

Salah satu strategi paling efektif dalam praktik industri dan riset mutakhir adalah pendekatan *Hybrid Neural + GBDT*. Dalam skema ini, model neural berfungsi sebagai *feature extractor* atau pembangkit representasi laten yang menangkap pola non-linear kompleks, sementara model *Gradient Boosted Decision Trees* (GBDT) bertindak sebagai *final estimator*. Teknik ini sering diimplementasikan melalui *stacking*, di mana prediksi intermediate atau aktivasi tersembunyi dari jaringan saraf digunakan sebagai fitur input baru untuk algoritma ensemble seperti CatBoost, LightGBM, atau XGBoost. Kombinasi ini memanfaatkan keunggulan kapasitas representasi neural sekaligus mengoptimalkan stabilitas, penanganan *missing values*, dan efisiensi pelatihan yang menjadi keunggulan khas GBDT.

Pemahaman terhadap hierarki dan hubungan antar cabang dalam peta ini bukan sekadar klasifikasi teoretis, melainkan fondasi kritis untuk perancangan eksperimen penelitian jenjang magister. Setiap titik dalam pohon arsitektur memiliki asumsi data, kebutuhan komputasi, dan trade-off interpretabilitas yang berbeda. Memilih pendekatan yang tepat harus didasarkan pada karakteristik dataset, ketersediaan label, dan tujuan riset yang spesifik, yang kemudian akan mengarah pada evaluasi empiris yang terukur dan dapat direproduksi.

### Inti yang Harus Ditekankan

- Ekosistem Deep Tabular Learning telah berevolusi dari arsitektur dasar (MLP/ResNet) menuju model khusus tabular (TabNet, FT-Transformer) dan integrasi self-supervised learning untuk ekstraksi representasi yang lebih kuat.
- Pendekatan hybrid menggabungkan kekuatan representasi neural dengan stabilitas prediktif GBDT melalui teknik stacking, di mana neural menghasilkan fitur laten dan GBDT (CatBoost/LightGBM/XGBoost) melakukan prediksi akhir.
- Pemilihan arsitektur harus diselaraskan dengan karakteristik data (ukuran dataset, cardinality kategorikal, ketersediaan label) dan tujuan metodologis riset.
- Peta ini berfungsi sebagai kerangka konseptual untuk merancang baseline yang kuat dan menghindari pemilihan model yang tidak sesuai dengan sifat masalah.

### Transisi ke Slide Berikutnya

Dengan memahami lanskap arsitektural dan potensi kombinasi model tersebut, langkah selanjutnya adalah menguji klaim performa masing-masing pendekatan secara empiris. Mari kita tinjau hasil studi komparatif dari literatur terkini mengenai bagaimana GBDT dan model neural tabular bersaing di berbagai skenario dataset.

---

## Slide 026 - Studi Komparatif: GBDT vs Neural Tabular Model

### Narasi

Setelah membahas peta umum pendekatan deep learning untuk data tabular dan konsep hybrid yang menggabungkan model pohon dengan jaringan saraf pada slide sebelumnya, kini kita akan menyoroti perbandingan langsung antara algoritma berbasis gradient boosting decision tree (GBDT) seperti XGBoost, LightGBM, dan CatBoost, versus model neural tabular modern seperti MLP, TabNet, dan FT-Transformer. Perbandingan ini sangat krusial dalam praktik data mining tingkat lanjut karena menentukan strategi pemilihan model yang paling efisien dan akurat sesuai karakteristik data.

Berdasarkan sintesis literatur terkini, performa masing-masing arsitektur sangat bergantung pada profil dataset. Untuk data tabular berukuran kecil hingga menengah, GBDT secara konsisten menunjukkan hasil terbaik atau setidaknya setara dengan model neural lainnya. Ketika skala data meningkat menjadi besar, GBDT tetap bertahan sebagai pilihan utama atau setara dengan model neural, berkat optimisasi komputasi dan implementasi paralel yang sudah sangat matang. Pada kasus dengan fitur kategorikal ber-cardinality tinggi, GBDT menangani struktur tersebut secara native dengan cukup baik, sementara MLP memerlukan teknik embedding yang hati-hati agar tidak menyebabkan overfitting atau ledakan dimensi. Di sisi lain, ketika data mengandung modalitas non-tabular seperti teks atau gambar, model neural jelas mendominasi karena kemampuan representasi fitur yang jauh lebih fleksibel dibandingkan pohon keputusan.

Kesimpulan awal dari berbagai benchmark dan studi komparatif adalah bahwa GBDT masih memegang posisi sebagai strong baseline yang sangat sulit dikalahkan pada data tabular murni. Hal ini bukan berarti model neural tabular tidak memiliki nilai, melainkan bahwa GBDT telah mencapai kematangan algoritma yang luar biasa dalam menangkap pola hierarkis dan interaksi fitur tanpa memerlukan preprocessing intensif. Bagi peneliti dan praktisi di jenjang magister, pemahaman ini menjadi fondasi metodologis: sebelum merancang arsitektur neural yang kompleks, wajib membangun baseline kuat berbasis GBDT untuk memastikan setiap peningkatan performa benar-benar signifikan secara statistik dan komputasional, bukan sekadar artefak dari tuning hyperparameter.

### Inti yang Harus Ditekankan

- Performa model sangat kontekstual terhadap ukuran dataset, cardinality fitur kategorikal, dan jenis modalitas data.
- GBDT tetap menjadi standar emas (strong baseline) untuk data tabular murni karena kematangan algoritma dan efisiensi komputasi.
- Dalam penelitian S2, penggunaan GBDT sebagai baseline mutlak diperlukan untuk memvalidasi kontribusi nyata dari model neural yang diusulkan.
- Model neural tabular unggul ketika data memiliki struktur laten kompleks atau melibatkan multimodalitas (teks/gambar).

### Transisi ke Slide Berikutnya

Jika GBDT terbukti begitu dominan dalam berbagai skenario, pertanyaan natural berikutnya adalah mengapa model-model ini sering kali mengalahkan arsitektur neural yang lebih modern. Pada slide selanjutnya, kita akan bedah secara mendalam faktor-faktor teknis dan teoretis di balik dominasi GBDT, mulai dari inductive bias, penanganan missing value, hingga efisiensi tuning hyperparameter.

---

## Slide 027 - Analisis: Mengapa GBDT Sering Menang?

### Narasi

Setelah melihat hasil komparatif pada slide sebelumnya yang menunjukkan dominasi atau kesetaraan Gradient Boosted Decision Trees (GBDT) dibandingkan model neural pada berbagai skenario data tabular, kini kita perlu membedah secara metodologis alasan di balik performa tersebut. GBDT bukan sekadar algoritma yang populer karena faktor tren, melainkan memiliki karakteristik intrinsik yang sangat selaras dengan sifat alami data tabular dalam konteks penelitian empiris.

Pertama, GBDT memiliki *inductive bias* yang sangat cocok untuk data tabular. Struktur pohon keputusan secara inheren memodelkan pemisahan ruang fitur berdasarkan threshold pada satu fitur pada setiap node. Asumsi ini sering kali sangat presisi karena data tabular umumnya mengandung pola diskrit atau segmentasi yang dapat dipisahkan secara hierarkis. Kedua, algoritma ini sepenuhnya *invariant terhadap skala*. Karena pengambilan keputusan hanya bergantung pada urutan nilai relatif untuk menentukan split point, proses normalisasi atau standardisasi menjadi tidak diperlukan, sehingga menghemat waktu preprocessing dan menghindari risiko distorsi data akibat scaling yang kurang tepat.

Ketiga, kemampuan *handling missing values secara native* menjadi keunggulan signifikan. Algoritma modern seperti XGBoost, LightGBM, atau CatBoost secara internal mempelajari arah mana node harus mengarahkan sampel dengan nilai hilang selama proses training. Hal ini menghilangkan kebutuhan akan teknik imputasi yang bisa memperkenalkan bias atau noise, sekaligus menjaga integritas distribusi data asli. Keempat, dari sisi efisiensi komputasi, GBDT biasanya lebih cepat dalam tahap training pada dataset berukuran kecil hingga menengah, berkat optimisasi histogram-based splitting dan parallel processing yang telah matang. Kelima, jumlah hyperparameter yang relatif terbatas membuat proses tuning lebih terarah dan stabil dibandingkan model neural yang memerlukan penyesuaian learning rate, arsitektur hidden layer, dropout, weight decay, dan lain-lain secara bersamaan.

Namun, dominasi GBDT bukanlah mutlak. Model neural justru unggul ketika data menyimpan struktur laten yang kompleks dan tidak mudah dipecah oleh garis lurus atau threshold sederhana. Selain itu, pada dataset dengan fitur kategorikal ber-cardinality sangat tinggi, representasi berbasis embedding pada neural network mampu menangkap hubungan semantik dan densitas yang jauh lebih kaya dibandingkan pendekatan tradisional. Dalam konteks penelitian tingkat magister, hal ini menegaskan bahwa klaim keunggulan suatu model harus dibuktikan melalui ablation study dan analisis error yang ketat, bukan sekadar asumsi arsitektural.

### Inti yang Harus Ditekankan

- GBDT unggul karena kecocokan *inductive bias*-nya dengan pola diskrit/data tabular, ketahanan terhadap skala, penanganan missing value bawaan, serta kemudahan tuning yang menghasilkan baseline yang robust.
- Model neural lebih kompetitif saat menghadapi struktur laten non-linear kompleks atau fitur kategorikal ber-cardinality tinggi yang membutuhkan representasi embedding untuk menangkap relasi semantik.
- Dalam praktik penelitian, GBDT harus dijadikan baseline utama; klaim keunggulan neural model hanya dapat diterima jika didukung oleh bukti eksperimental yang konsisten melampaui beberapa dataset dan kondisi kontrol.

### Transisi ke Slide Berikutnya

Memahami mengapa GBDT menjadi baseline yang kuat membawa kita pada implikasi praktisnya dalam desain eksperimen. Pada slide berikutnya, kita akan membahas bagaimana *inductive bias* ini diterjemahkan ke dalam praktik riset nyata, termasuk strategi pemilihan model dan langkah-langkah validasi yang ketat agar kesimpulan ilmiah tetap robust.

---

## Slide 028 - Inductive Bias dalam Konteks Praktik

### Narasi

Pada slide sebelumnya, kita telah menguraikan mengapa Gradient Boosted Decision Trees seperti XGBoost, LightGBM, atau CatBoost sering mendominasi benchmark data tabular. Salah satu alasan fundamentalnya terletak pada inductive bias bawaan pohon keputusan, yaitu asumsi bahwa ruang fitur dapat dipartisi secara hierarkis melalui threshold pada satu fitur pada setiap node. Asumsi ini sangat selaras dengan struktur data tabular yang umumnya bersifat sparse, heterogen, dan memiliki interaksi non-linear yang tidak selalu teramati secara visual. Untuk mengoperasionalkan konsep ini ke dalam praktik penelitian, mari kita tinjau skenario eksperimental sederhana: sebuah dataset berukuran 100.000 baris, terdiri dari 10 fitur numerik, dengan target biner. Dalam konfigurasi ini, GBDT cenderung menghasilkan performa yang kuat bahkan dengan penyetelan hyperparameter yang minim. Hal ini terjadi karena mekanisme boosting secara alami melakukan reduksi bias dan varians secara bertahap, sementara struktur pohonnya secara inheren tahan terhadap outlier dan tidak memerlukan normalisasi skala fitur.

Sebaliknya, ketika kita beralih ke Multilayer Perceptron (MLP), inductive bias-nya berubah total menjadi optimisasi gradien pada manifold kontinu yang halus. Tanpa preprocessing scaling yang tepat, distribusi input yang tidak terstandarisasi akan menyebabkan permukaan loss yang tidak kondusif, memicu masalah seperti vanishing atau exploding gradients. MLP juga menuntut perhatian serius pada tuning learning rate, pemilihan ukuran hidden layer, serta penerapan regularisasi (seperti dropout atau weight decay) untuk mencegah overfitting pada dataset berukuran sedang. Di sisi lain, arsitektur modern seperti FT-Transformer menawarkan fleksibilitas representasi yang jauh lebih tinggi berkat mekanisme self-attention yang mampu menangkap dependensi lintas fitur secara global. Namun, fleksibilitas ini dibayar dengan biaya inductive bias yang lebih longgar: model ini membutuhkan volume data yang lebih besar dan kapasitas komputasi yang signifikan agar attention head dapat belajar pola yang bermakna daripada hanya menghafas noise. Dengan kata lain, semakin longgar asumsi struktural suatu model, semakin banyak data dan regulasi yang diperlukan untuk mengarahkannya ke solusi yang generalizable.

Implikasi metodologisnya bagi penelitian tingkat magister sangat jelas. Kita tidak boleh terjebak pada narasi bahwa model deep learning secara otomatis lebih superior karena kompleksitas arsitekturnya. Inductive bias bukanlah kelemahan, melainkan alat desain yang harus dicocokkan dengan karakteristik data dan pertanyaan penelitian. Oleh karena itu, panduan kerja yang disarankan adalah menetapkan GBDT sebagai baseline utama yang kokoh, kemudian menggunakan neural tabular model sebagai metode pembanding yang dikontrol ketat. Klaim keunggulan salah satu pendekatan hanya dapat ditarik setelah dilakukan evaluasi sistematis melintasi beberapa dataset, analisis error, dan pengujian stabilitas, bukan berdasarkan satu kali percobaan yang terbatas. Pendekatan ini memastikan bahwa setiap kesimpulan yang dihasilkan bersifat empiris, reproducible, dan siap dikembangkan menjadi kontribusi ilmiah yang valid.

### Inti yang Harus Ditekankan

- Inductive bias menentukan efisiensi pembelajaran dan stabilitas model pada tipe data tertentu; bias yang sesuai dengan struktur data justru mempercepat konvergensi dan meningkatkan generalisasi.
- GBDT menjadi baseline default untuk data tabular berukuran kecil hingga menengah karena ketahanannya terhadap skala, penanganan missing value native, dan kebutuhan tuning yang relatif ringan.
- Neural tabular model (MLP, FT-Transformer) memerlukan preprocessing ketat, tuning arsitektur, dan sumber daya komputasi lebih besar karena asumsi strukturalnya yang longgar dan ketergantungan pada optimisasi gradien.
- Validasi klaim performa harus berbasis perbandingan sistematis dan multi-dataset; hindari bias konfirmasi yang secara prematur menganggap model neural selalu unggul tanpa kontrol eksperimen yang rigor.

### Transisi ke Slide Berikutnya

Prinsip-prinsip perbandingan yang adil dan penentuan baseline yang metodologis ini akan langsung diimplementasikan pada sesi praktikum berikutnya, di mana kalian akan membangun pipeline eksperimen terstruktur untuk membandingkan LightGBM atau CatBoost dengan neural tabular model secara langsung pada dataset nyata.

---

## Slide 029 - Praktikum 4: Gradient Boosting vs Neural Tabular Model

### Narasi

Berlanjut dari pembahasan sebelumnya mengenai inductive bias dan bagaimana karakteristik algoritma memengaruhi perilaku pembelajaran, kita kini memasuki Praktikum 4 yang secara spesifik dirancang untuk menguji perbedaan kinerja antara Gradient Boosting Decision Trees (GBDT) dan Neural Tabular Models dalam skenario empiris. Pada slide ini, kita menetapkan tiga tujuan utama yang harus dicapai selama pelaksanaan praktikum. Pertama, mahasiswa wajib merancang sebuah *experimental pipeline* yang benar-benar adil (*fair*). Keadilan eksperimen menuntut keseragaman pada seluruh tahap persiapan data, mulai dari pembatasan fitur, penanganan nilai hilang, hingga transformasi variabel, sehingga selisih performa yang terukur murni berasal dari kapabilitas intrinsik model, bukan dari bias prosedur atau preprocessing yang timpang.

Kedua, praktikum ini bertujuan membandingkan performa GBDT (dengan fokus pada LightGBM atau CatBoost) terhadap berbagai arsitektur neural tabular. Perbandingan ini tidak bermaksud mencari "juara tunggal", melainkan menempatkan masing-masing pendekatan dalam konteks penggunaannya. Ketiga, dan paling kritis untuk tingkat magister, kita harus menganalisis karakteristik dataset apa yang menyebabkan perbedaan performa tersebut muncul. Apakah dominasi fitur kategorikal membuat model tree lebih unggul karena kemampuannya menangani splitting diskrit tanpa scaling? Atau justru struktur data yang sangat besar dan dense memungkinkan neural network mengeksploitasi interaksi non-linear yang kompleks? Untuk menjawab pertanyaan ini, dataset yang digunakan dapat bersumber dari proyek penelitian mandiri atau dataset publik yang telah disediakan. Pastikan dataset yang dipilih memiliki kombinasi fitur numerik dan kategorikal dengan ukuran sampel yang cukup besar, sehingga mampu memicu dinamika kompetisi yang jelas antara kedua paradigma pembelajaran mesin ini.

Rancangan tujuan ini akan segera diterjemahkan ke dalam langkah teknis yang konkret pada slide berikutnya. Kita akan membahas bagaimana mengimplementasikan *stratified split*, menyamakan *preprocessing pipeline* untuk semua model, serta menentukan metrik evaluasi dan pengukuran efisiensi komputasi yang tepat. Dengan mengikuti alur ini, diharapkan mahasiswa tidak hanya mendapatkan hasil benchmarking, tetapi juga pemahaman metodologis yang mendalam tentang kapan dan mengapa suatu model lebih sesuai untuk masalah tertentu.

### Inti yang Harus Ditekankan

- Kesetaraan eksperimen (*fair comparison*) adalah prasyarat mutlak; perbedaan hasil harus disebabkan oleh arsitektur model, bukan oleh variasi pipeline, preprocessing, atau strategi tuning yang tidak konsisten.
- Pemilihan dataset harus merepresentasikan kompleksitas nyata (campuran fitur numerik-kategorikal, ukuran sedang-besar) agar analisis inductive bias, kapasitas representasi, dan kebutuhan data dapat teruji secara valid.
- Fokus analisis bergeser dari sekadar "mana yang akurasinya lebih tinggi" menjadi "mengapa dan pada kondisi dataset seperti apa masing-masing model unggul", yang merupakan fondasi metodologis untuk penulisan paper penelitian tingkat magister.

### Transisi ke Slide Berikutnya

Setelah menetapkan tujuan dan memilih dataset yang tepat, langkah selanjutnya adalah menerjemahkan konsep tersebut ke dalam kerangka kerja teknis. Mari kita bahas secara rinci bagaimana mendesain eksperimen ini mulai dari pembagian data, standar pra-pemrosesan, hingga protokol evaluasi yang akan kita gunakan.

---

## Slide 030 - Desain Eksperimen Praktikum 4

### Narasi

Pada slide ini, kita merinci desain eksperimen yang menjadi fondasi metodologis Praktikum 4. Setelah sebelumnya menetapkan tujuan komparatif dan memilih dataset yang relevan pada slide terdahulu, langkah selanjutnya adalah menyusun alur eksperimen yang ketat, transparan, dan adil. Desain ini dirancang khusus untuk memenuhi standar penelitian jenjang magister, di mana validitas kesimpulan bergantung pada kontrol variabel yang cermat dan prosedur replikasi yang jelas.

Alur eksperimen dimulai dari dataset yang telah ditetapkan. Tahap pertama adalah melakukan train/test split secara stratifikasi dengan rasio 80:20. Pembagian secara stratifikasi wajib diterapkan untuk menjaga proporsi kelas target tetap konsisten pada kedua subset, sehingga menghindari bias evaluasi akibat ketidakseimbangan distribusi. Setelah data terpisah, kedua model akan melewati preprocessing pipeline yang identik. Untuk fitur numerik, kita menerapkan standardisasi agar setiap fitur memiliki mean nol dan varians satu, yang mempercepat konvergensi dan stabilisasi gradien pada model neural. Untuk fitur kategorikal, transformasi dapat berupa one-hot encoding atau embedding layer, disesuaikan dengan kebutuhan arsitektur masing-masing model. Konsistensi preprocessing ini menjamin bahwa perbedaan performa yang muncul murni berasal dari kapasitas representasi model, bukan dari perbedaan cara penanganan fitur.

Pada tahap pemodelan, kita membandingkan dua paradigma utama: GBDT yang direpresentasikan oleh LightGBM atau CatBoost, serta model neural tabular seperti MLP, TabNet, atau FT-Transformer. GBDT umumnya menunjukkan ketahanan tinggi terhadap outlier dan fitur kategorikal tanpa preprocessing berat, sementara model neural menawarkan fleksibilitas dalam menangkap interaksi non-linear kompleks melalui lapisan laten. Evaluasi tidak dibatasi pada akurasi saja, melainkan mencakup F1-Score dan ROC-AUC sesuai dengan sifat masalah klasifikasi yang ditangani. Selain kualitas prediksi, kita juga mencatat runtime training dan inference untuk menilai trade-off antara akurasi dan efisiensi komputasi, aspek yang semakin krusial dalam skenario deployment nyata.

Langkah akhir dari desain ini adalah analisis kritis: kapan dan mengapa satu model unggul dibandingkan lainnya? Mahasiswa diharapkan mampu menghubungkan hasil metrik dengan karakteristik intrinsik dataset, seperti dimensi fitur, tingkat noise, kardinalitas kategorikal, atau pola ketergantungan antarvariabel. Pemahaman ini akan menjadi bahan baku untuk menulis bab metodologi dan diskusi hasil penelitian secara akademis. Untuk menerjemahkan desain ini ke dalam kode yang executable, kita perlu menyiapkan ekosistem pustaka Python yang tepat, yang akan kita uraikan secara teknis pada slide berikutnya.

### Inti yang Harus Ditekankan

- Kesetaraan eksperimen (fair comparison) dicapai melalui pipeline preprocessing yang identik dan pembagian data stratifikasi 80:20.
- Evaluasi harus multidimensi: kombinasikan metrik prediktif (Accuracy, F1, ROC-AUC) dengan metrik efisiensi (runtime training & inference).
- Analisis kinerja model tidak boleh berhenti pada angka, tetapi harus dikaitkan secara eksplisit dengan karakteristik dataset dan mekanisme internal masing-maris algoritma.
- Reproducibility dan kontrol variabel menjadi syarat mutlak untuk menghasilkan temuan yang layak dipublikasikan dalam venue bereputasi.

### Transisi ke Slide Berikutnya

Dengan kerangka eksperimen yang sudah mapan, langkah teknis berikutnya adalah menyiapkan lingkungan pemrograman dan pustaka pendukung. Mari kita lihat modul-modul Python yang akan kita impor untuk mengimplementasikan pipeline GBDT maupun neural tabular secara efisien.

---

## Slide 031 - Kode Python: Pustaka yang Digunakan

### Narasi

Mengacu pada desain eksperimen Praktikum 4 yang telah kita susun pada slide sebelumnya, langkah implementasi dimulai dengan pemilihan pustaka yang tepat untuk mewakili dua paradigma utama dalam pembelajaran data tabular: model berbasis ensemble tree dan model neural representation learning. Untuk kategori GBDM (Gradient Boosting Decision Trees), kita akan mengimpor `LGBMClassifier` dari LightGBM, `CatBoostClassifier` dari CatBoost, serta modul `xgb` untuk XGBoost. Ketiga pustaka ini tidak hanya menyediakan antarmuka yang kompatibel dengan ekosistem scikit-learn, tetapi juga mengoptimalkan aspek komputasi yang berbeda: LightGBM mengandalkan histogram-based binning dan GOSS untuk efisiensi memori, CatBoost menawarkan leaf-wise growth dengan penanganan missing value native, sedangkan XGBoost memberikan kontrol granular atas regularisasi L1/L2 dan fungsi loss kustom. Pemilihan ketiganya memungkinkan kita melakukan benchmarking komprehensif terhadap trade-off antara kecepatan training, stabilitas numerik, dan akurasi prediksi.

Di sisi representasi learning, baseline neural network dapat diimplementasikan langsung melalui `MLPClassifier` dari scikit-learn. Namun, untuk menjembatani materi dengan perkembangan mutakhir yang relevan dengan penelitian tingkat magister, kita dapat mengintegrasikan arsitektur seperti TabNet atau FT-Transformer. Khusus untuk TabNet, instalasi paket `pytorch-tabnet` diperlukan, yang kemudian diakses melalui `TabNetClassifier`. Arsitektur ini memperkenalkan mekanisme sparse attention dan multi-step feature extractor yang dirancang khusus untuk menangkap interaksi non-linear antar fitur tabular tanpa memerlukan encoding manual yang masif, sehingga membuka peluang eksplorasi bagaimana representasi laten terbentuk sebelum masuk ke lapisan klasifikasi.

Dalam konteks metodologi penelitian, validitas eksperimen sangat bergantung pada konsistensi proses penyetelan hiperparameter dan reproduktibilitas kode. Oleh karena itu, kita disarankan menghindari grid search brute-force dan beralih ke `RandomizedSearchCV` atau framework `Optuna` untuk mengeksplorasi ruang parameter secara probabilistik dan adaptif. Optuna khususnya sangat direkomendasikan karena mendukung pruning otomatis dan Bayesian optimization yang mempercepat konvergensi menuju konfigurasi optimal sambil mengurangi beban komputasi. Selain itu, pastikan selalu menetapkan `random_state` atau `seed` pada setiap komponen pipeline, termasuk pembagi dataset, scaler, encoder, dan estimator model. Penetapan seed secara ketat adalah prasyarat fundamental untuk menjamin bahwa setiap iterasi eksperimen menghasilkan output yang identik, sehingga perbedaan metrik evaluasi yang diamati benar-benar mencerminkan pengaruh arsitektur atau strategi preprocessing, bukan variasi acak.

### Inti yang Harus Ditekankan

- Pustaka GBDT (LightGBM, CatBoost, XGBoost) dan Neural Tabular (MLP, TabNet) dipilih berdasarkan kemampuan masing-masing dalam menangani karakteristik data tabular, mulai dari efisiensi komputasi hingga kapasitas representasi non-linear.
- Penggunaan `RandomizedSearchCV` atau `Optuna` merupakan standar praktik penelitian modern untuk hyperparameter tuning yang efisien, terutama ketika ruang pencarian bersifat tinggi-dimensi dan sumber daya komputasi terbatas.
- Penetapan `random_seed` secara konsisten pada seluruh komponen eksperimen adalah kewajiban metodologis untuk menjamin reproduktibilitas, yang menjadi dasar bagi analisis ablation, error analysis, dan generalisasi model di tahap evaluasi.

### Transisi ke Slide Berikutnya

Setelah memahami ekosistem pustaka dan prinsip reproduktibilitas yang harus diterapkan, kita akan langsung menerapkannya dalam struktur kode yang terorganisir. Pada slide berikutnya, kita akan membahas contoh konkret pembuatan pipeline preprocessing dan klasifikasi GBDT menggunakan kombinasi `ColumnTransformer` dan `Pipeline` dari scikit-learn, lengkap dengan penanganan terpisah untuk fitur numerik dan kategorikal sebelum masuk ke lapisan model.

---

## Slide 032 - Contoh: Pipeline GBDT dengan scikit-learn

### Narasi

Pada slide sebelumnya, kita telah menyiapkan lingkungan pemrograman dengan mengimpor berbagai pustaka inti untuk model ensemble berbasis tree seperti LightGBM, CatBoost, dan XGBoost, serta framework neural tabular. Langkah metodologis berikutnya adalah mengemas model tersebut ke dalam alur kerja yang terstruktur agar proses preprocessing dan pelatihan berjalan secara otomatis, modular, dan bebas dari kontaminasi data. Implementasi ini menggunakan arsitektur *pipeline* bawaan scikit-learn yang sangat direkomendasikan untuk penelitian berbasis data tabel.

Kode pada slide ini dimulai dengan pendefinisian dua vektor fitur: `numeric_features` yang berisi age, income, dan balance, serta `categorical_features` yang mencakup job, education, dan marital. Untuk menangani heterogenitas tipe data secara simultan, kita memanfaatkan `ColumnTransformer`. Transformator ini memetakan operasi spesifik ke kolom tertentu melalui tuple konfigurasi. Pada bagian `"num"`, `StandardScaler` diterapkan untuk menstandarisasi distribusi fitur numerik ke mean nol dan varians satu, yang penting untuk stabilitas numerik pada algoritma berbasis gradient. Sementara itu, pada bagian `"cat"`, `OneHotEncoder` dikonfigurasi dengan `handle_unknown="ignore"` agar sistem mampu menangani kategori test-time yang tidak pernah muncul selama fase training tanpa mengganggu aliran komputasi.

Setelah blok preprocessing didefinisikan, kita merakitnya bersama classifier menggunakan objek `Pipeline`. Urutan `("preprocess", preprocessor)` dilanjutkan dengan `("classifier", LGBMClassifier(n_estimators=500, random_state=42))` menciptakan grafik eksekusi yang menjamin setiap sampel data melewati transformasi scaler dan encoder secara berurutan sebelum dihitung fungsi loss-nya. Penetapan `random_state=42` pada LightGBMClassifier merupakan praktik disiplin penelitian untuk menjamin determinisme dan reproduktibilitas hasil eksperimen, sebuah syarat mutlak ketika melakukan ablation study atau perbandingan baseline di jenjang magister.

Eksekusi `model.fit(X_train, y_train)` kemudian menjalankan seluruh rantai ini secara teroptimasi. Keunggulan fundamental pipeline adalah pencegahan *data leakage* selama prosedur validasi silang, karena transformasi hanya dihitung dari fold training dan ditransfer ke fold validation. Selain itu, struktur ini memudahkan hyperparameter tuning serentak antar preprocessing dan model. Namun, perlu dicatat bahwa pendekatan ini masih mengandalkan teknik encoding statis. Untuk mengeksplorasi representasi fitur yang lebih dinamis dan non-linear, kita akan beralih ke implementasi arsitektur neural tabular menggunakan PyTorch pada slide berikutnya.

### Inti yang Harus Ditekankan

- Gunakan `Pipeline` dan `ColumnTransformer` untuk mengotomatisasi preprocessing dan mencegah data leakage saat validasi silang atau cross-validation.
- Pastikan `random_state` diset secara konsisten untuk menjamin reproduktibilitas eksperimen, sesuai standar penulisan paper ilmiah dan praktik riset S2.
- Pisahkan logika preprocessing numerik (`StandardScaler`) dan kategorikal (`OneHotEncoder`) secara eksplisit agar mudah dimodifikasi atau digantikan dengan teknik embedding di masa depan.

### Transisi ke Slide Berikutnya

Dengan pipeline scikit-learn yang solid sebagai baseline statistik-metrik, kita kini siap menggali pendekatan yang lebih adaptif. Pada slide berikutnya, kita akan melihat bagaimana arsitektur neural tabular dibangun langsung dari dasar menggunakan PyTorch, mulai dari mekanisme embedding vektor hingga forward pass jaringan saraf untuk menangkap interaksi non-linear antar fitur.

---

## Slide 033 - Contoh: Neural Tabular dengan PyTorch (Ringkas)

### Narasi

Setelah pada slide sebelumnya kita membahas implementasi model berbasis ensemble seperti LightGBM melalui pipeline scikit-learn, kini kita beralih ke pendekatan representasi pembelajaran mendalam untuk data tabular menggunakan PyTorch. Arsitektur `TabularMLP` yang ditampilkan merupakan kerangka kerja dasar yang dirancang khusus untuk menggabungkan karakteristik heterogen data tabular. Berbeda dengan teknik pra-pemrosesan tradisional yang sering mengandalkan one-hot encoding yang menyebabkan ledakan dimensi dan sparsitas, kelas ini memanfaatkan `nn.Embedding` untuk setiap variabel kategorikal. Setiap embedding dikonfigurasi dengan dimensi tetap (`emb_dim=8`), sehingga kardinalitas kategori yang tinggi tidak lagi menjadi beban komputasi yang signifikan. Dimensi total input dihitung secara dinamis sebagai jumlah fitur numerik ditambah hasil perkalian jumlah kolom kategorikal dengan dimensi embedding yang ditetapkan.

Pada metode `forward`, proses transformasi dan fusi fitur dilakukan secara diferensiable. Fitur kategorikal (`x_cat`) diproses melalui daftar embedding yang telah terdaftar, menghasilkan tensor representasi dense yang mempertahankan informasi ordinal maupun nominal. Tensor embedding tersebut kemudian digabungkan secara horizontal bersama fitur numerik (`x_num`) menggunakan `torch.cat`. Hasil penggabungan ini diteruskan ke jaringan saraf berlapis yang terdiri dari dua lapisan linear tersembunyi dengan aktivasi ReLU. Lapisan pertama memproyeksikan input ke ruang tersembunyi (`hidden=128`), diikuti oleh operasi `Dropout(0.3)` untuk secara aktif mengurangi ko-adaptasi neuron dan mencegah overfitting—strategi yang sangat krusial mengingat karakteristik data tabular yang umumnya berukuran terbatas dan mengandung noise. Lapisan kedua melakukan pemetaan kembali ke ruang tersembunyi sebelum akhirnya melewati lapisan output tunggal untuk menghasilkan skor logit atau regresi.

Implementasi arsitektur ini hanyalah fondasi awal dalam siklus eksperimen penelitian tingkat magister. Kesuksesan pelatihan model neural tabular sangat bergantung pada disiplin dalam protokol validasi dan optimasi. Anda wajib menerapkan pembagian data training dan validation yang proporsional, serta mengaktifkan mekanisme early stopping untuk menghentikan pelatihan tepat sebelum model mulai menghafal noise pada data latih. Penggunaan learning rate scheduling juga diperlukan agar konvergensi lebih stabil dan menghindari osilasi di sekitar minimum lokal. Selain itu, untuk memastikan validitas ilmiah dan memungkinkan perbandingan yang adil antar baseline atau variasi arsitektur, penyetelan random seed yang konsisten mutlak harus diterapkan di seluruh tahap preprocessing, inisialisasi bobot, hingga shuffling data.

### Inti yang Harus Ditekankan

- Embedding layer jauh lebih efisien dan scalable dibandingkan one-hot encoding untuk menangani fitur kategorikal dengan kardinalitas tinggi pada data tabular.
- Struktur MLP sederhana dengan dropout dan aktivasi ReLU sudah cukup efektif sebagai baseline kuat untuk masalah tabular sebelum mencoba arsitektur yang lebih kompleks atau custom.
- Praktik penelitian yang rigor memerlukan kontrol ketat terhadap random seed, early stopping, dan learning rate scheduling untuk menjamin reproduktibilitas, stabilitas konvergensi, dan pencegahan overfitting.

### Transisi ke Slide Berikutnya

Dengan arsitektur dan protokol pelatihan yang telah disiapkan, langkah selanjutnya adalah mengukur performa model secara objektif dan dapat dipertanggungjawabkan secara ilmiah. Kita akan membahas metrik evaluasi yang adil dan relevan untuk berbagai jenis tugas prediktif, serta praktik statistik yang diperlukan untuk melaporkan hasil penelitian secara kredibel.

---

## Slide 034 - Metrik Evaluasi yang Adil

### Narasi

Setelah kita membahas implementasi arsitektur neural tabular menggunakan PyTorch pada slide sebelumnya, tahap berikutnya yang menentukan kredibilitas penelitian adalah pemilihan dan pelaporan metrik evaluasi yang tepat. Pada konteks data mining berbasis tabel, tidak ada satu metrik tunggal yang universal. Untuk klasifikasi biner, kombinasi ROC-AUC, PR-AUC, dan F1-score memberikan gambaran komprehensif tentang kemampuan diskriminatif model di berbagai threshold probabilitas. PR-AUC khususnya sangat krusial ketika kelas minoritas memiliki kepentingan analitis tinggi, karena metrik ini lebih sensitif terhadap perubahan pada prediksi kelas positif daripada ROC-AUC. Untuk klasifikasi multiclass, Macro-F1 menjadi pilihan utama karena menghitung rata-rata F1 per kelas tanpa bias terhadap frekuensi kelas mayoritas, sementara Accuracy tetap relevan jika distribusi kelas relatif seimbang. Pada tugas regresi, RMSE memberikan penalti lebih besar terhadap error ekstrem, MAE menawarkan robustness terhadap outlier, dan R² membantu mengukur proporsi varians target yang berhasil dijelaskan oleh model.

Dalam praktik penelitian tingkat magister, pelaporan metrik saja tidak cukup; kita harus memastikan bahwa evaluasi dilakukan secara adil dan bebas dari bias implisit. Salah satu kesalahan metodologis yang sering terjadi adalah mengandalkan Accuracy pada dataset yang mengalami ketidakseimbangan kelas. Hal ini dapat menghasilkan skor yang menipu karena model cenderung memprediksi kelas mayoritas secara konsisten. Sebagai gantinya, wajib melaporkan confidence interval atau melakukan uji statistik seperti paired t-test, Wilcoxon signed-rank test, atau McNemar’s test untuk memverifikasi apakah perbedaan performa antar-model signifikan secara statistik atau hanya berasal dari variasi acak dalam pembagian data.

Selain pemilihan metrik, desain protokol evaluasi juga harus meminimalkan variabilitas hasil. Penggunaan repeated stratified cross-validation, misalnya skema 5x2 CV atau 10x5 CV, sangat disarankan karena menggabungkan pengulangan eksperimen dengan stratifikasi kelas, sehingga mengurangi ketergantungan pada satu split data tertentu. Di sisi lain, aspek komputasi tidak boleh diabaikan. Catat secara eksplisit waktu training, waktu inference, peak memory usage, dan kebutuhan hardware. Dalam konteks tabular learning modern, efisiensi komputasi sering kali menjadi faktor penentu adopsi model di lingkungan produksi, sekaligus menjadi bagian integral dari analisis trade-off yang harus dilaporkan dalam paper ilmiah.

Dengan kerangka evaluasi yang ketat ini, kita siap memasuki tahap interpretasi hasil Praktikum 4. Semua metrik, interval kepercayaan, catatan komputasi, dan temuan ablation study akan dituangkan ke dalam struktur analisis yang sistematis, menjawab pertanyaan-pertanyaan kritis mengenai signifikansi statistik, pengaruh skala data, kontribusi fitur kategorikal, serta keseimbangan antara akurasi dan kecepatan eksekusi.

### Inti yang Harus Ditekankan

- Hindari penggunaan Accuracy sebagai satu-satunya indikator performa pada data tidak seimbang; prioritaskan PR-AUC, Macro-F1, atau metrik berbasis rank sesuai karakteristik tugas.
- Validasi perbedaan performa harus didukung oleh interval kepercayaan atau uji statistik formal untuk menjamin klaim penelitian bersifat empiris dan bukan akibat noise sampling.
- Terapkan repeated stratified cross-validation dan dokumentasikan metrik komputasi (latency, throughput, memory footprint) sebagai standar reproduktibilitas riset data mining.

### Transisi ke Slide Berikutnya

Berdasarkan protokol evaluasi yang telah kita tetapkan, mari kita terapkan prinsip-prinsip tersebut secara konkret saat menguraikan hasil Praktikum 4. Kita akan membedah lima pertanyaan inti mulai dari identifikasi model terbaik, verifikasi signifikansi statistik, hingga analisis trade-off antara akurasi dan efisiensi, yang semuanya akan dirangkum menggunakan template kesimpulan yang terstruktur.

---

## Slide 035 - Interpretasi Hasil Praktikum 4

### Narasi

Setelah kita menekankan pentingnya pemilihan metrik yang adil dan penggunaan interval kepercayaan pada slide sebelumnya, saatnya kita menafsirkan secara kritis hasil dari Praktikum 4. Pada tahap ini, fokus kita bergeser dari sekadar menjalankan kode menuju analisis mendalam terhadap output eksperimen. Lima pertanyaan fundamental harus dijawab berdasarkan data yang telah kalian kumpulkan. Pertama, tentukan model mana yang memberikan performa tertinggi pada metrik utama tugas kalian, apakah itu PR-AUC untuk data yang tidak seimbang atau RMSE untuk tugas regresi. Kedua, verifikasi apakah selisih skor antar model benar-benar signifikan secara statistik. Jangan mengandalkan rata-rata tunggal; gunakan hasil repeated stratified cross-validation untuk menghitung confidence interval atau menerapkan uji statistik non-parametrik seperti Wilcoxon signed-rank test guna memastikan bahwa keunggulan satu model bukanlah fluktuasi acak. Ketiga, analisis dampak ukuran dataset terhadap stabilitas model. Perhatikan apakah neural tabular model menunjukkan peningkatan generalisasi yang konsisten seiring penambahan sampel, atau justru rentan terhadap overfitting ketika data terbatas. Keempat, isolasi kontribusi fitur kategorikal. Seringkali, kemampuan neural network dalam mempelajari dense embeddings atau interaksi fitur non-linear menjadi faktor pembeda utama dibandingkan tree-based ensemble seperti GBDT. Kelima, evaluasi trade-off antara akurasi dan efisiensi komputasi. Catat waktu training, latency inference, dan footprint memori, karena dalam skenario deployment nyata maupun penelitian berskala besar, model yang sedikit lebih akurat namun membutuhkan sumber daya eksponensial sering kali kurang viable.

Untuk menyajikan temuan ini secara akademis dan reproducible, gunakan template kesimpulan yang terstruktur. Template ini memaksa kalian untuk melaporkan dimensi dataset, skor kuantitatif masing-masing baseline, status signifikansi statistik, fitur paling determinatif, serta kondisi spesifik di mana arsitektur neural berhasil melampaui model tradisional. Pendekatan ini sangat krusial pada jenjang magister karena setiap klaim keberhasilan algoritma harus berlandaskan evidence yang transparan, terukur, dan dapat direproduksi oleh reviewer atau peneliti lain. Hindari narasi subjektif; biarkan angka dan uji statistik yang berbicara.

### Inti yang Harus Ditekankan

- Performa model tidak boleh dinilai hanya dari skor rata-rata; wajib disertai uji signifikansi statistik dan confidence interval untuk menghindari klaim yang lemah.
- Analisis trade-off antara akurasi, kompleksitas komputasi, dan skalabilitas dataset merupakan standar evaluasi model modern yang relevan untuk publikasi internasional.
- Penggunaan template kesimpulan menjamin transparansi metodologis, mendukung reproducibility, dan menjadi fondasi objektif untuk pengembangan proyek penelitian lanjutan.

### Transisi ke Slide Berikutnya

Dengan interpretasi hasil praktikum yang sudah berbasis bukti dan terstruktur, langkah logis berikutnya adalah menerjemahkan temuan ini ke dalam kerangka kerja penelitian kalian. Kita akan membahas bagaimana mengonversi hasil praktikum ini menjadi implementasi strong baseline yang siap dikembangkan, dituning, dan diuji lebih lanjut pada proyek penelitian individu atau kelompok.

---

## Slide 036 - Menghubungkan ke Research Project

### Narasi

Setelah kita menginterpretasikan hasil Praktikum 4 pada slide sebelumnya, kini kita memasuki tahap metodologis yang krusial dalam proyek penelitian Anda: implementasi *strong baseline*. Pada pertemuan kesembilan ini, fokus bergeser dari eksplorasi algoritma menuju pembangunan fondasi evaluasi yang rigor. Hasil analisis dari praktikum sebelumnya harus menjadi bahan pertimbangan utama untuk menentukan model atau konfigurasi spesifik yang akan dijadikan *baseline* resmi. Pemilihan ini bukan sekadar soal akurasi tertinggi, melainkan mengenai konsistensi, stabilitas, dan kemudahan dalam replikasi eksperimen di tahap selanjutnya.

Sebuah *baseline* yang dianggap kuat dalam standar penelitian tingkat magister harus memenuhi empat pilar utama yang tercantum dalam *checklist* slide ini. Pertama, *preprocessing pipeline* wajib terdokumentasi secara rinci, mencakup setiap langkah penanganan missing value, normalisasi, dan transformasi fitur agar tidak ada operasi yang dilakukan secara *ad-hoc*. Kedua, setelan *hyperparameter* dasar harus telah ditetapkan dan dicatat secara sistematis, menghilangkan subjektivitas dalam penyesuaian parameter selama proses eksperimen. Ketiga, evaluasi performa harus menggunakan *repeated cross-validation* untuk meminimalkan varians akibat pembobotan data yang kebetulan menguntungkan dan memberikan estimasi metrik yang lebih andal. Keempat, seluruh artefak hasil baseline harus disimpan dalam struktur direktori yang jelas sehingga dapat direproduksi sepenuhnya oleh Anda maupun pihak ketiga di masa depan.

Penting untuk dipahami bahwa kualitas *baseline* ini akan secara langsung memengaruhi validitas klaim penelitian Anda. Dalam konteks data mining, *baseline* yang lemah atau tidak tereproduksibel sering kali menjadi sumber *model selection bias* dan menyebabkan peneliti membuat pernyataan yang berlebihan tanpa dukungan bukti empiris yang kuat. Dengan mendokumentasikan pipeline, menetapkan parameter dasar, menerapkan validasi silang berulang, dan menjamin reproduktibilitas, Anda telah membangun landasan objektif yang memungkinkan perbandingan yang adil terhadap metode-metode inovatif yang akan Anda kembangkan nantinya.

### Inti yang Harus Ditekankan

- *Strong baseline* berfungsi sebagai tolak ukur objektif; tanpa fondasi ini, klaim peningkatan performa metode baru berisiko bias atau tidak valid secara statistik.
- Reproduktibilitas adalah syarat mutlak dalam penelitian S2; dokumentasi pipeline, parameter, dan hasil harus lengkap agar eksperimen dapat diverifikasi ulang oleh reviewer atau komunitas ilmiah.
- Penggunaan *repeated cross-validation* dan penyimpanan hasil secara terstruktur mencegah overfitting terhadap split data tertentu dan meningkatkan kepercayaan ilmiah terhadap temuan eksperimen.

### Transisi ke Slide Berikutnya

Dengan *baseline* yang telah teruji dan tereproduksibel, kita siap melangkah ke pertemuan berikutnya untuk membahas bagaimana mengoptimalkan konfigurasi tersebut secara efisien. Karena model neural untuk data tabular sangat sensitif terhadap pengaturan, kita akan mempelajari teknik *hyperparameter optimization* seperti *grid search*, *random search*, dan *Bayesian optimization* menggunakan framework modern seperti Optuna dan AutoGluon, sekaligus memahami peran *computational budget* dalam menjaga integritas eksperimen. Mari lanjutkan ke slide berikutnya.

---

## Slide 037 - Menuju Pertemuan 10: AutoML, Hyperparameter Optimization & Reproducible Research

### Narasi

Setelah pada pertemuan sebelumnya kita berhasil mengimplementasikan strong baseline untuk proyek penelitian, langkah selanjutnya adalah memastikan bahwa performa model tersebut dapat dioptimalkan secara sistematis dan ilmiah. Model-model deep learning dan representation learning untuk data tabular yang telah dibahas, seperti TabNet atau FT-Transformer, umumnya memiliki struktur arsitektur kompleks yang menuntut penyetelan banyak hyperparameter. Tanpa strategi tuning yang tepat, risiko overfitting atau underfitting akan sangat tinggi, sehingga hasil eksperimen tidak lagi mencerminkan kemampuan intrinsik model melainkan sekadar keberuntungan dalam pemilihan konfigurasi awal. Oleh karena itu, slide ini menjadi jembatan krusial menuju Pertemuan 10, di mana kita akan membahas metodologi tuning hyperparameter yang efisien, adil, dan siap diterapkan dalam konteks penelitian akademik tingkat magister.

Pada Pertemuan 10, fokus utama akan diarahkan pada tiga pendekatan utama dalam pencarian hyperparameter terbaik: grid search, random search, dan Bayesian optimization. Grid search mengeksplorasi seluruh kombinasi secara ekshaustif namun sangat mahal secara komputasi. Random search menawarkan efisiensi lebih baik dengan sampling acak dari ruang pencarian, sering kali menemukan konfigurasi optimal lebih cepat daripada grid search. Sementara itu, Bayesian optimization menggunakan probabilitas prior dan posterior untuk memandu pencarian secara adaptif, menjadikannya pilihan paling efektif ketika sumber daya komputasi terbatas. Implementasinya akan dipraktikkan menggunakan framework modern seperti Optuna untuk kontrol granular dan AutoGluon untuk pendekatan AutoML yang lebih terotomatisasi, memungkinkan mahasiswa memahami trade-off antara kemudahan penggunaan dan fleksibilitas kontrol eksperimen.

Di sisi metodologis, pembahasan akan menyentuh isu kritis dalam penelitian data mining: model selection bias dan prinsip reproducible research. Ketika melakukan tuning berulang kali, peneliti secara tidak sadar cenderung memilih konfigurasi yang menghasilkan metrik evaluasi tertinggi tanpa mempertimbangkan varians atau stabilitas performa, yang dapat mengarah pada klaim berlebihan terhadap model. Untuk mengatasi hal ini, konsep computational budget harus diperlakukan sebagai variabel eksperimen yang transparan dan dilaporkan secara eksplisit. Setiap proses optimisasi harus didokumentasikan lengkap dengan seed acak, protokol validasi, dan log eksekusi, sehingga hasil penelitian dapat direproduksi oleh peneliti lain. Prinsip ini sejalan dengan standar publikasi internasional yang mensyaratkan transparansi penuh dalam pipeline eksperimen, sekaligus mempersiapkan kalian menghadapi tantangan evaluasi model yang ketat pada tahap akhir penelitian.

### Inti yang Harus Ditekankan

- Tuning hyperparameter bukan sekadar mencari akurasi tertinggi, melainkan proses eksperimental yang memerlukan strategi pencarian yang efisien, terukur, dan sesuai dengan karakteristik dataset.
- Pemilihan metode optimisasi (Grid, Random, Bayesian) harus didasarkan pada analisis trade-off antara akurasi yang diharapkan dan ketersediaan computational budget.
- Reproducible research dan penghindaran model selection bias adalah fondasi kredibilitas penelitian tingkat S2; setiap klaim performa model harus didukung oleh dokumentasi eksperimen yang lengkap dan dapat diverifikasi ulang.

### Transisi ke Slide Berikutnya

Dengan pemahaman tentang pentingnya tuning yang terstruktur dan etika penelitian yang ketat, mari kita tutup materi Pertemuan 09 dengan merangkum poin-poin kunci serta menyiapkan tugas praktis sebelum memasuki fase optimisasi mendalam pada pertemuan berikutnya.

---

## Slide 038 - Penutup: Deep & Representation Learning for Tabular Data

### Narasi

Pada penutup pertemuan ini, kita merangkum esensi dari pembelajaran representasi pada data tabular menggunakan pendekatan deep learning. Representation learning bukan sekadar penggunaan arsitektur jaringan saraf yang lebih dalam, melainkan mekanisme fundamental bagaimana model mentransformasi fitur mentah menjadi representasi laten yang mampu menangkap interaksi non-linear, dependensi antar kolom, dan pola tersembunyi yang sulit dimodelkan oleh metode statistik atau machine learning tradisional. Kemampuan ini menjadi kunci ketika menghadapi dataset tabular berskala besar dengan struktur heterogen dan korelasi kompleks antar variabel.

Meskipun perkembangan model deep learning pesat, Gradient Boosted Decision Trees (GBDT) seperti XGBoost, LightGBM, dan CatBoost masih mempertahankan posisinya sebagai baseline yang sangat kuat. Algoritma berbasis pohon ini unggul dalam menangani missing values, skala fitur yang berbeda, dan risiko overfitting pada dataset berukuran kecil hingga menengah. Di sisi lain, arsitektur modern seperti TabNet dan FT-Transformer menawarkan paradigma baru. TabNet memanfaatkan mekanisme attentif berurutan untuk seleksi fitur adaptif, sementara FT-Transformer mengadaptasi arsitektur Transformer dengan embedding khusus untuk variabel kategorikal dan matriks self-attention guna memodelkan hubungan global antar fitur. Namun, penting untuk dipahami bahwa kedua model tersebut tidak selalu menang di setiap dataset. Performanya sangat bergantung pada rasio jumlah sampel terhadap dimensi fitur, tingkat noise, ketersediaan komputasi, dan karakteristik distribusi data.

Dalam konteks penelitian tingkat magister, pemanfaatan self-supervised learning membuka peluang signifikan untuk eksplorasi lebih lanjut. Teknik seperti masked feature modeling atau contrastive learning memungkinkan model belajar representasi berguna dari data yang tidak berlabel, sehingga mengurangi ketergantungan pada anotasi manual yang mahal dan memakan waktu. Hal ini sangat relevan untuk skenario dunia nyata di mana data berlabel sering kali terbatas, tidak seimbang, atau mengandung bias sistematis.

Fondasi dari setiap penelitian eksperimental yang kredibel adalah perbandingan yang adil. Evaluasi model harus dilakukan dengan protokol yang konsisten: pembagian data train-validation-test yang ketat, pra-pemrosesan identik, metrik evaluasi yang tepat, serta pelaporan biaya komputasi dan kompleksitas model. Tanpa standar ini, klaim keunggulan suatu arsitektur tidak dapat dipertanggungjawabkan secara ilmiah. Sebagai tindak lanjut, selesaikan Praktikum 4 dengan menerapkan pipeline preprocessing dan training secara utuh, mulai bangun baseline untuk proyek penelitian Anda, dan baca literatur mengenai TabNet atau FT-Transformer sebagai bahan diskusi kritis terkait kelebihan, keterbatasan, dan potensi adaptasinya pada domain spesifik Anda.

### Inti yang Harus Ditekankan

- Representation learning mengubah cara kita memahami struktur data tabular dengan mengekstrak fitur laten yang menangkap relasi non-linear dan dependensi antar variabel secara dinamis.
- GBDT tetap menjadi benchmark utama; model deep seperti TabNet dan FT-Transformer harus dievaluasi secara kontekstual berdasarkan karakteristik dataset, bukan diadopsi secara mutlak tanpa analisis komparatif.
- Self-supervised learning merupakan jalur riset potensial untuk mengatasi kelangkaan data berlabel dan meningkatkan generalisasi model pada domain tabular.
- Validitas penelitian magister bergantung pada desain eksperimen yang ketat, perbandingan yang adil, transparansi metodologi, dan analisis komparatif yang didukung bukti empiris serta ablation study.

### Transisi ke Slide Berikutnya

Karena model-model representasi ini sangat sensitif terhadap konfigurasi awal dan memiliki ruang pencarian parameter yang luas, pertemuan berikutnya akan membahas strategi optimasi hyperparameter secara efisien, penerapan AutoML, serta prinsip-prinsip reproducible research untuk memastikan setiap eksperimen dapat direplikasi dan divalidasi secara akademis.

---

## Slide 039 - TERIMA KASIH

### Narasi

Kita telah menyelesaikan pembahasan mendalam untuk pertemuan kesembilan ini, yaitu Deep & Representation Learning for Tabular Data. Dalam sesi ini, kita telah mengurai bagaimana representasi data dipelajari secara otomatis oleh jaringan saraf, serta menempatkan algoritma berbasis ensemble seperti GBDT sebagai baseline empiris yang masih mendominasi performa pada sebagian besar dataset tabular industri. Kita juga telah mengevaluasi arsitektur mutakhir seperti TabNet dan FT-Transformer yang memperkenalkan mekanisme attention dan feature selection terintegrasi, sambil mengingatkan bahwa keunggulan teoretis belum tentu translates menjadi superiority absolut di setiap skenario distribusi data. Diskusi mengenai self-supervised learning juga menegaskan potensi besar pemanfaatan data tidak berlabel sebagai jalur riset yang relevan untuk mengatasi bottleneck labeling manual. Seluruh pembahasan ini bermuara pada satu prinsip metodologis inti dalam penelitian tingkat magister: bahwa klaim kinerja model hanya valid jika dibangun di atas perbandingan eksperimen yang adil, terkontrol, dan transparan.

Sebagai penutup pertemuan ini, pastikan seluruh poin strategis telah terintegrasi ke dalam rencana penelitian Anda. Tugas Praktikum 4 diharapkan telah selesai dieksekusi, implementasi baseline untuk proyek penelitian pribadi atau kelompok sudah berjalan, dan literatur primer terkait TabNet maupun FT-Transformer telah ditelaah untuk menyuburkan diskusi kolaboratif. Ingatlah bahwa kemampuan mengidentifikasi research gap, merancang baseline yang robust, dan melakukan ablation study yang sistematis adalah kompetensi kunci yang akan terus diasah sepanjang semester ini.

### Inti yang Harus Ditekankan

- Representation learning otomatis menjadi fondasi esensial dalam evolusi model deep learning untuk struktur data tabular.
- GBDT tetap menjadi benchmark wajib yang harus diimplementasikan dan dijadikan acuan komparasi dalam setiap studi empiris.
- Arsitektur inovatif seperti TabNet dan FT-Transformer menawarkan kontribusi signifikan, namun validitas performanya harus diuji melalui eksperimen yang ketat, kontekstual, dan menghindari bias seleksi dataset.
- Self-supervised learning membuka peluang riset strategis untuk mitigasi keterbatasan data berlabel dalam domain tabular.
- Rigor metodologis, desain eksperimen yang adil, dan komitmen terhadap reproduktibilitas merupakan syarat mutlak untuk publikasi penelitian berkualitas tinggi di jurnal atau konferensi terindeks Scopus.

### Transisi ke Slide Berikutnya

Dengan fondasi pemahaman yang solid mengenai perkembangan terkini dalam pembelajaran mendalam untuk data tabular, langkah sistematis berikutnya adalah mempelajari bagaimana mengotomatisasi dan mengoptimalkan alur eksperimen. Pada pertemuan berikutnya, kita akan membahas AutoML, Hyperparameter Optimization, dan Reproducible Research, yang akan memberikan kerangka kerja teknis dan prosedural untuk meningkatkan efisiensi pencarian model, memastikan konsistensi hasil, dan memperkuat integritas akademik dalam setiap tahap penelitian Anda.
