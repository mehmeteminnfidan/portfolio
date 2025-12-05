// Mock data for portfolio website

export const personalInfo = {
  name: "Mehmet Emin Fidan",
  title: "Yazılım Geliştirici",
  tagline: "Yenilikçi ve modern çağa uygun yazılımlar geliştiren bir genç",
  email: "mehmeteminnfidan@gmail.com",
  phone: "+90 530 079 63 17",
  location: "Konya, Türkiye",
  image: "https://i.ibb.co/5xr7S5C0/MEF-FOTO.jpg",
  bio: "19 yaşında genç bir yazılım geliştiricisiyim. Kendi alanımda oyun, yapay zeka ve siber güvenlik konuları üzerinden çalışmalar ve öğrenimlerim devam ediyor. Aynı zamanda ileri matematik eğitimleri alarak yaptığım işi daha profesyonel ve hatasız yapmaya gayret gösteriyorum.",
  resumeUrl: "#"
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/mehmeteminnfidan", icon: "github" },
  { name: "Twitter", url: "https://x.com/eminfdnnn", icon: "twitter" },
  { name: "Email", url: "mailto:mehmeteminnfidan@gmail.com", icon: "mail" }
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML / CSS / JS", level: 68 },
      { name: "React", level: 55 }
    ]
  },
  {
    category: "Backend & Programming",
    items: [
      { name: "Python", level: 80 },
      { name: "Backend APIs", level: 60 },
      { name: "Database / SQL", level: 40 }
    ]
  },
  {
    category: "Core Skills",
    items: [
      { name: "Algoritmik Düşünme", level: 75 },
      { name: "Problem Çözme", level: 78 },
      { name: "Matematik", level: 85 }
    ]
  }
];

export const projects = [
  {
    id: "1",
    title: "Yakında Gelecek Projeler",
    description: "Oyun geliştirme, yapay zeka ve siber güvenlik alanlarında çalışmalarım devam ediyor. Yeni projeler çok yakında burada!",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    technologies: ["Python", "AI", "Game Dev"],
    github: "https://github.com/mehmeteminnfidan",
    demo: "#",
    featured: true
  }
];

export const experience = [
  {
    id: "1",
    title: "Bilgisayar ve Matematik Öğrencisi",
    company: "Necmettin Erbakan Üniversitesi",
    location: "Konya, Türkiye",
    period: "Devam Ediyor",
    description: "Yazılım geliştirme, yapay zeka ve siber güvenlik alanlarında aktif öğrenim ve araştırma yapıyorum.",
    responsibilities: [
      "İleri düzey matematik dersleri",
      "Algoritma ve veri yapıları çalışmaları",
      "Oyun geliştirme ve yapay zeka projeleri",
      "Siber güvenlik araştırmaları"
    ]
  }
];

export const blogPosts = [
  {
    id: "1",
    title: "Yapay Zeka ile Oyun Geliştirme",
    excerpt: "Oyun geliştirmede yapay zeka algoritmalarının kullanımı ve NPC'lere akıllı davranışlar kazandırma.",
    date: "2025-01-15",
    readTime: "7 dk",
    category: "AI & Gaming",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop"
  },
  {
    id: "2",
    title: "Siber Güvenlikte Temel Prensipler",
    excerpt: "Güvenli yazılım geliştirme pratikleri ve siber güvenlik temelleri hakkında bilmeniz gerekenler.",
    date: "2025-01-10",
    readTime: "8 dk",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
  },
  {
    id: "3",
    title: "Python ile Algoritma Optimizasyonu",
    excerpt: "Python kullanarak algoritmaları optimize etme teknikleri ve matematiksel yaklaşımlar.",
    date: "2025-01-05",
    readTime: "6 dk",
    category: "Python",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop"
  },
  {
    id: "4",
    title: "Matematik ve Programlama İlişkisi",
    excerpt: "İleri matematik bilgisinin yazılım geliştirme süreçlerine katkıları ve uygulamaları.",
    date: "2024-12-28",
    readTime: "9 dk",
    category: "Mathematics",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop"
  }
];
