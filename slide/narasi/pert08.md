# Narasi TD Data Mining - Pertemuan 08

## Critical International Paper Review & Research Proposal Seminar

Sumber: markdown/pert08-critical-international-paper-review-research-proposal-seminar.md

---

## Slide 000 - Cover

### Narasi

Pertemuan kedelapan ini menandai transisi strategis dalam kurikulum Topik Dalam Data Mining, di mana penekanan bergeser sepenuhnya dari penerapan teknik komputasi menuju penguasaan metodologi penelitian tingkat magister. Pada jenjang ini, kemampuan mengimplementasikan algoritma melalui Python, pandas, atau scikit-learn hanyalah fondasi awal. Yang menjadi tuntutan utama adalah kapasitas untuk melakukan evaluasi ilmiah yang ketat, mengidentifikasi celah penelitian yang signifikan, dan merancang studi empiris yang dapat dipertanggungjawabkan secara akademis. Slide ini membuka sesi yang secara khusus difokuskan pada dua pilar utama: tinjauan kritis terhadap literatur internasional terindeks Scopus dan seminar penyempurnaan proposal penelitian versi pertama.

Tinjauan kritis yang akan dilaksanakan bukan sekadar ringkasan isi paper, melainkan bedah metodologis yang menilai konsistensi antara research problem, gap, dan pertanyaan penelitian. Evaluasi mencakup ketepatan pemilihan dataset, kekuatan baseline eksperimen, keadilan desain pengujian, serta kejelasan bukti empiris yang mendukung klaim kontribusi ilmiah. Secara paralel, proposal penelitian V1 yang Anda bawa ke ruang ini merupakan hasil sintesis dari proses identifikasi masalah, pemilihan metode, dan perencanaan eksperimen yang telah Anda kembangkan sepanjang semester. Sesi ini berfungsi sebagai mekanisme validasi akademik untuk memastikan bahwa setiap komponen penelitian telah memenuhi standar kelayakan sebelum memasuki tahap eksekusi lapangan.

Struktur diskusi dirancang agar memberikan umpan balik yang langsung, terukur, dan actionable. Setiap presentasi akan ditelaah berdasarkan kedalaman analisis kritis, koherensi logika penelitian, serta kesiapan teknis pelaksanaan, termasuk rencana hyperparameter tuning, ablation study, error analysis, dan strategi mitigasi bias data. Hasil feedback dari dosen maupun rekan sejawat akan menjadi bahan perbaikan substantif yang wajib diintegrasikan ke dalam draft final proposal Anda.

### Inti yang Harus Ditekankan

- Penilaian tidak lagi berfokus pada keberhasilan kode berjalan, melainkan pada rigor metodologis, validitas eksperimen, dan kejelasan scientific contribution.
- Tinjauan kritis wajib membedah seluruh komponen penelitian mulai dari research gap, RQ, baseline, hingga keterbatasan dan generalisasi model.
- Proposal V1 harus sudah memiliki blueprint eksperimen yang lengkap: dataset, metrik evaluasi, prosedur training/validation/test, dan rencana analisis kesalahan.
- Sesi ini berperan sebagai gatekeeping akademik; proposal yang belum memenuhi standar kelayakan harus direvisi secara substansial sebelum tahap implementasi.

### Transisi ke Slide Berikutnya

Untuk memetakan secara rinci kompetensi yang harus Anda capai dan urutan kegiatan yang akan dijalankan selama pertemuan ini, mari kita lanjutkan ke slide berikutnya yang menjelaskan tujuan pembelajaran serta alur sesi tinjauan paper dan seminar proposal.

---

## Slide 001 - Tujuan Pertemuan dan Peta Sesi

### Narasi

Pada pertemuan ini, fokus utama perkuliahan bergeser dari pemahaman teoritis menuju implementasi metodologi penelitian tingkat magister. Mahasiswa dituntut untuk secara aktif menguji kemampuan analisis kritis terhadap literatur ilmiah internasional terindeks Scopus. Presentasi Critical International Paper Review bukan sekadar rangkuman isi jurnal, melainkan bedah struktural yang mengurai setiap elemen kunci: mulai dari perumusan research problem dan identifikasi research gap, hingga formulasi research question yang presisi. Analisis harus mencakup evaluasi mendalam terhadap desain metodologi, pemilihan dataset, penggunaan baseline yang relevan, serta kerangka experimental design yang ketat. Validitas temuan, bukti empiris (evidence), pengakuan atas limitation, dan klaim scientific contribution menjadi parameter utama dalam menilai kualitas sebuah publikasi. Kemampuan mendekomposisi komponen-komponen ini adalah fondasi wajib sebelum mahasiswa merancang penelitian orisinal mereka sendiri.

Selain itu, sesi ini juga berfungsi sebagai stage pertama untuk validasi Research Proposal V1. Proposal yang dipresentasikan harus sudah memenuhi standar kelayakan eksekusi, mencakup latar belakang masalah yang jelas, tujuan penelitian yang terukur, serta rencana kerja yang realistis. Proses presentasi diikuti oleh mekanisme peer review dan research defense, di mana argumen metodologis dan teknis proposal akan diuji langsung oleh rekan sejawat dan dosen. Mekanisme ini dirancang untuk mengasah ketajaman argumentasi, mengidentifikasi celah logika atau kelemahan teknis sejak dini, serta memastikan bahwa setiap proposal memiliki arah penelitian yang kuat sebelum masuk ke tahap pengumpulan data dan implementasi algoritma.

Peta sesi yang terstruktur dibagi menjadi dua bagian utama untuk memaksimalkan efektivitas pembelajaran. Bagian pertama difokuskan sepenuhnya pada Critical International Paper Review, yang meliputi presentasi mahasiswa, diskusi terbuka melalui peer review, dan penyampaian feedback konstruktif dari dosen. Setelah fase tersebut selesai, sesi berlanjut ke Bagian Kedua berupa Research Proposal Seminar, di mana mahasiswa mempresentasikan proposal V1, menjalani proses research defense, dan menerima arahan tindak lanjut dari dosen. Pembagian waktu dan alur ini menjamin bahwa kedua kompetensi inti—analisis literatur kritis dan perancangan proposal penelitian—dibahas secara mendalam dengan standar akademik yang ketat, sekaligus menyiapkan pondasi kuat untuk proyek akhir semester ini.

### Inti yang Harus Ditekankan

- Analisis paper harus bersifat kritis dan komprehensif, bukan sekadar meringkas; penekanan utama pada identifikasi research gap, validitas metodologi, dan kejelasan scientific contribution.
- Research Proposal V1 harus siap dieksekusi secara teknis dan metodologis, dengan struktur yang lengkap sebelum memasuki tahap coding dan eksperimen.
- Peer review dan research defense berfungsi sebagai mekanisme quality control akademik yang wajib dijalani untuk menyempurnakan argumen dan memperkuat desain penelitian.
- Seluruh aktivitas selaras dengan standar penelitian S2 yang menekankan pada rigorous experimental design, ablation study, dan evidence-based conclusion.

### Transisi ke Slide Berikutnya

Untuk memastikan seluruh kegiatan berjalan tertib, terukur, dan sesuai dengan target capaian pembelajaran, mari kita tinjau rincian alokasi durasi serta alur teknis pelaksanaan seminar pada slide berikutnya.

---

## Slide 002 - Agenda Seminar dan Alur Kegiatan

### Narasi

Pada pertemuan kali ini, kita akan melaksanakan dua kegiatan inti yang menjadi titik balik dalam perjalanan penelitian kalian: Critical International Paper Review dan Research Proposal Seminar. Sesuai dengan tabel agenda di atas, alokasi waktu kelas kita dibagi secara proporsional untuk memastikan kedua sesi berjalan fokus dan produktif. Sepuluh persen pertama digunakan untuk pembukaan, penegasan tujuan pembelajaran, serta tata tertib seminar agar diskusi tetap terarah. Kemudian, kita meluangkan 25% waktu untuk presentasi ulasan kritis terhadap paper internasional terindeks Scopus. Sesi ini menuntut kalian untuk tidak hanya merangkum isi paper, tetapi membedah secara tajam komponen seperti research problem, gap, metodologi, baseline eksperimen, serta validitas dan kontribusi ilmiah yang ditawarkan.

Setelah presentasi paper, kita masuk ke sesi peer review dan tanya jawab yang memakan 15% waktu. Di sinilah kompetensi literatur review dan kemampuan berpikir kritis kalian diasah melalui interaksi antar-rekan mahasiswa. Masukan yang diberikan harus bersifat konstruktif, berbasis bukti, dan difokuskan pada identifikasi kelemahan metodologis atau peluang pengembangan yang bisa kalian manfaatkan. Porsi terbesar atau 30% dari pertemuan ini kemudian dialokasikan untuk presentasi Research Proposal V1. Proposal ini merupakan dokumen hidup yang telah kalian susun melalui serangkaian iterasi sebelumnya, mencakup perumusan pertanyaan penelitian, pemilihan dataset, strategi preprocessing, desain eksperimen, hingga rencana evaluasi model menggunakan tools seperti scikit-learn atau framework neural tabular.

Alur kegiatan yang terstruktur ini dirancang untuk meniru standar publikasi akademik sesungguhnya. Setelah proposal dipaparkan, kita lakukan research defense selama 10%, di mana dosen dan rekan mahasiswa akan menguji ketahanan argumen, mengevaluasi kelayakan teknik feature engineering, serta menantang asumsi dasar penelitian. Terakhir, 10% sisa waktu digunakan untuk feedback dosen dan penyusunan rencana tindak lanjut. Umpan balik pada tahap ini bersifat korektif dan strategis, bertujuan menyempurnakan proposal sebelum kalian memasuki fase implementasi teknis dan pengumpulan evidence empiris. Seluruh alur ini menjamin bahwa setiap langkah penelitian kalian divalidasi secara kolektif, meminimalkan bias desain, dan meningkatkan robustness hasil eksperimen yang akan dilaporkan nanti.

### Inti yang Harus Ditekankan

- Pembagian waktu yang ketat mencerminkan prioritas akademik tingkat magister: analisis literatur kritis dan pertahanan proposal lebih diutamakan daripada presentasi satu arah.
- Sesi peer review dan research defense berfungsi sebagai mekanisme quality gate untuk menguji ketajaman research question, kelayakan baseline, dan kesiapan metodologi sebelum eksekusi kode.
- Feedback dosen pada slide ini bersifat transformatif, menjembatani perencanaan teoretis (Proposal V1) dengan implementasi eksperimental dan ablation study yang akan dimulai di pertemuan berikutnya.

### Transisi ke Slide Berikutnya

Dengan memahami pembagian waktu dan alur kegiatan hari ini, mari kita tinjau bagaimana posisi pertemuan 08 ini menempati peta besar kurikulum semester ini, serta bagaimana materi minggu lalu tentang perumusan hipotesis dan penanganan imbalanced data menjadi fondasi kritis yang akan diuji dalam seminar proposal kita.

---

## Slide 003 - Kaitan dengan Pertemuan Sebelumnya dan Berikutnya

### Narasi

Pertemuan ini menempati posisi strategis sebagai titik balik dalam alur pembelajaran Semester ini. Jika kita melihat peta perjalanan dari Minggu 1 hingga 16, fase Minggu 1 sampai 7 difokuskan pada penguasaan fondasi metodologis dan perumusan masalah penelitian. Pertemuan ke-8 ini berfungsi sebagai gerbang validasi kritis sebelum mahasiswa melangkah ke tahap implementasi teknis. Pada fase ini, Anda tidak lagi sekadar mempelajari teori atau algoritma secara terisolasi, tetapi harus menguji kelayakan dan ketajaman kontribusi penelitian Anda melalui mekanisme seminar review paper dan presentasi proposal versi 1. Validasi ini memastikan bahwa setiap langkah eksperimen yang akan dilakukan di minggu-minggu berikutnya memiliki landasan ilmiah yang kuat dan terukur.

Secara spesifik, pertemuan ini merupakan kelanjutan langsung dari materi Pertemuan 07 yang membahas anomaly detection, penanganan imbalanced data, serta karakteristik rare events. Pada akhir sesi sebelumnya, Anda telah merumuskan research question dan hipotesis awal berdasarkan konteks permasalahan tersebut. Pertemuan 08 hadir untuk menguji apakah rumusan tersebut sudah cukup tajam, orisinal, dan memiliki research gap yang jelas. Melalui diskusi kritis terhadap paper internasional dan masukan dari peer review, Anda akan diajak untuk membedah kekuatan dan kelemahan argumen penelitian Anda sendiri. Proses ini melatih kemampuan reflektif dan akademis yang esensial bagi peneliti tingkat magister, di mana kejelasan tujuan penelitian menjadi prasyarat mutlak sebelum masuk ke lingkungan komputasi.

Setelah proposal divalidasi dan disempurnakan pada pertemuan ini, fokus pembelajaran akan bergeser total pada Pertemuan 09 menuju topik Deep & Representation Learning for Tabular Data. Proposal V1 yang telah lolos uji kritis akan menjadi acuan utama dalam pemilihan kandidat metode neural tabular yang paling relevan dengan research question Anda. Tahap selanjutnya adalah transisi dari desain konseptual ke eksekusi praktis. Anda akan mulai membangun strong baseline menggunakan ekosistem Python seperti scikit-learn, pandas, dan NumPy, kemudian secara bertahap mengintegrasikan arsitektur deep learning yang sesuai. Implementasi baseline yang robust ini sangat krusial karena akan menjadi tolak ukur objektif untuk mengukur peningkatan performa model yang Anda usulkan nantinya.

Secara keseluruhan, slide ini menegaskan bahwa penelitian data mining bersifat iteratif dan berbasis bukti. Setiap keputusan metodologis harus didahului oleh justifikasi literatur yang solid, dan setiap implementasi kode harus berawal dari baseline yang kompetitif. Penguasaan terhadap siklus ini—dari identifikasi gap, validasi proposal, hingga eksekusi eksperimen—merupakan indikator utama kesiapan Anda untuk menulis paper berkualitas internasional.

### Inti yang Harus Ditekankan

- Pertemuan 08 berfungsi sebagai *checkpoint* validasi kritis antara fase perumusan masalah dan fase implementasi eksperimen.
- Rumusan research question dan hipotesis dari Pertemuan 07 harus diuji ketajamannya melalui analisis paper internasional dan peer review.
- Proposal V1 yang telah divalidasi menjadi dasar penentuan metode Deep & Representation Learning untuk tabular data pada Pertemuan 09.
- Transisi ke Pertemuan 09 ditandai dengan pembangunan strong baseline menggunakan Python ecosystem sebagai standar pembanding objektif.
- Siklus penelitian data mining menuntut validasi literatur yang ketat sebelum eksekusi kode, mencerminkan standar akademik S2.

### Transisi ke Slide Berikutnya

Untuk memahami secara konkret kompetensi apa saja yang sedang diuji dalam proses validasi dan perencanaan penelitian ini, mari kita bahas capaian pembelajaran yang menjadi target evaluasi pada pertemuan kali ini.

---

## Slide 004 - Capaian Pembelajaran yang Diuji

### Narasi

Pada pertemuan ini, kita menguji kematangan akademis dan kesiapan penelitian Anda melalui tiga capaian pembelajaran utama yang saling beririsan. Sebagaimana telah dirumuskan pada pertemuan sebelumnya setelah sesi anomaly detection dan imbalanced data, Anda telah memiliki draft research question dan hipotesis awal. Fokus kini bergeser dari perumusan menuju tahap verifikasi kritis terhadap literatur internasional serta kelayakan eksekusi metodologis sebelum memasuki fase implementasi kode pada minggu berikutnya.

Pertama, kita menguji CPMK-2 atau Critical Literature Analysis. Pada jenjang magister, membaca paper tidak lagi bersifat deskriptif, melainkan evaluatif. Anda dituntut untuk membedah setiap paper data mining pilihan berdasarkan empat pilar: metodologi, desain eksperimen, kekuatan evidence, dan kontribusi intelektual. Evaluasi ini mencakup pemeriksaan apakah teknik preprocessing dan feature engineering yang dilaporkan sudah tepat untuk karakteristik dataset, apakah baseline yang digunakan sudah representatif dan fair, serta apakah klaim peningkatan performa didukung oleh uji signifikansi statistik atau ablation study yang rigor. Paper yang hanya mengandalkan akurasi tanpa analisis error atau robustness check akan dianggap kurang memenuhi standar publikasi internasional.

Kedua, kita beralih ke CPMK-3 tentang Research Problem dan Research Gap. Dari hasil kritik literatur tadi, Anda harus mampu memetakan keterbatasan state-of-the-art secara presisi. Gap penelitian tidak boleh bersifat umum seperti "metode lama belum optimal", melainkan harus spesifik, misalnya terkait skalabilitas pada high-dimensional tabular data, kerentanan model terhadap distribution shift, atau ketidakmampuan arsitektur existing menangani rare events secara efisien. Berdasarkan gap tersebut, rumusan research question dan hipotesis harus disempitkan kembali agar dapat diuji secara empiris. Hipotesis yang valid harus menghubungkan variabel independen (misalnya modifikasi arsitektur atau strategi sampling) dengan metrik dependen yang terukur, sehingga arah penelitian tetap terfokus dan dapat diverifikasi.

Ketiga, capaian pembelajaran yang menjadi target akhir adalah CPMK-6 mengenai Scientific Contribution dan Publication. Rencana penelitian yang Anda susun harus dikomunikasikan menggunakan konvensi penulisan akademik internasional. Ini berarti proposal harus menyajikan novelty yang jelas, positioning terhadap literature yang mapan, serta roadmap eksperimen yang transparan. Selain itu, melalui proses perancangan metodologi dan perencanaan evaluasi dalam dokumen ini, Anda secara tidak langsung juga melatih CPMK-4. Desain eksperimen yang matang mencakup pemilihan dataset representative, pembagian train-validation-test yang ketat, protokol hyperparameter tuning, serta metrik evaluasi multidimensi yang sesuai dengan konteks masalah bisnis atau ilmiah.

Seluruh capaian pembelajaran ini berfungsi sebagai filter kualitatif sebelum Anda memasuki tahap coding intensif. Kualitas analisis literatur langsung menentukan ketajaman identifikasi gap, yang selanjutnya menjadi fondasi logis bagi pemilihan algoritma, rancangan baseline, dan strategi validasi model. Tanpa kesesuaian antara gap, hipotesis, dan rencana eksperimen, implementasi teknis pada minggu-minggu berikutnya berisiko kehilangan arah dan sulit dipertanggungjawabkan secara ilmiah.

### Inti yang Harus Ditekankan

- Evaluasi literatur harus bersifat kritis dan berbasis bukti, bukan sekadar ringkasan; fokus pada validitas metodologi, kekuatan evidence, dan kejelasan kontribusi.
- Research gap harus spesifik dan terukur, sehingga research question dan hipotesis dapat diuji secara empiris dengan desain eksperimen yang reproducible.
- Proposal penelitian adalah dokumen operasional yang siap dieksekusi; novelty dan scientific contribution harus selaras dengan standar publikasi internasional terindeks Scopus.
- Perancangan eksperimen dalam proposal secara langsung melatih kompetensi CPMK-4, menjembatani teori literatur dengan implementasi praktis.

### Transisi ke Slide Berikutnya

Dengan pemahaman capaian pembelajaran yang telah diuraikan, langkah selanjutnya adalah menerjemahkan seluruh kriteria tersebut ke dalam bentuk dokumen konkret. Mari kita bedah secara rinci komponen-komponen wajib yang harus ada dalam Research Proposal V1 beserta standar kelayakan eksekusinya.

---

## Slide 005 - Output Wajib: Research Proposal V1

### Narasi

Setelah melalui proses evaluasi kritis terhadap paper internasional, pemetaan literatur, dan identifikasi research gap pada pertemuan sebelumnya, langkah selanjutnya adalah mentransformasi temuan konseptual tersebut ke dalam dokumen operasional yang terstruktur, yaitu Research Proposal V1. Proposal ini bukan sekadar rangkuman ide atau tinjauan pustaka biasa, melainkan blueprint penelitian yang akan menjadi acuan eksekusi kalian selama sisa semester. Sebagai mahasiswa pascasarjana, kalian dituntut untuk menunjukkan kedewasaan metodologis di mana setiap klaim ilmiah harus dapat dilacak, diuji, dan direplikasi.

Struktur proposal V1 terdiri dari tujuh komponen inti yang saling berkesinambungan. **Problem** harus dirumuskan dengan konteks yang spesifik dan urgensi yang terukur, misalnya bottleneck akurasi pada data highly imbalanced, overhead komputasi yang menghambat inference real-time, atau kerentanan model terhadap distribution shift. **Gap** merupakan cerminan langsung dari critical literature analysis yang telah kalian lakukan, di mana kalian harus secara eksplisit menyatakan keterbatasan metodologis, empiris, atau teoretis dari studi terdahulu yang belum tercover. **Research Question** harus bersifat empiris dan dapat diuji, menghindari pertanyaan deskriptif atau normatif yang tidak mengarah pada pengujian hipotesis terstruktur. **Dataset** mencakup kandidat data beserta karakteristik awalnya seperti dimensi, tipe fitur, distribusi target, ketersediaan label, serta potensi kebutuhan preprocessing dan feature engineering, sehingga kelayakan eksperimen dapat divalidasi sejak dini.

Komponen lanjutan menentukan rigor akademik proposal. **Baseline** wajib dipilih berdasarkan kekuatan dan keadilan perbandingan, bukan sekadar model default yang mudah diimplementasikan. Baseline yang kuat membuktikan bahwa peningkatan performa yang kalian klaim berasal dari inovasi metode, bukan dari konfigurasi atau tuning yang bias. **Methodology** menjelaskan rancangan teknis pendekatan yang diusulkan, termasuk mekanisme integrasi representasi, arsitektur model, strategi optimasi, atau pipeline preprocessing yang dirancang khusus untuk menutup gap yang telah diidentifikasi. **Experimental Plan** merinci protokol evaluasi, metrik kinerja yang relevan dengan problem statement, desain validasi (misalnya cross-validation atau train-test split berbasis temporal), serta rencana ablation study dan error analysis yang akan memastikan transparansi dan reproduktibilitas hasil.

Terkait kriteria penyampaian, proposal V1 harus memenuhi tiga syarat mutlak agar siap masuk tahap implementasi. Pertama, proposal harus **dapat dieksekusi** secara realistis pada minggu ke-09 hingga ke-14, artinya scope penelitian tidak boleh terlalu ambisius atau bergantung pada infrastruktur yang tidak tersedia. Kedua, panjang dokumen dibatasi 2–4 halaman untuk melatih kemampuan kalian menulis secara padat, fokus, dan menghindari pemborosan ruang pada penjelasan yang sudah baku dalam literatur. Ketiga, proposal wajib disertai slide presentasi singkat dan daftar referensi awal sebagai bahan diskusi seminar, karena kemampuan mengkomunikasikan penelitian secara visual dan akademis sama pentingnya dengan isi teknis penelitian itu sendiri.

Penekanan utama pada tahap ini adalah konsistensi logis antara gap yang ditemukan, pertanyaan penelitian yang diajukan, dan metode yang dirancang. Proposal V1 berfungsi sebagai kontrak akademik antara mahasiswa dan dosen pembimbing, sehingga setiap elemen harus didukung oleh evidence awal dari EDA, benchmark sederhana, atau analisis statistik deskriptif. Dengan struktur yang rapi dan kriteria yang ketat, kalian sedang dilatih untuk berpikir seperti peneliti profesional yang siap berkontribusi pada komunitas data mining tingkat internasional.

### Inti yang Harus Ditekankan

- Proposal V1 adalah blueprint operasional, bukan sekadar rangkuman ide teoritis atau tinjauan pustaka.
- Setiap komponen (Problem, Gap, RQ, Dataset, Baseline, Methodology, Experimental Plan) harus terhubung secara logis, empiris, dan dapat diuji.
- Kriteria eksekusi (minggu 09–14), batasan panjang (2–4 halaman), dan kelengkapan materi presentasi & referensi adalah syarat mutlak untuk seminar.
- Fokus pada keadilan perbandingan baseline dan kejelasan protokol evaluasi sebagai indikator kesiapan publikasi dan rigor akademik S2.

### Transisi ke Slide Berikutnya

Dokumen ini merupakan hasil akumulatif dari progres mingguan yang telah kalian jalani sejak minggu pertama. Mari kita tinjau alur penelitian secara bertahap, mulai dari pencarian candidate area hingga final defense, serta refleksi kritis mengenai pengetahuan baru yang seharusnya kalian kuasai pada titik ini dibandingkan minggu-minggu sebelumnya.

---

## Slide 006 - Alur Research Project Menuju Proposal

### Narasi

Setelah kita menguraikan komponen-komponen struktural yang wajib hadir dalam Research Proposal V1 pada slide sebelumnya, mari kita tarik benang merahnya dengan melihat peta jalan penelitian secara keseluruhan. Slide ini memetakan kronologi kerja dari awal semester hingga akhir, menempatkan posisi Anda secara eksplisit pada Minggu ke-8 sebagai titik konsolidasi sebelum masuk ke fase implementasi teknis. Dalam konteks penelitian jenjang S2, alur ini bukan sekadar jadwal administratif, melainkan kerangka metodologis yang menjamin setiap keputusan analitis didukung oleh bukti empiris dan tinjauan literatur yang matang.

Fase eksplorasi dan pemetaan berlangsung pada Minggu 1 hingga 3, di mana mahasiswa bertugas mencari kandidat area riset, mengidentifikasi dataset yang relevan, melakukan Initial EDA untuk memverifikasi kualitas dan distribusi data, serta menyusun literature mapping untuk memposisikan diri dalam lanskap penelitian global. Pada Minggu 4 hingga 5, fokus bergeser ke validasi teknis: membangun strong baseline menggunakan tool standar seperti scikit-learn atau pandas, mengukur performa acuan, dan mulai merajut kandidat research gap berdasarkan ketidakmampuan baseline dalam menangani karakteristik data atau masalah spesifik. Minggu 6 hingga 7 menjadi periode penajaman kritis, di mana gap dikonfirmasi melalui uji coba terbatas, Research Question dirumuskan secara operasional dan terukur, serta hipotesis diturunkan agar dapat diuji secara statistik atau komputasional.

Puncak dari fase pra-eksperimen ini adalah pengumpulan seluruh artefak menjadi Research Proposal V1 pada Minggu 8, yang merupakan posisi kita saat ini. Setelah proposal mendapatkan persetujuan, alur berlanjut ke implementasi kode pada Minggu 9 hingga 10, diikuti eksekusi eksperimen primer dan perluasan parameter pada Minggu 11 hingga 12. Analisis lanjutan mencakup robustness testing, explainability modeling, dan ablation study pada Minggu 13 hingga 14. Terakhir, Minggu 15 hingga 16 didedikasikan untuk penulisan naskah berkualitas konferensi Scopus dan persiapan final defense.

Pertanyaan kunci yang tercantum di slide ini—“Apa yang sudah diketahui pada minggu ini yang belum diketahui minggu sebelumnya?”—berfungsi sebagai mekanisme kontrol kualitas akademik. Dalam praktik data mining, kemajuan penelitian diukur dari akumulasi klaim yang terverifikasi: apakah baseline sudah stabil, apakah dataset memenuhi syarat ukuran dan kebersihan, apakah RQ benar-benar menjembatani gap literatur, dan apakah metrik evaluasi sudah ditetapkan sejak dini. Jika respons terhadap pertanyaan ini masih bersifat asumsi, maka proposal belum siap dieksekusi dan berisiko tinggi mengalami kebuntuan saat memasuki fase coding dan eksperimen.

### Inti yang Harus Ditekankan

- Alur penelitian bersifat bertahap dan saling bergantung; setiap minggu memiliki deliverables spesifik yang menjadi fondasi teknis dan konseptual minggu berikutnya.
- Minggu 8 bukan sekadar tenggat administratif, melainkan titik konsolidasi antara eksplorasi data, pemetaan literatur, dan perumusan masalah yang terukur serta dapat diuji.
- Pertanyaan reflektif “apa yang baru diketahui” berperan sebagai filter metodologis untuk memastikan proposal berbasis evidence, bukan spekulasi teoritis semata.
- Disiplin mengikuti alur ini meminimalkan risiko wasted effort pada fase implementasi, karena semua variabel, hipotesis, dan metrik telah distandardisasi sebelumnya.

### Transisi ke Slide Berikutnya

Memahami peta waktu ini membawa kita langsung ke struktur pertemuan hari ini, yang secara sengaja dirancang untuk memvalidasi kesiapan Anda di Minggu 8 melalui dua aktivitas paralel: critical review paper internasional dan seminar proposal. Mari kita bedah bagaimana keduanya saling melengkapi dalam mempertajam arah penelitian Anda.

---

## Slide 007 - Dua Komponen Utama Pertemuan

### Narasi

Pada pertemuan ini, kita akan membahas dua komponen utama yang menjadi tulang punggung aktivitas akademik dan penelitian kalian selama semester berjalan. Komponen pertama adalah **Critical International Paper Review**. Tujuannya bukan sekadar membaca paper terindeks Scopus, melainkan membedahnya secara mendalam untuk memahami standar penelitian berkualitas tinggi. Dalam proses ini, kalian diajak untuk mengidentifikasi kekuatan metodologis, celah atau kelemahan dalam desain eksperimen, serta peluang riset lanjutan yang belum tersentuh oleh penulis sebelumnya. Kemampuan ini sangat krusial karena pada jenjang magister, penekanan diberikan pada kemampuan menilai validitas, kontribusi ilmiah, dan rigoritas suatu karya sebelum mengembangkan ide penelitian sendiri.

Komponen kedua adalah **Research Proposal Seminar**. Di sini, fokusnya bergeser dari analisis karya orang lain menjadi pertahanan rencana penelitian kalian sendiri. Presentasi proposal V1 yang telah disusun sejak minggu-minggu sebelumnya akan dilanjutkan dengan sesi *research defense*. Dosen dan rekan diskusi akan memberikan umpan balik kritis untuk menyempurnakan rumusan masalah, hipotesis, metodologi, hingga rencana eksperimen. Hasil akhirnya adalah proposal V1 yang sudah diperbaiki dan siap diimplementasikan pada tahap eksperimen berikutnya.

Kedua komponen ini memiliki hubungan simbiosis yang sangat erat, sebagaimana digambarkan dalam skema slide. Melalui *critical review*, kalian belajar mengenali *research gap* dan kelemahan pendekatan yang ada di literatur. Pengetahuan ini kemudian diterapkan secara langsung dalam *research proposal seminar* untuk mempertajam rencana penelitian kalian sendiri, merancang eksperimen yang lebih robust, dan menghindari jebakan metodologis yang sering ditemukan pada paper sejenis. Hubungan timbal balik ini memastikan bahwa setiap langkah penelitian kalian didasarkan pada pemahaman mendalam terhadap *state-of-the-art* sekaligus responsif terhadap masukan akademis.

Sebagaimana alur proyek penelitian yang telah kita tentukan pada pertemuan sebelumnya, posisi kita saat ini tepat pada titik kumpul pembuatan Proposal V1 di Minggu ke-8. Setelah menyelesaikan review kritis dan seminar proposal hari ini, kita akan segera masuk ke detail teknis penyusunan proposal, dimulai dengan mendefinisikan fondasi awal penelitian yang paling krusial.

### Inti yang Harus Ditekankan

- **Critical International Paper Review** bertujuan membangun literasi penelitian tingkat tinggi dengan menganalisis kelebihan, kekurangan, dan celah riset (*gap*) dalam paper internasional terindeks Scopus secara sistematis.
- **Research Proposal Seminar** berfungsi sebagai mekanisme validasi akademik melalui *defense*, menghasilkan proposal V1 yang telah disempurnakan berdasarkan umpan balik konstruktif dari dosen dan peer reviewer.
- Terdapat hubungan sinergis antar-keduanya: insight dari review langsung diintegrasikan ke dalam proposal untuk memperkuat metodologi, memperjelas kontribusi novelty, dan meningkatkan kualitas eksperimen yang akan dijalankan.

### Transisi ke Slide Berikutnya

Untuk memulai penyusunan proposal yang solid, hal pertama yang harus kita bangun adalah konteks penelitian yang jelas dan berbasis bukti. Mari kita bedah bersama bagaimana merumuskan *research context* yang efektif, mulai dari identifikasi fenomena nyata hingga kaitannya dengan literatur terkini.

---

## Slide 008 - Komponen Review: Research Context

### Narasi

Pada tahap awal penulisan atau review paper, komponen pertama yang harus dibedah secara kritis adalah Research Context atau konteks penelitian. Secara mendasar, konteks penelitian merujuk pada latar belakang permasalahan yang menjadi justifikasi utama mengapa sebuah riset perlu dilakukan. Dalam level magister, konteks ini tidak boleh bersifat generik atau hanya berdasarkan asumsi subjektif. Sebaliknya, ia harus dibangun melalui observasi fenomena nyata yang kemudian dikaitkan secara sistematis dengan literatur akademik yang relevan. Proses ini menciptakan narasi yang koheren antara kebutuhan praktis di lapangan dan kontribusi teoritis yang diharapkan dari penelitian.

Untuk menilai kualitas sebuah konteks penelitian, baik saat melakukan critical review maupun menyusun proposal, kita harus mengajukan empat pertanyaan kunci secara berurutan. Pertama, apa tepatnya permasalahan yang ingin diselesaikan? Masalah harus dirumuskan secara spesifik agar ruang lingkup penelitian tetap terukur. Kedua, mengapa masalah tersebut signifikan bagi dunia nyata maupun perkembangan akademik? Signifikansi ini biasanya terlihat dari dampak ekonomi, efisiensi operasional, atau kemajuan metodologis. Ketiga, siapa saja pihak yang akan terdampak langsung maupun tidak langsung oleh solusi yang ditawarkan? Pemetaan pemangku kepentingan membantu mengarahkan desain eksperimen dan metrik evaluasi yang tepat. Keempat, apakah klaim pentingnya masalah tersebut didukung oleh data historis, statistik, atau bukti empiris? Di era data-driven, setiap pernyataan tentang urgensi masalah wajib disertai referensi data atau temuan studi pendahuluan yang valid.

Sebagai ilustrasi, mari kita lihat bagaimana konteks ini diterjemahkan ke dalam domain aplikasi data mining. Pada sektor keuangan, konteksnya sering kali berupa deteksi transaksi fraud pada dataset yang sangat tidak seimbang, di mana kelas positif mendominasi volume tetapi memiliki nilai risiko yang jauh lebih tinggi. Di bidang industri manufaktur, konteksnya bergeser ke prediksi kerusakan mesin secara dini untuk menghindari downtime yang mahal. Sementara itu, di sektor kesehatan, fokusnya adalah memprediksi risiko penyakit kronis berbasis rekam medis elektronik yang kompleks. Ketiganya menunjukkan bahwa meskipun domainnya berbeda, pola perumusan konteksnya tetap mengikuti kerangka yang sama: identifikasi fenomena, kuantifikasi dampak, dan penyediaan bukti pendukung.

Penting untuk dicatat bahwa konteks penelitian yang kuat selalu dimulai dari fenomena nyata, lalu ditautkan dengan celah pengetahuan yang ada di literatur. Hubungan dua arah inilah yang membedakan penelitian tingkat magister dari sekadar tugas teknis pemrograman. Dengan memahami konteks secara mendalam, kita tidak hanya tahu "bagaimana" menjalankan algoritma, tetapi juga "mengapa" algoritma tertentu dipilih dan "untuk apa" hasilnya akan digunakan. Hal ini menjadi fondasi yang sangat penting sebelum kita melangkah ke langkah selanjutnya, yaitu mengidentifikasi apa yang masih tertinggal dari kajian literatur tersebut.

### Inti yang Harus Ditekankan

- Konteks penelitian berfungsi sebagai justifikasi ilmiah yang menghubungkan fenomena dunia nyata dengan literatur akademik yang relevan.
- Setiap klaim urgensi masalah wajib didukung oleh data, statistik, atau bukti empiris, bukan sekadar opini atau asumsi.
- Perumusan konteks harus menjawab empat pilar: definisi masalah, signifikansi, pemangku kepentingan, dan dukungan data.
- Kualitas konteks yang solid merupakan prasyarat mutlak untuk mengidentifikasi research gap yang valid dan relevan.

### Transisi ke Slide Berikutnya

Setelah latar belakang dan urgensi masalah berhasil dipetakan dengan jelas, langkah logis berikutnya adalah menyoroti apa yang masih tertinggal dari kajian literatur tersebut. Poin inilah yang akan membawa kita langsung ke pembahasan mengenai Research Gap, di mana kita akan membedah sumber-sumber keterbatasan penelitian sebelumnya dan cara mengonversinya menjadi peluang riset yang konkret.

---

## Slide 009 - Komponen Review: Research Gap

### Narasi

Setelah pada slide sebelumnya kita membahas bagaimana merumuskan *research context* atau latar belakang permasalahan yang mendasari sebuah penelitian, langkah selanjutnya yang krusial dalam alur metodologi penelitian adalah mengidentifikasi *research gap*. Dalam konteks studi tingkat magister, *research gap* didefinisikan secara ketat sebagai keterbatasan, celah, atau temuan yang tertinggal dari penelitian-penelitian terdahulu yang belum berhasil dijawab. Identifikasi ini bukan bersifat subjektif, melainkan harus berakar pada kritik metodologis terhadap literatur yang telah ada.

Terdapat empat sumber utama yang dapat dijadikan pedoman sistematis untuk menemukan *gap* yang valid. Pertama, tinjauan literatur (*survey* dan *related work*) sering kali secara eksplisit mengindikasikan area, variabel, atau skenario aplikasi yang masih jarang dieksplorasi. Kedua, banyak penelitian klasik yang dibangun di atas asumsi tertentu mengenai distribusi data atau karakteristik fitur, yang mungkin sudah tidak relevan ketika diterapkan pada dataset modern yang lebih kompleks, berdimensi tinggi, atau mengandung *noise* signifikan. Ketiga, evaluasi yang dilakukan dalam paper sebelumnya seringkali tidak adil, misalnya karena penggunaan metrik tunggal yang tidak sensitif terhadap karakteristik data, sehingga validitas klaim keunggulan model tersebut patut dipertanyakan. Keempat, dan ini merupakan sumber *gap* paling potensial, penulis paper itu sendiri biasanya mengakui batasan (*limitations*) mereka di bagian akhir artikel. Pengakuan keterbatasan inilah yang seharusnya menjadi pintu masuk untuk pengembangan penelitian lanjutan.

Mari kita bedah contoh konkret yang tercantum pada slide ini. Pada kasus pertama, Penelitian X hanya mengandalkan satu dataset dan melaporkan akurasi sebagai satu-satunya indikator performa. Hal ini menciptakan *gap* yang nyata, yaitu perlunya validasi silang pada berbagai dataset independen serta penggunaan metrik yang tepat untuk menangani masalah data tidak seimbang, seperti F1-score, Precision-Recall AUC, atau Matthews Correlation Coefficient. Pada kasus kedua, Penelitian Y membandingkan tiga metode algoritma tanpa melakukan *hyperparameter tuning*. Ini jelas merupakan perbandingan yang tidak adil (*unfair comparison*), sehingga hasil yang dilaporkan belum cukup meyakinkan secara statistik maupun praktis. Perlu ditegaskan bahwa dalam penulisan proposal maupun *critical review*, *gap* yang Anda ajukan haruslah substantif, terukur, dan relevan secara akademis. Hindari membuat *gap* artifisial hanya dengan alasan "belum pernah dicoba" atau "metode baru pasti lebih unggul" tanpa disertai bukti empiris atau kritik terhadap desain eksperimen pendahulunya.

Secara ringkas, penguasaan konsep *research gap* menuntut kemampuan analitis Anda dalam membedah struktur argumentasi, protokol eksperimen, dan strategi evaluasi dari paper internasional terindeks Scopus. Fokuslah pada kelemahan teknis, ketidaksesuaian metrik, ketergantungan pada asumsi usang, atau pengakuan pembatasan dari peneliti sebelumnya. Ketika *gap* telah dirumuskan dengan presisi, Anda akan memiliki fondasi logis yang kokoh sebelum merancang solusi orisinal.

### Inti yang Harus Ditekankan

- *Research gap* adalah celah metodologis atau empiris dari penelitian sebelumnya, bukan sekadar klaim "belum ada yang meneliti topik ini".
- Sumber *gap* yang kredibel berasal dari tinjauan literatur, asumsi yang belum divalidasi pada data modern, evaluasi yang tidak adil, atau batasan yang secara eksplisit diakui oleh penulis asli.
- *Gap* harus substantif dan teruji secara ilmiah; hindari alasan artifisial seperti "baru pertama kali dicoba" tanpa dasar kritik desain eksperimen atau metrik yang relevan.

### Transisi ke Slide Berikutnya

Setelah celah penelitian berhasil diidentifikasi secara objektif dan dibuktikan melalui tinjauan literatur, langkah natural berikutnya adalah menerjemahkan celah tersebut menjadi pertanyaan penelitian (*Research Question*) yang spesifik dan dapat diuji. Pertanyaan ini akan berfungsi sebagai kompas yang mengarahkan seluruh desain eksperimen, pemilihan fitur, dan strategi evaluasi Anda. Mari kita lanjutkan ke slide berikutnya untuk membahas ciri-ciri RQ yang baik, contoh perbandingan kualitas pertanyaan, serta cara merumuskan hipotesis yang solid.

---

## Slide 010 - Komponen Review: Research Question

### Narasi

Setelah pada slide sebelumnya kita mengidentifikasi *research gap* atau celah metodologis dari literatur yang ada, langkah sistematis berikutnya adalah merumuskan *Research Question* (RQ) yang akan menjadi fondasi desain penelitian Anda. Pada tingkat magister, perumusan RQ bukan sekadar pernyataan ketertarikan umum, melainkan konstruksi metodologis yang harus menjembatani kesenjangan yang ditemukan dengan eksperimen yang akan dijalankan. Sebuah RQ yang lemah akan menyebabkan eksperimen kehilangan arah, sedangkan RQ yang tajam akan memandu pemilihan dataset, preprocessing, algoritma, hingga metrik evaluasi secara presisi.

Terdapat empat ciri mutlak yang harus dipenuhi agar sebuah RQ berkualitas tinggi. Pertama, **spesifik**, artinya pertanyaan harus secara eksplisit menyebutkan variabel atau fitur yang dimanipulasi, karakteristik dataset target, serta metode atau arsitektur model yang akan dibandingkan. Kedua, **dapat diuji** (*testable*), yang berarti jawaban atas pertanyaan tersebut harus dapat diperoleh secara empiris melalui prosedur eksperimen yang terstandarisasi, bukan melalui opini atau observasi kualitatif semata. Ketiga, **relevan**, sehingga setiap elemen dalam RQ harus menjawab langsung *gap* yang telah diuraikan sebelumnya, tanpa melebar ke area yang tidak terukur. Keempat, **tidak terlalu luas**; hindari pertanyaan yang bersifat filosofis atau mencakup terlalu banyak dimensi sekaligus. Fokuskan pada satu atau beberapa pertanyaan inti yang feasible untuk diselesaikan dalam cakupan proyek penelitian atau publikasi jurnal.

Untuk memperjelas standar kualitas ini, mari kita bedah perbandingan contoh yang disajikan. Sebuah RQ yang buruk seperti *"Apakah deep learning lebih baik?"* gagal memenuhi semua kriteria karena tidak menyatakan basis perbandingan, tidak menyebut domain data, dan tidak mendefinisikan ukuran keberhasilan. Sebaliknya, RQ yang baik berbunyi: *"Apakah penambahan categorical embedding meningkatkan F1-score dibandingkan one-hot encoding pada data tabular berkardinalitas tinggi?"* Perhatikan bagaimana formulasi kedua secara otomatis memberi petunjuk teknis: Anda akan membutuhkan dataset tabular dengan fitur kategorikal bernilai unik tinggi, implementasi baseline menggunakan one-hot encoding, modifikasi arsitektur untuk menerima embedding, serta penggunaan F1-score sebagai metrik utama karena kemungkinan adanya ketidakseimbangan kelas. Dengan RQ semacam ini, alur kerja di Jupyter Notebook atau Google Colab sudah dapat dipetakan sejak awal.

Sejalan dengan RQ, komponen kritis lainnya adalah **hipotesis**. Dalam penelitian data mining berbasis eksperimen, hipotesis didefinisikan sebagai prediksi terstruktur mengenai hubungan antar variabel atau selisih performa model yang dapat ditolak (*rejected*) atau diterima (*accepted*) melalui bukti empiris. Hipotesis bukan tebakan kosong, melainkan pernyataan yang mengarah pada pengujian statistik atau analisis signifikansi. Misalnya, dari RQ di atas, hipotesis alternatif dapat dirumuskan: *"Model yang mengintegrasikan categorical embedding akan menghasilkan F1-score yang secara statistik signifikan lebih tinggi daripada baseline one-hot encoding pada subset data uji."* Pernyataan ini nantinya akan menjadi acuan dalam penentuan threshold signifikansi, pemilihan uji statistik (seperti paired t-test atau Wilcoxon signed-rank), serta interpretasi hasil ablation study dan error analysis.

Secara keseluruhan, kekuatan sebuah proposal penelitian atau naskah paper internasional sangat bergantung pada ketajaman perumusan RQ dan kejelasan hipotesisnya. Jika RQ terlalu kabur, eksperimen akan menghasilkan noise metodologis dan kesimpulan akhir tidak memberikan kontribusi yang dapat direplikasi. Pastikan setiap kata dalam pertanyaan penelitian Anda memiliki tujuan teknis yang terukur dan dapat dioperasionalkan ke dalam kode maupun pipeline evaluasi model.

### Inti yang Harus Ditekankan

- RQ harus memenuhi empat pilar: spesifik, teruji secara empiris, relevan terhadap gap yang diidentifikasi, dan fokus pada cakupan yang feasible.
- Hindari pertanyaan general; gunakan struktur eksplisit yang menyebutkan variabel/metode, metrik evaluasi, dan konteks data.
- Hipotesis adalah prediksi terukur yang siap diverifikasi atau ditolak melalui eksperimen, uji statistik, dan analisis signifikansi.
- Perumusan RQ dan hipotesis yang tepat akan secara langsung menentukan desain eksperimen, pemilihan library (pandas/scikit-learn), serta strategi validasi model.

### Transisi ke Slide Berikutnya

Setelah RQ dan hipotesis terbentuk dengan presisi, langkah logis selanjutnya adalah memastikan bahwa solusi yang Anda usulkan benar-benar membawa nilai tambah yang orisinal. Hal ini membawa kita pada pembahasan novelty, di mana kita akan membedah bagaimana membedakan antara peningkatan teknis biasa dengan kontribusi ilmiah yang layak dipertahankan saat review paper internasional.

---

## Slide 011 - Komponen Review: Novelty

### Narasi

Setelah kita membahas bagaimana merumuskan Research Question dan hipotesis yang teruji pada slide sebelumnya, langkah kritis berikutnya dalam melakukan review paper internasional atau menyusun proposal penelitian adalah mengevaluasi aspek novelty atau kebaruan. Dalam konteks penelitian tingkat magister, novelty bukan sekadar klaim bahwa penelitian ini “baru”. Secara fundamental, novelty didefinisikan sebagai elemen pembeda yang secara signifikan memisahkan karya penelitian Anda dari state of the art yang telah ada di literatur terkini. Tanpa novelty yang jelas dan terdokumentasi, sebuah penelitian hanya akan menjadi replikasi atau implementasi ulang tanpa menambah wawasan ilmiah.

Kebaruan dalam data mining dan machine learning dapat muncul dalam berbagai bentuk yang sah secara akademis. Pertama, berupa pengembangan metode baru atau kombinasi inovatif dari algoritma yang sudah ada untuk menyelesaikan masalah spesifik. Kedua, melalui analisis atau temuan empiris baru yang mengungkap pola, korelasi, atau perilaku data yang belum pernah dilaporkan sebelumnya. Ketiga, penyediaan dataset atau benchmark baru yang lebih representatif, lebih besar, atau menangani bias tertentu yang sering diabaikan. Keempat, perumusan teori, kerangka kerja konseptual, atau definisi operasional baru yang mengubah cara kita memandang suatu fenomena. Kelima, studi yang secara eksplisit menantang asumsi-asumsi lama dalam bidang tersebut dengan menyajikan bukti empiris yang kuat.

Saat menilai novelty dalam naskah atau proposal, Anda harus mengajukan pertanyaan kritis yang tajam. Tanyakan apa sebenarnya yang baru dibandingkan dengan riset pendahuluan. Apakah klaim kebaruan tersebut benar-benar termanifestasi dalam desain metodologi dan hasil eksperimen, atau hanya sekadar narasi pemasaran? Penting juga untuk membedakan antara engineering improvement dan kontribusi ilmiah murni. Seringkali, peneliti hanya melakukan penyetelan hiperparameter, penambahan layer jaringan, atau optimisasi komputasi yang menghasilkan peningkatan metrik tipis. Jika peningkatan tersebut tidak disertai dengan pemahaman mendalam mengenai mengapa hal itu terjadi, maka itu hanyalah rekayasa teknis, bukan inovasi ilmiah.

Oleh karena itu, novelty harus selalu didukung oleh transparansi metodologis. Sebuah klaim kebaruan akan kehilangan bobotnya jika prosedur penelitian tidak dijelaskan secara rinci sehingga tidak dapat direproduksi, seperti yang akan kita bahas pada komponen metodologi di slide berikutnya. Poin penting yang perlu ditekankan adalah bahwa novelty dalam penelitian data mining bersifat multidimensi dan harus dibuktikan secara empiris, bukan hanya diklaim. Evaluasi ketat terhadap aspek ini akan memastikan bahwa setiap penelitian yang dikembangkan memiliki nilai tambah yang nyata bagi komunitas akademik dan industri.

### Inti yang Harus Ditekankan

- Novelty adalah pembeda utama dari state of the art, bukan sekadar klaim subjektif atau narasi marketing.
- Kebaruan bisa berbentuk metode, temuan empiris, dataset, kerangka kerja, atau tantangan terhadap asumsi lama.
- Engineering improvement (peningkatan metrik tipis tanpa penjelasan mekanistik) tidak setara dengan kontribusi ilmiah.
- Klaim novelty wajib didukung oleh bukti metodologis dan eksperimental yang transparan serta dapat diverifikasi.

### Transisi ke Slide Berikutnya

Dengan memahami batasan dan bentuk novelty, kita kini beralih ke komponen kedua yang menjadi tulang punggung validitas penelitian, yaitu metodologi. Pada slide berikutnya, kita akan membedah bagaimana mendeskripsikan representasi data, arsitektur model, serta prosedur evaluasi agar setiap klaim novelty dapat direproduksi dan diverifikasi secara ilmiah.

---

## Slide 012 - Komponen Review: Methodology

### Narasi

Setelah pada slide sebelumnya kita membahas bagaimana mengidentifikasi novelty atau kebaruan suatu penelitian, langkah selanjutnya adalah mengevaluasi metodologi yang digunakan untuk mewujudkan novelty tersebut. Dalam konteks penelitian tingkat magister, metodologi bukan sekadar daftar algoritma yang dijalankan, melainkan kerangka kerja sistematis yang harus dapat dipertanggungjawabkan secara ilmiah. Slide ini menyoroti empat komponen inti dalam sebuah metodologi data mining: representasi data dan preprocessing, arsitektur atau algoritma model, prosedur pelatihan serta tuning, dan strategi evaluasi. Setiap komponen ini harus dituliskan secara eksplisit agar reviewer maupun pembaca dapat memahami alur logika penelitian dari hulu ke hilir.

Untuk melakukan review yang kritis, terdapat empat pertanyaan fundamental yang harus dijawab oleh setiap proposal atau paper. Pertama, apakah metode dijelaskan hingga tingkat detail yang memungkinkan peneliti lain mereproduksinya? Reproduksibilitas adalah pilar utama validitas penelitian. Kedua, asumsi-asumsi apa yang mendasari pemilihan pendekatan tersebut? Misalnya, apakah model mengasumsikan linearitas, distribusi normal, atau independensi antar fitur? Ketiga, apakah pemilihan metode tersebut benar-benar selaras dengan Research Question (RQ)? Metode yang terlalu kompleks tanpa alasan kuat justru akan mengurangi fokus penelitian. Keempat, apakah ada celah dalam desain eksperimen yang berpotensi menyebabkan data leakage? Kebocoran data sering kali terjadi ketika informasi dari set uji atau masa depan terselip ke dalam proses pelatihan, sehingga menghasilkan performa model yang tidak realistis.

Diagram alir yang disajikan menggambarkan pipeline standar dalam proyek data mining, dimulai dari raw data, dilanjutkan dengan preprocessing, feature representation, model training, hyperparameter tuning, hingga evaluasi dan analisis. Meskipun terlihat sederhana, setiap panah dalam diagram ini mewakili keputusan metodologis yang krusial. Pada tahap preprocessing, misalnya, perlu dijelaskan teknik handling missing value atau scaling yang digunakan. Pada tahap feature representation, harus jelas bagaimana variabel mentah diubah menjadi representasi numerik yang siap diproses oleh algoritma. Tahap tuning juga memerlukan penjelasan mengenai grid search, random search, atau Bayesian optimization yang diterapkan, beserta rentang parameter yang diuji.

Penting untuk dicatat bahwa dalam penyusunan proposal penelitian, mahasiswa sering terjebak pada kebiasaan menyebutkan nama tools atau library saja, seperti “kami menggunakan XGBoost”. Pendekatan ini tidak memadai untuk level S2. Metodologi yang baik harus menjawab dua hal: mengapa metode tertentu dipilih berdasarkan karakteristik data dan tujuan penelitian, serta bagaimana setiap langkah dilakukan secara teknis. Penjelasan yang mendalam tentang rasionalisasi dan implementasi inilah yang membedakan penelitian deskriptif dengan penelitian analitik yang berkualitas tinggi.

### Inti yang Harus Ditekankan

- Reproduksibilitas dan kejelasan langkah metodologis adalah syarat mutlak untuk validitas penelitian tingkat magister.
- Setiap pilihan algoritma dan teknik preprocessing harus memiliki justifikasi teoritis atau empiris yang selaras dengan Research Question.
- Deteksi dan pencegahan data leakage harus menjadi prioritas dalam desain eksperimen untuk menghindari evaluasi model yang bias.
- Penyebutan nama library atau framework saja tidak cukup; penjelasan mendalam mengenai “mengapa” dan “bagaimana” implementasinya wajib disertakan.

### Transisi ke Slide Berikutnya

Metodologi yang ketat tentu tidak akan bermakna jika fondasi datanya sendiri tidak memenuhi standar kualitas. Setelah kita memahami bagaimana membangun dan mengevaluasi model secara metodologis, langkah selanjutnya adalah menelaah aset paling vital dalam data mining, yaitu dataset itu sendiri. Mari kita bahas persyaratan dataset yang representatif, transparansi informasi data, serta potensi bias yang sering terlewatkan dalam banyak studi.

---

## Slide 013 - Komponen Review: Dataset

### Narasi

Setelah membahas komponen metodologi pada slide sebelumnya, langkah logis berikutnya dalam critical review adalah meninjau fondasi paling dasar dari setiap eksperimen data mining, yaitu dataset itu sendiri. Metodologi yang canggih, arsitektur model yang mutakhir, maupun strategi tuning yang presisi tidak akan menghasilkan kesimpulan yang valid jika dibangun di atas data yang cacat, bias, atau tidak terdokumentasi dengan baik. Pada jenjang magister, kita tidak lagi sekadar menerima dataset sebagai given; kita harus melakukan audit kritis terhadap kelayakan data sebelum menilai bagaimana data tersebut diproses atau dimodelkan.

Pertama, mari kita bedah empat syarat fundamental sebuah dataset yang layak digunakan dalam penelitian. Dataset harus bersifat representatif, artinya karakteristik statistiknya harus mencerminkan kondisi dunia nyata atau populasi target, bukan hanya subset yang terlalu sempit atau terpilih secara subjektif. Kedua, ukuran dataset harus cukup besar untuk mendukung generalisasi, mengingat algoritma modern seperti ensemble atau deep learning memiliki kapasitas memori tinggi yang rentan overfitting jika data terbatas. Ketiga, dataset harus selaras secara ketat dengan Research Question (RQ); variabel target yang dipilih harus secara langsung menjawab pertanyaan penelitian, dan fitur-fiturnya relevan secara domain. Keempat, dan ini sering menjadi titik lemah dalam publikasi, dataset tidak boleh mengandung kebocoran informasi (*data leakage*). Tidak ada informasi dari masa depan, northing features, atau bahkan label target itu sendiri yang boleh terselip dalam fitur input, karena hal ini akan mendistorsi performa model secara artifisial.

Dalam naskah penelitian, penulis wajib mengungkap transparansi data secara komprehensif. Hal ini mencakup sumber data dan prosedur akuisisinya, jumlah sampel serta fitur lengkap dengan tipe datanya, analisis distribusi variabel target (apakah terdapat *class imbalance* yang signifikan), serta skema pembagian data menjadi train, validation, dan test yang eksplisit. Selain itu, potensi bias sampling dan batasan dataset harus diakui secara terbuka sebagai bagian dari integritas ilmiah. Sebagai reviewer, kita harus mengajukan pertanyaan kritis: Apakah dataset yang digunakan benar-benar mendukung klaim kontribusi penelitian? Apakah evaluasi hanya mengandalkan satu dataset, padahal validasi lintas domain atau cross-dataset sering kali diperlukan untuk membuktikan robustness? Khusus untuk data deret waktu atau longitudinal, kita harus waspada terhadap risiko *temporal leakage*, di mana pola masa depan secara tidak sengaja masuk ke dalam fitur pelatihan akibat kesalahan alignment waktu atau preprocessing yang tidak menjaga urutan temporal.

Secara ringkas, kualitas hasil mining sangat bergantung pada kualitas, transparansi, dan penanganan etis terhadap data yang mendasarinya. Sebuah dataset tidak boleh diperlakukan sebagai black box yang hanya dimasukkan ke dalam pipeline tanpa pertanyaan. Kita harus memastikan bahwa data tersebut representatif, ukurannya memadai, bebas dari kebocoran, dan dikelola dengan pembagian serta dokumentasi yang jelas. Evaluasi yang kredibel menuntut keberanian untuk mempertanyakan apakah satu dataset sudah cukup, serta memastikan tidak ada celah temporal atau kontaminasi data yang mendistorsi hasil akhir.

### Inti yang Harus Ditekankan

- Validitas metodologi sangat bergantung pada kualitas dan transparansi dataset; audit data adalah prasyarat sebelum menilai algoritma.
- Empat syarat wajib dataset: representatif, cukup besar, selaras dengan RQ, dan bebas dari segala bentuk *data leakage* (termasuk temporal leakage).
- Transparansi penuh wajib dilaporkan: sumber, dimensi, tipe data, distribusi target, skema split, serta pengakuan terhadap bias dan limitasi data.
- Reviewer harus skeptis terhadap klaim yang hanya divalidasi pada satu dataset; robustness dan generalisasi memerlukan uji lintas konteks atau domain.

### Transisi ke Slide Berikutnya

Setelah kita memastikan bahwa dataset yang digunakan memenuhi standar representativitas, transparansi, dan keamanan dari kebocoran informasi, langkah selanjutnya adalah menetapkan patokan pembanding yang adil. Dengan fondasi data yang telah tervalidasi, kita dapat beralih ke komponen evaluasi kinerja model, yaitu pemilihan dan pembangunan baseline yang kuat, yang akan kita bahas pada slide berikutnya.

---

## Slide 014 - Komponen Review: Baseline

### Narasi

Setelah kita menelaah kriteria pemilihan dataset yang representatif, bebas dari kebocoran informasi, dan selaras dengan research question pada slide sebelumnya, langkah evaluasi metodologis berikutnya adalah memeriksa bagaimana penulis membangun baseline. Dalam praktik penelitian data mining tingkat magister, baseline bukan sekadar algoritma acak yang dipilih secara sembarangan, melainkan metode pembanding fundamental yang digunakan untuk mengukur apakah metode atau arsitektur baru yang diajukan benar-benar memberikan peningkatan performa substantif, atau hanya sekadar modifikasi teknis tanpa nilai tambah signifikan.

Sebuah baseline dikategorikan kuat ketika memenuhi empat syarat ketat. Pertama, baseline harus merepresentasikan metode standar atau pendekatan terbaik yang wajar di domain penelitian tersebut. Kedua, proses pelatihan baseline harus dilakukan dengan hyperparameter tuning yang adil dan menggunakan anggaran komputasi atau waktu training yang sebanding dengan metode usulan. Seringkali terjadi bias evaluasi ketika peneliti tidak sengaja atau sengaja melemahkan baseline agar metode barunya terlihat unggul. Ketiga, baseline yang komprehensif harus mencakup spektrum model, mulai dari model sederhana sebagai batas bawah performa hingga model kompetitif yang sudah mapan. Keempat, penulis wajib menghindari praktik cherry-picking baseline yang hanya menguntungkan klaim mereka.

Untuk memudahkan penilaian, kita dapat merujuk pada piramida baseline yang lazim digunakan dalam literatur machine learning berbasis tabel. Di level paling dasar terdapat model interpretable dan ringan seperti Logistic Regression atau Decision Tree yang berfungsi sebagai garis batas minimum. Level kedua umumnya diisi oleh ensemble atau kernel-based methods seperti Random Forest atau SVM. Level ketiga mewakili gradient boosting frameworks modern seperti XGBoost, LightGBM, atau CatBoost yang menjadi standar de facto di banyak kompetisi dan industri. Puncak piramida menuntut perbandingan dengan metode state of the art terbaru yang relevan dari publikasi internasional terkini. Jika sebuah paper hanya mengandalkan level 1 atau 2 sebagai pembanding, klaim kontribusi ilmiahnya akan dianggap sangat lemah dan kurang rigor.

Pentingnya baseline yang kuat terletak pada validitas klaim superioritas. Tanpa pembanding yang fair dan kompetitif, hasil akurasi atau metrik lainnya kehilangan konteks evaluasi. Penilaian terhadap baseline ini kemudian harus berlanjut ke pemeriksaan tata kelola eksperimen secara keseluruhan. Pada slide berikutnya, kita akan mengurai komponen experimental design, mencakup strategi splitting data, teknik tuning, pengulangan run untuk menangkap variansi, penggunaan uji statistik non-parametrik, serta ablation study untuk mengisolasi kontribusi setiap komponen metode.

### Inti yang Harus Ditekankan

- Baseline berfungsi sebagai tolak ukur validitas klaim keunggulan metode usulan, bukan sekadar pelengkap eksperimen.
- Syarat baseline kuat meliputi kesesuaian domain, fairness tuning, kesetaraan budget komputasi, dan cakupan spektrum model dari sederhana hingga kompetitif.
- Piramida baseline (Level 1–4) menjadi kerangka objektif untuk menilai kedalaman evaluasi penulis terhadap state of the art.
- Klaim superioritas tanpa baseline yang kuat dan fair secara metodologis tidak dapat dipertanggungjawabkan dalam publikasi bereputasi.

### Transisi ke Slide Berikutnya

Dengan memahami bagaimana baseline dievaluasi, langkah logis selanjutnya adalah memeriksa apakah desain eksperimen yang mendukung perbandingan tersebut telah dirancang secara rigor. Mari kita lanjutkan ke slide berikutnya untuk membedah elemen-elemen kunci dalam experimental design, mulai dari cross-validation, pengendalian variansi, hingga validasi statistik yang diperlukan untuk menghasilkan temuan yang robust dan dapat direproduksi.

---

## Slide 015 - Komponen Review: Experimental Design

### Narasi

Setelah memahami pentingnya baseline yang kuat pada slide sebelumnya, langkah selanjutnya dalam metodologi penelitian data mining tingkat magister adalah merancang desain eksperimen yang ketat dan dapat dipertanggungjawabkan. Desain eksperimen bukan sekadar menjalankan skrip dan mencatat metrik, melainkan sebuah kerangka sistematis yang menjamin bahwa setiap klaim keunggulan model didukung oleh bukti empiris yang valid. Pada tabel elemen desain eksperimen, terdapat tujuh aspek fundamental yang harus dievaluasi secara kritis saat melakukan review terhadap paper internasional atau ketika menyusun proposal penelitian sendiri.

Aspek splitting menentukan bagaimana data dibagi menjadi set pelatihan dan pengujian. Penggunaan k-fold cross-validation atau repeated stratified cross-validation sangat disarankan untuk mengurangi bias akibat pembagian data yang tidak representatif, terutama pada dataset yang memiliki distribusi kelas tidak seimbang. Untuk proses tuning hyperparameter, metode seperti random search atau Bayesian optimization lebih efisien dan sering kali menghasilkan konfigurasi optimal dibandingkan grid search tradisional, sekaligus memastikan alokasi budget komputasi yang sebanding antar metode yang dibandingkan. Repetisi eksperimen menggunakan beberapa seed acak wajib dilakukan karena algoritma machine learning bersifat stokastik; tanpa variasi seed, hasil tunggal tidak mencerminkan performa sebenarnya. Uji statistik seperti Wilcoxon signed-rank atau paired t-test diperlukan untuk membedakan antara peningkatan kinerja yang signifikan secara matematis versus fluktuasi acak. Ablation study berfungsi sebagai bedah komponen untuk membuktikan kontribusi spesifik dari inovasi yang diajukan. Evaluasi cross-dataset menguji robustness dan generalisasi model di luar domain data asal, sementara pelacakan sumber daya seperti waktu training, konsumsi memori, dan latency inference memberikan konteks praktis mengenai kelayakan penerapan metode tersebut di dunia nyata.

Tabel pertanyaan kritis pada slide ini berfungsi sebagai filter metodologis sebelum menerima suatu klaim penelitian. Pertama, apakah rangkaian eksperimen benar-benar menjawab research question yang dirumuskan? Banyak paper terjebak pada eksperimen yang terlalu luas atau justru menyimpang dari fokus utama. Kedua, apakah jumlah replikasi atau run sudah memadai untuk menangkap variansi? Satu kali percobaan tidak pernah cukup untuk menarik kesimpulan ilmiah. Ketiga, apakah pengaturan hyperparameter dilakukan secara adil? Fair tuning berarti kedua atau lebih metode yang dibandingkan dialokasikan budget komputasi dan ruang pencarian yang setara, sehingga tidak ada bias sistematis. Terakhir, apakah laporan hasil menyertakan ukuran dispersi seperti standar deviasi atau confidence interval? Pelaporan hanya nilai mean tanpa varians merupakan praktik yang kurang rigor dalam penelitian tingkat S2.

Poin penekanan utama dari slide ini adalah bahwa desain eksperimen yang baik harus transparan, reproducible, dan terukur. Setiap keputusan metodologis—mulai dari strategi splitting hingga pemilihan uji statistik—harus didokumentasikan dengan jelas agar reviewer maupun peneliti lain dapat memverifikasi temuan. Tanpa desain yang ketat, bahkan metode paling inovatif sekalipun akan kehilangan kredibilitas ilmiahnya.

### Inti yang Harus Ditekankan

- Desain eksperimen adalah tulang punggung validitas klaim penelitian; pastikan splitting, tuning, dan repetisi dilakukan secara sistematis, adil, dan terdokumentasi.
- Gunakan uji statistik dan laporkan variansi/confidence interval untuk membedakan sinyal kinerja nyata dari noise acak, hindari klaim berdasarkan single-run result.
- Selalu hubungkan setiap komponen eksperimen (ablation, cross-dataset, resource tracking) langsung dengan research question dan tujuan penelitian yang telah dirumuskan.

### Transisi ke Slide Berikutnya

Dengan desain eksperimen yang telah diverifikasi ketat, langkah logis berikutnya adalah mengevaluasi kualitas data hasil eksperimen itu sendiri. Kita akan membahas bagaimana evidence yang solid harus selaras dengan klaim penelitian, serta bahaya dari bukti empiris yang lemah atau tidak lengkap.

---

## Slide 016 - Komponen Review: Evidence

### Narasi

Setelah menelaah komponen desain eksperimen pada slide sebelumnya, kita kini berfokus pada elemen penentu kredibilitas sebuah penelitian: Evidence atau bukti empiris. Dalam konteks penelitian data mining jenjang magister, evidence didefinisikan secara tegas sebagai kumpulan data hasil eksperimen yang berfungsi sebagai landasan objektif untuk memverifikasi setiap klaim metodologis atau kinerja algoritma. Tanpa evidence yang terstruktur dan terukur, pernyataan peneliti hanya akan bersifat subjektif dan sulit dipertanggungjawabkan di forum akademik internasional.

Jenis evidence yang diharapkan dalam publikasi berkualitas tidak cukup hanya berupa satu angka performa. Pertama, metrik kuantitatif harus dipilih secara kontekstual sesuai sifat masalah, seperti accuracy, precision, recall, F1-score, AUC, atau PR-AUC. Kedua, karena proses training model machine learning mengandung unsur stokastik, pelaporan distribusi hasil antar run mutlak diperlukan. Nilai mean, standard deviation, dan confidence interval harus disertakan untuk menggambarkan stabilitas dan konsistensi metode. Ketiga, analisis error dan failure case memberikan dimensi kualitatif yang esensial untuk memahami batas kemampuan model di kondisi ekstrem atau kelas minoritas. Keempat, hasil uji statistik non-parametrik atau parametrik diperlukan untuk membuktikan signifikansi perbedaan performa di luar variasi acak. Kelima, analisis kompleksitas waktu komputasi, kebutuhan memori, dan latency inference juga termasuk evidence kritis, terutama ketika klaim menekankan skalabilitas atau deployability sistem.

Evidence yang lemah sering kali menjadi penyebab utama penolakan paper di conference atau jurnal bereputasi. Ilustrasi klasik terjadi ketika penulis mengklaim "metode kami lebih unggul" namun hanya mengandalkan satu dataset, satu metrik tunggal, tanpa pengulangan eksperimen, dan tanpa laporan deviasi standar. Dalam skenario semacam itu, perbedaan skor yang terlihat mungkin hanyalah noise sampling, bukan peningkatan kapasitas model yang sesungguhnya. Praktik semacam ini melanggar prinsip reproducible research dan membuat klaim kehilangan bobot ilmiah.

Prinsip fundamental yang harus selalu dijaga adalah keselarasan antara klaim dan evidence. Setiap pernyataan keunggulan, efisiensi, atau generalisasi harus didukung oleh perbandingan yang adil, protokol pengujian yang konsisten, serta dokumentasi eksperimen yang lengkap. Evidence yang solid tidak hanya menjawab research question, tetapi juga menyediakan transparansi penuh sehingga peneliti lain dapat mereplikasi, memverifikasi, atau mengembangkan temuan tersebut ke arah yang lebih baik.

### Inti yang Harus Ditekankan

- Evidence adalah fondasi objektif penelitian; klaim tanpa dukungan data eksperimen yang lengkap dan terukur tidak memiliki nilai akademis.
- Pelaporan metrik tunggal tanpa variansi, pengulangan run, uji statistik, dan analisis kegagalan merupakan praktik metodologis yang lemah dan rentan kritik reviewer.
- Keselarasan antara pernyataan klaim dan bukti empiris, ditambah transparansi protokol pengujian, menentukan kredibilitas dan daya terima paper di venue internasional.

### Transisi ke Slide Berikutnya

Dengan evidence yang telah diverifikasi kekuatannya, langkah logis selanjutnya adalah memastikan bahwa bukti tersebut benar-benar mencerminkan kebenaran yang ingin diuji tanpa distorsi metodologis. Hal ini membawa kita pada pembahasan mengenai tiga jenis validitas—internal, eksternal, dan konstruk—serta ancaman umum seperti data leakage dan strategi mitigasinya yang akan dibahas pada slide berikutnya.

---

## Slide 017 - Komponen Review: Validity

### Narasi

Setelah kita menelaah komponen Evidence pada slide sebelumnya, di mana bukti empiris harus selaras dengan klaim penelitian, kini kita masuk ke komponen Validity. Dalam konteks tinjauan kritis paper internasional di tingkat magister, validitas berfungsi sebagai filter utama untuk menentukan apakah hasil eksperimen yang dilaporkan benar-benar mencerminkan kinerja metode yang diklaim, atau hanyalah artefak dari celah metodologis. Tanpa validitas yang kuat, evidence yang disajikan sekalipun terlihat impresif, tidak memiliki dasar ilmiah yang kokoh untuk mendukung generalisasi atau kontribusi penelitian.

Validitas dalam evaluasi model data mining secara konseptual terbagi menjadi tiga dimensi. Pertama, validitas internal, yang menanyakan apakah desain eksperimen bebas dari bias atau confounding factors. Jika prosedur pengumpulan data, pembersihan, atau pembagian sampel mengandung kebocoran informasi, maka pengukuran performa model akan menjadi bias secara fundamental. Kedua, validitas eksternal, yang berfokus pada apakah temuan tersebut tetap relevan ketika diterapkan pada distribusi data, domain aplikasi, atau kondisi lingkungan yang berbeda dari data pelatihan. Ketiga, validitas konstruk, yang memastikan bahwa metrik evaluasi yang dipilih benar-benar merepresentasikan kemampuan model yang ingin diukur, bukan sekadar optimasi numerik yang tidak terkait dengan tujuan problem nyata.

Dalam praktiknya, banyak publikasi gagal mempertahankan standar validitas ini akibat ancaman metodologis yang sering kali terabaikan. Ancaman paling kritis adalah data leakage, yaitu kebocoran informasi dari tahap preprocessing yang dilakukan sebelum train-test split, sehingga model secara tidak sadar mempelajari pola dari data uji. Selain itu, melakukan hyperparameter tuning dengan memanfaatkan feedback dari test set, tidak menetapkan random seed yang konsisten sehingga hasil tidak reproducible, serta mengevaluasi pendekatan hanya pada satu dataset tunggal, semuanya secara sistematik mendistorsi gambaran kinerja sebenarnya dan mengurangi kepercayaan terhadap klaim penelitian.

Untuk memitigasi ancaman tersebut, protokol evaluasi harus dirancang dengan ketat dan transparan. Implementasikan pipeline preprocessing yang terintegrasi penuh dalam mekanisme cross-validation, sehingga setiap fold memperoleh transformasi data yang independen tanpa kontaminasi informasi. Batasi proses tuning parameter secara eksklusif pada subset training atau validation set, dan pertahankan test set sebagai data murni untuk evaluasi akhir. Pastikan setiap konfigurasi dieksekusi melalui repeated runs dengan seed yang dikendalikan untuk menangkap varians stokastik, lalu laporkan mean beserta standar deviasi. Terakhir, lakukan validasi silang pada dataset tambahan atau benchmark domain lain untuk menguji robustness dan kapasitas generalisasi model.

Ketika validitas telah diverifikasi secara rigor, langkah logis berikutnya dalam kerangka review adalah mengidentifikasi batas-batas di mana metode tersebut tidak lagi berlaku atau belum tereksplorasi, yang akan kita bahas pada komponen Limitation. Pengakuan terhadap keterbatasan bukanlah pengakuan kekalahan, melainkan manifestasi dari integritas akademik yang diperlukan untuk memetakan ruang riset dan mengarahkan studi lanjutan secara lebih presisi.

### Inti yang Harus Ditekankan

- Validitas terdiri dari tiga pilar: internal (kebebasan dari bias/confounding), eksternal (generalisasi ke domain/data lain), dan konstruk (kesesuaian metrik dengan tujuan pengukuran).
- Ancaman utama meliputi data leakage dari preprocessing pra-split, tuning berbasis test set, ketidakstabilan random seed, dan ketergantungan pada single-dataset evaluation.
- Mitigasi wajib mencakup pipeline terintegrasi dalam cross-validation, isolasi tuning pada train/validation, repeated runs dengan seed terkendali, serta validasi multi-dataset.
- Validitas adalah prasyarat mutlak sebelum evidence dapat dianggap sah; tanpa validitas, klaim penelitian kehilangan landasan metodologis.

### Transisi ke Slide Berikutnya

Memahami batas-batas validitas membawa kita secara natural ke diskusi mengenai apa yang tidak dapat dicapai oleh penelitian tersebut. Pada slide berikutnya, kita akan membahas komponen Limitation, di mana penulis dituntut secara eksplisit mengakui keterbatasan metodologis, cakupan data, maupun kompleksitas komputasi, sehingga pembaca dapat menempatkan kontribusi riset dalam konteks yang realistis dan membuka peluang untuk pengembangan selanjutnya.

---

## Slide 018 - Komponen Review: Limitation

### Narasi

Setelah menelaah komponen validitas pada slide sebelumnya, kita kini beralih ke aspek yang tak kalah kritis dalam proses critical review: limitation atau keterbatasan penelitian. Dalam konteks penelitian tingkat magister, limitation bukanlah pengakuan kegagalan, melainkan bagian fundamental dari rigor akademik dan transparansi ilmiah. Limitation didefinisikan sebagai segala batasan yang melekat pada desain eksperimen, ketersediaan data, asumsi algoritma, atau kondisi lingkungan implementasi, yang secara eksplisit diakui oleh penulis.

Pengakuan terhadap limitation memiliki tiga fungsi strategis. Pertama, ia mencerminkan kejujuran ilmiah dan integritas peneliti dalam melaporkan hasil secara objektif. Kedua, limitation memberikan konteks kepada pembaca mengenai batas generalisasi temuan; hasil yang diperoleh mungkin sangat kuat pada dataset spesifik, namun belum tentu berlaku universal. Ketiga, limitation berfungsi sebagai peta jalan bagi penelitian lanjutan. Dengan mengetahui celah yang belum tercover, peneliti berikutnya dapat merumuskan hipotesis baru, memilih dataset alternatif, atau mengembangkan varian metode yang lebih efisien.

Secara praktis, limitation sering muncul dalam beberapa bentuk umum. Misalnya, penggunaan data yang hanya dikumpulkan dari satu institusi atau satu domain geografis, sehingga mengurangi representativitas sampel. Metode yang diusulkan mungkin belum diuji pada data streaming atau temporal, padahal banyak aplikasi dunia nyata bersifat dinamis dan real-time. Aspek komputasi juga sering menjadi pembatas; model yang mencapai akurasi tinggi tetapi membutuhkan memori GPU besar atau waktu training berhari-hari akan sulit diadopsi di industri berskala besar. Selain itu, evaluasi yang hanya mengandalkan proxy metric, seperti precision-recall atau AUC, tanpa memvalidasi dampaknya terhadap outcome langsung (misalnya keputusan klinis atau efisiensi operasional), juga merupakan bentuk limitation yang perlu diidentifikasi.

Sikap yang seharusnya dibangun oleh setiap peneliti adalah keberanian untuk tidak menyembunyikan kelemahan. Tuliskan secara eksplisit apa yang tidak dapat disimpulkan oleh penelitian ini, serta batasan apa yang memengaruhi interpretasi hasil. Pendekatan ini selaras dengan praktik open science dan meningkatkan kredibilitas paper Anda saat diajukan untuk publikasi di konferensi atau jurnal terindeks Scopus.

### Inti yang Harus Ditekankan

- Limitation adalah pengakuan transparan atas batasan desain, data, atau metode, bukan tanda ketidakmampuan peneliti.
- Pengungkapan limitation memperkuat validitas ilmiah, memperjelas batas generalisasi, dan membuka peluang riset lanjutan.
- Contoh limitation meliputi keterwakilan data, kompatibilitas dengan data streaming/temporal, beban komputasi, dan penggunaan metrik proksi yang tidak mencerminkan outcome nyata.
- Peneliti wajib menyatakan secara eksplisit apa yang tidak dapat disimpulkan, sesuai standar etika publikasi internasional.

### Transisi ke Slide Berikutnya

Setelah memahami pentingnya mengakui keterbatasan, langkah selanjutnya dalam evaluasi paper adalah menilai apakah penelitian tersebut benar-benar menghasilkan nilai tambah bagi komunitas ilmiah. Mari kita lanjutkan ke komponen berikutnya: scientific contribution, di mana kita akan membedah bagaimana sebuah karya dianggap memberikan pengetahuan baru yang bermakna.

---

## Slide 019 - Komponen Review: Scientific Contribution

### Narasi

Setelah membahas batasan atau limitation pada slide sebelumnya, kita kini beralih ke komponen yang menjadi inti dari nilai akademik sebuah karya, yaitu Scientific Contribution atau kontribusi ilmiah. Dalam konteks penelitian tingkat magister, kontribusi ilmiah didefinisikan sebagai pengetahuan baru yang dihasilkan dari suatu studi, yang secara eksplisit dapat dimanfaatkan, dikembangkan, atau diuji ulang oleh peneliti lain di masa depan. Pertanyaan penentu yang harus selalu dipegang saat mengevaluasi atau menulis bagian ini adalah: apa yang benar-benar bisa diketahui oleh pembaca setelah menyelesaikan penelitian ini, yang sebelumnya belum mereka ketahui? Jawaban atas pertanyaan ini menjadi tolok ukur utama apakah sebuah paper layak dipublikasikan atau tidak.

Kontribusi ilmiah tidak selalu berbentuk peningkatan persentase akurasi, F1-score, atau penurunan loss function. Dalam praktik data mining modern, kontribusi dapat termanifestasi dalam lima bentuk utama. Pertama, pemahaman baru mengenai kondisi spesifik di mana suatu metode bekerja optimal atau justru gagal total, yang membantu menetapkan boundary conditions algoritma. Kedua, penyajian metode baru yang dirancang sederhana namun terbukti efektif, sering kali menggeser asumsi bahwa kompleksitas model selalu berkorelasi positif dengan performa. Ketiga, penyediaan benchmark hasil evaluasi pada dataset atau domain baru yang belum pernah dieksplorasi, sehingga memperluas cakupan validasi eksternal dan generalisasi. Keempat, analisis empiris yang secara sistematis menantang asumsi-asumsi lama yang sudah mapan dalam literatur. Kelima, pengembangan teori atau kerangka konseptual yang memberikan struktur teoritis bagi fenomena data mining yang sebelumnya hanya dibahas secara ad-hoc.

Sebagai ilustrasi konkret, perhatikan contoh kutipan berikut: "Kami menemukan bahwa missing value imputation menggunakan median lebih baik daripada mean pada data dengan distribusi heavy-tailed." Pernyataan ini mewakili kontribusi berupa insight praktis yang langsung dapat diterapkan dalam tahap preprocessing data. Nilai utamanya bukan terletak pada klaim kenaikan metrik semata, melainkan pada penemuan hubungan kausal antara karakteristik distribusi data dan efektivitas teknik imputasi. Insight semacam ini memberi panduan jelas kepada praktisi dan peneliti lain ketika menghadapi data nyata yang jarang memiliki distribusi normal sempurna. Dengan demikian, kontribusi ilmiah sejati selalu menjawab research gap, memberikan kejelasan metodologis, atau membuka jalur investigasi baru yang terukur dan dapat direproduksi.

### Inti yang Harus Ditekankan

- Kontribusi ilmiah berfokus pada penciptaan pengetahuan baru yang reusable dan actionable bagi komunitas peneliti, bukan sekadar perbaikan metrik inkremental tanpa penjelasan mekanistik.
- Evaluasi kontribusi harus selalu merujuk pada pertanyaan kunci: apa insight, temuan, atau kerangka baru yang sebelumnya belum diketahui pembaca?
- Bentuk kontribusi sangat beragam, mencakup pemahaman kondisi keberhasilan/gagal metode, metode efisien, benchmark domain baru, tantangan empiris terhadap asumsi lama, hingga kerangka teoretis.
- Contoh imputasi median versus mean menunjukkan bahwa insight berbasis karakteristik data (seperti heavy-tailed distribution) merupakan kontribusi bernilai tinggi karena bersifat generalizable dan langsung aplikatif dalam pipeline data mining.

### Transisi ke Slide Berikutnya

Memahami jenis-jenis kontribusi ilmiah ini akan menjadi fondasi penting saat kita menyusun ulasan paper secara sistematis. Pada slide berikutnya, kita akan menguraikan struktur lengkap terdiri dari empat belas bagian yang wajib diisi dalam setiap review, termasuk bagaimana menempatkan scientific contribution secara tepat dan menggunakannya sebagai jembatan menuju perumusan research opportunity dalam proposal penelitian Anda.

---

## Slide 020 - Contoh Struktur Ulasan Paper

### Narasi

Memasuki slide ini, kita mengintegrasikan konsep kontribusi ilmiah yang telah dibahas pada slide sebelumnya menjadi sebuah kerangka ulasan paper yang terstruktur dan sistematis. Dalam konteks penelitian tingkat magister pada bidang data mining, kemampuan melakukan *critical review* tidak lagi bersifat parsial atau hanya fokus pada akurasi model, melainkan harus mencakup seluruh aspek metodologis, konseptual, dan empiris dari sebuah karya ilmiah. Oleh karena itu, struktur ulasan ini dibagi menjadi empat belas bagian utama yang dirancang untuk memetakan secara komprehensif alur logika penelitian, mulai dari latar belakang masalah hingga potensi pengembangan ke depan.

Keempat belas bagian tersebut dapat dipilah berdasarkan fase penelitian untuk memudahkan analisis. Bagian satu hingga tiga, yaitu *Research Context*, *Research Gap*, dan *Research Question*, berfungsi sebagai fondasi yang menjelaskan signifikansi masalah dan celah pengetahuan yang ingin diisi. Bagian empat hingga delapan, meliputi *Proposed Method*, *Dataset*, *Baseline*, *Experimental Design*, dan *Evaluation*, menyoroti inti teknis penelitian, khususnya dalam data mining di mana representativitas dataset, kekuatan baseline, ketelitian desain eksperimen, serta metrik evaluasi menjadi penentu validitas temuan. Bagian sembilan hingga sebelas, yaitu *Results*, *Ablation/Sensitivity*, dan *Limitations*, berfokus pada interpretasi empiris, analisis sensitivitas model terhadap perubahan kondisi data atau hyperparameter, serta pengakuan objektif terhadap batasan studi. Bagian terakhir mencakup *Reproducibility*, *Scientific Contribution*, dan *Research Opportunity*. Bagian dua belas memastikan transparansi melalui ketersediaan kode dan konfigurasi, bagian tiga kembali menekankan novelty yang dihasilkan sesuai pembahasan slide sebelumnya, dan bagian empat belas membuka ruang strategis bagi pengembangan riset mandiri.

Penting untuk dipahami bahwa format ini bukan sekadar daftar ringkasan deskriptif, melainkan pedoman untuk memberikan kritik konstruktif pada setiap poin. Setiap bagian wajib diisi dengan ringkasan faktual diikuti oleh evaluasi kritis, seperti menilai apakah baseline benar-benar diperlakukan adil, apakah desain eksperimen sudah memenuhi standar reproduktibilitas, atau apakah klaim hasil didukung oleh bukti empiris yang memadai. Struktur ini akan menjadi acuan baku saat Anda melakukan *critical review* terhadap paper internasional terindeks Scopus. Lebih lanjut, komponen ke-empat belas, *Research Opportunity*, sengaja dirancang sebagai jembatan yang mengarahkan Anda untuk merumuskan ide penelitian mandiri. Untuk membantu Anda mengevaluasi setiap komponen secara mendalam dan terukur, slide berikutnya akan menyajikan daftar pertanyaan kritis (*checklist*) yang harus dijawab untuk masing-masing bagian ulasan ini.

### Inti yang Harus Ditekankan

- Struktur 14 bagian merupakan kerangka standar untuk ulasan paper tingkat magister yang menuntut analisis kritis menyeluruh, bukan sekadar rangkuman isi paper.
- Setiap komponen harus diisi dengan kombinasi ringkasan objektif dan evaluasi kritis terhadap validitas metodologi, kekuatan eksperimen, serta keterbatasan yang diakui penulis.
- Bagian 14 (*Research Opportunity*) berfungsi sebagai titik transisi strategis dari literatur review menuju perumusan research question dan proposal penelitian mahasiswa sendiri.
- Kerangka ini selaras dengan praktik penelitian modern di bidang data mining yang menekankan transparansi, reproduktibilitas, ablation study, dan kontribusi ilmiah yang terukur.

### Transisi ke Slide Berikutnya

Dengan memahami peta struktur ulasan ini, langkah selanjutnya adalah mengoperasikannya secara praktis. Mari kita lihat bagaimana setiap komponen tersebut dievaluasi melalui serangkaian pertanyaan kritis yang akan kita bahas pada slide berikutnya.

---

## Slide 021 - Pertanyaan Kritis untuk Setiap Komponen

### Narasi

Pada slide sebelumnya, kita telah menyusun kerangka ulasan paper melalui empat belas bagian struktural. Kerangka tersebut berfungsi sebagai peta navigasi, namun agar analisis Anda memenuhi standar kelayakan publikasi di jurnal terindeks Scopus, Anda perlu menerjemahkan struktur itu menjadi serangkaian pertanyaan auditori yang tajam. Slide ini menyajikan daftar periksa (*checklist*) pertanyaan kritis yang dirancang khusus untuk menguji kedalaman metodologis, validitas empiris, dan kontribusi ilmiah dari setiap komponen paper.

Mari kita mulai dari tiga pilar awal penelitian. Untuk komponen *Problem*, jangan puas dengan pernyataan umum; tanyakan mengapa masalah tersebut secara akademis atau industri mendesak, dan apakah ada bukti kuantitatif atau literatur terkini yang memperkuat urgensi klaim tersebut. Pada *Research Gap*, waspadai kesalahan umum menganggap "belum pernah dilakukan di domain X" sebagai celah penelitian. Gap yang valid harus menunjukkan ketidakkonsistenan temuan sebelumnya, asumsi model yang terlalu restriktif, atau kegagalan penanganan noise dan imbalanced class. Selanjutnya, *Research Question* harus bersifat operasional dan dapat diuji secara empiris dengan data yang tersedia, menghindari pertanyaan yang terlalu luas atau filosofis sehingga sulit diukur performanya.

Ketika memasuki fase teknis, fokus beralih pada *Proposed Method*. Identifikasi novelti utamanya: apakah perbaikan terletak pada arsitektur model, mekanisme loss function, strategi sampling, atau pipeline preprocessing? Evaluasi apakah ide tersebut secara matematis atau komputasional masuk akal sebelum melihat hasilnya. Kualitas input menentukan kualitas output, sehingga komponen *Dataset* wajib diperiksa representativitasnya terhadap populasi target dan keamanan dari *data leakage*, terutama pada tahap *train-validation-test splitting* atau *feature scaling*. *Baseline* juga tidak boleh dipilih secara sembarangan; gunakan algoritma yang menjadi standar de facto di bidang terkait, pastikan preprocessing dan tuning diterapkan secara konsisten, dan perlakukan baseline dengan adil agar keunggulan metode usulan benar-benar terukur.

Desain eksperimen dan pelaporan hasil sering kali menjadi titik lemah paper tingkat menengah. Pastikan eksperimen mencakup *repeated runs* untuk mengurangi varians acak, melakukan *hyperparameter tuning* yang sistematis (bukan grid search sembarangan), dan menyertakan uji statistik non-parametrik atau interval kepercayaan untuk membuktikan signifikansi perbedaan performa. Klaim yang ditulis penulis harus selaras penuh dengan *Evidence* yang disajikan di tabel dan grafik; hindari *overclaiming* yang melampaui cakupan data. Periksa juga ancaman validitas internal (bias seleksi, konfounding variables), eksternal (kemampuan generalisasi ke domain berbeda), dan konstruk (kesesuaian metrik evaluasi dengan tujuan penelitian). Penulis yang rigor akan secara eksplisit menyatakan *Limitation*, mengakui batas inferensi yang tidak bisa ditarik dari studi mereka.

Di era Open Science, aspek *Reproducibility* menjadi syarat mutlak. Verifikasi ketersediaan kode sumber, konfigurasi lingkungan (misalnya versi library scikit-learn atau NumPy), dan aksesibilitas data atau skrip preprocessing. Tanpa ini, klaim eksperimen kehilangan nilai ilmiahnya. Akhirnya, tentukan *Scientific Contribution*: apakah paper ini benar-benar menghasilkan insight baru, framework reusable, atau benchmark yang berguna bagi komunitas? Dari jawaban tersebut, turunkan *Research Opportunity* atau eksperimen lanjutan yang paling logis dan berdampak tinggi untuk dikembangkan lebih jauh.

### Inti yang Harus Ditekankan

- Checklist ini mengubah proses membaca paper dari aktivitas pasif menjadi audit metodologis aktif yang wajib dijalankan sebelum menulis ulasan atau proposal.
- Setiap pertanyaan berfungsi sebagai filter ketat untuk membedakan paper berkualitas tinggi (yang transparan, reproducible, dan berbasis evidence) dari paper yang sekadar memenuhi kuota publikasi.
- Jawaban atas pertanyaan-pertanyaan ini secara langsung menjadi bahan baku untuk mengidentifikasi *research gap* pribadi dan merancang eksperimen pertama dalam proyek penelitian magister Anda.

### Transisi ke Slide Berikutnya

Setelah memiliki pedoman pertanyaan yang terstruktur, langkah selanjutnya adalah menerapkan teknik membaca yang efektif agar proses review tidak memakan waktu berlebihan. Kita akan bahas urutan pembacaan yang optimal, pembagian mode skimming versus deep reading, serta tips praktis untuk mencatat kritik langsung di margin paper.

---

## Slide 022 - Teknik Membaca Paper secara Kritis

### Narasi

Setelah pada slide sebelumnya kita menyusun checklist pertanyaan kritis untuk setiap komponen paper, kini kita akan membahas bagaimana menerapkannya secara praktis melalui teknik membaca yang terstruktur. Membaca paper penelitian di jenjang magister tidak boleh dilakukan secara linear dari halaman pertama hingga terakhir tanpa strategi, karena hal ini cenderung tidak efisien dan sering kali membuat peneliti kewalahan oleh detail teknis yang belum tentu relevan dengan fokus evaluasi metodologis kita.

Urutan membaca yang efektif dimulai dengan menelusuri abstrak dan kesimpulan terlebih dahulu. Langkah ini bertujuan untuk menangkap klaim utama, kontribusi inti, dan narasi akhir penulis sebelum kita tenggelam dalam kompleksitas teknis. Setelah itu, alihkan perhatian ke bagian introduction untuk memahami konteks masalah, urgensi penelitian, serta celah riset atau research gap yang ingin diisi. Evaluasi juga apakah research question yang dirumuskan benar-benar feasible dan dapat dijawab dengan data serta pendekatan yang ditawarkan.

Tahap selanjutnya adalah mendalami bagian metodologi. Di sini, Anda tidak cukup hanya membaca deskripsi algoritma, tetapi wajib membuat sketsa alur metode secara visual. Visualisasi ini membantu mengidentifikasi potensi bias, asumsi implisit, pipeline preprocessing, atau kerancuan dalam desain eksperimen. Setelah struktur metode jelas, langsung beralih ke tabel hasil. Hindari terjebak pada narasi teks terlebih dahulu; bandingkan angka-angka metrik performa dengan baseline yang digunakan. Perhatikan apakah peningkatan yang dilaporkan konsisten, apakah ada kesenjangan besar antara training dan testing set yang mengindikasikan overfitting, serta apakah uji statistik atau repeated runs telah dilakukan.

Bagian discussion dan limitation merupakan area strategis untuk mencari celah validitas. Penulis biasanya mengakui keterbatasan studi mereka, namun sebagai reviewer kritis, Anda harus menilai apakah pengakuan tersebut memadai atau justru menutupi kelemahan fundamental dalam generalisasi atau konstruksi variabel. Terakhir, lakukan sintesis keseluruhan dan tuliskan daftar pertanyaan kritis berdasarkan temuan Anda. Proses ini memastikan bahwa setiap kritik berbasis bukti empiris, bukan sekadar opini subjektif.

Dalam praktik nyata, membaca paper memerlukan penyesuaian intensitas bacaan melalui dua mode utama. Mode skimming dirancang untuk mendapatkan peta besar paper dalam waktu singkat, sekitar lima hingga sepuluh menit. Fokusnya adalah pada judul, abstrak, heading struktural, tabel ringkas, dan kesimpulan untuk menentukan relevansi paper terhadap topik riset Anda. Sebaliknya, deep read membutuhkan waktu satu hingga dua jam dan difokuskan khusus pada bagian metodologi, eksperimen, dan analisis data. Pada mode ini, Anda harus menelusuri langkah-langkah kunci, memeriksa konfigurasi hyperparameter, memverifikasi klaim statistik, dan menyiapkan catatan untuk replikasi atau ablation study.

Sebagai tips operasional, selalu siapkan alat anotasi saat membaca. Catat pertanyaan, kebingungan, atau ide alternatif langsung di margin paper agar tidak hilang saat Anda kembali menelaahnya. Penting juga untuk bersikap skeptis terhadap abstrak; abstrak sering kali menyajikan versi "teroptimalkan" dari hasil penelitian tanpa menyertakan konteks kegagalan, kondisi batas, atau trade-off yang terjadi. Selalu lakukan triangulasi dengan membandingkan klaim di abstrak, data numerik di tabel hasil, dan interpretasi di bagian kesimpulan. Jika ketiganya tidak selaras, itulah indikasi awal bahwa perlu investigasi lebih mendalam atau pencarian paper pendukung untuk validasi eksternal.

### Inti yang Harus Ditekankan

- Membaca paper secara kritis harus bersifat non-linear dan bertahap: mulai dari gambaran umum (abstrak & kesimpulan), masuk ke konteks (introduction), lalu mendalami teknis (metodologi & hasil), dan diakhiri dengan evaluasi menyeluruh (discussion & limitation).
- Terapkan dua mode baca sesuai tujuan: skimming (5–10 menit) untuk filtering dan pemetaan konteks, serta deep read (1–2 jam) untuk verifikasi metodologi, eksperimen, dan klaim statistik.
- Selalu lakukan triangulasi klaim vs evidence vs kesimpulan, catat pertanyaan secara langsung di margin, dan jangan menerima abstrak sebagai kebenaran mutlak tanpa verifikasi pada data mentah dan desain eksperimen.

### Transisi ke Slide Berikutnya

Ketika Anda telah terbiasa menerapkan urutan dan mode baca ini, output dari proses critique akan menjadi fondasi utama untuk menyusun presentasi critical review. Pada slide berikutnya, kita akan membahas strategi penyajian temuan kritis tersebut, termasuk alokasi waktu presentasi, prinsip pembuatan slide, serta cara memetakan klaim penulis versus evidence yang Anda temukan agar diskusi seminar berjalan tajam dan konstruktif.

---

## Slide 023 - Strategi Presentasi Critical Review

### Narasi

Setelah Anda menguasai teknik membaca paper secara sistematis pada sesi sebelumnya, langkah selanjutnya adalah mengemas temuan kritis tersebut menjadi presentasi yang terstruktur, padat, dan berorientasi pada kontribusi ilmiah. Dalam konteks tinjauan paper internasional untuk jenjang magister, durasi presentasi biasanya dibatasi sekitar sepuluh menit. Alokasi waktu ini dirancang agar Anda tidak terjebak dalam penjelasan teknis yang berlebihan, melainkan langsung menyentuh inti argumen. Tiga menit pertama digunakan untuk merangkum problem statement, research question, dan metode yang diusulkan penulis. Ini berfungsi sebagai landasan kontekstual bagi audiens sebelum Anda memasuki fase analisis. Selanjutnya, dua menit dialokasikan khusus untuk membedah desain eksperimen, mencakup strategi pemilihan dataset, konfigurasi baseline, dan metrik evaluasi yang digunakan.

Bagian paling krusial memakan tiga menit berikutnya, yaitu kritik terhadap bukti empiris, validitas klaim, serta keterbatasan studi. Di sinilah kemampuan berpikir kritis tingkat tinggi diuji. Untuk menjaga fokus dan dampak presentasi, prinsip penyusunan slide sangat menentukan: batasi konten hanya pada tiga hingga lima temuan kritis yang paling relevan dengan research gap Anda. Hindari menyajikan seluruh tabel atau grafik dari paper asli. Sebaliknya, buatlah tabel perbandingan yang secara eksplisit memetakan klaim substantif penulis versus bukti yang sebenarnya disajikan. Visualisasi harus digunakan secara strategis untuk menyoroti inkonsistensi atau celah metodologis, bukan sekadar penghias slide. Penting diingat bahwa slide berfungsi sebagai penunjang visual, bukan naskah bacaan. Jelaskan setiap poin dengan narasi lisan yang mengalir, sehingga audiens dapat mengikuti logika argumentasi Anda tanpa kehilangan fokus pada substansi.

Sebagai ilustrasi konkret, perhatikan contoh tabel perbandingan klaim versus evidence. Ketika penulis mengklaim bahwa metodenya unggul secara signifikan, namun di bagian eksperimen tidak melaporkan nilai p-value, confidence interval, atau uji statistik inferensial, penilaian Anda harus tegas menyatakan bahwa klaim tersebut lemah secara metodologis. Demikian pula, jika ada pernyataan bahwa model memiliki generalisasi yang robust, tetapi validasi hanya dilakukan pada satu dataset tunggal tanpa mekanisme cross-validation atau stratified split yang representatif, maka klaim generalisasi itu tidak didukung oleh evidence empiris. Tabel semacam ini akan menjadi fondasi utama saat Anda menyusun rubrik penilaian pada slide berikutnya, di mana bobot terbesar secara eksplisit diberikan pada analisis metodologi, desain eksperimen, dan kekuatan evidence. Dengan struktur presentasi yang disiplin ini, Anda tidak hanya melakukan review pasif, tetapi secara aktif menyiapkan bahan baku yang terukur untuk research proposal Anda sendiri.

### Inti yang Harus Ditekankan

- Disiplin alokasi waktu (3-2-3-2 menit) memastikan presentasi tetap tajam dan tidak melebar ke detail teknis yang tidak relevan.
- Prinsip "claim vs evidence" wajib diterapkan; setiap klaim substantif harus diverifikasi keberadaannya di bagian eksperimen atau lampiran.
- Slide adalah peta visual, bukan transkrip; dosen dan audiens mengharapkan penjelasan naratif yang menghubungkan poin-poin kritis secara logis.
- Identifikasi weakness (seperti ketiadaan uji signifikansi atau ketergantungan pada single-dataset validation) secara langsung membuka pintu untuk formulasi research opportunity.

### Transisi ke Slide Berikutnya

Strategi presentasi yang telah kita bahas akan menjadi panduan praktis saat Anda menyusun materi review. Namun, agar penilaian Anda konsisten dan terstandarisasi, kita perlu memahami bagaimana setiap aspek tersebut ditimbang secara formal. Mari kita lanjutkan ke slide berikutnya untuk membahas rubrik penilaian critical international paper beserta distribusi bobot masing-masing komponen.

---

## Slide 024 - Rubrik Critical International Paper Review

### Narasi

Setelah pada slide sebelumnya kita membahas strategi penyusunan presentasi dan alokasi waktu yang efektif, kini kita beralih ke instrumen evaluasi yang akan menjamin objektivitas dan kedalaman analisis Anda. Rubrik ini dirancang khusus untuk konteks penelitian tingkat magister, di mana penekanan tidak lagi terletak pada kemampuan mendeskripsikan isi paper, melainkan pada kapasitas menguji validitas klaim ilmiah melalui lensa metodologi data mining yang ketat. Setiap aspek penilaian memiliki bobot spesifik yang mencerminkan prioritas akademik dalam publikasi internasional terindeks Scopus.

Tabel bobot penilaian terdiri dari delapan komponen utama. Pemahaman research problem dan identifikasi scientific contribution masing-masing bernilai 10%, karena keduanya menjadi fondasi logis sebuah karya ilmiah. Analisis related work dan research gap serta kritik terhadap validity dan limitation juga diberikan bobot 10–15%, mengingat kemampuan memetakan literatur dan mengenali celah generalisasi atau bias dataset merupakan kompetensi kritis bagi peneliti data mining. Poin krusial terletak pada tiga aspek yang masing-masing berbobot 15%, yaitu analisis methodology, experimental design, dan result/evidence. Dalam praktik data mining, metode tanpa eksperimen yang terkontrol dan bukti empiris yang transparan tidak dapat dipertanggungjawabkan secara ilmiah. Oleh karena itu, rubrik ini menuntut Anda untuk memeriksa kesesuaian arsitektur model dengan masalah, ketepatan pemilihan metrik evaluasi, penggunaan uji statistik, serta replikabilitas hasil. Terakhir, research opportunity diberi bobot 10% sebagai jembatan antara review kritis dan pengembangan ide tesis Anda sendiri.

Implikasi dari rubrik ini sangat jelas: review yang baik harus menunjukkan sikap skeptis yang konstruktif, bukan sekadar rangkuman naratif. Anda dituntut untuk membandingkan klaim penulis dengan evidence yang tersedia, mengidentifikasi potensi confounding variables, dan menilai apakah claim generalisasi benar-benar didukung oleh diversitas dataset atau hanya berlaku pada kondisi ideal. Dengan struktur penilaian ini, proses critical review tidak lagi bersifat subjektif, melainkan terstandarisasi sesuai kaidah penelitian kuantitatif dan eksperimental di bidang machine learning dan knowledge discovery.

### Inti yang Harus Ditekankan

- Bobot terbesar (total 45%) dialokasikan pada aspek metodologis dan eksperimental, menegaskan bahwa dalam data mining, kualitas bukti empiris lebih penting daripada narasi teoritis semata.
- Rubrik ini memaksa mahasiswa beralih dari peran pembaca pasif menjadi evaluator aktif yang mampu membedah validity, limitation, dan replikabilitas suatu studi.
- Komponen research opportunity sengaja disertakan untuk memastikan setiap review menghasilkan insight yang langsung dapat dikonversi menjadi draft research question atau hipotesis untuk proposal tesis.
- Penilaian objektif berdasarkan rubrik ini menjadi standar kualifikasi sebelum mahasiswa diizinkan melanjutkan ke tahap penyusunan proposal penelitian mandiri.

### Transisi ke Slide Berikutnya

Dengan memahami bagaimana sebuah paper dievaluasi secara kritis, langkah selanjutnya adalah menerjemahkan temuan dan celah penelitian yang Anda identifikasi ke dalam kerangka kerja yang terstruktur. Pada slide berikutnya, kita akan membahas struktur standar Research Proposal V1 yang akan menjadi acuan penulisan rencana penelitian Anda selama semester ini.

---

## Slide 025 - Struktur Research Proposal V1

### Narasi

Setelah kita menguraikan rubrik penilaian review paper pada slide sebelumnya, langkah selanjutnya adalah menerjemahkan kemampuan analisis kritis tersebut ke dalam dokumen penelitian Anda sendiri. Slide ini menyajikan struktur standar untuk Research Proposal V1 yang akan menjadi acuan penulisan proyek akhir Anda pada jenjang magister. Bagian pertama adalah Pendahuluan, yang wajib memuat problem statement yang jelas, identifikasi research gap berdasarkan literatur terkini, perumusan research question yang terukur, serta penjelasan mengenai novelty atau kebaruan dan kontribusi ilmiah yang diharapkan. Pada tingkat S2, novelty tidak harus berupa algoritma baru dari nol, tetapi dapat berupa adaptasi metodologi, penerapan pada konteks dataset spesifik, atau perbaikan signifikan terhadap pipeline eksperimental yang sudah ada.

Bagian kedua berfokus pada Dataset. Di sini Anda perlu mendeskripsikan sumber data, karakteristik utama, ukuran, serta alasan pemilihan dataset tersebut. Sertakan hasil Exploratory Data Analysis (EDA) secara singkat untuk menunjukkan pemahaman awal terhadap distribusi, missing values, outlier, dan korelasi antar fitur. Bagian ketiga adalah Metodologi, yang harus dilengkapi dengan diagram alur metode yang menggambarkan pipeline preprocessing hingga modeling. Jelaskan komponen-komponen teknis yang akan digunakan, mulai dari teknik feature engineering, model yang dipilih, hingga strategi validasi, serta berikan justifikasi mengapa pendekatan tersebut paling sesuai dengan karakteristik data dan rumusan masalah.

Bagian keempat membahas Baseline. Dalam penelitian data mining, baseline berfungsi sebagai titik tolak evaluasi kinerja metode usulan Anda. Sebutkan model-model pembanding yang relevan (misalnya classical machine learning models atau established deep learning architectures) dan berikan justifikasi ilmiah mengapa model-model tersebut dipilih sebagai benchmark. Bagian kelima adalah Experimental Plan, yang merupakan inti dari desain penelitian kuantitatif. Susun tabel eksperimen yang sistematis, tentukan metrik evaluasi yang tepat (seperti accuracy, F1-score, AUC-ROC, atau metric khusus domain), dan rencanakan uji statistik (seperti paired t-test atau Wilcoxon signed-rank test) untuk memastikan bahwa perbedaan performa yang diamati signifikan secara statistik dan bukan akibat variasi acak.

Bagian keenam menutup proposal dengan Jadwal dan Kebutuhan. Buat timeline pelaksanaan yang realistis, mencakup tahap pengumpulan data, preprocessing, eksperimen, analisis hasil, hingga penulisan naskah. Jangan lupa mencantumkan kebutuhan komputasi, seperti spesifikasi GPU/CPU, kapasitas penyimpanan, atau akses ke platform cloud, mengingat kompleksitas training model pada dataset berskala besar. Struktur ini dirancang agar proposal Anda memenuhi standar rigor akademik S2, di mana setiap klaim didukung oleh evidence, dan setiap keputusan metodologis dapat dipertanggungjawabkan secara ilmiah.

### Inti yang Harus Ditekankan

- Proposal harus bersifat logis dan koheren, di mana setiap bagian saling terkait erat mulai dari perumusan masalah hingga rencana eksperimen.
- Baseline dan uji statistik wajib disertakan untuk menjamin validitas komparatif dan signifikansi empiris hasil penelitian.
- Kejelasan EDA dan justifikasi pemilihan dataset/metode menjadi fondasi kuat bagi replikabilitas dan transparansi penelitian.

### Transisi ke Slide Berikutnya

Dengan kerangka proposal yang telah mapan, kita akan mendalami cara merumuskan problem statement dan research gap secara efektif pada slide berikutnya, termasuk latihan praktis untuk mengubah pernyataan umum menjadi gap penelitian yang spesifik dan terukur.

---

## Slide 026 - Menulis Problem dan Gap pada Proposal

### Narasi

Bagian Pendahuluan dalam struktur proposal penelitian Anda, sebagaimana dibahas pada slide sebelumnya, menuntut kejelasan logis sejak baris pertama. Penulisan *Problem Statement* harus dimulai dengan dua hingga tiga kalimat yang padat dan langsung mengarah pada masalah nyata di bidang data mining atau aplikasi industri yang relevan. Klaim masalah tidak boleh bersifat subjektif atau terlalu umum; ia wajib didukung oleh fakta empiris, laporan industri, atau statistik sederhana. Sebagai contoh, alih-alih menyatakan bahwa deteksi anomali itu penting, Anda dapat menulis bahwa "ketidakseimbangan kelas ekstrem menyebabkan penurunan recall hingga 40% pada sistem deteksi fraud perbankan konvensional". Setelah masalah ditegakkan, segera jelaskan mengapa pendekatan atau algoritma yang sudah ada belum mampu memberikan solusi yang memadai. Bisa karena asumsi distribusi normal yang tidak terpenuhi, kerentanan terhadap *noise*, atau kompleksitas komputasi yang tidak praktis untuk skala besar. Penjelasan ini membangun justifikasi kuat mengapa riset Anda diperlukan.

Setelah *Problem Statement* terbentuk, Anda harus merumuskan *Gap Statement* yang berfungsi sebagai jembatan akademis antara literatur terdahulu dengan kontribusi unik Anda. *Gap* bukan berarti mengkritik penelitian sebelumnya, melainkan menunjukkan keterbatasan kontekstual atau metodologis yang belum dieksplorasi. Gunakan pola kalimat perbandingan yang terstruktur: sebutkan apa yang sudah diteliti, lalu tunjukkan apa yang masih kosong. Contoh yang efektif adalah menyatakan bahwa "penelitian A dan B telah membandingkan efektivitas XGBoost dan Random Forest, namun keduanya belum menguji kinerja model tersebut pada dataset dengan fitur kategorikal ber-kardinalitas tinggi dan distribusi label yang sangat miring". Dengan merujuk pada kondisi data, baseline, atau skenario eksperimen spesifik, *gap* Anda menjadi terukur dan siap diuji secara empiris.

Untuk mengasah kemampuan penulisan akademis tingkat magister, perhatikan latihan revisi kalimat berikut: "Banyak penelitian menggunakan deep learning untuk tabular data." Pernyataan ini lemah karena bersifat generalisasi tanpa batasan ruang lingkup. Perbaiki dengan menambahkan spesifikasi teknis yang menjadi fokus pengujian Anda. Misalnya, ubah menjadi: "Meskipun arsitektur Transformer semakin diadopsi untuk data tabular, belum ada studi komprehensif yang mengevaluasi stabilitas FT-Transformer dibandingkan baseline tree-based pada dataset kecil dengan missing value acak dan ukuran sampel terbatas." Latihan ini menekankan bahwa setiap klaim dalam proposal harus mengandung variabel independen, konteks data, dan aspek performa yang akan diukur, sehingga menghindari ambiguitas selama proses review paper atau seminar proposal.

### Inti yang Harus Ditekankan

- Problem statement harus konkret, didukung data/fakta, dan secara eksplisit menyebutkan kelemahan solusi existing.
- Gap statement berfungsi sebagai fondasi logis yang menghubungkan tinjauan pustaka dengan kontribusi novel riset Anda.
- Hindari kalimat generik; selalu spesifikasikan dataset, kondisi data, baseline pembanding, dan metrik yang menjadi fokus pengujian.
- Formulasi yang presisi memudahkan penerjemahan langsung ke dalam Research Question dan desain eksperimen yang terkontrol.

### Transisi ke Slide Berikutnya

Setelah problem dan gap berhasil dirumuskan dengan presisi, langkah natural berikutnya adalah menerjemahkan celah tersebut menjadi pertanyaan penelitian yang terstruktur serta hipotesis yang dapat diuji secara statistik. Mari kita lanjutkan ke cara menyusun Research Question dan Hipotesis yang selaras dengan gap yang telah Anda identifikasi.

---

## Slide 027 - Merumuskan RQ dan Hipotesis pada Proposal

### Narasi

Setelah pada slide sebelumnya kita berhasil mendefinisikan problem statement dan research gap yang spesifik, langkah metodologis berikutnya dalam penyusunan proposal penelitian adalah menerjemahkan celah pengetahuan tersebut menjadi pertanyaan penelitian atau Research Question (RQ) serta hipotesis yang teruji. Pada jenjang magister, RQ berfungsi sebagai kompas eksperimental yang menentukan desain studi, pemilihan metrik evaluasi, hingga strategi analisis statistik. RQ yang lemah akan menghasilkan eksperimen yang ambigu, sementara RQ yang tajam memungkinkan replikasi dan validasi ilmiah yang ketat.

Format RQ yang efektif harus menghindari pertanyaan terbuka yang terlalu luas dan menggantinya dengan struktur yang terukur. Template pada slide menyajikan pola baku: "Pada [karakteristik data/domain], apakah [metode/teknik] menghasilkan [metrik] yang lebih baik daripada [baseline]?". Pola ini memaksa peneliti untuk secara eksplisit menyebutkan konteks data, intervensi algoritmik, tolak ukur keberhasilan, dan pembanding yang relevan. Sebagai contoh, RQ1 membandingkan FT-Transformer dengan XGBoost khusus pada data tabular yang kaya fitur kategorikal. Pertanyaan ini langsung mengarahkan kita pada karakteristik data yang menantang dan metode yang sedang diuji. RQ2 berfokus pada aspek teknis, yaitu bagaimana mekanisme categorical embedding mempengaruhi stabilitas konvergensi model ketika volume data terbatas. Sementara itu, RQ3 menggeser fokus dari akurasi murni menuju trade-off praktis antara performa prediktif dan biaya komputasi (waktu training), yang merupakan pertimbangan kritis untuk deployment sistem skala industri.

Dari setiap RQ, kita kemudian menurunkan hipotesis kerja yang bersifat falsifiable atau dapat dibuktikan salah melalui data empiris. Hipotesis dalam penelitian data mining tidak boleh berupa dugaan subjektif, melainkan prediksi yang berlandaskan pada teori pembelajaran mesin atau temuan literatur terkini. H1 memprediksi bahwa FT-Transformer akan menunjukkan keunggulan signifikan pada data dengan kardinalitas kategori tinggi, karena arsitektur attention-nya mampu memodelkan interaksi non-linear antar fitur kategorikal tanpa memerlukan one-hot encoding masif yang menyebabkan dimensi meledak. Namun, keunggulan arsitektural ini memiliki batas. H2 memberikan kondisi batasan dengan memprediksi bahwa diferensiasi performa akan menurun seiring bertambahnya jumlah sampel, mengingat model berbasis ensemble tree seperti XGBoost sudah mencapai efisiensi optimal pada dataset besar. Pasangan hipotesis ini dirancang agar dapat diuji menggunakan statistical significance testing (seperti paired t-test atau Wilcoxon signed-rank test) serta dianalisis lebih lanjut melalui ablation study pada tahap eksperimen.

Perlu ditekankan bahwa RQ dan hipotesis ini akan menjadi landasan operasional saat kita memasuki tahap konkret pada slide berikutnya, yaitu pemilihan dataset dan penentuan baseline. Tanpa RQ yang presisi, pemilihan dataset bisa menyimpang dari konteks masalah, dan tanpa hipotesis yang terstruktur, evaluasi baseline kehilangan arah komparatif. Pastikan setiap elemen RQ Anda dapat diimplementasikan secara langsung menggunakan pipeline Python, library seperti scikit-learn atau pandas, serta metrik evaluasi yang telah disepakati, sehingga transisi dari teori ke praktik eksperimen berjalan mulus.

### Inti yang Harus Ditekankan

- RQ harus spesifik, terukur, dan mengikuti struktur domain-data-metrik-baseline agar dapat dioperasionalkan menjadi skrip eksperimen yang reproducible.
- Hipotesis bersifat falsifiable dan didasarkan pada karakteristik algoritma atau literatur, serta harus mencakup kondisi batas (misalnya ukuran dataset, kardinalitas fitur, atau noise) untuk memudahkan pengujian statistik.
- Setiap RQ wajib memiliki pasangan hipotesis yang jelas, sehingga memudahkan perancangan ablation study, statistical significance testing, dan error analysis di tahap validasi model.

### Transisi ke Slide Berikutnya

Setelah RQ dan hipotesis terbentuk secara kokoh, langkah selanjutnya adalah memastikan bahwa pertanyaan tersebut benar-benar dapat dijawab secara empiris. Hal ini menuntut kita untuk memilih dataset yang sesuai dengan karakteristik yang disebutkan dalam RQ, sekaligus menetapkan baseline yang kompetitif untuk pengukuran performa. Mari kita lanjutkan ke slide berikutnya untuk membahas kriteria seleksi dataset dan strategi pemilihan baseline yang tepat.

---

## Slide 028 - Memilih Dataset dan Baseline dalam Proposal

### Narasi

Setelah merumuskan Research Question dan hipotesis pada slide sebelumnya, langkah kritis berikutnya adalah memastikan bahwa pertanyaan penelitian tersebut dapat diuji secara empiris melalui pemilihan dataset dan baseline yang tepat. Dalam konteks penelitian data mining tingkat magister, dataset bukan sekadar kumpulan data mentah, melainkan fondasi validitas seluruh eksperimen. Kita harus menerapkan empat kriteria ketat: pertama, dataset harus dapat diakses dan terdokumentasi dengan baik, mencakup informasi tentang asal-usul, prosedur pengumpulan, serta makna semantik setiap fitur. Kedua, ukuran dataset harus memadai untuk menjawab RQ; misalnya, jika hipotesis melibatkan model ensemble atau arsitektur neural network pada data tabular, sampel yang terlalu sedikit akan memicu overfitting dan varians evaluasi yang tinggi. Ketiga, hindari dataset yang mengandung bias sistematis yang tidak dapat dijelaskan atau dikontrol, karena hal ini mengancam validitas internal dan generalisasi temuan. Keempat, pastikan domain dataset relevan dengan masalah penelitian, sehingga kontribusi ilmiah yang dihasilkan memiliki bobot aplikatif yang jelas.

Tabel kandidat dataset yang ditampilkan memberikan gambaran praktis mengenai trade-off dalam seleksi data. DS-1 dengan 50.000 baris, 45 fitur, dan target biner cocok untuk menguji skalabilitas dan stabilitas algoritma pada skala menengah. Sementara itu, DS-2 dengan 12.000 baris, 120 fitur, dan target multiclass menuntut penanganan dimensi yang lebih kompleks serta metrik evaluasi yang disesuaikan, seperti macro-F1 atau PR-AUC. Pertimbangan sumber data juga krusial; dataset dari kompetisi sering kali sudah mengalami pembersihan awal namun berpotensi mengalami data leakage jika split train-test tidak dilakukan dengan ketat, sedangkan dataset publik memerlukan audit kualitas dan handling missing value yang transparan agar hasilnya dapat direplikasi oleh peneliti lain.

Terkait pemilihan baseline, standar metodologis dalam proposal penelitian mensyaratkan kerangka perbandingan yang adil dan informatif. Minimal harus disertakan satu model sederhana sebagai referensi fundamental, seperti Logistic Regression atau Decision Tree, yang berfungsi sebagai garis dasar untuk mengukur apakah peningkatan performa benar-benar berasal dari inovasi metodologis atau sekadar penyesuaian terhadap noise. Selain itu, wajib hadir satu strong tabular model modern seperti XGBoost, LightGBM, atau CatBoost. Model-model ini telah divalidasi secara luas sebagai state-of-the-art untuk struktur data tabular dan menjadi benchmark industri yang solid. Jika RQ Anda menyentuh aspek teknis terbaru, tambahkan pula metode dari literatur terkini sebagai pembanding tambahan, asalkan implementasinya dapat direproduksi dan kontribusinya jelas terdefinisi.

Dengan kerangka dataset dan baseline yang telah disepakati, fondasi untuk desain eksperimen menjadi jauh lebih kokoh. Hal ini akan mengarah langsung pada perancangan alur kerja teknis, mulai dari preprocessing hingga evaluasi statistik, yang akan kita jabarkan secara operasional pada slide berikutnya.

### Inti yang Harus Ditekankan

- Validitas penelitian dimulai dari pemilihan dataset yang memenuhi kriteria aksesibilitas, kecukupan ukuran, minim bias tak terjelaskan, dan relevansi domain.
- Perbandingan antar dataset harus mempertimbangkan trade-off antara volume data, dimensi fitur, jenis target, serta sumber dan potensi kebocoran data.
- Baseline wajib mencakup minimal satu model sederhana (logistic regression/decision tree) dan satu strong tabular model (XGBoost/LightGBM/CatBoost) untuk menjamin fairness dan kedalaman analisis komparatif.
- Setiap keputusan pemilihan dataset dan baseline harus dapat dipertanggungjawabkan secara metodologis dan secara langsung mendukung pengujian hipotesis yang telah dirumuskan sebelumnya.

### Transisi ke Slide Berikutnya

Setelah fondasi dataset dan baseline ditetapkan, kita akan menerjemahkannya ke dalam alur kerja teknis yang terstruktur. Mari kita lanjutkan ke slide berikutnya untuk membahas bagaimana menyusun diagram metodologi dan rencana eksperimental yang presisi, termasuk penentuan fold, seed, konfigurasi tuning, serta uji statistik yang diperlukan.

---

## Slide 029 - Methodology dan Experimental Plan pada Proposal

### Narasi

Setelah menentukan sumber data dan model baseline di slide sebelumnya, langkah kritis berikutnya adalah merancang metodologi dan rencana eksperimen secara sistematis. Pada jenjang magister, proposal bukan sekadar daftar algoritma yang akan dicoba, melainkan dokumen penelitian yang harus menunjukkan alur kerja yang logis, reproducible, dan mampu menjawab setiap Research Question (RQ) secara empiris. Metodologi yang Anda tulis harus menggambarkan bagaimana data mentah diubah menjadi representasi fitur, bagaimana model dilatih dan dioptimalkan, serta bagaimana hasil dievaluasi dan dianalisis secara statistik.

Diagram metodologi pada slide ini menyajikan alur linear yang menjadi tulang punggung eksperimen Anda. Dimulai dari dataset yang telah dikurasi, proses preprocessing diterapkan untuk menangani missing value, outlier, dan normalisasi sesuai karakteristik data. Tahap feature representation menjadi titik pembeda utama, di mana Anda harus secara eksplisit mendefinisikan bagaimana baseline konvensional dikonversi menjadi representasi yang setara dengan metode usulan Anda. Setelah representasi siap, model menjalani proses training diikuti oleh hyperparameter tuning yang ketat. Evaluasi dilakukan menggunakan cross-validation dan repeated runs untuk meminimalkan varians akibat partisi data acak, yang kemudian dilanjutkan dengan analisis statistik untuk menguji signifikansi perbedaan performa antar metode.

Untuk menerjemahkan alur tersebut ke dalam tindakan nyata, gunakan tabel experimental plan sebagai peta eksekusi. Setiap baris eksperimen harus memiliki keterkaitan langsung dengan RQ tertentu. Sebagai contoh, E1 dan E2 dirancang untuk menguji hipotesis utama dengan membandingkan XGBoost versus FT-Transformer pada dua dataset berbeda, menggunakan F1-score dan PR-AUC sebagai metrik prioritas karena sensitif terhadap kelas minoritas. Eksperimen E3 berfungsi sebagai studi ablasi untuk mengukur dampak arsitektural, khususnya variasi dimensi embedding (8, 32, 128), dengan memantau mean F1 beserta standar deviasinya guna menilai konsistensi model. Sementara itu, E4 bertindak sebagai benchmarking menyeluruh terhadap seluruh model yang dikembangkan pada kedua dataset, dilengkapi dengan pencatatan waktu inference/training untuk mengevaluasi trade-off antara akurasi dan kompleksitas komputasi.

Dalam penulisan catatan metodologi, disiplin teknis menjadi penentu kualitas penelitian. Tentukan jumlah fold validasi dan seed random generator sejak awal proposal untuk menjamin reproduktibilitas penuh across multiple runs. Dokumentasikan konfigurasi tuning secara transparan, misalnya penggunaan framework Optuna dengan 100 trial berbasis Bayesian optimization, lengkap dengan search space dan objective function yang didefinisikan. Yang paling krusial, sertakan rencana uji statistik formal seperti Wilcoxon signed-rank test atau paired t-test non-parametrik untuk membuktikan bahwa peningkatan performa bukan sekadar noise atau fluktuasi acak. Standar ini membedakan penelitian akademis tingkat S2 dari sekadar praktikum atau proyek rekayasa biasa.

Rencana eksperimen yang terstruktur dan terdokumentasi dengan baik akan menjadi fondasi operasional saat Anda memasuki fase implementasi mingguan pada slide berikutnya. Dengan peta eksperimen yang jelas, Anda dapat melacak progress secara objektif, melakukan penyesuaian strategis jika menemui bottleneck, dan memastikan setiap iterasi menghasilkan insight yang lebih tajam daripada sebelumnya.

### Inti yang Harus Ditekankan

- Metodologi harus berupa alur kerja spesifik yang menghubungkan preprocessing, representasi fitur, training, tuning, evaluasi, hingga analisis statistik secara linear dan dapat direproduksi.
- Tabel experimental plan wajib memetakan setiap eksperimen secara eksplisit ke Research Question, dataset, metode, dan metrik evaluasi yang relevan, termasuk desain studi ablasi dan benchmarking komputasi.
- Reproduktibilitas dan validitas statistik menjadi syarat mutlak; tetapkan fold, seed, konfigurasi tuning, dan uji signifikansi sejak tahap proposal untuk memenuhi standar penelitian S2.

### Transisi ke Slide Berikutnya

Dengan metodologi dan rencana eksperimen yang sudah terpetakan secara rinci, kita akan lanjut membahas bagaimana menerjemahkan rencana tersebut ke dalam jadwal implementasi mingguan yang realistis, terukur, dan fleksibel terhadap dinamika penelitian lapangan.

---

## Slide 030 - Roadmap Implementasi Setelah Proposal

### Narasi

Setelah struktur metodologi dan rencana eksperimen ditetapkan pada slide sebelumnya, langkah kritis berikutnya adalah menerjemahkan dokumen proposal tersebut menjadi jadwal eksekusi yang terukur dan realistis. Proposal penelitian di jenjang magister bukan sekadar dokumen administratif, melainkan peta jalan operasional yang harus dijalankan secara disiplin. Mari kita bedah target mingguan yang telah disusun untuk memastikan setiap fase penelitian berjalan sistematis, terdokumentasi dengan baik, dan menghasilkan progres yang dapat dipertanggungjawabkan secara ilmiah.

Pada minggu ke-9, fokus utama adalah mengimplementasikan strong baseline. Dalam praktik data mining, baseline yang solid—baik itu model klasik seperti Logistic Regression, Random Forest, maupun XGBoost dengan konfigurasi default—berfungsi sebagai anchor evaluasi. Tanpa baseline yang tereksekusi dengan benar dan diverifikasi melalui cross-validation serta repeated runs, klaim keunggulan proposed method tidak akan memiliki dasar perbandingan yang valid. Minggu ke-10 dialokasikan untuk implementasi proposed atau selected method sesuai dengan arsitektur atau algoritma yang telah direncanakan. Pastikan kode preprocessing, feature engineering, dan training pipeline sudah modular agar mudah di-reproduce. Setelah kedua komponen utama siap, minggu ke-11 digunakan untuk menjalankan Experiment V1 dan melakukan analisis awal. Pada tahap ini, Anda tidak hanya mencatat metrik seperti F1-score atau PR-AUC, tetapi juga memeriksa stabilitas performa across different seeds, mendeteksi potensi data leakage, dan menyiapkan visualisasi awal menggunakan Matplotlib atau Seaborn untuk identifikasi tren cepat.

Progres penelitian akan semakin mendalam pada minggu ke-12 dengan extended experiment atau cross-dataset validation. Tujuan utamanya adalah menguji generalisasi model terhadap distribusi data yang berbeda, sehingga menghindari overfitting terhadap karakteristik unik satu dataset saja. Minggu ke-13 difokuskan pada analisis lanjutan meliputi robustness testing, explainability, dan error analysis. Di sinilah Anda mulai menggali mengapa model gagal pada kasus tertentu, apakah ada bias fitur, atau bagaimana interpretasi prediksi menggunakan teknik post-hoc explanation. Minggu ke-14 merupakan puncak eksperimental, yaitu final experiment yang mencakup ablation study untuk mengisolasi kontribusi setiap komponen proposed method, serta penerapan uji statistik formal (seperti paired t-test atau Wilcoxon signed-rank test) untuk memvalidasi signifikansi perbedaan performa antar metode.

Dua minggu terakhir, minggu ke-15 dan ke-16, sepenuhnya dikhususkan untuk penulisan dan penyempurnaan naskah akademik. Minggu ke-15 digunakan untuk menyusun full paper draft berdasarkan alur cerita penelitian yang telah terbentuk dari hasil eksperimen, mulai dari introduction, related work, methodology, hingga results and discussion. Minggu ke-16 menjadi waktu untuk finalisasi naskah, penyiapan figure dan table berkualitas publikasi, serta persiapan materi defense. Perlu ditekankan bahwa proposal penelitian bersifat dinamis. Ia adalah rencana strategis, bukan kontrak mati. Jika selama pelaksanaan Anda menemui kendala teknis, ketidaksesuaian asumsi data, atau temuan empiris yang mengarah pada pivot metodologis, segera diskusikan dan ajukan revisi rencana saat research clinic. Kuncinya sederhana: pastikan setiap minggu menghasilkan output atau insight yang lebih baik dan lebih matang daripada minggu sebelumnya, baik berupa kode yang teroptimasi, hasil eksperimen yang konsisten, analisis yang lebih tajam, maupun draft tulisan yang semakin utuh.

### Inti yang Harus Ditekankan

- Baseline yang kuat dan tereksekusi dengan benar adalah fondasi mutlak untuk memvalidasi klaim novelty proposed method; tanpa ini, eksperimen kehilangan nilai komparatif.
- Proposal bersifat fleksibel dan iteratif; revisi metodologi atau hyperparameter tuning diperbolehkan bahkan diharapkan jika didasarkan pada evidence empiris, bukan perubahan sembarangan.
- Setiap minggu harus menghasilkan progres terukur (kode yang stabil, hasil eksperimen, analisis error, atau paragraf draft), bukan sekadar aktivitas tanpa deliverable konkret.
- Alur eksperimen dirancang secara bertahap untuk memenuhi standar penelitian S2: validasi dasar → generalisasi lintas dataset → pembuktian rigoritas (ablation, uji statistik, explainability) → penulisan naskah.

### Transisi ke Slide Berikutnya

Setelah roadmap implementasi ini dijalankan dan Anda memperoleh hasil eksperimen yang signifikan, langkah berikutnya adalah mempersiapkan diri untuk memberikan dan menerima masukan akademis yang konstruktif. Hal ini akan kita bahas secara mendalam pada slide mengenai prinsip peer review, yang menjadi mekanisme penting dalam menyaring kualitas penelitian sebelum menuju tahap publikasi internasional.

---

## Slide 031 - Prinsip Peer Review

### Narasi

Setelah kita menyepakati roadmap implementasi penelitian pada minggu-minggu mendatang, saat ini kita masuk ke mekanisme evaluasi kolaboratif yang menjadi fondasi penyempurnaan riset kalian. Pada pertemuan ini, setiap mahasiswa akan memberikan ulasan tertulis terhadap presentasi proposal atau progres penelitian teman sejawat. Proses peer review ini dirancang bukan sebagai kegiatan formalitas, melainkan sebagai ruang kritis untuk menguji ketajaman argumen metodologis sebelum kalian terjun ke tahap eksperimen lanjutan. Ulasan yang disampaikan harus ditulis secara objektif dan konstruktif, berfokus pada substansi teknis, alur logika penelitian, serta kesesuaian antara research question dengan desain evaluasi.

Untuk memastikan umpan balik terstruktur dan mudah ditindaklanjuti, kita menerapkan format empat aspek yang saling melengkapi. Pertama, identifikasi **Kekuatan**, yaitu komponen yang sudah solid, seperti pemilihan dataset yang representatif, perumusan gap penelitian yang jelas, atau justifikasi baseline yang kuat. Kedua, catat **Kelemahan**, berupa bagian yang masih kurang meyakinkan, misalnya celah dalam validasi model, ketidaksesuaian metrik performa dengan karakteristik data, atau kurangnya rencana pengendalian bias. Ketiga, berikan **Saran** perbaikan yang spesifik dan actionable, seperti penambahan cross-validation stratified, tuning hyperparameter yang lebih sistematis, atau penguatan analisis error pada subset tertentu. Terakhir, tentukan **Prioritas**, apakah poin yang diangkat memerlukan diskusi teknis mendalam atau sekadar koreksi substansi mendasar yang harus segera diselesaikan sebelum eksekusi eksperimen.

Dalam menjalankan proses ini, etika akademik menjadi batas mutlak yang tidak boleh dikompromikan. Kritik harus selalu ditujukan pada karya, data, dan metodologi, bukan pada pribadi penyaji. Hindari komentar yang bersifat menyerang, merendahkan, atau mengarah pada konflik personal. Selain itu, jaga integritas intelektual: jangan mengambil, mengklaim, atau memanfaatkan ide dari presentasi yang sedang direview tanpa izin eksplisit dari pemiliknya. Setiap masukan wajib didasarkan pada evidence, literatur terkini, dan prinsip metodologi data mining yang valid, bukan pada selera, asumsi subjektif, atau tren semata. Pendekatan ini mencerminkan standar riset tingkat magister, di mana kolaborasi sehat dan kritik berbasis bukti justru mempercepat kematangan penelitian menuju kualitas publikasi internasional.

### Inti yang Harus Ditekankan

- Peer review berfungsi sebagai quality control metodologis; fokuskan kritik pada desain eksperimen, validitas data, dan konsistensi logika penelitian.
- Gunakan format umpan balik terstruktur (Kekuatan, Kelemahan, Saran, Prioritas) agar masukan konkret, terukur, dan siap diimplementasikan.
- Terapkan etika akademik ketat: hindari serangan personal, lindungi hak intelektual, dan pastikan semua saran berlandaskan evidence serta prinsip ilmiah yang teruji.

### Transisi ke Slide Berikutnya

Umpan balik yang kalian berikan hari ini akan menjadi bahan refleksi penting sebelum memasuki tahap pertahanan akhir. Pada slide berikutnya, kita akan membahas bagaimana mempersiapkan diri menghadapi Research Defense, termasuk jenis pertanyaan kritis yang sering diajukan, strategi menjawab yang efektif, serta cara mempertahankan setiap keputusan metodologis dengan percaya diri dan berbasis bukti.

---

## Slide 032 - Research Defense

### Narasi

Setelah kita membahas prinsip peer review pada pertemuan sebelumnya, di mana mahasiswa saling memberikan ulasan objektif dan konstruktif berdasarkan kekuatan, kelemahan, serta prioritas perbaikan, kini kita beralih ke tahap yang lebih intensif: Research Defense. Pada jenjang magister, defense bukan sekadar presentasi hasil atau rencana penelitian kepada dosen. Defense adalah dialog kritis yang dirancang untuk menguji kedalaman pemahaman Anda terhadap setiap keputusan metodologis yang telah diambil. Apakah Anda benar-benar memahami alasan di balik pemilihan dataset, algoritma, metrik evaluasi, hingga desain eksperimen? Defense menuntut Anda mampu mempertahankan posisi ilmiah tersebut secara logis dan berbasis bukti.

Dalam sesi defense, biasanya akan muncul sejumlah pertanyaan mendasar yang menyentuh inti penelitian Anda. Pertama, mengapa masalah ini penting? Di sini Anda harus menghubungkan kontribusi penelitian dengan konteks industri atau akademis terkini. Kedua, apa research gap yang sebenarnya? Jangan hanya menyebut "belum ada yang meneliti", tetapi tunjukkan celah spesifik dalam literatur atau keterbatasan pendekatan sebelumnya. Ketiga, mengapa metode ini cocok untuk menjawab Research Question (RQ)? Jelaskan kesesuaian antara karakteristik data, asumsi algoritma, dan tujuan penelitian. Keempat, bagaimana memastikan perbandingan dengan baseline adil? Diskusikan normalisasi data, penyetelan hyperparameter yang konsisten, dan protokol evaluasi yang seragam. Kelima, apa yang terjadi jika baseline justru lebih baik? Ini adalah pertanyaan krusial yang menguji ketahanan hipotesis Anda; siapkan analisis ablation atau penjelasan kontekstual mengapa metode Anda tetap bernilai meskipun akurasi tidak selalu unggul. Terakhir, apakah kesimpulan didukung oleh evidence? Pastikan setiap klaim ditopang oleh hasil statistik, visualisasi, atau uji signifikansi yang transparan.

Untuk menjawab pertanyaan-pertanyaan tersebut secara efektif, terapkan strategi komunikasi ilmiah yang tepat. Jawablah secara langsung dan ringkas, hindari jawaban berbelit yang justru membuka keraguan. Jika terdapat keterbatasan dalam desain penelitian atau ketersediaan data, akui hal tersebut dengan percaya diri; kejujuran akademik justru memperkuat kredibilitas Anda. Selalu dukung jawaban dengan logika metodologis dan bukti empiris dari literatur atau eksperimen awal. Apabila ada pertanyaan yang berada di luar cakupan saat ini atau memerlukan validasi eksperimental lebih lanjut, jangan ragu untuk menyatakan bahwa hal tersebut akan diuji pada tahap eksperimen selanjutnya. Pendekatan ini menunjukkan kesadaran metodologis dan komitmen terhadap rigor penelitian.

### Inti yang Harus Ditekankan

- Defense berfungsi sebagai dialog kritis untuk menguji pemahaman mendalam atas setiap pilihan metodologis, bukan sekadar presentasi satu arah.
- Kuasai enam pertanyaan inti: signifikansi masalah, definisi research gap, kesesuaian metode dengan RQ, keadilan perbandingan baseline, respons jika baseline unggul, dan validitas evidence terhadap kesimpulan.
- Respons harus lugas, mengakui keterbatasan secara profesional, serta jelas memisahkan antara temuan yang sudah tervalidasi dengan rencana pengujian eksperimental lanjutan.

### Transisi ke Slide Berikutnya

Setelah berhasil mempertahankan proposal melalui defense, langkah berikutnya adalah mengolah seluruh masukan yang diberikan oleh penguji. Pada slide selanjutnya, kita akan membahas prosedur sistematis dalam menyerap feedback dosen, mulai dari kategorisasi komentar menjadi aspek substansi dan penyajian, hingga pengambilan keputusan ilmiah untuk merevisi proposal menjadi versi V1.1.

---

## Slide 033 - Menyerap Feedback Dosen

### Narasi

Setelah sesi *Research Defense* pada slide sebelumnya selesai, proses pertahanan penelitian tidak berakhir begitu saja. Pertanyaan kritis yang diajukan oleh dosen penguji hanyalah tahap awal pengujian logika, kelayakan, dan kedalaman analisis Anda. Langkah selanjutnya yang sama pentingnya adalah menyerap, mengolah, dan menindaklanjuti seluruh masukan yang diberikan. Prosedur ini dirancang agar setiap komentar dapat ditransformasikan menjadi perbaikan konkret yang memperkuat fondasi penelitian Anda.

Pertama, catat secara rinci dan lengkap semua komentar yang disampaikan selama seminar. Jangan mengandalkan ingatan, karena detail teknis maupun subtlety dalam argumen sering kali terlewat jika tidak ditulis. Kedua, klaster atau kelompokkan catatan tersebut ke dalam dua kategori utama. Kategori pertama adalah **Substansi**, yang mencakup penajaman *research gap*, kejelasan dan keterukuran *research question*, kesesuaian metodologi, serta desain eksperimen dan pemilihan *baseline*. Kategori kedua adalah **Penyajian**, yang berfokus pada struktur slide, alur narasi logis, dan kejelasan visualisasi atau tabel pendukung. Ketiga, buat keputusan strategis untuk setiap poin masukan. Anda memiliki tiga opsi: menerima dan langsung memperbaiki sesuai saran, memodifikasi masukan tersebut agar lebih selaras dengan konteks spesifik dataset atau domain penelitian Anda, atau menolak dengan memberikan argumen ilmiah yang kuat berdasarkan literatur terkini atau hasil pra-eksperimen. Keempat, integrasikan seluruh keputusan tersebut ke dalam dokumen proposal Anda dan tandai sebagai versi 1.1 untuk melacak perkembangan iteratif penelitian secara transparan.

Di samping prosedur teknis, sikap profesional sangat menentukan keberhasilan proses revisi ini. Pahami bahwa setiap masukan dosen merupakan **data** berharga yang berfungsi meningkatkan validitas internal, reliabilitas, dan kontribusi ilmiah penelitian Anda, bukan sekadar kritik personal terhadap kompetensi Anda. Jika terdapat poin yang masih ambigu, terlalu umum, atau kurang operasional, jangan ragu untuk meminta klarifikasi segera setelah sesi selesai. Akhiri interaksi dengan ucapan terima kasih yang tulus dan sampaikan komitmen nyata mengenai langkah tindak lanjut yang akan Anda ambil dalam minggu-minggu berikutnya. Pendekatan ini mencerminkan kedewasaan akademik yang diharapkan pada jenjang magister, di mana peneliti dituntut mampu berdiskusi secara evidensi-based, mengelola umpan balik secara konstruktif, dan terus menyempurnakan karya ilmiahnya melalui siklus revisi yang disiplin.

### Inti yang Harus Ditekankan

- Feedback harus diklasifikasikan secara sistematis antara aspek substansi penelitian dan aspek penyajian materi agar tidak tertukar prioritas perbaikannya.
- Setiap masukan memerlukan evaluasi kritis: diterima sepenuhnya, dimodifikasi sesuai konteks riset, atau ditolak dengan justifikasi ilmiah yang terdokumentasi.
- Revisi proposal dilakukan secara iteratif (misalnya menjadi V1.1) untuk menjaga jejak pengembangan penelitian yang akuntabel dan terukur.
- Sikap terbuka, proaktif mencari klarifikasi, dan komunikasi tindak lanjut adalah indikator utama kematangan peneliti tingkat S2.

### Transisi ke Slide Berikutnya

Dengan proposal yang telah diperbarui berdasarkan feedback dosen, langkah berikutnya adalah memastikan bahwa seluruh elemen penelitian telah siap untuk dipresentasikan kembali secara optimal. Mari kita tinjau checklist kesiapan presentasi seminar untuk menjamin konsistensi antara isi proposal, metodologi, dan penyampaian di depan audiens.

---

## Slide 034 - Checklist Kesiapan Presentasi Seminar

### Narasi

Setelah menyerap masukan dari dosen pada sesi sebelumnya, langkah krusial berikutnya adalah memastikan bahwa revisi proposal atau naskah review paper telah matang dan siap dipresentasikan. Checklist ini berfungsi sebagai quality gate sebelum Anda memasuki ruang seminar. Pada tingkat magister, presentasi bukan sekadar penyampaian ide, melainkan demonstrasi kesiapan metodologis dan kedalaman analisis. Oleh karena itu, verifikasi setiap poin di bawah ini harus dilakukan secara ketat sebelum jadwal presentasi tiba.

Pertama, manajemen waktu sangat menentukan keberhasilan presentasi. Pastikan slide Anda sudah disesuaikan dengan batas waktu yang berlaku, yaitu 10 hingga 12 menit untuk presentasi review paper, dan 8 hingga 10 menit untuk presentasi proposal penelitian. Di dalam rentang waktu tersebut, problem statement harus muncul di awal slide agar audiens langsung memahami konteks masalah yang akan Anda bahas. Masalah ini kemudian harus ditautkan secara eksplisit dengan research gap yang didukung oleh contoh literatur terkini. Tanpa celah penelitian yang jelas, kontribusi ilmiah Anda akan sulit dibedakan dari studi terdahulu. Selanjutnya, rumuskan research question secara eksplisit. Pertanyaan penelitian ini menjadi kompas yang mengarahkan seluruh alur metodologi dan eksperimen Anda.

Kedua, aspek teknis dan metodologi penelitian harus divisualisasikan dengan rapi dan sistematis. Tampilkan diagram metodologi secara utuh agar audiens dapat melihat hubungan antar-tahap proses penelitian Anda. Sertakan tabel karakteristik dataset yang mencakup jumlah sampel, tipe fitur, distribusi kelas, serta teknik handling missing value atau imbalancing yang akan digunakan. Dalam konteks data mining, pemilihan baseline juga wajib disebutkan dan dijustifikasi secara ilmiah. Baseline bukan sekadar pembanding statistik, melainkan representasi dari state-of-the-art atau metode standar yang relevan dengan domain masalah Anda. Rencanakan eksperimen Anda dalam bentuk tabel yang memuat variabel input, algoritma yang diuji, metrik evaluasi, dan kriteria perbandingan. Terakhir, diskusikan limitation dan validity secara transparan. Pengakuan terhadap keterbatasan model atau data justru menunjukkan kedewasaan akademik, sementara validitas eksternal dan internal perlu dijelaskan agar klaim hasil penelitian dapat dipertanggungjawabkan.

Ketiga, prinsip desain presentasi tidak boleh diabaikan. Hindari slide yang penuh dengan teks panjang. Gunakan poin-poin ringkas, visualisasi grafik atau flowchart, dan pastikan ukuran font cukup besar agar terbaca jelas dari jarak jauh. Presentasi yang padat teks akan mengurangi engagement audiens dan membuat Anda kesulitan mengelola waktu bicara. Dengan memenuhi seluruh poin checklist ini, Anda telah menyiapkan fondasi presentasi yang solid, terstruktur, dan sesuai dengan standar penulisan karya ilmiah tingkat S2.

### Inti yang Harus Ditekankan

- Checklist ini merupakan standar minimum kesiapan metodologis dan presentasi untuk seminar review paper maupun proposal penelitian.
- Problem statement, research gap, dan research question harus saling berkesinambungan dan didukung literatur mutakhir.
- Justifikasi baseline, rencana eksperimen terstruktur, serta pembahasan limitation/validitas mencerminkan kedewasaan akademik S2.
- Desain slide yang bersih dan manajemen waktu ketat meningkatkan efektivitas komunikasi ilmiah di ruang seminar.

### Transisi ke Slide Berikutnya

Dengan memastikan seluruh poin kesiapan ini terpenuhi, Anda siap mengikuti alur seminar yang telah ditetapkan. Mari kita lihat bagaimana waktu dan peran masing-masing peserta diatur secara formal selama sesi berlangsung pada slide berikutnya.

---

## Slide 035 - Format Sesi Seminar

### Narasi

Sesi seminar ini dirancang khusus untuk memaksimalkan interaksi akademis dalam durasi terbatas sekitar 130 menit, dengan asumsi partisipasi ±10 mahasiswa. Pembagian waktu yang terstruktur ini tidak hanya memastikan setiap peserta mendapat kesempatan presentasi yang adil, tetapi juga menanamkan disiplin manajemen waktu yang krusial dalam dunia penelitian tingkat magister. Alur sesi dimulai dengan pengantar dosen selama 10 menit untuk menyamakan persepsi mengenai ekspektasi akademik, standar penulisan paper internasional, dan kriteria evaluasi yang akan digunakan sepanjang diskusi.

Setelah tahap pembuka, sesi dibagi menjadi dua blok utama presentasi. Blok pertama dialokasikan untuk lima presentasi critical review paper, masing-masing berdurasi 10 menit, sehingga memakan waktu 50 menit. Hal ini menuntut presenter untuk menyajikan analisis kritis terhadap metodologi, validitas eksperimen, dan kontribusi ilmiah paper tersebut secara padat dan terukur. Diikuti oleh jeda 10 menit khusus untuk peer review tertulis, di mana seluruh peserta wajib mencatat masukan konstruktif berdasarkan rubrik evaluasi yang telah dipelajari. Blok kedua kemudian mengalokasikan 40 menit untuk lima presentasi research proposal, masing-masing 8 menit, yang menekankan pada kejelasan research question, kesesuaian dataset, serta rencana eksperimen yang feasible. Seluruh presentasi ditutup dengan 10 menit diskusi atau defense gabungan, diikuti oleh 10 menit feedback komprehensif dari dosen sebagai penutup sesi.

Efektivitas format ini sangat bergantung pada pemahaman peran masing-masing peserta. Presenter bertanggung jawab penuh atas penyampaian materi yang terstruktur serta responsif terhadap pertanyaan teknis. Peer reviewer tidak sekadar menjadi pendengar pasif, melainkan harus menghasilkan catatan tertulis yang spesifik, mengidentifikasi celah metodologis, atau menyarankan perbaikan baseline dan metrik evaluasi. Anggota audience diharapkan mengajukan pertanyaan kritis yang mendorong kedalaman analisis, sementara dosen berperan sebagai moderator yang mengarahkan diskusi agar tetap fokus pada aspek scientific rigor, reproducibility, dan novelty penelitian. Distribusi tanggung jawab ini menciptakan ekosistem kolaboratif yang mencerminkan dinamika peer review sesungguhnya di konferensi atau jurnal bereputasi.

Struktur waktu dan pembagian peran ini merupakan implementasi praktis dari checklist kesiapan presentasi pada slide sebelumnya, di mana persiapan matang diperlukan agar setiap blok waktu berjalan optimal tanpa melenceng dari agenda. Dengan menerapkan alur yang ketat ini, risiko kesalahan umum seperti klaim kontribusi berlebihan tanpa bukti eksperimen, atau review yang hanya bersifat ringkasan naratif, dapat diminimalisir sejak dini. Penguasaan format ini akan menjadi fondasi penting sebelum kita membahas kesalahan-kesalahan sistematis yang sering muncul dalam proposal dan critical review, serta strategi mitigasinya.

### Inti yang Harus Ditekankan

- Durasi 130 menit untuk ±10 mahasiswa memerlukan manajemen waktu yang presisi; setiap blok presentasi dan diskusi memiliki tujuan akademis yang spesifik.
- Peer review tertulis adalah komponen wajib yang mengubah audiens menjadi mitra evaluasi aktif, meniru proses peer review di publikasi ilmiah bereputasi.
- Peran dosen bergeser dari penyampai materi menjadi fasilitator diskusi dan penjamin kualitas ilmiah, sementara mahasiswa dituntut melakukan kritik berbasis evidence.
- Format ini secara langsung mencegah masalah yang dibahas pada slide berikutnya, seperti proposal yang terlalu luas atau review yang dangkal, melalui tekanan waktu dan struktur umpan balik yang terarah.

### Transisi ke Slide Berikutnya

Dengan memahami betul bagaimana alokasi waktu dan distribusi peran bekerja dalam praktik, kita kini siap mengidentifikasi pola-pola kesalahan yang kerap mengganggu efektivitas sesi ini, mulai dari critical review yang hanya bersifat deskriptif hingga research proposal yang kehilangan arah metodologis.

---

## Slide 036 - Kesalahan Umum dalam Proposal dan Review

### Narasi

Pada sesi seminar sebelumnya, kita telah membahas alokasi waktu dan peran masing-masing peserta, termasuk tanggung jawab Anda sebagai peer reviewer dan audience yang diharapkan mengajukan pertanyaan kritis. Namun, menjalankan peran tersebut memerlukan ketelitian metodologis yang tinggi agar evaluasi yang diberikan benar-benar konstruktif dan sesuai standar penelitian tingkat magister. Slide ini menyoroti kesalahan-kesalahan sistematis yang kerap muncul dalam praktik critical review maupun penyusunan research proposal, serta memberikan panduan struktural untuk menghindarinya.

Dalam konteks critical review, kesalahan paling mendasar adalah sekadar merangkum isi paper tanpa memberikan kritik akademis yang tajam. Reviewer sering kali terjebak menjadi pembaca pasif yang hanya melaporkan alur tulisan, padahal tugas utama Anda adalah menilai validitas argumen, desain eksperimen, dan kontribusi ilmiahnya. Kesalahan kedua terjadi ketika baseline tidak diperiksa secara kritis. Di bidang data mining, mengklaim bahwa metode baru lebih unggul daripada baseline yang lemah, tidak standar, atau tidak fair comparison adalah praktik yang merusak integritas ilmiah. Ketiga, menerima klaim performa atau temuan tanpa memverifikasi evidence-nya, seperti mengabaikan metrik evaluasi yang tidak tepat, ukuran sampel yang bias, atau ketiadaan uji signifikansi statistik. Keempat, mengabaikan limitation dan reproducibility. Sebuah penelitian harus transparan mengenai keterbatasan dataset, asumsi algoritma, dan ketersediaan kode atau data agar hasil dapat direplikasi oleh komunitas peneliti.

Sementara itu, dalam penyusunan research proposal, mahasiswa sering membuat kesalahan fatal yang langsung menurunkan feasibility penelitian. Rumusan masalah (RQ) yang terlalu luas akan menyulitkan pengujian empiris dan menghasilkan keluaran yang dangkal. Research gap yang tidak jelas atau dibuat-buat menunjukkan kurangnya pemahaman mendalam terhadap state-of-the-art dan literatur terkini. Pemilihan dataset yang tidak selaras dengan RQ juga umum terjadi, misalnya menggunakan dataset tabular statis untuk menjawab pertanyaan kompleks tentang temporal dependency atau streaming data. Selain itu, proposal sering kali gagal menyebutkan baseline yang akan dijadikan pembanding, tidak menyertakan experimental plan yang terstruktur, atau justru mengklaim kontribusi besar tanpa rencana eksperimen yang memadai untuk membuktikannya. Semua poin ini berpotensi membuat proposal ditolak atau mengalami revisi substansial saat defense.

Untuk mengatasi permasalahan tersebut, solusi praktisnya adalah menerapkan kerangka evaluasi yang ketat dan konsisten. Gunakan checklist 14 bagian untuk critical review dan checklist 8 bagian untuk research proposal yang telah dibahas pada slide sebelumnya. Checklist ini berfungsi sebagai filter metodologis untuk memastikan setiap klaim didukung evidence yang kuat, setiap gap ditopang literatur terkini, dan setiap eksperimen dirancang secara reproducible. Dengan disiplin mengikuti kerangka ini, kualitas akademik tulisan dan presentasi Anda akan meningkat signifikan, sekaligus mempersiapkan fondasi analitis yang kokoh sebelum masuk ke tahap interpretasi hasil.

### Inti yang Harus Ditekankan

- Critical review menuntut sikap skeptis metodologis, bukan sekadar ringkasan naratif atau apresiasi terhadap paper.
- Validitas klaim ilmiah bergantung pada verifikasi evidence, pemeriksaan baseline yang ketat, dan transparansi penuh terhadap limitation serta reproducibility.
- Proposal penelitian yang feasible harus memiliki RQ yang terukur, gap yang berbasis literatur kuat, kesesuaian dataset, baseline yang jelas, dan experimental plan yang terstruktur.
- Checklist evaluasi merupakan alat wajib untuk meminimalkan bias, meningkatkan rigor akademik, dan memenuhi standar publikasi internasional di jenjang S2.

### Transisi ke Slide Berikutnya

Setelah memastikan proposal dan review bebas dari kesalahan metodologis, langkah selanjutnya adalah bagaimana mengubah hasil eksperimen mentah menjadi insight ilmiah yang bermakna. Kita akan membahas cara menginterpretasikan evidence secara kritis dan menjadikannya sebagai scientific contribution yang solid dan siap dipublikasikan.

---

## Slide 037 - Dari Evidence ke Scientific Contribution

### Narasi

Setelah pada slide sebelumnya kita mengidentifikasi kesalahan fatal dalam penyusunan proposal dan *critical review*, seperti menerima klaim penulis tanpa verifikasi atau berhenti pada ringkasan deskriptif, slide ini membawa kita ke tahap inti penelitian tingkat magister: mengonversi *evidence* empiris menjadi kontribusi ilmiah yang valid. Dalam konteks Data Mining, laporan metrik performa semata tidak cukup. Kita harus menempuh proses interpretasi yang sistematis untuk memastikan bahwa setiap temuan eksperimen memiliki bobot akademis dan dapat dipertanggungjawabkan secara metodologis.

Alur interpretasi yang harus diikuti dimulai dari hasil mentah (*raw results*). Dari sana, lakukan perbandingan ketat antar metode yang diuji. Langkah selanjutnya adalah menganalisis kondisi spesifik di mana suatu metode menunjukkan keunggulan atau justru mengalami penurunan performa. Jangan berhenti pada pola permukaan; telusuri penjelasan mendasar mengenai *mengapa* kondisi tersebut terjadi, apakah disebabkan oleh karakteristik distribusi data, sensitivitas terhadap noise, atau interaksi tertentu dalam fitur. Dari rangkaian analisis kausal inilah, kita merumuskan pengetahuan baru (*new knowledge*) yang secara eksplisit menjawab *research question* dan mengisi *gap* yang telah diidentifikasi.

Sebagai ilustrasi konkret, perhatikan contoh interpretasi yang disajikan. Jika hasil eksperimen menunjukkan bahwa Metode A unggul secara signifikan hanya ketika proporsi data hilang (*missing values*) melebihi 30%, namun performanya setara atau lebih rendah pada dataset bersih, maka kesimpulan ilmiahnya bukan sekadar "Metode A lebih baik". Kesimpulan yang tepat adalah bahwa mekanisme imputasi adaptif memegang peranan krusial dalam menjaga stabilitas model pada lingkungan data berkualitas rendah. Pernyataan ini mengubah output teknis menjadi insight yang dapat diuji ulang dan dikembangkan lebih lanjut.

Untuk memastikan bahwa temuan tersebut benar-benar layak dikategorikan sebagai kontribusi ilmiah, evaluasi harus melewati empat pertanyaan kritis yang terstruktur dalam tabel penilaian kontribusi. Konsistensi temuan antar berbagai dataset menguji kemampuan generalisasi dan robustness model. Keberadaan penjelasan mekanisme menunjukkan kedalaman pemahaman teoretis terhadap fenomena yang diamati, melampaui pendekatan *black-box*. Kejelasan implikasi praktis menentukan seberapa besar dampak temuan tersebut bagi penerapan industri atau kebijakan berbasis data. Terakhir, potensi temuan sebagai pijakan riset lanjutan menjamin relevansi dan keberlanjutan karya ilmiah Anda dalam ekosistem publikasi internasional.

### Inti yang Harus Ditekankan

- Interpretasi hasil harus bersifat kausal dan kontekstual, bukan sekadar pelaporan metrik atau perbandingan numerik biasa.
- Setiap klaim kontribusi harus dibuktikan melalui empat pilar evaluasi: generalisasi lintas dataset, penjelasan mekanisme, implikasi praktis, dan potensi pengembangan riset lanjutan.
- Transisi dari angka mentah ke pengetahuan baru memerlukan analisis kondisi batas (*boundary conditions*) dan penolakan terhadap klaim yang tidak didukung bukti empiris yang konsisten.

### Transisi ke Slide Berikutnya

Dengan fondasi interpretasi dan kriteria kontribusi yang telah mapan, langkah selanjutnya adalah melakukan audit internal terhadap proposal Anda sendiri. Mari kita buka slide berikutnya untuk mengevaluasi kesiapan diri, menindaklanjuti umpan balik, dan menyusun rencana aksi konkret menuju implementasi baseline pada pertemuan mendatang.

---

## Slide 038 - Evaluasi Diri dan Langkah Berikutnya

### Narasi

Setelah sesi seminar proposal selesai, saatnya kita melakukan evaluasi diri secara kritis terhadap kualitas naskah dan pemahaman konseptual yang telah dibangun. Pada jenjang magister, kemampuan merumuskan masalah penelitian tidak boleh bersifat umum; Anda harus mampu menjelaskan perbedaan mendasar antara *research problem*, *research gap*, dan *Research Question* dengan lancar dan logis. Tinjau kembali draf proposal Anda: apakah ruang lingkup, variabel, dan metrik evaluasinya sudah cukup spesifik untuk dieksekusi tanpa menimbulkan ambiguitas saat coding? Proposal yang terlalu luas atau ambigu akan sulit diuji validitasnya secara empiris dan berisiko menghasilkan temuan yang tidak generalisasi.

Setiap masukan dari dosen maupun peer review selama seminar merupakan data penting untuk penyempurnaan metodologi. Identifikasi umpan balik paling krusial yang menyentuh kelemahan desain eksperimen, pemilihan fitur, atau strategi validasi. Berdasarkan hal tersebut, tentukan keputusan perbaikan konkret yang akan segera diimplementasikan. Aksi operasional minggu ini terbagi menjadi empat langkah sistematis: pertama, lengkapi dokumen Research Proposal V1 sesuai template standar yang berlaku. Kedua, kumpulkan melalui platform akademik yang telah ditentukan sebelum batas waktu. Ketiga, lakukan revisi menyeluruh berdasarkan catatan dosen dan diskusi rekan sejawat. Keempat, siapkan dataset dan struktur kode awal untuk mengimplementasikan model baseline pada pertemuan berikutnya. Persiapan teknis ini menjamin bahwa transisi dari perencanaan teoretis ke eksekusi praktis berjalan efisien dan terukur.

Dokumen proposal V1 yang telah direvisi akan menjadi fondasi utama bagi seluruh kegiatan eksperimental Anda sepanjang semester. Sesuai dengan alur pembelajaran, pertemuan berikutnya akan membahas *Deep & Representation Learning for Tabular Data*. Praktikum dirancang khusus untuk membandingkan performa model ensemble tradisional seperti Gradient Boosting dengan arsitektur neural tabular modern. Hasil perbandingan ini nantinya akan menjadi bahan analisis komparatif yang kuat dalam bab evaluasi proposal Anda. Dengan demikian, siklus penelitian mulai dari identifikasi gap, perancangan hipotesis, hingga pengujian model akan tersambung secara kohesif dan berbasis bukti, persis seperti yang dibahas pada interpretasi evidence di slide sebelumnya.

### Inti yang Harus Ditekankan

- Pembedaan konseptual yang tajam antara *problem*, *gap*, dan *RQ* sebagai syarat mutlak riset S2 yang berkualitas dan terarah.
- Spesifikasi proposal yang executable dan terukur untuk mencegah kegagalan eksekusi eksperimental dan pemborosan sumber daya komputasi.
- Sikap proaktif dalam mengintegrasikan umpan balik dosen/peer ke dalam revisi dokumen serta persiapan teknis baseline secara mandiri.
- Proposal V1 bukan sekadar administrasi akademik, melainkan peta jalan operasional yang langsung diterjemahkan ke dalam kode Python, pandas, dan scikit-learn untuk analisis empiris.

### Transisi ke Slide Berikutnya

Dengan kerangka proposal yang telah matang dan siap dieksekusi, kita kini berpindah ke fase implementasi teknis. Pertemuan berikutnya akan membahas *Deep & Representation Learning for Tabular Data*, di mana Anda akan langsung menerapkan proposal Anda dalam perbandingan praktikum antara Gradient Boosting dan neural tabular model. Mari kita tutup pertemuan ini dengan ringkasan singkat sebelum memasuki sesi praktikum tersebut. Lihat slide penutup.

---

## Slide 039 - Penutup

### Narasi

Kita telah menyelesaikan sesi Critical International Paper Review dan Research Proposal Seminar pada pertemuan ini. Pada jenjang magister, kemampuan untuk membaca, mengkritisi, dan membangun penelitian dari nol merupakan fondasi utama yang harus dikuasai. Selama sesi ini, Anda telah diajak untuk membedah struktur paper internasional terindeks Scopus, mengidentifikasi research gap yang valid, serta merumuskan research question yang spesifik dan dapat diuji secara empiris. Proses ini tidak hanya melatih literasi akademik, tetapi juga mempersiapkan Anda untuk menyusun proposal penelitian yang solid dan siap dieksekusi.

Sebagaimana tercermin dalam refleksi mandiri pada slide sebelumnya, evaluasi diri terhadap kejelasan problem statement, kesesuaian gap dengan state-of-the-art, serta kesiapan eksekusi proposal menjadi penentu keberhasilan langkah selanjutnya. Pastikan dokumen Research Proposal V1 telah disesuaikan dengan umpan balik yang diterima dari dosen maupun rekan sejawat. Kumpulkan proposal melalui platform resmi tepat waktu, karena dokumen ini akan menjadi acuan utama dalam implementasi baseline dan eksperimen lanjutan. Persiapan data, pemilihan metrik evaluasi, serta desain eksperimen yang adil harus sudah terstruktur sebelum kita beralih ke topik teknis berikutnya.

Untuk pertemuan berikutnya, fokus kita akan bergeser ke aspek implementasi algoritmik dengan materi Deep & Representation Learning for Tabular Data. Topik ini akan membahas bagaimana arsitektur neural modern dapat mengekstrak representasi fitur secara otomatis pada data tabular, serta membandingkan kinerjanya dengan metode ensemble tradisional seperti Gradient Boosting. Implementasi praktis akan dilakukan menggunakan Python, pandas, scikit-learn, dan framework deep learning standar di lingkungan Jupyter Notebook atau Google Colab. Proposal V1 yang telah Anda perbaiki akan menjadi dasar untuk mendesain eksperimen komparatif pada sesi tersebut.

Sebagai penutup sesi ini, ingatlah bahwa kualitas penelitian tidak hanya diukur dari kompleksitas model, melainkan dari ketajaman pertanyaan penelitian, rigoritas metodologi, dan kejelasan kontribusi ilmiah. Gunakan momentum minggu ini untuk menyempurnakan proposal, menyiapkan infrastruktur data, dan memastikan setiap komponen eksperimen memiliki justifikasi teoretis maupun praktis. Terima kasih atas partisipasi aktif, diskusi kritis, dan komitmen akademik yang telah ditunjukkan sepanjang pertemuan ini.

### Inti yang Harus Ditekankan

- Kemampuan mengidentifikasi research gap dan merumuskan research question yang spesifik adalah prasyarat mutlak sebelum masuk ke tahap implementasi teknis.
- Feedback dari dosen dan peer review bersifat konstruktif; revisi proposal V1 harus dilakukan secara sistematis berdasarkan catatan evaluasi yang telah diberikan.
- Pertemuan berikutnya akan mengintegrasikan teori proposal dengan praktik coding, sehingga persiapan data dan sketsa baseline wajib sudah matang.
- Standar penelitian tingkat S2 menuntut transparansi metodologi, reproduktibilitas kode, dan analisis kesalahan yang mendalam, bukan sekadar pencapaian akurasi tinggi.

### Transisi ke Slide Berikutnya

Mari kita tutup sesi ini dengan persiapan matang untuk eksplorasi algoritma neural pada data tabular. Di pertemuan berikutnya, kita akan langsung terjun ke implementasi Deep & Representation Learning for Tabular Data, di mana Anda akan menerapkan proposal yang telah disempurnakan untuk membandingkan performa model gradient boosting versus arsitektur neural berbasis representasi. Siapkan environment Python Anda, pastikan dataset target sudah bersih, dan kita mulai uji hipotesis bersama.
