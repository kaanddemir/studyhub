(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const b of c.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&n(b)}).observe(document,{childList:!0,subtree:!0});function o(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(l){if(l.ep)return;l.ep=!0;const c=o(l);fetch(l.href,c)}})();const K={user:{name:"",role:"Student",university:"",department:"",avatar:"",isSetup:!1,isPremium:!1,language:"en",themePreference:"emerald",bgPreference:"default"},stats:{courses:{total:0,new:0},completed:{total:0,label:"No courses completed",count:0},challenges:{total:0,label:"No active challenges"},streak:{total:0,label:"No streak yet"}},chartData:[{day:"Mon",study:0,exam:0},{day:"Tue",study:0,exam:0},{day:"Wed",study:0,exam:0},{day:"Thu",study:0,exam:0},{day:"Fri",study:0,exam:0},{day:"Sat",study:0,exam:0},{day:"Sun",study:0,exam:0}],examSchedule:[{date:15,day:"W"},{date:16,day:"T"},{date:17,day:"F"},{date:18,day:"S"},{date:19,day:"S"},{date:20,day:"M"},{date:21,day:"T"}],courses:[],notebook:{notes:[{id:1,title:"My First Note",content:"<h3>Welcome to your Digital Notebook!</h3><p>This looks just like a spiral notebook, but acts like a Word doc.</p><ul><li><b>Bold</b> text</li><li><i>Italic</i> text</li></ul>",date:new Date().toISOString(),category:"General"}]},todos:[],weeklySchedule:{events:{}},exams:[],cheatsheets:[]},oe=localStorage.getItem("studyhub_data");let Y=K;if(oe)try{const t=JSON.parse(oe);Y={...K,...t},Y.exams||(Y.exams=K.exams),Y.cheatsheets||(Y.cheatsheets=K.cheatsheets)}catch(t){console.error("Failed to parse stored data",t)}const p=Y;function H(){try{localStorage.setItem("studyhub_data",JSON.stringify(p))}catch(t){console.error("Failed to save data to localStorage:",t),t.name==="QuotaExceededError"&&console.warn("LocalStorage quota exceeded. Consider clearing old data.")}}const ne={en:{dashboard:"Dashboard",schedule:"Schedule",courses:"Courses",exams:"Exams",notebook:"Notebook",cheatsheets:"Cheatsheets",pomodoro:"Pomodoro",settings:"Settings",hello:"Hello",search_placeholder:"Search...",premium:"Premium",premium_active:"Premium Active",total_courses:"Total Courses",completed:"Completed",studyai:"StudyAI",hours_spent:"Hours Spent",time:"Time",quick_notes:"Quick Notes",scratchpad:"Scratchpad",scratchpad_browse:"Browse",scratchpad_draw:"Draw",scratchpad_save_gallery:"Save to Gallery",scratchpad_clear:"Clear",scratchpad_select_image:"Select an image to load",scratchpad_no_sketches:"No saved sketches",focus_timer:"Focus Timer",profile:"Profile",calendar:"Calendar",todo_list:"Todo List",calculator:"Calculator",bookmarks:"Bookmarks",grade_calculation:"Grade Calculation",stopwatch:"Stopwatch",mini_games:"Mini Games",daily_habits:"Daily Habits",weekly_schedule:"Weekly Schedule",photo_frame:"Photo Frame",general:"General",language:"Language",about:"About",developer:"Developer",theme_color:"Theme Color",personalize_accent:"Personalize your accent color.",background_style:"Background Style",default:"Default",tinted:"Tinted",preview_mode:"Preview Mode",preview_mode_desc:"The entire app adapts to your adjustments immediately.",save_layout:"Save Current Layout",reset_layout:"Reset Default Layout",data_backup:"Data Backup & Restore",export_data:"Export Data",import_data:"Import Data",current_plan:"Current Plan",basic_plan:"Basic Plan",free:"Free",upgrade:"Upgrade",active:"Active",changes_saved:"Changes are saved automatically.",version:"Version",basic_edition:"Basic Edition",available_widgets:"Available Widgets",drag_remove:"Drag widget here to remove",loading_summary:"Loading summary...",layout_settings:"Layout Settings",layout_desc:"Customize how your dashboard looks.",data_desc:"Export your data to JSON or restore from a backup.",premium_plan:"Premium Plan",remove_avatar:"Remove Avatar",your_name_placeholder:"Your Name",uni_name_placeholder:"University Name",major_placeholder:"Major / Dept",developer_mode:"Developer Mode",dev_desc:"Experimental features and overrides.",enable_premium:"Enable Premium",unlock_desc:"Unlocks all premium features.",lets_known_you:"Let's get to know you",call_you:"Tell us what to call you.",full_name:"Full Name",academic_profile:"Academic Profile",personalize_dashboard:"This helps us personalize your dashboard.",university:"University / School",department:"Department / Major",make_yours:"Make it yours",choose_base_color:"Choose a base color and tweak it.",base_color:"Base Color",next_step:"Next Step",get_started:"Get Started",back:"Back",step:"Step",name_placeholder:"e.g. John Doe",uni_placeholder:"e.g. MIT",dept_placeholder:"e.g. Computer Science",clean_gray:"Clean Gray/White",theme_tint:"Theme Tint",pastel_look:"Pastel Look",add_photo_widget:"Add Photo Widget",manage_widgets:"Manage Widgets",all_widgets_active:"All widgets are active",coming_soon:"Coming Soon",optional:"Optional",summary_prefix:"You have",summary_suffix:"",classes:"classes",todos:"to-dos",months:["January","February","March","April","May","June","July","August","September","October","November","December"],days_short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],no_events:"No events scheduled.",events_on:"Events on",tbd:"TBD",clear_schedule:"Clear Schedule",clear_all_q:"Clear All?",clear_all_desc:"This will remove all entries.",yes:"Yes",no:"No",tasks_count:"Tasks",add_new_task_placeholder:"Add a new task...",no_tasks_yet:"No tasks yet",add_one_to_start:"Add one above to get started",delete_task_confirm:"Delete this task?",cancel:"Cancel",delete:"Delete",save:"Save",task_name_placeholder:"Task Name",add_task_prompt:"Add Task for",logout:"Logout",hour_unit:"hrs",exams_title:"Exams",add_exam:"Add Exam",no_exams_yet:"No Exams Yet",no_exams_desc:"Relax! You have no upcoming exams scheduled. Add one to start tracking.",days_left:"DAYS LEFT",edit_profile:"Edit Profile",save_changes:"Save Changes",fill_all_fields:"Please fill in all fields",name_label:"Name",university_label:"University",department_label:"Department",today_caps:"TODAY",passed_caps:"PASSED",new_exam_setup:"New Exam Setup",edit_exam_setup:"Edit Exam Setup",step_1_basic:"Step 1 of 2: Basic Info",step_2_logistics:"Step 2 of 2: Logistics",course_name:"Course Name",course_code:"Course Code",exam_type:"Exam Type",date:"Date",time:"Time",location_platform:"Location / Platform",delete_exam_confirm:"Delete Exam?",action_undone:"This action cannot be undone.",edit_exam:"Edit Exam",delete_exam:"Delete Exam",my_courses:"My Courses",new_course:"New Course",no_courses_yet:"No Courses Yet",no_courses_desc:"Add your first course to get started tracking your progress.",course_caps:"COURSE",no_details:"No details added",view_details:"View details",new_course_setup:"New Course Setup",create_course:"Create Course",instructor:"Instructor",email:"Email",schedule_time:"Schedule",note_optional:"Note (Optional)",delete_course_confirm:"Delete Course?",edit_course_setup:"Edit Course Setup",note_placeholder:"Any initial thoughts...",course_not_found:"Course not found",back_to_courses:"Back to Courses",course_info:"COURSE INFO",edit:"Edit",not_set:"Not set",resources:"Resources",add_file:"Add File",no_resources_yet:"No resources yet",unknown_type:"Unknown Type",delete_resource_confirm:"Delete Resource?",gemini_powered:"Gemini Powered",chat_history:"Chat History",new_chat:"New Chat",ask_question_placeholder:"Ask a question about",ai_mistakes_disclaimer:"AI can make mistakes. Verify important info.",delete_session_confirm:"Delete Chat?",session_deleted_desc:"This chat session will be deleted.",clear_history_confirm:"Clear History?",chats_lost_desc:"Chats will be permanently lost.",new_conversation:"New Conversation",instructor_name:"INSTRUCTOR NAME",save_changes_btn:"Save Changes",digital_notebook:"Digital Notebook",welcome_notebook:"Welcome to Notebook",welcome_msg:"Welcome!",welcome_desc:"This is your new digital notebook.",index:"Index",untitled_note:"Untitled Note",empty_note:"Empty note...",page_num:"Page",new_notebook:"New Notebook",select_page_msg:"Select a page or create new",tear_out_confirm:"Tear Out Page?",remove_note_desc:"This note will be permanently removed.",tear_out:"Tear Out",page_title_placeholder:"Page Title...",page_title_placeholder:"Page Title...",start_writing:"Start writing here...",bold:"Bold",italic:"Italic",underline:"Underline",text_color:"Text Color",highlight_color:"Highlight Color",align_text:"Align Text",toggle_paper:"Toggle Paper Style",prev_page:"Previous Page",next_page:"Next Page",delete_page:"Delete Page",welcome_title:"Welcome to Notebook",welcome_body:"<h3>Welcome to your Digital Notebook!</h3><p>This looks just like a spiral notebook, but acts like a Word doc.</p><br><p><b>Bold text</b></p><p><i>Italic text</i></p>",new_note:"New Note",no_cheatsheets_yet:"No Cheatsheets Yet",create_first_sheet:"Create your first formula sheet, code snippet, or summary note.",edit_title:"Edit Title",delete_note_confirm:"Delete Note?",enter_title_start:"Enter a title to get started.",new_note_placeholder:"e.g. Physics Formulas",edit_note:"Edit Note",update_note_title:"Update your note title.",attachment:"Attachment",title:"Title",sheet_not_found:"Sheet not found!",markdown_editor:"Markdown Editor",supports_md:"Supports MD",start_typing_placeholder:"Start typing your notes here...",attachments_title:"Attachments",add_image:"Add Image",no_images_yet:"No images yet",delete_image:"Delete Image?",delete_image_desc:"This cannot be undone.",total_courses:"Total Courses",completed:"Completed",studyai:"StudyAI",hours_spent:"Hours Spent",log_flow:"Log Flow",record_session:"Record your study session.",save_entry:"Save Entry",total_streak:"Total Streak",days_l:"days",todos:"Todos",habits:"Habits",stuck_msg:"Stuck? I am here to help!",ask_studyai:"Ask StudyAI",calculator:"Calculator",time_title:"Time",switch_mode:"Switch Mode",daily_habits:"Daily Habits",done:"Done",no_habits_msg:"No habits defined. Add one!",new_habit_placeholder:"New habit...",add_photo:"Add Photo",change_photo:"Change Photo",zoom_image:"Zoom Image",remove_photo:"Remove Photo",delete_photo_confirm:"Delete Photo?",delete:"Delete",delete_photo_confirm:"Delete Photo?",delete:"Delete",cancel:"Cancel",image_too_large:"Image is too large. Please select an image under 5MB.",storage_full:"Storage full. Cannot save image.",dashboard_photo_alt:"Dashboard Photo",focus_timer:"Focus Timer",work:"Work",break:"Break",time_break_msg:"Time for a break! Good job.",break_over_msg:"Break is over! Back to work.",timer_complete:"Timer Complete",stopwatch:"Stopwatch",reset:"Reset",start:"Start",stop:"Stop",bookmarks:"Bookmarks",bookmarks:"Bookmarks",learning:"Learning",google_ai_desc:"Google AI Assistant",openai_chat_desc:"OpenAI Chat",youtube_desc:"YouTube",quick_notes:"Quick Notes",no_notes_yet:"No saved notes yet",create_one:"Create one",browse:"Browse",new:"New",type_ideas:"Type your ideas here...",add_note:"Add Note",update_note:"Update Note",saved_msg:"Saved!",mode_now:"Mode now",untitled_note:"Untitled Note",grade_calc:"Grade Calculation",assessment:"ASSESSMENT",grade:"GRADE",calculate:"Calculate",enter_grades_msg:"Enter grades to calculate",current_avg:"Current Avg",need_score_msg:"Need",on_msg:"on",for_msg:"for",impossible:"Impossible?",passed_msg:"You passed!",assessment_name:"Name",midterm:"Midterm",final_exam:"Final",new_assessment:"New",mini_games:"Mini Games",yes_no:"Yes / No",decision_maker:"Decision maker",decide:"Decide",random_picker:"Random Picker",choice_generator:"Choice generator",add_option_placeholder:"Add option...",pick_random:"Pick Random",winner:"Winner",again:"Again",option_a:"Option A",option_b:"Option B",maybe:"MAYBE",ans_yes:"YES",ans_no:"NO",upgrade_to:"Upgrade to",unlock_potential:"Unlock the full potential of your study workflow.",forever:"/ forever",essential_tools:"Essential tools for everyday studying.",standard_dashboard:"Standard Dashboard",basic_analytics:"Basic Analytics",limited_ai:"Limited AI Assistance",cloud_sync_backup:"Cloud Sync & Backup",advanced_customization:"Advanced Customization",recommended:"Recommended",per_month:"/ month",premium_desc:"For serious students who want the best.",unlimited_ai:"Extended AI Tutor",cloud_sync_multi:"Cloud Sync & Multi-Device",advanced_analytics:"Advanced Performance Analytics",custom_themes:"Custom Themes & Icons",upgrade_now:"Coming Soon",secure_payment:"Secure payment processed by Stripe. Cancel anytime.",logout_confirmation_title:"Log Out?",logout_confirmation_desc:"Are you sure you want to exit? You will return to the setup screen.",reset_layout_confirm:"Are you sure you want to reset the dashboard layout to default?",overwrite_confirm:"This will overwrite your current data. Are you sure?",invalid_backup:"Invalid backup file. Missing critical data.",parse_error:"Error parsing backup file.",no_courses_completed:"No courses completed",no_active_challenges:"No active challenges",no_streak_yet:"No streak yet",student_role:"Student",security_lock:"Access Dev"},tr:{dashboard:"Kontrol Paneli",schedule:"Takvim",courses:"Dersler",exams:"Sınavlar",notebook:"Not Defteri",cheatsheets:"Kopyalar",pomodoro:"Pomodoro",settings:"Ayarlar",hello:"Merhaba",search_placeholder:"Ara...",premium:"Premium",premium_active:"Premium Aktif",total_courses:"Toplam Ders",completed:"Tamamlanan",studyai:"StudyAI",hours_spent:"Harcanan Saat",log_flow:"Akışı Kaydet",record_session:"Çalışma oturumunu kaydet.",save_entry:"Girişi Kaydet",time:"Zaman",quick_notes:"Hızlı Notlar",scratchpad:"Karalama Defteri",scratchpad_browse:"Gözat",scratchpad_draw:"Çiz",scratchpad_save_gallery:"Galeriye Kaydet",scratchpad_clear:"Temizle",scratchpad_select_image:"Yüklemek için bir görsel seç",scratchpad_no_sketches:"Kayıtlı çizim yok",scratchpad_select_image:"Yüklemek için seç",focus_timer:"Odaklanma",profile:"Profil",calendar:"Takvim",todo_list:"Yapılacaklar",calculator:"Hesap Makinesi",bookmarks:"Yer İşaretleri",grade_calculation:"Not Hesaplama",stopwatch:"Kronometre",mini_games:"Oyunlar",daily_habits:"Günlük Alışkanlıklar",weekly_schedule:"Haftalık Program",photo_frame:"Fotoğraf Çerçevesi",general:"Genel",language:"Dil",about:"Hakkında",developer:"Geliştirici",theme_color:"Tema Rengi",personalize_accent:"Vurgu rengini kişiselleştir.",background_style:"Arkaplan Stili",default:"Varsayılan",tinted:"Renkli",preview_mode:"Önizleme Modu",preview_mode_desc:"Tüm uygulama değişikliklere anında uyum sağlar.",save_layout:"Düzeni Kaydet",reset_layout:"Varsayılan Düzeni Sıfırla",data_backup:"Veri Yedekleme & Geri Yükleme",export_data:"Veriyi Dışa Aktar",import_data:"Veriyi İçe Aktar",current_plan:"Mevcut Plan",basic_plan:"Temel Plan",free:"Ücretsiz",upgrade:"Yükselt",active:"Aktif",changes_saved:"Değişiklikler otomatik kaydedilir.",version:"Sürüm",basic_edition:"Temel Sürüm",available_widgets:"Mevcut Widgetlar",drag_remove:"Kaldırmak için buraya sürükle",loading_summary:"Özet yükleniyor...",layout_settings:"Düzen Ayarları",layout_desc:"Panelinin nasıl görüneceğini özelleştir.",data_desc:"Verilerini JSON olarak dışa aktar veya yedekten geri yükle.",premium_plan:"Premium Plan",remove_avatar:"Avatarı Kaldır",your_name_placeholder:"Adın",uni_name_placeholder:"Üniversite Adı",major_placeholder:"Bölüm",developer_mode:"Geliştirici Modu",dev_desc:"Deneysel özellikler ve geçersiz kılmalar.",enable_premium:"Premium'u Etkinleştir",unlock_desc:"Tüm premium özelliklerin kilidini açar.",lets_known_you:"Seni tanıyalım",call_you:"Sana nasıl hitap edelim?",full_name:"Ad Soyad",academic_profile:"Akademik Profil",personalize_dashboard:"Bu, paneli kişiselleştirmemize yardımcı olur.",university:"Üniversite / Okul",department:"Bölüm",make_yours:"Senin olsun",choose_base_color:"Bir renk seç ve özelleştir.",base_color:"Ana Renk",next_step:"Sonraki Adım",get_started:"Başla",back:"Geri",step:"Adım",name_placeholder:"örn. Ahmet Yılmaz",uni_placeholder:"örn. İstanbul Üniversitesi",dept_placeholder:"örn. Bilgisayar Mühendisliği",clean_gray:"Temiz Gri/Beyaz",theme_tint:"Tema Tonu",pastel_look:"Pastel Görünüm",logout:"Çıkış Yap",add_photo_widget:"Fotoğraf Widget Ekle",manage_widgets:"Widgetları Yönet",all_widgets_active:"Tüm widgetlar aktif",coming_soon:"Yakında",optional:"Opsiyonel",summary_prefix:"Toplam",summary_suffix:"var",classes:"ders",todos:"yapılacak",months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],days_short:["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],no_events:"Planlanmış etkinlik yok.",events_on:"Tarihindeki Etkinlikler:",tbd:"Belirsiz",clear_schedule:"Programı Temizle",clear_all_q:"Hepsini Sil?",clear_all_desc:"Tüm girişler silinecek.",yes:"Evet",no:"Hayır",tasks_count:"Görev",add_new_task_placeholder:"Yeni görev ekle...",no_tasks_yet:"Henüz görev yok",add_one_to_start:"Başlamak için yukarıdan ekle",delete_task_confirm:"Bu görevi sil?",cancel:"İptal",course_not_found:"Ders bulunamadı",back_to_courses:"Derslere Dön",course_info:"DERS BİLGİSİ",edit:"Düzenle",not_set:"Ayarlanmadı",resources:"Kaynaklar",add_file:"Dosya Ekle",no_resources_yet:"Henüz kaynak yok",unknown_type:"Bilinmeyen Tür",delete_resource_confirm:"Kaynağı Sil?",gemini_powered:"Gemini Destekli",chat_history:"Sohbet Geçmişi",new_chat:"Yeni Sohbet",ask_question_placeholder:"Soru sor:",ai_mistakes_disclaimer:"YZ hata yapabilir. Önemli bilgileri doğrulayın.",delete_session_confirm:"Sohbeti Sil?",session_deleted_desc:"Bu sohbet oturumu silinecek.",clear_history_confirm:"Geçmişi Temizle?",chats_lost_desc:"Sohbetler kalıcı olarak silinecek.",new_conversation:"Yeni Konuşma",instructor_name:"EĞİTMEN ADI",save_changes_btn:"Değişiklikleri Kaydet",delete:"Sil",save:"Kaydet",task_name_placeholder:"Görev Adı",add_task_prompt:"Tarihi için görev ekle",hour_unit:"saat",exams_title:"Sınavlar",add_exam:"Sınav Ekle",no_exams_yet:"Henüz Sınav Yok",no_exams_desc:"Rahatla! Planlanmış sınavın yok. Takip etmek için bir tane ekle.",days_left:"GÜN KALDI",today_caps:"BUGÜN",passed_caps:"GEÇTİ",new_exam_setup:"Yeni Sınav Kurulumu",edit_exam_setup:"Sınav Düzenle",step_1_basic:"Adım 1 / 2: Temel Bilgiler",step_2_logistics:"Adım 2 / 2: Lojistik",course_name:"Ders Adı",course_code:"Ders Kodu",exam_type:"Sınav Türü",date:"Tarih",time:"Saat",location_platform:"Konum / Platform",delete_exam_confirm:"Sınavı Sil?",action_undone:"Bu işlem geri alınamaz.",edit_exam:"Sınavı Düzenle",delete_exam:"Sınavı Sil",my_courses:"Derslerim",new_course:"Yeni Ders",no_courses_yet:"Henüz Ders Yok",no_courses_desc:"İlerlemeni takip etmek için ilk dersini ekle.",course_caps:"DERS",no_details:"Detay eklenmedi",view_details:"Detayları gör",new_course_setup:"Yeni Ders Kurulumu",create_course:"Ders Oluştur",instructor:"Eğitmen",email:"E-posta",schedule_time:"Program",note_optional:"Not (İsteğe bağlı)",delete_course_confirm:"Dersi Sil?",edit_course_setup:"Dersi Düzenle",note_placeholder:"İlk düşünceler...",digital_notebook:"Dijital Defter",welcome_notebook:"Deftere Hoşgeldin",welcome_msg:"Hoşgeldin!",welcome_desc:"Bu senin yeni dijital defterin.",index:"İçindekiler",untitled_note:"Başlıksız Not",empty_note:"Boş not...",page_num:"Sayfa",new_notebook:"Yeni Defter",select_page_msg:"Bir sayfa seç veya yeni oluştur",tear_out_confirm:"Sayfayı Yırt?",remove_note_desc:"Bu not kalıcı olarak silinecek.",tear_out:"Yırt At",page_title_placeholder:"Sayfa Başlığı...",page_title_placeholder:"Sayfa Başlığı...",start_writing:"Buraya yazmaya başla...",bold:"Kalın",italic:"İtalik",underline:"Altı Çizili",text_color:"Yazı Rengi",highlight_color:"Vurgu Rengi",align_text:"Hizala",toggle_paper:"Kağıt Stilini Değiştir",prev_page:"Önceki Sayfa",next_page:"Sonraki Sayfa",delete_page:"Sayfayı Sil",welcome_title:"Not Defterine Hoşgeldin",welcome_body:"<h3>Dijital Not Defterine Hoşgeldin!</h3><p>Bu tıpkı spiralli bir defter gibi görünür ama Word belgesi gibi çalışır.</p><br><p><b>Kalın yazı</b></p><p><i>İtalik yazı</i></p>",new_note:"Yeni Not",no_cheatsheets_yet:"Henüz Kopya Kağıdı Yok",create_first_sheet:"İlk formül kağıdını, kod parçasını veya özet notunu oluştur.",edit_title:"Başlığı Düzenle",delete_note_confirm:"Notu Sil?",enter_title_start:"Başlamak için bir başlık girin.",new_note_placeholder:"örn. Fizik Formülleri",edit_note:"Notu Düzenle",update_note_title:"Not başlığını güncelle.",attachment:"Ek",title:"Başlık",sheet_not_found:"Not bulunamadı!",markdown_editor:"Markdown Editörü",supports_md:"MD Destekli",start_typing_placeholder:"Notlarını buraya yazmaya başla...",attachments_title:"Ekler",add_image:"Görsel Ekle",no_images_yet:"Henüz görsel yok",delete_image:"Görseli Sil?",delete_image_desc:"Bu işlem geri alınamaz.",total_courses:"Toplam Ders",completed:"Tamamlanan",studyai:"StudyAI",total_streak:"Toplam Seri",days_l:"gün",todos:"Görevler",habits:"Alışkanlıklar",stuck_msg:"Takıldın mı? Yardıma hazırım!",ask_studyai:"StudyAI'a Sor",calculator:"Hesap Makinesi",time_title:"Saat",switch_mode:"Mod Değiştir",daily_habits:"Alışkanlıklar",done:"Tamamlandı",no_habits_msg:"Tanımlı alışkanlık yok. Bir tane ekle!",new_habit_placeholder:"Yeni alışkanlık...",add_photo:"Fotoğraf Ekle",change_photo:"Fotoğrafı Değiştir",zoom_image:"Yakınlaştır",remove_photo:"Kaldır",delete_photo_confirm:"Fotoğrafı Sil?",delete:"Sil",delete:"Sil",cancel:"İptal",image_too_large:"Görsel çok büyük. Lütfen 5MB'dan küçük bir görsel seçin.",storage_full:"Depolama alanı dolu. Görsel kaydedilemiyor.",dashboard_photo_alt:"Panel Fotoğrafı",focus_timer:"Odaklanma",work:"Çalış",break:"Mola",time_break_msg:"Mola zamanı! İyi iş çıkardın.",edit_profile:"Profili Düzenle",save_changes:"Değişiklikleri Kaydet",fill_all_fields:"Lütfen tüm alanları doldurun",name_label:"İsim",university_label:"Üniversite",department_label:"Bölüm",break_over_msg:"Mola bitti! İşe dön.",timer_complete:"Süre Doldu",stopwatch:"Kronometre",reset:"Sıfırla",start:"Başla",stop:"Durdur",bookmarks:"Yer İmleri",bookmarks:"Yer İmleri",learning:"Öğrenme",google_ai_desc:"Google YZ Asistanı",openai_chat_desc:"OpenAI Sohbet",youtube_desc:"YouTube",quick_notes:"Hızlı Notlar",no_notes_yet:"Henüz not yok",create_one:"Oluştur",browse:"Gözat",new:"Yeni",type_ideas:"Fikirlerini buraya yaz...",add_note:"Not Ekle",update_note:"Notu Güncelle",saved_msg:"Kaydedildi!",mode_now:"Şu anki mod",untitled_note:"Başlıksız Not",grade_calc:"Not Hesaplama",assessment:"DEĞERLENDİRME",grade:"NOT",calculate:"Hesapla",enter_grades_msg:"Hesaplamak için not girin",current_avg:"Ortalama",need_score_msg:"Gereken",on_msg:"=>",for_msg:"hedefi:",impossible:"İmkansız?",passed_msg:"Geçtin!",assessment_name:"İsim",midterm:"Vize",final_exam:"Final",new_assessment:"Yeni",mini_games:"Mini Oyunlar",yes_no:"Evet / Hayır",decision_maker:"Karar verici",decide:"Karar Ver",random_picker:"Rastgele Seçici",choice_generator:"Seçim oluşturucu",add_option_placeholder:"Seçenek ekle...",pick_random:"Rastgele Seç",winner:"Kazanan",again:"Tekrar",option_a:"Seçenek A",option_b:"Seçenek B",maybe:"BELKİ",ans_yes:"EVET",ans_no:"HAYIR",upgrade_to:"",unlock_potential:"Çalışma akışının tam potansiyelini ortaya çıkar.",forever:"/ ömür boyu",essential_tools:"Günlük çalışma için temel araçlar.",standard_dashboard:"Standart Panel",basic_analytics:"Temel Analitikler",limited_ai:"Sınırlı YZ Desteği",cloud_sync_backup:"Bulut Senkronizasyon & Yedekleme",advanced_customization:"Gelişmiş Kişiselleştirme",recommended:"Önerilen",per_month:"/ ay",premium_desc:"En iyisini isteyen ciddi öğrenciler için.",unlimited_ai:"Genişletilmiş YZ Eğitmeni",cloud_sync_multi:"Bulut Senk. & Çoklu Cihaz",advanced_analytics:"Gelişmiş Performans Analizi",custom_themes:"Özel Temalar & İkonlar",upgrade_now:"Çok Yakında",secure_payment:"Stripe ile güvenli ödeme. İstediğin zaman iptal et.",logout_confirmation_title:"Çıkış Yapılsın mı?",logout_confirmation_title:"Çıkış Yapılsın mı?",logout_confirmation_desc:"Çıkmak istediğine emin misin? Kurulum ekranına döneceksin.",reset_layout_confirm:"Varsayılan düzeni sıfırlamak istediğine emin misin?",overwrite_confirm:"Mevcut verilerin üzerine yazılacak. Emin misin?",invalid_backup:"Geçersiz yedek dosyası. Kritik veriler eksik.",parse_error:"Yedek dosyası ayrıştırılamadı.",no_courses_completed:"Tamamlanan ders yok",no_active_challenges:"Aktif görev yok",no_streak_yet:"Henüz seri yok",student_role:"Öğrenci",security_lock:"Geliştirici Erişimi"}};function e(t){const i=p.user.language||"en",o=ne[i][t];return o!==void 0?o:t}function de(t,i="dashboard"){const o=[{icon:"grid",page:"dashboard"},{icon:"book",page:"courses"},{icon:"notebook",page:"notebook"},{icon:"ticket",page:"exams"},{icon:"collection",page:"cheatsheets"}],n={grid:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />',book:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />',calendar:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />',notebook:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />',chart:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />',folder:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />',collection:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />',chat:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />',globe:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />',ticket:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />'},l=o.map(c=>{const b=c.page===i;return`
        <li onclick="window.navigateTo('${c.page}')" class="cursor-pointer p-2.5 rounded-full transition-all duration-300 ${b?"bg-primary text-white shadow-lg":"text-gray-400 hover:text-primary hover:bg-white/50"} flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                ${n[c.icon]}
            </svg>
        </li>
    `}).join("");t.innerHTML=`
        <div class="flex flex-col h-full items-center py-4 w-full relative z-10 transition-all duration-300">
            <!-- Glass Vertical Rectangle Menu -->
            <div class="glass flex-1 w-auto rounded-full py-3 px-1.5 flex flex-col items-center gap-3 border border-white/50 shadow-xl bg-white/40 backdrop-blur-xl mb-2 transition-all duration-300 mx-2">
                <ul class="flex flex-col gap-2 w-full items-center pt-2">
                    ${l}
                </ul>
                
                 <div class="mt-auto flex flex-col gap-3 w-full items-center pt-3 border-t border-gray-200/30">
                    <button onclick="window.logout()" class="p-2.5 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-white/50" title="${e("logout")}">
                       <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    </button>
                </div>
            </div>
        </div>
    `}function ce(t){const i=p.todos?p.todos.filter(s=>s.completed).length:0,o=JSON.parse(localStorage.getItem("habit_tracker_data_v3")||"{}"),n=o.habits?o.habits.filter(s=>s.completed).length:0,c=[{title:e("total_courses"),value:t.courses.total,icon:'<svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>'},{title:e("completed"),value:i+n,icon:'<svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>'},{title:e("studyai"),value:"",icon:'<svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>'},{title:e("total_streak"),value:`${t.streak.total} ${e("days_l")}`,icon:'<svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>'}].slice(0,3).map((s,a)=>`
    <div id="stats-card-${a}" class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow draggable-item relative group flex flex-col justify-between" draggable="true">
      <div class="flex justify-between items-center mb-4 cursor-move">
         <h3 class="text-lg font-bold text-dark flex items-center gap-2">
            ${s.icon}
            ${s.title}
         </h3>
         ${a===0?`
         <button onclick="window.navigateTo('courses')" class="text-gray-400 hover:text-primary transition-colors p-1" title="${e("view_details")}">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
         </button>
         `:""}
      </div>
      <div class="flex flex-col h-full">
         <div class="text-3xl font-bold text-dark mb-2 flex items-center gap-2">
            ${s.value}
         </div>
         
         ${a===0&&p.courses&&p.courses.length>0?`
         <div class="mt-2 flex flex-col gap-2 overflow-y-auto max-h-40 custom-scrollbar pr-1">
            ${p.courses.map(d=>`
                <div onclick="window.navigateTo('course-detail', { id: ${d.id} })" class="flex items-center gap-2 p-2 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors group/course">
                    <div class="w-6 h-6 rounded-lg bg-white text-primary flex items-center justify-center font-bold text-xs shadow-sm border border-gray-100">
                        ${d.name.charAt(0).toUpperCase()}
                    </div>
                    <span class="text-xs font-medium text-gray-600 truncate flex-1 block" title="${d.name}">${d.name}</span>
                    <svg class="w-3 h-3 text-gray-300 group-hover/course:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </div>
            `).join("")}
         </div>
         `:""}

         ${a===1?`
         <div class="mt-4 flex flex-col gap-2">
             <div class="flex justify-between items-center p-2 bg-gray-50 rounded-xl border border-gray-100">
                 <div class="flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/30"></span>
                     <span class="text-xs font-medium text-gray-600">${e("todos")}</span>
                 </div>
                 <span id="stat-todo-count" class="text-xs font-bold text-dark">${i}</span>
             </div>
             <div class="flex justify-between items-center p-2 bg-gray-50 rounded-xl border border-gray-100">
                 <div class="flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/30"></span>
                     <span class="text-xs font-medium text-gray-600">${e("habits")}</span>
                 </div>
                 <span id="stat-habit-count" class="text-xs font-bold text-dark">${n}</span>
             </div>
         </div>
         `:""}

         ${a===2?`
         <div class="flex-1 flex flex-col items-center justify-center -mt-4 mb-2 icon-float">
            <!-- Cute Robot Vector -->
            <svg class="w-40 h-40 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" y1="16" x2="8" y2="16" />
                <line x1="16" y1="16" x2="16" y2="16" />
            </svg>
         </div>

         <div class="mt-auto">
             <p class="text-[11px] text-gray-400 leading-tight mb-3 text-center">${e("stuck_msg")}</p>
             <button onclick="window.openAiCoach()" class="w-full py-2 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-xs flex items-center justify-center gap-2">
                 <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                 ${e("ask_studyai")}
             </button>
         </div>
         `:""}
      </div>
    </div>
  `).join(""),b=`
    <div class="bg-white p-5 rounded-3xl shadow-sm hover:shadow-md transition-shadow draggable-item relative group flex flex-col h-80" draggable="true" id="calculator-card">
        <div class="flex justify-between items-center mb-4 cursor-move shrink-0">
            <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                ${e("calculator")}
            </h3>
        </div>
        <div class="flex-1 flex flex-col min-h-0">
            <input type="text" id="calc-display" class="w-full bg-gray-50 text-right text-xl font-mono p-2 rounded-xl mb-3 text-dark focus:outline-none" readonly value="0">
            <div class="grid grid-cols-4 gap-2 flex-1 min-h-0">
                <button class="calc-btn text-gray-500 hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="C">C</button>
                <button class="calc-btn text-gray-500 hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="(">(</button>
                <button class="calc-btn text-gray-500 hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val=")">)</button>
                <button class="calc-btn text-primary hover:bg-primary/10 rounded-lg transition-colors text-sm" data-val="/">÷</button>

                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="7">7</button>
                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="8">8</button>
                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="9">9</button>
                <button class="calc-btn text-primary hover:bg-primary/10 rounded-lg transition-colors text-sm" data-val="*">×</button>

                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="4">4</button>
                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="5">5</button>
                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="6">6</button>
                <button class="calc-btn text-primary hover:bg-primary/10 rounded-lg transition-colors text-sm" data-val="-">-</button>

                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="1">1</button>
                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="2">2</button>
                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val="3">3</button>
                <button class="calc-btn text-primary hover:bg-primary/10 rounded-lg transition-colors text-sm" data-val="+">+</button>

                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm col-span-2" data-val="0">0</button>
                <button class="calc-btn text-dark hover:bg-gray-100 rounded-lg transition-colors text-sm" data-val=".">.</button>
                <button class="calc-btn bg-primary text-white hover:opacity-90 rounded-lg transition-colors shadow-lg shadow-primary/30 text-sm" data-val="=">=</button>
            </div>
        </div>
    </div>
  `;return c+b}function Z(t){const i=p.chartData,o=Math.max(...i.map(u=>u.study+u.exam))||5,n=i.map(u=>{const g=o===0?1:o,w=u.study/g*100,L=u.exam/g*100;return`
      <div class="flex flex-col items-center gap-2 flex-1 group cursor-pointer relative h-full justify-end">
        <div class="w-full flex-1 flex flex-col justify-end relative rounded-xl overflow-hidden bg-gray-50 hover:bg-gray-100 transition-colors">
            <!-- Tooltip -->
            <div class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-dark text-white text-[10px] font-bold py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap pointer-events-none shadow-xl border border-gray-700">
              ${u.study}${e("hour_unit")}
            </div>
            
            ${u.exam>0?`<div style="height: ${L}%" class="w-full bg-primary/30 pattern-diagonal-lines"></div>`:""}
            <div style="height: ${w}%" class="w-full bg-primary rounded-t-sm transition-all duration-500"></div>
        </div>
        <span class="text-xs text-gray-400 font-medium group-hover:text-primary transition-colors">${e("days_short")[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(u.day)]}</span>
      </div>
    `}).join("");t.innerHTML=`
    <div class="bg-white p-6 rounded-3xl shadow-sm h-full flex flex-col relative group/chart">
      <div class="flex justify-between items-center mb-6 shrink-0">
        <h3 class="text-lg font-bold text-dark flex items-center gap-2">
            <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            ${e("hours_spent")} 
        </h3>
        <!-- Add Icon -->
        <button id="btn-add-hours" class="w-8 h-8 flex items-center justify-center bg-gray-50 text-gray-400 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-md transform hover:scale-110 active:scale-95">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
        </button>
      </div>
      
      <div class="flex-1 flex gap-3 items-end min-h-0">
         <div class="flex flex-col justify-between h-full text-xs text-gray-400 py-1 pr-2 uppercase font-bold tracking-wider text-[10px]">
             <span>${J(o)}${e("hour_unit")}</span>
             <span>${J(o*.66)}${e("hour_unit")}</span>
             <span>${J(o*.33)}${e("hour_unit")}</span>
             <span>0${e("hour_unit")}</span>
         </div>
         <div class="flex-1 flex justify-between gap-2 h-full pb-1 border-b border-dashed border-gray-200">
            ${n}
         </div>
      </div>

       <!-- Modal for logging hours -->
        <div id="modal-log-hours" class="absolute inset-0 bg-white/95 backdrop-blur-md z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300 rounded-3xl">
            <style>
                /* Hide spin buttons */
                #input-hours::-webkit-outer-spin-button,
                #input-hours::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                #input-hours {
                    -moz-appearance: textfield;
                }
            </style>
            <div class="w-full h-full flex flex-col p-6">
                <!-- Header -->
                <div class="flex justify-between items-start shrink-0">
                     <div>
                        <h4 class="text-2xl font-bold text-dark tracking-tight">${e("log_flow")}</h4>
                        <p class="text-xs text-gray-400 font-medium mt-1">${e("record_session")}</p>
                     </div>
                     <button id="close-log-hours" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-dark hover:bg-gray-100 transition-colors">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                     </button>
                </div>
                
                <!-- Center Input -->
                <div class="flex-1 flex flex-col items-center justify-center relative">
                     <div class="relative flex justify-center items-baseline">
                        <input type="number" id="input-hours" class="w-32 bg-transparent text-center text-7xl font-extrabold text-dark focus:outline-none placeholder-gray-200" placeholder="0" min="0" max="24">
                        <span class="absolute left-full ml-2 bottom-2 text-xl font-bold text-gray-300">${e("hour_unit")}</span>
                     </div>
                     <div class="h-1 w-24 bg-gray-100 rounded-full mt-4 mx-auto"></div>
                </div>

                <!-- Footer Action -->
                <div class="shrink-0">
                    <button id="btn-save-hours" class="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-lg flex items-center justify-center gap-2 group">
                        <span>${e("save_entry")}</span>
                        <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  `;const l=t.querySelector("#btn-add-hours"),c=t.querySelector("#modal-log-hours"),b=t.querySelector("#close-log-hours"),s=t.querySelector("#btn-save-hours"),a=t.querySelector("#input-hours"),d=u=>{u?(c.classList.remove("invisible","opacity-0"),c.querySelector("div").classList.remove("scale-95","opacity-0"),c.querySelector("div").classList.add("scale-100","opacity-100"),setTimeout(()=>a.focus(),100)):(c.classList.add("invisible","opacity-0"),c.querySelector("div").classList.add("scale-95","opacity-0"),c.querySelector("div").classList.remove("scale-100","opacity-100"),a.value="")};l&&l.addEventListener("click",u=>{u.stopPropagation(),d(!0)}),b&&b.addEventListener("click",u=>{u.stopPropagation(),d(!1)}),s&&s.addEventListener("click",u=>{u.stopPropagation();const g=parseFloat(a.value);if(!g||g<=0){a.classList.add("animate-shake","border-red-500","bg-red-50"),setTimeout(()=>a.classList.remove("animate-shake","border-red-500","bg-red-50"),500);return}const w=new Date().toLocaleDateString("en-US",{weekday:"short"}),L=p.chartData.find(x=>x.day===w);if(L)L.study+=g,L.study=Math.round(L.study*10)/10,H(),Z(t);else{const x=p.chartData[p.chartData.length-1];x.study+=g,H(),Z(t)}}),a&&(a.addEventListener("keydown",u=>{["-","e","E","+"].includes(u.key)&&u.preventDefault(),u.key==="Enter"&&s.click()}),a.addEventListener("input",u=>{let g=parseFloat(a.value);isNaN(g)||(g<0&&(a.value=0),g>24&&(a.value=24))}))}function J(t){return t<1?1:Math.round(t)}function ae(t,i,o=[]){const n=new Date;let l=n.getMonth(),c=n.getFullYear(),b=null;const s=()=>{const a=e("months"),d=new Date(c,l+1,0).getDate(),u=new Date(c,l,1).getDay(),g=e("days_short"),w={};i.forEach(f=>{f.date&&(w[f.date]||(w[f.date]=[]),w[f.date].push({...f,isExam:!1}))}),o.forEach(f=>{if(f.date){const M=new Date(f.date),S=`${M.getFullYear()}-${String(M.getMonth()+1).padStart(2,"0")}-${String(M.getDate()).padStart(2,"0")}`;w[S]||(w[S]=[]),w[S].push({...f,isExam:!0})}});let L="";for(let f=0;f<u;f++)L+='<div class="h-8"></div>';for(let f=1;f<=d;f++){const M=`${c}-${String(l+1).padStart(2,"0")}-${String(f).padStart(2,"0")}`,S=w[M]||[],_=S.length>0,E=S.some(v=>v.isExam),j=b===M,B=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`;L+=`
                <div class="h-9 w-9 mx-auto flex items-center justify-center rounded-full cursor-pointer transition-all text-xs font-medium relative group
                    ${j?"bg-primary text-white shadow-lg scale-110":M===B?"bg-primary/20 text-primary":"hover:bg-gray-50 text-gray-500"}
                    ${_&&!j?"font-bold text-dark":""}
                " onclick="selectDate('${M}')">
                    ${f}
                    ${_?`<div class="absolute bottom-1 w-1 h-1 rounded-full ${E?"bg-red-500":j?"bg-white":"bg-primary"}"></div>`:""}
                </div>
            `}let x="";if(b){const f=w[b]||[];x=`
                <div class="mt-6 border-t border-gray-100 pt-4 animate-fade-in">
                    <div class="flex justify-between items-center mb-3">
                        <h4 class="text-sm font-bold text-dark">${e("events_on")} ${b.split("-").reverse().join("/")}</h4>
                    </div>
                    ${f.length===0?`<p class="text-xs text-gray-400 italic">${e("no_events")}</p>`:`
                        <div class="space-y-2">
                             ${f.map(M=>M.isExam?`
                                        <div class="bg-red-50 p-2.5 rounded-lg flex items-center justify-between border border-red-100">
                                            <div>
                                                <div class="text-xs font-bold text-red-600 flex items-center gap-1.5 mb-0.5">
                                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                                                    ${M.code} <span class="text-[10px] opacity-75 font-medium uppercase border border-red-200 px-1 rounded">${M.type}</span>
                                                </div>
                                                <div class="text-[10px] text-red-400 font-medium pl-5">${M.location||e("tbd")} • ${new Date(M.date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</div>
                                            </div>
                                        </div>
                                     `:`
                                        <div class="bg-gray-50 p-2 rounded-lg flex items-center justify-between group">
                                            <div class="flex-1">
                                                <div class="text-xs font-bold text-gray-700 ${M.completed?"line-through opacity-50":""}">${M.title}</div>
                                                ${M.subject?`<div class="text-[10px] text-gray-400">${M.subject}</div>`:""}
                                            </div>
                                             <button class="text-gray-300 hover:text-primary p-1 opacity-0 group-hover:opacity-100 transition-opacity" onclick="removeEvent('${M.title}')">
                                                &times;
                                             </button>
                                        </div>
                                     `).join("")}
                        </div>
                    `}
                </div>
            `}t.innerHTML=`
        <div class="bg-white p-6 rounded-3xl shadow-sm h-full flex flex-col relative">
           <div class="flex justify-between items-center mb-4 shrink-0">
            <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                ${e("calendar")}
            </h3>
            <div class="flex items-center gap-2">
                <button class="p-1 hover:bg-gray-50 rounded-full" onclick="changeMonth(-1)">
                    <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <span class="text-xs font-bold text-dark w-24 text-center select-none">${a[l]} ${c}</span>
                <button class="p-1 hover:bg-gray-50 rounded-full" onclick="changeMonth(1)">
                    <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
           </div>
           
           <div class="grid grid-cols-7 gap-1 text-center text-[10px] text-gray-400 mb-2 font-bold uppercase tracking-wider shrink-0">
             ${g.map(f=>`<span>${f}</span>`).join("")}
           </div>
           
           <!-- Scrollable Area for Grid and Details -->
           <div class="flex-1 overflow-y-auto no-scrollbar -mx-2 px-2 scroll-smooth">
               <div class="grid grid-cols-7 gap-y-2">
                    ${L}
               </div>

               ${x}
           </div>
        </div>
        `,t.selectDate=f=>{b=f,s()},t.changeMonth=f=>{l+=f,l>11&&(l=0,c++),l<0&&(l=11,c--),s()},t.addEvent=f=>{const M=f.split("-").reverse().join("/"),S=prompt(`${e("add_task_prompt")} ${M}:`);S&&(i.push({title:S,subject:"Personal",time:"All Day",completed:!1,date:f}),s(),document.dispatchEvent(new Event("dataChanged")))},t.removeEvent=f=>{const M=i.findIndex(S=>S.title===f);M>-1&&(i.splice(M,1),s(),document.dispatchEvent(new Event("dataChanged")))}};window.selectDate=a=>t.selectDate(a),window.changeMonth=a=>t.changeMonth(a),window.addEvent=a=>t.addEvent(a),window.removeEvent=a=>t.removeEvent(a),s()}function ue(t,i,o=null,n=null){t.innerHTML=`
        <div class="bg-white p-6 rounded-3xl shadow-sm h-full flex flex-col">
            <div class="flex justify-between items-center mb-4 shrink-0">
                <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    ${e("todo_list")}
                </h3>
                <span class="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">${i.length} ${e("tasks_count")}</span>
            </div>
            
            <!-- Inline Add Todo -->
            <div class="flex gap-2 mb-4 shrink-0">
                <input type="text" id="new-todo-input" placeholder="${e("add_new_task_placeholder")}" 
                    class="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    onkeydown="if(event.key === 'Enter') addTodoFromInput()">
                <button onclick="addTodoFromInput()" class="bg-primary text-white p-2 rounded-xl hover:opacity-90 transition-colors shadow-lg shadow-primary/30 active:scale-95">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>
            
            <div class="overflow-y-auto flex-1 pr-1 custom-scrollbar">
                <ul class="space-y-4 h-full">
                    ${i.length===0?`
                        <div class="h-full flex flex-col items-center justify-center text-gray-400 min-h-[150px]">
                            <div class="mb-3 flex items-center justify-center">
                                <svg class="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <p class="text-sm font-bold text-gray-500">${e("no_tasks_yet")}</p>
                            <p class="text-xs text-gray-400 mt-1">${e("add_one_to_start")}</p>
                        </div>
                    `:""}
                    ${i.map((l,c)=>c===n?`
                                <li class="flex flex-col gap-2 bg-primary/5 p-3 rounded-xl border border-primary/20 animate-fade-in text-center" data-index="${c}">
                                    <p class="text-sm font-bold text-primary mb-2">${e("delete_task_confirm")}</p>
                                    <div class="flex justify-center gap-2">
                                         <button onclick="cancelDeleteTodo()" class="px-3 py-1 text-xs font-bold text-gray-500 hover:bg-gray-200 rounded-lg transition-colors">${e("cancel")}</button>
                                         <button onclick="confirmDeleteTodo(${c})" class="px-3 py-1 text-xs font-bold text-white bg-primary hover:opacity-90 rounded-lg transition-colors shadow-lg shadow-primary/30">${e("delete")}</button>
                                    </div>
                                </li>
                            `:c===o?`
                                <li class="flex flex-col gap-2 bg-gray-50 p-3 rounded-xl border border-primary/20 animate-fade-in" data-index="${c}">
                                    <input type="text" id="edit-title-${c}" value="${l.title}" class="w-full bg-white border border-gray-200 rounded-lg px-2 py-1 text-sm font-bold text-dark focus:border-primary outline-none" placeholder="${e("task_name_placeholder")}">
                                    <div class="flex gap-2">
                                        <input type="date" id="edit-date-${c}" value="${l.date||""}" class="flex-1 bg-white border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500 focus:border-primary outline-none">
                                        <input id="edit-time-${c}" value="${l.time||""}" class="flex-1 bg-white border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500 focus:border-primary outline-none" type="time">
                                    </div>
                                    <div class="flex justify-end gap-2 mt-1">
                                        <button onclick="cancelEditTodo()" class="px-3 py-1 text-xs font-bold text-gray-500 hover:bg-gray-200 rounded-lg transition-colors">${e("cancel")}</button>
                                        <button onclick="saveEditTodo(${c})" class="px-3 py-1 text-xs font-bold text-white bg-primary hover:opacity-90 rounded-lg transition-colors shadow-lg shadow-primary/30">${e("save")}</button>
                                    </div>
                                </li>
                            `:`
                                <li class="flex items-start gap-3 group justify-between animate-fade-in" data-index="${c}">
                                    <div class="flex items-start gap-3 flex-1">
                                        <div class="mt-1 w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer hover:border-primary transition-colors toggle-btn shrink-0" onclick="event.stopPropagation(); toggleTodo(${c})">
                                            ${l.completed?'<div class="w-3 h-3 bg-primary rounded-full"></div>':""}
                                        </div>
                                        <div class="min-w-0">
                                            <div class="text-sm font-bold text-dark group-hover:text-primary transition-colors cursor-pointer toggle-text truncate ${l.completed?"line-through text-gray-400":""}" onclick="editTodo(${c})">${l.title}</div>
                                            <div class="flex flex-wrap gap-2 text-xs text-gray-400 mt-1">
                                                ${l.date?`<span class="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium shrink-0">${l.date.split("-").reverse().join("/")}</span>`:""}
                                                ${l.time?`<span class="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium shrink-0">${l.time}</span>`:""}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                                        <button class="p-1.5 text-gray-400 hover:text-primary rounded-lg hover:bg-primary/10 transition-colors edit-btn" onclick="event.stopPropagation(); editTodo(${c})">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                        </button>
                                        <button class="p-1.5 text-gray-400 hover:text-primary rounded-lg hover:bg-primary/10 transition-colors delete-btn" onclick="event.stopPropagation(); deleteTodo(${c})">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                </li>
                            `).join("")}
                </ul>
            </div>
        </div>
    `,window.addTodoFromInput||(window.addTodoFromInput=()=>{const l=document.getElementById("new-todo-input");l&&l.value.trim()&&window.addSpecificTodo&&(window.addSpecificTodo(l.value.trim()),l.value="")})}function Q(t,i){i.university||(i.university="University Name"),i.department||(i.department="Department"),t.innerHTML=`
        <div class="h-full bg-gradient-to-br from-primary/5 via-white to-primary/5 rounded-3xl shadow-sm relative overflow-hidden group p-8 flex flex-col items-center justify-center text-center isolate transition-all hover:shadow-md">
            <!-- Decorative Modern Gradient Backgrounds Removed -->
            
            <!-- Edit Button -->
            <button class="edit-profile-btn absolute top-4 right-4 p-2 text-gray-400 hover:text-primary transition-all z-20 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:shadow-md hover:scale-105" title="${e("edit_profile")}">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </button>
            
            <!-- Avatar Section -->
            <div class="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                <!-- Glow removed -->
                <div class="w-28 h-28 rounded-full p-6 bg-white relative z-10 shadow-xl ring-1 ring-gray-100 flex items-center justify-center overflow-hidden">
                    ${i.avatar?`<div class="text-6xl">${i.avatar}</div>`:'<svg class="w-full h-full text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>'}
                </div>
            </div>
            
            <!-- Info Section -->
            <div class="relative z-10 flex flex-col items-center">
                <h3 class="text-2xl font-black text-dark mb-2 tracking-tight">${i.name}</h3>
                
                <div class="flex flex-col items-center gap-2 mt-4 w-full">
                    <div class="flex items-center justify-center gap-2 text-xs font-medium text-gray-600 w-full">
                         <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        <span class="truncate tracking-wide">${i.university}</span>
                    </div>
                    
                    <div class="w-16 h-px bg-green-900/10 rounded-full"></div>

                    <div class="flex items-center justify-center gap-2 text-xs font-medium text-gray-600 w-full">
                         <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        <span class="truncate tracking-wide">${i.department}</span>
                    </div>
                </div>
            </div>
        </div>
    `,t.querySelector(".edit-profile-btn").onclick=()=>{pe(i,o=>{i.name=o.name,i.university=o.university,i.department=o.department,H(),Q(t,i),document.dispatchEvent(new Event("profileUpdated"))})}}function pe(t,i){const o=document.getElementById("edit-profile-modal");o&&o.remove();const n=document.createElement("div");n.id="edit-profile-modal",n.className="fixed inset-0 z-50 flex items-center justify-center bg-dark/50 backdrop-blur-sm opacity-0 transition-opacity duration-300",n.innerHTML=`
        <div class="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl transform scale-95 transition-transform duration-300">
            <h3 class="text-xl font-bold text-dark mb-6 text-center">${e("edit_profile")}</h3>
            
            <div class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-gray-500 mb-1 ml-1">${e("name_label")}</label>
                    <input type="text" id="edit-name" value="${t.name}" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                </div>
                
                <div>
                    <label class="block text-xs font-bold text-gray-500 mb-1 ml-1">${e("university_label")}</label>
                    <input type="text" id="edit-university" value="${t.university}" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                </div>
                
                <div>
                    <label class="block text-xs font-bold text-gray-500 mb-1 ml-1">${e("department_label")}</label>
                    <input type="text" id="edit-department" value="${t.department}" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                </div>
            </div>

            <div class="flex gap-3 mt-8">
                <button id="cancel-edit-profile" class="flex-1 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors">${e("cancel")}</button>
                <button id="save-edit-profile" class="flex-1 py-3 rounded-xl font-bold text-white bg-primary hover:bg-[#2C5F58] shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">${e("save_changes")}</button>
            </div>
        </div>
    `,document.body.appendChild(n),requestAnimationFrame(()=>{n.classList.remove("opacity-0"),n.querySelector("div").classList.remove("scale-95"),n.querySelector("div").classList.add("scale-100")});const l=()=>{n.classList.add("opacity-0"),n.querySelector("div").classList.remove("scale-100"),n.querySelector("div").classList.add("scale-95"),setTimeout(()=>n.remove(),300)};n.querySelector("#cancel-edit-profile").onclick=l,n.onclick=c=>{c.target===n&&l()},n.querySelector("#save-edit-profile").onclick=()=>{const c=document.getElementById("edit-name").value,b=document.getElementById("edit-university").value,s=document.getElementById("edit-department").value;c&&b&&s?(i({name:c,university:b,department:s}),l()):alert(e("fill_all_fields"))}}function ge(t){let i;try{i=JSON.parse(localStorage.getItem("dashboard_notes_list")||"[]")}catch(c){console.error("Failed to parse notes data:",c),i=[]}let o=-1,n=!1;const l=()=>{const c=i.map((w,L)=>`
            <div class="group flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border-b border-gray-50 last:border-0" data-index="${L}">
                <div class="flex-1 truncate text-sm text-gray-600 font-medium pr-2" onclick="loadNote(${L})">
                    ${w.split(`
`)[0]||e("untitled_note")}
                    <div class="text-xs text-gray-400 font-normal truncate mt-0.5">${w.substring(0,40)}...</div>
                </div>
                <button class="text-gray-300 hover:text-primary transition-colors p-2" onclick="deleteNote(${L}, event)">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
            </div>
        `).join(""),b=`
            <div class="flex flex-col items-center justify-center h-full text-gray-400 py-8">
                <svg class="w-12 h-12 mb-2 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <p class="text-xs">${e("no_notes_yet")}</p>
                <button id="create-first-note" class="mt-4 text-xs font-bold text-primary hover:underline">${e("create_one")}</button>
            </div>
        `;t.innerHTML=`
            <div class="bg-white p-6 rounded-3xl shadow-sm h-full flex flex-col relative overflow-hidden">
                <div class="flex justify-between items-center mb-4 shrink-0">
                    <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                        <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        ${e("quick_notes")}
                    </h3>
                    
                    <!-- Toggle Button -->
                    <button id="notes-mode-toggle" class="flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors shrink-0 border border-transparent hover:border-gray-200">
                        ${n?`
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                            <span>${e("new")}</span>
                        `:`
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            <span>${e("browse")}</span>
                        `}
                    </button>
                </div>
                
                <div class="relative flex-1 min-h-0">
                    <!-- Editor View -->
                    <div class="absolute inset-0 flex flex-col transition-all duration-300 ${n?"opacity-0 pointer-events-none translate-x-full":"opacity-100 translate-x-0"}">
                         <textarea id="note-area" class="w-full flex-1 bg-gray-50 rounded-xl p-4 text-sm text-gray-600 outline-none border border-transparent focus:border-primary/20 focus:bg-white transition-all resize-none placeholder-gray-400" placeholder="${e("type_ideas")}">${o!==-1?i[o]:""}</textarea>
                         <div class="flex justify-between items-center mt-4">
                            <span id="note-status" class="text-xs text-gray-400 font-medium h-4"></span>
                            <button id="save-note" class="px-6 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:opacity-90 transition-colors shadow-lg shadow-primary/30 active:scale-95 transform">
                                ${e(o===-1?"add_note":"update_note")}
                            </button>
                        </div>
                    </div>

                    <!-- List View -->
                    <div class="absolute inset-0 flex flex-col bg-white transition-all duration-300 ${n?"opacity-100 translate-x-0":"opacity-0 pointer-events-none -translate-x-full"} z-10">
                         <div class="flex-1 overflow-y-auto custom-scrollbar">
                           ${i.length?c:b}
                         </div>
                    </div>
                </div>
            </div>
        `;const s=t.querySelector("#note-area"),a=t.querySelector("#save-note"),d=t.querySelector("#notes-mode-toggle"),u=t.querySelector("#create-first-note"),g=t.querySelector("#note-status");a&&(a.onclick=()=>{const w=s.value.trim();if(w){o===-1?(i.push(w),o=i.length-1):i[o]=w;try{localStorage.setItem("dashboard_notes_list",JSON.stringify(i))}catch(L){console.error("Failed to save notes:",L)}g.textContent=e("saved_msg"),g.classList.add("text-primary"),setTimeout(()=>{g&&(g.textContent="",g.classList.remove("text-primary"))},2e3)}}),d.onclick=()=>{n?(n=!1,o=-1):n=!0,l()},u&&(u.onclick=()=>{n=!1,o=-1,l()}),t.querySelectorAll('button[onclick^="deleteNote"]').forEach(w=>{w.onclick=L=>{L.stopPropagation();const x=parseInt(w.parentElement.dataset.index);i.splice(x,1);try{localStorage.setItem("dashboard_notes_list",JSON.stringify(i))}catch(f){console.error("Failed to save notes:",f)}o===x?o=-1:o>x&&o--,l()}}),t.querySelectorAll('div[onclick^="loadNote"]').forEach(w=>{w.onclick=()=>{o=parseInt(w.parentElement.dataset.index),n=!1,l()}})};l()}function me(t){let i=1500,o=1500,n=!1,l="work",c=null;const b=x=>{const f=Math.floor(x/60),M=x%60;return`${f.toString().padStart(2,"0")}:${M.toString().padStart(2,"0")}`},s=()=>{const x=t.querySelector("#pomodoro-time"),f=t.querySelector("#progress-ring-circle");if(x&&(x.textContent=b(i)),f){const S=112*Math.PI,_=S-i/o*S;f.style.strokeDashoffset=_}},a=x=>{if(n)return;let f=i+x*60;f<60&&(f=60),f>3600&&(f=3600),i=f,o=f,s()},d=()=>{const x=t.querySelector("#pomodoro-toggle-btn"),f=x.querySelector("div"),M=t.querySelectorAll(".time-control-btn");n?(clearInterval(c),n=!1,f.innerHTML='<svg class="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',x.classList.remove("bg-primary","hover:opacity-90","text-white"),x.classList.add("bg-primary","hover:opacity-90","text-white"),M.forEach(S=>S.classList.remove("opacity-0","pointer-events-none"))):(n=!0,f.innerHTML='<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',l==="work"&&(x.classList.remove("bg-primary","hover:opacity-90"),x.classList.add("bg-primary","hover:opacity-90")),M.forEach(S=>S.classList.add("opacity-0","pointer-events-none")),c=setInterval(()=>{if(i>0)i--,s();else{clearInterval(c),n=!1,new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg").play().catch(_=>console.log("Audio play failed",_));const S=e(l==="work"?"time_break_msg":"break_over_msg");u(S),d()}},1e3))},u=x=>{const f=document.createElement("div");f.className="fixed top-6 right-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 z-[9999] flex items-center gap-4 animate-fade-in-down transition-all duration-500",f.innerHTML=`
            <div class="w-12 h-12 bg-green-100 text-primary rounded-full flex items-center justify-center shrink-0">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
                 <h4 class="font-bold text-dark text-sm">${e("timer_complete")}</h4>
                 <p class="text-xs text-gray-500">${x}</p>
            </div>
            <button class="text-gray-300 hover:text-dark ml-2" onclick="this.parentElement.remove()">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        `,document.body.appendChild(f),setTimeout(()=>{f.parentElement&&(f.style.opacity="0",f.style.transform="translateY(-20px)",setTimeout(()=>f.remove(),500))},5e3)},g=()=>{clearInterval(c),n=!1,i=l==="work"?1500:300,o=i,s();const x=t.querySelector("#pomodoro-toggle-btn"),f=x.querySelector("div");f.innerHTML='<svg class="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',x.classList.remove("bg-primary","hover:opacity-90"),x.classList.add("bg-primary","hover:opacity-90"),t.querySelectorAll(".time-control-btn").forEach(S=>S.classList.remove("opacity-0","pointer-events-none"))},w=x=>{l=x,i=l==="work"?1500:300,o=i,t.querySelector("#progress-ring-circle").classList.add("text-primary"),g()};t.innerHTML=`
        <div class="bg-white p-5 rounded-3xl shadow-sm hover:shadow-md transition-shadow draggable-item relative group h-full flex flex-col items-center" draggable="true">
            <div class="w-full flex justify-between items-center shrink-0 mb-4">
                 <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     ${e("focus_timer")}
                </h3>
                
                <!-- Single Toggle Button -->
                <button id="pomodoro-mode-toggle" class="flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors shrink-0 border border-transparent hover:border-gray-200">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>${e("work")}</span>
                </button>
            </div>

            <!-- Content Container - Centered Vertically -->
            <div class="flex-1 w-full flex flex-col items-center justify-center gap-3">

            <!-- Circular Timer Area with Side Controls -->
            <div class="flex items-center justify-center gap-4 w-full my-2">
                
                <!-- Decrease Button (Left of Ring) -->
                <button id="decrease-time" class="time-control-btn w-8 h-8 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-primary flex items-center justify-center transition-all shrink-0">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20 12H4" /></svg>
                </button>

                <!-- Ring Container -->
                <div class="relative w-32 h-32 flex items-center justify-center shrink-0">
                   <svg class="w-full h-full transform -rotate-90">
                        <circle cx="64" cy="64" r="56" stroke="currentColor" stroke-width="6" fill="transparent" class="text-gray-100" />
                        <circle id="progress-ring-circle" cx="64" cy="64" r="56" stroke="currentColor" stroke-width="6" fill="transparent" 
                                stroke-dasharray="351.86" stroke-dashoffset="0" stroke-linecap="round" 
                                class="text-primary transition-all duration-1000 ease-linear" />
                    </svg>
                    <!-- Time Display (Absolute Center of Ring) -->
                    <span id="pomodoro-time" class="absolute text-2xl font-bold text-primary font-mono tracking-tighter cursor-default select-none">25:00</span>
                </div>

                <!-- Increase Button (Right of Ring) -->
                <button id="increase-time" class="time-control-btn w-8 h-8 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-primary flex items-center justify-center transition-all shrink-0">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>

                <!-- Controls -->
                <div class="flex items-center gap-4 justify-center shrink-0">
                     <button id="pomodoro-reset-btn" class="w-12 h-12 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center transition-colors shadow-sm">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </button>
                    
                    <button id="pomodoro-toggle-btn" class="w-12 h-12 rounded-full bg-primary text-white hover:opacity-90 flex items-center justify-center transition-all shadow-lg shadow-primary/30 hover:shadow-xl active:scale-95 group-hover:scale-105">
                        <div class="flex items-center justify-center">
                             <svg class="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    `,t.querySelector("#pomodoro-toggle-btn").addEventListener("click",d),t.querySelector("#pomodoro-reset-btn").addEventListener("click",g);const L=t.querySelector("#pomodoro-mode-toggle");L.innerHTML=`
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        <span>${e("work")}</span>
    `,L.addEventListener("click",()=>{l==="work"?(w("break"),L.innerHTML=`
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                <span>${e("break")}</span>
            `):(w("work"),L.innerHTML=`
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>${e("work")}</span>
            `)}),t.querySelector("#decrease-time").addEventListener("click",()=>a(-1)),t.querySelector("#increase-time").addEventListener("click",()=>a(1)),s()}function ve(t){if(!t)return;let i=!0;t.innerHTML=`
        <div class="flex flex-col h-full bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow relative group">
            <div class="flex justify-between items-center p-6 pb-2 cursor-move">
                <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </svg>
                    ${e("time_title")}
                </h3>
                <button id="toggle-clock-mode" class="p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-gray-100" title="${e("switch_mode")}">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                </button>
            </div>
            
            <div class="flex-1 flex items-center justify-center p-6 pt-0 min-h-0">
                <!-- Digital Clock -->
                <div id="digital-clock" class="text-center w-full">
                    <div class="text-5xl font-bold text-dark font-mono tracking-wider" id="digital-time">00:00:00</div>
                    <div class="text-gray-400 text-sm mt-2 font-medium" id="digital-date">Mon, 01 Jan</div>
                </div>

                <!-- Analog Clock -->
                <div id="analog-clock" class="hidden relative w-48 h-48 rounded-full border-4 border-gray-100 shadow-inner bg-gray-50">
                    <!-- Markers -->
                    <div class="absolute inset-0">
                         ${[...Array(12)].map((w,L)=>`
                            <div class="absolute w-1 h-3 bg-gray-300 left-1/2 top-1 origin-[50%_92px] -ml-0.5" style="transform: rotate(${L*30}deg)"></div>
                         `).join("")}
                    </div>
                    
                    <!-- Hands -->
                    <div id="hour-hand" class="absolute w-1.5 h-12 bg-dark rounded-full left-1/2 top-1/2 -ml-[3px] -mt-12 origin-bottom transition-transform duration-75 ease-linear shadow-sm"></div>
                    <div id="min-hand" class="absolute w-1 h-16 bg-gray-500 rounded-full left-1/2 top-1/2 -ml-0.5 -mt-16 origin-bottom transition-transform duration-75 ease-linear opacity-80"></div>
                    <div id="sec-hand" class="absolute w-0.5 h-20 bg-red-500 rounded-full left-1/2 top-1/2 -ml-[1px] -mt-20 origin-bottom transition-transform duration-75 ease-linear"></div>
                    
                    <!-- Center Dot -->
                    <div class="absolute w-3 h-3 bg-primary rounded-full left-1/2 top-1/2 -ml-1.5 -mt-1.5 shadow-md z-10"></div>
                </div>
            </div>
        </div>
    `;const o=t.querySelector("#toggle-clock-mode"),n=t.querySelector("#digital-clock"),l=t.querySelector("#analog-clock"),c=t.querySelector("#digital-time"),b=t.querySelector("#digital-date"),s=t.querySelector("#hour-hand"),a=t.querySelector("#min-hand"),d=t.querySelector("#sec-hand");o.addEventListener("click",w=>{w.preventDefault(),w.stopPropagation(),i=!i,u()}),o.addEventListener("mousedown",w=>w.stopPropagation()),o.addEventListener("dragstart",w=>{w.preventDefault(),w.stopPropagation()});function u(){i?(n.classList.remove("hidden"),l.classList.add("hidden")):(n.classList.add("hidden"),l.classList.remove("hidden"))}function g(){const w=new Date;if(i){const L=w.toLocaleTimeString("en-GB",{hour12:!1}),x=w.toLocaleDateString("en-GB",{weekday:"short",day:"2-digit",month:"short"});c.innerText=L,b.innerText=x}else{const L=w.getSeconds(),x=w.getMinutes(),f=w.getHours(),M=L/60*360,S=x/60*360+L/60*6,_=f/12*360+x/60*30;d.style.transform=`rotate(${M}deg)`,a.style.transform=`rotate(${S}deg)`,s.style.transform=`rotate(${_}deg)`}}u(),g(),setInterval(g,1e3)}function he(t){if(!t)return;let i=!1,o="#3F6F68",n=2,l="canvas",c=JSON.parse(localStorage.getItem("scratchpad_gallery")||"[]");t.innerHTML=`
        <div class="flex flex-col h-full relative overflow-hidden group rounded-3xl">
             <!-- Header -->
            <div class="flex flex-col px-5 pt-5 pb-2 z-10 bg-white border-b border-gray-50 h-auto shrink-0">
                <div class="flex items-center justify-between mb-2">
                     <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                        <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        ${e("scratchpad")}
                    </h3>
                    
                    <!-- View Toggle -->
                    <button id="sp-btn-browse" class="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors flex items-center gap-1 border border-transparent hover:border-gray-200 shrink-0">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        <span>${e("scratchpad_browse")}</span>
                    </button>
                </div>

                <!-- Tools Row (Only visible in Canvas Mode) -->
                <div id="sp-tools-header" class="flex items-center gap-3 transition-all duration-300 pl-1">
                    <div class="flex gap-2">
                        <button class="w-5 h-5 rounded-full bg-gray-800 border-2 border-transparent hover:scale-110 transition-transform sp-color-btn ring-2 ring-offset-1 ring-gray-800" data-color="#1F2937"></button>
                        <button class="w-5 h-5 rounded-full bg-red-500 border-2 border-transparent hover:scale-110 transition-transform sp-color-btn" data-color="#EF4444"></button>
                        <button class="w-5 h-5 rounded-full bg-blue-500 border-2 border-transparent hover:scale-110 transition-transform sp-color-btn" data-color="#3B82F6"></button>
                        <button class="w-5 h-5 rounded-full bg-green-500 border-2 border-transparent hover:scale-110 transition-transform sp-color-btn" data-color="#10B981"></button>
                    </div>
                    <div class="w-px h-5 bg-gray-200 mx-1"></div>
                    <div class="flex gap-1">
                            <button id="sp-save-gallery" class="p-1.5 text-gray-400 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors" title="${e("scratchpad_save_gallery")}">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
                            </button>
                            <button id="sp-clear-canvas" class="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="${e("scratchpad_clear")}">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Content Area -->
            <div class="flex-1 relative overflow-hidden bg-white">
                
                <!-- 1. CANVAS VIEW -->
                <div id="sp-view-canvas" class="absolute inset-0 flex flex-col transition-transform duration-300 transform translate-x-0">
                    <div class="relative flex-1 cursor-crosshair bg-white">
                        <canvas id="sp-canvas" class="block w-full h-full" style="touch-action: none;"></canvas>
                    </div>
                </div>

                <!-- 2. GALLERY VIEW -->
                <div id="sp-view-gallery" class="absolute inset-0 flex flex-col bg-white transition-transform duration-300 transform translate-x-full z-20">
                    <div id="sp-gallery-list" class="flex-1 overflow-y-auto p-4 grid grid-cols-2 gap-3 custom-scrollbar">
                        <!-- Items populated by JS -->
                    </div>
                    <div class="p-2 border-t border-gray-100 flex justify-center text-xs text-gray-400">
                        ${e("scratchpad_select_image")}
                    </div>
                </div>

            </div>
        </div>
    `;const b=t.querySelector("#sp-btn-browse"),s=t.querySelector("#sp-view-canvas"),a=t.querySelector("#sp-view-gallery"),d=t.querySelector("#sp-canvas"),u=d.getContext("2d"),g=t.querySelectorAll(".sp-color-btn"),w=t.querySelector("#sp-clear-canvas"),L=t.querySelector("#sp-save-gallery"),x=t.querySelector("#sp-gallery-list"),f=()=>{if(l==="canvas"){l="gallery",$(),a.classList.remove("translate-x-full"),a.classList.add("translate-x-0"),s.classList.remove("translate-x-0"),s.classList.add("-translate-x-full"),b.innerHTML=`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg><span>${e("scratchpad_draw")}</span>`;const m=t.querySelector("#sp-tools-header");m&&m.classList.add("opacity-0","pointer-events-none")}else{l="canvas",s.classList.remove("-translate-x-full"),s.classList.add("translate-x-0"),a.classList.remove("translate-x-0"),a.classList.add("translate-x-full"),b.innerHTML=`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg><span>${e("scratchpad_browse")}</span>`;const m=t.querySelector("#sp-tools-header");m&&m.classList.remove("opacity-0","pointer-events-none"),setTimeout(M,300)}};b.onclick=f;function M(){const m=d.parentElement.getBoundingClientRect();if(m.width!==0&&(d.width!==m.width||d.height!==m.height)){let y=null;try{d.width>0&&d.height>0&&(y=u.getImageData(0,0,d.width,d.height))}catch{}d.width=m.width,d.height=m.height,y&&u.putImageData(y,0,0)}}function S(){localStorage.setItem("scratchpad_current",d.toDataURL())}function _(){const m=localStorage.getItem("scratchpad_current");if(m){const y=new Image;y.onload=()=>u.drawImage(y,0,0),y.src=m}}const E=m=>{i=!0,r(m)},j=()=>{i=!1,u.beginPath(),S()},B=m=>{const y=d.getBoundingClientRect();return{x:(m.clientX||m.touches[0].clientX)-y.left,y:(m.clientY||m.touches[0].clientY)-y.top}},r=m=>{if(!i)return;m.preventDefault();const y=B(m);u.lineWidth=n,u.lineCap="round",u.strokeStyle=o,u.lineTo(y.x,y.y),u.stroke(),u.beginPath(),u.moveTo(y.x,y.y)};d.addEventListener("mousedown",E),d.addEventListener("mouseup",j),d.addEventListener("mousemove",r),d.addEventListener("touchstart",E),d.addEventListener("touchend",j),d.addEventListener("touchmove",r),g.forEach(m=>{m.onclick=()=>{g.forEach(y=>y.classList.remove("ring-2","ring-offset-1","ring-gray-800")),m.classList.add("ring-2","ring-offset-1","ring-gray-800"),o=m.dataset.color}}),w.onclick=()=>{u.clearRect(0,0,d.width,d.height),localStorage.removeItem("scratchpad_current")},L.onclick=()=>{const m=d.toDataURL(),y=new Date().toLocaleString();c.unshift({id:Date.now(),date:y,data:m}),localStorage.setItem("scratchpad_gallery",JSON.stringify(c));const k=L.innerHTML;L.innerHTML='<svg class="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>',setTimeout(()=>L.innerHTML=k,1500)};const h=(m,y)=>{y.stopPropagation(),c=c.filter(k=>k.id!==m),localStorage.setItem("scratchpad_gallery",JSON.stringify(c)),$()},v=m=>{const y=new Image;y.onload=()=>{u.clearRect(0,0,d.width,d.height),u.drawImage(y,0,0),S(),f()},y.src=m.data};function $(){if(x.innerHTML="",c.length===0){x.innerHTML=`
                <div class="col-span-2 flex flex-col items-center justify-center text-gray-300 h-full w-full absolute top-0 left-0 pointer-events-none">
                     <div class="flex flex-col items-center justify-center h-full pb-8">
                        <svg class="w-10 h-10 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <p class="text-xs">${e("scratchpad_no_sketches")}</p>
                    </div>
                </div>
            `;return}c.forEach(m=>{const y=document.createElement("div");y.className="group relative aspect-square bg-gray-50 rounded-lg border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-all",y.innerHTML=`
                <img src="${m.data}" class="w-full h-full object-contain pointer-events-none opacity-80 group-hover:opacity-100 mix-blend-multiply" />
                <div class="absolute bottom-0 left-0 right-0 bg-white/90 p-1 text-[10px] text-center text-gray-500 truncate">
                    ${m.date.split(",")[0]}
                </div>
                <button class="absolute top-1 right-1 p-1 bg-white rounded-full text-red-400 hover:text-red-500 hover:bg-red-50 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity" title="Delete">
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            `,y.onclick=()=>v(m),y.querySelector("button").onclick=k=>h(m.id,k),x.appendChild(y)})}setTimeout(()=>{M(),_(),window.ResizeObserver&&new ResizeObserver(()=>{M()}).observe(t)},500)}function be(t){t.innerHTML=`
      <div class="h-full flex flex-col p-5">
        <div class="flex justify-between items-center mb-4 cursor-move shrink-0">
          <h3 class="text-lg font-bold text-dark flex items-center gap-2">
            <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            ${e("bookmarks")}
          </h3>
        </div>
        <div class="flex-1 flex flex-col gap-3 overflow-y-auto custom-scrollbar min-h-0">
          
          <!-- Gemini -->
          <a href="https://gemini.google.com" target="_blank" class="flex items-center gap-3 p-3 bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 rounded-xl transition-all group">
            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
               <!-- Sparkles Icon for AI -->
               <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
               </svg>
            </div>
            <div>
              <h4 class="font-bold text-dark text-sm">Gemini</h4>
              <p class="text-xs text-gray-500">${e("google_ai_desc")}</p>
            </div>
            <svg class="w-4 h-4 text-gray-300 group-hover:text-primary ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <!-- ChatGPT -->
          <a href="https://chatgpt.com" target="_blank" class="flex items-center gap-3 p-3 bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 rounded-xl transition-all group">
            <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
               <!-- Chat Bubble Icon -->
               <svg class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
               </svg>
            </div>
            <div>
              <h4 class="font-bold text-dark text-sm">ChatGPT</h4>
              <p class="text-xs text-gray-500">${e("openai_chat_desc")}</p>
            </div>
             <svg class="w-4 h-4 text-gray-300 group-hover:text-primary ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <!-- YouTube Education -->
          <a href="https://www.youtube.com" target="_blank" class="flex items-center gap-3 p-3 bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 rounded-xl transition-all group">
            <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
               <!-- Play Icon -->
               <svg class="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </div>
            <div>
              <h4 class="font-bold text-dark text-sm">${e("learning")}</h4>
              <p class="text-xs text-gray-500">${e("youtube_desc")}</p>
            </div>
             <svg class="w-4 h-4 text-gray-300 group-hover:text-primary ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

        </div>
      </div>
    `}function fe(t){if(!t)return;let i;try{i=JSON.parse(localStorage.getItem("grade_calc_data")||"[]")}catch(c){console.error("Failed to parse grade data:",c),i=[]}i.length===0&&(i=[{id:1,name:e("midterm"),grade:"",weight:40},{id:2,name:e("final_exam"),grade:"",weight:60}]);const o=()=>{try{localStorage.setItem("grade_calc_data",JSON.stringify(i))}catch(c){console.error("Failed to save grade data:",c)}},n=()=>{let c=0,b=0,s=0;i.forEach(g=>{const w=parseFloat(g.weight)||0,L=parseFloat(g.grade);c+=w,isNaN(L)||(b+=L*w,s+=w)});const a=s>0?(b/s).toFixed(1):0;let d="";s>0?d=`<div class="text-sm">${e("current_avg")}: <span class="font-bold text-primary text-lg">${a}</span></div>`:d=`<div class="text-sm text-gray-400">${e("enter_grades_msg")}</div>`;const u=i.find(g=>(g.name.toLowerCase().includes("final")||g.weight>30)&&(g.grade===""||isNaN(parseFloat(g.grade))));if(u&&s>0&&c>0){const w=((60*c-b)/u.weight).toFixed(1);w>0&&w<=100?d+=`<div class="text-xs text-gray-500 mt-1">${e("need_score_msg")} <b class="text-dark">${w}</b> ${e("on_msg")} ${u.name} ${e("for_msg")} 60</div>`:w>100?d+=`<div class="text-xs text-primary mt-1">${e("need_score_msg")} ${w}... ${e("impossible")}</div>`:w<=0&&(d+=`<div class="text-xs text-green-500 mt-1">${e("passed_msg")}</div>`)}return d},l=()=>{const c=t.querySelector("#gc-list");c.innerHTML="",i.forEach((b,s)=>{const a=document.createElement("div");a.className="flex items-center gap-2 mb-2",a.innerHTML=`
                <input type="text" placeholder="${e("assessment_name")}" class="w-full bg-gray-50 rounded-lg px-2 py-1 text-xs border border-transparent focus:bg-white focus:border-primary focus:outline-none transition-colors" value="${b.name}" data-idx="${s}" data-key="name">
                <input type="number" placeholder="${e("grade")}" class="w-16 bg-gray-50 rounded-lg px-2 py-1 text-xs border border-transparent focus:bg-white focus:border-primary focus:outline-none transition-colors text-center" value="${b.grade}" data-idx="${s}" data-key="grade">
                <input type="number" placeholder="%" class="w-12 bg-gray-50 rounded-lg px-2 py-1 text-xs border border-transparent focus:bg-white focus:border-primary focus:outline-none transition-colors text-center" value="${b.weight}" data-idx="${s}" data-key="weight">
                <button class="text-gray-300 hover:text-primary transition-colors" data-idx="${s}">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            `,a.querySelectorAll("input").forEach(u=>{u.oninput=g=>{const w=g.target.dataset.key;i[s][w]=g.target.value,o()}}),a.querySelector("button").onclick=()=>{i.splice(s,1),o(),l(),t.querySelector("#gc-result").innerHTML=""},c.appendChild(a)})};t.innerHTML=`
        <div class="h-full flex flex-col p-5">
            <div class="flex justify-between items-center mb-4 cursor-move shrink-0">
                <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    ${e("grade_calc")}
                </h3>
                <button id="gc-add-btn" class="p-1.5 bg-primary text-white rounded-lg hover:opacity-90 transition-colors shadow-lg shadow-primary/30">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>
            
            <div class="flex text-[10px] text-gray-400 font-bold mb-1 px-1">
                <span class="flex-1">${e("assessment")}</span>
                <span class="w-16 text-center">${e("grade")}</span>
                <span class="w-12 text-center mr-6">%</span>
            </div>
            
            <div id="gc-list" class="flex-1 overflow-y-auto custom-scrollbar min-h-0"></div>
            
            <div id="gc-result" class="mt-2 py-2 flex flex-col items-center justify-center min-h-[40px] rounded-xl text-sm">
                <!-- Result will appear here -->
            </div>

            <div class="flex gap-2 mt-auto pt-2 border-t border-gray-100">
                <button id="gc-calc-btn" class="flex-1 bg-primary text-white py-2 rounded-xl text-sm font-bold hover:opacity-90 transition-colors shadow-lg shadow-primary/30">
                    ${e("calculate")}
                </button>
                <button id="gc-reset-btn" class="px-4 bg-gray-100 text-gray-500 py-2 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors">
                    ${e("reset")}
                </button>
            </div>
        </div>
    `,l(),t.querySelector("#gc-add-btn").onclick=()=>{i.push({id:Date.now(),name:e("new_assessment"),grade:"",weight:10}),o(),l()},t.querySelector("#gc-calc-btn").onclick=()=>{t.querySelector("#gc-result").innerHTML=n()},t.querySelector("#gc-reset-btn").onclick=()=>{i.forEach(c=>{c.grade=""}),o(),l(),t.querySelector("#gc-result").innerHTML=""}}function ye(t){if(!t)return;let i=0,o=0,n=null,l=!1;t.innerHTML=`
        <div class="h-full flex flex-col p-5">
            <div class="flex justify-between items-center mb-6 cursor-move shrink-0">
                <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ${e("stopwatch")}
                </h3>
            </div>

            <div class="flex-1 flex flex-col items-center justify-center min-h-0">
                <!-- Time Display -->
                <div id="sw-display" class="text-5xl font-mono text-dark font-bold tracking-wider mb-8 tabular-nums">
                    00:00:00
                </div>

                <!-- Controls -->
                <div class="flex items-center gap-4 w-full justify-center">
                    <button id="sw-btn-reset" class="px-6 py-3 rounded-xl bg-gray-100 text-gray-500 font-bold hover:bg-gray-200 transition-colors text-sm">
                        ${e("reset")}
                    </button>

                    <button id="sw-btn-toggle" class="px-8 py-3 rounded-xl bg-primary text-white font-bold hover:opacity-90 shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-105 transition-all text-sm min-w-[100px]">
                        ${e("start")}
                    </button>
                </div>
            </div>
        </div>
    `;const c=t.querySelector("#sw-display"),b=t.querySelector("#sw-btn-toggle"),s=t.querySelector("#sw-btn-reset"),a=u=>{const g=new Date(u),w=String(g.getUTCMinutes()).padStart(2,"0"),L=String(g.getUTCSeconds()).padStart(2,"0"),x=String(Math.floor(g.getUTCMilliseconds()/10)).padStart(2,"0");return`<span class="align-top">${w}:</span>${L}<span class="text-gray-400 text-2xl align-baseline">.${x}</span>`};c.innerHTML=a(0);const d=()=>{o=Date.now()-i,c.innerHTML=a(o)};b.onclick=()=>{l?(clearInterval(n),l=!1,b.innerText="Start",b.classList.remove("bg-primary","hover:opacity-90"),b.classList.add("bg-primary","hover:opacity-90")):(i=Date.now()-o,n=setInterval(d,30),l=!0,b.innerText=e("stop"),b.classList.remove("bg-primary","hover:opacity-90"),b.classList.add("bg-primary","hover:opacity-90"))},s.onclick=()=>{l&&(clearInterval(n),clearInterval(n),l=!1,b.innerText=e("start"),b.classList.remove("bg-primary","hover:opacity-90"),b.classList.add("bg-primary","hover:opacity-90")),o=0,i=0,c.innerHTML=a(0)}}function xe(t){if(!t)return;let i="menu",o=[];const n=()=>{if(i==="menu")t.innerHTML=`
                <div class="h-full flex flex-col p-5">
                    <div class="flex justify-between items-center mb-4 cursor-move shrink-0">
                        <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                            <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            ${e("mini_games")}
                        </h3>
                    </div>
                    <div class="flex-1 overflow-y-auto custom-scrollbar flex flex-col items-center gap-3 pr-2">
                        <!-- Yes / No -->
                        <button id="btn-yesno" class="w-full py-4 bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 rounded-xl transition-all flex items-center px-4 gap-4 group shrink-0">
                             <div class="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             </div>
                             <div class="text-left">
                                <span class="block font-bold text-dark text-sm">${e("yes_no")}</span>
                                <span class="block text-xs text-gray-400">${e("decision_maker")}</span>
                             </div>
                             <svg class="w-4 h-4 text-gray-300 ml-auto group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                        </button>

                        <!-- Random Picker -->
                        <button id="btn-picker" class="w-full py-4 bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 rounded-xl transition-all flex items-center px-4 gap-4 group shrink-0">
                             <div class="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                             </div>
                             <div class="text-left">
                                <span class="block font-bold text-dark text-sm">${e("random_picker")}</span>
                                <span class="block text-xs text-gray-400">${e("choice_generator")}</span>
                             </div>
                             <svg class="w-4 h-4 text-gray-300 ml-auto group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            `,t.querySelector("#btn-yesno").onclick=()=>{i="yesno",n()},t.querySelector("#btn-picker").onclick=()=>{i="picker",n()};else if(i==="yesno"){t.innerHTML=`
                <div class="h-full flex flex-col p-5">
                    <div class="flex items-center gap-3 mb-4 shrink-0">
                        <button id="btn-back" class="text-gray-400 hover:text-dark transition-colors">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </button>
                        <h3 class="text-lg font-bold text-dark">${e("yes_no")}</h3>
                    </div>
                    
                    <div class="flex-1 flex flex-col items-center justify-center text-center">
                        <div id="yn-result" class="text-4xl font-bold text-gray-300 mb-4 min-h-[3rem] tracking-widest">???</div>
                        
                        <button id="yn-decide" class="px-6 py-2 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-sm w-32 text-sm">
                            ${e("decide")}
                        </button>
                    </div>
                </div>
            `,t.querySelector("#btn-back").onclick=()=>{i="menu",n()};const l=t.querySelector("#yn-result");t.querySelector("#yn-decide").onclick=()=>{l.innerText="...",t.querySelector("#yn-decide").disabled=!0,setTimeout(()=>{const c=[e("ans_yes"),e("ans_no"),e("maybe"),e("ans_no"),e("ans_yes")],b=c[Math.floor(Math.random()*c.length)];l.innerText=b,b===e("ans_yes")?l.className="text-5xl font-bold text-primary mb-4 min-h-[3rem] tracking-wider":b===e("ans_no")?l.className="text-5xl font-bold text-red-500 mb-4 min-h-[3rem] tracking-wider":l.className="text-5xl font-bold text-gray-500 mb-4 min-h-[3rem] tracking-wider",t.querySelector("#yn-decide").disabled=!1},400)}}else if(i==="picker"){o.length===0&&(o=[e("option_a"),e("option_b")]),t.innerHTML=`
                <div class="h-full flex flex-col p-5">
                    <div class="flex items-center gap-3 mb-2 shrink-0">
                        <button id="btn-back" class="text-gray-400 hover:text-dark transition-colors">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </button>
                        <h3 class="text-lg font-bold text-dark">${e("random_picker")}</h3>
                    </div>
                    
                    <div class="flex gap-2 mb-3 mt-2">
                        <input type="text" id="rp-input" class="flex-1 bg-gray-50 border-none rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-gray-200" placeholder="${e("add_option_placeholder")}">
                        <button id="rp-add" class="bg-gray-100 hover:bg-gray-200 text-dark px-3 rounded-lg text-xs font-bold">+</button>
                    </div>

                    <div id="rp-list" class="flex-1 overflow-y-auto flex flex-wrap gap-2 content-start min-h-0 custom-scrollbar mb-3">
                        ${o.map((s,a)=>`
                            <div class="bg-white border border-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs flex items-center gap-2 shadow-sm">
                                ${s}
                                <span class="text-gray-300 hover:text-red-400 cursor-pointer pointer-events-auto" data-idx="${a}">
                                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </span>
                            </div>
                        `).join("")}
                    </div>

                    <button id="rp-spin" class="w-full py-2 bg-primary text-white font-bold rounded-xl shadow-sm hover:opacity-90 transition-colors text-sm">
                        ${e("pick_random")}
                    </button>
                    
                    <div id="rp-result-overlay" class="absolute inset-0 bg-white/95 flex flex-col items-center justify-center z-20 hidden rounded-3xl">
                        <div class="text-2xl font-bold text-dark mb-4" id="rp-winner">${e("winner")}</div>
                        <button id="rp-close-result" class="px-6 py-2 bg-gray-100 rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-200">${e("again")}</button>
                    </div>
                </div>
            `,t.querySelector("#btn-back").onclick=()=>{i="menu",n()};const l=t.querySelector("#rp-input"),c=t.querySelector("#rp-add"),b=()=>{l.value.trim()&&(o.push(l.value.trim()),n())};c.onclick=b,l.onkeypress=s=>{s.key==="Enter"&&b()},t.querySelectorAll("[data-idx]").forEach(s=>{s.onclick=()=>{const a=parseInt(s.dataset.idx);o.splice(a,1),n()}}),t.querySelector("#rp-spin").onclick=()=>{if(o.length<2)return;const s=t.querySelector("#rp-result-overlay"),a=t.querySelector("#rp-winner");s.classList.remove("hidden"),a.innerText="...";let d=0;const u=setInterval(()=>{a.innerText=o[d%o.length],d++},80);setTimeout(()=>{clearInterval(u);const g=o[Math.floor(Math.random()*o.length)];a.innerText=g},1e3),t.querySelector("#rp-close-result").onclick=()=>{s.classList.add("hidden")}}}};n()}function we(t){if(!t)return;const i=new Date().toLocaleDateString();let o;try{o=JSON.parse(localStorage.getItem("habit_tracker_data_v3")||"{}")}catch(d){console.error("Failed to parse habit data:",d),o={}}if(o.date!==i){const u=(o.habits||[]).map(g=>({...g,completed:!1}));o={date:i,habits:u};try{localStorage.setItem("habit_tracker_data_v3",JSON.stringify(o))}catch(g){console.error("Failed to save habit data:",g)}}const n=()=>{o.date=new Date().toLocaleDateString();try{localStorage.setItem("habit_tracker_data_v3",JSON.stringify(o))}catch(d){console.error("Failed to save habit state:",d)}l(),document.dispatchEvent(new Event("dataChanged"))},l=()=>{const d=o.habits.filter(x=>x.completed).length,u=o.habits.length,g=u===0?0:Math.round(d/u*100),w=t.querySelector("#hb-progress-bar"),L=t.querySelector("#hb-progress-text");w&&(w.style.width=`${g}%`),L&&(L.innerText=`${g}% ${e("done")}`)},c=()=>{const d=t.querySelector("#hb-list");if(d.innerHTML="",o.habits.length===0){d.innerHTML=`
                <div class="flex flex-col items-center justify-center h-full text-gray-400 gap-2 mt-4">
                    <svg class="w-8 h-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span class="text-xs">${e("no_habits_msg")}</span>
                </div>
            `;return}o.habits.forEach((u,g)=>{const w=document.createElement("div");w.className=`
                flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer group mb-2
                ${u.completed?"bg-primary/10 border-primary/20 shadow-sm":"bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm"}
            `,w.innerHTML=`
                <div class="flex items-center gap-3 overflow-hidden">
                    <div class="text-lg shrink-0 w-10 h-10 flex items-center justify-center rounded-full ${u.completed?"bg-white":"bg-gray-50"}">
                        ${u.icon}
                    </div>
                    <span class="text-sm font-bold truncate ${u.completed?"text-primary line-through opacity-70":"text-gray-700"}">
                        ${u.name}
                    </span>
                </div>
                
                <div class="shrink-0 flex items-center gap-2">
                     <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                        ${u.completed?"border-primary bg-primary":"border-gray-300 group-hover:border-primary"}">
                        ${u.completed?'<svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>':""}
                     </div>
                     <button class="delete-btn opacity-0 group-hover:opacity-100 p-1 text-gray-300 hover:text-primary transition-all" data-idx="${g}">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                     </button>
                </div>
            `,w.onclick=L=>{L.target.closest(".delete-btn")||(u.completed=!u.completed,n(),c())},w.querySelector(".delete-btn").onclick=L=>{L.stopPropagation(),o.habits.splice(g,1),n(),c()},d.appendChild(w)}),l()};t.innerHTML=`
        <div class="h-full flex flex-col p-5">
            <div class="flex justify-between items-center mb-4 cursor-move shrink-0">
                <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ${e("daily_habits")}
                </h3>
                <div class="flex items-center gap-2">
                     <span id="hb-progress-text" class="text-xs font-bold text-gray-400">0% ${e("done")}</span>
                </div>
            </div>
            
            <!-- Progress Bar -->
            <div class="w-full h-1.5 bg-gray-100 rounded-full mb-4 overflow-hidden shrink-0">
                <div id="hb-progress-bar" class="h-full bg-primary transition-all duration-500 ease-out" style="width: 0%"></div>
            </div>

            <!-- List -->
            <div id="hb-list" class="flex-1 overflow-y-auto no-scrollbar min-h-0 pr-1">
                <!-- Items injected here -->
            </div>

            <!-- Add Input -->
            <div class="mt-3 pt-3 border-t border-gray-100 flex gap-2 shrink-0">
                <input type="text" id="hb-input" class="flex-1 bg-gray-50 border-none rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-primary focus:bg-white transition-all" placeholder="${e("new_habit_placeholder")}">
                <button id="hb-add-btn" class="bg-primary text-white p-2 rounded-xl shadow-lg shadow-primary/30 hover:opacity-90 transition-opacity">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>
        </div>
    `,c();const b=t.querySelector("#hb-input"),s=t.querySelector("#hb-add-btn"),a=()=>{const d=b.value.trim();if(d){const u=['<svg class="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>','<svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>','<svg class="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>','<svg class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'],g=u[Math.floor(Math.random()*u.length)];o.habits.push({id:Date.now(),name:d,completed:!1,icon:g}),b.value="",n(),c();const w=t.querySelector("#hb-list");w.scrollTop=w.scrollHeight}};s.onclick=a,b.onkeypress=d=>{d.key==="Enter"&&a()}}function ie(t){const i=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],o=["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"];p.weeklySchedule||(p.weeklySchedule={events:{}}),t.innerHTML=`
        <div class="bg-white p-6 rounded-3xl shadow-sm h-full flex flex-col overflow-hidden relative group">
            <div class="flex justify-between items-center mb-4 shrink-0">
                <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    ${e("weekly_schedule")}
                </h3>
                <div class="flex items-center gap-1">
                    <button id="reset-schedule-btn" class="p-1.5 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="${e("clear_schedule")}">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                </div>
            </div>
            
            <!-- TABLE VIEW -->
            <style>
                .hover-scrollbar::-webkit-scrollbar {
                    width: 0px;
                    background: transparent;
                }
                .group:hover .hover-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .group:hover .hover-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(0,0,0,0.1);
                    border-radius: 20px;
                }
                .hover-scrollbar {
                    scrollbar-width: none; /* Firefox */
                }
                .group:hover .hover-scrollbar {
                    scrollbar-width: thin;
                }
            </style>
            <div id="ws-view-table" class="flex-1 overflow-y-auto overflow-x-hidden hover-scrollbar relative">
                <table class="w-full border-collapse sticky-table">
                    <thead>
                        <tr>
                            <th class="p-2 border-b border-gray-100 text-[10px] text-gray-400 font-bold uppercase w-12 sticky left-0 bg-white z-20">${e("time")}</th>
                            ${i.map(s=>`<th class="p-2 border-b border-gray-100 text-[10px] text-gray-400 font-bold uppercase text-center">${s}</th>`).join("")}
                        </tr>
                    </thead>
                    <tbody>
                        ${o.map((s,a)=>`
                            <tr>
                                <td class="p-2 border-b border-gray-50 text-[10px] text-gray-500 font-medium sticky left-0 bg-white z-10 text-center">${s}</td>
                                ${i.map((d,u)=>{const g=`${u}-${a}`;return`
                                        <td class="p-1 border-b border-gray-50 border-r border-gray-50 last:border-r-0 relative group hover:bg-gray-50 transition-colors">
                                            <input 
                                                type="text" 
                                                class="w-full bg-transparent text-xs text-dark font-medium focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary/50 rounded px-1 py-1 text-center truncate placeholder-gray-200 transition-all schedule-input" 
                                                value="${p.weeklySchedule.events[g]||""}" 
                                                data-key="${g}"
                                                placeholder="..."
                                            >
                                        </td>
                                    `}).join("")}
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>

            <!-- Custom Reset Confirmation Modal -->
            <div id="schedule-reset-modal" class="absolute inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-200 rounded-3xl">
                <div class="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform scale-95 transition-all text-center w-48">
                     <div class="mb-3 text-primary bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 0 00-1 1v3M4 7h16" /></svg>
                     </div>
                     <h4 class="text-sm font-bold text-dark mb-1">${e("clear_all_q")}</h4>
                     <p class="text-[10px] text-gray-400 mb-4 leading-tight">${e("clear_all_desc")}</p>
                     <div class="flex gap-2 justify-center">
                         <button id="cancel-schedule-reset" class="px-3 py-1.5 text-xs font-bold text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">${e("no")}</button>
                          <button id="confirm-schedule-reset" class="px-3 py-1.5 text-xs font-bold text-white bg-primary hover:opacity-90 rounded-lg transition-colors shadow-lg shadow-primary/30">${e("yes")}</button>
                     </div>
                </div>
            </div>
        </div>
    `,t.querySelectorAll(".schedule-input").forEach(s=>{s.addEventListener("change",a=>{const d=a.target.dataset.key,u=a.target.value;p.weeklySchedule.events[d]=u,H()}),s.addEventListener("focus",function(){this.select()})});const n=t.querySelector("#reset-schedule-btn"),l=t.querySelector("#schedule-reset-modal"),c=t.querySelector("#confirm-schedule-reset"),b=t.querySelector("#cancel-schedule-reset");n&&l&&(n.addEventListener("click",s=>{s.stopPropagation(),l.classList.remove("invisible","opacity-0"),l.classList.add("visible","opacity-100"),l.querySelector("div").classList.remove("scale-95"),l.querySelector("div").classList.add("scale-100")}),b.addEventListener("click",s=>{s.stopPropagation(),l.classList.add("invisible","opacity-0"),l.classList.remove("visible","opacity-100"),l.querySelector("div").classList.add("scale-95"),l.querySelector("div").classList.remove("scale-100")}),c.addEventListener("click",s=>{s.stopPropagation(),p.weeklySchedule.events={},H(),ie(t)}))}function U(t){const i=()=>{const o=localStorage.getItem("photo_widget_image");let n=parseFloat(localStorage.getItem("photo_widget_zoom")||"1");o?t.innerHTML=`
                <div class="w-full h-full relative group overflow-hidden rounded-3xl bg-gray-100 flex items-center justify-center">
                    <img id="dashboard-photo-img" src="${o}" class="w-full h-full object-cover pointer-events-none transition-transform duration-100 origin-center" style="transform: scale(${n})" alt="${e("dashboard_photo_alt")}">
                    
                    <!-- Controls (Hidden by default, shown on hover) -->
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 z-10 transition-all duration-300">
                        <!-- Change Photo -->
                        <button id="btn-change-photo" class="p-3 bg-white text-dark hover:text-primary rounded-full hover:scale-110 transition-transform shadow-lg cursor-pointer" title="${e("change_photo")}">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </button>

                        <!-- Zoom Toggle -->
                        <button id="btn-toggle-zoom" class="p-3 bg-white text-dark hover:text-primary rounded-full hover:scale-110 transition-transform shadow-lg cursor-pointer" title="${e("zoom_image")}">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                        </button>

                        <!-- Delete Photo -->
                         <button id="btn-delete-photo" class="p-3 bg-white text-dark hover:text-primary rounded-full hover:scale-110 transition-transform shadow-lg cursor-pointer" title="${e("remove_photo")}">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>

                    <!-- Zoom Slider Popup -->
                    <div id="zoom-controls" class="absolute bottom-6 bg-white px-4 py-2 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300 opacity-0 invisible translate-y-4 z-20">
                         <button id="btn-zoom-out" class="text-gray-400 hover:text-dark font-bold">-</button>
                         <input type="range" id="zoom-slider" min="1" max="3" step="0.1" value="${n}" class="w-32 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary">
                         <button id="btn-zoom-in" class="text-gray-400 hover:text-dark font-bold">+</button>
                    </div>

                    <!-- Custom Delete Confirmation Modal -->
                    <div id="photo-delete-modal" class="absolute inset-0 bg-white/90 backdrop-blur-sm z-30 flex flex-col items-center justify-center opacity-0 invisible transition-all duration-200">
                        <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3">
                             <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </div>
                        <h4 class="font-bold text-dark text-lg mb-1">${e("delete_photo_confirm")}</h4>
                        <p class="text-xs text-gray-500 mb-4">${e("action_undone")}</p>
                        <div class="flex gap-2">
                             <button id="cancel-delete-photo" class="px-4 py-2 rounded-xl bg-gray-100 text-gray-500 font-bold text-xs hover:bg-gray-200 transition-colors">${e("cancel")}</button>
                             <button id="confirm-delete-photo" class="px-4 py-2 rounded-xl bg-primary text-white font-bold text-xs hover:opacity-90 shadow-lg shadow-primary/30 transition-all">${e("delete")}</button>
                        </div>
                    </div>
                </div>
                <input type="file" id="photo-input" class="hidden" accept="image/*">
            `:t.innerHTML=`
                <div class="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors group rounded-3xl border-2 border-dashed border-gray-200 hover:border-primary/50" id="photo-placeholder">
                    <div class="p-4 bg-primary/10 text-primary rounded-full mb-3 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    </div>
                    <p class="text-sm font-bold text-gray-500 group-hover:text-primary transition-colors">${e("add_photo")}</p>
                </div>
                <input type="file" id="photo-input" class="hidden" accept="image/*">
            `;const l=t.querySelector("#photo-input"),c=()=>{l.addEventListener("change",b=>{const s=b.target.files[0];if(s){const a=new FileReader;a.onload=d=>{const u=d.target.result;if(u.length>5*1024*1024){alert(e("image_too_large"));return}try{localStorage.setItem("photo_widget_image",u),localStorage.setItem("photo_widget_zoom","1"),i()}catch{alert(e("storage_full"))}},a.readAsDataURL(s)}})};if(o){const b=t.querySelector("#btn-change-photo"),s=t.querySelector("#btn-toggle-zoom"),a=t.querySelector("#btn-delete-photo"),d=t.querySelector("#zoom-controls"),u=t.querySelector("#zoom-slider"),g=t.querySelector("#btn-zoom-out"),w=t.querySelector("#btn-zoom-in"),L=t.querySelector("#dashboard-photo-img"),x=t.querySelector("#photo-delete-modal"),f=t.querySelector("#cancel-delete-photo"),M=t.querySelector("#confirm-delete-photo");b.addEventListener("click",_=>{_.stopPropagation(),l.click()}),s.addEventListener("click",_=>{_.stopPropagation(),d.classList.contains("invisible")?(d.classList.remove("invisible","opacity-0","translate-y-4"),d.classList.add("visible","opacity-100","translate-y-0")):(d.classList.add("invisible","opacity-0","translate-y-4"),d.classList.remove("visible","opacity-100","translate-y-0"))});const S=_=>{L.style.transform=`scale(${_})`,u.value=_,localStorage.setItem("photo_widget_zoom",_)};u.addEventListener("input",_=>{S(_.target.value)}),w.addEventListener("click",_=>{_.stopPropagation();let E=parseFloat(u.value);E=Math.min(E+.1,3),S(E)}),g.addEventListener("click",_=>{_.stopPropagation();let E=parseFloat(u.value);E=Math.max(E-.1,1),S(E)}),a.addEventListener("click",_=>{_.stopPropagation(),x.classList.remove("invisible","opacity-0"),x.classList.add("visible","opacity-100")}),f.addEventListener("click",_=>{_.stopPropagation(),x.classList.add("invisible","opacity-0"),x.classList.remove("visible","opacity-100")}),M.addEventListener("click",_=>{_.stopPropagation(),localStorage.removeItem("photo_widget_image"),localStorage.removeItem("photo_widget_zoom"),i()}),c()}else t.querySelector("#photo-placeholder").addEventListener("click",()=>{l.click()}),c()};i()}function ke(t){let i=!1;const o=()=>{const r=p.todos.filter(v=>!v.completed).length;p.todos.length>0;const h=document.getElementById("header-summary");h&&(h.innerHTML=`${e("summary_prefix")} <span class="font-bold text-dark">${p.courses.length} ${e("classes")}</span> & <span class="font-bold text-dark">${r} ${e("todos")}</span> ${e("summary_suffix")}`)};let n=null;const l=new Map,c=[{id:"stats-card-0",name:e("total_courses")},{id:"stats-card-1",name:e("completed")},{id:"stats-card-2",name:e("studyai")},{id:"chart-container",name:e("hours_spent")},{id:"time-container",name:e("time")},{id:"notes-container",name:e("quick_notes")},{id:"scratchpad-container",name:e("scratchpad")},{id:"pomodoro-container",name:e("focus_timer")},{id:"profile-container",name:e("profile")},{id:"exam-schedule-container",name:e("calendar")},{id:"todo-container",name:e("todo_list")},{id:"calculator-card",name:e("calculator")},{id:"bookmarks-container",name:e("bookmarks")},{id:"grade-calc-container",name:e("grade_calculation")},{id:"stopwatch-container",name:e("stopwatch")},{id:"games-container",name:e("mini_games")},{id:"habit-container",name:e("daily_habits")},{id:"weekly-schedule-container",name:e("weekly_schedule")},{id:"photo-container",name:e("photo_frame")}],b=()=>{const r=document.getElementById("dashboard-grid"),v=Array.from(r.children).map($=>({id:$.id,className:$.className}));localStorage.setItem("dashboardLayout",JSON.stringify(v))},s=()=>{const r=localStorage.getItem("dashboardLayout");if(r)try{const h=JSON.parse(r);if(h.some(k=>!k.id)){console.warn("Invalid layout detected (missing IDs). Resetting layout."),localStorage.removeItem("dashboardLayout");return}const $=document.getElementById("dashboard-grid"),m=document.createDocumentFragment(),y=new Set;h.forEach(k=>{let z=document.getElementById(k.id)||l.get(k.id);if(!z&&k.id.startsWith("photo-widget-")){const D=document.createElement("div");D.id=k.id,D.className=k.className||"col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",D.draggable=!0,U(D,k.id),a(D),z=D}z&&(z.className=k.className,m.appendChild(z),l.delete(k.id),y.add(k.id))}),c.forEach(k=>{if(!y.has(k.id)){const z=document.getElementById(k.id)||l.get(k.id);z&&(m.appendChild(z),l.delete(k.id),y.add(k.id))}}),Array.from($.children).forEach(k=>{l.set(k.id,k),k.remove()}),$.appendChild(m)}catch(h){console.error("Failed to load layout",h)}},a=r=>{const h=document.getElementById("dashboard-grid");if(!r.getAttribute("data-dnd-initialized")){if(r.setAttribute("data-dnd-initialized","true"),!r.querySelector(".resize-handle")&&r.id!=="weekly-schedule-container"){const v=document.createElement("div");v.className="resize-handle absolute bottom-2 right-2 w-6 h-6 bg-gray-100 hover:bg-primary rounded-full cursor-nwse-resize flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all z-20",v.innerHTML='<svg class="w-3 h-3 text-gray-500 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>',v.addEventListener("click",$=>{$.preventDefault(),$.stopPropagation(),r.classList.contains("md:col-span-2")?(r.classList.remove("md:col-span-2"),r.classList.add("col-span-1"),v.title="Maximize"):(r.classList.remove("col-span-1"),r.classList.add("md:col-span-2"),v.title="Minimize"),b()}),r.appendChild(v)}r.addEventListener("dragstart",v=>{n=r,v.dataTransfer.effectAllowed="move",v.dataTransfer.setData("source","grid"),setTimeout(()=>r.classList.add("opacity-0","scale-95"),0)}),r.addEventListener("dragend",()=>{r.classList.remove("opacity-0","scale-95"),n=null,h.querySelectorAll(".draggable-item").forEach(v=>v.classList.remove("ring-2","ring-primary","ring-offset-2"))}),r.addEventListener("dragover",v=>{v.preventDefault(),n&&n!==r&&r.classList.add("ring-2","ring-primary","ring-offset-2")}),r.addEventListener("dragleave",()=>{r.classList.remove("ring-2","ring-primary","ring-offset-2")}),r.addEventListener("drop",v=>{if(v.preventDefault(),v.stopPropagation(),r.classList.remove("ring-2","ring-primary","ring-offset-2"),n&&n.dataset&&n.dataset.widgetId){const $=n.dataset.widgetId,m=l.get($);if(m){h.insertBefore(m,r),l.delete($),a(m),b();const y=document.getElementById("manage-widgets-popup");y&&y.classList.add("invisible","opacity-0","scale-95")}return}if(n&&n!==r&&!n.dataset.widgetId){const $=h,m=document.createElement("div"),y=document.createElement("div");$.insertBefore(m,r),$.insertBefore(y,n),$.insertBefore(n,m),$.insertBefore(r,y),$.removeChild(m),$.removeChild(y),setTimeout(()=>b(),50)}})}};window.toggleManageDropdown=()=>{const r=document.getElementById("manage-widgets-popup"),h=document.getElementById("manage-widgets-list");if(r&&h)if(r.classList.contains("invisible")){r.classList.remove("invisible","opacity-0","scale-95"),r.classList.add("visible","opacity-100","scale-100"),h.innerHTML="";const v=document.createElement("div");v.className="w-full py-2.5 bg-primary text-white rounded-xl font-bold text-xs shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:opacity-90 transition-all mb-3 cursor-pointer",v.draggable=!0,v.innerHTML=`
                   <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                   ${e("add_photo_widget")}
                `,v.onclick=k=>{k.preventDefault();const z=document.getElementById("dashboard-grid"),D=`photo-widget-${Date.now()}`,q=document.createElement("div");q.id=D,q.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",q.draggable=!0,U(q),z.appendChild(q),a(q),b(),r.classList.add("invisible","opacity-0","scale-95")},v.addEventListener("dragstart",k=>{n=v,k.dataTransfer.effectAllowed="copy",k.dataTransfer.setData("source","generator"),k.dataTransfer.setData("type","photo-widget"),v.classList.add("opacity-50")}),v.addEventListener("dragend",()=>{v.classList.remove("opacity-50"),n=null}),h.appendChild(v);const $=document.getElementById("dashboard-grid"),m=Array.from($.children).map(k=>k.id),y=c.filter(k=>!m.includes(k.id));if(y.length===0){const k=document.createElement("div");k.innerHTML=e("all_widgets_active"),k.className="text-xs text-gray-400 text-center py-2",h.appendChild(k)}else y.forEach(k=>{const z=document.createElement("div");z.className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors mb-2",z.draggable=!0,z.dataset.widgetId=k.id,z.innerHTML=`
                            <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                            <span class="text-xs font-bold text-gray-600">${k.name}</span>
                        `,z.onclick=D=>{D.preventDefault();const q=document.getElementById("dashboard-grid"),I=l.get(k.id);if(I&&(q.appendChild(I),l.delete(k.id),a(I),b(),z.remove(),h.children.length===1)){const C=document.createElement("div");C.innerHTML=e("all_widgets_active"),C.className="text-xs text-gray-400 text-center py-2",h.appendChild(C)}},z.addEventListener("dragstart",D=>{n=z,D.dataTransfer.effectAllowed="copy",D.dataTransfer.setData("source","picker"),D.dataTransfer.setData("widgetId",k.id),z.classList.add("opacity-50")}),z.addEventListener("dragend",()=>{z.classList.remove("opacity-50"),n=null}),h.appendChild(z)})}else r.classList.add("invisible","opacity-0","scale-95"),r.classList.remove("visible","opacity-100","scale-100")};let d="general";window.toggleSettingsModal=()=>{const r=document.getElementById("settings-modal");r&&(r.classList.contains("invisible")?(r.classList.remove("invisible","opacity-0","scale-95"),r.classList.add("visible","opacity-100","scale-100"),u()):(r.classList.add("invisible","opacity-0","scale-95"),r.classList.remove("visible","opacity-100","scale-100")))},window.switchSettingsTab=r=>{d=r,u()},window.changeTheme=r=>{const h={emerald:"5 150 105",blue:"37 99 235",pink:"236 72 153",orange:"234 88 12",rose:"225 29 72",lila:"178 106 251"};h[r]&&(document.documentElement.style.setProperty("--color-primary-rgb",h[r]),p.user.themePreference=r,p.user.customThemeRgb=null,H(),u(),p.user.bgPreference==="theme"&&(document.body.style.backgroundColor=`rgb(${h[r]} / 0.04)`))},window.changeBgPreference=r=>{p.user.bgPreference=r,r==="theme"?document.body.style.backgroundColor="rgb(var(--color-primary-rgb) / 0.04)":document.body.style.backgroundColor="",H(),u()},window.updateProfileField=(r,h)=>{if(p.user[r]=h,H(),r==="name"){const $=document.getElementById("header-greeting");$&&($.innerHTML=`${e("hello")}, ${h}!`)}r==="avatar"&&u();const v=document.getElementById("profile-container");v&&(v.innerHTML="",Q(v,p.user))},window.checkDevPin=r=>{const h=document.getElementById("dev-pin-input"),v=document.getElementById("dev-lock-container");r.length>0?(h.classList.add("border-primary","bg-white"),h.classList.remove("border-gray-200","bg-gray-50")):(h.classList.remove("border-primary","bg-white"),h.classList.add("border-gray-200","bg-gray-50")),r.length===4&&(r==="0000"?(h.classList.add("text-green-500","border-green-500"),v&&v.classList.add("scale-105","opacity-0"),setTimeout(()=>{i=!0,u()},300)):(h.classList.add("animate-shake","border-red-500","text-red-500"),setTimeout(()=>{h.value="",h.classList.remove("animate-shake","border-red-500","text-red-500"),h.focus()},500)))},window.toggleDevPremium=()=>{p.user.isPremium=!p.user.isPremium,H(),u();const r=document.getElementById("header-premium-btn");r&&(p.user.isPremium?(r.classList.remove("bg-primary","text-white","shadow-primary/30"),r.classList.add("bg-amber-100","text-amber-600","border-amber-200","shadow-amber-500/10"),r.innerHTML=`
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    <span>${e("premium_active")}</span>
                `,r.onclick=null):(r.classList.add("bg-primary","text-white","shadow-primary/30"),r.classList.remove("bg-amber-100","text-amber-600","border-amber-200","shadow-amber-500/10"),r.innerHTML=`
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    <span>${e("premium")}</span>
                 `,r.onclick=window.togglePremiumModal))},window.togglePremiumModal=()=>{const r=document.getElementById("premium-modal");if(r){const h=r.querySelector(".modal-content");r.classList.contains("invisible")?(r.classList.remove("invisible","opacity-0"),r.classList.add("visible","opacity-100"),h&&(h.classList.remove("scale-95"),h.classList.add("scale-100"))):(r.classList.add("invisible","opacity-0"),r.classList.remove("visible","opacity-100"),h&&(h.classList.add("scale-95"),h.classList.remove("scale-100")))}},window.exportData=()=>{if(!p.user.isPremium){togglePremiumModal();return}const r="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(p,null,2)),h=document.createElement("a");h.setAttribute("href",r);const v=new Date().toISOString().slice(0,10);h.setAttribute("download",`studyhub_backup_${v}.json`),document.body.appendChild(h),h.click(),h.remove()},window.triggerImportData=()=>{if(!p.user.isPremium){togglePremiumModal();return}let r=document.getElementById("import-file-input");r||(r=document.createElement("input"),r.type="file",r.id="import-file-input",r.accept=".json",r.className="hidden",r.onchange=window.handleFileImport,document.body.appendChild(r)),r.click()},window.handleFileImport=r=>{const h=r.target.files[0];if(!h)return;const v=new FileReader;v.onload=$=>{try{const m=JSON.parse($.target.result);m.user&&m.stats?confirm(e("overwrite_confirm"))&&(Object.keys(p).forEach(y=>delete p[y]),Object.assign(p,m),H(),location.reload()):alert(e("invalid_backup"))}catch(m){console.error(m),alert(e("parse_error"))}},v.readAsText(h),r.target.value=""};const u=()=>{const r=document.getElementById("settings-content-area");if(document.querySelectorAll(".settings-tab-btn").forEach(v=>{v.dataset.tab===d?(v.classList.add("text-primary","bg-primary/10"),v.classList.remove("text-gray-500","hover:bg-gray-50")):(v.classList.remove("text-primary","bg-primary/10"),v.classList.add("text-gray-500","hover:bg-gray-50"))}),d==="general"){const v={emerald:"5 150 105",blue:"37 99 235",pink:"236 72 153",orange:"234 88 12",rose:"225 29 72",lila:"178 106 251"},$=Object.keys(v).map(m=>{const y=v[m].split(" ").join(","),k=(p.user.themePreference||"emerald")===m;return`
                    <button onclick="changeTheme('${m}')" class="group relative h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 ring-2 ring-offset-2 w-full ${k?"":"ring-transparent hover:ring-gray-200"} bg-gray-50 border border-gray-100 overflow-hidden" 
                            style="${k?`--tw-ring-color: rgb(${y});`:""}">
                        <div class="w-5 h-5 rounded-full shadow-sm relative z-10" style="background-color: rgb(${y})"></div>
                        ${k?`
                            <div class="absolute inset-0" style="background-color: rgba(${y}, 0.1)"></div>
                            <div class="absolute bottom-1 w-1 h-1 rounded-full" style="background-color: rgb(${y})"></div>
                        `:""}
                    </button>
                    `}).join("");r.innerHTML=`
                <div class="space-y-4">
                     <!-- Theme Color Section -->
                     <div class="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                        <h4 class="font-bold text-dark text-sm mb-1">${e("theme_color")}</h4>
                        <p class="text-xs text-gray-500 mb-3">${e("personalize_accent")}</p>
                        
                        <div class="grid grid-cols-6 gap-2">
                            ${$}
                        </div>

                        <!-- Background Preference -->
                        <div class="mt-4 pt-4 border-t border-gray-200/50">
                            <h4 class="font-bold text-dark text-sm mb-2">${e("background_style")}</h4>
                             <div class="flex gap-2">
                                <button onclick="changeBgPreference('default')" class="flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${p.user.bgPreference==="default"?"bg-white border-primary text-primary shadow-sm":"bg-gray-100/50 border-transparent text-gray-500 hover:bg-gray-100"}">
                                    ${e("default")}
                                </button>
                                <button onclick="changeBgPreference('theme')" class="flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${p.user.bgPreference==="theme"?"bg-primary/10 border-primary text-primary shadow-sm":"bg-gray-100/50 border-transparent text-gray-500 hover:bg-gray-100"}">
                                    ${e("tinted")}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                        <h4 class="font-bold text-dark text-sm mb-1">${e("layout_settings")}</h4>
                        <p class="text-xs text-gray-500 mb-4">${e("layout_desc")}</p>
                        
                        <div class="flex flex-col gap-3">
                            <button onclick="manualSaveLayout()" class="flex items-center justify-between w-full p-3 bg-white border border-gray-200 rounded-lg hover:border-primary/50 hover:shadow-sm transition-all group">
                                <span class="text-sm font-medium text-gray-700 group-hover:text-primary">${e("save_layout")}</span>
                                <svg id="settings-save-icon" class="w-4 h-4 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
                            </button>
                            
                            <button onclick="confirmResetLayout()" class="flex items-center justify-between w-full p-3 bg-red-50 border border-red-200 rounded-lg hover:border-red-300 hover:bg-red-100 hover:shadow-md transition-all group">
                                <span class="text-sm font-bold text-red-700">${e("reset_layout")}</span>
                                <svg class="w-4 h-4 text-red-500 group-hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            </button>
                        </div>
                    </div>

                    <!-- Data Management (Premium) -->
                    <div class="p-4 rounded-xl border ${p.user.isPremium?"border-amber-200 bg-amber-50/30":"border-gray-100 bg-gray-50/50"} relative overflow-hidden">
                        ${p.user.isPremium?"":`
                            <div class="absolute top-2 right-2 flex items-center gap-1 bg-white/80 backdrop-blur px-2 py-0.5 rounded-md border border-gray-100 shadow-sm z-10">
                                <svg class="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                <span class="text-[10px] font-bold text-gray-500">${e("premium")}</span>
                            </div>
                        `}
                        
                        <h4 class="font-bold text-dark text-sm mb-1 flex items-center gap-2">
                             ${e("data_backup")}
                        </h4>
                        <p class="text-xs text-gray-500 mb-4">${e("data_desc")}</p>
                        
                        <div class="flex gap-3">
                            <button onclick="exportData()" class="flex-1 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:text-primary hover:border-primary transition-all flex items-center justify-center gap-2 shadow-sm ${p.user.isPremium?"":"opacity-70"}">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                ${e("export_data")}
                            </button>
                             <button onclick="triggerImportData()" class="flex-1 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:text-primary hover:border-primary transition-all flex items-center justify-center gap-2 shadow-sm ${p.user.isPremium?"":"opacity-70"}">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                ${e("import_data")}
                            </button>
                        </div>
                    </div>
                </div>
            `}else if(d==="language"){window.changeLanguage=$=>{p.user.language=$,H(),location.reload()};const v=p.user.language||"tr";r.innerHTML=`
                     <div class="space-y-3">
                        <!-- English -->
                         <div onclick="changeLanguage('en')" class="flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-all ${v==="en"?"bg-primary/5 border-primary/20 shadow-sm":"bg-white border-gray-200 hover:bg-gray-50"}">
                            <div class="flex items-center gap-3">
                                <div>
                                    <p class="text-sm font-bold text-dark">English</p>
                                    <p class="text-[10px] text-gray-500">${e("default")}</p>
                                </div>
                            </div>
                            <div class="w-4 h-4 rounded-full flex items-center justify-center ${v==="en"?"bg-primary":"border border-gray-300"}">
                                ${v==="en"?'<svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>':""}
                            </div>
                        </div>

                        <!-- Turkish -->
                        <div onclick="changeLanguage('tr')" class="flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-all ${v==="tr"?"bg-primary/5 border-primary/20 shadow-sm":"bg-white border-gray-200 hover:bg-gray-50"}">
                            <div class="flex items-center gap-3">
                                <div>
                                    <p class="text-sm font-bold text-dark">Türkçe</p>
                                    <p class="text-[10px] text-gray-500">Türkçe</p>
                                </div>
                            </div>
                            <div class="w-4 h-4 rounded-full flex items-center justify-center ${v==="tr"?"bg-primary":"border border-gray-300"}">
                                ${v==="tr"?'<svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>':""}
                            </div>
                        </div>

                        <!-- German (Coming Soon) -->
                        <div class="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-xl opacity-60 cursor-not-allowed grayscale">
                            <div class="flex items-center gap-3">
                                <div>
                                    <p class="text-sm font-bold text-gray-600">German</p>
                                    <p class="text-[10px] text-gray-400">${e("coming_soon")}</p>
                                </div>
                            </div>
                        </div>
                     </div>
                `}else if(d==="profile"){const v=["🎓","🚀","⭐","🧠","🦁","⚡"];r.innerHTML=`
                <div class="space-y-6">
                    <!-- Avatar Selection -->
                    <div class="flex flex-col items-center">
                        <div class="w-20 h-20 rounded-full bg-primary/10 text-4xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20 border-4 border-white relative">
                             ${p.user.avatar?`<span>${p.user.avatar}</span>`:'<svg class="w-10 h-10 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>'}
                             <div class="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white z-10">
                                <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                             </div>
                        </div>
                        
                        <div class="flex gap-2 p-1 bg-gray-50 rounded-2xl border border-gray-100 items-center">
                            ${v.map($=>`
                                <button onclick="updateProfileField('avatar', '${$}')" class="w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-all ${p.user.avatar===$?"bg-white shadow-md text-primary scale-110":"hover:bg-white/50 text-gray-400 grayscale hover:grayscale-0"}">
                                    ${$}
                                </button>
                            `).join("")}
                            
                            <div class="w-px h-6 bg-gray-200 mx-1"></div>
                             <button onclick="updateProfileField('avatar', null)" class="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all" title="${e("remove_avatar")}">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 ml-1">${e("full_name")}</label>
                            <input type="text" oninput="updateProfileField('name', this.value)" value="${p.user.name||""}" class="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-bold text-dark text-sm" placeholder="${e("your_name_placeholder")}">
                        </div>
                        
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">${e("university")}</label>
                            <input type="text" oninput="updateProfileField('university', this.value)" value="${p.user.university||""}" class="w-full px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-dark text-sm placeholder-gray-400" placeholder="${e("uni_name_placeholder")}">
                        </div>

                         <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">${e("department")}</label>
                            <input type="text" oninput="updateProfileField('department', this.value)" value="${p.user.department||""}" class="w-full px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-dark text-sm placeholder-gray-400" placeholder="${e("major_placeholder")}">
                        </div>
                    </div>

                     <!-- Plan Info -->
                    ${p.user.isPremium?`
                        <div class="px-4 py-3 bg-amber-50 rounded-xl border border-amber-100 flex items-center justify-between">
                             <div>
                                <p class="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-0.5">${e("current_plan")}</p>
                                <p class="text-sm font-bold text-dark flex items-center gap-2">
                                    ${e("premium_plan")}
                                    <span class="px-2 py-0.5 rounded-md bg-amber-200 text-amber-700 text-[10px] flex items-center gap-1">
                                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                                        ${e("active")}
                                    </span>
                                </p>
                            </div>
                        </div>
                    `:`
                        <div class="px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                             <div>
                                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">${e("current_plan")}</p>
                                <p class="text-sm font-bold text-dark flex items-center gap-2">
                                    ${e("basic_plan")}
                                    <span class="px-2 py-0.5 rounded-md bg-gray-200 text-gray-500 text-[10px]">${e("free")}</span>
                                </p>
                            </div>
                            <button onclick="togglePremiumModal()" class="px-3 py-1.5 bg-white border border-gray-200 text-xs font-bold text-primary rounded-lg shadow-sm hover:bg-gray-50 transition-all">
                                ${e("upgrade")}
                            </button>
                        </div>
                    `}
                    
                    <div class="pt-2 text-center">
                         <p class="text-[10px] text-gray-400">${e("changes_saved")}</p>
                    </div>
                </div>
            `}else d==="about"?r.innerHTML=`
                <div class="p-4 bg-gray-50/50 rounded-xl border border-gray-100 text-center">
                    <img src="/logo.png" class="w-16 h-16 mx-auto mb-3 rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300" alt="StudyHub Logo">
                    <h4 class="font-bold text-dark text-lg mb-1">StudyHub</h4>
                    <p class="text-xs text-gray-500 mb-4">${e("version")} 1.0.0 • ${e("basic_edition")}</p>
                </div>
            `:d==="developer"&&(i?r.innerHTML=`
                    <div class="space-y-4">
                         <div class="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                            <h4 class="font-bold text-dark text-sm mb-1">${e("developer_mode")}</h4>
                            <p class="text-xs text-gray-500 mb-4">${e("dev_desc")}</p>
                            
                            <div class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                                <div>
                                    <p class="text-sm font-bold text-dark">${e("enable_premium")}</p>
                                    <p class="text-[10px] text-gray-500">${e("unlock_desc")}</p>
                                </div>
                                
                                <button onclick="toggleDevPremium()" class="w-12 h-6 rounded-full transition-colors relative ${p.user.isPremium?"bg-primary":"bg-gray-300"}">
                                    <div class="w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${p.user.isPremium?"left-7":"left-1"}"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                `:(r.innerHTML=`
                   <div class="relative overflow-hidden rounded-xl border border-gray-100 bg-gray-50/50">
                       <!-- Blurred Background (Matches content size perfectly) -->
                       <div class="filter blur-sm pointer-events-none opacity-50 p-4 select-none">
                            <div class="space-y-4">
                               <div class="p-4 rounded-xl border border-gray-200 bg-white">
                                   <h4 class="font-bold text-dark text-sm mb-1">${e("developer_mode")}</h4>
                                   <p class="text-xs text-gray-500 mb-4">${e("dev_desc")}</p>
                                   <div class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg opacity-50">
                                       <div><div class="h-4 w-24 bg-gray-200 rounded mb-1"></div><div class="h-3 w-32 bg-gray-100 rounded"></div></div>
                                       <div class="w-12 h-6 bg-gray-200 rounded-full"></div>
                                   </div>
                               </div>
                            </div>
                       </div>

                       <!-- Lock UI Overlay -->
                       <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm">
                           <div id="dev-lock-container" class="flex flex-col items-center gap-5 transition-all duration-300 transform scale-100">
                               <div class="flex flex-col items-center gap-2">
                                   <div class="p-3 bg-white/50 border border-white/60 rounded-full text-gray-500 shadow-sm backdrop-blur-md">
                                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                   </div>
                                   <span class="text-[10px] font-bold text-gray-500 uppercase tracking-widest drop-shadow-sm">${e("security_lock")}</span>
                               </div>
                               
                               <div class="relative group">
                                    <input type="password" id="dev-pin-input" class="w-40 text-center text-2xl font-bold tracking-[0.5em] py-3 border-b-2 border-gray-300 focus:border-primary focus:outline-none bg-transparent transition-all placeholder-gray-300/50 text-dark" maxlength="4" placeholder="••••" oninput="checkDevPin(this.value)">
                                    <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-focus-within:w-full"></div>
                               </div>
                           </div>
                       </div>
                   </div>
                `,setTimeout(()=>{const v=document.getElementById("dev-pin-input");v&&v.focus()},100)))};t.innerHTML=`
    <!-- Header -->
    <header class="sticky top-0 z-30 bg-transparent backdrop-blur-xl px-8 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center mb-2 gap-4 border-b border-transparent transition-all">
      <div class="w-full md:w-auto">
        <h1 id="header-greeting" class="text-3xl font-bold text-dark">${e("hello")}, ${p.user.name}!</h1>
        <p id="header-summary" class="text-gray-500 mt-1">${e("loading_summary")}</p>
      </div>
      <div class="flex items-center gap-4 w-full md:w-auto justify-end">
        
        <!-- Manage Widgets Button -->
        <div class="relative">
            <button id="manage-widgets-btn" onclick="toggleManageDropdown()" class="w-12 h-12 flex items-center justify-center bg-white text-gray-400 rounded-full hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100" title="${e("manage_widgets")}">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            </button>
            <div id="manage-widgets-popup" class="absolute top-full right-0 mt-2 w-64 bg-white p-4 rounded-xl shadow-xl border border-gray-100 opacity-0 invisible transition-all z-50 transform origin-top-right scale-95">
                <div class="flex justify-between items-center mb-3">
                    <p class="text-xs font-bold text-dark">${e("available_widgets")}</p>
                </div>
                <div id="manage-widgets-dropzone" class="mb-3 border-2 border-dashed border-primary/20 bg-primary/5 rounded-lg p-3 text-center transition-colors">
                     <p class="text-[10px] text-primary/60">${e("drag_remove")}</p>
                </div>
                <div id="manage-widgets-list" class="max-h-48 overflow-y-auto custom-scrollbar"></div>
            </div>
        </div>

        <!-- Premium Button -->
        <!-- Premium Button -->
        ${p.user.isPremium?`
             <button id="header-premium-btn" class="px-4 py-2 bg-amber-100 text-amber-600 border border-amber-200 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all flex items-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                <span>Premium Active</span>
            </button>
        `:`
            <button id="header-premium-btn" onclick="togglePremiumModal()" class="px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all flex items-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                <span>Premium</span>
            </button>
        `}

        <!-- Settings Button -->
        <div class="relative">
             <button id="settings-btn" onclick="toggleSettingsModal()" class="w-12 h-12 flex items-center justify-center bg-white text-gray-400 rounded-full hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100" title="Settings">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </button>
            
            <!-- Settings Modal (Dropdown Style but larger) -->
            <div id="settings-modal" class="absolute top-full right-0 mt-2 w-96 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible transition-all z-50 transform origin-top-right scale-95 overflow-hidden">
                <!-- Header Tabs -->
                <div class="flex border-b border-gray-100 bg-gray-50/50">
                    <button onclick="switchSettingsTab('general')" data-tab="general" class="settings-tab-btn flex-1 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors">${e("general")}</button>
                    <button onclick="switchSettingsTab('profile')" data-tab="profile" class="settings-tab-btn flex-1 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors">${e("profile")}</button>
                    <button onclick="switchSettingsTab('language')" data-tab="language" class="settings-tab-btn flex-1 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors">${e("language")}</button>
                    <button onclick="switchSettingsTab('about')" data-tab="about" class="settings-tab-btn flex-1 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors">${e("about")}</button>
                    <button onclick="switchSettingsTab('developer')" data-tab="developer" class="settings-tab-btn flex-1 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors">${e("developer")}</button>
                </div>
                
                <!-- Content Area -->
                <div id="settings-content-area" class="p-4">
                    <!-- Default Content (General) -->
                    <!-- Injected by renderSettingsContent() -->
                </div>
            </div>
        </div>

      </div>
    </header>

    
    <!-- Main Widget Grid -->
    <div id="dashboard-grid" class="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
        <!-- Grid content will be populated by JavaScript to ensure correct order and structural integrity -->
    </div>

    <!-- Premium Modal -->
    <div id="premium-modal" class="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm flex items-center justify-center invisible opacity-0 transition-all duration-300">
        <div class="modal-content bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden transform scale-95 transition-all duration-300 flex flex-col max-h-[90vh]">
            
            <!-- Header -->
            <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <div>
                     <h2 class="text-2xl font-black text-dark flex items-center gap-2">
                        ${e("upgrade_to")} <span class="text-primary">${e("premium")}</span>
                    </h2>
                    <p class="text-gray-500 text-sm">${e("unlock_potential")}</p>
                </div>
                <button onclick="togglePremiumModal()" class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>

            <!-- Content -->
            <div class="p-8 overflow-y-auto custom-scrollbar">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Basic Plan -->
                    <div class="rounded-3xl border-2 border-gray-100 p-6 flex flex-col relative overflow-hidden">
                        <div class="mb-6">
                            <h3 class="text-xl font-bold text-gray-600 mb-2">Basic</h3>
                            <div class="flex items-end gap-1">
                                <span class="text-4xl font-black text-dark">${e("free")}</span>
                                <span class="text-gray-400 mb-1">${e("forever")}</span>
                            </div>
                            <p class="text-sm text-gray-400 mt-2">${e("essential_tools")}</p>
                        </div>
                        
                        <div class="space-y-4 mb-8 flex-1">
                             <div class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                <span class="text-gray-600 font-medium">${e("standard_dashboard")}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                <span class="text-gray-600 font-medium">${e("basic_analytics")}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                <span class="text-gray-600 font-medium">${e("limited_ai")}</span>
                            </div>
                             <div class="flex items-center gap-3 opacity-50">
                                <svg class="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                <span class="text-gray-400">${e("cloud_sync_backup")}</span>
                            </div>
                            <div class="flex items-center gap-3 opacity-50">
                                <svg class="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                <span class="text-gray-400">${e("advanced_customization")}</span>
                            </div>
                        </div>

                        <button class="w-full py-4 bg-gray-100 text-gray-500 font-bold rounded-2xl cursor-default">Current Plan</button>
                    </div>

                    <!-- Premium Plan -->
                    <div class="rounded-3xl border-2 border-primary/20 bg-primary/5 p-6 flex flex-col relative overflow-hidden group">
                        <div class="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-2xl uppercase tracking-wider shadow-lg shadow-primary/20">
                            ${e("recommended")}
                        </div>

                        <div class="mb-6">
                            <h3 class="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                                ${e("premium")}
                                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                            </h3>
                            <div class="flex items-end gap-1">
                                <span class="text-4xl font-black text-dark">$4.99</span>
                                <span class="text-gray-400 mb-1">${e("per_month")}</span>
                            </div>
                            <p class="text-sm text-gray-500 mt-2">${e("premium_desc")}</p>
                        </div>
                        
                        <div class="space-y-4 mb-8 flex-1">
                             <div class="flex items-center gap-3">
                                <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 shrink-0">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span class="text-dark font-bold">${e("unlimited_ai")}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 shrink-0">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span class="text-dark font-bold">${e("cloud_sync_multi")}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                 <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 shrink-0">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span class="text-dark font-medium">${e("advanced_analytics")}</span>
                            </div>
                             <div class="flex items-center gap-3">
                                 <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 shrink-0">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span class="text-dark font-medium">${e("custom_themes")}</span>
                            </div>

                        </div>

                        <button class="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-lg">
                            ${e("upgrade_now")}
                        </button>
                    </div>
                </div>
                
                 <!-- Security Badge / Footer -->
                <!-- Security Badge / Footer -->
                <div class="mt-8 flex flex-col items-center justify-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                    <div class="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
                        <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        <span>${e("secure_payment")}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  `;const g=ce(p.stats),w=document.createElement("div");w.innerHTML=g;const L=Array.from(w.children);if(L&&L.length>=4){const r=t.querySelector("#dashboard-grid");r.innerHTML="",r.appendChild(L[0]),r.appendChild(L[1]),r.appendChild(L[2]);const h=document.createElement("div");h.id="profile-container",h.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",h.draggable=!0,r.appendChild(h);const v=document.createElement("div");v.id="chart-container",v.className="col-span-1 md:col-span-2 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",v.draggable=!0,r.appendChild(v);const $=document.createElement("div");$.id="time-container",$.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",$.draggable=!0,r.appendChild($);const m=document.createElement("div");m.id="notes-container",m.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",m.draggable=!0,r.appendChild(m);const y=document.createElement("div");y.id="pomodoro-container",y.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",y.draggable=!0,r.appendChild(y),r.appendChild(L[3]);const k=document.createElement("div");k.id="todo-container",k.className="col-span-1 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",k.draggable=!0,k.innerHTML='<div id="todo-content" class="w-full h-full"></div>',r.appendChild(k);const z=document.createElement("div");z.id="exam-schedule-container",z.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",z.draggable=!0,r.appendChild(z);const D=document.createElement("div");D.id="scratchpad-container",D.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",D.draggable=!0,r.appendChild(D);const q=document.createElement("div");q.id="bookmarks-container",q.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",q.draggable=!0,r.appendChild(q);const I=document.createElement("div");I.id="grade-calc-container",I.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",I.draggable=!0,r.appendChild(I);const C=document.createElement("div");C.id="stopwatch-container",C.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",C.draggable=!0,r.appendChild(C);const T=document.createElement("div");T.id="games-container",T.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",T.draggable=!0,r.appendChild(T);const A=document.createElement("div");A.id="habit-container",A.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",A.draggable=!0,r.appendChild(A);const V=document.createElement("div");V.id="weekly-schedule-container",V.className="col-span-1 md:col-span-2 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",V.draggable=!0,r.appendChild(V);const R=document.createElement("div");R.id="photo-container",R.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",R.draggable=!0,r.appendChild(R)}Z(document.querySelector("#chart-container"),p.chartData),ve(document.querySelector("#time-container")),ge(document.querySelector("#notes-container")),me(document.querySelector("#pomodoro-container")),ae(document.querySelector("#exam-schedule-container"),p.todos,p.exams),Q(document.querySelector("#profile-container"),p.user),he(document.querySelector("#scratchpad-container")),be(document.querySelector("#bookmarks-container")),fe(document.querySelector("#grade-calc-container")),ye(document.querySelector("#stopwatch-container")),xe(document.querySelector("#games-container")),we(document.querySelector("#habit-container")),ie(document.querySelector("#weekly-schedule-container")),U(document.querySelector("#photo-container")),s();const x=document.getElementById("weekly-schedule-container");x&&x.classList.contains("h-96")&&(x.classList.remove("h-96"),x.classList.add("h-80")),o();const f=document.getElementById("dashboard-grid");f.querySelectorAll(".draggable-item").forEach(a),f.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer.dropEffect="move";const h=t,v=100,$=15;if(h){const m=h.getBoundingClientRect();r.clientY<m.top+v?h.scrollTop-=$:r.clientY>m.bottom-v&&(h.scrollTop+=$)}}),f.addEventListener("drop",r=>{if(r.preventDefault(),n&&n.dataset&&n.dataset.widgetId){const h=n.dataset.widgetId,v=l.get(h);if(v){f.appendChild(v),l.delete(h),a(v),b();const $=document.getElementById("manage-widgets-popup");$&&$.classList.add("invisible","opacity-0","scale-95")}return}n&&!n.dataset.widgetId&&f.contains(n)&&(f.appendChild(n),b())}),window.manualSaveLayout=()=>{b();const r=document.getElementById("settings-save-icon");if(r){const h=r.innerHTML;r.classList.add("text-primary"),r.classList.remove("text-gray-400"),r.innerHTML='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />',setTimeout(()=>{r.classList.add("text-gray-400"),r.classList.remove("text-primary"),r.innerHTML=h},1e3)}},window.confirmResetLayout=()=>{const r=document.createElement("div");r.className="fixed inset-0 z-[60] flex items-center justify-center bg-dark/50 backdrop-blur-sm opacity-0 transition-opacity duration-300",r.innerHTML=`
            <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl transform scale-95 transition-transform duration-300">
                <div class="flex flex-col items-center text-center">
                     <div class="mb-4 bg-primary/10 p-4 rounded-full">
                        <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                     </div>
                     <h3 class="text-xl font-bold text-dark mb-2">${e("reset_layout")}?</h3>
                     <p class="text-sm text-gray-500 mb-6 leading-relaxed">${e("reset_layout_confirm")}</p>
                     
                     <div class="flex gap-3 w-full">
                         <button id="cancel-reset-layout" class="flex-1 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors">${e("no")}</button>
                         <button id="confirm-reset-layout-btn" class="flex-1 py-3 rounded-xl font-bold text-white bg-primary hover:opacity-90 shadow-lg shadow-primary/30 transition-all">${e("yes")}</button>
                     </div>
                </div>
            </div>
        `,document.body.appendChild(r),requestAnimationFrame(()=>{r.classList.remove("opacity-0"),r.querySelector("div").classList.remove("scale-95"),r.querySelector("div").classList.add("scale-100")});const h=()=>{r.classList.add("opacity-0"),r.querySelector("div").classList.remove("scale-100"),r.querySelector("div").classList.add("scale-95"),setTimeout(()=>r.remove(),300)};r.querySelector("#cancel-reset-layout").onclick=h,r.onclick=v=>{v.target===r&&h()},r.querySelector("#confirm-reset-layout-btn").onclick=()=>{localStorage.removeItem("dashboardLayout"),location.reload()}},document.getElementById("edit-widgets-modal")&&document.getElementById("edit-widgets-modal").remove(),setTimeout(()=>{const r=document.getElementById("manage-widgets-dropzone");r&&(r.addEventListener("dragover",h=>{h.preventDefault(),h.dataTransfer.dropEffect="move",r.classList.remove("border-primary/20","bg-primary/5"),r.classList.add("border-primary/50","bg-primary/10")}),r.addEventListener("dragleave",()=>{r.classList.add("border-primary/20","bg-primary/5"),r.classList.remove("border-primary/50","bg-primary/10")}),r.addEventListener("drop",h=>{if(h.preventDefault(),r.classList.add("border-primary/20","bg-primary/5"),r.classList.remove("border-primary/50","bg-primary/10"),n&&!n.dataset.widgetId&&n.classList.contains("draggable-item")){const v=n.id;l.set(v,n),n.remove(),b(),window.toggleManageDropdown(),window.toggleManageDropdown()}}))},500);const S=document.querySelector("#todo-content"),_=(r=null,h=null)=>{S&&ue(S,p.todos,r,h)};window.dashboardHandlersInitialized||(window.addNewTodo=()=>{},window.toggleTodo=r=>{p.todos[r]&&(p.todos[r].completed=!p.todos[r].completed,document.dispatchEvent(new Event("dataChanged")))},window.editTodo=r=>_(r,null),window.saveEditTodo=r=>{const h=document.getElementById(`edit-title-${r}`),v=document.getElementById(`edit-date-${r}`),$=document.getElementById(`edit-time-${r}`);h&&p.todos[r]&&(p.todos[r].title=h.value||p.todos[r].title,p.todos[r].date=v.value||null,p.todos[r].time=$.value||"",document.dispatchEvent(new Event("dataChanged")),_(null,null))},window.cancelEditTodo=()=>_(null,null),window.deleteTodo=r=>_(null,r),window.confirmDeleteTodo=r=>{p.todos.splice(r,1),document.dispatchEvent(new Event("dataChanged"))},window.cancelDeleteTodo=()=>_(null,null),window.addSpecificTodo=r=>{if(r){const h=new Date,v=`${h.getFullYear()}-${String(h.getMonth()+1).padStart(2,"0")}-${String(h.getDate()).padStart(2,"0")}`;p.todos.push({title:r,subject:"General",time:"09:00",completed:!1,date:v}),document.dispatchEvent(new Event("dataChanged"))}},window.dashboardHandlersInitialized=!0),_();const E=()=>{const r=p.todos?p.todos.filter(y=>y.completed).length:0,h=JSON.parse(localStorage.getItem("habit_tracker_data_v3")||"{}"),v=h.habits?h.habits.filter(y=>y.completed).length:0,$=r+v,m=document.getElementById("stats-card-1");if(m){const y=m.querySelector(".text-3xl");y&&(y.innerText=$);const k=document.getElementById("stat-todo-count");k&&(k.innerText=r);const z=document.getElementById("stat-habit-count");z&&(z.innerText=v)}},j=()=>{_(null,null),ae(document.querySelector("#exam-schedule-container"),p.todos,p.exams),o(),E()};document.removeEventListener("dataChanged",j),document.addEventListener("dataChanged",j);const B=()=>{const r=document.getElementById("header-greeting");r&&(r.innerText=`${e("hello")}, ${p.user.name}!`)};document.removeEventListener("profileUpdated",B),document.addEventListener("profileUpdated",B),window.aiCoachInitialized||(window.openAiCoach=()=>{let r=document.getElementById("ai-coach-modal");r||(document.body.insertAdjacentHTML("beforeend",`
                <div id="ai-coach-modal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 opacity-0 invisible transition-all duration-300">
                    <div class="absolute inset-0 bg-dark/60 backdrop-blur-sm" onclick="window.closeAiCoach()"></div>
                    <div class="relative w-full max-w-lg bg-white h-[600px] rounded-3xl shadow-2xl flex flex-col overflow-hidden transform scale-95 transition-all duration-300" id="ai-coach-card">
                        <!-- Header -->
                        <div class="bg-primary/5 p-4 flex justify-between items-center border-b border-gray-100">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 relative">
                                    <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                    <span class="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-dark">StudyAl</h3>
                                    <p class="text-xs text-green-600 font-medium">Always Online</p>
                                </div>
                            </div>
                            <button onclick="window.closeAiCoach()" class="p-2 text-gray-400 hover:text-dark hover:bg-white rounded-full transition-all">
                                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <!-- Chat Area -->
                        <div id="ai-chat-messages" class="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50/50">
                            <!-- Intro -->
                            <div class="flex gap-3 max-w-[85%]">
                                <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                                <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 border border-gray-100">
                                    Hello! I am StudyAl. How can I help you with your studies today? 
                                    <br><br>I can help you plan your schedule, explain complex topics, or just give you motivation.
                                </div>
                            </div>
                        </div>

                        <!-- Input Area -->
                        <div class="p-4 bg-white border-t border-gray-100 flex gap-2">
                             <input type="text" id="ai-chat-input" class="flex-1 bg-gray-50 border-none rounded-xl px-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all" placeholder="Ask me anything..." onkeypress="if(event.key === 'Enter') window.sendAiMessage()">
                             <button onclick="window.sendAiMessage()" class="p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/30 hover:opacity-90 transition-all hover:scale-105 active:scale-95">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                             </button>
                        </div>
                    </div>
                </div>`),r=document.getElementById("ai-coach-modal")),r.classList.remove("invisible","opacity-0");const h=r.querySelector("#ai-coach-card");h.classList.remove("scale-95"),h.classList.add("scale-100"),setTimeout(()=>document.getElementById("ai-chat-input").focus(),100)},window.closeAiCoach=()=>{const r=document.getElementById("ai-coach-modal");if(r){r.classList.add("invisible","opacity-0");const h=r.querySelector("#ai-coach-card");h.classList.add("scale-95"),h.classList.remove("scale-100")}},window.sendAiMessage=()=>{const r=document.getElementById("ai-chat-input"),h=document.getElementById("ai-chat-messages"),v=r.value.trim();if(v){const $=`
                    <div class="flex gap-3 max-w-[85%] self-end">
                        <div class="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-md shadow-primary/20 text-sm">
                            ${v}
                        </div>
                    </div>
                `;h.insertAdjacentHTML("beforeend",$),r.value="",h.scrollTop=h.scrollHeight,setTimeout(()=>{let m="That is a great question. I am currently in demo mode, but imagine I just gave you a brilliant, personalized answer to help you ace your exams.";v.toLowerCase().includes("schedule")||v.toLowerCase().includes("plan")?m="I can help you organize that. Let us break it down into smaller tasks. Check your Todo List and try to allocate 25-minute focus blocks for each.":v.toLowerCase().includes("motivat")?m="You got this. Remember why you started. Every small step counts. Take a deep breath and crush it.":v.toLowerCase().includes("help")&&(m="I am here for you. Try asking me about a specific subject, or tell me what you are struggling with.");const y=`
                        <div class="flex gap-3 max-w-[85%] animate-fade-in-up">
                            <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 border border-gray-100">
                                ${m}
                            </div>
                        </div>
                     `;h.insertAdjacentHTML("beforeend",y),h.scrollTop=h.scrollHeight},1e3)}},window.aiCoachInitialized=!0),setTimeout(()=>{const r=document.getElementById("calc-display"),h=document.querySelectorAll(".calc-btn");r&&h.length>0&&h.forEach(v=>{v.addEventListener("click",$=>{const m=v.getAttribute("data-val");if($.stopPropagation(),m==="C")r.value="0";else if(m==="=")try{const y=r.value.replace(/×/g,"*").replace(/÷/g,"/");if(!/^[\d+\-*/().%\s]+$/.test(y))throw new Error("Invalid characters");const z=(D=>{const I=D.replace(/\s/g,"").replace(/(\d+(?:\.\d+)?)%/g,"($1/100)"),T=new Function("return "+I)();if(!isFinite(T))throw new Error("Invalid result");return T})(y);r.value=Number.isInteger(z)?z:parseFloat(z.toFixed(8))}catch{r.value="Error"}else r.value==="0"||r.value==="Error"?r.value=m:r.value+=m}),v.setAttribute("draggable","true"),v.addEventListener("dragstart",$=>{$.preventDefault(),$.stopPropagation()}),v.addEventListener("mousedown",$=>{$.stopPropagation()})})},500)}function _e(t,i){let o=1,n="🎓",l="emerald",c="default",b=160,s=84,a=39;const d=x=>{const f=u[x];if(f){const[M,S,_]=f.split(" ").map(Number),[E,j,B]=Le(M,S,_);b=E,s=j,a=B}},u={emerald:"5 150 105",blue:"37 99 235",pink:"236 72 153",orange:"234 88 12",rose:"225 29 72",lila:"178 106 251"};d(l),document.documentElement.style.setProperty("--color-primary-rgb",u[l]);const g=()=>{t.innerHTML=`
        <div class="fixed inset-0 z-[100] flex items-center justify-center bg-white bg-gradient-to-br from-primary/40 via-gray-50 to-primary/20 backdrop-blur-md transition-all duration-500">
            
            <div class="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all transform duration-500 border border-white/50">
                
                <!-- Decorative Header Background -->
                <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/10 to-primary/5 -z-10"></div>
                <div class="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <!-- Header -->
                <div class="px-10 pt-10 pb-4 flex justify-between items-center">
                    <div>
                        <h1 class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-dark to-gray-600 tracking-tight">StudyHub</h1>
                        <p class="text-gray-400 text-sm font-medium mt-1">Your personal academic dashboard</p>
                    </div>
                    
                    <div class="flex items-center gap-2 whitespace-nowrap">
                        <div class="h-2 w-20 bg-gray-100 rounded-full overflow-hidden shrink-0">
                            <div class="h-full bg-primary transition-all duration-500 ease-out" style="width: ${o/3*100}%"></div>
                        </div>
                        <span class="text-xs font-bold text-gray-400 w-12 text-right">${e("step")} ${o}/3</span>
                    </div>
                </div>

                <!-- Content Body -->
                <div class="flex-1 px-10 py-6 overflow-y-auto custom-scrollbar">
                    
                    <!-- Step 1: Profile -->
                    <div class="step-content ${o===1?"block animate-fade-in-right":"hidden"}">
                        <h2 class="text-2xl font-bold text-dark mb-2">${e("lets_known_you")}</h2>
                        <p class="text-gray-500 mb-8">${e("call_you")}</p>
                        
                        <div class="space-y-6">
                            <!-- Name Input -->
                            <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">${e("full_name")}</label>
                                <input type="text" id="input-name" value="${p.user.name||""}" class="w-full text-lg px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder-gray-300 font-bold text-dark" placeholder="${e("name_placeholder")}">
                            </div>
                        </div>
                    </div>

                    <!-- Step 2: Academics -->
                    <div class="step-content ${o===2?"block animate-fade-in-right":"hidden"}">
                         <h2 class="text-2xl font-bold text-dark mb-2">${e("academic_profile")}</h2>
                        <p class="text-gray-500 mb-8">${e("personalize_dashboard")}</p>

                        <div class="space-y-5">
                             <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">${e("university")}</label>
                                <div class="relative group">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-300 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                    </div>
                                    <input type="text" id="input-university" value="${p.user.university||""}" class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-dark placeholder-gray-300" placeholder="${e("uni_placeholder")}">
                                </div>
                            </div>

                             <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">${e("department")}</label>
                                <div class="relative group">
                                     <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-300 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                    </div>
                                    <input type="text" id="input-dept" value="${p.user.department||""}" class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-dark placeholder-gray-300" placeholder="${e("dept_placeholder")}">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Step 3: Customization -->
                    <div class="step-content ${o===3?"block animate-fade-in-right":"hidden"}">
                         <h2 class="text-2xl font-bold text-dark mb-1">${e("make_yours")}</h2>
                        <p class="text-gray-500 mb-4">${e("choose_base_color")}</p>

                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">${e("base_color")}</label>
                            <div class="grid grid-cols-6 gap-3">
                                ${Object.keys(u).map(x=>{const f=u[x].split(" ").join(","),M=l===x;return`
                                    <button class="theme-btn group relative h-12 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 ring-2 ring-offset-2 w-full ${M?"":"ring-transparent hover:ring-gray-200"} bg-gray-50 border border-gray-100 overflow-hidden" 
                                            style="${M?`--tw-ring-color: rgb(${f});`:""}"
                                            data-theme="${x}">
                                        <div class="w-6 h-6 rounded-full shadow-sm relative z-10" style="background-color: rgb(${f})"></div>
                                        ${M?`
                                            <div class="absolute inset-0" style="background-color: rgba(${f}, 0.1)"></div>
                                            <div class="absolute bottom-1 w-1.5 h-1.5 rounded-full" style="background-color: rgb(${f})"></div>
                                        `:""}
                                    </button>
                                    `}).join("")}
                            </div>

                             <!-- Background Preference -->
                            <div class="mt-4">
                                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Background Style</label>
                                <div class="grid grid-cols-2 gap-4">
                                    <button class="bg-pref-btn group relative p-3 rounded-2xl border-2 transition-all text-left flex flex-col gap-2 ${c==="default"?"border-primary bg-primary/5 ring-1 ring-primary":"border-gray-100 bg-white hover:border-gray-200"}" data-bg="default">
                                        <div class="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 mb-1"></div>
                                        <div>
                                            <span class="block text-sm font-bold text-dark">${e("default")}</span>
                                            <span class="text-[10px] text-gray-400 font-medium">${e("clean_gray")}</span>
                                        </div>
                                        ${c==="default"?'<div class="absolute top-3 right-3 text-primary"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>':""}
                                    </button>

                                    <button class="bg-pref-btn group relative p-3 rounded-2xl border-2 transition-all text-left flex flex-col gap-2 ${c==="theme"?"border-primary bg-primary/5 ring-1 ring-primary":"border-gray-100 bg-white hover:border-gray-200"}" data-bg="theme">
                                        <div class="w-8 h-8 rounded-full border border-primary/20 mb-1 bg-primary/20"></div>
                                        <div>
                                            <span class="block text-sm font-bold text-dark">${e("theme_tint")}</span>
                                            <span class="text-[10px] text-gray-400 font-medium">${e("pastel_look")}</span>
                                        </div>
                                        ${c==="theme"?'<div class="absolute top-3 right-3 text-primary"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>':""}
                                    </button>
                                </div>
                            </div>
                            
                            <div class="mt-4 p-3 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4 items-center">
                                <div class="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 shrink-0">
                                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-dark text-sm">${e("preview_mode")}</h4>
                                    <p class="text-xs text-gray-500">${e("preview_mode_desc")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Footer / Navigation -->
                <div class="px-10 py-6 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                    <button id="btn-back" class="px-6 py-2.5 rounded-xl font-bold text-gray-400 hover:text-dark hover:bg-white transition-all ${o===1?"invisible":""}">
                        ${e("back")}
                    </button>
                    
                    <button id="btn-next" class="px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2">
                        ${e(o===3?"get_started":"next_step")}
                        ${o!==3?'<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>':""}
                    </button>
                </div>

            </div>
        </div>
        `,w()},w=()=>{t.querySelectorAll(".avatar-btn").forEach(E=>{E.addEventListener("click",()=>{n=E.dataset.avatar,g(),o===1&&setTimeout(()=>document.getElementById("input-name").focus(),50)})}),t.querySelectorAll(".theme-btn").forEach(E=>{E.addEventListener("click",()=>{l=E.dataset.theme,d(l);const j=se(b,s,a).join(" ");document.documentElement.style.setProperty("--color-primary-rgb",j),g()})}),t.querySelectorAll(".bg-pref-btn").forEach(E=>{E.addEventListener("click",()=>{c=E.dataset.bg,c==="theme"?document.body.style.backgroundColor="rgb(var(--color-primary-rgb) / 0.04)":document.body.style.backgroundColor="",g()})});const x=t.querySelector("#btn-next"),f=t.querySelector("#btn-back"),M=document.getElementById("input-name"),S=document.getElementById("input-university"),_=document.getElementById("input-dept");M&&M.addEventListener("input",E=>p.user.name=E.target.value),S&&S.addEventListener("input",E=>p.user.university=E.target.value),_&&_.addEventListener("input",E=>p.user.department=E.target.value),x.addEventListener("click",()=>{if(o===1&&(!p.user.name||!p.user.name.trim())){document.getElementById("input-name").classList.add("ring-2","ring-red-500","border-red-500");return}if(o===2){if(!p.user.university||!p.user.university.trim()){document.getElementById("input-university").classList.add("ring-2","ring-red-500","border-red-500");return}if(!p.user.department||!p.user.department.trim()){document.getElementById("input-dept").classList.add("ring-2","ring-red-500","border-red-500");return}}o<3?(o++,g()):L()}),f.addEventListener("click",()=>{o>1&&(o--,g())})},L=()=>{p.user.avatar=n,p.user.isSetup=!0,p.user.themePreference=l;const[x,f,M]=se(b,s,a);p.user.customThemeRgb=`${x} ${f} ${M}`,p.user.bgPreference=c,H();const S=t.querySelector(".fixed");t.querySelector(".relative").classList.add("scale-95","opacity-0","-translate-y-4"),S.classList.add("opacity-0"),setTimeout(()=>{t.innerHTML="",i()},500)};g()}function Le(t,i,o){t/=255,i/=255,o/=255;const n=Math.max(t,i,o),l=Math.min(t,i,o);let c,b,s=(n+l)/2;if(n===l)c=b=0;else{const a=n-l;switch(b=s>.5?a/(2-n-l):a/(n+l),n){case t:c=(i-o)/a+(i<o?6:0);break;case i:c=(o-t)/a+2;break;case o:c=(t-i)/a+4;break}c/=6}return[c*360,b*100,s*100]}function se(t,i,o){t/=360,i/=100,o/=100;let n,l,c;if(i===0)n=l=c=o;else{const b=(d,u,g)=>(g<0&&(g+=1),g>1&&(g-=1),g<.16666666666666666?d+(u-d)*6*g:g<.5?u:g<.6666666666666666?d+(u-d)*(.6666666666666666-g)*6:d),s=o<.5?o*(1+i):o+i-o*i,a=2*o-s;n=b(a,s,t+1/3),l=b(a,s,t),c=b(a,s,t-1/3)}return[Math.round(n*255),Math.round(l*255),Math.round(c*255)]}function Se(t){p.courses||(p.courses=[],H());let i=null;const o=()=>{const s=document.getElementById("courses-grid").querySelector(".grid");if(!s)return;const d=Array.from(s.children).map(u=>u.getAttribute("data-course-id"));localStorage.setItem("coursesLayout",JSON.stringify(d))},n=()=>{const s=localStorage.getItem("coursesLayout");if(!s)return p.courses;try{const a=JSON.parse(s).map(g=>parseInt(g)),d=new Map(p.courses.map(g=>[g.id,g])),u=[];return a.forEach(g=>{d.has(g)&&(u.push(d.get(g)),d.delete(g))}),d.forEach(g=>u.push(g)),u}catch(a){return console.error("Failed to parse course layout",a),p.courses}},l=s=>{const a=document.getElementById("courses-grid").querySelector(".grid");s.addEventListener("dragstart",d=>{i=s,d.dataTransfer.effectAllowed="move",d.dataTransfer.setData("text/plain",s.id),requestAnimationFrame(()=>{s.classList.add("opacity-50","scale-95")})}),s.addEventListener("dragend",()=>{s.classList.remove("opacity-50","scale-95"),i=null,a&&a.querySelectorAll(".draggable-item").forEach(d=>{d.classList.remove("ring-2","ring-primary","ring-offset-2","z-30"),d.classList.remove("ring-2","ring-primary")})}),s.addEventListener("dragover",d=>{d.preventDefault(),i&&i!==s&&s.classList.add("ring-2","ring-primary","z-30")}),s.addEventListener("dragleave",d=>{s.contains(d.relatedTarget)||s.classList.remove("ring-2","ring-primary","z-30")}),s.addEventListener("drop",d=>{if(d.preventDefault(),d.stopPropagation(),s.classList.remove("ring-2","ring-primary","z-30"),i&&i!==s){const u=a,g=Array.from(u.children),w=g.indexOf(i),L=g.indexOf(s);w<L?u.insertBefore(i,s.nextSibling):u.insertBefore(i,s),o()}})},c=()=>{const s=n();t.innerHTML=`
        <div class="p-8 h-full flex flex-col relative">
            <header class="flex justify-between items-center mb-8">
                 <div class="flex items-center gap-4">
                    <button onclick="window.navigateTo('dashboard')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <h1 class="text-3xl font-bold text-dark">${e("my_courses")}</h1>
                 </div>
                 
                 <button id="add-course-btn" class="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-bold text-sm shadow-lg shadow-primary/30 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    ${e("new_course")}
                </button>
            </header>
            
            <div id="courses-grid" class="flex-1 overflow-y-auto custom-scrollbar">
                ${s.length===0?`
                    <div class="h-full flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-3xl">
                        <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <svg class="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-gray-400 mb-2">${e("no_courses_yet")}</h2>
                        <p class="text-gray-400 text-sm max-w-xs text-center">${e("no_courses_desc")}</p>
                    </div>
                `:`
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 pb-10">
                        ${s.map(a=>`
                            <div 
                                id="course-card-${a.id}"
                                data-course-id="${a.id}"
                                draggable="true"
                                onclick="window.navigateTo('course-detail', { id: ${a.id} })" 
                                class="bg-white rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative border border-gray-100 cursor-pointer draggable-item flex flex-col overflow-hidden h-52"
                            >
                                <!-- Header Strip -->
                                <div class="h-24 bg-gradient-to-br from-primary/20 via-primary/15 to-white p-5 flex justify-between items-start shrink-0 relative">
                                    <div class="w-14 h-14 rounded-2xl bg-white shadow-sm text-primary flex items-center justify-center font-black text-2xl border border-primary/30 z-10">
                                        ${a.name.charAt(0).toUpperCase()}
                                    </div>
                                    
                                    <!-- Actions -->
                                     <div class="flex gap-1 z-20">
                                        <button class="text-gray-400 hover:text-primary hover:bg-white/80 p-1.5 rounded-lg transition-all edit-course-btn" data-id="${a.id}">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                        </button>
                                        <button class="text-gray-400 hover:text-red-500 hover:bg-white/80 p-1.5 rounded-lg transition-all delete-course-btn" data-id="${a.id}">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                    
                                    <!-- Decorative circle -->
                                    <div class="absolute -top-10 -right-10 w-32 h-32 bg-primary/15 rounded-full blur-2xl pointer-events-none"></div>
                                </div>

                                <!-- Body -->
                                    <div class="px-6 pb-6 pt-2 flex flex-col flex-1">
                                    <div class="flex items-center gap-2 mb-1">
                                        ${a.code?`<span class="px-2.5 py-0.5 rounded-md bg-gray-50 text-gray-400 text-[10px] font-bold tracking-wider uppercase border border-gray-100">${a.code}</span>`:""}
                                        <span class="h-1 w-1 rounded-full bg-gray-300"></span>
                                        <span class="text-[10px] font-bold text-gray-300 uppercase tracking-widest">${e("course_caps")}</span>
                                    </div>
                                    
                                    <h3 class="text-xl font-bold text-dark truncate leading-tight mb-2" title="${a.name}">${a.name}</h3>
                                    
                                    <div class="mt-auto flex items-center justify-between pt-3 border-t border-gray-50/50">
                                        <div class="text-xs text-gray-400 line-clamp-1 max-w-[60%]">
                                            ${a.note||`<span class="opacity-50 italic">${e("no_details")}</span>`}
                                        </div>
                                        <span class="text-[10px] font-bold text-primary/60 uppercase tracking-wider group-hover:text-primary transition-colors flex items-center gap-1">
                                            ${e("view_details")} &rarr;
                                        </span>
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `}
            </div>

            <!-- Course Setup Wizard Modal -->
            <div id="add-course-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 w-full max-w-2xl transform scale-95 transition-all duration-300 overflow-hidden flex flex-col max-h-[90vh]">
                    <!-- Wizard Header -->
                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <div>
                            <h3 class="text-lg font-bold text-dark" id="modal-title">${e("new_course_setup")}</h3>
                            <p class="text-xs text-gray-400" id="wizard-step-indicator">${e("step_1_basic")}</p>
                        </div>
                        <button id="close-modal-btn" class="p-1 rounded-full hover:bg-gray-200 text-gray-400 transition-colors">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <!-- Progress Bar -->
                    <div class="h-1 w-full bg-gray-100">
                        <div id="wizard-progress" class="h-full bg-primary transition-all duration-300 w-1/2"></div>
                    </div>
                    
                    <!-- Wizard Content -->
                    <div class="p-6 overflow-y-auto custom-scrollbar">
                        <!-- Step 1: Basic Info -->
                        <div id="step-1" class="wizard-step space-y-4">
                            <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("course_name")} <span class="text-red-400">*</span></label>
                                <input type="text" id="course-name-input" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Advanced Calculus">
                            </div>
                             <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("course_code")} (${e("optional")})</label>
                                <input type="text" id="course-code-input" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300 uppercase" placeholder="e.g. MATH 201">
                            </div>
                        </div>

                        <!-- Step 2: Logistics -->
                        <div id="step-2" class="wizard-step hidden space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("instructor")}</label>
                                    <input type="text" id="course-instructor-input" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Dr. Smith">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("email")}</label>
                                    <input type="email" id="course-email-input" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="mail@uni.edu">
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("schedule_time")}</label>
                                    <input type="text" id="course-schedule-input" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Mon 09:00">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("location_platform")}</label>
                                    <input type="text" id="course-location-input" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Room 101">
                                </div>
                            </div>
                             <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("note_optional")}</label>
                                <textarea id="course-note-input" rows="2" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300 resize-none text-sm" placeholder="${e("note_placeholder")}"></textarea>
                            </div>
                        </div>
                    </div>

                    <!-- Footer Buttons -->
                    <div class="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-between">
                         <button id="prev-step-btn" class="px-4 py-2 text-gray-400 hover:text-dark font-bold text-sm transition-colors hidden">${e("back")}</button>
                         <button id="next-step-btn" class="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm ml-auto">
                            ${e("next_step")}
                        </button>
                        <button id="finish-step-btn" class="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm ml-auto hidden">
                            ${e("create_course")}
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Delete Confirmation Modal -->
             <div id="delete-course-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">${e("delete_course_confirm")}</h3>
                    <p class="text-sm text-gray-400 mb-6">${e("action_undone")}</p>
                    
                    <div class="flex gap-3">
                         <button id="cancel-delete-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">${e("cancel")}</button>
                         <button id="confirm-delete-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">${e("delete")}</button>
                    </div>
                </div>
            </div>
            
        </div>
        `,b(),t.querySelectorAll(".draggable-item").forEach(l)},b=()=>{const s=t.querySelector("#add-course-modal"),a=s.querySelector("div"),d=t.querySelector("#add-course-btn"),u=t.querySelector("#close-modal-btn"),g=t.querySelector("#step-1"),w=t.querySelector("#step-2"),L=t.querySelector("#next-step-btn"),x=t.querySelector("#prev-step-btn"),f=t.querySelector("#finish-step-btn"),M=t.querySelector("#wizard-step-indicator"),S=t.querySelector("#wizard-progress"),_=t.querySelector("#course-name-input"),E=t.querySelector("#course-code-input"),j=t.querySelector("#course-instructor-input"),B=t.querySelector("#course-email-input"),r=t.querySelector("#course-schedule-input"),h=t.querySelector("#course-location-input"),v=t.querySelector("#course-note-input");let $="blue",m=null;const y=t.querySelector("#modal-title"),k=()=>{g.classList.remove("hidden"),w.classList.add("hidden"),x.classList.add("hidden"),L.classList.remove("hidden"),f.classList.add("hidden"),M.textContent=e("step_1_basic"),S.style.width="50%",_.value="",E&&(E.value=""),j&&(j.value=""),B&&(B.value=""),r&&(r.value=""),h&&(h.value=""),v&&(v.value=""),_.classList.remove("ring-2","ring-red-500/50","border-red-500"),$="blue"},z=()=>{m=null,y&&(y.textContent=e("new_course_setup")),f&&(f.textContent=e("create_course")),k(),s.classList.remove("invisible","opacity-0"),s.classList.add("visible","opacity-100"),a.classList.remove("scale-95"),a.classList.add("scale-100"),setTimeout(()=>_.focus(),100)},D=N=>{const P=p.courses.find(G=>G.id===N);P&&(m=N,y&&(y.textContent=e("edit_course_setup")),f&&(f.textContent=e("save")),k(),_.value=P.name,E&&(E.value=P.code||""),j&&(j.value=P.instructor||""),B&&(B.value=P.email||""),r&&(r.value=P.schedule||""),h&&(h.value=P.location||""),v&&(v.value=P.note||""),$=P.color||"blue",s.classList.remove("invisible","opacity-0"),s.classList.add("visible","opacity-100"),a.classList.remove("scale-95"),a.classList.add("scale-100"))},q=()=>{s.classList.add("invisible","opacity-0"),s.classList.remove("visible","opacity-100"),a.classList.add("scale-95"),a.classList.remove("scale-100")};d.addEventListener("click",z),u.addEventListener("click",q),L.addEventListener("click",()=>{if(!_.value.trim()){_.classList.add("ring-2","ring-red-500/50","border-red-500"),_.focus();return}_.classList.remove("ring-2","ring-red-500/50","border-red-500"),g.classList.add("hidden"),w.classList.remove("hidden"),x.classList.remove("hidden"),L.classList.add("hidden"),f.classList.remove("hidden"),M.textContent=e("step_2_logistics"),S.style.width="100%"}),x.addEventListener("click",()=>{g.classList.remove("hidden"),w.classList.add("hidden"),x.classList.add("hidden"),L.classList.remove("hidden"),f.classList.add("hidden"),M.textContent=e("step_1_basic"),S.style.width="50%"}),f.addEventListener("click",()=>{const N=_.value.trim(),P=E?E.value.trim():"",G=j?j.value.trim():"",X=B?B.value.trim():"",ee=r?r.value.trim():"",te=h?h.value.trim():"",re=v?v.value.trim():"";if(m){const F=p.courses.find(le=>le.id===m);F&&(F.name=N,F.code=P,F.instructor=G,F.email=X,F.schedule=ee,F.location=te,F.note=re,F.color=$)}else{const F={id:Date.now(),name:N,code:P,color:$,instructor:G,email:X,schedule:ee,location:te,note:re,resources:[],aiSessions:[]};F.aiSessions.push({id:Date.now(),title:"General Chat",messages:[{sender:"ai",text:`Hi! I'm StudyAl, your personal AI assistant for **${N}**. Ask me anything about the course materials, exams, or topics!`}],timestamp:Date.now()}),F.currentSessionId=F.aiSessions[0].id,p.courses.push(F),p.stats.courses.total=p.courses.length}H(),q(),c()});const I=t.querySelector("#delete-course-modal"),C=I.querySelector("div"),T=t.querySelector("#cancel-delete-btn"),A=t.querySelector("#confirm-delete-btn");let V=null;const R=()=>{I.classList.add("invisible","opacity-0"),I.classList.remove("visible","opacity-100"),C.classList.add("scale-95"),C.classList.remove("scale-100"),V=null},W=N=>{V=N,I.classList.remove("invisible","opacity-0"),I.classList.add("visible","opacity-100"),C.classList.remove("scale-95"),C.classList.add("scale-100")};t.querySelectorAll(".delete-course-btn").forEach(N=>{N.addEventListener("click",P=>{P.stopPropagation(),W(parseInt(N.dataset.id))})}),t.querySelectorAll(".edit-course-btn").forEach(N=>{N.addEventListener("click",P=>{P.stopPropagation(),D(parseInt(N.dataset.id))})}),T.addEventListener("click",R),A.addEventListener("click",()=>{if(V){p.courses=p.courses.filter(P=>P.id!==V),p.stats.courses.total=p.courses.length,H();const N=localStorage.getItem("coursesLayout");if(N){let P=JSON.parse(N);P=P.filter(G=>parseInt(G)!==V),localStorage.setItem("coursesLayout",JSON.stringify(P))}R(),c()}}),_.addEventListener("input",()=>{_.classList.remove("ring-2","ring-red-500/50","border-red-500")})};c()}const $e=t=>(t=t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.*?)\*/g,"<em>$1</em>"),t);function Me(t,i){const o=p.courses.find(c=>c.id===i);if(!o){t.innerHTML=`
            <div class="flex flex-col items-center justify-center h-full">
                <h2 class="text-2xl font-bold text-gray-400">${e("course_not_found")}</h2>
                <button onclick="window.navigateTo('courses')" class="mt-4 text-primary hover:underline">${e("back_to_courses")}</button>
            </div>
        `;return}if(o.resources||(o.resources=[],H()),o.instructor===void 0&&(o.instructor=""),o.email===void 0&&(o.email=""),o.location===void 0&&(o.location=""),o.schedule===void 0&&(o.schedule=""),!o.aiSessions){const c=o.chatHistory||[{sender:"ai",text:`Hi! I'm StudyAl, your personal AI assistant for **${o.name}**. Ask me anything about the course materials, exams, or topics!`}];o.aiSessions=[{id:Date.now(),title:"General Chat",messages:c,timestamp:Date.now()}],o.currentSessionId=o.aiSessions[0].id,delete o.chatHistory,H()}const n=()=>{const c=o.aiSessions.find(b=>b.id===o.currentSessionId)||o.aiSessions[0];if(!c){o.currentSessionId=o.aiSessions[0].id,H(),n();return}t.innerHTML=`
        <div class="p-8 h-full flex flex-col relative">
            <header class="flex justify-between items-center mb-8">
                 <div class="flex items-center gap-4">
                    <button onclick="window.navigateTo('courses')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors shadow-sm border border-gray-100">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <div class="flex items-center gap-3">
                         <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                             ${o.name.charAt(0).toUpperCase()}
                        </div>
                        <h1 class="text-3xl font-bold text-dark truncate max-w-lg" title="${o.name}">${o.name}</h1>
                    </div>
                <div class="flex items-center gap-3">
                     <button id="delete-course-detail-btn" class="p-2 text-gray-300 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors" title="Delete Course">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                 </div>
            </header>
            
            <div class="flex-1 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 overflow-y-auto remove-scrollbar">
                <style>
                    .remove-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .remove-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                </style>
                
                <!-- Course Info Cards (3 Columns) -->
                <div class="mb-8">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">${e("course_info")}</h3>
                        <button id="edit-info-btn" class="text-xs font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-1 bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors">
                            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                            ${e("edit")}
                        </button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Instructor Card -->
                        <div class="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                             <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                             </div>
                             <div class="min-w-0">
                                <p class="text-[10px] text-gray-400 font-bold uppercase mb-0.5">${e("instructor")}</p>
                                <p class="text-dark font-bold text-sm truncate" title="${o.instructor||""}">${o.instructor||`<span class="text-gray-300 font-normal italic">${e("not_set")}</span>`}</p>
                                ${o.email?`<a href="mailto:${o.email}" class="text-xs text-blue-500 hover:underline cursor-pointer truncate block" title="${o.email}">${o.email}</a>`:""}
                             </div>
                        </div>
                        
                        <!-- Schedule Card -->
                         <div class="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                             <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center shrink-0">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             </div>
                             <div class="min-w-0">
                                <p class="text-[10px] text-gray-400 font-bold uppercase mb-0.5">${e("schedule_time")}</p>
                                <p class="text-dark font-bold text-sm truncate" title="${o.schedule||""}">${o.schedule||`<span class="text-gray-300 font-normal italic">${e("not_set")}</span>`}</p>
                             </div>
                        </div>

                        <!-- Location Card -->
                         <div class="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                             <div class="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                             </div>
                             <div class="min-w-0">
                                 <p class="text-[10px] text-gray-400 font-bold uppercase mb-0.5">${e("location_platform")}</p>
                                 <p class="text-dark font-bold text-sm truncate" title="${o.location||""}">${o.location||`<span class="text-gray-300 font-normal italic">${e("not_set")}</span>`}</p>
                             </div>
                        </div>
                    </div>
                </div>

                 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Resources -->
                    <div class="border border-gray-100 rounded-2xl p-6 flex flex-col h-full">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                                <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                ${e("resources")}
                            </h3>
                            <button id="add-resource-btn" class="p-1.5 text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Add File">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                            </button>
                            <input type="file" id="file-upload-input" class="hidden" accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png">
                        </div>

                        <div class="flex-1 overflow-y-auto custom-scrollbar max-h-60">
                             ${o.resources.length===0?`
                                <div class="flex flex-col items-center justify-center py-8 text-gray-400 text-sm h-full">
                                    ${e("no_resources_yet")}
                                </div>
                             `:`
                                <ul class="space-y-2">
                                    ${o.resources.map(b=>`
                                        <li class="flex items-center justify-between p-3 bg-gray-50 rounded-xl group hover:bg-gray-100 transition-colors">
                                            <div class="flex items-center gap-3 min-w-0 flex-1">
                                                <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                                </div>
                                                <div class="truncate">
                                                    <p class="text-sm font-bold text-dark truncate">${b.name}</p>
                                                    <p class="text-xs text-gray-400 truncate">${b.type||e("unknown_type")}</p>
                                                </div>
                                            </div>
                                             <button class="delete-resource-btn text-gray-300 hover:text-primary p-1 transition-colors opacity-0 group-hover:opacity-100" data-id="${b.id}">
                                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            </button>
                                        </li>
                                    `).join("")}
                                </ul>
                             `}
                        </div>
                    </div>

                    <!-- StudyAl AI Assistant -->
                     <div class="border border-gray-100 rounded-2xl p-6 flex flex-col h-[500px] bg-gradient-to-br from-primary/5 via-white to-primary/10 relative overflow-hidden">
                         <!-- Header -->
                         <div class="flex justify-between items-start mb-4 z-10">
                             <div class="flex items-center gap-3">
                                 <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                     <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                 </div>
                                 <div class="flex flex-col">
                                     <h3 class="text-lg font-bold text-dark flex items-center gap-2">StudyAl</h3>
                                     <div class="flex items-center gap-1.5">
                                         <span class="text-xs font-medium text-gray-500">${e("gemini_powered")}</span>
                                     </div>
                                 </div>
                             </div>
                             <div class="flex gap-2">
                                <button id="history-toggle-btn" class="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" title="Chat History">
                                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </button>
                                <button id="new-chat-btn" class="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors" title="New Chat">
                                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                                </button>
                             </div>
                         </div>

                         <!-- Chat Area -->
                         <div id="chat-messages" class="flex-1 overflow-y-auto custom-scrollbar space-y-4 mb-4 pr-2 z-10 transition-all">
                             ${c.messages.map(b=>`
                                 <div class="flex ${b.sender==="user"?"justify-end":"justify-start"}">
                                     <div class="max-w-[85%] ${b.sender==="user"?"bg-primary text-white rounded-t-2xl rounded-bl-2xl shadow-lg shadow-primary/20":"bg-white border border-gray-100 text-gray-700 rounded-t-2xl rounded-br-2xl shadow-sm"} px-4 py-3 text-sm leading-relaxed">
                                         ${b.sender==="ai"?$e(b.text):b.text}
                                     </div>
                                 </div>
                             `).join("")}
                         </div>

                         <!-- Input Area -->
                         <div class="relative z-10 mt-auto">
                             <form id="chat-form" class="relative items-end gap-2 flex">
                                 <input type="text" id="chat-input" 
                                     class="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm placeholder-gray-400" 
                                     placeholder="${e("ask_question_placeholder")} ${o.name}..."
                                     autocomplete="off">
                                 
                                 <button type="submit" class="absolute right-2 top-1.5 p-1.5 bg-primary text-white rounded-lg hover:opacity-90 transition-colors shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed">
                                     <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                 </button>
                             </form>
                             <div class="text-center mt-2">
                                 <p class="text-[10px] text-gray-400">${e("ai_mistakes_disclaimer")}</p>
                             </div>
                         </div>

                         <!-- Decorative Background Elements -->
                         <div class="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                         <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

                        <!-- History Sidebar (Slide In) -->
                        <div id="history-sidebar" class="absolute inset-y-0 left-0 w-64 bg-white shadow-xl border-r border-gray-100 transform -translate-x-full transition-transform duration-300 z-40 p-4 flex flex-col">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="font-bold text-dark text-sm">${e("chat_history")}</h3>
                                <button id="close-history-btn" class="p-1 text-gray-400 hover:text-dark transition-colors">
                                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <div class="flex-1 overflow-y-auto custom-scrollbar space-y-2">
                                ${o.aiSessions.sort((b,s)=>s.timestamp-b.timestamp).map(b=>`
                                    <button class="history-item-btn w-full text-left p-3 rounded-xl text-xs transition-colors group relative ${b.id===o.currentSessionId?"bg-primary/10 text-primary font-bold":"hover:bg-gray-50 text-gray-500"}" data-id="${b.id}">
                                        <p class="truncate pr-6">${b.title}</p>
                                        <span class="text-[10px] opacity-60 block mt-1">${new Date(b.timestamp).toLocaleDateString()}</span>
                                        ${o.aiSessions.length>1?`
                                            <div class="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                 <span class="delete-session-btn block p-1 hover:text-primary cursor-pointer" data-id="${b.id}">
                                                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                </span>
                                            </div>
                                        `:""}
                                    </button>
                                `).join("")}
                            </div>
                        </div>

                        <!-- Clear Chat Confirmation Modal (Scoped to Card) -->

                        <!-- Clear Chat Confirmation Modal (Scoped to Card) -->
                        <div id="clear-chat-modal" class="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                            <div class="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 w-[90%] max-w-[280px] transform scale-95 transition-all duration-300 text-center">
                                <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </div>
                                <h3 class="text-base font-bold text-dark mb-1">${e("clear_history_confirm")}</h3>
                                <p class="text-xs text-gray-400 mb-5">${e("chats_lost_desc")}</p>
                                
                                <div class="flex gap-2">
                                    <button id="cancel-clear-chat-btn" class="flex-1 py-2 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-xs">${e("cancel")}</button>
                                    <button id="confirm-clear-chat-btn" class="flex-1 py-2 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-xs">${e("delete")}</button>
                                </div>
                            </div>
                        </div>
                         <!-- Delete Session Confirmation Modal (Scoped to Card) -->
                        <div id="delete-session-modal" class="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                            <div class="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 w-[90%] max-w-[280px] transform scale-95 transition-all duration-300 text-center">
                                <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </div>
                                <h3 class="text-base font-bold text-dark mb-1">${e("delete_session_confirm")}</h3>
                                <p class="text-xs text-gray-400 mb-5">${e("session_deleted_desc")}</p>
                                
                                <div class="flex gap-2">
                                    <button id="cancel-delete-session-btn" class="flex-1 py-2 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-xs">${e("cancel")}</button>
                                    <button id="confirm-delete-session-btn" class="flex-1 py-2 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-xs">${e("delete")}</button>
                                </div>
                            </div>
                        </div>
                     </div>
                 </div>
            </div>
            <!-- Delete Resource Confirmation Modal -->
            <div id="delete-resource-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                     <h3 class="text-lg font-bold text-dark mb-1">${e("delete_resource_confirm")}</h3>
                     <p class="text-sm text-gray-400 mb-6">${e("action_undone")}</p>
                     
                     <div class="flex gap-3">
                        <button id="cancel-delete-res-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">
                            ${e("cancel")}
                        </button>
                        <button id="confirm-delete-res-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">
                            ${e("delete")}
                        </button>
                     </div>
                </div>
            </div>
            <!-- Delete Course Confirmation Modal -->
            <div id="delete-course-detail-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">${e("delete_course_confirm")}</h3>
                    <p class="text-sm text-gray-400 mb-6">${e("action_undone")}</p>
                    
                    <div class="flex gap-3">
                         <button id="cancel-delete-course-detail-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">${e("cancel")}</button>
                         <button id="confirm-delete-course-detail-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">${e("delete")}</button>
                    </div>
                </div>
            </div>

            <!-- Edit Info Modal -->
            <div id="edit-info-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-sm transform scale-95 transition-all duration-300">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold text-dark">${e("edit_course_setup")}</h3>
                        <button id="close-edit-info-btn" class="p-1 rounded-full hover:bg-gray-100 text-gray-400 transition-colors">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    
                    <div class="space-y-4">
                        <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("instructor_name")}</label>
                            <input type="text" id="info-instructor" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Dr. Jane Smith" value="${o.instructor||""}">
                        </div>
                         <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("email")}</label>
                            <input type="email" id="info-email" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. jane.smith@uni.edu" value="${o.email||""}">
                        </div>
                         <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("schedule_time")}</label>
                                <input type="text" id="info-schedule" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Mon 10:30" value="${o.schedule||""}">
                            </div>
                            <div>
                                 <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("location_platform")}</label>
                                <input type="text" id="info-location" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Room 301" value="${o.location||""}">
                            </div>
                         </div>
                        
                        <button id="save-info-btn" class="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm mt-2">
                            ${e("save_changes_btn")}
                        </button>
                    </div>
                </div>
            </div>


        </div>
        `,l()},l=()=>{const c=t.querySelector("#chat-form"),b=t.querySelector("#chat-input"),s=t.querySelector("#chat-messages"),a=t.querySelector("#edit-info-modal");if(a){const j=a.querySelector("div"),B=t.querySelector("#edit-info-btn"),r=t.querySelector("#close-edit-info-btn"),h=t.querySelector("#save-info-btn"),v=t.querySelector("#info-instructor"),$=t.querySelector("#info-email"),m=t.querySelector("#info-schedule"),y=t.querySelector("#info-location");B&&B.addEventListener("click",()=>{a.classList.remove("invisible","opacity-0"),a.classList.add("visible","opacity-100"),j.classList.remove("scale-95"),j.classList.add("scale-100")});const k=()=>{a.classList.add("invisible","opacity-0"),a.classList.remove("visible","opacity-100"),j.classList.add("scale-95"),j.classList.remove("scale-100")};r&&r.addEventListener("click",k),h&&h.addEventListener("click",()=>{o.instructor=v.value.trim(),o.email=$.value.trim(),o.schedule=m.value.trim(),o.location=y.value.trim(),H(),k(),n()})}if(s&&(s.scrollTop=s.scrollHeight),c){c.addEventListener("submit",async q=>{q.preventDefault();const I=b.value.trim();if(!I)return;const C=o.aiSessions.find(T=>T.id===o.currentSessionId);C&&(C.messages.push({sender:"user",text:I}),C.messages.length===2&&(C.title=I.length>25?I.substring(0,25)+"...":I),C.timestamp=Date.now(),H(),n(),setTimeout(()=>{const T=["That's a great question! Based on typical course structures, you should focus on the core principles first.","I can certainly help with that. Could you provide a bit more context from your lecture notes?","Interesting point. This topic often relates to the previous module about fundamentals.","Here's a quick summary: The concept basically explains the relationship between variables in this context.",`Since this is **${o.name}**, remember to review the recommended readings for this week.`],A=T[Math.floor(Math.random()*T.length)];C.messages.push({sender:"ai",text:A}),C.timestamp=Date.now(),H(),n()},1500))});const j=t.querySelector("#new-chat-btn");j&&j.addEventListener("click",()=>{const q={id:Date.now(),title:e("new_conversation"),messages:[{sender:"ai",text:`Hi! I'm StudyAl. Start a new topic for **${o.name}**!`}],timestamp:Date.now()};o.aiSessions.push(q),o.currentSessionId=q.id,H(),n()});const B=t.querySelector("#history-toggle-btn"),r=t.querySelector("#history-sidebar"),h=t.querySelector("#close-history-btn");B&&r&&B.addEventListener("click",()=>{r.classList.remove("-translate-x-full")}),h&&r&&h.addEventListener("click",()=>{r.classList.add("-translate-x-full")});const v=t.querySelector("#delete-session-modal"),$=v.querySelector("div"),m=t.querySelector("#cancel-delete-session-btn"),y=t.querySelector("#confirm-delete-session-btn");let k=null;const z=q=>{k=q,v.classList.remove("invisible","opacity-0"),v.classList.add("visible","opacity-100"),$.classList.remove("scale-95"),$.classList.add("scale-100")},D=()=>{k=null,v.classList.add("invisible","opacity-0"),v.classList.remove("visible","opacity-100"),$.classList.add("scale-95"),$.classList.remove("scale-100")};r&&r.addEventListener("click",q=>{const I=q.target.closest(".delete-session-btn");if(I){q.stopPropagation();const T=parseInt(I.dataset.id);z(T);return}const C=q.target.closest(".history-item-btn");if(C){const T=parseInt(C.dataset.id);T!==o.currentSessionId?(o.currentSessionId=T,H(),n()):r.classList.add("-translate-x-full")}}),m&&m.addEventListener("click",D),y&&y.addEventListener("click",()=>{var q;if(k){if(o.aiSessions=o.aiSessions.filter(I=>I.id!==k),k===o.currentSessionId&&(o.currentSessionId=((q=o.aiSessions[0])==null?void 0:q.id)||null,!o.aiSessions.length)){const I=[{sender:"ai",text:`Hi! I'm StudyAl, your personal AI assistant for **${o.name}**. Ask me anything about the course materials, exams, or topics!`}],C={id:Date.now(),title:"General Chat",messages:I,timestamp:Date.now()};o.aiSessions.push(C),o.currentSessionId=C.id}H(),D(),n()}}),t.querySelector("#clear-chat-modal")}const d=t.querySelector("#add-resource-btn"),u=t.querySelector("#file-upload-input"),g=t.querySelector("#delete-resource-modal"),w=g.querySelector("div"),L=t.querySelector("#cancel-delete-res-btn"),x=t.querySelector("#confirm-delete-res-btn");let f=null;const M=j=>{f=j,g.classList.remove("invisible","opacity-0"),g.classList.add("visible","opacity-100"),w.classList.remove("scale-95"),w.classList.add("scale-100")},S=()=>{f=null,g.classList.add("invisible","opacity-0"),g.classList.remove("visible","opacity-100"),w.classList.add("scale-95"),w.classList.remove("scale-100")};d&&d.addEventListener("click",()=>{u.click()}),u&&u.addEventListener("change",j=>{const B=j.target.files[0];B&&(o.resources.push({id:Date.now(),name:B.name,type:B.type||"Unknown Type",size:(B.size/1024).toFixed(1)+" KB"}),H(),n())}),t.querySelectorAll(".delete-resource-btn").forEach(j=>{j.addEventListener("click",B=>{B.preventDefault(),M(parseInt(j.dataset.id))})}),L&&L.addEventListener("click",S),x&&x.addEventListener("click",()=>{f&&(o.resources=o.resources.filter(j=>j.id!==f),H(),n())});const _=t.querySelector("#delete-course-detail-btn"),E=t.querySelector("#delete-course-detail-modal");if(E){const j=E.querySelector("div"),B=t.querySelector("#cancel-delete-course-detail-btn"),r=t.querySelector("#confirm-delete-course-detail-btn");_&&_.addEventListener("click",()=>{E.classList.remove("invisible","opacity-0"),E.classList.add("visible","opacity-100"),j.classList.remove("scale-95"),j.classList.add("scale-100")});const h=()=>{E.classList.add("invisible","opacity-0"),E.classList.remove("visible","opacity-100"),j.classList.add("scale-95"),j.classList.remove("scale-100")};B&&B.addEventListener("click",h),r&&r.addEventListener("click",()=>{p.courses=p.courses.filter(v=>v.id!==o.id),p.stats.courses.total=p.courses.length,H(),window.navigateTo("courses")})}};n()}function Ce(t){if(!t)return;const i=()=>{const n=[...p.exams||[]].sort((l,c)=>new Date(l.date).getTime()-new Date(c.date).getTime());t.innerHTML=`
            <div class="p-8 h-full flex flex-col relative">
                <header class="flex justify-between items-center mb-8 shrink-0">
                    <div class="flex items-center gap-4">
                        <button onclick="window.navigateTo('dashboard')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <h1 class="text-3xl font-bold text-dark">${e("exams_title")}</h1>
                    </div>
                    <button id="add-exam-btn" class="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-bold text-sm shadow-lg shadow-primary/30 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0">
                         <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                        ${e("add_exam")}
                    </button>
                </header>

                <div class="flex-1 overflow-y-auto custom-scrollbar pr-2">
                    ${n.length===0?`
                        <div class="h-full flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-3xl">
                            <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                <svg class="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <h2 class="text-xl font-bold text-gray-400 mb-2">${e("no_exams_yet")}</h2>
                            <p class="text-gray-400 text-sm max-w-xs text-center">${e("no_exams_desc")}</p>
                        </div>
                    `:`
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 content-start pb-10">
                        ${n.map(l=>{const c=new Date(l.date),s=c-new Date,a=Math.ceil(s/(1e3*60*60*24));let d="bg-primary/10 text-primary";a<3&&(d+=" animate-pulse");const u=c.toLocaleString("default",{month:"short"}).toUpperCase(),g=c.getDate(),w=c.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return`
                            <div class="relative bg-white rounded-3xl drop-shadow-sm hover:drop-shadow-md transition-all group overflow-hidden flex h-32" 
                                 style="-webkit-mask-image: radial-gradient(circle at 6rem 0, transparent 0.75rem, black 0.85rem), radial-gradient(circle at 6rem 100%, transparent 0.75rem, black 0.85rem); mask-image: radial-gradient(circle at 6rem 0, transparent 0.75rem, black 0.85rem), radial-gradient(circle at 6rem 100%, transparent 0.75rem, black 0.85rem); -webkit-mask-composite: source-in; mask-composite: intersect;">
                                <!-- Left Stub -->
                                <div class="w-24 bg-primary/15 flex flex-col items-center justify-center p-3 border-r-2 border-dashed border-primary/30 shrink-0">
                                    <span class="text-xs font-bold text-primary/80 mb-0.5">${u}</span>
                                    <span class="text-3xl font-black text-primary leading-none">${g}</span>
                                    <span class="text-[10px] text-primary/70 mt-1.5 font-medium">${w}</span>
                                </div>

                                <!-- Main Ticket Content -->
                                <div class="flex-1 p-4 flex flex-col h-full relative">
                                    <!-- Actions (Top Right Absolute) -->
                                    <div class="absolute top-2 right-2 flex gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button class="text-gray-300 hover:text-primary transition-colors p-1 rounded-md hover:bg-primary/10 edit-exam-btn" data-id="${l.id}" title="${e("edit_exam")}">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                        </button>
                                        <button class="text-gray-300 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50 delete-exam-btn" data-id="${l.id}" title="${e("delete_exam")}">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>

                                    <!-- Center Info -->
                                    <div class="flex-1 flex flex-col items-center justify-center text-center -mt-1">
                                        <h3 class="text-2xl font-black text-dark tracking-tight leading-none mb-1">${l.code}</h3>
                                        <p class="text-sm text-gray-500 font-medium truncate max-w-[180px]">${l.name}</p>
                                    </div>

                                    <!-- Footer -->
                                    <div class="mt-auto pt-2 border-t border-dashed border-primary/20 flex items-center justify-between w-full">
                                        <div class="flex items-center gap-2">
                                            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 uppercase tracking-wide border border-gray-100">${l.type}</span>
                                            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${d}">${a>0?`${a} ${e("days_left")}`:e(a===0?"today_caps":"passed_caps")}</span>
                                        </div>
                                        <div class="flex items-center gap-1 text-gray-400 text-xs">
                                            <svg class="w-3.5 h-3.5 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            <span class="font-medium text-gray-500">${l.location}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        `}).join("")}
                    </div>
                    `}

            <!-- Exam Wizard Modal -->
            <div id="add-exam-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xl transform scale-95 transition-all duration-300 overflow-hidden flex flex-col">
                    <!-- Wizard Header -->
                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <div>
                            <h3 class="text-lg font-bold text-dark" id="modal-title">${e("new_exam_setup")}</h3>
                            <p class="text-xs text-gray-400" id="wizard-step-indicator">${e("step_1_basic")}</p>
                        </div>
                        <button id="close-modal-btn" class="p-1 rounded-full hover:bg-gray-200 text-gray-400 transition-colors">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <!-- Progress Bar -->
                    <div class="h-1 w-full bg-gray-100">
                        <div id="wizard-progress" class="h-full bg-primary transition-all duration-300 w-1/2"></div>
                    </div>
                    
                    <!-- Wizard Content -->
                    <div class="p-6">
                        <!-- Step 1: Basic Details -->
                        <div id="step-1" class="wizard-step space-y-4">
                            <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("course_name")} <span class="text-red-400">*</span></label>
                                <input type="text" id="ex-name" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Calculus I">
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("course_code")} <span class="text-red-400">*</span></label>
                                    <input type="text" id="ex-code" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. MATH 101">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("exam_type")}</label>
                                    <select id="ex-type" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium outline-none">
                                        <option value="Midterm">Midterm</option>
                                        <option value="Final">Final</option>
                                        <option value="Quiz">Quiz</option>
                                        <option value="Project">Project</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- Step 2: Logistics -->
                        <div id="step-2" class="wizard-step hidden space-y-4">
                             <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("date")} <span class="text-red-400">*</span></label>
                                    <input type="date" id="ex-date" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-sm">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("time")} <span class="text-red-400">*</span></label>
                                    <input type="time" id="ex-time" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-sm">
                                </div>
                            </div>
                             <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("location_platform")}</label>
                                <input type="text" id="ex-loc" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="e.g. Room 204 or Online">
                            </div>
                        </div>
                    </div>

                    <!-- Footer Buttons -->
                    <div class="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-between">
                         <button id="prev-step-btn" class="px-4 py-2 text-gray-400 hover:text-dark font-bold text-sm transition-colors hidden">${e("back")}</button>
                         <button id="next-step-btn" class="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm ml-auto">
                            ${e("next_step")}
                        </button>
                        <button id="finish-step-btn" class="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm ml-auto hidden">
                            ${e("add_exam")}
                        </button>
                    </div>
                </div>
            </div>

            <!-- Delete Confirmation Modal -->
             <div id="delete-exam-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">${e("delete_exam_confirm")}</h3>
                    <p class="text-sm text-gray-400 mb-6">${e("action_undone")}</p>
                    
                    <div class="flex gap-3">
                         <button id="cancel-delete-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">${e("cancel")}</button>
                         <button id="confirm-delete-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">${e("delete")}</button>
                    </div>
                </div>
            </div>
        `,o()},o=()=>{const n=t.querySelector("#add-exam-modal"),l=n.querySelector("div"),c=t.querySelector("#add-exam-btn"),b=t.querySelector("#close-modal-btn"),s=t.querySelector("#step-1"),a=t.querySelector("#step-2"),d=t.querySelector("#next-step-btn"),u=t.querySelector("#prev-step-btn"),g=t.querySelector("#finish-step-btn"),w=t.querySelector("#wizard-step-indicator"),L=t.querySelector("#wizard-progress"),x=t.querySelector("#ex-name"),f=t.querySelector("#ex-code"),M=t.querySelector("#ex-type"),S=t.querySelector("#ex-date"),_=t.querySelector("#ex-time"),E=t.querySelector("#ex-loc");let j=null;const B=t.querySelector("#modal-title"),r=()=>{s.classList.remove("hidden"),a.classList.add("hidden"),u.classList.add("hidden"),d.classList.remove("hidden"),g.classList.add("hidden"),w.textContent=e("step_1_basic"),L.style.width="50%",x.value="",f.value="",S.value="",_.value="",E.value="",M.value="Midterm",[x,f,S,_].forEach(C=>C.classList.remove("ring-2","ring-red-500/50","border-red-500"))},h=()=>{j=null,B&&(B.textContent=e("new_exam_setup")),g&&(g.textContent=e("add_exam")),r(),n.classList.remove("invisible","opacity-0"),n.classList.add("visible","opacity-100"),l.classList.remove("scale-95"),l.classList.add("scale-100")},v=C=>{const T=p.exams.find(V=>V.id===C);if(!T)return;j=C,B&&(B.textContent=e("edit_exam_setup")),g&&(g.textContent=e("save")),r(),x.value=T.name,f.value=T.code,M.value=T.type,E.value=T.location||"";const A=new Date(T.date);if(!isNaN(A.getTime())){const V=A.getFullYear(),R=String(A.getMonth()+1).padStart(2,"0"),W=String(A.getDate()).padStart(2,"0");S.value=`${V}-${R}-${W}`;const N=String(A.getHours()).padStart(2,"0"),P=String(A.getMinutes()).padStart(2,"0");_.value=`${N}:${P}`}n.classList.remove("invisible","opacity-0"),n.classList.add("visible","opacity-100"),l.classList.remove("scale-95"),l.classList.add("scale-100")},$=()=>{n.classList.add("invisible","opacity-0"),n.classList.remove("visible","opacity-100"),l.classList.add("scale-95"),l.classList.remove("scale-100")};c.addEventListener("click",h),b.addEventListener("click",$),d.addEventListener("click",()=>{if(!x.value.trim()||!f.value.trim()){x.value.trim()||x.classList.add("ring-2","ring-red-500/50","border-red-500"),f.value.trim()||f.classList.add("ring-2","ring-red-500/50","border-red-500");return}x.classList.remove("ring-2","ring-red-500/50","border-red-500"),f.classList.remove("ring-2","ring-red-500/50","border-red-500"),s.classList.add("hidden"),a.classList.remove("hidden"),u.classList.remove("hidden"),d.classList.add("hidden"),g.classList.remove("hidden"),w.textContent=e("step_2_logistics"),L.style.width="100%"}),u.addEventListener("click",()=>{s.classList.remove("hidden"),a.classList.add("hidden"),u.classList.add("hidden"),d.classList.remove("hidden"),g.classList.add("hidden"),w.textContent=e("step_1_basic"),L.style.width="50%"}),g.addEventListener("click",()=>{if(!S.value||!_.value){S.value||S.classList.add("ring-2","ring-red-500/50","border-red-500"),_.value||_.classList.add("ring-2","ring-red-500/50","border-red-500");return}const C=new Date(`${S.value}T${_.value}`);if(j){const T=p.exams.find(A=>A.id===j);T&&(T.code=f.value.trim(),T.name=x.value.trim(),T.type=M.value,T.location=E.value.trim()||"TBD",T.date=C.toISOString())}else{const T={id:Date.now(),code:f.value.trim(),name:x.value.trim(),type:M.value,location:E.value.trim()||"TBD",date:C.toISOString()};p.exams||(p.exams=[]),p.exams.push(T)}H(),$(),i()});const m=t.querySelector("#delete-exam-modal"),y=m.querySelector("div"),k=t.querySelector("#cancel-delete-btn"),z=t.querySelector("#confirm-delete-btn");let D=null;const q=()=>{m.classList.add("invisible","opacity-0"),m.classList.remove("visible","opacity-100"),y.classList.add("scale-95"),y.classList.remove("scale-100"),D=null},I=C=>{D=C,m.classList.remove("invisible","opacity-0"),m.classList.add("visible","opacity-100"),y.classList.remove("scale-95"),y.classList.add("scale-100")};t.addEventListener("click",C=>{if(C.target.closest(".delete-exam-btn")){const T=C.target.closest(".delete-exam-btn");I(parseInt(T.dataset.id))}if(C.target.closest(".edit-exam-btn")){const T=C.target.closest(".edit-exam-btn");v(parseInt(T.dataset.id))}}),k.addEventListener("click",q),z.addEventListener("click",()=>{if(D){const C=p.exams.findIndex(T=>T.id===D);C!==-1&&(p.exams.splice(C,1),H(),q(),i())}}),[x,f,S,_].forEach(C=>{C.addEventListener("input",()=>{C.classList.remove("ring-2","ring-red-500/50","border-red-500")})})};i()}function je(t){p.cheatsheets||(p.cheatsheets=[],H());let i=null;const o=()=>{const s=document.getElementById("sheets-grid").querySelector(".grid");if(!s)return;const d=Array.from(s.children).map(u=>u.getAttribute("data-sheet-id"));localStorage.setItem("cheatsheetsLayout",JSON.stringify(d))},n=()=>{const s=localStorage.getItem("cheatsheetsLayout");if(!s)return p.cheatsheets;try{const a=JSON.parse(s).map(g=>parseInt(g)),d=new Map(p.cheatsheets.map(g=>[g.id,g])),u=[];return a.forEach(g=>{d.has(g)&&(u.push(d.get(g)),d.delete(g))}),d.forEach(g=>u.push(g)),u}catch(a){return console.error("Failed to parse layout",a),p.cheatsheets}},l=s=>{const a=document.getElementById("sheets-grid").querySelector(".grid");s.addEventListener("dragstart",d=>{i=s,d.dataTransfer.effectAllowed="move",d.dataTransfer.setData("text/plain",s.dataset.sheetId),requestAnimationFrame(()=>{s.classList.add("opacity-50","scale-95")})}),s.addEventListener("dragend",()=>{s.classList.remove("opacity-50","scale-95"),i=null,a&&a.querySelectorAll(".draggable-item").forEach(d=>{d.classList.remove("ring-2","ring-primary","z-30")})}),s.addEventListener("dragover",d=>{d.preventDefault(),i&&i!==s&&s.classList.add("ring-2","ring-primary","z-30")}),s.addEventListener("dragleave",d=>{s.contains(d.relatedTarget)||s.classList.remove("ring-2","ring-primary","z-30")}),s.addEventListener("drop",d=>{if(d.preventDefault(),d.stopPropagation(),s.classList.remove("ring-2","ring-primary","z-30"),i&&i!==s){const u=a,g=Array.from(u.children),w=g.indexOf(i),L=g.indexOf(s);w<L?u.insertBefore(i,s.nextSibling):u.insertBefore(i,s),o()}})},c=()=>{const s=n();t.innerHTML=`
        <div class="p-8 h-full flex flex-col relative">
            <header class="flex justify-between items-center mb-8">
                 <div class="flex items-center gap-4">
                    <button onclick="window.navigateTo('dashboard')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <h1 class="text-3xl font-bold text-dark">${e("cheatsheets")}</h1>
                 </div>
                 
                 <button id="add-sheet-btn" class="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-bold text-sm shadow-lg shadow-primary/30 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    ${e("new_note")}
                </button>
            </header>
            
            <div id="sheets-grid" class="flex-1 overflow-y-auto custom-scrollbar">
                ${s.length===0?`
                    <div class="h-full flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-3xl">
                        <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <svg class="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-gray-400 mb-2">${e("no_cheatsheets_yet")}</h2>
                        <p class="text-gray-400 text-sm max-w-xs text-center">${e("create_first_sheet")}</p>
                    </div>
                `:`
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 pb-10">
                        ${s.map(a=>{const d=a.images&&a.images.length>0;return`
                            <div 
                                class="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all group relative border border-gray-200 cursor-pointer flex flex-row min-h-[180px] draggable-item overflow-hidden"
                                draggable="true"
                                data-sheet-id="${a.id}"
                                onclick="window.navigateTo('cheatsheet-detail', { id: ${a.id} })"
                            >
                                <!-- Left Strip -->
                                <div class="w-3 bg-primary shrink-0"></div>
                                
                                <!-- Content Container -->
                                <div class="flex-1 p-6 flex flex-col">
                                    <div class="flex justify-between items-start mb-4">
                                        <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        </div>
                                        
                                        <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button class="text-gray-300 hover:text-primary p-1.5 rounded-lg hover:bg-primary/10" onclick="event.stopPropagation(); editSheet(${a.id})" title="${e("edit_title")}">
                                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                            </button>
                                            <button class="text-gray-300 hover:text-primary p-1.5 rounded-lg hover:bg-primary/10" onclick="event.stopPropagation(); deleteSheet(${a.id})" title="${e("delete")}">
                                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <h3 class="text-xl font-bold text-dark leading-tight line-clamp-2 mb-4 pr-2">${a.title}</h3>

                                    <div class="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                                        <div class="flex gap-2">
                                             ${d?`
                                                <span class="flex items-center gap-1 text-[10px] font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded">
                                                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                    ${e("attachment")}
                                                </span>
                                            `:""}
                                        </div>
                                        <span class="text-[10px] font-bold text-primary/60 uppercase tracking-wider group-hover:text-primary transition-colors">${e("view_details")} &rarr;</span>
                                    </div>
                                </div>
                            </div>
                            `}).join("")}
                    </div>
                `}
            </div>

            <!-- Simple New Note Modal -->
            <div id="add-sheet-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-200">
                <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 w-full max-w-sm transform scale-95 transition-all duration-200 p-6">
                    <h3 class="text-xl font-bold text-dark mb-1" id="modal-title">${e("new_note")}</h3>
                    <p class="text-sm text-gray-400 mb-6" id="modal-desc">${e("enter_title_start")}</p>
                    
                    <div class="mb-6">
                        <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">${e("title")}</label>
                        <input type="text" id="new-sheet-title" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300" placeholder="${e("new_note_placeholder")}" autocomplete="off">
                    </div>

                    <div class="flex gap-3">
                        <button id="cancel-create-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">${e("cancel")}</button>
                        <button id="confirm-create-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm transform active:scale-95">${e("create_one")}</button>
                    </div>
                </div>
            </div>
            
             <!-- Delete Confirmation Modal -->
             <div id="delete-sheet-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">${e("delete_note_confirm")}</h3>
                    <p class="text-sm text-gray-400 mb-6">${e("action_undone")}</p>
                    
                    <div class="flex gap-3">
                         <button id="cancel-delete-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">${e("cancel")}</button>
                         <button id="confirm-delete-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">${e("delete")}</button>
                    </div>
                </div>
            </div>

        </div>
        `,b(),t.querySelectorAll(".draggable-item").forEach(l)},b=()=>{const s=t.querySelector("#add-sheet-modal"),a=s.querySelector("div"),d=s.querySelector("h3"),u=s.querySelector("p"),g=t.querySelector("#add-sheet-btn"),w=t.querySelector("#cancel-create-btn"),L=t.querySelector("#confirm-create-btn"),x=t.querySelector("#new-sheet-title");let f=null;g.addEventListener("click",()=>{f=null,d.textContent=e("new_note"),u.textContent=e("enter_title_start"),L.textContent=e("create_one"),s.classList.remove("invisible","opacity-0"),s.classList.add("visible","opacity-100"),a.classList.remove("scale-95"),a.classList.add("scale-100"),x.value="",setTimeout(()=>x.focus(),100)});const M=()=>{s.classList.add("invisible","opacity-0"),s.classList.remove("visible","opacity-100"),a.classList.add("scale-95"),a.classList.remove("scale-100")};w.addEventListener("click",M),L.addEventListener("click",()=>{const j=x.value.trim();if(!j){x.classList.add("ring-2","ring-red-500/50","border-red-500"),x.focus();return}if(f){const B=p.cheatsheets.find(r=>r.id===f);B&&(B.title=j,H(),M(),c())}else{const B={id:Date.now(),title:j,tags:[],content:"",images:[]};p.cheatsheets.push(B),H(),M(),c()}}),x.addEventListener("keydown",j=>{j.key==="Enter"&&L.click(),x.classList.remove("ring-2","ring-red-500/50","border-red-500")}),window.editSheet=j=>{const B=p.cheatsheets.find(r=>r.id===j);B&&(f=j,x.value=B.title,d.textContent=e("edit_note"),u.textContent=e("update_note_title"),L.textContent=e("save"),s.classList.remove("invisible","opacity-0"),s.classList.add("visible","opacity-100"),a.classList.remove("scale-95"),a.classList.add("scale-100"),setTimeout(()=>x.focus(),100))};let S=null;const _=t.querySelector("#delete-sheet-modal"),E=_.querySelector("div");window.deleteSheet=j=>{S=j,_.classList.remove("invisible","opacity-0"),_.classList.add("visible","opacity-100"),E.classList.remove("scale-95"),E.classList.add("scale-100")},t.querySelector("#cancel-delete-btn").addEventListener("click",()=>{_.classList.add("invisible","opacity-0"),_.classList.remove("visible","opacity-100"),E.classList.add("scale-95"),E.classList.remove("scale-100"),S=null}),t.querySelector("#confirm-delete-btn").addEventListener("click",()=>{if(S){const j=p.cheatsheets.findIndex(B=>B.id===S);if(j>-1){const B=localStorage.getItem("cheatsheetsLayout");if(B){let r=JSON.parse(B);r=r.filter(h=>h!==S),localStorage.setItem("cheatsheetsLayout",JSON.stringify(r))}p.cheatsheets.splice(j,1),H(),c()}}})};c()}function Ee(t,i){const o=parseInt(i);let n=p.cheatsheets.find(b=>b.id===o);if(!n){t.innerHTML=`<div class="p-10 text-center text-gray-500">${e("sheet_not_found")}</div>`;return}n.images||(n.images=[]);const l=()=>{t.innerHTML=`
        <div class="h-full flex flex-col relative bg-white overflow-hidden">
            <!-- Header -->
            <!-- Header -->
            <header class="flex items-center justify-start gap-6 px-8 py-6 border-b border-gray-100 bg-white z-10 shrink-0">
                <button id="back-btn" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100 shrink-0">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                
                <div class="flex items-center gap-2">
                    <!-- Title Display -->
                    <h1 id="display-title" class="text-3xl font-bold text-dark truncate max-w-xl cursor-default">${n.title}</h1>
                    
                    <!-- Title Input (Hidden by default) -->
                    <input type="text" id="title-input" value="${n.title}" class="hidden text-3xl font-bold text-dark bg-transparent border-b-2 border-primary outline-none focus:ring-0 placeholder-gray-300 min-w-[200px]" placeholder="${e("untitled_note")}">
                    


                    <!-- Delete Button -->
                    <button id="delete-btn" class="p-2 text-gray-300 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors ml-2" title="${e("delete")}">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                </div>
            </header>

            <!-- Main Split Content -->
            <div id="split-container" class="flex-1 flex overflow-hidden relative">
                
                <!-- LEFT PANE: Editor -->
                <div id="left-pane" class="w-1/2 flex flex-col p-8 bg-white" style="min-width: 300px;">
                    <div class="flex justify-between items-center mb-4 shrink-0">
                        <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">${e("markdown_editor")}</span>
                        <span class="text-xs text-gray-300">${e("supports_md")}</span>
                    </div>
                    <textarea id="content-editor" class="flex-1 w-full resize-none text-lg text-gray-700 leading-relaxed focus:outline-none placeholder-gray-300 font-medium bg-transparent custom-scrollbar" placeholder="${e("start_typing_placeholder")}">${n.content||""}</textarea>
                </div>

                <!-- RESIZER -->
                <div id="resizer" class="w-1.5 bg-gray-100 hover:bg-primary/50 cursor-col-resize transition-colors z-20 flex items-center justify-center group shrink-0 relative">
                     <div class="w-0.5 h-8 bg-gray-300 group-hover:bg-white rounded-full pointer-events-none"></div>
                </div>

                <!-- RIGHT PANE: Attachments -->
                <div id="right-pane" class="flex-1 flex flex-col p-8 bg-gray-50 overflow-y-auto custom-scrollbar" style="min-width: 280px;">
                    <div class="flex justify-between items-center mb-6 shrink-0 whitespace-nowrap gap-4">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider overflow-hidden text-ellipsis">${e("attachments_title")}</h3>
                         <button id="add-img-btn" class="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg hover:border-primary hover:text-primary transition-all text-xs font-bold shadow-sm shrink-0">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                            ${e("add_image")}
                        </button>
                    </div>

                    ${n.images.length>0?`
                        <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                            ${n.images.map((b,s)=>`
                                <div class="relative group rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white aspect-video cursor-zoom-in" onclick="openImageViewer(${s})">
                                    <img src="${b}" class="w-full h-full object-cover">
                                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                    <button class="absolute top-2 right-2 p-1.5 bg-white/90 text-primary rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md hover:bg-primary hover:text-white transform hover:scale-110" onclick="event.stopPropagation(); deleteImage(${s})">
                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                            `).join("")}
                        </div>
                    `:`
                        <div class="flex-1 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-3xl m-4 pb-20">
                            <svg class="w-12 h-12 mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <p class="text-sm font-medium opacity-50">${e("no_images_yet")}</p>
                        </div>
                    `}
                </div>
            </div>

            <!-- Delete Confirmation Modal -->
             <div id="delete-note-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">${e("delete_note_confirm")}</h3>
                    <p class="text-sm text-gray-400 mb-6">${e("action_undone")}</p>
                    
                    <div class="flex gap-3">
                         <button id="cancel-delete-modal-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">${e("cancel")}</button>
                         <button id="confirm-delete-modal-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">${e("delete")}</button>
                    </div>
                </div>
            </div>

            <!-- Image Viewer Modal -->
            <div id="image-viewer-modal" class="fixed inset-0 z-[100] bg-black/90 hidden flex items-center justify-center opacity-0 transition-opacity duration-300" onclick="closeImageViewer()">
                 <img id="image-viewer-img" src="" class="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl scale-95 transition-transform duration-300" onclick="event.stopPropagation()">
                 <button class="absolute top-6 right-6 text-white/50 hover:text-white p-2 transition-colors">
                    <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                 </button>
            </div>

            <!-- Delete Image Confirmation Modal -->
             <div id="delete-image-modal" class="fixed inset-0 bg-white/10 backdrop-blur-sm z-[110] flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">${e("delete_image")}</h3>
                    <p class="text-sm text-gray-400 mb-6">${e("delete_image_desc")}</p>
                    
                    <div class="flex gap-3">
                         <button id="cancel-delete-img-btn" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">${e("cancel")}</button>
                         <button id="confirm-delete-img-btn" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">${e("delete")}</button>
                    </div>
                </div>
            </div>

            <!-- Hidden File Input -->
            <input type="file" id="file-input" accept="image/*" class="hidden">
        </div>
        `,c()},c=()=>{const b=t.querySelector("#title-input"),s=t.querySelector("#display-title"),a=t.querySelector("#edit-title-btn"),d=t.querySelector("#content-editor"),u=t.querySelector("#back-btn"),g=t.querySelector("#delete-btn"),w=t.querySelector("#add-img-btn"),L=t.querySelector("#file-input"),x=t.querySelector("#resizer"),f=t.querySelector("#left-pane"),M=t.querySelector("#split-container"),S=t.querySelector("#delete-note-modal"),_=S.querySelector("div"),E=t.querySelector("#cancel-delete-modal-btn"),j=t.querySelector("#confirm-delete-modal-btn"),B=t.querySelector("#delete-image-modal"),r=B.querySelector("div"),h=t.querySelector("#cancel-delete-img-btn"),v=t.querySelector("#confirm-delete-img-btn");u.onclick=()=>window.navigateTo("cheatsheets");const $=()=>{n.title=b.value.trim()||e("untitled_note"),n.content=d.value,s.textContent=n.title,H()},m=()=>{s.classList.add("hidden"),b.classList.remove("hidden"),b.focus()},y=()=>{s.classList.remove("hidden"),b.classList.add("hidden"),$()};a&&(a.onclick=m),b.onblur=y,b.onkeydown=I=>{I.key==="Enter"&&y()},d.onblur=$;let k=!1;x.addEventListener("pointerdown",I=>{k=!0,x.setPointerCapture(I.pointerId),M.classList.add("select-none"),x.classList.add("bg-primary/50")}),x.addEventListener("pointermove",I=>{if(!k)return;const C=M.getBoundingClientRect(),T=I.clientX-C.left,A=200,V=C.width-200,W=Math.max(A,Math.min(T,V))/C.width*100;f.style.width=`${W}%`}),x.addEventListener("pointerup",I=>{k=!1,x.releasePointerCapture(I.pointerId),M.classList.remove("select-none"),x.classList.remove("bg-primary/50")});const z=()=>{S.classList.add("invisible","opacity-0"),S.classList.remove("visible","opacity-100"),_.classList.add("scale-95"),_.classList.remove("scale-100")};g.onclick=()=>{S.classList.remove("invisible","opacity-0"),S.classList.add("visible","opacity-100"),_.classList.remove("scale-95"),_.classList.add("scale-100")},E.onclick=z,j.onclick=()=>{const I=p.cheatsheets.findIndex(C=>C.id===o);if(I>-1){p.cheatsheets.splice(I,1);const C=localStorage.getItem("cheatsheetsLayout");if(C){let T=JSON.parse(C);T=T.filter(A=>parseInt(A)!==o),localStorage.setItem("cheatsheetsLayout",JSON.stringify(T))}H(),window.navigateTo("cheatsheets")}},w.onclick=()=>L.click(),L.onchange=I=>{const C=I.target.files[0];if(C){const T=new FileReader;T.onload=A=>{n.images.push(A.target.result),H(),l()},T.readAsDataURL(C)}};let D=null;const q=()=>{B.classList.add("invisible","opacity-0"),B.classList.remove("visible","opacity-100"),r.classList.add("scale-95"),r.classList.remove("scale-100"),D=null};window.deleteImage=I=>{D=I,B.classList.remove("invisible","opacity-0"),B.classList.add("visible","opacity-100"),r.classList.remove("scale-95"),r.classList.add("scale-100")},h.onclick=q,v.onclick=()=>{D!==null&&(n.images.splice(D,1),H(),l(),q())},window.openImageViewer=I=>{const C=document.getElementById("image-viewer-modal"),T=document.getElementById("image-viewer-img");T.src=n.images[I],C.classList.remove("hidden"),setTimeout(()=>{C.classList.remove("opacity-0"),T.classList.remove("scale-95"),T.classList.add("scale-100")},10)},window.closeImageViewer=()=>{const I=document.getElementById("image-viewer-modal"),C=document.getElementById("image-viewer-img");I.classList.add("opacity-0"),C.classList.remove("scale-100"),C.classList.add("scale-95"),setTimeout(()=>{I.classList.add("hidden"),C.src=""},300)}};l()}function Be(t){p.notebook||(p.notebook={notes:[{id:1,title:e("welcome_title"),content:e("welcome_body"),date:new Date().toISOString(),paperStyle:"lined"}]},H());let i=p.notebook.notes.length>0?p.notebook.notes[0].id:null,o=0;const n=a=>{a&&(a.pages||(a.pages=[a.content||""],delete a.content))},l=()=>p.notebook.notes.find(a=>a.id===i),c=()=>{const a=l();n(a);const d=a?a.pages[o]:"";t.innerHTML=`
        <div class="p-8 h-full flex flex-col relative bg-transparent overflow-hidden">
            <!-- Header (Courses Template Style) -->
            <header class="flex justify-between items-center mb-8 shrink-0">
                 <div class="flex items-center gap-4">
                    <button onclick="window.navigateTo('dashboard')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <h1 class="text-3xl font-bold text-dark font-handwriting">${e("digital_notebook")}</h1>
                    
                    <!-- Editor Toolbar -->
                    <div class="ml-6 pl-6 border-l border-gray-300/50 flex items-center ${a?"":"opacity-50 pointer-events-none"} transition-opacity relative">
                         <!-- Unified Toolbar Container -->
                         <div class="flex items-center bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden divide-x divide-gray-100">
                             <!-- Style Buttons -->
                             <button class="toolbar-btn w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all" data-cmd="bold" title="${e("bold")}"><b class="font-serif">B</b></button>
                             <button class="toolbar-btn w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all italic" data-cmd="italic" title="${e("italic")}"><i class="font-serif">I</i></button>
                             <button class="toolbar-btn w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all underline" data-cmd="underline" title="${e("underline")}"><u class="font-serif">U</u></button>
                             
                             <!-- Color Picker -->
                             <button id="btn-color-picker" class="toolbar-btn w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all" title="${e("text_color")}">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                             </button>
                             
                             <!-- Highlight Picker -->
                             <button id="btn-highlight-picker" class="toolbar-btn w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all" title="${e("highlight_color")}">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                             </button>
                             
                             <!-- Align Button -->
                             <button class="toolbar-btn w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all" data-cmd="cycleAlign" data-state="left" title="${e("align_text")}">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h16" /></svg>
                             </button>
                         </div>

                         <!-- Formatting Dropdowns (Placed absolutely relative to toolbar wrapper) -->
                         <div id="color-dropdown" class="absolute top-full left-6 mt-2 p-2 bg-white rounded-xl shadow-xl border border-gray-100 grid grid-cols-4 gap-1 w-32 hidden z-50">
                            <button class="w-6 h-6 rounded-full bg-black border border-gray-200 hover:scale-110 transition-transform" data-color="#000000"></button>
                            <button class="w-6 h-6 rounded-full bg-gray-500 border border-gray-200 hover:scale-110 transition-transform" data-color="#6B7280"></button>
                            <button class="w-6 h-6 rounded-full bg-red-500 border border-gray-200 hover:scale-110 transition-transform" data-color="#EF4444"></button>
                            <button class="w-6 h-6 rounded-full bg-orange-500 border border-gray-200 hover:scale-110 transition-transform" data-color="#F97316"></button>
                            <button class="w-6 h-6 rounded-full bg-yellow-400 border border-gray-200 hover:scale-110 transition-transform" data-color="#FACC15"></button>
                            <button class="w-6 h-6 rounded-full bg-green-500 border border-gray-200 hover:scale-110 transition-transform" data-color="#10B981"></button>
                            <button class="w-6 h-6 rounded-full bg-blue-500 border border-gray-200 hover:scale-110 transition-transform" data-color="#3B82F6"></button>
                            <button class="w-6 h-6 rounded-full bg-purple-500 border border-gray-200 hover:scale-110 transition-transform" data-color="#8B5CF6"></button>
                         </div>

                         <div id="highlight-dropdown" class="absolute top-full left-24 mt-2 p-2 bg-white rounded-xl shadow-xl border border-gray-100 grid grid-cols-4 gap-1 w-32 hidden z-50">
                            <button class="w-6 h-6 rounded-full bg-yellow-200 border border-gray-200 hover:scale-110 transition-transform" data-color="#fef08a"></button>
                            <button class="w-6 h-6 rounded-full bg-green-200 border border-gray-200 hover:scale-110 transition-transform" data-color="#bbf7d0"></button>
                            <button class="w-6 h-6 rounded-full bg-blue-200 border border-gray-200 hover:scale-110 transition-transform" data-color="#bfdbfe"></button>
                            <button class="w-6 h-6 rounded-full bg-pink-200 border border-gray-200 hover:scale-110 transition-transform" data-color="#fbcfe8"></button>
                            <button class="w-6 h-6 rounded-full bg-purple-200 border border-gray-200 hover:scale-110 transition-transform" data-color="#e9d5ff"></button>
                            <button class="w-6 h-6 rounded-full bg-orange-200 border border-gray-200 hover:scale-110 transition-transform" data-color="#fed7aa"></button>
                            <button class="w-6 h-6 rounded-full bg-gray-200 border border-gray-200 hover:scale-110 transition-transform" data-color="#e5e7eb"></button>
                            <button class="w-6 h-6 rounded-full bg-white border border-gray-200 hover:scale-110 transition-transform flex items-center justify-center" data-color="transparent">
                                <svg class="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                         </div>
                    </div>
                 </div>
                 
                 <div class="flex items-center gap-3">
                     <!-- Paper Style Toggle -->
                     <button id="btn-paper-style" class="p-2 bg-white rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-dark transition-all" title="${e("toggle_paper")}">
                        ${a&&a.paperStyle==="grid"?'<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z M9 3v18 M15 3v18 M3 9h18 M3 15h18" /></svg>':'<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>'}           </button>
                     
                     <!-- Page Navigation -->
                     <div class="flex items-center bg-white rounded-xl shadow-sm border border-gray-200 p-1">
                        <button id="btn-prev-page" class="p-1.5 text-gray-400 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors ${o===0?"opacity-30 cursor-not-allowed":""}" ${o===0?"disabled":""} title="${e("prev_page")}">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <span class="text-xs font-bold text-gray-500 w-16 text-center select-none uppercase tracking-wider">${e("page_num")} ${o+1}</span>
                        <button id="btn-next-page" class="p-1.5 text-gray-400 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors" title="${e("next_page")}">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                     </div>

                     <button id="btn-add-note" class="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-bold text-sm shadow-lg shadow-primary/30 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                        ${e("new_notebook")}
                    </button>
                 </div>
            </header>

            <!-- Notebook Content -->
            <div class="flex-1 w-full max-w-7xl mx-auto min-h-0 bg-white rounded-3xl shadow-2xl flex overflow-hidden relative border border-gray-200">
                
                <!-- Left Sidebar (Index) -->
                <div class="w-80 bg-gray-50 flex-none flex flex-col border-r border-gray-200 z-10 shrink-0">
                    <div class="p-6 border-b border-gray-200/50 bg-gray-50">
                        <h2 class="text-xl font-bold text-dark flex items-center gap-2">
                            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                            ${e("index")}
                        </h2>
                    </div>

                    <div class="flex-1 overflow-hidden p-3 space-y-2" style="scrollbar-width: none;">
                        ${p.notebook.notes.map(u=>`
                            <div class="note-item p-4 rounded-xl cursor-pointer transition-all border border-transparent ${u.id===i?"bg-white shadow-md border-gray-100":"hover:bg-white/60 hover:border-gray-100 text-gray-500"}" data-id="${u.id}">
                                <h4 class="font-bold text-dark truncate mb-1">${u.title||e("untitled_note")}</h4>
                                <p class="text-xs text-gray-400 truncate">${s(u.pages?u.pages[0]:u.content||"").substring(0,40)||e("empty_note")}</p>
                                <div class="mt-2 text-[10px] text-gray-300 font-medium tracking-wide flex justify-between items-center">
                                   <span>${new Date(u.date).toLocaleDateString()}</span>
                                   ${u.id===i?`
                                   <button class="btn-delete-note p-1 text-gray-300 hover:text-primary transition-colors" title="${e("delete_page")}">
                                        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                   </button>
                                   `:""}
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- SPIRAL BINDING (The "Wire" Effect) -->
                <div class="w-12 h-full bg-[#e5e7eb] relative shrink-0 flex flex-col items-center justify-start py-4 gap-6 shadow-inner z-20 border-r border-[#d1d5db]" style="background-image: radial-gradient(circle at 0% 50%, rgba(255,255,255,0.5), transparent), radial-gradient(circle at 100% 50%, rgba(0,0,0,0.05), transparent);">
                     ${Array(40).fill(0).map(()=>`
                        <div class="relative w-full h-8 group-spiral">
                            <!-- Hole Left -->
                            <div class="absolute left-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#333] rounded-full shadow-inner opacity-80"></div>
                            <!-- Hole Right -->
                            <div class="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#333] rounded-full shadow-inner opacity-80"></div>
                            <!-- Wire Ring (3D effect) -->
                            <div class="absolute left-2.5 right-2.5 top-1/2 -translate-y-[60%] h-4 bg-gradient-to-b from-gray-400 via-gray-100 to-gray-500 rounded-lg transform -rotate-6 shadow-md border border-gray-400"></div>
                        </div>
                     `).join("")}
                </div>

                <!-- Right Page (Content) -->
                <div class="flex-1 bg-white h-full flex flex-col relative z-0">
                    ${a?`
                        <!-- Toolbar Removed (Moved to Header) -->

                        <!-- Paper Content -->
                        <div class="flex-1 overflow-hidden relative bg-white">
                             <!-- Paper Lines Overlay -->
                             <div class="absolute inset-0 pointer-events-none z-0" 
                                  style="${a&&a.paperStyle==="grid"?"background-image: linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px); background-size: 2.5rem 2.5rem; margin-top: 3.5rem;":"background-image: linear-gradient(#e5e7eb 1px, transparent 1px); background-size: 100% 2.5rem; margin-top: 3.5rem;"}">
                             </div>
                             
                             <!-- Red Margin Line -->
                             <div class="absolute top-0 bottom-0 left-10 w-px bg-red-100/50 z-0 pointer-events-none border-r border-red-200 h-full"></div>

                             <div class="relative z-10 px-16 pt-14 pb-12 min-h-full">
                                  <!-- Title Input -->
                                  <input type="text" id="note-title-input" class="w-full text-4xl font-bold text-dark bg-transparent border-none focus:ring-0 placeholder-gray-300 mb-10 h-10 p-0 font-display leading-[2.5rem]" value="${a.title}" placeholder="${e("page_title_placeholder")}">
                                  
                                  <!-- Editor contenteditable -->
                                  <div id="note-editor" 
                                       class="w-full min-h-[60vh] text-lg text-gray-700 leading-10 focus:outline-none empty:before:content-[attr(placeholder)] empty:before:text-gray-300"
                                       contenteditable="true" 
                                       placeholder="${e("start_writing")}"
                                  >
                                    ${d}
                                  </div>
                             </div>
                        </div>
                    `:`
                        <!-- Empty State -->
                        <div class="flex-1 flex flex-col items-center justify-center text-gray-300">
                             <div class="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                             </div>
                             <h3 class="text-xl font-bold text-gray-400">${e("select_page_msg")}</h3>
                        </div>
                    `}
                </div>
            </div>

            <!-- Tear Out Confirmation Modal -->
             <div id="delete-note-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300">
                <div class="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xs transform scale-95 transition-all duration-300 text-center">
                    <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                         <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">${e("tear_out_confirm")}</h3>
                    <p class="text-sm text-gray-400 mb-6">${e("remove_note_desc")}</p>
                    
                    <div class="flex gap-3">
                         <button id="cancel-delete-note" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">${e("cancel")}</button>
                         <button id="confirm-delete-note" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">${e("tear_out")}</button>
                    </div>
                </div>
            </div>
        </div>
        `,b(a)},b=a=>{t.querySelectorAll(".note-item").forEach(S=>{S.addEventListener("click",_=>{_.target.closest(".btn-delete-note")||(i=parseInt(S.dataset.id),o=0,c())})});const d=t.querySelector("#btn-add-note");d&&d.addEventListener("click",()=>{const S={id:Date.now(),title:e("new_notebook"),pages:[""],date:new Date().toISOString(),category:"General",paperStyle:"lined"};p.notebook.notes.push(S),i=S.id,H(),c()});const u=t.querySelector("#delete-note-modal"),g=u.querySelector("div"),w=t.querySelector("#cancel-delete-note"),L=t.querySelector("#confirm-delete-note");let x=null;const f=()=>{u.classList.add("invisible","opacity-0"),u.classList.remove("visible","opacity-100"),g.classList.add("scale-95"),g.classList.remove("scale-100"),x=null},M=S=>{x=S,u.classList.remove("invisible","opacity-0"),u.classList.add("visible","opacity-100"),g.classList.remove("scale-95"),g.classList.add("scale-100")};if(t.querySelectorAll(".btn-delete-note").forEach(S=>{S.addEventListener("click",_=>{_.stopPropagation(),M(parseInt(S.closest(".note-item").dataset.id))})}),w.addEventListener("click",f),L.addEventListener("click",()=>{x&&(p.notebook.notes=p.notebook.notes.filter(S=>S.id!==x),i===x&&(i=p.notebook.notes.length>0?p.notebook.notes[0].id:null),H(),c())}),a){const S=t.querySelector("#note-title-input");S.addEventListener("input",m=>{const y=p.notebook.notes.find(k=>k.id===i);y&&(y.title=m.target.value,H())}),S.addEventListener("blur",c);const _=t.querySelector("#note-editor");_.addEventListener("input",()=>{const m=p.notebook.notes.find(y=>y.id===i);m&&(m.pages||(m.pages=[""]),m.pages[o]=_.innerHTML,H())}),t.querySelectorAll(".toolbar-btn").forEach(m=>{m.addEventListener("click",y=>{y.preventDefault();const k=m.dataset.cmd;if(k==="cycleAlign"){const z=["left","center","right"],D=m.dataset.state||"left",I=(z.indexOf(D)+1)%z.length,C=z[I],T={left:"justifyLeft",center:"justifyCenter",right:"justifyRight"};document.execCommand(T[C],!1,null),m.dataset.state=C;const A=m.querySelector("path");if(A){const V={left:"M4 6h16M4 12h10M4 18h16",center:"M4 6h16M7 12h10M4 18h16",right:"M4 6h16M10 12h10M4 18h16"};A.setAttribute("d",V[C])}}else{const z=m.dataset.val||null;document.execCommand(k,!1,z)}_.focus()})});const E=t.querySelector("#btn-next-page");E&&E.addEventListener("click",()=>{const m=p.notebook.notes.find(y=>y.id===i);m&&(o<m.pages.length-1?o++:(m.pages.push(""),o++,H()),c())});const j=t.querySelector("#btn-prev-page");j&&j.addEventListener("click",()=>{o>0&&(o--,c())});const B=t.querySelector("#btn-color-picker"),r=t.querySelector("#color-dropdown");B&&r&&(B.addEventListener("click",m=>{if(m.stopPropagation(),m.preventDefault(),r.classList.contains("hidden")){r.classList.remove("hidden");const y=k=>{!r.contains(k.target)&&k.target!==B&&!B.contains(k.target)&&(r.classList.add("hidden"),document.removeEventListener("click",y))};setTimeout(()=>document.addEventListener("click",y),0)}else r.classList.add("hidden")}),r.querySelectorAll("button").forEach(m=>{m.addEventListener("click",y=>{y.stopPropagation(),y.preventDefault();const k=m.dataset.color;document.execCommand("foreColor",!1,k),r.classList.add("hidden"),_.focus()})}));const h=t.querySelector("#btn-highlight-picker"),v=t.querySelector("#highlight-dropdown");h&&v&&(h.addEventListener("click",m=>{if(m.stopPropagation(),m.preventDefault(),v.classList.contains("hidden")){v.classList.remove("hidden"),r&&r.classList.add("hidden");const y=k=>{!v.contains(k.target)&&k.target!==h&&!h.contains(k.target)&&(v.classList.add("hidden"),document.removeEventListener("click",y))};setTimeout(()=>document.addEventListener("click",y),0)}else v.classList.add("hidden")}),v.querySelectorAll("button").forEach(m=>{m.addEventListener("click",y=>{y.stopPropagation(),y.preventDefault();const k=m.dataset.color;document.execCommand("hiliteColor",!1,k),v.classList.add("hidden"),_.focus()})}));const $=t.querySelector("#btn-paper-style");$&&$.addEventListener("click",()=>{const m=p.notebook.notes.find(y=>y.id===i);m&&(m.paperStyle=m.paperStyle==="grid"?"lined":"grid",H(),c())})}},s=a=>{let d=document.createElement("DIV");return d.innerHTML=a,d.textContent||d.innerText||""};c()}document.querySelector("#app").innerHTML=`
  <nav id="sidebar" class="w-16 h-full bg-white border-r border-gray-200 flex flex-col items-center py-6 shrink-0 transition-all duration-300"></nav>
  <main id="dashboard" class="flex-1 h-full overflow-y-auto relative"></main>
  <div id="modal-container"></div>
`;if(p.user){if(p.user.customThemeRgb)document.documentElement.style.setProperty("--color-primary-rgb",p.user.customThemeRgb);else if(p.user.themePreference){const t={blue:"37 99 235",purple:"147 51 234",pink:"236 72 153",emerald:"5 150 105",orange:"234 88 12",rose:"225 29 72",lila:"178 106 251"};t[p.user.themePreference]&&document.documentElement.style.setProperty("--color-primary-rgb",t[p.user.themePreference])}p.user.bgPreference==="theme"?document.body.style.backgroundColor="rgb(var(--color-primary-rgb) / 0.04)":document.body.style.backgroundColor=""}const O=document.querySelector("#dashboard");window.navigateTo=(t,i={})=>{const o=t==="course-detail"?"courses":t;de(document.querySelector("#sidebar"),o),O.innerHTML="",t==="dashboard"?ke(O):t==="courses"?Se(O):t==="course-detail"?Me(O,i.id):t==="exams"?Ce(O):t==="cheatsheets"?je(O):t==="cheatsheet-detail"?Ee(O,i.id):t==="notebook"?Be(O):O.innerHTML=`
            <div class="flex flex-col items-center justify-center h-full p-10 text-center">
                <div class="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mb-6 animate-pulse">
                     <svg class="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                </div>
                <h2 class="text-3xl font-bold text-dark mb-2">Coming Soon</h2>
                <p class="text-gray-400 max-w-sm">The <b>${t}</b> page is currently under construction. Stay tuned for updates!</p>
                <button onclick="window.navigateTo('dashboard')" class="mt-8 px-6 py-2.5 bg-primary text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:bg-primary-dark transition-all transform hover:-translate-y-0.5">
                    Go to Dashboard
                </button>
            </div>
        `};window.logout=()=>{const t=`
        <div id="logout-modal" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-dark/50 backdrop-blur-sm transition-opacity opacity-0" id="logout-backdrop"></div>
            <div class="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-6 transform scale-95 opacity-0 transition-all" id="logout-card">
                <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                </div>
                <h3 class="text-xl font-bold text-dark text-center mb-2">${e("logout_confirmation_title")}</h3>
                <p class="text-gray-500 text-center text-sm mb-6">${e("logout_confirmation_desc")}</p>
                
                <div class="flex gap-3">
                    <button id="btn-cancel-logout" class="flex-1 py-2.5 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">${e("cancel")}</button>
                    <button id="btn-confirm-logout" class="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90 transition-all text-sm">${e("logout")}</button>
                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML("beforeend",t),requestAnimationFrame(()=>{document.getElementById("logout-backdrop").classList.remove("opacity-0");const o=document.getElementById("logout-card");o.classList.remove("scale-95","opacity-0"),o.classList.add("scale-100","opacity-100")});const i=()=>{const o=document.getElementById("logout-modal"),n=document.getElementById("logout-backdrop"),l=document.getElementById("logout-card");n.classList.add("opacity-0"),l.classList.remove("scale-100","opacity-100"),l.classList.add("scale-95","opacity-0"),setTimeout(()=>o.remove(),300)};document.getElementById("btn-cancel-logout").addEventListener("click",i),document.getElementById("logout-backdrop").addEventListener("click",i),document.getElementById("btn-confirm-logout").addEventListener("click",()=>{localStorage.removeItem("studyhub_data"),localStorage.removeItem("dashboardLayout"),localStorage.removeItem("coursesLayout"),localStorage.removeItem("cheatsheetsLayout"),localStorage.removeItem("grade_calc_data"),localStorage.removeItem("habit_tracker_data_v3"),localStorage.removeItem("pomodoro_settings"),localStorage.removeItem("dashboard_notes_list"),localStorage.removeItem("scratchpad_current"),localStorage.removeItem("scratchpad_gallery"),localStorage.removeItem("photo_widget_image"),localStorage.removeItem("photo_widget_zoom"),location.reload()})};window.navigateTo("dashboard");p.user.isSetup||_e(document.querySelector("#modal-container"),()=>{window.navigateTo("dashboard")});
