(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();const U={user:{name:"",role:"Student",university:"",department:"",avatar:"",isSetup:!1,isPremium:!1,language:"en",themePreference:"emerald",bgPreference:"default"},stats:{courses:{total:0,new:0},completed:{total:0,label:"No courses completed",count:0},challenges:{total:0,label:"No active challenges"},streak:{total:0,label:"No streak yet"}},chartData:[{day:"Mon",study:0,exam:0},{day:"Tue",study:0,exam:0},{day:"Wed",study:0,exam:0},{day:"Thu",study:0,exam:0},{day:"Fri",study:0,exam:0},{day:"Sat",study:0,exam:0},{day:"Sun",study:0,exam:0}],examSchedule:[{date:15,day:"W"},{date:16,day:"T"},{date:17,day:"F"},{date:18,day:"S"},{date:19,day:"S"},{date:20,day:"M"},{date:21,day:"T"}],courses:[],notebook:{notes:[{id:1,title:"My First Note",content:"<h3>Welcome to your Digital Notebook!</h3><p>This looks just like a spiral notebook, but acts like a Word doc.</p><ul><li><b>Bold</b> text</li><li><i>Italic</i> text</li></ul>",date:new Date().toISOString(),category:"General"}]},todos:[],weeklySchedule:{events:{}},exams:[],cheatsheets:[]},se=localStorage.getItem("studyhub_data");let K=U;if(se)try{const t=JSON.parse(se);K={...U,...t},K.exams||(K.exams=U.exams),K.cheatsheets||(K.cheatsheets=U.cheatsheets)}catch(t){console.error("Failed to parse stored data",t)}const m=K;function D(){try{localStorage.setItem("studyhub_data",JSON.stringify(m))}catch(t){console.error("Failed to save data to localStorage:",t),t.name==="QuotaExceededError"&&console.warn("LocalStorage quota exceeded. Consider clearing old data.")}}const ce={en:{dashboard:"Dashboard",schedule:"Schedule",courses:"Courses",exams:"Exams",notebook:"Notebook",cheatsheets:"Cheatsheets",pomodoro:"Pomodoro",settings:"Settings",notes:"Notes",cheats:"Cheats",hello:"Hello",search_placeholder:"Search...",premium:"Premium",premium_active:"Premium Active",total_courses:"Total Courses",completed:"Completed",studyai:"StudyAI",hours_spent:"Hours Spent",time:"Time",quick_notes:"Quick Notes",scratchpad:"Scratchpad",scratchpad_browse:"Browse",scratchpad_draw:"Draw",scratchpad_save_gallery:"Save to Gallery",scratchpad_clear:"Clear",scratchpad_select_image:"Select an image to load",scratchpad_no_sketches:"No saved sketches",focus_timer:"Focus Timer",profile:"Profile",calendar:"Calendar",todo_list:"Todo List",calculator:"Calculator",bookmarks:"Bookmarks",grade_calculation:"Grade Calculation",stopwatch:"Stopwatch",mini_games:"Mini Games",daily_habits:"Daily Habits",weekly_schedule:"Weekly Schedule",photo_frame:"Photo Frame",general:"General",language:"Language",about:"About",developer:"Developer",theme_color:"Theme Color",personalize_accent:"Personalize your accent color.",background_style:"Background Style",default:"Default",tinted:"Tinted",preview_mode:"Preview Mode",preview_mode_desc:"The entire app adapts to your adjustments immediately.",save_layout:"Save Current Layout",reset_layout:"Reset Default Layout",data_backup:"Data Backup & Restore",export_data:"Export Data",import_data:"Import Data",current_plan:"Current Plan",basic_plan:"Basic Plan",free:"Free",upgrade:"Upgrade",active:"Active",changes_saved:"Changes are saved automatically.",version:"Version",basic_edition:"Basic Edition",available_widgets:"Available Widgets",drag_remove:"Drag widget here to remove",loading_summary:"Loading summary...",layout_settings:"Layout Settings",layout_desc:"Customize how your dashboard looks.",data_desc:"Export your data to JSON or restore from a backup.",premium_plan:"Premium Plan",remove_avatar:"Remove Avatar",your_name_placeholder:"Your Name",uni_name_placeholder:"University Name",major_placeholder:"Major / Dept",developer_mode:"Developer Mode",dev_desc:"Experimental features and overrides.",enable_premium:"Enable Premium",unlock_desc:"Unlocks all premium features.",lets_known_you:"Let's get to know you",call_you:"Tell us what to call you.",full_name:"Full Name",academic_profile:"Academic Profile",personalize_dashboard:"This helps us personalize your dashboard.",university:"University / School",department:"Department / Major",make_yours:"Make it yours",choose_base_color:"Choose a base color and tweak it.",base_color:"Base Color",next_step:"Next Step",get_started:"Get Started",back:"Back",step:"Step",name_placeholder:"e.g. John Doe",uni_placeholder:"e.g. MIT",dept_placeholder:"e.g. Computer Science",clean_gray:"Clean Gray/White",theme_tint:"Theme Tint",pastel_look:"Pastel Look",add_photo_widget:"Add Photo Widget",manage_widgets:"Manage Widgets",all_widgets_active:"All widgets are active",coming_soon:"Coming Soon",optional:"Optional",summary_prefix:"You have",summary_suffix:"",classes:"classes",todos:"to-dos",months:["January","February","March","April","May","June","July","August","September","October","November","December"],days_short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],no_events:"No events scheduled.",events_on:"Events on",tbd:"TBD",clear_schedule:"Clear Schedule",clear_all_q:"Clear All?",clear_all_desc:"This will remove all entries.",yes:"Yes",no:"No",tasks_count:"Tasks",add_new_task_placeholder:"Add a new task...",no_tasks_yet:"No tasks yet",add_one_to_start:"Add one above to get started",delete_task_confirm:"Delete this task?",cancel:"Cancel",delete:"Delete",save:"Save",task_name_placeholder:"Task Name",add_task_prompt:"Add Task for",logout:"Logout",hour_unit:"hrs",personal:"Personal",all_day:"All Day",basic:"Basic",current_plan:"Current Plan",ask_me_anything:"Ask me anything...",ai_resp_default:"That is a great question. I am currently in demo mode, but imagine I just gave you a brilliant, personalized answer to help you ace your exams.",ai_resp_schedule:"I can help you organize that. Let us break it down into smaller tasks. Check your Todo List and try to allocate 25-minute focus blocks for each.",ai_resp_motivation:"You got this. Remember why you started. Every small step counts. Take a deep breath and crush it.",ai_resp_help:"I am here for you. Try asking me about a specific subject, or tell me what you are struggling with.",exams_title:"Exams",add_exam:"Add Exam",no_exams_yet:"No Exams Yet",no_exams_desc:"Relax! You have no upcoming exams scheduled. Add one to start tracking.",days_left:"DAYS LEFT",edit_profile:"Edit Profile",save_changes:"Save Changes",fill_all_fields:"Please fill in all fields",name_label:"Name",university_label:"University",department_label:"Department",today_caps:"TODAY",passed_caps:"PASSED",new_exam_setup:"New Exam Setup",edit_exam_setup:"Edit Exam Setup",step_1_basic:"Step 1 of 2: Basic Info",step_2_logistics:"Step 2 of 2: Logistics",course_name:"Course Name",course_code:"Course Code",exam_type:"Exam Type",date:"Date",time:"Time",location_platform:"Location / Platform",delete_exam_confirm:"Delete Exam?",action_undone:"This action cannot be undone.",edit_exam:"Edit Exam",delete_exam:"Delete Exam",my_courses:"My Courses",new_course:"New Course",no_courses_yet:"No Courses Yet",no_courses_desc:"Add your first course to get started tracking your progress.",course_caps:"COURSE",no_details:"No details added",view_details:"View details",new_course_setup:"New Course Setup",create_course:"Create Course",instructor:"Instructor",email:"Email",schedule_time:"Schedule",note_optional:"Note (Optional)",delete_course_confirm:"Delete Course?",edit_course_setup:"Edit Course Setup",note_placeholder:"Any initial thoughts...",course_not_found:"Course not found",back_to_courses:"Back to Courses",course_info:"COURSE INFO",edit:"Edit",not_set:"Not set",resources:"Resources",add_file:"Add File",no_resources_yet:"No resources yet",unknown_type:"Unknown Type",delete_resource_confirm:"Delete Resource?",gemini_powered:"Gemini Powered",chat_history:"Chat History",new_chat:"New Chat",ask_question_placeholder:"Ask a question about",ai_mistakes_disclaimer:"AI can make mistakes. Verify important info.",delete_session_confirm:"Delete Chat?",session_deleted_desc:"This chat session will be deleted.",clear_history_confirm:"Clear History?",chats_lost_desc:"Chats will be permanently lost.",new_conversation:"New Conversation",instructor_name:"INSTRUCTOR NAME",save_changes_btn:"Save Changes",digital_notebook:"Digital Notebook",welcome_notebook:"Welcome to Notebook",welcome_msg:"Welcome!",welcome_desc:"This is your new digital notebook.",index:"Index",untitled_note:"Untitled Note",empty_note:"Empty note...",page_num:"Page",new_notebook:"New Notebook",select_page_msg:"Select a page or create new",tear_out_confirm:"Tear Out Page?",remove_note_desc:"This note will be permanently removed.",tear_out:"Tear Out",page_title_placeholder:"Page Title...",page_title_placeholder:"Page Title...",start_writing:"Start writing here...",bold:"Bold",italic:"Italic",underline:"Underline",text_color:"Text Color",highlight_color:"Highlight Color",align_text:"Align Text",toggle_paper:"Toggle Paper Style",prev_page:"Previous Page",next_page:"Next Page",delete_page:"Delete Page",welcome_title:"Welcome to Notebook",welcome_body:"<h3>Welcome to your Digital Notebook!</h3><p>This looks just like a spiral notebook, but acts like a Word doc.</p><br><p><b>Bold text</b></p><p><i>Italic text</i></p>",new_note:"New Note",no_cheatsheets_yet:"No Cheatsheets Yet",create_first_sheet:"Create your first formula sheet, code snippet, or summary note.",edit_title:"Edit Title",delete_note_confirm:"Delete Note?",enter_title_start:"Enter a title to get started.",new_note_placeholder:"e.g. Physics Formulas",edit_note:"Edit Note",update_note_title:"Update your note title.",attachment:"Attachment",title:"Title",sheet_not_found:"Sheet not found!",markdown_editor:"Markdown Editor",supports_md:"Supports MD",start_typing_placeholder:"Start typing your notes here...",attachments_title:"Attachments",add_image:"Add Image",no_images_yet:"No images yet",delete_image:"Delete Image?",delete_image_desc:"This cannot be undone.",total_courses:"Total Courses",completed:"Completed",studyai:"StudyAI",hours_spent:"Hours Spent",log_flow:"Log Flow",record_session:"Record your study session.",save_entry:"Save Entry",total_streak:"Total Streak",days_l:"days",todos:"Todos",habits:"Habits",stuck_msg:"Stuck? I am here to help!",ask_studyai:"Ask StudyAI",calculator:"Calculator",time_title:"Time",switch_mode:"Switch Mode",daily_habits:"Daily Habits",done:"Done",no_habits_msg:"No habits defined. Add one!",new_habit_placeholder:"New habit...",add_photo:"Add Photo",change_photo:"Change Photo",zoom_image:"Zoom Image",remove_photo:"Remove Photo",delete_photo_confirm:"Delete Photo?",delete:"Delete",delete_photo_confirm:"Delete Photo?",delete:"Delete",cancel:"Cancel",image_too_large:"Image is too large. Please select an image under 5MB.",storage_full:"Storage full. Cannot save image.",dashboard_photo_alt:"Dashboard Photo",focus_timer:"Focus Timer",work:"Work",break:"Break",time_break_msg:"Time for a break! Good job.",break_over_msg:"Break is over! Back to work.",timer_complete:"Timer Complete",stopwatch:"Stopwatch",reset:"Reset",start:"Start",stop:"Stop",bookmarks:"Bookmarks",bookmarks:"Bookmarks",learning:"Learning",google_ai_desc:"Google AI Assistant",openai_chat_desc:"OpenAI Chat",youtube_desc:"YouTube",quick_notes:"Quick Notes",no_notes_yet:"No saved notes yet",create_one:"Create one",browse:"Browse",new:"New",type_ideas:"Type your ideas here...",add_note:"Add Note",update_note:"Update Note",saved_msg:"Saved!",mode_now:"Mode now",untitled_note:"Untitled Note",grade_calc:"Grade Calculation",assessment:"ASSESSMENT",grade:"GRADE",calculate:"Calculate",enter_grades_msg:"Enter grades to calculate",current_avg:"Current Avg",need_score_msg:"Need",on_msg:"on",for_msg:"for",impossible:"Impossible?",passed_msg:"You passed!",assessment_name:"Name",midterm:"Midterm",final_exam:"Final",new_assessment:"New",mini_games:"Mini Games",yes_no:"Yes / No",decision_maker:"Decision maker",decide:"Decide",random_picker:"Random Picker",choice_generator:"Choice generator",add_option_placeholder:"Add option...",pick_random:"Pick Random",winner:"Winner",again:"Again",option_a:"Option A",option_b:"Option B",maybe:"MAYBE",ans_yes:"YES",ans_no:"NO",upgrade_to:"Upgrade to",unlock_potential:"Unlock the full potential of your study workflow.",forever:"/ forever",essential_tools:"Essential tools for everyday studying.",standard_dashboard:"Standard Dashboard",basic_analytics:"Basic Analytics",limited_ai:"Limited AI Assistance",cloud_sync_backup:"Cloud Sync & Backup",advanced_customization:"Advanced Customization",recommended:"Recommended",per_month:"/ month",premium_desc:"For serious students who want the best.",unlimited_ai:"Extended AI Tutor",cloud_sync_multi:"Cloud Sync & Multi-Device",advanced_analytics:"Advanced Performance Analytics",custom_themes:"Custom Themes & Icons",upgrade_now:"Coming Soon",secure_payment:"Secure payment processed by Stripe. Cancel anytime.",logout_confirmation_title:"Log Out?",logout_confirmation_desc:"Are you sure you want to exit? You will return to the setup screen.",reset_layout_confirm:"Are you sure you want to reset the dashboard layout to default?",overwrite_confirm:"This will overwrite your current data. Are you sure?",invalid_backup:"Invalid backup file. Missing critical data.",parse_error:"Error parsing backup file.",no_courses_completed:"No courses completed",no_active_challenges:"No active challenges",no_streak_yet:"No streak yet",student_role:"Student",security_lock:"Access Dev",studyai_intro:"Hi! I'm StudyAI, your personal AI assistant for **{name}**. Ask me anything about the course materials, exams, or topics!",no_upcoming_exams:"No upcoming exams",check_schedule:"Check schedule",studyai_new_chat:"Hi! I'm StudyAI. Start a new topic for **{name}**!",studyai_dashboard_intro:"Hello! I am StudyAI. How can I help you with your studies today?",always_online:"Always Online"},tr:{dashboard:"Panel",schedule:"Takvim",courses:"Dersler",exams:"Sınavlar",notebook:"Not Defteri",cheatsheets:"Kopyalar",pomodoro:"Pomodoro",settings:"Ayarlar",notes:"Notlar",cheats:"Kopyalar",hello:"Merhaba",search_placeholder:"Ara...",premium:"Premium",premium_active:"Premium Aktif",total_courses:"Toplam Ders",completed:"Tamamlanan",studyai:"StudyAI",hours_spent:"Harcanan Saat",log_flow:"Akışı Kaydet",record_session:"Çalışma oturumunu kaydet.",save_entry:"Girişi Kaydet",time:"Zaman",quick_notes:"Hızlı Notlar",scratchpad:"Karalama Defteri",scratchpad_browse:"Gözat",scratchpad_draw:"Çiz",scratchpad_save_gallery:"Galeriye Kaydet",scratchpad_clear:"Temizle",scratchpad_select_image:"Yüklemek için bir görsel seç",scratchpad_no_sketches:"Kayıtlı çizim yok",scratchpad_select_image:"Yüklemek için seç",focus_timer:"Odaklanma",profile:"Profil",calendar:"Takvim",todo_list:"Yapılacaklar",calculator:"Hesap Makinesi",bookmarks:"Yer İşaretleri",grade_calculation:"Not Hesaplama",stopwatch:"Kronometre",mini_games:"Oyunlar",daily_habits:"Günlük Alışkanlıklar",weekly_schedule:"Haftalık Program",photo_frame:"Fotoğraf Çerçevesi",general:"Genel",language:"Dil",about:"Hakkında",developer:"Geliştirici",theme_color:"Tema Rengi",personalize_accent:"Vurgu rengini kişiselleştir.",background_style:"Arkaplan Stili",default:"Varsayılan",tinted:"Renkli",preview_mode:"Önizleme Modu",preview_mode_desc:"Tüm uygulama değişikliklere anında uyum sağlar.",save_layout:"Düzeni Kaydet",reset_layout:"Varsayılan Düzeni Sıfırla",data_backup:"Veri Yedekleme & Geri Yükleme",export_data:"Veriyi Dışa Aktar",import_data:"Veriyi İçe Aktar",current_plan:"Mevcut Plan",basic_plan:"Temel Plan",free:"Ücretsiz",upgrade:"Yükselt",active:"Aktif",changes_saved:"Değişiklikler otomatik kaydedilir.",version:"Sürüm",basic_edition:"Temel Sürüm",available_widgets:"Mevcut Widgetlar",drag_remove:"Kaldırmak için buraya sürükle",loading_summary:"Özet yükleniyor...",layout_settings:"Düzen Ayarları",layout_desc:"Panelinin nasıl görüneceğini özelleştir.",data_desc:"Verilerini JSON olarak dışa aktar veya yedekten geri yükle.",premium_plan:"Premium Plan",remove_avatar:"Avatarı Kaldır",your_name_placeholder:"Adın",uni_name_placeholder:"Üniversite Adı",major_placeholder:"Bölüm",developer_mode:"Geliştirici Modu",dev_desc:"Deneysel özellikler ve geçersiz kılmalar.",enable_premium:"Premium'u Etkinleştir",unlock_desc:"Tüm premium özelliklerin kilidini açar.",lets_known_you:"Seni tanıyalım",call_you:"Sana nasıl hitap edelim?",full_name:"Ad Soyad",academic_profile:"Akademik Profil",personalize_dashboard:"Bu, paneli kişiselleştirmemize yardımcı olur.",university:"Üniversite / Okul",department:"Bölüm",make_yours:"Senin olsun",choose_base_color:"Bir renk seç ve özelleştir.",base_color:"Ana Renk",next_step:"Sonraki Adım",get_started:"Başla",back:"Geri",step:"Adım",name_placeholder:"örn. Ahmet Yılmaz",uni_placeholder:"örn. İstanbul Üniversitesi",dept_placeholder:"örn. Bilgisayar Mühendisliği",clean_gray:"Temiz Gri/Beyaz",theme_tint:"Tema Tonu",pastel_look:"Pastel Görünüm",logout:"Çıkış Yap",add_photo_widget:"Fotoğraf Widget Ekle",manage_widgets:"Widgetları Yönet",all_widgets_active:"Tüm widgetlar aktif",coming_soon:"Yakında",optional:"Opsiyonel",summary_prefix:"Toplam",summary_suffix:"var",classes:"ders",todos:"yapılacak",months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],days_short:["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],no_events:"Planlanmış etkinlik yok.",events_on:"Tarihindeki Etkinlikler:",tbd:"Belirsiz",clear_schedule:"Programı Temizle",clear_all_q:"Hepsini Sil?",clear_all_desc:"Tüm girişler silinecek.",yes:"Evet",no:"Hayır",tasks_count:"Görev",add_new_task_placeholder:"Yeni görev ekle...",no_tasks_yet:"Henüz görev yok",add_one_to_start:"Başlamak için yukarıdan ekle",delete_task_confirm:"Bu görevi sil?",cancel:"İptal",course_not_found:"Ders bulunamadı",back_to_courses:"Derslere Dön",course_info:"DERS BİLGİSİ",edit:"Düzenle",not_set:"Ayarlanmadı",resources:"Kaynaklar",add_file:"Dosya Ekle",no_resources_yet:"Henüz kaynak yok",unknown_type:"Bilinmeyen Tür",delete_resource_confirm:"Kaynağı Sil?",gemini_powered:"Gemini Destekli",chat_history:"Sohbet Geçmişi",new_chat:"Yeni Sohbet",ask_question_placeholder:"Soru sor:",ai_mistakes_disclaimer:"YZ hata yapabilir. Önemli bilgileri doğrulayın.",delete_session_confirm:"Sohbeti Sil?",session_deleted_desc:"Bu sohbet oturumu silinecek.",clear_history_confirm:"Geçmişi Temizle?",chats_lost_desc:"Sohbetler kalıcı olarak silinecek.",new_conversation:"Yeni Konuşma",instructor_name:"EĞİTMEN ADI",save_changes_btn:"Değişiklikleri Kaydet",delete:"Sil",save:"Kaydet",task_name_placeholder:"Görev Adı",add_task_prompt:"Tarihi için görev ekle",hour_unit:"saat",personal:"Kişisel",all_day:"Tüm Gün",basic:"Temel",current_plan:"Mevcut Plan",ask_me_anything:"Bana her şeyi sorabilirsin...",ai_resp_default:"Bu harika bir soru. Şu an demo modundayım, ancak sınavlarında başarılı olman için sana harika ve kişiselleştirilmiş bir cevap verdiğimi hayal et.",ai_resp_schedule:"Bunu organize etmene yardımcı olabilirim. Haydi küçük görevlere bölelim. Yapılacaklar listeni kontrol et ve her biri için 25 dakikalık odaklanma blokları ayırmayı dene.",ai_resp_motivation:"Bunu yapabilirsin. Neden başladığını hatırla. Her küçük adım önemlidir. Derin bir nefes al ve başla!",ai_resp_help:"Senin için buradayım. Belirli bir ders hakkında soru sormayı dene veya ne yazık ki zorlandığın konuyu anlat.",exams_title:"Sınavlar",add_exam:"Sınav Ekle",no_exams_yet:"Henüz Sınav Yok",no_exams_desc:"Rahatla! Planlanmış sınavın yok. Takip etmek için bir tane ekle.",days_left:"GÜN KALDI",today_caps:"BUGÜN",passed_caps:"GEÇTİ",new_exam_setup:"Yeni Sınav Kurulumu",edit_exam_setup:"Sınav Düzenle",step_1_basic:"Adım 1 / 2: Temel Bilgiler",step_2_logistics:"Adım 2 / 2: Lojistik",course_name:"Ders Adı",course_code:"Ders Kodu",exam_type:"Sınav Türü",date:"Tarih",time:"Saat",location_platform:"Konum / Platform",delete_exam_confirm:"Sınavı Sil?",action_undone:"Bu işlem geri alınamaz.",edit_exam:"Sınavı Düzenle",delete_exam:"Sınavı Sil",my_courses:"Derslerim",new_course:"Yeni Ders",no_courses_yet:"Henüz Ders Yok",no_courses_desc:"İlerlemeni takip etmek için ilk dersini ekle.",course_caps:"DERS",no_details:"Detay eklenmedi",view_details:"Detayları gör",new_course_setup:"Yeni Ders Kurulumu",create_course:"Ders Oluştur",instructor:"Eğitmen",email:"E-posta",schedule_time:"Program",note_optional:"Not (İsteğe bağlı)",delete_course_confirm:"Dersi Sil?",edit_course_setup:"Dersi Düzenle",note_placeholder:"İlk düşünceler...",digital_notebook:"Dijital Defter",welcome_notebook:"Deftere Hoşgeldin",welcome_msg:"Hoşgeldin!",welcome_desc:"Bu senin yeni dijital defterin.",index:"İçindekiler",untitled_note:"Başlıksız Not",empty_note:"Boş not...",page_num:"Sayfa",new_notebook:"Yeni Defter",select_page_msg:"Bir sayfa seç veya yeni oluştur",tear_out_confirm:"Sayfayı Yırt?",remove_note_desc:"Bu not kalıcı olarak silinecek.",tear_out:"Yırt At",page_title_placeholder:"Sayfa Başlığı...",page_title_placeholder:"Sayfa Başlığı...",start_writing:"Buraya yazmaya başla...",bold:"Kalın",italic:"İtalik",underline:"Altı Çizili",text_color:"Yazı Rengi",highlight_color:"Vurgu Rengi",align_text:"Hizala",toggle_paper:"Kağıt Stilini Değiştir",prev_page:"Önceki Sayfa",next_page:"Sonraki Sayfa",delete_page:"Sayfayı Sil",welcome_title:"Not Defterine Hoşgeldin",welcome_body:"<h3>Dijital Not Defterine Hoşgeldin!</h3><p>Bu tıpkı spiralli bir defter gibi görünür ama Word belgesi gibi çalışır.</p><br><p><b>Kalın yazı</b></p><p><i>İtalik yazı</i></p>",new_note:"Yeni Not",no_cheatsheets_yet:"Henüz Kopya Kağıdı Yok",create_first_sheet:"İlk formül kağıdını, kod parçasını veya özet notunu oluştur.",edit_title:"Başlığı Düzenle",delete_note_confirm:"Notu Sil?",enter_title_start:"Başlamak için bir başlık girin.",new_note_placeholder:"örn. Fizik Formülleri",edit_note:"Notu Düzenle",update_note_title:"Not başlığını güncelle.",attachment:"Ek",title:"Başlık",sheet_not_found:"Not bulunamadı!",markdown_editor:"Markdown Editörü",supports_md:"MD Destekli",start_typing_placeholder:"Notlarını buraya yazmaya başla...",attachments_title:"Ekler",add_image:"Görsel Ekle",no_images_yet:"Henüz görsel yok",delete_image:"Görseli Sil?",delete_image_desc:"Bu işlem geri alınamaz.",total_courses:"Toplam Ders",completed:"Tamamlanan",studyai:"StudyAI",total_streak:"Toplam Seri",days_l:"gün",todos:"Görevler",habits:"Alışkanlıklar",stuck_msg:"Takıldın mı? Yardıma hazırım!",ask_studyai:"StudyAI'a Sor",calculator:"Hesap Makinesi",time_title:"Saat",switch_mode:"Mod Değiştir",daily_habits:"Alışkanlıklar",done:"Tamamlandı",no_habits_msg:"Tanımlı alışkanlık yok. Bir tane ekle!",new_habit_placeholder:"Yeni alışkanlık...",add_photo:"Fotoğraf Ekle",change_photo:"Fotoğrafı Değiştir",zoom_image:"Yakınlaştır",remove_photo:"Kaldır",delete_photo_confirm:"Fotoğrafı Sil?",delete:"Sil",delete:"Sil",cancel:"İptal",image_too_large:"Görsel çok büyük. Lütfen 5MB'dan küçük bir görsel seçin.",storage_full:"Depolama alanı dolu. Görsel kaydedilemiyor.",dashboard_photo_alt:"Panel Fotoğrafı",focus_timer:"Odaklanma",work:"Çalış",break:"Mola",time_break_msg:"Mola zamanı! İyi iş çıkardın.",edit_profile:"Profili Düzenle",save_changes:"Değişiklikleri Kaydet",fill_all_fields:"Lütfen tüm alanları doldurun",name_label:"İsim",university_label:"Üniversite",department_label:"Bölüm",break_over_msg:"Mola bitti! İşe dön.",timer_complete:"Süre Doldu",stopwatch:"Kronometre",reset:"Sıfırla",start:"Başla",stop:"Durdur",bookmarks:"Yer İmleri",bookmarks:"Yer İmleri",learning:"Öğrenme",google_ai_desc:"Google YZ Asistanı",openai_chat_desc:"OpenAI Sohbet",youtube_desc:"YouTube",quick_notes:"Hızlı Notlar",no_notes_yet:"Henüz not yok",create_one:"Oluştur",browse:"Gözat",new:"Yeni",type_ideas:"Fikirlerini buraya yaz...",add_note:"Not Ekle",update_note:"Notu Güncelle",saved_msg:"Kaydedildi!",mode_now:"Şu anki mod",untitled_note:"Başlıksız Not",grade_calc:"Not Hesaplama",assessment:"DEĞERLENDİRME",grade:"NOT",calculate:"Hesapla",enter_grades_msg:"Hesaplamak için not girin",current_avg:"Ortalama",need_score_msg:"Gereken",on_msg:"=>",for_msg:"hedefi:",impossible:"İmkansız?",passed_msg:"Geçtin!",assessment_name:"İsim",midterm:"Vize",final_exam:"Final",new_assessment:"Yeni",mini_games:"Mini Oyunlar",yes_no:"Evet / Hayır",decision_maker:"Karar verici",decide:"Karar Ver",random_picker:"Rastgele Seçici",choice_generator:"Seçim oluşturucu",add_option_placeholder:"Seçenek ekle...",pick_random:"Rastgele Seç",winner:"Kazanan",again:"Tekrar",option_a:"Seçenek A",option_b:"Seçenek B",maybe:"BELKİ",ans_yes:"EVET",ans_no:"HAYIR",upgrade_to:"",unlock_potential:"Çalışma akışının tam potansiyelini ortaya çıkar.",forever:"/ ömür boyu",essential_tools:"Günlük çalışma için temel araçlar.",standard_dashboard:"Standart Panel",basic_analytics:"Temel Analitikler",limited_ai:"Sınırlı YZ Desteği",cloud_sync_backup:"Bulut Senkronizasyon & Yedekleme",advanced_customization:"Gelişmiş Kişiselleştirme",recommended:"Önerilen",per_month:"/ ay",premium_desc:"En iyisini isteyen ciddi öğrenciler için.",unlimited_ai:"Genişletilmiş YZ Eğitmeni",cloud_sync_multi:"Bulut Senk. & Çoklu Cihaz",advanced_analytics:"Gelişmiş Performans Analizi",custom_themes:"Özel Temalar & İkonlar",upgrade_now:"Çok Yakında",secure_payment:"Stripe ile güvenli ödeme. İstediğin zaman iptal et.",logout_confirmation_title:"Çıkış Yapılsın mı?",logout_confirmation_title:"Çıkış Yapılsın mı?",logout_confirmation_desc:"Çıkmak istediğine emin misin? Kurulum ekranına döneceksin.",reset_layout_confirm:"Varsayılan düzeni sıfırlamak istediğine emin misin?",overwrite_confirm:"Mevcut verilerin üzerine yazılacak. Emin misin?",invalid_backup:"Geçersiz yedek dosyası. Kritik veriler eksik.",parse_error:"Yedek dosyası ayrıştırılamadı.",no_courses_completed:"Tamamlanan ders yok",no_active_challenges:"Aktif görev yok",no_streak_yet:"Henüz seri yok",student_role:"Öğrenci",security_lock:"Geliştirici Erişimi",studyai_intro:"Merhaba! Ben StudyAI, **{name}** dersi için kişisel asistanınım. Ders materyalleri, sınavlar veya konular hakkında bana her şeyi sorabilirsin!",no_upcoming_exams:"Yaklaşan sınav yok",check_schedule:"Takvimi kontrol et",studyai_new_chat:"Merhaba! Ben StudyAI. **{name}** için yeni bir konu başlat!",studyai_dashboard_intro:"Merhaba! Ben StudyAI. Bugün derslerinde sana nasıl yardımcı olabilirim?",always_online:"Her Zaman Çevrimiçi"}};function e(t){const d=m.user.language||"en",o=ce[d][t];return o!==void 0?o:t}function Q(t){if(!t)return"";const o=new DOMParser().parseFromString(t,"text/html");return["script","iframe","object","embed","link","style","base","form","meta"].forEach(n=>{o.querySelectorAll(n).forEach(a=>a.remove())}),o.querySelectorAll("*").forEach(n=>{Array.from(n.attributes).forEach(h=>{h.name.startsWith("on")&&n.removeAttribute(h.name),(h.name==="href"||h.name==="src")&&h.value.trim().toLowerCase().startsWith("javascript:")&&n.removeAttribute(h.name)})}),o.body.innerHTML}function T(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function ue(t){return btoa(t)==="MDAwMA=="}function pe(t,d="dashboard"){const o=[{icon:"grid",page:"dashboard"},{icon:"book",page:"courses"},{icon:"notebook",page:"notebook"},{icon:"ticket",page:"exams"},{icon:"collection",page:"cheatsheets"}],l={grid:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />',book:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />',calendar:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />',notebook:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />',chart:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />',folder:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />',collection:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />',chat:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />',globe:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />',ticket:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />'},i=o.map(n=>{const h=n.page===d;return`
        <li onclick="window.navigateTo('${n.page}')" class="cursor-pointer p-2.5 rounded-full transition-all duration-300 ${h?"bg-primary text-white shadow-lg":"text-gray-400 hover:text-primary hover:bg-white/50"} flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                ${l[n.icon]}
            </svg>
        </li>
    `}).join("");t.innerHTML=`
        <div class="flex flex-col h-full items-center py-4 w-full relative z-10 transition-all duration-300">
            <!-- Glass Vertical Rectangle Menu -->
            <div class="glass flex-1 w-auto rounded-full py-3 px-1.5 flex flex-col items-center gap-3 border border-white/50 shadow-xl bg-white/40 backdrop-blur-xl mb-2 transition-all duration-300 mx-2">
                <ul class="flex flex-col gap-2 w-full items-center pt-2">
                    ${i}
                </ul>
                
                 <div class="mt-auto flex flex-col gap-3 w-full items-center pt-3 border-t border-gray-200/30">
                    <button onclick="window.logout()" class="p-2.5 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-white/50" title="${e("logout")}">
                       <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    </button>
                </div>
            </div>
        </div>
    `}function me(t,d="dashboard"){const o=[{icon:"grid",page:"dashboard",label:e("dashboard")},{icon:"book",page:"courses",label:e("courses")},{icon:"notebook",page:"notebook",label:e("notes")},{icon:"ticket",page:"exams",label:e("exams")},{icon:"collection",page:"cheatsheets",label:e("cheats")}],l={grid:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />',book:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />',notebook:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />',collection:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />',ticket:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />'},i=o.map(n=>{const h=n.page===d;return`
        <li onclick="window.navigateTo('${n.page}')" class="flex-1 cursor-pointer p-2 rounded-xl transition-all duration-300 flex flex-col items-center justify-center gap-1 ${h?"text-primary":"text-gray-400 hover:text-gray-600"}">
            <svg class="w-6 h-6 ${h?"fill-primary/10 stroke-primary":""}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                ${l[n.icon]}
            </svg>
            <span class="text-[10px] font-bold ${h?"opacity-100":"opacity-0 h-0 hidden"} transition-all">${n.label||""}</span>
        </li>
    `}).join("");t.innerHTML=`
        <div class="h-full w-full flex items-center justify-center px-4">
             <div class="glass w-full rounded-2xl py-2 px-1 flex items-center justify-between border border-white/50 shadow-xl bg-white/90 backdrop-blur-xl">
                <ul class="flex w-full items-center justify-between gap-1">
                    ${i}
                </ul>
            </div>
        </div>
    `}function ge(t){const d=m.todos?m.todos.filter(a=>a.completed).length:0,o=JSON.parse(localStorage.getItem("habit_tracker_data_v3")||"{}"),l=o.habits?o.habits.filter(a=>a.completed).length:0,n=[{title:e("total_courses"),value:t.courses.total,icon:'<svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>'},{title:e("completed"),value:d+l,icon:'<svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>'},{title:e("studyai"),value:"",icon:'<svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>'},{title:e("total_streak"),value:`${t.streak.total} ${e("days_l")}`,icon:'<svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>'}].slice(0,3).map((a,s)=>`
    <div id="stats-card-${s}" class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow draggable-item relative group flex flex-col justify-between" draggable="true">
      <div class="flex justify-between items-center mb-4 cursor-move">
         <h3 class="text-lg font-bold text-dark flex items-center gap-2">
            ${a.icon}
            ${a.title}
         </h3>
         ${s===0?`
         <button onclick="window.navigateTo('courses')" class="text-gray-400 hover:text-primary transition-colors p-1" title="${e("view_details")}">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
         </button>
         `:""}
      </div>
      <div class="flex flex-col h-full">
         <div class="text-3xl font-bold text-dark mb-2 flex items-center gap-2">
            ${a.value}
         </div>
         
         ${s===0&&m.courses&&m.courses.length>0?`
         <div class="mt-2 flex flex-col gap-2 overflow-y-auto max-h-40 custom-scrollbar pr-1">
            ${m.courses.map(c=>`
                <div onclick="window.navigateTo('course-detail', { id: ${c.id} })" class="flex items-center gap-2 p-2 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors group/course">
                    <div class="w-6 h-6 rounded-lg bg-white text-primary flex items-center justify-center font-bold text-xs shadow-sm border border-gray-100">
                        ${T(c.name).charAt(0).toUpperCase()}
                    </div>
                    <span class="text-xs font-medium text-gray-600 truncate flex-1 block" title="${T(c.name)}">${T(c.name)}</span>
                    <svg class="w-3 h-3 text-gray-300 group-hover/course:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </div>
            `).join("")}
         </div>
         `:""}

         ${s===1?`
         <div class="mt-4 flex flex-col gap-2">
             <div class="flex justify-between items-center p-2 bg-gray-50 rounded-xl border border-gray-100">
                 <div class="flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/30"></span>
                     <span class="text-xs font-medium text-gray-600">${e("todos")}</span>
                 </div>
                 <span id="stat-todo-count" class="text-xs font-bold text-dark">${d}</span>
             </div>
             <div class="flex justify-between items-center p-2 bg-gray-50 rounded-xl border border-gray-100">
                 <div class="flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/30"></span>
                     <span class="text-xs font-medium text-gray-600">${e("habits")}</span>
                 </div>
                 <span id="stat-habit-count" class="text-xs font-bold text-dark">${l}</span>
             </div>
         </div>
         `:""}

         ${s===2?`
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
  `).join(""),h=`
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
  `;return n+h}function X(t){const d=m.chartData,o=Math.max(...d.map(p=>p.study+p.exam))||5,l=d.map(p=>{const v=o===0?1:o,k=p.study/v*100,S=p.exam/v*100;return`
      <div class="flex flex-col items-center gap-2 flex-1 group cursor-pointer relative h-full justify-end">
        <div class="w-full flex-1 flex flex-col justify-end relative rounded-xl overflow-hidden bg-gray-50 hover:bg-gray-100 transition-colors">
            <!-- Tooltip -->
            <div class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-dark text-white text-[10px] font-bold py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap pointer-events-none shadow-xl border border-gray-700">
              ${p.study}${e("hour_unit")}
            </div>
            
            ${p.exam>0?`<div style="height: ${S}%" class="w-full bg-primary/30 pattern-diagonal-lines"></div>`:""}
            <div style="height: ${k}%" class="w-full bg-primary rounded-t-sm transition-all duration-500"></div>
        </div>
        <span class="text-xs text-gray-400 font-medium group-hover:text-primary transition-colors">${e("days_short")[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(p.day)]}</span>
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
             <span>${Z(o)}${e("hour_unit")}</span>
             <span>${Z(o*.66)}${e("hour_unit")}</span>
             <span>${Z(o*.33)}${e("hour_unit")}</span>
             <span>0${e("hour_unit")}</span>
         </div>
         <div class="flex-1 flex justify-between gap-2 h-full pb-1 border-b border-dashed border-gray-200">
            ${l}
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
  `;const i=t.querySelector("#btn-add-hours"),n=t.querySelector("#modal-log-hours"),h=t.querySelector("#close-log-hours"),a=t.querySelector("#btn-save-hours"),s=t.querySelector("#input-hours"),c=p=>{p?(n.classList.remove("invisible","opacity-0"),n.querySelector("div").classList.remove("scale-95","opacity-0"),n.querySelector("div").classList.add("scale-100","opacity-100"),setTimeout(()=>s.focus(),100)):(n.classList.add("invisible","opacity-0"),n.querySelector("div").classList.add("scale-95","opacity-0"),n.querySelector("div").classList.remove("scale-100","opacity-100"),s.value="")};i&&i.addEventListener("click",p=>{p.stopPropagation(),c(!0)}),h&&h.addEventListener("click",p=>{p.stopPropagation(),c(!1)}),a&&a.addEventListener("click",p=>{p.stopPropagation();const v=parseFloat(s.value);if(!v||v<=0){s.classList.add("animate-shake","border-red-500","bg-red-50"),setTimeout(()=>s.classList.remove("animate-shake","border-red-500","bg-red-50"),500);return}const k=new Date().toLocaleDateString("en-US",{weekday:"short"}),S=m.chartData.find(x=>x.day===k);if(S)S.study+=v,S.study=Math.round(S.study*10)/10,D(),X(t);else{const x=m.chartData[m.chartData.length-1];x.study+=v,D(),X(t)}}),s&&(s.addEventListener("keydown",p=>{["-","e","E","+"].includes(p.key)&&p.preventDefault(),p.key==="Enter"&&a.click()}),s.addEventListener("input",p=>{let v=parseFloat(s.value);isNaN(v)||(v<0&&(s.value=0),v>24&&(s.value=24))}))}function Z(t){return t<1?1:Math.round(t)}function ie(t,d,o=[]){const l=new Date;let i=l.getMonth(),n=l.getFullYear(),h=null;const a=()=>{const s=e("months"),c=new Date(n,i+1,0).getDate(),p=new Date(n,i,1).getDay(),v=e("days_short"),k={};d.forEach(y=>{y.date&&(k[y.date]||(k[y.date]=[]),k[y.date].push({...y,isExam:!1}))}),o.forEach(y=>{if(y.date){const C=new Date(y.date),$=`${C.getFullYear()}-${String(C.getMonth()+1).padStart(2,"0")}-${String(C.getDate()).padStart(2,"0")}`;k[$]||(k[$]=[]),k[$].push({...y,isExam:!0})}});let S="";for(let y=0;y<p;y++)S+='<div class="h-8"></div>';for(let y=1;y<=c;y++){const C=`${n}-${String(i+1).padStart(2,"0")}-${String(y).padStart(2,"0")}`,$=k[C]||[],_=$.length>0,H=$.some(b=>b.isExam),E=h===C,I=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`;S+=`
                <div class="h-9 w-9 mx-auto flex items-center justify-center rounded-full cursor-pointer transition-all text-xs font-medium relative group
                    ${E?"bg-primary text-white shadow-lg scale-110":C===I?"bg-primary/20 text-primary":"hover:bg-gray-50 text-gray-500"}
                    ${_&&!E?"font-bold text-dark":""}
                " onclick="selectDate('${C}')">
                    ${y}
                    ${_?`<div class="absolute bottom-1 w-1 h-1 rounded-full ${H?"bg-red-500":E?"bg-white":"bg-primary"}"></div>`:""}
                </div>
            `}let x="";if(h){const y=k[h]||[];x=`
                <div class="mt-6 border-t border-gray-100 pt-4 animate-fade-in">
                    <div class="flex justify-between items-center mb-3">
                        <h4 class="text-sm font-bold text-dark">${e("events_on")} ${h.split("-").reverse().join("/")}</h4>
                    </div>
                    ${y.length===0?`<p class="text-xs text-gray-400 italic">${e("no_events")}</p>`:`
                        <div class="space-y-2">
                             ${y.map(C=>C.isExam?`
                                        <div class="bg-red-50 p-2.5 rounded-lg flex items-center justify-between border border-red-100">
                                            <div>
                                                <div class="text-xs font-bold text-red-600 flex items-center gap-1.5 mb-0.5">
                                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                                                    ${T(C.code)} <span class="text-[10px] opacity-75 font-medium uppercase border border-red-200 px-1 rounded">${T(C.type)}</span>
                                                </div>
                                                <div class="text-[10px] text-red-400 font-medium pl-5">${T(C.location||e("tbd"))} • ${new Date(C.date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</div>
                                            </div>
                                        </div>
                                     `:`
                                        <div class="bg-gray-50 p-2 rounded-lg flex items-center justify-between group">
                                            <div class="flex-1">
                                                <div class="text-xs font-bold text-gray-700 ${C.completed?"line-through opacity-50":""}">${T(C.title)}</div>
                                                ${C.subject?`<div class="text-[10px] text-gray-400">${T(C.subject)}</div>`:""}
                                            </div>
                                             <button class="text-gray-300 hover:text-primary p-1 opacity-0 group-hover:opacity-100 transition-opacity" onclick="removeEvent('${T(C.title)}', true)">
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
                <span class="text-xs font-bold text-dark w-24 text-center select-none">${s[i]} ${n}</span>
                <button class="p-1 hover:bg-gray-50 rounded-full" onclick="changeMonth(1)">
                    <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
           </div>
           
           <div class="grid grid-cols-7 gap-1 text-center text-[10px] text-gray-400 mb-2 font-bold uppercase tracking-wider shrink-0">
             ${v.map(y=>`<span>${y}</span>`).join("")}
           </div>
           
           <!-- Scrollable Area for Grid and Details -->
           <div class="flex-1 overflow-y-auto no-scrollbar -mx-2 px-2 scroll-smooth">
               <div class="grid grid-cols-7 gap-y-2">
                    ${S}
               </div>

               ${x}
           </div>
        </div>
        `,t.selectDate=y=>{h=y,a()},t.changeMonth=y=>{i+=y,i>11&&(i=0,n++),i<0&&(i=11,n--),a()},t.addEvent=y=>{const C=y.split("-").reverse().join("/"),$=prompt(`${e("add_task_prompt")} ${C}:`);$&&(d.push({title:$,subject:e("personal"),time:e("all_day"),completed:!1,date:y}),a(),document.dispatchEvent(new Event("dataChanged")))},t.removeEvent=y=>{const C=d.findIndex($=>$.title===y);C>-1&&(d.splice(C,1),a(),document.dispatchEvent(new Event("dataChanged")))}};window.selectDate=s=>t.selectDate(s),window.changeMonth=s=>t.changeMonth(s),window.addEvent=s=>t.addEvent(s),window.removeEvent=s=>t.removeEvent(s),a()}function he(t,d,o=null,l=null){t.innerHTML=`
        <div class="bg-white p-6 rounded-3xl shadow-sm h-full flex flex-col">
            <div class="flex justify-between items-center mb-4 shrink-0">
                <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    ${e("todo_list")}
                </h3>
                <span class="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">${d.length} ${e("tasks_count")}</span>
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
                    ${d.length===0?`
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
                    ${d.map((i,n)=>n===l?`
                                <li class="flex flex-col gap-2 bg-primary/5 p-3 rounded-xl border border-primary/20 animate-fade-in text-center" data-index="${n}">
                                    <p class="text-sm font-bold text-primary mb-2">${e("delete_task_confirm")}</p>
                                    <div class="flex justify-center gap-2">
                                         <button onclick="cancelDeleteTodo()" class="px-3 py-1 text-xs font-bold text-gray-500 hover:bg-gray-200 rounded-lg transition-colors">${e("cancel")}</button>
                                         <button onclick="confirmDeleteTodo(${n})" class="px-3 py-1 text-xs font-bold text-white bg-primary hover:opacity-90 rounded-lg transition-colors shadow-lg shadow-primary/30">${e("delete")}</button>
                                    </div>
                                </li>
                            `:n===o?`
                                <li class="flex flex-col gap-2 bg-gray-50 p-3 rounded-xl border border-primary/20 animate-fade-in" data-index="${n}">
                                    <input type="text" id="edit-title-${n}" value="${T(i.title)}" class="w-full bg-white border border-gray-200 rounded-lg px-2 py-1 text-sm font-bold text-dark focus:border-primary outline-none" placeholder="${e("task_name_placeholder")}">
                                    <div class="flex gap-2">
                                        <input type="date" id="edit-date-${n}" value="${i.date||""}" class="flex-1 bg-white border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500 focus:border-primary outline-none">
                                        <input id="edit-time-${n}" value="${i.time||""}" class="flex-1 bg-white border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500 focus:border-primary outline-none" type="time">
                                    </div>
                                    <div class="flex justify-end gap-2 mt-1">
                                        <button onclick="cancelEditTodo()" class="px-3 py-1 text-xs font-bold text-gray-500 hover:bg-gray-200 rounded-lg transition-colors">${e("cancel")}</button>
                                        <button onclick="saveEditTodo(${n})" class="px-3 py-1 text-xs font-bold text-white bg-primary hover:opacity-90 rounded-lg transition-colors shadow-lg shadow-primary/30">${e("save")}</button>
                                    </div>
                                </li>
                            `:`
                                <li class="flex items-start gap-3 group justify-between animate-fade-in" data-index="${n}">
                                    <div class="flex items-start gap-3 flex-1">
                                        <div class="mt-1 w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer hover:border-primary transition-colors toggle-btn shrink-0" onclick="event.stopPropagation(); toggleTodo(${n})">
                                            ${i.completed?'<div class="w-3 h-3 bg-primary rounded-full"></div>':""}
                                        </div>
                                        <div class="min-w-0">
                                            <div class="text-sm font-bold text-dark group-hover:text-primary transition-colors cursor-pointer toggle-text truncate ${i.completed?"line-through text-gray-400":""}" onclick="editTodo(${n})">${T(i.title)}</div>
                                            <div class="flex flex-wrap gap-2 text-xs text-gray-400 mt-1">
                                                ${i.date?`<span class="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium shrink-0">${T(i.date.split("-").reverse().join("/"))}</span>`:""}
                                                ${i.time?`<span class="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium shrink-0">${T(i.time)}</span>`:""}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                                        <button class="p-1.5 text-gray-400 hover:text-primary rounded-lg hover:bg-primary/10 transition-colors edit-btn" onclick="event.stopPropagation(); editTodo(${n})">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                        </button>
                                        <button class="p-1.5 text-gray-400 hover:text-primary rounded-lg hover:bg-primary/10 transition-colors delete-btn" onclick="event.stopPropagation(); deleteTodo(${n})">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                </li>
                            `).join("")}
                </ul>
            </div>
        </div>
    `,window.addTodoFromInput||(window.addTodoFromInput=()=>{const i=document.getElementById("new-todo-input");i&&i.value.trim()&&window.addSpecificTodo&&(window.addSpecificTodo(i.value.trim()),i.value="")})}function ee(t,d){d.university||(d.university=e("uni_name_placeholder")),d.department||(d.department=e("department_label")),t.innerHTML=`
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
                    ${d.avatar?`<div class="text-6xl">${T(d.avatar)}</div>`:'<svg class="w-full h-full text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>'}
                </div>
            </div>
            
            <!-- Info Section -->
            <div class="relative z-10 flex flex-col items-center">
                <h3 class="text-2xl font-black text-dark mb-2 tracking-tight">${T(d.name)}</h3>
                
                <div class="flex flex-col items-center gap-2 mt-4 w-full">
                    <div class="flex items-center justify-center gap-2 text-xs font-medium text-gray-600 w-full">
                         <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        <span class="truncate tracking-wide">${T(d.university)}</span>
                    </div>
                    
                    <div class="w-16 h-px bg-green-900/10 rounded-full"></div>

                    <div class="flex items-center justify-center gap-2 text-xs font-medium text-gray-600 w-full">
                         <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        <span class="truncate tracking-wide">${T(d.department)}</span>
                    </div>
                </div>
            </div>
        </div>
    `,t.querySelector(".edit-profile-btn").onclick=()=>{ve(d,o=>{d.name=o.name,d.university=o.university,d.department=o.department,D(),ee(t,d),document.dispatchEvent(new Event("profileUpdated"))})}}function ve(t,d){const o=document.getElementById("edit-profile-modal");o&&o.remove();const l=document.createElement("div");l.id="edit-profile-modal",l.className="fixed inset-0 z-50 flex items-center justify-center bg-dark/50 backdrop-blur-sm opacity-0 transition-opacity duration-300",l.innerHTML=`
        <div class="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl transform scale-95 transition-transform duration-300">
            <h3 class="text-xl font-bold text-dark mb-6 text-center">${e("edit_profile")}</h3>
            
            <div class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-gray-500 mb-1 ml-1">${e("name_label")}</label>
                    <input type="text" id="edit-name" value="${T(t.name)}" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                </div>
                
                <div>
                    <label class="block text-xs font-bold text-gray-500 mb-1 ml-1">${e("university_label")}</label>
                    <input type="text" id="edit-university" value="${T(t.university)}" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                </div>
                
                <div>
                    <label class="block text-xs font-bold text-gray-500 mb-1 ml-1">${e("department_label")}</label>
                    <input type="text" id="edit-department" value="${T(t.department)}" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                </div>
            </div>

            <div class="flex gap-3 mt-8">
                <button id="cancel-edit-profile" class="flex-1 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors">${e("cancel")}</button>
                <button id="save-edit-profile" class="flex-1 py-3 rounded-xl font-bold text-white bg-primary hover:bg-[#2C5F58] shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">${e("save_changes")}</button>
            </div>
        </div>
    `,document.body.appendChild(l),requestAnimationFrame(()=>{l.classList.remove("opacity-0"),l.querySelector("div").classList.remove("scale-95"),l.querySelector("div").classList.add("scale-100")});const i=()=>{l.classList.add("opacity-0"),l.querySelector("div").classList.remove("scale-100"),l.querySelector("div").classList.add("scale-95"),setTimeout(()=>l.remove(),300)};l.querySelector("#cancel-edit-profile").onclick=i,l.onclick=n=>{n.target===l&&i()},l.querySelector("#save-edit-profile").onclick=()=>{const n=document.getElementById("edit-name").value,h=document.getElementById("edit-university").value,a=document.getElementById("edit-department").value;n&&h&&a?(d({name:n,university:h,department:a}),i()):alert(e("fill_all_fields"))}}function be(t){let d;try{d=JSON.parse(localStorage.getItem("dashboard_notes_list")||"[]")}catch(n){console.error("Failed to parse notes data:",n),d=[]}let o=-1,l=!1;const i=()=>{const n=d.map((k,S)=>`
            <div class="group flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border-b border-gray-50 last:border-0" data-index="${S}">
                <div class="flex-1 truncate text-sm text-gray-600 font-medium pr-2" onclick="loadNote(${S})">
                    ${T(k.split(`
`)[0])||e("untitled_note")}
                    <div class="text-xs text-gray-400 font-normal truncate mt-0.5">${T(k.substring(0,40))}...</div>
                </div>
                <button class="text-gray-300 hover:text-primary transition-colors p-2" onclick="deleteNote(${S}, event)">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
            </div>
        `).join(""),h=`
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
                        ${l?`
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
                    <div class="absolute inset-0 flex flex-col transition-all duration-300 ${l?"opacity-0 pointer-events-none translate-x-full":"opacity-100 translate-x-0"}">
                         <textarea id="note-area" class="w-full flex-1 bg-gray-50 rounded-xl p-4 text-sm text-gray-600 outline-none border border-transparent focus:border-primary/20 focus:bg-white transition-all resize-none placeholder-gray-400" placeholder="${e("type_ideas")}">${o!==-1?T(d[o]):""}</textarea>
                         <div class="flex justify-between items-center mt-4">
                            <span id="note-status" class="text-xs text-gray-400 font-medium h-4"></span>
                            <button id="save-note" class="px-6 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:opacity-90 transition-colors shadow-lg shadow-primary/30 active:scale-95 transform">
                                ${e(o===-1?"add_note":"update_note")}
                            </button>
                        </div>
                    </div>

                    <!-- List View -->
                    <div class="absolute inset-0 flex flex-col bg-white transition-all duration-300 ${l?"opacity-100 translate-x-0":"opacity-0 pointer-events-none -translate-x-full"} z-10">
                         <div class="flex-1 overflow-y-auto custom-scrollbar">
                           ${d.length?n:h}
                         </div>
                    </div>
                </div>
            </div>
        `;const a=t.querySelector("#note-area"),s=t.querySelector("#save-note"),c=t.querySelector("#notes-mode-toggle"),p=t.querySelector("#create-first-note"),v=t.querySelector("#note-status");s&&(s.onclick=()=>{const k=a.value.trim();if(k){o===-1?(d.push(k),o=d.length-1):d[o]=k;try{localStorage.setItem("dashboard_notes_list",JSON.stringify(d))}catch(S){console.error("Failed to save notes:",S)}v.textContent=e("saved_msg"),v.classList.add("text-primary"),setTimeout(()=>{v&&(v.textContent="",v.classList.remove("text-primary"))},2e3)}}),c.onclick=()=>{l?(l=!1,o=-1):l=!0,i()},p&&(p.onclick=()=>{l=!1,o=-1,i()}),t.querySelectorAll('button[onclick^="deleteNote"]').forEach(k=>{k.onclick=S=>{S.stopPropagation();const x=parseInt(k.parentElement.dataset.index);d.splice(x,1);try{localStorage.setItem("dashboard_notes_list",JSON.stringify(d))}catch(y){console.error("Failed to save notes:",y)}o===x?o=-1:o>x&&o--,i()}}),t.querySelectorAll('div[onclick^="loadNote"]').forEach(k=>{k.onclick=()=>{o=parseInt(k.parentElement.dataset.index),l=!1,i()}})};i()}function fe(t){let d=1500,o=1500,l=!1,i="work",n=null;const h=x=>{const y=Math.floor(x/60),C=x%60;return`${y.toString().padStart(2,"0")}:${C.toString().padStart(2,"0")}`},a=()=>{const x=t.querySelector("#pomodoro-time"),y=t.querySelector("#progress-ring-circle");if(x&&(x.textContent=h(d)),y){const $=112*Math.PI,_=$-d/o*$;y.style.strokeDashoffset=_}},s=x=>{if(l)return;let y=d+x*60;y<60&&(y=60),y>3600&&(y=3600),d=y,o=y,a()},c=()=>{const x=t.querySelector("#pomodoro-toggle-btn"),y=x.querySelector("div"),C=t.querySelectorAll(".time-control-btn");l?(clearInterval(n),l=!1,y.innerHTML='<svg class="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',x.classList.remove("bg-primary","hover:opacity-90","text-white"),x.classList.add("bg-primary","hover:opacity-90","text-white"),C.forEach($=>$.classList.remove("opacity-0","pointer-events-none"))):(l=!0,y.innerHTML='<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',i==="work"&&(x.classList.remove("bg-primary","hover:opacity-90"),x.classList.add("bg-primary","hover:opacity-90")),C.forEach($=>$.classList.add("opacity-0","pointer-events-none")),n=setInterval(()=>{if(d>0)d--,a();else{clearInterval(n),l=!1,new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg").play().catch(()=>{});const $=e(i==="work"?"time_break_msg":"break_over_msg");p($),c()}},1e3))},p=x=>{const y=document.createElement("div");y.className="fixed top-6 right-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 z-[9999] flex items-center gap-4 animate-fade-in-down transition-all duration-500",y.innerHTML=`
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
        `,document.body.appendChild(y),setTimeout(()=>{y.parentElement&&(y.style.opacity="0",y.style.transform="translateY(-20px)",setTimeout(()=>y.remove(),500))},5e3)},v=()=>{clearInterval(n),l=!1,d=i==="work"?1500:300,o=d,a();const x=t.querySelector("#pomodoro-toggle-btn"),y=x.querySelector("div");y.innerHTML='<svg class="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',x.classList.remove("bg-primary","hover:opacity-90"),x.classList.add("bg-primary","hover:opacity-90"),t.querySelectorAll(".time-control-btn").forEach($=>$.classList.remove("opacity-0","pointer-events-none"))},k=x=>{i=x,d=i==="work"?1500:300,o=d,t.querySelector("#progress-ring-circle").classList.add("text-primary"),v()};t.innerHTML=`
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
    `,t.querySelector("#pomodoro-toggle-btn").addEventListener("click",c),t.querySelector("#pomodoro-reset-btn").addEventListener("click",v);const S=t.querySelector("#pomodoro-mode-toggle");S.innerHTML=`
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        <span>${e("work")}</span>
    `,S.addEventListener("click",()=>{i==="work"?(k("break"),S.innerHTML=`
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                <span>${e("break")}</span>
            `):(k("work"),S.innerHTML=`
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>${e("work")}</span>
            `)}),t.querySelector("#decrease-time").addEventListener("click",()=>s(-1)),t.querySelector("#increase-time").addEventListener("click",()=>s(1)),a()}function ye(t){if(!t)return;let d=!0;t.innerHTML=`
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
                         ${[...Array(12)].map((k,S)=>`
                            <div class="absolute w-1 h-3 bg-gray-300 left-1/2 top-1 origin-[50%_92px] -ml-0.5" style="transform: rotate(${S*30}deg)"></div>
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
    `;const o=t.querySelector("#toggle-clock-mode"),l=t.querySelector("#digital-clock"),i=t.querySelector("#analog-clock"),n=t.querySelector("#digital-time"),h=t.querySelector("#digital-date"),a=t.querySelector("#hour-hand"),s=t.querySelector("#min-hand"),c=t.querySelector("#sec-hand");o.addEventListener("click",k=>{k.preventDefault(),k.stopPropagation(),d=!d,p()}),o.addEventListener("mousedown",k=>k.stopPropagation()),o.addEventListener("dragstart",k=>{k.preventDefault(),k.stopPropagation()});function p(){d?(l.classList.remove("hidden"),i.classList.add("hidden")):(l.classList.add("hidden"),i.classList.remove("hidden"))}function v(){const k=new Date;if(d){const S=k.toLocaleTimeString("en-GB",{hour12:!1}),x=k.toLocaleDateString("en-GB",{weekday:"short",day:"2-digit",month:"short"});n.innerText=S,h.innerText=x}else{const S=k.getSeconds(),x=k.getMinutes(),y=k.getHours(),C=S/60*360,$=x/60*360+S/60*6,_=y/12*360+x/60*30;c.style.transform=`rotate(${C}deg)`,s.style.transform=`rotate(${$}deg)`,a.style.transform=`rotate(${_}deg)`}}p(),v(),setInterval(v,1e3)}function xe(t){if(!t)return;let d=!1,o="#3F6F68",l=2,i="canvas",n=JSON.parse(localStorage.getItem("scratchpad_gallery")||"[]");t.innerHTML=`
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
    `;const h=t.querySelector("#sp-btn-browse"),a=t.querySelector("#sp-view-canvas"),s=t.querySelector("#sp-view-gallery"),c=t.querySelector("#sp-canvas"),p=c.getContext("2d",{willReadFrequently:!0}),v=t.querySelectorAll(".sp-color-btn"),k=t.querySelector("#sp-clear-canvas"),S=t.querySelector("#sp-save-gallery"),x=t.querySelector("#sp-gallery-list"),y=()=>{if(i==="canvas"){i="gallery",L(),s.classList.remove("translate-x-full"),s.classList.add("translate-x-0"),a.classList.remove("translate-x-0"),a.classList.add("-translate-x-full"),h.innerHTML=`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg><span>${e("scratchpad_draw")}</span>`;const u=t.querySelector("#sp-tools-header");u&&u.classList.add("opacity-0","pointer-events-none")}else{i="canvas",a.classList.remove("-translate-x-full"),a.classList.add("translate-x-0"),s.classList.remove("translate-x-0"),s.classList.add("translate-x-full"),h.innerHTML=`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg><span>${e("scratchpad_browse")}</span>`;const u=t.querySelector("#sp-tools-header");u&&u.classList.remove("opacity-0","pointer-events-none"),setTimeout(C,300)}};h.onclick=y;function C(){const u=c.parentElement.getBoundingClientRect();if(u.width!==0&&(c.width!==u.width||c.height!==u.height)){let f=null;try{c.width>0&&c.height>0&&(f=p.getImageData(0,0,c.width,c.height))}catch{}c.width=u.width,c.height=u.height,f&&p.putImageData(f,0,0)}}function $(){localStorage.setItem("scratchpad_current",c.toDataURL())}function _(){const u=localStorage.getItem("scratchpad_current");if(u){const f=new Image;f.onload=()=>p.drawImage(f,0,0),f.src=u}}const H=u=>{d=!0,r(u)},E=()=>{d=!1,p.beginPath(),$()},I=u=>{const f=c.getBoundingClientRect();return{x:(u.clientX||u.touches[0].clientX)-f.left,y:(u.clientY||u.touches[0].clientY)-f.top}},r=u=>{if(!d)return;u.preventDefault();const f=I(u);p.lineWidth=l,p.lineCap="round",p.strokeStyle=o,p.lineTo(f.x,f.y),p.stroke(),p.beginPath(),p.moveTo(f.x,f.y)};c.addEventListener("mousedown",H),c.addEventListener("mouseup",E),c.addEventListener("mousemove",r),c.addEventListener("touchstart",H),c.addEventListener("touchend",E),c.addEventListener("touchmove",r),v.forEach(u=>{u.onclick=()=>{v.forEach(f=>f.classList.remove("ring-2","ring-offset-1","ring-gray-800")),u.classList.add("ring-2","ring-offset-1","ring-gray-800"),o=u.dataset.color}}),k.onclick=()=>{p.clearRect(0,0,c.width,c.height),localStorage.removeItem("scratchpad_current")},S.onclick=()=>{const u=c.toDataURL(),f=new Date().toLocaleString();n.unshift({id:Date.now(),date:f,data:u}),localStorage.setItem("scratchpad_gallery",JSON.stringify(n));const w=S.innerHTML;S.innerHTML='<svg class="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>',setTimeout(()=>S.innerHTML=w,1500)};const g=(u,f)=>{f.stopPropagation(),n=n.filter(w=>w.id!==u),localStorage.setItem("scratchpad_gallery",JSON.stringify(n)),L()},b=u=>{const f=new Image;f.onload=()=>{p.clearRect(0,0,c.width,c.height),p.drawImage(f,0,0),$(),y()},f.src=u.data};function L(){if(x.innerHTML="",n.length===0){x.innerHTML=`
                <div class="col-span-2 flex flex-col items-center justify-center text-gray-300 h-full w-full absolute top-0 left-0 pointer-events-none">
                     <div class="flex flex-col items-center justify-center h-full pb-8">
                        <svg class="w-10 h-10 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <p class="text-xs">${e("scratchpad_no_sketches")}</p>
                    </div>
                </div>
            `;return}n.forEach(u=>{const f=document.createElement("div");f.className="group relative w-full h-40 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-all shrink-0",f.innerHTML=`
                <div class="absolute inset-0 p-2 flex items-center justify-center">
                    <img src="${u.data}" class="max-w-full max-h-full object-contain pointer-events-none opacity-90 group-hover:opacity-100" />
                </div>
                <div class="absolute bottom-0 left-0 right-0 bg-white/90 p-1 text-[10px] text-center text-gray-500 truncate">
                    ${u.date.split(",")[0]}
                </div>
                <button class="absolute top-1 right-1 p-1 bg-white rounded-full text-red-400 hover:text-red-500 hover:bg-red-50 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity" title="Delete">
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            `,f.onclick=()=>b(u),f.querySelector("button").onclick=w=>g(u.id,w),x.appendChild(f)})}setTimeout(()=>{C(),_(),window.ResizeObserver&&new ResizeObserver(()=>{C()}).observe(t)},500)}function we(t){t.innerHTML=`
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
    `}function ke(t){if(!t)return;let d;try{d=JSON.parse(localStorage.getItem("grade_calc_data")||"[]")}catch(n){console.error("Failed to parse grade data:",n),d=[]}d.length===0&&(d=[{id:1,name:e("midterm"),grade:"",weight:40},{id:2,name:e("final_exam"),grade:"",weight:60}]);const o=()=>{try{localStorage.setItem("grade_calc_data",JSON.stringify(d))}catch(n){console.error("Failed to save grade data:",n)}},l=()=>{let n=0,h=0,a=0;d.forEach(v=>{const k=parseFloat(v.weight)||0,S=parseFloat(v.grade);n+=k,isNaN(S)||(h+=S*k,a+=k)});const s=a>0?(h/a).toFixed(1):0;let c="";a>0?c=`<div class="text-sm">${e("current_avg")}: <span class="font-bold text-primary text-lg">${s}</span></div>`:c=`<div class="text-sm text-gray-400">${e("enter_grades_msg")}</div>`;const p=d.find(v=>(v.name.toLowerCase().includes("final")||v.weight>30)&&(v.grade===""||isNaN(parseFloat(v.grade))));if(p&&a>0&&n>0){const k=((60*n-h)/p.weight).toFixed(1);k>0&&k<=100?c+=`<div class="text-xs text-gray-500 mt-1">${e("need_score_msg")} <b class="text-dark">${k}</b> ${e("on_msg")} ${p.name} ${e("for_msg")} 60</div>`:k>100?c+=`<div class="text-xs text-primary mt-1">${e("need_score_msg")} ${k}... ${e("impossible")}</div>`:k<=0&&(c+=`<div class="text-xs text-green-500 mt-1">${e("passed_msg")}</div>`)}return c},i=()=>{const n=t.querySelector("#gc-list");n.innerHTML="",d.forEach((h,a)=>{const s=document.createElement("div");s.className="flex items-center gap-2 mb-2",s.innerHTML=`
                <input type="text" placeholder="${e("assessment_name")}" class="w-full bg-gray-50 rounded-lg px-2 py-1 text-xs border border-transparent focus:bg-white focus:border-primary focus:outline-none transition-colors" value="${T(h.name)}" data-idx="${a}" data-key="name">
                <input type="number" placeholder="${e("grade")}" class="w-16 bg-gray-50 rounded-lg px-2 py-1 text-xs border border-transparent focus:bg-white focus:border-primary focus:outline-none transition-colors text-center" value="${h.grade}" data-idx="${a}" data-key="grade">
                <input type="number" placeholder="%" class="w-12 bg-gray-50 rounded-lg px-2 py-1 text-xs border border-transparent focus:bg-white focus:border-primary focus:outline-none transition-colors text-center" value="${h.weight}" data-idx="${a}" data-key="weight">
                <button class="text-gray-300 hover:text-primary transition-colors" data-idx="${a}">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            `,s.querySelectorAll("input").forEach(p=>{p.oninput=v=>{const k=v.target.dataset.key;d[a][k]=v.target.value,o()}}),s.querySelector("button").onclick=()=>{d.splice(a,1),o(),i(),t.querySelector("#gc-result").innerHTML=""},n.appendChild(s)})};t.innerHTML=`
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
    `,i(),t.querySelector("#gc-add-btn").onclick=()=>{d.push({id:Date.now(),name:e("new_assessment"),grade:"",weight:10}),o(),i()},t.querySelector("#gc-calc-btn").onclick=()=>{t.querySelector("#gc-result").innerHTML=l()},t.querySelector("#gc-reset-btn").onclick=()=>{d.forEach(n=>{n.grade=""}),o(),i(),t.querySelector("#gc-result").innerHTML=""}}function _e(t){if(!t)return;let d=0,o=0,l=null,i=!1;t.innerHTML=`
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
    `;const n=t.querySelector("#sw-display"),h=t.querySelector("#sw-btn-toggle"),a=t.querySelector("#sw-btn-reset"),s=p=>{const v=new Date(p),k=String(v.getUTCMinutes()).padStart(2,"0"),S=String(v.getUTCSeconds()).padStart(2,"0"),x=String(Math.floor(v.getUTCMilliseconds()/10)).padStart(2,"0");return`<span class="align-top">${k}:</span>${S}<span class="text-gray-400 text-2xl align-baseline">.${x}</span>`};n.innerHTML=s(0);const c=()=>{o=Date.now()-d,n.innerHTML=s(o)};h.onclick=()=>{i?(clearInterval(l),i=!1,h.innerText="Start",h.classList.remove("bg-primary","hover:opacity-90"),h.classList.add("bg-primary","hover:opacity-90")):(d=Date.now()-o,l=setInterval(c,30),i=!0,h.innerText=e("stop"),h.classList.remove("bg-primary","hover:opacity-90"),h.classList.add("bg-primary","hover:opacity-90"))},a.onclick=()=>{i&&(clearInterval(l),clearInterval(l),i=!1,h.innerText=e("start"),h.classList.remove("bg-primary","hover:opacity-90"),h.classList.add("bg-primary","hover:opacity-90")),o=0,d=0,n.innerHTML=s(0)}}function Le(t){if(!t)return;let d="menu",o=[];const l=()=>{if(d==="menu")t.innerHTML=`
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
            `,t.querySelector("#btn-yesno").onclick=()=>{d="yesno",l()},t.querySelector("#btn-picker").onclick=()=>{d="picker",l()};else if(d==="yesno"){t.innerHTML=`
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
            `,t.querySelector("#btn-back").onclick=()=>{d="menu",l()};const i=t.querySelector("#yn-result");t.querySelector("#yn-decide").onclick=()=>{i.innerText="...",t.querySelector("#yn-decide").disabled=!0,setTimeout(()=>{const n=[e("ans_yes"),e("ans_no"),e("maybe"),e("ans_no"),e("ans_yes")],h=n[Math.floor(Math.random()*n.length)];i.innerText=h,h===e("ans_yes")?i.className="text-5xl font-bold text-primary mb-4 min-h-[3rem] tracking-wider":h===e("ans_no")?i.className="text-5xl font-bold text-red-500 mb-4 min-h-[3rem] tracking-wider":i.className="text-5xl font-bold text-gray-500 mb-4 min-h-[3rem] tracking-wider",t.querySelector("#yn-decide").disabled=!1},400)}}else if(d==="picker"){o.length===0&&(o=[e("option_a"),e("option_b")]),t.innerHTML=`
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
                        ${o.map((a,s)=>`
                            <div class="bg-white border border-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs flex items-center gap-2 shadow-sm">
                                ${T(a)}
                                <span class="text-gray-300 hover:text-red-400 cursor-pointer pointer-events-auto" data-idx="${s}">
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
            `,t.querySelector("#btn-back").onclick=()=>{d="menu",l()};const i=t.querySelector("#rp-input"),n=t.querySelector("#rp-add"),h=()=>{i.value.trim()&&(o.push(i.value.trim()),l())};n.onclick=h,i.onkeypress=a=>{a.key==="Enter"&&h()},t.querySelectorAll("[data-idx]").forEach(a=>{a.onclick=()=>{const s=parseInt(a.dataset.idx);o.splice(s,1),l()}}),t.querySelector("#rp-spin").onclick=()=>{if(o.length<2)return;const a=t.querySelector("#rp-result-overlay"),s=t.querySelector("#rp-winner");a.classList.remove("hidden"),s.innerText="...";let c=0;const p=setInterval(()=>{s.innerText=o[c%o.length],c++},80);setTimeout(()=>{clearInterval(p);const v=o[Math.floor(Math.random()*o.length)];s.innerText=v},1e3),t.querySelector("#rp-close-result").onclick=()=>{a.classList.add("hidden")}}}};l()}function Se(t){if(!t)return;const d=new Date().toLocaleDateString();let o;try{o=JSON.parse(localStorage.getItem("habit_tracker_data_v3")||"{}")}catch(c){console.error("Failed to parse habit data:",c),o={}}if(o.date!==d){const p=(o.habits||[]).map(v=>({...v,completed:!1}));o={date:d,habits:p};try{localStorage.setItem("habit_tracker_data_v3",JSON.stringify(o))}catch(v){console.error("Failed to save habit data:",v)}}const l=()=>{o.date=new Date().toLocaleDateString();try{localStorage.setItem("habit_tracker_data_v3",JSON.stringify(o))}catch(c){console.error("Failed to save habit state:",c)}i(),document.dispatchEvent(new Event("dataChanged"))},i=()=>{const c=o.habits.filter(x=>x.completed).length,p=o.habits.length,v=p===0?0:Math.round(c/p*100),k=t.querySelector("#hb-progress-bar"),S=t.querySelector("#hb-progress-text");k&&(k.style.width=`${v}%`),S&&(S.innerText=`${v}% ${e("done")}`)},n=()=>{const c=t.querySelector("#hb-list");if(c.innerHTML="",o.habits.length===0){c.innerHTML=`
                <div class="flex flex-col items-center justify-center h-full text-gray-400 gap-2 mt-4">
                    <svg class="w-8 h-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span class="text-xs">${e("no_habits_msg")}</span>
                </div>
            `;return}o.habits.forEach((p,v)=>{const k=document.createElement("div");k.className=`
                flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer group mb-2
                ${p.completed?"bg-primary/10 border-primary/20 shadow-sm":"bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm"}
            `,k.innerHTML=`
                <div class="flex items-center gap-3 overflow-hidden">
                    <div class="text-lg shrink-0 w-10 h-10 flex items-center justify-center rounded-full ${p.completed?"bg-white":"bg-gray-50"}">
                        ${p.icon}
                    </div>
                    <span class="text-sm font-bold truncate ${p.completed?"text-primary line-through opacity-70":"text-gray-700"}">
                        ${T(p.name)}
                    </span>
                </div>
                
                <div class="shrink-0 flex items-center gap-2">
                     <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                        ${p.completed?"border-primary bg-primary":"border-gray-300 group-hover:border-primary"}">
                        ${p.completed?'<svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>':""}
                     </div>
                     <button class="delete-btn opacity-0 group-hover:opacity-100 p-1 text-gray-300 hover:text-primary transition-all" data-idx="${v}">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                     </button>
                </div>
            `,k.onclick=S=>{S.target.closest(".delete-btn")||(p.completed=!p.completed,l(),n())},k.querySelector(".delete-btn").onclick=S=>{S.stopPropagation(),o.habits.splice(v,1),l(),n()},c.appendChild(k)}),i()};t.innerHTML=`
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
    `,n();const h=t.querySelector("#hb-input"),a=t.querySelector("#hb-add-btn"),s=()=>{const c=h.value.trim();if(c){const p=['<svg class="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>','<svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>','<svg class="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>','<svg class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'],v=p[Math.floor(Math.random()*p.length)];o.habits.push({id:Date.now(),name:c,completed:!1,icon:v}),h.value="",l(),n();const k=t.querySelector("#hb-list");k.scrollTop=k.scrollHeight}};a.onclick=s,h.onkeypress=c=>{c.key==="Enter"&&s()}}function ne(t){const d=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],o=["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"];m.weeklySchedule||(m.weeklySchedule={events:{}}),t.innerHTML=`
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
                            ${d.map(a=>`<th class="p-2 border-b border-gray-100 text-[10px] text-gray-400 font-bold uppercase text-center">${a}</th>`).join("")}
                        </tr>
                    </thead>
                    <tbody>
                        ${o.map((a,s)=>`
                            <tr>
                                <td class="p-2 border-b border-gray-50 text-[10px] text-gray-500 font-medium sticky left-0 bg-white z-10 text-center">${a}</td>
                                ${d.map((c,p)=>{const v=`${p}-${s}`,k=m.weeklySchedule.events[v]||"";return`
                                        <td class="p-1 border-b border-gray-50 border-r border-gray-50 last:border-r-0 relative group hover:bg-gray-50 transition-colors">
                                            <input 
                                                type="text" 
                                                class="w-full bg-transparent text-xs text-dark font-medium focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary/50 rounded px-1 py-1 text-center truncate placeholder-gray-200 transition-all schedule-input" 
                                                value="${T(k)}" 
                                                data-key="${v}"
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
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
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
    `,t.querySelectorAll(".schedule-input").forEach(a=>{a.addEventListener("change",s=>{const c=s.target.dataset.key,p=s.target.value;m.weeklySchedule.events[c]=p,D()}),a.addEventListener("focus",function(){this.select()})});const l=t.querySelector("#reset-schedule-btn"),i=t.querySelector("#schedule-reset-modal"),n=t.querySelector("#confirm-schedule-reset"),h=t.querySelector("#cancel-schedule-reset");l&&i&&(l.addEventListener("click",a=>{a.stopPropagation(),i.classList.remove("invisible","opacity-0"),i.classList.add("visible","opacity-100"),i.querySelector("div").classList.remove("scale-95"),i.querySelector("div").classList.add("scale-100")}),h.addEventListener("click",a=>{a.stopPropagation(),i.classList.add("invisible","opacity-0"),i.classList.remove("visible","opacity-100"),i.querySelector("div").classList.add("scale-95"),i.querySelector("div").classList.remove("scale-100")}),n.addEventListener("click",a=>{a.stopPropagation(),m.weeklySchedule.events={},D(),ne(t)}))}function J(t){const d=()=>{const o=localStorage.getItem("photo_widget_image");let l=parseFloat(localStorage.getItem("photo_widget_zoom")||"1");o?t.innerHTML=`
                <div class="w-full h-full relative group overflow-hidden rounded-3xl bg-gray-100 flex items-center justify-center">
                    <img id="dashboard-photo-img" src="${o}" class="w-full h-full object-cover pointer-events-none transition-transform duration-100 origin-center" style="transform: scale(${l})" alt="${e("dashboard_photo_alt")}">
                    
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
                         <input type="range" id="zoom-slider" min="1" max="3" step="0.1" value="${l}" class="w-32 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary">
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
            `;const i=t.querySelector("#photo-input"),n=()=>{i.addEventListener("change",h=>{const a=h.target.files[0];if(a){const s=new FileReader;s.onload=c=>{const p=c.target.result;if(p.length>5*1024*1024){alert(e("image_too_large"));return}try{localStorage.setItem("photo_widget_image",p),localStorage.setItem("photo_widget_zoom","1"),d()}catch{alert(e("storage_full"))}},s.readAsDataURL(a)}})};if(o){const h=t.querySelector("#btn-change-photo"),a=t.querySelector("#btn-toggle-zoom"),s=t.querySelector("#btn-delete-photo"),c=t.querySelector("#zoom-controls"),p=t.querySelector("#zoom-slider"),v=t.querySelector("#btn-zoom-out"),k=t.querySelector("#btn-zoom-in"),S=t.querySelector("#dashboard-photo-img"),x=t.querySelector("#photo-delete-modal"),y=t.querySelector("#cancel-delete-photo"),C=t.querySelector("#confirm-delete-photo");h.addEventListener("click",_=>{_.stopPropagation(),i.click()}),a.addEventListener("click",_=>{_.stopPropagation(),c.classList.contains("invisible")?(c.classList.remove("invisible","opacity-0","translate-y-4"),c.classList.add("visible","opacity-100","translate-y-0")):(c.classList.add("invisible","opacity-0","translate-y-4"),c.classList.remove("visible","opacity-100","translate-y-0"))});const $=_=>{S.style.transform=`scale(${_})`,p.value=_,localStorage.setItem("photo_widget_zoom",_)};p.addEventListener("input",_=>{$(_.target.value)}),k.addEventListener("click",_=>{_.stopPropagation();let H=parseFloat(p.value);H=Math.min(H+.1,3),$(H)}),v.addEventListener("click",_=>{_.stopPropagation();let H=parseFloat(p.value);H=Math.max(H-.1,1),$(H)}),s.addEventListener("click",_=>{_.stopPropagation(),x.classList.remove("invisible","opacity-0"),x.classList.add("visible","opacity-100")}),y.addEventListener("click",_=>{_.stopPropagation(),x.classList.add("invisible","opacity-0"),x.classList.remove("visible","opacity-100")}),C.addEventListener("click",_=>{_.stopPropagation(),localStorage.removeItem("photo_widget_image"),localStorage.removeItem("photo_widget_zoom"),d()}),n()}else t.querySelector("#photo-placeholder").addEventListener("click",()=>{i.click()}),n()};d()}function Me(t){let d=!1;const o=()=>{const r=m.todos.filter(b=>!b.completed).length;e("no_upcoming_exams"),m.todos.length>0&&e("check_schedule");const g=document.getElementById("header-summary");g&&(g.innerHTML=`${e("summary_prefix")} <span class="font-bold text-dark">${m.courses.length} ${e("classes")}</span> & <span class="font-bold text-dark">${r} ${e("todos")}</span> ${e("summary_suffix")}`)};let l=null;const i=new Map,n=[{id:"stats-card-0",name:e("total_courses")},{id:"stats-card-1",name:e("completed")},{id:"stats-card-2",name:e("studyai")},{id:"chart-container",name:e("hours_spent")},{id:"time-container",name:e("time")},{id:"notes-container",name:e("quick_notes")},{id:"scratchpad-container",name:e("scratchpad")},{id:"pomodoro-container",name:e("focus_timer")},{id:"profile-container",name:e("profile")},{id:"exam-schedule-container",name:e("calendar")},{id:"todo-container",name:e("todo_list")},{id:"calculator-card",name:e("calculator")},{id:"bookmarks-container",name:e("bookmarks")},{id:"grade-calc-container",name:e("grade_calculation")},{id:"stopwatch-container",name:e("stopwatch")},{id:"games-container",name:e("mini_games")},{id:"habit-container",name:e("daily_habits")},{id:"weekly-schedule-container",name:e("weekly_schedule")},{id:"photo-container",name:e("photo_frame")}],h=()=>{const r=document.getElementById("dashboard-grid"),b=Array.from(r.children).map(L=>({id:L.id,className:L.className}));localStorage.setItem("dashboardLayout",JSON.stringify(b))},a=()=>{const r=localStorage.getItem("dashboardLayout");if(r)try{const g=JSON.parse(r);if(g.some(w=>!w.id)){console.warn("Invalid layout detected (missing IDs). Resetting layout."),localStorage.removeItem("dashboardLayout");return}const L=document.getElementById("dashboard-grid"),u=document.createDocumentFragment(),f=new Set;g.forEach(w=>{let z=document.getElementById(w.id)||i.get(w.id);if(!z&&w.id.startsWith("photo-widget-")){const N=document.createElement("div");N.id=w.id,N.className=w.className||"col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",N.draggable=!0,J(N,w.id),s(N),z=N}z&&(z.className=w.className,u.appendChild(z),i.delete(w.id),f.add(w.id))}),n.forEach(w=>{if(!f.has(w.id)){const z=document.getElementById(w.id)||i.get(w.id);z&&(u.appendChild(z),i.delete(w.id),f.add(w.id))}}),Array.from(L.children).forEach(w=>{i.set(w.id,w),w.remove()}),L.appendChild(u)}catch(g){console.error("Failed to load layout",g)}},s=r=>{const g=document.getElementById("dashboard-grid");if(!r.getAttribute("data-dnd-initialized")){if(r.setAttribute("data-dnd-initialized","true"),!r.querySelector(".resize-handle")&&r.id!=="weekly-schedule-container"){const b=document.createElement("div");b.className="resize-handle absolute bottom-2 right-2 w-6 h-6 bg-gray-100 hover:bg-primary rounded-full cursor-nwse-resize flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all z-20",b.innerHTML='<svg class="w-3 h-3 text-gray-500 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>',b.addEventListener("click",L=>{L.preventDefault(),L.stopPropagation(),r.classList.contains("md:col-span-2")?(r.classList.remove("md:col-span-2"),r.classList.add("col-span-1"),b.title="Maximize"):(r.classList.remove("col-span-1"),r.classList.add("md:col-span-2"),b.title="Minimize"),h()}),r.appendChild(b)}r.addEventListener("dragstart",b=>{l=r,b.dataTransfer.effectAllowed="move",b.dataTransfer.setData("source","grid"),setTimeout(()=>r.classList.add("opacity-0","scale-95"),0)}),r.addEventListener("dragend",()=>{r.classList.remove("opacity-0","scale-95"),l=null,g.querySelectorAll(".draggable-item").forEach(b=>b.classList.remove("ring-2","ring-primary","ring-offset-2"))}),r.addEventListener("dragover",b=>{b.preventDefault(),l&&l!==r&&r.classList.add("ring-2","ring-primary","ring-offset-2")}),r.addEventListener("dragleave",()=>{r.classList.remove("ring-2","ring-primary","ring-offset-2")}),r.addEventListener("drop",b=>{if(b.preventDefault(),b.stopPropagation(),r.classList.remove("ring-2","ring-primary","ring-offset-2"),l&&l.dataset&&l.dataset.widgetId){const L=l.dataset.widgetId,u=i.get(L);if(u){g.insertBefore(u,r),i.delete(L),s(u),h();const f=document.getElementById("manage-widgets-popup");f&&f.classList.add("invisible","opacity-0","scale-95")}return}if(l&&l!==r&&!l.dataset.widgetId){const L=g,u=document.createElement("div"),f=document.createElement("div");L.insertBefore(u,r),L.insertBefore(f,l),L.insertBefore(l,u),L.insertBefore(r,f),L.removeChild(u),L.removeChild(f),setTimeout(()=>h(),50)}})}};window.toggleManageDropdown=()=>{let r=document.getElementById("manage-widgets-popup");const g=document.getElementById("manage-widgets-list"),b=window.innerWidth<768;if(r&&g)if(r.classList.contains("visible")){r.classList.add("invisible","opacity-0","scale-95"),r.classList.remove("visible","opacity-100","scale-100"),r.parentNode===document.body&&setTimeout(()=>{const f=document.getElementById("widgets-popup-placeholder");f&&(f.parentNode.insertBefore(r,f),f.remove());const w=document.getElementById("mobile-widgets-header");w&&w.remove(),r.classList.add("absolute","top-full","right-0","mt-2","origin-top-right","scale-95"),r.classList.remove("fixed","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","z-[105]"),r.style.width="",r.style.maxHeight="",r.style.maxWidth="",r.style.margin="",g.classList.add("max-h-48"),g.classList.remove("max-h-[75vh]")},300);const u=document.getElementById("widgets-backdrop");u&&(u.classList.add("opacity-0"),setTimeout(()=>u.remove(),300))}else{r.classList.remove("invisible","opacity-0","scale-95"),r.classList.add("visible","opacity-100","scale-100"),g.innerHTML="";const u=g.querySelector(".available-widgets-header");if(u&&u.remove(),b){const f=document.createElement("div");f.id="widgets-popup-placeholder",f.style.display="none",r.parentNode.insertBefore(f,r),document.body.appendChild(r),g.classList.remove("max-h-48"),g.classList.add("max-h-[75vh]"),r.classList.remove("absolute","top-full","right-0","mt-2","origin-top-right","scale-95"),r.classList.add("fixed","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","z-[105]"),r.style.width="90vw",r.style.maxHeight="85vh",r.style.maxWidth="400px",r.style.margin="0";let w=document.getElementById("widgets-backdrop");if(w||(w=document.createElement("div"),w.id="widgets-backdrop",w.className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity opacity-0",w.onclick=window.toggleManageDropdown,document.body.appendChild(w),requestAnimationFrame(()=>w==null?void 0:w.classList.remove("opacity-0"))),!document.getElementById("mobile-widgets-header")){const z=document.createElement("div");z.id="mobile-widgets-header",z.className="flex md:hidden items-center justify-between px-0 pb-3 mb-2 border-b border-gray-100",z.innerHTML=`
                            <h3 class="font-bold text-dark text-lg">${e("available_widgets")}</h3>
                            <button onclick="toggleManageDropdown()" class="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        `,r.insertBefore(z,r.firstChild)}}if(b){const f=document.getElementById("manage-widgets-dropzone");f&&(f.style.display="none");const w=document.createElement("div");w.className="w-full py-3 bg-primary/10 border border-primary/20 text-primary rounded-xl font-bold text-xs shadow-sm flex items-center justify-center gap-2 mb-4 cursor-pointer active:scale-95 transition-all",w.innerHTML=`
                       <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                       ${e("add_photo_widget")}
                    `,w.onclick=q=>{q.preventDefault();const R=document.getElementById("dashboard-grid"),O=`photo-widget-${Date.now()}`,V=document.createElement("div");V.id=O,V.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",J(V),R.appendChild(V),s(V),h(),window.toggleManageDropdown(),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},g.appendChild(w);const z=document.createElement("p");z.className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4 ml-1",z.innerText=e("active")||"ACTIVE",g.appendChild(z);const N=document.getElementById("dashboard-grid"),P=Array.from(N.children);if(P.length===0){const q=document.createElement("div");q.className="text-xs text-gray-400 italic p-2",q.innerText="No active widgets",g.appendChild(q)}else P.forEach(q=>{let R="Unknown Widget";const O=n.find(F=>F.id===q.id);O?R=O.name:q.id.startsWith("photo-widget-")&&(R=e("photo_frame"));const V=document.createElement("div");V.className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl mb-2 shadow-sm",V.innerHTML=`
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span class="text-xs font-bold text-dark">${R}</span>
                                </div>
                                <button class="text-gray-400 hover:text-red-500 transition-colors p-1">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            `,V.onclick=()=>{i.set(q.id,q),q.remove(),h(),window.toggleManageDropdown()},g.appendChild(V)});const j=P.map(q=>q.id),M=n.filter(q=>!j.includes(q.id)),B=[],A=[...M,...B];A.length>0&&A.forEach(q=>{const R=document.createElement("div");R.className="flex items-center justify-between p-3 bg-gray-50 border border-gray-100 rounded-xl mb-2 opacity-80 hover:opacity-100",R.innerHTML=`
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                                    <span class="text-xs font-bold text-gray-600">${q.name}</span>
                                </div>
                                <button class="text-primary hover:text-primary-dark transition-colors p-1">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                                </button>
                            `,R.onclick=()=>{const O=i.get(q.id);O&&(N.appendChild(O),i.delete(q.id),s(O),h(),window.toggleManageDropdown())},g.appendChild(R)})}else{const f=document.getElementById("manage-widgets-dropzone");f&&(f.style.display="block");const w=document.createElement("div");w.className="w-full py-2.5 bg-primary text-white rounded-xl font-bold text-xs shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:opacity-90 transition-all mb-3 cursor-pointer",w.draggable=!0,w.innerHTML=`
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    ${e("add_photo_widget")}
                    `,w.onclick=j=>{j.preventDefault();const M=document.getElementById("dashboard-grid"),B=`photo-widget-${Date.now()}`,A=document.createElement("div");A.id=B,A.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",A.draggable=!0,J(A),M.appendChild(A),s(A),h(),r.classList.add("invisible","opacity-0","scale-95")},w.addEventListener("dragstart",j=>{l=w,j.dataTransfer.effectAllowed="copy",j.dataTransfer.setData("source","generator"),j.dataTransfer.setData("type","photo-widget"),w.classList.add("opacity-50")}),w.addEventListener("dragend",()=>{w.classList.remove("opacity-50"),l=null}),g.appendChild(w);const z=document.getElementById("dashboard-grid"),N=Array.from(z.children).map(j=>j.id),P=n.filter(j=>!N.includes(j.id));if(P.length===0){const j=document.createElement("div");j.innerHTML=e("all_widgets_active"),j.className="text-xs text-gray-400 text-center py-2",g.appendChild(j)}else P.forEach(j=>{const M=document.createElement("div");M.className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors mb-2",M.draggable=!0,M.dataset.widgetId=j.id,M.innerHTML=`
                                <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                                <span class="text-xs font-bold text-gray-600">${j.name}</span>
                            `,M.onclick=B=>{B.preventDefault();const A=document.getElementById("dashboard-grid"),q=i.get(j.id);if(q&&(A.appendChild(q),i.delete(j.id),s(q),h(),M.remove(),g.children.length===1)){const R=document.createElement("div");R.innerHTML=e("all_widgets_active"),R.className="text-xs text-gray-400 text-center py-2",g.appendChild(R)}},M.addEventListener("dragstart",B=>{l=M,B.dataTransfer.effectAllowed="copy",B.dataTransfer.setData("source","picker"),B.dataTransfer.setData("widgetId",j.id),M.classList.add("opacity-50")}),M.addEventListener("dragend",()=>{M.classList.remove("opacity-50"),l=null}),g.appendChild(M)})}}};let c="general";window.toggleSettingsModal=()=>{let r=document.getElementById("settings-modal");const g=window.innerWidth<768;if(r){if(r.classList.contains("visible")){r.classList.add("invisible","opacity-0","scale-95"),r.classList.remove("visible","opacity-100","scale-100"),r.parentNode===document.body&&setTimeout(()=>{const u=document.getElementById("settings-modal-placeholder");u&&(u.parentNode.insertBefore(r,u),u.remove()),r.classList.add("absolute","top-full","right-0","mt-2","origin-top-right"),r.classList.remove("fixed","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","z-[105]"),r.style.width="",r.style.maxHeight="",r.style.maxWidth="",r.style.margin=""},300);const L=document.getElementById("settings-backdrop");L&&(L.classList.add("opacity-0"),setTimeout(()=>L.remove(),300))}else if(p(),r.classList.remove("invisible","opacity-0","scale-95"),r.classList.add("visible","opacity-100","scale-100"),g){const L=document.createElement("div");L.id="settings-modal-placeholder",L.style.display="none",r.parentNode.insertBefore(L,r),document.body.appendChild(r),r.classList.remove("absolute","top-full","right-0","mt-2","origin-top-right","scale-95"),r.classList.add("fixed","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","z-[105]"),r.style.width="85vw",r.style.maxHeight="70vh",r.style.maxWidth="360px",r.style.margin="0 auto";let u=document.getElementById("settings-backdrop");u||(u=document.createElement("div"),u.id="settings-backdrop",u.className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity opacity-0",u.onclick=window.toggleSettingsModal,document.body.appendChild(u),requestAnimationFrame(()=>u==null?void 0:u.classList.remove("opacity-0")))}}},window.switchSettingsTab=r=>{c=r,p()},window.changeTheme=r=>{const g={emerald:"5 150 105",blue:"37 99 235",pink:"236 72 153",orange:"234 88 12",rose:"225 29 72",lila:"178 106 251"};g[r]&&(document.documentElement.style.setProperty("--color-primary-rgb",g[r]),m.user.themePreference=r,m.user.customThemeRgb=null,D(),p(),m.user.bgPreference==="theme"&&(document.body.style.backgroundColor=`rgb(${g[r]} / 0.04)`))},window.changeBgPreference=r=>{m.user.bgPreference=r,r==="theme"?document.body.style.backgroundColor="rgb(var(--color-primary-rgb) / 0.04)":document.body.style.backgroundColor="",D(),p()},window.updateProfileField=(r,g)=>{if(m.user[r]=g,D(),r==="name"){const L=document.getElementById("header-greeting");L&&(L.innerHTML=`${e("hello")}, ${T(g)}!`)}r==="avatar"&&p();const b=document.getElementById("profile-container");b&&(b.innerHTML="",ee(b,m.user))},window.checkDevPin=r=>{const g=document.getElementById("dev-pin-input"),b=document.getElementById("dev-lock-container");r.length>0?(g.classList.add("border-primary","bg-white"),g.classList.remove("border-gray-200","bg-gray-50")):(g.classList.remove("border-primary","bg-white"),g.classList.add("border-gray-200","bg-gray-50")),r.length===4&&(ue(r)?(g.classList.add("text-green-500","border-green-500"),b&&b.classList.add("scale-105","opacity-0"),setTimeout(()=>{d=!0,p()},300)):(g.classList.add("animate-shake","border-red-500","text-red-500"),setTimeout(()=>{g.value="",g.classList.remove("animate-shake","border-red-500","text-red-500"),g.focus()},500)))},window.toggleDevPremium=()=>{m.user.isPremium=!m.user.isPremium,D(),p();const r=document.getElementById("header-premium-btn");r&&(m.user.isPremium?(r.classList.remove("bg-primary","text-white","shadow-primary/30"),r.classList.add("bg-amber-100","text-amber-600","border-amber-200","shadow-amber-500/10"),r.innerHTML=`
                    <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    <span class="hidden md:inline">${e("premium_active")}</span>
                `,r.onclick=null):(r.classList.add("bg-primary","text-white","shadow-primary/30"),r.classList.remove("bg-amber-100","text-amber-600","border-amber-200","shadow-amber-500/10"),r.innerHTML=`
                    <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    <span class="hidden md:inline">${e("premium")}</span>
                 `,r.onclick=window.togglePremiumModal))},window.togglePremiumModal=()=>{const r=document.getElementById("premium-modal");if(r){const g=r.querySelector(".modal-content");r.classList.contains("invisible")?(r.classList.remove("invisible","opacity-0"),r.classList.add("visible","opacity-100"),g&&(g.classList.remove("scale-95"),g.classList.add("scale-100"))):(r.classList.add("invisible","opacity-0"),r.classList.remove("visible","opacity-100"),g&&(g.classList.add("scale-95"),g.classList.remove("scale-100")))}},window.exportData=()=>{if(toggleSettingsModal(),!m.user.isPremium){togglePremiumModal();return}const r="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(m,null,2)),g=document.createElement("a");g.setAttribute("href",r);const b=new Date().toISOString().slice(0,10);g.setAttribute("download",`studyhub_backup_${b}.json`),document.body.appendChild(g),g.click(),g.remove()},window.triggerImportData=()=>{if(toggleSettingsModal(),!m.user.isPremium){togglePremiumModal();return}let r=document.getElementById("import-file-input");r||(r=document.createElement("input"),r.type="file",r.id="import-file-input",r.accept=".json",r.className="hidden",r.onchange=window.handleFileImport,document.body.appendChild(r)),r.click()},window.handleFileImport=r=>{const g=r.target.files[0];if(!g)return;const b=new FileReader;b.onload=L=>{try{const u=JSON.parse(L.target.result);u.user&&u.stats?confirm(e("overwrite_confirm"))&&(Object.keys(m).forEach(f=>delete m[f]),Object.assign(m,u),D(),location.reload()):alert(e("invalid_backup"))}catch(u){console.error(u),alert(e("parse_error"))}},b.readAsText(g),r.target.value=""};const p=()=>{const r=document.getElementById("settings-content-area");if(document.querySelectorAll(".settings-tab-btn").forEach(b=>{b.dataset.tab===c?(b.classList.add("text-primary","bg-primary/10"),b.classList.remove("text-gray-500","hover:bg-gray-50")):(b.classList.remove("text-primary","bg-primary/10"),b.classList.add("text-gray-500","hover:bg-gray-50"))}),c==="general"){const b={emerald:"5 150 105",blue:"37 99 235",pink:"236 72 153",orange:"234 88 12",rose:"225 29 72",lila:"178 106 251"},L=Object.keys(b).map(u=>{const f=b[u].split(" ").join(","),w=(m.user.themePreference||"emerald")===u;return`
                    <button onclick="changeTheme('${u}')" class="group relative h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 ring-2 ring-offset-2 w-full ${w?"":"ring-transparent hover:ring-gray-200"} bg-gray-50 border border-gray-100 overflow-hidden" 
                            style="${w?`--tw-ring-color: rgb(${f});`:""}">
                        <div class="w-5 h-5 rounded-full shadow-sm relative z-10" style="background-color: rgb(${f})"></div>
                        ${w?`
                            <div class="absolute inset-0" style="background-color: rgba(${f}, 0.1)"></div>
                            <div class="absolute bottom-1 w-1 h-1 rounded-full" style="background-color: rgb(${f})"></div>
                        `:""}
                    </button>
                    `}).join("");r.innerHTML=`
                <div class="space-y-4">
                     <!-- Theme Color Section -->
                     <div class="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                        <h4 class="font-bold text-dark text-sm mb-1">${e("theme_color")}</h4>
                        <p class="text-xs text-gray-500 mb-3">${e("personalize_accent")}</p>
                        
                        <div class="grid grid-cols-6 gap-2">
                            ${L}
                        </div>

                        <!-- Background Preference -->
                        <div class="mt-4 pt-4 border-t border-gray-200/50">
                            <h4 class="font-bold text-dark text-sm mb-2">${e("background_style")}</h4>
                             <div class="flex gap-2">
                                <button onclick="changeBgPreference('default')" class="flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${m.user.bgPreference==="default"?"bg-white border-primary text-primary shadow-sm":"bg-gray-100/50 border-transparent text-gray-500 hover:bg-gray-100"}">
                                    ${e("default")}
                                </button>
                                <button onclick="changeBgPreference('theme')" class="flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${m.user.bgPreference==="theme"?"bg-primary/10 border-primary text-primary shadow-sm":"bg-gray-100/50 border-transparent text-gray-500 hover:bg-gray-100"}">
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
                    <div class="p-4 rounded-xl border ${m.user.isPremium?"border-amber-200 bg-amber-50/30":"border-gray-100 bg-gray-50/50"} relative overflow-hidden">
                        ${m.user.isPremium?"":`
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
                            <button onclick="exportData()" class="flex-1 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:text-primary hover:border-primary transition-all flex items-center justify-center gap-2 shadow-sm ${m.user.isPremium?"":"opacity-70"}">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                ${e("export_data")}
                            </button>
                             <button onclick="triggerImportData()" class="flex-1 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:text-primary hover:border-primary transition-all flex items-center justify-center gap-2 shadow-sm ${m.user.isPremium?"":"opacity-70"}">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                ${e("import_data")}
                            </button>
                        </div>
                    </div>
                </div>
            `}else if(c==="language"){window.changeLanguage=L=>{m.user.language=L,D(),location.reload()};const b=m.user.language||"tr";r.innerHTML=`
                     <div class="space-y-3">
                        <!-- English -->
                         <div onclick="changeLanguage('en')" class="flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-all ${b==="en"?"bg-primary/5 border-primary/20 shadow-sm":"bg-white border-gray-200 hover:bg-gray-50"}">
                            <div class="flex items-center gap-3">
                                <div>
                                    <p class="text-sm font-bold text-dark">English</p>
                                    <p class="text-[10px] text-gray-500">${e("default")}</p>
                                </div>
                            </div>
                            <div class="w-4 h-4 rounded-full flex items-center justify-center ${b==="en"?"bg-primary":"border border-gray-300"}">
                                ${b==="en"?'<svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>':""}
                            </div>
                        </div>

                        <!-- Turkish -->
                        <div onclick="changeLanguage('tr')" class="flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-all ${b==="tr"?"bg-primary/5 border-primary/20 shadow-sm":"bg-white border-gray-200 hover:bg-gray-50"}">
                            <div class="flex items-center gap-3">
                                <div>
                                    <p class="text-sm font-bold text-dark">Türkçe</p>
                                    <p class="text-[10px] text-gray-500">Türkçe</p>
                                </div>
                            </div>
                            <div class="w-4 h-4 rounded-full flex items-center justify-center ${b==="tr"?"bg-primary":"border border-gray-300"}">
                                ${b==="tr"?'<svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>':""}
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
                `}else if(c==="profile"){const b=["🎓","🚀","⭐","🧠","🦁","⚡"];r.innerHTML=`
                <div class="space-y-6">
                    <!-- Avatar Selection -->
                    <div class="flex flex-col items-center">
                        <div class="w-20 h-20 rounded-full bg-primary/10 text-4xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20 border-4 border-white relative">
                             ${m.user.avatar?`<span>${m.user.avatar}</span>`:'<svg class="w-10 h-10 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>'}
                             <div class="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white z-10">
                                <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                             </div>
                        </div>
                        
                        <div class="flex gap-2 p-1 bg-gray-50 rounded-2xl border border-gray-100 items-center">
                            ${b.map(L=>`
                                <button onclick="updateProfileField('avatar', '${L}')" class="w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-all ${m.user.avatar===L?"bg-white shadow-md text-primary scale-110":"hover:bg-white/50 text-gray-400 grayscale hover:grayscale-0"}">
                                    ${L}
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
                            <input type="text" oninput="updateProfileField('name', this.value)" value="${m.user.name||""}" class="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-bold text-dark text-sm" placeholder="${e("your_name_placeholder")}">
                        </div>
                        
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">${e("university")}</label>
                            <input type="text" oninput="updateProfileField('university', this.value)" value="${m.user.university||""}" class="w-full px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-dark text-sm placeholder-gray-400" placeholder="${e("uni_name_placeholder")}">
                        </div>

                         <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">${e("department")}</label>
                            <input type="text" oninput="updateProfileField('department', this.value)" value="${m.user.department||""}" class="w-full px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-dark text-sm placeholder-gray-400" placeholder="${e("major_placeholder")}">
                        </div>
                    </div>

                     <!-- Plan Info -->
                    ${m.user.isPremium?`
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
                            <button onclick="toggleSettingsModal(); togglePremiumModal()" class="px-3 py-1.5 bg-white border border-gray-200 text-xs font-bold text-primary rounded-lg shadow-sm hover:bg-gray-50 transition-all">
                                ${e("upgrade")}
                            </button>
                        </div>
                    `}
                    
                    <div class="pt-2 text-center">
                         <p class="text-[10px] text-gray-400">${e("changes_saved")}</p>
                    </div>
                </div>
            `}else c==="about"?r.innerHTML=`
                <div class="p-4 bg-gray-50/50 rounded-xl border border-gray-100 text-center">
                    <img src="logo.png" class="w-16 h-16 mx-auto mb-3 rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300" alt="StudyHub Logo">
                    <h4 class="font-bold text-dark text-lg mb-1">StudyHub</h4>
                    <p class="text-xs text-gray-500 mb-4">${e("version")} 1.0.0 • ${e("basic_edition")}</p>
                </div>
            `:c==="developer"&&(d?r.innerHTML=`
                    <div class="space-y-4">
                         <div class="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                            <h4 class="font-bold text-dark text-sm mb-1">${e("developer_mode")}</h4>
                            <p class="text-xs text-gray-500 mb-4">${e("dev_desc")}</p>
                            
                            <div class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                                <div>
                                    <p class="text-sm font-bold text-dark">${e("enable_premium")}</p>
                                    <p class="text-[10px] text-gray-500">${e("unlock_desc")}</p>
                                </div>
                                
                                <button onclick="toggleDevPremium()" class="w-12 h-6 rounded-full transition-colors relative ${m.user.isPremium?"bg-primary":"bg-gray-300"}">
                                    <div class="w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${m.user.isPremium?"left-7":"left-1"}"></div>
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
                `,setTimeout(()=>{const b=document.getElementById("dev-pin-input");b&&b.focus()},100)))};t.innerHTML=`
    <!-- Header -->
    <header class="sticky top-0 z-30 bg-white/80 md:bg-transparent backdrop-blur-xl px-4 md:px-8 pt-4 md:pt-8 pb-3 md:pb-4 flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-between items-start md:items-center mb-2 md:mb-4 gap-0 md:gap-4 border-b md:border-b-0 border-gray-100 transition-all">
      
      <!-- Left: Greeting -->
      <div class="w-full md:w-auto md:flex-1 min-w-[200px] mb-4 md:mb-0">
        <h1 id="header-greeting" class="text-2xl md:text-3xl font-bold text-dark truncate">${e("hello")}, ${m.user.name}!</h1>
        <p id="header-summary" class="text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1 truncate">${e("loading_summary")}</p>
      </div>

      <!-- Right: Actions -->
      <div class="flex items-center gap-2 md:gap-4 shrink-0 w-full md:w-auto justify-start md:justify-end">
        
        <!-- Mobile Logout Button -->
        <button onclick="window.logout()" class="lg:hidden w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-gray-400 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors border border-gray-100 shadow-sm" title="${e("logout")}">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
        </button>

        <!-- Manage Widgets Button (Mobile: Smaller) -->
        <div class="relative">
            <button id="manage-widgets-btn" onclick="toggleManageDropdown()" class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-gray-400 rounded-full hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100 shadow-sm" title="${e("manage_widgets")}">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            </button>
            <div id="manage-widgets-popup" class="absolute top-full right-0 mt-2 w-64 bg-white p-4 rounded-xl shadow-xl border border-gray-100 opacity-0 invisible transition-all z-50 transform origin-top-right scale-95">
                <div class="flex justify-between items-center mb-3 hidden md:flex">
                    <p class="text-xs font-bold text-dark">${e("available_widgets")}</p>
                </div>
                <div id="manage-widgets-dropzone" class="mb-3 border-2 border-dashed border-primary/20 bg-primary/5 rounded-lg p-3 text-center transition-colors">
                     <p class="text-[10px] text-primary/60">${e("drag_remove")}</p>
                </div>
                <div id="manage-widgets-list" class="max-h-48 overflow-y-auto custom-scrollbar"></div>
            </div>
        </div>

        <!-- Premium Button (Mobile: Icon only or Compact) -->
        ${m.user.isPremium?`
             <button id="header-premium-btn" class="w-10 h-10 md:w-auto md:h-10 md:px-4 md:py-2 bg-amber-100 text-amber-600 border border-amber-200 rounded-full md:rounded-xl font-bold text-sm shadow-sm md:shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all flex items-center justify-center md:justify-start gap-2">
                <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                <span class="hidden md:inline">Premium</span>
            </button>
        `:`
            <button id="header-premium-btn" onclick="togglePremiumModal()" class="w-10 h-10 md:w-auto md:h-10 md:px-4 md:py-2 bg-primary text-white rounded-full md:rounded-xl font-bold text-sm shadow-sm md:shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all flex items-center justify-center md:justify-start gap-2">
                <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                <span class="hidden md:inline">${e("premium")}</span>
            </button>
        `}

        <!-- Settings Button (Mobile: Smaller) -->
        <div class="relative">
             <button id="settings-btn" onclick="toggleSettingsModal()" class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-gray-400 rounded-full hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100 shadow-sm" title="${e("settings")}">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </button>
            
            <!-- Settings Modal (Dropdown Style but larger) -->
            <div id="settings-modal" class="absolute top-full right-0 mt-2 w-[88vw] md:w-96 max-w-[400px] bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible transition-all z-50 transform origin-top-right scale-95 overflow-hidden">
                <!-- Mobile Header -->
                <div class="flex md:hidden items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                    <h3 class="font-bold text-dark text-lg">${e("settings")}</h3>
                    <button onclick="toggleSettingsModal()" class="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <!-- Header Tabs -->
                <div class="flex overflow-x-auto border-b border-gray-100 bg-gray-50/50 no-scrollbar touch-pan-x">
                    <button onclick="switchSettingsTab('general')" data-tab="general" class="settings-tab-btn flex-none px-4 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap">${e("general")}</button>
                    <button onclick="switchSettingsTab('profile')" data-tab="profile" class="settings-tab-btn flex-none px-4 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap">${e("profile")}</button>
                    <button onclick="switchSettingsTab('language')" data-tab="language" class="settings-tab-btn flex-none px-4 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap">${e("language")}</button>
                    <button onclick="switchSettingsTab('about')" data-tab="about" class="settings-tab-btn flex-none px-4 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap">${e("about")}</button>
                    <button onclick="switchSettingsTab('developer')" data-tab="developer" class="settings-tab-btn flex-none px-4 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap">${e("developer")}</button>
                </div>
                
                <!-- Content Area -->
                <div id="settings-content-area" class="p-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    <!-- Default Content (General) -->
                    <!-- Injected by renderSettingsContent() -->
                </div>
            </div>
        </div>

      </div>
    </header>

    
    <!-- Main Widget Grid -->
    <div id="dashboard-grid" class="px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20 md:pb-10">
        <!-- Grid content will be populated by JavaScript to ensure correct order and structural integrity -->
    </div>

    <!-- Premium Modal -->
    <div id="premium-modal" class="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm flex items-center justify-center invisible opacity-0 transition-all duration-300 px-4">
        <div class="modal-content bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden transform scale-95 transition-all duration-300 flex flex-col max-h-[90vh]">
            
            <!-- Header -->
            <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
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
            <div class="px-8 py-6 overflow-y-auto custom-scrollbar">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Basic Plan -->
                    <div class="rounded-3xl border-2 border-gray-100 p-5 flex flex-col relative overflow-hidden">
                        <div class="mb-4">
                            <h3 class="text-xl font-bold text-gray-600 mb-2">${e("basic")}</h3>
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

                        <button class="w-full py-4 bg-gray-100 text-gray-500 font-bold rounded-2xl cursor-default">${e("current_plan")}</button>
                    </div>

                    <!-- Premium Plan -->
                    <div class="rounded-3xl border-2 border-primary/20 bg-primary/5 p-5 flex flex-col relative overflow-hidden group">
                        <div class="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-2xl uppercase tracking-wider shadow-lg shadow-primary/20">
                            ${e("recommended")}
                        </div>

                        <div class="mb-4">
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
                    <div class="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium text-center">
                        <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        <span>${e("secure_payment")}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  `;const v=ge(m.stats),k=document.createElement("div");k.innerHTML=v;const S=Array.from(k.children);if(S&&S.length>=4){const r=t.querySelector("#dashboard-grid");r.innerHTML="",r.appendChild(S[0]),r.appendChild(S[1]),r.appendChild(S[2]);const g=document.createElement("div");g.id="profile-container",g.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",g.draggable=!0,r.appendChild(g);const b=document.createElement("div");b.id="chart-container",b.className="col-span-1 md:col-span-2 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",b.draggable=!0,r.appendChild(b);const L=document.createElement("div");L.id="time-container",L.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",L.draggable=!0,r.appendChild(L);const u=document.createElement("div");u.id="notes-container",u.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",u.draggable=!0,r.appendChild(u);const f=document.createElement("div");f.id="pomodoro-container",f.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",f.draggable=!0,r.appendChild(f),r.appendChild(S[3]);const w=document.createElement("div");w.id="todo-container",w.className="col-span-1 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",w.draggable=!0,w.innerHTML='<div id="todo-content" class="w-full h-full"></div>',r.appendChild(w);const z=document.createElement("div");z.id="exam-schedule-container",z.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",z.draggable=!0,r.appendChild(z);const N=document.createElement("div");N.id="scratchpad-container",N.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",N.draggable=!0,r.appendChild(N);const P=document.createElement("div");P.id="bookmarks-container",P.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",P.draggable=!0,r.appendChild(P);const j=document.createElement("div");j.id="grade-calc-container",j.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",j.draggable=!0,r.appendChild(j);const M=document.createElement("div");M.id="stopwatch-container",M.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",M.draggable=!0,r.appendChild(M);const B=document.createElement("div");B.id="games-container",B.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",B.draggable=!0,r.appendChild(B);const A=document.createElement("div");A.id="habit-container",A.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",A.draggable=!0,r.appendChild(A);const q=document.createElement("div");q.id="weekly-schedule-container",q.className="col-span-1 md:col-span-2 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",q.draggable=!0,r.appendChild(q);const R=document.createElement("div");R.id="photo-container",R.className="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out",R.draggable=!0,r.appendChild(R)}X(document.querySelector("#chart-container"),m.chartData),ye(document.querySelector("#time-container")),be(document.querySelector("#notes-container")),fe(document.querySelector("#pomodoro-container")),ie(document.querySelector("#exam-schedule-container"),m.todos,m.exams),ee(document.querySelector("#profile-container"),m.user),xe(document.querySelector("#scratchpad-container")),we(document.querySelector("#bookmarks-container")),ke(document.querySelector("#grade-calc-container")),_e(document.querySelector("#stopwatch-container")),Le(document.querySelector("#games-container")),Se(document.querySelector("#habit-container")),ne(document.querySelector("#weekly-schedule-container")),J(document.querySelector("#photo-container")),a();const x=document.getElementById("weekly-schedule-container");x&&x.classList.contains("h-96")&&(x.classList.remove("h-96"),x.classList.add("h-80")),o();const y=document.getElementById("dashboard-grid");y.querySelectorAll(".draggable-item").forEach(s),y.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer.dropEffect="move";const g=t,b=100,L=15;if(g){const u=g.getBoundingClientRect();r.clientY<u.top+b?g.scrollTop-=L:r.clientY>u.bottom-b&&(g.scrollTop+=L)}}),y.addEventListener("drop",r=>{if(r.preventDefault(),l&&l.dataset&&l.dataset.widgetId){const g=l.dataset.widgetId,b=i.get(g);if(b){y.appendChild(b),i.delete(g),s(b),h();const L=document.getElementById("manage-widgets-popup");L&&L.classList.add("invisible","opacity-0","scale-95")}return}l&&!l.dataset.widgetId&&y.contains(l)&&(y.appendChild(l),h())}),window.manualSaveLayout=()=>{h();const r=document.getElementById("settings-save-icon");if(r){const g=r.innerHTML;r.classList.add("text-primary"),r.classList.remove("text-gray-400"),r.innerHTML='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />',setTimeout(()=>{r.classList.add("text-gray-400"),r.classList.remove("text-primary"),r.innerHTML=g},1e3)}},window.confirmResetLayout=()=>{toggleSettingsModal();const r=document.createElement("div");r.className="fixed inset-0 z-[60] flex items-center justify-center bg-dark/50 backdrop-blur-sm opacity-0 transition-opacity duration-300 px-4",r.innerHTML=`
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
        `,document.body.appendChild(r),requestAnimationFrame(()=>{r.classList.remove("opacity-0"),r.querySelector("div").classList.remove("scale-95"),r.querySelector("div").classList.add("scale-100")});const g=()=>{r.classList.add("opacity-0"),r.querySelector("div").classList.remove("scale-100"),r.querySelector("div").classList.add("scale-95"),setTimeout(()=>r.remove(),300)};r.querySelector("#cancel-reset-layout").onclick=g,r.onclick=b=>{b.target===r&&g()},r.querySelector("#confirm-reset-layout-btn").onclick=()=>{localStorage.removeItem("dashboardLayout"),location.reload()}},document.getElementById("edit-widgets-modal")&&document.getElementById("edit-widgets-modal").remove(),setTimeout(()=>{const r=document.getElementById("manage-widgets-dropzone");r&&(r.addEventListener("dragover",g=>{g.preventDefault(),g.dataTransfer.dropEffect="move",r.classList.remove("border-primary/20","bg-primary/5"),r.classList.add("border-primary/50","bg-primary/10")}),r.addEventListener("dragleave",()=>{r.classList.add("border-primary/20","bg-primary/5"),r.classList.remove("border-primary/50","bg-primary/10")}),r.addEventListener("drop",g=>{if(g.preventDefault(),r.classList.add("border-primary/20","bg-primary/5"),r.classList.remove("border-primary/50","bg-primary/10"),l&&!l.dataset.widgetId&&l.classList.contains("draggable-item")){const b=l.id;i.set(b,l),l.remove(),h(),window.toggleManageDropdown(),window.toggleManageDropdown()}}))},500);const $=document.querySelector("#todo-content"),_=(r=null,g=null)=>{$&&he($,m.todos,r,g)};window.dashboardHandlersInitialized||(window.addNewTodo=()=>{},window.toggleTodo=r=>{m.todos[r]&&(m.todos[r].completed=!m.todos[r].completed,document.dispatchEvent(new Event("dataChanged")))},window.editTodo=r=>_(r,null),window.saveEditTodo=r=>{const g=document.getElementById(`edit-title-${r}`),b=document.getElementById(`edit-date-${r}`),L=document.getElementById(`edit-time-${r}`);g&&m.todos[r]&&(m.todos[r].title=g.value||m.todos[r].title,m.todos[r].date=b.value||null,m.todos[r].time=L.value||"",document.dispatchEvent(new Event("dataChanged")),_(null,null))},window.cancelEditTodo=()=>_(null,null),window.deleteTodo=r=>_(null,r),window.confirmDeleteTodo=r=>{m.todos.splice(r,1),document.dispatchEvent(new Event("dataChanged"))},window.cancelDeleteTodo=()=>_(null,null),window.addSpecificTodo=r=>{if(r){const g=new Date,b=`${g.getFullYear()}-${String(g.getMonth()+1).padStart(2,"0")}-${String(g.getDate()).padStart(2,"0")}`;m.todos.push({title:r,subject:"General",time:"09:00",completed:!1,date:b}),document.dispatchEvent(new Event("dataChanged"))}},window.dashboardHandlersInitialized=!0),_();const H=()=>{const r=m.todos?m.todos.filter(f=>f.completed).length:0,g=JSON.parse(localStorage.getItem("habit_tracker_data_v3")||"{}"),b=g.habits?g.habits.filter(f=>f.completed).length:0,L=r+b,u=document.getElementById("stats-card-1");if(u){const f=u.querySelector(".text-3xl");f&&(f.innerText=L);const w=document.getElementById("stat-todo-count");w&&(w.innerText=r);const z=document.getElementById("stat-habit-count");z&&(z.innerText=b)}},E=()=>{_(null,null),ie(document.querySelector("#exam-schedule-container"),m.todos,m.exams),o(),H()};document.removeEventListener("dataChanged",E),document.addEventListener("dataChanged",E);const I=()=>{const r=document.getElementById("header-greeting");r&&(r.innerText=`${e("hello")}, ${m.user.name}!`)};document.removeEventListener("profileUpdated",I),document.addEventListener("profileUpdated",I),window.aiCoachInitialized||(window.openAiCoach=()=>{let r=document.getElementById("ai-coach-modal");if(!r){const b=`
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
                                    <h3 class="font-bold text-dark">StudyAI</h3>
                                    <p class="text-xs text-green-600 font-medium">${e("always_online")}</p>
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
                                    ${e("studyai_dashboard_intro")}
                                </div>
                            </div>
                        </div>

                        <!-- Input Area -->
                        <div class="p-4 bg-white border-t border-gray-100 flex gap-2">
                             <input type="text" id="ai-chat-input" class="flex-1 bg-gray-50 border-none rounded-xl px-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all" placeholder="${e("ask_me_anything")}" onkeypress="if(event.key === 'Enter') window.sendAiMessage()">
                             <button onclick="window.sendAiMessage()" class="p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/30 hover:opacity-90 transition-all hover:scale-105 active:scale-95">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                             </button>
                        </div>
                    </div>
                </div>`;document.body.insertAdjacentHTML("beforeend",b),r=document.getElementById("ai-coach-modal")}r.classList.remove("invisible","opacity-0");const g=r.querySelector("#ai-coach-card");g.classList.remove("scale-95"),g.classList.add("scale-100"),setTimeout(()=>document.getElementById("ai-chat-input").focus(),100)},window.closeAiCoach=()=>{const r=document.getElementById("ai-coach-modal");if(r){r.classList.add("invisible","opacity-0");const g=r.querySelector("#ai-coach-card");g.classList.add("scale-95"),g.classList.remove("scale-100")}},window.sendAiMessage=()=>{const r=document.getElementById("ai-chat-input"),g=document.getElementById("ai-chat-messages"),b=r.value.trim();if(b){const L=`
                    <div class="flex gap-3 max-w-[85%] self-end">
                        <div class="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-md shadow-primary/20 text-sm">
                            ${b}
                        </div>
                    </div>
                `;g.insertAdjacentHTML("beforeend",L),r.value="",g.scrollTop=g.scrollHeight,setTimeout(()=>{let u=e("ai_resp_default");b.toLowerCase().includes("schedule")||b.toLowerCase().includes("plan")?u=e("ai_resp_schedule"):b.toLowerCase().includes("motivat")?u=e("ai_resp_motivation"):b.toLowerCase().includes("help")&&(u=e("ai_resp_help"));const f=`
                        <div class="flex gap-3 max-w-[85%] animate-fade-in-up">
                            <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 border border-gray-100">
                                ${u}
                            </div>
                        </div>
                     `;g.insertAdjacentHTML("beforeend",f),g.scrollTop=g.scrollHeight},1e3)}},window.aiCoachInitialized=!0),setTimeout(()=>{const r=document.getElementById("calc-display"),g=document.querySelectorAll(".calc-btn");r&&g.length>0&&g.forEach(b=>{b.addEventListener("click",L=>{const u=b.getAttribute("data-val");if(L.stopPropagation(),u==="C")r.value="0";else if(u==="=")try{const f=r.value.replace(/×/g,"*").replace(/÷/g,"/");if(!/^[\d+\-*/().%\s]+$/.test(f))throw new Error("Invalid characters");const z=(N=>{const j=N.replace(/\s/g,"").replace(/(\d+(?:\.\d+)?)%/g,"($1/100)"),B=new Function("return "+j)();if(!isFinite(B))throw new Error("Invalid result");return B})(f);r.value=Number.isInteger(z)?z:parseFloat(z.toFixed(8))}catch{r.value="Error"}else r.value==="0"||r.value==="Error"?r.value=u:r.value+=u}),b.setAttribute("draggable","true"),b.addEventListener("dragstart",L=>{L.preventDefault(),L.stopPropagation()}),b.addEventListener("mousedown",L=>{L.stopPropagation()})})},500)}function $e(t,d){let o=1,l="🎓",i="emerald",n="default",h=160,a=84,s=39;const c=x=>{const y=p[x];if(y){const[C,$,_]=y.split(" ").map(Number),[H,E,I]=Ce(C,$,_);h=H,a=E,s=I}},p={emerald:"5 150 105",blue:"37 99 235",pink:"236 72 153",orange:"234 88 12",rose:"225 29 72",lila:"178 106 251"};c(i),document.documentElement.style.setProperty("--color-primary-rgb",p[i]);const v=()=>{t.innerHTML=`
        <div class="fixed inset-0 z-[100] flex items-center justify-center bg-white bg-gradient-to-br from-primary/40 via-gray-50 to-primary/20 backdrop-blur-md transition-all duration-500">
            
            <div class="relative w-[90%] md:w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] md:max-h-[90vh] transition-all transform duration-500 border border-white/50">
                
                <!-- Decorative Header Background -->
                <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/10 to-primary/5 -z-10"></div>
                <div class="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <!-- Header -->
                <div class="px-6 pt-10 pb-6 md:px-10 md:pt-10 md:pb-4 flex justify-between items-center">
                    <div>
                        <h1 class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-dark to-gray-600 tracking-tight">StudyHub</h1>
                        <p class="text-gray-400 text-xs md:text-sm font-medium mt-1">Your personal academic dashboard</p>
                    </div>
                    
                    <div class="flex items-center gap-2 whitespace-nowrap">
                        <div class="h-2 w-20 bg-gray-100 rounded-full overflow-hidden shrink-0">
                            <div class="h-full bg-primary transition-all duration-500 ease-out" style="width: ${o/3*100}%"></div>
                        </div>
                        <span class="text-xs font-bold text-gray-400 w-12 text-right">${e("step")} ${o}/3</span>
                    </div>
                </div>

                <!-- Content Body -->
                <div class="flex-1 px-6 py-4 md:px-10 md:py-6 overflow-y-auto custom-scrollbar">
                    
                    <!-- Step 1: Profile -->
                    <div class="step-content ${o===1?"block animate-fade-in-right":"hidden"}">
                        <h2 class="text-2xl font-bold text-dark mb-2">${e("lets_known_you")}</h2>
                        <p class="text-gray-500 mb-8">${e("call_you")}</p>
                        
                        <div class="space-y-6">
                            <!-- Name Input -->
                            <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">${e("full_name")}</label>
                                <input type="text" id="input-name" value="${T(m.user.name||"")}" class="w-full text-lg px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder-gray-300 font-bold text-dark" placeholder="${e("name_placeholder")}">
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
                                    <input type="text" id="input-university" value="${T(m.user.university||"")}" class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-dark placeholder-gray-300" placeholder="${e("uni_placeholder")}">
                                </div>
                            </div>

                             <div>
                                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">${e("department")}</label>
                                <div class="relative group">
                                     <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-300 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                    </div>
                                    <input type="text" id="input-dept" value="${T(m.user.department||"")}" class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-dark placeholder-gray-300" placeholder="${e("dept_placeholder")}">
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
                                ${Object.keys(p).map(x=>{const y=p[x].split(" ").join(","),C=i===x;return`
                                    <button class="theme-btn group relative h-12 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 ring-2 ring-offset-2 w-full ${C?"":"ring-transparent hover:ring-gray-200"} bg-gray-50 border border-gray-100 overflow-hidden" 
                                            style="${C?`--tw-ring-color: rgb(${y});`:""}"
                                            data-theme="${x}">
                                        <div class="w-6 h-6 rounded-full shadow-sm relative z-10" style="background-color: rgb(${y})"></div>
                                        ${C?`
                                            <div class="absolute inset-0" style="background-color: rgba(${y}, 0.1)"></div>
                                            <div class="absolute bottom-1 w-1.5 h-1.5 rounded-full" style="background-color: rgb(${y})"></div>
                                        `:""}
                                    </button>
                                    `}).join("")}
                            </div>

                             <!-- Background Preference -->
                            <div class="mt-4">
                                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Background Style</label>
                                <div class="grid grid-cols-2 gap-4">
                                    <button class="bg-pref-btn group relative p-3 rounded-2xl border-2 transition-all text-left flex flex-col gap-2 ${n==="default"?"border-primary bg-primary/5 ring-1 ring-primary":"border-gray-100 bg-white hover:border-gray-200"}" data-bg="default">
                                        <div class="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 mb-1"></div>
                                        <div>
                                            <span class="block text-sm font-bold text-dark">${e("default")}</span>
                                            <span class="text-[10px] text-gray-400 font-medium">${e("clean_gray")}</span>
                                        </div>
                                        ${n==="default"?'<div class="absolute top-3 right-3 text-primary"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>':""}
                                    </button>

                                    <button class="bg-pref-btn group relative p-3 rounded-2xl border-2 transition-all text-left flex flex-col gap-2 ${n==="theme"?"border-primary bg-primary/5 ring-1 ring-primary":"border-gray-100 bg-white hover:border-gray-200"}" data-bg="theme">
                                        <div class="w-8 h-8 rounded-full border border-primary/20 mb-1 bg-primary/20"></div>
                                        <div>
                                            <span class="block text-sm font-bold text-dark">${e("theme_tint")}</span>
                                            <span class="text-[10px] text-gray-400 font-medium">${e("pastel_look")}</span>
                                        </div>
                                        ${n==="theme"?'<div class="absolute top-3 right-3 text-primary"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>':""}
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
                <div class="px-6 py-4 md:px-10 md:py-6 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
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
        `,k()},k=()=>{t.querySelectorAll(".avatar-btn").forEach(H=>{H.addEventListener("click",()=>{l=H.dataset.avatar,v(),o===1&&setTimeout(()=>document.getElementById("input-name").focus(),50)})}),t.querySelectorAll(".theme-btn").forEach(H=>{H.addEventListener("click",()=>{i=H.dataset.theme,c(i);const E=le(h,a,s).join(" ");document.documentElement.style.setProperty("--color-primary-rgb",E),v()})}),t.querySelectorAll(".bg-pref-btn").forEach(H=>{H.addEventListener("click",()=>{n=H.dataset.bg,n==="theme"?document.body.style.backgroundColor="rgb(var(--color-primary-rgb) / 0.04)":document.body.style.backgroundColor="",v()})});const x=t.querySelector("#btn-next"),y=t.querySelector("#btn-back"),C=document.getElementById("input-name"),$=document.getElementById("input-university"),_=document.getElementById("input-dept");C&&C.addEventListener("input",H=>m.user.name=H.target.value),$&&$.addEventListener("input",H=>m.user.university=H.target.value),_&&_.addEventListener("input",H=>m.user.department=H.target.value),x.addEventListener("click",()=>{if(o===1&&(!m.user.name||!m.user.name.trim())){document.getElementById("input-name").classList.add("ring-2","ring-red-500","border-red-500");return}if(o===2){if(!m.user.university||!m.user.university.trim()){document.getElementById("input-university").classList.add("ring-2","ring-red-500","border-red-500");return}if(!m.user.department||!m.user.department.trim()){document.getElementById("input-dept").classList.add("ring-2","ring-red-500","border-red-500");return}}o<3?(o++,v()):S()}),y.addEventListener("click",()=>{o>1&&(o--,v())})},S=()=>{m.user.avatar=l,m.user.isSetup=!0,m.user.themePreference=i;const[x,y,C]=le(h,a,s);m.user.customThemeRgb=`${x} ${y} ${C}`,m.user.bgPreference=n,D();const $=t.querySelector(".fixed");t.querySelector(".relative").classList.add("scale-95","opacity-0","-translate-y-4"),$.classList.add("opacity-0"),setTimeout(()=>{t.innerHTML="",d()},500)};v()}function Ce(t,d,o){t/=255,d/=255,o/=255;const l=Math.max(t,d,o),i=Math.min(t,d,o);let n,h,a=(l+i)/2;if(l===i)n=h=0;else{const s=l-i;switch(h=a>.5?s/(2-l-i):s/(l+i),l){case t:n=(d-o)/s+(d<o?6:0);break;case d:n=(o-t)/s+2;break;case o:n=(t-d)/s+4;break}n/=6}return[n*360,h*100,a*100]}function le(t,d,o){t/=360,d/=100,o/=100;let l,i,n;if(d===0)l=i=n=o;else{const h=(c,p,v)=>(v<0&&(v+=1),v>1&&(v-=1),v<.16666666666666666?c+(p-c)*6*v:v<.5?p:v<.6666666666666666?c+(p-c)*(.6666666666666666-v)*6:c),a=o<.5?o*(1+d):o+d-o*d,s=2*o-a;l=h(s,a,t+1/3),i=h(s,a,t),n=h(s,a,t-1/3)}return[Math.round(l*255),Math.round(i*255),Math.round(n*255)]}function je(t){m.courses||(m.courses=[],D());let d=null;const o=()=>{const a=document.getElementById("courses-grid").querySelector(".grid");if(!a)return;const c=Array.from(a.children).map(p=>p.getAttribute("data-course-id"));localStorage.setItem("coursesLayout",JSON.stringify(c))},l=()=>{const a=localStorage.getItem("coursesLayout");if(!a)return m.courses;try{const s=JSON.parse(a).map(v=>parseInt(v)),c=new Map(m.courses.map(v=>[v.id,v])),p=[];return s.forEach(v=>{c.has(v)&&(p.push(c.get(v)),c.delete(v))}),c.forEach(v=>p.push(v)),p}catch(s){return console.error("Failed to parse course layout",s),m.courses}},i=a=>{const s=document.getElementById("courses-grid").querySelector(".grid");a.addEventListener("dragstart",c=>{d=a,c.dataTransfer.effectAllowed="move",c.dataTransfer.setData("text/plain",a.id),requestAnimationFrame(()=>{a.classList.add("opacity-50","scale-95")})}),a.addEventListener("dragend",()=>{a.classList.remove("opacity-50","scale-95"),d=null,s&&s.querySelectorAll(".draggable-item").forEach(c=>{c.classList.remove("ring-2","ring-primary","ring-offset-2","z-30"),c.classList.remove("ring-2","ring-primary")})}),a.addEventListener("dragover",c=>{c.preventDefault(),d&&d!==a&&a.classList.add("ring-2","ring-primary","z-30")}),a.addEventListener("dragleave",c=>{a.contains(c.relatedTarget)||a.classList.remove("ring-2","ring-primary","z-30")}),a.addEventListener("drop",c=>{if(c.preventDefault(),c.stopPropagation(),a.classList.remove("ring-2","ring-primary","z-30"),d&&d!==a){const p=s,v=Array.from(p.children),k=v.indexOf(d),S=v.indexOf(a);k<S?p.insertBefore(d,a.nextSibling):p.insertBefore(d,a),o()}})},n=()=>{const a=l();t.innerHTML=`
        <div class="p-4 md:p-8 h-full flex flex-col relative">
            <header class="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-4">
                 <div class="flex items-center gap-4 w-full md:w-auto">
                    <button onclick="window.navigateTo('dashboard')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100 shrink-0">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <h1 class="text-2xl md:text-3xl font-bold text-dark truncate">${e("my_courses")}</h1>
                 </div>
                 
                 <button id="add-course-btn" class="w-full md:w-auto px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-bold text-sm shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    ${e("new_course")}
                </button>
            </header>
            
            <div id="courses-grid" class="flex-1 overflow-y-auto custom-scrollbar pb-20 md:pb-0">
                ${a.length===0?`
                    <div class="h-full flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-3xl mx-2 md:mx-0">
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
                        ${a.map(s=>`
                            <div 
                                id="course-card-${s.id}"
                                data-course-id="${s.id}"
                                draggable="true"
                                onclick="window.navigateTo('course-detail', { id: ${s.id} })" 
                                class="bg-white rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative border border-gray-100 cursor-pointer draggable-item flex flex-col overflow-hidden h-52"
                            >
                                <!-- Header Strip -->
                                <div class="px-6 pt-6 flex justify-between items-start relative z-10">
                                    <div class="w-14 h-14 rounded-2xl bg-white shadow-sm text-primary flex items-center justify-center font-black text-2xl border border-primary/30 z-10">
                                        ${T(s.name).charAt(0).toUpperCase()}
                                    </div>
                                    
                                    <!-- Actions -->
                                     <div class="flex gap-1 z-20">
                                        <button class="text-gray-400 hover:text-primary hover:bg-white/80 p-1.5 rounded-lg transition-all edit-course-btn" data-id="${s.id}">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                        </button>
                                        <button class="text-gray-400 hover:text-red-500 hover:bg-white/80 p-1.5 rounded-lg transition-all delete-course-btn" data-id="${s.id}">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                    
                                    <!-- Decorative circle -->
                                    <div class="absolute -top-10 -right-10 w-32 h-32 bg-primary/15 rounded-full blur-2xl pointer-events-none"></div>
                                </div>

                                <!-- Body -->
                                    <div class="px-6 pb-6 pt-2 flex flex-col flex-1">
                                    <div class="flex items-center gap-2 mb-1">
                                        ${s.code?`<span class="px-2.5 py-0.5 rounded-md bg-gray-50 text-gray-400 text-[10px] font-bold tracking-wider uppercase border border-gray-100">${T(s.code)}</span>`:""}
                                        <span class="h-1 w-1 rounded-full bg-gray-300"></span>
                                        <span class="text-[10px] font-bold text-gray-300 uppercase tracking-widest">${e("course_caps")}</span>
                                    </div>
                                    
                                    <h3 class="text-xl font-bold text-dark truncate leading-tight mb-2" title="${T(s.name)}">${T(s.name)}</h3>
                                    
                                    <div class="mt-auto flex items-center justify-between pt-3 border-t border-gray-50/50">
                                        <div class="text-xs text-gray-400 line-clamp-1 max-w-[60%]">
                                            ${T(s.note)||`<span class="opacity-50 italic">${e("no_details")}</span>`}
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
            <div id="add-course-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300 px-4">
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
             <div id="delete-course-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300 px-4">
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
        `,h(),t.querySelectorAll(".draggable-item").forEach(i)},h=()=>{const a=t.querySelector("#add-course-modal"),s=a.querySelector("div"),c=t.querySelector("#add-course-btn"),p=t.querySelector("#close-modal-btn"),v=t.querySelector("#step-1"),k=t.querySelector("#step-2"),S=t.querySelector("#next-step-btn"),x=t.querySelector("#prev-step-btn"),y=t.querySelector("#finish-step-btn"),C=t.querySelector("#wizard-step-indicator"),$=t.querySelector("#wizard-progress"),_=t.querySelector("#course-name-input"),H=t.querySelector("#course-code-input"),E=t.querySelector("#course-instructor-input"),I=t.querySelector("#course-email-input"),r=t.querySelector("#course-schedule-input"),g=t.querySelector("#course-location-input"),b=t.querySelector("#course-note-input");let L="blue",u=null;const f=t.querySelector("#modal-title"),w=()=>{v.classList.remove("hidden"),k.classList.add("hidden"),x.classList.add("hidden"),S.classList.remove("hidden"),y.classList.add("hidden"),C.textContent=e("step_1_basic"),$.style.width="50%",_.value="",H&&(H.value=""),E&&(E.value=""),I&&(I.value=""),r&&(r.value=""),g&&(g.value=""),b&&(b.value=""),_.classList.remove("ring-2","ring-red-500/50","border-red-500"),L="blue"},z=()=>{u=null,f&&(f.textContent=e("new_course_setup")),y&&(y.textContent=e("create_course")),w(),a.classList.remove("invisible","opacity-0"),a.classList.add("visible","opacity-100"),s.classList.remove("scale-95"),s.classList.add("scale-100"),setTimeout(()=>_.focus(),100)},N=V=>{const F=m.courses.find(W=>W.id===V);F&&(u=V,f&&(f.textContent=e("edit_course_setup")),y&&(y.textContent=e("save")),w(),_.value=F.name,H&&(H.value=F.code||""),E&&(E.value=F.instructor||""),I&&(I.value=F.email||""),r&&(r.value=F.schedule||""),g&&(g.value=F.location||""),b&&(b.value=F.note||""),L=F.color||"blue",a.classList.remove("invisible","opacity-0"),a.classList.add("visible","opacity-100"),s.classList.remove("scale-95"),s.classList.add("scale-100"))},P=()=>{a.classList.add("invisible","opacity-0"),a.classList.remove("visible","opacity-100"),s.classList.add("scale-95"),s.classList.remove("scale-100")};c.addEventListener("click",z),p.addEventListener("click",P),S.addEventListener("click",()=>{if(!_.value.trim()){_.classList.add("ring-2","ring-red-500/50","border-red-500"),_.focus();return}_.classList.remove("ring-2","ring-red-500/50","border-red-500"),v.classList.add("hidden"),k.classList.remove("hidden"),x.classList.remove("hidden"),S.classList.add("hidden"),y.classList.remove("hidden"),C.textContent=e("step_2_logistics"),$.style.width="100%"}),x.addEventListener("click",()=>{v.classList.remove("hidden"),k.classList.add("hidden"),x.classList.add("hidden"),S.classList.remove("hidden"),y.classList.add("hidden"),C.textContent=e("step_1_basic"),$.style.width="50%"}),y.addEventListener("click",()=>{const V=_.value.trim(),F=H?H.value.trim():"",W=E?E.value.trim():"",te=I?I.value.trim():"",re=r?r.value.trim():"",oe=g?g.value.trim():"",ae=b?b.value.trim():"";if(u){const G=m.courses.find(de=>de.id===u);G&&(G.name=V,G.code=F,G.instructor=W,G.email=te,G.schedule=re,G.location=oe,G.note=ae,G.color=L)}else{const G={id:Date.now(),name:V,code:F,color:L,instructor:W,email:te,schedule:re,location:oe,note:ae,resources:[],aiSessions:[]};G.aiSessions.push({id:Date.now(),title:"General Chat",messages:[{sender:"ai",text:e("studyai_intro").replace("{name}",V)}],timestamp:Date.now()}),G.currentSessionId=G.aiSessions[0].id,m.courses.push(G),m.stats.courses.total=m.courses.length}D(),P(),n()});const j=t.querySelector("#delete-course-modal"),M=j.querySelector("div"),B=t.querySelector("#cancel-delete-btn"),A=t.querySelector("#confirm-delete-btn");let q=null;const R=()=>{j.classList.add("invisible","opacity-0"),j.classList.remove("visible","opacity-100"),M.classList.add("scale-95"),M.classList.remove("scale-100"),q=null},O=V=>{q=V,j.classList.remove("invisible","opacity-0"),j.classList.add("visible","opacity-100"),M.classList.remove("scale-95"),M.classList.add("scale-100")};t.querySelectorAll(".delete-course-btn").forEach(V=>{V.addEventListener("click",F=>{F.stopPropagation(),O(parseInt(V.dataset.id))})}),t.querySelectorAll(".edit-course-btn").forEach(V=>{V.addEventListener("click",F=>{F.stopPropagation(),N(parseInt(V.dataset.id))})}),B.addEventListener("click",R),A.addEventListener("click",()=>{if(q){m.courses=m.courses.filter(F=>F.id!==q),m.stats.courses.total=m.courses.length,D();const V=localStorage.getItem("coursesLayout");if(V){let F=JSON.parse(V);F=F.filter(W=>parseInt(W)!==q),localStorage.setItem("coursesLayout",JSON.stringify(F))}R(),n()}}),_.addEventListener("input",()=>{_.classList.remove("ring-2","ring-red-500/50","border-red-500")})};n()}const Be=t=>(t=t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.*?)\*/g,"<em>$1</em>"),t);function Ee(t,d){const o=m.courses.find(n=>n.id===d);if(!o){t.innerHTML=`
            <div class="flex flex-col items-center justify-center h-full">
                <h2 class="text-2xl font-bold text-gray-400">${e("course_not_found")}</h2>
                <button onclick="window.navigateTo('courses')" class="mt-4 text-primary hover:underline">${e("back_to_courses")}</button>
            </div>
        `;return}if(o.resources||(o.resources=[],D()),o.instructor===void 0&&(o.instructor=""),o.email===void 0&&(o.email=""),o.location===void 0&&(o.location=""),o.schedule===void 0&&(o.schedule=""),!o.aiSessions){const n=o.chatHistory||[{sender:"ai",text:e("studyai_intro").replace("{name}",o.name)}];o.aiSessions=[{id:Date.now(),title:"General Chat",messages:n,timestamp:Date.now()}],o.currentSessionId=o.aiSessions[0].id,delete o.chatHistory,D()}const l=()=>{const n=o.aiSessions.find(h=>h.id===o.currentSessionId)||o.aiSessions[0];if(!n){o.currentSessionId=o.aiSessions[0].id,D(),l();return}t.innerHTML=`
        <div class="p-8 h-full flex flex-col relative">
            <header class="flex justify-between items-center mb-8">
                 <div class="flex items-center gap-4">
                    <button onclick="window.navigateTo('courses')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors shadow-sm border border-gray-100">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <div class="flex items-center gap-3">
                         <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                             ${T(o.name).charAt(0).toUpperCase()}
                        </div>
                        <h1 class="text-3xl font-bold text-dark truncate max-w-lg" title="${T(o.name)}">${T(o.name)}</h1>
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
                                <p class="text-dark font-bold text-sm truncate" title="${T(o.instructor||"")}">${T(o.instructor||"")||`<span class="text-gray-300 font-normal italic">${e("not_set")}</span>`}</p>
                                ${o.email?`<a href="mailto:${T(o.email)}" class="text-xs text-blue-500 hover:underline cursor-pointer truncate block" title="${T(o.email)}">${T(o.email)}</a>`:""}
                             </div>
                        </div>
                        
                        <!-- Schedule Card -->
                         <div class="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                             <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center shrink-0">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             </div>
                             <div class="min-w-0">
                                <p class="text-[10px] text-gray-400 font-bold uppercase mb-0.5">${e("schedule_time")}</p>
                                <p class="text-dark font-bold text-sm truncate" title="${T(o.schedule||"")}">${T(o.schedule||"")||`<span class="text-gray-300 font-normal italic">${e("not_set")}</span>`}</p>
                             </div>
                        </div>

                        <!-- Location Card -->
                         <div class="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                             <div class="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                             </div>
                             <div class="min-w-0">
                                 <p class="text-[10px] text-gray-400 font-bold uppercase mb-0.5">${e("location_platform")}</p>
                                 <p class="text-dark font-bold text-sm truncate" title="${T(o.location||"")}">${T(o.location||"")||`<span class="text-gray-300 font-normal italic">${e("not_set")}</span>`}</p>
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
                                    ${o.resources.map(h=>`
                                        <li class="flex items-center justify-between p-3 bg-gray-50 rounded-xl group hover:bg-gray-100 transition-colors">
                                            <div class="flex items-center gap-3 min-w-0 flex-1">
                                                <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                                </div>
                                                <div class="truncate">
                                                    <p class="text-sm font-bold text-dark truncate">${T(h.name)}</p>
                                                    <p class="text-xs text-gray-400 truncate">${T(h.type||e("unknown_type"))}</p>
                                                </div>
                                            </div>
                                             <button class="delete-resource-btn text-gray-300 hover:text-primary p-1 transition-colors opacity-0 group-hover:opacity-100" data-id="${h.id}">
                                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            </button>
                                        </li>
                                    `).join("")}
                                </ul>
                             `}
                        </div>
                    </div>

                    <!-- StudyAI AI Assistant -->
                     <div class="border border-gray-100 rounded-2xl p-6 flex flex-col h-[500px] bg-gradient-to-br from-primary/5 via-white to-primary/10 relative overflow-hidden">
                         <!-- Header -->
                         <div class="flex justify-between items-start mb-4 z-10">
                             <div class="flex items-center gap-3">
                                 <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                     <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                 </div>
                                 <div class="flex flex-col">
                                     <h3 class="text-lg font-bold text-dark flex items-center gap-2">StudyAI</h3>
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
                             ${n.messages.map(h=>`
                                 <div class="flex ${h.sender==="user"?"justify-end":"justify-start"}">
                                     <div class="max-w-[85%] ${h.sender==="user"?"bg-primary text-white rounded-t-2xl rounded-bl-2xl shadow-lg shadow-primary/20":"bg-white border border-gray-100 text-gray-700 rounded-t-2xl rounded-br-2xl shadow-sm"} px-4 py-3 text-sm leading-relaxed">
                                         ${h.sender==="ai"?Q(Be(h.text)):T(h.text)}
                                     </div>
                                 </div>
                             `).join("")}
                         </div>

                         <!-- Input Area -->
                         <div class="relative z-10 mt-auto">
                             <form id="chat-form" class="relative items-end gap-2 flex">
                                 <input type="text" id="chat-input" 
                                     class="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm placeholder-gray-400" 
                                     placeholder="${e("ask_question_placeholder")} ${T(o.name)}..."
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
                                ${o.aiSessions.sort((h,a)=>a.timestamp-h.timestamp).map(h=>`
                                    <button class="history-item-btn w-full text-left p-3 rounded-xl text-xs transition-colors group relative ${h.id===o.currentSessionId?"bg-primary/10 text-primary font-bold":"hover:bg-gray-50 text-gray-500"}" data-id="${h.id}">
                                        <p class="truncate pr-6">${h.title}</p>
                                        <span class="text-[10px] opacity-60 block mt-1">${new Date(h.timestamp).toLocaleDateString()}</span>
                                        ${o.aiSessions.length>1?`
                                            <div class="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                 <span class="delete-session-btn block p-1 hover:text-primary cursor-pointer" data-id="${h.id}">
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
            <div id="delete-resource-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300 px-4">
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
            <div id="delete-course-detail-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300 px-4">
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
            <div id="edit-info-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300 px-4">
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
        `,i()},i=()=>{const n=t.querySelector("#chat-form"),h=t.querySelector("#chat-input"),a=t.querySelector("#chat-messages"),s=t.querySelector("#edit-info-modal");if(s){const E=s.querySelector("div"),I=t.querySelector("#edit-info-btn"),r=t.querySelector("#close-edit-info-btn"),g=t.querySelector("#save-info-btn"),b=t.querySelector("#info-instructor"),L=t.querySelector("#info-email"),u=t.querySelector("#info-schedule"),f=t.querySelector("#info-location");I&&I.addEventListener("click",()=>{s.classList.remove("invisible","opacity-0"),s.classList.add("visible","opacity-100"),E.classList.remove("scale-95"),E.classList.add("scale-100")});const w=()=>{s.classList.add("invisible","opacity-0"),s.classList.remove("visible","opacity-100"),E.classList.add("scale-95"),E.classList.remove("scale-100")};r&&r.addEventListener("click",w),g&&g.addEventListener("click",()=>{o.instructor=b.value.trim(),o.email=L.value.trim(),o.schedule=u.value.trim(),o.location=f.value.trim(),D(),w(),l()})}if(a&&(a.scrollTop=a.scrollHeight),n){n.addEventListener("submit",async P=>{P.preventDefault();const j=h.value.trim();if(!j)return;const M=o.aiSessions.find(B=>B.id===o.currentSessionId);M&&(M.messages.push({sender:"user",text:j}),M.messages.length===2&&(M.title=j.length>25?j.substring(0,25)+"...":j),M.timestamp=Date.now(),D(),l(),setTimeout(()=>{const B=["That's a great question! Based on typical course structures, you should focus on the core principles first.","I can certainly help with that. Could you provide a bit more context from your lecture notes?","Interesting point. This topic often relates to the previous module about fundamentals.","Here's a quick summary: The concept basically explains the relationship between variables in this context.",`Since this is **${o.name}**, remember to review the recommended readings for this week.`],A=B[Math.floor(Math.random()*B.length)];M.messages.push({sender:"ai",text:A}),M.timestamp=Date.now(),D(),l()},1500))});const E=t.querySelector("#new-chat-btn");E&&E.addEventListener("click",()=>{const P={id:Date.now(),title:e("new_conversation"),messages:[{sender:"ai",text:e("studyai_new_chat").replace("{name}",o.name)}],timestamp:Date.now()};o.aiSessions.push(P),o.currentSessionId=P.id,D(),l()});const I=t.querySelector("#history-toggle-btn"),r=t.querySelector("#history-sidebar"),g=t.querySelector("#close-history-btn");I&&r&&I.addEventListener("click",()=>{r.classList.remove("-translate-x-full")}),g&&r&&g.addEventListener("click",()=>{r.classList.add("-translate-x-full")});const b=t.querySelector("#delete-session-modal"),L=b.querySelector("div"),u=t.querySelector("#cancel-delete-session-btn"),f=t.querySelector("#confirm-delete-session-btn");let w=null;const z=P=>{w=P,b.classList.remove("invisible","opacity-0"),b.classList.add("visible","opacity-100"),L.classList.remove("scale-95"),L.classList.add("scale-100")},N=()=>{w=null,b.classList.add("invisible","opacity-0"),b.classList.remove("visible","opacity-100"),L.classList.add("scale-95"),L.classList.remove("scale-100")};r&&r.addEventListener("click",P=>{const j=P.target.closest(".delete-session-btn");if(j){P.stopPropagation();const B=parseInt(j.dataset.id);z(B);return}const M=P.target.closest(".history-item-btn");if(M){const B=parseInt(M.dataset.id);B!==o.currentSessionId?(o.currentSessionId=B,D(),l()):r.classList.add("-translate-x-full")}}),u&&u.addEventListener("click",N),f&&f.addEventListener("click",()=>{var P;if(w){if(o.aiSessions=o.aiSessions.filter(j=>j.id!==w),w===o.currentSessionId&&(o.currentSessionId=((P=o.aiSessions[0])==null?void 0:P.id)||null,!o.aiSessions.length)){const j=[{sender:"ai",text:e("studyai_intro").replace("{name}",o.name)}],M={id:Date.now(),title:"General Chat",messages:j,timestamp:Date.now()};o.aiSessions.push(M),o.currentSessionId=M.id}D(),N(),l()}}),t.querySelector("#clear-chat-modal")}const c=t.querySelector("#add-resource-btn"),p=t.querySelector("#file-upload-input"),v=t.querySelector("#delete-resource-modal"),k=v.querySelector("div"),S=t.querySelector("#cancel-delete-res-btn"),x=t.querySelector("#confirm-delete-res-btn");let y=null;const C=E=>{y=E,v.classList.remove("invisible","opacity-0"),v.classList.add("visible","opacity-100"),k.classList.remove("scale-95"),k.classList.add("scale-100")},$=()=>{y=null,v.classList.add("invisible","opacity-0"),v.classList.remove("visible","opacity-100"),k.classList.add("scale-95"),k.classList.remove("scale-100")};c&&c.addEventListener("click",()=>{p.click()}),p&&p.addEventListener("change",E=>{const I=E.target.files[0];I&&(o.resources.push({id:Date.now(),name:I.name,type:I.type||"Unknown Type",size:(I.size/1024).toFixed(1)+" KB"}),D(),l())}),t.querySelectorAll(".delete-resource-btn").forEach(E=>{E.addEventListener("click",I=>{I.preventDefault(),C(parseInt(E.dataset.id))})}),S&&S.addEventListener("click",$),x&&x.addEventListener("click",()=>{y&&(o.resources=o.resources.filter(E=>E.id!==y),D(),l())});const _=t.querySelector("#delete-course-detail-btn"),H=t.querySelector("#delete-course-detail-modal");if(H){const E=H.querySelector("div"),I=t.querySelector("#cancel-delete-course-detail-btn"),r=t.querySelector("#confirm-delete-course-detail-btn");_&&_.addEventListener("click",()=>{H.classList.remove("invisible","opacity-0"),H.classList.add("visible","opacity-100"),E.classList.remove("scale-95"),E.classList.add("scale-100")});const g=()=>{H.classList.add("invisible","opacity-0"),H.classList.remove("visible","opacity-100"),E.classList.add("scale-95"),E.classList.remove("scale-100")};I&&I.addEventListener("click",g),r&&r.addEventListener("click",()=>{m.courses=m.courses.filter(b=>b.id!==o.id),m.stats.courses.total=m.courses.length,D(),window.navigateTo("courses")})}};l()}function Te(t){if(!t)return;const d=()=>{const l=[...m.exams||[]].sort((i,n)=>new Date(i.date).getTime()-new Date(n.date).getTime());t.innerHTML=`
            <div class="p-4 md:p-8 h-full flex flex-col relative">
                <header class="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 shrink-0 gap-4">
                    <div class="flex items-center gap-4 w-full md:w-auto">
                        <button onclick="window.navigateTo('dashboard')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100 shrink-0">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <h1 class="text-2xl md:text-3xl font-bold text-dark truncate">${e("exams_title")}</h1>
                    </div>
                    <button id="add-exam-btn" class="w-full md:w-auto px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-bold text-sm shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0">
                         <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                        ${e("add_exam")}
                    </button>
                </header>

                <div class="flex-1 overflow-y-auto custom-scrollbar pr-2 pb-20 md:pb-0">
                    ${l.length===0?`
                        <div class="h-full flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-3xl mx-2 md:mx-0">
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
                        ${l.map(i=>{const n=new Date(i.date),a=n-new Date,s=Math.ceil(a/(1e3*60*60*24));let c="bg-primary/10 text-primary";s<3&&(c+=" animate-pulse");const p=n.toLocaleString("default",{month:"short"}).toUpperCase(),v=n.getDate(),k=n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return`
                            <div class="relative bg-white rounded-3xl drop-shadow-sm hover:drop-shadow-md transition-all group overflow-hidden flex h-32" 
                                 style="-webkit-mask-image: radial-gradient(circle at 6rem 0, transparent 0.75rem, black 0.85rem), radial-gradient(circle at 6rem 100%, transparent 0.75rem, black 0.85rem); mask-image: radial-gradient(circle at 6rem 0, transparent 0.75rem, black 0.85rem), radial-gradient(circle at 6rem 100%, transparent 0.75rem, black 0.85rem); -webkit-mask-composite: source-in; mask-composite: intersect;">
                                <!-- Left Stub -->
                                <div class="w-24 bg-primary/15 flex flex-col items-center justify-center p-3 border-r-2 border-dashed border-primary/30 shrink-0">
                                    <span class="text-xs font-bold text-primary/80 mb-0.5">${p}</span>
                                    <span class="text-3xl font-black text-primary leading-none">${v}</span>
                                    <span class="text-[10px] text-primary/70 mt-1.5 font-medium">${k}</span>
                                </div>

                                <!-- Main Ticket Content -->
                                <div class="flex-1 p-4 flex flex-col h-full relative">
                                    <!-- Actions (Top Right Absolute) -->
                                    <div class="absolute top-2 right-2 flex gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button class="text-gray-300 hover:text-primary transition-colors p-1 rounded-md hover:bg-primary/10 edit-exam-btn" data-id="${i.id}" title="${e("edit_exam")}">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                        </button>
                                        <button class="text-gray-300 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50 delete-exam-btn" data-id="${i.id}" title="${e("delete_exam")}">
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>

                                    <!-- Center Info -->
                                    <div class="flex-1 flex flex-col items-center justify-center text-center -mt-1">
                                        <h3 class="text-2xl font-black text-dark tracking-tight leading-none mb-1">${T(i.code)}</h3>
                                        <p class="text-sm text-gray-500 font-medium truncate max-w-[180px]">${T(i.name)}</p>
                                    </div>

                                    <!-- Footer -->
                                    <div class="mt-auto pt-2 border-t border-dashed border-primary/20 flex items-center justify-between w-full">
                                        <div class="flex items-center gap-2">
                                            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 uppercase tracking-wide border border-gray-100">${T(i.type)}</span>
                                            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${c}">${s>0?`${s} ${e("days_left")}`:e(s===0?"today_caps":"passed_caps")}</span>
                                        </div>
                                        <div class="flex items-center gap-1 text-gray-400 text-xs">
                                            <svg class="w-3.5 h-3.5 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            <span class="font-medium text-gray-500">${T(i.location)}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        `}).join("")}
                    </div>
                    `}

            <!-- Exam Wizard Modal -->
            <div id="add-exam-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300 px-4">
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
             <div id="delete-exam-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300 px-4">
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
        `,o()},o=()=>{const l=t.querySelector("#add-exam-modal"),i=l.querySelector("div"),n=t.querySelector("#add-exam-btn"),h=t.querySelector("#close-modal-btn"),a=t.querySelector("#step-1"),s=t.querySelector("#step-2"),c=t.querySelector("#next-step-btn"),p=t.querySelector("#prev-step-btn"),v=t.querySelector("#finish-step-btn"),k=t.querySelector("#wizard-step-indicator"),S=t.querySelector("#wizard-progress"),x=t.querySelector("#ex-name"),y=t.querySelector("#ex-code"),C=t.querySelector("#ex-type"),$=t.querySelector("#ex-date"),_=t.querySelector("#ex-time"),H=t.querySelector("#ex-loc");let E=null;const I=t.querySelector("#modal-title"),r=()=>{a.classList.remove("hidden"),s.classList.add("hidden"),p.classList.add("hidden"),c.classList.remove("hidden"),v.classList.add("hidden"),k.textContent=e("step_1_basic"),S.style.width="50%",x.value="",y.value="",$.value="",_.value="",H.value="",C.value="Midterm",[x,y,$,_].forEach(M=>M.classList.remove("ring-2","ring-red-500/50","border-red-500"))},g=()=>{E=null,I&&(I.textContent=e("new_exam_setup")),v&&(v.textContent=e("add_exam")),r(),l.classList.remove("invisible","opacity-0"),l.classList.add("visible","opacity-100"),i.classList.remove("scale-95"),i.classList.add("scale-100")},b=M=>{const B=m.exams.find(q=>q.id===M);if(!B)return;E=M,I&&(I.textContent=e("edit_exam_setup")),v&&(v.textContent=e("save")),r(),x.value=B.name,y.value=B.code,C.value=B.type,H.value=B.location||"";const A=new Date(B.date);if(!isNaN(A.getTime())){const q=A.getFullYear(),R=String(A.getMonth()+1).padStart(2,"0"),O=String(A.getDate()).padStart(2,"0");$.value=`${q}-${R}-${O}`;const V=String(A.getHours()).padStart(2,"0"),F=String(A.getMinutes()).padStart(2,"0");_.value=`${V}:${F}`}l.classList.remove("invisible","opacity-0"),l.classList.add("visible","opacity-100"),i.classList.remove("scale-95"),i.classList.add("scale-100")},L=()=>{l.classList.add("invisible","opacity-0"),l.classList.remove("visible","opacity-100"),i.classList.add("scale-95"),i.classList.remove("scale-100")};n.addEventListener("click",g),h.addEventListener("click",L),c.addEventListener("click",()=>{if(!x.value.trim()||!y.value.trim()){x.value.trim()||x.classList.add("ring-2","ring-red-500/50","border-red-500"),y.value.trim()||y.classList.add("ring-2","ring-red-500/50","border-red-500");return}x.classList.remove("ring-2","ring-red-500/50","border-red-500"),y.classList.remove("ring-2","ring-red-500/50","border-red-500"),a.classList.add("hidden"),s.classList.remove("hidden"),p.classList.remove("hidden"),c.classList.add("hidden"),v.classList.remove("hidden"),k.textContent=e("step_2_logistics"),S.style.width="100%"}),p.addEventListener("click",()=>{a.classList.remove("hidden"),s.classList.add("hidden"),p.classList.add("hidden"),c.classList.remove("hidden"),v.classList.add("hidden"),k.textContent=e("step_1_basic"),S.style.width="50%"}),v.addEventListener("click",()=>{if(!$.value||!_.value){$.value||$.classList.add("ring-2","ring-red-500/50","border-red-500"),_.value||_.classList.add("ring-2","ring-red-500/50","border-red-500");return}const M=new Date(`${$.value}T${_.value}`);if(E){const B=m.exams.find(A=>A.id===E);B&&(B.code=y.value.trim(),B.name=x.value.trim(),B.type=C.value,B.location=H.value.trim()||"TBD",B.date=M.toISOString())}else{const B={id:Date.now(),code:y.value.trim(),name:x.value.trim(),type:C.value,location:H.value.trim()||"TBD",date:M.toISOString()};m.exams||(m.exams=[]),m.exams.push(B)}D(),L(),d()});const u=t.querySelector("#delete-exam-modal"),f=u.querySelector("div"),w=t.querySelector("#cancel-delete-btn"),z=t.querySelector("#confirm-delete-btn");let N=null;const P=()=>{u.classList.add("invisible","opacity-0"),u.classList.remove("visible","opacity-100"),f.classList.add("scale-95"),f.classList.remove("scale-100"),N=null},j=M=>{N=M,u.classList.remove("invisible","opacity-0"),u.classList.add("visible","opacity-100"),f.classList.remove("scale-95"),f.classList.add("scale-100")};t.addEventListener("click",M=>{if(M.target.closest(".delete-exam-btn")){const B=M.target.closest(".delete-exam-btn");j(parseInt(B.dataset.id))}if(M.target.closest(".edit-exam-btn")){const B=M.target.closest(".edit-exam-btn");b(parseInt(B.dataset.id))}}),w.addEventListener("click",P),z.addEventListener("click",()=>{if(N){const M=m.exams.findIndex(B=>B.id===N);M!==-1&&(m.exams.splice(M,1),D(),P(),d())}}),[x,y,$,_].forEach(M=>{M.addEventListener("input",()=>{M.classList.remove("ring-2","ring-red-500/50","border-red-500")})})};d()}function Ie(t){m.cheatsheets||(m.cheatsheets=[],D());let d=null;const o=()=>{const a=document.getElementById("sheets-grid").querySelector(".grid");if(!a)return;const c=Array.from(a.children).map(p=>p.getAttribute("data-sheet-id"));localStorage.setItem("cheatsheetsLayout",JSON.stringify(c))},l=()=>{const a=localStorage.getItem("cheatsheetsLayout");if(!a)return m.cheatsheets;try{const s=JSON.parse(a).map(v=>parseInt(v)),c=new Map(m.cheatsheets.map(v=>[v.id,v])),p=[];return s.forEach(v=>{c.has(v)&&(p.push(c.get(v)),c.delete(v))}),c.forEach(v=>p.push(v)),p}catch(s){return console.error("Failed to parse layout",s),m.cheatsheets}},i=a=>{const s=document.getElementById("sheets-grid").querySelector(".grid");a.addEventListener("dragstart",c=>{d=a,c.dataTransfer.effectAllowed="move",c.dataTransfer.setData("text/plain",a.dataset.sheetId),requestAnimationFrame(()=>{a.classList.add("opacity-50","scale-95")})}),a.addEventListener("dragend",()=>{a.classList.remove("opacity-50","scale-95"),d=null,s&&s.querySelectorAll(".draggable-item").forEach(c=>{c.classList.remove("ring-2","ring-primary","z-30")})}),a.addEventListener("dragover",c=>{c.preventDefault(),d&&d!==a&&a.classList.add("ring-2","ring-primary","z-30")}),a.addEventListener("dragleave",c=>{a.contains(c.relatedTarget)||a.classList.remove("ring-2","ring-primary","z-30")}),a.addEventListener("drop",c=>{if(c.preventDefault(),c.stopPropagation(),a.classList.remove("ring-2","ring-primary","z-30"),d&&d!==a){const p=s,v=Array.from(p.children),k=v.indexOf(d),S=v.indexOf(a);k<S?p.insertBefore(d,a.nextSibling):p.insertBefore(d,a),o()}})},n=()=>{const a=l();t.innerHTML=`
        <div class="p-4 md:p-8 h-full flex flex-col relative">
            <header class="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 shrink-0 gap-4">
                 <div class="flex items-center gap-4 w-full md:w-auto">
                    <button onclick="window.navigateTo('dashboard')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100 shrink-0">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <h1 class="text-2xl md:text-3xl font-bold text-dark truncate">${e("cheatsheets")}</h1>
                 </div>
                 
                 <button id="add-sheet-btn" class="w-full md:w-auto px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-bold text-sm shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    ${e("new_note")}
                </button>
            </header>
            
            <div id="sheets-grid" class="flex-1 overflow-y-auto custom-scrollbar pb-20 md:pb-0">
                ${a.length===0?`
                    <div class="h-full flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-3xl mx-2 md:mx-0">
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
                        ${a.map(s=>{const c=s.images&&s.images.length>0;return`
                            <div 
                                class="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all group relative border border-gray-200 cursor-pointer flex flex-row min-h-[180px] draggable-item overflow-hidden"
                                draggable="true"
                                data-sheet-id="${s.id}"
                                onclick="window.navigateTo('cheatsheet-detail', { id: ${s.id} })"
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
                                            <button class="text-gray-300 hover:text-primary p-1.5 rounded-lg hover:bg-primary/10" onclick="event.stopPropagation(); editSheet(${s.id})" title="${e("edit_title")}">
                                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                            </button>
                                            <button class="text-gray-300 hover:text-primary p-1.5 rounded-lg hover:bg-primary/10" onclick="event.stopPropagation(); deleteSheet(${s.id})" title="${e("delete")}">
                                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <h3 class="text-xl font-bold text-dark leading-tight line-clamp-2 mb-4 pr-2">${T(s.title)}</h3>

                                    <div class="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                                        <div class="flex gap-2">
                                             ${c?`
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
            <div id="add-sheet-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-200 px-4">
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
             <div id="delete-sheet-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300 px-4">
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
        `,h(),t.querySelectorAll(".draggable-item").forEach(i)},h=()=>{const a=t.querySelector("#add-sheet-modal"),s=a.querySelector("div"),c=a.querySelector("h3"),p=a.querySelector("p"),v=t.querySelector("#add-sheet-btn"),k=t.querySelector("#cancel-create-btn"),S=t.querySelector("#confirm-create-btn"),x=t.querySelector("#new-sheet-title");let y=null;v.addEventListener("click",()=>{y=null,c.textContent=e("new_note"),p.textContent=e("enter_title_start"),S.textContent=e("create_one"),a.classList.remove("invisible","opacity-0"),a.classList.add("visible","opacity-100"),s.classList.remove("scale-95"),s.classList.add("scale-100"),x.value="",setTimeout(()=>x.focus(),100)});const C=()=>{a.classList.add("invisible","opacity-0"),a.classList.remove("visible","opacity-100"),s.classList.add("scale-95"),s.classList.remove("scale-100")};k.addEventListener("click",C),S.addEventListener("click",()=>{const E=x.value.trim();if(!E){x.classList.add("ring-2","ring-red-500/50","border-red-500"),x.focus();return}if(y){const I=m.cheatsheets.find(r=>r.id===y);I&&(I.title=E,D(),C(),n())}else{const I={id:Date.now(),title:E,tags:[],content:"",images:[]};m.cheatsheets.push(I),D(),C(),n()}}),x.addEventListener("keydown",E=>{E.key==="Enter"&&S.click(),x.classList.remove("ring-2","ring-red-500/50","border-red-500")}),window.editSheet=E=>{const I=m.cheatsheets.find(r=>r.id===E);I&&(y=E,x.value=I.title,c.textContent=e("edit_note"),p.textContent=e("update_note_title"),S.textContent=e("save"),a.classList.remove("invisible","opacity-0"),a.classList.add("visible","opacity-100"),s.classList.remove("scale-95"),s.classList.add("scale-100"),setTimeout(()=>x.focus(),100))};let $=null;const _=t.querySelector("#delete-sheet-modal"),H=_.querySelector("div");window.deleteSheet=E=>{$=E,_.classList.remove("invisible","opacity-0"),_.classList.add("visible","opacity-100"),H.classList.remove("scale-95"),H.classList.add("scale-100")},t.querySelector("#cancel-delete-btn").addEventListener("click",()=>{_.classList.add("invisible","opacity-0"),_.classList.remove("visible","opacity-100"),H.classList.add("scale-95"),H.classList.remove("scale-100"),$=null}),t.querySelector("#confirm-delete-btn").addEventListener("click",()=>{if($){const E=m.cheatsheets.findIndex(I=>I.id===$);if(E>-1){const I=localStorage.getItem("cheatsheetsLayout");if(I){let r=JSON.parse(I);r=r.filter(g=>g!==$),localStorage.setItem("cheatsheetsLayout",JSON.stringify(r))}m.cheatsheets.splice(E,1),D(),n()}}})};n()}function He(t,d){const o=parseInt(d);let l=m.cheatsheets.find(h=>h.id===o);if(!l){t.innerHTML=`<div class="p-10 text-center text-gray-500">${e("sheet_not_found")}</div>`;return}l.images||(l.images=[]);const i=()=>{t.innerHTML=`
        <div class="h-full flex flex-col relative bg-white overflow-hidden">
            <!-- Header -->
            <!-- Header -->
            <!-- Header -->
            <header class="flex flex-row items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-6 border-b border-gray-100 bg-white z-10 shrink-0">
                <div class="flex items-center gap-4 flex-1 min-w-0">
                    <button id="back-btn" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100 shrink-0">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    
                    <div class="flex-1 flex items-center gap-2 overflow-hidden min-w-0">
                        <!-- Title Display -->
                        <h1 id="display-title" class="text-2xl md:text-3xl font-bold text-dark truncate cursor-default">${T(l.title)}</h1>
                        
                        <!-- Title Input (Hidden by default) -->
                        <input type="text" id="title-input" value="${T(l.title)}" class="hidden text-2xl md:text-3xl font-bold text-dark bg-transparent border-b-2 border-primary outline-none focus:ring-0 placeholder-gray-300 w-full min-w-[100px]" placeholder="${e("untitled_note")}">
                    </div>
                </div>

                <!-- Delete Button -->
                <button id="delete-btn" class="p-2 text-gray-300 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors shrink-0" title="${e("delete")}">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
            </header>

            <!-- Main Split Content -->
            <div id="split-container" class="flex-1 flex flex-col md:flex-row overflow-hidden relative">
                
                <!-- LEFT PANE: Editor -->
                <div id="left-pane" class="w-full md:w-1/2 flex flex-col p-4 md:p-8 bg-white h-1/2 md:h-auto" style="">
                    <div class="flex justify-between items-center mb-4 shrink-0">
                        <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">${e("markdown_editor")}</span>
                        <span class="text-xs text-gray-300">${e("supports_md")}</span>
                    </div>
                    <textarea id="content-editor" class="flex-1 w-full resize-none text-lg text-gray-700 leading-relaxed focus:outline-none placeholder-gray-300 font-medium bg-transparent custom-scrollbar" placeholder="${e("start_typing_placeholder")}">${T(l.content||"")}</textarea>
                </div>

                <!-- RESIZER -->
                <div id="resizer" class="hidden md:flex w-1.5 bg-gray-100 hover:bg-primary/50 cursor-col-resize transition-colors z-20 items-center justify-center group shrink-0 relative">
                     <div class="w-0.5 h-8 bg-gray-300 group-hover:bg-white rounded-full pointer-events-none"></div>
                </div>

                <!-- RIGHT PANE: Attachments -->
                <div id="right-pane" class="w-full md:flex-1 flex flex-col p-4 md:p-8 bg-gray-50 overflow-y-auto custom-scrollbar h-1/2 md:h-auto" style="">
                    <div class="flex justify-between items-center mb-6 shrink-0 whitespace-nowrap gap-4">
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider overflow-hidden text-ellipsis">${e("attachments_title")}</h3>
                         <button id="add-img-btn" class="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg hover:border-primary hover:text-primary transition-all text-xs font-bold shadow-sm shrink-0">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                            ${e("add_image")}
                        </button>
                    </div>

                    ${l.images.length>0?`
                        <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                            ${l.images.map((h,a)=>`
                                <div class="relative group rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white aspect-video cursor-zoom-in" onclick="openImageViewer(${a})">
                                    <img src="${h}" class="w-full h-full object-cover">
                                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                    <button class="absolute top-2 right-2 p-1.5 bg-white/90 text-primary rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md hover:bg-primary hover:text-white transform hover:scale-110" onclick="event.stopPropagation(); deleteImage(${a})">
                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                            `).join("")}
                        </div>
                    `:`
                        <div class="flex-1 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-3xl m-4">
                            <svg class="w-12 h-12 mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <p class="text-sm font-medium opacity-50">${e("no_images_yet")}</p>
                        </div>
                    `}
                </div>
            </div>

            <!-- Delete Confirmation Modal -->
             <div id="delete-note-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300 px-4">
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
             <div id="delete-image-modal" class="fixed inset-0 bg-white/10 backdrop-blur-sm z-[110] flex items-center justify-center opacity-0 invisible transition-all duration-300 px-4">
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
        `,n()},n=()=>{const h=t.querySelector("#title-input"),a=t.querySelector("#display-title"),s=t.querySelector("#edit-title-btn"),c=t.querySelector("#content-editor"),p=t.querySelector("#back-btn"),v=t.querySelector("#delete-btn"),k=t.querySelector("#add-img-btn"),S=t.querySelector("#file-input"),x=t.querySelector("#resizer"),y=t.querySelector("#left-pane"),C=t.querySelector("#split-container"),$=t.querySelector("#delete-note-modal"),_=$.querySelector("div"),H=t.querySelector("#cancel-delete-modal-btn"),E=t.querySelector("#confirm-delete-modal-btn"),I=t.querySelector("#delete-image-modal"),r=I.querySelector("div"),g=t.querySelector("#cancel-delete-img-btn"),b=t.querySelector("#confirm-delete-img-btn");p.onclick=()=>window.navigateTo("cheatsheets");const L=()=>{l.title=h.value.trim()||e("untitled_note"),l.content=c.value,a.textContent=l.title,D()},u=()=>{a.classList.add("hidden"),h.classList.remove("hidden"),h.focus()},f=()=>{a.classList.remove("hidden"),h.classList.add("hidden"),L()};s&&(s.onclick=u),h.onblur=f,h.onkeydown=j=>{j.key==="Enter"&&f()},c.onblur=L;let w=!1;x.addEventListener("pointerdown",j=>{w=!0,x.setPointerCapture(j.pointerId),C.classList.add("select-none"),x.classList.add("bg-primary/50")}),x.addEventListener("pointermove",j=>{if(!w)return;const M=C.getBoundingClientRect(),B=j.clientX-M.left,A=200,q=M.width-200,O=Math.max(A,Math.min(B,q))/M.width*100;y.style.width=`${O}%`}),x.addEventListener("pointerup",j=>{w=!1,x.releasePointerCapture(j.pointerId),C.classList.remove("select-none"),x.classList.remove("bg-primary/50")});const z=()=>{$.classList.add("invisible","opacity-0"),$.classList.remove("visible","opacity-100"),_.classList.add("scale-95"),_.classList.remove("scale-100")};v.onclick=()=>{$.classList.remove("invisible","opacity-0"),$.classList.add("visible","opacity-100"),_.classList.remove("scale-95"),_.classList.add("scale-100")},H.onclick=z,E.onclick=()=>{const j=m.cheatsheets.findIndex(M=>M.id===o);if(j>-1){m.cheatsheets.splice(j,1);const M=localStorage.getItem("cheatsheetsLayout");if(M){let B=JSON.parse(M);B=B.filter(A=>parseInt(A)!==o),localStorage.setItem("cheatsheetsLayout",JSON.stringify(B))}D(),window.navigateTo("cheatsheets")}},k.onclick=()=>S.click(),S.onchange=j=>{const M=j.target.files[0];if(M){const B=new FileReader;B.onload=A=>{l.images.push(A.target.result),D(),i()},B.readAsDataURL(M)}};let N=null;const P=()=>{I.classList.add("invisible","opacity-0"),I.classList.remove("visible","opacity-100"),r.classList.add("scale-95"),r.classList.remove("scale-100"),N=null};window.deleteImage=j=>{N=j,I.classList.remove("invisible","opacity-0"),I.classList.add("visible","opacity-100"),r.classList.remove("scale-95"),r.classList.add("scale-100")},g.onclick=P,b.onclick=()=>{N!==null&&(l.images.splice(N,1),D(),i(),P())},window.openImageViewer=j=>{const M=document.getElementById("image-viewer-modal"),B=document.getElementById("image-viewer-img");B.src=l.images[j],M.classList.remove("hidden"),setTimeout(()=>{M.classList.remove("opacity-0"),B.classList.remove("scale-95"),B.classList.add("scale-100")},10)},window.closeImageViewer=()=>{const j=document.getElementById("image-viewer-modal"),M=document.getElementById("image-viewer-img");j.classList.add("opacity-0"),M.classList.remove("scale-100"),M.classList.add("scale-95"),setTimeout(()=>{j.classList.add("hidden"),M.src=""},300)}};i()}function ze(t){m.notebook||(m.notebook={notes:[{id:1,title:e("welcome_title"),content:e("welcome_body"),date:new Date().toISOString(),paperStyle:"lined"}]},D());let d=m.notebook.notes.length>0?m.notebook.notes[0].id:null,o=0;const l=s=>{s&&(s.pages||(s.pages=[s.content||""],delete s.content))},i=()=>m.notebook.notes.find(s=>s.id===d),n=()=>{const s=i();l(s);const c=s?s.pages[o]:"";t.innerHTML=`
        <div class="p-4 lg:p-8 h-full flex flex-col relative bg-transparent overflow-hidden">
            <!-- Header (Mobile Optimized) -->
            <header class="flex flex-wrap lg:flex-nowrap justify-between items-center mb-2 lg:mb-8 shrink-0 gap-3 lg:gap-4">
                 
                 <!-- Top Row Left: Back & Title -->
                 <div class="flex items-center gap-3 w-full lg:w-auto order-1">
                    <button onclick="window.navigateTo('dashboard')" class="p-2 bg-white text-gray-500 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors border border-gray-100 shrink-0">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <h1 class="text-xl lg:text-3xl font-bold text-dark font-handwriting truncate">${e("digital_notebook")}</h1>
                 </div>

                 <!-- Top Row Right: Controls (Pagination & Add) -->
                 <div class="flex items-center gap-2 w-full lg:w-auto order-2 lg:order-3 justify-start lg:justify-end ml-0 lg:ml-auto mt-2 lg:mt-0">
                      <!-- Page Navigation (Compact) -->
                      <div class="flex items-center justify-center flex-1 lg:flex-none bg-white rounded-xl shadow-sm border border-gray-200 p-1 lg:shrink-0">
                        <button class="btn-prev-page p-1.5 text-gray-400 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors ${o===0?"opacity-30 cursor-not-allowed":""}" ${o===0?"disabled":""}>
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <span class="text-xs font-bold text-gray-500 w-8 lg:w-16 text-center select-none uppercase tracking-wider">${o+1}</span>
                        <button class="btn-next-page p-1.5 text-gray-400 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                      </div>

                      <!-- New Notebook (Icon only on mobile) -->
                      <button class="btn-add-note whitespace-nowrap px-3 py-2 lg:px-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-bold text-sm shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 flex-1 lg:flex-none lg:shrink-0">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                        <span>${e("new_notebook")}</span>
                    </button>
                 </div>
                 
                 <!-- Second Row (Mobile): Editor Toolbar -->
                 <div class="w-full lg:w-auto order-3 lg:order-2 lg:ml-6 lg:pl-6 border-l-0 lg:border-l border-gray-300/50 flex items-center mt-2 lg:mt-0 ${s?"":"opacity-50 pointer-events-none"} transition-opacity relative justify-center lg:justify-start">
                      <!-- Unified Toolbar Container -->
                      <div class="flex items-center bg-white rounded-xl border border-gray-200 shadow-sm overflow-x-auto divide-x divide-gray-100 w-full lg:w-auto lg:max-w-none">
                          <!-- Style Buttons -->
                          <button class="toolbar-btn flex-1 lg:flex-none w-auto lg:w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all shrink-0" data-cmd="bold" title="${e("bold")}"><b class="font-serif">B</b></button>
                          <button class="toolbar-btn flex-1 lg:flex-none w-auto lg:w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all italic shrink-0" data-cmd="italic" title="${e("italic")}"><i class="font-serif">I</i></button>
                          <button class="toolbar-btn flex-1 lg:flex-none w-auto lg:w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all underline shrink-0" data-cmd="underline" title="${e("underline")}"><u class="font-serif">U</u></button>
                          
                          <!-- Color Picker -->
                          <button id="btn-color-picker" class="toolbar-btn flex-1 lg:flex-none w-auto lg:w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all shrink-0" title="${e("text_color")}">
                             <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                             </svg>
                          </button>
                          
                          <!-- Highlight Picker -->
                          <button id="btn-highlight-picker" class="toolbar-btn flex-1 lg:flex-none w-auto lg:w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all shrink-0" title="${e("highlight_color")}">
                             <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                             </svg>
                          </button>
                          
                          <!-- Align Button -->
                          <button class="toolbar-btn flex-1 lg:flex-none w-auto lg:w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-dark transition-all shrink-0" data-cmd="cycleAlign" data-state="left" title="${e("align_text")}">
                             <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h16" /></svg>
                          </button>
                          
                          <!-- Paper Style Toggle (Moved here for mobile unified bar, or hidden? Let's add it to toolbar on mobile, or keep distinct?) -->
                          <!-- Actually, let's keep paper style distinct but maybe integrated if space allows. -->
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
            </header>

            <!-- Notebook Content -->
            <div class="flex-1 w-full max-w-7xl mx-auto min-h-0 bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden relative border border-gray-200 mb-20 lg:mb-0">
                
                <!-- Left Sidebar (Index) - Mobile: Top (or Bottom, or Toggle) -->
                <!-- For now, showing it above on mobile if space allows, or fixed height -->
                <!-- Left Sidebar (Index) - Mobile: Horizontal Scroll -->
                <div class="w-full lg:w-80 h-auto lg:h-auto bg-gray-50 flex-none flex flex-row lg:flex-col border-r-0 lg:border-r border-b lg:border-b-0 border-gray-200 z-10 shrink-0 overflow-x-auto lg:overflow-visible">
                    <div class="hidden lg:block p-4 lg:p-6 border-b border-gray-200/50 bg-gray-50">
                        <h2 class="text-lg lg:text-xl font-bold text-dark flex items-center gap-2">
                            <svg class="w-5 h-5 lg:w-6 lg:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                            ${e("index")}
                        </h2>
                    </div>

                    <div class="flex flex-row lg:flex-col flex-1 lg:overflow-y-auto overflow-x-auto lg:overflow-x-hidden p-2 lg:p-3 gap-2 lg:gap-0 lg:space-y-2 custom-scrollbar">
                        ${m.notebook.notes.map(p=>`
                            <div class="note-item p-3 lg:p-4 rounded-xl cursor-pointer transition-all border border-transparent min-w-[160px] lg:min-w-0 w-40 lg:w-auto flex-shrink-0 ${p.id===d?"bg-white shadow-md border-gray-100 ring-1 ring-primary/5":"bg-white/40 hover:bg-white/60 hover:border-gray-100 text-gray-500"}" data-id="${p.id}">
                                <h4 class="font-bold text-dark truncate mb-1 text-sm lg:text-base">${T(p.title)||e("untitled_note")}</h4>
                                <p class="text-xs text-gray-400 truncate hidden lg:block">${a(p.pages?p.pages[0]:p.content||"").substring(0,40)||e("empty_note")}</p>
                                <div class="mt-1 lg:mt-2 text-[10px] text-gray-300 font-medium tracking-wide flex justify-between items-center">
                                   <span>${new Date(p.date).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</span>
                                   ${p.id===d?`
                                   <button class="btn-delete-note p-1 text-gray-300 hover:text-primary transition-colors block" title="${e("delete_page")}">
                                        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                   </button>
                                   `:""}
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- SPIRAL BINDING (The "Wire" Effect) -->
                <div class="hidden lg:flex w-12 h-full bg-[#e5e7eb] relative shrink-0 flex flex-col items-center justify-start py-4 gap-6 shadow-inner z-20 border-r border-[#d1d5db]" style="background-image: radial-gradient(circle at 0% 50%, rgba(255,255,255,0.5), transparent), radial-gradient(circle at 100% 50%, rgba(0,0,0,0.05), transparent);">
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
                    ${s?`
                        <!-- Toolbar Removed (Moved to Header) -->

                        <!-- Paper Content -->
                        <div class="flex-1 overflow-y-auto custom-scrollbar relative bg-white">
                             <!-- Paper Lines Overlay -->
                             <div class="absolute inset-0 pointer-events-none z-0" 
                                  style="${s&&s.paperStyle==="grid"?"background-image: linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px); background-size: 2.5rem 2.5rem; margin-top: 3.5rem;":"background-image: linear-gradient(#e5e7eb 1px, transparent 1px); background-size: 100% 2.5rem; margin-top: 3.5rem;"}">
                             </div>
                             
                             <!-- Red Margin Line -->
                             <div class="hidden lg:block absolute top-0 bottom-0 left-10 w-px bg-red-100/50 z-0 pointer-events-none border-r border-red-200 h-full"></div>

                             <div class="relative z-10 px-4 pt-14 pb-12 lg:px-16 lg:pt-14 lg:pb-12 min-h-full">
                                  <!-- Title Input -->
                                  <input type="text" id="note-title-input" class="w-full text-2xl lg:text-3xl font-bold text-dark bg-transparent border-none focus:ring-0 placeholder-gray-300 mb-10 h-10 p-0 font-display leading-[2.5rem]" value="${T(s.title)}" placeholder="${e("page_title_placeholder")}">
                                  
                                  <!-- Editor contenteditable -->
                                  <div id="note-editor" 
                                       class="w-full min-h-[60vh] text-lg text-gray-700 leading-10 focus:outline-none empty:before:content-[attr(placeholder)] empty:before:text-gray-300"
                                       contenteditable="true" 
                                       placeholder="${e("start_writing")}"
                                  >
                                    ${Q(c)}
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
             <div id="delete-note-modal" class="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300 px-4">
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
        `,h(s)},h=s=>{t.querySelectorAll(".note-item").forEach($=>{$.addEventListener("click",_=>{_.target.closest(".btn-delete-note")||(d=parseInt($.dataset.id),o=0,n())})}),t.querySelectorAll(".btn-add-note").forEach($=>{$.addEventListener("click",()=>{const _={id:Date.now(),title:e("new_notebook"),pages:[""],date:new Date().toISOString(),category:"General",paperStyle:"lined"};m.notebook.notes.push(_),d=_.id,D(),n()})});const p=t.querySelector("#delete-note-modal"),v=p.querySelector("div"),k=t.querySelector("#cancel-delete-note"),S=t.querySelector("#confirm-delete-note");let x=null;const y=()=>{p.classList.add("invisible","opacity-0"),p.classList.remove("visible","opacity-100"),v.classList.add("scale-95"),v.classList.remove("scale-100"),x=null},C=$=>{x=$,p.classList.remove("invisible","opacity-0"),p.classList.add("visible","opacity-100"),v.classList.remove("scale-95"),v.classList.add("scale-100")};if(t.querySelectorAll(".btn-delete-note").forEach($=>{$.addEventListener("click",_=>{_.stopPropagation(),C(parseInt($.closest(".note-item").dataset.id))})}),k.addEventListener("click",y),S.addEventListener("click",()=>{x&&(m.notebook.notes=m.notebook.notes.filter($=>$.id!==x),d===x&&(d=m.notebook.notes.length>0?m.notebook.notes[0].id:null),D(),n())}),s){const $=t.querySelector("#note-title-input");$.addEventListener("input",u=>{const f=m.notebook.notes.find(w=>w.id===d);f&&(f.title=u.target.value,D())}),$.addEventListener("blur",n);const _=t.querySelector("#note-editor");_.addEventListener("input",()=>{const u=m.notebook.notes.find(f=>f.id===d);u&&(u.pages||(u.pages=[""]),u.pages[o]=_.innerHTML,D())}),t.querySelectorAll(".toolbar-btn").forEach(u=>{u.addEventListener("click",f=>{f.preventDefault();const w=u.dataset.cmd;if(w==="cycleAlign"){const z=["left","center","right"],N=u.dataset.state||"left",j=(z.indexOf(N)+1)%z.length,M=z[j],B={left:"justifyLeft",center:"justifyCenter",right:"justifyRight"};document.execCommand(B[M],!1,null),u.dataset.state=M;const A=u.querySelector("path");if(A){const q={left:"M4 6h16M4 12h10M4 18h16",center:"M4 6h16M7 12h10M4 18h16",right:"M4 6h16M10 12h10M4 18h16"};A.setAttribute("d",q[M])}}else{const z=u.dataset.val||null;document.execCommand(w,!1,z)}_.focus()})}),t.querySelectorAll(".btn-next-page").forEach(u=>{u.addEventListener("click",()=>{const f=m.notebook.notes.find(w=>w.id===d);f&&(o<f.pages.length-1?o++:(f.pages.push(""),o++,D()),n())})}),t.querySelectorAll(".btn-prev-page").forEach(u=>{u.addEventListener("click",()=>{o>0&&(o--,n())})});const I=t.querySelector("#btn-color-picker"),r=t.querySelector("#color-dropdown");I&&r&&(I.addEventListener("click",u=>{if(u.stopPropagation(),u.preventDefault(),r.classList.contains("hidden")){r.classList.remove("hidden");const f=w=>{!r.contains(w.target)&&w.target!==I&&!I.contains(w.target)&&(r.classList.add("hidden"),document.removeEventListener("click",f))};setTimeout(()=>document.addEventListener("click",f),0)}else r.classList.add("hidden")}),r.querySelectorAll("button").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation(),f.preventDefault();const w=u.dataset.color;document.execCommand("foreColor",!1,w),r.classList.add("hidden"),_.focus()})}));const g=t.querySelector("#btn-highlight-picker"),b=t.querySelector("#highlight-dropdown");g&&b&&(g.addEventListener("click",u=>{if(u.stopPropagation(),u.preventDefault(),b.classList.contains("hidden")){b.classList.remove("hidden"),r&&r.classList.add("hidden");const f=w=>{!b.contains(w.target)&&w.target!==g&&!g.contains(w.target)&&(b.classList.add("hidden"),document.removeEventListener("click",f))};setTimeout(()=>document.addEventListener("click",f),0)}else b.classList.add("hidden")}),b.querySelectorAll("button").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation(),f.preventDefault();const w=u.dataset.color;document.execCommand("hiliteColor",!1,w),b.classList.add("hidden"),_.focus()})}));const L=t.querySelector("#btn-paper-style");L&&L.addEventListener("click",()=>{const u=m.notebook.notes.find(f=>f.id===d);u&&(u.paperStyle=u.paperStyle==="grid"?"lined":"grid",D(),n())})}},a=s=>{let c=document.createElement("DIV");return c.innerHTML=Q(s),c.textContent||c.innerText||""};n()}document.querySelector("#app").innerHTML=`
  <nav id="sidebar" class="hidden lg:flex w-16 h-full bg-white border-r border-gray-200 flex-col items-center py-6 shrink-0 transition-all duration-300"></nav>
  <main id="dashboard" class="flex-1 h-full overflow-y-auto relative pb-20 lg:pb-0 pt-[env(safe-area-inset-top)]"></main> <!-- pb-20 for bottom nav space -->
  <nav id="mobile-nav" class="lg:hidden fixed bottom-6 left-0 right-0 z-50 h-[4.5rem] w-full pointer-events-none flex justify-center px-4"></nav>
  <div id="modal-container"></div>
`;if(m.user){if(m.user.customThemeRgb)document.documentElement.style.setProperty("--color-primary-rgb",m.user.customThemeRgb);else if(m.user.themePreference){const t={blue:"37 99 235",purple:"147 51 234",pink:"236 72 153",emerald:"5 150 105",orange:"234 88 12",rose:"225 29 72",lila:"178 106 251"};t[m.user.themePreference]&&document.documentElement.style.setProperty("--color-primary-rgb",t[m.user.themePreference])}m.user.bgPreference==="theme"?document.body.style.backgroundColor="rgb(var(--color-primary-rgb) / 0.04)":document.body.style.backgroundColor=""}const Y=document.querySelector("#dashboard");window.navigateTo=(t,d={})=>{const o=t==="course-detail"?"courses":t;pe(document.querySelector("#sidebar"),o);const l=document.querySelector("#mobile-nav");if(l){l.innerHTML="",me(l,o);const i=l.querySelector(".glass");i&&i.classList.add("pointer-events-auto")}Y.innerHTML="",t==="dashboard"?Me(Y):t==="courses"?je(Y):t==="course-detail"?Ee(Y,d.id):t==="exams"?Te(Y):t==="cheatsheets"?Ie(Y):t==="cheatsheet-detail"?He(Y,d.id):t==="notebook"?ze(Y):Y.innerHTML=`
            <div class="flex flex-col items-center justify-center h-full p-10 text-center">
                <div class="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mb-6 animate-pulse">
                     <svg class="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                </div>
                <h2 class="text-3xl font-bold text-dark mb-2">Coming Soon</h2>
                <p class="text-gray-400 max-w-sm">The <b>${T(t)}</b> page is currently under construction. Stay tuned for updates!</p>
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
    `;document.body.insertAdjacentHTML("beforeend",t),requestAnimationFrame(()=>{document.getElementById("logout-backdrop").classList.remove("opacity-0");const o=document.getElementById("logout-card");o.classList.remove("scale-95","opacity-0"),o.classList.add("scale-100","opacity-100")});const d=()=>{const o=document.getElementById("logout-modal"),l=document.getElementById("logout-backdrop"),i=document.getElementById("logout-card");l.classList.add("opacity-0"),i.classList.remove("scale-100","opacity-100"),i.classList.add("scale-95","opacity-0"),setTimeout(()=>o.remove(),300)};document.getElementById("btn-cancel-logout").addEventListener("click",d),document.getElementById("logout-backdrop").addEventListener("click",d),document.getElementById("btn-confirm-logout").addEventListener("click",()=>{localStorage.removeItem("studyhub_data"),localStorage.removeItem("dashboardLayout"),localStorage.removeItem("coursesLayout"),localStorage.removeItem("cheatsheetsLayout"),localStorage.removeItem("grade_calc_data"),localStorage.removeItem("habit_tracker_data_v3"),localStorage.removeItem("pomodoro_settings"),localStorage.removeItem("dashboard_notes_list"),localStorage.removeItem("scratchpad_current"),localStorage.removeItem("scratchpad_gallery"),localStorage.removeItem("photo_widget_image"),localStorage.removeItem("photo_widget_zoom"),location.reload()})};window.navigateTo("dashboard");m.user.isSetup||$e(document.querySelector("#modal-container"),()=>{window.navigateTo("dashboard")});
