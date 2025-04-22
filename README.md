# *Book Library API*  

Merhaba! Bu proje, kitapların listelenebildiği, yeni kitap eklenebilen, güncellenebilen ve silinebilen bir *RESTful Web API* uygulamasıdır. Modern yazılım geliştirme standartlarına uygun şekilde geliştirilmiştir.

---

## *İçindekiler*  
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)  
- [API Özellikleri](#api-özellikleri)  
- [Klasör Yapısı](#klasör-yapısı)  
- [Nasıl Kurulur?](#nasıl-kurulur)  


---

## 🚀 *Kullanılan Teknolojiler*

| Teknoloji | Açıklama |
|----------|----------|
| ASP.NET Core Web API | API servislerini oluşturmak için |
| Entity Framework Core | ORM işlemleri |
| SQL Server | Veritabanı yönetimi |
| Swagger | API test arayüzü |
| LINQ | Veri sorgulama kolaylığı |
| AutoMapper (varsa) | Veri dönüşüm işlemleri |

---

## ✨ *API Özellikleri*

- GET /api/books → Tüm kitapları listeler  
- GET /api/books/{id} → Belirli bir kitabı getirir  
- POST /api/books → Yeni kitap ekler  
- PUT /api/books/{id} → Var olan kitabı günceller  
- DELETE /api/books/{id} → Kitabı siler  

Swagger üzerinden tüm bu işlemler test edilebilir.

---

## 📁 *Klasör Yapısı*
BookLibraryAPI
│
├── Controllers/       → API uç noktaları burada tanımlanır
├── Models/            → Veri modelleri (örneğin Book.cs)
├── Data/              → DbContext ve veritabanı bağlantı işlemleri
├── Migrations/        → EF Core ile oluşturulan migration dosyaları
├── Program.cs         → Uygulama giriş noktası
└── appsettings.json   → Konfigürasyon ayarlar

## ⚙️ *Nasıl Kurulur?*

1. Repoyu klonla:
   ```bash
   git clone https://github.com/sevdeaydinv/book-library-api.git
2.	Visual Studio’da aç
3.	appsettings.json içindeki veritabanı bağlantısını düzenle
4.	Migration’ları çalıştır:
   Update-Database
5. Projeyi çalıştır (Ctrl + F5) ve Swagger arayüzünden test et
