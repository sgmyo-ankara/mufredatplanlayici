const zorunlu_havuz_data = [
    { "id": "SGM 103", "name": "Ağ ve Bilgisayar Mimarileri", "akts": 5, "type": "Z", "desc": "Bilgisayar bileşenlerinin çalışma mantığı ve ağ yapıları." },
    { "id": "SGM 107", "name": "Temel Matematik", "akts": 4, "type": "Z", "desc": "Mühendislik ve bilişim uygulamaları için temel matematik." },
    { "id": "SGM 252", "name": "Siber Güvenlikte Yapay Zeka", "akts": 5, "type": "Z", "desc": "Makine öğrenmesi algoritmaları ile saldırı tespiti ve anomali analizi." },
    { "id": "SGM XXX", "name": "Bilgi Güvenliği Yönetimi", "akts": 5, "type": "Z", "desc": "ISO 27001 standartları, risk analizi ve politika oluşturma süreçleri." },
    { "id": "SGM 245", "name": "Siber Saldırılar ve Savunma Yöntemleri", "akts": 5, "type": "Z", "desc": "Yaygın siber saldırı vektörleri ve bunlara karşı savunma stratejileri." }
];

const secmeli_havuz_data = [
    { "id": "SGM 233", "name": "Nesne Tabanlı Programlama", "akts": 6, "type": "S", "desc": "OOP kavramları, sınıf-nesne ilişkisi, kalıtım ve çok biçimlilik." },
    { "id": "SGM 237", "name": "Adli Bilişim (Forensics)", "akts": 6, "type": "S", "desc": "Dijital delil toplama, disk ve bellek analizi, vaka inceleme süreçleri." },
    { "id": "SGM 239", "name": "İnternet Programlama", "akts": 6, "type": "S", "desc": "Web teknolojileri, HTML/CSS/JS ve güvenli backend geliştirme temelleri." },
    { "id": "SGM 241", "name": "Web Sızma Testi", "akts": 6, "type": "S", "desc": "SQL Injection, XSS, CSRF gibi web zafiyetlerinin tespiti ve istismarı. Burp Suite kullanımı." },
    { "id": "SGM 243", "name": "Mobil Tek. ve Mobil Sızma Testi", "akts": 6, "type": "S", "desc": "Android ve iOS mimarisi, mobil uygulama güvenlik testleri ve tersine mühendislik." },
    { "id": "SGM 245", "name": "Siber Saldırılar ve Savunma Yönt.", "akts": 6, "type": "S", "desc": "Güncel saldırı teknikleri (MITM, DoS) ve savunma mekanizmaları." },
    { "id": "SGM 251", "name": "Sızma Testi Raporlama", "akts": 6, "type": "S", "desc": "Bulguların teknik ve yönetici özeti formatında raporlanması, yasal çerçeveler." },
    { "id": "SGM 253", "name": "Kablosuz Ağ Sızma Testi", "akts": 6, "type": "S", "desc": "Wi-Fi şifreleme protokolleri, WEP/WPA/WPA2 kırma teknikleri ve sahte erişim noktaları." },
    { "id": "SGM 255", "name": "Active Directory Güvenliği", "akts": 6, "type": "S", "desc": "Windows domain yapısı, Kerberos saldırıları, yetki yükseltme ve AD sıkılaştırma." },
    { "id": "SGM 257", "name": "Otomasyon ve Betik Geliştirme", "akts": 6, "type": "S", "desc": "Bash ve Python ile güvenlik araçlarını otomatize etme ve özel toollar yazma." },
    { "id": "SGM 240", "name": "Bulut Tek. ve Bulut Sızma Testi", "akts": 5, "type": "S", "desc": "AWS/Azure temelleri, bulut konfigürasyon hataları ve bulut güvenliği testleri." },
    { "id": "SGM 242", "name": "Zararlı Yazılım Analizi ve Tespiti", "akts": 5, "type": "S", "desc": "Malware davranış analizi, sandbox kullanımı ve imza tabanlı tespit yöntemleri." },
    { "id": "SGM 244", "name": "Bilişim Hukuku", "akts": 5, "type": "S", "desc": "KVKK, 5651 sayılı kanun, siber suçlar ve bilişim hukuku mevzuatı." },
    { "id": "SGM 246", "name": "Veri Tabanı Uygulamaları ve Güv.", "akts": 5, "type": "S", "desc": "SQL dili, veritabanı yönetimi ve veritabanı güvenliği sıkılaştırma." },
    { "id": "SGM 248", "name": "Veri Yapıları ve Algoritma", "akts": 5, "type": "S", "desc": "Veri saklama yöntemleri, sıralama ve arama algoritmaları, performans analizi." },
    { "id": "SGM 250", "name": "Yapay Zekâ ve Siber Güvenlik", "akts": 5, "type": "S", "desc": "AI destekli siber savunma sistemleri ve adversarial machine learning kavramları." },
    { "id": "SGM 214", "name": "İleri Sızma Testi (Adv. PenTest)", "akts": 5, "type": "S", "desc": "İleri seviye istismar teknikleri, tünelleme, antivirüs atlatma ve sosyal mühendislik." }
];