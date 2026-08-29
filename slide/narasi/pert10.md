# Narasi TD Data Mining - Pertemuan 10

## AutoML, Hyperparameter Optimization & Reproducible Research

Sumber: markdown/pert10-automl-hyperparameter-optimization-reproducible-research.md

---

## Slide 000 - Cover

### Narasi

Pada pertemuan kesepuluh ini, kita akan membahas tiga pilar metodologis yang menjadi standar emas dalam praktik dan penelitian data mining kontemporer: AutoML, Hyperparameter Optimization, dan Reproducible Research. Setelah pada pertemuan sebelumnya kita mengeksplorasi Deep & Representation Learning untuk data tabular serta membangun strong baseline menggunakan arsitektur neural, langkah selanjutnya adalah menguji apakah peningkatan kompleksitas model tersebut benar-benar memberikan gain yang signifikan, atau justru menimbulkan overfitting tersembunyi. Di sinilah peran sistematis dari pengoptimalan hyperparameter dan otomatisasi pipeline masuk sebagai kebutuhan fundamental.

AutoML sering disalahartikan sebagai pengganti sepenuhnya terhadap keahlian manusia, padahal dalam konteks penelitian magister, AutoML berfungsi sebagai framework eksperimental yang mempercepat iterasi dan meminimalkan human error dalam konfigurasi pipeline. Di dalamnya, teknik Hyperparameter Optimization seperti grid search, random search, Bayesian optimization, dan population-based training menjadi mekanisme inti untuk menjelajahi ruang pencarian parameter secara efisien. Namun, efisiensi pencarian tidak ada artinya jika tidak dibarengi dengan disiplin ilmiah dalam pelaporan eksperimen. Konsep Reproducible Research hadir sebagai jawaban atas krisis replikasi dalam literatur machine learning modern. Kita akan membahas bagaimana mengontrol sumber keacakan, mendokumentasikan versi library, mengelola environment komputasi, serta menyimpan artefak eksperimen sehingga setiap claim performa model dapat diverifikasi ulang.

Integrasi ketiga topik ini secara langsung mendukung tujuan pembelajaran mata kuliah di jenjang S2, yaitu membekali mahasiswa dengan kemampuan merancang eksperimen yang valid, fair, dan siap publikasi. Penguasaan terhadap praktik reproducible research bukan hanya formalitas akademik, melainkan prasyarat mutlak untuk melakukan ablation study, error analysis, dan robustness evaluation yang kredibel. Materi ini juga akan menjadi landasan teknis bagi implementasi proposed method dalam research project yang sedang kalian kembangkan.

### Inti yang Harus Ditekankan

- AutoML dan Hyperparameter Optimization adalah alat strategis untuk eksplorasi ruang model secara sistematis, bukan pengganti pemahaman mendalam terhadap karakteristik data dan algoritma.
- Reproducible Research merupakan standar metodologis wajib di jenjang magister; mencakup kontrol seed, manajemen environment, versioning kode/data, dan dokumentasi eksperimen yang transparan.
- Validitas perbandingan model bergantung pada fairness dalam preprocessing, splitting strategy, dan evaluasi; tanpa reproduktibilitas, klaim kinerja model kehilangan nilai ilmiahnya.
- Kompetensi ini langsung diterapkan dalam tahap implementasi proposed method pada research project semester ini.

### Transisi ke Slide Berikutnya

Untuk menempatkan pembahasan ini dalam peta perkembangan materi, mari kita lihat bagaimana Pertemuan 10 berdiri di antara pendalaman representasi tabular pada Pertemuan 9 dan eksplorasi Graph Mining pada Pertemuan 11, serta mengapa fokus pada validitas, keadilan perbandingan, dan reproduktibilitas menjadi kunci keberhasilan implementasi proposed method kalian.

---

## Slide 001 - Peta Perkuliahan dan Posisi Pertemuan 10

### Narasi

Peta perkuliahan ini menempatkan pertemuan ke-10 sebagai titik balik metodologis dalam perjalanan belajar data mining tingkat lanjut. Pada pertemuan sebelumnya, kita telah membahas Deep & Representation Learning for Tabular Data, di mana fokus utamanya adalah membandingkan model ensemble tradisional seperti Gradient Boosting dengan arsitektur neural khusus untuk data tabular guna membangun strong baseline yang kokoh. Dari fondasi tersebut, pertemuan ini hadir untuk menjawab tantangan kritis dalam penelitian data mining: bagaimana memastikan bahwa setiap perbandingan model dilakukan secara adil, setiap peningkatan performa memiliki dasar statistik yang kuat, dan seluruh proses eksperimen dapat direproduksi oleh peneliti lain.

Fokus inti pertemuan ini mencakup AutoML, Hyperparameter Optimization, dan Reproducible Research. Dalam konteks riset magister, penyetelan parameter secara manual atau ad-hoc sudah tidak memadai karena rentan terhadap bias konfirmasi dan tidak scalable. Kita akan mengeksplorasi teknik optimasi sistematis mulai dari Grid Search, Random Search, hingga Bayesian Optimization yang memanfaatkan probabilistic modeling untuk menjelajahi ruang parameter secara efisien. Selain itu, penggunaan framework AutoML akan dibahas sebagai solusi untuk mengotomatisasi pipeline preprocessing, model selection, dan tuning, sehingga peneliti dapat berfokus pada inovasi metodologis daripada pekerjaan repetitif. Namun, otomatisasi ini harus selalu diimbangi dengan prinsip reproducible research. Eksperimen yang valid mensyaratkan dokumentasi lengkap terhadap versi library, seed acak, split data, dan konfigurasi hardware, sehingga hasil yang dilaporkan bukan sekadar artefak kebetulan.

Secara praktis, pertemuan ini juga menandai fase implementasi nyata dalam proyek penelitian Anda. Ini adalah saat ketika proposed atau selected method yang telah Anda rancang sebelumnya mulai dijalankan menggunakan protokol optimasi dan evaluasi yang ketat. Dengan menerapkan standar validitas dan fair comparison, Anda akan menghasilkan evidence yang kuat untuk mendukung klaim penelitian, sekaligus mempersiapkan diri menghadapi diskusi lanjutan pada pertemuan ke-11 yang akan membahas Graph Mining & Graph Neural Networks untuk data non-tabular.

### Inti yang Harus Ditekankan

- Pertemuan 10 berfungsi sebagai pilar metodologis yang menjamin eksperimen data mining bersifat valid, fair, dan reproducible, bukan sekadar latihan coding biasa.
- AutoML dan Hyperparameter Optimization adalah instrumen untuk mengurangi bias manusia dan standardisasi proses eksperimen, namun tetap memerlukan pemahaman mendalam agar tidak terjadi overfitting tersembunyi atau leakage data.
- Reproducible research merupakan kewajiban akademik di jenjang S2; setiap hasil penelitian harus dapat diverifikasi ulang melalui dokumentasi kode, environment, dan kontrol variabel acak yang transparan.
- Pemahaman tentang fair comparison menjadi prasyarat mutlak sebelum beralih ke domain data yang lebih kompleks seperti graph-structured data pada pertemuan berikutnya.

### Transisi ke Slide Berikutnya

Untuk mengukur sejauh mana kompetensi ini akan dikembangkan, mari kita tinjau tujuan pembelajaran spesifik yang selaras dengan capaian lulusan program studi, yang akan kita paparkan pada slide berikutnya.

---

## Slide 002 - Tujuan Pembelajaran Pertemuan 10

### Narasi

Slide ini menetapkan tujuan pembelajaran utama untuk Pertemuan 10, yang secara eksplisit dirancang untuk memenuhi dua Capaian Pembelajaran Mata Kuliah (CPMK) kunci di jenjang magister, yaitu CPMK-4 dan CPMK-5. CPMK-4 menuntut mahasiswa mampu merancang dan melaksanakan eksperimen data mining yang valid serta dapat direproduksi, dengan penekanan metodologis pada proses pemilihan model dan tuning hyperparameter. Sementara itu, CPMK-5 berfokus pada kemampuan evaluasi komparatif yang objektif, di mana mahasiswa harus menilai berbagai algoritma tidak hanya berdasarkan akurasi prediktif, tetapi juga melalui lensa biaya komputasi, ketahanan terhadap distribusi data yang berubah, dan kapasitas generalisasi. Dalam konteks penelitian tingkat S2, penguasaan kedua CPMK ini menjadi prasyarat fundamental sebelum memasuki tahap implementasi metode usulan pada proyek akhir.

Untuk mencapai kompetensi tersebut, materi akan membedah empat pendekatan sistematis dalam pencarian konfigurasi optimal: Grid Search, Random Search, Bayesian Optimization, dan AutoML. Mahasiswa akan memahami karakteristik masing-masing metode, mulai dari sifat exhaustif Grid Search yang rentan terhadap curse of dimensionality, efisiensi stokastik Random Search pada ruang parameter berdimensi tinggi, pemanfaatan probabilitas posterior pada Bayesian Optimization untuk konvergensi lebih cepat, hingga integrasi end-to-end pada AutoML. Secara praktis, mahasiswa akan dilatih menggunakan Optuna sebagai engine hyperparameter optimization yang modern dan berbasis trial-based architecture, serta AutoGluon untuk membangun pipeline tabular secara otomatis dengan dukungan ensemble stacking dan early stopping.

Selain aspek teknis, slide ini juga menekankan analisis kritis terhadap model selection bias dan alokasi computational budget. Dalam praktik penelitian, ketidakseimbangan anggaran komputasi atau prosedur tuning yang tidak seragam antar model dapat menghasilkan bias seleksi yang fatal, sehingga klaim performa menjadi tidak valid. Oleh karena itu, prinsip reproducible research harus diterapkan secara ketat sejak tahap desain eksperimen, pencatatan seed dan konfigurasi lingkungan, hingga pelaporan metrik. Pemahaman ini menjadi jembatan logis menuju slide berikutnya, di mana kita akan merekap tantangan ketidakadilan tuning dari Pertemuan 9 antara Gradient Boosting dan neural tabular models, serta melihat bagaimana AutoML dan optimasi hyperparameter dapat memberikan landasan perbandingan yang lebih objektif dan terdokumentasi.

### Inti yang Harus Ditekankan

- Penyelarahan materi dengan CPMK-4 dan CPMK-5 sebagai fondasi metodologi penelitian data mining tingkat S2.
- Pembedaan konseptual dan trade-off komputasi antar metode pencarian: Grid Search, Random Search, Bayesian Optimization, dan AutoML.
- Penerapan Optuna untuk kontrol granular pada HPO, serta AutoGluon untuk otomatisasi pipeline tabular yang efisien.
- Kesadaran kritis terhadap model selection bias dan pentingnya manajemen computational budget agar eksperimen tetap adil.
- Kewajiban mutlak menerapkan prinsip reproducible research dalam setiap siklus eksperimen dan penulisan paper.

### Transisi ke Slide Berikutnya

Dengan kerangka tujuan dan kompetensi ini telah jelas, mari kita tinjau kembali tantangan konkret yang muncul dari eksperimen Pertemuan 9 mengenai ketidakseimbangan tuning, dan bagaimana teknik optimasi modern dapat menjembatani kesenjangan tersebut secara lebih sistematis.

---

## Slide 003 - Recap: Pertemuan 9 dan Jembatan ke AutoML

### Narasi

Pada pertemuan sembilan lalu, kita telah membedah perbandingan empiris antara algoritma Gradient Boosting dengan neural tabular models dalam konteks pemrosesan data bertipe tabel. Diskusi tersebut menyoroti sebuah pertanyaan fundamental: dalam kondisi eksak apa deep learning benar-benar memberikan keuntungan signifikan dibandingkan metode tradisional berbasis tree-based ensemble? Jawaban atas pertanyaan ini sering kali terdistorsi oleh praktik eksperimen yang tidak seimbang, sehingga menciptakan bias sistematis dalam interpretasi hasil penelitian.

Masalah utama yang muncul adalah kerentanan eksperimen terhadap ketidakadilan tuning. Ketika dievaluasi dengan konfigurasi standar atau upaya penyetelan yang minim, model neural network cenderung menunjukkan performa yang jauh di bawah ekspektasi. Sebaliknya, model gradient boosting sering kali tampil sangat unggul karena peneliti secara intensif melakukan penyetelan hyperparameter tambahan. Kesenjangan usaha komputasi ini menghasilkan gambaran yang menyesatkan, di mana keunggulan satu pendekatan mungkin hanya merupakan artefak dari proses tuning yang tidak proporsional, bukan indikasi superioritas algoritma itu sendiri.

AutoML dan teknik hyperparameter optimization (HPO) hadir sebagai solusi metodologis untuk menjawab tantangan tersebut secara lebih objektif. Dengan mengintegrasikan framework otomatisasi, kita dapat menjamin kesetaraan peluang bagi setiap model melalui proses pencarian yang sistematis dan terukur. Lebih dari sekadar efisiensi, pendekatan ini memaksa peneliti untuk mendokumentasikan seluruh ruang pencarian hyperparameter, menetapkan batas anggaran komputasi yang transparan, serta memisahkan fase tuning dan evaluasi secara ketat. Prinsip pemisahan ini sangat krusial untuk menjaga integritas validitas eksternal model dan mendukung praktik reproducible research yang menjadi standar publikasi internasional.

Poin penekanan dari slide ini adalah bahwa otomasi tuning bukanlah sekadar trik engineering, melainkan komponen inti dari desain eksperimen yang rigor. Tanpa kontrol yang ketat terhadap proses pencarian parameter, klaim kinerja model dalam penelitian tingkat magister akan kehilangan bobot ilmiahnya. Untuk membangun fondasi eksperimen yang solid, kita harus terlebih dahulu memahami perbedaan konseptual antara parameter model yang dipelajari secara otomatis selama pelatihan versus hyperparameter yang ditetapkan manusia sebelum pelatihan dimulai. Pemahaman inilah yang akan menjadi landasan kita dalam merancang pipeline optimasi yang valid dan dapat direplikasi.

### Inti yang Harus Ditekankan

- Eksperimen perbandingan model sangat rentan terhadap bias akibat ketimpangan usaha tuning (unfair tuning), yang dapat mendistorsi kesimpulan ilmiah dan generalisasi hasil.
- AutoML dan HPO berfungsi sebagai mekanisme pemerataan peluang komputasi, sekaligus alat dokumentasi proses pencarian yang mendukung transparansi, akuntabilitas, dan reproduktibilitas.
- Pemisahan ketat antara fase tuning dan evaluasi, serta pemahaman mendasar tentang peran hyperparameter, adalah syarat mutlak untuk desain eksperimen data mining yang valid di jenjang riset.

### Transisi ke Slide Berikutnya

Sebelum kita menyelami mekanisme kerja framework AutoML dan Optuna, mari kita luruskan terlebih dahulu definisi konseptualnya dengan membedah perbedaan fundamental antara parameter model dan hyperparameter, serta bagaimana keduanya berperan strategis dalam desain eksperimen.

---

## Slide 004 - Hyperparameter vs Parameter Model

### Narasi

Pada slide sebelumnya, kita telah menyoroti bagaimana perbandingan antar-algoritma sering kali terdistorsi oleh ketidakadilan dalam proses penyetelan model. Untuk membangun fondasi metodologis yang kuat, langkah pertama yang wajib dipahami adalah pembedaan konseptual antara parameter model dan hyperparameter. Perbedaan ini bukan sekadar semantik teknis, melainkan dasar dari bagaimana kita merancang eksperimen data mining yang valid, transparan, dan dapat direplikasi.

Berdasarkan tabel pada slide ini, parameter model adalah besaran yang dipelajari secara otomatis oleh algoritma selama fase training. Nilainya berubah-ubah seiring iterasi optimisasi dan merupakan output akhir dari pembelajaran mesin. Contoh klasiknya adalah bobot (weights) dan bias pada linear regression, atau titik pemecahan (split points) pada setiap node decision tree yang dihitung berdasarkan kriteria seperti Gini impurity atau information gain. Sebaliknya, hyperparameter adalah konfigurasi yang ditetapkan oleh peneliti sebelum proses training dimulai. Nilainya bersifat statis dan tidak diperbarui selama training berlangsung. Dalam ekosistem Python dan scikit-learn, contoh hyperparameter yang sangat umum meliputi `learning_rate`, `max_depth`, `n_estimators` untuk ensemble methods, maupun `C` untuk regulasi pada SVM atau logistic regression.

Mengapa pembedaan ini memiliki dampak metodologis yang besar? Karena hyperparameter secara langsung mengontrol tiga pilar utama dalam perilaku model: kapasitas representasi, mekanisme regularisasi, dan dinamika proses optimasi. Misalnya, `max_depth` berfungsi sebagai rem untuk membatasi kompleksitas pohon guna mencegah overfitting, sementara `learning_rate` menentukan seberapa agresif model menyesuaikan diri terhadap residual error. Penyesuaian nilai hyperparameter yang tepat dapat menghasilkan lonjakan performa yang jauh lebih signifikan dibandingkan sekadar mengganti algoritma. Oleh karena itu, dalam konteks penelitian tingkat magister, tuning hyperparameter tidak boleh dipandang sebagai tugas teknis belaka atau praktik engineering ad-hoc. Ia merupakan komponen inti dari experimental design yang memerlukan definisi search space yang ketat, strategi sampling yang terukur, dan protokol evaluasi yang independen.

Memahami bahwa parameter adalah hasil pembelajaran, sedangkan hyperparameter adalah input desain eksperimen, menjadi kunci untuk menghindari bias konfirmasi dalam pelaporan hasil penelitian. Ketika kita menempatkan hyperparameter tuning sebagai bagian dari kerangka desain eksperimen, kita membuka jalan menuju praktik penelitian yang lebih sistematis, objektif, dan kredibel secara ilmiah.

### Inti yang Harus Ditekankan

- Parameter model dipelajari otomatis selama training (contoh: bobot, split points) dan nilainya berubah, sedangkan hyperparameter ditetapkan manual sebelum training, nilainya tetap, dan berfungsi sebagai kendali atas perilaku algoritma.
- Hyperparameter mengontrol kapasitas model, regularisasi, dan jalur optimasi; penyetelannya berdampak lebih besar terhadap performa akhir dibandingkan pemilihan algoritma semata.
- Dalam penelitian S2, tuning hyperparameter harus diposisikan sebagai bagian dari experimental design yang rigor, bukan sekadar praktik teknis atau trial-and-error tanpa kerangka metodologis yang jelas.

### Transisi ke Slide Berikutnya

Memahami peran strategis hyperparameter membawa kita pada pertanyaan praktis: mengapa pendekatan manual atau intuisi saja tidak lagi memadai dalam penelitian modern? Slide berikutnya akan menjelaskan mengapa Hyperparameter Optimization menjadi kebutuhan metodologis untuk menjamin validitas komparatif, efisiensi komputasi, dan reproduktibilitas dalam setiap studi data mining.

---

## Slide 005 - Mengapa Hyperparameter Optimization Penting?

### Narasi

Berbeda dengan parameter model yang dipelajari secara otomatis selama proses pelatihan, hyperparameter ditetapkan sebelum training dimulai dan berfungsi sebagai tuas pengontrol kapasitas model, mekanisme regularisasi, serta dinamika optimasi. Karena sifatnya yang menentukan jalur konvergensi dan kompleksitas model, performa akhir sistem sangat sensitif terhadap pilihan nilai ini. Konfigurasi yang kurang tepat dapat menghambat kemampuan model untuk menangkap pola data, sementara konfigurasi yang terlalu kompleks justru berisiko menyebabkan overfitting. Oleh karena itu, penentuan nilai ini bukan lagi urusan teknis semata, melainkan merupakan komponen fundamental dalam desain eksperimen.

Dalam praktik penelitian, sering kali terjadi kesalahpahaman bahwa sebuah algoritma atau arsitektur inherently lemah hanya karena konfigurasi default-nya tidak optimal. Tanpa melakukan tuning, baseline yang kita bangun dapat tampak jauh lebih lemah daripada potensi sebenarnya. Hal ini berisiko menghasilkan kesimpulan yang keliru mengenai efektivitas suatu metode, padahal masalahnya terletak pada konfigurasi awal, bukan pada fondasi algoritmanya. Mengabaikan tahap optimasi berarti mengabaikan potensi maksimal dari model yang sedang diteliti dan dapat melemahkan argumentasi ilmiah Anda.

Klaim komparatif dalam penelitian, seperti *"metode A lebih unggul daripada metode B"*, hanya memiliki validitas ilmiah jika kedua pendekatan diberikan kesempatan tuning yang setara. Pencarian manual berbasis trial-and-error tidak hanya memakan waktu besar, tetapi juga rentan terhadap bias peneliti dan sulit direplikasi. Sebaliknya, Hyperparameter Optimization (HPO) menyediakan kerangka kerja sistematis yang menelusuri ruang konfigurasi secara terstruktur, memastikan setiap kandidat dievaluasi dengan standar yang konsisten, terukur, dan bebas dari subjektivitas peneliti.

Pada jenjang magister, transparansi dalam tuning menjadi prasyarat kredibilitas ilmiah. Dokumentasi ruang pencarian, strategi sampling, dan kriteria penghentian memungkinkan peneliti lain mereproduksi hasil eksperimen Anda. Ketika Anda memahami mengapa HPO krusial, langkah logis berikutnya adalah mendefinisikan batasan dari apa yang sebenarnya akan dicari. Ruang pencarian tersebut dapat berupa nilai kontinu, diskret, atau kategorikal, yang masing-masing menuntut pendekatan optimasi yang berbeda. Pembahasan mengenai karakteristik dan manajemen ruang pencarian ini akan kita bedah secara mendalam pada slide berikutnya.

### Inti yang Harus Ditekankan

- Performa model sangat bergantung pada konfigurasi hyperparameter; baseline tanpa tuning berpotensi memberikan gambaran yang tidak akurat tentang kemampuan algoritma.
- Komparasi metode hanya valid secara ilmiah jika dilakukan dengan prosedur tuning yang setara dan adil bagi semua kandidat.
- HPO mengubah proses penyetelan dari aktivitas ad-hoc menjadi bagian dari experimental design yang sistematis, transparan, dan mendukung reproduktibilitas penelitian.

### Transisi ke Slide Berikutnya

Setelah memahami urgensi optimasi, kita perlu mengidentifikasi apa yang sebenarnya sedang kita cari. Mari kita lihat bagaimana hyperparameter dikategorikan berdasarkan tipe datanya dan bagaimana merumuskan ruang pencarian yang efisien untuk eksperimen Anda.

---

## Slide 006 - Ruang Pencarian Hyperparameter

### Narasi

Dalam konteks optimasi hyperparameter, pemahaman mendasar terhadap sifat matematis dan komputasional dari setiap parameter sangat menentukan keberhasilan strategi pencarian. Hyperparameter secara umum terbagi ke dalam tiga tipe domain nilai yang memerlukan penanganan sampling berbeda. Tipe pertama adalah **kontinu**, yang mencakup nilai numerik real dalam suatu rentang, seperti `learning_rate`, `weight_decay`, atau parameter regularisasi `C` pada SVM. Tipe kedua adalah **diskret**, berupa bilangan bulat yang terdefinisi jelas, contohnya `max_depth`, jumlah layer neural network, atau `n_estimators`. Tipe ketiga adalah **kategorikal**, yang hanya menerima subset label tertentu tanpa urutan numerik intrinsik, seperti pemilihan optimizer (`adam`, `sgd`) atau fungsi aktivasi (`relu`, `gelu`). Membedakan ketiga tipe ini bukan sekadar formalitas, melainkan prasyarat agar algoritma optimasi dapat melakukan sampling yang valid secara statistik dan tidak melanggar batasan implisit model.

Sebagai ilustrasi praktis, perhatikan contoh ruang pencarian (search space) yang didefinisikan untuk model Random Forest:
```text
n_estimators    : 100, 200, 300
max_depth       : 3, 5, 7, None
min_samples_split : 2, 5, 10
criterion       : gini, entropy
```
Setiap baris merepresentasikan satu dimensi pencarian, dan seluruh kombinasi nilai antar baris membentuk titik-titik unik dalam ruang multidimensi. Jika dihitung secara bruto, kombinasi potensialnya mencapai $3 \times 4 \times 3 \times 2 = 72$ konfigurasi berbeda. Pada skala penelitian tingkat magister, ruang pencarian seperti ini harus dibatasi oleh domain knowledge dan analisis awal, bukan ditetapkan secara arbitrer. Ruang yang terlalu lebar akan menyebabkan eksplosi kombinatorial, menghabiskan waktu komputasi, dan meningkatkan risiko overfitting terhadap validation set. Sebaliknya, ruang yang terlalu sempit dapat mengunci model pada optimum lokal yang tidak merepresentasikan performa maksimal sebenarnya. Transparansi dalam mendefinisikan batasan ini merupakan bagian integral dari praktik penelitian yang reproducible.

Poin ini menjadi kelanjutan logis dari pembahasan sebelumnya mengenai pentingnya optimasi hyperparameter yang sistematis. Tanpa ruang pencarian yang terstruktur dan terdokumentasi, upaya tuning cenderung kembali ke pendekatan trial-and-error yang subjektif dan sulit diverifikasi oleh reviewer. Ketika ruang pencarian telah dipetakan dengan jelas, langkah metodologis berikutnya adalah memilih mekanisme eksplorasi yang sesuai untuk menjelajahi titik-titik dalam ruang tersebut secara efisien. Pembahasan ini akan membawa kita langsung ke klasifikasi strategi pencarian yang tersedia, lengkap dengan pertimbangan trade-off antara akurasi konvergensi, beban komputasi, dan skalabilitas pada dataset besar.

### Inti yang Harus Ditekankan

- Klasifikasi hyperparameter (kontinu, diskret, kategorikal) menentukan jenis algoritma sampling dan distribusi probabilitas yang valid.
- Ruang pencarian harus dibatasi secara empiris dan teoritis untuk mencegah eksplosi kombinatorial serta menjaga efisiensi komputasi.
- Dokumentasi ruang pencarian yang transparan adalah standar wajib untuk memastikan fair comparison dan reproducibility dalam penelitian data mining.

### Transisi ke Slide Berikutnya

Setelah memahami struktur dan potensi kompleksitas ruang pencarian, saatnya kita membahas bagaimana cara menjelajahinya secara sistematis. Mari kita lanjutkan ke taksonomi strategi optimasi hyperparameter, mulai dari pendekatan konvensional hingga metode berbasis probabilitas dan framework AutoML, beserta pertimbangan efisiensi komputasinya.

---

## Slide 007 - Taksonomi Strategi Hyperparameter Optimization

### Narasi

Setelah kita mengidentifikasi bahwa ruang pencarian hyperparameter dapat terdiri dari variabel kontinu, diskret, maupun kategorikal, serta menyadari bahwa kombinasi nilai-nilai tersebut dapat menghasilkan dimensi pencarian yang sangat besar, langkah metodologis berikutnya adalah memilih strategi optimasi yang paling sesuai. Pada slide ini, kita akan membedah taksonomi lengkap dari berbagai pendekatan dalam Hyperparameter Optimization. Klasifikasi ini bukan hanya bersifat teknis, tetapi menjadi kerangka dasar dalam merancang protokol eksperimen yang rigor, terutama pada jenjang pascasarjana di mana efisiensi komputasi dan validitas hasil penelitian menjadi prioritas.

Secara hierarkis, strategi optimasi terbagi menjadi enam jalur utama. Pertama, Manual atau Heuristic, di mana penetapan nilai dilakukan berdasarkan intuisi, pengalaman domain, atau aturan praktis tanpa mekanisme pencarian sistematis. Kedua, Grid Search, yang mengevaluasi setiap kombinasi nilai dalam ruang pencarian secara ekshaustif. Ketiga, Random Search, yang mengambil sampel acak independen dari ruang pencarian dan secara empiris terbukti lebih efisien pada ruang berdimensi tinggi. Keempat, Bayesian Optimization, yang membangun model surrogate probabilistik untuk memandu pencarian secara adaptif. Sub-kategori ini mencakup Gaussian Process atau Sequential Model-Based Optimization (SMBO), serta Tree-structured Parzen Estimator (TPE) yang menjadi engine default di framework Optuna. Kelima, Multi-fidelity atau Bandit methods seperti Hyperband dan BOHB, yang mengalokasikan sumber daya komputasi secara dinamis dengan menghentikan eksperimen yang kurang promising sejak tahap evaluasi awal. Terakhir, AutoML framework-level yang mengotomatisasi seluruh pipeline modeling dan tuning, dengan contoh populer seperti AutoGluon, Auto-sklearn, dan H2O AutoML.

Setiap strategi dalam taksonomi ini membawa trade-off fundamental antara efisiensi komputasi, kompleksitas implementasi, dan jaminan konvergensi menuju optimum. Grid Search menjamin cakupan penuh ruang pencarian tetapi rentan terhadap curse of dimensionality. Random Search menawarkan kecepatan sampling yang lebih baik namun tidak menjamin konvergensi bertahap. Bayesian Optimization menyeimbangkan eksplorasi dan eksploitasi melalui pembaruan posterior, meskipun memerlukan overhead komputasi per iterasi. Metode multi-fidelity sangat krusial ketika fungsi evaluasi model mahal, karena mereka memanfaatkan early stopping atau partial training epochs untuk mempercepat konvergensi. Dalam praktik penelitian, keputusan memilih strategi ini harus dipertimbangkan berdasarkan dua variabel kunci: ukuran dan struktur ruang pencarian, serta biaya evaluasi per konfigurasi model. Mahasiswa dituntut untuk mampu menganalisis karakteristik baseline sebelum memutuskan apakah perlu mengimplementasikan tuning berbasis Bayesian secara manual atau mengandalkan framework AutoML yang sudah teruji.

Sebagai poin penutup pada slide ini, penguasaan taksonomi ini berfungsi sebagai peta navigasi untuk menghindari jebakan komputasi yang tidak perlu. Pemilihan strategi yang tepat memastikan bahwa upaya tuning benar-benar berkontribusi pada peningkatan generalisasi model, bukan sekadar noise akibat sampling yang tidak terarah. Hal ini juga menjadi landasan kritis saat kita akan mendalami mekanisme spesifik dari masing-masing pendekatan dalam slide-slide berikutnya.

### Inti yang Harus Ditekankan

- Taksonomi optimasi hyperparameter mencakup enam kategori utama, masing-masing dengan karakteristik eksplorasi dan ekploitasi yang berbeda.
- Trade-off utama terletak pada keseimbangan antara efisiensi komputasi, kompleksitas algoritma, dan jaminan konvergensi menuju optimum.
- Pemilihan strategi harus didasarkan pada analisis objektif terhadap ukuran ruang pencarian dan biaya evaluasi model, bukan sekadar mengikuti tren tools.
- Pada level penelitian S2, pemahaman mendalam terhadap perbedaan filosofis antar-strategi diperlukan untuk merancang eksperimen yang reproducible dan efisien.

### Transisi ke Slide Berikutnya

Dari keseluruhan taksonomi tersebut, Grid Search merupakan titik awal paling intuitif untuk dipahami mekanismenya. Mari kita lanjutkan ke slide berikutnya untuk menelaah definisi formal, cara kerja exhaustive enumeration, serta implementasinya menggunakan library standar di ekosistem Python.

---

## Slide 008 - Grid Search: Definisi dan Mekanisme

### Narasi

Merujuk pada taksonomi strategi optimisasi hyperparameter yang telah dipaparkan pada slide sebelumnya, kita kini memasuki pembahasan mendalam mengenai salah satu metode paling fundamental dalam ruang pencarian: Grid Search. Dalam konteks penelitian data mining tingkat magister, penguasaan terhadap mekanisme dasar ini menjadi fondasi kritis sebelum mengevaluasi pendekatan yang lebih canggih seperti Random Search atau Bayesian Optimization. Grid Search didefinisikan sebagai teknik eksplorasi ruang parameter yang bekerja secara exhaustif, artinya algoritma akan menguji setiap kombinasi nilai hyperparameter yang telah Anda tentukan tanpa melakukan sampling acak maupun penyaringan berbasis heuristik. Pendekatan ini menjamin bahwa tidak ada titik potensial dalam grid yang terlewatkan selama ruang pencarian sudah terdefinisi dengan jelas.

Untuk memahami alur mekanismenya, mari kita tinjau contoh konfigurasi model berbasis ensemble atau pohon keputusan. Jika kita menetapkan domain pencarian untuk `learning_rate` sebesar `[0.01, 0.1, 0.3]` dan `max_depth` sebesar `[3, 5, 7]`, maka sistem akan secara otomatis membangun matriks kombinasi lengkap. Secara matematis, total iterasi evaluasi yang harus dijalankan adalah hasil perkalian kartesian dari jumlah kandidat tiap parameter, yaitu 3 dikali 3, menghasilkan tepat 9 kombinasi berbeda. Setiap kombinasi tersebut akan mengalami proses pelatihan ulang dari nol menggunakan subset data latih, diikuti oleh penilaian kinerja melalui skema validasi, hingga akhirnya ditemukan set hyperparameter yang memaksimalkan fungsi objektif yang dipilih.

Dalam ekosistem pemrograman Python untuk data mining, implementasi Grid Search telah distandarisasi secara elegan melalui pustaka scikit-learn. Perhatikan implementasi kode berikut:
```python
from sklearn.model_selection import GridSearchCV

grid = {
    "learning_rate": [0.01, 0.1, 0.3],
    "max_depth": [3, 5, 7]
}
search = GridSearchCV(model, grid, cv=5)
search.fit(X_train, y_train)
```
Baris pertama mengimpor kelas `GridSearchCV` yang secara khusus dirancang untuk menggabungkan grid search dengan cross-validation. Variabel `grid` berperan sebagai dictionary yang memetakan string nama parameter model ke list array nilai kandidat. Argumen `cv=5` menginstruksikan framework untuk melakukan 5-fold cross-validation pada setiap kombinasi, sehingga estimasi performa tidak bergantung pada satu partisi data tunggal dan lebih robust terhadap varians data. Perintah `search.fit()` memicu eksekusi inti; di balik layar, scikit-learn akan melakukan iterasi over seluruh kombinasi, menjalankan training loop, menghitung metrik evaluasi, serta menyimpan atribut `.best_params_` dan `.best_score_` secara otomatis untuk penggunaan lanjutan.

Sebagai peneliti, penting untuk mencatat bahwa meskipun mekanismenya bersifat deterministik dan mudah direproduksi, keberhasilan Grid Search sangat bergantung pada presisi dalam mendefinisikan granularity nilai hyperparameter. Pemilihan rentang yang terlalu lebar akan membuang sumber daya komputasi pada wilayah yang jelas-jelas suboptimal, sedangkan rentang yang terlalu sempit berisiko melewatkan titik optimum global. Pada slide berikutnya, kita akan mengkaji secara kritis aspek teknis yang melatarbelakangi pemilihan metode ini, khususnya terkait trade-off antara kelengkapan eksplorasi versus beban komputasi yang sering kali menjadi bottleneck dalam pipeline eksperimen skala besar.

### Inti yang Harus Ditekankan

- Grid Search adalah metode exhaustive yang menguji setiap kombinasi hyperparameter secara sistematis dan deterministik, tanpa adanya komponen stokastik dalam penjelajahan ruang pencarian.
- Kompleksitas komputasi mengikuti hukum perkalian kartesian; penambahan dimensi atau granularitas nilai akan meningkatkan jumlah evaluasi secara linear-per-parameter, namun akumulatifnya bersifat eksponensial terhadap total kombinasi.
- Implementasi praktis di scikit-learn memanfaatkan `GridSearchCV` yang mengintegrasiasi manajemen loop kombinasi, cross-validation, dan penyimpanan hasil terbaik dalam satu objek terstruktur.
- Dalam riset data mining, Grid Search berfungsi sebagai baseline reproduktibel yang wajib diimplementasikan terlebih dahulu sebelum merancang eksperimen ablation study atau beralih ke strategi optimisasi adaptif.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana Grid Search beroperasi secara mekanis dan cara mengimplementasikannya dalam pipeline Python, langkah analitis selanjutnya adalah menilai efektivitas metodologisnya dalam konteks eksperimen nyata. Mari kita lanjutkan ke pembahasan mengenai kelebihan dan keterbatasan Grid Search, serta kriteria empiris yang menentukan kapan metode ini layak digunakan atau justru harus digantikan oleh pendekatan yang lebih efisien.

---

## Slide 009 - Grid Search: Kelebihan dan Keterbatasan

### Narasi

Setelah memahami mekanisme kerja Grid Search pada slide sebelumnya, di mana algoritma ini secara eksplisit menguji setiap kombinasi nilai hyperparameter yang telah kita definisikan, langkah selanjutnya adalah mengevaluasi secara kritis apakah pendekatan ini layak digunakan dalam skenario penelitian data mining Anda. Grid Search memiliki karakteristik unik yang menjadikannya populer sebagai baseline, namun juga menyimpan risiko komputasi yang serius jika tidak dikelola dengan hati-hati.

Mari kita bedah keunggulan Grid Search terlebih dahulu. Pertama, algoritma ini sangat sederhana dan mudah dipahami, sehingga ideal untuk tahap exploratory analysis atau ketika peneliti baru ingin memetakan perilaku model terhadap perubahan parameter. Kedua, karena mengeksplorasi ruang pencarian secara sistematis dan lengkap, Grid Search menjamin bahwa tidak ada area yang terlewat selama titik optimal berada tepat pada koordinat grid yang ditentukan. Ketiga, proses evaluasi setiap fold cross-validation bersifat independen, memungkinkan paralelisasi penuh pada lingkungan multi-threading atau cluster HPC tanpa konflik dependensi. Terakhir, sifat deterministiknya memastikan reproduktibilitas hasil eksperimen, sebuah syarat mutlak dalam praktik penelitian ilmiah dan pelaporan ablation study yang transparan.

Di sisi lain, keterbatasan Grid Search justru menjadi penghambat utama ketika skalabilitas menjadi perhatian. Jumlah kombinasi yang harus dievaluasi tumbuh secara eksponensial (combinatorial explosion) seiring penambahan jumlah hyperparameter atau kandidat nilainya. Sebagai contoh praktis, jika Anda menetapkan 10 hyperparameter dengan masing-masing 5 nilai kandidat, total evaluasi yang harus dijalankan adalah perkalian semua nilai tersebut, atau `5^10`, yang setara dengan sekitar 9,7 juta percobaan. Dalam ruang berdimensi tinggi seperti ini, Grid Search menjadi sangat tidak efisien karena banyak kombinasi yang dihasilkan bersifat redundan atau tidak memberikan informasi signifikan terhadap performa model. Lebih lanjut, titik optimal dalam ruang hyperparameter jarang sekali jatuh tepat pada grid yang kita tetapkan; ia sering kali terletak di antara titik-titik grid, sehingga Grid Search berpotensi melewatkan konfigurasi terbaik hanya karena resolusi grid-nya terlalu kasar.

Berdasarkan karakteristik tersebut, Grid Search secara prinsip hanya direkomendasikan untuk ruang pencarian yang sangat kecil, atau ketika biaya komputasi per evaluasi model benar-benar rendah. Ketika Anda bekerja dengan model kompleks yang membutuhkan tuning lebih dari tiga hingga empat parameter, atau ketika anggaran waktu dan GPU terbatas, mengandalkan Grid Search murni akan menghambat iterasi eksperimen dan mengurangi kualitas evidence yang dapat Anda kumpulkan. Oleh karena itu, diperlukan strategi sampling yang lebih adaptif untuk mengalokasikan sumber daya komputasi secara lebih efektif.

### Inti yang Harus Ditekankan

- Grid Search bersifat sistematis, deterministik, dan mudah diparalelkan, menjadikannya pilihan solid untuk ruang pencarian kecil dan kebutuhan reproduktibilitas penelitian.
- Kekuatan sistematisnya berubah menjadi kelemahan fatal melalui combinatorial explosion; pertumbuhan kombinasi bersifat eksponensial, bukan linear.
- Contoh perhitungan `5^10 ≈ 9,7 juta` menunjukkan mengapa Grid Search tidak scalable untuk tuning multi-parameter pada model modern.
- Titik optimal sering berada di antara koordinat grid, sehingga resolusi grid yang kasar berisiko menghasilkan sub-optimal solution.
- Penggunaan Grid Search harus dibatasi pada kasus dengan dimensi rendah atau biaya komputasi minimal; otherwise, beralih ke metode sampling probabilistik.

### Transisi ke Slide Berikutnya

Untuk mengatasi masalah combinatorial explosion dan ketidakefisienan Grid Search pada ruang berdimensi tinggi, kita perlu beralih ke pendekatan yang mengalokasikan evaluasi secara lebih cerdas. Slide berikutnya akan memperkenalkan Random Search, sebuah metode yang mengganti eksplorasi sistematis dengan sampling acak dari distribusi probabilitas, sehingga mampu menemukan konfigurasi mendekati optimal dengan jumlah evaluasi yang jauh lebih sedikit.

---

## Slide 010 - Random Search: Definisi dan Mekanisme

### Narasi

Berbeda dengan pendekatan Grid Search pada slide sebelumnya yang menguji setiap kombinasi secara eksaustif, Random Search memperkenalkan paradigma optimisasi yang lebih strategis dengan memilih kombinasi hyperparameter secara acak dari distribusi probabilitas tertentu. Alih-alih memetakan seluruh ruang pencarian yang bisa tumbuh secara eksponensial, metode ini mengalokasikan sumber daya komputasi ke sejumlah percobaan terbatas, di mana setiap titik evaluasi dipilih secara independen berdasarkan distribusi kontinu atau diskrit yang telah ditentukan oleh peneliti. Pendekatan ini sangat relevan dalam konteks penelitian data mining tingkat lanjut, karena memungkinkan eksplorasi yang lebih fleksibel tanpa terjebak pada struktur grid yang kaku dan boros sumber daya.

Secara mekanistik, Random Search bekerja dengan menarik sampel acak untuk setiap hyperparameter secara terpisah. Jumlah total konfigurasi yang akan dievaluasi dikontrol sepenuhnya melalui parameter `n_iter`, yang berfungsi sebagai budget eksperimen. Dengan cara ini, kita tidak lagi terbebani oleh kelipatan perkalian nilai kandidat, melainkan fokus pada seberapa efektif sampel acak tersebut menangkap area optimal dalam ruang hiperparameter. Dalam praktik pemrograman menggunakan ekosistem Python, implementasinya dapat dilihat pada cuplikan kode berikut:

```python
from sklearn.model_selection import RandomizedSearchCV
import scipy.stats as stats

random_grid = {
    "learning_rate": stats.uniform(0.001, 0.5),
    "max_depth": stats.randint(3, 10)
}
search = RandomizedSearchCV(model, random_grid, n_iter=30, cv=5, random_state=42)
search.fit(X_train, y_train)
```

Pada implementasi tersebut, modul `scipy.stats` digunakan untuk mendefinisikan distribusi pengambilan nilai. `stats.uniform(0.001, 0.5)` mengatur pencarian learning rate secara kontinu antara dua batas tersebut, sedangkan `stats.randint(3, 10)` memastikan max_depth hanya mengambil bilangan bulat dalam rentang tertutup `[3, 10)`. Objek `RandomizedSearchCV` kemudian menerima model dasar, definisi distribusi dalam bentuk dictionary, serta spesifikasi `n_iter=30` yang berarti algoritma akan mengeksekusi tepat tiga puluh kali evaluasi silang (cross-validation) lima lipatan (`cv=5`). Penetapan `random_state=42` menjadi aspek kritis dalam metodologi penelitian reproducible, karena menjamin bahwa urutan sampel acak yang dihasilkan tetap konsisten di setiap eksekusi notebook, sehingga hasil eksperimen dapat diverifikasi ulang oleh reviewer atau peneliti lain.

Meskipun mekanisme dasarnya sederhana, pemilihan distribusi yang tepat mencerminkan kedalaman pemahaman peneliti terhadap karakteristik model yang diteliti. Distribusi uniform cocok ketika kita tidak memiliki prior knowledge mengenai arah pengaruh suatu hyperparameter, sementara distribusi log-uniform atau normal sering digunakan untuk parameter sensitif seperti learning rate atau regularisasi. Konsep ini menjadi fondasi penting sebelum kita membahas mengapa strategi sampling acak justru menunjukkan efisiensi superior ketika diterapkan pada ruang pencarian berdimensi tinggi, yang akan kita bedah pada slide berikutnya.

### Inti yang Harus Ditekankan

- Random Search mengganti eksplorasi eksaustif dengan sampling independen dari distribusi probabilitas, mengubah fokus dari cakupan penuh ke efektivitas anggaran komputasi (`n_iter`).
- Penggunaan `scipy.stats` memungkinkan pendefinisian distribusi kontinu maupun diskrit secara native, memberikan fleksibilitas tinggi dalam merancang ruang pencarian berbasis pengetahuan domain.
- Parameter `random_state` bukan sekadar opsional, melainkan kewajiban metodologis dalam penelitian S2 untuk menjamin reproduktibilitas eksperimen dan validitas ablation study.
- Strategi ini secara inheren siap menghadapi kompleksitas dimensi tinggi, di mana sebagian besar hyperparameter bersifat kurang sensitif, sehingga pemborosan evaluasi pada kombinasi tidak relevan dapat diminimalkan.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana Random Search mendefinisikan dan menjalankan mekanisme sampling acak, langkah selanjutnya adalah menganalisis mengapa pendekatan ini secara matematis dan empiris jauh lebih efisien daripada Grid Search ketika jumlah hyperparameter meningkat drastis. Kita akan melihat ilustrasi konkret bagaimana Random Search mengalihkan prioritas evaluasi ke parameter yang benar-benar berpengaruh, sekaligus meninggalkan parameter yang netral, sehingga menghasilkan rasio temuan konfigurasi optimal yang lebih tinggi dengan budget yang sama.

---

## Slide 011 - Random Search: Efisiensi pada Dimensi Tinggi

### Narasi

Pada slide sebelumnya, kita telah membahas mekanisme dasar Random Search yang bekerja dengan mengambil kombinasi acak dari distribusi nilai hyperparameter, dikendalikan oleh parameter `n_iter` sebagai batas anggaran komputasi. Namun, pertanyaan mendasarnya adalah mengapa pendekatan ini sering kali lebih unggul daripada Grid Search, terutama ketika kita berhadapan dengan ruang pencarian berdimensi tinggi? Jawabannya terletak pada sifat alami hyperparameter dalam model kompleks. Tidak semua hyperparameter memberikan kontribusi yang sama terhadap performa model. Sebagian besar bersifat tidak sensitif atau memiliki rentang pengaruh yang sangat sempit, sementara hanya beberapa hyperparameter kunci yang benar-benar menentukan kinerja akhir algoritma.

Ilustrasi pada slide ini menggambarkan konsep tersebut secara visual. Bayangkan sebuah ruang pencarian dua dimensi di mana sumbu x merepresentasikan hyperparameter yang sangat berpengaruh terhadap akurasi, sedangkan sumbu y merupakan hyperparameter yang hampir tidak mengubah hasil evaluasi. Grid Search akan membagi anggaran komputasinya secara merata ke seluruh sel dalam grid. Akibatnya, ia akan menguji setiap nilai y berulang kali untuk setiap nilai x, sehingga menghabiskan sebagian besar sumber daya hanya untuk mengeksplorasi variasi yang tidak relevan. Sebaliknya, Random Search memilih titik-titik secara independen dari distribusi tertentu. Dengan anggaran `n_iter` yang sama, Random Search secara alami menyebarkan evaluasinya ke lebih banyak nilai unik pada sumbu x yang kritis, sambil secara kebetulan mencoba beberapa nilai berbeda pada sumbu y. 

Secara statistik, strategi ini meningkatkan peluang menemukan konfigurasi yang mendekati optimum. Karena fokus eksplorasi dialihkan dari kombinasi redundan menuju variasi pada parameter yang sensitif, Random Search mampu mencapai performa yang setara atau bahkan lebih baik dengan biaya komputasi yang jauh lebih efisien. Dalam konteks penelitian tingkat magister, pemahaman ini menjadi fondasi metodologis saat merancang eksperimen tuning. Alih-alih mencoba segala kemungkinan secara exhaustif yang justru boros waktu dan daya komputasi, peneliti dapat mengalokasikan budget eksperimen secara cerdas melalui Random Search, lalu memfokuskan analisis ablation study atau fine-tuning lebih lanjut hanya pada wilayah yang menunjukkan potensi terbaik.

### Inti yang Harus Ditekankan

- Di ruang berdimensi tinggi, sebagian besar hyperparameter tidak sensitif terhadap perubahan performa model.
- Grid Search membuang anggaran komputasi pada kombinasi redundan parameter tidak penting.
- Random Search mendistribusikan `n_iter` ke lebih banyak variasi parameter berpengaruh, meningkatkan probabilitas menemukan konfigurasi optimal.
- Pendekatan ini lebih efisien secara komputasi dan disarankan sebagai strategi baseline dalam riset data mining.

### Transisi ke Slide Berikutnya

Untuk memperjelas perbedaan praktis antara kedua metode ini, mari kita lihat perbandingan sistematisnya mulai dari cakupan pencarian, determinisme implementasi, hingga kriteria pemilihan yang tepat. Slide berikutnya akan menyajikan tabel komparasi lengkap antara Grid Search dan Random Search beserta implikasinya dalam praktik penelitian.

---

## Slide 012 - Perbandingan Grid Search vs Random Search

### Narasi

Setelah menjelaskan mengapa Random Search mampu menangani ruang pencarian berdimensi tinggi dengan lebih baik di slide sebelumnya, kita sekarang akan membedah perbandingan sistematis antara Grid Search dan Random Search berdasarkan enam aspek operasional yang menentukan keberhasilan eksperimen. Tabel ini bukan sekadar ringkasan teknis, melainkan panduan pengambilan keputusan dalam merancang protokol tuning hyperparameter yang rigor.

Dari perspektif cakupan pencarian, Grid Search melakukan enumerasi lengkap pada setiap titik grid yang didefinisikan pengguna, sehingga secara teoretis menjamin tidak ada kombinasi yang terlewat. Namun, jaminan ini datang dengan biaya komputasi yang tumbuh secara eksponensial seiring bertambahnya jumlah hyperparameter. Random Search, di sisi lain, menarik sampel secara independen dari distribusi probabilitas (biasanya uniform atau log-uniform) tanpa menjelajahi seluruh ruang kombinatorial. Pada dimensi tinggi, efektivitas Grid Search menurun drastis karena sebagian besar evaluasi terbuang sia-sia pada hyperparameter yang tidak sensitif terhadap fungsi objektif. Random Search mengatasi kelemahan ini dengan mendistribusikan budget evaluasi ke lebih banyak nilai unik per parameter, sehingga meningkatkan peluang menemukan konfigurasi yang mendekati optimal tanpa pemborosan sumber daya.

Aspek determinisme dan reproduktibilitas menjadi pertimbangan kritis dalam konteks penelitian tingkat magister. Grid Search bersifat sepenuhnya deterministik dan menghasilkan output identik pada setiap eksekusi. Random Search, meskipun mengandung unsur stokastik, dapat direproduksi secara sempurna dengan mengunci parameter `random_state` atau `seed` yang konsisten. Standar ini mutlak diperlukan untuk memenuhi prinsip reproducible research, di mana reviewer dan komunitas akademik harus mampu mereplikasi hasil eksperimen Anda. Kedua metode memiliki kompleksitas implementasi yang rendah melalui wrapper `scikit-learn`, namun pemilihan metode harus disesuaikan dengan karakteristik masalah: Grid Search ideal untuk ruang pencarian yang sangat terbatas atau ketika setiap interaksi parameter dianggap vital, sementara Random Search lebih unggul ketika ruang pencarian luas dan dominasi parameter tidak sensitif lebih besar. Perlu diingat bahwa risiko utama Random Search adalah ketidakkonsistenan lokasi sampel relatif terhadap area optimal, yang dapat di mitigasi dengan meningkatkan jumlah iterasi atau menggunakan stratified sampling.

Dalam ekosistem penelitian data mining kontemporer, Random Search umumnya ditetapkan sebagai baseline empiris sebelum menguji algoritma optimasi yang lebih kompleks. Laporan metodologi wajib mencantumkan nilai seed yang digunakan, serta distribusi probabilitas yang dipilih, agar transparansi eksperimen terjaga. Pemahaman mendalam tentang trade-off ini mempersiapkan fondasi yang solid untuk beralih ke pendekatan yang lebih adaptif dan berbasis model.

### Inti yang Harus Ditekankan

- Grid Search menjamin cakupan penuh tetapi mengalami curse of dimensionality, sedangkan Random Search mendistribusikan budget komputasi secara lebih efisien ke parameter yang benar-benar berpengaruh.
- Reproduktibilitas adalah syarat mutlak dalam penelitian; Random Search harus selalu dikunci dengan `random_state` yang tetap dan didokumentasikan secara eksplisit dalam laporan eksperimen.
- Random Search berfungsi sebagai baseline komparatif yang valid dan hemat biaya sebelum menginvestasikan sumber daya pada metode optimasi canggih.

### Transisi ke Slide Berikutnya

Meskipun Random Search menawarkan efisiensi yang jauh lebih baik dibanding Grid Search, mekanisme sampling acaknya masih bersifat stateless dan tidak memanfaatkan informasi dari iterasi sebelumnya. Untuk mengatasi keterbatasan ini dan mencapai konvergensi optimal dengan jumlah evaluasi yang minimal, kita akan mempelajari prinsip dasar Bayesian Optimization yang membangun model probabilistik untuk memandu pencarian secara cerdas dan adaptif.

---

## Slide 013 - Bayesian Optimization: Prinsip Dasar

### Narasi

Setelah membahas perbandingan antara Grid Search dan Random Search pada slide sebelumnya, kita kini beralih ke metode optimisasi hiperparameter yang lebih canggih dan efisien secara komputasi, yaitu Bayesian Optimization. Berbeda dengan pendekatan eksplorasi acak atau grid yang melakukan evaluasi tanpa memori terhadap hasil sebelumnya, Bayesian Optimization dirancang khusus untuk menemukan kombinasi hiperparameter terbaik dengan jumlah evaluasi model yang seminimal mungkin. Dalam konteks penelitian data mining tingkat magister, hal ini sangat krusial karena setiap kali melatih model kompleks seperti deep learning atau ensemble besar, biaya komputasi sering kali menjadi penghalang utama yang harus dioptimalkan.

Secara prinsip dasar, Bayesian Optimization bekerja dengan membangun sebuah model probabilistik yang memetakan ruang pencarian hiperparameter ke performa model. Seperti yang terlihat pada diagram alur pada slide ini, prosesnya dimulai dari pemilihan titik hiperparameter tertentu yang kemudian dievaluasi menggunakan model aktual. Hasil evaluasi tersebut tidak hanya memberikan nilai performa tunggal, tetapi digunakan untuk memperbarui sebuah *surrogate model*. Surrogate model inilah yang berfungsi sebagai proksi atau pendugaan terhadap fungsi objektif yang sebenarnya. Berdasarkan pembaruan informasi dari setiap *trial*, sebuah *acquisition function* akan menghitung dan menentukan titik hiperparameter berikutnya yang paling menjanjikan untuk dievaluasi, sehingga siklus pencarian menjadi semakin terarah dan adaptif.

Dalam kerangka kerja ini, proses pelatihan dan evaluasi model diperlakukan sebagai sebuah *black-box function*. Artinya, kita tidak memerlukan pengetahuan tentang gradien, turunan, atau struktur analitik internal dari fungsi tersebut; kita hanya membutuhkan input (hiperparameter) dan output (skor validasi). Pendekatan ini menjadikan Bayesian Optimization sangat ideal untuk fungsi-fungsi yang mahal secara komputasi (*expensive-to-evaluate*), seperti pelatihan model machine learning skala besar atau fine-tuning foundation model. Dengan memanfaatkan ketidakpastian (*uncertainty*) dan prediksi performa dari surrogate model, algoritma ini secara cerdas menyeimbangkan eksplorasi area baru dan eksploitasi area yang sudah diketahui berkinerja baik, sehingga menghemat sumber daya komputasi secara signifikan dibandingkan metode brute-force.

### Inti yang Harus Ditekankan

- Bayesian Optimization menggunakan model probabilistik (*surrogate model*) untuk memprediksi performa hiperparameter, menghindari evaluasi menyeluruh pada seluruh ruang pencarian.
- Evaluasi model diperlakukan sebagai *black-box function*, sehingga metode ini tidak memerlukan asumsi konveksitas atau ketersediaan gradien, cocok untuk fungsi pelatihan yang kompleks dan mahal.
- Mekanisme umpan balik (*feedback loop*) antara *surrogate model* dan *acquisition function* memungkinkan pencarian terarah dengan jumlah evaluasi minimum, menjadikannya standar industri untuk AutoML dan tuning model skala besar.

### Transisi ke Slide Berikutnya

Untuk memahami bagaimana mekanisme ini bekerja secara teknis, kita perlu mendalami dua komponen inti yang membentuk siklus Bayesian Optimization, yaitu *surrogate model* yang bertugas memodelkan distribusi probabilitas performa, serta *acquisition function* yang mengatur strategi pengambilan sampel berikutnya. Mari kita bahas detail implementasi, karakteristik matematis, dan contoh penggunaan kedua komponen tersebut pada slide selanjutnya.

---

## Slide 014 - Bayesian Optimization: Surrogate Model dan Acquisition Function

### Narasi

Pada slide sebelumnya, kita telah membahas bahwa Bayesian Optimization bekerja dengan memodelkan fungsi objektif sebagai black-box yang mahal untuk dievaluasi. Untuk mengatasi tantangan komputasi tersebut, algoritma ini mengandalkan dua komponen inti yang saling bergantung: surrogate model dan acquisition function. Keduanya berperan sebagai mekanisme penggerak utama yang memungkinkan pencarian hyperparameter dilakukan secara cerdas, terarah, dan efisien.

Surrogate model berfungsi sebagai proxy statistik yang menggantikan proses evaluasi model asli yang memakan waktu. Alih-alih menjalankan training berulang kali pada setiap kombinasi parameter, surrogate model memperkirakan dua besaran fundamental pada setiap titik dalam ruang pencarian: nilai mean performa dan tingkat ketidakpastian (uncertainty) di sekitarnya. Estimasi ketidakpastian ini sangat krusial karena memberikan informasi kuantitatif mengenai kepercayaan prediksi algoritma. Implementasi surrogate model dapat menggunakan berbagai pendekatan, mulai dari Gaussian Process yang secara alami menghasilkan estimasi mean dan varians, hingga Random Forest yang toleran terhadap noise, atau Tree Parzen Estimator (TPE) yang banyak diadopsi karena efisiensinya dalam menangani campuran ruang pencarian diskrit dan kontinu.

Di sisi lain, acquisition function bertindak sebagai aturan keputusan yang menentukan titik hyperparameter mana yang harus dievaluasi berikutnya. Fungsi ini dirancang secara matematis untuk menyeimbangkan dua dinamika pencarian yang sering kali bertolak belakang: eksplorasi dan eksploitasi. Eksploitasi berfokus pada mengevaluasi wilayah di sekitar titik yang sudah terbukti memiliki performa tinggi, sementara eksplorasi mendorong algoritma untuk menjelajahi area dengan ketidakpastian besar, meskipun prediksinya belum optimal. Contoh implementasi yang umum meliputi Expected Improvement (EI) yang memaksimalkan peluang peningkatan performa relatif terhadap best-so-far, serta Upper Confidence Bound (UCB) yang menggabungkan mean prediksi dan standar deviasi untuk menjaga keseimbangan antara risiko dan potensi gain.

Proses ini berjalan secara iteratif dan adaptif. Setiap kali satu trial evaluasi selesai, hasil aktual performa model ditambahkan ke dalam basis observasi. Surrogate model kemudian diperbarui dengan data terbaru ini, sehingga distribusi probabilitasnya menjadi lebih presisi. Pembaruan berkelanjutan ini menyebabkan ruang pencarian semakin menyempit ke region yang menjanjikan, mengurangi area yang tidak relevan, dan akhirnya mencapai konvergensi optimal dengan jumlah trial yang jauh lebih sedikit dibandingkan metode brute-force.

### Inti yang Harus Ditekankan

- Surrogate model tidak hanya memprediksi nilai rata-rata performa, tetapi juga mengkuantifikasi ketidakpastian (varians) di setiap titik, yang menjadi fondasi pengambilan keputusan selanjutnya.
- Acquisition function adalah mekanisme penyeimbang strategis antara eksplorasi wilayah belum terjamah dan eksploitasi wilayah berkinerja tinggi, yang menentukan efisiensi keseluruhan algoritma.
- Sifat iteratif pembaruan surrogate model membuat Bayesian Optimization semakin terarah seiring bertambahnya trial, sehingga cocok untuk konteks penelitian yang menuntut hemat biaya komputasi namun tetap rigor.

### Transisi ke Slide Berikutnya

Setelah memahami mekanisme kerja kedua komponen ini, kita akan beralih ke analisis komparatif mengenai kelebihan dan keterbatasan praktis Bayesian Optimization, serta kriteria eksperimental yang menentukan kapan metode ini seharusnya dipilih dalam pipeline penelitian Anda.

---

## Slide 015 - Kelebihan Bayesian Optimization dan Kapan Menggunakannya

### Narasi

Setelah membahas mekanisme kerja *surrogate model* dan *acquisition function* pada slide sebelumnya, kita kini perlu mengevaluasi secara kritis kapan pendekatan Bayesian Optimization benar-benar memberikan nilai tambah metodologis dalam konteks penelitian data mining. BO bukanlah algoritma serba guna, melainkan strategi optimisasi yang sangat sensitif terhadap karakteristik ruang pencarian dan ketersediaan sumber daya komputasi.

Dari sisi keunggulan, Bayesian Optimization menunjukkan efisiensi yang signifikan ketika ruang hiperparameter bersifat multidimensi dan setiap evaluasi model memerlukan waktu yang cukup lama, mulai dari beberapa menit hingga berjam-jam. Karena sifatnya yang probabilistik, metode ini mampu mengintegrasikan *prior knowledge* mengenai distribusi parameter yang diharapkan, sehingga jumlah trial yang diperlukan jauh lebih hemat dibandingkan pendekatan acak seperti Random Search. Kemampuan inherennya dalam mengelola keseimbangan antara eksplorasi wilayah baru dan eksploitasi wilayah yang sudah menjanjikan menjadikan proses pencarian lebih terarah dan stabil.

Namun, sebagai peneliti tingkat magister, kita harus secara sadar mengakui keterbatasan teknisnya. Setiap iterasi BO memerlukan overhead komputasi untuk memperbarui *surrogate model* dan menghitung nilai *acquisition function*, yang justru menjadi tidak efisien jika evaluasi model berjalan sangat cepat (hanya dalam hitungan detik). Selain itu, hasil optimisasi cenderung bervariasi antar *run* karena sangat bergantung pada inisialisasi awal atau *initial seeding*. Dalam praktik penelitian yang menuntut reproduktibilitas tinggi, hal ini mengharuskan kita untuk selalu menetapkan *random seed* yang konsisten dan melaporkan konfigurasi inisialisasi secara transparan di laporan eksperimen.

Secara praktis, Bayesian Optimization paling tepat diterapkan ketika kita menghadapi pelatihan model yang memakan waktu menengah, memiliki jumlah hiperparameter moderat sekitar lima hingga dua puluh dimensi, dan dibatasi oleh anggaran komputasi yang ketat. Ketika ketiga kondisi ini terpenuhi, biaya komputasi untuk memilih titik berikutnya akan terbayar oleh pengurangan drastis jumlah total trial yang dibutuhkan. Pemahaman mendalam mengenai konteks penerapan ini menjadi prasyarat penting sebelum kita beralih ke implementasi otomasi modern yang lebih fleksibel.

### Inti yang Harus Ditekankan

- Bayesian Optimization unggul saat evaluasi model mahal/waktu lama dan ruang pencarian luas, namun kehilangan efisiensi jika evaluasi terlalu cepat.
- Metode ini mengurangi jumlah trial secara signifikan dibanding Random Search, tetapi menghasilkan variasi antar run yang menuntut kontrol *seed* ketat untuk reproduktibilitas penelitian.
- Penggunaan optimal terjadi pada rentang hiperparameter sedang (5–20 dimensi) dengan anggaran komputasi terbatas, menjadikannya pilihan strategis sebelum beralih ke framework HPO berbasis *define-by-run*.

### Transisi ke Slide Berikutnya

Memahami kapan dan mengapa Bayesian Optimization efektif membuka jalan bagi implementasinya dalam ekosistem perangkat lunak modern. Pada slide berikutnya, kita akan mempelajari Optuna, sebuah framework Python yang mengimplementasikan prinsip-prinsip ini melalui pendekatan *define-by-run* lengkap dengan fitur *pruning* dan visualisasi yang mendukung desain eksperimen yang lebih robust.

---

## Slide 016 - Optuna: Framework Hyperparameter Optimization Modern

### Narasi

Setelah membahas kelebihan dan batasan Bayesian Optimization pada slide sebelumnya, kita beralih ke implementasi praktisnya melalui salah satu framework optimisasi hyperparameter paling dominan di ekosistem Python, yaitu Optuna. Berbeda dengan pendekatan konvensional yang memisahkan deklarasi ruang pencarian dari proses evaluasi model, Optuna mengadopsi arsitektur **define-by-run**. Dalam paradigma ini, struktur hyperparameter tidak didefinisikan secara statis sebelum pelatihan dimulai, melainkan dibangun secara dinamis selama eksekusi fungsi objektif berjalan. Pendekatan ini memberikan fleksibilitas tinggi bagi peneliti, terutama ketika diperlukan logika kondisional atau hierarki dalam pemilihan parameter, seperti menentukan jenis kernel SVM hanya jika algoritma yang digunakan adalah SVM, atau menyesuaikan learning rate berdasarkan epoch tertentu.

Secara internal, Optuna menggunakan **TPE sampler** (Tree-structured Parzen Estimator) sebagai metode default untuk melakukan inferensi Bayesian. TPE bekerja dengan memodelkan dua distribusi probabilitas terpisah: satu untuk kombinasi hyperparameter yang menghasilkan skor performa tinggi, dan satu lagi untuk yang berperforma rendah. Dengan membandingkan kedua distribusi tersebut, sampler secara cerdas mengusulkan titik pencarian berikutnya yang menyeimbangkan eksplorasi ruang parameter dan eksploitasi area yang sudah terbukti menjanjikan. Selain mekanisme sampling, Optuna dilengkapi fitur **pruning** yang sangat vital untuk efisiensi komputasi. Pruning memantau progres setiap trial secara real-time dan secara otomatis menghentikan iterasi yang terlihat stagnan atau performanya jauh melenceng dari baseline, sehingga sumber daya GPU/CPU dapat dialihkan ke trial yang lebih potensial.

Dalam hal interoperabilitas, Optuna dirancang agar ringan dan mudah diintegrasikan ke dalam pipeline machine learning yang sudah ada. Framework ini mendukung integrasi native dengan berbagai library populer seperti scikit-learn, XGBoost, LightGBM, hingga PyTorch dan TensorFlow, tanpa mengharuskan pengguna mengubah arsitektur model atau prosedur training standar. Untuk aspek monitoring dan analisis hasil eksperimen, Optuna menyediakan modul visualisasi bawaan yang sangat informatif. Fungsi `plot_optimization_history` merekam jejak penurunan nilai metrik sepanjang proses pencarian, membantu peneliti menilai stabilitas konvergensi. Sementara itu, `plot_param_importances` mengkuantifikasi pengaruh relatif masing-masing hyperparameter terhadap performa akhir, yang menjadi alat diagnostik penting dalam tahap ablation study atau analisis sensitivitas model. Kontrol eksekusi dilakukan melalui `study.optimize`, yang memungkinkan peneliti menetapkan batas pencarian berdasarkan jumlah iterasi (`n_trials`) atau durasi waktu (`timeout`), memberikan fleksibilitas manajemen budget komputasi yang presisi.

Mari kita bedah contoh kode yang ditampilkan pada slide ini untuk memahami alur kerja teknis Optuna. Kita memulai dengan mendefinisikan fungsi `objective(trial)` yang menerima objek `trial` sebagai input. Di dalamnya, `trial.suggest_float("x", -10, 10)` dan `trial.suggest_float("y", -10, 10)` berfungsi sebagai penanda bahwa variabel `x` dan `y` merupakan hyperparameter yang akan dieksplorasi dalam rentang kontinu tertentu. Setiap kali trial dijalankan, sampler Optuna akan mengisi nilai `x` dan `y` secara acak namun terarah berdasarkan aturan TPE. Fungsi ini kemudian mengembalikan nilai matematika `(x - 2) ** 2 + (y + 3) ** 2` sebagai target skalar yang ingin diminimalkan. Langkah selanjutnya, `optuna.create_study(direction="minimize")` menginisialisasi objek studi dengan instruksi optimisasi menuju nilai minimum. Perintah `study.optimize(objective, n_trials=50)` menjalankan loop pencarian sebanyak 50 iterasi, dan setelah proses selesai, `study.best_params` akan mengekstrak dan mencetak pasangan nilai `x` dan `y` yang berhasil meminimalkan fungsi target tersebut.

### Inti yang Harus Ditekankan

- Konsep **define-by-run** memberikan fleksibilitas struktural yang tidak dimiliki framework HPO tradisional, memungkinkan logika pencarian yang adaptif dan kondisional.
- Kombinasi **TPE sampler** dan **pruning** menjadikan Optuna sangat efisien secara komputasi, cocok untuk eksperimen S2 yang membutuhkan penghematan resource tanpa mengorbankan kualitas pencarian.
- Modul visualisasi dan integrasi multipython-ml-library memudahkan replikasi eksperimen, pelacakan jejak penelitian, serta analisis dampak hyperparameter terhadap generalisasi model.

### Transisi ke Slide Berikutnya

Contoh matematis di atas hanyalah fondasi sintaksis dasar. Pada slide berikutnya, kita akan mendalami penggunaan API spesifik seperti `suggest_int` dan `suggest_categorical`, serta menerapkannya secara langsung pada studi kasus optimisasi hyperparameter Random Forest menggunakan cross-validation, yang lebih mencerminkan praktik penelitian data mining sesungguhnya.

---

## Slide 017 - Optuna: API Dasar dan Studi Kasus

### Narasi

Pada slide sebelumnya, kita telah membahas arsitektur dasar Optuna beserta implementasinya pada fungsi matematika sederhana dengan arah optimasi minimisasi. Kini, kita akan menggeser fokus ke aplikasi praktis dalam konteks machine learning nyata, khususnya pengoptimalan hyperparameter untuk model klasifikasi Random Forest. Implementasi ini menunjukkan bagaimana Optuna berintegrasi secara native dengan ekosistem Python, memungkinkan peneliti dan praktisi data mining untuk melakukan pencarian ruang parameter secara sistematis tanpa perlu menulis loop evaluasi manual yang repetitif.

Mari kita bedah struktur kode pada fungsi `objective(trial)`. Di dalamnya, kita mendefinisikan ruang pencarian menggunakan tiga metode API utama Optuna: `suggest_int`, `suggest_float`, dan `suggest_categorical`. Untuk kasus ini, `n_estimators` diset sebagai integer antara 50 hingga 300, `max_depth` antara 3 hingga 20, dan `min_samples_split` antara 2 hingga 10. Sementara itu, `criterion` menggunakan `suggest_categorical` karena nilainya bersifat diskrit dan tidak berurutan, yaitu pilihan antara `"gini"` atau `"entropy"`. Setiap kali Optuna menjalankan satu trial, ia akan memanggil fungsi ini dan menerima nilai spesifik dari masing-masing parameter tersebut melalui objek `trial` yang diteruskan secara implisit.

Setelah ruang parameter terdefinisi, kode proceeds ke inisialisasi model `RandomForestClassifier(**params, random_state=42)`. Penggunaan unpacking dictionary `**params` sangat efisien karena meneruskan seluruh hyperparameter yang diusulkan Optuna secara dinamis ke konstruktor scikit-learn. Selanjutnya, performa model dievaluasi menggunakan `cross_val_score` dengan konfigurasi 5-fold cross-validation dan metrik `"f1_macro"`. Nilai rata-rata skor F1 Macro dikembalikan sebagai sinyal umpan balik ke Optuna. Pemilihan `random_state=42` dan penggunaan cross-validation bukan hanya praktik standar, tetapi juga krusial untuk menjamin stabilitas hasil eksperimen dan mengurangi varians akibat pembagian data acak, sehingga proses tuning lebih mencerminkan generalisasi model sebenarnya.

Bagian akhir kode mengatur konfigurasi study melalui `optuna.create_study(direction="maximize")`. Berbeda dengan contoh sebelumnya yang meminimalkan error, di sini kita memaksimalkan skor kinerja. Perintah `study.optimize(objective, n_trials=30)` kemudian memicu eksekusi sebanyak 30 iterasi. Selama proses ini, sampler bawaan Optuna (TPE) akan menganalisis distribusi parameter dari trial-trial sebelumnya untuk mengusulkan kombinasi parameter yang paling menjanjikan secara adaptif. Pendekatan ini jauh lebih efisien dibandingkan grid search atau random search, terutama ketika dimensi ruang parameter meningkat dan biaya komputasi per trial cukup signifikan.

Dalam konteks penelitian tingkat magister, pemahaman mendalam tentang cara kerja API dasar Optuna menjadi fondasi sebelum beralih ke integrasi lanjutan dengan framework gradient boosting atau neural networks. Penempatan `direction` yang tepat sesuai dengan metrik evaluasi, serta definisi ruang pencarian yang realistis berdasarkan domain knowledge, akan menentukan keberhasilan eksplorasi hyperparameter. Selain itu, mekanisme sampling otomatis ini membuka peluang untuk melakukan ablation study dan analisis sensitivitas parameter secara lebih terstruktur, yang merupakan komponen penting dalam metodologi penelitian data mining modern.

### Inti yang Harus Ditekankan

- Metode `suggest_int`, `suggest_float`, dan `suggest_categorical` adalah inti dari pendefinisian ruang pencarian (search space) yang harus disesuaikan dengan tipe, skala, dan batasan algoritmik setiap hyperparameter.
- Arah optimasi (`direction`) harus selalu sinkron dengan metrik evaluasi; maksimisasi untuk akurasi/F1/AUC, dan minimisasi untuk loss, MSE, atau error rates.
- Penggunaan `random_state` dan `cross_val_score` dalam objective function wajib dilakukan untuk memastikan bahwa setiap trial dinilai berdasarkan generalisasi model, bukan overfitting terhadap split data tertentu.
- Jumlah `n_trials` merupakan trade-off antara kedalaman eksplorasi dan budget komputasi; penentuan nilai ini harus didasarkan pada estimasi waktu per trial dan kompleksitas dataset yang digunakan.

### Transisi ke Slide Berikutnya

Setelah memahami cara mendefinisikan ruang parameter dan mengevaluasi model berbasis scikit-learn, langkah selanjutnya adalah mengintegrasikan Optuna dengan model yang memerlukan kontrol training lebih halus, seperti XGBoost. Kita akan melihat bagaimana callback pruning dan early stopping dapat dipadukan dengan Optuna untuk menghentikan trial yang stagnan lebih cepat, sehingga mengoptimalkan penggunaan sumber daya komputasi selama proses AutoML.

---

## Slide 018 - Optuna: Integrasi dengan Model Machine Learning

### Narasi

Pada slide sebelumnya, kita telah mempelajari penggunaan dasar API Optuna untuk mengoptimalkan model Random Forest secara konvensional. Namun, dalam praktik data mining tingkat lanjut, banyak algoritma modern—khususnya ensemble berbasis gradient boosting seperti XGBoost, LightGBM, atau CatBoost—yang melatih model secara iteratif dan mendukung mekanisme penghentian dini (*early stopping*) serta *pruning*. Di sinilah keunggulan Optuna benar-benar terwujud ketika diintegrasikan langsung ke dalam siklus pelatihan model, bukan hanya sebagai pengatur hyperparameter statis.

Perhatikan implementasi kode pada slide ini. Kita mengimpor `XGBoostPruningCallback` dari modul integrasi resmi Optuna. Dalam fungsi objektif, ruang pencarian dirancang dengan parameter kunci seperti `max_depth`, `subsample`, dan `learning_rate` yang menggunakan skala logaritma (`log=True`). Penggunaan skala log sangat direkomendasikan untuk learning rate karena perubahan orde magnitudo (misalnya dari 0.01 ke 0.1) memiliki dampak non-linear terhadap konvergensi dan stabilitas model boosting. Setelah objek `DMatrix` dibuat, kita menginisialisasi callback pruning yang memantau metrik evaluasi spesifik, dalam contoh ini adalah `"validation-auc"`. Callback ini kemudian diteruskan ke fungsi `xgb.train()` bersama dengan `early_stopping_rounds=10`. Mekanisme ini memungkinkan XGBoost menghentikan pelatihan jika skor validasi tidak membaik selama 10 iterasi berturut-turut, sekaligus memberi sinyal kepada Optuna bahwa trial tersebut dapat dihentikan lebih awal jika performanya buruk. Nilai yang dikembalikan oleh fungsi objektif adalah `model.best_score`, yang menjamin bahwa metrik evaluasi tetap merefleksikan performa puncak model sebelum proses penghentian terjadi.

Konsep *pruning* ini merupakan komponen kritis dalam optimasi hyperparameter berskala besar, terutama untuk konteks penelitian tingkat magister. Tanpa pruning, setiap trial wajib menjalankan seluruh iterasi hingga selesai meskipun kombinasi parameter yang dicoba jelas-jelas tidak menjanjikan. Dengan mengaktifkan pruning, Optuna dapat mendeteksi trial yang stagnan atau menurun sejak fase awal, lalu menghentikannya secara otomatis. Hal ini secara drastis mengurangi beban komputasi, menghemat waktu eksekusi, dan memungkinkan peneliti menjadwalkan lebih banyak kombinasi hyperparameter dalam *budget* komputasi yang sama. Efisiensi ini sangat vital saat melakukan eksplorasi ruang pencarian yang luas, ablation study, atau validasi silang berulang tanpa menghabiskan sumber daya infrastruktur secara berlebihan.

### Inti yang Harus Ditekankan

- Pruning callback memungkinkan penghentian dini trial yang tidak menjanjikan, sehingga mengoptimalkan penggunaan budget komputasi dan mempercepat proses eksperimen.
- Integrasi Optuna dengan model iteratif memanfaatkan `early_stopping_rounds` dan metrik validasi khusus untuk monitoring performa secara real-time selama pelatihan.
- Penggunaan skala logaritma pada parameter sensitif seperti `learning_rate` penting karena model boosting sangat peka terhadap perubahan orde magnitudo nilai.
- Pengembalian `model.best_score` menjamin akurasi metrik evaluasi meskipun trial dihentikan lebih awal, mencegah bias terhadap model yang belum konvergen penuh.

### Transisi ke Slide Berikutnya

Kemampuan Optuna untuk berintegrasi secara native dengan berbagai model, callback, dan metrik evaluasi ini sebenarnya hanyalah salah satu blok bangunan dari ekosistem yang lebih besar. Jika kita kumpulkan semua komponen ini—mulai dari preprocessing otomatis, seleksi fitur, pemilihan model, hingga optimasi hyperparameter yang cerdas—maka kita akan memahami bagaimana konsep AutoML bekerja secara holistik. Mari kita bahas definisi dan alur kerja lengkap dari AutoML pada slide berikutnya.

---

## Slide 019 - AutoML: Definisi dan Alur Kerja

### Narasi

AutoML atau Automated Machine Learning merupakan pendekatan sistematis yang mengotomasi sebagian besar atau seluruh pipeline machine learning, mulai dari persiapan data hingga penyajian model akhir. Berbeda dengan praktik konvensional di mana peneliti harus secara manual memilih algoritma, menyesuaikan preprocessing, dan melakukan tuning hyperparameter satu per satu, AutoML dirancang untuk menjalankan proses ini secara berurutan, adaptif, dan terukur. Jika pada slide sebelumnya kita membahas bagaimana Optuna mengintegrasikan prunning dan early stopping untuk efisiensi pencarian, maka dalam konteks AutoML, mekanisme tersebut menjadi salah satu subsistem yang berjalan otomatis di dalam alur kerja yang lebih luas dan terstruktur.

Alur kerja AutoML dapat dipahami sebagai rangkaian tahapan bertingkat yang saling terhubung. Dimulai dari raw data, sistem secara otomatis menangani missing values, encoding variabel kategorikal, dan scaling numerik sesuai dengan distribusi data. Tahap selanjutnya adalah feature engineering atau seleksi fitur, di mana framework akan mengevaluasi kombinasi transformasi dan subset fitur yang paling informatif berdasarkan kriteria statistik atau importance score. Setelah representasi data siap, proses beralih ke model selection, dimana berbagai algoritma seperti tree-based methods, linear models, atau neural networks dieksplorasi secara paralel. Di sinilah hyperparameter optimization berperan sebagai inti penggerak performa; sistem akan melakukan pencarian konfigurasi terbaik menggunakan strategi seperti Bayesian optimization, grid search adaptif, atau evolutionary algorithms. Hasil dari beberapa model yang telah dioptimalkan kemudian digabungkan melalui teknik ensemble atau stacking untuk meningkatkan stabilitas dan generalisasi, sebelum akhirnya menghasilkan final model yang siap di-deploy atau dianalisis lebih lanjut.

Penting untuk dicatat bahwa optimasi hyperparameter hanyalah salah satu komponen inti dalam ekosistem AutoML, meskipun memiliki dampak terbesar terhadap capaian akurasi. Berbagai framework modern seperti AutoGluon, Auto-sklearn, H2O AutoML, dan FLAML telah mengimplementasikan alur ini dengan arsitektur yang berbeda-beda, namun tetap berpegang pada prinsip dasar yang sama: mengurangi beban komputasi manual tanpa mengorbankan rigoritas ilmiah. Dalam konteks penelitian jenjang magister, AutoML tidak dimaksudkan untuk menggantikan peran peneliti, melainkan berfungsi sebagai akselerator untuk membangun strong baseline secara cepat, konsisten, dan adil. Hal ini memungkinkan tim riset untuk mengalihkan fokus dari pekerjaan repetitif menuju analisis error, ablation study, robustness analysis, dan perumusan hipotesis yang lebih mendalam.

### Inti yang Harus Ditekankan

- AutoML mengotomasi seluruh pipeline machine learning secara terintegrasi, bukan hanya bagian tertentu.
- Optimasi hyperparameter merupakan komponen krusial yang menghubungkan pemilihan model dengan pencapaian performa optimal.
- Framework seperti AutoGluon, Auto-sklearn, H2O AutoML, dan FLAML menyediakan infrastruktur siap pakai untuk eksplorasi cepat.
- Dalam riset akademik, AutoML berfungsi sebagai pembangun baseline yang kuat dan metodologis, bukan pengganti keputusan strategis peneliti.

### Transisi ke Slide Berikutnya

Untuk memahami secara operasional bagaimana alur tersebut diwujudkan, pada slide berikutnya kita akan menguraikan masing-masing komponen dalam toolbox AutoML beserta fungsinya, serta menegaskan kembali bahwa intervensi manusia tetap menjadi fondasi utama dalam menentukan problem, dataset, metrik evaluasi, dan batas budget eksperimen.

---

## Slide 020 - Komponen AutoML dan Toolbox

### Narasi

Pada slide sebelumnya, kita telah membahas alur kerja otomatisasi dalam AutoML yang mencakup tahapan dari raw data hingga menghasilkan model final. Slide ini akan mengurai lebih detail setiap komponen kunci yang membentuk pipeline tersebut, karena pemahaman terhadap masing-masing tahap sangat krusial bagi peneliti tingkat magister yang ingin merancang eksperimen secara metodologis.

Mari kita bedah tabel komponen AutoML satu per satu. Pertama, **Data preprocessing** bertugas menangani masalah kualitas data seperti missing values, encoding variabel kategorikal, serta deteksi dan penanganan outlier. Kedua, **Feature engineering** melakukan transformasi data menjadi representasi yang lebih informatif, baik melalui pembuatan fitur baru maupun seleksi fitur untuk mengurangi dimensi dan noise. Ketiga, **Model selection** merupakan proses memilih algoritma machine learning yang paling sesuai dengan karakteristik dataset dan jenis masalah yang dihadapi. Keempat, **Hyperparameter optimization** mencari konfigurasi parameter terbaik secara sistematis untuk memaksimalkan performa model. Kelima, **Ensemble** menggabungkan prediksi dari beberapa model untuk meningkatkan stabilitas dan akurasi. Keenam, **Evaluation** memastikan pemilihan model akhir didasarkan pada skor validasi yang objektif dan konsisten. Terakhir, **Termination** mengatur kapan proses pencarian dihentikan, biasanya berdasarkan batasan komputasi atau waktu yang telah ditetapkan.

Penting untuk dipahami bahwa AutoML tidak sepenuhnya menggantikan peran manusia. Dalam konteks penelitian, peneliti tetap memegang kendali penuh dalam mendefinisikan **problem**, menyiapkan **dataset** yang relevan, menentukan **metric** evaluasi yang tepat, serta menetapkan **budget** komputasi yang realistis. AutoML berfungsi sebagai akselerator yang membantu membangun **strong baseline** secara cepat, adil, dan reproducible, sehingga fokus penelitian dapat dialihkan dari tuning manual yang repetitif menuju analisis mendalam, ablation study, dan inovasi metode baru.

Secara ringkas, keberhasilan penerapan AutoML sangat bergantung pada bagaimana komponen-komponen di atas diintegrasikan dengan tujuan penelitian. Dengan memanfaatkan toolbox modern, peneliti dapat menghemat waktu eksplorasi awal dan memastikan bahwa setiap klaim kinerja model memiliki dasar perbandingan yang kuat dan transparan.

### Inti yang Harus Ditekankan

- Setiap komponen dalam pipeline AutoML memiliki fungsi spesifik yang saling berkesinambangan, mulai dari pembersihan data hingga penghentian pencarian berdasarkan budget yang ditetapkan.
- AutoML bersifat *human-in-the-loop*; peneliti wajib mendefinisikan problem, dataset, metric, dan budget agar hasil eksperimen valid, adil, dan dapat direproduksi.
- Pemanfaatan toolbox AutoML bertujuan utama untuk membangun *strong baseline* secara cepat, memungkinkan peneliti fokus pada novelty, error analysis, dan kontribusi ilmiah.

### Transisi ke Slide Berikutnya

Setelah memahami komponen dan filosofi di balik AutoML, kita akan melihat implementasinya secara praktis melalui salah satu toolbox terdepan untuk data tabular, yaitu AutoGluon.

---

## Slide 021 - AutoGluon: AutoML untuk Data Tabular

### Narasi

Setelah membahas komponen-komponen fundamental dalam pipeline AutoML pada slide sebelumnya, kita kini akan mengupas salah satu implementasi paling matang dan berpengaruh di ekosistem Python, yaitu AutoGluon. Dikembangkan oleh AWS Research, library ini secara spesifik dioptimalkan untuk menangani data tabular, yang merupakan representasi data paling dominan dalam riset data mining maupun aplikasi industri. Berbeda dengan framework AutoML generik yang mencoba menjangkau berbagai modalitas data, AutoGluon mendalami karakteristik struktur tabel untuk menghadirkan performa state-of-the-art tanpa menuntut keahlian mendalam dalam tuning manual.

Keunggulan teknis AutoGluon terletak pada tingkat otomatisasinya yang komprehensif namun tetap dapat dipertanggungjawabkan. Secara internal, library ini secara otomatis mengelola preprocessing dan pembersihan data, meliputi imputasi missing values, transformasi variabel kategorikal, normalisasi numerik, serta deteksi dan penanganan outlier. Lebih jauh, AutoGluon tidak bergantung pada single-model approach; ia secara paralel melatih beragam algoritma dari berbagai keluarga, mulai dari gradient boosting (XGBoost, LightGBM, CatBoost), generalized linear models, hingga neural network yang diadaptasi khusus untuk data tabular. Performa masing-masing model kemudian digabungkan melalui mekanisme multi-layer stack ensemble, yang secara signifikan meningkatkan stabilitas prediksi dan mengurangi varians dibandingkan pendekatan konvensional. Untuk memudahkan peneliti memantau hasil, AutoGluon menyediakan method `predictor.leaderboard()` yang menampilkan ranking lengkap beserta skor validasi setiap model yang berhasil dilatih selama proses pencarian.

Dari perspektif metodologi penelitian jenjang magister, efisiensi yang ditawarkan AutoGluon memiliki implikasi strategis. Kompleksitas pipeline yang biasanya menghabiskan waktu pengujian berhari-hari dapat direduksi menjadi hanya beberapa baris kode Python. Hal ini memungkinkan peneliti untuk mengalokasikan sumber daya komputasi dan waktu secara lebih optimal: alih-alih terjebak dalam trial-and-error hyperparameter, fokus penelitian dapat dialihkan ke analisis error, ablation study, validasi silang yang ketat, atau pengembangan metode usulan baru. Dengan demikian, AutoGluon berperan sebagai alat strategis untuk membangun strong baseline yang konsisten, terstandarisasi, dan mudah direproduksi, sehingga klaim kontribusi ilmiah dapat dibandingkan secara adil terhadap referensi yang solid.

### Inti yang Harus Ditekankan

- AutoGluon adalah framework AutoML khusus tabular yang mengotomatisasi seluruh tahap preprocessing, pelatihan multi-model, dan penggabungan hasil melalui multi-layer stack ensemble.
- Method `predictor.leaderboard()` memberikan transparansi penuh terhadap kinerja setiap model yang dihasilkan, memudahkan peneliti dalam menyeleksi dan memvalidasi baseline awal.
- Efisiensi kode dan kecepatan eksekusi menjadikan AutoGluon ideal untuk riset akademik, memungkinkan mahasiswa dan peneliti fokus pada inovasi metodologis daripada repetisi tuning manual.

### Transisi ke Slide Berikutnya

Untuk melihat bagaimana keunggulan-keunggulan tersebut diterjemahkan ke dalam praktik coding yang nyata, mari kita langsung meninjau contoh implementasi lengkap menggunakan AutoGluon pada slide berikutnya. Kita akan membedah cara memuat dataset, mengatur parameter kritis seperti `time_limit` dan `presets`, serta mengekstrak leaderboard hasil evaluasi secara terstruktur.

---

## Slide 022 - AutoGluon: Contoh Implementasi

### Narasi

Pada slide ini, kita akan melihat langsung implementasi praktis dari AutoGluon menggunakan skrip Python yang ringkas namun powerful. Mengacu pada penjelasan sebelumnya mengenai fitur-fitur utama AutoGluon sebagai library AutoML untuk data tabular, kode berikut menunjukkan bagaimana seluruh pipeline preprocessing, pemilihan model, tuning hyperparameter, dan pembentukan ensemble dapat dijalankan tanpa penulisan kode manual yang kompleks.

Skrip dimulai dengan impor dua kelas inti dari modul `autogluon.tabular`: `TabularDataset` untuk memuat data berbentuk tabel, dan `TabularPredictor` sebagai engine prediksi otomatis. Data pelatihan dan pengujian dimuat secara langsung dari file CSV menggunakan `TabularDataset("train.csv")` dan `TabularDataset("test.csv")`. Class ini secara otomatis mendeteksi tipe variabel numerik dan kategorikal, menangani missing values, serta melakukan encoding dasar, sehingga peneliti dapat fokus pada desain eksperimen daripada manipulasi data mentah.

Objek `predictor` kemudian diinisialisasi dengan dua parameter kunci: `label="class"` yang menunjuk pada kolom target klasifikasi, dan `eval_metric="f1_macro"` yang menjadi acuan optimasi selama proses pencarian model. Pemilihan metrik evaluasi ini sangat strategis karena menentukan prioritas AutoGluon dalam menyeimbangkan precision dan recall, terutama ketika distribusi kelas tidak seimbang. Proses training sesungguhnya dipicu oleh metode `.fit()`, di mana kita menetapkan `time_limit=600` sebagai anggaran komputasi maksimal 600 detik, serta `presets="medium_quality"` yang mengatur keseimbangan antara kecepatan eksekusi dan akurasi akhir. Preset ini cocok untuk iterasi penelitian yang membutuhkan baseline cepat namun reliabel.

Setelah fitting selesai, perintah `predictor.leaderboard(test_data)` dipanggil untuk menampilkan peringkat semua model yang dihasilkan beserta skor evaluasinya. Meskipun AutoGluon sangat efisien untuk membangun baseline kuat, evaluasi akhir dalam konteks penelitian magister harus tetap dilakukan secara terpisah sesuai protokol validasi yang telah ditetapkan, seperti k-fold cross-validation atau hold-out set yang benar-benar independen. Hal ini menjamin bahwa hasil eksperimen mencerminkan generalisasi model dan bukan artefak dari proses otomatisasi internal.

### Inti yang Harus Ditekankan

- AutoGluon memungkinkan pembangkitan baseline kompetitif dalam hitungan menit melalui abstraksi kode yang minimal, mempercepat siklus eksperimen penelitian.
- Parameter `time_limit` dan `presets` memberikan kontrol eksperimental yang transparan atas alokasi sumber daya komputasi versus potensi akurasi model.
- Evaluasi independen tetap wajib dilakukan setelah proses AutoML selesai untuk menjaga integritas metodologis dan menghindari leakage data.
- Reproducibilitas penelitian dapat dijaga dengan mencatat versi library, random seed, konfigurasi preset, dan snapshot dataset sebelum menjalankan `.fit()`.

### Transisi ke Slide Berikutnya

Dengan memahami alur implementasi dan batasan operasional AutoGluon, kita akan menelaah lebih lanjut mengapa kombinasi model ini mampu menghasilkan performa yang konsisten tinggi, khususnya melalui mekanisme ensemble dan bagging otomatis yang terintegrasi di dalamnya.

---

## Slide 023 - AutoGluon: Ensemble dan Bagging Otomatis

### Narasi

Pada slide sebelumnya, kita telah mengamati contoh implementasi praktis AutoGluon melalui pemanggilan fungsi `predictor.fit()`. Di balik sintaks yang tampak sederhana tersebut, AutoGluon menjalankan pipeline otomatis yang secara agresif membangun dan menyatukan berbagai model machine learning. Ketika proses fitting dimulai, framework tidak bergantung pada satu algoritma tunggal, melainkan melatih sekumpulan base learners heterogen secara paralel atau bertahap. Sesuai diagram pada slide ini, sistem akan menginisialisasi Random Forest, XGBoost, LightGBM, CatBoost, dan Neural Network sebagai fondasi awal. Setiap model ini dilatih dengan subset data yang berbeda-beda melalui mekanisme bagging internal, yang secara alami memperkenalkan variasi sampling dan membantu mencegah overfitting pada pola spesifik dataset.

Setelah base models selesai dilatih, AutoGluon melanjutkan ke tahap integrasi melalui stacked ensemble dan weighted ensemble. Pada stacked ensemble, prediksi keluaran dari setiap base model dijadikan sebagai fitur baru (meta-features) untuk melatih sebuah meta-model tingkat atas. Meta-model ini mempelajari residual error masing-masing base learner sehingga dapat memberikan koreksi sistematis pada prediksi akhir. Tahap selanjutnya adalah weighted ensemble, di mana AutoGluon menghitung bobot kontribusi setiap model berdasarkan skor validasi historis mereka. Bobot ini dinamis dan dapat berubah jika waktu komputasi masih tersedia, memungkinkan framework untuk terus menyempurnakan kombinasi model hingga batas `time_limit` terpenuhi.

Kekuatan pendekatan ensemble ini bersumber dari tiga prinsip statistik dan komputasional yang fundamental. Pertama, ensemble secara efektif menurunkan variance model tanpa menaikkan bias secara signifikan, sehingga hasil prediksi menjadi lebih stabil dan toleran terhadap noise atau outlier dalam data. Kedua, setiap algoritma memiliki bias induktif yang berbeda; tree-based methods unggul menangani hubungan non-linear dan missing values, sedangkan neural networks mampu mengekstrak representasi hierarkis yang kompleks. Dengan menggabungkannya, kita memanfaatkan sinergi komplementer antar-algoritma tanpa perlu melakukan feature engineering tambahan atau manipulasi data mentah. Ketiga, peningkatan akurasi ini dicapai murni melalui arsitektur pembelajaran kolektif, menjadikannya salah satu teknik paling reliable dalam benchmark tabular modern.

Namun, efisiensi otomatis ini membawa trade-off yang harus dipertimbangkan secara kritis, terutama dalam konteks penelitian magister. Biaya komputasi meningkat drastis karena harus melatih dan memvalidasi puluhan hingga ratusan varian model secara bersamaan. Kompleksitas arsitektur juga membuat interpretasi model menjadi sangat sulit, mengingat keputusan akhir merupakan hasil agregasi non-linear dari banyak black-box learner. Lebih penting lagi, aspek reproducible research menjadi tantangan nyata. Fluktuasi minor pada versi library, urutan acak pembangkitan bilangan pseudo-random, atau perbedaan konfigurasi CPU/GPU dapat mengubah ranking model di leaderboard. Oleh karena itu, pencatatan eksplisit terhadap `random_state`, versi dependency (seperti `autogluon`, `xgboost`, `scikit-learn`), serta spesifikasi lingkungan eksekusi bukan sekadar rekomendasi, melainkan keharusan metodologis.

Memahami mekanika ensemble ini memberikan landasan kuat sebelum kita mengevaluasi strategi optimasi parameter. Jika AutoGluon sudah mampu menghasilkan model kompetitif secara otomatis, langkah logis berikutnya adalah mengukur seberapa besar nilai tambah yang diberikan oleh tuning manual dibandingkan automated HPO ketika kedua metode bersaing dengan budget komputasi yang setara. Diskusi ini akan mengarah langsung pada perancangan eksperimen Praktikum 5 yang akan kita bahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- AutoGluon secara otomatis membangun stacked dan weighted ensemble dari berbagai base models (RF, XGBoost, LightGBM, CatBoost, NN) untuk menurunkan variance dan memanfaatkan sinergi algoritma.
- Peningkatan performa ensemble terjadi tanpa manipulasi data, namun diimbangi dengan biaya training yang lebih tinggi dan penurunan tingkat interpretabilitas model.
- Reproducibilitas dalam penelitian berbasis AutoML menuntut dokumentasi ketat terhadap random seed, versi library, dan konfigurasi lingkungan agar hasil eksperimen dapat diverifikasi ulang.

### Transisi ke Slide Berikutnya

Dengan memahami bahwa ensemble otomatis sudah memberikan baseline yang kuat, kita kini beralih ke pertanyaan metodologis: apakah investasi waktu dalam manual tuning masih relevan ketika automated HPO tersedia? Pada slide berikutnya, kita akan merancang protokol perbandingan langsung antara manual tuning dan automated HPO untuk Praktikum 5, lengkap dengan strategi alokasi budget dan kriteria analisis signifikansi performa.

---

## Slide 024 - Manual Tuning vs Automated HPO: Konteks Praktikum 5

### Narasi

Pada slide ini, kita memasuki konteks Praktikum 5 yang secara khusus dirancang untuk membandingkan dua pendekatan fundamental dalam optimasi hiperparameter: *manual tuning* versus *automated hyperparameter optimization* (HPO). Pertanyaan inti yang akan diuji melalui eksperimen ini adalah apakah penggunaan alat otomatis benar-benar memberikan peningkatan performa yang signifikan dibandingkan dengan penyetelan manual yang mengandalkan pengalaman atau intuisi peneliti. Dalam konteks penelitian tingkat magister, pertanyaan ini bukan sekadar mengukur akurasi akhir, melainkan menguji validitas metodologis terhadap klaim bahwa otomasi pencarian parameter selalu menghasilkan model yang lebih optimal.

Untuk menjawab pertanyaan tersebut, kita harus mengikuti protokol eksperimen yang ketat agar perbandingan bersifat adil dan dapat direproduksi. Langkah pertama adalah memilih dataset, yang dapat diambil langsung dari proyek penelitian mandiri mahasiswa atau dataset publik standar. Setelah itu, tetapkan protokol evaluasi yang konsisten, baik menggunakan *cross-validation* maupun metode *hold-out*, karena konsistensi ini krusial untuk isolasi variabel pengganggu. Selanjutnya, lakukan *manual tuning* dengan alokasi komputasi atau jumlah percobaan tertentu yang telah ditetapkan sebagai batas atas (*budget*). Kemudian, jalankan proses *automated HPO*—seperti Grid Search, Random Search, Bayesian Optimization, atau framework seperti Optuna—dengan *budget* yang setara atau wajar agar tidak terjadi ketidakseimbangan komputasi yang bias terhadap salah satu metode.

Setelah kedua pendekatan selesai dieksekusi, bandingkan hasilnya pada *test set* yang sama sekali terpisah dari proses pelatihan dan validasi. Poin kritis dari analisis ini terletak pada langkah terakhir: menguraikan apakah perbedaan performa yang teramati memang berasal dari efektivitas metode *tuning*-nya, ataukah hanya merupakan artefak dari perbedaan *budget* komputasi. Jika *budget* dikontrol dengan ketat namun *automated HPO* masih unggul, hal tersebut mendukung efisiensi pencarian ruang hiperparameter secara sistematis. Sebaliknya, jika selisihnya sangat tipis atau bahkan berpihak pada *manual tuning*, maka diperlukan investigasi lebih lanjut mengenai kompleksitas masalah, kualitas fitur, atau kesesuaian algoritma pencarian otomatis terhadap karakteristik data yang digunakan.

Pembahasan ini menjadi jembatan penting setelah kita mempelajari kekuatan *ensemble* dan *bagging* otomatis pada slide sebelumnya, di mana pencatatan *seed* dan versi pustaka sudah ditekankan demi reproduktibilitas. Praktikum 5 melanjutkan logika tersebut dengan menempatkan manusia sebagai baseline eksperimen sebelum melibatkan mesin pencari parameter. Transparansi dalam pencatatan setiap iterasi, pelacakan waktu eksekusi, dan dokumentasi konfigurasi lingkungan akan menjadi fondasi utama yang memastikan hasil eksperimen dapat diverifikasi oleh reviewer atau peneliti lain.

Secara ringkas, slide ini menegaskan bahwa praktik terbaik dalam penelitian *data mining* menuntut kontrol ketat terhadap variabel eksperimen, terutama terkait alokasi sumber daya komputasi. Perbedaan performa antara pendekatan manual dan otomatis harus dianalisis dengan skeptisisme ilmiah, bukan diterima begitu saja sebagai bukti superioritas alat. Reproduktibilitas, transparansi pencatatan, dan keadilan dalam pengujian adalah prinsip yang akan diuji secara langsung melalui praktikum ini.

### Inti yang Harus Ditekankan

- Pengujian harus mengontrol variabel *budget* komputasi secara ketat; perbedaan performa tidak boleh dikaitkan semata-mata dengan keunggulan algoritma jika alokasi sumber daya tidak seimbang.
- Fokus analisis bergeser dari sekadar "mana yang akurasinya lebih tinggi" menjadi "mengapa dan bagaimana perbedaan tersebut muncul", sesuai dengan standar ablation study dan error analysis di jenjang magister.
- Dokumentasi lengkap (seed, versi library, protokol evaluasi, waktu eksekusi, dan tabel percobaan) wajib dilakukan sejak awal untuk menjamin reproduktibilitas dan kesiapan publikasi ilmiah.

### Transisi ke Slide Berikutnya

Mari kita turunkan konsep perbandingan ini ke dalam desain teknis Praktikum 5, dimulai dari cara menyusun dan mencatat eksperimen *manual tuning* secara sistematis agar baseline kita kuat dan terukur.

---

## Slide 025 - Desain Praktikum 5: Manual Tuning

### Narasi

Pada praktikum kali ini, kita akan mengimplementasikan pendekatan *manual tuning* sebagai langkah awal sebelum beralih ke optimisasi otomatis. Sesuai dengan konteks yang telah dibahas pada slide sebelumnya, *manual tuning* didefinisikan sebagai proses penyetelan hiperparameter tanpa menggunakan algoritma pencarian sistematis. Dalam praktiknya, peneliti biasanya mengandalkan dua strategi utama: pertama, menjalankan model dengan nilai hiperparameter bawaan (*default*) dari pustaka seperti scikit-learn atau XGBoost; kedua, melakukan variasi kombinasi berdasarkan pengalaman empiris atau intuisi domain masalah. Pendekatan ini memang cepat untuk dicoba, namun sangat bergantung pada subjektivitas peneliti dan tidak menjamin konvergensi ke wilayah optimal ruang pencarian.

Untuk memastikan transparansi dan kemampuan reproduksi hasil, setiap percobaan harus didokumentasikan secara terstruktur. Perhatikan contoh tabel pencatatan pada slide ini. Setiap baris merepresentasikan satu *trial* atau eksperimen independen yang mengubah konfigurasi tertentu, misalnya `max_depth` dan `learning_rate`, lalu mengukur dampaknya terhadap metrik evaluasi validasi, dalam hal ini skor F1. Perubahan kecil pada satu parameter dapat menghasilkan fluktuasi performa yang signifikan, sehingga catatan rinci menjadi krusial. Mahasiswa tingkat magister diharapkan tidak hanya mencatat angka akhir, tetapi juga memahami hubungan kausal antara perubahan hiperparameter dan respons model.

Aspek yang sering terlupakan namun vital dalam desain eksperimen data mining adalah pencatatan sumber daya komputasi. Waktu eksekusi dan jumlah total percobaan yang dilakukan harus selalu diarsipkan alongside dengan hasil metrik. Hal ini bukan sekadar administratif, melainkan fondasi metodologis untuk membandingkan efisiensi antar metode. Ketika nanti kita berhadapan dengan teknik *automated hyperparameter optimization*, kita perlu mengetahui apakah peningkatan performa yang diperoleh benar-benar berasal dari algoritma pencarian yang lebih cerdas, atau semata-mata karena alokasi *budget* komputasi yang jauh lebih besar dibandingkan pendekatan manual.

Dengan menetapkan protokol pencatatan yang ketat untuk *manual tuning*, kita menyiapkan baseline yang solid dan adil. Baseline ini akan menjadi patokan mutlak ketika kita mengevaluasi kinerja framework otomatis seperti Optuna pada slide berikutnya. Perbandingan yang valid hanya dapat dilakukan jika kedua metode dijalankan di bawah kondisi dataset, protokol validasi silang, dan kriteria penghentian yang setara.

### Inti yang Harus Ditekankan

- *Manual tuning* bersifat non-sistematis dan sangat bergantung pada intuisi atau nilai default, sehingga rentan terhadap bias peneliti dan tidak menjamin optimalitas global.
- Dokumentasi eksperimen harus mencakup konfigurasi parameter, metrik validasi, serta alokasi waktu dan jumlah trial untuk menjamin transparansi dan reproduktibilitas penelitian.
- Pencatatan *budget* komputasi pada tahap ini menjadi prasyarat metodologis untuk melakukan perbandingan yang adil (*fair comparison*) dengan metode optimisasi otomatis di eksperimen selanjutnya.

### Transisi ke Slide Berikutnya

Setelah kita memahami batasan dan mekanisme pencatatan pada *manual tuning*, mari kita lihat bagaimana kerangka kerja otomatis seperti Optuna dirancang untuk mengeksplorasi ruang hiperparameter secara lebih efisien dan terarah.

---

## Slide 026 - Desain Praktikum 5: Automated HPO dengan Optuna

### Narasi

Sebelumnya kita telah membahas keterbatasan manual tuning yang sangat bergantung pada intuisi peneliti dan memerlukan pencatatan eksperimental yang sangat intensif. Ketika ruang pencarian parameter meluas, pendekatan tersebut menjadi tidak efisien dan rentan terhadap bias subjektif. Untuk mengatasi hal ini, kita menerapkan Automated Hyperparameter Optimization menggunakan Optuna, sebuah framework modern yang mengimplementasikan algoritma pencarian cerdas seperti Tree-structured Parzen Estimator (TPE). Berbeda dengan grid atau random search, Optuna secara dinamis mempelajari distribusi parameter dari setiap trial sebelumnya untuk mengusulkan konfigurasi yang lebih menjanjikan, sehingga mempercepat konvergensi menuju optimum global dengan biaya komputasi yang lebih hemat.

Berikut adalah implementasi kode yang mendefinisikan inti dari proses optimasi tersebut:

```python
def objective(trial):
    param = {
        "max_depth": trial.suggest_int("max_depth", 3, 12),
        "learning_rate": trial.suggest_float("learning_rate", 0.01, 0.30, log=True),
        "subsample": trial.suggest_float("subsample", 0.5, 1.0)
    }
    model = HistGradientBoostingClassifier(**param, random_state=42)
    return cross_val_score(model, X_train, y_train, cv=5, scoring="f1_macro").mean()

study = optuna.create_study(direction="maximize")
study.optimize(objective, n_trials=30)   # budget = 30 trial
```

Fungsi `objective(trial)` berperan sebagai kontrak antara engine optimasi dan model machine learning. Di dalamnya, kita mendefinisikan ruang pencarian menggunakan `trial.suggest_int()` untuk `max_depth` pada rentang 3 hingga 12, dan `trial.suggest_float()` untuk `learning_rate` serta `subsample`. Perhatikan bahwa `learning_rate` dikonfigurasi dengan `log=True`. Hal ini wajib dilakukan dalam konteks tree-based ensemble karena hubungan antara learning rate dan konvergensi bersifat eksponensial; skala logaritmik memungkinkan sampler menjelajahi nilai-nilai kecil (misalnya 0.01) dengan resolusi yang sama pentingnya dengan nilai besar, sehingga menghindari bias pencarian ke arah nilai tengah yang sering kali suboptimal. Setelah parameter tersampel, objek `HistGradientBoostingClassifier` diinisialisasi dengan parameter tersebut beserta `random_state=42` untuk menjamin deterministik dan reproduktibilitas antar trial. Evaluasi dilakukan melalui `cross_val_score` dengan 5-fold cross-validation dan metrik `f1_macro`, lalu mengembalikan nilai rata-rata skor sebagai fungsi tujuan yang akan dimaksimalkan oleh Optuna.

Setelah fungsi objektif terdefinisi, proses pencarian dimulai dengan `optuna.create_study(direction="maximize")` yang mengatur arah optimasi. Perintah `study.optimize(objective, n_trials=30)` kemudian mengeksekusi loop pencarian dengan alokasi budget sebesar 30 trial. Dalam konteks penelitian tingkat magister, manajemen budget komputasi merupakan aspek metodologis yang kritis. Optuna mendukung penentuan budget berbasis iterasi (`n_trials`) atau batas waktu (`timeout`), yang harus disesuaikan dengan kapasitas infrastruktur dan cakupan penelitian. Setiap trial yang berjalan dievaluasi menggunakan skema cross-validation yang identik, sehingga perbedaan skor yang muncul murni mencerminkan pengaruh variasi hyperparameter, bukan bias akibat pembagian data yang berbeda. Mekanisme ini menciptakan ekosistem eksperimen yang terkendali, transparan, dan siap untuk di-audit secara akademis.

Penerapan automated HPO seperti ini mentransformasi tuning dari aktivitas trial-and-error menjadi proses sistematis berbasis data. Jejak historis setiap trial dapat diekstraksi untuk analisis sensitivitas, visualisasi landscape parameter, dan identifikasi interaksi fitur yang dominan. Proses ini juga menyiapkan fondasi metodologis yang ketat untuk langkah evaluasi selanjutnya, memastikan bahwa klaim performa model tidak hanya tinggi, tetapi juga diperoleh melalui protokol yang adil, reproducible, dan bebas dari kebocoran data.

### Inti yang Harus Ditekankan

- Automated HPO dengan Optuna menggantikan pencarian intuitif dengan algoritma adaptif (TPE) yang belajar dari sejarah trial untuk mempercepat konvergensi dan mengurangi waste komputasi.
- Penggunaan skala logaritmik (`log=True`) pada learning rate adalah praktik standar esensial dalam gradient boosting untuk menangkap hubungan non-linear antara ukuran langkah optimasi dan konvergensi model.
- Reproduksi eksperimen dijamin dengan menetapkan `random_state` pada model dan mempertahankan konsistensi skema cross-validation di seluruh iterasi trial.
- Penetapan budget komputasi (`n_trials` atau `timeout`) harus didasarkan pada feasibility penelitian dan ketersediaan infrastruktur, bukan pilihan arbitrer, serta harus dilaporkan secara eksplisit dalam paper.
- Kejujuran ilmiah menuntut pemisahan tegas antara fase tuning (menggunakan validation/cross-validation) dan fase evaluasi akhir (menggunakan test set yang tersembunyi hingga proses tuning selesai).

### Transisi ke Slide Berikutnya

Proses automatisasi pencarian hyperparameter telah menghasilkan kandidat model terbaik, namun keunggulan numerik semata tidak cukup untuk mengklaim keberhasilan penelitian. Langkah selanjutnya adalah menerapkan protokol evaluasi yang ketat untuk membandingkan strategi manual versus automated HPO secara adil, memastikan tidak ada kebocoran data, mengontrol seed untuk stabilitas, dan memisahkan dengan jelas fase tuning pada validation set terhadap evaluasi final pada test set yang tidak pernah tersentuh selama proses optimasi.

---

## Slide 027 - Evaluasi Perbandingan yang Adil

### Narasi

Setelah kita mengimplementasikan Automated HPO menggunakan Optuna pada slide sebelumnya, di mana setiap trial dievaluasi melalui cross-validation untuk menemukan konfigurasi optimal secara otomatis, langkah kritis berikutnya adalah memastikan bahwa perbandingan antara pendekatan manual dan otomatis tersebut benar-benar adil dan bebas dari bias metodologis. Pada jenjang magister, validitas klaim penelitian sangat bergantung pada desain eksperimen yang ketat, bukan sekadar pada angka akurasi yang dihasilkan oleh sebuah pipeline.

Untuk mencapai perbandingan yang adil, terdapat lima prinsip fundamental yang harus diterapkan secara konsisten. Pertama, gunakan **split data yang sama** untuk kedua strategi tuning. Variasi dalam pembagian data train-val-test dapat menghasilkan distribusi kelas atau karakteristik sampel yang berbeda, sehingga perbedaan performa yang teramati mungkin hanya mencerminkan keberuntungan sampling, bukan keunggulan algoritma. Kedua, lakukan pemilihan atau penyesuaian hyperparameter hanya pada **validation data** atau melalui mekanisme cross-validation pada data training. Akses terhadap test set selama fase pencarian konfigurasi harus dilarang total. Ketiga, setelah tuning selesai, evaluasi model terbaik pada **test data** yang tidak pernah digunakan sama sekali selama proses pelatihan maupun tuning. Ini memberikan estimasi generalisasi yang tidak bias. Keempat, catat secara eksplisit **computational budget** kedua strategi, baik dalam jumlah iterasi, waktu eksekusi, maupun penggunaan memori, karena efisiensi komputasi merupakan dimensi penting dalam evaluasi model modern. Kelima, gunakan **beberapa seed** acak berbeda untuk menjalankan ulang eksperimen guna mengecek stabilitas hasil dan mengurangi varians yang disebabkan oleh inisialisasi parameter atau pengacakan data.

Ilustrasi pada slide ini menegaskan alur kerja standar yang harus diikuti. Data training dipisahkan menjadi bagian yang digunakan untuk cross-validation atau validation hold-out guna melakukan tuning, sementara test data dijaga sepenuhnya tertutup hingga tahap akhir. Prinsip "evaluasi hanya sekali" ini sangat krusial untuk mencegah kebocoran informasi dan memastikan bahwa metrik pelaporan mencerminkan kemampuan model pada data baru yang belum pernah dilihat. Dalam implementasi praktis menggunakan pandas, NumPy, atau scikit-learn, konsistensi split ini biasanya dijaga dengan mengunci `random_state` pada fungsi `train_test_split` atau menyimpan objek splitter dari `KFold`/`StratifiedKFold` untuk digunakan kembali di seluruh percobaan.

Secara keseluruhan, disiplin dalam memisahkan fungsi data train, validation, dan test serta mendokumentasikan budget komputasi adalah fondasi utama dari reproducible research dalam data mining. Tanpa protokol ini, perbedaan performa yang dilaporkan tidak dapat dijadikan dasar kesimpulan ilmiah yang kuat, dan upaya tuning menjadi kehilangan makna evidensialnya.

### Inti yang Harus Ditekankan

- Pemisahan fungsi data yang ketat antara fase tuning (validation/CV) dan fase evaluasi akhir (test set) adalah syarat mutlak untuk menghindari bias dan data leakage.
- Identitas split data harus dikunci dan digunakan seragam untuk semua metode yang dibandingkan agar perbedaan performa murni mencerminkan keunggulan algoritma, bukan variasi data.
- Pencatatan computational budget dan penggunaan multiple seed diperlukan untuk menilai efisiensi sumber daya dan stabilitas hasil secara objektif.
- Evaluasi model pada test set harus dilakukan tepat satu kali setelah tuning selesai, sesuai dengan prinsip "evaluate only once" yang menjadi standar emas dalam penelitian data mining.

### Transisi ke Slide Berikutnya

Ketika prinsip pemisahan data dan evaluasi satu kali ini dilanggar, misalnya dengan memilih konfigurasi terbaik berdasarkan skor pada test set atau melakukan tuning berulang kali pada dataset evaluasi, kita akan memasuki jebakan metodologis yang disebut sebagai model selection bias. Mari kita bedah definisi formal, mekanisme terjadinya, dan dampak fatalnya terhadap validitas klaim ilmiah pada slide berikutnya.

---

## Slide 028 - Model Selection Bias: Definisi

### Narasi

Model selection bias merupakan fenomena metodologis yang terjadi ketika proses pemilihan model atau konfigurasi terbaik didasarkan pada performa yang diamati pada kumpulan data yang sama dengan data yang digunakan untuk evaluasi akhir. Sebagaimana telah ditekankan pada pembahasan sebelumnya mengenai evaluasi perbandingan yang adil, pemisahan hierarkis antara training, validation, dan test set bukan sekadar rutinitas teknis, melainkan prasyarat fundamental agar estimasi generalisasi tetap objektif. Ketika batas ini dilanggar, mekanisme seleksi model secara tidak sadar mulai mengoptimalkan diri terhadap noise atau pola spesifik yang hanya ada pada data evaluasi, sehingga metrik yang dilaporkan kehilangan makna prediktifnya terhadap distribusi data yang sesungguhnya.

Secara praktis, bias ini sering muncul dalam dua skenario umum yang kerap terlihat dalam workflow penelitian berbasis scikit-learn atau notebook interaktif. Pertama, peneliti menjalankan ratusan konfigurasi hyperparameter, lalu memilih kombinasi yang menghasilkan skor tertinggi langsung pada test set, dan melaporkan skor tersebut sebagai capaian generalisasi model. Kedua, proses tuning dan evaluasi akhir dilakukan pada satu dataset utuh tanpa adanya subset validasi yang terisolasi. Dalam kedua kasus tersebut, data uji secara efektif digunakan dua kali: pertama sebagai acuan pengambilan keputusan, dan kedua sebagai alat verifikasi. Praktik ini melanggar prinsip independensi data yang menjadi tulang punggung inferensi statistik.

Dampak langsung dari model selection bias adalah underestimation sistematis terhadap generalization error. Karena model telah "terpapar" secara implisit selama fase seleksi, performanya pada data uji akan tampak jauh lebih baik dibandingkan kemampuannya yang sebenarnya pada data baru. Bagi tingkat magister yang menuntut rigoritas penelitian, konsekuensinya melampaui aspek teknis semata: klaim ilmiah mengenai superiority suatu algoritma atau pendekatan baru menjadi tidak valid secara statistik. Paper yang memuat hasil seperti ini rentan ditolak atau dikoreksi saat peer-review karena reviewer dapat mendeteksi potential data leakage atau lack of proper hold-out strategy, yang pada akhirnya merusak kredibilitas temuan akademik.

Kesadaran akan definisi dan mekanisme bias ini harus menjadi filter kritis sebelum memasuki tahap implementasi kode atau pelaporan hasil eksperimen. Dengan memahami bahwa setiap kali kita melihat test set untuk mengambil keputusan, kita secara aktif memperkenalkan bias seleksi, kita dapat merancang pipeline eksperimen yang lebih ketat. Pembahasan selanjutnya akan menyoroti bagaimana ketidakseimbangan jumlah trial antar model memperburuk fenomena ini, serta strategi mitigasi yang lebih robust untuk menjaga integritas kesimpulan penelitian.

### Inti yang Harus Ditekankan

- Model selection bias muncul ketika data uji digunakan secara bersamaan untuk seleksi model dan evaluasi akhir, sehingga melanggar prinsip independensi data.
- Generalization error akan secara sistematis diremehkan, menyebabkan klaim kinerja model menjadi terlalu optimistis dan tidak dapat direplikasi.
- Dalam konteks penelitian S2, bias ini mengancam validitas ilmiah dan harus dihindari melalui pemisahan subset yang ketat serta pelaporan protokol eksperimen yang transparan.

### Transisi ke Slide Berikutnya

Memahami definisi bias ini membawa kita pada pertanyaan lanjutan: bagaimana bias ini secara konkret mengubah interpretasi hasil penelitian ketika jumlah trial antar model tidak seimbang, serta langkah-langkah metodologis apa yang wajib diterapkan untuk mengatasinya. Mari kita lanjutkan ke slide berikutnya untuk membahas dampak model selection bias terhadap kesimpulan penelitian dan teknik mitigasinya.

---

## Slide 029 - Dampak Model Selection Bias pada Kesimpulan Penelitian

### Narasi

Pada slide sebelumnya, kita telah mendefinisikan model selection bias sebagai praktik memilih model berdasarkan performa terbaik pada dataset yang sama yang digunakan untuk evaluasi akhir. Ketika skala pencarian konfigurasi diperbesar, risiko bias ini meningkat secara eksponensial. Semakin banyak kombinasi hyperparameter atau arsitektur yang dievaluasi, semakin tinggi probabilitas bahwa satu konfigurasi tertentu akan secara kebetulan cocok dengan noise atau fluktuasi acak dalam validation set, bukan menangkap pola umum yang sebenarnya. Fenomena ini mengubah proses tuning dari upaya optimisasi menjadi bentuk data snooping yang sering kali tidak disadari oleh peneliti.

Dampak paling kritis terhadap kesimpulan penelitian terjadi ketika perbandingan antar metode dilakukan tanpa kontrol eksperimen yang ketat. Misalnya, jika Model A diuji dengan 1000 konfigurasi berbeda sementara Model B hanya dievaluasi sekali, selisih akurasi yang teramati tidak dapat diklaim sebagai keunggulan metodologis. Improvement yang tampak tersebut sangat mungkin merupakan artefak dari selection bias, di mana ruang pencarian yang lebih luas memberikan peluang statistik lebih besar untuk menemukan nilai ekstrem yang tidak reproducible pada distribusi data baru. Dalam konteks penelitian tingkat magister, klaim seperti ini dapat meruntuhkan validitas ilmiah dan menyebabkan reviewer mempertanyakan integritas desain eksperimen.

Untuk memitigasi dampak ini, diperlukan protokol evaluasi yang ketat dan terstandarisasi. Nested cross-validation menjadi standar emas karena memisahkan sepenuhnya proses pemilihan model (inner loop) dengan estimasi generalisasi (outer loop), sehingga setiap fold evaluasi benar-benar independen dari proses tuning. Selain itu, final test set harus dijaga dengan ketat dan hanya diakses sekali setelah seluruh eksperimen selesai. Transparansi juga wajib diterapkan: peneliti harus melaporkan jumlah trial, strategi pencarian, dan total budget komputasi yang digunakan. Penggunaan significance testing atau repeated k-fold CV membantu membedakan antara peningkatan performa yang signifikan secara statistik versus variasi acak semata.

Praktik pelaporan dan pengendalian bias ini secara alami mengarah pada tantangan operasional berikutnya dalam penelitian data mining modern. Ketika kita berbicara tentang jumlah trial, strategi pencarian, dan kebutuhan untuk melakukan repeated evaluation, kita secara langsung berhadapan dengan batasan sumber daya sistem. Hal inilah yang membawa kita pada pembahasan mengenai bagaimana mendefinisikan, mengontrol, dan melaporkan computational budget secara bertanggung jawab dalam desain eksperimen.

### Inti yang Harus Ditekankan

- Peningkatan jumlah konfigurasi tuning secara linear meningkatkan risiko overfitting pada validation set dan secara sistematis meremehkan generalization error.
- Perbandingan kinerja antar metode hanya valid jika dilakukan dengan fair comparison, termasuk kesetaraan dalam jumlah trial, strategi pencarian, dan kondisi lingkungan eksperimen.
- Solusi metodologis utama meliputi nested cross-validation, penjagaan ketat terhadap final test set, transparansi pelaporan trial/budget, serta penggunaan statistical significance testing atau repeated k-fold.
- Validitas kesimpulan penelitian sangat bergantung pada disiplin akademis dalam memisahkan fase exploratory tuning dari fase evaluatif final.

### Transisi ke Slide Berikutnya

Dengan memahami mengapa kontrol eksperimen dan transparansi trial begitu krusial, langkah selanjutnya adalah membahas kendala praktis yang selalu menyertainya: bagaimana kita mengalokasikan, mengukur, dan melaporkan computational budget agar eksperimen tetap feasible secara teknis namun rigor secara ilmiah.

---

## Slide 030 - Computational Budget: Konsep dan Kendali

### Narasi

Setelah membahas bagaimana model selection bias dapat mengaburkan kesimpulan penelitian pada slide sebelumnya, kita perlu memahami faktor fundamental yang sering kali tidak dilaporkan namun sangat menentukan validitas eksperimen, yaitu computational budget. Dalam konteks penelitian data mining tingkat magister, computational budget merujuk pada total alokasi sumber daya komputasi yang disengaja atau secara implisit digunakan selama proses hyperparameter tuning dan evaluasi model. Ini bukan sekadar pertimbangan efisiensi waktu, melainkan parameter metodologis yang harus dikontrol, didokumentasikan, dan dilapor secara transparan agar klaim kinerja model dapat divalidasi oleh komunitas ilmiah.

Bentuk dari computational budget ini sangat bergantung pada framework optimasi dan jenis algoritma yang diterapkan. Secara umum, anggaran komputasi dapat direpresentasikan melalui beberapa metrik kuantitatif yang saling terkait:
- `n_trials` atau jumlah iterasi pencarian, yang menjadi standar dalam library modern seperti Optuna atau Ray Tune.
- `time_limit` yang dibatasi dalam satuan detik atau jam, sering digunakan ketika peneliti menerapkan batasan waktu pencarian yang ketat.
- `max_epochs` dalam pelatihan neural network, di mana setiap epoch mewakili satu siklus pembelajaran penuh dan berfungsi sebagai proxy budget.
- Spesifikasi hardware seperti jumlah CPU core atau GPU yang dialokasikan, karena arsitektur paralelisasi dapat mempercepat konvergensi tanpa mengubah karakteristik model itu sendiri.

Mengapa pelaporan ini wajib menjadi bagian dari metodologi penelitian? Pertama, pembaca dan reviewer memerlukan informasi ini untuk menilai apakah perbandingan antar metode dilakukan secara adil. Jika metode A dibandingkan dengan metode B, tetapi metode A diberi budget lima kali lebih besar, improvement yang terlihat kemungkinan besar merupakan artefak dari kelebihan sumber daya, bukan keunggulan algoritmik. Kedua, kompleksitas komputasi harus selalu dipertimbangkan alongside peningkatan performa. Metode yang memakan budget sangat besar namun hanya memberikan kenaikan marginal pada validation set seringkali tidak efisien untuk deployment maupun untuk klaim kontribusi ilmiah yang signifikan. Ketiga, aspek reproducibility menuntut transparansi penuh. Tanpa catatan budget yang jelas, peneliti lain tidak akan mampu mereplikasi kondisi eksperimen Anda, sehingga temuan tersebut sulit diverifikasi atau dikembangkan lebih lanjut.

### Inti yang Harus Ditekankan

- Computational budget adalah parameter metodologis kritis, bukan sekadar kendala teknis, yang harus dikontrol dan dilaporkan secara eksplisit.
- Perbandingan model hanya valid jika dilakukan under equal or comparable computational budgets; otherwise, improvement bersifat artifaktual.
- Transparansi budget mendukung fair comparison, analisis cost-performance trade-off, dan replikasi penelitian sesuai standar reproduktibilitas ilmiah.

### Transisi ke Slide Berikutnya

Mengingat bahwa kontrol terhadap sumber daya komputasi adalah langkah pertama menuju eksperimen yang terstandarisasi, langkah selanjutnya adalah mengendalikan variabel acak yang juga berpotensi menimbulkan variabilitas hasil. Pada slide berikutnya, kita akan membahas bagaimana random seed mempengaruhi setiap tahap pipeline dan strategi terbaik untuk mengendalikannya demi stabilitas eksperimen.

---

## Slide 031 - Random Seed: Variabilitas dan Pengendaliannya

### Narasi

Setelah membahas computational budget pada slide sebelumnya sebagai batas sumber daya komputasi yang dialokasikan untuk tuning, kita kini beralih ke aspek fundamental lainnya yang menentukan validitas eksperimen: random seed. Dalam praktik data mining dan machine learning, hampir setiap komponen pipeline mengandung elemen probabilistik. Tanpa kendali yang ketat terhadap elemen-elemen ini, hasil eksperimen akan berubah secara acak dari satu eksekusi ke eksekusi berikutnya, sehingga mustahil untuk membedakan apakah perubahan performa berasal dari perbaikan algoritma atau sekadar fluktuasi acak.

Random seed berfungsi sebagai titik awal deterministik untuk generator angka pseudo-random. Dalam konteks penelitian tingkat magister, Anda harus menyadari bahwa seed mengontrol setidaknya lima komponen krusial: pembagian data menjadi train dan test set, mekanisme sampling pada cross-validation, inisialisasi bobot atau parameter awal model, teknik resampling seperti bagging atau subsampling, serta strategi pencarian hyperparameter berbasis random search. Jika salah satu dari komponen ini tidak dikunci seed-nya, reproduktibilitas eksperimen Anda akan runtuh dan temuan penelitian kehilangan landasan empiris yang kuat.

Untuk mengimplementasikan pengendalian ini di ekosistem Python, langkah pertama yang wajib dilakukan adalah menetapkan seed secara eksplisit sebelum menjalankan logika eksperimen. Perhatikan implementasi berikut:
```python
seed = 42

### set seed untuk library utama

import random, numpy as np
random.seed(seed)
np.random.seed(seed)
```
Kode di atas mengatur state internal dari modul `random` standar Python dan pustaka numerik `NumPy`. Meskipun ini adalah praktik standar, perlu dicatat bahwa tidak semua library modern (seperti PyTorch, TensorFlow, atau scikit-learn versi terbaru) sepenuhnya terpengaruh hanya oleh pengaturan ini. Namun, sebagai fondasi metodologis, penulisan kode seed secara eksplisit dan terdokumentasi merupakan tanda profesionalisme dalam riset komputasional.

Masalah mendasar dalam melaporkan hasil machine learning adalah ketergantungan performa pada pilihan seed tunggal. Lihat contoh tabel pada slide ini: ketika kita menguji Model A dan Model B menggunakan tiga seed berbeda (0, 1, dan 2), terjadi pergeseran peringkat kinerja yang signifikan. Pada seed 0, Model B unggul tipis (0.85 vs 0.84). Namun, pada seed 1, Model A justru membalikkan keunggulan tersebut (0.85 vs 0.84), dan pola terus berubah pada seed 2. Fenomena ini menunjukkan bahwa klaim "Model X lebih baik daripada Model Y" berdasarkan satu kali eksekusi sangat rentan terhadap bias seleksi data atau inisialisasi yang menguntungkan secara kebetulan.

Oleh karena itu, standar pelaporan dalam penelitian ilmiah mutlak menuntut penggunaan multiple seeds. Alih-alih menyajikan satu angka metrik tunggal, Anda wajib menjalankan eksperimen minimal tiga hingga lima kali dengan seed yang berbeda, kemudian melaporkan nilai rata-rata (mean) beserta standar deviasinya. Standar deviasi memberikan gambaran tentang stabilitas dan robustness model terhadap variasi data dan inisialisasi. Pendekatan ini bukan hanya soal kejujuran akademik, melainkan prasyarat metodologis agar temuan Anda dapat dipertanggungjawabkan di hadapan reviewer jurnal atau konferensi internasional terindeks Scopus.

### Inti yang Harus Ditekankan

- Random seed adalah pengendali deterministik untuk seluruh proses stokastik dalam pipeline ML (split data, CV, inisialisasi model, bagging, random search).
- Penetapan seed harus dilakukan secara eksplisit di awal skrip menggunakan modul `random` dan `numpy` sebagai praktik dasar reprokitibilitas.
- Performa model sangat sensitif terhadap pilihan seed; klaim keunggulan algoritma berdasarkan satu run tunggal bersifat spekulatif dan tidak valid secara ilmiah.
- Pelaporan hasil penelitian wajib menyertakan rata-rata dan standar deviasi dari beberapa percobaan dengan seed berbeda untuk mengukur stabilitas dan generalisasi model.

### Transisi ke Slide Berikutnya

Pengendalian variabilitas melalui random seed dan pelaporan metrik secara statistik adalah langkah teknis pertama menuju penelitian yang dapat dipercaya. Namun, pengendalian seed saja tidak cukup jika lingkungan eksekusi, versi library, atau aliran data tidak didokumentasikan dengan rapi. Mari kita lanjutkan ke prinsip-prinsip fundamental reproducible research dan tantangan praktis seperti nondeterminism GPU serta drift versi library yang sering menghambat replikasi hasil di dunia nyata.

---

## Slide 032 - Reproducible Research: Prinsip dan Pentingnya

### Narasi

Reproducible research atau penelitian yang dapat direproduksi merupakan standar emas dalam metodologi penelitian data mining tingkat lanjut. Sebuah penelitian dikategorikan dapat direproduksi ketika hasil eksperimen dapat diulang secara konsisten oleh pihak lain maupun oleh peneliti itu sendiri di masa mendatang, dengan syarat empat komponen utama terpenuhi: penggunaan dataset yang identik, sumber kode yang sama persis, konfigurasi eksperimen yang didokumentasikan secara rinci, serta spesifikasi lingkungan komputasi yang jelas. Pada jenjang magister, prinsip ini bukan sekadar praktik teknis, melainkan kewajiban akademis yang menjamin integritas ilmiah dan transparansi proses knowledge discovery.

Penerapan prinsip ini memiliki dampak strategis yang signifikan. Pertama, reproduktibilitas berfungsi sebagai mekanisme validasi mandiri terhadap klaim ilmiah. Dalam konteks evaluasi model, kemampuan untuk mengulang pipeline dari awal hingga akhir membuktikan bahwa peningkatan performa memang berasal dari inovasi metode atau arsitektur yang diusulkan, bukan akibat overfitting, kebocoran data, atau kondisi lingkungan yang unik. Kedua, penelitian yang dapat direproduksi memberikan fondasi kokoh bagi peneliti lain untuk melanjutkan karya kita. Dengan baseline dan konfigurasi yang transparan, komunitas akademik dapat dengan mudah melakukan ablation study, error analysis, atau pengujian generalisasi pada domain baru tanpa harus memulai dari nol. Ketiga, hal ini secara langsung meningkatkan kredibilitas dan kepercayaan terhadap kontribusi penelitian kita, yang menjadi prasyarat mutlak sebelum naskah dipertimbangkan untuk publikasi di konferensi atau jurnal bereputasi.

Namun, mewujudkan reproduktibilitas penuh bukanlah tugas yang trivial dan sering kali berbenturan dengan realitas teknis. Seperti yang telah dibahas pada slide sebelumnya mengenai random seed, pengaturan seed untuk library standar maupun NumPy hanyalah satu lapisan pengendalian. Tantangan nyata meliputi nondeterminism pada komputasi GPU, di mana operasi paralel dan kernel CUDA cenderung menghasilkan urutan numerik yang berbeda antar eksekusi meskipun seed diatur. Selain itu, terjadi drift versi library secara otomatis yang dapat mengubah default parameter atau implementasi internal algoritma tanpa peringatan. Dataset juga bersifat dinamis dan dapat berubah seiring waktu akibat penambahan record atau pembaruan metadata, sementara random seed saja tidak mampu mengendalikan seluruh proses preprocessing, sampling stratifikasi, atau dependency eksternal yang bergantung pada state sistem.

Mengingat keterbatasan pendekatan manual dalam mengatasi kompleksitas tersebut, dokumentasi statis seperti README atau catatan spreadsheet sudah tidak lagi memadai untuk skala penelitian modern. Diperlukan ekosistem pelacakan yang terotomatisasi dan terintegrasi, yang akan menjadi fokus bahasan pada slide berikutnya. Kita akan mempelajari bagaimana memanfaatkan framework experiment tracking seperti MLflow dan Weights & Biases untuk mencatat setiap variabel eksperimen secara sistematis, sehingga setiap langkah penelitian dapat dilacak, diverifikasi, dan direproduksi dengan presisi tinggi.

### Inti yang Harus Ditekankan

- Reproduktibilitas adalah pilar validasi ilmiah yang menjamin bahwa hasil penelitian bukan artefak kebetulan, melainkan dapat diulang dengan data, kode, konfigurasi, dan lingkungan yang sama.
- Kemampuan mereproduksi eksperimen memungkinkan komunitas akademik membangun karya kita lebih lanjut melalui ablation study, error analysis, dan pengujian generalisasi yang robust.
- Tantangan teknis seperti nondeterminism GPU, perubahan versi library, dinamika dataset, dan keterbatasan random seed menuntut dokumentasi yang lebih rigor daripada sekadar pengaturan seed acak.
- Pendekatan manual tidak lagi cukup; diperlukan tools tracking otomatis untuk mencatat hyperparameter, metric, artifact, dan environment secara terintegrasi guna menjamin konsistensi penelitian.

### Transisi ke Slide Berikutnya

Untuk menjawab tantangan dokumentasi dan pelacakan tersebut, mari kita beralih ke slide berikutnya di mana kita akan membahas implementasi praktis menggunakan MLflow dan Weights & Biases sebagai solusi standar industri dalam experiment tracking.

---

## Slide 033 - Experiment Tracking: MLflow dan Weights & Biases

### Narasi

Setelah memahami mengapa penelitian harus bersifat reproduktibel dan menyadari tantangan teknis seperti ketidakstabilan environment, perubahan versi library, serta sifat nondeterministik pada komputasi GPU, langkah praktis berikutnya adalah mengimplementasikan experiment tracking. Pelacakan eksperimen bukan sekadar catatan manual, melainkan mekanisme sistematis yang merekam seluruh dimensi penting selama siklus pelatihan model. Secara spesifik, tool ini mencatat empat komponen krusial: konfigurasi hyperparameter yang digunakan, nilai metrik evaluasi yang dihasilkan, artifact atau file model yang tersimpan, serta snapshot kode dan environment komputasi. Dengan jejak digital ini, setiap iterasi eksperimen dapat dilacak, dibandingkan, dan diaudit ulang tanpa bergantung pada memori peneliti.

Dalam ekosistem Python, MLflow hadir sebagai framework open-source yang sangat ringan untuk integrasi tracking. Perhatikan implementasinya melalui potongan kode berikut:
```python
import mlflow

mlflow.start_run()
mlflow.log_param("learning_rate", 0.1)
mlflow.log_param("max_depth", 5)
mlflow.log_metric("valid_f1", 0.85)
mlflow.end_run()
```
Di sini, `mlflow.start_run()` membuka sesi pencatatan baru yang akan menampung semua log terkait satu trial eksperimen. Pemanggilan `log_param` secara eksplisit menyimpan konfigurasi hyperparameter seperti learning rate dan kedalaman maksimum tree. Sementara itu, `log_metric` mencatat performa model pada subset validasi, misalnya skor F1 sebesar 0.85. Proses ditutup dengan `end_run()` yang menutup sesi dan mensinkronisasi seluruh data ke dashboard web MLflow secara otomatis. Dashboard tersebut memungkinkan peneliti memfilter, membandingkan, dan memvisualisasikan ratusan percobaan secara bersamaan.

Alternatif lain yang banyak diadopsi di komunitas riset dan industri adalah Weights & Biases (W&B). Pendekatan W&B menawarkan pengalaman yang lebih interaktif dengan kemampuan visualisasi real-time dan manajemen proyek berbasis cloud.
```python
import wandb
run = wandb.init(project="dm-project", config={"lr": 0.1})
wandb.log({"valid_f1": 0.85})
```
Fungsi `wandb.init()` menginisialisasi sesi tracking dengan menentukan nama proyek dan menyematkan konfigurasi awal langsung melalui parameter `config`. Selanjutnya, `wandb.log()` menerima dictionary berisi pasangan kunci-nilai untuk metrik apa pun yang ingin dipantau selama training loop. Keunggulan utama W&B terletak pada kemampuannya menampilkan grafik loss dan metric secara live, melakukan sweep hyperparameter otomatis, serta mengintegrasikan hook ke framework deep learning tanpa mengganggu arsitektur model. Kedua tools ini secara fundamental mengubah cara peneliti mengelola kompleksitas eksperimen dari pendekatan ad-hoc menjadi workflow yang terstruktur dan skalabel.

Dengan adanya experiment tracking, perbandingan antar percobaan menjadi jauh lebih objektif dan efisien. Peneliti dapat dengan cepat mengidentifikasi kombinasi parameter mana yang menghasilkan generalisasi terbaik, menganalisis pola overfitting berdasarkan tren metrik, serta mendokumentasikan setiap iterasi untuk keperluan publikasi ilmiah. Praktik ini secara langsung menjawab tantangan fragmentasi environment dan non-determinisme yang telah dibahas pada slide sebelumnya, sekaligus menyiapkan fondasi empiris yang solid untuk penyusunan checklist reproduktibilitas pada tahap selanjutnya.

### Inti yang Harus Ditekankan

- Experiment tracking merekam empat pilar utama: hyperparameter, metrik, artifact/model, dan environment/kode, sehingga menghilangkan ketergantungan pada catatan manual.
- MLflow cocok untuk setup lokal atau on-premise dengan API sederhana (`start_run`, `log_param`, `log_metric`, `end_run`) yang mudah diintegrasikan ke pipeline scikit-learn atau custom script.
- Weights & Biases unggul dalam visualisasi real-time, manajemen proyek kolaboratif, dan dukungan native untuk sweep/hyperparameter tuning skala besar.
- Penggunaan tool tracking adalah standar mutlak dalam penelitian S2/Data Mining modern untuk memastikan transparansi, efisiensi komputasi, dan kemudahan replikasi hasil oleh reviewer atau peneliti lain.

### Transisi ke Slide Berikutnya

Untuk memastikan bahwa seluruh praktik tracking ini benar-benar menghasilkan penelitian yang dapat direplikasi oleh pihak eksternal, kita perlu menerjemahkan catatan eksperimen tersebut ke dalam bentuk dokumen verifikasi yang terstruktur. Mari kita lanjutkan ke slide berikutnya untuk membahas checklist reproduktibilitas minimum yang wajib dipenuhi dalam penulisan paper data mining.

---

## Slide 034 - Reproducibility Checklist untuk Penelitian Data Mining

### Narasi

Setelah kita mempelajari cara mencatat setiap variabel eksperimen melalui platform seperti MLflow atau Weights & Biases pada slide sebelumnya, langkah logis berikutnya adalah memastikan bahwa seluruh alur penelitian dapat direproduksi secara independen oleh peneliti lain. Reproduksibilitas bukan sekadar formalitas akademik, melainkan prasyarat fundamental untuk validitas ilmiah, khususnya dalam data mining di mana hasil model sangat sensitif terhadap urutan operasi, kondisi lingkungan komputasi, dan variasi acak. Tanpa dokumentasi yang ketat, eksperimen yang tampak menjanjikan dapat gagal diverifikasi saat dijalankan di mesin atau versi library yang berbeda.

Checklist minimum yang harus dipenuhi terdiri dari delapan komponen inti. Pertama, versi dataset dan sumber data harus dicatat secara eksplisit karena pembaruan data atau perubahan skema dapat menggeser distribusi dan merusak konsistensi hasil. Kedua, preprocessing pipeline wajib didokumentasikan secara rinci, mencakup teknik handling missing value, normalisasi/scaling, encoding kategorikal, serta transformasi fitur, agar alur manipulasi data dapat diikuti ulang tanpa asumsi tersirat. Ketiga, daftar hyperparameter beserta ruang pencarian (search space) perlu dijabarkan lengkap, termasuk strategi sampling jika menggunakan randomized atau Bayesian search. Keempat, jumlah trial atau budget tuning harus dinyatakan secara numerik, karena klaim keunggulan model tidak dapat dinilai tanpa mengetahui intensitas pencarian parameter yang dilakukan. Kelima, random seed harus ditetapkan dan dilaporkan untuk mengontrol non-determinisme dalam inisialisasi model, pengacakan data, maupun pembagian subset train-validation-test. Keenam, versi library dan environment harus dicantumkan, mengingat perbedaan minor pada scikit-learn, pandas, atau NumPy sering kali mengubah implementasi algoritma secara halus. Ketujuh, seluruh source code harus diunggah ke repository publik seperti GitHub dengan struktur direktori yang jelas. Kedelapan, instruksi menjalankan eksperimen dari nol harus tersedia, biasanya berupa script eksekusi utama atau notebook Jupyter yang dapat di-render secara end-to-end.

Untuk memenuhi standar penelitian tingkat magister, terdapat beberapa praktik tambahan yang sangat disarankan. Menyimpan konfigurasi eksperimen dalam file YAML atau JSON memisahkan parameter dari logika kode, sehingga memudahkan replikasi dan modifikasi cepat. Melaporkan hasil lengkap, bukan hanya metrik agregat seperti accuracy atau F1-score, memungkinkan auditor penelitian memeriksa confusion matrix, calibration plot, atau distribusi residual. Terakhir, penggunaan virtual environment atau container Docker menjamin isolasi dependensi sistem operasi dan package manager, sehingga menghilangkan masalah inkonsistensi lingkungan yang umum menghambat verifikasi eksternal.

### Inti yang Harus Ditekankan

- Reproduksibilitas adalah fondasi validitas penelitian data mining; tanpa dokumentasi lengkap, hasil eksperimen tidak dapat divalidasi secara ilmiah.
- Checklist mencakup transparansi data, kode, environment, dan konfigurasi tuning sebagai standar wajib untuk penelitian tingkat S2.
- Integrasi antara experiment tracking (slide 33) dan open science practices (Docker, YAML config, public repo) membentuk ekosistem penelitian yang robust dan auditable.

### Transisi ke Slide Berikutnya

Dengan checklist reproduksibilitas yang terpenuhi, kita telah membangun landasan yang solid untuk membandingkan eksperimen secara adil dan transparan. Namun, ketika dua pendekatan menunjukkan selisih performa, tantangan interpretatif berikutnya muncul: apakah peningkatan tersebut benar-benar berasal dari inovasi metodologis, atau sekadar akibat dari alokasi budget tuning yang lebih besar? Mari kita bedah bagaimana melakukan analisis hasil yang objektif dan menghindari bias evaluasi.

---

## Slide 035 - Interpretasi Hasil: Improvement karena Metode atau Tuning?

### Narasi

Setelah memastikan seluruh pipeline eksperimen dapat direproduksi melalui checklist yang telah dibahas pada slide sebelumnya, langkah kritis berikutnya adalah melakukan interpretasi hasil yang ketat dan objektif. Dalam konteks penelitian data mining tingkat magister, pertanyaan fundamental yang sering muncul saat membandingkan proposed method dengan baseline adalah: apakah peningkatan metrik evaluasi benar-benar berasal dari inovasi arsitektur atau mekanisme pembelajaran yang diusulkan, atau sekadar akibat dari proses tuning hyperparameter yang lebih intensif dan memakan waktu? Tanpa analisis yang tepat, klaim keunggulan metode rentan terjebak dalam bias optimisasi yang menyesatkan.

Untuk menjawab pertanyaan ini secara metodologis, kita wajib membandingkan performa antar metode dengan alokasi *tuning budget* atau jumlah trial yang setara. Membandingkan 100 trial Random Search pada metode baru dengan hanya 10 trial Grid Search pada baseline bukanlah perbandingan yang valid. Salah satu teknik visualisasi yang sangat efektif adalah绘制 learning curve yang memetakan performa model terhadap jumlah trial atau iterasi tuning. Dari kurva ini, kita dapat mengamati apakah metode baru mencapai plateau lebih cepat, atau justru membutuhkan ratusan trial tambahan untuk meningkatkan skor secara marginal. Jika kurva metode baru terus naik drastis di area high-budget sementara baseline sudah stabil, ini mengindikasikan kebutuhan resource yang tidak proporsional.

Selain itu, kita harus secara eksplisit memeriksa apakah metode baru memang memerlukan sumber daya komputasi atau waktu training yang jauh lebih besar dibandingkan pendekatan konvensional. Peningkatan margin error sebesar 0.5% mungkin terdengar menarik secara statistik, tetapi jika hal itu menuntut dua kali lipat waktu inference atau memori GPU yang signifikan, nilai kontribusi ilmiah dan kelayakan deploy-nya perlu dipertanyakan. Di sinilah *ablation study* menjadi instrumen wajib. Dengan menonaktifkan atau mengganti komponen-komponen spesifik dalam proposed method secara bertahap, kita dapat mengisolasi kontribusi masing-masing bagian terhadap peningkatan performa akhir. Ini membuktikan bahwa improvement bukan hanya datang dari pencarian parameter terbaik, melainkan dari desain algoritma itu sendiri.

Aspek pelaporan juga tidak boleh diabaikan. Setiap paper atau laporan penelitian harus menyertakan detail *computational cost*, kompleksitas waktu, dan durasi inference sebagai bagian dari evaluasi holistik. Mengabaikan faktor ini akan menciptakan kesenjangan antara teori dan praktik deployment di dunia nyata. Kesimpulannya, membuat pernyataan keberhasilan atau keunggulan metode tanpa mendokumentasikan dan menyeimbangkan budget tuning serta overhead komputasinya merupakan *threat to validity* yang serius dalam standar penelitian terindeks Scopus. Fair comparison bukan hanya soal metrik akurasi atau F1-score, tetapi juga tentang efisiensi sumber daya dan isolasi variabel eksperimen yang ketat.

### Inti yang Harus Ditekankan

- Performa model tidak boleh dinilai hanya berdasarkan angka metrik tertinggi; perlu dibuktikan bahwa improvement berasal dari desain metode, bukan dari kelebihan budget tuning.
- Penggunaan learning curve dan ablation study adalah standar metodologis wajib untuk mengisolasi kontribusi komponen dan memvalidasi efisiensi pencarian parameter.
- Pelaporan computational cost dan waktu inference harus menjadi bagian integral dari eksperimen, karena ketidakseimbangan resource merupakan threat to validity utama dalam penelitian data mining.

### Transisi ke Slide Berikutnya

Dengan pemahaman bahwa fair comparison dan validitas eksperimen bergantung pada keseimbangan budget dan isolasi komponen, kita kini siap memasuki tahap implementasi konkret. Pada slide berikutnya, kita akan membahas bagaimana menerapkan proposed method secara sistematis, memastikan tracking eksperimen yang rapi, dan menjaga konsistensi protokol evaluasi agar setiap temuan tetap grounded pada evidence yang kuat.

---

## Slide 036 - Research Project: Implementasi Proposed/Selected Method

### Narasi

Pada tahap ini, proyek penelitian Anda memasuki fase krusial, yaitu implementasi dari metode yang telah Anda usulkan atau pilih berdasarkan gap analisis sebelumnya. Setelah minggu lalu kita membedah pentingnya memisahkan kontribusi algoritma baru versus sekadar tuning intensif, sekarang saatnya menerjemahkan ide tersebut ke dalam kode dan eksperimen nyata. Fokus utama adalah menerapkan proposed method secara ketat sesuai dengan research question yang telah dirumuskan, tanpa melakukan perubahan substansial pada tujuan penelitian di tengah proses eksekusi.

Dalam konteks penelitian tingkat magister, proses penyetelan parameter tidak boleh dilakukan secara ad-hoc atau tanpa batas. Anda wajib menggunakan teknik hyperparameter tuning yang adil (*fair*) dan terdokumentasi dengan rapi. Manfaatkan tools otomatisasi seperti AutoML atau framework Optuna untuk mengeksplorasi ruang pencarian konfigurasi secara sistematis. Pastikan bahwa *computational budget* yang dialokasikan untuk proposed method setara dengan baseline. Jika baseline hanya menjalani serangkaian trial tertentu, proposed method juga harus dibatasi pada jumlah trial dan sumber daya yang sama agar perbandingan performa tetap valid dan bebas dari bias komputasi.

Aspek lain yang menjadi standar publikasi internasional adalah *experiment tracking* dan *reproducibility*. Setiap eksekusi eksperimen harus dicatat secara granular: versi dependensi ekosistem Python (pandas, NumPy, scikit-learn, dll), nilai random seed, pipeline preprocessing data, arsitektur model, serta log metrik evaluasi per iterasi. Simpan semua artefak ini menggunakan mekanisme tracking yang konsisten. Siapkan struktur direktori proyek yang modular, pisahkan data mentah, skrip preprocessing, kode pelatihan, dan file konfigurasi YAML/JSON. Pendekatan ini memastikan bahwa eksperimen Anda dapat direplikasi oleh reviewer atau peneliti lain tanpa ambiguitas.

Konsistensi protokol evaluasi juga harus dijaga. Strong baseline yang telah dibahas sebelumnya perlu dievaluasi ulang dengan protokol identik terhadap proposed method. Validitas klaim peningkatan performa hanya dapat dibuktikan jika kedua model dibandingkan pada partisi data yang sama, metrik yang konsisten, dan lingkungan komputasi yang terkontrol. Pada sesi research clinic hari ini, gunakan waktu untuk mendiskusikan hambatan implementasi secara teknis, mulai dari isu konvergensi, bottleneck memori, hingga ketidakcocokan asumsi metode dengan distribusi data. Catat temuan ini sebagai bahan awal untuk ablation study dan analisis kesalahan di tahap selanjutnya.

### Inti yang Harus Ditekankan

- Implementasi proposed method harus selaras ketat dengan research question dan tidak menyimpang di tengah jalan.
- Hyperparameter tuning wajib bersifat adil (*fair*), terdokumentasi, dan dibatasi oleh *computational budget* yang setara dengan baseline.
- Penggunaan Optuna atau AutoML disarankan untuk eksplorasi konfigurasi yang sistematis, efisien, dan mudah direproduksi.
- *Experiment tracking* dan *reproducibility* adalah syarat mutlak; simpan kode, konfigurasi, data, dan log eksperimen secara terstruktur.
- Perbandingan performa hanya valid jika menggunakan protokol evaluasi, split data, dan metrik yang identik antara proposed method dan strong baseline.
- Sesi research clinic berfungsi sebagai forum troubleshooting teknis dan pendokumentasian hambatan eksperimen untuk perbaikan metodologis.

### Transisi ke Slide Berikutnya

Dengan implementasi dan pelacakan eksperimen yang solid, fondasi metodologis penelitian Anda sudah siap untuk dianalisis lebih lanjut. Sebelum kita menutup pertemuan ini, pastikan semua log eksperimen dan catatan implementasi telah tersimpan rapi. Pertemuan berikutnya akan membahas topik lanjutan yang sangat relevan dengan perkembangan terkini, yaitu Graph Mining dan Graph Neural Networks.

---

## Slide 037 - Penutup

### Narasi

Kita telah menyelesaikan rangkaian pembahasan pada pertemuan ini dengan menutup fase implementasi proposed method dalam proyek riset kalian. Seperti yang telah diuraikan sebelumnya, tahap implementasi bukan sekadar menerjemahkan ide menjadi kode Python, melainkan menjalankan protokol eksperimen yang ketat dan terstandarisasi. Penggunaan teknik hyperparameter tuning yang adil, integrasi tools seperti AutoML atau Optuna, serta pencatatan sistematis melalui experiment tracking menjadi pilar utama yang membedakan praktik industri dengan penelitian akademis tingkat lanjut. Tanpa dokumentasi konfigurasi, seed acak, dan pipeline preprocessing yang transparan, hasil eksperimen tidak dapat diverifikasi ulang, sehingga nilai kontribusi ilmiahnya menjadi lemah.

Dalam konteks evaluasi proyek minggu ini, pastikan bahwa proposed method selalu dibandingkan secara head-to-head dengan strong baseline menggunakan skema cross-validation, split data, dan metrik penilaian yang identik. Klaim peningkatan performa hanya dapat diterima jika perbedaan tersebut konsisten dan didukung oleh analisis mendalam seperti ablation study, error analysis, serta pengujian robustness terhadap noise atau distribusi data yang berubah. Selama research clinic, jangan ragu untuk mendiskusikan bottleneck komputasi, masalah konvergensi model, atau bias implisit dalam dataset, karena refleksi kritis inilah yang akan memperkuat argumen pada bab metodologi dan hasil eksperimen di paper akhir kalian.

Sebagai penutup sesi ini, ingatlah bahwa penguasaan sintaks library seperti scikit-learn, pandas, atau Matplotlib hanyalah alat bantu. Fokus utama pada jenjang magister adalah kemampuan merancang eksperimen yang fair, mengelola kompleksitas pencarian ruang hiperparameter, dan mempertahankan integritas reproduktibilitas sepanjang siklus penelitian. Setiap baris kode yang kalian commit, setiap file YAML konfigurasi yang kalian simpan, dan setiap grafik evaluasi yang kalian plot adalah bukti empiris yang akan mendukung klaim riset kalian saat menghadapi review di konferensi internasional.

### Inti yang Harus Ditekankan

- Implementasi proposed method wajib mengutamakan fair comparison dengan baseline dan penggunaan hyperparameter tuning yang terdokumentasi secara lengkap.
- Reproducibility dan experiment tracking adalah standar mutlak untuk menjamin validitas, transparansi, dan kredibilitas penelitian data mining tingkat magister.
- Error analysis, ablation study, dan diskusi kritis selama research clinic menjadi fondasi penting sebelum masuk ke tahap penulisan dan submission paper.

### Transisi ke Slide Berikutnya

Dengan pondasi metodologi dan disiplin eksperimen yang telah kita bangun hari ini, kita siap memasuki ranah pemodelan data yang lebih kompleks dan struktural. Pada pertemuan berikutnya, kita akan membahas Graph Mining dan Graph Neural Networks, sebuah pendekatan yang mengubah cara kita mengekstraksi pola dan melakukan inferensi pada data yang saling terhubung secara relasional. Sampai jumpa di sesi selanjutnya.
