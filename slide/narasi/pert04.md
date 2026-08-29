# Narasi TD Data Mining - Pertemuan 04

## Classification, Regression & Strong Baselines

Sumber: markdown/pert04-classification-regression-strong-baselines.md

---

## Slide 000 - Cover

### Narasi

Pertemuan keempat ini resmi memasuki ranah pembelajaran terawasi (*supervised learning*) dengan fokus pada dua tugas fundamental: klasifikasi dan regresi. Namun, penekanan utama pada jenjang magister bukan sekadar penerapan algoritma, melainkan penguatan metodologi penelitian melalui konsep *strong baseline*. Dalam ekosistem riset data mining kontemporer, klaim keunggulan sebuah model baru hanya dapat diterima secara akademis jika model tersebut berhasil melampaui performa algoritma klasik yang telah dioptimalkan secara ketat. Oleh karena itu, sesi ini dirancang untuk membekali mahasiswa dengan kemampuan merancang baseline yang robust, reproducible, dan siap menjadi patokan evaluasi dalam paper penelitian internasional.

Kita akan membedah algoritma inti seperti *Logistic Regression*, *Decision Tree*, *k-Nearest Neighbors*, dan *Support Vector Machine* untuk masalah klasifikasi, serta *Linear* dan *Polynomial Regression* untuk prediksi numerik. Pembahasan akan mengintegrasikan praktik implementasi menggunakan `scikit-learn`, `pandas`, dan `NumPy`, lengkap dengan strategi *hyperparameter tuning*, teknik regularisasi untuk mitigasi *overfitting*, serta pemilihan metrik evaluasi yang selaras dengan distribusi dan karakteristik kelas dalam dataset. Pendekatan ini memastikan setiap eksperimen memiliki landasan statistik dan komputasi yang kuat, sehingga hasil yang diperoleh dapat dipertanggungjawabkan dalam konteks peer-review.

Materi ini merupakan kesinambungan logis dari fase pemahaman data dan *Exploratory Data Analysis* yang telah dipelajari pada pertemuan awal. Insight yang dihasilkan dari visualisasi dan pra-pemrosesan data akan menjadi input kritis dalam seleksi fitur dan penentuan konfigurasi model. Setelah fondasi ini terbentuk, kita akan langsung menerapkannya sebagai batu loncatan menuju teknik penggabungan model yang lebih kompleks, di mana prinsip-prinsip optimasi dan evaluasi yang dibahas hari ini akan menjadi komponen esensial dalam meningkatkan stabilitas dan generalisasi sistem.

### Inti yang Harus Ditekankan

- Konsep *strong baseline* adalah standar metodologis wajib dalam penelitian data mining tingkat lanjut untuk mencegah klaim inovasi yang lemah atau tidak terukur.
- Penguasaan algoritma klasik, optimalisasi hiperparameter, dan evaluasi berbasis metrik yang tepat menjadi tolak ukur keberhasilan sebelum beralih ke arsitektur model yang lebih rumit.
- Alur kerja dari EDA, pra-pemrosesan, hingga implementasi baseline menggunakan ekosistem Python harus bersifat modular, terdokumentasi, dan mudah direplikasi untuk keperluan publikasi ilmiah.

### Transisi ke Slide Berikutnya

Untuk memetakan posisi materi ini secara utuh dalam kurikulum, mari kita tinjau peta perjalanan perkuliahan dan melihat bagaimana pertemuan ini menghubungkan fondasi eksplorasi data dengan teknik ensemble yang akan kita pelajari selanjutnya.

---

## Slide 001 - Peta Perkuliahan dan Posisi Pertemuan 04

### Narasi

Pada pertemuan ini, kita akan meninjau peta perkuliahan secara keseluruhan untuk memposisikan Pertemuan 04 dalam alur pembelajaran Topik Dalam Data Mining. Rangkaian materi disusun secara bertahap guna membangun kompetensi metodologis yang diperlukan untuk penelitian tingkat magister. Pertemuan 1 hingga 2 berfokus pada fondasi data mining, pemahaman data, Exploratory Data Analysis, serta validitas eksperimen sebagai landasan utama sebelum masuk ke algoritma spesifik. Pertemuan 3 membahas pattern mining dan knowledge discovery untuk mengekstrak struktur tersembunyi dari data. Setelah fondasi tersebut terbangun, Pertemuan 04 ini secara khusus membahas klasifikasi dan regresi klasik, yang bukan hanya sebagai teknik prediktif dasar, melainkan sebagai *strong baseline* yang wajib diimplementasikan dalam setiap studi komparatif. Pertemuan 5 akan melanjutkan pembahasan ke ensemble learning dan gradient boosting, yang merupakan pengembangan langsung dari prinsip-prinsip dasar yang akan kita pelajari hari ini. Selanjutnya, Pertemuan 6 hingga 7 menangani clustering, anomaly detection, dan penanganan data tidak seimbang, sementara Pertemuan 8 hingga 16 didedikasikan untuk tinjauan paper internasional, proyek penelitian individual atau tim, serta topik lanjutan sesuai perkembangan riset terkini.

Keterkaitan antar pertemuan dirancang secara hierarkis untuk memastikan kesiapan akademik Anda dalam merancang eksperimen yang rigor. Sebelum mencapai tahap pemodelan, pemahaman mendalam melalui EDA dan preprocessing pada pertemuan sebelumnya menjadi prasyarat mutlak agar fitur yang diekstrak benar-benar merepresentasikan fenomena data secara akurat. Pada pertemuan saat ini, penekanan diberikan pada implementasi algoritma klasifikasi dan regresi standar sebagai benchmark kinerja. Dalam konteks penelitian S2, klaim keunggulan suatu metode baru hanya dapat dibuktikan secara ilmiah jika dibandingkan dengan baseline yang kuat dan fair. Oleh karena itu, penguasaan fundamental ini menjadi tolak ukur keberhasilan Anda dalam merancang eksperimen yang valid. Pertemuan berikutnya akan mengintegrasikan konsep dasar ini ke dalam framework ensemble learning dan gradient boosting, di mana Anda akan melihat bagaimana penggabungan beberapa model sederhana dapat menghasilkan performa yang jauh melampaui baseline tunggal.

Secara keseluruhan, peta perkuliahan ini mencerminkan pendekatan sistematis dari eksplorasi data hingga kontribusi penelitian orisinal. Setiap modul saling melengkapi, dimulai dari pemahaman karakteristik data, pemilihan algoritma prediktif, optimasi melalui teknik ensemble, hingga evaluasi kritis terhadap literatur dan penerapan pada proyek akhir. Dengan memahami posisi pertemuan ini dalam rantai pembelajaran, Anda dapat mempersiapkan diri untuk tidak hanya menjalankan kode secara mekanistik, tetapi juga mampu menganalisis mengapa suatu baseline dipilih, bagaimana metrik evaluasi diaplikasikan, dan bagaimana hasil eksperimen dapat ditranslasikan menjadi temuan ilmiah yang berkontribusi pada bidang data mining.

### Inti yang Harus Ditekankan

- Alur perkuliahan disusun secara progresif dari pemahaman data, ekstraksi pola, pemodelan dasar, hingga ensemble dan proyek penelitian, sehingga setiap pertemuan memiliki ketergantungan logis yang ketat.
- Klasifikasi dan regresi pada pertemuan ini berfungsi sebagai *strong baseline*; tanpa baseline yang kuat dan fair, klaim keunggulan metode kompleks atau novel tidak memiliki validitas ilmiah.
- Pemahaman posisi pertemuan ini membantu mahasiswa merancang eksperimen yang terstruktur, memilih metrik evaluasi yang tepat, dan menyiapkan fondasi metodologis untuk proyek penelitian tingkat S2.

### Transisi ke Slide Berikutnya

Setelah memahami peta perjalanan perkuliahan dan posisi strategis pertemuan ini, mari kita lanjutkan ke tujuan pembelajaran spesifik yang harus dicapai, termasuk bagaimana menginternalisasi konsep baseline kuat ke dalam desain eksperimen dan proyek penelitian Anda.

---

## Slide 002 - Tujuan Pembelajaran (CPMK)

### Narasi

Setelah pada pertemuan sebelumnya kita menyelesaikan peta perkuliahan dan memahami posisi materi saat ini sebagai lanjutan dari proses data understanding serta exploratory data analysis, fokus kita kini beralih ke inti pemodelan prediktif: klasifikasi dan regresi. Pada jenjang magister, penguasaan kedua tugas fundamental ini tidak lagi berhenti pada kemampuan memanggil fungsi library seperti scikit-learn, melainkan menuntut pemahaman kritis terhadap asumsi statistik, bias-variance tradeoff, serta kesesuaian algoritma dengan struktur dan distribusi data yang dihadapi.

Capaian Pembelajaran Mata Kuliah (CPMK) pada slide ini dirancang untuk membangun kompetensi riset yang ketat. Pertama, CPMK-1 menuntut mahasiswa mampu menganalisis konsep dan karakteristik algoritma klasifikasi maupun regresi secara mendalam, termasuk mengetahui kapan suatu model cocok digunakan dan kapan justru akan menghasilkan overfitting atau underfitting. Kedua, CPMK-4 menekankan pada keterampilan merancang eksperimen yang adil (fair experiment) dengan menetapkan baseline yang kuat. Dalam konteks penelitian, validitas klaim ilmiah sangat bergantung pada apakah perbandingan dilakukan dengan kontrol variabel yang ketat dan kondisi uji yang konsisten. Ketiga, CPMK-5 mengarahkan mahasiswa untuk membandingkan metode tidak hanya berdasarkan akurasi, tetapi juga melalui lensa kompleksitas komputasi, kebutuhan sumber daya, serta tingkat interpretabilitas model yang diperlukan oleh stakeholder atau reviewer jurnal.

Kaitannya langsung dengan proyek penelitian akhir, ketiga capaian ini diterjemahkan menjadi tiga kemampuan praktis. Mahasiswa dituntut mampu menentukan strong baseline yang relevan dengan domain permasalahan mereka, memahami alasan metodologis mengapa baseline yang belum dioptimalkan dapat merusak validitas hasil penelitian, serta memilih metrik evaluasi yang selaras dengan karakteristik dataset, seperti penggunaan F1-score atau ROC-AUC untuk data tidak seimbang, atau RMSE dan MAE untuk regresi dengan outlier. Pemilihan metrik yang tepat akan menentukan apakah perbedaan performa yang terukur benar-benar signifikan secara statistik atau hanya noise acak.

Secara keseluruhan, slide ini menegaskan pergeseran paradigma dari pengguna alat menjadi perancang eksperimen. Di tingkat S2, setiap langkah pemodelan harus dapat dipertanggungjawabkan secara metodologis. Pemahaman terhadap CPMK ini akan menjadi landasan ketika kita membahas mengapa banyak publikasi penelitian justru terjebak dalam perbandingan yang tidak proporsional, sebuah isu kritis yang akan kita bedah pada slide berikutnya.

### Inti yang Harus Ditekankan

- Analisis algoritma klasifikasi dan regresi harus mencakup pemahaman mendalam terhadap asumsi matematis, batasan aplikasi, serta sensitivitas terhadap kualitas data input.
- Desain eksperimen penelitian wajib menerapkan prinsip fair comparison, di mana baseline dipilih dan dioptimalkan dengan standar yang sama persis dengan metode usulan baru.
- Evaluasi model tidak boleh reduktif terhadap satu metrik tunggal; keputusan pemilihan model harus mempertimbangkan trade-off antara akurasi, efisiensi komputasi, dan transparansi interpretabilitas.
- Penetapan strong baseline merupakan fondasi epistemologis dalam paper penelitian; tanpa baseline yang kompetitif, klaim novelty atau keunggulan metodologis kehilangan bobot ilmiah.

### Transisi ke Slide Berikutnya

Dengan pemahaman bahwa baseline yang kuat adalah syarat mutlak validitas eksperimen, mari kita telaah bersama praktik umum yang sering muncul di literatur penelitian. Kita akan melihat bagaimana ketidakseimbangan dalam tuning hyperparameter dan alokasi budget komputasi dapat menciptakan ilusi peningkatan performa, serta mengapa pertanyaan tentang sumber kenaikan akurasi harus selalu menjadi sorotan utama dalam review paper Anda.

---

## Slide 003 - Mengapa "Strong Baseline" Menjadi Krusial?

### Narasi

Pada tahap awal perancangan eksperimen dalam penelitian data mining, sering muncul fenomena di mana peneliti mengklaim bahwa metode barunya unggul hanya berdasarkan angka performa mentah. Seperti yang terlihat pada ilustrasi teks di slide ini, sebuah metode baru dilaporkan mencapai akurasi 98% sementara metode lama hanya 96%, sehingga ditarik kesimpulan bahwa metode lama terbukti kalah. Klaim semacam ini terdengar meyakinkan secara permukaan, namun dalam konteks penelitian tingkat magister, logika tersebut justru mengandung celah metodologis yang serius. Penilaian keunggulan algoritma tidak boleh didasarkan semata-mata pada perbandingan angka akhir tanpa mempertimbangkan bagaimana kedua model tersebut dilatih, divalidasi, dan dibandingkan.

Kenyataan di lapangan menunjukkan bahwa metode lama atau referensi klasik jarang kali dijalankan dengan konfigurasi optimal. Baseline sering kali dibangun menggunakan *default hyperparameter* dari pustaka standar, sementara metode baru dioptimalkan secara intensif melalui pencarian grid, random search, atau teknik tuning lanjutan. Akibatnya, selisih performa yang teramati—misalnya perbedaan dua persen akurasi—bukanlah cerminan dari keunggulan inovatif algoritma baru, melainkan akibat ketidakseimbangan *computational budget*. Ketika satu sisi eksperimen dibiarkan berjalan pada kondisi paling dasar sedangkan sisi lainnya dimaksimalkan, hasil evaluasi menjadi bias struktural yang tidak lagi mengukur kontribusi ilmiah sebenarnya dari metode yang diajukan.

Pertanyaan kunci yang harus selalu dipegang teguh oleh setiap peneliti adalah apakah peningkatan performa tersebut benar-benar berasal dari *novelty* desain algoritma, atau sekadar hasil dari proses penyetelan parameter yang lebih agresif dan sumber daya komputasi yang lebih besar. Dalam kerangka penelitian S2 seperti yang telah disinggung pada capaian pembelajaran sebelumnya, validitas klaim ilmiah sangat bergantung pada kontrol ketat terhadap variabel eksperimen. Tanpa mekanisme perbandingan yang setara, risiko menghasilkan temuan yang bersifat artifak teknis daripada kontribusi metodologis akan meningkat drastis. Oleh karena itu, pemahaman mendalam tentang mengapa baseline yang lemah dapat meruntuhkan validitas penelitian menjadi fondasi wajib sebelum melangkah ke tahap definisi operasional baseline yang sesungguhnya.

### Inti yang Harus Ditekankan

- Perbandingan performa algoritma harus dilakukan dalam kondisi eksperimen yang setara dan terkontrol secara ketat.
- Penggunaan *default hyperparameter* pada metode lama tidak merepresentasikan potensi maksimalnya, sehingga menciptakan bias perbandingan yang sistematis.
- Selisih akurasi yang kecil sering kali mencerminkan perbedaan *computational budget* atau intensitas tuning, bukan keunggulan inovatif metode baru.
- Validitas klaim penelitian sangat bergantung pada kemampuan peneliti membuktikan bahwa peningkatan performa berasal dari *novelty*, bukan dari kelebihan sumber daya komputasi.

### Transisi ke Slide Berikutnya

Setelah memahami bahaya perbandingan yang tidak adil dan pentingnya kontrol eksperimen, langkah selanjutnya adalah mendefinisikan secara eksplisit kriteria objektif yang menjadikan sebuah baseline layak disebut sebagai "strong baseline", beserta contoh konkret yang dapat langsung diimplementasikan dalam praktikum data mining.

---

## Slide 004 - Definisi Strong Baseline

### Narasi

Setelah menyoroti risiko penggunaan baseline yang lemah pada pembahasan sebelumnya, langkah selanjutnya adalah mendefinisikan secara operasional apa yang dimaksud dengan *strong baseline* dalam konteks evaluasi metodologis tingkat magister. Sebuah baseline tidak boleh sekadar menjadi titik awal yang lazim atau konfigurasi bawaan (*default*) dari pustaka komputasi seperti scikit-learn. Baseline yang kuat harus memenuhi lima kriteria fundamental yang saling terkait. Pertama, model tersebut harus sudah dikenal dan mapan, artinya memiliki rekam jejak empiris yang konsisten dan terbukti efektif di berbagai jenis dataset, bukan sekadar algoritma eksperimental yang belum teruji secara luas. Kedua, proses penyetelan *hyperparameter* harus dilakukan secara wajar dan sistematis, menggunakan teknik pencarian atau optimasi, sehingga model bekerja pada kemampuannya yang optimal, bukan pada nilai bawaan yang seringkali suboptimal.

Ketiga, seluruh kondisi eksperimen harus dijaga ketat dan identik antara baseline dan metode usulan baru. Hal ini mencakup keseragaman pada pipeline pra-pemrosesan data, strategi pembagian data (*train-validation-test split*), hingga konsistensi penggunaan *random seed* untuk menjamin reproduktibilitas dan menghilangkan bias akibat faktor acak. Keempat, performa baseline ini seharusnya sulit dikalahkan secara signifikan oleh pendekatan lain yang kompleksitasnya setara, karena ia sudah mendekati batas atas (*performance ceiling*) yang realistis untuk kelas masalah tersebut. Kelima, model harus dapat diinterpretasikan dengan baik, memungkinkan peneliti menganalisis fitur penting, pola kesalahan, serta alasan di balik keberhasilan atau kegagalan prediksi, sehingga memberikan wawasan yang lebih dalam daripada sekadar angka metrik evaluasi.

Dalam konteks data tabular yang sering menjadi objek studi riset, contoh implementasi baseline kuat meliputi Logistic Regression yang telah dituned parameter regulasinya untuk mengontrol kompleksitas model, Random Forest dengan optimasi jumlah pohon dan kedalaman maksimal guna menyeimbangkan varians dan bias, serta Support Vector Machine dengan kernel RBF yang parameter regularisasi C dan koefisien kernel gamma-nya telah dioptimalkan. Penggunaan ketiga model ini sebagai benchmark memastikan bahwa klaim peningkatan performa dari metode baru benar-benar berasal dari inovasi algoritmik, bukan dari perbandingan yang timpang terhadap model yang tidak dimaksimalkan.

### Inti yang Harus Ditekankan

- Baseline kuat bukan sekadar model default, melainkan model mapan yang telah dituning secara sistematis dan dijalankan dalam kondisi eksperimen yang terkontrol ketat.
- Konsistensi preprocessing, split data, dan random seed adalah kunci validitas perbandingan kinerja antar-model dalam penelitian ilmiah.
- Contoh baseline standar untuk data tabular meliputi Logistic Regression, Random Forest, dan SVM-RBF, semuanya wajib dioptimasi hyperparameternya sebelum dibandingkan dengan metode baru.

### Transisi ke Slide Berikutnya

Dengan pemahaman definisi dan kriteria baseline yang kuat ini, kita siap menelusuri roadmap materi pertemuan hari ini, dimulai dari pengulangan konsep pembelajaran terawasi hingga implementasi praktis masing-masing model klasik yang akan kita jadikan benchmark dalam praktikum mendatang.

---

## Slide 005 - Roadmap Pertemuan 04

### Narasi

Slide ini menyajikan peta jalan atau roadmap untuk pertemuan keempat mata kuliah Topik Dalam Data Mining. Alur materi disusun secara bertahap dan sistematis untuk membekali mahasiswa dengan pemahaman mendalam mengenai algoritma supervised learning klasik, sekaligus melatih pola pikir metodologis yang diperlukan dalam penelitian tingkat magister. Perjalanan dimulai dengan pengulangan konsep dasar supervised learning untuk memastikan konsistensi pemahaman sebelum masuk ke detail teknis setiap model. Setelah itu, kita akan membahas Logistic Regression sebagai model linear probabilistik yang menjadi fondasi dalam memahami pemisahan kelas dan estimasi probabilitas posterior. Materi kemudian berlanjut ke Decision Tree yang memperkenalkan mekanisme split berbasis aturan keputusan, dilanjutkan dengan Random Forest sebagai pengembangan ensemble yang secara efektif mengurangi varians dan mengatasi kecenderungan overfitting pada pohon tunggal. Support Vector Machine akan dibahas dengan penekanan pada konsep margin maksimum dan transformasi ke ruang fitur berdimensi tinggi, sementara k-Nearest Neighbors mewakili paradigma instance-based learning yang tidak memerlukan proses pelatihan eksplisit namun sangat bergantung pada struktur distribusi data lokal.

Setelah menelaah algoritma-algoritma utama untuk klasifikasi, alur materi akan mencakup regresi sebagai counterpart untuk prediksi nilai kontinu, dilanjutkan dengan pembahasan mendalam mengenai trade-off bias-variance. Konsep ini menjadi kunci metodologis dalam memilih kompleksitas model yang optimal, karena model yang terlalu sederhana cenderung underfitting sedangkan model yang terlalu kompleks rentan terhadap overfitting dan gagal menggeneralisasi ke data未见. Pemahaman ini langsung diterjemahkan ke dalam pemilihan metrik evaluasi yang tepat, baik untuk klasifikasi maupun regresi, mengingat bahwa metrik yang dipilih harus selaras dengan karakteristik dataset, ketidakseimbangan kelas, dan tujuan penelitian. Seluruh fondasi teoritis tersebut akan diintegrasikan secara langsung dalam Praktikum 2, di mana mahasiswa diminta mengimplementasikan pipeline lengkap menggunakan Python, pandas, dan scikit-learn, serta melakukan komparasi empiris terhadap berbagai strong baseline.

Roadmap ini dirancang tidak hanya sebagai daftar topik teknis, tetapi sebagai cerminan dari siklus penelitian data mining yang rigor. Setiap algoritma yang dibahas harus dikaitkan dengan kriteria strong baseline yang telah kita definisikan pada pertemuan sebelumnya: model harus memiliki rekam jejak mapan, dioptimalkan melalui tuning hyperparameter yang wajar, dijalankan dalam kondisi eksperimen yang konsisten, memberikan performa yang sulit dikalahkan secara signifikan, serta dapat diinterpretasikan. Dengan mengikuti alur ini, mahasiswa dilatih untuk merancang eksperimen yang adil, melakukan error analysis, dan mengevaluasi model secara kritis sebelum mengembangkan kontribusi metodologis atau arsitektural baru dalam penelitian mereka.

### Inti yang Harus Ditekankan

- Alur materi mencerminkan siklus penelitian yang terstruktur: dari pemahaman konsep, penguasaan algoritma, analisis trade-off teoretis, hingga implementasi dan komparasi empiris.
- Setiap algoritma (Logistic Regression, Decision Tree, Random Forest, SVM, kNN) harus dipahami sebagai model dengan asumsi matematis, domain kecocokan, dan peran strategis sebagai baseline kuat yang wajib diuji sebelum metode baru diajukan.
- Pemahaman bias-variance dan pemilihan metrik evaluasi yang kontekstual adalah fondasi metodologis untuk menjamin validitas eksperimen, reproduktibilitas hasil, dan kualitas paper penelitian tingkat internasional.
- Praktikum 2 berfungsi sebagai titik integrasi di mana teori diterapkan secara langsung, menekankan pentingnya pipeline preprocessing yang konsisten, tuning hyperparameter yang sistematis, dan dokumentasi eksperimen yang transparan.

### Transisi ke Slide Berikutnya

Untuk memulai perjalanan ini, kita akan kembali ke konsep paling mendasar terlebih dahulu. Pada slide berikutnya, kita akan melakukan recap menyeluruh mengenai supervised learning, termasuk bagaimana data berlabel dipetakan ke dalam fungsi prediktif, serta perbedaan mendasar antara tugas klasifikasi dan regresi beserta kaitannya dengan tahap preprocessing yang telah kita pelajari sebelumnya.

---

## Slide 006 - Recap: Supervised Learning

### Narasi

Pada fondasi pembelajaran mesin terawasi atau *supervised learning*, seluruh proses dimulai dari data pelatihan yang tersusun dalam pasangan fitur dan label, dinotasikan sebagai $(X, y)$. Variabel $X$ mewakili sekumpulan fitur atau atribut independen yang menjadi masukan bagi model, sementara $y$ merupakan target atau label yang telah diketahui dari data historis. Alur pembelajaran dapat dipandang sebagai pemetaan fungsi $f$, di mana model secara iteratif menyesuaikan parameter internalnya agar mampu memetakan $X$ ke $y$ secara akurat. Ketika model yang sudah dilatih menerima data baru, ia akan menghasilkan prediksi $\hat{y}$. Pemahaman terhadap arsitektur dasar $X \rightarrow f \rightarrow \hat{y}$ ini menjadi prasyarat mutlak sebelum kita mendalami algoritma spesifik yang akan kita gunakan sebagai *baseline* penelitian.

Berdasarkan karakteristik distribusi dari target $y$, tugas *supervised learning* secara fundamental dibagi menjadi dua domain utama. Pertama adalah klasifikasi, yang menangani target bersifat diskret atau kategorikal. Dalam skenario ini, model bertugas mengklasifikasikan sampel ke dalam salah satu dari beberapa kelas yang telah ditentukan, seperti deteksi email spam atau identifikasi jenis penyakit. Kedua adalah regresi, yang berfokus pada target bersifat kontinu atau numerik. Model regresi bertujuan memprediksi nilai angka yang berada dalam rentang tertentu, misalnya memperkirakan harga properti atau estimasi biaya proyek. Pemilihan antara kedua tugas ini secara langsung mengarahkan kita pada keluarga algoritma yang sesuai, formulasi fungsi kerugian (*loss function*), hingga strategi validasi yang harus diterapkan.

Penting untuk ditekankan bahwa performa model tidak bekerja dalam ruang hampa, melainkan sangat deterministik terhadap kualitas data yang masuk. Sebagaimana telah kita pelajari secara mendalam pada pertemuan kedua terkait *Exploratory Data Analysis* dan penyusunan *experimental pipeline*, tahap preprocessing adalah kunci penentu keberhasilan generalisasi model. Praktik seperti *feature scaling* untuk menghindari dominasi skala tertentu, *encoding* yang tepat untuk variabel kategorikal, serta strategi imputasi atau penghapusan *missing value* yang berbasis analisis statistik, akan langsung tercermin pada stabilitas konvergensi model. Tanpa fondasi data yang bersih dan terstruktur, upaya tuning hyperparameter atau pemilihan arsitektur model lanjutan akan kehilangan makna karena bias awal sudah tertanam sejak tahap input.

Secara ringkas, slide ini menegaskan kembali bahwa *supervised learning* pada dasarnya adalah usaha memodelkan hubungan fungsional antara fitur dan label melalui data berlabel, dengan dikotomi tugas utama pada klasifikasi untuk keluaran kategorikal dan regresi untuk keluaran kontinu. Namun, kekuatan prediktif model sangat bergantung pada disiplin dalam menerapkan preprocessing dan validasi data, yang merupakan komponen non-negosiable dalam metodologi penelitian data mining tingkat magister.

### Inti yang Harus Ditekankan

- Alur dasar *supervised learning* $(X, y) \rightarrow f \rightarrow \hat{y}$ sebagai fondasi pemetaan fitur ke label dalam pembentukan model.
- Dikotomi tugas utama: klasifikasi untuk target diskret/kategorikal versus regresi untuk target kontinu/numerik, yang menentukan pemilihan algoritma dan metrik evaluasi.
- Kualitas model sangat bergantung pada rigoritas preprocessing (*scaling, encoding, missing value*) yang telah dipelajari pada EDA dan *experimental pipeline*, bukan sekadar pada kompleksitas algoritma.

### Transisi ke Slide Berikutnya

Setelah memahami konsep dasar dan pembagian tugas ini, langkah selanjutnya adalah mendalami definisi formal dan notasi matematis dari klasifikasi, yang akan kita bahas secara eksplisit pada slide berikutnya untuk mempersiapkan landasan teoritis dalam merumuskan hipotesis penelitian.

---

## Slide 007 - Klasifikasi: Definisi dan Notasi

### Narasi

Mengacu kembali pada konsep pembelajaran terawasi yang telah kita ringkas, klasifikasi menempati posisi sebagai salah satu pilar utama dalam ekstraksi pengetahuan dari data berlabel. Secara esensial, klasifikasi adalah tugas komputasional untuk memetakan sekumpulan fitur pengamatan ke dalam label kategori yang sudah diketahui sebelumnya. Berbeda dengan regresi yang menghasilkan nilai kontinu, output dalam klasifikasi bersifat diskrit dan saling eksklusif antar kelas. Dalam konteks penelitian data mining tingkat magister, pemahaman definisi ini menjadi titik awal untuk merumuskan problem statement yang terukur dan memilih arsitektur model yang sesuai dengan sifat distribusi data.

Untuk keperluan perancangan algoritma dan analisis teoretis, kita memerlukan notasi formal yang konsisten. Sebuah dataset dikonstruksi sebagai $D = \{(x_i, y_i)\}_{i=1}^{n}$, di mana $n$ merepresentasikan jumlah total instance. Vektor fitur $x_i$ hidup di ruang Euclidean $\mathbb{R}^d$, menandakan bahwa setiap sampel direpresentasikan oleh $d$ atribut yang telah ditransformasi ke bentuk numerik melalui pipeline preprocessing. Label $y_i$ diambil dari himpunan diskrit $\{C_1, C_2, ..., C_k\}$, dengan $k$ menunjukkan cardinalitas kelas. Notasi ini bukan sekadar simbol matematika, melainkan kerangka kerja yang menentukan bagaimana kita mendefinisikan loss function, regularisasi, dan prosedur validasi silang selama eksperimen.

Tujuan fundamental dari pembangunan model klasifikasi adalah memperoleh fungsi pemetaan $f: \mathbb{R}^d \to \{C_1, ..., C_k\}$ yang memiliki kemampuan generalisasi optimal. Pada tingkat pascasarjana, keberhasilan model tidak diukur hanya dari akurasi pada data pelatihan, melainkan dari kemampuannya mempertahankan performa rendah error pada data baru yang belum pernah dilihat. Proses minimasi kesalahan prediksi ini harus diseimbangkan dengan kontrol terhadap varians dan bias model, sehingga kita menghindari jebakan overfitting yang umum terjadi ketika kompleksitas fitur melebihi kapasitas informasi yang tersedia dalam dataset.

Karakteristik data dalam permasalahan klasifikasi sangat mempengaruhi strategi eksperimental. Dimensi fitur dapat berupa murni numerik, kategorikal, atau hibrida, yang menuntut teknik encoding, embedding, atau selection yang tepat agar tidak mengganggu asumsi distribusi model. Demikian pula dengan struktur target, klasifikasi dapat berbentuk biner ketika hanya terdapat dua kategori, atau multikelas ketika jumlahnya lebih dari dua. Perbedaan struktur ini berdampak langsung pada desain fungsi aktivasi, pemilihan metrik evaluasi (seperti macro/micro F1-score), serta pendekatan penanganan class imbalance jika distribusi label tidak merata.

### Inti yang Harus Ditekankan

- Notasi formal $D = \{(x_i, y_i)\}_{i=1}^{n}$ dengan $x_i \in \mathbb{R}^d$ dan $y_i \in \{C_1, ..., C_k\}$ menjadi landasan matematis universal untuk seluruh algoritma klasifikasi.
- Fokus utama penelitian bukan sekadar fitting data training, tetapi membangun fungsi $f$ yang mampu menggeneralisasi ke distribusi data unseen dengan meminimalkan generalization error.
- Karakteristik data (biner vs multikelas, numerik vs kategorikal) secara langsung menentukan pilihan preprocessing, loss function, dan protokol evaluasi eksperimen.

### Transisi ke Slide Berikutnya

Setelah menetapkan definisi, notasi, dan tujuan generalisasi dalam klasifikasi, kita akan mengimplementasikan fungsi pemetaan tersebut melalui model yang paling mendasar namun tetap powerful sebagai baseline penelitian. Langkah selanjutnya adalah membahas Logistic Regression sebagai model probabilistik linear, beserta mekanisme fungsi sigmoid dan ambang batas keputusan yang menjadikannya referensi standar dalam benchmark klasifikasi tabular.

---

## Slide 008 - Logistic Regression: Konsep Dasar

### Narasi

Pada slide ini, kita memasuki pembahasan mengenai salah satu algoritma klasifikasi paling fundamental dalam data mining, yaitu Logistic Regression. Hal pertama yang perlu diluruskan adalah bahwa meskipun namanya mengandung kata “regresi”, model ini secara esensial bukanlah model regresi yang memprediksi nilai kontinu, melainkan model klasifikasi yang bekerja sebagai pendekatan probabilistik linear. Sesuai dengan notasi formal yang telah kita definisikan pada slide sebelumnya, di mana dataset direpresentasikan sebagai $D = \{(x_i, y_i)\}_{i=1}^{n}$ dan tugas klasifikasi bertujuan membangun fungsi $f: \mathbb{R}^d \to \{C_1, ..., C_k\}$, Logistic Regression memodifikasi fungsi tersebut agar outputnya berupa estimasi probabilitas yang terkalibrasi untuk setiap kelas.

Secara matematis, probabilitas kondisi $y=1$ diberikan vektor fitur $x$ dimodelkan melalui persamaan $P(y=1 \mid x) = \sigma(w^T x + b)$. Di sini, $w$ merepresentasikan vektor bobot (weights) yang mengukur seberapa besar pengaruh masing-masing fitur terhadap keluaran, sedangkan $b$ adalah bias atau intercept yang mengatur pergeseran decision boundary. Komponen kunci yang mengubah hasil kombinasi linear menjadi probabilitas adalah fungsi aktivasi sigmoid, yang didefinisikan sebagai $\sigma(z) = \frac{1}{1 + e^{-z}}$. Fungsi sigmoid memiliki sifat monotonik, bounded antara 0 dan 1, serta diferensiabel di seluruh domainnya. Sifat-sifat inilah yang membuat model ini sangat kompatibel dengan teknik optimasi berbasis gradien, sekaligus memastikan bahwa output model selalu dapat diinterpretasikan sebagai probabilitas yang valid.

Untuk memahami mekanisme inferensinya, alur komputasinya dapat diuraikan secara sistematis. Pertama, kita menghitung skor linear $z$ melalui penjumlahan terbobot dari semua fitur input, yaitu $z = w_0 + w_1x_1 + w_2x_2 + ... + w_dx_d$. Nilai $z$ ini kemudian dipetakan oleh fungsi sigmoid sehingga menghasilkan nilai dalam interval $(0, 1)$. Hasil akhir ini kemudian dibandingkan dengan ambang batas (threshold) default sebesar 0,5. Jika $P(y=1) \geq 0.5$, model memutuskan bahwa sampel termasuk ke dalam kelas positif; sebaliknya, jika $P(y=1) < 0.5$, sampel diklasifikasikan ke dalam kelas negatif. Meskipun threshold 0,5 merupakan standar umum, dalam konteks penelitian atau aplikasi industri, nilai ini dapat disesuaikan secara dinamis berdasarkan trade-off antara false positive dan false negative yang diinginkan.

Sebagai mahasiswa pascasarjana, penting untuk memandang Logistic Regression bukan hanya sebagai alat prediksi sederhana, tetapi sebagai baseline metodologis yang sangat berharga. Model ini menawarkan interpretabilitas tinggi melalui analisis signifikansi dan arah koefisien $w$, serta memberikan referensi performa yang stabil dan efisien secara komputasi. Pemahaman mendalam tentang struktur probabilistik, fungsi aktivasi, dan mekanisme pengambilan keputusan pada slide ini akan menjadi pondasi krusial ketika kita melanjutkan ke proses pelatihan model, pemilihan loss function, serta strategi tuning hyperparameter yang akan dibahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- Logistic Regression adalah model klasifikasi probabilistik, bukan model regresi untuk nilai kontinu.
- Fungsi sigmoid $\sigma(z) = \frac{1}{1 + e^{-z}}$ berperan vital untuk memetakan skor linear ke rentang probabilitas $(0, 1)$ dan memungkinkan optimasi berbasis gradien.
- Keputusan klasifikasi didasarkan pada threshold probabilitas (default 0,5), yang dapat disesuaikan sesuai kebutuhan riset atau aplikasi.
- Model ini berfungsi sebagai baseline metodologis yang kuat karena kecepatan komputasi, stabilitas konvergensi, dan interpretabilitas koefisien yang tinggi.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana Logistic Regression memodelkan probabilitas dan mengambil keputusan klasifikasi, langkah selanjutnya adalah mempelajari bagaimana model ini sebenarnya "belajar" dari data. Pada slide berikutnya, kita akan membahas proses pelatihan model, mulai dari pemilihan binary cross-entropy sebagai loss function, hingga strategi tuning hyperparameter seperti regularisasi dan solver optimasi yang menentukan kualitas baseline ini.

---

## Slide 009 - Logistic Regression: Pelatihan dan Tuning

### Narasi

Setelah pada slide sebelumnya kita membahas bagaimana regresi logistik memetakan kombinasi linear fitur melalui fungsi sigmoid untuk menghasilkan estimasi probabilitas kelas, langkah selanjutnya dalam pipeline data mining adalah bagaimana model tersebut benar-benar dilatih. Pelatihan model ini tidak menggunakan prinsip least squares seperti pada regresi linier, melainkan mengandalkan optimisasi fungsi kerugian yang selaras dengan sifat keluaran probabilistiknya.

Fungsi kerugian yang diterapkan adalah binary cross-entropy atau log loss, yang dirumuskan sebagai $L(w) = -\frac{1}{n} \sum_{i=1}^{n} \left[ y_i \log \hat{y}_i + (1-y_i) \log(1-\hat{y}_i) \right]$. Bentuk matematis ini dipilih secara fundamental karena memberikan penalti yang sangat tajam ketika model membuat prediksi yang yakin namun keliru. Ketika label aktual $y_i=1$ tetapi model memprediksi $\hat{y}_i$ mendekati nol, suku $\log(\hat{y}_i)$ akan menghasilkan nilai negatif yang besar, sehingga total loss melonjak drastis. Proses pelatihan kemudian dijalankan oleh optimizer numerik yang secara iteratif menyesuaikan vektor bobot $w$ dan bias $b$ guna meminimalkan nilai loss ini hingga konvergensi tercapai.

Dalam praktik implementasi menggunakan scikit-learn, keberhasilan pelatihan sangat bergantung pada tuning tiga hyperparameter utama. Parameter `C` merepresentasikan kebalikan dari kekuatan regularisasi; nilai kecil seperti 0.01 atau 0.1 akan menekan kompleksitas model secara agresif untuk menghindari overfitting, sementara nilai besar seperti 10 atau 100 memberikan kebebasan lebih kepada model untuk menangkap pola detail. Jenis `penalty` menentukan bentuk约束 regularisasi, dengan pilihan umum berupa `l2` untuk distribusi koefisien yang mulus, `l1` yang mendorong sparsity dan seleksi fitur, serta `elasticnet` yang menggabungkan keduanya. Terakhir, pemilihan `solver` harus disesuaikan dengan karakteristik data dan penalty yang dipilih, misalnya `lbfgs` untuk konvergensi cepat pada dataset menengah, `liblinear` yang robust untuk masalah kecil atau penalty l1/l2, dan `saga` yang kompatibel dengan elasticnet serta skala data besar.

Di jenjang magister, regresi logistik tidak dipandang sebagai metode usang, melainkan sebagai pilar metodologis untuk establishing strong baselines. Keunggulan utamanya terletak pada efisiensi komputasi, skalabilitas, dan transparansi interpretasi koefisien yang langsung mengkuantifikasi dampak marginal setiap fitur. Dalam kerangka penelitian data mining, baseline yang solid seperti ini berfungsi sebagai tolak ukur empiris yang objektif. Jika arsitektur model yang lebih kompleks—seperti gradient boosting atau neural network—tidak mampu mendongkrak metrik evaluasi secara signifikan dibandingkan regresi logistik, hal tersebut menjadi sinyal metodologis bahwa peningkatan kompleksitas mungkin tidak justified, atau justru terdapat celah dalam validasi data dan desain eksperimen.

### Inti yang Harus Ditekankan

- Log loss dirancang khusus untuk model probabilistik dan memberikan hukuman berat terhadap prediksi yang yakin namun salah, menjadikannya lebih stabil daripada MSE untuk klasifikasi biner.
- Penyetelan `C`, `penalty`, dan `solver` harus dilakukan secara sistematis melalui grid/random search untuk menyeimbangkan trade-off bias-varians dan memastikan kompatibilitas algoritma optimasi.
- Regresi logistik wajib dijadikan baseline metodologis dalam penelitian S2 karena memberikan benchmark performa yang transparan, hemat sumber daya, dan mudah direproduksi sebelum menguji model hibrida atau ensemble.

### Transisi ke Slide Berikutnya

Dengan regresi logistik sebagai baseline probabilistik yang telah kita pahami mekanisme pelatihannya, kita kini akan beralih ke model deterministik berikutnya yang juga sering dijadikan titik awal dalam klasifikasi tabular, yaitu Decision Tree. Berbeda dengan pendekatan linear-regresif, decision tree membangun struktur hierarkis berbasis aturan if-then yang memecah ruang fitur secara rekursif berdasarkan kriteria impurity seperti Gini dan Entropy.

---

## Slide 010 - Decision Tree: Ide Dasar

### Narasi

Setelah pada slide sebelumnya kita mengeksplorasi Logistic Regression sebagai model linear yang efisien untuk klasifikasi biner dan regresi logistik, kita kini beralih ke salah satu algoritma paling intuitif namun fundamental dalam data mining: Decision Tree. Jika pendekatan sebelumnya berpusat pada optimisasi fungsi kerugian melalui pembobotan fitur secara global, Decision Tree mengambil paradigma lokal dan berbasis aturan. Struktur visual pada slide ini menggambarkan bagaimana model membangun representasi hirarkis yang meniru proses pengambilan keputusan manusia. Di puncak terdapat *root node* yang mengajukan pertanyaan pertama berdasarkan threshold pada suatu fitur, misalnya `Fitur A > 5?`. Kondisi ini kemudian memecah ruang fitur menjadi dua domain diskrit. Setiap cabang selanjutnya dapat mengalami *splitting* kembali melalui *internal node* yang menguji kondisi pada fitur lain, seperti `Fitur B == "X"?` atau `Fitur C <= 3?`. Rantai percabangan ini berhenti ketika mencapai *leaf node* atau simpul daun, yang berfungsi sebagai terminal prediksi dan menyimpan kelas mayoritas dari sampel yang jatuh pada jalur tersebut.

Secara konseptual, Decision Tree bekerja dengan menyusun serangkaian aturan *if-then* secara rekursif untuk memisahkan sampel data ke dalam kelompok yang semakin homogen terhadap variabel target. Mekanisme *splitting* pada setiap node bertujuan menemukan fitur dan nilai ambang batas yang paling efektif dalam memisahkan kelas-kelas yang saling tumpang tindih. Keunggulan utama model ini terletak pada sifatnya yang non-parametrik dan bebas asumsi distribusi; ia mampu menangkap interaksi non-linear antar fitur serta heteroskedastisitas data tanpa memerlukan transformasi skala atau normalisasi eksplisit. Dalam implementasinya menggunakan pustaka seperti scikit-learn, setiap iterasi split akan mengevaluasi seluruh fitur yang tersedia dan memilih partisi yang menghasilkan pengurangan ketidakmurnian (*impurity*) terbesar. Hasilnya adalah model yang sangat transparan, memungkinkan peneliti untuk melacak jalur inferensi dari akar hingga daun sebagai rangkaian logika bisnis atau ilmiah yang dapat diaudit.

Kunci teknis yang menentukan performa Decision Tree terletak pada kriteria yang digunakan untuk menilai kualitas sebuah pemecahan. Pada slide ini, kita mengenali dua metrik evaluasi standar yang menjadi tulang belakang algoritma: Gini Impurity dan Entropy (yang berkaitan erat dengan konsep Information Gain). Gini Impurity mengukur probabilitas kesalahan klasifikasi jika label sampel diasumsikan dipilih secara acak mengikuti distribusi kelas pada node tersebut, sementara Entropy diadopsi dari teori informasi Shannon untuk mengkuantifikasi tingkat ketidakteraturan atau kekacauan data. Keduanya berbagi prinsip optimisasi yang sama: meminimalkan heterogenitas di dalam setiap *child node* sehingga masing-masing cabang mendekati kemurnian kelas. Perhitungan matematis formal, turunan rumus, serta analisis komputasional mengenai kapan sebaiknya menggunakan Gini versus Entropy akan kita bahas secara rinci pada slide berikutnya. Pemahaman terhadap ide dasar struktur dan mekanisme splitting ini menjadi prasyarat metodologis yang penting sebelum kita memasuki tahap evaluasi kuantitatif dan tuning hiperparameter.

### Inti yang Harus Ditekankan

- Decision Tree beroperasi dengan membangun aturan *if-then* hierarkis secara rekursif, bukan melalui kombinasi linear seperti model statistik tradisional.
- Setiap *splitting* bertujuan memaksimalkan pemisahan kelas dengan meminimalkan ketidakmurnian (*impurity*), menjadikan model sangat interpretable dan bebas asumsi distribusi.
- Pemilihan kriteria split (Gini Impurity vs Entropy) menjadi fondasi algoritmik yang menentukan arah pertumbuhan pohon dan harus dipahami secara matematis sebelum diterapkan pada dataset riil.

### Transisi ke Slide Berikutnya

Untuk mengoperasionalkan konsep splitting ini secara kuantitatif, mari kita telusuri lebih lanjut rumus formal Gini Impurity dan Entropy, serta bagaimana Information Gain dihitung secara bertahap untuk memilih fitur optimal pada setiap node.

---

## Slide 011 - Decision Tree: Gini Impurity dan Entropy

### Narasi

Setelah memahami struktur hierarkis decision tree pada slide sebelumnya, kita kini masuk ke mekanisme inti yang menentukan bagaimana pohon tersebut melakukan pemisahan data, yaitu kriteria pengukur ketidakmurnian atau impurity. Yang pertama adalah Gini Impurity. Rumusnya adalah $Gini(t) = 1 - \sum_{j=1}^{k} p_j^2$, di mana $t$ merepresentasikan node tertentu, $k$ adalah jumlah kelas target, dan $p_j$ adalah proporsi sampel yang termasuk dalam kelas $j$ pada node tersebut. Nilai Gini berkisar antara 0 hingga mendekati 1. Ketika nilainya tepat 0, artinya node tersebut sudah murni karena seluruh sampelnya berasal dari satu kelas saja. Sebaliknya, nilai maksimum terjadi ketika distribusi kelas sangat merata atau seragam, yang menandakan ketidakmurnian tertinggi. Dalam implementasi praktis menggunakan scikit-learn, Gini sering menjadi pilihan default karena komputasinya lebih efisien secara matematis dibandingkan entropi.

Alternatif lain yang sangat umum digunakan adalah Entropy, yang berasal dari teori informasi Shannon. Rumusnya adalah $Entropy(t) = -\sum_{j=1}^{k} p_j \log_2 p_j$. Secara konseptual, entropy mengukur tingkat ketidakteraturan atau kekacauan dalam suatu node. Sama seperti Gini, nilai entropy mencapai 0 saat node murni, dan meningkat seiring dengan semakin meratanya distribusi kelas. Untuk memutuskan fitur mana yang paling optimal untuk melakukan splitting, algoritma tidak hanya melihat impurity anak node, melainkan menghitung Information Gain. Information Gain didefinisikan sebagai selisih antara entropy (atau Gini) node parent dikurangi dengan weighted average dari impurity semua child node setelah split, dirumuskan sebagai $IG = Entropy(parent) - \sum_{i} \frac{n_i}{n} Entropy(child_i)$, di mana $n_i$ adalah jumlah sampel pada child node ke-$i$ dan $n$ adalah total sampel parent. Semakin besar nilai Information Gain, semakin efektif fitur tersebut dalam memisahkan kelas.

Intuisi di balik kedua metrik ini dapat disederhanakan: decision tree secara rekursif memilih fitur yang paling mampu mengurangi ketidakmurnian data setelah dilakukan pemisahan. Pada level penelitian magister, penting untuk menyadari bahwa meskipun Gini dan Entropy sering menghasilkan struktur pohon yang serupa, mereka memiliki sensitivitas berbeda terhadap perubahan probabilitas kelas. Dalam eksperimen empiris, pemilihan metrik ini bisa mempengaruhi kompleksitas model akhir, terutama ketika berhadapan dengan dataset yang sangat imbalanced. Pemahaman mendalam tentang formulasi matematika ini menjadi fondasi kritis sebelum kita membahas strategi mitigasi overfitting pada slide berikutnya, mengingat kontrol terhadap kedalaman dan kualitas split sangat bergantung pada bagaimana impurity dihitung selama proses training.

### Inti yang Harus Ditekankan

- Gini Impurity dan Entropy adalah metrik fundamental untuk mengukur ketidakmurnian node, dengan Gini lebih cepat secara komputasi dan Entropy berbasis teori informasi.
- Information Gain mengukur penurunan ketidakmurnian setelah split; algoritma selalu memilih fitur dengan IG tertinggi untuk membangun cabang pohon.
- Pemilihan metrik bukan sekadar teknis, tetapi berdampak pada bias-variance tradeoff model, sehingga perlu dipertimbangkan secara eksplisit dalam desain eksperimen data mining.

### Transisi ke Slide Berikutnya

Dengan pemahaman kuat mengenai bagaimana decision tree mengevaluasi kualitas pemisahan melalui Gini dan Entropy, langkah selanjutnya adalah mengidentifikasi risiko utama yang muncul dari optimasi metrik ini, yaitu overfitting, serta strategi regulasi yang digunakan untuk menjaga generalisasi model. Mari kita lanjutkan ke slide berikutnya.

---

## Slide 012 - Decision Tree: Kelebihan dan Bahaya Overfitting

### Narasi

Setelah pada slide sebelumnya kita membahas bagaimana kriteria pemisahan node ditentukan melalui Gini Impurity dan Entropy untuk memaksimalkan Information Gain, langkah selanjutnya adalah memahami karakteristik struktural dari decision tree itu sendiri. Decision tree memiliki beberapa keunggulan metodologis yang menjadikannya pilihan kuat sebagai baseline dalam eksperimen data mining. Pertama, model ini sangat mudah diinterpretasikan dan divisualisasikan dalam bentuk struktur hierarkis, sehingga peneliti dapat melacak logika pengambilan keputusan hingga ke leaf node. Kedua, decision tree tidak memerlukan scaling atau normalisasi fitur karena algoritma ini bekerja berdasarkan threshold nilai absolut, bukan jarak geometris. Ketiga, secara native, pohon keputusan mampu menangkap interaksi non-linear antar fitur tanpa perlu transformasi manual, yang sering kali menjadi kendala pada model linear tradisional.

Namun, kekuatan tersebut dibayar dengan risiko overfitting yang signifikan jika pertumbuhan pohon tidak dikendalikan. Ketika decision tree dibiarkan tumbuh bebas hingga mencapai kemurnian sempurna pada setiap node, model cenderung menghafal noise dan outlier yang ada pada data pelatihan. Akibatnya, meskipun akurasi pada data latih mendekati seratus persen, performa pada data uji atau data baru akan menurun drastis karena kemampuan generalisasi yang buruk. Dalam konteks penelitian tingkat magister, overfitting bukan sekadar masalah teknis, melainkan ancaman terhadap validitas eksternal hasil eksperimen. Oleh karena itu, manajemen kompleksitas model harus menjadi bagian integral dari desain eksperimen.

Untuk mengatasi masalah overfitting, terdapat empat strategi regulasi kompleksitas yang umum diimplementasikan melalui hiperparameter di library scikit-learn. Parameter `max_depth` membatasi jumlah maksimum level dari root ke leaf, mencegah pohon menjadi terlalu spesifik terhadap pola lokal. `min_samples_split` menentukan jumlah minimum observasi yang diperlukan sebelum suatu node diperbolehkan melakukan split, sehingga cabang-cabang kecil yang mungkin hanya merepresentasikan noise dapat digabung kembali. `min_samples_leaf` mengatur batas minimum sampel pada setiap node terminal, yang efektif menghaluskan prediksi dan mengurangi varians model. Terakhir, `ccp_alpha` mengaktifkan cost-complexity pruning, sebuah mekanisme post-pruning yang secara sistematis menghapus subtree berdasarkan trade-off antara akurasi training dan penalty kompleksitas struktural. Pemilihan kombinasi parameter ini harus didasarkan pada cross-validation dan analisis bias-varians, bukan penyetelan arbitrer.

Sebagai penutup materi decision tree, penting untuk diingat bahwa pohon keputusan tunggal jarang digunakan secara isolasi dalam praktik industri maupun riset mutakhir. Kelemahan utamanya berupa high variance justru menjadi motivasi utama pengembangan metode ensemble. Decision tree berfungsi sebagai blok pembangun (base learner) fundamental yang kemudian dikombinasikan secara paralel atau sekuensial untuk menghasilkan model yang jauh lebih stabil dan akurat. Pemahaman mendalam tentang kontrol kompleksitas pada tree tunggal akan menjadi landasan kritis ketika kita mempelajari mekanisme agregasi dalam ensemble learning.

### Inti yang Harus Ditekankan

- Decision tree unggul dalam interpretabilitas, tidak memerlukan scaling fitur, dan mampu memodelkan relasi non-linear secara native, menjadikannya baseline yang kuat untuk eksplorasi dataset.
- Overfitting terjadi akibat pertumbuhan pohon yang tidak terkendali, menyebabkan model menghafal noise pelatihan dan gagal menggeneralisasi ke data未见.
- Kontrol kompleksitas melalui `max_depth`, `min_samples_split`, `min_samples_leaf`, dan `ccp_alpha` adalah prosedur wajib dalam pipeline eksperimen untuk menyeimbangkan bias-varians.
- Decision tree tunggal bersifat high-variance, sehingga motivasinya menjadi dasar arsitektur ensemble modern seperti Random Forest dan Gradient Boosting.

### Transisi ke Slide Berikutnya

Karena keterbatasan generalisasi decision tree tunggal dapat diredam secara signifikan dengan menggabungkan banyak pohon yang dilatih secara independen, pertemuan selanjutnya akan membahas bagaimana prinsip bagging dan randomisasi fitur diintegrasikan dalam Random Forest untuk menghasilkan model ensemble yang lebih robust dan tahan terhadap overfitting.

---

## Slide 013 - Random Forest: Bagging + Randomisasi Fitur

### Narasi

Setelah pada slide sebelumnya kita membahas bagaimana decision tree tunggal rentan terhadap overfitting akibat varians yang tinggi, Random Forest hadir sebagai solusi ensemble yang secara sistematis mengatasi kelemahan tersebut. Ide utamanya sangat elegan namun efektif: alih-alih mengandalkan satu pohon keputusan, kita membangun banyak decision tree secara independen, lalu menggabungkan prediksi masing-masing pohon melalui mekanisme voting untuk tugas klasifikasi atau rata-rata aritmatik untuk regresi. Pendekatan ini memanfaatkan hukum bilangan besar dan prinsip diversifikasi untuk menghasilkan model yang jauh lebih robust.

Kunci keberhasilan Random Forest terletak pada dua sumber keacakan yang sengaja diinjeksikan selama proses pelatihan. Pertama, bootstrap sampling atau teknik bagging, di mana setiap pohon dilatih menggunakan sampel data acak yang diambil dengan penggantian dari dataset asli. Hal ini menjamin bahwa setiap pohon melihat distribusi data yang sedikit berbeda, sehingga mengurangi korelasi antar pohon. Kedua, random feature selection, di mana pada setiap node split, algoritma tidak mempertimbangkan seluruh fitur secara bersamaan, melainkan hanya memilih subset fitur secara acak untuk mencari pemisahan terbaik. Kombinasi kedua mekanisme ini memastikan bahwa pohon-pohon dalam hutan menjadi cukup beragam, namun tetap akurat secara individu.

Efek gabungan dari kedua strategi randomisasi tersebut adalah penurunan varians model secara signifikan tanpa meningkatkan bias secara berarti. Ketika korelasi antar pohon menurun, agregasi hasilnya menjadi lebih stabil dan tahan terhadap noise maupun outlier pada data latih. Seperti yang terlihat pada diagram alur di slide, dataset asli mengalami proses bootstrap berulang kali untuk menghasilkan subset-data yang kemudian melatih Tree 1 hingga Tree B secara paralel. Output akhir dari seluruh pohon tersebut kemudian disatukan melalui voting atau perhitungan rata-rata, menghasilkan prediksi ensemble yang memiliki generalisasi jauh lebih baik dibandingkan decision tree tunggal.

Meskipun arsitektur ini memberikan performa kuat secara default, stabilitas dan akurasinya sangat bergantung pada seberapa baik kita mengelola parameter internalnya. Pada konteks penelitian tingkat magister, pemahaman mendalam tentang mekanisme ini menjadi fondasi sebelum kita mengevaluasi pengaruh konfigurasi spesifik terhadap kinerja model.

### Inti yang Harus Ditekankan

- Random Forest mengatasi overfitting decision tree tunggal terutama melalui reduksi varians, bukan perubahan bias.
- Diversifikasi model dicapai secara eksplisit oleh dua sumber keacakan: bootstrap sampling (bagging) dan random feature selection per split.
- Pengurangan korelasi antar pohon merupakan syarat utama agar agregasi voting/rata-rata menghasilkan ensemble yang stabil dan generalisasi baik.
- Mekanisme ini menjadikan Random Forest sebagai metode yang sangat toleran terhadap scaling fitur dan struktur data tabular yang kompleks.

### Transisi ke Slide Berikutnya

Untuk mengendalikan keseimbangan antara keragaman pohon dan kapasitas pembelajaran, kita perlu mengatur hyperparameter inti yang secara langsung memengaruhi kedua mekanisme randomisasi tersebut serta kompleksitas struktur pohon.

---

## Slide 014 - Random Forest: Hyperparameter Utama

### Narasi

Setelah memahami mekanisme dasar Random Forest yang mengandalkan bagging dan randomisasi fitur untuk mengurangi varians serta korelasi antar pohon seperti yang telah dibahas pada slide sebelumnya, langkah selanjutnya dalam praktikum maupun riset adalah melakukan tuning terhadap hyperparameter utamanya. Pemilihan dan penyetelan parameter ini bukan sekadar prosedur teknis, melainkan bagian integral dari desain eksperimen yang harus didokumentasikan secara transparan agar hasil penelitian dapat direplikasi dan dibandingkan secara adil.

Tabel pada slide ini merangkum enam hyperparameter kunci yang umumnya diimplementasikan melalui antarmuka `RandomForestClassifier` atau `RandomForestRegressor` di scikit-learn. `n_estimators` mengatur jumlah pohon dalam ensemble; nilai tipikal berada di rentang 100 hingga 1000, di mana peningkatan performa cenderung mencapai titik jenuh setelah jumlah tertentu tanpa penambahan komputasi yang signifikan. `max_depth` membatasi kedalaman maksimal setiap pohon, di mana nilai yang terlalu besar akan meningkatkan kompleksitas model dan risiko overfitting. Sebagai regulasi tambahan, `min_samples_split` dan `min_samples_leaf` berfungsi mencegah split dilakukan pada node yang mengandung terlalu sedikit sampel, sehingga memaksa model belajar pola yang lebih umum dan stabil. `max_features` menentukan berapa banyak fitur yang dipertimbangkan saat mencari split terbaik; pengaturan default seperti `sqrt` atau `log2` secara eksplisit mengaktifkan randomisasi fitur yang disebutkan pada slide 13, sementara `bootstrap` mengonfirmasi penggunaan sampling dengan penggantian yang menjadi fondasi metode bagging.

Dari sisi efisiensi komputasi, Random Forest memiliki keunggulan struktural karena setiap pohon dilatih secara independen, memungkinkan paralelisasi penuh pada arsitektur multi-core atau GPU. Selain itu, algoritma ini secara inheren tahan terhadap outlier dan tidak sensitif terhadap skala fitur, sehingga eliminasi kebutuhan standarisasi atau normalisasi data dapat mempercepat pipeline preprocessing. Karakteristik ini membuat Random Forest sangat cocok digunakan untuk exploratory data analysis, rapid prototyping, dan validasi silang yang membutuhkan iterasi cepat.

Dalam konteks penelitian tingkat magister, Random Forest sering kali berperan sebagai baseline yang sangat sulit dikalahkan pada dataset tabular, terutama ketika feature engineering masih bersifat minimal atau belum dioptimalkan. Menetapkan performa Random Forest sebagai benchmark awal memberikan landasan empiris yang kuat untuk mengukur kontribusi modifikasi arsitektur, teknik regularisasi baru, atau integrasi domain knowledge. Hasil ablation study dan error analysis yang mengacu pada baseline ini akan memperkuat klaim novelti penelitian Anda, sekaligus memastikan bahwa peningkatan akurasi yang dilaporkan benar-benar berasal dari inovasi metodologis, bukan hanya dari penyetelan heuristik semata.

### Inti yang Harus Ditekankan

- Penyetelan `n_estimators`, `max_depth`, `min_samples_split`, dan `min_samples_leaf` secara sistematis menentukan keseimbangan bias-variance dan harus dicatat sebagai bagian dari protokol eksperimen penelitian.
- Random Forest tidak memerlukan scaling fitur dan tahan terhadap outlier, menjadikannya pilihan optimal untuk rapid prototyping dan evaluasi awal sebelum menguji model yang lebih kompleks.
- Pada jenjang S2, Random Forest wajib dijadikan baseline kuat untuk data tabular guna mendukung ablation study, error analysis, dan validasi klaim kontribusi metodologis penelitian.

### Transisi ke Slide Berikutnya

Dengan memahami bagaimana Random Forest beroperasi sebagai ensemble yang robust dan berfungsi sebagai baseline yang solid, kita kini akan beralih ke paradigma pembelajaran mesin yang dibangun di atas prinsip geometris, yaitu Support Vector Machine. Berbeda dengan pendekatan berbasis pohon yang menggabungkan banyak pembatas keputusan lokal, SVM berfokus pada pencarian batas pemisah global dengan margin maksimum, sebuah konsep yang akan kita bedah secara matematis dan intuitif pada slide berikutnya.

---

## Slide 015 - Support Vector Machine (SVM): Intuisi Geometris

### Narasi

Setelah kita menelaah Random Forest sebagai baseline yang tangguh untuk data tabular pada slide sebelumnya, kini kita beralih ke salah satu algoritma klasifikasi paling fundamental dan elegan secara matematis, yaitu Support Vector Machine atau SVM. Berbeda dengan model berbasis pohon yang membangun batas keputusan melalui serangkaian split hierarkis, SVM mengandalkan prinsip optimisasi konveks dengan interpretasi geometris yang sangat jelas. Fokus utamanya bukan sekadar memisahkan dua kelas, melainkan menemukan batas pemisah yang memberikan ruang kosong terbesar di antara keduanya.

Secara geometris, SVM berusaha mencari sebuah hyperplane yang memaksimalkan margin antara dua kelas. Margin ini didefinisikan sebagai jarak terpendek dari hyperplane ke titik-titik data terdekat dari masing-masing kelas. Titik-titik data terdekat inilah yang disebut sebagai support vectors. Nama tersebut mencerminkan peran sentral mereka: hanya support vectors yang secara aktif menentukan posisi dan orientasi hyperplane. Jika semua titik data lainnya digeser sejauh apapun selama masih berada di luar margin, hyperplane tidak akan berubah sama sekali. Sebaliknya, perubahan kecil pada posisi support vectors akan langsung menggeser seluruh batas keputusan.

Secara formal, persamaan hyperplane ditulis sebagai $$w^T x + b = 0$$. Vektor $w$ merupakan normal atau vektor bobot yang tegak lurus terhadap hyperplane dan mengontrol arah kemiringannya, sementara skalar $b$ adalah bias yang mengatur pergeseran hyperplane dari titik origin. Tujuan optimisasi SVM adalah meminimalkan norma $\|w\|$, yang secara ekuivalen berarti memaksimalkan margin. Dalam kerangka teori pembelajaran statistik, memaksimalkan margin berfungsi sebagai bentuk regularisasi struktural yang meminimalkan structural risk, bukan hanya empirical risk. Hal ini menjadikan SVM secara inheren lebih tahan terhadap overfitting dibandingkan model yang hanya mengejar akurasi pelatihan tertinggi, terutama ketika rasio jumlah fitur terhadap jumlah sampel cukup tinggi.

Pendekatan ini juga memberikan implikasi penting dalam desain eksperimen penelitian. Karena SVM secara otomatis melakukan seleksi fitur implisit melalui koefisien $w$ dan membatasi pengaruh hanya pada subset data kritis, model cenderung lebih stabil dan interpretable secara geometris. Namun, kekuatan ini datang dengan trade-off: komputasi pelatihan menjadi lebih intensif saat jumlah sampel tumbuh besar, dan performa mulai menurun jika data tidak dapat dipisahkan secara linear tanpa transformasi tambahan.

### Inti yang Harus Ditekankan

- SVM tidak hanya mencari pemisah kelas, tetapi hyperplane dengan margin maksimum yang secara teoritis meminimalkan structural risk.
- Support vectors adalah satu-satunya titik data yang mempengaruhi model; titik lain diabaikan setelah proses pelatihan selesai.
- Persamaan $w^T x + b = 0$ merepresentasikan batas keputusan, di mana $w$ mengontrol orientasi dan $b$ mengontrol offset dari origin.
- Memaksimalkan margin bertindak sebagai regularisasi inherent yang mendorong generalisasi kuat, menjadikannya baseline yang kompetitif dibanding ensemble methods ketika asumsi linearitas terpenuhi atau mendekati terpenuhi.

### Transisi ke Slide Berikutnya

Meskipun intuisi geometris SVM sangat kuat untuk data yang terpisah secara linear, sebagian besar dataset riil di dunia nyata menampilkan pola yang kompleks dan tidak dapat dipisahkan oleh garis lurus tunggal. Untuk mengatasi keterbatasan ruang fitur asli ini, SVM memanfaatkan mekanisme canggih yang memungkinkan pemetaan non-linear tanpa biaya komputasi eksplisit, yang akan kita bedah secara rinci pada pembahasan mengenai Kernel Trick di slide berikutnya.

---

## Slide 016 - SVM: Kernel Trick untuk Data Non-Linear

### Narasi

Pada slide sebelumnya, kita telah membahas intuisi geometris dari Support Vector Machine, di mana model berusaha mencari hyperplane optimal yang memaksimalkan margin antara dua kelas dalam ruang fitur asli. Namun, dalam praktiknya, sebagian besar dataset nyata—terutama pada konteks penelitian tingkat magister yang sering menangani masalah kompleks—tidak dapat dipisahkan secara linear menggunakan garis atau bidang datar sederhana. Ketika pola hubungan antar variabel bersifat non-linear, pendekatan linear murni akan menghasilkan error klasifikasi yang tinggi dan generalisasi yang buruk. Di sinilah muncul kebutuhan mendasar untuk mengubah representasi data agar menjadi terpisah secara linear tanpa harus meninggalkan struktur informasi aslinya.

Solusi teoretis yang elegan untuk mengatasi batasan ini adalah Kernel Trick. Alih-alih melakukan transformasi eksplisit yang sangat mahal secara komputasi ke ruang berdimensi sangat tinggi (bahkan tak hingga), SVM memanfaatkan fungsi kernel untuk menghitung produk dot product di ruang tertransformasi tersebut secara implisit. Dengan kata lain, kita hanya perlu mendefinisikan bagaimana dua titik data saling berinteraksi di ruang baru, tanpa pernah benar-benar menghitung koordinat masing-masing titik setelah transformasi. Pendekatan ini tidak hanya menghemat sumber daya komputasi, tetapi juga memungkinkan model menangkap batas keputusan yang sangat kompleks dan melengkung, sesuai dengan prinsip *feature engineering* otomatis yang efisien.

Terdapat tiga jenis kernel utama yang tersedia dalam implementasi scikit-learn, masing-masing memiliki karakteristik matematis dan konteks penggunaan yang spesifik. Kernel Linear tetap mempertahankan bentuk $K(x_i, x_j) = x_i^T x_j$, yang cocok ketika data sudah relatif terpisah atau ketika kita menginginkan interpretabilitas maksimal dan kecepatan training. Kernel Polynomial menggunakan rumus $(x_i^T x_j + r)^d$ yang memperhitungkan interaksi derajat tertentu antar fitur, sehingga efektif untuk pola non-linear bertingkat yang membutuhkan kontrol eksak atas kompleksitas interaksi. Sementara itu, Kernel Radial Basis Function (RBF) dengan formula $\exp(-\gamma \|x_i - x_j\|^2)$ merupakan pilihan default yang paling fleksibel karena secara implisit memetakan data ke ruang dimensi tak hingga secara adaptif, menjadikannya sangat kuat untuk berbagai skenario klasifikasi tabular yang umum dijumpai.

Efektivitas Kernel RBF sangat bergantung pada penyetelan dua hyperparameter kunci: C dan gamma. Parameter C mengatur trade-off antara lebar margin dan toleransi terhadap kesalahan klasifikasi (*misclassification*). Nilai C yang kecil akan menghasilkan margin yang lebih lebar dan model yang lebih toleran terhadap noise, namun berisiko underfitting. Sebaliknya, C yang besar akan menekan error training secara agresif, berpotensi menyebabkan overfitting jika tidak dikontrol dengan validasi silang. Di sisi lain, gamma menentukan seberapa jauh pengaruh satu sampel pelatihan terhadap keputusan model. Gamma kecil membuat batas keputusan halus dan mencakup area luas, sedangkan gamma besar membuat model fokus sangat lokal pada setiap titik data, yang dapat meningkatkan varians dan risiko overfitting. Dalam praktik eksperimen, kombinasi optimal kedua parameter ini harus dieksplorasi melalui grid search atau Bayesian optimization yang terintegrasi dengan cross-validation untuk memastikan robustness model.

### Inti yang Harus Ditekankan

- Data nyata jarang *linearly separable*; Kernel Trick menyelesaikan masalah ini secara implisit tanpa beban komputasi eksplisit ke ruang dimensi tinggi.
- RBF Kernel adalah standar de facto untuk kasus non-linear umum karena fleksibilitas pemetaan dimensi tak hingga dan performa konsisten.
- Penyetelan C dan gamma pada RBF bersifat kritis dan saling terkait: C mengontrol regularisasi/global margin, gamma mengontrol radius pengaruh lokal/lokalisasi keputusan.
- Pemilihan kernel dan tuning hyperparameter harus didasari analisis EDA, ablation study, dan validasi empiris, bukan sekadar asumsi atau pengaturan default.

### Transisi ke Slide Berikutnya

Setelah memahami mekanisme kernel dan strategi tuning hyperparameter, langkah selanjutnya adalah mengevaluasi kapan SVM benar-benar layak dijadikan baseline dalam pipeline data mining, serta apa saja keterbatasan praktis yang perlu diantisipasi sebelum beralih ke metode ensemble atau arsitektur neural network.

---

## Slide 017 - SVM: Kelebihan, Keterbatasan, dan Kapan Digunakan

### Narasi

Setelah kita memahami mekanisme *Kernel Trick* pada Slide 16 yang memungkinkan SVM menangani data non-linear, langkah selanjutnya dalam penelitian data mining adalah menentukan kapan algoritma ini seharusnya dipilih sebagai bagian dari rancangan eksperimen. Keunggulan utama SVM terletak pada performanya yang konsisten pada ruang fitur berdimensi tinggi. Berbeda dengan banyak algoritma berbasis jarak atau probabilitas yang rentan terhadap *curse of dimensionality*, SVM tetap stabil karena hanya bergantung pada subset data kritis, yaitu *support vectors*. Prinsip *maximum margin* yang mendasari algoritma ini juga memberikan jaminan teoretis mengenai kemampuan generalisasi, sehingga mengurangi risiko overfitting meskipun jumlah fitur melebihi jumlah sampel. Ketika dikombinasikan dengan kernel RBF seperti yang telah kita pelajari sebelumnya, SVM mampu menangkap pola non-linear yang kompleks tanpa memerlukan transformasi fitur manual yang memakan waktu.

Di sisi lain, sebagai peneliti tingkat magister, kita harus secara kritis mengidentifikasi batasan praktis SVM agar tidak terjadi kesalahan pemilihan metode. Kompleksitas komputasi SVM cenderung meningkat secara kuadratik atau kubik terhadap jumlah sampel, menjadikannya kurang efisien untuk dataset berskala sangat besar yang sering ditemui dalam aplikasi industri modern. Selain itu, model SVM, khususnya yang menggunakan kernel non-linear, bersifat *black-box* dan sulit diinterpretasikan secara langsung, yang dapat menjadi kendala jika studi kasus menuntut transparansi keputusan. Faktor kritis lainnya adalah sensitivitas ekstrem SVM terhadap skala fitur. Variabel dengan magnitudo berbeda akan mendistorsi perhitungan margin dan fungsi kernel. Oleh karena itu, penerapan `StandardScaler` dari library scikit-learn sebelum proses pelatihan bukanlah langkah opsional, melainkan prasyarat mutlak untuk menjamin stabilitas numerik dan reproduktibilitas hasil eksperimen.

Dalam konteks perancangan baseline metodologis, SVM sebaiknya ditempatkan pada niche spesifik. Algoritma ini menjadi baseline yang sangat kuat untuk dataset tabular berukuran menengah, berkisar antara ribuan hingga puluhan ribu sampel. Ia ideal digunakan ketika data numerik memiliki struktur yang relatif dapat dipisahkan, namun kita ingin menghindari kompleksitas komputasi dan tuning hyperparameter yang masif dari model jaringan saraf tiruan. Menggunakan SVM sebagai titik awal memungkinkan kita membangun referensi performa yang solid, sehingga setiap peningkatan dari model berikutnya dapat diukur secara objektif melalui analisis ablation dan error analysis, sesuai dengan standar evaluasi penelitian data mining yang rigor.

### Inti yang Harus Ditekankan

- SVM menawarkan generalisasi teoretis yang kuat berkat prinsip *maximum margin*, menjadikannya pilihan stabil untuk data berdimensi tinggi.
- Penerapan `StandardScaler` adalah wajib mutlak; tanpa normalisasi skala fitur, performa SVM akan terdegradasi secara signifikan.
- Sebagai baseline penelitian, SVM paling optimal pada dataset tabular berukuran menengah (ribuan–puluhan ribu sampel) ketika metode linear gagal tetapi model deep learning masih terlalu kompleks.
- Keterbatasan utama meliputi skalabilitas pada data raksasa dan sifatnya yang sulit diinterpretasi, sehingga pemilihan metode harus selalu disesuaikan dengan karakteristik dataset dan tujuan penelitian.

### Transisi ke Slide Berikutnya

Sementara SVM mengandalkan pemisahan margin global, pendekatan alternatif yang justru menyimpan seluruh memori pembelajaran ada pada instance-based learning, yang akan kita bedah bersama pada slide berikutnya tentang k-Nearest Neighbors.

---

## Slide 018 - k-Nearest Neighbors (kNN): Instance-Based Learning

### Narasi

Berbeda dengan model parametrik seperti Support Vector Machine yang mempelajari batas keputusan optimal selama fase pelatihan, k-Nearest Neighbors atau kNN mengadopsi pendekatan *instance-based learning* yang dikenal juga sebagai *lazy learning*. Pada paradigma ini, tidak terdapat proses optimisasi parameter, minimisasi fungsi kerugian, atau ekstraksi pola abstrak dari data historis. Seluruh dataset pelatihan disimpan secara utuh dalam memori sebagai basis referensi. Komputasi intensif ditunda hingga waktu inferensi, sehingga fase "pelatihan" secara teknis hanyalah tahap pembebanan data (*data loading*) tanpa transformasi struktural.

Alur prediksi pada kNN bersifat deterministik dan sepenuhnya bergantung pada prinsip kemiripan lokal. Ketika sebuah sampel baru diinputkan, sistem akan menghitung jarak antara sampel tersebut dengan setiap titik data dalam set pelatihan. Setelah semua jarak terhitung, algoritma akan mengurutkannya secara ascending dan memilih k titik dengan jarak terpendek sebagai tetangga terdekat. Untuk tugas klasifikasi, kelas yang diprediksi ditentukan melalui mekanisme *majority voting*, di mana label kelas yang paling dominan di antara k tetangga tersebut menjadi hasil akhir. Sementara itu, untuk regresi, nilai target yang dihasilkan merupakan rata-rata aritmatik dari nilai target k tetangga terdekat, sehingga menghasilkan estimasi yang halus berdasarkan konteks lokal.

Akurasi dan stabilitas prediksi kNN sangat sensitif terhadap definisi "kemiripan" yang digunakan, yang secara matematis direpresentasikan melalui metrik jarak. Jarak Euclidean merupakan pilihan default karena efektif mengukur jarak garis lurus dalam ruang multidimensi dan umumnya cocok untuk data numerik kontinu dengan distribusi homogen. Namun, jika data memiliki struktur berbasis grid atau jalur ortogonal, jarak Manhattan dapat memberikan representasi yang lebih akurat. Selain itu, untuk data berdimensi tinggi seperti vektor sparse atau embedding teks, Cosine similarity lebih disarankan karena fokus pada kesamaan orientasi vektor daripada magnitudonya, sehingga mitigasi dampak dimensi berlebih terhadap perhitungan jarak.

Meskipun konsepnya sederhana dan mudah diimplementasikan, pemahaman mendalam tentang mekanisme kerja kNN menjadi fondasi metodologis yang krusial. Kesederhanaan algoritma ini justru menyembunyikan kompleksitas implikasi praktis, terutama terkait sensitivitas terhadap hiperparameter dan kebutuhan pra-pemrosesan data, yang akan kita analisis secara kritis pada pembahasan selanjutnya.

### Inti yang Harus Ditekankan

- kNN adalah algoritma *lazy learning* yang tidak melakukan generalisasi selama fase pelatihan, melainkan mengandalkan penyimpanan penuh dataset referensi untuk inferensi dinamis.
- Mekanisme prediksi bersifat non-parametrik dan sepenuhnya bergantung pada kedekatan geometris atau kemiripan statistik antar titik data dalam ruang fitur.
- Pemilihan metrik jarak harus diseleksi secara sadar sesuai dengan karakteristik distribusi, tipe fitur, dan struktur dimensi data agar representasi kemiripan tetap valid secara matematis.

### Transisi ke Slide Berikutnya

Dengan memahami dasar kerja dan metrik jarak pada kNN, langkah analitis berikutnya adalah menelaah bagaimana pemilihan nilai k secara langsung mempengaruhi bias-variance trade-off, mengapa normalisasi skala fitur menjadi prasyarat mutlak sebelum perhitungan jarak, serta batasan komputasional dan fenomena *curse of dimensionality* yang sering membatasi penerapan metode ini pada dataset berskala besar.

---

## Slide 019 - kNN: Peran k, Skala Fitur, dan Keterbatasan

### Narasi

Setelah memahami konsep dasar k-Nearest Neighbors sebagai metode instance-based learning yang mengandalkan perhitungan jarak antar titik data pada slide sebelumnya, kita kini perlu menyoroti aspek-aspek teknis yang menentukan performa praktis algoritma ini. Pemilihan nilai parameter $k$ menjadi faktor penentu utama dalam menyeimbangkan kompleksitas model. Berdasarkan tabel pengaruh nilai $k$, penggunaan nilai kecil antara 1 hingga 3 cenderung menghasilkan low bias namun high variance. Model akan sangat sensitif terhadap noise atau outlier lokal, sehingga rawan overfitting terhadap pola spesifik data pelatihan. Sebaliknya, ketika nilai $k$ dibuat besar, model mengalami high bias dan low variance karena batas keputusan menjadi terlalu halus dan mengabaikan struktur lokal data. Rentang nilai sedang antara 5 hingga 15 umumnya menawarkan trade-off yang wajar, namun dalam praktik penelitian tingkat magister, pemilihan $k$ tidak boleh dilakukan secara arbitrer. Nilai optimal harus ditentukan melalui validasi silang (cross-validation) atau grid search untuk memastikan generalisasi yang robust dan menghindari bias seleksi manual.

Aspek kedua yang tak kalah vital adalah masalah skala fitur. Karena mekanisme inti kNN bergantung sepenuhnya pada perhitungan jarak geometris di ruang multidimensi, setiap fitur yang memiliki satuan atau rentang nilai berbeda akan mendominasi perhitungan jarak. Fitur dengan skala numerik besar akan dianggap lebih dominan daripada fitur berskala kecil, meskipun secara domain keduanya sama pentingnya. Oleh karena itu, standarisasi fitur adalah prasyarat mutlak sebelum proses pembelajaran. Perhatikan cuplikan kode berikut yang mengadopsi standar industri dari pustaka scikit-learn:
```python
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
```
Baris pertama mengimpor kelas `StandardScaler` yang akan mengubah distribusi setiap fitur agar memiliki rata-rata nol dan varians satu. Baris kedua menginisialisasi objek scaler, dan baris ketiga melakukan transformasi sekaligus menyimpan statistik pelatihan melalui metode `fit_transform`. Dalam pipeline penelitian yang ketat, operasi `fit` hanya boleh dijalankan pada data pelatihan untuk mencegah data leakage, sedangkan data uji hanya boleh diproses dengan `transform` menggunakan parameter yang sudah tersimpan.

Meskipun intuitif dan mudah diimplementasikan, kNN memiliki keterbatasan struktural yang perlu dipahami secara metodologis. Pertama, kompleksitas komputasi saat prediksi mencapai orde $O(n \times d)$, di mana $n$ adalah jumlah sampel pelatihan dan $d$ adalah jumlah fitur. Hal ini membuat inference menjadi lambat secara signifikan ketika diterapkan pada dataset berukuran besar atau berdimensi tinggi. Kedua, fenomena curse of dimensionality menyebabkan jarak Euclidean antar titik di ruang berdimensi tinggi cenderung konvergen, sehingga konsep "tetangga terdekat" kehilangan makna statistik dan daya diskriminatif. Ketiga, dalam banyak benchmark modern, kNN sering kali dikalahkan oleh model berbasis pohon atau ensemble learning. Namun, justru karena kesederhanaannya dan sifatnya yang non-parametrik, kNN tetap memegang peran strategis sebagai baseline referensi. Dalam konteks penelitian S2, melaporkan hasil kNN memberikan titik awal yang objektif untuk mengukur apakah peningkatan kompleksitas model berikutnya benar-benar memberikan gain signifikan, atau sekadar menambah overhead komputasi tanpa perbaikan performa yang bermakna.

### Inti yang Harus Ditekankan

- Pemilihan nilai $k$ merupakan manifestasi langsung dari bias-variance tradeoff; gunakan validasi silang untuk tuning, hindari pemilihan subjektif.
- Standarisasi fitur adalah keharusan untuk algoritma berbasis jarak; pastikan pipeline preprocessing memisahkan `fit` (hanya pada train) dan `transform` (pada train dan test).
- Keterbatasan kNN terletak pada beban komputasi $O(n \times d)$ dan curse of dimensionality, namun nilainya tetap sebagai baseline referensi yang esensial untuk evaluasi eksperimen yang adil.
- Dalam desain penelitian data mining, kNN berfungsi sebagai kontrol eksperimen untuk membuktikan bahwa model kompleks tambahan memberikan improvement yang valid secara statistik dan komputasional.

### Transisi ke Slide Berikutnya

Dengan memahami batasan dan karakteristik kNN sebagai classifier maupun regressor berbasis jarak, kita dapat melangkah ke perbedaan fundamental antara tugas klasifikasi dan regresi. Slide berikutnya akan membahas konsep regresi secara mendalam, mulai dari definisi target kontinu, perbedaan metrik evaluasi, serta daftar model regresi yang umum digunakan dalam praktik data mining modern.

---

## Slide 020 - Regression: Konsep dan Perbedaan dengan Klasifikasi

### Narasi

Setelah membahas mekanika k-Nearest Neighbors pada slide sebelumnya yang dapat diadaptasi untuk kedua jenis tugas, kita kini fokus secara eksplisit pada konsep regresi. Secara fundamental, regresi adalah paradigma pembelajaran mesin yang bertujuan memprediksi nilai numerik kontinu berdasarkan serangkaian fitur atau variabel independen. Berbeda dengan masalah yang menghasilkan label diskrit, output dalam regresi bersifat riil dan dapat mengambil nilai berapapun dalam suatu rentang, menjadikannya alat utama untuk pemodelan kuantitatif dalam riset data mining.

Pembedaan yang tegas antara regresi dan klasifikasi bukan hanya soal terminologi, tetapi menentukan arsitektur pipeline penelitian. Pada klasifikasi, targetnya adalah kategori, output model umumnya berupa skor probabilitas yang kemudian dipotong menjadi label kelas, dan evaluasinya mengandalkan metrik seperti Accuracy, F1-Score, atau AUC-ROC yang mengukur ketepatan pengelompokan. Sebaliknya, regresi bekerja dengan target bernilai kontinu. Model menghasilkan estimasi numerik langsung, sehingga evaluasi harus menggunakan metrik berbasis magnitudo kesalahan seperti Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), atau koefisien determinasi R² yang mengkuantifikasi seberapa besar varians data yang berhasil ditangkap model. Sebagai contoh konkret, memisahkan email spam atau ham adalah masalah klasifikasi, sedangkan memperkirakan harga properti berdasarkan luas bangunan, jumlah kamar, dan jarak ke pusat kota adalah masalah regresi.

Dalam praktik dan literatur mutakhir, ekosistem model regresi sangat beragam dan masing-masing memiliki trade-off yang perlu dipertimbangkan saat merancang eksperimen. Model linear seperti Linear Regression menawarkan interpretabilitas tinggi dan efisiensi komputasi, sementara Ridge dan Lasso menambahkan penalti regulasi untuk mengatasi overfitting dan melakukan seleksi fitur otomatis. Pendekatan berbasis pohon seperti Decision Tree Regressor dan Random Forest Regressor mampu menangkap pola non-linear dan interaksi kompleks tanpa asumsi distribusi ketat. Selain itu, Support Vector Regression (SVR) tetap relevan untuk ruang fitur berdimensi tinggi, dan kNN Regressor merupakan adaptasi langsung dari versi klasifikasinya yang menggunakan rata-rata nilai tetangga terdekat. Pilihan algoritma ini harus selaras dengan karakteristik data, ketersediaan komputasi, dan tujuan investigasi ilmiah yang ingin dicapai.

### Inti yang Harus Ditekankan

- Regresi berfokus pada prediksi nilai kontinu, sehingga mengubah seluruh pendekatan pemodelan, representasi output, dan strategi evaluasi dibandingkan klasifikasi.
- Pemilihan metrik evaluasi (MAE, RMSE, R² vs Accuracy, F1, AUC) harus konsisten dengan sifat target data dan menjadi dasar perbandingan model yang valid dalam penelitian.
- Ketersediaan berbagai keluarga model regresi memberikan fleksibilitas, namun penetapan baseline yang kuat dan pembenaran pemilihan algoritma menjadi prasyarat metodologis untuk klaim kontribusi ilmiah yang kredibel.

### Transisi ke Slide Berikutnya

Dari peta model regresi yang telah kita tinjau, langkah logis selanjutnya adalah membedah fondasi paling dasar sekaligus standar emas dalam benchmarking, yaitu Linear Regression beserta varian regularisasinya seperti Ridge, Lasso, dan ElasticNet yang akan kita analisis secara matematis dan implementatif pada slide berikutnya.

---

## Slide 021 - Linear Regression dan Variasi Regularisasi

### Narasi

Pada slide ini, kita akan mengupas fondasi matematis dari regresi linier, model yang menjadi titik awal wajib sebelum memasuki algoritma yang lebih kompleks. Secara fundamental, regresi linier memodelkan hubungan linear antara fitur input dan target kontinu melalui persamaan $\hat{y} = w_0 + w_1 x_1 + w_2 x_2 + ... + w_d x_d$. Di sini, $w_0$ merepresentasikan intercept atau bias, sementara $w_1$ hingga $w_d$ adalah bobot (weights) yang menentukan seberapa besar kontribusi setiap fitur terhadap prediksi. Proses pembelajaran model ini bertujuan untuk mencari nilai optimal dari bobot-bobot tersebut sehingga kesalahan prediksi dapat diminimalkan secara sistematis.

Untuk mengukur seberapa baik model memprediksi data aktual, kita menggunakan fungsi kerugian atau loss function. Dalam konteks regresi linier standar, Mean Squared Error (MSE) menjadi pilihan utama karena sifatnya yang memberikan penalti lebih besar terhadap error yang signifikan. Rumus MSE dinyatakan sebagai $MSE = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$, di mana $y_i$ adalah nilai observasi sebenarnya dan $\hat{y}_i$ adalah nilai prediksi model. Dengan meminimalkan MSE, kita memastikan bahwa garis regresi berada sedekat mungkin dengan titik-titik data pelatihan secara keseluruhan. Namun, optimasi MSE murni pada dataset yang memiliki fitur sangat banyak atau berkorelasi tinggi sering kali rentan terhadap overfitting dan ketidakstabilan koefisien.

Untuk mengatasi masalah overfitting dan meningkatkan generalisasi, teknik regularisasi diperkenalkan dengan menambahkan komponen penalti pada fungsi kerugian. Terdapat tiga varian utama yang perlu dipahami secara mendalam. Pertama, Ridge Regression menerapkan penalti berbasis kuadrat koefisien ($\lambda \sum w_j^2$), yang berfungsi menyusutkan nilai bobot mendekati nol tanpa pernah benar-benar mencapai nol, sehingga semua fitur tetap dipertahankan dalam model. Kedua, Lasso Regression menggunakan penalti berbasis absolut ($\lambda \sum \|w_j\|$), yang memiliki kemampuan unik untuk mendorong bobot tertentu menjadi tepat nol, sehingga secara otomatis melakukan seleksi fitur. Ketiga, ElasticNet menggabungkan kedua pendekatan tersebut, menawarkan fleksibilitas untuk menyeimbangkan antara penyusutan bobot dan seleksi fitur, yang sangat berguna ketika terdapat fitur-fitur yang saling berkorelasi kuat.

Dari perspektif penelitian tingkat magister, linear regression bukan sekadar algoritma dasar, melainkan baseline kritis yang harus selalu dievaluasi terlebih dahulu. Jika model ensemble, tree-based, atau neural network yang Anda kembangkan tidak mampu melampaui performa linear regression yang telah dituning hyperparameternya, klaim kontribusi ilmiah atau novelti metode tersebut patut dipertanyakan. Pemahaman tentang bagaimana regularisasi mengatur kompleksitas model ini akan membawa kita secara natural ke konsep teoretis berikutnya, yaitu dekomposisi error melalui Bias-Variance Trade-off, yang akan menjelaskan mekanisme matematis mengapa penambahan penalti justru membantu mengurangi variance tanpa menaikkan bias secara drastis.

### Inti yang Harus Ditekankan

- Persamaan linear regression dan MSE merupakan fondasi matematis yang harus dikuasai sebelum beralih ke model non-linear atau black-box.
- Regularisasi (Ridge, Lasso, ElasticNet) bukan hanya trik teknis, melainkan mekanisme kontrol kompleksitas yang secara eksplisit mempengaruhi interpretabilitas dan stabilitas model.
- Dalam riset data mining, linear regression yang dituning dengan baik wajib dijadikan baseline mutlak; kegagalan model kompleks mengalahkan baseline ini menandakan adanya flaw dalam desain eksperimen atau preprocessing data.

### Transisi ke Slide Berikutnya

Dengan memahami bagaimana regularisasi mengendalikan bobot model, kita kini siap membedah landasan teoretis di balik perilaku model tersebut. Mari kita lanjutkan ke analisis dekomposisi error melalui Bias-Variance Trade-off untuk melihat secara matematis mengapa model yang terlalu sederhana atau terlalu kompleks justru gagal generalize.

---

## Slide 022 - Bias-Variance Trade-off: Landasan Teoretis

### Narasi

Pada slide sebelumnya, kita telah membahas Linear Regression beserta variasi regularisasinya seperti Ridge, Lasso, dan ElasticNet sebagai baseline minimal untuk masalah regresi. Namun, mengapa model tertentu bisa gagal menangkap pola data dengan baik? Di sinilah konsep Bias-Variance Trade-off hadir sebagai landasan teoretis fundamental dalam memahami perilaku model machine learning. Pemahaman ini bukan sekadar teori statistik, melainkan kerangka kerja kritis yang menentukan bagaimana kita mengevaluasi dan memilih model, terutama dalam konteks penelitian tingkat magister di mana klaim kontribusi ilmiah harus didukung oleh analisis performa yang rigor.

Secara matematis, error prediksi model dapat didekomposisi menjadi tiga komponen utama: Bias kuadrat, Variance, dan Irreducible Error. Mari kita bedah satu per satu. Bias mengacu pada kesalahan sistematis yang muncul ketika asumsi model terlalu sederhana sehingga gagal menangkap hubungan non-linear atau kompleksitas sebenarnya dari data. Sebaliknya, Variance mengukur seberapa sensitif model terhadap fluktuasi kecil dalam dataset pelatihan; model dengan variance tinggi akan menghasilkan prediksi yang sangat berbeda jika dilatih pada subset data yang sedikit berbeda. Terakhir, Irreducible Error adalah noise intrinsik dalam data itu sendiri yang tidak dapat dikurangi oleh model apa pun, karena keterbatasan informasi atau pengukuran yang tidak sempurna.

Hubungan antara kedua komponen error ini membentuk sebuah trade-off yang sering divisualisasikan sebagai spektrum kontinu. Di ujung kiri spektrum, bias yang tinggi menyebabkan underfitting, di mana model terlalu sederhana dan gagal belajar pola dasar dari data latih maupun data uji. Di ujung kanan, variance yang tinggi memicu overfitting, di mana model justru menghafal noise dan detail spesifik dari data pelatihan sehingga performanya buruk saat menghadapi data baru. Titik optimal terletak di tengah, di mana total error diminimalkan melalui keseimbangan antara kompleksitas model dan kemampuannya untuk generalisasi. Dalam praktik menggunakan library seperti scikit-learn, trade-off ini secara eksplisit terlihat ketika kita membandingkan linear models yang cenderung memiliki bias tinggi tetapi variance rendah, versus decision trees dalam atau ensemble methods yang menurunkan bias namun meningkatkan risiko variance.

Memahami dekomposisi error ini menjadi prasyarat mutlak sebelum kita masuk ke penerapan praktisnya. Pada slide berikutnya, kita akan melihat bagaimana berbagai algoritma klasifikasi dan regresi ditempatkan dalam matriks kompleksitas berdasarkan profil bias-variance mereka, serta bagaimana implikasinya dalam merancang eksperimen penelitian yang valid. Cross-validation dan analisis fold-by-fold akan menjadi kunci untuk mendeteksi apakah model Anda berada di wilayah underfitting atau overfitting, sekaligus memastikan bahwa baseline yang Anda bangun benar-benar kuat secara statistik.

### Inti yang Harus Ditekankan

- Dekomposisi error terdiri dari Bias², Variance, dan Irreducible Error yang masing-masing mewakili sumber kegagalan model yang berbeda dan harus dianalisis secara terpisah.
- Trade-off bias-variance menjelaskan mengapa model terlalu sederhana (underfitting) dan terlalu kompleks (overfitting) sama-sama menghasilkan error tinggi, sehingga tujuan utamanya adalah meminimalkan total error, bukan hanya salah satu komponennya.
- Pemahaman teoretis ini menjadi fondasi metodologis untuk evaluasi model berbasis bukti dalam penelitian data mining, memastikan bahwa pilihan model didasarkan pada analisis generalisasi, bukan sekadar akurasi permukaan.

### Transisi ke Slide Berikutnya

Dengan pemahaman landasan teoretis ini, kita siap menerapkannya secara konkret. Pada slide berikutnya, kita akan memetakan berbagai algoritma ke dalam matriks kompleksitas model, menganalisis profil bias-variance masing-masing, serta melihat bagaimana cross-validation membantu menemukan titik optimal tersebut dalam desain eksperimen penelitian.

---

## Slide 023 - Menerapkan Bias-Variance dalam Praktik

### Narasi

Setelah membahas landasan teoretis dekomposisi error pada slide sebelumnya, kita kini beralih ke penerapan praktis konsep bias-variance dalam pemilihan dan evaluasi model. Dalam praktik data mining tingkat lanjut, pemahaman teoritis harus diterjemahkan ke dalam strategi eksperimental yang terukur. Matriks kompleksitas model yang Anda lihat sekarang berfungsi sebagai peta navigasi untuk memilih algoritma awal berdasarkan profil statistik masing-masing metode sebelum memasuki tahap tuning yang lebih intensif.

Linear regression secara inheren memiliki bias tinggi dan varians rendah, sehingga sering mengalami underfitting ketika dihadapkan pada data dengan pola non-linear atau interaksi fitur yang rumit. Di sisi lain, decision tree yang dibiarkan tumbuh sangat dalam akan menekan bias mendekati nol, namun variansnya meledak akibat overfitting terhadap noise pelatihan. Random forest menawarkan keseimbangan melalui ensemble averaging, menurunkan varians secara signifikan sambil mempertahankan bias yang terkendali. Pada support vector machine, pengaturan parameter regularisasi C yang terlalu besar akan memaksa model mengikuti setiap fluktuasi data, menghasilkan bias rendah tetapi varians tinggi yang rentan terhadap outlier. Prinsip serupa berlaku pada k-nearest neighbors dengan nilai k yang kecil; model menjadi sangat lokal dan sensitif, sehingga variansnya tinggi meskipun biasnya rendah.

Implikasi metodologisnya bagi penelitian tingkat magister sangat krusial. Membangun baseline yang kuat berarti secara sengaja memilih model yang berada pada titik trade-off yang rasional, bukan sekadar melakukan penyetelan hyperparameter secara trial-and-error. Cross-validation adalah mekanisme wajib untuk mengidentifikasi kompleksitas optimal, karena ia mengukur konsistensi model lintas partisi data. Model dengan varians tinggi sering kali menipu peneliti dengan memberikan skor performa yang unggul pada satu fold tertentu, namun akan menunjukkan fragilitas yang nyata pada fold lainnya. Stabilitas lintas fold harus menjadi prasyarat sebelum model dianggap layak untuk dievaluasi lebih lanjut menggunakan metrik klasifikasi spesifik.

### Inti yang Harus Ditekankan

- Pemilihan model baseline harus didasarkan pada pemahaman profil bias-varians masing-masing algoritma, bukan hanya pada akurasi mentah atau popularitas metode.
- Cross-validation adalah instrumen esensial untuk mendeteksi varians tinggi dan memastikan stabilitas performa model sebelum klaim penelitian diajukan.
- Baseline penelitian yang valid terletak pada titik keseimbangan trade-off yang wajar, bukan pada model yang dioptimalkan secara sembarangan tanpa verifikasi silang.

### Transisi ke Slide Berikutnya

Setelah memastikan model baseline telah melewati uji stabilitas dan berada pada titik trade-off yang tepat, langkah selanjutnya adalah mengukur seberapa akurat prediksi tersebut terhadap realitas kelas. Kita akan masuk ke komponen fundamental evaluasi klasifikasi, yaitu confusion matrix, untuk membedah kesalahan prediksi secara granular.

---

## Slide 024 - Evaluasi Klasifikasi: Confusion Matrix

### Narasi

Setelah pada slide sebelumnya kita mendiskusikan bagaimana mengidentifikasi dan mengelola trade-off antara bias dan variance melalui kompleksitas model serta cross-validation, langkah logis berikutnya dalam pipeline evaluasi model adalah melihat bagaimana classifier sebenarnya menghasilkan keputusan prediksi pada level instance. Confusion Matrix atau Matriks Kebingungan hadir sebagai representasi tabular fundamental yang memetakan hubungan antara label aktual dan label yang diprediksi oleh model. Struktur ini menjadi landasan kuantitatif sebelum kita melangkah ke perhitungan metrik agregat yang lebih kompleks.

Pada konfigurasi klasifikasi biner, confusion matrix membagi seluruh prediksi menjadi empat kuadran berdasarkan kebenaran hasilnya. True Positive (TP) merepresentasikan kasus di mana instance yang sebenarnya positif berhasil dikenali oleh model sebagai positif. True Negative (TN) sebaliknya, menunjukkan bahwa instance negatif berhasil diidentifikasi dengan tepat. Dua elemen lainnya mencerminkan kesalahan prediksi yang memiliki bobot risiko berbeda. False Positive (FP) atau Type I error terjadi ketika data sebenarnya negatif却被 salah diklasifikasikan sebagai positif. Sementara itu, False Negative (FN) atau Type II error terjadi ketika data sebenarnya positif justru luput dan diprediksi sebagai negatif. Dalam konteks penelitian S2, pemahaman terhadap distribusi keempat nilai ini jauh lebih bernilai daripada sekadar melihat akurasi mentah, karena setiap sel dalam matriks mengungkap pola kegagalan atau kekuatan spesifik model terhadap karakteristik data.

Poin kritis yang perlu diperhatikan adalah bahwa confusion matrix bersifat deterministik terhadap satu titik ambang batas (decision threshold) yang digunakan saat konversi probabilitas menjadi label kelas. Perubahan threshold akan secara langsung menggeser jumlah TP, TN, FP, dan FN, sehingga mengubah seluruh komposisi matriks. Hal ini menegaskan bahwa metrik-metrik turunan yang akan kita bahas pada slide berikutnya—seperti accuracy, precision, recall, dan F1-score—adalah sepenuhnya threshold-dependent. Dalam praktik riset, pemilihan threshold optimal tidak boleh dilakukan secara arbitrer, melainkan harus dioptimalkan berdasarkan analisis cost-sensitive, kurva ROC, atau kebutuhan domain yang menuntut dominasi salah satu jenis error di atas lainnya.

Secara metodologis, confusion matrix berfungsi sebagai alat diagnostik yang memungkinkan peneliti melakukan error analysis sistematis. Dengan menganalisis proporsi Type I versus Type II error, mahasiswa dapat merumuskan hipotesis perbaikan model, memilih strategi resampling yang tepat untuk menangani class imbalance, atau memutuskan apakah penyesuaian threshold lebih efektif daripada modifikasi arsitektur model. Tanpa pemahaman yang kuat terhadap struktur ini, evaluasi performa model akan kehilangan kedalaman analitis yang diperlukan untuk publikasi berstandar internasional.

### Inti yang Harus Ditekankan

- Confusion matrix adalah fondasi evaluatif yang memetakan TP, TN, FP, dan FN sebagai basis objektif untuk analisis error, bukan sekadar tabel hitungan.
- Type I error (FP) dan Type II error (FN) memiliki implikasi biaya dan risiko yang berbeda; pemilihan fokus evaluasi harus disesuaikan dengan konteks masalah dan tujuan penelitian.
- Matriks ini hanya valid untuk satu decision threshold tertentu; seluruh metrik turunan bersifat threshold-dependent, sehingga optimisasi threshold merupakan bagian integral dari eksperimen model.
- Dalam riset tingkat magister, interpretasi confusion matrix harus diarahkan pada error analysis dan justifikasi metrik pilihan, bukan pelaporan angka performa tanpa konteks.

### Transisi ke Slide Berikutnya

Dengan memahami struktur dan ketergantungan threshold pada confusion matrix, kita kini siap menurunkan nilai-nilai tersebut menjadi metrik evaluasi yang lebih ringkas dan mudah dibandingkan. Pada slide berikutnya, kita akan menguraikan rumus serta kondisi penggunaan Accuracy, Precision, Recall, dan F1-Score, lengkap dengan strategi pemilihan metrik yang paling relevan terhadap karakteristik dataset dan tujuan penelitian Anda.

---

## Slide 025 - Metrik Klasifikasi: Accuracy, Precision, Recall, F1

### Narasi

Pada slide sebelumnya, kita telah membangun fondasi evaluasi klasifikasi melalui Confusion Matrix yang memetakan empat komponen dasar: True Positive (TP), True Negative (TN), False Positive (FP), dan False Negative (FN). Dari struktur matriks inilah, berbagai metrik kuantitatif diturunkan untuk mengukur performa model secara spesifik. Slide ini akan menguraikan empat metrik paling fundamental dalam klasifikasi: Accuracy, Precision, Recall, dan F1-Score, lengkap dengan rumus matematisnya serta konteks strategis penggunaannya dalam penelitian data mining tingkat magister.

Accuracy dihitung dari rasio prediksi benar terhadap total seluruh sampel, dirumuskan sebagai $\frac{TP + TN}{TP + TN + FP + FN}$. Secara intuitif, metrik ini memberikan gambaran umum seberapa sering model membuat prediksi yang tepat. Namun, dalam konteks riset S2, Accuracy memiliki kelemahan struktural yang harus disadari: metrik ini hanya bermakna ketika distribusi kelas dalam dataset seimbang dan biaya kesalahan (error cost) antara false positive dan false negative dianggap sama. Ketika dataset mengalami ketidakseimbangan kelas, Accuracy dapat memberikan ilusi performa tinggi meskipun model gagal mendeteksi kelas minoritas secara signifikan.

Precision dan Recall menawarkan lensa evaluasi yang lebih tajam terhadap sifat kesalahan model. Precision, atau $\frac{TP}{TP + FP}$, mengukur proporsi instance yang diprediksi positif dan benar-benar positif. Metrik ini menjadi prioritas utama ketika biaya salah prediksi positif (FP) sangat tinggi, misalnya pada sistem filter spam di mana email penting yang terklasifikasi sebagai spam dapat mengakibatkan kerugian operasional atau kehilangan informasi kritis. Sebaliknya, Recall, atau $\frac{TP}{TP + FN}$, mengukur kemampuan model dalam menangkap seluruh instance positif yang sebenarnya. Recall harus diutamakan ketika biaya gagal mendeteksi positif (FN) berisiko fatal, seperti pada diagnosis penyakit langka, deteksi ancaman keamanan siber, atau screening kualitas produk manufaktur.

Karena Precision dan Recall umumnya memiliki hubungan trade-off (peningkatan satu sering diikuti penurunan yang lain), F1-Score hadir sebagai metrik penyeimbang yang menggabungkan keduanya. Dirumuskan sebagai $F1 = 2 \times \frac{Precision \times Recall}{Precision + Recall}$, F1-Score merupakan harmonic mean dari Precision dan Recall. Nilai harmonic mean secara alami menghukum hasil ekstrem di mana salah satu komponen mendekati nol, sehingga F1 memberikan gambaran yang lebih realistis daripada rata-rata aritmatik biasa. Dalam praktik implementasi menggunakan `scikit-learn`, keempat metrik ini dapat dievaluasi secara bersamaan melalui fungsi `classification_report`, yang secara otomatis menghitung nilai per kelas, weighted average, dan macro/micro average sesuai kebutuhan analisis.

Pemilihan metrik evaluasi bukanlah keputusan teknis belaka, melainkan cerminan dari perumusan research question dan pemahaman mendalam terhadap konsekuensi domain problem. Sebagai peneliti, Anda wajib mampu menjustifikasi pemilihan metrik berdasarkan karakteristik dataset, distribusi kelas, dan dampak praktis dari setiap jenis kesalahan prediksi. Perlu diingat bahwa semua metrik yang dibahas di sini bersifat threshold-dependent, artinya nilai numeriknya berubah bergantung pada ambang batas keputusan model. Untuk mengatasi keterbatasan ini dan mengevaluasi performa model secara holistik lintas berbagai threshold, kita akan melanjutkan pembahasan ke slide berikutnya mengenai ROC-AUC dan PR-AUC yang memberikan gambaran performa model yang lebih robust dan independent terhadap penentuan threshold.

### Inti yang Harus Ditekankan

- Accuracy hanya valid dan informatif pada dataset seimbang dengan biaya error yang simetris; jangan jadikan Accuracy sebagai satu-satunya metrik utama dalam desain eksperimen S2.
- Precision fokus pada akurasi prediksi positif (meminimalkan FP), sedangkan Recall fokus pada cakupan temuan positif (meminimalkan FN); pilih berdasarkan risiko domain dan tujuan bisnis/ilmiah.
- F1-Score adalah harmonic mean yang menyeimbangkan Precision dan Recall, ideal untuk kondisi kelas tidak seimbang atau ketika trade-off antar error perlu dioptimalkan secara adil.
- Semua metrik ini bersifat threshold-dependent, sehingga interpretasinya harus selalu dikaitkan dengan konteks penelitian dan persiapan analisis threshold-independent di slide selanjutnya.

### Transisi ke Slide Berikutnya

Karena metrik berbasis threshold seperti Accuracy, Precision, Recall, dan F1 hanya memberikan snapshot statis pada satu titik keputusan tertentu, langkah metodologis selanjutnya adalah mempelajari bagaimana mengevaluasi performa model secara komprehensif di seluruh rentang threshold. Mari kita beralih ke slide berikutnya untuk membahas ROC-AUC dan PR-AUC sebagai standar evaluasi yang lebih stabil, informatif, dan relevan untuk perbandingan model dalam riset data mining.

---

## Slide 026 - ROC-AUC dan PR-AUC

### Narasi

Setelah membahas metrik dasar seperti Accuracy, Precision, Recall, dan F1 pada slide sebelumnya, kita kini akan menyoroti dua metrik evaluasi yang lebih robust terhadap variasi threshold klasifikasi probabilistik, yaitu ROC-AUC dan PR-AUC. Dalam praktiknya, model klasifikasi tidak hanya menghasilkan label biner, melainkan skor probabilitas kontinyu. Oleh karena itu, evaluasi performa model harus dilakukan secara menyeluruh di seluruh rentang ambang batas (threshold) yang mungkin digunakan, bukan hanya pada satu titik cut-off tertentu.

Kurva Receiver Operating Characteristic atau ROC-AUC memvisualisasikan trade-off antara True Positive Rate (TPR) atau Recall, terhadap False Positive Rate (FPR) saat threshold divariasikan. Secara matematis, FPR dihitung sebagai FP dibagi dengan jumlah total negatif aktual, yaitu FP / (FP + TN). Nilai AUC sendiri memiliki interpretasi probabilistik yang sangat kuat: ia merepresentasikan peluang bahwa model akan memberikan skor lebih tinggi kepada satu sampel positif acak dibandingkan satu sampel negatif acak. Karena sifatnya yang mengukur ranking kemampuan diskriminatif model tanpa terpengaruh secara ekstrem oleh dominasi kelas mayoritas, ROC-AUC sangat direkomendasikan ketika distribusi kelas dalam dataset relatif seimbang.

Di sisi lain, Precision-Recall AUC atau PR-AUC menjadi alternatif yang jauh lebih informatif ketika menghadapi data dengan ketidakseimbangan kelas yang signifikan. Kurva ini memplot Precision terhadap Recall pada berbagai threshold. Berbeda dengan FPR yang menggunakan TN sebagai penyebut, PR-AUC sepenuhnya berfokus pada performa model terhadap kelas positif (kelas minoritas). Ketika jumlah negatif aktual sangat besar, penurunan FPR bisa terlihat sangat kecil secara numerik meskipun sebenarnya model masih melakukan banyak kesalahan false positive. Hal ini membuat kurva ROC sering kali terlihat terlalu optimis atau misleading. Sebaliknya, PR-AUC menangkap degradasi performa pada kelas yang jarang muncul dengan lebih akurat, sehingga menjadi standar de facto untuk masalah deteksi anomali, fraud detection, atau diagnosis penyakit langka.

Untuk memudahkan pemilihan, kita dapat merujuk pada panduan perbandingan: gunakan ROC-AUC ketika kelas cukup seimbang, dan beralih ke PR-AUC ketika kelas sangat jarang atau imbalanced. Penting untuk dicatat bahwa dalam konteks penelitian tingkat magister, pemilihan metrik ini bukan sekadar preferensi teknis, melainkan harus selaras dengan research question dan karakteristik distribusi data. Seperti yang akan kita bahas lebih lanjut pada slide berikutnya, pelaporan hasil eksperimen sebaiknya tidak bergantung pada satu metrik tunggal, melainkan menyajikan kombinasi yang komprehensif agar evaluasinya objektif dan bebas dari bias seleksi.

### Inti yang Harus Ditekankan

- ROC-AUC mengukur kemampuan diskriminatif model melalui probabilitas ranking antar kelas, dan paling stabil digunakan pada data dengan distribusi kelas yang seimbang.
- PR-AUC sepenuhnya berfokus pada kelas positif, sehingga jauh lebih sensitif dan informatif untuk mendeteksi performa model pada data yang tidak seimbang (imbalanced).
- Pemilihan metrik evaluasi harus didasarkan pada karakteristik distribusi dataset dan tujuan praktis masalah, bukan mengikuti kebiasaan atau tren semata.

### Transisi ke Slide Berikutnya

Memahami kapan menggunakan ROC-AUC versus PR-AUC adalah langkah krusial, namun dalam praktik penelitian, kita tidak boleh berhenti pada satu metrik saja. Pada slide berikutnya, kita akan membahas prinsip-prinsip strategis dalam memilih dan melaporkan metrik klasifikasi agar evaluasi eksperimen Anda memenuhi standar rigor akademik dan menghindari bias seleksi.

---

## Slide 027 - Classification Metrics: Pilihan Metrik dalam Penelitian

### Narasi

Setelah pembahasan pada slide sebelumnya mengenai perbedaan fundamental antara ROC-AUC dan PR-AUC, langkah kritis berikutnya dalam evaluasi model klasifikasi adalah menentukan metrik mana yang secara metodologis paling tepat untuk dilaporkan dalam sebuah penelitian. Pemilihan metrik tidak boleh bersifat习惯ual atau didasarkan pada preferensi pribadi, melainkan harus mengikuti empat prinsip dasar yang ketat. Pertama, metrik yang dipilih harus selaras langsung dengan research question yang diajukan. Jika pertanyaan penelitian berfokus pada kemampuan model mendeteksi kasus langka atau risiko tinggi, maka metrik seperti Recall atau Precision akan jauh lebih relevan daripada Accuracy. Kedua, metrik tersebut harus mencerminkan tujuan praktis atau biaya kesalahan dari masalah yang sedang ditangani. Dalam konteks nyata, false negative dan false positive jarang memiliki dampak yang sama; penyesuaian metrik terhadap implikasi bisnis atau ilmiah ini memastikan bahwa evaluasi model tetap grounded. Ketiga, perhatian penuh harus diberikan pada distribusi kelas dalam dataset. Karakteristik data secara langsung memengaruhi keandalan suatu metrik, sebagaimana telah diuraikan pada perbandingan kurva sebelumnya. Keempat, dalam standar penelitian tingkat magister, tidak pernah dianggap cukup jika hanya mengandalkan satu angka performa. Anda wajib melaporkan beberapa metrik secara simultan untuk memberikan gambaran yang komprehensif, transparan, dan mudah direplikasi oleh reviewer maupun peneliti lain.

Untuk operasionalisasi prinsip tersebut, kita dapat menggunakan panduan berbasis skema data yang terstruktur. Pada dataset dengan distribusi kelas yang seimbang, Accuracy dan ROC-AUC berfungsi sebagai metrik utama karena mampu menangkap performa keseluruhan model dengan stabil, sementara Precision, Recall, dan F1-Score dapat dilampirkan sebagai indikator pendukung. Ketika menghadapi ketidakseimbangan kelas yang moderat, fokus evaluasi bergeser ke F1-Score dan PR-AUC, dengan tetap menyertakan ROC-AUC serta komponen Precision dan Recall untuk menjaga konteks perbandingan antar-kelas. Pada kasus ketidakseimbangan ekstrem, PR-AUC menjadi metrik utama yang paling andal karena sensitivitasnya terhadap perubahan probabilitas pada kelas minoritas, didukung oleh F1-Score dan khususnya Recall yang dihitung secara spesifik pada kelas minoritas. Untuk masalah multikelas, penggunaan Macro-F1 atau Weighted-F1 sangat direkomendasikan agar performa setiap kategori terwakili secara proporsional, lengkap dengan pelaporan confusion matrix per kelas untuk memungkinkan error analysis yang mendalam.

Di sisi lain, literatur dan review paper sering menemukan dua kesalahan metodologis yang kerap mengancam validitas temuan. Kesalahan pertama adalah ketergantungan buta pada Accuracy ketika bekerja dengan data yang tidak seimbang. Metrik ini cenderung misleading karena model dapat mencapai skor tinggi hanya dengan selalu memprediksi kelas mayoritas, tanpa benar-benar mempelajari pola diskriminatif kelas target. Kesalahan kedua yang lebih subtil namun fatal adalah melakukan pemilihan metrik evaluasi setelah melihat hasil eksperimen, atau yang dalam metodologi penelitian disebut sebagai selection bias. Praktik ini merusak objektivitas karena metrik akhirnya "dipilih-pilih" agar sesuai dengan hasil yang diharapkan, bukan sebaliknya. Oleh karena itu, keputusan mengenai metrik evaluasi harus ditetapkan secara eksplisit pada tahap perancangan eksperimen, sebelum data diproses atau model pertama kali dilatih.

### Inti yang Harus Ditekankan

- Pemilihan metrik evaluasi harus ditetapkan secara eksplisit sejak awal berdasarkan research question dan tujuan praktis, bukan disesuaikan pasca-eksperimen untuk menghindari selection bias.
- Distribusi kelas secara langsung menentukan prioritas metrik; hindari Accuracy pada data imbalanced, dan utamakan PR-AUC serta Recall kelas minoritas untuk kasus ekstrem.
- Laporan penelitian wajib menyajikan multi-metrik secara simultan untuk menjamin transparansi, meminimalkan bias interpretasi, dan memenuhi standar rigoritas penelitian tingkat magister.

### Transisi ke Slide Berikutnya

Dengan fondasi evaluasi klasifikasi yang telah mapan, kita kini akan melangkah ke domain prediksi nilai kontinu. Pada slide berikutnya, kita akan mengurai metrik-metrik inti dalam regresi—mulai dari MAE, MSE, RMSE, R², hingga MAPE—beserta karakteristik matematisnya dan kriteria kapan masing-masing metrik paling efektif diterapkan dalam penelitian.

---

## Slide 028 - Regression Metrics: MAE, MSE, RMSE, R², MAPE

### Narasi

Setelah membahas prinsip pemilihan metrik evaluasi untuk masalah klasifikasi pada slide sebelumnya, kini kita beralih ke domain regresi. Dalam penelitian data mining tingkat magister, pemilihan metrik regresi tidak boleh bersifat habituel atau hanya mengikuti template umum. Sama seperti peringatan pada klasifikasi bahwa metrik harus selaras dengan research question dan karakteristik distribusi data, pada regresi pun setiap metrik memiliki sifat matematis yang menentukan bagaimana model dihukum atas kesalahannya. Slide ini menguraikan lima metrik standar industri dan akademik: MAE, MSE, RMSE, R², dan MAPE, lengkap dengan formulasi, karakteristik statistik, serta panduan kontekstual penggunaannya.

Mean Absolute Error (MAE) dihitung sebagai rata-rata dari nilai absolut selisih antara observasi aktual $y_i$ dan prediksi $\hat{y}_i$. Karena menggunakan norma L1, MAE memberikan penalti yang proporsional dan linear terhadap besarnya error. Sifat ini menjadikannya robust terhadap outlier; titik data ekstrem tidak mendominasi nilai akhir metrik, sehingga MAE ideal ketika Anda menginginkan gambaran error rata-rata yang stabil dan tidak terdistorsi oleh anomali data. Di sisi lain, Mean Squared Error (MSE) menggunakan kuadrat selisih, yang secara matematis mempercepat pertumbuhan penalti seiring membesarnya error. MSE sangat sensitif terhadap outlier, sehingga cocok digunakan ketika kesalahan prediksi yang besar memiliki dampak kritis yang tidak dapat ditoleransi dalam konteks aplikasi. Root Mean Squared Error (RMSE) merupakan akar kuadrat dari MSE, yang mengembalikan satuan metrik agar setara dengan variabel target. Ini memudahkan interpretasi praktis tanpa mengubah sifat sensitivitas MSE terhadap error besar.

Untuk menilai kualitas penjelas model terhadap variasi data, kita menggunakan koefisien determinasi atau R². Rumus $1 - \frac{SS_{res}}{SS_{tot}}$ membandingkan residual model terhadap varians total data. Nilai R² mendekati 1 menandakan model mampu menangkap pola variasi dengan sangat baik, sedangkan nilai negatif mengindikasikan model bahkan lebih buruk daripada baseline sederhana yang hanya menebak rata-rata historis. Sementara itu, Mean Absolute Percentage Error (MAPE) menyajikan error dalam persentase, membuatnya sangat intuitif bagi pemangku kepentingan non-teknis. Namun, MAPE memiliki kelemahan fundamental: ia menjadi tidak stabil dan cenderung meledak secara numerik ketika nilai aktual $y_i$ mendekati nol, sehingga penggunaannya harus dibatasi pada dataset yang bebas dari nilai nol atau sangat kecil. Panduan penggunaan yang disarankan adalah memanfaatkan RMSE ketika toleransi terhadap error besar sangat rendah, MAE ketika semua deviasi dianggap sama pentingnya secara linear, dan R² sebagai indikator goodness-of-fit relatif yang bersifat komplementer.

Dalam praktik penelitian S2, pelaporan metrik regresi sebaiknya tidak bergantung pada satu angka tunggal. Mirip dengan risiko selection bias yang disebutkan pada slide sebelumnya, memilih metrik setelah melihat hasil eksperimen dapat merusak validitas temuan ilmiah. Metrik harus ditetapkan sebelum proses training dimulai, sesuai dengan tujuan optimisasi yang ingin dicapai. Kombinasi metrik yang saling melengkapi—misalnya melaporkan RMSE bersama MAE, atau menyertakan R² alongside error-based metrics—memberikan perspektif yang lebih holistik dan transparan terhadap perilaku model.

### Inti yang Harus Ditekankan

- Setiap metrik regresi memiliki fungsi matematis yang berbeda dalam menghukum error; pilih berdasarkan toleransi terhadap outlier dan skala interpretasi yang dibutuhkan.
- MAE robust terhadap outlier dan bersifat linear, sementara MSE/RMSE memberi penalti berat pada error besar dan mengembalikan satuan asli pada RMSE.
- R² mengukur proporsi varians yang dijelaskan model relatif terhadap baseline rata-rata, sedangkan MAPE mudah diinterpretasi namun tidak stabil saat $y_i \approx 0$.
- Penetapan metrik harus dilakukan sebelum eksperimen (pre-commitment) untuk menghindari selection bias dan memastikan replikabilitas penelitian.
- Selalu laporkan minimal dua metrik yang saling melengkapi untuk memberikan gambaran performa model yang utuh dan objektif.

### Transisi ke Slide Berikutnya

Pemilihan metrik yang tepat hanyalah satu sisi dari koin evaluasi; sisi lainnya adalah keadilan dalam proses validasi. Sebaik apapun metrik yang kita gunakan, hasilnya akan menyesatkan jika protokol pengujian tidak dirancang dengan ketat. Pada slide berikutnya, kita akan membahas prinsip-prinsip validasi yang fair, mulai dari isolasi preprocessing, implementasi cross-validation yang benar, hingga cara menghindari data leakage yang sering meruntuhkan klaim penelitian.

---

## Slide 029 - Pentingnya Validasi yang Fair

### Narasi

Setelah memahami karakteristik dan konteks penggunaan berbagai metrik regresi pada slide sebelumnya, langkah metodologis selanjutnya yang tak kalah krusial adalah merancang protokol validasi yang adil. Dalam penelitian data mining tingkat magister, klaim peningkatan performa model tidak sah jika prosedur evaluasinya mengandung bias sistematis. Prinsip fair comparison menuntut konsistensi absolut pada empat aspek utama. Pertama, seluruh model yang dibandingkan wajib menggunakan dataset yang identik, termasuk pembagian sampel dan urutan pengacakan. Kedua, pipeline preprocessing harus diterapkan secara konsisten; operasi seperti numerical scaling atau categorical encoding hanya boleh di-fit pada training set, lalu parameter tersebut ditransformasikan ke validation dan test set. Ketiga, pencarian hyperparameter optimal harus dilakukan sepenuhnya di dalam lingkaran cross-validation pada data training/validation, sehingga model tidak pernah "melihat" data evaluasi saat penyetelan konfigurasi. Keempat, setiap nilai random seed yang digunakan untuk shuffling data, inisialisasi bobot, atau pembangkitan noise harus didokumentasikan secara eksplisit demi menjamin reproduktibilitas eksperimen.

Alur validasi yang benar mengikuti hierarki pemisahan data yang ketat. Proses dimulai dengan pembagian awal dataset menjadi subset train, validation, dan test. Tahap tuning hyperparameter kemudian dijalankan eksklusif pada validation set melalui mekanisme cross-validation, yang memungkinkan estimasi performa yang stabil tanpa mengorbankan data pengujian akhir. Setelah konfigurasi terbaik ditetapkan, evaluasi final dilakukan tepat satu kali pada test set yang telah disegel. Laporan hasil tidak cukup hanya menyajikan skor titik tunggal, melainkan harus menyertakan varians atau standar deviasi antar fold cross-validation sebagai indikator robustness model. Diagram alur ini menegaskan bahwa test set berfungsi sebagai proxy untuk distribusi populasi nyata, bukan sebagai sumber informasi tambahan selama siklus pengembangan model.

Kesalahan desain eksperimen yang paling umum dan merusak validitas ilmiah adalah melakukan tuning atau optimisasi langsung pada test set, yang secara efektif menggeser fungsi test set menjadi validation set sekaligus. Kesalahan lain yang sering terlewatkan adalah melakukan Exploratory Data Analysis (EDA), outlier detection, atau feature selection pada seluruh dataset sebelum melakukan splitting. Praktik ini memicu data leakage, di mana statistik global dari data uji secara tidak sadar membocorkan informasi ke dalam proses seleksi fitur atau transformasi data. Memahami batasan antara validasi yang adil dan kebocoran informasi menjadi fondasi utama untuk mengidentifikasi kesalahan metodologis yang lebih spesifik, yang akan kita analisis secara mendalam pada konteks klasifikasi dan regresi di slide berikutnya.

### Inti yang Harus Ditekankan

- Validasi yang adil adalah prasyarat metodologis untuk publikasi riset berkualitas; performa model hanya bermakna jika dievaluasi dengan protokol yang bebas bias.
- Preprocessing (fit/transform) dan hyperparameter tuning harus dipisahkan secara ketat dari test set; gunakan cross-validation pada training/validation untuk menjaga integritas evaluasi.
- Dokumentasi random seed dan pelaporan varians antar fold merupakan standar reproduktibilitas yang wajib diterapkan dalam penelitian data mining tingkat lanjut.
- Menghindari data leakage memerlukan disiplin pemisahan data sejak tahap awal, sebelum dilakukan EDA atau feature engineering apa pun.

### Transisi ke Slide Berikutnya

Untuk memperdalam pemahaman tentang bagaimana pelanggaran prinsip fair validation bermanifestasi secara teknis, mari kita bahas bentuk-bentuk spesifik data leakage pada tugas klasifikasi dan regresi, serta strategi pencegahan yang dapat diimplementasikan langsung menggunakan pipeline scikit-learn.

---

## Slide 030 - Data Leakage pada Classification dan Regression

### Narasi

Setelah mendiskusikan prinsip validasi yang adil pada slide sebelumnya, kita kini menyentuh salah satu masalah paling fundamental dan sering kali tidak disadari dalam praktik data mining: data leakage. Data leakage didefinisikan sebagai kebocoran informasi dari data uji atau data di luar proses pelatihan ke dalam tahap pelatihan model. Konsekuensinya, metrik performa yang dihasilkan menjadi sangat optimis dan tidak merepresentasikan kemampuan generalisasi model pada data baru. Dalam konteks penelitian tingkat magister, fenomena ini bukan sekadar kesalahan teknis, melainkan ancaman serius terhadap validitas ilmiah karena dapat menghasilkan klaim keberhasilan metode yang gagal direplikasi di lingkungan produksi atau pada dataset independen.

Mari kita identifikasi empat contoh kasus klasik yang kerap muncul dalam alur kerja Python dan scikit-learn. Pertama, melakukan scaling atau normalisasi sebelum melakukan split data. Ketika statistik global seperti mean dan standar deviasi dihitung dari seluruh dataset, informasi dari data uji secara tidak langsung telah mempengaruhi transformasi data latih. Kedua, kesalahan pada feature engineering, misalnya membuat fitur agregat yang bergantung pada target, seperti menghitung rata-rata nilai target per kategori lalu menyematkannya sebagai kolom baru. Hal ini secara eksplisit membocorkan label ke dalam ruang fitur. Ketiga, keberadaan duplikat sampel yang terbagi secara acak antara train dan test. Model akan cenderung menghafal pola duplikat tersebut, sehingga skor validasi melonjak palsu tanpa pembelajaran representasi yang sebenarnya. Keempat, target leakage, yang sangat krusial pada data temporal atau observasional, di mana terdapat fitur yang secara logika hanya diketahui setelah prediksi terjadi, seperti penggunaan variabel masa depan pada data deret waktu atau fitur yang baru tercatat setelah kejadian target.

Untuk memutus rantai kebocoran ini, disiplin metodologis harus diterapkan sejak awal. Prinsip utamanya adalah selalu melakukan split data terlebih dahulu sebelum menjalankan transformasi atau ekstraksi fitur apa pun. Di ekosistem scikit-learn, implementasi terbaik adalah memanfaatkan objek `Pipeline`. Pipeline mengemas transformer dan estimator menjadi satu unit komputasi yang menjamin bahwa operasi `fit` hanya berjalan pada subset training di setiap iterasi cross-validation, sehingga data uji tetap tertutup selama tuning. Selain itu, pemilihan strategi validasi silang harus selaras dengan sifat masalah. Untuk klasifikasi, gunakan `StratifiedKFold` guna mempertahankan proporsi kelas di setiap fold, sedangkan untuk regresi, `KFold` standar sudah memadai karena tidak memerlukan stratifikasi pada variabel kontinu. Dokumentasikan konfigurasi pipeline dan seed random secara transparan untuk mendukung reproduktibilitas eksperimen.

### Inti yang Harus Ditekankan

- Data leakage menyebabkan evaluasi performa tidak realistis karena informasi uji atau target bocor ke proses pelatihan, merusak klaim generalisasi model.
- Empat sumber kebocoran utama: scaling sebelum split, feature engineering berbasis target, duplikat data antar split, dan target leakage (terutama pada data temporal).
- Pencegahan wajib mengandalkan `Pipeline` scikit-learn, urutan operasi split → transform → train, serta pemilihan CV strategy yang tepat (`StratifiedKFold` untuk klasifikasi, `KFold` untuk regresi).

### Transisi ke Slide Berikutnya

Dengan memastikan bahwa pipeline preprocessing dan mekanisme validasi telah dibebaskan dari kebocoran data, fondasi eksperimen kita menjadi kokoh dan siap untuk pembandingan model yang objektif. Langkah selanjutnya adalah merancang baseline yang kuat. Pada slide berikutnya, kita akan membahas strategi sistematis untuk memilih dan mengevaluasi model baseline, mulai dari algoritma linear sederhana hingga ensemble kompleks, guna menetapkan benchmark yang kredibel sebelum membandingkannya dengan proposed method penelitian Anda.

---

## Slide 031 - Memilih Model Baseline: Strategi Eksperimen

### Narasi

Setelah memastikan integritas data melalui pencegahan *data leakage* pada slide sebelumnya, langkah kritis berikutnya dalam siklus penelitian *data mining* adalah menetapkan model baseline yang kokoh. Pemilihan baseline bukan tindakan arbitrer atau sekadar mengikuti tren algoritma, melainkan sebuah strategi eksperimental yang disiplin. Dalam konteks penelitian tingkat magister, baseline berperan sebagai standar referensi empiris untuk memvalidasi klaim kontribusi novelty metode yang Anda usulkan. Tanpa baseline yang dipilih secara metodologis, perbandingan performa kehilangan landasan ilmiah yang kuat.

Pendekatan sistematis yang disarankan memulai iterasi eksperimen dari model paling sederhana dan interpretabel, seperti Logistic Regression untuk tugas klasifikasi atau Linear Regression untuk regresi. Model linear memberikan batas bawah performa (*lower bound*) yang jelas karena keterbatasan asumsi hubungan fitur-target yang lurus. Dari titik awal tersebut, kompleksitas secara bertahap ditingkatkan dengan memperkenalkan model non-linear seperti Decision Tree, k-Nearest Neighbors, SVM dengan kernel RBF, hingga ensemble methods seperti Random Forest. Setiap penambahan kapasitas model harus diikuti oleh proses penyetelan hiperparameter (*hyperparameter tuning*) yang terukur. Setelah seluruh kandidat model telah dioptimalkan, hasilnya dibandingkan menggunakan metrik evaluasi yang selaras dengan karakteristik dataset dan tujuan penelitian, kemudian model dengan skor tertinggi ditetapkan sebagai baseline utama.

Tiga prinsip fundamental harus menjadi panduan mutlak selama tahap ini. Pertama, seluruh model wajib dievaluasi dalam kerangka yang identik, mencakup skema pembagian data, teknik validasi silang, dan urutan pra-pemrosesan yang sama persis. Kedua, alokasi komputasi atau *budget* untuk pencarian hiperparameter harus proporsional antar model; tidak etis secara penelitian jika satu model dituning secara ekstensif sementara model lain hanya berjalan dengan konfigurasi default. Ketiga, setiap konfigurasi terbaik harus didokumentasikan secara rinci, meliputi nilai hiperparameter optimal, protokol validasi, dan metrik yang digunakan. Dokumentasi ini menjamin transparansi, kemudahan replikasi, dan kelengkapan jejak penelitian untuk tahap *ablation study* atau analisis error di masa depan.

Strategi ini dirancang agar dapat diimplementasikan secara konsisten menggunakan ekosistem Python yang familiar, khususnya melalui integrasi scikit-learn dan struktur *pipeline*. Dengan menerapkan alur kerja yang terstandarisasi, peneliti dapat meminimalkan bias subjektif dalam pemilihan model dan memastikan bahwa setiap keputusan eksperimental didasarkan pada bukti kuantitatif yang dapat dipertanggungjawabkan.

### Inti yang Harus Ditekankan

- Pemilihan baseline harus bersifat hierarkis dan sistematis, dimulai dari model linear sederhana menuju model non-linear atau ensemble yang lebih kompleks.
- Keabsahan komparasi bergantung pada keseragaman kerangka evaluasi dan proporsionalitas sumber daya komputasi untuk tuning hiperparameter antar model.
- Dokumentasi konfigurasi terbaik bukan sekadar administrasi, melainkan syarat mutlak untuk reproduktibilitas penelitian dan validasi akademik di jenjang magister.

### Transisi ke Slide Berikutnya

Konsep strategis ini akan segera dioperasionalkan ke dalam bentuk alur kode yang terstruktur. Pada slide berikutnya, kita akan membedah pseudocode eksperimen komparasi baseline yang mengintegrasikan *Pipeline*, pencarian grid/randomized, serta pencatatan metrik secara otomatis, sehingga siap diimplementasikan langsung di Jupyter Notebook atau Google Colab.

---

## Slide 032 - Pseudocode Eksperimen Komparasi Baseline

### Narasi

Pseudocode pada slide ini merangkum protokol eksperimen komparatif yang wajib diikuti untuk memastikan validitas ilmiah dalam penelitian data mining tingkat magister. Langkah pertama adalah membagi dataset menjadi subset training dan test secara stratified. Pembagian ini krusial karena mempertahankan proporsi kelas pada kedua subset, sehingga menghindari bias evaluasi ketika distribusi label tidak seimbang. Setelah pemisahan data, kita memasuki inti eksperimen berupa iterasi pada daftar model kandidat, seperti Logistic Regression, SVM, Random Forest, Decision Tree, dan kNN.

Pada setiap iterasi model, langkah berikutnya adalah mendefinisikan pipeline yang menggabungkan tahap preprocessing dan algoritma pembelajaran mesin dalam satu objek terintegrasi. Penggunaan pipeline bukan sekadar praktik baik, melainkan kebutuhan metodologis untuk mencegah data leakage selama proses validasi silang. Setelah pipeline terbentuk, kita melakukan pencarian hyperparameter optimal menggunakan GridSearchCV atau RandomizedSearchCV. Proses tuning ini hanya dijalankan pada subset training melalui mekanisme cross-validation, yang mensimulasikan performa model pada data yang belum pernah dilihat. Sesuai prinsip yang dibahas pada slide sebelumnya, alokasi komputasi untuk tuning harus proporsional antar model agar perbandingan tetap adil.

Setelah konfigurasi hyperparameter terbaik ditemukan, model tersebut dilatih ulang pada seluruh data training untuk memanfaatkan informasi maksimal sebelum evaluasi akhir. Model yang telah dilatih kemudian digunakan untuk melakukan prediksi pada subset test yang telah disisihkan sejak awal. Hasil prediksi ini dievaluasi menggunakan metrik yang relevan dengan masalah penelitian, seperti akurasi, precision, recall, F1-score, atau AUC-ROC. Seluruh hasil tuning dan skor evaluasi dicatat secara sistematis, termasuk hyperparameter yang menghasilkan performa terbaik. Terakhir, semua hasil dikompilasi ke dalam tabel perbandingan yang menjadi dasar empiris untuk menilai apakah metode usulan benar-benar memberikan peningkatan signifikan dibandingkan state-of-the-art baseline.

Struktur pseudocode ini dirancang agar mudah diterjemahkan ke dalam implementasi kode nyata. Pada slide berikutnya, kita akan melihat bagaimana setiap langkah abstrak ini diwujudkan secara konkret menggunakan ekosistem scikit-learn, mulai dari konstruksi pipeline, penyiapan parameter grid, hingga eksekusi cross-validation dengan scoring metric yang spesifik.

### Inti yang Harus Ditekankan

- Pemisahan data yang ketat dan penggunaan stratified split merupakan fondasi utama untuk menjaga objektivitas evaluasi dan menghindari overfitting pada data uji.
- Integrasi preprocessing dan model dalam satu pipeline wajib diterapkan untuk mencegah data leakage, terutama saat melakukan cross-validation selama tuning hyperparameter.
- Pencarian hyperparameter harus dibatasi hanya pada training set, sementara test set berfungsi sebagai evaluator independen yang tidak boleh tersentuh selama proses pelatihan maupun tuning.
- Dokumentasi lengkap konfigurasi terbaik dan metrik evaluasi membentuk jejak penelitian yang reproduktibel, memungkinkan reviewer dan peneliti lain memverifikasi klaim kinerja metode usulan.

### Transisi ke Slide Berikutnya

Dari kerangka konseptual ini, kita akan langsung menerjemahkannya ke dalam sintaks Python menggunakan scikit-learn, dimulai dari persiapan data, pembuatan pipeline standar, hingga eksekusi grid search untuk mengidentifikasi baseline terkuat secara empiris.

---

## Slide 033 - Contoh Praktik: Membandingkan Baseline dengan scikit-learn

### Narasi

Melanjutkan alur eksperimental yang telah dipetakan dalam pseudocode slide sebelumnya, implementasi konkret dimulai dengan pemecahan dataset menggunakan `train_test_split`. Parameter `test_size=0.2` menetapkan rasio 80-20 untuk pelatihan dan pengujian, sementara `stratify=y` menjadi komponen kritis yang menjaga distribusi kelas tetap homogen di kedua subset. Hal ini mencegah bias evaluasi akibat dominasi satu kelas tertentu pada set uji. Penetapan `random_state=42` bukan sekadar kebiasaan penulisan kode, melainkan prinsip metodologis wajib di jenjang magister untuk menjamin reproduktibilitas eksperimen, sehingga peneliti lain dapat mereplikasi hasil baseline secara persis.

Setelah data terbagi, konstruksi `Pipeline` dilakukan untuk mengintegrasikan preprocessing dan model learning dalam satu objek tunggal. Untuk Logistic Regression, transformasi `StandardScaler` diterapkan sebelum estimasi model karena algoritma ini berbasis fungsi loss convex yang sensitif terhadap skala fitur; tanpa standarisasi, gradien descent akan mengalami osilasi atau konvergensi lambat. Pemberian nama string pada setiap tahap pipeline (`"scaler"` dan `"lr"`) memungkinkan akses modular ke hiperparameter model di tahap selanjutnya, sekaligus mencegah kebocoran data (data leakage) selama validasi silang karena scaler hanya dihitung dari lipatan training saja.

Tahap optimisasi dilakukan melalui `GridSearchCV` yang dikonfigurasi dengan `StratifiedKFold(5)` dan `scoring="f1"`. Pemilihan validasi silang bertingkat stratifikasi memastikan setiap iterasi evaluasi tetap merepresentasikan populasi kelas asli, sehingga varians estimasi performa lebih rendah. Metrik F1 dipilih sebagai acuan utama karena memberikan gambaran seimbang antara precision dan recall, menjadikannya indikator yang lebih robust dibandingkan akurasi murni pada skenario klasifikasi nyata yang sering kali mengandung ketidakseimbangan kelas. Ruang pencarian `param_lr` membatasi tuning hanya pada parameter regularisasi `C`, yang berfungsi mengontrol trade-off antara underfitting dan overfitting. Eksekusi `.fit()` akan secara otomatis melatih lima varian model untuk setiap nilai C, menghitung rata-rata skor F1 validasi, dan menyimpan instance model terbaik beserta hiperameter optimalnya ke atribut `best_params_` dan `best_score_`.

### Inti yang Harus Ditekankan

- Penggunaan `Pipeline` merupakan standar industri dan akademik untuk mencegah data leakage, menyederhanakan kode, dan memastikan preprocessing diterapkan secara konsisten saat inference.
- Standarisasi fitur bersifat wajib untuk model berbasis jarak atau gradien seperti Logistic Regression dan SVM, namun tidak berlaku untuk model berbasis pohon keputusan.
- Validasi silang stratifikasi bersama metrik F1 membentuk fondasi evaluasi baseline yang adil dan tahan terhadap class imbalance, sesuai dengan praktik penelitian data mining modern.
- Pencatatan `random_state`, hiperparameter terbaik, dan metrik validasi silang harus selalu didokumentasikan secara sistematis sebagai dasar untuk ablation study dan perbandingan statistik antar-model.

### Transisi ke Slide Berikutnya

Dengan konfigurasi Logistic Regression yang telah tervalidasi, kita akan menerapkan pola pipeline dan grid search yang identik untuk mengevaluasi model non-linear lainnya. Pada slide berikutnya, kita akan mengonfigurasi Support Vector Machine dengan kernel RBF serta menyesuaikan ruang pencarian hiperparameter untuk Random Forest, termasuk catatan penting mengenai risiko overfitting pada kedalaman pohon dan penanganan fitur yang tidak memerlukan scaling.

---

## Slide 034 - Contoh Praktik: Melanjutkan ke SVM dan Random Forest

### Narasi

Setelah kita berhasil membangun baseline menggunakan Logistic Regression pada slide sebelumnya, langkah metodologis selanjutnya adalah menguji model yang lebih ekspresif untuk mengukur peningkatan performa secara terukur. Pada bagian ini, kita melanjutkan eksperimen dengan Support Vector Machine (SVM) berbasis kernel RBF dan Random Forest Classifier. Perhatikan blok kode pertama yang mendefinisikan pipeline untuk SVM: kita tetap menyertakan `StandardScaler` karena SVM sangat sensitif terhadap skala fitur, kemudian diikuti oleh `SVC(kernel="rbf", probability=True)`. Penambahan `probability=True` bersifat strategis karena memungkinkan model mengeluarkan estimasi probabilitas kelas, yang nantinya diperlukan untuk perhitungan metrik ROC-AUC dan Log Loss. Ruang pencarian hiperparameter SVM difokuskan pada `svc__C` sebagai pengatur kekuatan regularisasi, dan `svc__gamma` yang menentukan radius pengaruh tiap titik data dalam ruang fitur. Kombinasi nilai `C` dan `gamma` inilah yang akan membentuk batas keputusan non-linear antara kedua kelas.

Untuk Random Forest, pendekatan preprocessing berubah karena algoritma berbasis ensemble pohon keputusan bersifat invariant terhadap transformasi linier skala numerik. Oleh karena itu, scaler tidak dimasukkan ke dalam pipeline RF. Fokus eksplorasi dialihkan ke kontrol kompleksitas model melalui tiga parameter kunci: `rf__n_estimators` untuk jumlah tree, `rf__max_depth` untuk membatasi pertumbuhan cabang, dan `rf__min_samples_leaf` untuk mencegah node terminal terlalu spesifik terhadap noise data. Pencarian grid ini dirancang untuk menemukan keseimbangan antara bias rendah dan variance yang terkendali, sekaligus mengantisipasi potensi overfitting yang sering muncul pada ensemble dengan struktur pohon yang sangat dalam.

Seluruh hasil optimal dari masing-masing grid search wajib direkam secara sistematis ke dalam tabel komparasi yang mencakup model, kombinasi hiperparameter terbaik, serta sekumpulan metrik evaluasi lengkap (akurasi, presisi, recall, F1, dan ROC-AUC). Dua catatan kritis perlu menjadi perhatian selama eksekusi: pertama, penggunaan `max_depth=None` pada Random Forest memungkinkan pohon tumbuh hingga kondisi kemurnian sempurna, yang pada dataset berukuran terbatas hampir pasti memicu overfitting ekstrem; kedua, penetapan `random_state` harus konsisten di seluruh tahap—mulai dari `train_test_split`, inisialisasi estimator, hingga stratifikasi fold—karena reproduktibilitas eksperimen merupakan fondasi metodologi penelitian tingkat magister yang menuntut verifikasi ulang hasil secara transparan.

### Inti yang Harus Ditekankan

- SVM memerlukan standardisasi fitur karena bekerja berdasarkan jarak geometris, sedangkan Random Forest tidak terpengaruh oleh skala data akibat sifat pembagiannya yang berbasis threshold.
- Interaksi antara `C` dan `gamma` pada kernel RBF sangat menentukan fleksibilitas model; tuning yang tepat mencegah underfitting pada pola kompleks atau overfitting pada noise.
- Pengendalian kedalaman pohon dan penggunaan `random_state` secara ketat adalah praktik wajib untuk menjaga generalisasi model dan memenuhi standar reproducible research dalam studi empiris.

### Transisi ke Slide Berikutnya

Dengan konfigurasi pipeline dan grid search yang telah dieksekusi, kita kini memiliki kumpulan hasil numerik yang siap dianalisis. Langkah selanjutnya adalah menginterpretasikan tabel perbandingan tersebut secara kritis, menelaah konsistensi performa lintas model, mengidentifikasi fluktuasi varians antar fold, serta menilai apakah keunggulan numerik yang terlihat benar-benar signifikan secara statistik.

---

## Slide 035 - Interpretasi Hasil Eksperimen

### Narasi

Setelah kita menyelesaikan konfigurasi pipeline dan pencarian grid hyperparameter untuk model-model seperti SVM RBF dan Random Forest pada slide sebelumnya, langkah selanjutnya adalah melakukan evaluasi kritis terhadap keluaran eksperimen. Tabel hasil yang ditampilkan menyajikan ringkasan performa lima algoritma setelah penyetelan terbaik. Setiap baris merepresentasikan satu model beserta konfigurasi parameternya yang paling optimal, sedangkan kolom melaporkan tiga metrik evaluasi kunci: F1-Score yang menyeimbangkan presisi dan recall, ROC-AUC yang mengukur kemampuan diskriminatif model di berbagai ambang batas klasifikasi, serta Log Loss yang memberikan penalti lebih besar terhadap prediksi yang yakin namun salah.

Untuk membaca tabel ini secara metodologis, kita tidak boleh sekadar memilih angka tertinggi tanpa konteks. Pertama, perhatikan apakah Random Forest secara konsisten unggul di seluruh metrik. Konsistensi ini mengindikasikan robustness, namun perlu diverifikasi apakah keunggulan tersebut stabil saat divalidasi dengan repeated stratified K-Fold atau jika hanya muncul karena keselarasan acak pada pembagian data tertentu. Kedua, amati perilaku SVM. Performa tinggi bisa disertai varians yang besar antar fold, yang menandakan sensitivitas ekstrem terhadap pemilihan kernel atau skala fitur. Varians ini harus diukur melalui interval kepercayaan atau uji stabilitas agar tidak disalahartikan sebagai keunggulan mutlak. Ketiga, perbedaan numerik kecil antara dua model belum tentu bermakna secara ilmiah. Kita wajib menerapkan uji signifikansi statistik, seperti McNemar’s Test untuk membandingkan matriks kontingensi prediksi, atau DeLong’s Test untuk membandingkan kurva ROC, guna memastikan bahwa gap performa bukan sekadar noise sampling.

Interpretasi yang ketat ini menjadi fondasi penting sebelum kita melangkah ke tahap penyusunan klaim penelitian. Tanpa analisis yang mempertimbangkan konsistensi, varians, dan signifikansi statistik, kita berisiko menarik kesimpulan yang lemah dan rentan terhadap kritik reviewer. Oleh karena itu, setiap keputusan pemilihan model harus didukung oleh bukti empiris yang transparan dan dapat direproduksi.

### Inti yang Harus Ditekankan

- Interpretasi hasil eksperimen tidak cukup hanya melihat nilai metrik tertinggi, tetapi harus mengevaluasi konsistensi, varians antar fold, dan signifikansi statistik menggunakan uji yang tepat.
- Pemilihan model akhir harus didasarkan pada pemahaman mendalam tentang karakteristik data dan stabilitas performa, bukan pada optimisasi metrik tunggal yang rentan terhadap overfitting.
- Transparansi dalam pelaporan hasil, termasuk interval kepercayaan dan hasil uji statistik, merupakan standar wajib dalam praktik penelitian data mining tingkat magister.

### Transisi ke Slide Berikutnya

Pemahaman mendalam tentang cara membaca dan memvalidasi hasil eksperimen membawa kita pada pertanyaan fundamental dalam publikasi ilmiah: mengapa baseline sederhana yang dituning dengan ketat tetap menjadi syarat mutlak dalam penelitian modern. Mari kita bahas bagaimana baseline yang kuat menjaga integritas klaim dan mencegah bias evaluasi.

---

## Slide 036 - Fokus Penelitian: Mengapa Baseline Sederhana Masih Dibutuhkan

### Narasi

Setelah kita membahas cara membaca dan menginterpretasikan tabel hasil eksperimen pada slide sebelumnya, langkah selanjutnya adalah memastikan bahwa fondasi perbandingan tersebut dibangun secara metodologis yang kuat. Dalam konteks publikasi ilmiah, terutama pada jenjang magister dan penelitian tingkat lanjut, reviewer tidak hanya menilai kompleksitas algoritma yang Anda usulkan, tetapi juga ketelitian dalam desain eksperimen. Pertanyaan klasik yang hampir selalu muncul saat review paper adalah: *"Apakah metode Anda dibandingkan dengan strong baseline yang telah dituning?"* Pertanyaan ini bukan sekadar formalitas, melainkan indikator utama validitas klaim kontribusi penelitian Anda.

Ada tiga alasan fundamental mengapa baseline sederhana namun kuat tetap menjadi kebutuhan mutlak dalam setiap riset data mining. Pertama, hal ini menjaga integritas klaim. Jika metode baru Anda yang kompleks hanya berhasil mengalahkan baseline naif atau model yang belum dioptimasi, maka klaim keunggulan tersebut kehilangan bobot ilmiah. Perbandingan harus dilakukan melawan referensi yang sudah matang agar peningkatan performa benar-benar mencerminkan inovasi yang Anda bawa. Kedua, membandingkan diri dengan baseline yang representatif membantu Anda memetakan di mana keunggulan sebenarnya terjadi. Apakah model Anda lebih robust terhadap noise? Lebih efisien pada fitur berdimensi tinggi? Atau unggul hanya pada metrik tertentu seperti ROC-AUC? Pemetaan ini menjadi bahan diskusi yang kritis dalam bab analisis hasil. Ketiga, pendekatan ini secara langsung mencegah overfitting penelitian. Banyak studi gagal karena metode baru hanya menunjukkan perbaikan signifikan pada satu dataset spesifik dengan baseline yang lemah. Generalisasi adalah kunci; jika metode Anda konsisten menang di berbagai skenario dan melawan referensi standar industri, nilai kontribusinya akan jauh lebih diakui.

Sebagai mahasiswa S2 yang sedang merancang proyek penelitian, Anda perlu menginternalisasi tiga pertanyaan reflektif ini. Identifikasi baseline apa yang paling relevan dengan domain masalah yang Anda teliti; jangan memilih secara arbitrer. Pastikan baseline tersebut sudah merepresentasikan state of the art untuk tugas klasifikasi atau regresi yang bersangkutan. Yang paling krusial, verifikasi apakah proses tuning hyperparameter dilakukan secara adil. Baik model klasik maupun metode proposal Anda harus melalui protokol validasi silang, pencarian grid/random search, dan komputasi yang setara. Keadilan eksperimen adalah prasyarat mutlak sebelum menarik kesimpulan statistik atau melakukan ablation study lebih lanjut.

### Inti yang Harus Ditekankan

- Validitas klaim penelitian sangat bergantung pada penggunaan strong baseline yang telah mengalami tuning menyeluruh, bukan model acak atau untuned.
- Perbandingan yang ketat memungkinkan peneliti mengidentifikasi precisely di mana inovasi memberikan nilai tambah dan menghindari klaim generalisasi yang berlebihan.
- Keadilan eksperimen (fair comparison) dalam preprocessing, tuning, dan evaluasi merupakan fondasi metodologis yang wajib dipatuhi dalam penulisan paper internasional.

### Transisi ke Slide Berikutnya

Pemahaman teoretis tentang pentingnya baseline kuat kini harus diterjemahkan ke dalam praktik nyata. Pada slide berikutnya, kita akan masuk ke Praktikum 2, di mana Anda akan membangun pipeline eksperimen yang reusable, melatih dan men-tune model klasik seperti Logistic Regression, SVM, dan Random Forest, serta menetapkan strong baseline resmi yang akan menjadi patokan evaluasi untuk proyek penelitian Anda sepanjang semester. Mari kita mulai implementasinya.

---

## Slide 037 - Praktikum 2: Membangun dan Membandingkan Strong Classical Baseline

### Narasi

Pada praktikum kali ini, kita akan menerjemahkan konsep teoretis mengenai urgensi baseline yang kuat menjadi implementasi praktis yang sistematis, terdokumentasi, dan dapat direproduksi. Sebagaimana ditekankan pada diskusi sebelumnya, klaim kontribusi penelitian hanya akan memiliki bobot ilmiah apabila dibandingkan dengan model referensi yang telah dievaluasi secara adil. Oleh karena itu, tujuan utama sesi ini adalah merancang sebuah pipeline eksperimen yang modular dan reusable, sehingga seluruh tahapan mulai dari pembersihan data, transformasi fitur, pelatihan, hingga evaluasi dapat dijalankan secara konsisten tanpa intervensi manual yang berpotensi menimbulkan bias atau data leakage.

Kita akan melatih tiga algoritma klasik yang secara empiris menjadi standar komparatif dalam literatur data mining: Logistic Regression sebagai representasi model linear yang efisien dan mudah diinterpretasi, Support Vector Machine (SVM) untuk pemetaan ke ruang fitur berdimensi tinggi dengan margin optimal, serta Random Forest sebagai model ensemble berbasis bootstrap aggregation yang robust terhadap overfitting dan noise. Pemilihan ketiga model ini bukan bersifat arbitrer, melainkan merepresentasikan spektrum mekanika pembelajaran yang berbeda, sehingga memberikan gambaran komprehensif tentang batas bawah performa yang realistis untuk masalah klasifikasi atau regresi yang sedang Anda teliti.

Prosedur pelaksanaan praktikum disusun mengikuti kaidah metodologi penelitian yang ketat. Pertama, identifikasi dataset yang relevan, baik berasal dari kandidat proyek penelitian Anda maupun repositori publik terpercaya seperti UCI atau Kaggle. Lakukan Exploratory Data Analysis (EDA) singkat namun terstruktur untuk memetakan distribusi target, sebaran variabel prediktor, serta mendeteksi anomali atau missing values yang perlu ditangani secara tepat. Kedua, bangun pipeline preprocessing yang konsisten menggunakan ekosistem Python seperti scikit-learn, pastikan operasi seperti standardisasi, one-hot encoding, dan imputasi dipisahkan secara eksplisit antara fold latih dan validasi selama cross-validation. Ketiga, lakukan tuning hyperparameter secara eksplisit dengan grid search atau random search yang dikombinasikan dengan k-fold cross-validation; hindari penggunaan nilai default karena konfigurasi bawaan jarang kali merupakan titik optimal untuk dataset spesifik. Keempat, evaluasi performa menggunakan metrik yang selaras dengan karakteristik imbalance kelas dan tujuan bisnis/ilmiah, lalu susun tabel komparasi yang transparan dilengkapi analisis kualitatif mengapa satu model melampaui model lainnya.

Output yang diharapkan mencakup notebook Jupyter yang terorganisir rapi, tabel hasil benchmarking yang siap diintegrasikan ke dalam naskah penelitian, serta penetapan final satu model sebagai strong baseline. Baseline ini akan berfungsi sebagai patokan mutlak dalam setiap eksperimen lanjutan, memastikan bahwa setiap peningkatan performa yang dilaporkan benar-benar mencerminkan kontribusi metodologis baru, bukan sekadar variasi acak dalam konfigurasi awal.

### Inti yang Harus Ditekankan

- Reproducibility dan modularitas pipeline eksperimen adalah fondasi integritas penelitian tingkat magister.
- Hyperparameter tuning wajib dilakukan dengan cross-validation, bukan mengandalkan nilai default atau split data tunggal.
- Pemilihan metrik evaluasi harus didorong oleh karakteristik dataset dan formulasi research question, bukan kebiasaan umum.
- Model terbaik dari ketiga algoritma klasik ditetapkan sebagai strong baseline resmi untuk semua uji komparatif lanjutan.

### Transisi ke Slide Berikutnya

Setelah Anda berhasil menetapkan strong baseline melalui praktikum ini, langkah logis berikutnya adalah mengeksplorasi teknik yang secara inheren dirancang untuk mengatasi keterbatasan model tunggal. Pada pertemuan berikutnya, kita akan membahas Ensemble Learning, khususnya bagaimana prinsip bagging dan boosting—mulai dari Random Forest hingga Gradient Boosting—memanfaatkan agregasi decision tree untuk mengoptimalkan bias-variance trade-off, sekaligus menjadikan baseline klasik yang telah Anda bangun tadi sebagai pembanding kritis dalam mengukur kenaikan performa yang sesungguhnya.

---

## Slide 038 - Koneksi ke Pertemuan Berikutnya: Ensemble Learning

### Narasi

Pada pertemuan sebelumnya, kita telah menyelesaikan praktikum kedua dengan fokus pada pembangunan dan perbandingan *strong classical baseline* menggunakan algoritma seperti Logistic Regression, Support Vector Machine, dan Random Forest. Langkah-langkah tersebut mencakup pembuatan *pipeline* preprocessing yang konsisten, penyetelan hiperparameter melalui *cross-validation*, serta evaluasi berbasis metrik yang relevan. Hasil dari praktikum ini tidak hanya menjadi latihan teknis, tetapi juga fondasi metodologis untuk penelitian tingkat magister Anda. Sekarang, kita akan melihat bagaimana konsep-konsep yang telah dipraktikkan menjembatani pemahaman menuju topik pertemuan berikutnya, yaitu *Ensemble Learning*.

Mari kita bedah tabel jembatan konseptual yang menghubungkan materi klasifikasi dan regresi hari ini dengan pembahasan *ensemble* di pertemuan lima. Pertama, pohon keputusan (*Decision Tree*) yang merupakan blok dasar Random Forest, akan menjadi unit fundamental dalam arsitektur *Gradient Boosting* dan framework modern seperti XGBoost. Kedua, mekanisme *bagging* pada Random Forest akan diperdalam sebagai salah satu strategi utama dalam *ensemble learning*, sekaligus kontras dengan pendekatan *boosting*. Ketiga, konsep *Bias-Variance Trade-off* yang sudah kita bahas saat mengevaluasi model tunggal akan menjadi kunci analitis untuk memahami secara matematis dan empiris mengapa teknik *boosting* mampu menekan *bias* secara bertahap. Keempat, metrik evaluasi yang telah kita pilih dan validasi akan tetap menjadi standar baku untuk membandingkan kinerja model-model *boosting* yang lebih kompleks. Terakhir, *strong baseline* yang Anda tentukan dari praktikum ini akan berfungsi sebagai garis batas performa (*performance threshold*). Klaim keunggulan model baru atau metode canggih apa pun harus dibuktikan dengan mengalahkan baseline ini secara statistik dan praktis.

Dari sisi implikasi penelitian, penting untuk dicatat bahwa dalam konteks data tabular, keluarga algoritma *Gradient Boosting* seperti XGBoost, LightGBM, atau CatBoost sering kali menawarkan performa yang lebih unggul dibandingkan Random Forest. Namun, sebagai peneliti tingkat magister, Anda ditantang untuk tidak sekadar melaporkan angka akurasi atau AUC yang lebih tinggi. Pertanyaan kritis yang harus dijawab adalah: apakah peningkatan performa tersebut benar-benar berasal dari kekuatan intrinsik metode *boosting* itu sendiri, ataukah semata-mata akibat penggunaan *computational budget* yang lebih besar, pencarian hiperparameter yang lebih ekstensif, atau bahkan kebocoran data? Memisahkan faktor-faktor ini memerlukan desain eksperimen yang ketat, termasuk kontrol terhadap komputasi, penggunaan *ablation study*, dan pelaporan interval kepercayaan atau deviasi standar. Persiapan konkret untuk menjawab pertanyaan penelitian ini akan kita lanjutkan pada checkpoint proyek penelitian minggu ini, di mana Anda diminta mendokumentasikan seluruh komponen baseline secara transparan dan reproduktif.

### Inti yang Harus Ditekankan

- Pohon keputusan dan mekanisme bagging hari ini bukan akhir pembelajaran, melainkan fondasi struktural untuk memahami arsitektur *gradient boosting* dan *ensemble methods* secara mendalam.
- *Bias-Variance Trade-off* adalah lensa teoretis utama untuk menganalisis mengapa boosting berhasil mengurangi bias, sementara metrik evaluasi berfungsi sebagai standar objektif dalam perbandingan model.
- *Strong baseline* yang dibangun sekarang adalah tolak ukur ilmiah; klaim inovasi atau keunggulan model baru wajib dibuktikan melalui pengujian yang ketat dan dapat direproduksi.
- Dalam penelitian tingkat magister, pembedaan antara peningkatan performa akibat metode versus akibat *computational budget* atau *hyperparameter tuning* yang lebih intensif menjadi indikator kematangan metodologis peneliti.

### Transisi ke Slide Berikutnya

Untuk memastikan seluruh fondasi ini tertuang secara sistematis, mari kita alihkan perhatian ke dokumen checkpoint proyek penelitian Anda. Minggu ini, setiap mahasiswa wajib menyusun dokumentasi lengkap mulai dari karakteristik dataset, pipeline preprocessing, konfigurasi model, hingga hasil evaluasi dengan interval kepercayaan. Silakan buka panduan format dokumentasi pada slide berikutnya dan mulai isi komponen-komponen tersebut berdasarkan hasil praktikum dua yang telah Anda kerjakan.

---

## Slide 039 - Research Project Checkpoint: Menentukan Strong Baseline

### Narasi

Pada tahap checkpoint proyek penelitian ini, fokus utama bergeser dari pemahaman konseptual menuju eksekusi metodologis yang terstruktur dan dapat direproduksi. Sebelum mengembangkan metode baru atau mengajukan klaim inovasi, mahasiswa wajib memastikan fondasi eksperimen telah kokoh melalui penentuan strong baseline. Langkah pertama adalah menyiapkan dataset final yang telah melewati proses Exploratory Data Analysis secara menyeluruh. Verifikasi ini mencakup pemeriksaan distribusi target, identifikasi pola outlier, analisis korelasi antarfitur, serta pemahaman mendalam terhadap karakteristik data sebelum pemodelan apa pun dijalankan.

Setelah dataset final ditetapkan, langkah berikutnya adalah menyusun dan mendokumentasikan preprocessing pipeline secara rinci. Pipeline ini harus mencakup strategi encoding untuk variabel kategorikal, teknik scaling untuk variabel numerik, serta penanganan missing value yang konsisten. Dokumentasi yang ketat sangat krusial pada jenjang magister karena menjamin reproduktibilitas eksperimen dan mencegah terjadinya data leakage, terutama ketika transformasi diterapkan secara terpisah pada split training, validasi, dan testing.

Implementasi baseline minimal menjadi inti dari checkpoint ini. Mahasiswa diminta mengimplementasikan setidaknya tiga model representatif: Logistic Regression sebagai linear baseline, Random Forest sebagai non-linear ensemble baseline, dan SVM dengan kernel RBF sebagai baseline berbasis margin. Jika masalah penelitian memiliki karakteristik domain yang spesifik, salah satu model tersebut dapat digantikan dengan alternatif yang lebih relevan, namun tetap harus disertai justifikasi metodologis yang jelas. Pemilihan metrik evaluasi juga tidak boleh bersifat generik; metrik harus disesuaikan dengan distribusi target dan pertanyaan penelitian. Untuk data yang tidak seimbang, akurasi saja menyesatkan, sehingga perlu diprioritaskan metrik seperti Precision, Recall, F1-Score, atau ROC-AUC.

Seluruh proses harus dicatat sesuai dengan format dokumentasi yang telah ditentukan. Metadata dataset mencatat nama, jumlah sampel, dimensi fitur, serta keterbatasan inherent data. Bagian preprocessing merinci setiap transformasi yang diterapkan agar dapat diulang oleh reviewer atau peneliti lain. Konfigurasi model dan hyperparameter harus mencerminkan hasil tuning yang sistematis, bukan nilai default. Hasil performa wajib disajikan bersama ukuran varians statistik seperti confidence interval atau standar deviasi dari k-fold cross-validation, bukan hanya angka titik tunggal. Poin kesimpulan memaksa peneliti untuk melakukan refleksi kritis: apakah baseline yang dibangun sudah cukup kompetitif untuk dijadikan patokan perbandingan, atau masih memerlukan penyempurnaan sebelum metode usulan diuji?

Penekanan pada checkpoint ini sejalan dengan prinsip penelitian tingkat magister di mana validitas klaim peningkatan performa hanya dapat dibuktikan jika dibandingkan dengan baseline yang kuat dan dievaluasi secara adil. Dengan menyelesaikan komponen-komponen ini, Anda telah membangun landasan empiris yang diperlukan untuk pertemuan selanjutnya yang akan membahas ensemble learning dan teknik boosting, sekaligus mempersiapkan diri untuk ablation study dan error analysis di tahap eksperimen lanjutan.

### Inti yang Harus Ditekankan

- Reproducibility dan transparansi metodologi dimulai dari dokumentasi pipeline preprocessing dan konfigurasi model yang lengkap, bukan sekadar kode yang berjalan.
- Strong baseline bukan sekadar menjalankan algoritma default, melainkan memilih model representatif, melakukan tuning sistematis, dan mengevaluasi dengan metrik yang sesuai konteks distribusi data.
- Laporan hasil wajib menyertakan estimasi varians (confidence interval atau standar deviasi) dari cross-validation untuk memastikan signifikansi statistik dan stabilitas performa model.
- Refleksi kritis terhadap kekuatan baseline menentukan validitas klaim kontribusi penelitian dan menjadi prasyarat mutlak sebelum masuk ke teknik ensemble atau arsitektur kompleks.

### Transisi ke Slide Berikutnya

Dengan fondasi baseline yang telah terdokumentasi, terevaluasi, dan divalidasi secara metodologis, kita siap menutup pertemuan keempat ini dengan rangkuman poin-poin kunci, sebelum melanjutkan eksplorasi ke teknik ensemble dan boosting yang akan memperkuat baseline tersebut di pertemuan berikutnya.

---

## Slide 040 - Penutup dan Kesimpulan

### Narasi

Pertemuan ini menutup rangkaian pembahasan mengenai dua pilar utama dalam *supervised learning*, yaitu klasifikasi dan regresi. Kedua pendekatan ini bukan sekadar kumpulan algoritma dasar, melainkan fondasi metodologis yang harus dipahami secara mendalam sebelum melangkah ke teknik yang lebih canggih. Dalam konteks penelitian tingkat magister, kemampuan membedakan kapan menggunakan model linear versus non-linear, serta memahami asumsi statistik dan batasan komputasional di baliknya, menjadi prasyarat mutlak untuk merancang eksperimen yang valid dan dapat dipertanggungjawabkan secara ilmiah.

Salah satu poin krusial yang ditekankan adalah kewajiban membangun *strong baseline* sebelum bereksperimen dengan arsitektur atau algoritma yang lebih kompleks. Seperti yang telah disiapkan pada *checkpoint* minggu lalu, implementasi model-model seperti Logistic Regression, Decision Tree, Random Forest, SVM, dan kNN berfungsi sebagai tolok ukur objektif. Tanpa baseline yang kuat, klaim peningkatan performa dari metode baru tidak dapat dibuktikan karena tidak ada pembanding yang konsisten. Baseline ini juga membantu mengidentifikasi batas bawah (*lower bound*) kinerja sistem berdasarkan karakteristik dataset yang Anda gunakan, sekaligus menghemat waktu komputasi dengan mencegah pencarian hiperparameter yang tidak terarah.

Pemahaman terhadap *bias-variance trade-off* menjadi kunci dalam menafsirkan mengapa model sederhana dan model kompleks menunjukkan perilaku evaluasi yang berbeda. Model dengan bias tinggi cenderung mengalami *underfitting* karena gagal menangkap pola mendasar dalam data, sementara model dengan varians tinggi rentan terhadap *overfitting* dan sangat sensitif terhadap noise. Keseimbangan optimal hanya dapat dicapai melalui iterasi yang disiplin, termasuk seleksi fitur yang tepat, penerapan regularisasi, dan penyesuaian kapasitas model sesuai dengan rasio jumlah sampel terhadap dimensi fitur.

Selain struktur model, pemilihan metrik evaluasi harus selalu selaras dengan distribusi target dan *research question*. Metrik akurasi saja tidak cukup jika data tidak seimbang atau jika biaya kesalahan tipe I dan tipe II berbeda secara signifikan. Oleh karena itu, perlu dipertimbangkan presisi, rekall, F1-score, ROC-AUC, atau RMSE/MAE tergantung pada apakah masalah bersifat kategorikal atau kontinu. Konsistensi dalam penggunaan metrik ini akan menentukan kredibilitas hasil analisis dan memungkinkan perbandingan yang bermakna antarpaper atau antarvariabel penelitian.

Terakhir, keadilan (*fairness*) dalam eksperimen data mining menuntut ketelitian teknis yang ketat. Proses *hyperparameter tuning*, penggunaan *cross-validation* yang dirancang sesuai struktur data, dan pencegahan *data leakage* bukanlah langkah opsional, melainkan standar etika penelitian. Setiap kebocoran informasi antara set pelatihan dan pengujian akan menghasilkan estimasi performa yang terlalu optimis dan tidak dapat digeneralisasi ke data dunia nyata. Dengan menyelesaikan penentuan *strong baseline* sebagai fondasi, Anda kini memiliki landasan empiris yang solid untuk melanjutkan pengembangan model penelitian Anda menuju tahap ablation study dan evaluasi robustness.

### Inti yang Harus Ditekankan

- Klasifikasi dan regresi merupakan fondasi wajib dalam *supervised learning* yang harus dikuasai secara konseptual dan praktis sebelum mempelajari metode lanjutan.
- Pembangunan *strong baseline* (Logistic Regression, Random Forest, SVM, dll.) adalah langkah wajib sebelum menguji metode kompleks agar klaim penelitian memiliki pembanding yang valid dan dapat direplikasi.
- Pemilihan metrik evaluasi harus disesuaikan secara eksplisit dengan distribusi data, ketidakseimbangan kelas, dan tujuan penelitian, bukan sekadar mengikuti praktik umum.
- Eksperimen yang adil dan dapat dipercaya memerlukan disiplin metodologis: tuning sistematis, *cross-validation* yang tepat, dan pencegahan *data leakage* yang ketat.

### Transisi ke Slide Berikutnya

Terima kasih atas perhatian dan komitmen Anda dalam menyelesaikan fase penentuan baseline penelitian. Setelah fondasi metodologis dan eksperimen awal terbentuk, kita akan melanjutkan ke topik berikutnya yang membahas teknik lanjutan untuk meningkatkan stabilitas dan akurasi prediksi, yaitu Ensemble Learning & Gradient Boosting. Sampai jumpa di pertemuan selanjutnya.

---

## Slide 041 - TERIMA KASIH

### Narasi

Pertemuan keempat ini telah menutup rangkaian pembahasan fundamental mengenai klasifikasi dan regresi sebagai pilar utama supervised learning, sekaligus menegaskan pentingnya pembangunan strong baseline sebelum melangkah ke arsitektur model yang lebih kompleks. Algoritma seperti Logistic Regression, Decision Tree, Random Forest, SVM, dan kNN bukan sekadar metode pengantar, melainkan benchmark kritis yang harus dibangun dan divalidasi secara ketat dalam setiap siklus penelitian data mining. Pemahaman mendalam mengenai bias-variance trade-off menjadi landasan dalam menentukan titik optimal antara underfitting dan overfitting, sedangkan pemilihan metrik evaluasi harus selalu dikaitkan secara eksplisit dengan distribusi data dan pertanyaan penelitian yang diajukan. 

Pada jenjang magister, nilai kontribusi penelitian tidak hanya diukur dari skor numerik tertinggi, melainkan dari disiplin metodologis dalam merancang eksperimen yang adil dan dapat direproduksi. Praktik seperti hyperparameter tuning yang sistematis, penerapan cross-validation yang rigor, serta pencegahan data leakage merupakan standar wajib untuk memastikan bahwa peningkatan performa yang dilaporkan benar-benar mencerminkan generalisasi model, bukan kebocoran informasi. Penguasaan ekosistem Python—mulai dari manipulasi data dengan pandas dan NumPy, pemodelan dengan scikit-learn, hingga visualisasi diagnostik menggunakan Matplotlib dan Seaborn—akan sangat memperkuat implementasi praktis dari prinsip-prinsip tersebut. Dengan fondasi yang solid ini, langkah logis berikutnya adalah mengeksplorasi bagaimana menggabungkan kekuatan prediksi dari berbagai model tunggal untuk mencapai stabilitas dan akurasi yang lebih tinggi.

### Inti yang Harus Ditekankan

- Strong baseline berfungsi sebagai tolak ukur objektif; tanpa baseline yang kuat, klaim peningkatan performa model baru tidak memiliki bobot ilmiah yang valid.
- Rigoritas eksperimen (cross-validation, tuning, audit data leakage) menentukan kredibilitas hasil penelitian dan kemampuan replikasi oleh peneliti lain.
- Metrik evaluasi harus dipilih berdasarkan konteks masalah dan karakteristik target variable, bukan mengikuti preferensi pribadi atau tren umum.
- Error analysis dan ablation study sama pentingnya dengan pelaporan metric score dalam menyusun diskusi penelitian tingkat jurnal konferensi internasional.

### Transisi ke Slide Berikutnya

Setelah memahami cara membangun dan mengevaluasi model tunggal sebagai baseline, pertemuan berikutnya akan membahas strategi kombinasi model melalui Ensemble Learning, dengan penekanan khusus pada mekanisme internal dan implementasi praktis Gradient Boosting menggunakan pustaka scikit-learn di lingkungan Jupyter Notebook.
