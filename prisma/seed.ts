import { PrismaClient, type Prisma } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
    const persons = [
        { name: "Öğrenci" },
        { name: "Veli" },
    ];

    const lessons = [
        {
            slug: "ortaokul-matematik",
            title: "Ortaokul Matematik",
            level: "5–8. Sınıf",
            description:
                "Temel aritmetik, cebir ve geometri konularıyla problem çözme ve akıl yürütme becerileri geliştirir.",
            color: "primary",
            topics: [
                "Doğal Sayılar, Kesirler ve Ondalık Gösterim",
                "Yüzdeler, Oran-Orantı",
                "EBOB–EKOK",
                "Cebirsel İfadeler ve Birinci Dereceden Denklemler",
                "Veri, Grafik ve Olasılığa Giriş",
                "Geometri: Açı, Üçgen, Dörtgen, Çokgenler",
                "Çember ve Daire",
                "Ölçme: Çevre, Alan ve Hacim"
            ],
            outcomes: [
                "Matematiksel akıl yürütme ve strateji geliştirme",
                "Grafik ve tabloları okuma–yorumlama",
                "Günlük hayat problemlerini matematikle çözme",
                "Temel cebir ve geometriye sağlam temel oluşturma"
            ]
        },
        {
            slug: "lise-biyoloji",
            title: "Lise Biyoloji",
            level: "9–12. Sınıf",
            description:
                "Canlıların yapısı, genetik, evrim ve ekoloji üzerine derinlemesine biyoloji eğitimi.",
            color: "accent",
            topics: [
                "Hücrenin Yapısı ve Organeller",
                "Canlılarda Temel Bileşikler",
                "Canlıların Sınıflandırılması",
                "İnsan Fizyolojisi: Sindirim, Dolaşım, Solunum, Sinir–Endokrin",
                "Bitki Biyolojisi: Fotosentez, Taşıma Sistemleri",
                "Genetik ve Kalıtım (DNA, Gen İfadesi, Mutasyonlar)",
                "Evrim ve Doğal Seçilim",
                "Ekosistem Ekolojisi ve Popülasyon Dinamikleri",
                "Biyoteknoloji ve Etik"
            ],
            outcomes: [
                "Biyolojik sistemleri hücre–organizma–ekosistem düzeyinde açıklayabilme",
                "Deney tasarlama ve bilimsel yöntem uygulama",
                "Genetik ve biyoteknolojiye ilişkin gelişmeleri yorumlama",
                "Sağlık ve çevre konularında bilimsel farkındalık kazanma"
            ]
        },
        {
            slug: "ortaokul-fen-bilimleri",
            title: "Ortaokul Fen Bilimleri",
            level: "5–8. Sınıf",
            description:
                "Fizik, kimya ve biyolojinin temel konularına giriş; deney ve gözlemle fen okuryazarlığı kazandırır.",
            color: "primary",
            topics: [
                "Maddenin Tanecikli Yapısı ve Hâl Değişimleri",
                "Karışımlar, Saf Maddeler ve Ayırma Yöntemleri",
                "Isı, Sıcaklık ve Isı Alışverişi",
                "Kuvvet ve Hareket, Basit Makineler",
                "Işık ve Ses",
                "Elektrik Devreleri ve Mıknatıslar",
                "Dünya, Ay ve Güneş; Güneş Sistemi ve Uzay",
                "Canlılar ve Yaşam: Hücre, Organ Sistemleri, Ekosistem"
            ],
            outcomes: [
                "Fen okuryazarlığı ve bilimsel süreç becerileri geliştirme",
                "Gözlem–ölçüm yapma, veriden çıkarımda bulunma",
                "Deney güvenliği ve etik kurallara uyma",
                "Günlük yaşamda fen kavramlarını uygulama"
            ]
        }
    ];

    await Promise.all(
        persons.map(({ name }) =>
            prisma.person.upsert({
                where: { name } satisfies Prisma.PersonWhereUniqueInput,
                update: { name },
                create: { name },
            }),
        ),
    );

    await prisma.$transaction(
        lessons.map((les) =>
            prisma.lesson.upsert({
                where: { slug: les.slug }, // unique alan
                update: {
                    title: les.title,
                    level: les.level,
                    description: les.description,
                    color: les.color,
                    // JSON alanlar alanlar
                    topics: les.topics as Prisma.JsonArray,
                    outcomes: les.outcomes as Prisma.JsonArray,
                },
                create: {
                    slug: les.slug,
                    title: les.title,
                    level: les.level,
                    description: les.description,
                    color: les.color,
                    topics: les.topics as Prisma.JsonArray,
                    outcomes: les.outcomes as Prisma.JsonArray,
                },
            })
        )
    )
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
