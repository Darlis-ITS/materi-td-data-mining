# Narasi TD Data Mining - Pertemuan 13

## Explainable, Trustworthy & Responsible Data Mining

Sumber: markdown/pert13-explainable-trustworthy-responsible-data-mining.md

---

## Slide 000 - Cover

### Narasi

Topik Explainable, Trustworthy & Responsible Data Mining menggeser fokus dari optimisasi metrik performa murni menuju dimensi transparansi, akuntabilitas, dan etika algoritmik yang kini menjadi standar wajib dalam penelitian data mining tingkat lanjut. Model prediktif yang semakin kompleks, terutama yang berbasis ensemble mendalam atau arsitektur neural berlapis, sering kali beroperasi sebagai black-box. Tanpa mekanisme penjelasan yang rigor, hasil prediksi tidak dapat diverifikasi, direplikasi, atau dipertanggungjawabkan secara ilmiah maupun operasional. Pada jenjang magister, kemampuan untuk merancang sistem yang tidak hanya akurat tetapi juga interpretable dan trustworthy merupakan prasyarat untuk menghasilkan kontribusi penelitian yang layak publikasikan di venue bereputasi.

Konsep explainability dibedakan secara tegas dari interpretability. Interpretability melekat pada struktur model intrinsik yang memungkinkan pembacaan parameter secara langsung, sedangkan explainability memerlukan teknik post-hoc untuk mengurai kontribusi fitur atau sampel tertentu terhadap keluaran model yang kompleks. Trustworthiness memperluas cakupan ini dengan memasukkan aspek robustness terhadap noise dan adversarial manipulation, fairness untuk mendeteksi dan mitigasi bias representasional, serta governance data yang menjamin privasi dan kepatuhan regulasi. Responsible data mining menuntut integrasi ketiga dimensi tersebut ke dalam seluruh lifecycle penelitian, mulai dari formulasi hipotesis, seleksi dataset, perancangan baseline, hingga evaluasi akhir dan penulisan paper.

Secara kontekstual, pembahasan ini dibangun setelah pemahaman tentang temporal dan streaming data, karena konsep concept drift dan non-stasioneritas secara langsung memengaruhi stabilitas penjelasan model sepanjang waktu. Selanjutnya, materi ini menjadi fondasi krusial sebelum memasuki emerging paradigms seperti foundation models dan generative AI, yang justru menghadirkan tantangan baru terkait alignment, hallucination control, dan explainability skala besar. Dengan kerangka kerja ini, mahasiswa dilatih untuk melakukan error analysis, failure-case analysis, dan ablation study yang tidak hanya mengukur penurunan akurasi, tetapi juga menguji konsistensi penjelasan dan dampak bias terhadap subgroup populasi.

### Inti yang Harus Ditekankan

- Explainability dan trustworthiness bukan fitur opsional, melainkan komponen metodologis inti yang harus terintegrasi dalam desain eksperimen dan penulisan paper penelitian.
- Pembedaan jelas antara interpretability model, explainability post-hoc, dan prinsip responsible AI dalam siklus penelitian data mining.
- Implementasi praktis meliputi kombinasi prediction pipeline, SHAP/LIME analysis, robustness testing, dan failure-case documentation sebagai standar evaluasi model tingkat S2.
- Keterkaitan langsung dengan research project: penggunaan analisis penjelasan dan error analysis untuk memperkuat argumentasi novelty, validitas, dan kontribusi akademik.

### Transisi ke Slide Berikutnya

Untuk mengoperasionalkan konsep-konsep tersebut ke dalam aktivitas belajar dan praktikum, mari kita tinjau agenda rinci pertemuan ini serta posisi topik Explainable, Trustworthy & Responsible Data Mining dalam peta capaian pembelajaran semester.

---

## Slide 001 - Agenda dan Peta Pertemuan

### Narasi

Pada pertemuan kali ini, kita akan membahas topik strategis yang menjadi standar mutakhir dalam penelitian data mining tingkat lanjut, yaitu Explainable, Trustworthy, dan Responsible Data Mining. Setelah sebelumnya mengupas kompleksitas temporal, streaming data, serta mekanisme concept drift pada pertemuan ke-12, fokus perkuliahan beralih ke aspek transparansi, akuntabilitas, dan validitas metodologis model. Materi ini berfungsi sebagai jembatan konseptual sebelum kita memasuki pembahasan mengenai foundation models, generative AI, dan privacy-preserving learning pada pertemuan berikutnya. Agenda hari ini dirancang khusus untuk membekali mahasiswa S2 dengan kerangka evaluasi penelitian yang tidak lagi berpusat semata pada peningkatan skor akurasi, melainkan pada kemampuan menjelaskan keputusan model, mengukur keandalannya, serta memastikan integritas etis dalam siklus discovery knowledge.

Secara rinci, agenda mencakup pembedahan konseptual antara interpretability dan explainability, serta strategi pemilihan pendekatan global versus local explanation berdasarkan karakteristik dataset dan pertanyaan penelitian. Kita akan mempelajari tiga teknik post-hoc explanation yang dominan dalam literatur jurnal bereputasi, yaitu SHAP berbasis teori permainan kooperatif, LIME yang mengandalkan surrogate model lokal, serta counterfactual explanation yang menjawab pertanyaan "what-if" terhadap input data. Di sisi lain, dimensi trustworthiness akan diurai melalui empat pilar utama: robustness terhadap noise dan adversarial attack, fairness dalam distribusi kesalahan prediksi antar sub-populasi, identifikasi dan mitigasi dataset bias, serta pertimbangan privasi dalam pengelolaan fitur sensitif. 

Komponen praktis dari pertemuan ini terintegrasi langsung dengan Praktikum 6, di mana Anda akan menjalankan pipeline lengkap mulai dari training prediction, diikuti dengan visualisasi dan kuantifikasi kontribusi fitur menggunakan SHAP, kemudian dilanjutkan dengan error analysis dan failure-case analysis secara sistematis. Analisis kegagalan model ini bukan sekadar langkah verifikasi teknis, melainkan fondasi metodologis untuk merancang ablation study, menguji generalisasi, dan menyusun argumentasi empiris yang ketat dalam penulisan paper penelitian. Dengan demikian, seluruh poin agenda hari ini selaras dengan tuntutan penelitian magister yang menekankan pada rigoritas eksperimental dan reproducibility hasil riset.

### Inti yang Harus Ditekankan

- Explainable dan trustworthy data mining bukan lagi opsional, melainkan requirement metodologis standar untuk publikasi internasional dan penerapan industri yang bertanggung jawab.
- Distinisi antara interpretability (inherent model transparency) dan explainability (post-hoc approximation) menentukan bagaimana Anda merancang protokol evaluasi dan justifikasi arsitektur dalam proposal maupun paper riset.
- Integrasi SHAP, LIME, dan counterfactual explanation harus dipandu oleh pertanyaan penelitian, bukan diterapkan secara mekanistik tanpa analisis kontekstual terhadap domain masalah.
- Error analysis dan failure-case analysis merupakan instrumen wajib dalam experimental research design untuk mengungkap weak model behavior, yang menjadi dasar robustness testing dan ablation study pada proyek akhir.

### Transisi ke Slide Berikutnya

Untuk memastikan bahwa seluruh agenda konseptual dan praktis ini dapat diukur dan ditindaklanjuti secara akademis, mari kita lihat bagaimana materi ini dipetakan secara eksplisit ke dalam Capaian Pembelajaran Mata Kuliah dan target kompetensi yang harus Anda raih. Silakan lanjutkan ke slide berikutnya untuk menelaah rincian CPMK dan tujuan khusus pertemuan ini.

---

## Slide 002 - Tujuan Pembelajaran dan CPMK

### Narasi

Slide ini menetapkan kerangka belajar untuk Pertemuan 13 dengan mengaitkan topik Explainable, Trustworthy, dan Responsible Data Mining secara eksplisit terhadap Capaian Pembelajaran Mata Kuliah (CPMK) yang berlaku pada jenjang magister. Pada tingkat S2, keberhasilan sebuah penelitian tidak lagi diukur semata dari peningkatan margin akurasi atau F1-score, melainkan dari kedalaman analisis metodologis, reproducibility, dan kelayakan etis-saintifik dari temuan yang dihasilkan. Tiga CPMK utama yang menjadi pilar pertemuan ini adalah CPMK-2 untuk Analisis Kritis Literatur, CPMK-4 untuk Penelitian Eksperimental Data Mining, dan CPMK-5 untuk Analisis Metode Modern. Ketiganya menuntut mahasiswa untuk mengevaluasi secara kritis paper internasional terkait aspek explainability dan trustworthiness, merancang eksperimen yang valid dengan protokol evaluasi penjelasan model serta analisis kegagalan yang ketat, serta membandingkan pendekatan algoritmik berdasarkan dimensi interpretabilitas, robustness, fairness, dan generalisasi.

Untuk menerjemahkan capaian makro tersebut ke dalam kompetensi operasional, empat tujuan khusus dirumuskan sebagai panduan praktik dan investigasi mandiri. Pertama, mahasiswa harus mampu membedakan secara konseptual antara interpretability, explainability, dan responsibility dalam konteks data mining. Interpretability mengacu pada kemudahan manusia memahami mekanisme internal model, explainability berfokus pada pemberian alasan di balik prediksi tertentu (baik global maupun lokal), sementara responsibility menekankan pada akuntabilitas dampak sosial dan etis dari penerapan model. Kedua, penguasaan teknis akan difokuskan pada implementasi SHAP dan LIME untuk analisis prediksi. Kedua library ini akan menjadi standar praktis dalam menghasilkan feature attribution yang stabil dan dapat diinterpretasikan, terutama ketika diintegrasikan dengan pipeline Python menggunakan scikit-learn dan pandas. Ketiga, mahasiswa dilatih melakukan error analysis dan failure-case analysis secara sistematis, yaitu menelusuri pola kesalahan model pada subset data tertentu, mengidentifikasi karakteristik sampel yang sering salah diklasifikasikan, dan menghubungkan temuan tersebut dengan kualitas fitur atau ketidakseimbangan kelas. Keempat, pemahaman komprehensif mengenai trustworthiness akan dibangun melalui empat dimensi kunci: robustness terhadap noise dan distribusi berubah, fairness dalam alokasi keputusan antar subpopulasi, mitigasi dataset bias sejak tahap preprocessing, serta pertimbangan privacy dalam skenario federated atau sensitive data.

Rumusan tujuan ini berfungsi sebagai jembatan analitis antara agenda pertemuan sebelumnya yang memetakan roadmap semester, dan slide berikutnya yang akan merekap evolusi pertanyaan penelitian dari era optimasi metrik menuju era verifikasi kepercayaan. Dengan menguasai keempat tujuan ini, mahasiswa siap mengintegrasikan teknik explainability dan auditabilitas ke dalam research project mereka, memastikan bahwa setiap klaim empiris didukung oleh evidence yang transparan, adil, dan robust secara metodologis.

### Inti yang Harus Ditekankan

- Pergeseran paradigma riset S2 dari sekadar mengejar metrik performa menuju evaluasi berbasis trustworthiness, explainability, dan fairness yang dapat dipertanggungjawabkan secara ilmiah.
- Integrasi CPMK-2, CPMK-4, dan CPMK-5 mengharuskan mahasiswa menyeimbangkan literatur kritis, desain eksperimen terstruktur, dan perbandingan metode yang ketat berdasarkan kriteria interpretabilitas dan generalisasi.
- Penguasaan SHAP/LIME serta disiplin dalam error/failure-case analysis merupakan kompetensi inti untuk menghasilkan penelitian yang reproducible, accountable, dan siap publikasi di venue bereputasi.

### Transisi ke Slide Berikutnya

Setelah memahami peta capaian dan tujuan spesifik yang harus dicapai, mari kita lihat bagaimana perjalanan penelitian data mining berevolusi dari pertemuan-pertemuan sebelumnya, dan mengapa pertanyaan mendasar “mengapa model membuat prediksi?” kini menjadi fokus utama dalam riset tingkat lanjut.

---

## Slide 003 - Recap: Perjalanan Penelitian Data Mining

### Narasi

Pertemuan ini membuka diskusi dengan merekap perjalanan materi sepanjang semester sebagai konteks strategis bagi penelitian tingkat magister. Pada Pertemuan 1 hingga 7, fondasi penelitian dibangun melalui penguasaan metode klasik, pipeline standar, dan evaluasi berbasis metrik tradisional. Kemudian, Pertemuan 8 hingga 12 memperluas cakupan ke teknik mutakhir seperti deep learning, graph mining, temporal data mining, serta AutoML. Khususnya pada Pertemuan 12, kita membahas concept drift, yaitu fenomena di mana performa model menurun secara signifikan karena pergeseran distribusi data dari waktu ke waktu. Tantangan ini menunjukkan bahwa stabilitas model bukanlah hal yang statis, melainkan memerlukan pemantauan dan adaptasi berkelanjutan.

Memasuki Pertemuan 13, terjadi pergeseran paradigma yang fundamental dalam cara kita merumuskan pertanyaan penelitian. Fokus tidak lagi semata-mata pada pencapaian angka performa tertinggi, melainkan beralih ke pertanyaan esensial: mengapa model benar-benar membuat prediksi tertentu, dan kapan kita dapat memercayai keluaran tersebut? Pergeseran ini sangat selaras dengan CPMK-2 dan CPMK-4 yang telah ditetapkan, yaitu kemampuan mengevaluasi penelitian secara kritis serta merancang eksperimen yang valid dengan mempertimbangkan aspek interpretabilitas dan analisis kegagalan. Dalam konteks penelitian S2, klaim ilmiah tidak lagi cukup dibuktikan hanya dengan tabel perbandingan metrik, tetapi harus didukung oleh pemahaman mekanistik tentang bagaimana model beroperasi.

Tabel perubahan pertanyaan penelitian pada slide ini secara eksplisit mengilustrasikan transformasi tersebut. Pertanyaan lama yang bersifat deskriptif dan komparatif, seperti “model mana yang akurasinya tertinggi?” atau “seberapa besar F1-score?”, kini digantikan oleh pertanyaan analitis dan diagnostik. Peneliti dituntut untuk menjawab mengapa model bekerja atau justru gagal pada kasus tertentu, serta apakah peningkatan metrik yang dilaporkan benar-benar mencerminkan perbaikan substansial atau sekadar artefak dari bias data. Explainability dan error analysis bukan lagi fitur tambahan, melainkan komponen wajib yang berfungsi sebagai bukti empiris bahwa hipotesis penelitian Anda memiliki dasar logis dan robust.

Pergeseran narasi penelitian ini akan menjadi landasan konseptual yang kuat ketika kita menelaah mengapa explainability kini menjadi kebutuhan krusial. Baik dari sisi akademis maupun implementasi industri, kemampuan untuk mendokumentasikan dan memverifikasi proses pengambilan keputusan model menentukan apakah sebuah algoritma layak dipublikasikan, diaudit, atau diadopsi pada domain yang menuntut transparansi tinggi.

### Inti yang Harus Ditekankan

- Pergeseran fokus penelitian dari sekadar optimasi metrik performa menuju pemahaman mekanistik, verifikasi kepercayaan, dan analisis kegagalan model.
- Explainability dan error analysis merupakan standar validasi eksperimen wajib pada jenjang magister, bukan sekadar pelengkap visualisasi.
- Perumusan research question harus dirancang untuk mengungkap “mengapa” dan “kapan”, sehingga kontribusi ilmiah dapat dibuktikan secara evidensi-based.

### Transisi ke Slide Berikutnya

Dengan memahami pergeseran prioritas penelitian ini, langkah selanjutnya adalah menelusuri alasan mendasar mengapa explainability kini menjadi krusial, baik dari sisi tuntutan reviewer jurnal internasional maupun regulasi industri yang semakin ketat. Mari kita bahas lebih lanjut pada slide berikutnya.

---

## Slide 004 - Mengapa Explainability Menjadi Krusial?

### Narasi

Pada pertemuan sebelumnya, kita telah menggeser fokus penelitian dari sekadar mengejar metrik performa seperti akurasi atau F1-score menuju pertanyaan mendasar mengenai mekanisme kerja dan alasan di balik keberhasilan atau kegagalan suatu model. Pergeseran ini bukan hanya tren metodologis, melainkan kebutuhan esensial dalam penelitian jenjang magister. Ketika Anda mengembangkan atau membandingkan algoritma canggih seperti XGBoost atau arsitektur deep learning, pencapaian angka performa yang tinggi hanyalah titik awal. Reviewer jurnal internasional terindeks Scopus tidak akan puas hanya dengan tabel perbandingan numerik; mereka akan menuntut penjelasan substantif tentang mengapa metode Anda bekerja, pada kondisi apa model tersebut gagal, dan bagaimana kesalahan tersebut dapat dikaitkan dengan karakteristik data atau desain eksperimen.

Dalam konteks akademik, kontribusi ilmiah tidak lagi cukup dibuktikan melalui peningkatan margin performa semata. Klaim penelitian harus didukung oleh bukti empiris yang transparan, di mana error analysis dan teknik explainability berperan sebagai jembatan antara hasil prediksi hitam-putih dengan pemahaman kausal atau korelasional yang valid. Tanpa kemampuan untuk menjelaskan mekanisme internal atau pola kesalahan model, sebuah studi kehilangan kredibilitas ilmiah karena tidak memberikan insight yang dapat direplikasi, divalidasi ulang, atau dikembangkan lebih lanjut oleh komunitas peneliti.

Di luar ranah akademik, urgensi explainability juga didorong oleh tuntutan industri dan kerangka regulasi global. Sektor-sektor kritis seperti kesehatan, keuangan, dan hukum secara inheren membutuhkan keputusan yang dapat dipertanggungjawabkan dan dilacak jejak logikanya. Regulasi ketat seperti General Data Protection Regulation (GDPR) di Eropa bahkan secara eksplisit memberikan hak kepada individu untuk mendapatkan penjelasan atas setiap keputusan otomatis yang memengaruhi mereka. Model black-box yang tidak mampu menyediakan justifikasi prediksi cenderung menghadapi hambatan adopsi signifikan, terutama pada domain berisiko tinggi di mana kesalahan prediksi dapat berdampak fatal terhadap keselamatan, privasi, atau keadilan sosial.

Oleh karena itu, mengintegrasikan explainability ke dalam pipeline penelitian bukan lagi opsi tambahan, melainkan standar metodologis wajib. Hal ini memastikan bahwa temuan Anda tidak hanya akurat secara statistik, tetapi juga robust secara konseptual, siap untuk diverifikasi, dan memenuhi standar etika serta regulasi yang berlaku dalam ekosistem data modern.

### Inti yang Harus Ditekankan

- Akurasi tinggi saja tidak cukup untuk klaim ilmiah; reviewer menuntut pemahaman mekanisme kerja dan alasan di balik performa model.
- Error analysis dan explainability berfungsi sebagai bukti empiris yang memperkuat validitas, transparansi, dan replikabilitas penelitian.
- Tuntutan industri dan regulasi (seperti GDPR) menjadikan explainability sebagai prasyarat adopsi model pada domain berisiko tinggi.
- Explainability adalah komponen metodologis wajib, bukan fitur pelengkap, dalam penelitian data mining tingkat magister.

### Transisi ke Slide Berikutnya

Untuk memahami bagaimana kita dapat memberikan penjelasan pada model yang kompleks, kita perlu membedakan dua konsep yang sering tertukar namun memiliki makna teknis berbeda: interpretability dan explainability. Mari kita bedah definisi, cakupan, serta hubungan keduanya pada slide berikutnya.

---

## Slide 005 - Interpretability vs Explainability: Definisi

### Narasi

Setelah pada slide sebelumnya kita membahas urgensi explainability dalam konteks penelitian magister maupun regulasi industri, langkah selanjutnya adalah memperjelas fondasi terminologis yang sering tertukar, yaitu perbedaan mendasar antara interpretability dan explainability. Dalam literatur data mining dan machine learning, kedua istilah ini memiliki cakupan dan mekanisme yang berbeda, meskipun keduanya bertujuan meningkatkan transparansi model.

Interpretability merujuk pada kemampuan alami suatu model untuk dipahami secara langsung oleh manusia tanpa memerlukan alat bantu eksternal. Model yang bersifat interpretable umumnya memiliki struktur matematis atau logika yang sederhana dan transparan. Contohnya adalah linear regression, logistic regression, dan decision tree dengan kedalaman terbatas. Pada model-model ini, hubungan antara fitur input dan prediksi output dapat dilacak secara eksplisit oleh peneliti. Semakin sederhana struktur modelnya, semakin tinggi tingkat interpretability-nya, karena kompleksitas komputasi dan jumlah parameter yang harus dipertimbangkan manusia menjadi lebih rendah. Namun, perlu dicatat bahwa peningkatan interpretability sering kali berbanding terbalik dengan kapasitas model dalam menangkap pola data yang sangat non-linear atau kompleks.

Sebaliknya, explainability berfokus pada kemampuan untuk memberikan penjelasan mengenai prediksi spesifik, bahkan ketika model internalnya bersifat kompleks atau dianggap sebagai black box. Model seperti XGBoost, random forest, atau neural network biasanya tidak mudah ditelusuri secara langsung. Untuk mengatasi hal ini, explainability memanfaatkan metode post-hoc yang bekerja setelah proses pelatihan selesai. Dalam ekosistem Python yang kita gunakan, library seperti SHAP (SHapley Additive exPlanations) dan LIME (Local Interpretable Model-agnostic Explanations) menjadi standar industri dan akademik untuk mengurai kontribusi masing-masing fitur terhadap hasil prediksi tertentu. Explainability tidak mengubah cara kerja model asli, melainkan menambahkan lapisan analisis yang menerjemahkan perilaku model kompleks menjadi insight yang dapat dimengerti.

Hubungan antara kedua konsep ini dapat diringkas melalui perspektif waktu dan pendekatan. Interpretability bersifat inherent atau melekat sejak tahap desain model, di mana transparansi dibangun langsung ke dalam arsitektur algoritma. Sementara itu, explainability bersifat post-hoc, diterapkan setelah model dilatih untuk menjawab pertanyaan mengapa prediksi tertentu terjadi. Pemahaman atas dikotomi ini sangat krusial bagi peneliti tingkat magister, karena menentukan strategi pemilihan model dan validasi hipotesis dalam eksperimen Anda. Konsep ini akan kita bedah lebih lanjut pada dimensi teknis dan implikasi metodologis pada slide berikutnya.

### Inti yang Harus Ditekankan

- Interpretability adalah sifat inherent model yang memungkinkan pemahaman langsung terhadap mekanisme kerja model (contoh: linear regression, decision tree sederhana).
- Explainability adalah pendekatan post-hoc yang memberikan alasan di balik prediksi spesifik pada model kompleks menggunakan alat bantu seperti SHAP dan LIME.
- Terdapat trade-off klasik: model yang sangat interpretable cenderung memiliki kapasitas prediktif terbatas, sedangkan model kompleks membutuhkan explainability tools untuk bisa diaudit dan divalidasi.
- Dalam konteks penelitian S2, pembedaan ini menentukan apakah Anda akan menggunakan model sederhana sebagai strong baseline atau menerapkan teknik explainability untuk menganalisis model state-of-the-art.

### Transisi ke Slide Berikutnya

Dengan memahami definisi dan karakteristik dasar dari kedua konsep tersebut, kita sekarang akan melihat perbandingan sistematisnya dari berbagai aspek teknis, mulai dari fokus analisis, waktu penerapan, hingga kelebihan dan kekurangannya, serta bagaimana implikasinya dalam merancang eksperimen penelitian.

---

## Slide 006 - Interpretability vs Explainability: Perbandingan

### Narasi

Setelah pada slide sebelumnya kita membedah definisi dasar antara interpretability dan explainability, kini kita akan menyoroti perbandingan sistematis antara keduanya melalui enam aspek kunci. Perbedaan mendasar terletak pada fokus dan waktu penerapannya. Interpretability berfokus pada struktur model itu sendiri, di mana transparansi sudah melekat secara inherent sejak tahap desain arsitektur model. Sebaliknya, explainability berfokus pada prediksi atau perilaku model tertentu, yang umumnya diterapkan secara post-hoc setelah proses training selesai.

Dari segi metode, model interpretable seperti linear regression atau decision tree menawarkan keuntungan berupa transparansi yang jelas sejak awal, sehingga peneliti dapat melacak setiap langkah logika pengambilan keputusan. Namun, kelemahannya sering kali terletak pada kompromi performa terhadap kompleksitas data yang tinggi. Di sisi lain, explainability menggunakan alat bantu seperti SHAP, LIME, atau counterfactual explanation yang memberikan fleksibilitas untuk menjelaskan model sekompleks apa pun, termasuk ensemble methods atau neural networks. Kelemahan utamanya adalah penjelasan yang dihasilkan bersifat aproksimasi dan tidak selalu sempurna mencerminkan mekanisme internal model. Oleh karena itu, penggunaan interpretability sangat disarankan untuk establishing baseline penelitian atau domain kritis, sedangkan explainability lebih tepat untuk debugging, audit model, atau analisis model kompleks.

Dalam konteks penelitian jenjang magister, pemahaman tabel perbandingan ini memiliki implikasi metodologis yang sangat krusial. Pertama, model interpretable harus selalu dipertimbangkan sebagai strong baseline yang wajar dan etis dalam setiap eksperimen data mining. Baseline ini memberikan landasan komparatif yang solid sebelum beralih ke model black-box yang lebih canggih. Kedua, ketika Anda mengadopsi model kompleks untuk meningkatkan akurasi, jangan serta-merta mengganti model tersebut hanya karena dianggap tidak bisa dipahami. Gunakanlah toolkit explainability untuk menganalisis perilaku model tersebut secara mendalam. Pendekatan ini memungkinkan Anda mempertahankan performa tinggi sambil tetap memenuhi prinsip trustworthy data mining dan kebutuhan auditabilitas.

### Inti yang Harus Ditekankan

- Interpretability bersifat inherent pada struktur model, sedangkan explainability bersifat post-hoc pada prediksi atau perilaku model.
- Model interpretable wajib dijadikan baseline kuat dalam riset, sementara explainability tool digunakan untuk audit dan debugging model kompleks tanpa menggantinya.
- Trade-off antara transparansi dan performa harus dikelola secara metodologis, bukan sekadar memilih model paling akurat tanpa analisis perilaku.

### Transisi ke Slide Berikutnya

Memahami perbedaan fokus dan waktu antara kedua konsep ini membawa kita pada pertanyaan selanjutnya: seberapa luas cakupan penjelasan yang perlu kita berikan? Apakah kita ingin memahami pola umum seluruh dataset, atau justru mendalami alasan di balik satu prediksi spesifik? Untuk menjawabnya, mari kita lanjutkan ke pembahasan mengenai Global vs Local Explanation pada slide berikutnya.

---

## Slide 007 - Global vs Local Explanation

### Narasi

Setelah membahas perbedaan mendasar antara interpretabilitas dan explainability pada slide sebelumnya, kita kini masuk ke dimensi ruang lingkup penjelasan dalam explainable AI, yaitu pembagian menjadi global explanation dan local explanation. Dalam praktik data mining tingkat lanjut, kedua pendekatan ini tidak saling menggantikan, melainkan bersifat komplementer dan menjawab pertanyaan penelitian yang berbeda.

Global explanation berfokus pada pemahaman perilaku model secara keseluruhan atau agregat. Tujuannya adalah mengidentifikasi pola keputusan yang konsisten di seluruh dataset, seperti fitur mana yang paling berpengaruh secara rata-rata terhadap target, serta bagaimana interaksi antar fitur membentuk distribusi prediksi model. Implementasinya sering kali memanfaatkan teknik seperti feature importance bawaan dari algoritma berbasis pohon, permutation importance, atau visualisasi agregat seperti SHAP summary plot. Dalam konteks penelitian, global explanation sangat berguna untuk validasi hipotesis awal, memastikan bahwa model tidak bergantung pada fitur yang tidak relevan atau bias sistematis, serta memberikan gambaran makro tentang mekanisme pembelajaran yang telah terjadi.

Sebaliknya, local explanation menyoroti prediksi tunggal untuk satu instance spesifik. Pendekatan ini menjawab pertanyaan mengapa model menghasilkan output tertentu untuk kasus individual, dengan menguraikan kontribusi positif atau negatif masing-masing fitur terhadap skor prediksi tersebut. Teknik seperti SHAP force plot dan LIME bekerja dengan membangun surrogate model lokal atau menghitung nilai Shapley value per sampel, sehingga mampu menangkap nuansa kontekstual yang hilang dalam analisis agregat. Local explanation menjadi krusial dalam skenario audit model, debugging error analysis, atau aplikasi domain kritis di mana justifikasi per kasus diperlukan untuk pengambilan keputusan.

Analogi yang disajikan pada slide menggambarkan perbedaan ini secara intuitif. Penjelasan global memberikan peta umum rute navigasi model, sementara penjelasan lokal memberikan petunjuk arah spesifik untuk satu titik koordinat tertentu. Dalam workflow research yang rigor, kombinasi keduanya memungkinkan peneliti melakukan ablation study berbasis fitur, memverifikasi konsistensi logika model, dan merancang strategi mitigasi bias yang lebih terarah. Penting juga dicatat bahwa meskipun global explanation sering dianggap sebagai representasi utama dari apa yang dipelajari model, ia tetap merupakan perkiraan statistik yang dapat disederhanakan, sehingga harus dikombinasikan dengan verifikasi empiris.

### Inti yang Harus Ditekankan

- Global explanation mengungkap pola agregat dan pengaruh fitur secara rata-rata, sedangkan local explanation mengurai determinan prediksi per instance secara spesifik.
- Kedua pendekatan bersifat komplementer; penggunaan bersama meningkatkan robustness analisis dan mendukung error analysis serta ablation study dalam penelitian.
- Visualisasi agregat seperti SHAP summary plot cocok untuk validasi hipotesis makro, sementara SHAP force plot dan LIME diperlukan untuk justifikasi kasus individual.
- Pemahaman mendalam tentang scope penjelasan ini menjadi fondasi metodologis sebelum mengevaluasi metrik feature importance yang akan dibahas selanjutnya.

### Transisi ke Slide Berikutnya

Dengan memahami pembagian ruang lingkup penjelasan, langkah natural berikutnya adalah membedah salah satu komponen utama global explanation, yaitu feature importance. Namun, karena ukurannya yang sering disalahartikan sebagai kebenaran mutlak, kita perlu mengkritisi definisi, mekanisme perhitungan, hingga keterbatasan fundamentalnya seperti ketidakstabilan dan kegagalan menangkap interaksi fitur. Mari kita telusuri detailnya pada slide berikutnya.

---

## Slide 008 - Feature Importance: Definisi dan Masalah

### Narasi

Setelah membahas perbedaan mendasar antara penjelasan global dan lokal pada slide sebelumnya, kita kini akan mendalami salah satu teknik interpretasi model yang paling mendasar, yaitu Feature Importance atau Kepentingan Fitur. Secara konseptual, feature importance bertujuan untuk mengukur seberapa besar kontribusi setiap variabel input terhadap keluaran atau prediksi yang dihasilkan oleh model machine learning. Dalam praktik implementasinya, terdapat dua kategori utama yang perlu dipahami. Pertama, model-based importance, yang secara langsung diekstrak dari mekanisme internal algoritma. Misalnya, pada pohon keputusan seperti Random Forest atau XGBoost, importance dihitung berdasarkan frekuensi split atau peningkatan gain (seperti Gini impurity atau MSE) yang dihasilkan oleh suatu fitur selama pelatihan. Kedua, permutation importance, yang bersifat model-agnostic dan lebih berfokus pada dampak fungsional fitur terhadap performa model. Metode ini bekerja dengan mengacak nilai satu fitur tertentu pada data validasi, lalu mengukur penurunan metrik evaluasi (seperti akurasi, F1-score, atau AUC) dibandingkan dengan baseline. Penurunan performa yang signifikan setelah pengacakan menunjukkan bahwa fitur tersebut memegang peran krusial dalam prediksi.

Meskipun intuitif dan mudah diimplementasikan, penggunaan feature importance klasik menghadapi sejumlah keterbatasan serius yang perlu disadari, terutama dalam konteks penelitian tingkat magister. Tabel pada slide ini merangkum lima masalah kritis. Pertama, hasil importance tidak konsisten; urutan peringkat fitur dapat berubah drastis tergantung pada metode yang dipilih, misalnya antara Gini importance, permutation, atau gradient-based methods. Kedua, metrik ini sangat tidak stabil terhadap noise atau variasi kecil dalam data; perubahan minor pada distribusi sampel dapat menggeser skor importance secara arbitrer. Ketiga, dan ini paling berbahaya, feature importance tidak selalu faithful atau setia terhadap proses pengambilan keputusan sebenarnya. Algoritma sering kali memberikan bobot tinggi pada fitur yang berkorelasi kuat dengan target, namun bukan merupakan faktor kausal atau logis di balik keputusan model. Keempat, metode tradisional gagal menangkap interaksi antar fitur. Jika dua fitur hanya memberikan pengaruh prediktif ketika hadir bersamaan, masing-masing mungkin tampak tidak penting saat dievaluasi secara marginal. Kelima, skala nilai importance tidak seragam antar model atau bahkan antar fold cross-validation, sehingga menyulitkan komparasi langsung atau thresholding yang objektif.

Dari perspektif metodologi penelitian, pemahaman ini menjadi fondasi penting. Feature importance sederhana memang sangat berguna sebagai langkah eksplorasi awal untuk identifikasi pola data atau seleksi fitur pra-pemodelan. Namun, ia sama sekali tidak memadai jika dijadikan sebagai bukti ilmiah atau justifikasi atas klaim explainability suatu model. Pada jenjang S2, mahasiswa dituntut untuk tidak terjebak pada visualisasi ranking fitur mentah, melainkan harus menerapkan evaluasi yang rigor, seperti melakukan ablation study yang terkontrol, analisis error, atau beralih ke framework interpretasi yang lebih matematis dan konsisten. Keterbatasan inilah yang secara alami mengarahkan kita pada kebutuhan akan pendekatan berbasis teori permainan kooperatif, yang mampu mendistribusikan kontribusi prediksi secara adil dan aditif ke setiap fitur, terlepas dari kompleksitas interaksi atau bias struktural model.

### Inti yang Harus Ditekankan

- Feature importance klasik (model-based & permutation) hanyalah alat eksplorasi awal, bukan standar emas untuk justifikasi explainability dalam penelitian ilmiah.
- Lima kelemahan utama (inkonsistensi, ketidakstabilan, ketidaksetiaan/fidelity rendah, kegagalan menangkap interaksi, dan skala tidak seragam) membuat metrik ini rentan terhadap misinterpretasi jika digunakan secara naif.
- Penelitian tingkat magister wajib melampaui ranking fitur sederhana dengan menerapkan evaluasi rigor seperti ablation study, kontrol varians, dan framework interpretasi yang grounded secara teoretis.

### Transisi ke Slide Berikutnya

Untuk mengatasi keterbatasan fundamental dari feature importance tradisional, kita akan beralih ke pendekatan yang lebih rigor dan matematis, yaitu SHAP (SHapley Additive exPlanations), yang dibangun di atas fondasi teori permainan kooperatif untuk menghitung kontribusi fitur secara aditif dan konsisten.

---

## Slide 009 - SHAP: Konsep Dasar

### Narasi

Setelah pada slide sebelumnya kita mengidentifikasi keterbatasan mendasar dari metode feature importance konvensional—seperti ketidakonsistenan urutan, sensitivitas terhadap noise, ketidaksetiaan terhadap proses keputusan model, serta ketidakmampuan menangkap efek interaksi antar variabel—kita memerlukan pendekatan interpretasi yang memiliki fondasi teoretis yang kokoh. Di sinilah SHAP atau SHapley Additive exPlanations hadir sebagai framework penjelasan model yang lebih rigor dan siap digunakan untuk standar penelitian tingkat magister. SHAP dibangun sepenuhnya di atas konsep Shapley value yang berasal dari teori permainan kooperatif (cooperative game theory). Dalam kerangka ini, setiap fitur dalam dataset diperlakukan sebagai "pemain" yang berkolaborasi untuk menghasilkan sebuah "hadiah", yaitu nilai prediksi model. Shapley value menghitung pembagian hadiah tersebut secara adil kepada setiap pemain berdasarkan kontribusi marginalnya, dengan cara mengevaluasi pengaruh penambahan fitur tersebut ke dalam semua kemungkinan kombinasi subset fitur yang ada.

Ide intuitif dari SHAP dapat dipahami melalui struktur persamaan penjumlahan aditif. Nilai prediksi untuk satu instance data tidak dilihat sebagai angka tunggal yang terisolasi, melainkan sebagai dekomposisi antara baseline dan kontribusi spesifik masing-masing fitur. Baseline merepresentasikan nilai rata-rata prediksi model pada seluruh dataset pelatihan, yang berfungsi sebagai titik acuan netral. Setiap fitur kemudian memberikan deviasi positif atau negatif terhadap baseline tersebut sesuai dengan karakteristik nilainya pada sampel yang sedang dianalisis. Sebagai ilustrasi pada kasus prediksi harga rumah, jika baseline prediksinya berada di angka 500 juta rupiah, maka fitur luas tanah dapat memberikan kontribusi tambahan sebesar 80 juta, lokasi berkontribusi 40 juta, kondisi bangunan menambah 20 juta, sedangkan usia bangunan justru menekan nilai prediksi sebesar 10 juta. Penjumlahan seluruh komponen ini akan selalu kembali ke nilai prediksi asli model, namun kini telah terurai menjadi bagian-bagian yang dapat dilacak dan diverifikasi.

Pendekatan ini sangat strategis untuk konteks penelitian data mining karena SHAP mengubah penjelasan model dari sekadar ranking heuristik menjadi alokasi nilai yang terukur dan konsisten. Dengan memisahkan pengaruh baseline dan kontribusi fitur, peneliti dapat melakukan analisis mendalam mengenai arah dan magnitudo dampak masing-masing variabel terhadap keluaran model. Hal ini memungkinkan validasi hipotesis penelitian, identifikasi bias sistem, serta penyusunan argumentasi ilmiah yang didukung oleh bukti kuantitatif langsung dari mekanisme internal model, bukan hanya dari output permukaan.

### Inti yang Harus Ditekankan

- SHAP memanfaatkan Shapley value dari teori permainan kooperatif untuk mengalokasikan nilai prediksi secara adil kepada setiap fitur berdasarkan kontribusi marginalnya terhadap semua kemungkinan koalisi fitur.
- Struktur penjelasan SHAP bersifat aditif dan mudah diinterpretasi: Prediksi = Baseline (rata-rata model) + Σ Kontribusi Fitur, sehingga menjembatani kompleksitas model dengan kejelasan penjelasan.
- Contoh numerik harga rumah menegaskan bahwa kontribusi fitur dapat bernilai positif (mendorong prediksi naik) atau negatif (menekan prediksi turun), memberikan nuansa analitis yang kaya untuk penelitian.
- Metode ini secara eksplisit mengatasi kelemahan feature importance tradisional dengan menyediakan kerangka kerja yang transparan, konsisten, dan siap untuk keperluan ablation study serta error analysis tingkat lanjut.

### Transisi ke Slide Berikutnya

Agar penjelasan berbasis SHAP benar-benar dapat dipertanggungjawabkan secara akademis dan metodologis, mekanisme pembagiannya harus memenuhi prinsip-prinsip matematis yang ketat. Pada slide berikutnya, kita akan membedah sifat-sifat fundamental Shapley value seperti Efficiency, Symmetry, Dummy, dan Additivity, serta bagaimana sifat-sifat ini menjamin konsistensi, keadilan, dan keandalan penjelasan model di berbagai arsitektur machine learning.

---

## Slide 010 - SHAP: Sifat-sifat Penting

### Narasi

Setelah pada slide sebelumnya kita memahami konsep dasar SHAP sebagai penerapan nilai Shapley dari teori permainan kooperatif untuk mendistribusikan kontribusi setiap fitur terhadap prediksi model, kini kita akan membahas mengapa SHAP dianggap sebagai metode penjelasan yang secara matematis kokoh dan layak dijadikan standar dalam penelitian data mining tingkat lanjut. Kekuatan utama SHAP terletak pada empat sifat fundamental yang dimiliki oleh nilai Shapley, yaitu Efficiency, Symmetry, Dummy, dan Additivity. Sifat-sifat ini bukan sekadar definisi teoretis, melainkan fondasi aksiomatik yang menjamin bahwa interpretasi model machine learning dapat dilakukan secara adil, konsisten, dan dapat dipertanggungjawabkan secara ilmiah.

Mari kita uraikan satu per satu. Pertama, **Efficiency** atau efisiensi memastikan bahwa jumlah total kontribusi dari semua fitur dalam sebuah instance tepat sama dengan selisih antara prediksi model dan baseline-nya. Dengan kata lain, tidak ada bagian dari prediksi yang hilang atau diduplikasi; seluruh deviasi dari rata-rata dataset berhasil dijelaskan secara lengkap oleh kombinasi fitur. Kedua, **Symmetry** menyatakan bahwa jika dua fitur memberikan kontribusi marginal yang identik terhadap prediksi, maka keduanya akan menerima nilai SHAP yang sama. Ini mencegah bias arbitrer terhadap fitur tertentu yang sebenarnya memiliki peran ekivalen dalam ruang fitur. Ketiga, sifat **Dummy** menjamin bahwa fitur yang benar-benar tidak memengaruhi keluaran model akan mendapatkan nilai SHAP nol, sehingga fitur noise atau redundan tidak akan mengacaukan interpretasi. Terakhir, **Additivity** memungkinkan kita menjumlahkan kontribusi SHAP secara linear antar instance maupun antar model, yang sangat berguna ketika melakukan agregasi penjelasan untuk analisis global atau membandingkan berbagai arsitektur model dalam eksperimen komparatif.

Implikasi dari keempat sifat ini sangat signifikan bagi praktik data mining dan pengembangan metodologi penelitian. Karena memenuhi axioma tersebut, SHAP memberikan penjelasan yang konsisten secara matematis, berbeda dengan metrik feature importance tradisional seperti基于 impurity (Gini/Entropy) atau permutation importance yang sering kali bersifat heuristik, kurang stabil saat terjadi korelasi antar fitur, dan tidak selalu menjumlahkan kembali ke prediksi asli. Konsistensi ini membuat SHAP lebih dapat dipercaya untuk pengambilan keputusan kritis dan validasi hipotesis penelitian. Selain itu, kerangka kerja SHAP bersifat model-agnostic, artinya prinsip ini dapat diterapkan secara seragam baik pada model berbasis pohon seperti Random Forest atau XGBoost, model linear, hingga jaringan saraf tiruan. Perlu juga dicatat bahwa nilai SHAP bersifat bipolar: bernilai positif ketika suatu fitur mendorong prediksi naik di atas baseline, dan bernilai negatif ketika fitur tersebut menekan prediksi di bawah baseline. Pemahaman arah pengaruh ini krusial untuk diagnosis model, identifikasi pola risiko, serta merancang strategi mitigasi bias dalam sistem yang bertanggung jawab.

### Inti yang Harus Ditekankan

- SHAP didukung oleh empat axioma matematis (Efficiency, Symmetry, Dummy, Additivity) yang menjamin konsistensi, keadilan, dan kelengkapan dalam alokasi kontribusi fitur.
- Berbeda dengan feature importance konvensional, SHAP bersifat model-agnostic dan lebih robust terhadap korelasi fitur karena landasan teori permainan kooperatifnya, sehingga lebih sesuai untuk evaluasi model yang ketat dalam penelitian magister.
- Nilai SHAP memiliki arah (positif/negatif) yang menunjukkan apakah fitur meningkatkan atau menurunkan prediksi relatif terhadap baseline, memungkinkan interpretasi kausalitas parsial yang diperlukan untuk error analysis dan ablation study.

### Transisi ke Slide Berikutnya

Memahami sifat-sifat matematis ini menjadi prasyarat penting sebelum kita mengekspresikan nilai-nilai SHAP secara visual. Pada slide berikutnya, kita akan mempelajari berbagai jenis plot SHAP—mulai dari Waterfall Plot untuk penjelasan lokal, Force Plot untuk interaksi interaktif, Summary Beeswarm untuk gambaran global, hingga Dependence Plot untuk mengungkap interaksi antar fitur—serta kapan masing-masing visualisasi paling efektif digunakan dalam pipeline penelitian data mining.

---

## Slide 011 - Jenis-jenis Visualisasi SHAP

### Narasi

Setelah memahami bahwa nilai SHAP dibangun di atas fondasi teori permainan kooperatif dan memenuhi sifat-sifat matematis seperti efisiensi, simetri, dummy, serta additivitas, langkah kritis berikutnya adalah mengonversi angka-angka tersebut menjadi representasi visual yang dapat diinterpretasikan secara intuitif. Visualisasi SHAP bukan sekadar alat pelengkap, melainkan komponen diagnostik utama dalam *explainable AI* untuk menjembatani kesenjangan antara kompleksitas model *black-box* dan kebutuhan transparansi yang menuntut standar metodologis tingkat magister.

**Waterfall Plot** menyajikan perjalanan kumulatif prediksi dari nilai *baseline* menuju prediksi akhir model untuk satu *instance* data tertentu. Setiap blok merepresentasikan kontribusi marjinal satu fitur, baik yang mendorong prediksi naik maupun turun. Visualisasi ini sangat ideal untuk *local explanation*, terutama saat Anda melakukan *error analysis* atau ingin mendalami alasan di balik prediksi anomali pada subset data uji. Struktur bertingkatnya memungkinkan peneliti melacak secara presisi bagaimana kombinasi fitur menghasilkan keputusan spesifik.

**Force Plot** merupakan variasi horizontal dari waterfall yang dirancang khusus untuk pengalaman eksploratif di lingkungan notebook seperti Jupyter atau Google Colab. Fitur-fitur digambarkan sebagai gaya dorong atau tarikan yang saling berinteraksi secara paralel. Kelebihan utamanya terletak pada rendering yang ringkas dan sering kali bersifat interaktif, memungkinkan pengguna mengarahkan kursor untuk melihat detail kontribusi masing-masing fitur secara dinamis. Hal ini sangat efisien untuk review iteratif selama proses *hyperparameter tuning* atau ketika mengevaluasi stabilitas model pada berbagai skenario pengujian.

**Summary Plot**, atau yang dikenal sebagai Beeswarm Plot, berfungsi sebagai standar untuk *global explanation*. Grafik ini memadatkan informasi ribuan *instance* ke dalam satu tampilan padat, di mana setiap titik mewakili satu observasi. Sumbu vertikal mengelompokkan fitur berdasarkan peringkat kepentingannya, sumbu horizontal menunjukkan magnitudo dan arah nilai SHAP, sedangkan kode warna merepresentasikan distribusi nilai asli fitur tersebut. Pola sebaran titik memungkinkan peneliti mengidentifikasi konsistensi pengaruh fitur di seluruh populasi data, sekaligus mendeteksi heterogenitas respons yang sering kali menjadi petunjuk awal perlunya segmentasi data atau rekayasa fitur lanjutan.

**Dependence Plot** menggali dinamika hubungan non-linear antara nilai aktual suatu fitur dan dampaknya terhadap prediksi model. Dengan menempatkan nilai fitur pada sumbu X dan nilai SHAP pada sumbu Y, visualisasi ini mengungkap apakah peningkatan fitur selalu menghasilkan kenaikan prediksi, atau justru terdapat *threshold*, saturasi, atau perilaku berfluktuasi. Ketika diwarnai berdasarkan fitur interaksi kedua, dependence plot menjadi alat diagnostik canggih untuk mengkonfirmasi hipotesis interaksi antar variabel yang sering kali terlewatkan oleh metode *feature importance* berbasis impurity atau permutation.

### Inti yang Harus Ditekankan

- Pemilihan visualisasi harus disesuaikan dengan tujuan analitik: gunakan Waterfall/Force untuk investigasi lokal per-instance, dan Summary/Dependence untuk pemahaman global, validasi asumsi model, serta identifikasi pola interaksi.
- Interpretasi visual SHAP wajib dikontekstualisasikan dengan *domain knowledge* dan didukung uji statistik, hindari kesimpulan causal dari korelasi visual semata.
- Pada dataset berskala besar, optimalkan performa komputasi dengan teknik *stratified sampling* sebelum pembuatan summary plot, sehingga distribusi SHAP tetap representatif tanpa membebani memori sistem.

### Transisi ke Slide Berikutnya

Pemahaman mendalam mengenai karakteristik masing-masing visualisasi ini menjadi fondasi metodologis sebelum kita beralih ke implementasi teknis. Pada slide berikutnya, kita akan membahas alur kerja praktis menggunakan pustaka SHAP di Python, mencakup pemilihan *explainer* yang sesuai arsitektur model, penyiapan data latar belakang, serta eksekusi kode untuk menghasilkan interpretasi yang reproducible dan siap diintegrasikan ke dalam kerangka penelitian empiris.

---

## Slide 012 - SHAP: Workflow Praktis dengan Python

### Narasi

Setelah membahas berbagai jenis visualisasi SHAP pada slide sebelumnya, langkah selanjutnya adalah menerjemahkan konsep teoretis tersebut ke dalam implementasi kode yang terstruktur. Pada ekosistem Python, seluruh proses dimulai dengan mengimpor pustaka inti melalui `import shap`. Library ini menyediakan API yang seragam untuk menghitung atribusi fitur, sehingga peneliti dapat fokus pada analisis hasil tanpa harus menelusuri derivasi matematis Shapley value secara manual.

Dalam skenario praktikum atau penelitian, kita umumnya memulai dengan model yang telah dilatih, misalnya `GradientBoostingClassifier` dari scikit-learn. Tahap kunci dalam workflow SHAP adalah pembuatan objek explainer. Perintah `explainer = shap.TreeExplainer(model)` menginisialisasi backend khusus yang dioptimalkan untuk arsitektur berbasis pohon. Setelah explainer terbentuk, kita mengeksekusi `shap_values = explainer.shap_values(X_test)` untuk menghitung kontribusi marginal setiap fitur terhadap keluaran model pada seluruh sampel data uji. Nilai numerik inilah yang menjadi bahan baku bagi semua visualisasi downstream.

Dari array `shap_values`, kita dapat menghasilkan dua lapisan interpretasi yang saling melengkapi. Untuk local explanation atau penjelasan tingkat instance tunggal, kode `shap.waterfall_plot(shap.Explainer(model)(X_test.iloc[[0]]))` mengambil satu baris data pertama dan memetakan perjalanan prediksi dari nilai baseline menuju prediksi final. Setiap baris dalam plot merepresentasikan pergeseran nilai prediksi akibat satu fitur tertentu. Sebaliknya, untuk global explanation yang diperlukan dalam evaluasi model secara keseluruhan, kita gunakan `shap.summary_plot(shap_values, X_test)`. Fungsi ini secara otomatis merangkum seluruh instance menjadi beeswarm plot, di mana sumbu horizontal menunjukkan magnitudo SHAP value dan warna merepresentasikan rentang nilai asli fitur.

Secara konseptual, alur kerja ini dapat dipetakan menjadi lima tahapan berurutan: latih model, buat explainer sesuai tipe arsitektur, hitung SHAP values, lakukan visualisasi, dan terakhir interpretasi hasil untuk pengambilan keputusan atau penulisan paper. Terdapat tiga catatan metodologis yang wajib diperhatikan. Pertama, eksplorasi nilai SHAP akan lebih akurat jika data training digunakan sebagai background distribution saat menginisialisasi explainer, karena ini mencerminkan distribusi data yang sebenarnya dipelajari model. Kedua, komputasi SHAP bersifat computationally expensive; pada dataset berskala besar, lakukan subsampling strategis atau aktifkan mode approximate untuk menjaga efisiensi waktu eksperimen. Ketiga, pemilihan explainer harus selalu sinkron dengan jenis model, karena mismatch antara model dan explainer dapat menghasilkan bias atribusi yang signifikan.

Penguasaan workflow ini menjadi prasyarat metodologis sebelum kita membedah perbedaan implikasi komputasi dan interpretasi antara TreeExplainer dan LinearExplainer pada slide berikutnya. Dengan menerapkan pipeline yang sistematis, penelitian data mining tingkat magister dapat memenuhi standar transparansi dan reproducibility yang dituntut dalam publikasi internasional.

### Inti yang Harus Ditekankan

- Alur kerja SHAP bersifat modular: pelatihan model → inisialisasi explainer → ekstraksi nilai → visualisasi → interpretasi.
- Akurasi atribusi meningkat signifikan ketika data training digunakan sebagai background reference untuk menghitung expected values.
- Komputasi SHAP memerlukan manajemen sumber daya; gunakan sampling atau mode approximate pada dataset besar tanpa mengorbankan validitas statistik.
- Pemilihan explainer harus selalu didasarkan pada arsitektur model (tree-based, linear, deep learning, dll.) untuk menjamin exactness dan efisiensi.
- Integrasi local dan global explanation diperlukan untuk memenuhi standar interpretabilitas dalam penelitian data mining tingkat lanjut.

### Transisi ke Slide Berikutnya

Dengan workflow dasar yang sudah mapan, kita kini akan melihat bagaimana karakteristik komputasi dan sifat atribusi berubah ketika beralih dari model berbasis pohon ke model linear, serta implikasinya terhadap pemilihan explainer yang tepat.

---

## Slide 013 - SHAP untuk Model Tree vs Model Linear

### Narasi

Pada slide sebelumnya, kita telah menyusun alur praktis implementasi SHAP menggunakan Python, mulai dari pelatihan model, pembuatan objek explainer, perhitungan nilai SHAP, hingga visualisasi dan interpretasi. Langkah paling krusial dalam alur metodologis tersebut adalah pemilihan jenis explainer yang tepat, karena setiap explainer dibangun berdasarkan asumsi matematis dan struktur komputasi yang spesifik sesuai dengan arsitektur model yang digunakan. Slide ini akan membedah dua kategori explainer paling fundamental dalam ekosistem SHAP: TreeExplainer dan LinearExplainer, serta implikasi metodologisnya bagi penelitian data mining.

TreeExplainer secara khusus dioptimalkan untuk model berbasis pohon keputusan, mencakup XGBoost, LightGBM, CatBoost, Random Forest, maupun implementasinya di scikit-learn. Keunggulan utamanya terletak pada pemanfaatan struktur hierarkis pohon itu sendiri untuk menghitung kontribusi fitur secara efisien. Berbeda dengan metode pendekatan umum yang mengandalkan simulasi atau aproksimasi Monte Carlo, TreeExplainer mampu menghasilkan nilai SHAP yang bersifat exact (eksak) tanpa perlu mengasumsikan independensi antar fitur. Selain itu, algoritma ini juga interaction-aware, artinya ia dapat menangkap dan mengkuantifikasi efek interaksi antar variabel prediktor. Hal ini sangat relevan ketika kita berhadapan dengan dataset tabular kompleks di mana hubungan non-linear antar fitur sering kali menjadi kunci prediktif utama, sekaligus menjadi peluang untuk merumuskan hipotesis penelitian tentang mekanisme interaksi fitur.

Di sisi lain, LinearExplainer didesain khusus untuk model linear seperti regresi linier dan regresi logistik. Dalam konteks ini, nilai SHAP memiliki interpretasi yang langsung selaras dengan koefisien model: kontribusi setiap fitur dihitung sebagai perkalian antara koefisien regresi dengan nilai aktual fitur tersebut, disesuaikan dengan baseline rata-rata data. Pendekatan ini sangat sederhana secara komputasi dan memberikan hasil yang exact untuk model linear murni. Namun, keterbatasan utamanya jelas terletak pada domain aplikasinya; LinearExplainer tidak berlaku untuk model non-linear atau ensemble, sehingga pemilihan yang keliru dapat menghasilkan interpretasi yang bias atau tidak valid secara statistik.

Perbandingan kedua explainer ini dapat dilihat dari empat aspek utama: model target, kemampuan menangkap interaksi fitur, kecepatan komputasi, dan tingkat akurasi. TreeExplainer memang membutuhkan proses traversal pohon yang sedikit lebih intensif dibandingkan LinearExplainer, namun tetap dikategorikan cepat berkat optimasi底层 di balik layar. Sementara itu, LinearExplainer berjalan sangat cepat karena hanya melibatkan operasi vektor sederhana. Dari segi akurasi, keduanya menghasilkan nilai exact masing-masing untuk keluarga modelnya. Penting bagi peneliti di jenjang magister untuk memahami bahwa pemilihan explainer bukan sekadar pilihan teknis, melainkan bagian integral dari validitas metodologis penelitian. Menggunakan explainer yang tidak sesuai dengan arsitektur model dapat mengancam trustworthiness temuan analisis dan melemahkan argumentasi ablation study atau error analysis Anda.

### Inti yang Harus Ditekankan

- Pemilihan explainer harus selalu sinkron dengan arsitektur model (tree-based vs linear) agar nilai SHAP bersifat exact dan interpretabilitas terjaga secara metodologis.
- TreeExplainer unggul dalam menangkap interaksi fitur non-linear secara eksak, sedangkan LinearExplainer menawarkan kecepatan maksimal dengan asumsi additive linearity yang ketat.
- Kesalahan pemilihan explainer merupakan ancaman validitas serius yang dapat merusak trustworthiness explainable AI dan berdampak pada kualitas penarikan kesimpulan penelitian.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan mendasar antara TreeExplainer dan LinearExplainer, langkah selanjutnya adalah menerjemahkan nilai-nilai SHAP tersebut menjadi insight yang konkret dan actionable dalam praktik. Pada slide berikutnya, kita akan membedah studi kasus interpretasi model klasifikasi melalui visualisasi waterfall, lengkap dengan cara melacak kontribusi individu fitur terhadap prediksi akhir dan mengidentifikasi pola kontradiktif yang bernilai tinggi untuk pengembangan research question lanjutan.

---

## Slide 014 - SHAP: Contoh Interpretasi Model Klasifikasi

### Narasi

Setelah pada slide sebelumnya kita membedah perbedaan arsitektur dan cakupan antara TreeExplainer dan LinearExplainer dalam ekosistem SHAP, kini kita akan melihat bagaimana nilai-nilai SHAP tersebut dioperasionalkan secara konkret dalam interpretasi model klasifikasi. Sebagai studi kasus, mari kita fokus pada prediksi risiko kredit, di mana model bertugas memperkirakan probabilitas seorang nasabah akan mengalami gagal bayar. Dalam konteks ini, baseline atau rata-rata prediksi dari seluruh dataset ditetapkan sebesar 0,20, yang merefleksikan tingkat default historis pada populasi target. Ketika model memberikan prediksi sebesar 0,65 untuk satu nasabah tertentu, terdapat deviasi sebesar 0,45 yang harus diurai agar kita memahami faktor-faktor spesifik yang mendorong lonjakan risiko tersebut.

Diagram waterfall pada slide ini menguraikan kontribusi marginal masing-masing fitur terhadap pergeseran prediksi dari baseline menuju nilai akhir. Perhitungan dimulai dari base value 0,20. Fitur pendapatan rendah memberikan dampak positif sebesar +0,25, mengindikasikan bahwa penurunan pendapatan secara linear meningkatkan kecenderungan default. Riwayat keterlambatan pembayaran berkontribusi sebesar +0,15, menegaskan bahwa perilaku pembayaran masa lalu menjadi prediktor risiko yang paling stabil. Jumlah pinjaman yang besar menambah beban risiko sebesar +0,10, sementara lama bekerja yang stabil justru menurunkan risiko sebesar -0,05. Penjumlahan aljabar dari semua komponen ini menghasilkan prediksi akhir sebesar 0,65. Struktur waterfall ini memungkinkan peneliti untuk melacak secara transparan bagaimana setiap variabel memengaruhi keputusan model tanpa kehilangan jejak kuantitatifnya.

Dari perspektif penelitian tingkat magister, interpretasi waterfall ini bukan sekadar visualisasi pendukung, melainkan instrumen fundamental untuk analisis kritis dan validasi model. Pertama, fitur riwayat terlambat teridentifikasi sebagai faktor dominan yang secara statistik paling signifikan mendorong peningkatan skor risiko. Kedua, mekanisme ini membuktikan bahwa model tidak beroperasi sebagai black box; setiap keputusan dapat dilacak, diaudit, dan diverifikasi berdasarkan bobot kontribusi fitur. Ketiga, pendekatan ini sangat efektif untuk mendeteksi kasus kontradiktif atau anomali yang layak diteliti lebih dalam, misalnya nasabah dengan pendapatan tinggi namun tetap diprediksi berisiko default akibat kombinasi faktor lain seperti rasio utang-pendapatan yang ekstrem atau riwayat kredit bermasalah. Praktik ini secara langsung mendukung tahapan error analysis, ablation study, dan robustness testing yang menjadi standar metodologis dalam publikasi data mining berkualitas tinggi.

### Inti yang Harus Ditekankan

- Nilai SHAP dalam diagram waterfall berfungsi sebagai dekomposisi kuantitatif yang menjembatani baseline global dengan prediksi lokal individu, memungkinkan pelacakan sebab-akibat fitur secara eksak.
- Identifikasi fitur dominan dan pengujian kasus kontradiktif merupakan langkah esensial dalam error analysis dan validasi model untuk memastikan keandalan temuan penelitian.
- Transparansi penjelasan model melalui SHAP memperkuat prinsip trustworthy AI dan memenuhi tuntutan auditabilitas dalam sistem klasifikasi sensitif seperti perbankan dan keuangan digital.

### Transisi ke Slide Berikutnya

Meskipun SHAP menawarkan penjelasan berbasis teori permainan yang rigor dan konsisten, komputasinya dapat menjadi intensif terutama ketika berhadapan dengan dataset berskala besar atau model ensemble yang sangat kompleks. Untuk mengeksplorasi pendekatan alternatif yang bersifat model-agnostic namun berfokus pada penjelasan lokal dengan biaya komputasi yang lebih ringan, kita akan beralih ke konsep dasar LIME pada slide berikutnya.

---

## Slide 015 - LIME: Konsep Dasar

### Narasi

Setelah sebelumnya kita mengupas mekanisme SHAP dan melihat bagaimana nilai Shapley dapat menguraikan kontribusi setiap fitur terhadap prediksi model secara konsisten, kali ini kita beralih ke pendekatan lain yang sangat dominan dalam literatur Explainable AI, yaitu LIME atau Local Interpretable Model-agnostic Explanations. Berbeda dengan upaya menjelaskan perilaku model secara global, LIME berfokus pada penjelasan lokal. Ide dasarnya cukup elegan: meskipun model machine learning yang kita gunakan memiliki struktur yang sangat kompleks dan non-linear di tingkat global, perilaku model tersebut di sekitar satu instance atau titik data tertentu dapat didekati dengan sangat baik menggunakan model yang jauh lebih sederhana, biasanya regresi linear. Dengan kata lain, kita tidak mencoba membongkar seluruh "kotak hitam" sekaligus, melainkan hanya memetakan bagaimana model mengambil keputusan untuk kasus spesifik yang sedang kita teliti.

Mekanisme kerja LIME dapat diuraikan menjadi lima langkah sistematis yang perlu dipahami secara mendalam. Pertama, kita memilih satu instance target yang ingin dijelaskan prediksinya. Kedua, dilakukan proses sampling atau perturbasi pada fitur-fitur input di sekitar instance tersebut, misalnya dengan mengacak nilai fitur secara acak namun tetap mempertahankan distribusi data asli. Ketiga, hasil data yang telah diperturbasi tersebut dimasukkan kembali ke dalam model asli untuk mendapatkan prediksi aslinya. Keempat, kita melatih model sederhana, seperti regresi linear berbobot, di mana bobotnya mencerminkan seberapa dekat sampel perturbasi tersebut dengan instance target. Kelima, koefisien dari model sederhana inilah yang kemudian diinterpretasikan sebagai penjelasan lokal, menunjukkan fitur mana yang memberikan pengaruh positif atau negatif terhadap prediksi instance tersebut.

Pendekatan ini menawarkan dua keunggulan utama yang menjadikannya alat yang sangat praktis dalam penelitian data mining. Pertama, sifatnya yang model-agnostic memungkinkan LIME diaplikasikan pada hampir semua jenis algoritma, mulai dari random forest, gradient boosting, hingga deep learning, tanpa memerlukan akses ke struktur internal atau gradien model. Kedua, output penjelasannya berbentuk koefisien linear yang relatif mudah dipahami oleh peneliti maupun stakeholder non-teknis. Namun, sebagai peneliti tingkat magister, kita harus menyadari kelemahan fundamentalnya. Proses sampling dan perturbasi yang bersifat stokastik sering kali menghasilkan penjelasan yang tidak stabil. Artinya, jika kita menjalankan LIME berulang kali pada instance yang sama, urutan atau besaran kontribusi fitur bisa berubah-ubah. Ketidakstabilan ini merupakan catatan metodologis kritis yang harus dicantumkan dalam laporan penelitian ketika menggunakan LIME sebagai bagian dari analisis explainability.

### Inti yang Harus Ditekankan

- Penjelasan lokal berbasis pendekatan linear yang hanya memodelkan perilaku model di sekitar instance target.
- Sifat model-agnostic yang memberikan fleksibilitas tinggi untuk digunakan pada berbagai algoritma black-box.
- Keterbatasan stabilitas akibat proses sampling dan perturbasi yang bersifat probabilistik, sehingga memerlukan validasi ulang atau triangulasi dalam penelitian.

### Transisi ke Slide Berikutnya

Untuk memahami kapan sebaiknya kita mengandalkan LIME versus metode lain, mari kita bandingkan secara sistematis karakteristik teknis, konsistensi matematis, serta implikasi penggunaannya dalam penelitian bersama SHAP pada slide berikutnya.

---

## Slide 016 - LIME vs SHAP: Perbandingan

### Narasi

Setelah membahas mekanisme kerja LIME pada slide sebelumnya, di mana penjelasan lokal dihasilkan melalui aproksimasi model linear pada data hasil perturbasi acak, kini kita perlu mengevaluasi perbedaannya secara fundamental dengan SHAP. Perbedaan paling krusial terletak pada dasar teorinya. LIME mengandalkan heuristik lokal tanpa jaminan konsistensi matematis global, sedangkan SHAP dibangun di atas Shapley value dari teori permainan kooperatif. Pendekatan ini menjamin bahwa kontribusi setiap fitur dihitung berdasarkan rata-rata marginal across semua kemungkinan kombinasi subset fitur, sehingga menghasilkan konsistensi matematis yang kuat. Artinya, jika suatu fitur meningkatkan skor prediksi model, nilai kontribusinya dalam SHAP tidak akan pernah menurun saat fitur lain ditambahkan, sebuah properti konsistensi yang tidak dimiliki LIME.

Dari perspektif stabilitas dan kecepatan eksekusi, LIME rentan terhadap variasi akibat proses sampling acak, yang menyebabkan penjelasan bisa berubah-ubah antar percobaan meskipun parameter tetap. SHAP, khususnya varian TreeSHAP atau KernelSHAP yang dioptimalkan, menawarkan stabilitas jauh lebih tinggi dan komputasi yang lebih deterministik. Selain itu, SHAP memiliki keunggulan struktural dalam menyediakan penjelasan global melalui summary plot yang memvisualisasikan distribusi nilai SHAP untuk seluruh dataset, sekaligus mampu menangkap interaksi antar fitur secara implisit melalui perhitungan ekspektasi bersyarat. Sementara itu, LIME murni bersifat lokal dan keterbatasan model linear sederhana membuatnya sulit merepresentasikan hubungan non-linear kompleks antar variabel.

Dalam konteks penelitian tingkat magister yang menekankan rigor metodologis, pemilihan alat explainability harus didasarkan pada kebutuhan validasi hipotesis dan reproduktibilitas eksperimen. Gunakan SHAP sebagai standar utama dalam analisis Anda karena fondasi teoritisnya yang kokoh dan sifatnya yang konsisten. LIME dapat digunakan sebagai metode komplementer untuk triangulasi hasil. Poin kritis yang harus Anda laporkan dalam paper atau laporan penelitian adalah ketika terjadi divergensi antara penjelasan SHAP dan LIME. Divergensi ini bukan sekadar noise teknis, melainkan indikator penting tentang ketahanan model terhadap kompleksitas struktur fitur atau bias dalam ruang representasi. Catat dan analisis perbedaan tersebut sebagai bagian dari robustness analysis, yang akan menjadi kontribusi metodologis berharga dalam penelitian Anda.

### Inti yang Harus Ditekankan

- SHAP memiliki fondasi teoritis berbasis Shapley value yang menjamin konsistensi matematis, sementara LIME bersifat heuristik dan rentan terhadap fluktuasi akibat sampling acak.
- Untuk penelitian S2, utamakan SHAP sebagai metode primer, dan gunakan LIME hanya sebagai alat triangulasi atau pembanding validasi eksternal.
- Pelaporan divergensi antara SHAP dan LIME merupakan temuan metodologis yang signifikan; dokumentasikan sebagai bagian dari analisis stabilitas dan robustness model.

### Transisi ke Slide Berikutnya

Meskipun SHAP dan LIME efektif mengidentifikasi fitur mana yang paling berpengaruh pada prediksi, penjelasan berbasis atribusi fitur saja belum cukup untuk memberikan panduan tindakan nyata kepada pengguna akhir atau stakeholder bisnis. Oleh karena itu, kita akan beralih ke pendekatan yang menjawab pertanyaan praktis: perubahan minimal apa pada input yang harus dilakukan agar keputusan model berubah? Mari kita bahas Counterfactual Explanation.

---

## Slide 017 - Counterfactual Explanation

### Narasi

Setelah pembahasan mengenai perbandingan LIME dan SHAP pada slide sebelumnya, kita kini memasuki salah satu pendekatan interpretasi model yang paling dekat dengan kebutuhan pengguna akhir, yaitu Counterfactual Explanation. Metode ini menjawab pertanyaan kunci: perubahan minimal apa yang harus dilakukan pada fitur input agar prediksi model berubah? Berbeda dengan teknik atribusi yang hanya memberikan skor kontribusi setiap fitur, counterfactual memberikan rekomendasi aksi yang konkret dan dapat ditindaklanjuti. Sebagai ilustrasi, jika model memprediksi seorang nasabah berisiko gagal bayar, penjelasan counterfactual akan menyatakan bahwa jika pendapatan dinaikkan dari tiga juta menjadi lima juta rupiah, maka prediksi model akan berubah menjadi tidak gagal bayar. Pendekatan ini sangat relevan dalam konteks responsible AI karena menjembatani kesenjangan antara output model hitam dan keputusan operasional manusia.

Agar penjelasan ini dapat diandalkan dan diterapkan secara nyata, ia harus memenuhi empat karakteristik fundamental yang saling melengkapi. Pertama, bersifat actionable, yang berarti fitur yang dimodifikasi haruslah variabel yang secara realistis dapat diubah oleh subjek, seperti pendapatan, riwayat pembayaran, atau jumlah cicilan, bukan atribut statis seperti usia, jenis kelamin, atau lokasi kelahiran. Kedua, prinsip minimalitas memastikan bahwa perubahan yang diusulkan seminimal mungkin, sehingga rekomendasi tetap feasible dan tidak memberatkan pihak yang bersangkutan. Ketiga, sifat sparse menuntut agar hanya sedikit fitur yang diubah, menjaga kejelasan dan kemudahan pemahaman bagi pengambil keputusan tanpa menimbulkan efek domino yang rumit. Keempat, validitas menjamin bahwa setelah modifikasi dilakukan, prediksi model benar-benar bergeser sesuai target yang diinginkan, bukan sekadar perkiraan teoretis.

Dari sisi implementasi komputasional, proses pencarian counterfactual dapat dijalankan secara iteratif sesuai pseudocode yang tertera. Algoritma dimulai dari instance data awal x, kemudian secara bertahap memodifikasi fitur-fitur yang paling dominan pengaruhnya—yang dapat diidentifikasi menggunakan metrik seperti SHAP values sebagai panduan prioritas. Setiap kandidat solusi x' dievaluasi melalui model f() untuk memantau perubahan prediksi. Proses iterasi dihentikan ketika f(x') sama dengan target y_target dan jumlah modifikasi telah mencapai batas minimum. Dalam ekosistem Python, pendekatan ini umumnya diimplementasikan menggunakan teknik optimisasi numerik atau constraint-based search, sering kali memanfaatkan pustaka khusus seperti DiCE (Diverse Counterfactual Explanations) atau kerangka kerja kustom yang dibangun di atas pandas, NumPy, dan scikit-learn untuk menangani batasan domain, regularisasi sparsity, dan efisiensi komputasi pada dataset berskala besar.

Meskipun powerful, counterfactual explanation bukanlah akhir dari pipeline explainability. Keberadaan penjelasan yang terdengar logis dan intuitif belum tentu mencerminkan perilaku model secara akurat atau stabil terhadap noise data. Oleh karena itu, kita perlu menguji apakah penjelasan tersebut benar-benar menggambarkan mekanisme internal model, konsisten terhadap variasi input kecil, setia terhadap decision boundary, serta bermanfaat secara praktis. Aspek-aspek evaluasi inilah yang akan menjadi fokus pembahasan pada slide berikutnya, mengingat dalam penelitian tingkat magister, validasi kualitas penjelasan sama pentingnya dengan peningkatan akurasi model itu sendiri.

### Inti yang Harus Ditekankan

- Counterfactual explanation memberikan rekomendasi aksi konkret ("jika X berubah jadi Y, maka prediksi Z") yang lebih mudah ditindaklanjuti dibandingkan skor atribusi murni.
- Empat syarat mutlak: actionable, minimal, sparse, dan valid, menentukan apakah sebuah counterfactual layak digunakan dalam konteks bisnis, regulasi, atau audit model.
- Implementasinya memerlukan optimisasi iteratif yang menggabungkan identifikasi fitur penting dengan constraint satisfaction, sehingga menuntut pemahaman mendalam tentang struktur model, batasan domain data, dan trade-off antara kompleksitas komputasi serta kualitas penjelasan.

### Transisi ke Slide Berikutnya

Karena penjelasan yang intuitif belum menjamin keandalan ilmiah, langkah selanjutnya adalah menguji kualitas penjelasan tersebut secara empiris melalui empat dimensi evaluasi: validity, stability, faithfulness, dan usefulness. Mari kita bedah bagaimana masing-masing aspek ini diukur, mengapa visualisasi saja tidak cukup, dan bagaimana peneliti dapat merancang eksperimen yang rigor untuk membuktikan bahwa penjelasan model benar-benar trustworthy.

---

## Slide 018 - Evaluasi Kualitas Penjelasan

### Narasi

Setelah membahas mekanisme counterfactual explanation pada slide sebelumnya, penting untuk dipahami bahwa menghasilkan visualisasi atau teks penjelasan saja tidak cukup dalam praktik penelitian data mining modern. Explainability bukan sekadar seni membuat grafik yang menarik atau menampilkan skor fitur secara mentah, melainkan sebuah proses ilmiah yang harus divalidasi secara ketat. Ketika kita membangun atau menganalisis model prediktif, penjelasan yang dihasilkan harus melewati empat aspek evaluasi fundamental: Validity, Stability, Faithfulness, dan Usefulness.

Validity menguji apakah penjelasan tersebut benar-benar merepresentasikan mekanisme atau arsitektur model yang sebenarnya. Stability menilai konsistensi penjelasan; jika diberikan dua instance input yang sangat mirip, penjelasan yang muncul seharusnya tidak mengalami perubahan drastis. Faithfulness memastikan bahwa penjelasan tersebut setia terhadap perilaku prediksi model tanpa distorsi atau penyederhanaan yang menyesatkan. Terakhir, Usefulness berfokus pada dimensi praktis, yaitu apakah penjelasan ini benar-benar membantu pengguna, analis, atau stakeholder dalam memahami logika model dan mengambil keputusan yang tepat.

Implikasi dari kerangka evaluasi ini sangat signifikan bagi standar penelitian tingkat magister. Visualisasi SHAP atau LIME yang terlihat rapi dan intuitif belum tentu bermakna secara komputasional atau statistik. Sebuah penelitian yang berkualitas tidak boleh berhenti pada tahap demonstrasi visual, tetapi harus dilengkapi dengan protokol pengujian kuantitatif untuk mengukur kualitas penjelasan itu sendiri. Disarankan pula untuk melakukan analisis komparatif antar berbagai model atau antar metode explainability yang berbeda, guna membuktikan secara empiris bahwa pendekatan yang digunakan memberikan keunggulan yang terukur dalam hal validitas, stabilitas, kesetiaan, maupun kegunaan praktis.

### Inti yang Harus Ditekankan

- Explainability adalah proses evaluatif yang rigor, bukan sekadar pembuatan visualisasi atau laporan deskriptif.
- Keempat pilar evaluasi (Validity, Stability, Faithfulness, Usefulness) harus diukur secara kuantitatif dan dilaporkan sebagai bagian dari metodologi penelitian.
- Penelitian harus menyertakan uji banding antar model/metode dan menghindari klaim kualitatif tanpa bukti empiris yang mendukung.

### Transisi ke Slide Berikutnya

Untuk mendalami dua aspek pertama yang paling sering menjadi fokus pengujian empiris, mari kita lanjutkan ke pembahasan spesifik mengenai Validity dan Faithfulness, beserta langkah-langkah praktis untuk mengujinya menggunakan kode.

---

## Slide 019 - Validity dan Faithfulness dalam Explainability

### Narasi

Merujuk pada slide sebelumnya yang menekankan bahwa visualisasi penjelasan semata tidak cukup dan harus melalui proses evaluasi kritis, pada slide ini kita akan membedah dua pilar fundamental dalam kualitas penjelasan model: Validity dan Faithfulness. Keduanya merupakan indikator metodologis yang menentukan apakah sebuah interpretasi dapat dipercaya dan relevan secara ilmiah, terutama dalam konteks penelitian data mining tingkat magister yang menuntut rigor analitis.

Validitas (*Validity*) mengacu pada kesesuaian antara penjelasan yang dihasilkan dengan mekanisme internal atau arsitektur aktual model. Sebuah penjelasan dinyatakan valid ketika ia berhasil merepresentasikan hubungan fungsional yang benar-benar digunakan oleh model dalam memproses data. Misalnya, jika model secara internal memanfaatkan interaksi non-linear antar fitur A dan fitur B, maka metode penjelasan yang hanya melaporkan kontribusi marginal masing-masing fitur secara terpisah tanpa menyoroti sinergi keduanya dianggap kurang valid. Dalam praktik penelitian, validitas menuntut pemahaman mendalam tentang struktur model agar interpretasi tidak terjebak pada penyederhanaan yang menyesatkan atau mengabaikan dependency antar variabel.

Di sisi lain, *Faithfulness* atau kesetiaan mengukur sejauh mana penjelasan tersebut benar-benar mengikuti perilaku prediksi model secara akurat. Prinsip utamanya adalah konsistensi kausal: jika suatu fitur diklaim memiliki pengaruh besar terhadap prediksi, maka manipulasi pada fitur tersebut seharusnya menghasilkan perubahan signifikan pada keluaran model. Uji empiris yang paling langsung untuk mengukur faithfulness adalah teknik *feature ablation* atau penghapusan parsial. Ketika fitur dengan kontribusi tertinggi diidentifikasi, kemudian nilainya diubah menjadi nilai baseline atau noise, perubahan prediksi model menjadi tolok ukur utama. Jika prediksi tetap stabil meskipun fitur "penting" tersebut telah dinonaktifkan, maka penjelasan awal tersebut gagal memenuhi kriteria faithfulness.

Langkah verifikasi ini dapat dioperasionalkan dalam praktikum menggunakan prosedur sistematis yang tercantum pada slide. Pertama, hitung nilai SHAP untuk instance data target. Kedua, pilih fitur yang memberikan skor SHAP terbesar. Ketiga, ubah nilai fitur tersebut menjadi nilai referensi atau distribusi noise. Keempat, amati perubahan prediksi model setelah modifikasi. Kelima, jika perubahan prediksi tidak signifikan, penjelasan yang dihasilkan perlu dipertanyakan ulang. Pendekatan ini melatih kebiasaan akademik untuk melakukan *sanity check* berbasis eksperimen, menolak penerimaan mentah-mentah terhadap output alat eksplanatori, dan membangun argumen yang didukung oleh bukti kuantitatif.

Secara keseluruhan, Validity dan Faithfulness berfungsi sebagai filter kualitas yang memisahkan antara visualisasi yang estetis dengan interpretasi yang ilmiah. Tanpa validitas, penjelasan kehilangan landasan pada logika model. Tanpa faithfulness, penjelasan kehilangan daya prediktif dan kausalitas. Keduanya menjadi standar wajib dalam merancang eksperimen *trustworthy data mining* yang rigor, transparan, dan dapat direplikasi.

### Inti yang Harus Ditekankan

- Validitas menuntut penjelasan selaras dengan mekanisme internal model, bukan sekadar representasi permukaan atau korelasi statistik belaka.
- Faithfulness diuji melalui eksperimen ablation: jika fitur "penting" dinonaktifkan lalu prediksi tidak berubah secara signifikan, penjelasan tersebut tidak setia terhadap perilaku model.
- Hasil alat eksplanatori seperti SHAP atau LIME wajib diverifikasi secara empiris sebelum digunakan sebagai dasar pengambilan keputusan atau klaim penelitian.

### Transisi ke Slide Berikutnya

Setelah memastikan penjelasan bersifat valid dan faithful, langkah selanjutnya adalah memeriksa konsistensi temporalnya. Pada slide berikutnya, kita akan membahas bagaimana menguji stabilitas penjelasan ketika input data mengalami variasi kecil, serta metrik matematis dan penyebab umum ketidakstabilan dalam metode eksplanatori berbasis sampling dan model probabilistik.

---

## Slide 020 - Stability Penjelasan

### Narasi

Setelah kita membahas validitas dan kesetiaan penjelasan pada slide sebelumnya, properti ketiga yang wajib diuji dalam explainable AI adalah stabilitas. Stability mengukur konsistensi penjelasan ketika input mengalami perubahan kecil. Secara fundamental, model yang robust seharusnya memberikan interpretasi yang serupa untuk dua instance yang secara numerik atau semantik hampir identik. Jika penjelasan berubah drastis hanya karena fluktuasi nilai fitur yang sangat minor, maka kepercayaan terhadap interpretasi tersebut menjadi rendah, terutama dalam konteks penelitian tingkat magister yang menuntut replikabilitas dan objektivitas hasil analisis.

Untuk menguji stabilitas secara empiris, kita dapat mengikuti prosedur sistematis yang tercantum pada slide. Pertama, pilih satu instance data tertentu dari dataset. Kedua, tambahkan noise atau gangguan kecil pada fitur-fitur inputnya. Ketiga, hitung ulang skor penjelasan menggunakan metode seperti SHAP atau LIME pada versi data yang telah dimodifikasi. Keempat, bandingkan jarak antar vektor penjelasan antara data asli dan data yang diberi noise. Sebagai metrik kuantitatif, kita dapat menggunakan rumus sederhana berikut: `stability = 1 - normalized_distance(explanation(x), explanation(x + epsilon))`. Di sini, epsilon merepresentasikan besaran noise yang ditambahkan, sedangkan normalized_distance biasanya dihitung menggunakan cosine similarity atau Euclidean distance yang diskalakan ke rentang [0,1]. Nilai stabilitas mendekati 1 menunjukkan konsistensi tinggi, sementara nilai yang mendekati 0 menandakan penjelasan sangat sensitif terhadap gangguan kecil dan perlu diwaspadai.

Terdapat beberapa faktor utama yang sering menyebabkan ketidakstabilan dalam penjelasan model. Pertama, model yang overfit terhadap noise pada data pelatihan cenderung menghasilkan permukaan decision boundary yang rapuh, sehingga perubahan kecil pada input langsung mengubah output dan interpretasinya. Kedua, metode penjelasan berbasis sampling lokal seperti LIME secara inheren bersifat stokastik karena bergantung pada generasi sampel acak di sekitar instance target; variasi dalam proses sampling ini dapat menghasilkan bobot fitur yang berbeda-beda setiap kali dijalankan. Ketiga, model deep learning yang menggunakan mekanisme non-deterministik seperti dropout atau weight initialization acak juga berkontribusi pada fluktuasi penjelasan, karena representasi internal model itu sendiri tidak stabil meskipun inputnya tetap.

Dalam praktik penelitian data mining, pengujian stabilitas bukan sekadar formalitas, melainkan langkah kritis sebelum mengklaim bahwa sebuah penjelasan dapat digunakan untuk debugging model atau pengambilan keputusan. Penjelasan yang tidak stabil akan sulit diverifikasi dan berpotensi menyesatkan stakeholder. Oleh karena itu, peneliti disarankan untuk melakukan averaging score dari beberapa iterasi penambahan noise atau mengganti metode penjelasan dengan yang lebih deterministik jika memungkinkan. Dengan memastikan stabilitas terlebih dahulu, kita mempersiapkan fondasi yang kuat untuk mengevaluasi aspek berikutnya, yaitu seberapa berguna penjelasan tersebut bagi pengguna akhir.

### Inti yang Harus Ditekankan

- Stability menilai konsistensi penjelasan pada input yang sedikit dimodifikasi; penjelasan yang berfluktuasi drastis akibat noise kecil dianggap tidak reliabel.
- Metrik kuantitatif `1 - normalized_distance` memberikan ukuran objektif untuk membandingkan vektor penjelasan asli versus penjelasan setelah perturbasi.
- Ketidakstabilan umumnya berasal dari overfitting model, sifat stokastik metode sampling seperti LIME, atau komponen non-deterministik dalam arsitektur deep learning.
- Pada level riset S2, stabilitas harus divalidasi secara eksperimental sebelum penjelasan diklaim faithful atau siap digunakan untuk tindakan nyata.

### Transisi ke Slide Berikutnya

Setelah memastikan bahwa penjelasan konsisten dan stabil terhadap variasi input kecil, langkah selanjutnya adalah menilai apakah interpretasi tersebut benar-benar bermanfaat dalam skenario dunia nyata. Kita akan beralih ke konsep usefulness, di mana fokus bergeser dari karakteristik teknis penjelasan menuju dampak praktisnya terhadap debugging model, kepercayaan pengguna, dan kemampuan untuk mengambil tindakan perbaikan.

---

## Slide 021 - Usefulness Penjelasan

### Narasi

Setelah kita mengevaluasi stabilitas penjelasan pada slide sebelumnya, di mana fokusnya adalah konsistensi output metode seperti SHAP atau LIME terhadap variasi kecil pada input, kini kita beralih ke dimensi yang lebih aplikatif dan berorientasi pada dampak, yaitu usefulness atau kegunaan. Sebuah penjelasan mungkin saja stabil secara matematis, namun tetap tidak bernilai tinggi jika tidak dapat diterjemahkan menjadi tindakan nyata. Dalam praktik data mining tingkat lanjut, penjelasan dikategorikan useful apabila mampu mendorong aksi spesifik, baik itu untuk proses debugging arsitektur model, membantu stakeholder dalam mengambil keputusan penerimaan atau penolasan prediksi, maupun mengungkap kelemahan sistemik yang masih dapat diperbaiki sebelum deployment.

Mari kita bedah tiga skenario empiris yang sering menjadi benchmark keberhasilan explainability. Pertama, dalam domain klinis, dokter mungkin menolak prediksi model mengenai risiko sepsis. Jika penjelasan yang disajikan menunjukkan bahwa fitur-fitur vital pasien berada dalam rentang fisiologis normal, penjelasan ini dianggap useful karena memberikan justifikasi berbasis bukti yang selaras dengan protokol medis. Kedua, bagi praktisi data science, usefulness termanifestasi saat teknik lokal seperti SHAP berhasil mengidentifikasi feature leakage, misalnya variabel yang sebenarnya merupakan turunan dari outcome justru terselip sebagai input. Temuan ini bersifat highly actionable untuk melakukan pembersihan dataset atau restrukturisasi pipeline preprocessing. Ketiga, di sektor layanan keuangan, penerapan counterfactual explanation menjadi standar etis. Daripada sekadar menyatakan penolakan kredit, penjelasan ini memberikan roadmap eksplisit kepada nasabah mengenai atribut apa yang perlu diubah agar skor kelayakan meningkat, sehingga menciptakan transparansi yang konstruktif dan mematuhi regulasi hak penjelasan.

Poin kritis yang harus menjadi perhatian utama dalam penelitian jenjang magister adalah bahwa penjelasan yang tidak menghasilkan tindakan nyata hanyalah sebuah artifact visual atau pelengkap estetika, bukan kontribusi ilmiah yang substansial. Pada proyek penelitian Anda, aspek usefulness ini harus menjadi bagian integral dari metodologi evaluasi dan diskusi. Anda tidak cukup hanya melaporkan nilai metrik interpretabilitas atau menyajikan diagram dendrogram; Anda wajib mendokumentasikan langkah rekayasa yang diambil berdasarkan insight explainability tersebut. Apakah model diretrain setelah menemukan bias kategori? Apakah fitur redundan dihapus karena kebocoran informasi? Atau apakah decision boundary disesuaikan berdasarkan feedback pengguna? Jelaskan secara eksplisit bagaimana hasil explainability menerjemahkan analisis teoretis menjadi iterasi model yang lebih robust dan accountable.

### Inti yang Harus Ditekankan

- Usefulness mengukur kemampuan penjelasan untuk memicu tindakan nyata, bukan sekadar memenuhi kebutuhan visualisasi.
- Contoh implementasi mencakup validasi klinis, deteksi feature leakage oleh data scientist, dan pemberian panduan perbaikan skor melalui counterfactual.
- Dalam riset S2, jelaskan secara eksplisit langkah perbaikan model atau kebijakan yang diambil berdasarkan temuan explainability; hindari penjelasan yang hanya bersifat deskriptif.

### Transisi ke Slide Berikutnya

Usefulness memang menjadi tolak ukur praktis dari setiap metode interpretasi, namun ia sendiri hanyalah satu dari beberapa pilar yang membangun ekosistem AI yang bertanggung jawab. Untuk memahami bagaimana penjelasan berintegrasi dengan prinsip-prinsip keamanan, keadilan, dan akuntabilitas secara holistik, mari kita lanjutkan ke dimensi-dimensi utama yang membentuk fondasi Trustworthy Data Mining pada slide berikutnya.

---

## Slide 022 - Trustworthy Data Mining: Dimensi-dimensi Utama

### Narasi

Trustworthy Data Mining merupakan kerangka kerja holistik yang memastikan bahwa sistem pembelajaran mesin tidak hanya akurat secara statistik, tetapi juga aman, etis, dan dapat diandalkan saat diterapkan pada masalah dunia nyata. Dalam konteks penelitian tingkat magister, kita tidak lagi berfokus semata-mata pada peningkatan skor akurasi atau AUC, melainkan mengevaluasi bagaimana model berperilaku di bawah berbagai kondisi ketidakpastian dan tekanan sosial-teknis. Slide ini menyajikan enam dimensi utama yang saling terkait dalam membangun kepercayaan terhadap sebuah pipeline data mining.

Mari kita bedah setiap dimensi tersebut secara sistematis. Pertama, **Robustness** mengacu pada kemampuan model untuk mempertahankan performa prediktifnya meskipun input mengalami gangguan, seperti penambahan noise, pergeseran distribusi data, atau serangan adversarial yang dirancang khusus untuk menipu model. Kedua, **Fairness** menuntut agar keputusan model tidak mendiskriminasi kelompok demografis atau kategorikal tertentu, yang sering kali berakar pada **Dataset Bias**. Ketika data pelatihan tidak representatif terhadap populasi target, model akan mewarisi dan bahkan memperkuat ketimpangan historis yang ada dalam data. Ketiga, **Privacy** menjamin bahwa informasi sensitif atau pola individu tidak bocor melalui parameter model, terutama penting ketika menangani data medis, finansial, atau identitas pribadi. Keempat, **Explainability** memastikan bahwa mekanisme pengambilan keputusan model dapat ditelusuri dan dipahami oleh pemangku kepentingan, yang secara langsung berkaitan dengan konsep *usefulness* dari penjelasan yang telah dibahas pada slide sebelumnya. Kelima, **Accountability** menetapkan rantai tanggung jawab yang jelas, memastikan bahwa selalu ada pihak manusia atau entitas hukum yang bertanggung jawab atas konsekuensi prediksi model, terutama ketika terjadi kesalahan fatal.

Dari perspektif metodologi penelitian, keenam dimensi ini harus diintegrasikan ke dalam desain eksperimen Anda. Pengujian robustness sangat erat kaitannya dengan konsep *concept drift* dan analisis generalisasi yang telah kita bahas pada pertemuan-pertemuan sebelumnya. Sementara itu, aspek privasi akan kita gali lebih mendalam pada sesi berikutnya mengenai *privacy-preserving learning*. Pada tahap penelitian skripsi atau tesis, mahasiswa diharapkan tidak hanya melaporkan metrik performa standar, tetapi juga melakukan evaluasi multidimensi ini—mulai dari audit bias, uji ketahanan terhadap perturbasi, hingga dokumentasi mekanisme akuntabilitas—sehingga kontribusi penelitian memiliki dampak yang berkelanjutan dan dapat dipertanggungjawabkan secara ilmiah maupun sosial.

### Inti yang Harus Ditekankan

- Trustworthy Data Mining adalah kerangka multidimensi yang wajib dievaluasi alongside metrik performa tradisional dalam penelitian tingkat S2.
- Setiap dimensi memiliki akar masalah dan teknik mitigasi spesifik: Dataset Bias memicu ketidakadilan, Noise/Distribution Shift menguji Robustness, dan kebocoran data mengancam Privacy.
- Explainability tanpa Accountability dan Fairness bersifat parsial; keempatnya harus berjalan sinergis untuk menghasilkan sistem yang benar-benar dapat dipercaya.
- Integrasi dimensi-dimensi ini ke dalam protokol eksperimen (ablation study, error analysis, robustness testing) menjadi pembeda utama antara implementasi biasa dan penelitian berkualitas tinggi.

### Transisi ke Slide Berikutnya

Setelah memahami peta besar dimensi trustworthiness, langkah selanjutnya adalah mendalami fondasi pertama secara teknis, yaitu Robustness. Kita akan melihat definisi operasionalnya, jenis-jenis pengujian yang umum digunakan, serta bagaimana mengukur ketahanan model terhadap noise dan perturbation secara empiris menggunakan Python dan scikit-learn.

---

## Slide 023 - Robustness: Definisi dan Pengujian

### Narasi

Robustness atau ketahanan model merupakan salah satu pilar utama dalam trustworthy data mining yang telah kita singgung pada dimensi-dimensi sebelumnya. Secara fundamental, robustness mengukur kemampuan sebuah model untuk mempertahankan kinerja prediksi yang stabil ketika menghadapi kondisi input yang tidak ideal atau berubah. Dalam konteks penelitian tingkat magister, robustness tidak lagi dianggap sebagai fitur tambahan, melainkan syarat validitas empiris. Model dikatakan robust jika ia tetap menghasilkan prediksi yang akurat meskipun input mengandung noise acak, mengalami pergeseran distribusi data, terpapar adversarial perturbation, atau bahkan terdapat bagian data yang hilang atau tidak lengkap. Ketahanan ini menguji batas generalisasi model di luar asumsi i.i.d. yang sering kali terlalu idealistik di dunia nyata.

Untuk mengevaluasi ketahanan tersebut, peneliti perlu merancang skenario pengujian yang terstruktur berdasarkan empat jenis gangguan utama. Pertama, noise robustness berfokus pada penambahan gangguan statistik kecil pada fitur numerik, seperti Gaussian noise, yang mensimulasikan kesalahan pengukuran atau sensor. Kedua, perturbation melibatkan perubahan nilai fitur secara deterministik atau stokastik dalam skala kecil, misalnya modifikasi sebesar epsilon pada rentang tertentu. Ketiga, adversarial testing mensimulasikan serangan yang sengaja dirancang oleh penyerang untuk memanipulasi fitur agar model membuat kesalahan prediksi, sehingga menguji kerentanan model terhadap manipulasi cerdas. Keempat, distribution shift menguji model pada data yang berasal dari domain atau populasi berbeda dari data training, yang merepresentasikan konsep drift atau perubahan karakteristik lingkungan operasional seiring waktu.

Pengujian-pengujian ini harus direncanakan sejak fase desain eksperimen, bukan ditambahkan setelah model selesai dilatih. Dengan mengidentifikasi jenis gangguan yang paling relevan dengan masalah bisnis atau riset yang dihadapi, mahasiswa dapat memilih protokol evaluasi yang tepat. Hasil pengujian akan menunjukkan apakah model hanya belajar pola permukaan yang rapuh, atau benar-benar menangkap representasi fitur yang invariant terhadap variasi input. Hal ini menjadi dasar objektif untuk menilai kelayakan model sebelum diterapkan pada sistem produksi atau dipublikasikan dalam publikasi ilmiah.

### Inti yang Harus Ditekankan

- Robustness adalah indikator kualitas model yang menguji stabilitas prediksi di bawah kondisi input yang terdegradasi atau berubah, bukan sekadar akurasi pada data bersih.
- Empat kategori pengujian wajib dipahami dan dipilih sesuai konteks riset: noise, perturbation kecil, adversarial, dan distribution shift, masing-masing mewakili ancaman real-world yang berbeda.
- Evaluasi robustness bersifat eksploratif dan analitis; peneliti harus mampu mengaitkan jenis gangguan dengan mekanisme pembelajaran model serta melaporkan degradasi performa secara transparan.

### Transisi ke Slide Berikutnya

Setelah memahami definisi dan klasifikasi jenis pengujian robustness, langkah selanjutnya adalah menerjemahkan konsep tersebut ke dalam prosedur evaluasi yang terukur. Pada slide berikutnya, kita akan membahas workflow praktis untuk menjalankan pengujian robustness, mulai dari teknik pembuatan data perturbasi, perhitungan metrik degradasi performa, hingga standar pelaporan yang diharapkan dalam paper penelitian.

---

## Slide 024 - Robustness: Workflow Evaluasi

### Narasi

Setelah membahas definisi dan klasifikasi jenis pengujian robustness pada slide sebelumnya, sekarang kita turunkan ke dalam alur kerja evaluasi yang terstruktur dan dapat direplikasi. Workflow ini dimulai dengan melatih model secara konvensional pada training set, dilanjutkan dengan menyiapkan test set asli atau *clean test set* sebagai referensi baseline. Tahap inti terletak pada pembuatan subset data terperturbasi. Dalam implementasinya, Anda dapat menambahkan noise statistik seperti Gaussian atau uniform pada fitur numerik, mengacak nilai fitur kategorikal untuk mensimulasikan kesalahan pencatatan atau sensor, serta menyusun *adversarial examples* sederhana yang mengubah fitur kritis guna memaksa model membuat prediksi keliru. Setelah kedua dataset siap, jalankan inference dan hitung metrik evaluasi yang sama pada data bersih maupun data terperturbasi, lalu lakukan perbandingan langsung untuk mengidentifikasi adanya penurunan stabilitas.

Untuk mengonversi hasil perbandingan tersebut menjadi angka yang dapat dilaporkan secara ilmiah, gunakan dua rumus kuantitatif yang tertera pada slide. Variabel *degradation* dihitung sebagai selisih antara performa pada data bersih dikurangi performa pada data terperturbasi. Perlu dicatat bahwa formula ini berlaku optimal untuk metrik yang bernilai lebih tinggi lebih baik (seperti Accuracy, Precision, Recall, atau F1-Score). Jika nilai degradasi positif, artinya terjadi penurunan performa akibat gangguan. Selanjutnya, *robustness score* dihitung dengan membagi nilai degradasi terhadap performa baseline, lalu dikurangkan dari satu. Skor ini memberikan proporsi ketahanan model; nilai yang mendekati 1 menandakan model sangat stabil, sementara penurunan signifikan mengungkap kerentanan arsitektural atau bias dalam pembelajaran fitur.

Dalam konteks penulisan paper penelitian jenjang magister atau konferensi internasional, pelaporan robustness harus memenuhi standar transparansi metodologis. Jangan hanya menyajikan satu titik data tunggal; laporkan metrik secara eksplisit untuk kondisi *clean test* dan *perturbed test*, serta uji beberapa tingkat kekuatan perturbasi (misalnya deviasi standar noise yang bervariasi) agar tren degradasi dapat dianalisis secara gradien. Selain itu, lakukan analisis granular untuk mengidentifikasi fitur mana yang paling sensitif terhadap perubahan tertentu. Temuan ini sering kali menjadi landasan bagi *error analysis* atau *feature importance review*, sekaligus memperkuat klaim bahwa model telah divalidasi secara rigor sebelum diusulkan untuk deployment atau publikasi akademik.

### Inti yang Harus Ditekankan

- Evaluasi robustness bukan sekadar tes tambahan, melainkan bagian integral dari validasi metodologis yang harus mengikuti alur sistematis: training → baseline testing → perturbasi terkontrol → perbandingan metrik.
- Gunakan formula degradasi dan robustness score secara konsisten, pastikan kesesuaian arah optimasi metrik (maximization vs minimization) saat menghitung selisih performa.
- Pelaporan paper wajib menyertakan multi-level perturbasi, tabel perbandingan clean vs perturbed, serta analisis vulnerabilitas fitur untuk mendukung argumentasi penelitian tingkat S2.

### Transisi ke Slide Berikutnya

Dengan workflow evaluasi robustness yang telah terstandarisasi, Anda telah memiliki bukti empiris mengenai stabilitas model terhadap gangguan input dan distribusi. Namun, ketahanan teknis saja tidak cukup untuk menjamin keandalan sistem di lingkungan sosial. Langkah selanjutnya dalam kerangka data mining yang bertanggung jawab adalah memeriksa apakah model tetap adil dan tidak diskriminatif terhadap kelompok demografis tertentu, yang akan kita bedah pada slide berikutnya mengenai konsep dasar fairness.

---

## Slide 025 - Fairness: Definisi dan Konsep Dasar

### Narasi

Setelah mengevaluasi stabilitas model melalui analisis robustness pada slide sebelumnya, langkah kritis berikutnya dalam membangun trustworthy data mining adalah memastikan bahwa model tidak hanya tahan terhadap noise, tetapi juga menghasilkan keputusan yang adil secara statistik dan sosial. Fairness dalam konteks data mining didefinisikan sebagai prinsip bahwa algoritma tidak boleh memunculkan outcome yang diskriminatif berdasarkan atribut sensitif tertentu. Atribut-atribut ini mencakup usia, gender, ras, agama, disabilitas, maupun status sosial ekonomi, yang secara formal dalam literatur etika komputasi dan regulasi privasi disebut sebagai protected attribute. Ketika model belajar pola dari data historis, adanya protected attribute dapat memicu bias sistemik jika tidak dikelola dengan kerangka evaluasi yang tepat.

Karena keadilan bersifat multidimensi dan tidak dapat diukur dengan satu rumus tunggal, komunitas riset mengembangkan berbagai notion fairness untuk mengoperasionalkannya secara matematis. Pada tabel slide ini, terdapat empat pendekatan utama yang sering menjadi baseline dalam penelitian fair ML. Pertama, demographic parity menuntut agar probabilitas prediksi positif sama lintas kelompok, tanpa mempertimbangkan label ground truth. Kedua, equalized odds mensyaratkan kesamaan pada true positive rate maupun false positive rate antar kelompok, sehingga rasio kesalahan klasifikasi tidak terdistribusi secara timpang. Ketiga, equal opportunity merupakan relaksasi dari equalized odds yang hanya berfokus pada kesamaan true positive rate, menjamin bahwa individu yang memenuhi kualifikasi seharusnya memiliki peluang setara untuk diklasifikasikan positif. Keempat, individual fairness bergeser dari perspektif agregat kelompok ke tingkat instance, menyatakan bahwa entitas atau sampel data yang serupa secara fitur harus diperlakukan secara serupa oleh model.

Poin krusial yang perlu diingat adalah tidak ada satu definisi atau notion fairness yang bersifat universal dan mutlak. Pemilihan konsep keadilan sangat bergantung pada konteks domain aplikasi, kerangka hukum yang berlaku, serta konsekuensi nyata dari setiap keputusan yang dihasilkan model. Sebagai peneliti tingkat magister, Anda dituntut untuk mampu memetakan trade-off antar notion ini, memahami mengapa satu metrik mungkin lebih etis daripada lainnya dalam skenario tertentu, serta merumuskan hipotesis penelitian yang jelas mengenai fairness yang ingin dioptimalkan. Evaluasi fairness bukan sekadar menambahkan kolom metrik tambahan, melainkan memerlukan pemahaman mendalam tentang bagaimana bias terakumulasi selama pipeline data mining.

### Inti yang Harus Ditekankan

- Fairness menuntut model bebas dari diskriminasi berbasis protected attribute seperti gender, ras, usia, atau status sosial.
- Tidak ada notion fairness yang universal; pemilihan antara demographic parity, equalized odds, equal opportunity, atau individual fairness harus didasarkan pada konteks domain dan dampak sosial keputusan model.
- Dalam penelitian S2, mahasiswa wajib mampu justifikasi pemilihan metrik fairness, menganalisis trade-off antar notion, dan mengintegrasikannya ke dalam desain eksperimen yang rigor.

### Transisi ke Slide Berikutnya

Memahami definisi dan notion fairness membuka pertanyaan mendasar: dari mana bias itu berasal sebelum sampai ke tahap evaluasi? Pada slide berikutnya, kita akan mengurai sumber-sumber dataset bias yang sering kali menjadi akar permasalahan ketidakadilan model, mulai dari sampling hingga historical bias, serta dampaknya terhadap performa prediksi.

---

## Slide 026 - Dataset Bias: Sumber dan Dampak

### Narasi

Memahami konsep fairness pada slide sebelumnya hanyalah fondasi teoretis. Untuk menerapkannya secara metodologis, kita harus terlebih dahulu melacak asal-usul bias yang sering kali sudah tertanam dalam data sebelum proses pelatihan model dimulai. Bias dataset bukanlah kesalahan acak, melainkan produk sistematis dari berbagai tahap dalam siklus kehidupan data. Identifikasi sumber bias menjadi prasyarat penting sebelum memilih metrik fairness atau merancang strategi mitigasi.

Terdapat lima sumber utama bias yang perlu dikenali. Sampling bias terjadi ketika distribusi sampel tidak mencerminkan karakteristik populasi target, sehingga model hanya belajar dari subset yang terbatas. Label bias muncul ketika anotasi atau ground truth dipengaruhi oleh subjektivitas manusia, inkonsistensi penilai, atau norma sosial yang bias, yang kemudian diajarkan sebagai kebenaran absolut kepada algoritma. Measurement bias terjadi ketika instrumen atau protokol pengukuran fitur bervariasi antar kelompok, misalnya sensor biometrik yang kurang akurat pada jenis kulit tertentu atau kuesioner yang diterjemahkan secara tidak setara. Historical bias merefleksikan struktur ketimpangan masa lalu yang masih tersimpan dalam rekam jejak data, sementara selection bias terjadi akibat mekanisme pengumpulan yang secara sistematis memfilter atau mengecualikan kelompok tertentu, seperti data yang hanya dikumpulkan melalui platform digital yang mengabaikan populasi tanpa akses internet.

Dampak dari kelima sumber bias ini bersifat fundamental karena model machine learning bekerja berdasarkan optimisasi statistik, bukan penilaian etis. Ketika data mengandung bias, model akan mempelajari pola diskriminatif tersebut sebagai hubungan kausal yang valid dan dapat digeneralisasi. Akibatnya, prediksi menjadi tidak adil bagi kelompok yang kurang terwakili. Bahaya terbesar terletak pada ilusi performa: akurasi agregat model bisa terlihat sangat tinggi, namun jika dievaluasi per-kelompok, performanya bisa jatuh drastis. Hal ini menunjukkan bahwa metrik evaluasi tradisional sering kali gagal menangkap disparitas yang sebenarnya dan dapat menyesatkan keputusan penelitian maupun implementasi.

Sebagai contoh nyata, pertimbangkan model rekrutmen yang dilatih menggunakan data historis kinerja karyawan lama. Jika rekruitmen perusahaan selama puluhan tahun didominasi oleh satu gender tertentu, model akan mengasosiasikan atribut, latar belakang pendidikan, atau pola pengalaman yang umum dimiliki oleh gender tersebut dengan kompetensi kerja. Model tidak memahami konteks kompetensi secara mendalam, melainkan hanya meniru preferensi historis tersebut sebagai fitur prediktif yang kuat. Tanpa intervensi, sistem ini akan terus menghasilkan rekomendasi yang diskriminatif, memperkuat stereotip struktural, dan menutup peluang bagi kandidat yang sebenarnya berkualitas.

### Inti yang Harus Ditekankan

- Bias dataset bersumber dari proses pengumpulan, pengukuran, dan pelabelan data, bukan dari kelemahan algoritma semata.
- Model cenderung mengadopsi bias sebagai pola statistik yang valid, sehingga akurasi global dapat menutupi disparitas performa antar kelompok demografis.
- Pemahaman mendalam tentang sumber bias merupakan langkah wajib sebelum menerapkan metrik fairness atau merancang eksperimen yang bertanggung jawab.

### Transisi ke Slide Berikutnya

Setelah mengidentifikasi sumber dan dampak bias, langkah selanjutnya adalah mengungkap bias tersebut secara empiris sebelum masuk ke tahap mitigasi. Pada slide berikutnya, kita akan membahas metodologi praktis untuk mendeteksi bias pada dataset, mulai dari pembuatan profil demografis, evaluasi performa per-kelompok, hingga analisis kebocoran fitur proxy menggunakan tools seperti pandas dan scikit-learn.

---

## Slide 027 - Bias pada Dataset: Cara Mendeteksi

### Narasi

Setelah mengidentifikasi sumber dan dampak potensial dari bias pada dataset di slide sebelumnya, langkah kritis berikutnya adalah menerapkan prosedur deteksi yang sistematis dan terukur. Deteksi bias tidak boleh hanya bertumpu pada metrik evaluasi global seperti akurasi keseluruhan, karena metrik tersebut sering kali menetralkan ketidakadilan yang terjadi pada subkelompok minoritas. Pendekatan yang lebih robust dimulai dengan pembuatan profil demografis data. Kita harus menghitung proporsi representasi masing-masing kelompok pada setiap fitur yang relevan untuk memetakan ketimpangan distribusi sejak tahap exploratory data analysis.

Evaluasi performa model wajib dilakukan secara per-kelompok. Seperti yang tertuang dalam catatan slide, bandingkan akurasi keseluruhan dengan akurasi yang dihitung terpisah untuk setiap kelompok demografis. Gunakan confusion matrix per kelompok untuk mengurai komponen True Positive, False Positive, True Negative, dan False Negative secara spesifik. Perhatikan khususnya False Positive Rate (FPR) per kelompok, karena perbedaan FPR yang signifikan antar kelompok sering kali mengindikasikan bias diskriminatif yang berdampak langsung pada keputusan bisnis atau sosial. Selain itu, lakukan analisis sensitivitas prediksi dengan memanipulasi atribut sensitif pada test set. Coba hapus atau acak nilai atribut sensitif tersebut, lalu jalankan inference ulang. Jika hasil prediksi berubah drastis hanya karena manipulasi atribut sensitif, ini membuktikan bahwa model sangat bergantung pada variabel tersebut.

Visualisasi juga menjadi instrumen diagnostik yang tidak kalah vital. Plot distribusi join antara atribut sensitif dan label target dapat mengungkap pola tersembunyi, seperti skewness atau klasterisasi yang mengindikasikan bias historis atau kesalahan sampling. Perlu ditekankan bahwa bias dapat tetap hadir meskipun atribut sensitif sama sekali tidak dimasukkan sebagai fitur input. Model machine learning memiliki kemampuan tinggi untuk menemukan fitur proxy. Sebagai contoh, kode pos, riwayat transaksi, atau tingkat pendidikan bisa berkorelasi kuat dengan ras, gender, atau status sosio-ekonomi. Oleh karena itu, deteksi bias memerlukan audit korelasi antar fitur untuk memastikan tidak ada kebocoran bias melalui jalur proxy yang tidak terdeteksi.

### Inti yang Harus Ditekankan

- Evaluasi model wajib dilakukan secara granular per-kelompok; akurasi global bersifat misleading ketika terdapat disparitas performa antar populasi.
- Teknik penghapusan atau pengacakan atribut sensitif pada test set merupakan uji empiris langsung untuk mengukur ketergantungan model terhadap variabel sensitif.
- Waspada terhadap fitur proxy yang dapat membocorkan bias secara tidak langsung, sehingga penghapusan atribut sensitif saja tidak menjamin fairness.
- Confusion matrix dan False Positive Rate per kelompok adalah metrik kunci yang harus dilaporkan dalam penelitian untuk menjamin transparansi evaluasi model.

### Transisi ke Slide Berikutnya

Setelah berhasil mendeteksi dan mengkuantifikasi bias dalam dataset, langkah metodologis selanjutnya adalah merancang strategi mitigasi. Pada slide berikutnya, kita akan membahas tiga kategori intervensi utama—pre-processing, in-processing, dan post-processing—serta trade-off fundamental antara peningkatan fairness dan penurunan akurasi yang harus dipertanggungjawabkan secara ilmiah dalam desain eksperimen.

---

## Slide 028 - Fairness: Intervensi dan Mitigasi

### Narasi

Setelah pada slide sebelumnya kita membahas metodologi deteksi bias, mulai dari evaluasi per-kelompok hingga identifikasi fitur proxy, langkah logis berikutnya adalah penerapan tindakan korektif. Deteksi bias hanyalah indikator awal; dalam praktik *data mining* yang bertanggung jawab, peneliti harus merancang strategi mitigasi yang sistematis. Strategi ini diklasifikasikan berdasarkan titik masuknya intervensi ke dalam pipeline pembelajaran mesin, yaitu *pre-processing*, *in-processing*, dan *post-processing*.

Intervensi *pre-processing* dilakukan sebelum model mulai dilatih, dengan fokus utama pada perbaikan distribusi atau struktur data latih. Teknik yang umum diterapkan meliputi *reweighting* sampel, di mana bobot setiap instance dimodifikasi agar kelompok yang kurang terwakili mendapat pengaruh lebih besar selama optimasi, serta eliminasi fitur proxy yang secara tidak langsung mengkodekan atribut sensitif. Sebagai implementasi praktis, kita dapat melakukan *resampling*—baik *oversampling* pada kelas minoritas maupun *undersampling* pada kelas mayoritas—untuk menyeimbangkan proporsi label antar kelompok sebelum data dilewatkan ke algoritma. Pendekatan ini efektif karena akar bias sering kali terletak pada ketimpangan representasi data sejak awal.

Jika perbaikan data belum cukup, intervensi dapat dialihkan ke tahap *in-processing*, di mana modifikasi dilakukan langsung pada fungsi objektif atau arsitektur algoritma pelatihan. Biasanya, hal ini dilakukan dengan menambahkan komponen regularisasi khusus yang memaksa model untuk meminimalkan disparitas performa antar kelompok selama proses backpropagation atau optimasi berlangsung. Sebaliknya, intervensi *post-processing* diterapkan setelah model selesai dilatih dan hanya memanipulasi output keputusan tanpa mengubah bobot internal model. Contoh konkretnya adalah penyesuaian ambang batas (*threshold*) prediksi secara diferensial per kelompok. Dengan menurunkan atau menaikkan threshold untuk kelompok tertentu, kita dapat menyamakan tingkat *false positive rate* dan *false negative rate*, sehingga memenuhi kriteria *equalized odds* meskipun distribusi prior probabilitas antar kelompok berbeda.

Poin kritis yang harus disadari oleh peneliti adalah adanya trade-off inheren antara akurasi global dan keadilan per-kelompok. Upaya menekan bias untuk satu kelompok hampir selalu mengakibatkan penurunan metrik akurasi agregat atau peningkatan error pada kelompok lain. Penurunan ini bukan indikasi kegagalan eksperimen, melainkan cerminan dari kompleksitas statistik dunia nyata. Dalam konteks penelitian magister, hasil trade-off ini wajib diukur secara rigor, divisualisasikan, dan dilaporkan secara transparan sebagai bagian dari analisis kritis. Pemilihan teknik mitigasi harus dibarengi dengan justifikasi metodologis yang jelas, mengingat tidak ada definisi keadilan tunggal yang kompatibel secara matematis dengan semua skenario data.

### Inti yang Harus Ditekankan

- Intervensi fairness harus diposisikan secara strategis: *pre-processing* untuk memperbaiki data, *in-processing* untuk memodifikasi fungsi loss/algoritma, dan *post-processing* untuk menyetel output keputusan.
- Tidak ada solusi universal; pemilihan teknik mitigasi bergantung pada definisi fairness yang diadopsi, karakteristik dataset, dan batasan komputasi yang tersedia.
- Trade-off antara akurasi agregat dan keadilan per-kelompok adalah fenomena statistik yang wajar dan harus dilaporkan secara eksplisit sebagai bagian dari evaluasi model yang kredibel.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana mengukur dan memitigasi bias demi keadilan model, kita akan beralih ke dimensi fundamental lainnya dalam *trustworthy data mining*, yaitu privasi. Pada slide berikutnya, kita akan mengurai ancaman kebocoran informasi pribadi yang tidak hanya mengintai data mentah, tetapi juga membocorkan rahasia melalui model yang telah dilatih, sekaligus menyiapkan landasan konseptual untuk mekanisme perlindungan lanjutan seperti *federated learning* dan *differential privacy*.

---

## Slide 029 - Privacy dalam Data Mining

### Narasi

Setelah membahas strategi intervensi fairness pada slide sebelumnya, kita kini memasuki dimensi lain yang tak kalah krusial dalam trustworthy data mining, yaitu privasi. Privasi dalam konteks ini didefinisikan sebagai upaya melindungi informasi pribadi individu dari kebocoran atau penyalahgunaan. Namun, paradigma keamanan data telah bergeser secara fundamental. Ancaman terhadap privasi tidak lagi hanya tertuju pada penyimpanan data mentah atau basis data awal, tetapi juga meluas pada model machine learning yang telah dilatih menggunakan data tersebut. Bahkan ketika model telah dirilis, dipublikasikan, atau diakses via API, pola statistik yang terkandung di dalamnya masih berpotensi membongkar informasi sensitif dari dataset pelatihan.

Untuk mengantisipasi kebocoran tersebut, kita perlu memahami tiga kategori serangan privasi yang paling umum terjadi pada model terlatih. Pertama, membership inference attack, yaitu teknik yang digunakan untuk menebak apakah suatu record atau individu tertentu pernah dimasukkan ke dalam proses training model. Kedua, model inversion attack, di mana penyerang memanfaatkan output prediksi atau confidence score model untuk merekonstruksi kembali sebagian fitur atau sampel input asli. Ketiga, attribute inference attack, yang berfokus pada pendugaan nilai atribut sensitif yang mungkin tidak sengaja terekspose melalui hubungan korelatif dalam prediksi model. Ketiganya membuktikan bahwa performa akurasi tinggi tidak otomatis menjamin keamanan privasi pengguna.

Sebagai ilustrasi praktis, perhatikan kasus model prediksi penyakit yang dilatih menggunakan data klinis pasien. Meskipun kolom identitas seperti nama dan nomor rekening telah dihapus, penyerang dapat mengirimkan serangkaian query terstruktur kepada model. Melalui analisis respons probabilistik yang dikembalikan, penyerang secara iteratif dapat menyimpulkan karakteristik medis pasien tertentu hingga berhasil merekonstruksi sebagian profil kesehatan aslinya. Dalam konteks penelitian tingkat magister, fenomena ini menuntut sikap kritis. Ketika Anda merancang eksperimen, melatih model, atau melaporkan hasil publikasi, Anda wajib secara eksplisit mengakui potensi risiko privacy ini. Fokus materi hari ini adalah membangun kesadaran metodologis tersebut sebelum kita mempelajari mekanisme proteksi teknisnya.

Poin penutup dari slide ini menekankan bahwa privasi model merupakan celah laten yang sering terlewatkan dalam pipeline data mining konvensional. Menyadari kerentanan ini adalah prasyarat ilmiah bagi peneliti yang ingin menghasilkan karya yang bertanggung jawab. Pada pertemuan berikutnya, kita akan membahas pendekatan defensif seperti federated learning dan differential privacy sebagai solusi perlindungan data. Namun hari ini, penekanan utamanya terletak pada transparansi akademik: jangan menganggap model yang sudah trained aman secara default, dan selalu dokumentasikan batasan privasi saat menyajikan temuan eksperimen.

### Inti yang Harus Ditekankan

- Privasi dalam data mining mencakup perlindungan tidak hanya pada data mentah, tetapi juga pada jejak statistik yang tersisa di dalam model terlatih.
- Tiga ancaman utama yang harus dikenali oleh peneliti adalah membership inference, model inversion, dan attribute inference, yang semuanya memanfaatkan output model untuk membongkar informasi sensitif.
- Kesadaran risiko privacy harus menjadi bagian integral dari pelaporan eksperimen dan publikasi penelitian, sebelum menerapkan teknik mitigasi lanjutan seperti federated learning atau differential privacy.

### Transisi ke Slide Berikutnya

Memahami ancaman privasi adalah fondasi untuk mengadopsi prinsip-prinsip Responsible AI yang lebih holistik; mari kita lanjutkan ke slide berikutnya untuk menelaah bagaimana transparansi, akuntabilitas, dan keamanan data diintegrasikan ke dalam praktik penelitian yang bertanggung jawab.

---

## Slide 030 - Responsible AI: Prinsip dan Praktik

### Narasi

Setelah membahas ancaman teknis terhadap privasi pada model machine learning di slide sebelumnya, kita kini melangkah ke kerangka yang lebih holistik, yaitu Responsible AI. Dalam konteks penelitian data mining jenjang magister, tanggung jawab etis tidak hanya bersifat defensif berupa perlindungan data, tetapi juga proaktif dalam merancang, mengevaluasi, dan melaporkan sistem cerdas. Prinsip Responsible AI terdiri dari lima pilar utama yang harus menjadi pedoman metodologis: pertama, **transparansi**, yang menuntut dokumentasi lengkap mengenai pipeline data, arsitektur model, dan proses pelatihan sehingga setiap langkah dapat diaudit atau direplikasi. Kedua, **akuntabilitas**, memastikan adanya penanggung jawab jelas atas implikasi teknis maupun sosial dari prediksi model. Ketiga, **keamanan dan privasi**, yang telah kita identifikasi sebagai lapisan kritis untuk mencegah kebocoran melalui serangan seperti membership inference atau model inversion. Keempat, **keadilan**, mewajibkan peneliti untuk memverifikasi bahwa model tidak menghasilkan diskriminasi sistematis terhadap subgroup demografis tertentu. Kelima, **manfaat sosial**, mengingatkan bahwa tujuan akhir riset bukan sekadar optimisasi metrik, melainkan kontribusi nyata yang positif bagi masyarakat.

Penerapan prinsip tersebut dalam praktik penelitian memerlukan disiplin pelaporan yang ketat dan transparan. Saat menyusun paper atau laporan eksperimen, mahasiswa wajib secara eksplisit menguraikan batasan dataset, meliputi representativitas sampel, asal-usul data, serta potensi bias struktural yang mungkin melekat. Pelaporan batasan model juga krusial; peneliti harus mendefinisikan domain aplikasi yang aman dan menyatakan dengan tegas kapan model tidak boleh digunakan karena risiko kegagalan tinggi. Jika dataset mengandung atribut sensitif seperti kondisi medis, riwayat kriminal, atau preferensi politik, analisis etika harus disertakan sebagai komponen metodologi yang sah. Selain itu, dokumentasikan seluruh asumsi yang diambil selama preprocessing, seleksi fitur, hingga konfigurasi hyperparameter. Asumsi-asumsi ini sering kali menjadi variabel laten yang memengaruhi generalisasi model dan harus diungkap agar komunitas akademik dapat menilai validitas temuan secara kritis.

Pendekatan ini sejalan dengan standar publikasi internasional terindeks Scopus yang semakin mensyaratkan reproducibility, ethical compliance, dan responsible reporting. Dengan mengintegrasikan prinsip Responsible AI ke dalam siklus penelitian, kita membangun fondasi untuk trustworthy data mining yang tidak hanya akurat secara statistik, tetapi juga robust secara etis. Hal ini menyiapkan landasan konseptual untuk memahami bagaimana explainability berfungsi sebagai instrumen operasional yang menghubungkan teori etika dengan praktik evaluasi model secara konkret.

### Inti yang Harus Ditekankan

- Responsible AI adalah kerangka metodologis wajib dalam riset data mining tingkat magister, bukan sekadar tambahan etika umum.
- Transparansi, akuntabilitas, keamanan, keadilan, dan manfaat sosial harus diterjemahkan ke dalam praktik pelaporan batasan dataset, batasan model, analisis etika, dan dokumentasi asumsi eksperimen.
- Standar penelitian berkualitas tinggi mensyaratkan keterbukaan penuh terhadap kelemahan model agar hasil riset dapat diverifikasi, dikritik, dan dikembangkan oleh komunitas akademik.

### Transisi ke Slide Berikutnya

Prinsip dan praktik Responsible AI ini akan kita operasionalkan lebih lanjut melalui explainability. Pada slide berikutnya, kita akan melihat bagaimana teknik interpretabilitas bukan hanya alat deskriptif, melainkan mekanisme aktif untuk memperkuat robustness, melakukan audit fairness, dan memastikan akuntabilitas privasi dalam alur trustworthy data mining.

---

## Slide 031 - Hubungan Explainability dan Trustworthiness

### Narasi

Pada slide sebelumnya, kita telah membahas prinsip-prinsip Responsible AI seperti transparansi, akuntabilitas, keamanan, keadilan, dan manfaat sosial, serta bagaimana praktik penelitian harus mendokumentasikan batasan dataset, asumsi model, dan analisis etika. Langkah logis berikutnya adalah memahami bagaimana konsep-konsep tersebut dioperasionalkan secara teknis melalui Explainability atau kemampuan penjelasan model. Explainability bukanlah tujuan akhir dalam pipeline data mining, melainkan sebuah mekanisme krusial yang menjadi fondasi utama untuk mencapai Trustworthiness atau keandalan sistem secara menyeluruh.

Seperti yang terlihat pada skema keterkaitan, explainability memberikan dampak langsung pada tiga pilar trustworthiness. Pertama, explainability memperkuat robustness analysis karena interpretasi fitur memungkinkan peneliti melacak akar penyebab kegagalan prediksi, sehingga model dapat diperbaiki secara spesifik bukan hanya dengan tuning parameter buta. Kedua, explainability sangat vital dalam membantu fairness audit. Dengan teknik interpretasi seperti SHAP atau LIME, kita dapat mengidentifikasi apakah model secara tidak sadar mengandalkan fitur proxy—seperti kode pos, pola belanja, atau variabel demografik terselubung—yang sebenarnya berkorelasi kuat dengan ras, gender, atau status sosioekonomi. Ketiga, explainability mendukung privacy accountability dengan memberikan kejelasan tentang bagaimana setiap sampel data berkontribusi terhadap keputusan model, sehingga potensi kebocoran informasi sensitif atau overfitting terhadap data pribadi dapat dideteksi dan dimitigasi.

Sebagai ilustrasi konkret dalam konteks penelitian, mari kita lihat contoh penggunaan SHAP. Ketika nilai SHAP menunjukkan bahwa model klasifikasi sangat bergantung pada variabel proxy ras, hal ini berfungsi sebagai bukti empiris adanya dataset bias. Temuan ini tidak boleh dibiarkan saja; peneliti wajib melakukan intervensi fairness, misalnya melalui reweighting data, removal fitur proxy, atau penerapan algoritma debiasing, dilanjutkan dengan evaluasi ulang performa model. Seluruh rangkaian deteksi bias, intervensi, dan validasi ulang ini kemudian didokumentasikan secara transparan sebagai bagian dari responsible data mining. Pendekatan ini sejalan dengan standar publikasi internasional tingkat magister, di mana analisis mendalam seperti error analysis dan ablation study menjadi syarat mutlak untuk membuktikan kontribusi ilmiah yang etis dan robust.

Secara esensi, integrasi antara explainability dan trustworthiness menuntut mahasiswa untuk tidak hanya berhenti pada pencapaian metrik akurasi atau F1-score tertinggi. Research project yang berkualitas harus merancang eksperimen yang secara eksplisit menguji aspek interpretabilitas, melaporkan temuan bias atau ketidakpastian model, dan menunjukkan langkah mitigasi yang dilakukan. Dengan demikian, explainability berperan sebagai sarana diagnostik yang menghubungkan kinerja teknis model dengan tanggung jawab akademik dan sosial.

### Inti yang Harus Ditekankan

- Explainability berfungsi sebagai alat diagnostik utama untuk membangun trustworthiness, bukan sekadar pelengkap visualisasi hasil prediksi.
- Keterkaitan explainability dengan robustness, fairness audit, dan privacy accountability membentuk siklus validasi model yang komprehensif.
- Deteksi bias melalui fitur proxy (contoh: SHAP) harus diikuti oleh intervensi fairness dan dokumentasi lengkap sebagai wujud responsible data mining.
- Dalam penelitian jenjang S2, integrasi explainability dan trustworthiness menjadi indikator kualitas metodologi dan kontribusi etis karya ilmiah.

### Transisi ke Slide Berikutnya

Untuk menerapkan konsep teoritis ini secara praktis, kita akan beralih ke sesi hands-on yang akan melatih Anda melakukan deep analysis secara terstruktur. Pada praktikum berikutnya, Anda akan mengimplementasikan SHAP analysis secara langsung, dilanjutkan dengan error analysis dan failure-case analysis untuk menguji ketahanan model pada kasus-kasus kritis. Mari kita lanjutkan ke outline dan tujuan praktikum tersebut.

---

## Slide 032 - Praktikum 6: Outline dan Tujuan

### Narasi

Pada slide sebelumnya, kita telah menegaskan bahwa explainability bukan tujuan akhir, melainkan sarana strategis untuk mencapai trustworthy data mining. Konsep teoretis tersebut kini akan dioperasionalkan secara langsung melalui Praktikum 6. Sesi ini dirancang untuk mengintegrasikan empat komponen analitis yang saling berkesinambungan: prediksi model, analisis interpretabilitas berbasis SHAP, error analysis, dan failure-case analysis. Pendekatan ini mencerminkan standar evaluasi penelitian tingkat S2, di mana validitas model tidak lagi dinilai hanya dari skor akurasi atau F1-score, tetapi dari kemampuan peneliti untuk mendiagnosis mekanistik pengambilan keputusan model secara transparan dan bertanggung jawab.

Secara operasional, praktikum ini menargetkan empat langkah utama yang harus diselesaikan secara berurutan. Pertama, kalian akan menjalankan prediksi menggunakan model terbaik yang telah dihasilkan pada praktikum-praktikum sebelumnya. Model ini berfungsi sebagai baseline stabil untuk tahap diagnostik lanjutan. Kedua, kalian akan menghitung SHAP value dan menginterpretasikannya. Proses ini akan mengkuantifikasi kontribusi relatif setiap fitur terhadap prediksi individual maupun agregat, sehingga pola ketergantungan model terhadap variabel proxy atau noise dapat terungkap. Ketiga, error analysis dilakukan dengan mengelompokkan kesalahan prediksi berdasarkan tipe kesalahan (false positive, false negative, atau misclassification pada kelas minoritas) untuk mengidentifikasi bias struktural dalam data atau model. Keempat, failure-case analysis menuntut pemilihan kasus spesifik yang gagal diprediksi, kemudian membedah mekanisme internal model pada kasus tersebut menggunakan plot SHAP lokal. Langkah ini sangat krusial dalam konteks responsible data mining karena menguji robustness, fairness, dan accountability model secara empiris.

Poin penting yang perlu ditekankan adalah hubungan langsung antara praktikum ini dengan research project kalian. Seluruh rangkaian aktivitas pada slide ini merupakan miniatur terstruktur dari tahap deep analysis yang akan kalian implementasikan pada minggu ke-13. Template analisis, struktur kode, serta metodologi dokumentasi yang kalian bangun hari ini dapat langsung diadaptasi untuk laporan penelitian. Dalam konteks akademik S2, kemampuan merangkai alur dari prediksi awal hingga diagnosa kegagalan model secara sistematis merupakan indikator utama kesiapan metodologis kalian untuk menulis paper internasional. Pastikan setiap langkah dicatat dengan presisi, termasuk konfigurasi library, hyperparameter, dan interpretasi visual, agar hasil dapat direproduksi dan divalidasi oleh reviewer.

### Inti yang Harus Ditekankan

- Evaluasi model tingkat S2 tidak berhenti pada metrik numerik; nilai penelitian justru muncul dari interpretabilitas (SHAP), diagnosa kesalahan (error analysis), dan investigasi kasus gagal (failure-case analysis).
- Rangkaian praktikum ini berfungsi sebagai blueprint/template langsung untuk tahap deep analysis research project minggu ke-13.
- Dokumentasi analitis yang sistematis, reproduktif, dan terhubung dengan prinsip responsible data mining adalah syarat mutlak untuk memenuhi standar publikasi conference terindeks Scopus.

### Transisi ke Slide Berikutnya

Setelah memahami outline dan tujuan secara konseptual, mari kita turunkan ke level teknis dengan melihat bagaimana keempat tahapan tersebut dirangkai dalam satu alur kerja terstruktur. Slide berikutnya akan memetakan workflow lengkap mulai dari persiapan data, pelatihan model, perhitungan SHAP, hingga diagnostik kesalahan prediksi secara bertahap.

---

## Slide 033 - Praktikum 6: Workflow Lengkap

### Narasi

Workflow ini menyajikan alur kerja sistematis yang akan kita eksekusi secara berurutan selama praktikum berlangsung. Langkah pertama adalah Data Preparation, yang meliputi pemuatan dataset, pembagian data menjadi train dan test set, serta implementasi preprocessing pipeline. Pada tingkat magister, tahap ini bukan sekadar prosedur teknis, melainkan fondasi metodologis yang menentukan validitas eksternal seluruh analisis berikutnya. Pipeline preprocessing harus dikelola sebagai objek transformasi yang konsisten untuk mencegah data leakage antar subset, sekaligus memastikan distribusi fitur tetap stabil saat diterapkan pada data uji.

Setelah data siap, kita beralih ke tahap Prediction. Model yang telah dilatih sebelumnya dijalankan pada data uji untuk menghasilkan prediksi, dilanjutkan dengan perhitungan metrik evaluasi objektif seperti F1-Score dan AUC. Metrik ini berfungsi sebagai gatekeeper metodologis: interpretasi model hanya boleh dilakukan setelah performa prediktif divalidasi secara statistik. Tahap ketiga adalah SHAP Analysis, di mana nilai SHAP dihitung untuk mengkuantifikasi kontribusi marginal setiap fitur terhadap keluaran model. Analisis ini dibagi menjadi dua lapisan: global plot untuk memetakan dominasi fitur secara agregat, dan local plot untuk menelusuri mekanisme pengambilan keputusan pada tingkat observasi individu.

Dua tahap terakhir berfokus pada diagnosa kritis melalui Error Analysis dan Failure-Case Analysis. Pada Error Analysis, kita mengklasifikasikan kesalahan prediksi menjadi False Positive dan False Negative, lalu melakukan karakterisasi pola kesalahan berdasarkan distribusi fitur atau segmentasi subset data. Pendekatan ini mengungkap bias sistematis, ketidakseimbangan kelas, atau celah representasi yang sering luput dari metrik agregat. Selanjutnya, Failure-Case Analysis memilih sampel kasus konkret yang gagal diprediksi, kemudian menerapkan SHAP secara mendalam pada kasus tersebut. Tujuannya adalah mengisolasi penyebab kegagalan prediktif—apakah disebabkan oleh noise, outlier, interaksi fitur nonlinier, atau batasan kapasitas model—sehingga menghasilkan insight yang dapat ditindaklanjuti untuk iterasi penelitian.

Secara keseluruhan, kelima langkah ini dirancang sebagai miniatur dari proses deep analysis yang akan kalian terapkan pada research project minggu ke-13. Setiap tahap memiliki ketergantungan kausal yang ketat: validasi metrik mendahului interpretasi SHAP, dan karakterisasi error mengarah pada investigasi kasus kegagalan yang terstruktur. Dengan mengikuti workflow ini, kalian tidak hanya menghasilkan output prediksi, tetapi juga membangun argumen berbasis evidence tentang kekuatan, kelemahan, dan boundary conditions model di bawah skenario nyata.

### Inti yang Harus Ditekankan

- Disiplin urutan analisis sangat krusial: jangan lakukan interpretasi SHAP sebelum model tervalidasi dengan metrik yang memadai.
- Error analysis dan failure-case analysis adalah jembatan antara evaluasi empiris dan formulasi research question atau hipotesis perbaikan model.
- Workflow ini merupakan template replikabel untuk tahap deep analysis pada paper penelitian, menekankan reproducibility dan traceability setiap keputusan analitis.

### Transisi ke Slide Berikutnya

Kita akan mulai mengeksekusi workflow ini dari langkah kedua, yaitu Prediction Step. Pada slide berikutnya, kita akan membahas pemilihan model, konfigurasi hyperparameter, serta contoh implementasi kode menggunakan scikit-learn, lengkap dengan catatan metodologis mengenai kapan waktu yang tepat untuk beralih ke analisis SHAP.

---

## Slide 034 - Praktikum 6: Prediction Step

### Narasi

Setelah menyelesaikan tahap persiapan data dan pemisahan train-test pada langkah sebelumnya, kita kini memasuki fase inti dari workflow prediction. Pada tahap ini, fokus utama kita adalah mengonfirmasi bahwa model yang akan kita gunakan memang merupakan pilihan terbaik berdasarkan bukti empiris. Dalam praktik penelitian tingkat magister, kita tidak boleh sekadar menjalankan algoritma default. Model yang dipilih haruslah kandidat terbaik dari serangkaian eksperimen sebelumnya, dan yang tak kalah vital, model tersebut sudah melalui proses hyperparameter tuning yang sistematis. Selain itu, estimasi performa harus selalu didukung oleh teknik cross-validation untuk memastikan bahwa metrik yang dihasilkan stabil, generalizable, dan bebas dari bias akibat pembagian data yang tidak representatif.

Mari kita tinjau contoh implementasi kode yang disajikan. Kita menggunakan `GradientBoostingClassifier` dari pustaka `scikit-learn` sebagai model inti karena algoritma ensemble berbasis boosting ini konsisten memberikan performa tinggi pada dataset tabular. Untuk evaluasi komprehensif, kita mengimpor `classification_report` guna mendapatkan breakdown precision, recall, dan F1-score per kelas, serta `roc_auc_score` untuk mengukur kemampuan diskriminatif model secara global. Inisialisasi model menggunakan parameter `n_estimators=300`, `max_depth=3`, dan `learning_rate=0.05`. Konfigurasi ini merepresentasikan strategi gradient boosting yang konservatif, di mana banyak pohon keputusan dangkal digabungkan dengan laju pembelajaran kecil untuk mencegah overfitting dan meningkatkan stabilitas. Setelah definisi model selesai, metode `.fit(X_train, y_train)` dipanggil untuk proses pelatihan. Kemudian, `.predict()` menghasilkan label kategori (`y_pred`) untuk laporan klasifikasi, sementara `.predict_proba(X_test)[:, 1]` mengekstrak probabilitas kelas mayoritas untuk perhitungan AUC. Kedua metrik ini kemudian dicetak untuk verifikasi awal sebelum analisis lanjutan.

Terdapat catatan metodologis yang sangat kritis untuk diperhatikan: jangan pernah melakukan analisis penjelasan atau interpretabilitas model, seperti penggunaan SHAP, sebelum model berhasil dievaluasi dan diverifikasi performanya. Jika model belum menunjukkan peningkatan signifikan dibandingkan baseline sederhana (misalnya dummy classifier atau model linier dasar), maka upaya menjelaskan kontribusi fitur justru akan menghasilkan narasi yang menyesatkan dan kehilangan landasan ilmiah. Validitas penjelasan model sepenuhnya bergantung pada validitas prediksinya. Poin ini menjadi jembatan logis dari alur kerja lengkap yang kita paparkan di slide sebelumnya, sekaligus menyiapkan fondasi yang kokoh sebelum kita beralih ke tahap eksplorasi nilai-nilai SHAP pada slide berikutnya.

### Inti yang Harus Ditekankan

- Pemilihan model harus didasari oleh hasil tuning dan cross-validation, bukan sekadar trial-and-error atau pemilihan default.
- Kode prediksi harus memisahkan antara label hard (`predict`) untuk metrik klasifikasi dan probabilitas (`predict_proba`) untuk metrik berbasis ranking seperti AUC.
- Evaluasi performa adalah prasyarat mutlak sebelum analisis interpretabilitas; model yang belum terbukti lebih baik dari baseline tidak dapat dijelaskan secara bermakna secara metodologis.

### Transisi ke Slide Berikutnya

Dengan model yang sudah terlatih, tervalidasi, dan metrik performanya terkonfirmasi, kita kini memiliki fondasi yang sah untuk membongkar mekanisme pengambilan keputusannya. Mari kita lanjutkan ke implementasi SHAP Analysis untuk mengidentifikasi bagaimana setiap fitur secara individual maupun kolektif mendorong prediksi model.

---

## Slide 035 - Praktikum 6: SHAP Analysis Step

### Narasi

Setelah model berhasil dilatih dan diverifikasi performanya melalui evaluasi metrik seperti classification report dan AUC pada slide sebelumnya, langkah metodologis berikutnya adalah membuka kotak hitam model tersebut melalui Explainable AI. Pada jenjang magister, kemampuan menafsirkan output model sama pentingnya dengan akurasi numeriknya, karena penelitian data mining menuntut transparansi dan akuntabilitas algoritma. Langkah ini memastikan bahwa pola yang dipelajari mesin benar-benar mencerminkan hubungan kausal atau korelasional yang valid, bukan artefak noise atau kebocoran data.

Kode yang ditampilkan memanfaatkan library `shap` untuk menghitung Shapley values berdasarkan teori permainan kooperatif. Baris `explainer = shap.TreeExplainer(model)` menginisialisasi explainer khusus untuk model berbasis pohon, yang secara komputasi efisien dan secara matematis konsisten dalam mengestimasi kontribusi marginal setiap fitur. Selanjutnya, `shap_values = explainer.shap_values(X_test)` menghasilkan matriks nilai SHAP di mana setiap baris merepresentasikan satu instance dan setiap kolom merepresentasikan satu fitur. Nilai positif menunjukkan dorongan prediksi ke arah kelas positif, sedangkan nilai negatif mendorong ke arah kelas negatif. Untuk penjelasan global, `shap.summary_plot` merangkum peringkat kepentingan fitur sekaligus menampilkan bagaimana rentang nilai fitur (warna merah untuk tinggi, biru untuk rendah) mempengaruhi skor prediksi secara agregat. Sementara itu, `shap.force_plot` memberikan dekomposisi lokal untuk instance tertentu, memvisualisasikan bagaimana setiap fitur menggeser prediksi dari nilai dasar (`expected_value`) hingga mencapai output akhir model.

Hasil visualisasi yang diharapkan mencakup tiga lapisan interpretasi. Pertama, summary plot mengidentifikasi driver utama keputusan model secara keseluruhan. Kedua, force plot memungkinkan inspeksi granular pada kasus individu, penting saat menganalisis outlier atau sampel kritis. Ketiga, dependence plot dapat ditambahkan untuk mengungkap interaksi non-linear antar fitur atau efek ambang batas yang tidak terlihat pada plot ringkas. Dalam praktiknya, dosen dan peneliti wajib melakukan cross-validation antara hasil SHAP dengan pengetahuan domain. Jika fitur yang seharusnya netral muncul sebagai prediktor dominan, hal ini menjadi sinyal peringatan dini untuk investigasi lebih lanjut mengenai data leakage, preprocessing yang tidak tepat, atau bias sampling yang terkubur dalam struktur dataset.

Pendekatan ini juga menyiapkan fondasi analitis untuk tahap diagnostik lanjutan. Ketika kita sudah memahami mekanisme internal model melalui kontribusi fitur yang terukur, kita dapat mengarahkan perhatian pada area kegagalan sistematis tanpa menebak-nebak. Hal ini sejalan dengan prinsip responsible data mining, di mana interpretasi bukan sekadar pelengkap laporan, melainkan bagian integral dari validasi hipotesis dan desain eksperimen yang robust.

### Inti yang Harus Ditekankan

- SHAP memberikan kerangka interpretasi yang konsisten dan aditif, sehingga cocok digunakan sebagai standar evaluasi model tree-based dalam penelitian tingkat magister.
- Analisis harus dilakukan secara berlapis: global untuk memahami pola agregat, dan lokal untuk mengurai keputusan pada instance spesifik atau kasus kritis.
- Validasi domain mutlak diperlukan; fitur yang secara statistik signifikan namun secara logika bisnis/domain tidak relevan mengindikasikan potensi data leakage, overfitting, atau bias struktural.
- Visualisasi SHAP bukan tujuan akhir, melainkan alat diagnostik untuk merumuskan pertanyaan penelitian baru, memperbaiki fitur engineering, atau menyusun ablation study yang terarah.

### Transisi ke Slide Berikutnya

Dengan peta kontribusi fitur yang telah terpetakan secara global maupun lokal, kita memiliki basis empiris yang kuat untuk melangkah ke tahap evaluasi kesalahan. Slide berikutnya akan membahas Error Analysis, di mana kita akan mengelompokkan false positive dan false negative guna mengidentifikasi kelemahan sistematis yang sering kali tersembunyi di balik angka akurasi agregat.

---

## Slide 036 - Praktikum 6: Error Analysis

### Narasi

Setelah kita menyelesaikan analisis interpretabilitas menggunakan SHAP pada slide sebelumnya untuk memahami kontribusi fitur secara global maupun lokal, langkah evaluasi model berikutnya yang wajib dilakukan adalah Error Analysis. Error Analysis bukan sekadar menghitung metrik agregat seperti akurasi atau F1-score, melainkan sebuah pendekatan sistematis untuk mengelompokkan prediksi yang salah ke dalam pola-pola yang dapat dipahami secara domain. Tujuan utamanya adalah mengidentifikasi kelemahan sistematis yang melekat pada model, sehingga kita tidak hanya tahu bahwa model "gagal", tetapi juga memahami mekanisme kegagalan tersebut agar dapat diperbaiki atau setidaknya dijelaskan batas kemampuannya.

Dalam konteks klasifikasi biner yang umum kita gunakan, kesalahan model dikategorikan menjadi dua tipe utama: False Positive (FP) dan False Negative (FN). False Positive terjadi ketika model memprediksi kelas positif, padahal label sebenarnya adalah negatif. Sebaliknya, False Negative terjadi ketika model memprediksi kelas negatif, namun label aslinya justru positif. Penting bagi peneliti untuk menyadari bahwa bobot kesalahan ini sangat bergantung pada konteks aplikasi. Misalnya, dalam sistem deteksi dini penyakit, False Negative memiliki dampak klinis yang jauh lebih kritis dibandingkan False Positive. Oleh karena itu, pemahaman mendalam terhadap distribusi kedua kategori ini menjadi fondasi utama dalam evaluasi model yang bertanggung jawab.

Untuk melaksanakan Error Analysis secara metodologis, kita mengikuti empat langkah terstruktur. Pertama, identifikasi semua instance yang masuk ke dalam kategori FP dan FN dari dataset uji. Kedua, hitung proporsi masing-masing kesalahan relatif terhadap total data uji atau per kelas, guna menentukan apakah model memiliki bias kesalahan yang signifikan ke satu arah tertentu. Ketiga, bandingkan karakteristik distribusi fitur-fitur penting antara kelompok FP dan FN. Perhatikan apakah ada pola numerik atau kategorikal yang konsisten memicu kesalahan. Keempat, ajukan pertanyaan analitis kritis seperti: apakah False Negative lebih sering terjadi pada subgroup atau populasi tertentu yang mungkin underrepresented dalam data pelatihan? Apakah False Positive berkorelasi dengan nilai ekstrem atau outlier pada fitur tertentu? Dan apakah kesalahan tersebut dominan muncul pada instance dengan confidence score atau probabilitas prediksi yang rendah?

Pendekatan ini sangat relevan dengan standar penelitian tingkat magister, di mana evaluasi model tidak boleh berhenti pada angka statistik semata. Setelah kita memahami kerangka konseptual dan alur logika analisisnya, pada slide berikutnya kita akan langsung mengimplementasikan langkah-langkah tersebut ke dalam kode Python menggunakan library pandas. Kita akan melihat cara mengekstrak, menghitung frekuensi, dan membandingkan mean distribusi fitur antar kelompok kesalahan secara empiris, yang akan menjadi dasar untuk visualisasi lanjutan dan ablation study jika diperlukan.

### Inti yang Harus Ditekankan

- Error Analysis bertujuan menemukan kelemahan sistematis model melalui pengelompokan kesalahan, bukan hanya mengandalkan metrik agregat.
- Perbedaan dampak antara False Positive dan False Negative harus selalu dipertimbangkan berdasarkan konteks domain dan biaya kesalahan.
- Analisis harus bersifat investigatif: bandingkan distribusi fitur, telusuri subgroup rentan, dan hubungkan kesalahan dengan tingkat confidence prediksi.

### Transisi ke Slide Berikutnya

Dengan pemahaman konsep dan langkah-langkah analisis kesalahan yang telah kita bahas, mari kita langsung turun ke implementasinya. Pada slide berikutnya, kita akan menulis skrip Python menggunakan pandas untuk mengekstrak instance False Positive dan False Negative, lalu membandingkan distribusi fitur mereka secara numerik sebagai langkah awal validasi empiris.

---

## Slide 037 - Praktikum 6: Error Analysis dengan Kode

### Narasi

Pada slide sebelumnya, kita telah membahas kerangka konseptual error analysis, yaitu mengidentifikasi false positive dan false negative serta membandingkan distribusi fitur untuk menemukan kelemahan sistematis model. Kini, kita akan menerjemahkan konsep tersebut ke dalam implementasi praktis menggunakan Python dan library pandas. Langkah pertama dalam kode ini adalah membuat salinan dari data uji `X_test` dan menambahkan tiga kolom baru yang berisi label sebenarnya (`y_true`), prediksi model (`y_pred`), serta probabilitas prediksi (`y_proba`). Penggabungan data ini dalam satu DataFrame memudahkan proses filtering dan analisis lebih lanjut tanpa perlu mengakses variabel secara terpisah, sekaligus menjaga integritas referensi data selama eksperimen.

Setelah struktur data siap, kita menerapkan boolean indexing untuk memisahkan instance yang mengalami kesalahan. False positive didefinisikan sebagai kondisi di mana label asli bernilai 0 namun model memprediksi 1, sedangkan false negative terjadi ketika label asli 1 diprediksi menjadi 0. Hasil filter tersebut disimpan dalam dua DataFrame terpisah, yaitu `false_positive` dan `false_negative`. Kita kemudian mencetak jumlah masing-masing kesalahan untuk mendapatkan gambaran awal mengenai bias atau ketidakseimbangan kesalahan model. Selanjutnya, fungsi `.mean(numeric_only=True)` digunakan untuk menghitung rata-rata setiap fitur numerik pada kelompok FP dan FN. Perbandingan nilai mean ini sangat krusial karena jika terdapat perbedaan signifikan pada fitur tertentu antara kedua kelompok kesalahan, hal itu mengindikasikan adanya pola sistematis yang dapat ditindaklanjuti, misalnya model cenderung gagal pada nilai ekstrem, missing pattern implisit, atau rentang distribusi yang belum tertangkap oleh decision boundary.

Selain analisis statistik deskriptif, slide ini juga mendorong pertanyaan lanjutan untuk pendalaman eksplorasi. Apakah kumpulan kesalahan tersebut membentuk klaster yang jelas? Visualisasi melalui scatter plot atau reduksi dimensi seperti PCA dapat membantu mengungkap struktur tersembunyi dalam ruang fitur tempat kesalahan sering muncul. Korelasi antara kesalahan dengan probabilitas prediksi juga perlu dievaluasi; misalnya, apakah sebagian besar kesalahan terjadi pada instance dengan confidence score rendah, atau justru model terlalu yakin pada kasus yang salah? Pendekatan ini tidak hanya bersifat diagnostik, tetapi juga menjadi fondasi metodologis untuk merancang perbaikan model, rekayasa fitur, atau strategi sampling yang terarah.

Sebagai penekanan akhir, error analysis berbasis kode ini mengajarkan bahwa evaluasi model tidak boleh berhenti pada metrik agregat seperti akurasi, precision, recall, atau F1-score. Dengan mengurai kesalahan per-instance dan membandingkan karakteristik fiturnya secara komputasional, peneliti dapat mengidentifikasi gap performa yang spesifik. Hal ini merupakan langkah wajib dalam penelitian data mining jenjang magister, karena insight tingkat instance menjadi dasar empiris sebelum melakukan ablation study, hyperparameter tuning, atau validasi silang yang rigor.

### Inti yang Harus Ditekankan

- Integrasi `y_true`, `y_pred`, dan `y_proba` dalam satu DataFrame memungkinkan filtering instance-level yang efisien dan reproduktibel.
- Perbandingan mean fitur antar kelompok FP dan FN mengungkap bias sistematis dan pola kegagalan yang tidak terlihat dari metrik global.
- Visualisasi (scatter/PCA) dan korelasi dengan probabilitas prediksi mengubah analisis statistik menjadi insight actionable untuk perbaikan arsitektur atau preprocessing.
- Error analysis tingkat instance adalah prasyarat metodologis untuk penelitian data mining yang evidence-based dan siap dikembangkan menjadi kontribusi ilmiah.

### Transisi ke Slide Berikutnya

Setelah mengidentifikasi pola kesalahan secara statistik dan visual, langkah selanjutnya adalah mendalami kasus-kasus spesifik yang paling representatif. Pada slide berikutnya, kita akan melakukan failure-case analysis dengan memilih beberapa instance error kritis dan memanfaatkan SHAP value untuk memberikan penjelasan lokal mengapa model mengambil keputusan yang salah pada kasus tersebut.

---

## Slide 038 - Praktikum 6: Failure-Case Analysis

### Narasi

Setelah pada slide sebelumnya kita melakukan error analysis secara kuantitatif untuk memisahkan false positive dan false negative serta mengamati distribusi rata-rata fitur pada masing-masing kelompok kesalahan, langkah metodologis selanjutnya adalah melakukan pendalaman lebih spesifik melalui failure-case analysis. Analisis ini merupakan tahap kualitatif yang berfungsi sebagai pendalaman dari error analysis. Fokusnya bergeser dari agregat statistik menuju contoh konkret dan representatif dari kegagalan model. Tujuan utamanya sangat eksplisit: menjelaskan secara mekanistik mengapa model gagal pada kasus-kasus tertentu, sehingga kita dapat mengidentifikasi bias sistematis, keterbatasan representasi data, atau kelemahan arsitektural yang tidak terlihat dari metrik performa global.

Prosedur pelaksanaan failure-case analysis mengikuti alur terstruktur yang memastikan objektivitas dan kedalaman analisis. Pertama, pilih dua hingga tiga kasus yang paling signifikan atau paling merepresentasikan klaster kesalahan dari hasil error analysis sebelumnya. Kedua, untuk setiap kasus yang dipilih, tampilkan informasi lengkap yang mencakup nilai asli seluruh fitur input, hasil prediksi model beserta probabilitas kepercayaannya, serta label ground truth yang sebenarnya. Ketiga, integrasikan penjelasan lokal menggunakan SHAP value untuk menguraikan kontribusi masing-masing fitur terhadap prediksi akhir instance tersebut. Pada tahap interpretasi, ajukan pertanyaan kritis: fitur mana yang paling mendorong model keluar dari jalur yang benar? Apakah nilai fitur tersebut bersifat ekstrem atau out-of-distribution? Apakah terdapat interaksi non-linear antar fitur yang tidak tertangkap oleh model? Keempat, sintesis temuan dari ketiga kasus tersebut untuk menyimpulkan pola umum kegagalan, yang nantinya menjadi dasar perbaikan model atau hipotesis penelitian lanjutan.

Implementasi teknis dari prosedur ini dapat dilihat pada potongan kode yang tersedia. Kita mengekstrak satu instance false negative secara deterministik menggunakan `false_negative.iloc[[0]]`, yang akan menjadi objek studi utama. Selanjutnya, fungsi `shap.force_plot` dipanggil dengan empat parameter kunci: `explainer.expected_value` sebagai baseline prediksi rata-rata model, `explainer.shap_values(case)[0]` untuk mendapatkan vektor kontribusi SHAP lokal dari instance tersebut, diikuti oleh dataframe fitur aktual `case`, dan flag `matplotlib=True` agar visualisasi dapat dirender langsung dalam lingkungan Jupyter atau Colab. Force plot ini akan memvisualisasikan secara horizontal bagaimana setiap fitur menarik prediksi dari baseline menuju kelas positif atau negatif, memberikan gambaran intuitif namun rigor tentang mekanisme pengambilan keputusan model pada titik kegagalan tersebut.

Setelah visualisasi dan interpretasi lokal selesai, langkah terakhir adalah melakukan triangulasi antar kasus untuk menemukan konsistensi pola. Apakah kesalahan cenderung berulang pada sampel dengan nilai fitur ekstrem? Apakah ada fitur dominan yang selalu memberikan sinyal menyesatkan karena noise atau multicollinearity? Atau justru model gagal menangkap hubungan kontekstual antar variabel? Jawaban atas pertanyaan-pertanyaan ini tidak hanya memperbaiki model saat ini, tetapi juga membentuk landasan empiris untuk merumuskan research question baru, seperti perlunya augmentasi data pada region tertentu, transformasi fitur non-linear, atau modifikasi loss function yang lebih sensitif terhadap minority class.

### Inti yang Harus Ditekankan

- Failure-case analysis adalah jembatan antara evaluasi kuantitatif (error analysis) dan interpretasi kualitatif berbasis XAI, wajib dilakukan sebelum menarik kesimpulan ilmiah.
- Setiap kasus kegagalan harus dianalisis secara holistik: nilai fitur, probabilitas, label asli, dan SHAP value lokal harus ditampilkan bersamaan untuk konteks lengkap.
- Interpretasi harus menjawab tiga pertanyaan kritis: pendorong kesalahan utama, keberadaan nilai ekstrem/outlier, dan kemungkinan interaksi fitur yang tidak tertangkap model.
- Hasil failure-case analysis bukan sekadar dokumentasi bug, melainkan bahan baku untuk ablation study, feature engineering ulang, atau perumusan hipotesis penelitian tingkat magister.

### Transisi ke Slide Berikutnya

Temuan dari failure-case analysis ini secara langsung menjadi komponen esensial dalam struktur laporan research project Anda. Pada slide berikutnya, kita akan memetakan posisi praktikum ini dalam timeline eksperimen, sekaligus mengintegrasikan hasil error dan failure-case analysis ke dalam template laporan penelitian yang mencakup evaluasi robustness, interpretasi SHAP global-lokal, serta implikasi temuan terhadap klaim ilmiah Anda.

---

## Slide 039 - Menghubungkan Praktikum 6 dengan Research Project

### Narasi

Slide ini menempatkan Praktikum 6 dalam konteks alur penelitian Anda secara keseluruhan. Berdasarkan timeline yang ditampilkan, pada minggu ke-13 ini Anda seharusnya sudah menyelesaikan Eksperimen V1 pada minggu 11 hingga 12, serta telah melakukan perluasan eksperimen atau variasi konfigurasi model. Posisi Anda saat ini berada tepat pada tahap evaluasi mendalam yang mencakup analisis robustness, explainability, dan error analysis. Tahap ini bukan sekadar latihan teknis, melainkan fondasi kritis sebelum Anda memasuki Eksperimen Final dan Ablation Study pada minggu ke-14. Tanpa pemahaman yang kuat terhadap kegagalan dan stabilitas model, klaim performa yang Anda ajukan akan kehilangan bobot ilmiah.

Dari sisi keluaran proyek, Anda dituntut untuk menghasilkan lima komponen utama yang saling berkesinambungan. Pertama, evaluasi robustness dilakukan dengan memberikan perturbasi terkontrol pada data uji untuk menguji ketahanan model terhadap noise atau pergeseran distribusi. Kedua, analisis SHAP digunakan secara komprehensif untuk mengidentifikasi fitur-fitur yang paling berpengaruh secara global, sekaligus menelusuri kontribusi lokalnya pada prediksi individual. Ketiga, error analysis bertujuan memetakan pola sistematis dari kesalahan model, baik false positive maupun false negative, agar tidak hanya mengetahui "berapa banyak" model salah, tetapi juga "mengapa" dan "pada kondisi apa". Keempat, failure-case analysis mengambil contoh konkret dari hasil error analysis sebelumnya untuk diinterpretasikan secara mendalam menggunakan nilai SHAP lokal. Kelima, seluruh temuan ini harus dirangkum dalam diskusi yang mengaitkannya kembali dengan research question awal, sehingga menunjukkan bagaimana bukti empiris mendukung atau merevisi klaim ilmiah Anda.

Untuk memastikan konsistensi dan kedalaman analisis, laporan proyek Anda harus mengikuti template terstruktur yang terdiri dari enam bagian. Bagian A menyajikan metrik performa utama disertai confidence interval untuk menegaskan signifikansi statistik hasil eksperimen. Bagian B memuat visualisasi SHAP global beserta interpretasi domain-specific mengenai hierarki fitur penting. Bagian C memperdalam penjelasan dengan plot SHAP lokal yang membandingkan instance yang berhasil diprediksi versus yang gagal. Bagian D mendetailkan error analysis melalui tabulasi dan visualisasi distribusi kesalahan. Bagian E fokus pada dua hingga tiga failure case representatif lengkap dengan nilai SHAP dan argumen interpretatif. Terakhir, Bagian F mengintegrasikan seluruh temuan menjadi diskusi implikasi terhadap research question, novelty, dan kontribusi potensial terhadap literatur bidang data mining. Pendekatan ini menjamin bahwa praktikum tidak berdiri sendiri, melainkan menjadi tulang punggung metodologis paper penelitian Anda.

### Inti yang Harus Ditekankan

- Praktikum 6 adalah jembatan wajib antara eksperimen dasar dan finalisasi penelitian; tanpa robustness dan explainability, ablation study tidak memiliki basis validasi.
- Analisis kesalahan harus bersifat sistematis dan berbasis bukti (SHAP + error patterns), bukan sekadar deskriptif, agar dapat dijadikan landasan klaim ilmiah.
- Struktur laporan proyek dirancang sesuai standar publikasi conference Scopus, menekankan pada signifikansi statistik, interpretasi lokal-global, dan korelasi temuan dengan research question.

### Transisi ke Slide Berikutnya

Dengan struktur analisis yang telah mapan, Anda siap menyempurnakan eksperimen akhir dan menyiapkan ablation study pada pertemuan berikutnya. Sebelum beralih ke topik emerging data mining seperti foundation models dan privacy-preserving learning, pastikan seluruh hasil robustness, explainability, dan error analysis dari Praktikum 6 sudah terdokumentasi rapi, karena materi tersebut akan menjadi bahan diskusi intensif dalam research clinic minggu 14 hingga 15.

---

## Slide 040 - Penutup dan Kaitan dengan Pertemuan Berikutnya

### Narasi

Pada bagian ringkasan pertemuan ini, kita menyatukan kembali konsep-konsep inti mengenai *explainable*, *trustworthy*, dan *responsible* data mining. Kita telah membahas implementasi teknik *explainability* seperti SHAP dan LIME untuk mengkuantifikasi kontribusi fitur, serta penggunaan *counterfactual explanation* untuk memberikan rekomendasi tindakan yang mengubah prediksi model. Namun, penjelasan model harus divalidasi secara ketat melalui empat dimensi evaluasi: *validity* (akurasi penjelasan terhadap perilaku model), *stability* (konsistensi output penjelasan saat input mengalami perturbasi kecil), *faithfulness* (keselarasan dengan mekanisme internal model), dan *usefulness* (nilai praktis bagi stakeholder). Di sisi lain, *trustworthiness* menuntut kita untuk tidak hanya melihat akurasi prediktif, tetapi juga menguji *robustness* terhadap adversarial noise, mendeteksi *dataset bias* yang dapat memicu diskriminasi, menerapkan prinsip *fairness* dalam alokasi risiko, serta mengintegrasikan mekanisme perlindungan *privacy* sejak tahap desain sistem.

Implementasi praktis dari kerangka konseptual ini tertuang dalam Praktikum 6, yang dirancang sebagai jembatan langsung menuju tahap penelitian Anda. Seperti yang telah dipetakan pada slide sebelumnya, Anda tidak lagi sekadar melatih model dan melaporkan akurasi, melainkan wajib menjalankan pipeline lengkap yang mencakup prediksi, visualisasi SHAP global dan lokal, *error analysis* untuk mengidentifikasi distribusi False Positive dan False Negative, serta penyusunan *failure-case analysis* pada minimal dua hingga tiga contoh instance yang gagal diprediksi dengan benar. Template laporan yang disediakan berfungsi sebagai panduan metodologis agar setiap temuan Anda tersusun secara logis, mulai dari statistik performa beserta *confidence interval*, hingga interpretasi implikasi temuan terhadap *research question* awal proyek Anda.

Seiring kita mendekati akhir semester, materi minggu depan akan mengarah pada frontier terkini dalam bidang ini, yaitu *Emerging Data Mining: Foundation Models, Generative & Privacy-Preserving Learning*. Arsitektur model skala besar dan generasi data sintetis memperkenalkan paradoks baru dalam konteks interpretabilitas dan kepercayaan sistem. Tantangan metodologis yang akan kita bedah meliputi strategi explainability untuk model black-box berparameter masif, validasi konsistensi output generatif, serta desain protokol *federated learning* yang menjaga privasi partisipan tanpa mengorbankan kualitas agregasi model. Diskusi ini akan mempersiapkan Anda menghadapi gap penelitian yang sedang aktif berkembang di konferensi top-tier.

Sebagai tindak lanjut operasional, selesaikan seluruh skrip dan analisis pada Praktikum 6 sebelum pertemuan berikutnya. Integrasikan hasil evaluasi robustness, peta SHAP, dan catatan *failure cases* ke dalam draf *research project* Anda menggunakan struktur template yang telah dibagikan. Siapkan pula output visual dan tabel ringkasan kesalahan yang siap dikritisi selama sesi *research clinic* di minggu 14 hingga 15. Disiplin dalam dokumentasi dan kedalaman analisis pada fase ini akan menjadi penentu utama kesiapan paper Anda untuk submission ke konferensi internasional terindeks Scopus.

### Inti yang Harus Ditekankan

- Kualitas penjelasan model harus diukur secara empiris melalui validitas, stabilitas, kesetiaan (*faithfulness*), dan kegunaan praktis, bukan hanya ditampilkan secara visual.
- *Trustworthiness* adalah multidimensi: mencakup ketahanan terhadap noise, keadilan algoritma, mitigasi bias data, dan jaminan privasi pengguna.
- Praktikum 6 bukan tugas terisolasi, melainkan komponen wajib yang menjadi fondasi Bab Evaluasi dan Analisis Error pada laporan penelitian akhir.
- Model generatif dan *foundation models* menuntut redefinisi metode explainability tradisional karena sifatnya yang probabilistik dan skala parameter yang ekstrem.

### Transisi ke Slide Berikutnya

Dengan pemahaman yang kuat mengenai bagaimana menjelaskan dan memverifikasi kepercayaan model, kita kini siap melangkah ke ranah yang lebih eksploratif. Mari kita buka slide terakhir pertemuan ini, dan persiapkan diri untuk mendiskusikan bagaimana paradigma data mining berevolusi menghadapi era *Foundation Models*, teknik generatif, serta pembelajaran yang menjaga privasi secara native.

---

## Slide 041 - TERIMA KASIH

### Narasi

Pertemuan ini telah menutup rangkaian pembahasan mengenai Explainable, Trustworthy, dan Responsible Data Mining. Kita telah mengupas secara mendalam mengapa transparansi dan akuntabilitas bukan lagi sekadar pelengkap dalam pipeline data mining modern, melainkan fondasi krusial untuk penelitian tingkat magister maupun implementasi industri. Konsep penjelasan model melalui pendekatan seperti SHAP dan LIME memberikan mekanisme interpretasi lokal maupun global yang memungkinkan kita melacak kontribusi setiap fitur terhadap prediksi. Di sisi lain, evaluasi kualitas penjelasan itu sendiri harus memenuhi kriteria ketat seperti validity, stability, faithfulness, dan usefulness agar hasil interpretasi dapat dipertanggungjawabkan secara ilmiah dan siap untuk publikasi di venue bereputasi.

Aspek trustworthiness juga menjadi sorotan utama, mencakup ketahanan model terhadap noise dan adversarial perturbation, penyesuaian terhadap bias dataset, serta penerapan teknik privasi seperti differential privacy atau federated learning. Dalam konteks penelitian S2, pemahaman ini harus diterjemahkan ke dalam desain eksperimen yang rigor. Praktikum 6 dirancang khusus untuk melatih kemampuan Anda menerapkan prediction pipeline, melakukan analisis SHAP, serta menjalankan failure-case dan error analysis secara sistematis. Hasil dari praktikum ini akan menjadi bahan kritis dalam research clinic mendatang, sekaligus menjadi baseline metodologis untuk proyek akhir Anda yang ditargetkan berkualitas minimal konferensi internasional terindeks Scopus.

Penting untuk diingat bahwa explainability dan trustworthiness bukanlah fitur statis. Seiring berkembangnya arsitektur model yang semakin kompleks, tantangan dalam mengukur dan memverifikasi perilaku model juga terus bergeser. Oleh karena itu, dokumentasi eksperimen, ablation study, dan validasi silang terhadap metrik kepercayaan harus dilakukan secara konsisten. Pastikan Anda menyelesaikan Praktikum 6 sebelum pertemuan berikutnya agar diskusi pada research clinic dapat berjalan produktif dan berbasis evidence kuat.

### Inti yang Harus Ditekankan

- Explainability dan trustworthiness adalah komponen wajib dalam pipeline penelitian data mining tingkat S2, bukan sekadar tambahan teknis pasca-pelatihan model.
- Evaluasi penjelasan model harus memenuhi standar validitas, stabilitas, kesetiaan (faithfulness), dan kemanfaatan (usefulness) agar layak menjadi dasar klaim penelitian.
- Praktikum 6 dan error/failure-case analysis menjadi jembatan esensial antara teori explainability dan penerapan metodologi penelitian yang rigor untuk proyek akhir.

### Transisi ke Slide Berikutnya

Dengan fondasi explainability dan trustworthiness yang telah kita bangun, pertemuan selanjutnya akan membawa kita ke ranah Emerging Data Mining, khususnya Foundation Models, Generative AI, dan Privacy-Preserving Learning. Topik ini akan menantang pemahaman kita tentang bagaimana menjelaskan model generatif yang sangat besar, serta bagaimana menjaga privasi dan keamanan data dalam skenario federated learning. Siapkan diri untuk mengeksplorasi paradigma baru yang sedang mengubah lanskap riset data mining secara fundamental.
