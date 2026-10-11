import React, { useState } from 'react';
import './App.css';
import { ChevronRight, ChevronLeft, Star, StarHalf, ShoppingCart, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// رابط صورتك الشخصية المرفوعة
const MONA_IMAGE = "https://storage.googleapis.com/pai-images/f5c358f2988b4887b47b4d3063f59f6d.jpeg"; 

const projects = [
  { id: 1, title: "تصميم منصة عقارية احترافية متكاملة", rating: 5.0, orders: 124, price: "120", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 2, title: "إنشاء متجر إلكتروني متجاوب مع جميع الشاشات", rating: 4.5, orders: 85, price: "95", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 3, title: "برمجة لوحة تحكم ذكية لإدارة البيانات", rating: 5.0, orders: 42, price: "140", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 4, title: "نظام إدارة تعلم LMS للمؤسسات التعليمية", rating: 4.5, orders: 67, price: "110", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 5, title: "تطوير تطبيق لإدارة العيادات والمراكز الطبية", rating: 5.0, orders: 29, price: "85", img: "https://images.unsplash.com/photo-1505751172107-573967a4f22a?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 6, title: "موقع عرض منيو مطعم مع نظام طلبات أونلاين", rating: 4.5, orders: 156, price: "70", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 11, title: "منصة لبيع وشراء الخدمات المصغرة والمستقلين", rating: 5.0, orders: 74, price: "115", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 12, title: "بوابة إخبارية سريعة مع نظام تصنيفات متقدم", rating: 4.5, orders: 45, price: "55", img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 13, title: "متجر أزياء متكامل مع سلة تسوق وأنظمة دفع", rating: 5.0, orders: 88, price: "80", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 14, title: "نظام SuiteStay لإدارة الفنادق والشقق المفروشة", rating: 4.5, orders: 31, price: "135", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 15, title: "تطوير تطبيق تأجير سيارات مع خرائط تفاعلية", rating: 5.0, orders: 47, price: "95", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 16, title: "منصة AudioStream لبث ونشر البودكاست", rating: 4.5, orders: 22, price: "50", img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 17, title: "مدونة تقنية تدعم الـ SEO ومقالات البرمجة", rating: 5.0, orders: 15, price: "35", img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 18, title: "موقع لجمع التبرعات وإدارة الحملات الخيرية", rating: 4.5, orders: 26, price: "75", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 19, title: "معرض أعمال فوتوغرافي لعرض الصور بدقة عالية", rating: 5.0, orders: 19, price: "45", img: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE },
  { id: 20, title: "أداة TeamSync لتنظيم العمل وإدارة فرق المهام", rating: 4.5, orders: 63, price: "125", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800", seller: "منى مصطفى", avatar: MONA_IMAGE }
];

const RatingStars = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<Star key={i} size={14} fill="var(--star)" color="var(--star)" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<StarHalf key={i} size={14} fill="var(--star)" color="var(--star)" />);
    } else {
      stars.push(<Star key={i} size={14} color="var(--text-muted)" />);
    }
  }
  return <div className="stars-wrapper">{stars}</div>;
};

function App() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  const project = projects[index];

  return (
    <div className="App">
      <header className="hero">
        <h1>معرض خدمات <span className="gradient-text">منى مصطفى</span> الاحترافي</h1>
        <p>تطوير واجهات المستخدم بأحدث التقنيات وبأعلى معايير الجودة.</p>
      </header>

      <div className="slider-container">
        <AnimatePresence mode="wait">
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="khamsat-card"
          >
            <div className="card-img">
              {/* الأسهم مدمجة داخل حاوية الصورة لتكون في منتصفها تماماً */}
              <div className="nav-btns-overlay">
                <button className="nav-btn-in" onClick={prev}><ChevronRight size={20} /></button>
                <button className="nav-btn-in" onClick={next}><ChevronLeft size={20} /></button>
              </div>
              <img 
                src={project.img} 
                alt={project.title} 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"; }}
              />
            </div>
            
            <div className="card-content">
              <h2 className="card-title">{project.title}</h2>
              
              <div className="card-meta">
                <div className="rating-container">
                  <RatingStars rating={project.rating} />
                  <span className="rating-text">{project.rating.toFixed(1)}</span>
                </div>
                <div className="orders-count">
                  <Users size={14} />
                  <span>{project.orders} طلب</span>
                </div>
              </div>

              <div className="seller-info">
                <img 
                  src={project.avatar} 
                  alt={project.seller} 
                  className="avatar"
                  onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=" + project.seller; }}
                />
                <span className="seller-name">{project.seller}</span>
              </div>
            </div>

            <div className="card-footer">
              <div className="price-tag">
                <span className="price-label">تبدأ من</span>
                <span className="price-value">${project.price}.00</span>
              </div>
              <button className="btn-order">
                <ShoppingCart size={18} />
                <span>اشتري الخدمة</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* تم حذف الأزرار القديمة من هنا لأنها أصبحت داخل الكارت */}
      </div>

      <footer>
        <p>© 2026 جميع الحقوق محفوظة لخدمات تطوير الواجهات</p>
      </footer>
    </div>
  );
}

export default App;
