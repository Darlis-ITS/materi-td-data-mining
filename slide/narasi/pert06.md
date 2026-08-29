# Narasi TD Data Mining - Pertemuan 06

## Clustering & Unsupervised Data Mining

Sumber: markdown/pert06-clustering-unsupervised-data-mining.md

---

## Slide 000 - Cover

### Narasi

Slide ini menandai pembukaan Pertemuan 06 dalam mata kuliah Topik Dalam Data Mining. Setelah menyelesaikan rangkaian pembahasan mengenai model prediktif berbasis ensemble learning dan gradient boosting, kini kita melakukan pergeseran fokus yang fundamental: dari pendekatan supervised prediction menuju ranah deskriptif dan unsupervised data mining. Pada jenjang magister, pemahaman tentang clustering tidak lagi dipandang sekadar sebagai alat eksplorasi data, melainkan sebagai langkah metodologis krusial dalam membangun baseline struktural, mengidentifikasi heterogenitas populasi, dan merumuskan hipotesis berbasis pola tersembunyi sebelum memasuki tahap klasifikasi atau deteksi anomali.

Dalam konteks penelitian data mining kontemporer, clustering berfungsi sebagai jembatan antara preprocessing data dan modeling lanjutan. Materi pertemuan ini akan membahas algoritma inti seperti K-Means, hierarchical clustering, dan DBSCAN, lengkap dengan asumsi matematis, kompleksitas komputasi, serta sensitivitas terhadap noise dan skala fitur. Selain itu, kita akan mendalami cluster validity indices untuk evaluasi objektif, serta teknik reduksi dimensi visualisasi seperti PCA, t-SNE, dan UMAP yang sangat esensial untuk interpretasi hasil pengelompokan berdimensi tinggi. Pendekatan ini dirancang agar mahasiswa mampu merancang eksperimen clustering yang rigor, melakukan ablation study terhadap parameter, dan menarik kesimpulan yang didukung oleh evidence kuantitatif maupun kualitatif.

### Inti yang Harus Ditekankan

- Pergeseran dari supervised modeling ke unsupervised exploration merupakan langkah strategis dalam pipeline data mining modern untuk memahami struktur data sebelum tahap prediksi atau deteksi outlier.
- Pemilihan algoritma clustering harus didasarkan pada karakteristik distribusi data, skalabilitas dataset, dan tujuan penelitian, bukan sekadar ketergantungan pada library default.
- Evaluasi validitas cluster dan visualisasi multidimensi menjadi komponen wajib dalam laporan penelitian S2 untuk memastikan reproducible dan interpretable results.

### Transisi ke Slide Berikutnya

Untuk menempatkan topik ini dalam peta perkembangan perkuliahan, mari kita tinjau posisi pertemuan ini secara holistik: bagaimana fondasi clustering dan unsupervised mining menjadi prasyarat konseptual bagi pembahasan ensemble learning sebelumnya, sekaligus membuka jalan menuju topik anomaly detection dan penanganan imbalanced data yang akan kita dalami pada pertemuan berikutnya.

---

## Slide 001 - Posisi Pertemuan dalam Perkuliahan

### Narasi

Pertemuan ini menandai pergeseran strategis dalam alur eksperimen data mining kita, yakni beralih dari ranah prediktif menuju pendekatan deskriptif atau unsupervised learning. Sebelumnya, kita telah mendalami ensemble learning dan gradient boosting sebagai keluarga model yang sangat efektif untuk membangun strong baseline, sekaligus memahami trade-off antara akurasi prediksi, overfitting, dan kompleksitas komputasi. Namun, dalam skenario penelitian dan industri yang sesungguhnya, tidak semua permasalahan dapat dirumuskan sebagai tugas klasifikasi atau regresi dengan target label yang tersedia. Di sinilah pentingnya mengeksplorasi struktur intrinsik data secara mandiri, tanpa bergantung pada supervisi eksternal.

Pada sesi kali ini, kita akan membahas fondasi clustering dan unsupervised data mining dengan cakupan algoritma yang menjadi standar baik dalam literatur akademik maupun praktik industri. Fokus utama meliputi tiga pendekatan utama: K-Means yang mengandalkan optimasi jarak Euclidean terhadap centroid, hierarchical clustering yang membangun struktur nested melalui pendekatan aglomeratif atau divisi, serta DBSCAN yang mengidentifikasi cluster berdasarkan kerapatan titik data dan mampu menangani noise serta outlier secara natif. Setiap metode memiliki asumsi matematis dan batasan topologi yang berbeda, sehingga pemilihan algoritma harus selalu didasari oleh karakteristik distribusi dataset.

Selain implementasi, validitas dan interpretasi hasil clustering juga akan menjadi sorotan utama. Kita akan mempelajari metrik evaluasi internal seperti silhouette score, Davies-Bouldin index, dan Calinski-Harabasz index untuk mengukur kohesi intra-cluster dan separasi antar-cluster secara kuantitatif. Untuk mengatasi tantangan dimensi tinggi, teknik reduksi dimensi seperti PCA, t-SNE, dan UMAP akan diperkenalkan sebagai alat bantu visualisasi. Penggunaan teknik visualisasi ini harus dilakukan dengan sikap kritis, mengingat adanya potensi distorsi geometris dan kehilangan informasi global yang perlu diinterpretasikan bersama hasil clustering awal.

Penguasaan materi ini bukan sekadar latihan teknis, melainkan bagian integral dari metodologi penelitian jenjang magister. Kemampuan mengidentifikasi pola tersembunyi, memvalidasi struktur data, dan menyajikan representasi visual yang akurat merupakan prasyarat fundamental sebelum melangkah ke topik lanjutan. Topik berikutnya, yaitu anomaly detection, imbalanced data, dan rare events, sangat bergantung pada pemahaman distribusi dasar dan pembentukan cluster sebagai acuan normalitas. Tanpa fondasi unsupervised learning yang kuat, deteksi kejadian langka atau penanganan kelas minoritas akan kehilangan konteks statistik yang diperlukan.

Secara ringkas, pertemuan ini menempatkan clustering sebagai jembatan metodologis yang menghubungkan eksplorasi data awal dengan pemodelan lanjutan. Dengan menguasai prinsip kerja, strategi evaluasi, dan teknik visualisasi yang tepat, Anda akan memiliki kerangka kerja yang solid untuk merancang eksperimen yang valid, reproducible, dan siap dikembangkan menjadi kontribusi penelitian orisinal.

### Inti yang Harus Ditekankan

- Clustering dan unsupervised learning adalah langkah esensial untuk mengungkap struktur data tanpa label, yang menjadi fondasi sebelum memasuki tahap pemodelan prediktif atau deteksi anomali.
- Pemilihan algoritma (K-Means, Hierarchical, DBSCAN) harus didasarkan pada karakteristik dataset, termasuk bentuk cluster, kerapatan lokal, skala fitur, dan keberadaan noise.
- Evaluasi kualitas cluster memerlukan kombinasi metrik internal (silhouette, Davies-Bouldin, Calinski-Harabasz) dan visualisasi multidimensi (PCA, t-SNE, UMAP) dengan pendekatan kritis terhadap distorsi data.
- Pemahaman mendalam tentang distribusi dan klasterisasi menjadi prasyarat mutlak untuk topik lanjutan seperti anomaly detection dan penanganan data tidak seimbang, sekaligus mendukung perumusan research gap yang relevan.

### Transisi ke Slide Berikutnya

Setelah memahami posisi materi ini dalam peta besar perkuliahan, mari kita tinjau secara spesifik kompetensi yang akan dicapai dan bagaimana capaian tersebut selaras dengan tujuan pembelajaran mata kuliah serta kebutuhan penelitian Anda.

---

## Slide 002 - Tujuan Pembelajaran dan CPMK

### Narasi

Pada slide ini, kita menetapkan peta kompetensi dan target pembelajaran yang akan menjadi panduan utama selama membahas Clustering & Unsupervised Data Mining. Mengingat mata kuliah ini berada pada jenjang magister, penekanan tidak lagi terletak pada sekadar menjalankan sintaks library, melainkan pada kemampuan membangun argumen metodologis yang solid. Materi ini secara khusus mendukung dua Capaian Pembelajaran Mata Kuliah (CPMK): CPMK-1 yang menuntut analisis kritis terhadap konsep, asumsi, keunggulan, serta batasan setiap metode clustering; dan CPMK-4 yang berfokus pada perancangan eksperimen clustering yang valid, mencakup seleksi metrik evaluasi yang tepat hingga interpretasi hasil berbasis bukti empiris. Hal ini menjadi kelanjutan logis dari pertemuan sebelumnya yang telah menyiapkan fondasi evaluasi model prediktif melalui ensemble learning, sehingga kini kita beralih ke ranah deskriptif di mana validitas struktur data harus dibuktikan secara statistik dan komputasional.

Secara rinci, tujuan pembelajaran dipecah menjadi empat pilar kompetensi teknis. Pertama, Anda akan mendalami prinsip kerja fundamental dari tiga algoritma clustering yang paling relevan dalam riset mutakhir: K-Means, Hierarchical Clustering, dan DBSCAN. Pemahaman ini mencakup mekanisme optimasi, cara mendefinisikan kedekatan antar observasi, serta kompleksitas waktu dan ruang yang mempengaruhi skalabilitas. Kedua, kita akan melakukan perbandingan sistematis antara pendekatan berbasis centroid seperti K-Means dengan pendekatan berbasis densitas seperti DBSCAN. Analisis ini sangat krusial karena performa algoritma sangat sensitif terhadap karakteristik dataset, termasuk distribusi bentuk cluster, ketidakteraturan batas, serta kehadiran outlier atau noise yang sering kali justru menjadi objek penelitian anomaly detection pada slide berikutnya.

Ketiga, evaluasi kualitas clustering akan dibahas secara mendalam mengingat tidak adanya ground truth dalam setting unsupervised. Anda akan belajar menerapkan metrik internal seperti Silhouette Score, Davies-Bouldin Index, dan Calinski-Harabasz Index untuk menilai kohesivitas dan separabilitas cluster, serta metrik eksternal ketika label tersedia sebagai baseline pembanding. Keempat, visualisasi dimensi tinggi akan dipelajari melalui teknik reduksi dimensi seperti PCA, t-SNE, dan UMAP. Penting untuk ditekankan bahwa alat bantu visual ini bukan pengganti analisis numerik, melainkan pelengkap yang memerlukan sikap kritis terhadap distorsi geometris, interpretasi jarak lokal vs global, dan batasan masing-masing teknik sebelum digunakan dalam tahap exploratory data analysis.

Terakhir, seluruh kompetensi teknis ini harus dikaitkan secara langsung dengan penyusunan research gap proyek akhir atau paper penelitian Anda. Dalam konteks penelitian tingkat S2, kemampuan membedakan kapan suatu algoritma cocok diterapkan, mampu memvalidasi struktur tersembunyi secara multi-metrik, dan menafsirkan visualisasi secara hati-hati, merupakan prasyarat untuk merumuskan hipotesis, mendesain eksperimen yang adil, dan menghasilkan kontribusi ilmiah yang terukur. Poin-poin ini menegaskan bahwa clustering adalah fondasi eksplorasi data yang harus dibangun di atas landasan metodologis, bukan sekadar praktik coding rutin.

### Inti yang Harus Ditekankan

- Fokus pada analisis kritis asumsi, kelebihan, dan keterbatasan algoritma, bukan hanya implementasi kode secara mekanistik.
- Validitas eksperimen clustering sangat bergantung pada pemilihan metrik evaluasi (internal/eksternal) yang selaras dengan karakteristik dan tujuan penelitian.
- Visualisasi via PCA, t-SNE, dan UMAP harus ditafsirkan dengan kesadaran penuh terhadap distorsi dimensi dan makna geometrisnya sebelum dijadikan dasar klaim riset.
- Pemahaman teknis clustering harus langsung diterjemahkan ke dalam perancangan research gap, hipotesis, dan metodologi eksperimen tingkat magister.

### Transisi ke Slide Berikutnya

Setelah memahami cakupan kompetensi dan target penelitian yang diharapkan, mari kita mulai dengan meletakkan pondasi konseptual terlebih dahulu. Pada slide berikutnya, kita akan membedah posisi unsupervised learning dalam ekosistem data mining, khususnya perbedaan mendasar antara pendekatan predictive dan descriptive, serta mengapa clustering masuk dalam kategori descriptive mining yang bertujuan mengungkap pola tersembunyi tanpa bantuan label supervisi.

---

## Slide 003 - Unsupervised Learning: Konsep dan Posisi dalam Data Mining

### Narasi

Data mining secara fundamental dapat dikategorikan menjadi dua mode utama berdasarkan ketersediaan informasi supervisi atau label pada dataset. Mode pertama adalah predictive learning, di mana model dipelajari menggunakan pasangan data fitur dan target berlabel untuk mempelajari fungsi pemetaan dari input ke output. Contoh klasik meliputi klasifikasi dan regresi, di mana evaluasi kinerja model dapat dilakukan secara langsung dan objektif dengan membandingkan prediksi terhadap ground truth. Sebaliknya, mode kedua adalah descriptive learning, yang berfokus pada penemuan pola, struktur, atau representasi tersembunyi tanpa bergantung pada label eksternal. Dalam konteks ini, teknik seperti association rule mining, clustering, dan anomaly detection berperan sebagai tulang punggung eksplorasi data.

Pada jenjang magister, pemahaman tentang pembagian ini bukan sekadar taksonomi, melainkan fondasi metodologis dalam merumuskan research question dan desain eksperimen. Ketika kita memasuki ranah descriptive mining, tujuan utamanya bergeser dari prediksi ke pemahaman struktur intrinsik dataset. Clustering merupakan salah satu pilar utama descriptive mining. Prinsip dasarnya adalah pengelompokan objek sedemikian rupa sehingga kesamaan antar anggota dalam satu cluster (intra-cluster similarity) jauh lebih tinggi dibandingkan dengan kesamaan antar anggota dari cluster yang berbeda (inter-cluster similarity). Tidak seperti supervised learning yang memiliki patokan evaluasi mutlak, kualitas hasil clustering sangat bergantung pada karakteristik data, domain knowledge, serta metrik validasi yang dipilih secara kritis.

Representasi konseptual pada slide ini menyoroti perbedaan mendasar antara kedua paradigma tersebut. Pada pendekatan supervised, prosesnya dapat diringkas sebagai pemetaan `(x, y) --> f(x) --> y_pred`, dengan evaluasi yang terukur langsung terhadap `y`. Sementara itu, unsupervised learning bekerja hanya dengan `x`, menghasilkan output berupa klaster atau deteksi noise melalui fungsi `g(x)`, tanpa adanya `y` sebagai acuan. Ketidakhadiran label ini membuat evaluasi menjadi lebih kompleks dan sering kali memerlukan kombinasi metrik internal (seperti silhouette score, Calinski-Harabasz index, atau Davies-Bouldin index) dan eksternal jika label semu tersedia. Tantangan ini menuntut peneliti untuk tidak hanya mengandalkan performa algoritma, tetapi juga melakukan ablation study, robustness analysis, dan interpretasi visual yang ketat untuk memastikan bahwa struktur yang ditemukan benar-benar meaningful secara statistik maupun praktis.

Pemahaman posisi unsupervised learning dalam ekosistem data mining ini akan menjadi landasan saat kita membedah berbagai pendekatan clustering secara teknis. Setelah mengonfirmasi bahwa clustering bertujuan mendeskripsikan struktur data tanpa label, langkah selanjutnya adalah memahami bagaimana algoritma-algoritma tersebut mengimplementasikan prinsip tersebut secara matematis dan komputasional. Hal ini akan membawa kita langsung ke pembahasan tipe-tipe clustering yang umum digunakan dalam penelitian dan industri.

### Inti yang Harus Ditekankan

- Clustering termasuk dalam descriptive mining, di mana tujuannya adalah menemukan struktur alami data tanpa bergantung pada label eksternal.
- Evaluasi clustering lebih kompleks dibanding supervised learning karena tidak adanya ground truth, sehingga memerlukan pemilihan metrik internal/eksternal yang tepat dan interpretasi kritis.
- Perbandingan konseptual `(x,y) → f(x) → y_pred` versus `x → g(x) → klaster/noise` menegaskan pergeseran fokus dari prediksi akuratif ke eksplorasi pola tersembunyi.

### Transisi ke Slide Berikutnya

Dengan memahami bahwa clustering bertujuan mendeskripsikan struktur data tanpa label, kini kita akan menguraikan bagaimana berbagai algoritma mengimplementasikan prinsip tersebut, dimulai dari pendekatan partitioning hingga density-based clustering.

---

## Slide 004 - Tipe-tipe Clustering

### Narasi

Setelah memahami posisi clustering sebagai bagian dari descriptive mining dalam kerangka unsupervised learning, langkah berikutnya adalah mengenali keragaman algoritma yang tersedia. Pembagian tipe clustering tidak bersifat arbitrer, melainkan didasarkan pada mekanisme matematis dan asumsi struktural yang mendasari pembentukan grup. Secara umum, literatur data mining mengelompokkan metode clustering menjadi empat pendekatan utama.

Pertama, **Partitioning methods** seperti K-Means dan K-Medoids. Pendekatan ini bekerja dengan melakukan partisi eksplisit terhadap dataset menjadi $k$ cluster yang saling disjoint. Setiap observasi hanya dapat masuk ke dalam satu cluster saja. Metode ini paling stabil dan efisien ketika struktur data cenderung globular atau berbentuk bola di ruang fitur multidimensi, karena keputusan pengelompokan sangat bergantung pada jarak geometris ke pusat cluster.

Kedua, **Hierarchical clustering**, yang terbagi menjadi agglomerative (bottom-up) dan divisive (top-down). Ciri khas pendekatan ini adalah tidak mewajibkan peneliti menentukan jumlah cluster ($k$) sebelum eksekusi algoritma. Hasil akhir berupa struktur pohon atau dendrogram yang merepresentasikan hubungan nested antar titik data. Hierarki ini sangat bernilai dalam fase exploratory data analysis ketika peneliti ingin mengungkap taksonomi alami atau pola bertingkat yang terkandung dalam data.

Ketiga, **Density-based clustering** seperti DBSCAN, OPTICS, dan HBDSCAN. Berbeda dengan metode berbasis jarak atau hierarki, pendekatan ini mendefinisikan cluster sebagai region kontinu dengan kepadatan titik data yang melebihi ambang batas tertentu, yang dipisahkan oleh area berkepadatan rendah. Keunggulan fundamentalnya terletak pada kemampuan menangani bentuk cluster yang arbitrary (non-konveks) serta secara otomatis mengisolasi noise dan outlier tanpa memerlukan preprocessing tambahan yang intensif.

Keempat, terdapat **Model-based clustering** dan teknik lain seperti spectral clustering. Contohnya Gaussian Mixture Model (GMM) yang berasumsi setiap cluster berasal dari distribusi probabilitas multivariat tertentu. Meskipun powerful untuk data dengan overlap antar kelas, pembahasan mendalam mengenai asumsi statistik dan estimasi parameter model ini tidak menjadi fokus utama pada pertemuan ini.

Sebagai penegasan, eksplorasi teoritis maupun implementasi praktis melalui Python dan scikit-learn pada sesi ini akan tertuju pada tiga pendekatan pertama: partitioning, hierarchical, dan density-based. Ketiganya dipilih karena memberikan variasi strategi yang komplementer dan sering dijadikan baseline metodologis dalam riset data mining tingkat magister.

### Inti yang Harus Ditekankan

- Klasifikasi clustering didasarkan pada mekanisme pembentukan grup: partitioning (berbasis partisi tetap), hierarchical (berbasis struktur pohon), density-based (berbasis kepadatan lokal), dan model-based (berbasis asumsi distribusi).
- Pemilihan tipe clustering harus didorong oleh karakteristik data (bentuk, keberadaan noise, kebutuhan hierarki) dan tujuan analitik, bukan sekadar popularitas algoritma.
- Partitioning membutuhkan penentuan $k$ di awal dan sensitif terhadap outlier; hierarchical memberikan fleksibilitas interpretasi melalui dendrogram; density-based unggul dalam menangani bentuk kompleks dan memisahkan noise secara otomatis.
- Fokus eksperimen dan ablation study pada perkuliahan ini akan tertuju pada tiga pendekatan utama sebagai fondasi perbandingan performa dan kompleksitas komputasi.

### Transisi ke Slide Berikutnya

Dari ketiga pendekatan yang menjadi fokus, partitioning methods menawarkan keseimbangan terbaik antara kemudahan implementasi dan interpretabilitas hasil. Mari kita telusuri lebih mendalam bagaimana K-Means bekerja, mulai dari representasi centroid, penggunaan Euclidean distance, hingga minimisasi fungsi objektif inertia atau WCSS.

---

## Slide 005 - K-Means: Konsep Dasar

### Narasi

Setelah membahas klasifikasi umum pada slide sebelumnya, kita kini fokus mendalami salah satu metode partitioning paling fundamental dalam unsupervised learning, yaitu K-Means. Berbeda dengan pendekatan hierarchical atau density-based yang memungkinkan eksplorasi struktur data tanpa batasan jumlah grup di awal, K-Means mensyaratkan penentuan parameter $k$ sebagai input utama. Algoritma ini bekerja dengan prinsip membagi seluruh observasi ke dalam $k$ kelompok non-overlapping, di mana setiap kelompok direpresentasikan oleh sebuah titik pusat yang disebut centroid. Centroid ini secara matematis merupakan mean vektor dari semua titik data yang tergabung dalam cluster tersebut.

Untuk mengukur kedekatan relatif antar titik data dan pusat cluster, K-Means secara default memanfaatkan Euclidean distance. Metrik ini efektif dalam ruang fitur berdimensi rendah hingga menengah, meskipun memerlukan perhatian ekstra terhadap skala fitur jika data tidak dinormalisasi. Tujuan optimisasi inti dari K-Means adalah meminimalkan nilai inertia atau Within-Cluster Sum of Squares (WCSS). Fungsi objektif ini menghitung total variasi dalam cluster dengan menjumlahkan kuadrat jarak Euclidean antara setiap titik data $x_i$ dan centroid $\mu_j$ milik cluster $C_j$ tempat titik tersebut berada. Secara formal, fungsi objektif ditulis sebagai:

```text
J = Σ_{j=1}^k Σ_{x_i ∈ C_j} ||x_i - μ_j||²
```

Nilai $J$ yang semakin kecil menandakan bahwa titik-titik data dalam setiap cluster berada lebih rapat di sekitar centroidnya, sehingga menghasilkan grup yang lebih kompak dan homogen. Penting untuk dipahami bahwa meskipun minimisasi $J$ adalah tujuan algoritma, nilai inertia tidak dapat digunakan secara langsung sebagai kriteria pemilihan $k$ terbaik antar konfigurasi yang berbeda. Penurunan nilai $J$ bersifat monotonik seiring penambahan jumlah cluster, sehingga diperlukan teknik tambahan seperti elbow method atau silhouette score untuk menentukan $k$ yang optimal secara statistik.

Pemahaman mendalam terhadap fungsi objektif dan representasi centroid ini menjadi prasyarat metodologis sebelum memasuki tahap implementasi komputasional. Dalam konteks penelitian tingkat magister, mengetahui bagaimana inertia dihitung membantu mahasiswa merancang eksperimen yang tepat saat melakukan ablation study atau evaluasi robustness model clustering. Selanjutnya, kita akan mengurai mekanisme iteratif algoritma, strategi inisialisasi centroid, serta analisis kompleksitas waktu dan ruang yang mendasari eksekusinya di lingkungan pemrograman seperti Python dan scikit-learn.

### Inti yang Harus Ditekankan

- K-Means adalah metode partitioning yang mewajibkan penentuan jumlah cluster ($k$) sebelum eksekusi.
- Setiap cluster direpresentasikan oleh centroid yang merupakan rata-rata vektor titik data dalam cluster tersebut.
- Algoritma bertujuan meminimalkan inertia/WCSS ($J$) guna menghasilkan klaster yang kompak dan homogen.
- Nilai $J$ tidak valid untuk membandingkan efektivitas nilai $k$ yang berbeda secara langsung; diperlukan metrik validasi eksternal atau internal tambahan.
- Euclidean distance menjadi metrik baku penghitungan jarak, sehingga preprocessing normalisasi sangat disarankan.

### Transisi ke Slide Berikutnya

Dengan memahami tujuan optimisasi dan representasi centroid, langkah logis berikutnya adalah menguraikan alur iteratif algoritma secara teknis, mulai dari inisialisasi pusat, assignment titik data, update centroid, hingga kriteria penghentian, lengkap dengan analisis kompleksitas komputasinya.

---

## Slide 006 - K-Means: Algoritma dan Kompleksitas

### Narasi

Setelah pada slide sebelumnya kita menelaah konsep dasar K-Means serta fungsi objektif yang bertujuan meminimalkan inertia atau WCSS, kini kita akan mengurai secara teknis bagaimana algoritma ini beroperasi langkah demi langkah. Proses iteratif K-Means dimulai dengan menentukan jumlah cluster $k$ dan melakukan inisialisasi awal untuk pusat-pusat cluster atau centroid $\mu_1, \dots, \mu_k$. Tahap kedua adalah assignment, di mana setiap titik data dalam dataset akan dialokasikan ke dalam cluster yang memiliki centroid terdekat berdasarkan metrik jarak, umumnya Euclidean distance. Setelah seluruh titik terassign, tahap ketiga dilakukan yaitu pembaruan centroid, di mana posisi baru $\mu_j$ dihitung sebagai rata-rata aritmatik dari semua titik data yang masuk ke dalam cluster $j$. Proses assignment dan update ini diulang secara siklik hingga kriteria konvergensi terpenuhi, misalnya ketika perpindahan centroid sudah mendekati nol atau tidak terjadi perubahan penugasan cluster lagi.

Kualitas hasil akhir K-Means sangat sensitif terhadap strategi inisialisasi centroid awal. Jika menggunakan inisialisasi acak murni, algoritma dapat terjebak pada solusi lokal yang berbeda-beda tergantung pada titik awal yang terpilih secara kebetulan. Untuk mengatasi kelemahan ini, metode k-means++ dikembangkan sebagai perbaikan signifikan. Algoritma ini memilih centroid pertama secara acak, lalu memilih centroid berikutnya dengan probabilitas yang sebanding dengan kuadrat jarak dari titik data terdekat ke centroid yang sudah terbentuk. Pendekatan ini memastikan titik-titik awal tersebar lebih merata di seluruh ruang fitur, sehingga mengurangi risiko terjebak pada minimum lokal dan mempercepat konvergensi. Dalam praktik modern, khususnya pada library scikit-learn, k-means++ telah ditetapkan sebagai metode inisialisasi default karena konsistensinya dalam menghasilkan performa yang stabil dan reproducible.

Dari perspektif efisiensi komputasi, kompleksitas waktu rata-rata K-Means dapat dimodelkan sebagai $O(n \times k \times d \times \text{iterasi})$, dengan $n$ sebagai jumlah sampel, $d$ sebagai jumlah dimensi atau fitur, dan iterasi sebagai jumlah putaran hingga konvergen. Pada konteks penelitian tingkat magister maupun implementasi industri, faktor ini menjadi pertimbangan kritis saat membandingkan baseline clustering dengan metode lain. Perlu juga ditekankan bahwa meskipun K-Means dijamin konvergen ke suatu solusi stabil, solusi tersebut belum tentu merupakan optimum global. Fungsi objektif K-Means bersifat non-konveks terhadap parameter centroid, sehingga sangat rentan terhadap minimum lokal. Oleh karena itu, protokol eksperimen yang ketat menyarankan untuk menjalankan algoritma beberapa kali dengan random state yang berbeda, membandingkan nilai inertia masing-masing percobaan, dan memilih konfigurasi yang memberikan inertia terkecil sebagai representasi clustering terbaik.

### Inti yang Harus Ditekankan

- Mekanisme inti K-Means bersifat iteratif: inisialisasi centroid, assignment berbasis jarak, dan pembaruan centroid hingga konvergen.
- Inisialisasi acak berisiko menghasilkan solusi lokal suboptimal; penggunaan k-means++ (default di scikit-learn) meningkatkan stabilitas, kecepatan konvergensi, dan reproduktibilitas eksperimen.
- Kompleksitas waktu $O(nkdI)$ menuntut pertimbangan skalabilitas data, dan karena sifat non-konveks fungsi objektif, menjalankan multiple runs serta memilih inertia terendah adalah standar metodologis yang wajib diterapkan.

### Transisi ke Slide Berikutnya

Dengan memahami mekanisme kerja, inisialisasi, dan batasan konvergensi K-Means, langkah logis selanjutnya adalah menentukan nilai $k$ yang optimal serta mengenali keterbatasan struktural algoritma ini dalam menangani distribusi data yang tidak ideal, yang akan kita bedah pada slide berikutnya.

---

## Slide 007 - K-Means: Menentukan k dan Keterbatasan

### Narasi

Setelah membahas langkah iteratif algoritma K-Means dan analisis kompleksitas komputasinya pada slide sebelumnya, tantangan metodologis berikutnya yang paling kritis adalah menentukan nilai $k$ secara objektif. Dalam konteks unsupervised learning, tidak terdapat label ground truth untuk mengevaluasi performa, sehingga pemilihan jumlah cluster harus mengandalkan metrik internal yang mengukur compactness dan separation antar kelompok data.

Pendekatan pertama yang paling umum digunakan adalah Elbow method. Prinsipnya adalah memplot nilai inertia (total within-cluster sum of squares) terhadap berbagai kandidat nilai $k$. Kurva akan menunjukkan penurunan yang tajam pada awal peningkatan $k$, kemudian melandai secara bertahap. Titik di mana kurva mengalami perubahan kemiringan signifikan, menyerupai siku tangan, dianggap sebagai trade-off optimal antara reduksi error dan penambahan kompleksitas model. Namun, dalam praktiknya, kurva sering kali terlalu halus sehingga interpretasi visual bisa bersifat subjektif.

Untuk mengurangi ambiguitas visual, Silhouette score memberikan evaluasi berbasis sampel yang lebih kuantitatif. Metrik ini menghitung rasio antara kepadatan intra-cluster dan diskretisasi antar-cluster untuk setiap titik data. Nilai silhouette berkisar antara -1 hingga 1, di mana nilai mendekati 1 menandakan titik ditempatkan dengan benar dalam clusternya, nilai dekat 0 mengindikasikan tumpang tindih antar cluster, dan nilai negatif menandakan kemungkinan penugasan cluster yang salah. Pemilihan $k$ dilakukan pada nilai yang memaksimalkan rata-rata silhouette score seluruh dataset.

Metode ketiga yang lebih rigor secara statistik adalah Gap statistic. Teknik ini membandingkan log-inertia dari data aktual dengan log-inertia dari distribusi referensi acak yang dihasilkan melalui resampling (biasanya uniform distribution). Selisih gap dihitung untuk berbagai $k$, dan nilai optimal dipilih berdasarkan prinsip first local maximum atau aturan standar error. Gap statistic memberikan justifikasi probabilistik bahwa struktur cluster yang terdeteksi bukan merupakan artefak dari noise acak, sehingga sangat disarankan untuk penelitian tingkat magister yang menuntut validitas statistik kuat.

Meskipun mekanismenya sederhana dan efisien, K-Means memiliki keterbatasan fundamental yang harus diakui dalam perancangan eksperimen data mining. Pertama, algoritma mewajibkan spesifikasi $k$ secara eksplisit sebelum eksekusi, padahal dalam banyak skenario riil jumlah kelompok alamiah data tidak diketahui. Kedua, K-Means sangat sensitif terhadap outlier karena pusat cluster dihitung menggunakan mean aritmetika, sehingga satu titik ekstrem dapat menarik centroid secara drastis dan merusak partitioning. Ketiga, perhitungan jarak Euclidean mensyaratkan semua fitur berada pada skala yang sebanding; tanpa normalisasi atau standardisasi, fitur dengan rentang nilai besar akan mendominasi proses clustering.

Secara geometris, K-Means berasumsi bahwa cluster berbentuk globular (spherical) dengan varians yang relatif homogen. Asumsi ini menyebabkan kegagalan total ketika data memiliki struktur non-convex seperti bentuk cincin, bulan sabit, atau pola bercabang. Sebagai respons akademis terhadap keterbatasan ini, muncul varian seperti K-Medoids yang menggunakan medoid (titik aktual terdekat) sebagai representasi cluster sehingga lebih robust terhadap outlier, serta Gaussian Mixture Models (GMM) yang mengganti asumsi jarak deterministik dengan estimasi probabilitas distribusi multivariat normal. Namun, penting dicatat bahwa varian tersebut tetap beroperasi di bawah asumsi parametrik atau berbasis jarak yang perlu dievaluasi sesuai karakteristik dataset.

### Inti yang Harus Ditekankan

- Penentuan $k$ bukan proses arbitrer, melainkan evaluasi sistematis menggunakan Elbow, Silhouette, atau Gap Statistic untuk memastikan objektivitas hasil clustering.
- Preprocessing rigor (normalisasi/standardisasi) dan penanganan outlier wajib dilakukan sebelum menerapkan K-Means guna mencegah bias skala dan distorsi centroid.
- Asumsi globular dan spherical cluster adalah batasan struktural utama K-Means; pemahaman ini menjadi landasan teoretis untuk memilih atau mengembangkan metode clustering alternatif yang sesuai dengan topologi data.

### Transisi ke Slide Berikutnya

Ketika struktur data terlalu kompleks untuk direpresentasikan oleh partisi tunggal berbasis centroid, pendekatan hierarkis menawarkan perspektif yang lebih kaya melalui pembentukan struktur bertingkat. Mari kita lanjutkan ke konsep dasar Hierarchical Clustering dan mekanisme pembangunannya.

---

## Slide 008 - Hierarchical Clustering: Konsep Dasar

### Narasi

Hierarchical clustering menawarkan pendekatan yang berbeda secara fundamental dibandingkan metode partisi seperti K-Means yang kita bahas pada slide sebelumnya. Alih-alih langsung mempartisi dataset menjadi kelompok-kelompok statis, algoritma ini membangun struktur hierarki bertingkat yang merepresentasikan hubungan nested antar titik data. Pendekatan ini sangat relevan ketika struktur data bersifat natural, tidak jelas batasannya, atau ketika kita ingin mengeksplorasi pola pengelompokan pada berbagai skala granularitas tanpa harus menetapkan jumlah cluster secara eksplisit di awal.

Secara konseptual, terdapat dua paradigma utama dalam hierarchical clustering. Pertama adalah agglomerative clustering, yang beroperasi secara bottom-up. Proses dimulai dengan menginisialisasi setiap observasi sebagai cluster mandiri beranggotakan satu elemen. Pada setiap iterasi, algoritma menghitung matriks kemiripan atau jarak antar cluster, lalu menggabungkan pasangan cluster yang paling dekat. Proses rekursif ini berlanjut hingga seluruh data menyatu menjadi satu cluster induk. Kedua adalah divisive clustering, yang menggunakan strategi top-down. Algoritma memulai dari satu cluster global yang memuat seluruh dataset, kemudian secara bertahap memecahnya menjadi sub-cluster yang lebih homogen hingga setiap titik membentuk klaster tersendiri. Dalam praktik komputasional modern dan implementasi pustaka seperti scikit-learn, agglomerative clustering jauh lebih dominan digunakan karena kompleksitas waktu dan memori yang lebih efisien dibandingkan varian divisive.

Output utama dari proses hierarkis ini direpresentasikan melalui visualisasi struktural yang disebut dendrogram. Dendrogram berfungsi sebagai pohon biner yang mencatat urutan penggabungan antar cluster beserta nilai dissimilarity atau jarak penggabungan pada setiap tahap. Sumbu vertikal merepresentasikan tingkat dissimilarity, sedangkan sumbu horizontal menempatkan entitas data atau cluster intermediate. Visualisasi ini memungkinkan peneliti melakukan analisis kualitatif terhadap struktur data, mengidentifikasi outlier berbasis ketinggian cabang, dan menentukan ambang batas penggabungan secara intuitif. Karakteristik ini menjadi solusi metodologis atas keterbatasan K-Means yang mensyaratkan penentuan nilai k secara manual dan cenderung gagal menangkap bentuk cluster non-convex.

Namun, fondasi dari hierarchical clustering terletak pada definisi operasional mengenai bagaimana "kedekatan" antar cluster dihitung selama proses penggabungan. Pemilihan metrik jarak ini akan secara langsung mempengaruhi morfologi cluster yang terbentuk, stabilitas hasil, dan sensitivitas terhadap noise. Pembahasan teknis mengenai kriteria pengukuran jarak inilah yang akan kita dalami pada slide berikutnya melalui berbagai linkage criterion.

### Inti yang Harus Ditekankan

- Hierarchical clustering menghasilkan struktur bertingkat, bukan partisi tunggal, sehingga cocok untuk eksplorasi multi-skala.
- Agglomerative (bottom-up) merupakan standar de facto karena efisiensi komputasi, sementara divisive (top-down) jarang dipakai dalam praktik skala besar.
- Dendrogram adalah artefak analitis utama yang memvisualisasikan urutan penggabungan dan tingkat dissimilarity, menggantikan fungsi elbow plot atau silhouette score untuk penentuan k.
- Metode ini secara inheren mengatasi kebutuhan penentuan jumlah cluster di awal, sekaligus memberikan fleksibilitas dalam menangani bentuk cluster yang tidak globular.

### Transisi ke Slide Berikutnya

Setelah memahami mekanisme pembentukan hierarki dan representasi visualnya, langkah selanjutnya adalah mendalami bagaimana algoritma secara matematis mengukur jarak antar cluster. Kita akan membahas empat kriteria linkage utama—single, complete, average, dan Ward—serta teknik memotong dendrogram untuk mengekstrak partisi cluster yang optimal sesuai konteks penelitian.

---

## Slide 009 - Linkage dan Dendrogram

### Narasi

Setelah memahami konsep dasar hierarchical clustering baik melalui pendekatan agglomerative maupun divisive pada slide sebelumnya, langkah teknis berikutnya adalah menentukan bagaimana jarak antar cluster dihitung saat proses penggabungan iteratif berlangsung. Dalam hierarchical clustering, tidak terdapat satu metrik jarak tunggal yang mutlak; melainkan kita mengandalkan **linkage criterion** untuk mendefinisikan dissimilarity antara dua cluster. Pemilihan linkage ini bersifat fundamental karena secara langsung mengontrol morfologi cluster, stabilitas struktural, dan interpretasi hasil klasterisasi, yang pada jenjang magister harus dibenarkan secara empiris atau teoritis sebelum dimasukkan ke dalam rancangan eksperimen.

Tabel pada slide merangkum empat linkage criterion standar beserta karakteristiknya. **Single linkage** mengukur jarak antar dua cluster sebagai jarak minimum antara anggota terdekat dari masing-masing cluster. Metode ini sangat sensitif terhadap noise dan cenderung memicu efek *chaining*, di mana cluster yang secara konseptual terpisah tetap menyatu karena adanya titik jembatan. Sebaliknya, **Complete linkage** menggunakan jarak maksimum antar anggota terjauh, sehingga menghasilkan cluster yang lebih kompak dan seragam, namun rentan terhadap outlier karena titik ekstrem mendominasi perhitungan. **Average linkage** menawarkan pendekatan yang lebih seimbang dengan menghitung rata-rata jarak semua pasangan titik antar dua cluster; metode ini sering menjadi baseline yang stabil ketika prior knowledge tentang distribusi data terbatas. Terakhir, **Ward’s method** beroperasi berdasarkan prinsip minimisasi varians intra-cluster. Secara matematis, Ward memilih penggabungan yang menyebabkan kenaikan terkecil dalam Within-Cluster Sum of Squares (WCSS). Hasilnya umumnya berupa cluster berbentuk globular, dan metode ini sangat dominan dalam implementasi pustaka seperti `scipy.cluster.hierarchy` maupun `sklearn`, terutama untuk data multivariat dengan asumsi kerapatan relatif homogen.

Visualisasi dari seluruh proses penggabungan berbasis linkage ini direpresentasikan melalui **dendrogram**. Dendrogram adalah struktur pohon biner yang mencatat urutan dan magnitude dissimilarity pada setiap tahap penggabungan. Ilustrasi ASCII pada slide menunjukkan alur penggabungan bertahap: titik A dan B bergabung membentuk X, C dan D bergabung membentuk Y, lalu X dan Y bersatu menjadi cluster akhir. Panjang cabang horizontal atau vertikal pada diagram bukan sekadar elemen grafis, melainkan skala numerik yang merepresentasikan threshold dissimilarity. Semakin tinggi posisi node penggabungan, semakin besar perbedaan antar cluster yang digabungkan.

Dalam praktik penelitian dan exploratory data analysis, dendrogram berfungsi sebagai instrumen diagnostik untuk menentukan jumlah cluster optimal tanpa bergantung pada tebakan parameter $k$. Peneliti dapat melakukan *cutting* atau pemotongan pada ketinggian tertentu yang selaras dengan domain knowledge atau kriteria statistik (seperti elbow method pada WCSS). Pemotongan ini menghasilkan partisi final yang konsisten dengan hierarki yang terbentuk. Penting untuk dicatat bahwa perubahan linkage criterion akan mengubah高度 (height) dan topologi dendrogram, sehingga validasi silang, sensitivity analysis, atau ablation study terhadap pilihan linkage wajib dilakukan guna memastikan robustness model sebelum dipublikasikan atau diimplementasikan pada dataset produksi.

### Inti yang Harus Ditekankan

- Linkage criterion adalah parameter kunci yang mendefinisikan dissimilarity antar cluster; pilihannya secara deterministik membentuk struktur hierarki dan harus dipilih berdasarkan karakteristik distribusi data serta tujuan analitik.
- Ward’s method dan Average linkage umumnya memberikan hasil paling stabil untuk data riset akademik, sementara Single linkage需谨慎 digunakan karena kecenderungan chaining-nya.
- Dendrogram berfungsi sebagai peta navigasi hierarkis; pemotongan (*cutting*) pada threshold dissimilarity yang justified secara empiris merupakan metode non-parametrik untuk menentukan jumlah cluster yang valid.
- Dalam konteks metodologi penelitian S2, sensitivitas hasil terhadap pilihan linkage dan metrik jarak harus dilaporkan sebagai bagian dari analisis robustness dan reproducibility eksperimen.

### Transisi ke Slide Berikutnya

Memahami mekanisme linkage dan cara menginterpretasi dendrogram telah melengkapi kita dengan pemahaman teknis pembentukan hierarki cluster. Namun, kekuatan metodologis suatu algoritma selalu berbanding lurus dengan batasan komputasional dan asumsinya. Pada slide berikutnya, kita akan mengevaluasi secara kritis kelebihan dan keterbatasan hierarchical clustering, termasuk implikasi kompleksitas waktu O(n²), sifat greedy yang tidak reversible, serta strategi mitigasi ketika menghadapi data berskala besar atau streaming.

---

## Slide 010 - Hierarchical Clustering: Kelebihan dan Keterbatasan

### Narasi

Setelah pada slide sebelumnya kita membedah bagaimana jarak antar cluster dihitung melalui berbagai kriteria linkage—mulai dari single, complete, average, hingga Ward—serta cara membaca struktur pohon dari sebuah dendrogram, kini saatnya melakukan evaluasi kritis terhadap keunggulan dan kelemahan mendasar dari algoritma Hierarchical Clustering. Dalam konteks penelitian data mining tingkat magister, pemahaman mendalam mengenai trade-off algoritmik ini menjadi prasyarat penting sebelum memutuskan apakah metode ini layak dijadikan baseline eksperimen atau justru perlu digantikan oleh pendekatan partisi lain yang lebih sesuai dengan karakteristik dataset.

Keunggulan utama hierarchical clustering terletak pada fleksibilitasnya dalam eksplorasi struktur data tanpa memerlukan penentuan jumlah cluster (k) secara eksplisit di awal proses. Hal ini sangat menguntungkan ketika domain knowledge tentang struktur data masih terbatas, atau ketika pola pengelompokan memang bersifat bertingkat dan berjenjang. Output berupa dendrogram memberikan representasi visual hierarki yang kaya informasi, memungkinkan peneliti untuk menganalisis berbagai level granularitas pengelompokan hanya dengan memotong tree pada ketinggian (height) tertentu. Karena sifatnya yang deterministik dan mudah diinterpretasikan, metode ini juga sangat efektif untuk dataset berukuran kecil hingga sedang, serta kerap menjadi standar dalam analisis taksonomi biologis, klasifikasi dokumen, atau studi kasus yang menuntut transparansi struktural yang jelas.

Di sisi lain, terdapat keterbatasan fundamental yang harus dipertimbangkan secara serius. Kompleksitas waktu dan ruang dari sebagian besar implementasi agglomerative hierarchical clustering berada pada orde O(n²) bahkan dapat melampaui O(n³) tergantung strategi merge-nya. Konsekuensinya, metode ini akan mengalami penurunan performa drastis dan konsumsi memori yang tinggi seiring bertambahnya jumlah sampel, sehingga tidak praktis untuk dataset berskala besar atau data streaming yang terus diperbarui secara real-time. Selain masalah skalabilitas, proses penggabungan cluster bersifat greedy dan irreversible. Artinya, sekali dua cluster digabungkan berdasarkan kriteria linkage tertentu, keputusan tersebut tidak dapat dikoreksi meskipun ternyata menggabungkan kelompok yang secara semantik berbeda. Algoritma ini juga cukup sensitif terhadap outlier dan pemilihan metrik jarak maupun linkage criterion. Keberadaan titik anomali saja mampu menggeser seluruh struktur dendrogram, yang pada akhirnya menghasilkan partisi akhir yang bias dan sulit dipertanggungjawabkan secara statistik.

Oleh karena itu, dalam praktik riset mutakhir, hierarchical clustering sering dimanfaatkan sebagai langkah eksploratif atau alternatif interpretatif untuk memetakan struktur dasar data sebelum memilih partisi final yang lebih robust. Jika Anda menemukan bahwa data memiliki struktur bertingkat yang jelas dan ukurannya masih dalam batas komputasional yang wajar, metode ini bisa menjadi baseline yang solid. Namun, jika skalanya masif, dinamis, atau mengandung banyak noise, pertimbangkan untuk beralih ke metode berbasis densitas atau partisi iteratif yang dirancang khusus untuk mengatasi keterbatasan ini.

### Inti yang Harus Ditekankan

- Hierarchical clustering unggul dalam eksplorasi struktur bertingkat tanpa perlu menentukan k di awal, namun dibayar mahal dengan kompleksitas komputasi O(n²) yang membuatnya tidak scalable untuk dataset besar.
- Sifat greedy dan irreversible pada proses agglomerative membuat algoritma ini rentan terhadap kesalahan penggabungan awal dan sangat sensitif terhadap outlier serta pemilihan linkage/metrik jarak.
- Metode ini paling tepat digunakan sebagai alat eksplorasi atau baseline interpretatif pada dataset kecil-sedang, bukan untuk pipeline produksi skala besar atau data streaming.

### Transisi ke Slide Berikutnya

Mengingat keterbatasan hierarchical clustering dalam menangani data besar dan sensitivitasnya terhadap noise, langkah logis berikutnya adalah mempelajari pendekatan clustering yang tidak bergantung pada bentuk globular atau hierarki tetap, melainkan mengidentifikasi cluster berdasarkan kepadatan lokal titik data. Kita akan masuk ke konsep dasar DBSCAN, yang menggunakan parameter radius ε dan jumlah tetangga minimum MinPts untuk membedakan titik inti, tepi, dan noise secara otomatis.

---

## Slide 011 - DBSCAN: Konsep Densitas

### Narasi

Berbeda dengan pendekatan hierarkis yang bergantung pada penggabungan atau pemecahan klaster secara bertahap dan bersifat greedy, DBSCAN (Density-Based Spatial Clustering of Applications with Noise) mengadopsi paradigma berbasis kepadatan lokal. Algoritma ini tidak memerlukan asumsi bentuk klaster tertentu seperti bola atau elips, melainkan mendeteksi wilayah-wilayah padat titik data yang dipisahkan oleh ruang kosong atau daerah jarang. Pergeseran fokus dari metrik jarak global ke kepadatan lokal ini secara langsung mengatasi beberapa keterbatasan hierarchical clustering, terutama masalah kompleksitas komputasi yang tinggi dan ketidakmampuan menangani struktur non-convex.

Fondasi operasional DBSCAN dibangun di atas dua parameter kontrol: ε (epsilon) sebagai radius pencarian tetangga spasial, dan MinPts sebagai ambang batas jumlah minimum titik untuk dinyatakan sebagai wilayah padat. Berdasarkan interaksi kedua parameter tersebut, setiap titik dalam dataset diklasifikasikan ke dalam tiga kategori eksplisit. Pertama, core point adalah titik yang memiliki setidaknya MinPts titik lain dalam radius ε-neighborhood-nya, menandakan bahwa titik tersebut berada di inti suatu klaster. Kedua, border point adalah titik yang tidak memenuhi syarat sebagai core point, namun terletak dalam ε-neighborhood dari sebuah core point, sehingga tetap dianggap sebagai anggota klaster meski berada di tepinya. Ketiga, noise point adalah titik yang gagal memenuhi kriteria core maupun border, sehingga secara otomatis diisolasi sebagai anomali atau gangguan statistik.

Secara mental model, konsep ini dapat divisualisasikan sebagai awan titik data dengan variasi kerapatan. Titik-titik di bagian dalam awan memenuhi syarat sebagai core point karena dikelilingi oleh kerapatan tetangga yang tinggi. Titik di perimeter awan berfungsi sebagai border point, menghubungkan inti klaster dengan lingkungan luarnya. Sementara itu, titik yang terpencil dan tidak berada dalam radius ε dari titik manapun yang memenuhi syarat densitas, ditandai secara tegas sebagai noise point. Karakteristik klasifikasi ini memberikan nilai tambah metodologis bagi penelitian tingkat magister: DBSCAN secara alami menolak memaksa titik noise masuk ke dalam klaster mana pun, sehingga hasil clustering lebih mencerminkan distribusi empiris data dan mendukung validasi robustness serta deteksi anomali dalam satu pipeline.

Pemahaman presisi terhadap definisi densitas dan relasi ketergantungan antar titik ini merupakan prasyarat logis sebelum mengeksekusi prosedur iteratif. Mekanisme bagaimana titik-titik tersebut saling terhubung, diperluas, dan diisolasi akan diterjemahkan ke dalam langkah-langkah algoritmik yang sistematis pada pembahasan berikutnya.

### Inti yang Harus Ditekankan

- DBSCAN mengandalkan kepadatan lokal (kombinasi ε dan MinPts) untuk mendeteksi klaster dengan bentuk arbitrer, bukan bergantung pada pusat atau metrik jarak Euclidean murni.
- Klasifikasi titik menjadi core, border, dan noise bersifat dinamis dan sensitif terhadap parameter; tuning parameter harus didasari analisis distribusi densitas dataset.
- Kemampuan memisahkan noise secara eksplisit menjadikan DBSCAN lebih robust untuk data dunia nyata yang mengandung outlier struktural, berbeda dengan metode partisi yang memaksa semua titik masuk ke klaster.

### Transisi ke Slide Berikutnya

Setelah memahami definisi konseptual dan klasifikasi titik berdasarkan densitas, langkah selanjutnya adalah melihat bagaimana mekanisme pencarian tetangga dan perluasan klaster dijalankan secara sistematis dalam pseudocode algoritma DBSCAN.

---

## Slide 012 - DBSCAN: Algoritma

### Narasi

Setelah memahami konsep densitas lokal pada slide sebelumnya, kita kini masuk ke mekanisme operasional algoritma DBSCAN itu sendiri. Pseudocode yang tertera pada slide ini menggambarkan proses iteratif yang dilakukan oleh DBSCAN untuk mengelompokkan data. Algoritma ini memulai eksekusi dengan melakukan loop pada setiap titik data yang belum diproses. Untuk setiap titik tersebut, langkah pertama adalah mengidentifikasi semua tetangganya dalam radius ε. Di sinilah parameter MinPts berperan sebagai ambang batas kepadatan. Jika jumlah tetangga yang ditemukan kurang dari MinPts, titik tersebut secara sementara ditandai sebagai noise. Namun, jika jumlah tetangganya memenuhi atau melebihi MinPts, titik tersebut dikategorikan sebagai *core point* dan menjadi benih untuk pembentukan cluster baru.

Proses pembentukan cluster tidak berhenti di titik awal saja. DBSCAN akan melakukan ekspansi secara rekursif atau menggunakan struktur antrian (*queue*) untuk memeriksa tetangga-tetangga dari titik inti tersebut. Setiap tetangga yang juga memenuhi syarat kepadatan akan ditambahkan ke dalam cluster yang sama, dan proses pengecekan kepadatan dilanjutkan hingga tidak ada lagi titik yang dapat diperluas. Dari sisi efisiensi komputasi, kompleksitas waktu algoritma ini sangat bergantung pada implementasi indeks spasial. Tanpa penggunaan struktur data khusus seperti KD-Tree atau Ball Tree, DBSCAN harus menghitung jarak antara semua pasangan titik, sehingga menghasilkan kompleksitas O(n²). Sebaliknya, dengan bantuan spatial index yang sudah terintegrasi di library seperti scikit-learn, pencarian tetangga dapat dioptimalkan sehingga kompleksitas mendekati O(n log n), yang jauh lebih efisien untuk dataset berukuran besar.

Salah satu keunggulan fundamental DBSCAN dibandingkan algoritma partisi tradisional seperti K-Means terletak pada fleksibilitas bentuk cluster dan penanganan outlier. Karena pengelompokan didasarkan pada konektivitas kepadatan, bukan sekadar jarak geometris ke centroid, DBSCAN mampu mengidentifikasi cluster dengan bentuk non-convex yang kompleks, selama daerah antar cluster cukup jarang. Selain itu, mekanisme penandaan noise bersifat eksplisit; titik-titik yang tidak memenuhi kriteria kepadatan tidak dipaksa masuk ke dalam cluster terdekat, melainkan dibiarkan sebagai noise. Hal ini sangat krusial dalam konteks penelitian data mining tingkat magister, karena memungkinkan peneliti memisahkan sinyal yang relevan dari anomali atau data yang memang tidak memiliki pola kelompok yang jelas, berbeda dengan pendekatan berbasis centroid yang selalu mengasumsikan sferisitas dan memaksa seluruh data ke dalam klaster.

### Inti yang Harus Ditekankan

- Mekanisme kerja DBSCAN bersifat inkremental dan berbasis kepadatan: titik hanya bergabung ke cluster jika memenuhi syarat MinPts dalam radius ε, lalu diekspansi secara rekursif hingga tidak ada lagi titik yang memenuhi kondisi densitas.
- Kompleksitas waktu sangat bergantung pada optimisasi pencarian tetangga; penggunaan spatial index (KD-Tree/Ball Tree) menurunkan beban komputasi dari O(n²) menjadi hampir O(n log n), menjadikan algoritma ini layak untuk dataset berskala menengah-besar.
- DBSCAN secara alami menangani bentuk cluster non-convex dan memisahkan noise tanpa memaksakan anggota data ke dalam klaster, menjadikannya lebih robust terhadap distribusi data yang tidak spherical dibandingkan K-Means.

### Transisi ke Slide Berikutnya

Meskipun algoritma ini kuat secara konseptual, efektivitasnya sangat bergantung pada pemilihan parameter ε dan MinPts yang tepat. Pada slide berikutnya, kita akan membahas strategi praktis dalam mengkalibrasi kedua parameter tersebut, termasuk penggunaan k-distance graph, serta bagaimana mengatasi keterbatasan DBSCAN ketika menghadapi dataset dengan variasi densitas yang tidak seragam.

---

## Slide 013 - DBSCAN: Parameter dan Sensitivitas

### Narasi

Setelah memahami mekanisme iteratif algoritma DBSCAN pada slide sebelumnya, perhatian kita beralih kepada dua parameter paling krusial yang mengendalikan perilaku clustering ini: epsilon (ε) dan MinPts. Epsilon berfungsi sebagai radius neighborhood yang menentukan seberapa jauh jangkauan pencarian tetangga, sedangkan MinPts menetapkan ambang batas minimum titik yang harus berada dalam radius tersebut agar sebuah titik diklasifikasikan sebagai core point. Kombinasi kedua nilai ini secara langsung membentuk granularitas dan kepadatan cluster yang dihasilkan.

Sensitivitas terhadap nilai epsilon sangat tinggi dan memerlukan pendekatan sistematis. Jika epsilon ditetapkan terlalu kecil, sebagian besar titik gagal memenuhi syarat kerapatan dan otomatis ditandai sebagai noise, sehingga struktur data terfragmentasi menjadi klaster-klaster kecil yang tidak bermakna. Di sisi lain, epsilon yang terlalu besar akan menimpa batas alami antar kelompok, menyebabkan penggabungan klaster yang sebenarnya terpisah secara signifikan. Untuk meminimalkan subjektivitas dalam pemilihan epsilon, metode standar yang direkomendasikan adalah pembuatan k-distance graph. Prosedurnya melibatkan perhitungan jarak ke tetangga ke-MinPts untuk seluruh titik, pengurutan jarak tersebut secara descending, dan plottingnya. Titik siku (elbow) pada kurva hasil plot menandai transisi antara daerah padat dan daerah jarang, yang kemudian dapat diadopsi sebagai nilai epsilon optimal.

Terkait MinPts, pedoman umum menyarankan nilai minimal sebesar dimensi fitur ditambah satu, namun dalam aplikasi praktis angka 5 sering menjadi titik awal yang stabil untuk dataset dengan dimensi rendah hingga menengah. Nilai MinPts yang terlalu rendah membuat model rentan terhadap fluktuasi lokal dan outlier, sementara nilai yang terlalu tinggi cenderung menghasilkan cluster yang terlalu homogen dan mengaburkan pola hierarkis atau sub-struktur dalam data. Dalam konteks penelitian tingkat magister, penentuan parameter ini tidak boleh dilakukan secara arbitrer, melainkan harus dicatat sebagai bagian dari prosedur hyperparameter tuning dan sensitivity analysis guna menjamin reproduktibilitas dan validitas eksperimen.

Kelemahan mendasar dari DBSCAN klasik terletak pada asumsi bahwa seluruh ruang data memiliki tingkat kerapatan yang seragam melalui penggunaan satu nilai epsilon global. Asumsi ini kerap pecah pada dataset dunia nyata yang mengandung variasi densitas ekstrem, seperti data pencitraan medis, sinyal sensor IoT, atau interaksi jaringan sosial. Ketika heterogenitas kerapatan menjadi ciri dominan, pendekatan berbasis radius tetap akan gagal menangkap struktur multi-skala tersebut. Keterbatasan ini membuka jalan bagi pengembangan algoritma densitas-adaptif yang akan kita bahas secara mendalam pada slide berikutnya.

### Inti yang Harus Ditekankan

- Pemilihan epsilon dan MinPts bersifat sangat sensitif; kesalahan kecil dapat mengubah total interpretasi struktur data.
- Gunakan k-distance graph dengan mencari titik siku (elbow) sebagai metode objektif untuk menentukan nilai epsilon awal.
- MinPts sebaiknya dimulai dari 5 atau dimensi+1; tuning harus didokumentasikan sebagai bagian dari sensitivity analysis dalam riset.
- DBSCAN klasik lemah pada data dengan densitas tidak homogen karena bergantung pada satu parameter radius global.

### Transisi ke Slide Berikutnya

Karena keterbatasan DBSCAN dalam menangani variasi densitas dengan satu parameter global, kita akan beralih ke pendekatan yang lebih adaptif. Pada slide berikutnya, kita akan mengupas bagaimana OPTICS dan HDBSCAN mengatasi masalah ini dengan mekanisme reachability plot dan integrasi hierarchical clustering, sehingga mampu mengekstrak klaster dengan kepadatan beragam secara lebih natural.

---

## Slide 014 - Density-Based Lanjutan: OPTICS dan HDBSCAN

### Narasi

Pada slide sebelumnya, kita telah mengidentifikasi bahwa algoritma DBSCAN memiliki keterbatasan metodologis yang signifikan ketika diterapkan pada dataset dengan kepadatan tidak seragam. Ketergantungan pada satu nilai ε global sering kali menyebabkan fragmentasi cluster yang seharusnya menyatu, atau sebaliknya, penggabungan klaster yang secara alami terpisah. Untuk mengatasi kelemahan fundamental ini, dua pendekatan lanjutan dalam clustering berbasis densitas dikembangkan: OPTICS dan HDBSCAN.

OPTICS (Ordering Points To Identify the Clustering Structure) memperluas mekanisme DBSCAN dengan menghapus kebutuhan akan radius tetangga yang kaku. Algoritma ini menghitung jarak jangkauan (*reachability distance*) untuk setiap titik data terhadap tetangganya, lalu mengurutkan seluruh titik berdasarkan nilai tersebut. Hasil pemrosesan divisualisasikan melalui *reachability plot*, di mana sumbu x merepresentasikan urutan titik setelah pengurutan, dan sumbu y menampilkan jarak jangkauannya. Pola puncak dan lembah dalam plot ini secara alami mengungkap hierarki cluster pada berbagai skala kepadatan. Pendekatan ini sangat menguntungkan dalam konteks penelitian eksploratori karena memungkinkan identifikasi struktur multi-level tanpa memerlukan grid search yang mahal secara komputasi.

Di sisi lain, HDBSCAN (Hierarchical Density-Based Spatial Clustering of Applications with Noise) mengintegrasikan prinsip clustering hierarkis dengan metrik densitas lokal. Alih-alih menetapkan radius tetap, HDBSCAN membangun dendrogram dari cluster-kandidat berdasarkan *core distance* dan mengubahnya menjadi pohon hierarki. Pemotongan pohon dilakukan pada threshold densitas optimal untuk mengekstrak cluster final. Keunggulan utamanya terletak pada kemampuan adaptifnya terhadap variasi kepadatan antar cluster, serta ketiadaan parameter ε. Satu-satunya parameter yang perlu ditetapkan adalah *min_cluster_size*, yang secara empiris lebih stabil dan mudah diinterpretasikan dibandingkan pengaturan radius geometris.

Kedua algoritma ini menjadi instrumen metodologis yang sangat relevan untuk penelitian data mining modern, khususnya ketika berhadapan dengan data dunia nyata seperti jejak interaksi sosial, sinyal biomedis, atau streaming data dari sensor IoT. Karakteristik data tersebut hampir selalu menunjukkan heterogenitas spasial yang membuat asumsi globular atau densitas homogen menjadi tidak valid. Dengan mengadopsi OPTICS atau HDBSCAN, peneliti dapat meminimalkan bias akibat penyetelan parameter subjektif dan meningkatkan reliabilitas temuan eksploratori, sekaligus memperkuat fondasi desain eksperimen untuk tahap ablation study dan evaluasi model.

### Inti yang Harus Ditekankan

- OPTICS menggantikan parameter ε tunggal dengan reachability plot, memungkinkan deteksi struktur cluster multi-skala secara otomatis.
- HDBSCAN menggabungkan hierarki dengan densitas lokal, mampu menangani variasi kepadatan antar cluster tanpa memerlukan radius tetap.
- Keduanya secara langsung menjawab kelemahan DBSCAN pada data heterogen, menjadikannya standar baru untuk analisis eksploratori dan penelitian data dunia nyata.
- Pengurangan ketergantungan pada tuning parameter manual meningkatkan robustness metodologis dan mempercepat iterasi eksperimen pada jenjang magister.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana OPTICS dan HDBSCAN mengatasi keterbatasan DBSCAN, langkah selanjutnya adalah membandingkan secara sistematis karakteristik teknis dan performa masing-masing pendekatan clustering terhadap metode klasik seperti K-Means. Perbedaan mendasar dalam asumsi bentuk cluster, penanganan outlier, dan skalabilitas akan kita bedah pada slide berikutnya, sebelum seluruh konsep ini diuji secara empiris pada Praktikum 3 menggunakan dataset sintetis.

---

## Slide 015 - Perbandingan K-Means vs Density-Based Clustering

### Narasi

Pada slide ini, kita melakukan evaluasi komparatif sistematis antara dua paradigma utama dalam unsupervised learning: K-Means sebagai representative-based clustering, dan pendekatan density-based seperti DBSCAN serta HDBSCAN. Perbedaan fundamental pertama terletak pada asumsi bentuk cluster. K-Means secara inheren mengasumsikan cluster berbentuk globular atau convex karena algoritma ini bekerja dengan meminimalkan varians intra-cluster berbasis jarak kuadrat Euclidean ke centroid. Sebaliknya, density-based clustering tidak terikat oleh batasan geometris tertentu; ia dapat mengidentifikasi struktur cluster yang kompleks, melengkung, atau non-convex selama terdapat jalur kepadatan yang menghubungkan titik-titik tersebut. Terkait penentuan jumlah cluster, K-Means mensyaratkan peneliti menentukan nilai k secara eksplisit sebelum eksekusi, yang sering kali menjadi sumber bias jika estimasi awal kurang akurat. Pendekatan density-based justru mengekstrak jumlah cluster secara adaptif berdasarkan ambang batas kepadatan data, sekaligus memisahkan titik-titik yang tidak memenuhi kriteria kepadatan sebagai noise.

Penanganan outlier dan heterogenitas densitas menjadi pembeda krusial lainnya. Dalam K-Means, keberadaan outlier akan menarik pusat cluster (centroid) menjauh dari inti distribusi sebenarnya, sehingga mendistorsi batas keputusan antar cluster. Density-based clustering secara desain mengisolasi titik-titik jarang sebagai noise, menjaga integritas cluster utama tetap stabil. Namun, ketika menghadapi variasi densitas antar cluster yang signifikan, performa kedua metode ini berbeda. K-Means sama sekali tidak mampu menangani heterogenitas densitas. DBSCAN standar juga cenderung gagal jika parameter ε terlalu ketat untuk cluster padat namun terlalu longgar untuk cluster renggang. Di sinilah perkembangan lanjutan seperti HDBSCAN memberikan perbaikan metodologis melalui pendekatan hierarkis yang menggabungkan cluster dengan densitas berbeda tanpa bergantung pada satu nilai ε tunggal, sebagaimana dibahas pada slide sebelumnya. Pemilihan parameter pun memerlukan pertimbangan riset yang matang: K-Means hanya membutuhkan k, sedangkan density-based memerlukan tuning ε dan MinPts (atau min_cluster_size pada HDBSCAN) yang memiliki implikasi langsung terhadap sensitivitas deteksi cluster versus toleransi noise.

Dari sisi skalabilitas dan interpretasi hasil, K-Means unggul dalam kecepatan komputasi dan stabilitas konvergensi, membuatnya sangat cocok untuk pipeline data mining berskala besar dengan dimensi moderat. Kompleksitas waktu density-based clustering umumnya berada di orde O(n log n) ketika memanfaatkan spatial indexing seperti KD-Tree atau Ball Tree, meskipun implementasi naive-nya bisa mencapai O(n²). Secara interpretasi, centroid pada K-Means memberikan representasi numerik yang mudah dioperasionalkan untuk analisis lanjutan atau rule extraction. Sementara itu, density-based menghasilkan wilayah padat atau struktur hierarki yang memerlukan pendekatan visualisasi dan analisis topologi lebih lanjut. Praktikum 3 dirancang khusus untuk membuktikan perbedaan teoretis ini secara empiris menggunakan dataset sintetis yang telah dikonfigurasi untuk menonjolkan masing-masing keunggulan dan keterbatasan kedua pendekatan. Pemahaman mendalam mengenai trade-off ini akan menjadi fondasi kritis saat kita membahas bagaimana mengukur kualitas hasil clustering secara objektif, yang akan kita bahas pada slide berikutnya mengenai validasi internal versus eksternal.

### Inti yang Harus Ditekankan

- K-Means mengandalkan asumsi bentuk globular/convex dan membutuhkan penentuan k secara manual, sementara density-based mengekstrak struktur cluster secara adaptif berdasarkan kepadatan lokal.
- Penanganan outlier pada density-based bersifat robust (dianggap noise), whereas K-Means rentan terhadap distorsi centroid akibat titik ekstrem.
- Variasi densitas antar cluster adalah kelemahan klasik K-Means dan DBSCAN standar; HDBSCAN mengatasi hal ini melalui penggabungan hierarkis tanpa ε tunggal.
- Trade-off skalabilitas vs fleksibilitas bentuk harus dipertimbangkan sesuai karakteristik dataset dan tujuan penelitian.
- Hasil praktis dari perbandingan ini akan diverifikasi secara empiris pada Praktikum 3 menggunakan dataset sintetis terkontrol.

### Transisi ke Slide Berikutnya

Setelah memahami karakteristik dan batasan masing-masing algoritma, langkah selanjutnya dalam alur penelitian data mining adalah menilai apakah hasil clustering tersebut benar-benar bermakna. Kita akan beralih ke pembahasan cluster validity, khususnya perbedaan mendasar antara evaluasi internal yang mengandalkan kohesi dan separasi data, versus evaluasi eksternal yang membandingkan hasil clustering dengan ground truth yang tersedia.

---

## Slide 016 - Cluster Validity: Internal vs Eksternal

### Narasi

Setelah kita membahas perbedaan fundamental antara algoritma K-Means dan pendekatan berbasis kepadatan seperti DBSCAN pada slide sebelumnya, langkah logis berikutnya dalam pipeline clustering adalah menentukan bagaimana cara mengukur keberhasilan atau kualitas dari partisi yang dihasilkan. Evaluasi cluster tidak bisa hanya mengandalkan visualisasi plot secara subjektif, terutama ketika dimensi data meningkat atau jumlah titik data sangat besar. Untuk itu, kita memerlukan kerangka evaluasi metrik yang sistematis, yang secara umum terbagi menjadi dua keluarga utama: validasi internal dan validasi eksternal.

Validasi internal berfokus pada penilaian kualitas struktur cluster menggunakan informasi yang tersedia di dalam data itu sendiri, tanpa bergantung pada label kelas yang sebenarnya. Metrik ini biasanya mengukur dua properti geometris utama, yaitu kohesi (seberapa rapat titik-titik dalam satu cluster saling berdekatan) dan separasi (seberapa jauh jarak antar pusat cluster yang berbeda). Karena tidak memerlukan ground truth, validasi internal sangat krusial dalam skenario unsupervised learning murni, di mana struktur kelompok memang belum diketahui sebelumnya. Dalam konteks penelitian magister, metrik internal sering menjadi pilihan pertama saat melakukan eksplorasi awal atau ketika dataset target bersifat belum terlabelisasi.

Di sisi lain, validasi eksternal mengevaluasi hasil clustering dengan membandingkannya terhadap label referensi atau ground truth yang sudah diketahui. Pendekatan ini mengubah masalah clustering menjadi tugas evaluasi kesesuaian partisi, mirip dengan konsep akurasi atau F1-score dalam klasifikasi. Validasi eksternal sangat berguna ketika kita bekerja dengan dataset sintetis untuk pengujian algoritma, atau ketika domain aplikasi menyediakan anotasi ahli yang dapat dijadikan acuan. Meskipun clustering secara definisi adalah pembelajaran tanpa pengawasan, penggunaan validasi eksternal memungkinkan kita mengkuantifikasi seberapa baik algoritma mampu merekonstruksi struktur kategori yang sudah mapan.

Dalam praktik penelitian data mining tingkat lanjut, kedua jenis validasi ini jarang digunakan secara terpisah. Kombinasi keduanya memberikan gambaran yang lebih komprehensif dan robust. Validasi internal membantu kita memilih hyperparameter atau algoritma terbaik ketika label tidak tersedia, sementara validasi eksternal memberikan bukti empiris bahwa struktur yang ditemukan oleh model memiliki makna semantik atau sesuai dengan realitas domain. Pemilihan metrik yang tepat juga harus mempertimbangkan asumsi bentuk cluster, seperti yang akan kita bedah lebih detail pada slide berikutnya mengenai berbagai metrik internal spesifik.

### Inti yang Harus Ditekankan

- Evaluasi cluster wajib menggunakan metrik kuantitatif, bukan sekadar interpretasi visual, untuk menjamin objektivitas dan reproduktibilitas penelitian.
- Validasi internal mengandalkan kohesi dan separasi intrinsik data, cocok untuk skenario truly unsupervised tanpa label.
- Validasi eksternal mengukur kesesuaian dengan ground truth, berfungsi sebagai benchmark kuat pada dataset sintetis atau data berlabel domain.
- Metodologi penelitian S2 menuntut penggunaan gabungan kedua validasi ini untuk memastikan robustness model dan relevansi temuan terhadap struktur data nyata.

### Transisi ke Slide Berikutnya

Dengan memahami pembagian mendasar antara validasi internal dan eksternal, sekarang kita akan mendalami implementasi praktis dari keluarga internal. Pada slide berikutnya, kita akan menguraikan empat metrik internal paling standar—Inertia, Davies-Bouldin, Dunn Index, dan Silhouette—beserta asumsi geometris serta batasan interpretasinya masing-masing. Mari kita lanjutkan ke analisis metrik tersebut.

---

## Slide 017 - Internal Validation Metrics

### Narasi

Setelah pada slide sebelumnya kita membedakan secara konseptual antara validitas internal dan eksternal, kini kita akan mendalami secara spesifik metrik-metrik yang termasuk dalam kategori internal validation. Dalam konteks penelitian data mining tingkat magister, metrik ini menjadi fondasi evaluasi ketika dataset tidak dilengkapi dengan label ground truth atau ketika struktur alami data masih bersifat eksploratif. Evaluasi berbasis internal mengandalkan karakteristik intrinsik data itu sendiri, yaitu sejauh mana titik-titik dalam satu cluster saling berdekatan (kohesi) dan sejauh mana cluster yang berbeda saling berjauhan (separasi).

Terdapat empat metrik internal yang paling lazim digunakan dalam praktik komputasional maupun publikasi ilmiah. Pertama, Inertia atau Within-Cluster Sum of Squares (WCSS) menghitung jumlah kuadrat jarak Euclidean setiap titik data ke centroid cluster masing-masing. Secara intuitif, nilai inertia yang lebih kecil menandakan cluster yang lebih padat. Namun, sebagai peneliti, Anda harus menyadari bahwa inertia bersifat monoton menurun seiring bertambahnya jumlah cluster k, sehingga nilainya tidak pernah naik kembali meskipun k sudah melebihi jumlah cluster sebenarnya. Kedua, Davies-Bouldin Index mengukur rasio antara rata-rata dispersi dalam cluster terhadap jarak antar centroid cluster. Nilai indeks yang lebih rendah mengindikasikan pemisahan antar cluster yang lebih tajam dibandingkan dengan kerapatan di dalamnya. Ketiga, Dunn Index menggunakan pendekatan geometri dengan membagi jarak minimum antar cluster dengan diameter maksimum cluster mana pun. Berbeda dengan dua metrik sebelumnya, pada Dunn Index, nilai yang lebih tinggi justru menunjukkan kualitas clustering yang lebih unggul.

Keempat, Silhouette Coefficient merupakan metrik yang menggabungkan konsep kohesi dan separasi menjadi satu skor terstandarisasi dalam rentang −1 hingga 1. Meskipun keempat metrik ini sangat populer dan mudah diimplementasikan menggunakan pustaka seperti scikit-learn, ada asumsi implisit yang harus dipahami secara kritis. Semua metrik internal tersebut secara fundamental mengasumsikan bahwa cluster memiliki bentuk globular, kompak, dan terpisah dengan jelas. Ketika struktur data berbentuk rantai, lingkaran konsentris, atau cluster dengan densitas yang sangat berbeda, interpretasi hasil metrik ini bisa menyesatkan dan menghasilkan bias optimasi. Oleh karena itu, penggunaan metrik internal harus selalu dipadukan dengan analisis visual dan pemahaman mendalam tentang distribusi data sebelum menarik kesimpulan metodologis.

Karena Silhouette sering kali memberikan gambaran yang paling intuitif mengenai posisi setiap titik relatif terhadap clusternya, pada slide berikutnya kita akan membedah definisi matematisnya secara rinci, termasuk komponen kohesi a(i) dan separasi b(i), serta cara menginterpretasikan nilai skornya secara presisi.

### Inti yang Harus Ditekankan

- Setiap metrik internal memiliki arah optimasi yang berbeda: WCSS dan Davies-Bouldin menginginkan nilai sekecil mungkin, sedangkan Dunn Index menginginkan nilai sebesar mungkin.
- Inertia tidak cocok digunakan secara mandiri untuk menentukan jumlah cluster optimal karena sifatnya yang monoton turun terhadap k.
- Asumsi dasar semua metrik ini adalah bentuk cluster yang globular dan kompak; interpretasi harus hati-hati jika data memiliki struktur non-linear atau densitas bervariasi.
- Dalam riset S2, metrik internal berfungsi sebagai baseline objektif, namun hasilnya wajib divalidasi ulang melalui visualisasi EDA dan analisis domain knowledge.

### Transisi ke Slide Berikutnya

Untuk memahami mengapa Silhouette dianggap lebih informatif daripada sekadar melihat nilai rata-ratanya, mari kita lihat bagaimana komponen a(i) dan b(i) dihitung secara matematis, serta apa makna praktis dari nilai yang mendekati 1, 0, atau negatif.

---

## Slide 018 - Silhouette: Definisi dan Interpretasi

### Narasi

Pada slide ini, kita mendalami metrik validasi internal yang paling populer dan intuitif dalam evaluasi klasterisasi tanpa label, yaitu Silhouette Coefficient. Berbeda dengan Inertia atau WCSS yang hanya mengukur kerapatan intra-cluster secara mutlak dan cenderung menurun monoton seiring bertambahnya jumlah klaster, Silhouette memberikan perspektif yang lebih seimbang dengan mempertimbangkan sekaligus kohesi di dalam satu klaster dan separasi antar klaster yang berbeda. Pendekatan ini sangat relevan untuk penelitian yang menuntut pemilihan parameter model secara objektif dan dapat direproduksi.

Untuk setiap titik data $i$, koefisien silhouette dihitung berdasarkan dua komponen utama. Pertama, nilai $a(i)$ merepresentasikan rata-rata jarak antara titik $i$ dengan semua titik lain yang berada dalam klaster yang sama. Nilai ini mengukur seberapa kompak atau kohesif sebuah titik terhadap kelompoknya sendiri. Kedua, nilai $b(i)$ adalah rata-rata jarak dari titik $i$ ke semua titik di klaster terdekat yang berbeda. Dengan kata lain, $b(i)$ menangkap seberapa jauh titik tersebut dari tetangga terdekatnya di luar klasternya, yang mencerminkan tingkat pemisahan atau separasi antar klaster.

Rumus dasar untuk menghitung skor silhouette individual titik $i$ disajikan sebagai berikut:
```text
s(i) = (b(i) - a(i)) / max(a(i), b(i))
```
Pembagian dengan $\max(a(i), b(i))$ berfungsi sebagai normalisasi agar hasil selalu berada dalam rentang tertutup $[-1, 1]$. Interpretasi nilai $s(i)$ sangat krusial dalam analisis eksploratori. Jika $s(i)$ mendekati $1$, hal ini mengindikasikan bahwa titik tersebut jauh dari klaster tetangga dan ditempatkan dengan sangat tepat. Sebaliknya, jika nilainya mendekati $0$, titik tersebut berada di perbatasan atau wilayah tumpang tindih antar klaster, sehingga penempatan klaster meragukan. Ketika $s(i)$ bernilai negatif, ini menjadi sinyal kuat bahwa titik $i$ kemungkinan besar salah assign ke klaster saat ini, karena justru lebih dekat ke klaster lain daripada ke klaster asalnya.

Dalam praktiknya menggunakan library seperti scikit-learn, kita biasanya tidak melihat skor per titik, melainkan menghitung rata-rata seluruh $s(i)$ untuk mendapatkan Average Silhouette Score. Skor ini sering dijadikan acuan objektif untuk membandingkan berbagai konfigurasi jumlah klaster $k$. Namun, perlu diingat bahwa meskipun silhouette memberikan panduan geometris yang kuat, skor tinggi belum tentu selaras dengan ground truth atau kebenaran semantik data. Metrik ini murni menilai struktur spasial dan kepadatan distribusi, bukan akurasi klasifikasi berbasis label eksternal. Oleh karena itu, dalam konteks penelitian magister, silhouette harus diposisikan sebagai salah satu indikator komplementer, bukan satu-satunya tolok ukur keberhasilan klasterisasi.

### Inti yang Harus Ditekankan

- Silhouette menggabungkan kohesi ($a(i)$) dan separasi ($b(i)$) dalam satu indeks ternormalisasi pada rentang $[-1, 1]$, memberikan gambaran holistik tentang kualitas klaster.
- Interpretasi nilai: mendekati 1 menunjukkan klaster yang terpisah jelas, mendekati 0 menandakan tumpang tindih atau ambiguitas batas, dan nilai negatif mengindikasikan kesalahan assign titik.
- Average Silhouette Score efektif untuk seleksi $k$ optimal, namun bersifat geometris-murni dan tidak menjamin kesesuaian dengan ground truth atau makna domain data.
- Penggunaan silhouette memerlukan pemahaman metodologis yang matang; disarankan dikombinasikan dengan visualisasi dan metrik lain untuk menghindari overfitting struktural pada data kompleks.

### Transisi ke Slide Berikutnya

Setelah memahami definisi dan interpretasi teoritisnya, mari kita lihat bagaimana nilai-nilai tersebut diterjemahkan secara praktis melalui threshold empiris, serta bagaimana perilaku silhouette pada algoritma berbeda seperti K-Means versus DBSCAN, termasuk keterbatasannya dalam menangkap bentuk klaster non-konveks seperti pola cincin konsentris.

---

## Slide 019 - Silhouette: Contoh Interpretasi

### Narasi

Berdasarkan rumus dan definisi dasar silhouette yang telah dibahas pada slide sebelumnya, langkah selanjutnya adalah menerjemahkan nilai numerik tersebut menjadi keputusan analitis yang valid dalam penelitian. Secara empiris, rata-rata silhouette score yang konsisten berada di atas 0,5 dianggap sebagai indikator kuat bahwa struktur klaster dalam dataset Anda sudah terbentuk dengan cukup jelas dan terpisahkan dengan baik. Nilai ini mencerminkan kohesi intra-cluster yang tinggi sekaligus separasi inter-cluster yang memadai, sehingga memberikan keyakinan awal bahwa partisi data bukan sekadar artefak acak.

Sebaliknya, pola distribusi nilai silhouette yang banyak bernilai negatif atau justru menumpuk sangat padat di sekitar angka nol merupakan sinyal peringatan metodologis. Kondisi ini umumnya mengindikasikan bahwa klaster saling tumpang tindih secara signifikan, atau lebih seringnya, penyetelan parameter algoritma clustering belum optimal. Pada jenjang magister, temuan seperti ini seharusnya memicu iterasi eksperimen berupa tuning hyperparameter, perubahan fungsi jarak, atau bahkan pertimbangan ulang terhadap kesesuaian algoritma dengan karakteristik distribusi data sebelum melanjutkan ke tahap validasi lanjutan.

Penerapan silhouette juga harus disesuaikan dengan karakteristik algoritma yang digunakan. Untuk K-Means, silhouette score menjadi alat standar yang efektif untuk menentukan jumlah klaster optimal (k) melalui pendekatan elbow method atau max-score comparison. Namun, pada DBSCAN, perhitungan silhouette hanya bermakna secara statistik jika jumlah klaster yang terbentuk sudah memadai dan setiap klaster mengandung minimal dua titik data. Jika DBSCAN mendeteksi sebagian besar data sebagai noise atau hanya menghasilkan satu klaster raksasa, skor silhouette akan kehilangan reliabilitas dan tidak disarankan dijadikan tolak ukur performa.

Terakhir, perlu disadari bahwa silhouette memiliki keterbatasan geometris inheren karena metrik ini mengasumsikan klaster berbentuk cembung dan berbasis jarak Euclidean. Pada kasus dengan struktur non-konveks seperti dua cincin konsentris atau manifold melingkar, silhouette dapat menghasilkan nilai yang sangat rendah meskipun pemisahan label sebenarnya sudah sempurna. Oleh karena itu, dalam pipeline evaluasi yang rigor, silhouette tidak boleh digunakan secara isolatif. Ia harus divalidasi bersama metrik internal alternatif, dikonfirmasi melalui visualisasi reduksi dimensi seperti PCA atau UMAP, serta dikaitkan dengan pemahaman domain agar kesimpulan penelitian tetap robust dan dapat dipertanggungjawabkan secara ilmiah.

### Inti yang Harus Ditekankan

- Nilai rata-rata silhouette > 0,5 menandakan struktur klaster yang cukup jelas, sedangkan nilai dekat 0 atau negatif mengindikasikan tumpang tindih atau parameter yang belum optimal.
- Penerapan silhouette berbeda antar algoritma: sangat berguna untuk pemilihan k pada K-Means, namun hanya valid pada DBSCAN ketika klaster terbentuk cukup banyak dan berisi ≥ 2 titik.
- Silhouette gagal menangkap bentuk klaster non-konveks (misalnya cincin konsentris), sehingga wajib dikombinasikan dengan visualisasi dan metrik pendukung lain untuk menghindari bias evaluatif.

### Transisi ke Slide Berikutnya

Meskipun silhouette efektif sebagai metrik internal tanpa label, penelitian Anda mungkin memerlukan perbandingan langsung dengan ground truth ketika label tersedia. Pada slide berikutnya, kita akan membahas External Validation Metrics seperti Purity, NMI, ARI, dan FMI yang memungkinkan pengukuran akurasi partisi clustering secara kuantitatif terhadap klasifikasi referensi.

---

## Slide 020 - External Validation Metrics

### Narasi

Setelah pada slide sebelumnya kita mengulas metrik internal seperti Silhouette yang menilai kohesi dan separasi tanpa bergantung pada informasi eksternal, kini kita beralih ke pendekatan evaluasi eksternal. Evaluasi jenis ini hanya dapat diterapkan ketika informasi label tanah atau ground truth tersedia. Dalam konteks penelitian data mining tingkat magister, penggunaan ground truth bukan berarti mengubah sifat unsupervised dari clustering, melainkan menyediakan kerangka kuantitatif untuk memvalidasi apakah struktur yang diekstrak algoritma konsisten dengan kategori yang telah ditetapkan oleh domain expert, eksperimen terkontrol, atau anotasi manual berkualitas tinggi.

Terdapat empat metrik eksternal standar yang menjadi acuan utama dalam literatur dan benchmarking algoritmik. Pertama, Purity menghitung proporsi sampel dengan label mayoritas di tiap cluster, kemudian dirata-ratakan berdasarkan bobot ukuran cluster. Meskipun mudah diimplementasikan, Purity memiliki kelemahan struktural karena cenderung meningkat seiring bertambahnya jumlah cluster tanpa mempertimbangkan distribusi label secara holistik. Kedua, Normalized Mutual Information (NMI) memanfaatkan konsep entropi dan informasi bersama dari teori informasi. NMI mengukur seberapa banyak informasi tentang label tanah yang dapat diprediksi dari hasil clustering, lalu dinormalisasi ke rentang [0,1] sehingga stabil untuk perbandingan lintas dataset dan konfigurasi algoritma.

Ketiga, Adjusted Rand Index (ARI) merupakan versi yang telah dikoreksi terhadap kebetulan acak dari Rand Index klasik. ARI mengevaluasi kesamaan pasangan titik data yang dikelompokkan bersama maupun dipisahkan pada kedua partisi (hasil clustering dan label tanah), dengan nilai 1 menandakan kecocokan sempurna dan nilai mendekati 0 mengindikasikan performa setara pengacakan acak. Keempat, Fowlkes-Mallows Index (FMI) dihitung sebagai akar kuadrat dari perkalian precision dan recall berbasis pasangan titik, sehingga memberikan gambaran keseimbangan antara ketepatan penugasan cluster dan kelengkapan pengelompokan. Penting untuk diingat bahwa meskipun metrik-metrik ini memberikan indikator numerik yang tajam, keberadaan label bukanlah kebenaran absolut. Struktur alami data sering kali bersifat kontinu, hierarkis, atau multi-tujuan, sehingga mungkin tidak pernah sejalan sempurna dengan label kategorikal yang diberikan. Evaluasi eksternal harus selalu dibaca bersama analisis stabilitas, ablation study, dan justifikasi kontekstual domain.

### Inti yang Harus Ditekankan

- Ground truth berfungsi sebagai alat validasi komplementer, bukan pengganti analisis kualitatif, pemahaman domain, atau pemeriksaan stabilitas algoritmik.
- Purity rentan terhadap bias jumlah cluster dan kurang informatif untuk perbandingan rigor; NMI, ARI, dan FMI menawarkan normalisasi atau koreksi chance yang lebih robust untuk benchmarking ilmiah.
- Dalam riset S2, klaim keberhasilan clustering wajib didukung oleh konsistensi beberapa metrik eksternal, uji sensitivitas parameter, serta penjelasan mengapa struktur yang ditemukan relevan secara teoretis atau aplikatif.

### Transisi ke Slide Berikutnya

Meskipun metrik eksternal memberikan angka yang tampak objektif, penerapannya pada masalah clustering nyata sering kali menghadapi tantangan mendasar yang membedakannya dari pembelajaran terawasi. Pada slide berikutnya, kita akan bedah mengapa evaluasi unsupervised secara inheren lebih kompleks, bagaimana ketidaksempurnaan label mempengaruhi interpretasi, serta strategi metodologis yang tepat untuk menghindari jebakan klaim visualisasi semata dalam penelitian Anda.

---

## Slide 021 - Mengapa Evaluasi Unsupervised Lebih Sulit?

### Narasi

Pada slide sebelumnya, kita telah membahas metrik validasi eksternal seperti Purity, NMI, ARI, dan FMI yang memungkinkan perbandingan hasil klasterisasi terhadap label tanah yang tersedia. Namun, dalam praktik riil, ketersediaan label tersebut jarang terjadi secara konsisten, dan bahkan ketika ada, struktur alami data belum tentu selaras dengan kategori buatan manusia. Ketidaktersediaan acuan objektif inilah yang membuat evaluasi pada pembelajaran tanpa pengawasan atau unsupervised learning jauh lebih kompleks dibandingkan pendekatan supervised.

Perbedaan fundamental dapat dipahami melalui empat aspek yang terangkum dalam tabel. Pertama, tidak adanya label y sebagai ground truth menghilangkan standar pengukuran tunggal. Kedua, definisi apa itu "klaster yang baik" sangat bergantung pada konteks masalah dan karakteristik distribusi data, sehingga satu algoritma bisa menghasilkan partisi optimal untuk satu dataset namun gagal total pada dataset lain. Ketiga, metrik internal seperti silhouette score atau Davies-Bouldin index sering kali tidak konsisten lintas dataset karena sensitivitas ekstrem terhadap skala fitur, densitas lokal, dan bentuk geometri klaster. Keempat, visualisasi menjadi alat de facto yang sering disalahartikan sebagai bukti kebenaran, padahal representasi dua dimensi hanyalah proyeksi parsial yang rentan terhadap distorsi topologi dan tumpang tindih.

Dalam konteks penelitian tingkat magister, tantangan ini diperparah oleh tiga masalah sistematis. Tidak ada fungsi objektif tunggal yang dapat mengakomodasi semua jenis struktur data, sehingga pemilihan metrik evaluasi harus dibenarkan secara metodologis dan dikaitkan dengan tujuan analisis. Hasil klasterisasi juga cenderung tidak stabil; perubahan kecil pada seed acak, strategi inisialisasi centroid, atau penyetelan parameter hyperparameter dapat menghasilkan partisi data yang berbeda secara signifikan. Oleh karena itu, interpretasi berbasis domain knowledge menjadi wajib untuk memvalidasi apakah pola yang muncul memiliki makna statistik maupun praktis.

Sebagai peneliti, hindari klaim substantif seperti "hasil klaster terlihat benar berdasarkan plot scatter". Klaim semacam itu bersifat subjektif, tidak dapat direplikasi, dan lemah secara akademis. Gantilah dengan bukti kuantitatif yang mencakup analisis stabilitas melalui bootstrap sampling atau repeated runs, pelaporan multiple internal metrics, serta uji signifikansi terhadap baseline acak. Validasi harus bersifat multi-dimensi, transparan terhadap keterbatasan algoritma, dan selalu dipertanyakan ulang melalui ablation study atau error analysis.

### Inti yang Harus Ditekankan

- Evaluasi unsupervised tidak memiliki ground truth universal, sehingga definisi "klaster baik" bersifat kontekstual dan memerlukan justifikasi metodologis yang kuat.
- Metrik internal tidak konsisten lintas dataset, dan hasil algoritma sangat sensitif terhadap inisialisasi, seed, serta parameter hyperparameter yang menuntut uji stabilitas berulang.
- Visualisasi bukan pengganti validasi kuantitatif; klaim penelitian harus didukung oleh analisis stabilitas, multiple metrics, dan integrasi interpretasi domain.

### Transisi ke Slide Berikutnya

Setelah memahami kompleksitas evaluasi, langkah selanjutnya dalam pipeline eksplorasi data sering kali melibatkan reduksi dimensi untuk mempermudah visualisasi dan komputasi. Pada slide berikutnya, kita akan membahas Principal Component Analysis (PCA) sebagai teknik reduksi linear, beserta catatan kritis mengenai batasannya dalam mengungkap struktur klaster yang sebenarnya.

---

## Slide 022 - PCA: Reduksi Dimensi Linear

### Narasi

Principal Component Analysis atau PCA merupakan teknik reduksi dimensi linear yang menjadi standar de facto dalam pipeline eksplorasi data dan persiapan visualisasi. Secara konseptual, PCA bekerja dengan mengubah himpunan variabel asli yang berkorelasi menjadi sekumpulan variabel baru yang saling ortogonal, yang kita kenal sebagai komponen utama. Transformasi ini tidak dilakukan secara acak, melainkan melalui pencarian arah geometris dalam ruang fitur yang mampu memaksimalkan sebaran atau variansi data. Dengan kata lain, ketika kita menekan dimensi dari ratusan atau ribuan fitur menjadi dua atau tiga dimensi, kita memastikan bahwa informasi statistik yang hilang seminimal mungkin karena kita mempertahankan sumbu-sumbu dengan dispersi terbesar.

Secara matematis, mekanisme inti PCA terletak pada dekomposisi eigen pada matriks kovarians data yang telah distandarisasi. Matriks kovarians merepresentasikan hubungan linear antar variabel, dan nilai eigennya secara langsung mengkuantifikasi seberapa besar variansi yang dijelaskan oleh masing-masing vektor eigennya. Komponen pertama (PC1) selalu mengarah pada arah dengan varians tertinggi, komponen kedua (PC2) menangkap varians tertinggi berikutnya yang tegak lurus terhadap PC1, dan pola ini berlanjut secara bertingkat. Hasil akhir dari proses ini adalah proyeksi dataset asli ke dalam basis baru yang jauh lebih kompak, sehingga memungkinkan representasi visual yang efisien sekaligus berfungsi sebagai langkah preprocessing yang efektif untuk mengurangi noise dan multikolinearitas sebelum algoritma clustering atau klasifikasi dijalankan.

Poin kritis yang sering disalahpahami adalah bahwa optimasi variansi global oleh PCA tidak menjamin keterpisahan antar kelompok atau cluster. Sebagaimana ditekankan pada slide sebelumnya mengenai kompleksitas evaluasi unsupervised, PCA bersifat sepenuhnya tanpa pengawasan dan sama sekali tidak aware terhadap struktur grup atau label yang ada di dalam data. Akibatnya, dua cluster yang secara alami terpisah di ruang fitur asli dapat tampak tumpang tindih atau bahkan menyatu saat diproyeksikan hanya pada PC1 dan PC2. Hal ini menegaskan bahwa visualisasi berbasis PCA hanyalah alat bantu heuristik untuk eksplorasi awal, bukan bukti definitif atas kualitas pengelompokan. Dalam praktik penelitian tingkat magister, klaim validitas cluster harus tetap ditopang oleh metrik kuantitatif seperti silhouette coefficient, Davies-Bouldin index, atau uji stabilitas resampling, bukan semata-mata mengandalkan tampilan scatter plot hasil reduksi dimensi.

### Inti yang Harus Ditekankan

- PCA mengoptimalkan variansi global data, bukan memisahkan cluster; tumpang tindih pada PC1-PC2 tidak otomatis menandakan hasil clustering yang buruk.
- Komponen utama dihasilkan melalui dekomposisi eigen pada matriks kovarians, di mana setiap komponen berikutnya ortogonal terhadap sebelumnya dan menangkap sisa varians terbesar.
- Visualisasi 2D via PCA bersifat eksploratif; validasi kualitas pengelompokan harus selalu dilengkapi dengan metrik internal, analisis stabilitas, dan justifikasi domain.

### Transisi ke Slide Berikutnya

Setelah memahami landasan teoretis, mekanisme matematis, serta batasan interpretatif dari PCA, kita akan langsung menerjemahkan konsep tersebut ke dalam implementasi praktis. Pada slide berikutnya, kita akan membedah kode Python menggunakan scikit-learn untuk menjalankan PCA, mulai dari standarisasi data yang mutlak diperlukan, pemilihan jumlah komponen berdasarkan explained variance ratio, hingga cara menginterpretasi scatter plot hasil proyeksi secara tepat.

---

## Slide 023 - PCA: Implementasi di Python

### Narasi

Setelah membahas konsep teoretis Principal Component Analysis pada slide sebelumnya, kini kita beralih ke implementasi praktisnya menggunakan ekosistem Python dan scikit-learn. Dalam praktik data mining tingkat magister, penerapan algoritma reduksi dimensi tidak boleh dilakukan secara ad-hoc karena kesalahan preprocessing dapat menghasilkan representasi yang bias dan menyesatkan. Script pada slide ini menyajikan alur standar yang harus dipatuhi untuk memastikan validitas matematis serta reproduktibilitas hasil transformasi PCA.

Langkah pertama dalam kode adalah standarisasi fitur melalui `StandardScaler().fit_transform(X)`. Operasi ini mutlak diperlukan karena PCA bekerja berdasarkan dekomposisi matriks kovarians yang sangat sensitif terhadap skala satuan. Fitur dengan rentang nilai numerik besar akan mendominasi perhitungan variansi meskipun secara domain knowledge tidak lebih informatif. `StandardScaler` mengonversi setiap fitur agar memiliki mean nol dan deviasi standar satu, sehingga kontribusi setiap variabel terhadap komponen utama menjadi setara. Setelah data terskalakan, objek `PCA` diinisialisasi dengan `n_components=2` untuk keperluan visualisasi dua dimensi, dilanjutkan dengan pemanggilan `fit_transform`. Dalam protokol penelitian yang rigor, `fit_transform` hanya boleh dieksekusi pada data pelatihan, sementara data validasi dan uji hanya menggunakan `transform` guna mencegah data leakage dan menjaga generalisasi model.

Evaluasi kualitas reduksi dilakukan melalui atribut `pca.explained_variance_ratio_`. Nilai ini merepresentasikan proporsi variansi total dataset yang berhasil dipertahankan oleh masing-masing komponen utama. Pada tahap eksplorasi atau pra-pemrosesan sebelum clustering, peneliti jarang langsung menetapkan dua komponen tanpa dasar kuantitatif. Sebaliknya, dilakukan akumulasi rasio variansi hingga mencapai ambang batas kompromi antara kompresi data dan informasi yang hilang, umumnya di kisaran 80% hingga 95%. Keputusan mengenai jumlah komponen ini harus didokumentasikan sebagai bagian dari hyperparameter tuning dan ablation study dalam metodologi penelitian.

Bagian akhir kode berfokus pada visualisasi hasil proyeksi menggunakan `matplotlib.pyplot`. Titik-titik data dipetakan berdasarkan koordinat PC1 dan PC2, dengan pewarnaan disesuaikan terhadap label klaster hasil prediksi sebelumnya (`c=y_pred`). Visualisasi ini berfungsi sebagai alat diagnostik kualitatif untuk melakukan error analysis dan memeriksa konsistensi cluster. Namun, perlu diingat kembali peringatan pada slide sebelumnya: PCA mengoptimalkan variansi global, bukan keterpisahan antar klaster. Tumpang tindih titik data dalam plot ini belum tentu menandakan kegagalan algoritma clustering, melainkan bisa jadi merupakan konsekuensi alami dari proyeksi linear ke ruang berdimensi rendah.

Ketika struktur data mengandung manifold non-linear atau bentuk klaster yang kompleks, pendekatan linear seperti PCA sering kali gagal menangkap pola intrinsik. Untuk mengatasi keterbatasan tersebut, pada slide berikutnya kita akan mengimplementasikan teknik visualisasi non-linear bernama t-SNE yang secara eksplisit dirancang untuk mempertahankan kesamaan lokal antar titik data.

### Inti yang Harus Ditekankan

- Standarisasi data adalah prasyarat teknis wajib sebelum PCA karena algoritma berbasis kovarians sangat rentan terhadap dominasi fitur berskala besar.
- `explained_variance_ratio_` berfungsi sebagai indikator objektif untuk menentukan jumlah komponen optimal, menggantikan pendekatan subjektif dalam pemilihan dimensi.
- Interpretasi visualisasi PCA harus hati-hati; tumpang tindih atau jarak antar titik tidak selalu mencerminkan kesamaan semantik atau keberhasilan clustering akibat sifat linearitas PCA.
- Pemisahan ketat antara `fit_transform` (data latih) dan `transform` (data uji) merupakan prinsip fundamental dalam desain eksperimen machine learning yang menghindari data leakage.

### Transisi ke Slide Berikutnya

Karena PCA memiliki keterbatasan inherent dalam menangani struktur non-linear, mari kita lanjutkan pembahasan ke teknik yang secara matematis diformulasikan untuk preservasi kesamaan lokal, yaitu t-SNE, lengkap dengan pengaturan parameter kritis dan batasan interpretasi grafisnya.

---

## Slide 024 - t-SNE: Visualisasi Non-Linear

### Narasi

Setelah sebelumnya kita membahas PCA yang mengandalkan transformasi linear untuk mereduksi dimensi, pada slide ini kita beralih ke pendekatan non-linear melalui t-SNE atau t-distributed Stochastic Neighbor Embedding. Berbeda dengan PCA yang memaksimalkan varians global, t-SNE berfokus pada mempertahankan struktur lokal data saat memetakan fitur berdimensi tinggi ke ruang dua atau tiga dimensi. Mekanisme kerjanya dimulai dengan mengkonversi jarak Euclidean antar titik data menjadi probabilitas bersyarat. Titik-titik yang saling dekat dalam ruang asli akan memiliki probabilitas kondisional tinggi, sehingga algoritma berusaha meminimalkan divergensi Kullback-Leibler antara distribusi probabilitas di ruang asli dan ruang tereduksi. Pendekatan probabilistik ini memungkinkan t-SNE membongkar manifold kompleks yang tidak dapat ditangkap oleh metode linear.

Kelebihan utama t-SNE terletak pada kemampuannya menangani bentuk cluster yang tidak globular seperti spiral, cincin, atau struktur berlapis. Jika Anda mengamati dataset dengan pola semacam itu, PCA sering kali gagal memisahkan kelompok-kelompok tersebut secara jelas karena batasan linearitasnya. Sebaliknya, t-SNE mampu mengungkap struktur tersembunyi ini sehingga pengelompokan menjadi lebih terlihat. Namun, keberhasilan visualisasi sangat bergantung pada pemilihan parameter. Parameter `perplexity` berperan krusial sebagai keseimbangan antara penekanan pada struktur lokal versus global; nilai terlalu rendah akan menghasilkan fragmentasi berlebihan, sementara nilai terlalu tinggi dapat menyatukan cluster yang sebenarnya terpisah. Selain itu, `learning_rate` dan jumlah iterasi juga perlu diatur agar konvergensi stabil tanpa terjebak pada minimum lokal.

Sebagai peneliti di jenjang magister, Anda harus sangat berhati-hati dalam menginterpretasikan output t-SNE. Pertama, hasil visualisasi bersifat stokastik, artinya setiap eksekusi dapat menghasilkan layout berbeda. Selalu tetapkan `random_state` untuk memastikan reproduksibilitas eksperimen dan konsistensi laporan penelitian. Kedua, jarak vertikal atau horizontal antar cluster pada plot t-SNE **tidak bermakna secara geometris**. Jangan pernah menyimpulkan bahwa satu cluster lebih jauh atau lebih dekat dari cluster lain hanya berdasarkan posisi relatifnya di plot. Ketiga, ukuran atau kepadatan cluster yang ditampilkan bisa menipu karena t-SNE melakukan penskalaan non-linear yang agresif pada daerah berkerapatan tinggi. Visualisasi ini sebaiknya digunakan sebagai alat eksplorasi awal atau pembangkit hipotesis, bukan sebagai bukti validasi kuantitatif akhir.

### Inti yang Harus Ditekankan

- t-SNE unggul dalam menangkap struktur non-linear dan cluster berbentuk kompleks yang tidak bisa dipisahkan oleh PCA, menjadikannya alat eksplorasi yang kuat untuk EDA lanjutan.
- Parameter `perplexity` adalah kunci keseimbangan antara detail lokal dan gambaran global; tuning-nya wajib dilakukan secara sistematis sebelum analisis klasterisasi atau klasifikasi lanjutan.
- Interpretasi jarak antar cluster dan ukuran cluster pada plot t-SNE bersifat menyesatkan; gunakan hanya untuk identifikasi pola awal, bukan kesimpulan statistik atau pengukuran densitas.
- Reproduksi hasil memerlukan pengaturan `random_state` yang konsisten, terutama saat melaporkan temuan penelitian atau menyusun ablation study dalam konteks metodologi S2.

### Transisi ke Slide Berikutnya

Meskipun t-SNE memberikan resolusi lokal yang tajam, komputasinya sangat lambat pada dataset besar dan cenderung mengabaikan struktur global akibat sifat optimasinya yang fokus pada kesamaan tetangga terdekat. Untuk mengatasi keterbatasan tersebut, kita akan membahas UMAP, teknik manifold learning generasi baru yang dirancang khusus untuk menjaga keseimbangan antara struktur lokal dan global sekaligus menawarkan kecepatan komputasi yang jauh lebih efisien.

---

## Slide 025 - UMAP: Visualisasi Non-Linear Modern

### Narasi

Setelah membahas t-SNE yang sangat efektif dalam menangkap struktur lokal namun cenderung mengaburkan hubungan antar cluster secara global, kita beralih ke UMAP atau Uniform Manifold Approximation and Projection. Teknik ini merupakan pengembangan mutakhir dalam manifold learning yang dirancang khusus untuk menyeimbangkan pelestarian struktur lokal maupun global. Berbeda dengan pendekatan probabilistik murni pada t-SNE, UMAP memanfaatkan teori topologi dan geometri Riemannian untuk memodelkan data berdimensi tinggi sebagai manifold yang kemudian diproyeksikan ke ruang berdimensi lebih rendah. Hasilnya, visualisasi yang dihasilkan tidak hanya mempertahankan kedekatan titik-titik yang serupa, tetapi juga menjaga hierarki dan keterkaitan antar kelompok data secara lebih koheren.

Dalam implementasinya, UMAP memiliki tiga parameter krusial yang perlu dipahami oleh peneliti. Pertama, `n_neighbors` mengatur keseimbangan antara penekanan pada struktur lokal versus global; nilai yang lebih kecil akan menghasilkan klaster yang lebih terpisah dan detail lokal yang tajam, sedangkan nilai besar akan menggabungkan struktur menjadi gambaran makro yang lebih luas. Kedua, `min_dist` mengontrol seberapa rapat titik-titik dapat berkumpul di ruang embedding; nilai rendah memungkinkan pembentukan klaster yang padat, sementara nilai tinggi mendistribusikan titik secara merata sehingga pola kontinuitas data lebih terlihat. Ketiga, `n_components` menentukan dimensi output, yang umumnya disetel ke 2 atau 3 untuk keperluan visualisasi eksploratif. Secara komputasi, UMAP menggunakan aproksimasi graf topologi dan optimasi layout yang membuatnya jauh lebih efisien daripada t-SNE, terutama ketika menangani dataset berskala besar.

Berikut adalah contoh implementasi standar menggunakan library `umap` dalam ekosistem Python:
```python
import umap
reducer = umap.UMAP(n_neighbors=15, min_dist=0.1, random_state=42)
X_umap = reducer.fit_transform(X_scaled)
```
Pada potongan kode ini, objek `UMAP` diinisialisasi dengan `n_neighbors=15` yang memberikan keseimbangan moderat antara detail lokal dan struktur global, serta `min_dist=0.1` yang memungkinkan terbentuknya klaster yang cukup rapat tanpa saling bertumpuk berlebihan. Penetapan `random_state=42` wajib dilakukan untuk menjamin reproduktibilitas hasil eksperimen, mengingat proses optimasi UMAP bersifat stokastik. Method `fit_transform` kemudian melakukan pembelajaran representasi manifold sekaligus mentransformasi data terstandarisasi (`X_scaled`) ke dalam ruang embedding dua dimensi yang siap divisualisasikan menggunakan Matplotlib atau Seaborn.

Penting untuk dicatat bahwa meskipun UMAP menghasilkan visualisasi yang stabil dan sering kali mengungkapkan hierarki antar kelompok yang sulit ditangkap oleh metode lain, teknik ini tetaplah alat eksplorasi data dan indikator kecenderungan pengelompokan (*cluster tendency*). Jarak Euclidean antar titik pada plot UMAP tidak dapat diinterpretasikan secara langsung sebagai metrik kesamaan statistik yang rigor. Oleh karena itu, dalam konteks penelitian tingkat magister, UMAP harus digunakan sebagai langkah awal untuk hipotesis generasi dan pemahaman pola data, bukan sebagai pengganti validasi kuantitatif seperti silhouette score, Davies-Bouldin index, atau analisis robustness model. Penggunaan yang tepat akan memperkuat fase Exploratory Data Analysis (EDA) sebelum masuk ke tahap clustering algoritmik atau klasifikasi.

### Inti yang Harus Ditekankan

- UMAP menyeimbangkan pelestarian struktur lokal dan global melalui pendekatan topologi, menjadikannya lebih informatif daripada t-SNE untuk memahami hierarki dan keterkaitan antar kelompok data.
- Parameter `n_neighbors` dan `min_dist` secara fundamental mengubah interpretasi visual; peneliti harus melakukan tuning berbasis domain knowledge dan tujuan riset, bukan sekadar trial-and-error.
- UMAP adalah alat eksplorasi dan pembangkit hipotesis, bukan metrik evaluasi; hasil visual harus selalu diverifikasi dengan indeks kuantitatif dan analisis ablation dalam pipeline penelitian.

### Transisi ke Slide Berikutnya

Untuk memperjelas kapan masing-masing teknik ini sebaiknya dipilih dalam pipeline riset, mari kita bandingkan secara sistematis karakteristik PCA, t-SNE, dan UMAP dari segi sifat transformasi, kecepatan komputasi, stabilitas hasil, hingga relevansinya terhadap validasi model.

---

## Slide 026 - Perbandingan PCA, t-SNE, dan UMAP

### Narasi

Setelah mendalami mekanisme dan implementasi UMAP pada slide sebelumnya, saat ini kita akan menyoroti perbandingan sistematis antara tiga teknik reduksi dimensi yang paling dominan dalam literatur data mining: PCA, t-SNE, dan UMAP. Dalam konteks penelitian tingkat magister, pemahaman komparatif ini bukan sekadar menghafal perbedaan teknis, melainkan membangun fondasi metodologis untuk memilih alat visualisasi yang sesuai dengan tujuan riset dan karakteristik dataset.

Mari kita unpack tabel perbandingan ini dari perspektif sifat transformasi dan interpretasi. PCA beroperasi secara linear melalui dekomposisi matriks kovarians atau SVD, sehingga menghasilkan komponen utama yang merepresentasikan arah varians terbesar dalam data. Hasil PCA sangat mudah diinterpretasi karena setiap komponen memiliki nilai explained variance yang jelas, dan jarak antar titik dalam ruang tereduksi masih mempertahankan makna geometris linear. Sebaliknya, t-SNE dan UMAP keduanya bersifat non-linear. t-SNE memetakan kesamaan titik data ke probabilitas kondisional, yang membuatnya sangat sensitif terhadap struktur lokal. Namun, hal ini mengorbankan preservasi jarak global; jarak antar cluster dalam plot t-SNE tidak bermakna secara kuantitatif. UMAP memanfaatkan pendekatan topologi manifold dan approximate nearest neighbor untuk menyeimbangkan preservasi lokal dan global, sehingga struktur hierarkis lebih terlihat dan jarak relatif antar titik lebih dapat dipercaya dibandingkan t-SNE.

Dari sisi efisiensi komputasi dan reproduktibilitas, terdapat trade-off yang perlu dipertimbangkan dalam desain eksperimen. PCA adalah yang tercepat dan sepenuhnya deterministik, menjadikannya standar industri untuk preprocessing, cleaning, atau EDA awal pada dataset berskala besar. t-SNE dikenal lambat pada data besar karena kompleksitas perhitungan pairwise similarity, dan hasilnya sangat bergantung pada penentuan random seed agar reproducible antar percobaan. UMAP menawarkan kecepatan yang jauh lebih kompetitif daripada t-SNE berkat optimasi algoritma graph-based, namun tetap memerlukan seed yang dikunci untuk menjamin konsistensi hasil, terutama ketika digunakan dalam pipeline ablation study atau hyperparameter tuning.

Poin kritis yang harus tertanam kuat dalam praktik riset adalah bahwa reduksi dimensi berfungsi murni sebagai alat eksplorasi visual, bukan sebagai proxy atau metrik evaluasi model. Plot 2D atau 3D dari ketiga metode ini hanya memberikan intuisi kualitatif tentang distribusi data. Validasi klaster, pengujian hipotesis, dan pengukuran performa harus tetap bertumpu pada metrik kuantitatif internal (seperti silhouette score atau Davies-Bouldin index) maupun eksternal, serta uji signifikansi statistik. Ketergantungan berlebihan pada visualisasi tanpa verifikasi kuantitatif merupakan kesalahan metodologis yang umum terjadi, dan akan kita bahas lebih lanjut pada langkah mitigasi berikut.

### Inti yang Harus Ditekankan

- PCA unggul untuk preprocessing dan EDA awal karena kecepatannya, sifat deterministiknya, dan kemampuannya mempertahankan makna jarak linear melalui explained variance, sementara t-SNE hanya efektif untuk eksplorasi struktur lokal dengan jarak antar cluster yang tidak bermakna.
- UMAP menawarkan keseimbangan optimal antara kecepatan komputasi, stabilitas visual, dan preservasi struktur global-lokal, menjadikannya alternatif modern yang lebih informatif daripada t-SNE untuk analisis eksploratori.
- Reduksi dimensi adalah alat bantu eksplorasi, bukan instrumen evaluasi; keputusan riset, validasi klaster, dan pelaporan hasil wajib didasarkan pada metrik kuantitatif dan analisis statistik yang rigor, bukan pada kesan visual semata.

### Transisi ke Slide Berikutnya

Memahami batasan interpretasi dari ketiga metode ini mengarahkan kita pada risiko metodologis yang sering kali luput dari perhatian peneliti pemula: terjebak dalam ilusi struktur yang sebenarnya tidak valid. Pada slide berikutnya, kita akan menguraikan jebakan umum dalam visualisasi klaster dan menerapkan protokol mitigasi untuk memastikan setiap temuan didukung oleh bukti empiris, bukan sekadar pola visual yang menyesatkan.

---

## Slide 027 - Menghindari Kesimpulan Berlebihan dari Visualisasi

### Narasi

Visualisasi hasil klasterisasi sering kali memberikan kesan intuitif bahwa struktur data sangat jelas dan terpisah rapi, namun kesan ini bisa sangat menyesatkan jika tidak divalidasi secara statistik. Membangun pada diskusi sebelumnya mengenai tabel perbandingan PCA, t-SNE, dan UMAP, penting untuk diingat bahwa teknik reduksi dimensi bersifat eksploratoris, bukan sebagai dasar penarikan kesimpulan kausal atau validitas klaster. Salah satu jebakan umum terjadi ketika menggunakan PCA: pemisahan antar kelompok yang terlihat tajam di plot 2D atau 3D seringkali hanya merupakan artefak dari perbedaan skala fitur atau pengaruh outlier ekstrem, bukan cerminan dari pola intrinsik data. Ketika beralih ke metode non-linear seperti t-SNE, algoritma ini dioptimalkan untuk mempertahankan struktur lokal, sehingga ia cenderung memecah distribusi kontinu menjadi gumpalan-gumpalan diskrit bahkan ketika inputnya sepenuhnya acak atau seragam. Ilusi kelompok ini muncul karena t-SNE memaksakan pemisahan jarak antar titik tetangga tanpa menjaga konteks global atau metrik jarak absolut.

Masalah serupa juga muncul dalam interpretasi output algoritma klasterisasi itu sendiri. K-Means, misalnya, beroperasi dengan asumsi hard assignment di mana setiap titik data harus masuk ke salah satu centroid. Akibatnya, noise atau anomali yang seharusnya diabaikan akan dipaksa menempel pada suatu klaster, sehingga saat divisualisasikan, titik-titik noise tersebut tampak seperti sub-kelompok yang sah. Selain itu, pemilihan peta warna (colormap) pada library visualisasi seperti Matplotlib atau Seaborn dapat secara artifisial mempertajam batas antar klaster, menciptakan persepsi pemisahan yang lebih tegas daripada yang sebenarnya ada di ruang fitur multidimensi. Untuk menghindari bias kognitif ini, peneliti harus menggeser fokus dari sekadar "melihat" menjadi "menguji". Validasi harus dilakukan menggunakan metrik internal seperti Silhouette Coefficient atau Davies-Bouldin Index, serta metrik eksternal jika label ground truth tersedia. 

Sebagai bagian dari standar metodologi penelitian tingkat magister, mitigasi atas kesalahan interpretasi visual memerlukan protokol eksperimen yang ketat. Pertama, jalankan pipeline klasterisasi pada dataset yang telah diacak atau didistribusikan uniform sebagai null model; jika visualisasi tetap menunjukkan struktur yang mirip, maka pola yang diamati kemungkinan besar adalah noise algoritmik. Kedua, lakukan uji sensitivitas dengan mengubah random seed dan variasi parameter hiperparameter untuk memastikan stabilitas hasil. Ketiga, dokumentasikan seluruh konfigurasi preprocessing, transformasi, dan pengaturan visualisasi secara transparan agar eksperimen dapat direplikasi oleh peneliti lain. Pendekatan ini memastikan bahwa klasterisasi bukan hanya menghasilkan gambar yang menarik, tetapi juga temuan yang robust, terukur, dan siap diuji secara ilmiah.

### Inti yang Harus Ditekankan

- Visualisasi adalah alat eksplorasi awal, bukan bukti validitas klaster; struktur yang terlihat belum tentu bermakna secara statistik.
- t-SNE dan PCA rentan menciptakan ilusi pemisahan akibat optimasi lokal, artefak skala, atau pengaruh outlier pada data acak.
- K-Means memaksa semua titik ke dalam klaster, sehingga noise dapat disalahartikan sebagai subgroup yang sah.
- Validasi wajib mencakup metrik internal/eksternal, uji null model pada data acak, analisis sensitivitas seed/parameter, dan pelaporan transparan untuk memenuhi standar replikasi penelitian S2.

### Transisi ke Slide Berikutnya

Setelah memahami batasan interpretasi visual dan pentingnya validasi metodologis, langkah selanjutnya adalah menerapkan prinsip-prinsip ini secara terstruktur dalam eksperimen nyata. Pada praktikum berikutnya, kita akan merancang perbandingan sistematis antara K-Means dan DBSCAN untuk mengamati bagaimana karakteristik data memengaruhi performa masing-masing pendekatan, sekaligus melatih kemampuan analisis metrik kualitas klaster secara kritis dan berbasis bukti.

---

## Slide 028 - Praktikum 3: Tujuan dan Ruang Lingkup

### Narasi

Praktikum ketiga ini dirancang sebagai tugas eksperimental yang secara langsung menjembatani konsep teoritis klasterisasi dengan praktik evaluasi metodologis yang rigor. Berbeda dengan implementasi algoritma yang bersifat mekanis, fokus utama di sini adalah memahami bagaimana merancang eksperimen yang adil, memilih metrik evaluasi yang tepat, dan menarik kesimpulan yang didukung oleh bukti empiris. Pada jenjang magister, kemampuan menjalankan fungsi library hanyalah langkah awal; yang menjadi penilaian utama adalah kedalaman analisis kritis terhadap perilaku model di bawah kondisi data yang bervariasi.

Dalam ruang lingkup praktikum ini, kalian akan melakukan perbandingan sistematis antara K-Means dan density-based clustering seperti DBSCAN pada sekumpulan dataset dengan karakteristik geometri dan distribusi yang berbeda. K-Means mengandalkan asumsi bentuk globular dan keseragaman varians antar cluster, sedangkan DBSCAN bekerja berdasarkan kepadatan lokal titik data dan mampu menangani struktur non-linear serta outlier. Melalui perbandingan ini, kalian akan mengamati secara langsung mengapa satu algoritma bisa menghasilkan pemisahan yang artifisial pada data tertentu, sementara algoritma lain justru memberikan hasil yang lebih stabil dan interpretable.

Evaluasi kualitas cluster akan dilakukan secara komprehensif menggunakan metrik internal dan eksternal. Metrik internal seperti Silhouette Coefficient atau Davies-Bouldin Index digunakan untuk menilai kohesi dan separasi tanpa bergantung pada label ground truth, sementara metrik eksternal seperti Adjusted Rand Index atau Normalized Mutual Information mengukur kesesuaian hasil klasterisasi dengan klasifikasi yang sudah diketahui. Penekanan diberikan pada interpretasi hasil: kalian harus mampu menjelaskan mengapa nilai metrik tertentu naik atau turun, bagaimana perubahan parameter seperti `eps` atau `min_samples` pada DBSCAN mempengaruhi jumlah cluster yang terdeteksi, dan apa implikasi praktis dari temuan tersebut terhadap masalah domain nyata.

Mengingat peringatan pada slide sebelumnya mengenai bahaya overinterpretasi visualisasi seperti t-SNE atau PCA yang sering kali menciptakan ilusi pemisahan, praktikum ini menempatkan validasi numerik dan transparansi parameter sebagai fondasi utama. Seluruh proses eksperimen akan dikerjakan menggunakan ekosistem Python akademik standar: pandas untuk preprocessing dan manipulasi dataframe, scikit-learn untuk implementasi algoritma dan scoring, serta matplotlib dan seaborn untuk visualisasi yang informatif. Lingkungan kerja dapat memanfaatkan Jupyter Notebook atau Google Colab, dengan output akhir berupa notebook yang terstruktur rapi, memuat kode reproduktibel, visualisasi yang bermakna, dan paragraf analisis kritis yang menjawab research question praktikum.

### Inti yang Harus Ditekankan

- Fokus praktikum bukan pada keberhasilan menjalankan kode, melainkan pada kemampuan merancang eksperimen yang ketat, membandingkan algoritma berdasarkan asumsi matematisnya, dan menginterpretasi hasil secara kritis.
- Evaluasi klasterisasi wajib menggabungkan metrik internal (tanpa label) dan eksternal (dengan label), serta selalu dikaitkan dengan karakteristik geometri dan distribusi data yang mendasarinya.
- Transparansi parameter, pengujian sensitivitas, dan dokumentasi langkah analitik dalam notebook merupakan standar metodologis penelitian tingkat S2 yang harus dipatuhi sejak awal.

### Transisi ke Slide Berikutnya

Untuk melaksanakan eksperimen ini secara efektif, kita perlu memahami terlebih dahulu sifat-sifat data yang akan diuji. Mari kita bahas karakteristik dataset sintetis yang akan digunakan, beserta alasan pemilihan algoritma yang paling sesuai untuk masing-masing pola data.

---

## Slide 029 - Praktikum 3: Karakteristik Dataset

### Narasi

Pada slide ini, kita masuk ke tahap persiapan data untuk Praktikum 3, di mana fokusnya adalah memahami karakteristik dataset sintetis yang akan kita gunakan sebagai laboratorium kontrol sebelum menerapkan algoritma klasterisasi. Berbeda dengan dataset dunia nyata yang sering kali berisik dan kompleks, dataset sintetis memungkinkan kita mengisolasi variabel tertentu seperti bentuk cluster, sebaran varians, densitas, dan keberadaan outlier. Hal ini sangat krusial dalam penelitian tingkat magister karena kita perlu membuktikan bahwa pemilihan algoritma harus didasarkan pada pemahaman mendalam terhadap struktur data, bukan sekadar menjalankan fungsi secara otomatis.

Mari kita bedah tabel karakteristik dataset yang disajikan. Pertama, dataset `Blobs` merepresentasikan kondisi ideal di mana setiap cluster berbentuk globular atau bulat dengan ukuran yang seragam. Dalam skenario ini, algoritma berbasis partisi seperti K-Means akan bekerja optimal karena asumsi dasar K-Means tentang spherical clusters terpenuhi. Kedua, `Varied blobs` memperkenalkan tantangan berupa varians yang tidak seragam antar cluster. Di sini, K-Means standar cenderung gagal memisahkan cluster dengan kerapatan berbeda, sehingga preprocessing berupa standarisasi fitur menjadi prasyarat mutlak agar jarak Euclidean dapat dihitung secara adil.

Ketiga dan keempat, dataset `Moons` dan `Circles` menguji batas kemampuan K-Means terhadap struktur non-linear. Karena K-Means mengandalkan hyperplane datar untuk memisahkan cluster, ia akan gagal total pada data berbentuk bulan sabit atau konsentris. Sebaliknya, algoritma berbasis kepadatan seperti DBSCAN mampu menangkap struktur topologi tersebut dengan mengelompokkan titik berdasarkan kedekatan spasial tanpa bergantung pada bentuk geometris. Kelima, `Density varied` mensimulasikan kondisi di mana beberapa cluster memiliki kepadatan titik yang sangat berbeda. DBSCAN konvensional mungkin kesulitan karena parameter `eps` tunggal sulit mengakomodasi variasi densitas ekstrem, sehingga alternatif seperti HDBSCAN atau penyesuaian parameter DBSCAN secara hati-hati diperlukan. Terakhir, `Noise + blobs` sengaja menyuntikkan outlier acak. Di sinilah keunggulan DBSCAN terlihat jelas, karena algoritma ini secara eksplisit menandai titik yang tidak memenuhi ambang batas kepadatan sebagai noise, menjadikannya lebih robust dibandingkan K-Means yang memaksa setiap titik masuk ke dalam cluster terdekat.

Penting untuk dicatat bahwa untuk setiap dataset sintetis ini, Anda wajib mendokumentasikan jumlah total titik data, proporsi noise, dan ground truth label-nya. Informasi ini bukan hanya administratif, tetapi menjadi fondasi bagi evaluasi eksternal yang akan kita bahas di langkah selanjutnya. Dengan mengetahui label asli, kita dapat mengukur seberapa akurat klaster yang dihasilkan algoritma menggunakan metrik seperti Adjusted Rand Index (ARI) atau Normalized Mutual Information (NMI), sekaligus menghubungkan hasil eksperimen ini dengan tujuan Praktikum 3 yang telah disebutkan sebelumnya: melakukan interpretasi kritis, bukan hanya eksekusi kode.

### Inti yang Harus Ditekankan

- Pemilihan algoritma klasterisasi harus didorong oleh analisis karakteristik data (bentuk, varians, densitas, noise), bukan pilihan default.
- Dataset sintetis berfungsi sebagai kontrol eksperimental untuk mengisolasi kekuatan dan kelemahan masing-masing algoritma.
- Dokumentasi metadata dataset (jumlah titik, noise, ground truth) adalah langkah metodologis wajib untuk mendukung evaluasi eksternal yang valid.
- Pemahaman ini menjadi jembatan antara teori klasterisasi dan prosedur eksperimen sistematis yang akan dijalankan pada langkah berikutnya.

### Transisi ke Slide Berikutnya

Setelah memahami karakteristik dan alasan pemilihan algoritma untuk setiap dataset, langkah selanjutnya adalah menerjemahkan pemahaman tersebut ke dalam prosedur eksperimen yang terstruktur dan reproducible. Kita akan membahas alur kerja praktis mulai dari generasi data, standarisasi, pelatihan model, hingga evaluasi komprehensif baik secara internal maupun eksternal.

---

## Slide 030 - Praktikum 3: Prosedur Eksperimen

### Narasi

Setelah memetakan karakteristik unik dari setiap dataset sintetis pada slide sebelumnya, langkah kritis berikutnya adalah merancang prosedur eksperimen yang sistematis dan metodologis. Pada tingkat magister, prosedur ini bukan sekadar urutan eksekusi kode, melainkan kerangka kerja yang menjamin validitas, replikabilitas, dan objektivitas hasil penelitian. Alur yang disarankan terdiri dari delapan tahapan terstruktur yang saling terkait erat.

Tahap pertama dimulai dengan pembebanan atau generasi dataset sesuai skenario yang telah diidentifikasi, diikuti oleh standarisasi fitur menggunakan scaler seperti `StandardScaler`. Standarisasi wajib dilakukan karena algoritma berbasis jarak seperti K-Means dan DBSCAN sangat sensitif terhadap perbedaan skala atribut. Setelah data siap, tentukan parameter awal: nilai $k$ untuk K-Means, serta $\epsilon$ (eps) dan `min_samples` untuk DBSCAN. Saat melakukan pelatihan, tetapkan `random_state` secara eksplisit agar inisialisasi centroid dan proses sampling menjadi deterministik dan mudah direproduksi. Untuk K-Means, gunakan `n_init ≥ 10` guna meminimalkan risiko konvergensi ke minimum lokal yang tidak optimal.

Evaluasi performa clustering harus dilakukan secara komprehensif melalui dua perspektif metrik. Evaluasi eksternal memanfaatkan label ground truth yang telah dicatat pada dataset sintetis, menerapkan Adjusted Rand Index (ARI), Normalized Mutual Information (NMI), dan Purity. Metrik ini mengukur kesesuaian partisi algoritma dengan struktur sebenarnya. Di sisi lain, evaluasi internal seperti Silhouette Score dan Davies-Bouldin Index menilai kualitas klaster tanpa bergantung pada label eksternal. Silhouette Score mengkuantifikasi kohesi intra-klaster versus separasi antar-klaster, sementara Davies-Bouldin menghitung rasio rata-rata jarak dalam klaster terhadap jarak antar pusat klaster. Penggunaan gabungan kedua jenis metrik ini menghilangkan bias evaluasi dan memberikan gambaran holistik tentang kualitas partisi.

Visualisasi dan analisis sensitivitas melengkapi evaluasi numerik. Plot data asli, overlay prediksi klaster, serta reduksi dimensi menggunakan PCA atau t-SNE memungkinkan inspeksi kualitatif terhadap struktur data berdimensi tinggi. Setelah itu, lakukan analisis sensitivitas dengan memvariasikan parameter kunci DBSCAN, khususnya `eps` dan `min_samples`. Pantau bagaimana perubahan marginal pada parameter tersebut mengubah jumlah klaster yang terdeteksi, distribusi titik noise, dan fluktuasi skor metrik. Pendekatan ini melatih kemampuan tuning parameter berbasis bukti empiris, bukan asumsi subjektif.

Tahap terakhir adalah sintesis interpretatif: bandingkan kinerja masing-masing metode terhadap karakteristik spesifik tiap dataset. Rumuskan argumen berbasis evidence mengenai mengapa satu algoritma lebih unggul atau lebih robust daripada lainnya. Penekanan metodologis pada prosedur ini mencakup disiplin standarisasi data, kontrol variabilitas acak, penggunaan metrik evaluasi ganda, validasi visual multidimensi, serta analisis sensitivitas parameter. Prinsip-prinsip inilah yang menjadi fondasi desain eksperimen yang rigor dalam penelitian data mining tingkat lanjut.

### Inti yang Harus Ditekankan

- Reproducibility adalah syarat mutlak: selalu setel `random_state` dan dokumentasikan semua konfigurasi hyperparameter sebelum menjalankan eksperimen.
- Evaluasi clustering tidak boleh mengandalkan satu metrik saja; kombinasikan metrik eksternal (ARI, NMI, Purity) dan internal (Silhouette, Davies-Bouldin) untuk triangulasi hasil.
- Analisis sensitivitas parameter (terutama `eps` dan `min_samples` pada DBSCAN) wajib dilakukan untuk memahami stabilitas model dan menghindari overfitting struktural terhadap noise atau kepadatan data.

### Transisi ke Slide Berikutnya

Prosedur metodologis yang telah dirinci ini akan segera diimplementasikan secara praktis melalui script Python. Pada slide berikutnya, kita akan melihat contoh kode lengkap menggunakan `scikit-learn` untuk mengeksekusi K-Means dan DBSCAN, menghitung metrik evaluasi, serta menangani kasus khusus seperti label noise pada DBSCAN.

---

## Slide 031 - Praktikum 3: Contoh Kode Python

### Narasi

```python
from sklearn.cluster import KMeans, DBSCAN
from sklearn.metrics import silhouette_score, adjusted_rand_score

### K-Means

km = KMeans(n_clusters=3, n_init=10, random_state=0)
y_km = km.fit_predict(X_scaled)

### DBSCAN

db = DBSCAN(eps=0.5, min_samples=5)
y_db = db.fit_predict(X_scaled)

print("KMeans  Silhouette:", silhouette_score(X_scaled, y_km))
print("DBSCAN  Silhouette:", silhouette_score(X_scaled, y_db))

### Jika y_true ada

print("ARI KMeans :", adjusted_rand_score(y_true, y_km))
print("ARI DBSCAN :", adjusted_rand_score(y_true, y_db))
```

Implementasi kode ini menerjemahkan langkah ketiga dan keempat dalam prosedur eksperimen sebelumnya menjadi eksekusi praktis di lingkungan komputasi Python. Pada bagian inisialisasi K-Means, parameter `n_clusters=3` menentukan target partisi, `n_init=10` memastikan algoritma menjalankan proses optimasi inertia sebanyak sepuluh kali dengan seed acak berbeda lalu memilih iterasi terbaik, dan `random_state=0` mengunci inisialisasi centroid awal. Penetapan `random_state` bukan sekadar praktik coding biasa, melainkan standar metodologis wajib dalam penelitian tingkat magister untuk menjamin reproduktibilitas hasil eksperimen antarpeneliti dan antarwaktu eksekusi.

Untuk DBSCAN, konfigurasi bersifat density-based dengan `eps=0.5` sebagai radius pencarian tetangga dan `min_samples=5` sebagai ambang batas kepadatan minimum yang mendefinisikan inti cluster. Metode `fit_predict(X_scaled)` pada kedua objek model secara simultan melakukan pelatihan dan generasi label prediksi. Penggunaan `X_scaled` sebagai input menegaskan kembali pentingnya standarisasi fitur, mengingat baik K-Means (berbasis jarak Euclidean) maupun DBSCAN (berbasis kerapatan spasial) sangat rentan terhadap distorsi skala atribut yang tidak seragam.

Evaluasi kinerja ditampilkan melalui pencetakan skor Silhouette dan Adjusted Rand Index (ARI). Fungsi `silhouette_score` menghitung rasio kohesi intra-cluster terhadap separasi antarkluster, memberikan gambaran internal tentang kualitas partisi tanpa memerlukan label referensi. Sebaliknya, `adjusted_rand_score` membandingkan prediksi dengan ground truth (`y_true`) sambil mengoreksi peluang kecocokan acak, menjadikannya metrik eksternal yang lebih robust untuk validasi hipotesis clustering. Catatan teknis mengenai label `-1` pada DBSCAN sangat krusial: titik yang diklasifikasikan sebagai noise tidak memiliki cluster assignment sah, dan pemanggilan `silhouette_score` akan gagal atau menghasilkan bias jika array label mengandung nilai `-1` bersama dengan kondisi jumlah cluster unik kurang dari dua. Dalam pipeline penelitian, hal ini mengharuskan penyaringan sampel non-noise atau penanganan eksplisit sebelum perhitungan metrik internal dijalankan.

Kode ini berfungsi sebagai fondasi empiris yang menghubungkan prosedur teoritis dengan analisis kritis. Nilai numerik yang dihasilkan bukanlah akhir dari evaluasi, melainkan bahan baku untuk menelaah kesesuaian asumsi algoritma dengan struktur distribusi data aktual, sebagaimana akan didekonstruksi pada tahap interpretasi berikutnya.

### Inti yang Harus Ditekankan

- Reproduktibilitas eksperimen dicapai melalui penyetelan `random_state` dan `n_init`, bukan mengandalkan perilaku default yang nondeterministik.
- `silhouette_score` memiliki batasan matematis terhadap input yang mengandung label noise (`-1`) dari DBSCAN; validasi dimensi dan kandungan label unik wajib dilakukan sebelum perhitungan.
- Kombinasi metrik internal (Silhouette) dan eksternal (ARI) memberikan triangulasi evaluasi yang lebih objektif daripada mengandalkan satu indikator tunggal.
- Standarisasi data (`X_scaled`) adalah prasyarat fundamental sebelum penerapan algoritma berbasis metrik jarak atau kerapatan.

### Transisi ke Slide Berikutnya

Setelah kode dieksekusi dan menghasilkan output numerik, langkah selanjutnya bukan sekadar mencatat skor tertinggi, melainkan melakukan bedah kritis terhadap hasil tersebut. Mari kita lanjutkan ke pembahasan bagaimana menjawab pertanyaan analitis terkait jumlah cluster, dampak noise, dan keselarasan metrik internal versus eksternal pada slide berikutnya.

---

## Slide 032 - Praktikum 3: Analisis Kualitas dan Interpretasi Cluster

### Narasi

Setelah mengeksekusi kode pada slide sebelumnya untuk melatih K-Means dan DBSCAN serta menghitung skor evaluasi, langkah kritis berikutnya adalah melakukan interpretasi mendalam terhadap output numerik dan visual yang dihasilkan. Pertama, identifikasi jumlah cluster yang terbentuk dari masing-masing algoritma. Perlu dicatat bahwa K-Means bersifat preskriptif terhadap jumlah cluster melalui parameter `n_clusters`, sehingga hasilnya akan selalu mengikuti angka yang Anda tentukan. Sebaliknya, DBSCAN bersifat adaptif; jumlah cluster ditentukan secara dinamis berdasarkan kepadatan lokal data. Dalam proses ini, perhatikan juga apakah DBSCAN menghasilkan titik dengan label `-1`, yang menandakan noise atau outlier. Keberadaan noise ini secara langsung memengaruhi perhitungan metrik internal seperti Silhouette Score, karena fungsi tersebut hanya menghitung kontribusi sampel yang masuk ke dalam cluster valid, bukan seluruh observasi dalam dataset.

Selanjutnya, lakukan perbandingan nilai Silhouette Score antar model. Skor yang lebih tinggi mengindikasikan partisi yang lebih kohesif dan terpisah dengan jelas. Namun, jangan berhenti pada metrik internal saja. Bandingkan hasil tersebut dengan metrik eksternal seperti Adjusted Rand Index (ARI) atau Normalized Mutual Information (NMI) jika label ground truth tersedia. Pada dataset sintetis seperti `moons` atau `circles`, sering kali K-Means menghasilkan visualisasi yang terlihat rapi dan terbagi dua, padahal secara matematis partisi tersebut bertentangan dengan struktur asli data. Fenomena ini terjadi karena K-Means mengasumsikan bentuk cluster yang spherical (bulat) dengan varians yang seragam, sehingga gagal menangkap pola non-linear atau berbentuk bulan sabit yang sebenarnya melekat pada dataset tersebut.

Sensitivitas hiperparameter juga harus dianalisis secara sistematis. Coba modifikasi nilai `eps` pada DBSCAN. Peningkatan `eps` memperluas radius pencarian tetangga, yang cenderung menggabungkan cluster kecil menjadi satu kesatuan dan mengurangi volume titik noise. Penurunan `eps` justru sebaliknya, memecah cluster padat menjadi sub-cluster dan meningkatkan deteksi noise. Dari eksperimen ini, kita sampai pada prinsip metodologis yang harus dipegang teguh: kesimpulan yang valid tidak boleh sekadar menyatakan "DBSCAN menang" atau "K-Means kalah". Kesimpulan ilmiah harus menghubungkan karakteristik geometris dataset dengan asumsi dasar setiap algoritma, serta mengakui keterbatasan metrik evaluasi dalam konteks unsupervised learning.

### Inti yang Harus Ditekankan

- Jumlah cluster K-Means bersifat tetap (preskriptif), sedangkan DBSCAN bersifat adaptif dan dapat menghasilkan noise (label `-1`) yang memengaruhi perhitungan metrik internal.
- Silhouette Score yang tinggi tidak selalu sejalan dengan ARI/NMI atau kebenaran semantik; K-Means bisa menghasilkan partisi yang "terlihat bagus" secara visual tetapi salah secara struktural karena asumsi spherical-nya.
- Perubahan `eps` pada DBSCAN secara langsung mengatur keseimbangan antara penggabungan cluster dan deteksi noise, sehingga analisis sensitivitas parameter wajib dilakukan sebelum menarik kesimpulan.
- Kesimpulan penelitian harus berbasis pada keselarasan antara karakteristik data, asumsi algoritma, dan pemilihan metrik, bukan sekadar perbandingan skor mentah.

### Transisi ke Slide Berikutnya

Pemahaman mendalam tentang bagaimana metrik, asumsi algoritma, dan karakteristik data saling berinteraksi membawa kita pada tantangan metodologis yang lebih luas dalam penelitian. Pada slide berikutnya, kita akan membahas fokus penelitian terkait interpretasi dan validitas hasil clustering, termasuk mengapa evaluasi unsupervised learning jauh lebih kompleks daripada pendekatan supervised, serta strategi rigor yang diperlukan untuk menghindari klaim berlebihan dalam publikasi ilmiah.

---

## Slide 033 - Fokus Penelitian: Interpretasi dan Validitas

### Narasi

Setelah kita menyelesaikan praktikum analisis kualitas cluster pada slide sebelumnya, di mana kita membandingkan perilaku K-Means dan DBSCAN serta mengaitkannya dengan karakteristik dataset non-linear seperti moons atau circles, kini kita beralih ke aspek yang lebih fundamental dalam penelitian tingkat magister: interpretasi dan validitas hasil clustering. Poin krusial yang harus selalu menjadi landasan metodologis Anda adalah bahwa evaluasi unsupervised learning secara inheren jauh lebih kompleks dan ambigu dibandingkan dengan supervised learning. Dalam konteks supervised, ground truth tersedia sehingga metrik seperti akurasi, precision, recall, atau F1-score memberikan sinyal evaluatif yang relatif objektif. Sebaliknya, tanpa label yang pasti, kita tidak memiliki patokan absolut untuk menentukan apakah sebuah partisi data benar-benar merepresentasikan struktur alami dataset atau sekadar artefak dari inisialisasi acak dan bias algoritma.

Implikasi metodologisnya sangat signifikan bagi desain penelitian Anda. Jika Anda berencana mengusulkan varian clustering baru atau memodifikasi fungsi objective yang existing, standar publikasi di konferensi internasional terindeks Scopus menuntut dua hal wajib: perbandingan ketat terhadap baseline yang kuat dan pengujian stabilitas sistematis. Stabilitas ini tidak cukup hanya dengan menjalankan algoritma sekali lalu melaporkan metrik terbaik. Anda perlu melakukan uji sensitivitas terhadap multiple random seeds, subsampling bootstrap, atau variasi hyperparameter untuk memastikan bahwa struktur cluster yang muncul konsisten secara statistik dan bukan kebetulan sampling. Tanpa langkah robustness testing ini, klaim kontribusi novel Anda akan dianggap lemah secara ilmiah.

Seringkali, peneliti terjebak pada ilusi visualisasi sebagai pengganti bukti kuantitatif. Teknik reduksi dimensi seperti PCA, t-SNE, atau UMAP sangat berguna untuk memproyeksikan data berdimensi tinggi ke ruang dua atau tiga dimensi agar pola dapat diamati secara visual. Namun, perlu ditegaskan bahwa visualisasi tersebut hanyalah alat bantu eksplorasi dan pelengkap narasi, bukan bukti validitas clustering. Proses reduksi dimensi selalu mengandung distorsi informasi, terutama ketika berusaha mempertahankan struktur lokal dan global secara bersamaan. Oleh karena itu, pernyataan mengenai keterpisahan atau kepadatan cluster tidak boleh hanya didasarkan pada apa yang terlihat pada scatter plot, melainkan harus ditopang oleh angka-angka objektif dari metrik evaluasi.

Validitas hasil clustering harus dibangun melalui pendekatan triangulasi multidimensi. Pertama, manfaatkan metrik internal seperti Silhouette Score, Davies-Bouldin Index, atau Calinski-Harabasz Index untuk mengukur compactness dan separation tanpa bergantung pada label eksternal. Kedua, jika dataset Anda memang memiliki label ground truth (misalnya dari eksperimen terkontrol, anotasi ahli, atau benchmark standar), manfaatkan metrik eksternal seperti Adjusted Rand Index (ARI) atau Normalized Mutual Information (NMI) untuk mengukur kesesuaian partisi dengan kategori sebenarnya. Ketiga, integrasikan pengetahuan domain secara eksplisit. Apakah cluster yang terbentuk secara statistik masuk akal secara konseptual? Apakah mereka merepresentasikan segmen perilaku, pola anomali operasional, atau sub-komunitas yang relevan dengan masalah penelitian? Integrasi ketiga lapisan validasi inilah yang membedakan analisis data rutin dengan penelitian akademis yang rigor.

Hindari sepenuhnya penggunaan frasa subjektif atau berlebihan dalam penulisan paper, seperti "cluster yang dihasilkan jelas terpisah", "pola kelompoknya sangat natural", atau "algoritma berhasil mengelompokkan data dengan sempurna" tanpa disertai nilai numerik, confidence interval, atau analisis error yang mendukung. Di jenjang S2, setiap klaim temuan harus bisa dipertanggungjawabkan secara empiris dan reproducible. Pemahaman mendalam tentang batasan evaluasi ini akan menjadi fondasi kokoh untuk melangkah ke tahap penyusunan proposal penelitian yang lebih terstruktur.

### Inti yang Harus Ditekankan

- Evaluasi unsupervised learning inherently lebih ambigu dibanding supervised learning karena ketiadaan ground truth absolut.
- Usulan metode clustering baru wajib dilengkapi baseline comparison dan stability testing (sensitivitas seed/subsampling/hyperparameter).
- Visualisasi PCA/t-SNE/UMAP bersifat eksploratif dan komplementer; tidak boleh dijadikan satu-satunya bukti validitas partisi.
- Validasi harus bersifat triangulasi: metrik internal + metrik eksternal (jika tersedia) + konsistensi dengan domain knowledge.
- Klaim penelitian harus berbasis evidence numerik; hindari generalisasi subjektif tanpa dukungan metrik atau interval kepercayaan.

### Transisi ke Slide Berikutnya

Dengan pemahaman bahwa validitas clustering memerlukan kerangka evaluasi yang multi-dimensi dan berbasis bukti, kita kini siap mengarahkan fokus tersebut ke dalam penyusunan research project Anda. Pada slide berikutnya, kita akan membahas bagaimana memfinalisasi research gap dengan memastikan bahwa celah penelitian yang Anda identifikasi telah didukung oleh literatur dan EDA awal, serta bahwa kondisi evaluasi yang dirancang mampu menjawab research question secara meyakinkan.

---

## Slide 034 - Research Project: Finalisasi Research Gap

### Narasi

Pada minggu ini, fokus utama proyek penelitian Anda adalah finalisasi research gap. Setelah melalui fase eksplorasi awal dan memahami pentingnya validitas serta interpretasi hasil yang telah dibahas pada pertemuan sebelumnya, kini saatnya Anda mempersempit dan mempertajam celah penelitian yang akan Anda kejar selama satu semester penuh. Dalam konteks penelitian jenjang magister, sebuah research gap tidak boleh bersifat spekulatif atau hanya didasarkan pada intuisi semata. Ia harus dibangun di atas bukti empiris yang solid, yaitu dukungan dari tinjauan literatur terkini dan verifikasi melalui Exploratory Data Analysis (EDA) awal pada dataset yang relevan.

Untuk memastikan kesiapan metodologis Anda, responslah secara kritis terhadap tiga pertanyaan pemandu berikut. Pertama, apakah gap yang Anda identifikasi sudah terverifikasi melalui studi literatur yang komprehensif dan didukung oleh temuan EDA awal? Kedua, apakah metode atau algoritma yang Anda rencanakan memiliki kerangka evaluasi yang jelas dan dapat diukur? Ingat kembali bahwa dalam konteks unsupervised learning, evaluasi seringkali lebih kompleks daripada pendekatan supervised, sehingga Anda perlu merancang metrik internal maupun eksternal yang tepat, serta menyiapkan protokol stabilitas model. Ketiga, apakah Anda mampu merancang eksperimen yang realistis dan terstruktur untuk menjawab research question yang akan muncul dari gap tersebut? Desain eksperimen harus mencakup pemilihan baseline yang kompetitif, rencana hyperparameter tuning, serta strategi error analysis atau ablation study jika diperlukan.

Kaitkan pula finalisasi gap ini secara eksplisit dengan konteks materi clustering dan unsupervised data mining. Jika topik penelitian Anda berfokus pada pola data tanpa label, pastikan research gap Anda secara tegas menyebutkan kelebihan dan keterbatasan metode clustering yang ada, serta bagaimana pendekatan baru Anda bermaksud mengatasi celah tersebut. Di sisi lain, jika penelitian Anda mengarah ke masalah supervised learning, jangan abaikan perspektif unsupervised. Manfaatkan teknik clustering untuk mengungkap struktur laten, mendeteksi anomali, atau memahami distribusi kelas sebelum membangun model prediktif, karena wawasan ini sering kali menjadi pembeda antara praktik standar dan penelitian yang berkualitas tinggi.

Setelah tahap finalisasi gap selesai dan semua kriteria terpenuhi, Anda akan siap memasuki tahap berikutnya: perumusan research question dan hipotesis yang konkret, terukur, dan selaras dengan gap yang telah Anda mapan. Proses ini akan menjadi fondasi metodologis bagi seluruh eksperimen, penulisan paper, dan presentasi akhir Anda sepanjang semester.

### Inti yang Harus Ditekankan

- Validitas research gap harus didukung literatur sistematis dan bukti EDA awal, bukan asumsi pribadi.
- Kerangka evaluasi metode harus didefinisikan sejak dini, dengan perhatian khusus pada tantangan validasi unsupervised learning.
- Eksperimen harus dirancang secara proporsional untuk menjawab research question, mencakup baseline, protokol validasi, dan analisis kesalahan.
- Pemahaman distribusi data melalui pendekatan unsupervised/clustering tetap menjadi nilai tambah kritis, bahkan untuk topik supervised learning.
- Finalisasi gap merupakan jembatan metodologis wajib sebelum merumuskan research question dan hipotesis yang teruji.

### Transisi ke Slide Berikutnya

Sebelum kita melangkah ke perumusan research question dan hipotesis, mari kita pastikan fondasi teknis Anda tentang clustering dan evaluasi unsupervised learning sudah benar-benar kokoh. Slide berikutnya akan menyajikan checkpoint kompetensi inti yang harus Anda kuasai, mulai dari asumsi K-Means, mekanisme DBSCAN, hingga batasan visualisasi t-SNE dan UMAP. Pastikan poin-poin ini dipahami dengan baik, karena pemahaman inilah yang akan menentukan ketajaman desain eksperimen dan validitas klaim penelitian Anda nantinya.

---

## Slide 035 - Checkpoint: Yang Harus Anda Kuasai

### Narasi

Setelah menyelesaikan tahap finalisasi research gap pada pertemuan sebelumnya, saat ini kita beralih ke verifikasi pemahaman konseptual melalui checkpoint ini. Pada jenjang magister, kemampuan mengidentifikasi kapan dan mengapa suatu algoritma clustering tertentu harus dipilih merupakan fondasi metodologis yang wajib dikuasai sebelum merancang eksperimen atau menyusun paper penelitian. Poin-poin dalam slide ini berfungsi sebagai benchmark kesiapan analitis Anda dalam menangani data tanpa label.

Pertama, K-Means paling efektif digunakan ketika Anda berhadapan dengan dataset berskala besar yang diasumsikan memiliki bentuk cluster berbentuk bola atau hiperelipsoid, serta ketika varians antar cluster relatif homogen. Algoritma ini mengandalkan minimisasi within-cluster sum of squares, sehingga asumsi utamanya adalah keseragaman kerapatan dan ketidaktergantungan antar fitur. Kedua, agglomerative hierarchical clustering beroperasi dengan strategi bottom-up: setiap observasi dimulai sebagai cluster tunggal, kemudian digabungkan secara iteratif berdasarkan kemiripan jarak. Dendrogram berperan sebagai representasi visual hierarki penggabungan tersebut, memungkinkan peneliti menentukan jumlah cluster optimal secara dinamis melalui pemotongan pada cut height yang menandai peningkatan dissimilarity terbesar. Ketiga, dalam pendekatan berbasis densitas seperti DBSCAN, pembedaan antara core point (memenuhi MinPts dalam radius Eps), border point (terdapat dalam radius Eps core point namun tidak memenuhi syarat core), dan noise point (terisolasi secara densitas) menjadi esensial untuk menangani data riil yang mengandung anomali, missing pattern, atau struktur non-konvensional.

Validasi hasil clustering menuntut pemilihan metrik evaluasi yang tepat. Silhouette coefficient sering dijadikan acuan karena menghasilkan skoring kontinu antara -1 hingga 1 yang mengukur kohesi intra-cluster dan separasi antar-cluster. Namun, silhouet memiliki keterbatasan struktural: ia cenderung overestimate performa pada cluster berbentuk bulat dan padat, serta rentan terhadap bias dimensi tinggi. Evaluasi clustering secara fundamental terbagi menjadi internal evaluation yang hanya memanfaatkan informasi intrinsik data tanpa ground truth, cocok untuk studi eksploratori murni; dan external evaluation yang membandingkan partisi hasil clustering dengan label referensi, lebih relevan ketika validasi konsistensi diperlukan untuk mendukung klaim penelitian.

Dalam praktik eksperimental, reduksi dimensi seperti PCA, t-SNE, dan UMAP sangat berguna untuk eksplorasi visual data berdimensi tinggi. PCA mempertahankan variance global secara linear, sementara t-SNE dan UMAP mengungkap struktur lokal dan non-linear sehingga pola pemisahan tampak lebih jelas di ruang proyeksi 2D atau 3D. Perlu ditegaskan bahwa visualisasi ini bersifat heuristik dan eksploratori, bukan bukti matematis kualitas cluster. Distorsi topologi yang terjadi selama proyeksi dapat menciptakan ilusi pemisahan atau pengelompokan yang tidak tồnensi dalam ruang fitur asli. Visualisasi cluster dapat menyesatkan jika peneliti terjebak pada interpretasi spasial tanpa melakukan verifikasi kuantitatif, sensitivity analysis, atau cross-check dengan domain knowledge. Penguasaan checkpoint ini memastikan Anda mampu membuat justifikasi metodologis yang kuat, memilih metrik validasi sesuai karakteristik data, dan menghindari jebakan interpretasi visual yang umum terjadi dalam publikasi data mining.

### Inti yang Harus Ditekankan

- K-Means membutuhkan asumsi spherical clusters dan homoskedastisitas; agglomerative clustering bergantung pada linkage strategy dan interpretasi dendrogram; DBSCAN mengandalkan parameter Eps dan MinPts untuk membedakan struktur densitas versus noise.
- Silhouette coefficient berguna untuk quick diagnostic, namun tidak boleh menjadi satu-satunya metrik validasi karena bias terhadap bentuk cluster dan sensitivitas dimensi.
- Internal evaluation cocok untuk eksplorasi tanpa label; external evaluation diperlukan saat ground truth tersedia untuk validasi empiris.
- PCA, t-SNE, dan UMAP adalah alat eksplorasi visual, bukan validator kualitas clustering; distorsi proyeksi dapat menghasilkan false pattern yang menyesatkan.
- Rigor metodologis tingkat magister menuntut triangulasi antara algoritma, metrik evaluasi kuantitatif, dan analisis robustness sebelum menarik kesimpulan penelitian.

### Transisi ke Slide Berikutnya

Untuk memperdalam landasan matematis, detail implementasi, dan best practices reproduktibilitas dari semua metode yang telah kita diskusikan, mari kita lanjutkan ke daftar referensi kunci dan panduan dokumentasi resmi yang akan menjadi rujukan utama Anda dalam menyusun eksperimen dan penulisan paper penelitian.

---

## Slide 036 - Referensi dan Bacaan Lanjut

### Narasi

Setelah menyelesaikan checkpoint evaluasi pada slide sebelumnya, kita kini beralih ke sumber literatur yang akan menjadi fondasi akademik dan teknis untuk pendalaman materi clustering dan unsupervised learning pada jenjang magister. Daftar referensi ini tidak disusun sebagai pelengkap pasif, melainkan sebagai toolkit riset yang harus Anda kuasai secara aktif untuk mendukung penyusunan metodologi penelitian, verifikasi asumsi algoritmik, dan pengembangan proyek akhir yang siap dipublikasikan di konferensi terindeks Scopus. Pada tingkat S2, kemampuan memanggil fungsi library hanyalah tahap permukaan; yang membedakan penelitian berkualitas adalah pemahaman mendalam terhadap derivasi matematis, kompleksitas komputasi, serta batasan empiris dari setiap metode yang diimplementasikan.

Dua buku teks klasik yang tercantum, yaitu *Data Mining: Concepts and Techniques* karya Han, Pei, dan Tong edisi keempat serta *Introduction to Data Mining* karya Tan, Steinbach, Karpatne, dan Kumar edisi kedua, tetap menjadi standar emas dalam bidang ini. Buku Han menawarkan penjelasan sistematis mengenai proof of convergence, analisis kompleksitas waktu dan ruang, serta perbandingan ketat antar-algoritma clustering berbasis partisi, hierarki, dan densitas. Sementara itu, buku Tan melengkapi pemahaman Anda dengan perspektif integrasi data mining ke dalam siklus riset ilmiah dan pengambilan keputusan berbasis data, lengkap dengan studi kasus yang membantu mengidentifikasi research gap di lapangan. Keduanya sangat krusial ketika Anda perlu memvalidasi mengapa K-Means gagal pada data non-convex, bagaimana dendrogram merepresentasikan similarity matrix, atau mengapa DBSCAN memerlukan tuning epsilon dan min_samples yang berbasis distribusi densitas lokal.

Untuk jembatan antara teori dan implementasi produksi, dokumentasi resmi Scikit-learn menjadi rujukan primer. Bagian clustering, decomposition, dan manifold learning di dalamnya tidak hanya mendeskripsikan signature API, tetapi juga menyertakan catatan teknis mengenai penanganan numerical overflow, strategi standardization, pemilihan distance metrics, serta rekomendasi fallback algorithm saat konvergensi terhambat. Artikel seminal Pedregosa et al. di Journal of Machine Learning Research (JMLR) memberikan transparansi arsitektural library tersebut, termasuk filosofi desain estimator-fit-transformer yang memastikan konsistensi pipeline preprocessing hingga model evaluation. Di sisi lain, makalah McInnes et al. mengenai UMAP merupakan referensi wajib untuk memahami bagaimana pendekatan topologi manifold dan fuzzy simplicial sets digunakan dalam reduksi dimensi non-linear. Pemahaman ini penting agar Anda tidak terjebak menganggap visualisasi UMAP atau t-SNE sebagai bukti validitas cluster, melainkan sebagai alat eksplorasi yang harus dikonfirmasi kembali dengan metrik evaluasi internal dan eksternal.

Penguasaan terhadap sumber-sumber ini akan langsung memperkuat kualitas ablation study, error analysis, dan robustness testing yang akan Anda jalankan dalam proyek penelitian semester ini. Dengan merujuk pada benchmark empiris dan justifikasi teoritis dari literatur tersebut, Anda dapat merumuskan hipotesis yang lebih tajam, memilih hyperparameter berdasarkan prinsip optimasi bukannya trial-and-error, serta menulis bagian metodologi dengan argumen yang terukur dan dapat direplikasi. Pastikan Anda menandai bab atau subsection spesifik dari masing-masing referensi sesuai dengan subtopik clustering yang sedang Anda teliti, sehingga proses penulisan paper conference berjalan lebih efisien dan berbasis evidence.

### Inti yang Harus Ditekankan

- Rujukan akademik dan dokumentasi teknis berfungsi sebagai fondasi untuk membangun justifikasi matematis, metodologis, dan empiris dalam penelitian S2.
- Buku Han dan Tan memberikan kedalaman konseptual serta perbandingan algoritmik, sedangkan dokumentasi scikit-learn dan makalah JMLR/Paper UMAP menjembatani teori dengan implementasi yang robust dan reproducible.
- Visualisasi via UMAP/t-SNE bersifat eksploratif; validitas cluster harus tetap dibuktikan melalui metrik evaluasi internal/eksternal dan analisis sensitivitas parameter.
- Penggunaan referensi secara aktif akan meningkatkan kualitas research question, experimental design, ablation study, dan kesiapan publikasi paper target konferensi internasional.

### Transisi ke Slide Berikutnya

Dengan bekal literatur dan pemahaman teknis yang memadai, kita telah menutup modul clustering dan unsupervised learning secara komprehensif. Pada pertemuan berikutnya, kita akan beralih ke topik yang sering menjadi tantangan nyata dalam dataset dunia nyata, yaitu Anomaly Detection, Imbalanced Data, dan Rare Events. Silakan siapkan lingkungan kerja Python Anda, karena kita akan membahas teknik resampling, metrik evaluasi yang tepat untuk kelas jarang, serta model deteksi outlier yang tahan terhadap skewness distribusi.

---

## Slide 037 - Penutup

### Narasi

Kita telah menyelesaikan rangkaian pembahasan mengenai clustering dan teknik unsupervised data mining. Pada sesi ini, kita telah mengeksplorasi secara komprehensif berbagai algoritma inti mulai dari partitional methods seperti K-Means, hierarchical approaches, hingga density-based techniques seperti DBSCAN dan OPTICS. Lebih dari sekadar implementasi sintaksis menggunakan scikit-learn atau visualisasi distribusi cluster melalui Matplotlib dan Seaborn, penekanan utama pada jenjang magister adalah kemampuan Anda dalam melakukan evaluasi kritis terhadap asumsi matematis, kompleksitas waktu dan ruang, serta ketahanan setiap metode terhadap high-dimensional data dan outlier. Anda telah dilatih untuk menerapkan validasi internal seperti Silhouette Coefficient, Davies-Bouldin Index, dan Calinski-Harabasz Score, serta melakukan hyperparameter tuning dan ablation study untuk memastikan bahwa struktur yang ditemukan benar-benar stabil dan interpretable.

Sebagai penutup topik ini, penting bagi Anda untuk menyadari bahwa hasil clustering bukanlah akhir dari proses, melainkan fondasi eksperimental yang krusial. Pengelompokan data yang robust sering kali menjadi prasyarat untuk feature engineering, reduksi dimensi, atau bahkan sebagai baseline comparison dalam eksperimen supervised learning. Pastikan literatur yang telah dirangkum pada slide sebelumnya, termasuk buku teks standar dari Han et al. dan Tan et al., serta dokumentasi teknis scikit-learn, terus menjadi rujukan utama ketika Anda mendalami derivasi matematis atau mengoptimalkan pipeline preprocessing di Jupyter Notebook maupun Google Colab.

Poin kunci yang harus melekat dari pertemuan ini adalah bahwa keberhasilan clustering tidak diukur semata-mata dari jumlah cluster yang dihasilkan, melainkan dari koherensi intr-cluster, separabilitas inter-cluster, dan relevansi domain. Kemampuan Anda dalam menafsirkan representasi latent, menangani noise secara metodologis, dan merancang metrik evaluasi yang sesuai dengan karakteristik dataset akan menjadi determinan utama dalam menyusun proposal penelitian dan melaksanakan eksperimen yang memenuhi standar publikasi internasional.

### Inti yang Harus Ditekankan

- Evaluasi rigor terhadap asumsi, bias, dan batasan komputasi setiap algoritma clustering jauh lebih bernilai daripada sekadar menjalankan fungsi black-box.
- Validasi internal dan eksternal harus dilakukan secara sistematis untuk menjamin reproduktibilitas hasil dan mendukung desain eksperimen tingkat magister.
- Hasil clustering berfungsi sebagai landasan struktural untuk riset lanjutan, khususnya dalam konteks perumusan hipotesis, ablation study, dan error analysis.

### Transisi ke Slide Berikutnya

Setelah menguasai mekanisme pengelompokan data tanpa label, langkah metodologis berikutnya adalah mempelajari bagaimana sistem dapat mengenali pola yang secara statistik menyimpang dari distribusi mayoritas. Pada pertemuan mendatang, kita akan membahas Anomaly Detection, Imbalanced Data, dan Rare Events, yang mencakup pendekatan berbasis probabilitas, distance/density metrics, satu-class classifiers, serta strategi resampling dan cost-sensitive learning untuk menangani ketidakseimbangan kelas dalam skenario nyata.
