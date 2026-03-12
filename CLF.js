// CLF-C02
const CLF_TEXT = `

س: تخطط شركة لاستخدام جهاز Amazon Snowball Edge لنقل الملفات إلى AWS Cloud. ما هي الأنشطة المتعلقة بجهاز Snowball Edge المتاحة للشركة بدون تكلفة؟
أ. استخدام جهاز Snowball Edge لمدة 10 أيام
ب. نقل البيانات من Amazon S3 إلى جهاز Snowball Edge
*ج. نقل البيانات من جهاز Snowball Edge إلى Amazon S3
د. الاستخدام اليومي لجهاز Snowball Edge بعد 10 أيام
https://www.examtopics.com/discussions/amazon/view/123345-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة بنشر تطبيقات على مثيلات Amazon EC2. تحتاج الشركة إلى تقييم نقاط الضعف في التطبيق وتحديد عمليات نشر البنية التحتية التي لا تفي بأفضل الممارسات. ما هي خدمة AWS التي يمكن للشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Trusted Advisor
*ب. Amazon Inspector
ج. AWS Config
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/123348-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة مجموعة مركزية من المستخدمين لديهم متطلبات تخزين ملفات كبيرة تجاوزت المساحة المتاحة محلياً. تريد الشركة توسيع قدرات تخزين الملفات لهذه المجموعة مع الاحتفاظ بميزة الأداء لمشاركة المحتوى محلياً. ما هو حل AWS الأكثر كفاءة من الناحية التشغيلية لهذا السيناريو؟
أ. إنشاء دلو Amazon S3 لكل مستخدم. تثبيت كل دلو باستخدام أداة تثبيت نظام ملفات S3.
*ب. تكوين ونشر بوابة ملفات AWS Storage Gateway. ربط محطة عمل كل مستخدم ببوابة الملفات.
ج. نقل بيئة عمل كل مستخدم إلى Amazon WorkSpaces. إعداد حساب Amazon WorkDocs لكل مستخدم.
د. نشر مثيل Amazon EC2 وإرفاق حجم Amazon Elastic Block Store (Amazon EBS) من نوع Provisioned IOPS. مشاركة حجم EBS مباشرة مع المستخدمين.
https://www.examtopics.com/discussions/amazon/view/123447-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: وفقاً لأفضل ممارسات الأمان، كيف ينبغي منح مثيل Amazon EC2 حق الوصول إلى دلو Amazon S3؟
أ. تضمين المفتاح السري ومفتاح الوصول لمستخدم IAM مباشرة في التطبيق، ثم رفع الملف.
ب. تخزين المفتاح السري ومفتاح الوصول لمستخدم IAM في ملف نصي على مثيل EC2، ثم قراءة المفاتيح ورفع الملف.
*ج. جعل مثيل EC2 يتبنى دوراً (role) للحصول على صلاحيات رفع الملف.
د. تعديل سياسة دلو S3 بحيث يمكن لأي خدمة رفع الملفات إليه في أي وقت.
https://www.examtopics.com/discussions/amazon/view/123448-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار يمثل مسؤولية العميل عند استخدام Amazon DynamoDB بموجب نموذج المسؤولية المشتركة AWS؟
أ. الأمان المادي لـ DynamoDB
ب. تصحيح (patching) DynamoDB
*ج. الوصول إلى جداول DynamoDB
د. تشفير البيانات غير النشطة في DynamoDB
https://www.examtopics.com/discussions/amazon/view/123449-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار هو منظور يتضمن القدرات الأساسية لإطار عمل اعتماد السحابة AWS (AWS CAF)؟
أ. الاستدامة
ب. كفاءة الأداء
*ج. الحوكمة
د. الموثوقية
https://www.examtopics.com/discussions/amazon/view/123349-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بتشغيل وإدارة بيئة Docker الخاصة بها على مثيلات Amazon EC2. تريد الشركة بديلاً للمساعدة في إدارة حجم المجموعة والجدولة وصيانة البيئة. ما هي خدمة AWS التي تلبي هذه المتطلبات؟
أ. AWS Lambda
ب. Amazon RDS
*ج. AWS Fargate
د. Amazon Athena
https://www.examtopics.com/discussions/amazon/view/123499-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل قاعدة بيانات NoSQL على مثيلات Amazon EC2. ما هي المهمة التي تقع على عاتق AWS في هذا السيناريو؟
أ. تحديث نظام التشغيل الضيف لمثيلات EC2.
ب. الحفاظ على التوفر العالي على مستوى قاعدة البيانات.
*ج. تصحيح (patch) البنية التحتية المادية التي تستضيف مثيلات EC2.
د. تكوين جدار حماية مجموعة الأمان (security group).
https://www.examtopics.com/discussions/amazon/view/123538-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمات أو أدوات AWS التي يمكنها تحديد فرص تحسين الحجم (rightsizing) لمثيلات Amazon EC2؟ (اختر اثنين)
*أ. AWS Cost Explorer
ب. AWS Billing Conductor
ج. Amazon CodeGuru
د. Amazon SageMaker
*هـ. AWS Compute Optimizer
https://www.examtopics.com/discussions/amazon/view/123553-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي فوائد استخدام AWS Trusted Advisor؟ (اختر اثنين)
أ. توفير تنسيق حاويات عالي الأداء
ب. إنشاء وتدوير مفاتيح التشفير
*ج. اكتشاف الموارد غير المستغلة بشكل كافٍ لتوفير التكاليف
*د. تحسين الأمان من خلال المراقبة الاستباقية لبيئة AWS
هـ. تنفيذ فرض العلامات (tagging) عبر موارد AWS
https://www.examtopics.com/discussions/amazon/view/123456-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الميزة التي يحصل عليها المستخدمون عند نقل أعباء العمل المحلية (on-premises) إلى AWS Cloud؟
*أ. التخلص من نفقات تشغيل وصيانة مراكز البيانات
ب. خصومات أسعار مطابقة تماماً لخصومات موردي الأجهزة
ج. توزيع جميع الضوابط التشغيلية على AWS
د. التخلص من النفقات التشغيلية
https://www.examtopics.com/discussions/amazon/view/123455-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إدارة خدمات تكنولوجيا المعلومات المنشورة وحوكمة قوالب البنية التحتية كرمز (IaC). ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. AWS Resource Explorer
*ب. AWS Service Catalog
ج. AWS Organizations
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/123350-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو أداة AWS التي تساعد المستخدمين على تصور وفهم وإدارة الإنفاق والاستخدام بمرور الوقت؟
أ. AWS Organizations
ب. AWS Pricing Calculator
*ج. AWS Cost Explorer
د. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/123457-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة منصة بيانات مركزية لإدارة أنواع متعددة من البيانات لعملائها. تريد الشركة استخدام خدمات AWS لاكتشاف البيانات وتحويلها وتصورها. ما هي مجموعة خدمات AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟ (اختر اثنين)
*أ. AWS Glue
ب. Amazon Elastic File System (Amazon EFS)
ج. Amazon Redshift
*د. Amazon QuickSight
هـ. Amazon Quantum Ledger Database (Amazon QLDB)
https://www.examtopics.com/discussions/amazon/view/123610-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة عالمية نقل تطبيقاتها من جهات خارجية إلى AWS Cloud. تريد الشركة مساعدة من فريق عالمي من الخبراء لإكمال النقل بشكل أسرع وأكثر موثوقية وفقاً لأفضل ممارسات AWS الداخلية. ما هي خدمة أو مورد AWS الذي سيلبي هذه المتطلبات؟
أ. AWS Support
*ب. AWS Professional Services
ج. AWS Launch Wizard
د. AWS Managed Services (AMS)
https://www.examtopics.com/discussions/amazon/view/123458-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج منصة تعليم إلكتروني إلى تشغيل تطبيق لمدة شهرين كل عام. سيتم نشر التطبيق على مثيلات Amazon EC2. يجب تجنب أي توقف للتطبيق خلال هذين الشهرين. ما هو خيار شراء EC2 الذي سيلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. Reserved Instances
ب. Dedicated Hosts
ج. Spot Instances
*د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/123459-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مطور نشر تطبيق بسرعة على AWS دون الحاجة إلى إنشاء الموارد المطلوبة يدوياً. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon EC2
*ب. AWS Elastic Beanstalk
ج. AWS CodeBuild
د. Amazon Personalize
https://www.examtopics.com/discussions/amazon/view/123460-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بتخزين بيانات حساسة للعملاء في دلو Amazon S3. تريد الشركة حماية البيانات من الحذف العرضي أو الكتابة فوقها. ما هي ميزة S3 التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. قواعد دورة حياة S3 (S3 Lifecycle rules)
*ب. إصدار S3 (S3 Versioning)
ج. سياسات دلو S3 (S3 bucket policies)
د. تشفير S3 من جانب الخادم (S3 server-side encryption)
https://www.examtopics.com/discussions/amazon/view/123462-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي توفر القدرة على إدارة البنية التحتية كرمز (infrastructure as code)؟
أ. AWS CodePipeline
ب. AWS CodeDeploy
ج. AWS Direct Connect
*د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/123464-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة ألعاب عبر الإنترنت إلى اختيار خيار شراء لتشغيل مثيلات Amazon EC2 الخاصة بها لمدة عام واحد. حركة مرور الويب ثابتة، وأي زيادات في حركة المرور يمكن التنبؤ بها. يجب أن تكون مثيلات EC2 متصلة بالإنترنت ومتاحة دون أي انقطاع. ما هو خيار شراء مثيلات EC2 الذي سيلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. On-Demand Instances
*ب. Reserved Instances
ج. Spot Instances
د. Spot Fleet
https://www.examtopics.com/discussions/amazon/view/123674-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي تسمح للمستخدم بإنشاء اتصال شبكة مخصص بين مركز البيانات المحلي للشركة و AWS Cloud؟
*أ. AWS Direct Connect
ب. VPC peering
ج. AWS VPN
د. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/123613-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار هو موقع مادي للبنية التحتية العالمية لـ AWS؟
أ. AWS DataSync
*ب. منطقة AWS (AWS Region)
ج. Amazon Connect
د. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/123678-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة حماية معلومات وأنظمة وأصول AWS Cloud الخاصة بها أثناء أداء مهام تقييم المخاطر والتخفيف من حدتها. أي ركيزة من ركائز إطار عمل AWS Well-Architected تدعمها هذه الأهداف؟
أ. الموثوقية
*ب. الأمان
ج. التميز التشغيلي
د. كفاءة الأداء
https://www.examtopics.com/discussions/amazon/view/123679-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو الغرض من وجود بوابة إنترنت (internet gateway) داخل VPC؟
أ. لإنشاء اتصال VPN بـ VPC
*ب. للسماح بالاتصال بين VPC والإنترنت
ج. لفرض قيود على عرض النطاق الترددي لحركة مرور الإنترنت
د. لموازنة حركة المرور من الإنترنت عبر مثيلات Amazon EC2
https://www.examtopics.com/discussions/amazon/view/123467-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة تطبيقاً متجانساً (monolithic) محلياً لا يتوسع ويصعب صيانته. لدى الشركة خطة لنقل التطبيق إلى AWS وتقسيمه إلى خدمات مصغرة (microservices). ما هي أفضل ممارسة لإطار عمل AWS Well-Architected التي تتبعها الشركة في هذه الخطة؟
أ. دمج الاختبار الوظيفي كجزء من نشر AWS.
ب. استخدام الأتمتة لنشر التغييرات.
ج. نشر التطبيق في مواقع متعددة.
*د. تنفيذ تبعيات ضعيفة الاقتران (loosely coupled dependencies).
https://www.examtopics.com/discussions/amazon/view/123680-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة حساب AWS. تريد الشركة تدقيق تفاصيل دوران كلمة المرور ومفتاح الوصول الخاصة بها لأغراض الامتثال. ما هي خدمة أو أداة AWS التي ستلبي هذا المطلب؟
أ. IAM Access Analyzer
ب. AWS Artifact
*ج. تقرير بيانات اعتماد IAM (IAM credential report)
د. AWS Audit Manager
https://www.examtopics.com/discussions/amazon/view/123614-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تلقي إشعار عند الوصول إلى حد تكلفة AWS محدد. ما هي خدمات أو أدوات AWS التي يمكن للشركة استخدامها لتلبية هذا المطلب؟ (اختر اثنين)
أ. Amazon Simple Queue Service (Amazon SQS)
*ب. AWS Budgets
ج. Cost Explorer
*د. Amazon CloudWatch
هـ. AWS Cost and Usage Report
https://www.examtopics.com/discussions/amazon/view/123563-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو مورد AWS الذي يوفر إجابات للأسئلة الأكثر شيوعاً المتعلقة بالأمان التي تتلقاها AWS من مستخدميها؟
أ. AWS Artifact
ب. Amazon Connect
ج. AWS Chatbot
*د. مركز المعرفة AWS (AWS Knowledge Center)
https://www.examtopics.com/discussions/amazon/view/123440-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهام التي تقع على عاتق العميل، وفقاً لنموذج المسؤولية المشتركة AWS؟ (اختر اثنين)
*أ. تكوين جدار حماية مجموعة الأمان (security group) المقدم من AWS.
*ب. تصنيف أصول الشركة في AWS Cloud.
ج. تحديد مناطق التوفر (Availability Zones) التي سيتم استخدامها لدلاء Amazon S3.
د. تصحيح (patch) أو ترقية Amazon DynamoDB.
هـ. اختيار مثيلات Amazon EC2 لتشغيل AWS Lambda عليها.
https://www.examtopics.com/discussions/amazon/view/123758-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر من ركائز إطار عمل AWS Well-Architected؟ (اختر اثنين)
أ. التوفر
*ب. الموثوقية
ج. قابلية التوسع
د. التصميم سريع الاستجابة
*هـ. التميز التشغيلي
https://www.examtopics.com/discussions/amazon/view/123564-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS المستخدمة لإرسال رسائل نصية ورسائل بريد إلكتروني من التطبيقات الموزعة؟
*أ. Amazon Simple Notification Service (Amazon SNS)
ب. Amazon Simple Email Service (Amazon SES)
ج. تنبيهات Amazon CloudWatch
د. Amazon Simple Queue Service (Amazon SQS)
https://www.examtopics.com/discussions/amazon/view/123480-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مستخدم إلى وصول برمجي إلى موارد AWS من خلال AWS CLI أو AWS API. أي خيار سيوفر للمستخدم الوصول المناسب؟
أ. Amazon Inspector
*ب. مفاتيح الوصول (Access keys)
ج. مفاتيح SSH العامة
د. مفاتيح AWS Key Management Service (AWS KMS)
https://www.examtopics.com/discussions/amazon/view/123691-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة آلاف المحاكاة المتزامنة باستخدام AWS Batch. كل محاكاة عديمة الحالة (stateless)، ومتسامحة مع الأخطاء، وتستمر لمدة تصل إلى 3 ساعات. ما هو نموذج التسعير الذي يمكن الشركة من تحسين التكاليف وتلبية هذه المتطلبات؟
أ. Reserved Instances
*ب. Spot Instances
ج. On-Demand Instances
د. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/123847-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ماذا يعني مفهوم المرونة (agility) في حوسبة AWS Cloud؟ (اختر اثنين)
*أ. السرعة التي يتم بها تنفيذ موارد AWS
ب. السرعة التي تنشئ بها AWS مناطق جديدة (Regions)
*ج. القدرة على التجربة بسرعة
د. التخلص من السعة المهدرة
هـ. انخفاض تكلفة الدخول إلى الحوسبة السحابية
https://www.examtopics.com/discussions/amazon/view/123423-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى منع هجمات SQL injection. ما هي خدمة أو ميزة AWS التي يمكنها تلبية هذا المطلب؟
*أ. AWS WAF
ب. AWS Shield
ج. قوائم ACL للشبكة (Network ACLs)
د. مجموعات الأمان (Security groups)
https://www.examtopics.com/discussions/amazon/view/123632-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي تحدد ما إذا تمت مشاركة دلو Amazon S3 أو دور IAM مع كيان خارجي؟
أ. AWS Service Catalog
ب. AWS Systems Manager
*ج. AWS IAM Access Analyzer
د. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/123692-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج ممارس سحابي إلى الحصول على تقارير امتثال AWS قبل نقل بيئة إلى AWS Cloud. كيف يمكن إنشاء هذه التقارير؟
أ. الاتصال بفريق الامتثال AWS.
*ب. تنزيل التقارير من AWS Artifact.
ج. فتح حالة مع AWS Support.
د. إنشاء التقارير باستخدام Amazon Macie.
https://www.examtopics.com/discussions/amazon/view/123693-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة تجارة إلكترونية بنقل البنية التحتية لتكنولوجيا المعلومات الخاصة بها من مركز بيانات محلي إلى AWS Cloud. ما هي التكلفة التي تقع تحت المسؤولية المباشرة للشركة؟
*أ. تكلفة تراخيص برامج التطبيق
ب. تكلفة البنية التحتية للأجهزة على AWS
ج. تكلفة الطاقة لخوادم AWS
د. تكلفة الأمان المادي لمركز بيانات AWS
https://www.examtopics.com/discussions/amazon/view/123694-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بإعداد AWS Identity and Access Management (IAM) على حساب AWS. أي توصية تتوافق مع أفضل ممارسات أمان IAM؟
أ. استخدام مفاتيح وصول المستخدم الجذر (root user) للمهام الإدارية.
ب. منح أذونات واسعة بحيث يمكن لجميع موظفي الشركة الوصول إلى الموارد التي يحتاجونها.
*ج. تشغيل المصادقة متعددة العوامل (MFA) لمزيد من الأمان أثناء عملية تسجيل الدخول.
د. تجنب تدوير بيانات الاعتماد لمنع حدوث مشكلات في تطبيقات الإنتاج.
https://www.examtopics.com/discussions/amazon/view/123695-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تشير المرونة (Elasticity) في AWS Cloud إلى أي من التالي؟ (اختر اثنين)
أ. مدى سرعة إعادة تشغيل مثيل Amazon EC2
*ب. القدرة على تحسين حجم الموارد (rightsize) مع تغير الطلب
ج. الحد الأقصى من RAM الذي يمكن أن يستخدمه مثيل Amazon EC2
د. نموذج الفوترة الدفع حسب الاستخدام
*هـ. مدى سهولة الحصول على الموارد عند الحاجة إليها
https://www.examtopics.com/discussions/amazon/view/123412-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الخدمة التي تمكن العملاء من تدقيق استدعاءات API في حسابات AWS الخاصة بهم؟
*أ. AWS CloudTrail
ب. AWS Trusted Advisor
ج. Amazon Inspector
د. AWS X-Ray
https://www.examtopics.com/discussions/amazon/view/123877-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي مسؤولية العميل عند استخدام AWS Lambda وفقاً لنموذج المسؤولية المشتركة AWS؟
*أ. إدارة الكود داخل دالة Lambda
ب. التأكد من أن الأجهزة تعمل في مركز البيانات
ج. تصحيح (patching) نظام التشغيل
د. إيقاف تشغيل دوال Lambda عندما لا تكون قيد الاستخدام
https://www.examtopics.com/discussions/amazon/view/123716-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة 5 تيرابايت من البيانات المخزنة في Amazon S3. تخطط الشركة لتشغيل استعلامات على البيانات من حين لآخر لأغراض التحليل. ما هي خدمة AWS التي يجب على الشركة استخدامها لتشغيل هذه الاستعلامات بأكثر الطرق فعالية من حيث التكلفة؟
أ. Amazon Redshift
*ب. Amazon Athena
ج. Amazon Kinesis
د. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/123715-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكن استخدامها بدون تكلفة إضافية؟
أ. Amazon SageMaker
ب. AWS Config
*ج. AWS Organizations
د. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/123717-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي قدرة من قدرات إطار عمل اعتماد السحابة AWS (AWS CAF) تنتمي إلى منظور الأشخاص (people perspective)؟
أ. هندسة البيانات
ب. إدارة الأحداث
*ج. إتقان السحابة (Cloud fluency)
د. الشراكة الاستراتيجية
https://www.examtopics.com/discussions/amazon/view/123718-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تقديم التزام مسبق للاستخدام المستمر لمثيلات Amazon EC2 الخاصة بالإنتاج مقابل الحصول على تكلفة إجمالية مخفضة. ما هي خيارات التسعير التي تلبي هذه المتطلبات بأقل تكلفة؟ (اختر اثنين)
أ. Spot Instances
ب. On-Demand Instances
*ج. Reserved Instances
*د. Savings Plans
هـ. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/123719-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل قواعد البيانات العلائقية المحلية الخاصة بها إلى AWS Cloud. تريد الشركة استخدام بنية تحتية قريبة قدر الإمكان من موقعها الجغرافي الحالي. ما هي خدمة أو مورد AWS الذي يجب على الشركة استخدامه لتحديد منطقة نشر Amazon RDS الخاصة بها؟
أ. Amazon Connect
ب. AWS Wavelength
*ج. مناطق AWS (AWS Regions)
د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/123785-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستكشف شركة استخدام AWS Cloud، وتحتاج إلى إنشاء تقدير تكلفة لمشروع قبل توفير البنية التحتية. ما هي خدمة أو ميزة AWS التي يمكن استخدامها لتقدير التكاليف قبل النشر؟
أ. AWS Free Tier
*ب. AWS Pricing Calculator
ج. AWS Billing and Cost Management
د. AWS Cost and Usage Report
https://www.examtopics.com/discussions/amazon/view/123720-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة ببناء تطبيق يحتاج إلى توصيل الصور ومقاطع الفيديو عالمياً بأقل قدر من زمن الوصول. ما الأسلوب الذي يمكن للشركة استخدامه لتحقيق ذلك بطريقة فعالة من حيث التكلفة؟
*أ. توصيل المحتوى من خلال Amazon CloudFront.
ب. تخزين المحتوى على Amazon S3 وتفعيل النسخ المتماثل عبر المناطق (S3 cross-region replication).
ج. تنفيذ VPN عبر مناطق AWS متعددة.
د. توصيل المحتوى من خلال AWS PrivateLink.
https://www.examtopics.com/discussions/amazon/view/124319-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار هو فائدة من فوائد وفورات الحجم (economies of scale) القائمة على مزايا الحوسبة السحابية؟
أ. القدرة على استبدال النفقات المتغيرة بنفقات ثابتة
ب. زيادة السرعة والمرونة
*ج. انخفاض التكاليف المتغيرة مقارنة بالتكاليف الثابتة
د. زيادة التكاليف التشغيلية عبر مراكز البيانات
https://www.examtopics.com/discussions/amazon/view/123959-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مما يلي هو إطار عمل لتطوير البرمجيات يمكن للشركة استخدامه لتعريف موارد السحابة كرمز وتوفير الموارد من خلال AWS CloudFormation؟
أ. AWS CLI
ب. AWS Developer Center
*ج. AWS Cloud Development Kit (AWS CDK)
د. AWS CodeStar
https://www.examtopics.com/discussions/amazon/view/123762-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بتطوير تطبيق يستخدم خدمات AWS متعددة. يحتاج التطبيق إلى استخدام بيانات اعتماد مؤقتة ومحدودة الصلاحية للمصادقة مع واجهات برمجة تطبيقات AWS الأخرى. ما هي خدمة أو ميزة AWS التي يجب على الشركة استخدامها لتلبية متطلبات المصادقة هذه؟
أ. Amazon API Gateway
ب. مستخدمو IAM
*ج. AWS Security Token Service (AWS STS)
د. ملفات تعريف مثيل IAM (IAM instance profiles)
https://www.examtopics.com/discussions/amazon/view/123721-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تعتبر خدمة إدارة وضع أمان السحابة (CSPM) التي تجمع التنبيهات من خدمات AWS المختلفة ومنتجات الشركاء في تنسيق موحد؟
*أ. AWS Security Hub
ب. AWS Trusted Advisor
ج. Amazon EventBridge
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/123550-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يتم توفيرها دائماً بدون مقابل؟
أ. Amazon S3
*ب. AWS Identity and Access Management (IAM)
ج. موازنات التحميل المرنة (Elastic Load Balancers)
د. AWS WAF
https://www.examtopics.com/discussions/amazon/view/123551-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لتقليل التكاليف، تخطط شركة لنقل قاعدة بيانات NoSQL إلى AWS. ما هي خدمة AWS المُدارة بالكامل والتي يمكنها توسيع سعة الإنتاجية تلقائياً لتلبية متطلبات عبء عمل قاعدة البيانات؟
أ. Amazon Redshift
ب. Amazon Aurora
*ج. Amazon DynamoDB
د. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/123552-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة Amazon DynamoDB. ما هي المهمة التي تقع على عاتق الشركة، وفقاً لنموذج المسؤولية المشتركة AWS؟
أ. تصحيح (patch) نظام التشغيل.
ب. توفير المضيفين (provision hosts).
*ج. إدارة أذونات الوصول إلى قاعدة البيانات.
د. تأمين نظام التشغيل.
https://www.examtopics.com/discussions/amazon/view/124402-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة بيئة اختبار AWS. تخطط شركة لاختبار تطبيق داخل AWS. يمكن مقاطعة اختبار التطبيق ولا يحتاج إلى التشغيل المستمر. ما هو خيار شراء Amazon EC2 الذي سيلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. On-Demand Instances
ب. Dedicated Instances
*ج. Spot Instances
د. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/124403-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تتيح للمستخدمين اكتشاف وحماية البيانات الحساسة المخزنة في دلاء Amazon S3؟
*أ. Amazon Macie
ب. Amazon Detective
ج. Amazon GuardDuty
د. AWS IAM Access Analyzer
https://www.examtopics.com/discussions/amazon/view/123736-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من الخدمات التالية يمكن استخدامها لمنع حركة مرور الشبكة إلى مثيل (instance)؟ (اختر اثنين)
*أ. مجموعات الأمان (Security groups)
ب. سجلات تدفق Amazon Virtual Private Cloud (Amazon VPC flow logs)
*ج. قوائم ACL للشبكة (Network ACLs)
د. Amazon CloudWatch
هـ. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/123965-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكنها تحديد متى تم إنهاء (terminated) مثيل Amazon EC2؟
أ. AWS Identity and Access Management (IAM)
*ب. AWS CloudTrail
ج. AWS Compute Optimizer
د. Amazon EventBridge
https://www.examtopics.com/discussions/amazon/view/123966-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مما يلي يعتبر قاعدة بيانات مُدارة بالكامل ومتوافقة مع MySQL؟
أ. Amazon S3
ب. Amazon DynamoDB
ج. Amazon Redshift
*د. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/123969-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تدعم بنية هجينة (hybrid architecture) تتيح للمستخدمين إمكانية توسيع البنية التحتية لـ AWS وخدمات AWS وواجهات برمجة التطبيقات والأدوات لتشمل مراكز البيانات أو البيئات المشتركة (co-location) أو المرافق المحلية (on-premises)؟
أ. AWS Snowmobile
ب. AWS Local Zones
*ج. AWS Outposts
د. AWS Fargate
https://www.examtopics.com/discussions/amazon/view/123971-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكنها تشغيل قاعدة بيانات PostgreSQL مُدارة توفر معالجة المعاملات عبر الإنترنت (OLTP)؟
أ. Amazon DynamoDB
ب. Amazon Athena
*ج. Amazon RDS
د. Amazon EMR
https://www.examtopics.com/discussions/amazon/view/123972-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة توفير أجهزة سطح مكتب وتطبيقات Windows افتراضية مُدارة لموظفيها عن بُعد عبر اتصالات شبكة آمنة. ما هي خدمات AWS التي يمكن للشركة استخدامها لتلبية هذه المتطلبات؟ (اختر اثنين)
أ. Amazon Connect
*ب. Amazon AppStream 2.0
*ج. Amazon WorkSpaces
د. AWS Site-to-Site VPN
هـ. Amazon Elastic Container Service (Amazon ECS)
https://www.examtopics.com/discussions/amazon/view/123973-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة مراقبة مجموعات الأمان (security groups) التي تم تكوينها بشكل خاطئ والتي تسمح بالوصول غير المقيد إلى منافذ محددة. ما هي خدمة AWS التي ستلبي هذا المطلب؟
*أ. AWS Trusted Advisor
ب. Amazon CloudWatch
ج. Amazon GuardDuty
د. AWS Health Dashboard
https://www.examtopics.com/discussions/amazon/view/123528-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تعتبر قاعدة بيانات من نوع Key-Value وتوفر زمن وصول أقل من ميلي ثانية على نطاق واسع؟
*أ. Amazon DynamoDB
ب. Amazon Aurora
ج. Amazon DocumentDB (مع التوافق مع MongoDB)
د. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/123282-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بنشر مشروع بحث في التعلم الآلي (ML) سيتطلب الكثير من الطاقة الحاسوبية على مدى عدة أشهر. لا تحتاج وظائف معالجة ML إلى التشغيل في أوقات محددة. ما هو خيار شراء مثيل Amazon EC2 الذي سيلبي هذه المتطلبات بأقل تكلفة؟
أ. On-Demand Instances
*ب. Spot Instances
ج. Reserved Instances
د. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/123450-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمات أو ميزات AWS التي توفر حلول التعافي من الكوارث (disaster recovery) لمثيلات Amazon EC2؟ (اختر اثنين)
أ. EC2 Reserved Instances
*ب. صور آلات Amazon EC2 (EC2 Amazon Machine Images - AMIs)
*ج. لقطات Amazon Elastic Block Store (Amazon EBS snapshots)
د. AWS Shield
هـ. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/123975-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي توفر وصولاً عبر سطر الأوامر إلى أدوات وموارد AWS مباشرة من متصفح الويب؟
أ. AWS CloudHSM
*ب. AWS CloudShell
ج. Amazon WorkSpaces
د. AWS Cloud Map
https://www.examtopics.com/discussions/amazon/view/125683-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مهندس شبكات إلى بناء بنية سحابية هجينة تربط الشبكات المحلية بـ AWS Cloud باستخدام AWS Direct Connect. لدى الشركة عدد قليل من VPCs في منطقة AWS واحدة وتتوقع زيادة عدد VPCs إلى المئات بمرور الوقت. ما هي خدمة أو ميزة AWS التي يجب على المهندس استخدامها لتبسيط وتوسيع نطاق هذا الاتصال مع زيادة عدد VPCs؟
أ. نقاط نهاية VPC (VPC endpoints)
*ب. AWS Transit Gateway
ج. Amazon Route 53
د. AWS Secrets Manager
https://www.examtopics.com/discussions/amazon/view/123722-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تقييم جاهزيتها التشغيلية. وتريد أيضاً تحديد وتخفيف أي مخاطر تشغيلية قبل إطلاق منتج جديد. ما هي خطة دعم AWS التي تقدم إرشادات ودعماً لهذا النوع من الأحداث بدون رسوم إضافية؟
أ. AWS Business Support
ب. AWS Basic Support
ج. AWS Developer Support
*د. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/125425-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة وضع جدول زمني لتدوير بيانات اعتماد مستخدم قاعدة البيانات. ما هي خدمة AWS التي ستدعم هذا المطلب بأقل قدر من الأعباء التشغيلية؟
أ. AWS Systems Manager
*ب. AWS Secrets Manager
ج. AWS License Manager
د. AWS Managed Services
https://www.examtopics.com/discussions/amazon/view/125684-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي يمكن استخدامها لإنشاء اتصال خاص بين حمل عمل محلي (on-premises) وحمل عمل في AWS Cloud؟
أ. Amazon Route 53
ب. Amazon Macie
*ج. AWS Direct Connect
د. AWS PrivateLink
https://www.examtopics.com/discussions/amazon/view/123418-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS المستخدمة لتوفير التشفير لـ Amazon EBS؟
أ. AWS Certificate Manager
ب. AWS Systems Manager
*ج. AWS KMS
د. AWS Config
https://www.examtopics.com/discussions/amazon/view/123723-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إدارة موارد AWS Cloud الخاصة بها من خلال واجهة ويب. ما هي خدمة AWS التي ستلبي هذا المطلب؟
*أ. AWS Management Console
ب. AWS CLI
ج. AWS SDK
د. AWS Cloud9
https://www.examtopics.com/discussions/amazon/view/125685-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر من مزايا AWS Cloud؟ (اختر اثنين)
أ. استبدال النفقات المتغيرة بنفقات رأسمالية
*ب. وفورات الحجم العالية (High economies of scale)
*ج. الإطلاق عالمياً في دقائق
د. التركيز على إدارة البنية التحتية للأجهزة
هـ. التوفير الزائد لضمان السعة
https://www.examtopics.com/discussions/amazon/view/124444-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي فائدة AWS Cloud التي تظهر من خلال قدرة البنية التحتية على تحمل الأعطال مع الحد الأدنى من وقت التوقف؟
أ. المرونة (Agility)
ب. المرونة (Elasticity)
ج. قابلية التوسع (Scalability)
*د. التوفر العالي (High availability)
https://www.examtopics.com/discussions/amazon/view/123529-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مطور إلى الحفاظ على بنية تحتية لبيئة التطوير وبنية تحتية لبيئة الإنتاج بطريقة قابلة للتكرار. ما هي خدمة AWS التي يجب على المطور استخدامها لتلبية هذه المتطلبات؟
أ. AWS Ground Station
ب. AWS Shield
ج. AWS IoT Device Defender
*د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/124445-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهمة التي تقع على عاتق العميل، وفقاً لنموذج المسؤولية المشتركة AWS؟
أ. الحفاظ على أمان AWS Cloud.
*ب. تكوين جدران الحماية والشبكات.
ج. تصحيح (patch) نظام التشغيل لمثيلات Amazon RDS.
د. تنفيذ الضوابط المادية والبيئية.
https://www.examtopics.com/discussions/amazon/view/125689-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تساعد في تقديم تطبيقات عالية التوفر مع تجاوز الفشل (failover) السريع للبنى متعددة المناطق (multi-Region) ومتعددة مناطق التوفر (Multi-AZ)؟
أ. AWS WAF
*ب. AWS Global Accelerator
ج. AWS Shield
د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/123611-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة مجموعة من تطبيقات التجارة الإلكترونية. يجب أن تكون التطبيقات قادرة على إرسال رسائل لبعضها البعض. ما هي خدمة AWS التي تلبي هذا المطلب؟
أ. AWS Auto Scaling
ب. Elastic Load Balancing
*ج. Amazon Simple Queue Service (Amazon SQS)
د. Amazon Kinesis Data Streams
https://www.examtopics.com/discussions/amazon/view/125690-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي فوائد الفوترة الموحدة (consolidated billing) لخدمات AWS Cloud؟ (اختر اثنين)
*أ. خصومات الحجم (Volume discounts)
ب. رسوم إضافية بسيطة مقابل الاستخدام
*ج. فاتورة واحدة لحسابات متعددة
د. خيارات الدفع بالتقسيط
هـ. إنشاء ميزانية مخصصة للتكلفة والاستخدام
https://www.examtopics.com/discussions/amazon/view/124496-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مستخدم مراجعة جميع دلاء Amazon S3 التي تحتوي على قوائم تحكم بالوصول (ACLs) وسياسات دلو S3 في وحدة تحكم S3. ما هي خدمة أو مورد AWS الذي سيلبي هذا المطلب؟
أ. نقاط وصول S3 متعددة المناطق (S3 Multi-Region Access Points)
ب. S3 Storage Lens
ج. AWS IAM Identity Center (دخول موحد AWS)
*د. Access Analyzer for S3
https://www.examtopics.com/discussions/amazon/view/123420-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو أفضل مورد للمستخدم للعثور على معلومات وتقارير متعلقة بالامتثال حول AWS؟
*أ. AWS Artifact
ب. AWS Marketplace
ج. Amazon Inspector
د. AWS Support
https://www.examtopics.com/discussions/amazon/view/123615-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تمكّن الشركات من نشر تطبيق بالقرب من المستخدمين النهائيين؟
*أ. Amazon CloudFront
ب. AWS Auto Scaling
ج. AWS AppSync
د. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/123616-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي تعمل على تحسين أداء الشبكة عن طريق إرسال حركة المرور عبر البنية التحتية لشبكة AWS العالمية؟
أ. جدول التوجيه (Route table)
ب. AWS Transit Gateway
*ج. AWS Global Accelerator
د. Amazon VPC
https://www.examtopics.com/discussions/amazon/view/123617-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي توفر تخزين كائنات عالي المتانة (highly durable object storage)؟
*أ. Amazon S3
ب. Amazon Elastic File System (Amazon EFS)
ج. Amazon Elastic Block Store (Amazon EBS)
د. Amazon FSx
https://www.examtopics.com/discussions/amazon/view/123618-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المسؤولية التي تقع على عاتق AWS عندما تستضيف شركة قواعد البيانات الخاصة بها على مثيلات Amazon EC2؟
أ. النسخ الاحتياطي لقاعدة البيانات
ب. تصحيحات برامج قاعدة البيانات
ج. تصحيحات نظام التشغيل
*د. تثبيتات نظام التشغيل
https://www.examtopics.com/discussions/amazon/view/125691-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر من مزايا الانتقال إلى AWS Cloud؟ (اختر اثنين)
أ. القدرة على تسليم مسؤولية جميع الأمور الأمنية إلى AWS.
*ب. القدرة على استخدام نموذج الدفع حسب الاستخدام (pay-as-you-go).
ج. القدرة على السيطرة الكاملة على البنية التحتية المادية.
*د. عدم الاضطرار بعد الآن إلى تخمين السعة المطلوبة.
هـ. عدم القلق بعد الآن بشأن ضوابط وصول المستخدمين.
https://www.examtopics.com/discussions/amazon/view/125692-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تعتبر خدمة تخزين سحابي هجين توفر لمستخدمي المواقع المحلية (on-premises) وصولاً إلى سعة تخزين سحابية غير محدودة تقريباً؟
أ. AWS DataSync
ب. Amazon S3 Glacier
*ج. AWS Storage Gateway
د. Amazon Elastic Block Store (Amazon EBS)
https://www.examtopics.com/discussions/amazon/view/124497-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة للانتقال إلى AWS وتريد إنشاء تقديرات للتكلفة لحالات استخدام AWS الخاصة بها. ما هي خدمة أو أداة AWS التي يمكن للشركة استخدامها لتلبية هذه المتطلبات؟
*أ. AWS Pricing Calculator
ب. Amazon CloudWatch
ج. AWS Cost Explorer
د. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/123620-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الأداة التي يجب على المطور استخدامها لدمج ميزات خدمة AWS مباشرة في تطبيق؟
*أ. AWS Software Development Kit
ب. AWS CodeDeploy
ج. AWS Lambda
د. AWS Batch
https://www.examtopics.com/discussions/amazon/view/125693-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مما يلي يعتبر مبدأ تصميم موصى به في إطار عمل AWS Well-Architected؟
أ. تقليل وقت التوقف عن طريق إجراء تغييرات على البنية التحتية بشكل غير متكرر وبزيادات كبيرة.
ب. استثمار الوقت في تكوين البنية التحتية يدوياً.
*ج. التعلم للتحسين من حالات الفشل التشغيلية.
د. استخدام تصميم التطبيق المتجانس (monolithic) من أجل المركزية.
https://www.examtopics.com/discussions/amazon/view/124504-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: استخدام AWS Identity and Access Management (IAM) لمنح حق الوصول فقط إلى الموارد اللازمة لأداء مهمة ما هو مفهوم يعرف باسم:
أ. الوصول المقيد (restricted access)
ب. الوصول عند الحاجة (as-needed access)
*ج. الوصول بأقل الامتيازات (least privilege access)
د. الوصول عبر رمز مميز (token access)
https://www.examtopics.com/discussions/amazon/view/125694-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو أداة AWS التي يمكن استخدامها لإعداد جدار حماية للتحكم في حركة المرور الداخلة إلى شبكة فرعية (subnet) لـ Amazon VPC والخارجة منها؟
أ. مجموعة أمان (Security group)
ب. AWS WAF
ج. AWS Firewall Manager
*د. قائمة ACL للشبكة (Network ACL)
https://www.examtopics.com/discussions/amazon/view/123621-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل مستودع بيانات (data warehouse) لتحليل البيانات دون إدارة البنية التحتية لمستودع البيانات. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. Amazon Aurora
*ب. Amazon Redshift Serverless
ج. AWS Lambda
د. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/123622-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: كيف تساعد حوسبة AWS Cloud الشركات على تقليل التكاليف؟ (اختر اثنين)
أ. تفرض AWS نفس الأسعار للخدمات في كل منطقة AWS.
*ب. تمكن AWS من تعديل السعة حسب الطلب.
ج. تقدم AWS خصومات لمثيلات Amazon EC2 التي تبقى خاملة لأكثر من أسبوع واحد.
د. لا تفرض AWS رسوماً على البيانات المرسلة من AWS Cloud إلى الإنترنت.
*هـ. تلغي AWS العديد من تكاليف بناء وصيانة مراكز البيانات المحلية (on-premises).
https://www.examtopics.com/discussions/amazon/view/125700-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة منح المستخدمين في حساب AWS واحد حق الوصول إلى الموارد في حساب AWS آخر. لا يملك المستخدمون حالياً إذن الوصول إلى الموارد. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. مجموعة IAM (IAM group)
*ب. دور IAM (IAM role)
ج. علامة IAM (IAM tag)
د. IAM Access Analyzer
https://www.examtopics.com/discussions/amazon/view/125809-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهمة التي تقع على عاتق AWS عند استخدام خدمات AWS؟
أ. إدارة أذونات مستخدم IAM
ب. إنشاء قواعد مجموعة الأمان للوصول الصادر
*ج. صيانة الضوابط المادية والبيئية
د. تطبيق تصحيحات نظام التشغيل على Amazon EC2
https://www.examtopics.com/discussions/amazon/view/123623-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة أتمتة نشر البنية التحتية باستخدام البنية التحتية كرمز (IaC). تريد الشركة توسيع نطاق مجموعات الإنتاج (production stacks) بحيث يمكن نشرها في مناطق AWS متعددة. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon CloudWatch
ب. AWS Config
ج. AWS Trusted Advisor
*د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/123624-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار هو قدرة من منظور المنصة (platform perspective) في إطار عمل اعتماد السحابة AWS (AWS CAF)؟
*أ. هندسة البيانات (Data architecture)
ب. حماية البيانات (Data protection)
ج. حوكمة البيانات (Data governance)
د. علم البيانات (Data science)
https://www.examtopics.com/discussions/amazon/view/123729-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة عبء عمل في AWS Cloud. ما هي أفضل ممارسة AWS التي تضمن البنية الأكثر فعالية من حيث التكلفة لعبء العمل؟
أ. الاقتران الضعيف (Loose coupling)
*ب. تحسين الحجم (Rightsizing)
ج. التخزين المؤقت (Caching)
د. التكرار (Redundancy)
https://www.examtopics.com/discussions/amazon/view/124553-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة خدمة خارجية للنسخ الاحتياطي لـ 10 تيرابايت من البيانات إلى مكتبة أشرطة (tape library). خادم النسخ الاحتياطي المحلي ينفد منه المساحة. تريد الشركة استخدام خدمات AWS للنسخ الاحتياطي دون تغيير سير عمل النسخ الاحتياطي الحالي. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon Elastic Block Store (Amazon EBS)
*ب. AWS Storage Gateway
ج. Amazon Elastic Container Service (Amazon ECS)
د. AWS Lambda
https://www.examtopics.com/discussions/amazon/view/124134-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي أداة AWS التي تتيح للمستخدمين القدرة على تخطيط استخدام الخدمة وتكاليف الخدمة وحجوزات المثيلات (instance reservations)، وتسمح لهم أيضاً بتعيين تنبيهات مخصصة عندما تتجاوز تكاليفهم أو استخدامهم الحدود المقررة؟
أ. Cost Explorer
*ب. AWS Budgets
ج. AWS Cost and Usage Report
د. Reserved Instance reporting
https://www.examtopics.com/discussions/amazon/view/123681-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهام التي تقع على عاتق العميل، وفقاً لنموذج المسؤولية المشتركة AWS؟ (اختر اثنين)
أ. إنشاء البنية التحتية العالمية.
*ب. إجراء تشفير البيانات من جانب العميل (client-side data encryption).
*ج. تكوين بيانات اعتماد IAM.
د. تأمين مواقع الحافة (edge locations).
هـ. تصحيح (patch) مثيلات قاعدة بيانات Amazon RDS.
https://www.examtopics.com/discussions/amazon/view/125703-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تم تعيين مطور من قبل شركة كبيرة ويحتاج إلى بيانات اعتماد AWS. ما هي أفضل ممارسات الأمان التي يجب اتباعها؟ (اختر اثنين)
*أ. منح المطور حق الوصول فقط إلى موارد AWS اللازمة لأداء الوظيفة.
ب. مشاركة بيانات اعتماد المستخدم الجذر (root user) لحساب AWS مع المطور.
ج. إضافة المطور إلى مجموعة المسؤولين في AWS IAM.
د. تكوين سياسة كلمات مرور تضمن عدم إمكانية تغيير كلمة مرور المطور.
*هـ. التأكد من أن سياسة كلمات المرور للحساب تتطلب حداً أدنى للطول.
https://www.examtopics.com/discussions/amazon/view/124048-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة حسابات AWS متعددة تتضمن أعباء عمل حاسوبية لا يمكن مقاطعتها. تريد الشركة الحصول على خصومات على الفواتير بناءً على استخدام الشركة لخدمات AWS. ما هي ميزة AWS أو خيار الشراء الذي سيلبي هذه المتطلبات؟
أ. وضع العلامات على الموارد (Resource tagging)
*ب. الفوترة الموحدة (Consolidated billing)
ج. تسعير الدفع حسب الاستخدام (Pay-as-you-go pricing)
د. Spot Instances
https://www.examtopics.com/discussions/amazon/view/123730-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مستخدم السماح للتطبيقات التي تعمل على مثيل Amazon EC2 بإجراء استدعاءات لخدمات AWS الأخرى. يجب أن يكون الوصول الممنوح آمناً. ما هي خدمة أو ميزة AWS التي يجب استخدامها؟
أ. مجموعات الأمان (Security groups)
ب. AWS Firewall Manager
*ج. أدوار IAM (IAM roles)
د. مفاتيح SSH لمستخدم IAM
https://www.examtopics.com/discussions/amazon/view/123731-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة خادم ملفات Windows مُدار بالكامل لتطبيقاتها المستندة إلى Windows. ما هي خدمة AWS التي ستلبي هذا المطلب؟
*أ. Amazon FSx
ب. Amazon Elastic Kubernetes Service (Amazon EKS)
ج. Amazon Elastic Container Service (Amazon ECS)
د. Amazon EMR
https://www.examtopics.com/discussions/amazon/view/124131-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل عبء عمل NFS المحلي (on-premises) إلى AWS. ما هو نوع AWS Storage Gateway الذي يجب على الشركة استخدامه لتلبية هذا المطلب؟
أ. Tape Gateway
ب. Volume Gateway
ج. Amazon FSx File Gateway
*د. Amazon S3 File Gateway
https://www.examtopics.com/discussions/amazon/view/123798-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تتبع النشاط في حسابات AWS الخاصة بها، وتحتاج إلى معرفة وقت إجراء استدعاء API ضد موارد AWS الخاصة بها. ما هي أداة أو خدمة AWS التي يمكن استخدامها لتلبية هذه المتطلبات؟
أ. Amazon CloudWatch
ب. Amazon Inspector
*ج. AWS CloudTrail
د. AWS IAM
https://www.examtopics.com/discussions/amazon/view/123799-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة تطبيق غير قابل للانقطاع يعمل على مثيلات Amazon EC2. يقوم التطبيق بمعالجة قائمة انتظار من الملفات بشكل مستمر في Amazon Simple Queue Service (Amazon SQS). من المتوقع أن يستمر هذا الاستخدام في النمو لسنوات. ما هو نموذج شراء مثيلات EC2 الأكثر فعالية من حيث التكلفة لتلبية هذه المتطلبات؟
أ. Spot Instances
ب. On-Demand Instances
*ج. Savings Plans
د. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/123576-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة خدمة AWS لتقديم توصيات المنتجات بناءً على بيانات عملائها. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. Amazon Polly
*ب. Amazon Personalize
ج. Amazon Comprehend
د. Amazon Rekognition
https://www.examtopics.com/discussions/amazon/view/123800-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لنقلها إلى AWS Cloud. تقوم الشركة بتحديد فجوات قدراتها باستخدام منظورات إطار عمل اعتماد السحابة AWS (AWS CAF). ما هي مرحلة رحلة التحول السحابي التي تتضمن أنشطة التحديد هذه؟
أ. التصور (Envision)
*ب. المواءمة (Align)
ج. التوسع (Scale)
د. الإطلاق (Launch)
https://www.examtopics.com/discussions/amazon/view/123916-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تواصل اجتماعي حماية تطبيق الويب الخاص بها من الاستغلالات الشائعة على الويب مثل SQL injections والبرمجة النصية عبر المواقع (cross-site scripting). ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon Inspector
*ب. AWS WAF
ج. Amazon GuardDuty
د. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/123917-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS المُدارة بالكامل التي تساعد في إنشاء واختبار وإدارة صور Amazon EC2 المخصصة؟
*أ. EC2 Image Builder
ب. Amazon Machine Image (AMI)
ج. AWS Launch Wizard
د. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/123919-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة عملية آلية لفحص مثيلات Amazon EC2 الخاصة بها باستمرار بحثاً عن ثغرات برمجية. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon GuardDuty
*ب. Amazon Inspector
ج. Amazon Detective
د. Amazon Cognito
https://www.examtopics.com/discussions/amazon/view/123920-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى إجراء معالجة بيانات مرة واحدة في الأسبوع تستغرق عادة حوالي 5 ساعات لإكمالها. ما هي خدمة AWS التي يجب على الشركة استخدامها لعبء العمل هذا؟
أ. AWS Lambda
*ب. Amazon EC2
ج. AWS CodeDeploy
د. AWS Wavelength
https://www.examtopics.com/discussions/amazon/view/123896-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي توفر معلومات السجل (log) لحركة المرور الواردة والصادرة على واجهات الشبكة في VPC؟
أ. Amazon CloudWatch Logs
ب. AWS CloudTrail
*ج. سجلات تدفق VPC (VPC Flow Logs)
د. AWS Identity and Access Management (IAM)
https://www.examtopics.com/discussions/amazon/view/123732-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تصميم نظام تخزين مركزي لإدارة بيانات التكوين وكلمات المرور لتطبيقات الأعمال الهامة الخاصة بها. ما هي خدمة أو قدرة AWS التي ستلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
*أ. AWS Systems Manager Parameter Store
ب. AWS Secrets Manager
ج. AWS Config
د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/123897-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لنشر حاويات (containers) على AWS. تريد الشركة التحكم الكامل في موارد الحوسبة التي تستضيف الحاويات. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon Elastic Kubernetes Service (Amazon EKS)
ب. AWS Fargate
*ج. Amazon EC2
د. Amazon Elastic Container Service (Amazon ECS)
https://www.examtopics.com/discussions/amazon/view/125718-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي تسمح للمستخدمين بإنشاء حسابات AWS جديدة، وتجميع حسابات متعددة لتنظيم سير العمل، وتطبيق سياسات على مجموعات من الحسابات؟
أ. AWS Identity and Access Management (IAM)
ب. AWS Trusted Advisor
ج. AWS CloudFormation
*د. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/123921-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تخزين واسترجاع الملفات في Amazon S3 لتطبيقاتها المحلية الحالية باستخدام بروتوكولات نظام الملفات القياسية في المجال. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS DataSync
ب. AWS Snowball Edge
*ج. Amazon S3 File Gateway
د. AWS Transfer Family
https://www.examtopics.com/discussions/amazon/view/123922-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة منع هجمات SQL injection. ما هي خدمة أو ميزة AWS التي يجب على الشركة استخدامها لتلبية هذا المطلب؟
*أ. AWS WAF
ب. قوائم ACL للشبكة (Network ACLs)
ج. مجموعات الأمان (Security groups)
د. AWS Certificate Manager (ACM)
https://www.examtopics.com/discussions/amazon/view/123923-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة أداة موحدة لتوفير طريقة متسقة للتفاعل مع خدمات AWS. ما هي خدمة أو أداة AWS التي ستلبي هذا المطلب؟
*أ. AWS CLI
ب. Amazon Elastic Container Service (Amazon ECS)
ج. AWS Cloud9
د. AWS Virtual Private Network (AWS VPN)
https://www.examtopics.com/discussions/amazon/view/123924-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تقييم بيئة AWS الخاصة بها وتقديم توصيات بأفضل الممارسات في خمس فئات: التكلفة، الأداء، حدود الخدمة، تحمل الأخطاء، والأمان. ما هي خدمة AWS التي يمكن للشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Shield
ب. AWS WAF
*ج. AWS Trusted Advisor
د. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/125802-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي منظور في إطار عمل اعتماد السحابة AWS (AWS CAF) يتضمن قدرات لإدارة التكوين وإدارة التصحيحات (patch management)؟
أ. المنصة (Platform)
*ب. العمليات (Operations)
ج. الأمان (Security)
د. الحوكمة (Governance)
https://www.examtopics.com/discussions/amazon/view/123925-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة عبء عمل حاسوبي ثابت ويمكن التنبؤ به وغير قابل للانقطاع. ما هي خيارات شراء مثيل Amazon EC2 التي تلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟ (اختر اثنين)
أ. On-Demand Instances
*ب. Reserved Instances
ج. Spot Instances
*د. Saving Plans
هـ. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/123425-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو نموذج تسعير Amazon EC2 الأكثر فعالية من حيث التكلفة لعبء عمل غير قابل للانقطاع يعمل مرة واحدة في السنة لمدة 24 ساعة؟
*أ. On-Demand Instances
ب. Reserved Instances
ج. Spot Instances
د. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/123424-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار يمثل مسؤولية مشتركة بين AWS وعملائها بموجب نموذج المسؤولية المشتركة AWS؟
أ. تكوين أنظمة تشغيل مثيلات Amazon EC2
ب. تشفير نظام ملفات التطبيق من جانب الخادم
*ج. إدارة التصحيحات (Patch management)
د. أمان البنية التحتية المادية
https://www.examtopics.com/discussions/amazon/view/123930-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل أعباء العمل المحلية (on-premises) إلى AWS Cloud. تريد الشركة فصل أعباء العمل لإعادة الشحن (chargeback) إلى أقسام مختلفة. ما هي خدمات أو ميزات AWS التي ستلبي هذه المتطلبات؟ (اختر اثنين)
أ. مجموعات التنسيب (Placement groups)
*ب. الفوترة الموحدة (Consolidated billing)
ج. مواقع الحافة (Edge locations)
د. AWS Config
*هـ. حسابات AWS متعددة
https://www.examtopics.com/discussions/amazon/view/125983-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهمة التي تقع على عاتق AWS، وفقاً لنموذج المسؤولية المشتركة AWS؟
أ. تمكين تشفير من جانب العميل للكائنات المخزنة في Amazon S3.
ب. تكوين سياسات أمان IAM للامتثال لمبدأ الامتياز الأقل.
ج. تصحيح (patch) نظام التشغيل الضيف على مثيل Amazon EC2.
*د. تطبيق التحديثات على Nitro Hypervisor.
https://www.examtopics.com/discussions/amazon/view/123931-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار هو فائدة من استخدام AWS للحوسبة السحابية؟
أ. استبدال النفقات المتغيرة بنفقات ثابتة
*ب. تسعير الدفع حسب الاستخدام (Pay-as-you-go pricing)
ج. انخفاض السرعة والمرونة
د. إنفاق الأموال على تشغيل وصيانة مراكز البيانات
https://www.examtopics.com/discussions/amazon/view/123426-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار هو قدرة من منظور الأعمال (business perspective) في إطار عمل اعتماد السحابة AWS (AWS CAF)؟
أ. تطور الثقافة (Culture evolution)
ب. إدارة الأحداث (Event management)
*ج. تحقيق الدخل من البيانات (Data monetization)
د. هندسة المنصة (Platform architecture)
https://www.examtopics.com/discussions/amazon/view/123427-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بتقييم خطة دعم AWS Business Support الخاصة بها لتحديد ما إذا كانت الخطة لا تزال تلبي احتياجات الشركة. تفكر الشركة في التحول إلى AWS Enterprise Support. ما هي الفائدة الإضافية التي ستحصل عليها الشركة مع AWS Enterprise Support؟
أ. مجموعة كاملة من فحوصات AWS Trusted Advisor
ب. الوصول عبر الهاتف والبريد الإلكتروني والدردشة إلى مهندسي دعم السحابة 24 ساعة في اليوم، 7 أيام في الأسبوع
*ج. مدير حساب تقني معين (TAM) للمساعدة في المراقبة والتحسين
د. مراجعة استشارية وتوجيه معماري لتطبيقات الشركة
https://www.examtopics.com/discussions/amazon/view/125792-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو نموذج التسعير الذي سيقاطع مثيل Amazon EC2 قيد التشغيل إذا أصبحت السعة غير متاحة مؤقتاً؟
أ. On-Demand Instances
ب. Standard Reserved Instances
*ج. Spot Instances
د. Convertible Reserved Instances
https://www.examtopics.com/discussions/amazon/view/125804-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الخيارات التي تمثل قدرات منظور الأمان (security perspective) في إطار عمل اعتماد السحابة AWS (AWS CAF)؟ (اختر اثنين)
أ. المراقبة (Observability)
ب. إدارة الحوادث والمشكلات (Incident and problem management)
*ج. الاستجابة للحوادث (Incident response)
*د. حماية البنية التحتية (Infrastructure protection)
هـ. التوفر والاستمرارية (Availability and continuity)
https://www.examtopics.com/discussions/amazon/view/125805-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل عبء العمل الخاص بها على مثيلات Amazon EC2 لأكثر من عام واحد. سيعمل عبء العمل هذا بشكل مستمر. أي خيار يقدم سعراً مخفضاً بالساعة مقارنة بالسعر بالساعة لـ On-Demand Instances؟
أ. معالج AWS Graviton
ب. Dedicated Hosts
*ج. خطط توفير مثيلات EC2 (EC2 Instance Savings Plans)
د. مثيلات Amazon EC2 Auto Scaling
https://www.examtopics.com/discussions/amazon/view/126182-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خاصية AWS Cloud التي تساعد المستخدمين على التخلص من سعة وحدة المعالجة المركزية غير المستغلة بشكل كافٍ؟
أ. المرونة (Agility)
*ب. المرونة (Elasticity)
ج. الموثوقية (Reliability)
د. المتانة (Durability)
https://www.examtopics.com/discussions/amazon/view/126207-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمات AWS التي يمكن للشركة استخدامها لتحقيق بنية ضعيفة الاقتران (loosely coupled architecture)؟ (اختر اثنين)
أ. Amazon WorkSpaces
*ب. Amazon Simple Queue Service (Amazon SQS)
ج. Amazon Connect
د. AWS Trusted Advisor
*هـ. AWS Step Functions
https://www.examtopics.com/discussions/amazon/view/126046-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS Cloud التي يمكنها إرسال تنبيهات للعملاء إذا تم تجاوز حدود الإنفاق المخصصة؟
*أ. AWS Budgets
ب. AWS Cost Explorer
ج. AWS Cost Allocation Tags
د. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/126205-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة للانتقال إلى AWS Cloud. تريد الشركة استخدام إطار عمل اعتماد السحابة AWS (AWS CAF) لتحديد وتتبع نتائج الأعمال كجزء من رحلة التحول السحابي. ما هي قدرة منظور الحوكمة (governance perspective) في AWS CAF التي ستلبي هذه المتطلبات؟
*أ. إدارة الفوائد (Benefits management)
ب. إدارة المخاطر (Risk management)
ج. إدارة محفظة التطبيقات (Application portfolio management)
د. الإدارة المالية للسحابة (Cloud financial management)
https://www.examtopics.com/discussions/amazon/view/126183-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى نقل الملفات بسرعة وأمان عبر مسافات طويلة بين عميلها ودلو Amazon S3. ما هي ميزة S3 التي ستلبي هذا المطلب؟
أ. إصدار S3 (S3 Versioning)
*ب. تسريع نقل S3 (S3 Transfer Acceleration)
ج. S3 ACLs
د. S3 Intelligent-Tiering
https://www.examtopics.com/discussions/amazon/view/126184-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تشغيل عبء عمل تجريبي بشكل مستمر على مثيل Amazon EC2 وإيقاف المثيل بعد 12 ساعة. ما هو خيار شراء المثيل الذي سيلبي هذا المطلب بأكبر قدر من الفعالية من حيث التكلفة؟
*أ. On-Demand Instances
ب. Reserved Instances
ج. Spot Instances
د. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/126185-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي مرحلة رحلة التحول السحابي في إطار عمل اعتماد السحابة AWS (AWS CAF) التي تركز على إظهار كيف تساعد السحابة في تسريع نتائج الأعمال؟
أ. التوسع (Scale)
*ب. التصور (Envision)
ج. المواءمة (Align)
د. الإطلاق (Launch)
https://www.examtopics.com/discussions/amazon/view/126186-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار هو مسؤولية العميل بموجب نموذج المسؤولية المشتركة AWS؟
أ. صيانة الأجهزة الأساسية لمثيلات Amazon EC2
*ب. أمان بيانات التطبيق
ج. الأمان المادي لمراكز البيانات
د. صيانة مكونات VPC
https://www.examtopics.com/discussions/amazon/view/126187-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة أن تعمل مثيلات Amazon EC2 الخاصة بها في بيئة عالية التوفر، حتى في حالة وقوع كارثة طبيعية في منطقة جغرافية معينة. ما هو الأسلوب الذي سيحقق هذا الهدف؟
*أ. استخدام مثيلات EC2 في مناطق AWS متعددة.
ب. استخدام مثيلات EC2 في مواقع Amazon CloudFront متعددة.
ج. استخدام مثيلات EC2 في مواقع حافة متعددة.
د. استخدام مثيلات EC2 في AWS Local Zones.
https://www.examtopics.com/discussions/amazon/view/126188-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تحديث وتحويل تطبيق متجانس (monolithic) إلى خدمات مصغرة (microservices). تريد الشركة نقل التطبيق إلى AWS. ما هي استراتيجية النقل التي يجب على الشركة استخدامها؟
أ. إعادة الاستضافة (Rehost)
ب. إعادة التأسيس (Replatform)
ج. إعادة الشراء (Repurchase)
*د. إعادة البناء (Refactor)
https://www.examtopics.com/discussions/amazon/view/126189-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أنشأ مسؤول نظام مستخدم IAM جديداً لمطور وقام بتعيين مفتاح وصول (access key) للمستخدم بدلاً من اسم المستخدم وكلمة المرور. ما هو استخدام مفتاح الوصول؟
أ. للوصول إلى حساب AWS كمستخدم جذر لحساب AWS
ب. للوصول إلى حساب AWS من خلال AWS Management Console
*ج. للوصول إلى حساب AWS من خلال CLI
د. للوصول إلى جميع حسابات AWS الخاصة بالشركة
https://www.examtopics.com/discussions/amazon/view/126190-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار هو بيئة تتكون من مركز بيانات واحد أو أكثر؟
أ. Amazon CloudFront
*ب. منطقة التوفر (Availability Zone)
ج. VPC
د. AWS Outposts
https://www.examtopics.com/discussions/amazon/view/128037-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بنقل مركز بيانات محلي (on-premises) إلى AWS Cloud. يجب على الشركة نقل 50 بيتابايت من بيانات تخزين الملفات إلى AWS بأقل جهد تشغيلي ممكن. ما هي خدمة أو مورد AWS الذي يجب على الشركة استخدامه لتلبية هذه المتطلبات؟
*أ. AWS Snowmobile
ب. AWS Snowball Edge
ج. AWS Data Exchange
د. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/126191-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة تطبيق بمتطلبات أجهزة قوية. يجب أن يتمكن الطلاب الذين يستخدمون أجهزة كمبيوتر محمولة خفيفة الوزن ومنخفضة التكلفة من الوصول إلى التطبيق. ما هي خدمة AWS التي ستساعد الشركة على نشر التطبيق دون الاستثمار في بنية تحتية خلفية أو أجهزة عميل متطورة؟
*أ. Amazon AppStream 2.0
ب. AWS AppSync
ج. Amazon WorkLink
د. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/126192-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة الاستعلام عن سجلات الخادم (server logs) الخاصة بها للحصول على رؤى حول تجارب عملائها. ما هي خدمة AWS التي ستخزن هذه البيانات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. Amazon Aurora
ب. Amazon Elastic File System (Amazon EFS)
ج. Amazon Elastic Block Store (Amazon EBS)
*د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/127169-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مما يلي يعتبر مبدأ تصميم موصى به لهندسة AWS Cloud المعمارية؟
أ. تصميم مكونات مقترنة بإحكام (tightly coupled).
ب. بناء مكون تطبيق واحد يمكنه التعامل مع جميع وظائف التطبيق.
ج. إجراء تغييرات كبيرة على عدد أقل من التكرارات لتقليل فرص الفشل.
*د. تجنب البنية المتجانسة (monolithic architecture) عن طريق تجزئة أعباء العمل.
https://www.examtopics.com/discussions/amazon/view/126343-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تساعد المستخدمين على تدقيق نشاط API عبر حساب AWS الخاص بهم؟
*أ. AWS CloudTrail
ب. Amazon Inspector
ج. AWS WAF
د. AWS Config
https://www.examtopics.com/discussions/amazon/view/127331-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهمة التي تقع على عاتق العميل، وفقاً لنموذج المسؤولية المشتركة AWS؟
*أ. إدارة أنظمة التشغيل الضيف (guest operating systems)
ب. صيانة تكوين أجهزة البنية التحتية
ج. إدارة أنظمة تشغيل المضيف (host) والمحاكاة الافتراضية
د. صيانة البرامج التي تشغل مناطق التوفر (Availability Zones)
https://www.examtopics.com/discussions/amazon/view/128052-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إضافة وإزالة مثيلات Amazon EC2 تلقائياً. تريد الشركة أن تتكيف مثيلات EC2 مع أعباء العمل المتغيرة ديناميكياً. ما هي الخدمة أو الميزة التي ستلبي هذه المتطلبات؟
أ. Amazon DynamoDB
ب. Amazon EC2 Spot Instances
ج. AWS Snow Family
*د. Amazon EC2 Auto Scaling
https://www.examtopics.com/discussions/amazon/view/126193-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مستخدم أتمتة إدارة وتدوير بيانات الاعتماد التي تتم مشاركتها بين التطبيقات بشكل آمن، مع قضاء أقل وقت ممكن في مهام الإدارة. ما هي خدمة أو ميزة AWS التي يمكن استخدامها لتحقيق ذلك؟
أ. AWS CloudHSM
ب. AWS Key Management Service (AWS KMS)
*ج. AWS Secrets Manager
د. التشفير من جانب الخادم (Server-side encryption)
https://www.examtopics.com/discussions/amazon/view/126194-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة الأمان التي تتعرف تلقائياً على البيانات الحساسة أو الملكية الفكرية على AWS وتصنفها؟
أ. Amazon GuardDuty
*ب. Amazon Macie
ج. Amazon Inspector
د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/126195-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الإجراءات التي تعتبر من أفضل الممارسات للمستخدم الجذر لحساب AWS؟ (اختر اثنين)
أ. مشاركة بيانات اعتماد المستخدم الجذر مع أعضاء الفريق.
ب. إنشاء عدة مستخدمين جذر للحساب، مفصولين حسب البيئة.
*ج. تمكين المصادقة متعددة العوامل (MFA) على المستخدم الجذر.
*د. إنشاء مستخدم IAM بصلاحيات مسؤول للمهام الإدارية اليومية، بدلاً من استخدام المستخدم الجذر.
هـ. استخدام الوصول البرمجي بدلاً من المستخدم الجذر وكلمة المرور.
https://www.examtopics.com/discussions/amazon/view/126196-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة عبء عمل حاسم على مثيل Amazon RDS DB. تحتاج الشركة إلى أن يكون مثيل DB عالي التوفر مع وقت استرداد أقل من 5 دقائق. ما هو الحل الذي سيلبي هذه المتطلبات؟
أ. إنشاء نسخة متماثلة للقراءة (read replica) من مثيل DB.
ب. إنشاء قالب من مثيل DB باستخدام AWS CloudFormation.
ج. أخذ لقطات (snapshots) متكررة من مثيل DB. تخزين اللقطات في Amazon S3.
*د. تعديل مثيل DB ليكون نشراً متعدد مناطق التوفر (Multi-AZ).
https://www.examtopics.com/discussions/amazon/view/126197-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لنقل تطبيقها إلى AWS وتشغيل التطبيق على مثيلات Amazon EC2. سيكون للتطبيق استخدام مستمر لمدة عام واحد. ما هو خيار شراء مثيل EC2 الذي سيلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
*أ. Reserved Instances
ب. Spot Instances
ج. On-Demand Instances
د. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/126198-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى نقل البيانات بين دلو Amazon S3 وتطبيق محلي (on-premises). من المسؤول عن أمان هذه البيانات، وفقاً لنموذج المسؤولية المشتركة AWS؟
*أ. الشركة
ب. AWS
ج. بائع جدار الحماية
د. شريك AWS Marketplace
https://www.examtopics.com/discussions/amazon/view/126199-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي ركيزة من ركائز إطار عمل AWS Well-Architected تشير إلى قدرة النظام على التعافي من انقطاعات البنية التحتية أو الخدمة والحصول ديناميكياً على موارد الحوسبة لتلبية الطلب؟
أ. الأمان
*ب. الموثوقية
ج. كفاءة الأداء
د. تحسين التكلفة
https://www.examtopics.com/discussions/amazon/view/126200-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تحديد دلاء Amazon S3 التي تتم مشاركتها مع حساب AWS آخر. ما هي خدمة أو ميزة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Lake Formation
ب. تقرير بيانات اعتماد IAM (IAM credential report)
ج. Amazon CloudWatch
*د. IAM Access Analyzer
https://www.examtopics.com/discussions/amazon/view/126201-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تتيح للمستخدمين بناء لوحات معلومات تفاعلية لذكاء الأعمال تتضمن رؤى التعلم الآلي؟
أ. Amazon Athena
ب. Amazon Kendra
*ج. Amazon QuickSight
د. Amazon Redshift
https://www.examtopics.com/discussions/amazon/view/126202-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر عرض قيمة (value proposition) لـ AWS يصف قدرة المستخدم على توسيع نطاق البنية التحتية بناءً على الطلب؟
أ. سرعة الابتكار
*ب. مرونة الموارد (Resource elasticity)
ج. البنية المفصولة (Decoupled architecture)
د. النشر العالمي (Global deployment)
https://www.examtopics.com/discussions/amazon/view/128063-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو الإجراء الذي يعتبر أفضل ممارسة أمنية للوصول إلى البيانات الحساسة المخزنة في دلو Amazon S3؟
أ. تمكين النسخ المتماثل عبر المناطق S3 (S3 Cross-Region Replication) على دلو S3.
*ب. استخدام أدوار IAM للتطبيقات التي تحتاج إلى الوصول إلى دلو S3.
ج. تكوين AWS WAF لمنع الوصول غير المصرح به إلى دلو S3.
د. تكوين Amazon GuardDuty لمنع الوصول غير المصرح به إلى دلو S3.
https://www.examtopics.com/discussions/amazon/view/126203-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة معرفة المزيد عن الفوائد التي تقدمها الحوسبة السحابية. تريد الشركة فهم الميزة التشغيلية للمرونة (agility). كيف توفر AWS المرونة للمستخدمين؟
أ. القدرة على ضمان التوفر العالي من خلال نشر أعباء العمل في مناطق متعددة
ب. نموذج الدفع حسب الاستخدام للعديد من الخدمات والموارد
ج. القدرة على نقل إدارة البنية التحتية إلى AWS Cloud
*د. القدرة على توفير وإلغاء توفير الموارد بسرعة وبأقل جهد
https://www.examtopics.com/discussions/amazon/view/127933-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى بوابة مستخدم مركزية ليتمكن المستخدمون من تسجيل الدخول إلى تطبيقات الأعمال الخارجية التي تدعم Security Assertion Markup Language (SAML) 2.0. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. AWS Identity and Access Management (IAM)
ب. Amazon Cognito
*ج. AWS IAM Identity Center (دخول موحد AWS)
د. AWS CLI
https://www.examtopics.com/discussions/amazon/view/126204-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يجب على المستخدمين استخدامها للتعرف على توفر خدمة AWS وعملياتها؟
أ. Amazon EventBridge
ب. AWS Service Catalog
ج. AWS Control Tower
*د. لوحة معلومات صحة AWS (AWS Health Dashboard)
https://www.examtopics.com/discussions/amazon/view/126217-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو أداة AWS التي يمكن استخدامها لالتقاط معلومات حول حركة المرور الواردة والصادرة في Amazon VPC؟
*أ. سجلات تدفق VPC (VPC Flow Logs)
ب. Amazon Inspector
ج. خدمات نقطة نهاية VPC (VPC endpoint services)
د. بوابة NAT (NAT gateway)
https://www.examtopics.com/discussions/amazon/view/127173-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو الشيء الذي يكون العميل مسؤولاً عنه دائماً، وفقاً لنموذج المسؤولية المشتركة AWS؟
أ. تراخيص البرامج
ب. الشبكات
*ج. بيانات العميل
د. مفاتيح التشفير
https://www.examtopics.com/discussions/amazon/view/126319-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكن استخدامها لاسترداد تقارير الامتثال عند الطلب؟
أ. AWS Secrets Manager
*ب. AWS Artifact
ج. AWS Security Hub
د. AWS Certificate Manager
https://www.examtopics.com/discussions/amazon/view/127176-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تمكّن المستخدمين من التحقق من وجود ثغرات أمنية على مثيلات Amazon EC2 باستخدام قوالب تقييم محددة مسبقاً؟
أ. AWS WAF
ب. AWS Trusted Advisor
*ج. Amazon Inspector
د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/126320-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة للانتقال إلى AWS Cloud. تقوم الشركة بجمع معلومات حول البنية التحتية المحلية (on-premises) الخاصة بها وتحتاج إلى معلومات مثل اسم المضيف وعنوان IP وعنوان MAC. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS DataSync
ب. AWS Application Migration Service
*ج. AWS Application Discovery Service
د. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/126211-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو الإجراء الذي سيساعد في زيادة الأمان في AWS Cloud؟
أ. تمكين الوصول البرمجي لجميع مستخدمي IAM.
ب. استخدام مستخدمي IAM بدلاً من أدوار IAM لتفويض الصلاحيات.
*ج. تدوير مفاتيح الوصول بشكل دوري.
د. استخدام السياسات المضمنة (inline policies) بدلاً من السياسات المدارة من قبل العميل.
https://www.examtopics.com/discussions/amazon/view/127398-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لنقل تطبيقها إلى AWS Cloud. ما هي أداة أو مجموعة موارد AWS التي يجب على الشركة استخدامها لتحليل وتقييم جاهزيتها للنقل؟
*أ. إطار عمل اعتماد السحابة AWS (AWS Cloud Adoption Framework - AWS CAF)
ب. AWS Pricing Calculator
ج. إطار عمل AWS Well-Architected
د. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/126209-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يصف بعض الوظائف الأساسية لـ Amazon S3؟
أ. Amazon S3 هي خدمة تخزين كتل عالية الأداء مصممة للاستخدام مع Amazon EC2.
*ب. Amazon S3 هي خدمة تخزين كائنات توفر مستوى عالٍ من الأداء والأمان وقابلية التوسع وتوافر البيانات.
ج. Amazon S3 هو نظام تخزين ملفات مُدار بالكامل وموثوق به وقابل للتوسع ويمكن الوصول إليه عبر بروتوكول SMB القياسي في المجال.
د. Amazon S3 هو NFS مرن ومُدار بالكامل وقابل للتوسع للاستخدام مع خدمات AWS Cloud والموارد المحلية.
https://www.examtopics.com/discussions/amazon/view/127399-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي فائدة AWS التي تتجلى من خلال الخدمات التكنولوجية عند الطلب التي تمكّن الشركات من استبدال النفقات الثابتة المقدمة بنفقات متغيرة؟
أ. التوفر العالي
ب. وفورات الحجم
*ج. تسعير الدفع حسب الاستخدام
د. الانتشار العالمي
https://www.examtopics.com/discussions/amazon/view/127400-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمات أو ميزات AWS التي تمكّن المستخدمين من ربط الشبكات المحلية (on-premises) بشبكة VPC؟ (اختر اثنين)
*أ. AWS VPN
ب. Elastic Load Balancing
*ج. AWS Direct Connect
د. VPC peering
هـ. Amazon CloudFront
https://www.examtopics.com/discussions/amazon/view/126220-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مستخدم إلى نشر قاعدة بيانات غير علائقية (nonrelational) بسرعة على AWS. لا يرغب المستخدم في إدارة الأجهزة الأساسية أو برامج قاعدة البيانات. ما هي خدمة AWS التي يمكن استخدامها لتحقيق ذلك؟
أ. Amazon RDS
*ب. Amazon DynamoDB
ج. Amazon Aurora
د. Amazon Redshift
https://www.examtopics.com/discussions/amazon/view/126722-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الإجراءات التي تعتبر أمثلة على جهود الشركة لتحسين حجم (rightsize) موارد AWS الخاصة بها للتحكم في تكاليف السحابة؟ (اختر اثنين)
أ. الانتقال من Amazon RDS إلى Amazon DynamoDB لاستيعاب مجموعات بيانات NoSQL.
*ب. اعتماد اختيار أنواع مثيلات Amazon EC2 على أنماط الاستخدام السابقة.
*ج. استخدام سياسات دورة حياة Amazon S3 (S3 Lifecycle policies) لنقل الكائنات التي نادراً ما يصل إليها المستخدمون إلى مستويات تخزين أقل تكلفة.
د. استخدام عمليات نشر متعددة مناطق التوفر (Multi-AZ) لـ Amazon RDS.
هـ. استبدال مثيلات Amazon EC2 الحالية بـ AWS Elastic Beanstalk.
https://www.examtopics.com/discussions/amazon/view/126723-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي يمكن للشركة استخدامها لتطبيق قواعد الأمان على مثيلات Amazon EC2 محددة؟
أ. قوائم ACL للشبكة (Network ACLs)
*ب. مجموعات الأمان (Security groups)
ج. AWS Trusted Advisor
د. AWS WAF
https://www.examtopics.com/discussions/amazon/view/126222-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي مبادئ التصميم التي تدعم ركيزة الموثوقية في إطار عمل AWS Well-Architected؟ (اختر اثنين)
أ. تنفيذ العمليات كرمز.
ب. تمكين إمكانية التتبع.
*ج. التوسع تلقائياً لتلبية الطلب.
د. نشر الموارد عالمياً لتحسين وقت الاستجابة.
*هـ. التعافي تلقائياً من الفشل.
https://www.examtopics.com/discussions/amazon/view/126223-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة AWS وتحتاج إلى نقل 2 تيرابايت من البيانات. أي نوع من نقل تلك البيانات لن يتكبد الشركة أي تكلفة؟
*أ. نقل البيانات الواردة من الإنترنت (Inbound data transfer)
ب. نقل البيانات الصادرة إلى الإنترنت (Outbound data transfer)
ج. نقل البيانات بين مناطق AWS
د. نقل البيانات بين مناطق التوفر
https://www.examtopics.com/discussions/amazon/view/126744-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إنشاء قوالب يمكن للشركة إعادة استخدامها لنشر موارد AWS متعددة. ما هي خدمة أو ميزة AWS التي يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. AWS Marketplace
ب. Amazon Machine Image (AMI)
*ج. AWS CloudFormation
د. AWS OpsWorks
https://www.examtopics.com/discussions/amazon/view/126224-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة ببناء تطبيق يتطلب القدرة على إرسال وتخزين واستقبال الرسائل بين مكونات التطبيق. لدى الشركة مطلب آخر وهو معالجة الرسائل بترتيب الوارد أولاً يخرج أولاً (FIFO). ما هي خدمة AWS التي يجب على الشركة استخدامها؟
أ. AWS Step Functions
ب. Amazon Simple Notification Service (Amazon SNS)
ج. Amazon Kinesis Data Streams
*د. Amazon Simple Queue Service (Amazon SQS)
https://www.examtopics.com/discussions/amazon/view/127193-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي تعتبر خدمة قائمة على المتصفح ومُصادق عليها مسبقاً ويمكن إطلاقها مباشرة من AWS Management Console؟
أ. AWS API
ب. AWS Lightsail
ج. AWS Cloud9
*د. AWS CloudShell
https://www.examtopics.com/discussions/amazon/view/126225-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل قاعدة بياناتها إلى خدمة AWS مُدارة متوافقة مع PostgreSQL. ما هي خدمات AWS التي ستلبي هذه المتطلبات؟ (اختر اثنين)
أ. Amazon Athena
*ب. Amazon RDS
ج. Amazon EC2
د. Amazon DynamoDB
*هـ. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/126226-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة أسطول من سفن الشحن. تحتوي سفن الشحن على أجهزة استشعار تجمع البيانات في البحر، حيث لا يتوفر اتصال بالإنترنت أو يكون متقطعاً. تحتاج الشركة إلى جمع البيانات وتنسيقها ومعالجتها في البحر ونقلها إلى AWS لاحقاً. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS IoT Core
ب. Amazon Lightsail
ج. AWS Storage Gateway
*د. AWS Snowball Edge
https://www.examtopics.com/discussions/amazon/view/126227-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستضيف شركة تطبيقاً على مثيلات Amazon EC2 متعددة. يستخدم التطبيق Amazon Simple Notification Service (Amazon SNS) لإرسال الرسائل. ما هي خدمة أو ميزة AWS التي ستمنح التطبيق الإذن للوصول إلى خدمات AWS المطلوبة؟
أ. AWS Certificate Manager (ACM)
*ب. أدوار IAM (IAM roles)
ج. AWS Security Hub
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/127402-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى مستخدم معرفة محدودة بخدمات AWS، ولكنه يريد نشر تطبيق Node.js قابل للتوسع بسرعة في AWS Cloud. ما هي الخدمة التي يجب استخدامها لنشر التطبيق؟
أ. AWS CloudFormation
*ب. AWS Elastic Beanstalk
ج. Amazon EC2
د. AWS OpsWorks
https://www.examtopics.com/discussions/amazon/view/126354-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى شبكة توصيل محتوى (CDN) توفر تسليمًا آمنًا للبيانات ومقاطع الفيديو والتطبيقات وواجهات برمجة التطبيقات للمستخدمين عالمياً بزمن وصول منخفض وسرعات نقل عالية. ما هي خدمة AWS التي تلبي هذه المتطلبات؟
*أ. Amazon CloudFront
ب. Elastic Load Balancing
ج. Amazon S3
د. Amazon Elastic Transcoder
https://www.examtopics.com/discussions/amazon/view/128024-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى استخدام برامج من جهات خارجية لعبء العمل الخاص بها على AWS. ما هي خدمة أو ميزة AWS التي يمكن للشركة استخدامها لشراء البرنامج؟
أ. AWS Resource Access Manager
ب. AWS Managed Services
ج. AWS License Manager
*د. AWS Marketplace
https://www.examtopics.com/discussions/amazon/view/128065-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تخزين ملفات مُدار بالكامل وموثوق به وقابل للتوسع ويمكن الوصول إليه عبر بروتوكول Server Message Block (SMB). ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon S3
ب. Amazon Elastic File System (Amazon EFS)
*ج. Amazon FSx for Windows File Server
د. Amazon Elastic Block Store (Amazon EBS)
https://www.examtopics.com/discussions/amazon/view/126229-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تكوين وإدارة مجموعات أمان Amazon VPC مركزياً عبر حسابات AWS متعددة داخل مؤسسة في AWS Organizations. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
*أ. AWS Firewall Manager
ب. Amazon GuardDuty
ج. Amazon Detective
د. AWS WAF
https://www.examtopics.com/discussions/amazon/view/126230-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهمة التي تقع على عاتق AWS، وفقاً لنموذج المسؤولية المشتركة AWS؟
أ. تكوين إدارة الهوية والوصول للتطبيقات.
ب. إدارة خيارات التشفير للبيانات المخزنة على AWS.
ج. تكوين مجموعات الأمان لمثيلات Amazon EC2.
*د. صيانة الأجهزة المادية للبنية التحتية.
https://www.examtopics.com/discussions/amazon/view/126231-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة مثيل Amazon EC2 في شبكة فرعية خاصة. تريد الشركة بدء اتصال بالإنترنت لسحب تحديثات نظام التشغيل مع منع حركة المرور من الإنترنت من الوصول إلى مثيل EC2. ما هي خدمة AWS المُدارة التي تسمح بذلك؟
أ. نقطة نهاية VPC (VPC endpoint)
*ب. بوابة NAT (NAT gateway)
ج. Amazon PrivateLink
د. VPC peering
https://www.examtopics.com/discussions/amazon/view/126232-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الإجراءات التي تقع على عاتق AWS، وفقاً لنموذج المسؤولية المشتركة AWS؟ (اختر اثنين)
*أ. تأمين طبقة المحاكاة الافتراضية
ب. تصحيح (patching) نظام التشغيل على مثيلات Amazon EC2
ج. فرض سياسة كلمات مرور صارمة لمستخدمي IAM
*د. تصحيح (patching) نظام التشغيل على مثيلات Amazon RDS
هـ. تكوين مجموعات الأمان وقوائم ACL للشبكة
https://www.examtopics.com/discussions/amazon/view/126234-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بتخزين بيانات لن يتم الوصول إليها بشكل متكرر في AWS Cloud. إذا احتاجت الشركة إلى الوصول إلى البيانات، فيجب استرداد البيانات في غضون 12 ساعة. تريد الشركة حلاً فعالاً من حيث التكلفة لتكاليف التخزين لكل غيغابايت. ما هي فئة تخزين Amazon S3 التي ستلبي هذه المتطلبات؟
أ. S3 Standard
*ب. S3 Glacier Flexible Retrieval
ج. S3 One Zone-Infrequent Access (S3 One Zone-IA)
د. S3 Standard-Infrequent Access (S3 Standard-IA)
https://www.examtopics.com/discussions/amazon/view/126235-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو مورد AWS الذي يمكن استخدامه لتحديد الخدمات التي استخدمها مستخدم ضمن نطاق زمني محدد؟
أ. قوائم التحكم في الوصول (ACLs) لـ Amazon S3
ب. AWS Certificate Manager (ACM)
ج. Network Access Analyzer
*د. AWS Identity and Access Management Access Analyzer
https://www.examtopics.com/discussions/amazon/view/126237-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى التعاقد مع استشاريين من جهات خارجية للمساعدة في صيانة ودعم بيئة AWS الخاصة بها واحتياجات أعمال الشركة. ما هي خدمة أو مورد AWS الذي سيلبي هذه المتطلبات؟
أ. AWS Support
ب. AWS Organizations
ج. AWS Service Catalog
*د. شبكة شركاء AWS (AWS Partner Network - APN)
https://www.examtopics.com/discussions/amazon/view/126238-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إنشاء لوحات معلومات Amazon QuickSight كل أسبوع باستخدام بيانات الفوترة الخاصة بها. ما هي ميزة أو أداة AWS التي يمكن للشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Budgets
ب. AWS Cost Explorer
*ج. تقرير التكلفة والاستخدام AWS (AWS Cost and Usage Report)
د. AWS Cost Anomaly Detection
https://www.examtopics.com/discussions/amazon/view/126239-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لنقل النسخ الاحتياطية للبيانات إلى AWS Cloud. تحتاج الشركة إلى استبدال التخزين المحلي (on-premises) بتخزين قائم على السحابة ولكن يتم تخزينه مؤقتاً محلياً. ما هي خدمة AWS التي تلبي هذه المتطلبات؟
*أ. AWS Storage Gateway
ب. AWS Snowcone
ج. AWS Backup
د. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/126241-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تنظيم مواردها وتتبع تكاليف AWS على مستوى تفصيلي. تحتاج الشركة إلى تصنيف التكاليف حسب قسم الأعمال والبيئة والتطبيق. ما هو الحل الذي سيلبي هذه المتطلبات؟
أ. الوصول إلى وحدة تحكم AWS Cost Management لتنظيم الموارد، وتعيين ميزانية AWS، وتلقي إشعارات بالاستخدام غير المقصود.
*ب. استخدام العلامات (tags) لتنظيم الموارد. تفعيل علامات توزيع التكلفة (cost allocation tags) لتتبع تكاليف AWS على مستوى تفصيلي.
ج. إنشاء لوحات معلومات Amazon CloudWatch لتنظيم وتتبع التكاليف بشكل مرئي فردي.
د. الوصول إلى لوحة معلومات AWS Billing and Cost Management لتنظيم وتتبع استهلاك الموارد على مستوى تفصيلي.
https://www.examtopics.com/discussions/amazon/view/128514-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تخطيط وجدولة وتشغيل مئات الآلاف من وظائف الحوسبة على AWS. ما هي خدمة AWS التي يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. AWS Step Functions
ب. AWS Service Catalog
ج. Amazon Simple Queue Service (Amazon SQS)
*د. AWS Batch
https://www.examtopics.com/discussions/amazon/view/126242-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمات أو ميزات AWS التي توفر توفراً عالياً وزمن وصول منخفض من خلال تمكين تجاوز الفشل (failover) عبر مناطق AWS مختلفة؟ (اختر اثنين)
*أ. Amazon Route 53
ب. Network Load Balancer
ج. Amazon S3 Transfer Acceleration
*د. AWS Global Accelerator
هـ. Application Load Balancer
https://www.examtopics.com/discussions/amazon/view/126244-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر طريقة لاستخدام مجموعات Amazon EC2 Auto Scaling لتوسيع السعة في AWS Cloud؟
*أ. توسيع أو تقليل عدد مثيلات EC2 تلقائياً، بناءً على الطلب.
ب. استخدام مثيلات EC2 بدون خادم (serverless).
ج. توسيع حجم مثيلات EC2 لأعلى أو لأسفل تلقائياً، بناءً على الطلب.
د. نقل موارد وحدة المعالجة المركزية غير المستخدمة بين مثيلات EC2.
https://www.examtopics.com/discussions/amazon/view/126245-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي القدرات التي تعتبر من فوائد AWS Cloud؟ (اختر اثنين)
أ. استبدال النفقات المتغيرة بنفقات رأسمالية.
*ب. النشر عالمياً في دقائق.
ج. تخطيط السعة مسبقاً قبل عمليات النشر.
*د. الاستفادة من وفورات الحجم.
هـ. تقليل الاعتماد على اتصال الشبكة.
https://www.examtopics.com/discussions/amazon/view/126247-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أمان AWS التي تحمي التطبيقات من هجمات حجب الخدمة الموزعة (DDoS) مع كشف دائم وتخفيف تلقائي مضمن؟
أ. Amazon Inspector
ب. AWS Web Application Firewall (AWS WAF)
ج. Elastic Load Balancing (ELB)
*د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/126248-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تسمح للمستخدمين بنمذجة وتوفير موارد AWS باستخدام لغات برمجة شائعة؟
أ. AWS CloudFormation
ب. AWS CodePipeline
*ج. AWS Cloud Development Kit (AWS CDK)
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/127409-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو نموذج تسعير مثيل Amazon EC2 الذي يمكنه تقديم خصومات تصل إلى 90٪؟
أ. Reserved Instances
ب. On-Demand
ج. Dedicated Hosts
*د. Spot Instances
https://www.examtopics.com/discussions/amazon/view/126252-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مما يلي يعمل كجدار حماية على مستوى المثيل للتحكم في الوصول الوارد والصادر؟
أ. قائمة التحكم في الوصول إلى الشبكة
*ب. مجموعات الأمان
ج. AWS Trusted Advisor
د. بوابات افتراضية خاصة
https://www.examtopics.com/discussions/amazon/view/126253-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يجب أن تكون الشركة قادرة على تطوير واختبار وإطلاق تطبيق في AWS Cloud بسرعة. ما هي ميزة الحوسبة السحابية التي ستلبي هذه المتطلبات؟
أ. التوقف عن تخمين السعة
ب. استبدال النفقات الثابتة بنفقات متغيرة
ج. تحقيق وفورات الحجم
*د. زيادة السرعة والمرونة
https://www.examtopics.com/discussions/amazon/view/128426-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة فرق لها أدوار وظيفية ومسؤوليات مختلفة. غالباً ما يغير موظفو الشركة فرقهم. تحتاج الشركة إلى إدارة الأذونات للموظفين بحيث تكون الأذونات مناسبة للمسؤوليات الوظيفية. ما هو مورد IAM الذي يجب على الشركة استخدامه لتلبية هذا المطلب بأقل جهد تشغيلي؟
أ. مجموعات مستخدمي IAM
*ب. أدوار IAM
ج. ملفات تعريف مثيل IAM (IAM instance profiles)
د. سياسات IAM للمستخدمين الأفراد
https://www.examtopics.com/discussions/amazon/view/126504-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكن للشركة استخدامها لتخزين وتشفير كلمات المرور لقاعدة بيانات بشكل آمن؟
أ. AWS Shield
*ب. AWS Secrets Manager
ج. AWS Identity and Access Management (IAM)
د. Amazon Cognito
https://www.examtopics.com/discussions/amazon/view/126254-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما الذي يمكن لممارس سحابي استخدامه لاسترداد مستندات الأمان والامتثال AWS وتقديمها كدليل لمدقق أو جهة تنظيمية؟
أ. AWS Certificate Manager
ب. AWS Systems Manager
*ج. AWS Artifact
د. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/126255-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي أنواع التشفير التي يمكن استخدامها لحماية الكائنات غير النشطة (at rest) في Amazon S3؟ (اختر اثنين)
*أ. التشفير من جانب الخادم باستخدام مفاتيح تشفير مُدارة من Amazon S3 (SSE-S3)
*ب. التشفير من جانب الخادم باستخدام مفاتيح مُدارة من AWS KMS (SSE-KMS)
ج. TLS
د. SSL
هـ. تشفير البيانات الشفاف (Transparent Data Encryption - TDE)
https://www.examtopics.com/discussions/amazon/view/126325-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة دمج موقع التسوق عبر الإنترنت الخاص بها مع بيانات اعتماد تسجيل الدخول عبر وسائل التواصل الاجتماعي. ما هي خدمة AWS التي يمكن للشركة استخدامها لإجراء هذا التكامل؟
أ. AWS Directory Service
ب. AWS Identity and Access Management (IAM)
*ج. Amazon Cognito
د. AWS IAM Identity Center (دخول موحد AWS)
https://www.examtopics.com/discussions/amazon/view/127428-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS المستخدمة لتتبع وتسجيل وتدقيق تغييرات التكوين التي يتم إجراؤها على موارد AWS؟
أ. AWS Shield
*ب. AWS Config
ج. AWS IAM
د. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/126256-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يقوم عميل بتشغيل مثيل Amazon Linux EC2 بنظام On-Demand لمدة 3 ساعات و5 دقائق و6 ثوانٍ. كم من الوقت سيتم فوترة العميل؟
أ. 3 ساعات و 5 دقائق
*ب. 3 ساعات و 5 دقائق و 6 ثوانٍ
ج. 3 ساعات و 6 دقائق
د. 4 ساعات
https://www.examtopics.com/discussions/amazon/view/126258-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: موقع ويب لشركة يعاني من هجمات DDoS. ما هي خدمة AWS التي يمكن أن تساعد في حماية موقع الشركة على الويب من هذه الهجمات؟
أ. AWS Resource Access Manager
ب. AWS Amplify
*ج. AWS Shield
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/129691-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تقييماً مخصصاً لبيئتها المحلية الحالية. تريد الشركة فهم تكاليف التشغيل المتوقعة في AWS Cloud. ما هي خدمة أو أداة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Trusted Advisor
ب. Amazon Inspector
ج. AWS Control Tower
*د. Migration Evaluator
https://www.examtopics.com/discussions/amazon/view/127411-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة لديها وحدات أعمال متعددة إدارة وحوكمة بيئات AWS Cloud الخاصة بها مركزياً. تريد الشركة أتمتة إنشاء حسابات AWS، وتطبيق سياسات التحكم في الخدمة (SCPs)، وتبسيط عمليات الفوترة. ما هي خدمة أو أداة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
*أ. AWS Organizations
ب. Cost Explorer
ج. AWS Budgets
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/127623-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستضيف شركة تطبيقاً في AWS Cloud. تريد الشركة التحقق من أن خدمات AWS الأساسية والبنية التحتية العامة لـ AWS تعمل بشكل طبيعي. ما هي مجموعة خدمات AWS التي يمكن للشركة استخدامها لجمع المعلومات المطلوبة؟ (اختر اثنين)
*أ. لوحة معلومات الصحة الشخصية AWS (AWS Personal Health Dashboard)
ب. AWS Systems Manager
ج. AWS Trusted Advisor
*د. لوحة معلومات صحة الخدمة AWS (AWS Service Health Dashboard)
هـ. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/127483-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى نقل قاعدة بيانات PostgreSQL من موقع محلي (on-premises) إلى Amazon RDS. ما هي خدمة أو أداة AWS التي يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. Cloud Adoption Readiness Tool
ب. AWS Migration Hub
*ج. AWS Database Migration Service (AWS DMS)
د. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/127413-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو مفهوم السحابة الذي يتجلى باستخدام AWS Compute Optimizer؟
أ. التحقق من الأمان
*ب. تحسين الحجم (Rightsizing)
ج. المرونة (Elasticity)
د. الانتشار العالمي
https://www.examtopics.com/discussions/amazon/view/126261-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستضيف شركة كمية كبيرة من البيانات في AWS. تريد الشركة تحديد ما إذا كان أي من البيانات يعتبر حساساً. ما هي خدمة AWS التي ستلبي المطلب؟
أ. Amazon Inspector
*ب. Amazon Macie
ج. AWS Identity and Access Management (IAM)
د. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/128167-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى مستخدم عبء عمل ذو حالة (stateful) سيعمل على Amazon EC2 للسنوات الثلاث القادمة. ما هو نموذج التسعير الأكثر فعالية من حيث التكلفة لعبء العمل هذا؟
أ. On-Demand Instances
*ب. Reserved Instances
ج. Dedicated Instances
د. Spot Instances
https://www.examtopics.com/discussions/amazon/view/127624-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: من يقوم بتمكين تشفير البيانات غير النشطة (at rest) لـ Amazon Elastic Block Store (Amazon EBS)؟
أ. AWS Support
*ب. عملاء AWS
ج. AWS Key Management Service (AWS KMS)
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/126262-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما الذي يمكن للمستخدم إنجازه باستخدام AWS CloudTrail؟
أ. إنشاء تقرير بيانات اعتماد مستخدم IAM.
*ب. تسجيل استدعاءات API التي تتم لخدمات AWS.
ج. تقييم امتثال تكوينات موارد AWS مع السياسات والإرشادات.
د. التأكد من أن مثيلات Amazon EC2 تحتوي على أحدث التحديثات الأمنية.
https://www.examtopics.com/discussions/amazon/view/130356-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لاستضافة أعباء العمل الخاصة بها على AWS. ما هي خدمة AWS التي تتطلب من الشركة تحديث وتصحيح (patch) نظام التشغيل الضيف؟
أ. Amazon DynamoDB
ب. Amazon S3
*ج. Amazon EC2
د. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/130357-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي ستبحث عن وتحدد موارد AWS التي تتم مشاركتها خارجياً؟
أ. Amazon OpenSearch Service
ب. AWS Control Tower
*ج. AWS IAM Access Analyzer
د. AWS Fargate
https://www.examtopics.com/discussions/amazon/view/126263-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بنقل أعباء العمل الخاصة بها إلى AWS Cloud. يجب على الشركة الاحتفاظ بالتحكم الكامل في إدارة التصحيحات (patch management) لأنظمة التشغيل الضيف التي تستضيف تطبيقاتها. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon DynamoDB
*ب. Amazon EC2
ج. AWS Lambda
د. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/130358-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: في أي مستوى دعم يحصل المستخدمون على إمكانية الوصول إلى مساعد دعم (support concierge)؟
أ. Basic Support
ب. Developer Support
ج. Business Support
*د. Enterprise Support
https://www.examtopics.com/discussions/amazon/view/126265-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكن للشركة استخدامها لتصميم وبناء تطبيقات بدون خادم (serverless) بشكل مرئي؟
أ. AWS Lambda
ب. AWS Batch
*ج. AWS Application Composer
د. AWS App Runner
https://www.examtopics.com/discussions/amazon/view/126065-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة الانتقال إلى AWS واستخدام نفس برنامج الأمان الذي تستخدمه محلياً (on premises). يقدم بائع برامج الأمان برنامج الأمان الخاص به كخدمة على AWS. أين يمكن للشركة شراء حل الأمان؟
أ. AWS Partner Solutions Finder
ب. AWS Support Center
ج. AWS Management Console
*د. AWS Marketplace
https://www.examtopics.com/discussions/amazon/view/126270-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة بنشر مثيل Amazon EC2. أي خيار يعتبر مسؤولية AWS بموجب نموذج المسؤولية المشتركة AWS؟
أ. إدارة وتشفير بيانات التطبيق
ب. تثبيت تحديثات وتصحيحات أمان نظام التشغيل الضيف
*ج. تكوين أجهزة البنية التحتية
د. تكوين مجموعات الأمان على كل مثيل
https://www.examtopics.com/discussions/amazon/view/126969-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل قاعدة بيانات PostgreSQL الخاصة بها إلى AWS. لا تستخدم الشركة قاعدة البيانات بشكل متكرر. ما هي خدمة أو مورد AWS التي ستلبي هذه المتطلبات بأقل أعباء إدارة؟
أ. PostgreSQL على Amazon EC2
ب. Amazon RDS for PostgreSQL
ج. Amazon Aurora PostgreSQL-Compatible Edition
*د. Amazon Aurora Serverless
https://www.examtopics.com/discussions/amazon/view/127239-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة Amazon DynamoDB كقاعدة بيانات لتطبيقها. ما هي المهام التي تقع على عاتق AWS، وفقاً لنموذج المسؤولية المشتركة AWS؟ (اختر اثنين)
أ. تصنيف البيانات.
ب. تكوين أذونات الوصول.
ج. إدارة خيارات التشفير.
*د. توفير نقاط نهاية عامة لتخزين واسترجاع البيانات.
*هـ. إدارة طبقة البنية التحتية ونظام التشغيل.
https://www.examtopics.com/discussions/amazon/view/127485-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إنشاء منصة تجارة إلكترونية يمكن الوصول إليها عالمياً لعملائها. تريد الشركة استخدام خدمة DNS ويب عالية التوفر وقابلة للتوسع لربط المستخدمين بالمنصة. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon EC2
ب. Amazon VPC
*ج. Amazon Route 53
د. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/130359-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي مهمة الصيانة التي تقع على عاتق العميل، وفقاً لنموذج المسؤولية المشتركة AWS؟
أ. الاتصال المادي بين مناطق التوفر
ب. صيانة محولات الشبكة
ج. تحديثات الأجهزة وتصحيحات البرامج الثابتة (firmware)
*د. تحديثات وتصحيحات أمان Amazon EC2
https://www.examtopics.com/discussions/amazon/view/129470-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تحسين وضعها الأمني من خلال مراجعة نشاط المستخدم عبر استدعاءات API. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. AWS WAF
ب. Amazon Detective
ج. Amazon CloudWatch
*د. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/127843-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بالنقل إلى AWS Cloud وتخطط لتشغيل أعباء عمل تجريبية لمدة تتراوح بين 3 إلى 6 أشهر على AWS. ما هو نموذج التسعير الذي سيلبي هذه المتطلبات؟
أ. استخدام Savings Plans لمدة 3 سنوات.
ب. استخدام Dedicated Hosts.
ج. شراء Reserved Instances.
*د. استخدام On-Demand Instances.
https://www.examtopics.com/discussions/amazon/view/131648-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة لديها AWS Enterprise Support وتقوم بإطلاق نسخة جديدة من منتج شهير خلال شهرين. تتوقع الشركة زيادة كبيرة في حركة المرور على موقعها على الويب. موقع الويب مستضاف على مثيلات Amazon EC2. ما الإجراء الذي يجب على الشركة اتخاذه لتقييم جاهزيتها للتوسع لهذا الإطلاق؟
أ. استبدال مثيلات EC2 بوظائف AWS Lambda.
*ب. استخدام دعم إدارة أحداث البنية التحتية AWS (AWS Infrastructure Event Management - IEM).
ج. تقديم طلب على AWS Marketplace لمراقبة الحدث.
د. مراجعة تقارير التغطية في وحدة تحكم AWS Cost Management.
https://www.examtopics.com/discussions/amazon/view/126280-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إطلاق أعباء عمل متعددة على AWS. يرتبط كل عبء عمل بوحدة أعمال مختلفة. تريد الشركة فصل وتتبع التكاليف لكل وحدة أعمال. ما هو الحل الذي سيلبي هذه المتطلبات بأقل جهد تشغيلي؟
*أ. استخدام AWS Organizations وإنشاء حساب واحد لكل وحدة أعمال.
ب. استخدام جدول بيانات للتحكم في المالكين وتكلفة كل مورد.
ج. استخدام جدول Amazon DynamoDB لتسجيل التكاليف لكل وحدة أعمال.
د. استخدام وحدة تحكم AWS Billing لتعيين مالكين للموارد وتتبع التكاليف.
https://www.examtopics.com/discussions/amazon/view/133860-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة خدمة قاعدة بيانات السلاسل الزمنية (time-series) التي تسهل تخزين وتحليل تريليونات الأحداث كل يوم. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. Amazon Neptune
*ب. Amazon Timestream
ج. Amazon Forecast
د. Amazon DocumentDB (مع التوافق مع MongoDB)
https://www.examtopics.com/discussions/amazon/view/126060-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار يعتبر عنصر تحكم مشترك بين AWS والعميل، وفقاً لنموذج المسؤولية المشتركة AWS؟
*أ. إدارة التكوين (Configuration management)
ب. الضوابط المادية والبيئية
ج. مصادقة تكامل البيانات (Data integrity authentication)
د. إدارة الهوية والوصول
https://www.examtopics.com/discussions/amazon/view/126208-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: غالباً لا تستخدم شركة كل سعة Amazon EC2 الحالية لتشغيل أعباء عمل عديمة الحالة (stateless). تريد الشركة تحسين تكاليف EC2 الخاصة بها. ما هو نوع مثيل EC2 الذي سيلبي هذه المتطلبات؟
*أ. Spot Instances
ب. Dedicated Instances
ج. Reserved Instances
د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/127842-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تخزين البيانات في Amazon S3. نادراً ما تصل الشركة إلى البيانات، ويمكن إعادة إنشاء البيانات إذا لزم الأمر. تريد الشركة تخزين البيانات في فئة التخزين الأكثر فعالية من حيث التكلفة. ما هي فئة تخزين S3 التي ستلبي هذا المطلب؟
أ. S3 Standard
ب. S3 Intelligent-Tiering
ج. S3 Standard-Infrequent Access (S3 Standard-IA)
*د. S3 One Zone-Infrequent Access (S3 One Zone-IA)
https://www.examtopics.com/discussions/amazon/view/127414-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة بنقل أعباء العمل الخاصة بها إلى AWS. تريد الشركة اعتماد AWS على نطاق واسع والعمل بشكل أكثر كفاءة وأماناً. ما هي خدمة أو إطار عمل AWS الذي يجب على الشركة استخدامه للدعم التشغيلي؟
أ. AWS Support
ب. إطار عمل اعتماد السحابة AWS (AWS Cloud Adoption Framework - AWS CAF)
*ج. AWS Managed Services (AMS)
د. إطار عمل AWS Well-Architected
https://www.examtopics.com/discussions/amazon/view/126059-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة توفير وإدارة البنية التحتية AWS الخاصة بها باستخدام لغات البرمجة الشائعة Typescript و Python و Java و .NET. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. AWS CodeBuild
ب. AWS CloudFormation
ج. AWS CLI
*د. AWS Cloud Development Kit (AWS CDK)
https://www.examtopics.com/discussions/amazon/view/129598-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو نموذج تسعير Amazon EC2 الذي يوفر أكبر قدر من التوفير في التكاليف لخادم قاعدة بيانات يعمل دائماً وبالحجم المناسب (right-sized) لمشروع سيستمر لمدة عام واحد؟
أ. On-Demand Instances
ب. Convertible Reserved Instances
ج. Spot Instances
*د. Standard Reserved Instances
https://www.examtopics.com/discussions/amazon/view/129604-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة مكتبة أشرطة (tape library) فعلية لتخزين النسخ الاحتياطية للبيانات. مكتبة الأشرطة تنفد منها المساحة. تحتاج الشركة إلى توسيع سعة مكتبة الأشرطة لتشمل AWS Cloud. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. Amazon Elastic File System (Amazon EFS)
ب. Amazon Elastic Block Store (Amazon EBS)
ج. Amazon S3
*د. AWS Storage Gateway
https://www.examtopics.com/discussions/amazon/view/129660-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة AWS Free Tier للعديد من خدمات AWS لتطبيق ما. ماذا سيحدث إذا انتهت فترة استخدام Free Tier أو إذا تجاوز استخدام التطبيق حدود استخدام Free Tier؟
*أ. سيتم فوترة الشركة بأسعار الخدمة القياسية للدفع حسب الاستخدام للاستخدام الذي يتجاوز استخدام Free Tier.
ب. سيتصل AWS Support بالشركة لإعداد رسوم الخدمة القياسية.
ج. سيتم فوترة الشركة مقابل الخدمات التي استهلكتها خلال فترة Free Tier، بالإضافة إلى الرسوم الإضافية لاستهلاك الخدمة بعد فترة Free Tier.
د. سيتم تجميد حساب AWS الخاص بالشركة ويمكن إعادة تشغيله بعد إنشاء خطة سداد.
https://www.examtopics.com/discussions/amazon/view/129593-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة مراقبة أداء عبء العمل الخاص بها. تريد الشركة التأكد من أن الخدمات السحابية يتم تقديمها بمستوى يلبي احتياجات أعمالها. ما هو منظور إطار عمل اعتماد السحابة AWS (AWS CAF) الذي سيلبي هذه المتطلبات؟
أ. الأعمال (Business)
ب. الحوكمة (Governance)
ج. المنصة (Platform)
*د. العمليات (Operations)
https://www.examtopics.com/discussions/amazon/view/129605-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل تطبيقاتها إلى AWS Cloud. تخطط الشركة لتحديد وتحديد أولويات أي فرص للتحول في الأعمال وتقييم جاهزيتها لـ AWS Cloud. ما هي خدمة أو أداة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
*أ. إطار عمل اعتماد السحابة AWS (AWS Cloud Adoption Framework - AWS CAF)
ب. AWS Managed Services (AMS)
ج. إطار عمل AWS Well-Architected
د. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/129640-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى خدمة AWS توفر خط أساس واضح لما تشغله الشركة في مراكز البيانات المحلية (on-premises) الخاصة بها. تحتاج الشركة إلى التكلفة المتوقعة لتشغيل أعباء العمل المحلية في AWS Cloud. ما هي خدمة أو أداة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Compute Optimizer
ب. AWS Cost Explorer
ج. AWS Systems Manager Agent (SSM Agent)
*د. Migration Evaluator
https://www.examtopics.com/discussions/amazon/view/129613-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: استحوذت شركة على شركة أخرى. لدى الشركة الآن حسابان AWS. ما هي خدمة أو أداة AWS التي يمكن للشركة استخدامها لتوحيد الفوترة لهذين الحسابين؟
أ. AWS Systems Manager
*ب. AWS Organizations
ج. AWS License Manager
د. Cost Explorer
https://www.examtopics.com/discussions/amazon/view/129614-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إعداد أعباء العمل الخاصة بها لأداء وظائفها المقصودة والتعافي بسرعة من الفشل. أي ركيزة من ركائز إطار عمل AWS Well-Architected تتوافق مع هذه الأهداف؟
أ. كفاءة الأداء
ب. الاستدامة
*ج. الموثوقية
د. الأمان
https://www.examtopics.com/discussions/amazon/view/129615-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر خدمة AWS مُدارة تُستخدم specifically لاستخراج البيانات وتحويلها وتحميلها (ETL)؟
أ. Amazon Athena
*ب. AWS Glue
ج. Amazon S3
د. AWS Snowball Edge
https://www.examtopics.com/discussions/amazon/view/129616-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل بيتابايت من البيانات من مركز البيانات المحلي (on-premises) إلى AWS. لا ترغب الشركة في استخدام اتصال بالإنترنت لإجراء النقل. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS DataSync
ب. Amazon Connect
*ج. AWS Snowmobile
د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/129695-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تلقي تنبيهات لمراقبة تكاليف التشغيل الإجمالية للبنية التحتية السحابية العامة AWS الخاصة بها. ما هو عرض AWS الذي سيلبي هذه المتطلبات؟
أ. Amazon EventBridge
ب. Compute Savings Plans
*ج. AWS Budgets
د. Migration Evaluator
https://www.examtopics.com/discussions/amazon/view/129560-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: كيف يساعد فريق AWS Enterprise Support Concierge المستخدمين؟
أ. دعم تطوير التطبيقات
ب. تقديم إرشادات معمارية
*ج. الإجابة على استفسارات الفوترة والحساب
د. الإجابة على الأسئلة المتعلقة بحالات الدعم الفني
https://www.examtopics.com/discussions/amazon/view/129618-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل محاكاة لمدة 3 سنوات دون انقطاع. ما هو خيار شراء مثيل Amazon EC2 الذي سيلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. Spot Instances
*ب. Reserved Instances
ج. Dedicated Hosts
د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/129619-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو مورد AWS التي يمكنها تقديم خصومات على بعض تكاليف خدمة AWS مقابل الالتزام بالإنفاق؟
أ. Amazon Detective
ب. AWS Pricing Calculator
*ج. Savings Plans
د. Basic Support
https://www.examtopics.com/discussions/amazon/view/129620-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر من ركائز إطار عمل AWS Well-Architected؟ (اختر اثنين)
أ. التوفر العالي
*ب. كفاءة الأداء
*ج. تحسين التكلفة
د. الانتشار العالمي في دقائق
هـ. التطوير المستمر
https://www.examtopics.com/discussions/amazon/view/129621-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام مثيلات Amazon EC2 لتوفير موقع ويب ثابت للمستخدمين في جميع أنحاء العالم. تحتاج الشركة إلى تقليل زمن الوصول للمستخدمين. ما هو الحل الذي يلبي هذه المتطلبات؟
أ. استخدام مثيلات EC2 في مواقع حافة متعددة.
ب. استخدام مثيلات EC2 في نفس منطقة التوفر ولكن في مناطق AWS مختلفة.
*ج. استخدام Amazon CloudFront مع تكوين مثيلات EC2 كمصدر.
د. استخدام مثيلات EC2 في نفس منطقة التوفر ولكن في حسابات AWS مختلفة.
https://www.examtopics.com/discussions/amazon/view/129641-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: سيقوم فريق من الباحثين بجمع البيانات في مواقع نائية حول العالم. العديد من المواقع لا تحتوي على اتصال بالإنترنت. يحتاج الفريق إلى التقاط البيانات في الميدان، ونقلها إلى AWS Cloud لاحقاً. ما هي خدمة AWS التي ستدعم هذه المتطلبات؟
أ. AWS Outposts
ب. AWS Transfer Family
*ج. AWS Snow Family
د. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/129622-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر من الفوائد التي تحصل عليها الشركة عندما تنقل عبء عمل إنتاجي محلي (on-premises) إلى AWS؟ (اختر اثنين)
أ. تقوم AWS بتدريب موظفي الشركة على استخدام جميع خدمات AWS.
ب. تدير AWS جميع الأمور الأمنية في السحابة.
ج. تقدم AWS دعماً مجانياً من مديري الحسابات الفنيين (TAMs).
*د. تقدم AWS توفراً عالياً.
*هـ. توفر AWS وفورات الحجم.
https://www.examtopics.com/discussions/amazon/view/129642-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قررت شركة اعتماد البنية التحتية Amazon EC2 وتريد توسيع نطاق العديد من الخدمات عديمة الحالة للاستخدام قصير الأجل. ما هو نموذج تسعير EC2 الأكثر فعالية من حيث التكلفة لتلبية هذه المتطلبات؟
*أ. Spot Instances
ب. On-Demand Instances
ج. Reserved Instances
د. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/129822-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر من فوائد AWS Trusted Advisor؟ (اختر اثنين)
أ. الوصول إلى Amazon Simple Queue Service (Amazon SQS)
*ب. توصيات تحسين التكلفة
ج. تحديث ساعي لفحوصات حد الخدمة
*د. فحوصات الأمان
هـ. إدارة موافقات AWS Identity and Access Management (IAM)
https://www.examtopics.com/discussions/amazon/view/129644-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة توفير التكاليف عن طريق أرشفة البيانات التي لم يعد المستخدمون النهائيون يصلون إليها بشكل متكرر. ما هي ميزة Amazon S3 التي ستلبي هذا المطلب؟
أ. إصدار S3 (S3 Versioning)
*ب. دورة حياة S3 (S3 Lifecycle)
ج. قفل كائن S3 (S3 Object Lock)
د. جرد S3 (S3 Inventory)
https://www.examtopics.com/discussions/amazon/view/129626-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي ميزة الحوسبة السحابية التي تطبقها شركة عندما تستخدم مناطق AWS لزيادة توفر التطبيق للمستخدمين في بلدان مختلفة؟
أ. تسعير الدفع حسب الاستخدام
ب. التنبؤ بالسعة
ج. وفورات الحجم
*د. الانتشار العالمي
https://www.examtopics.com/discussions/amazon/view/129627-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة خدمة AWS لجمع ومعالجة 10 تيرابايت من البيانات محلياً ونقل البيانات إلى AWS. اتصال الشركة متقطع. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Database Migration Service (AWS DMS)
ب. AWS DataSync
ج. AWS Backup
*د. AWS Snowball Edge
https://www.examtopics.com/discussions/amazon/view/129628-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر مبدأ تصميم من إطار عمل AWS Well-Architected للتميز التشغيلي في AWS Cloud؟
أ. الانتشار عالمياً في دقائق.
*ب. إجراء تغييرات متكررة وصغيرة وقابلة للعكس.
ج. تنفيذ أساس قوي لإدارة الهوية والوصول
د. التوقف عن إنفاق الأموال على البنية التحتية للأجهزة لعمليات مركز البيانات.
https://www.examtopics.com/discussions/amazon/view/129629-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي فائدة استخدام الحوسبة بدون خادم (serverless computing) من AWS؟
أ. نشر التطبيق وإدارته غير مطلوبين.
ب. سيكون أمان التطبيق مُداراً بالكامل من قبل AWS.
ج. المراقبة وتسجيل الدخول غير ضروريين.
*د. يتم تحميل إدارة البنية التحتية على AWS.
https://www.examtopics.com/discussions/amazon/view/129646-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مطور أن يتمكن مستخدمو AWS من الوصول إلى خدمات AWS باستخدام بيانات اعتماد أمان مؤقتة. ما هي خدمة أو ميزة AWS التي يجب على المطور استخدامها لتوفير هذه البيانات؟
أ. سياسات IAM
ب. مجموعات مستخدمي IAM
*ج. AWS Security Token Service (AWS STS)
د. AWS IAM Identity Center (دخول موحد AWS)
https://www.examtopics.com/discussions/amazon/view/129562-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة عالمية استخدام خدمة أمان مُدارة للحماية من هجمات SQL injection. يجب أن توفر الخدمة أيضاً معلومات تسجيل مفصلة حول الوصول إلى تطبيقات التجارة الإلكترونية الخاصة بالشركة. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Network Firewall
ب. Amazon RDS for SQL Server
ج. Amazon GuardDuty
*د. AWS WAF
https://www.examtopics.com/discussions/amazon/view/129662-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بنقل خادمها المحلي (on-premises) إلى مثيل Amazon EC2. يجب أن يظل الخادم نشطاً في جميع الأوقات للأشهر الـ 12 القادمة. ما هو خيار تسعير EC2 الأكثر فعالية من حيث التكلفة لعبء عمل الشركة؟
أ. On-Demand
ب. Dedicated Hosts
ج. Spot Instances
*د. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/131699-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر من مسؤوليات العميل بموجب نموذج المسؤولية المشتركة AWS؟ (اختر اثنين)
أ. الحفاظ على تكوين أجهزة البنية التحتية.
ب. الحفاظ على تصحيحات وتحديثات البنية التحتية للأجهزة.
*ج. الحفاظ على تكوين أنظمة التشغيل والتطبيقات الضيفة.
*د. إدارة القرارات المتعلقة بخيارات التشفير.
هـ. صيانة أجهزة البنية التحتية.
https://www.examtopics.com/discussions/amazon/view/129664-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة التحقق مما إذا كانت المصادقة متعددة العوامل (MFA) مفعلة لجميع المستخدمين داخل حسابات AWS الخاصة بها. ما هي خدمة أو مورد AWS الذي سيلبي هذا المطلب؟
أ. تقرير التكلفة والاستخدام AWS (AWS Cost and Usage Report)
*ب. تقارير بيانات اعتماد IAM (IAM credential reports)
ج. AWS Artifact
د. تقارير Amazon CloudFront
https://www.examtopics.com/discussions/amazon/view/129962-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة خدمات وأدوات أمان AWS. تحتاج الشركة إلى خدمة للمساعدة في إدارة تنبيهات الأمان ويجب تنظيم التنبيهات في لوحة معلومات واحدة. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon GuardDuty
ب. Amazon Inspector
ج. Amazon Macie
*د. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/129647-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل أعباء العمل الخاصة بها في AWS Cloud بشكل فعال، وتقليل الأعباء الإدارية، وتحسين العمليات. أي ركيزة من ركائز إطار عمل AWS Well-Architected تمثل هذه المتطلبات؟
أ. الموثوقية
*ب. التميز التشغيلي
ج. كفاءة الأداء
د. تحسين التكلفة
https://www.examtopics.com/discussions/amazon/view/129632-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة Amazon S3 لتخزين السجلات التي قد تحتوي على معلومات التعريف الشخصية (PII). تريد الشركة حلاً يمكنه مراقبة جميع دلاء S3 بحثاً عن PII وتنبيه الموظفين على الفور بشأن الثغرات الأمنية. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon GuardDuty
ب. Amazon Detective
*ج. Amazon Macie
د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/129634-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تسمح للمستخدمين بتنزيل تقارير الأمان والامتثال حول البنية التحتية AWS عند الطلب؟
أ. Amazon GuardDuty
ب. AWS Security Hub
*ج. AWS Artifact
د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/129666-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: طلب مدقق خارجي من شركة تقديم قائمة بجميع مستخدمي IAM التابعين لها، بما في ذلك حالة بيانات اعتماد المستخدمين ومفاتيح الوصول. ما هي الطريقة الأبسط لتقديم هذه المعلومات؟
أ. إنشاء حساب مستخدم IAM للمدقق، ومنح المدقق أذونات المسؤول.
ب. التقاط لقطة شاشة لصفحة كل مستخدم في AWS Management Console، ثم تقديم لقطات الشاشة إلى المدقق.
*ج. تنزيل تقرير بيانات اعتماد IAM (IAM credential report)، ثم تقديم التقرير إلى المدقق.
د. تنزيل تقرير AWS Trusted Advisor، ثم تقديم التقرير إلى المدقق.
https://www.examtopics.com/discussions/amazon/view/129566-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهمة التي يمكن للشركة القيام بها باستخدام مجموعات الأمان (security groups) في AWS Cloud؟
*أ. السماح بالوصول إلى مثيل Amazon EC2 من خلال منفذ محدد فقط.
ب. منع الوصول إلى عناوين IP الضارة على مستوى الشبكة الفرعية.
ج. حماية البيانات المخزنة مؤقتاً بواسطة Amazon CloudFront.
د. تطبيق جدار حماية عديم الحالة (stateless) على مثيل Amazon EC2.
https://www.examtopics.com/discussions/amazon/view/129653-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لتشغيل عبء عمل مكثف حسابياً يستخدم وحدات معالجة الرسومات (GPUs). ما هو نوع مثيل Amazon EC2 الذي يجب على الشركة استخدامه؟
*أ. الحوسبة المتسارعة (Accelerated computing)
ب. المحسن للحوسبة (Compute optimized)
ج. المحسن للتخزين (Storage optimized)
د. للأغراض العامة (General purpose)
https://www.examtopics.com/discussions/amazon/view/129903-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر من ميزات قوائم ACL للشبكة (network ACLs) كما هي مستخدمة في AWS Cloud؟ (اختر اثنين)
*أ. هي عديمة الحالة (stateless).
ب. هي ذات حالة (stateful).
ج. تقوم بتقييم جميع القواعد قبل السماح بحركة المرور.
*د. تقوم بمعالجة القواعد بالترتيب، بدءاً من القاعدة ذات الرقم الأقل، عند اتخاذ قرار السماح بحركة المرور.
هـ. تعمل على مستوى المثيل.
https://www.examtopics.com/discussions/amazon/view/129654-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي القدرات الموجودة في منظور المنصة (platform perspective) لإطار عمل اعتماد السحابة AWS (AWS CAF)؟ (اختر اثنين)
أ. إدارة الأداء والسعة
*ب. هندسة البيانات (Data engineering)
*ج. التكامل والتسليم المستمران (CI/CD)
د. حماية البنية التحتية
هـ. إدارة التغيير والإصدار
https://www.examtopics.com/discussions/amazon/view/129638-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: وفقاً لنموذج المسؤولية المشتركة AWS، يكون العميل مسؤولاً عن تطبيق أحدث التحديثات والتصحيحات الأمنية لأي من التالي؟
أ. Amazon DynamoDB
*ب. مثيلات Amazon EC2
ج. مثيلات Amazon RDS
د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/129648-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي فئة تخزين Amazon S3 الأكثر فعالية من حيث التكلفة لأنماط الوصول غير المعروفة؟
أ. S3 Standard
ب. S3 Standard-Infrequent Access (S3 Standard-IA)
ج. S3 One Zone-Infrequent Access (S3 One Zone-IA)
*د. S3 Intelligent-Tiering
https://www.examtopics.com/discussions/amazon/view/129649-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الخيارات التي تمثل قدرات منظور الأمان (security perspective) في إطار عمل اعتماد السحابة AWS (AWS CAF)؟ (اختر اثنين)
أ. المراقبة (Observability)
ب. إدارة الحوادث والمشكلات (Incident and problem management)
*ج. الاستجابة للحوادث (Incident response)
*د. حماية البنية التحتية (Infrastructure protection)
هـ. التوفر والاستمرارية (Availability and continuity)
https://www.examtopics.com/discussions/amazon/view/129655-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة سياسة IAM مُدارة لا تمنح الأذونات اللازمة للمستخدمين لإنجاز المهام المطلوبة. كيف يمكن حل هذه المشكلة؟
أ. تمكين AWS Shield Advanced.
*ب. إنشاء سياسة IAM مخصصة.
ج. استخدام قاعدة مُدارة من طرف ثالث لجدار حماية تطبيقات الويب (WAF) من AWS Marketplace.
د. استخدام AWS Key Management Service (AWS KMS) لإنشاء مفتاح مُدار من قبل العميل.
https://www.examtopics.com/discussions/amazon/view/129650-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: من المسؤول عن إدارة وصول مستخدم IAM والمفاتيح السرية وفقاً لنموذج المسؤولية المشتركة AWS؟
أ. وصول IAM والمفاتيح السرية ثابتة، لذلك لا داعي لتدويرها.
*ب. العميل مسؤول عن تدوير المفاتيح.
ج. سيقوم AWS بتدوير المفاتيح كلما دعت الحاجة.
د. سيقوم فريق AWS Support بتدوير المفاتيح عندما يطلب العميل ذلك.
https://www.examtopics.com/discussions/amazon/view/129651-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تشغيل جدار حماية مثبت مسبقاً من طرف ثالث على مثيل Amazon EC2. ما هي خدمة أو ميزة AWS التي يمكنها توفير هذا الحل؟
أ. قوائم ACL للشبكة (Network ACLs)
ب. مجموعات الأمان (Security groups)
*ج. AWS Marketplace
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/129904-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي فائدة AWS Cloud التي تمنح الشركة القدرة على نشر موارد السحابة بسرعة للوصول إلى البنى التحتية للحوسبة والتخزين وقواعد البيانات في غضون دقائق؟
أ. المرونة (Elasticity)
ب. توفير التكاليف
*ج. المرونة (Agility)
د. الموثوقية
https://www.examtopics.com/discussions/amazon/view/129969-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر مسؤولية كاملة لـ AWS، وفقاً لنموذج المسؤولية المشتركة AWS؟
أ. التوعية والتدريب الأمني
ب. تطوير سياسة كلمات مرور IAM
ج. تصحيح (patching) نظام التشغيل الضيف
*د. الضوابط المادية والبيئية
https://www.examtopics.com/discussions/amazon/view/129905-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر خاصية للمستخدم الجذر لحساب AWS؟
أ. المستخدم الجذر هو المستخدم الوحيد الذي يمكن تكوينه بالمصادقة متعددة العوامل (MFA).
ب. المستخدم الجذر هو المستخدم الوحيد الذي يمكنه الوصول إلى AWS Management Console.
*ج. المستخدم الجذر هو هوية تسجيل الدخول الأولى المتاحة عند إنشاء حساب AWS.
د. المستخدم الجذر لديه كلمة مرور لا يمكن تغييرها.
https://www.examtopics.com/discussions/amazon/view/129740-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: مثيل Amazon EC2 كان مستخدماً سابقاً للتطوير أصبح غير قابل للوصول ولم يعد يظهر في AWS Management Console. ما هي خدمة AWS التي يجب استخدامها لتحديد الإجراء الذي جعل مثيل EC2 هذا غير قابل للوصول؟
أ. Amazon CloudWatch Logs
ب. AWS Security Hub
ج. Amazon Inspector
*د. AWS CloudTraiI
https://www.examtopics.com/discussions/amazon/view/130557-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مطورو التطبيقات في شركة إلى توفير وإدارة خدمات AWS بسرعة باستخدام البرامج النصية (scripts). ما هو عرض AWS الذي يجب على المطورين استخدامه لتلبية هذه المتطلبات؟
*أ. AWS CLI
ب. AWS CodeBuild
ج. إطار عمل اعتماد السحابة AWS (AWS Cloud Adoption Framework - AWS CAF)
د. AWS Systems Manager Session Manager
https://www.examtopics.com/discussions/amazon/view/129742-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل البيانات غير المهيكلة (unstructured) إلى AWS. يجب نقل البيانات بشكل آمن مع تشفير أثناء النقل (inflight encryption) والتحقق من صحة البيانات من طرف إلى طرف. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Application Migration Service
ب. Amazon Elastic File System (Amazon EFS)
*ج. AWS DataSync
د. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/129743-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد فريق تطوير نشر بيئات اختبار متعددة لتطبيق ما بطريقة سريعة وقابلة للتكرار. ما هي خدمة AWS التي يجب على الفريق استخدامها؟
أ. Amazon EC2
*ب. AWS CloudFormation
ج. Amazon QuickSight
د. Amazon Elastic Container Service (Amazon ECS)
https://www.examtopics.com/discussions/amazon/view/129748-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تنفيذ pipeline للتكامل المستمر/التسليم المستمر (CI/CD) بسرعة. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. AWS Config
ب. Amazon Cognito
ج. AWS DataSync
*د. AWS CodeStar
https://www.examtopics.com/discussions/amazon/view/129754-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو نموذج نشر AWS Cloud الذي يستخدم AWS Outposts كجزء من البنية التحتية لنشر التطبيق؟
أ. محلي (On-premises)
ب. بدون خادم (Serverless)
ج. مولود في السحابة (Cloud-native)
*د. هجين (Hybrid)
https://www.examtopics.com/discussions/amazon/view/129763-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر خدمة قاعدة بيانات رسوم بيانية (graph database) مُدارة بالكامل على AWS؟
أ. Amazon Aurora
ب. Amazon FSx
ج. Amazon DynamoDB
*د. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/129765-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكن للمسؤول استخدامها لتوفير بيئات سطح المكتب للعديد من الموظفين؟
أ. AWS Organizations
ب. AWS Fargate
ج. AWS WAF
*د. AWS WorkSpaces
https://www.examtopics.com/discussions/amazon/view/129767-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي تتيح للمستخدمين إمكانية التقاط معلومات حول حركة مرور الشبكة في VPC؟
*أ. سجلات تدفق VPC (VPC Flow Logs)
ب. Amazon Inspector
ج. جداول توجيه VPC (VPC route tables)
د. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/129769-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي نوع من أنواع تخزين AWS هو مؤقت (ephemeral) ويتم حذفه عند إيقاف أو إنهاء مثيل Amazon EC2؟
أ. Amazon Elastic Block Store (Amazon EBS)
*ب. مخزن مثيل Amazon EC2 (Amazon EC2 instance store)
ج. Amazon Elastic File System (Amazon EFS)
د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/129772-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة توفير الوصول إلى مشاركات ملفات Windows في AWS من أعباء العمل المحلية (on-premises) الخاصة بها. لا ترغب الشركة في توفير أي بنية تحتية أو تطبيقات إضافية في مركز البيانات الخاص بها. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
*أ. Amazon FSx File Gateway
ب. AWS DataSync
ج. Amazon S3
د. AWS Snow Family
https://www.examtopics.com/discussions/amazon/view/129776-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تخزيناً دائماً للمحتوى الثابت وبنية تحتية لتخزين البيانات قابلة للتوسع بشكل لا نهائي بأقل تكلفة. ما هي خدمة AWS التي يجب على الشركة اختيارها؟
أ. Amazon Elastic Block Store (Amazon EBS)
*ب. Amazon S3
ج. AWS Storage Gateway
د. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/129777-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تجارة إلكترونية استخدام Amazon EC2 Auto Scaling لإضافة وإزالة مثيلات EC2 بناءً على استخدام وحدة المعالجة المركزية. ما هي خدمة أو ميزة AWS التي يمكنها بدء إجراء Amazon EC2 Auto Scaling لتحقيق هذا الهدف؟
أ. Amazon Simple Queue Service (Amazon SQS)
ب. Amazon Simple Notification Service (Amazon SNS)
ج. AWS Systems Manager
*د. تنبيه Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/129764-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تحويل قوتها العاملة من خلال جذب وتطوير قوة عاملة عالية الأداء وملمّة رقمياً. تريد الشركة جذب قوة عاملة متنوعة وشاملة مع مزيج مناسب من المهارات التقنية وغير التقنية. ما هو منظور إطار عمل اعتماد السحابة AWS (AWS CAF) الذي سيلبي هذه المتطلبات؟
أ. الأعمال (Business)
*ب. الأشخاص (People)
ج. المنصة (Platform)
د. العمليات (Operations)
https://www.examtopics.com/discussions/amazon/view/130576-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل قواعد البيانات المحلية (on-premises) إلى خدمات قواعد البيانات السحابية المُدارة باستخدام عملية نقل مبسطة. ما هي خدمة أو أداة AWS التي يمكن أن تساعد الشركة في تلبية هذا المطلب؟
أ. AWS Storage Gateway
ب. AWS Application Migration Service
ج. AWS DataSync
*د. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/130577-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى خادم ملفات مُدار بالكامل يدعم أصلاً أعباء عمل Microsoft وأنظمة الملفات. يجب أن يدعم خادم الملفات أيضاً بروتوكول SMB. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon Elastic File System (Amazon EFS)
ب. Amazon FSx for Lustre
*ج. Amazon FSx for Windows File Server
د. Amazon Elastic Block Store (Amazon EBS)
https://www.examtopics.com/discussions/amazon/view/130578-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: كانت شركة تخزن تقارير شهرية في دلو Amazon S3. تقوم الشركة بتصدير بيانات التقرير إلى ملفات قيم مفصولة بفواصل (.csv). يريد مطور كتابة استعلام بسيط يمكنه قراءة كل هذه الملفات وإنشاء تقرير ملخص. ما هي خدمة أو ميزة AWS التي يجب على المطور استخدامها لتلبية هذه المتطلبات بأقل قدر من الأعباء التشغيلية؟
أ. Amazon S3 Select
*ب. Amazon Athena
ج. Amazon Redshift
د. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/129766-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي ميزة AWS التي توفر منصة بدون تكلفة لمستخدمي AWS للانضمام إلى مجموعات المجتمع، وطرح الأسئلة، والعثور على إجابات، وقراءة المقالات التي ينشئها المجتمع حول أفضل الممارسات؟
أ. مركز المعرفة AWS (AWS Knowledge Center)
*ب. AWS re:Post
ج. AWS IQ
د. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/129768-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى البحث عن نص في المستندات المخزنة في Amazon S3. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
*أ. Amazon Kendra
ب. Amazon Rekognition
ج. Amazon Polly
د. Amazon Lex
https://www.examtopics.com/discussions/amazon/view/129770-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمات AWS التي تستخدم مواقع الحافة العالمية (global edge locations)؟ (اختر اثنين)
أ. AWS Fargate
*ب. Amazon CloudFront
*ج. AWS Global Accelerator
د. AWS Wavelength
هـ. Amazon VPC
https://www.examtopics.com/discussions/amazon/view/129771-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مستخدم إلى قاعدة بيانات علائقية ولكن لا يملك الموارد اللازمة لإدارة الأجهزة والمرونة (resiliency) والنسخ المتماثل. ما هو خيار خدمة AWS الذي يلبي احتياجات المستخدم؟
أ. تشغيل MySQL على Amazon Elastic Container Service (Amazon ECS).
ب. تشغيل MySQL على Amazon EC2.
*ج. اختيار Amazon RDS for MySQL.
د. اختيار Amazon ElastiCache for Redis.
https://www.examtopics.com/discussions/amazon/view/130584-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى نشر التطبيقات في AWS Cloud في أسرع وقت ممكن. تحتاج الشركة أيضاً إلى تقليل التعقيد المرتبط بإدارة موارد AWS. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Config
*ب. AWS Elastic Beanstalk
ج. Amazon EC2
د. Amazon Personalize
https://www.examtopics.com/discussions/amazon/view/129773-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الآلية التي تسمح للمطورين بالوصول إلى خدمات AWS من كود التطبيق؟
*أ. AWS Software Development Kit
ب. AWS Management Console
ج. AWS CodePipeline
د. AWS Config
https://www.examtopics.com/discussions/amazon/view/130586-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بالنقل إلى AWS Cloud. تريد الشركة فهم وتحديد التكوينات الأمنية الخاطئة المحتملة أو السلوكيات غير المتوقعة. تريد الشركة تحديد أولويات أي ضوابط وقائية قد تحتاجها. ما هي قدرة منظور الأمان (security perspective) في إطار عمل اعتماد السحابة AWS (AWS CAF) التي ستلبي هذه المتطلبات؟
أ. إدارة الهوية والوصول
*ب. كشف التهديدات (Threat detection)
ج. هندسة المنصة
د. إدارة التوفر والاستمرارية
https://www.examtopics.com/discussions/amazon/view/129892-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إنشاء اتصال شبكة خاص بين مركز البيانات المحلي (on-premises) وشبكة AWS Cloud. لا يمكن للشبكة استخدام الإنترنت العام. ما هي خدمة أو ميزة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Transit Gateway
ب. AWS VPN
ج. Amazon CloudFront
*د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/129805-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمات أو ميزات AWS التي تتيح للمستخدمين إنشاء اتصال شبكة بين شبكتي VPC؟ (اختر اثنين)
أ. نقاط نهاية VPC (VPC endpoints)
ب. Amazon Route 53
*ج. VPC peering
د. AWS Direct Connect
*هـ. AWS Transit Gateway
https://www.examtopics.com/discussions/amazon/view/129915-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تحول النص إلى أصوات شبيهة بالبشر؟
أ. Amazon Transcribe
ب. Amazon Rekognition
*ج. Amazon Polly
د. Amazon Textract
https://www.examtopics.com/discussions/amazon/view/129806-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام حزم تطبيقات (application stacks) لتشغيل عبء عمل في AWS Cloud. تريد الشركة استخدام مثيلات مهيأة مسبقاً. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
*أ. Amazon Lightsail
ب. Amazon Athena
ج. AWS Outposts
د. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/129995-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمات AWS التي تدعمها Savings Plans؟ (اختر اثنين)
*أ. Amazon EC2
ب. Amazon RDS
*ج. Amazon SageMaker
د. Amazon Redshift
هـ. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/129779-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو أداة AWS التي يمكنها تقديم توصيات لتحسين الحجم (rightsizing) لموارد Amazon EC2 بدون تكلفة إضافية؟
أ. AWS Well-Architected Tool
ب. Amazon CloudWatch
*ج. AWS Cost Explorer
د. Amazon S3 analytics
https://www.examtopics.com/discussions/amazon/view/129809-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بتشغيل مستودع بيانات (data warehouse) بحجم بيتابايت لتحليل بياناتها. تريد الشركة حلاً لا يتطلب إدارة يدوية للأجهزة والبرامج. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon DocumentDB (مع التوافق مع MongoDB)
*ب. Amazon Redshift
ج. Amazon Neptune
د. Amazon ElastiCache
https://www.examtopics.com/discussions/amazon/view/129922-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد مكتبة أتمتة تصنيف الكتب الإلكترونية بناءً على محتويات الكتب. ما هي خدمة AWS التي يجب على المكتبة استخدامها لتلبية هذا المطلب؟
أ. Amazon Redshift
ب. Amazon CloudSearch
*ج. Amazon Comprehend
د. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/129780-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهمة التي تقع على عاتق AWS، وفقاً لنموذج المسؤولية المشتركة AWS؟
أ. تشفير بيانات التطبيق
ب. مصادقة مستخدمي التطبيق
*ج. حماية البنية التحتية للشبكة المادية
د. تكوين جدران الحماية
https://www.examtopics.com/discussions/amazon/view/129810-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الخيارات التي تمثل توصيات مرحلة رحلة التحول السحابي في إطار عمل اعتماد السحابة AWS (AWS CAF)؟ (اختر اثنين)
*أ. مرحلة التصور (Envision phase)
*ب. مرحلة المواءمة (Align phase)
ج. مرحلة التقييم (Assess phase)
د. مرحلة التعبئة (Mobilize phase)
هـ. مرحلة النقل والتحديث (Migrate and modernize phase)
https://www.examtopics.com/discussions/amazon/view/129811-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إنشاء قائمة بمستخدمي IAM. تريد الشركة أيضاً عرض حالة بيانات الاعتماد المختلفة المرتبطة بالمستخدمين، مثل كلمة المرور ومفاتيح الوصول وأجهزة المصادقة متعددة العوامل (MFA). ما هي خدمة أو ميزة AWS التي ستلبي هذه المتطلبات؟
*أ. تقرير بيانات اعتماد IAM (IAM credential report)
ب. AWS IAM Identity Center (دخول موحد AWS)
ج. AWS Identity and Access Management Access Analyzer
د. تقرير التكلفة والاستخدام AWS (AWS Cost and Usage Report)
https://www.examtopics.com/discussions/amazon/view/129898-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بتصميم أعباء عمل AWS الخاصة بها بحيث يمكن تحديث المكونات بانتظام ويمكن إجراء التغييرات بزيادات صغيرة وقابلة للعكس. أي ركيزة من ركائز إطار عمل AWS Well-Architected يدعمها هذا التصميم؟
أ. الأمان
ب. كفاءة الأداء
*ج. التميز التشغيلي
د. الموثوقية
https://www.examtopics.com/discussions/amazon/view/129812-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تتبع العلامات (tags) والدلاء والبادئات (prefixes) لكائنات Amazon S3 الخاصة بها. ما هي ميزة S3 التي ستلبي هذا المطلب؟
*أ. تقرير جرد S3 (S3 Inventory report)
ب. دورة حياة S3 (S3 Lifecycle)
ج. إصدار S3 (S3 Versioning)
د. قوائم ACL لـ S3 (S3 ACLs)
https://www.examtopics.com/discussions/amazon/view/129899-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة السماح للمستخدمين بالمصادقة والترخيص لحسابات AWS متعددة باستخدام مجموعة واحدة من بيانات الاعتماد. ما هي خدمة أو مورد AWS الذي سيلبي هذا المطلب؟
أ. AWS Organizations
ب. مستخدم IAM
*ج. AWS IAM Identity Center (دخول موحد AWS)
د. AWS Control Tower
https://www.examtopics.com/discussions/amazon/view/130740-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أنشأت شركة مثيل Amazon EC2. تريد الشركة التحكم في حركة مرور الشبكة الواردة والصادرة على مستوى المثيل. ما هو مورد أو خدمة AWS التي ستلبي هذا المطلب؟
أ. AWS Shield
*ب. مجموعات الأمان (Security groups)
ج. Network Access Analyzer
د. نقاط نهاية VPC (VPC endpoints)
https://www.examtopics.com/discussions/amazon/view/129816-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام AWS Cloud لنشر تطبيق عالمياً. ما هو نموذج النشر المعماري الذي يجب على الشركة استخدامه لتلبية هذا المطلب؟
*أ. متعدد المناطق (Multi-Region)
ب. منطقة واحدة (Single-Region)
ج. متعدد مناطق التوفر (Multi-AZ)
د. منطقة توفر واحدة (Single-AZ)
https://www.examtopics.com/discussions/amazon/view/130199-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة أن يتفاعل تطبيق ويب مع خدمات AWS متنوعة. ما هي خدمة أو مورد AWS الذي سيلبي هذا المطلب؟
أ. AWS CloudShell
ب. AWS Marketplace
*ج. AWS Management Console
د. AWS CLI
https://www.examtopics.com/discussions/amazon/view/129781-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بنقل تطبيقاتها من المحلية (on-premises) إلى AWS Cloud. تريد الشركة التأكد من أن التطبيقات لا تُمنح سوى الحد الأدنى من الأذونات اللازمة لتنفيذ جميع العمليات. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
*أ. AWS Identity and Access Management (IAM)
ب. Amazon CloudWatch
ج. Amazon Macie
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/129782-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الخيارات التي تمثل قدرات منظور الحوكمة (governance perspective) في إطار عمل اعتماد السحابة AWS (AWS CAF)؟ (اختر اثنين)
أ. إدارة الهوية والوصول
*ب. الإدارة المالية للسحابة (Cloud financial management)
*ج. إدارة محفظة التطبيقات (Application portfolio management)
د. إدارة الابتكار
هـ. إدارة المنتج
https://www.examtopics.com/discussions/amazon/view/129821-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي توفر موقعاً واحداً لتتبع تقدم عمليات نقل التطبيقات؟
أ. AWS Application Discovery Service
ب. AWS Application Migration Service
ج. AWS Service Catalog
*د. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/130754-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أطلقت شركة مثيل Amazon EC2 باستخدام أحدث صورة آلة Amazon Linux 2 (AMI). ما هي الإجراءات التي يمكن لمسؤول النظام اتخاذها للاتصال بمثيل EC2؟ (اختر اثنين)
*أ. استخدام Amazon EC2 Instance Connect.
ب. استخدام اتصال بروتوكول سطح المكتب البعيد (RDP).
ج. استخدام AWS Batch.
*د. استخدام AWS Systems Manager Session Manager.
هـ. استخدام Amazon Connect.
https://www.examtopics.com/discussions/amazon/view/129783-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مفهوم معماري يصف القدرة على نشر الموارد عند الطلب وتحرير الموارد عندما لا تكون هناك حاجة إليها؟
أ. التوفر العالي
ب. البنية المفصولة
ج. المرونة (Resilience)
*د. المرونة (Elasticity)
https://www.examtopics.com/discussions/amazon/view/129577-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهمة التي تتطلب من المستخدم تسجيل الدخول كمستخدم جذر لحساب AWS؟
أ. حذف مستخدمي IAM
*ب. حذف حساب AWS
ج. إنشاء مؤسسة في AWS Organizations
د. حذف مثيلات Amazon EC2
https://www.examtopics.com/discussions/amazon/view/129576-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ماذا تقدم فئة تخزين Amazon S3 Intelligent-Tiering؟
أ. مرونة في الدفع عن طريق حجز سعة التخزين
ب. الاحتفاظ بالبيانات على المدى الطويل عن طريق نسخ البيانات إلى حجم Amazon Elastic Block Store (Amazon EBS) مشفر
*ج. توفير تلقائي في التكاليف عن طريق نقل الكائنات بين المستويات بناءً على تغييرات نمط الوصول
د. تخزين آمن ودائم وأقل تكلفة لأرشفة البيانات
https://www.examtopics.com/discussions/amazon/view/129784-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى مثيلات Amazon EC2 لعبء عمل يمكنه تحمل الانقطاعات. ما هو خيار شراء مثيل EC2 الذي يلبي هذا المطلب بأكبر خصم مقارنة بأسعار On-Demand؟
*أ. Spot Instances
ب. Convertible Reserved Instances
ج. Standard Reserved Instances
د. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/129575-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة للانتقال إلى AWS Cloud. تريد الشركة تحديد نتائج أعمال قابلة للقياس تشرح قيمة قرار الشركة بالانتقال. ما هي مرحلة رحلة التحول السحابي التي تتضمن هذه الأنشطة؟
*أ. التصور (Envision)
ب. المواءمة (Align)
ج. التوسع (Scale)
د. الإطلاق (Launch)
https://www.examtopics.com/discussions/amazon/view/129658-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو مكون AWS الذي يسمح بحركة المرور الواردة من الإنترنت بالوصول إلى VPC؟
*أ. بوابة إنترنت (Internet gateway)
ب. بوابة NAT (NAT gateway)
ج. AWS WAF
د. VPC peering
https://www.examtopics.com/discussions/amazon/view/129574-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكن للشركات استخدامها لإنشاء بنية تحتية من الكود؟
أ. Amazon Elastic Kubernetes Service (Amazon EKS)
ب. AWS Outposts
ج. AWS CodePipeline
*د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/129572-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو المبدأ التوجيهي الذي يعتبر مبدأ تصميم جيد لبناء تطبيقات سحابية؟
أ. إبقاء البيانات الثابتة أقرب إلى موارد الحوسبة.
ب. توفير موارد لسعة الذروة.
*ج. التصميم للتعافي التلقائي من الفشل.
د. استخدام مكونات مقترنة بإحكام.
https://www.examtopics.com/discussions/amazon/view/129883-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى نقل 75 بيتابايت من البيانات من مراكز البيانات المحلية (on-premises) إلى AWS. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. AWS Snowball Edge Storage Optimized
*ب. AWS Snowmobile
ج. AWS Direct Connect
د. AWS Storage Gateway
https://www.examtopics.com/discussions/amazon/view/131193-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر من ركائز إطار عمل AWS Well-Architected؟ (اختر اثنين)
أ. قابلية توسع الموارد
*ب. كفاءة الأداء
ج. مرونة النظام
د. التطوير الرشيق (Agile development)
*هـ. التميز التشغيلي
https://www.examtopics.com/discussions/amazon/view/129657-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى ربط مركز البيانات المحلي (on-premises) بـ AWS Cloud. تحتاج الشركة إلى اتصال مخصص ومنخفض زمن الوصول مع أداء شبكة ثابت. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Global Accelerator
ب. Amazon CloudFront
*ج. AWS Direct Connect
د. AWS Managed VPN
https://www.examtopics.com/discussions/amazon/view/129656-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي مبادئ التصميم التي يجب على الشركة تطبيقها على أعباء عمل AWS Cloud لتعظيم الاستدامة وتقليل التأثير البيئي؟ (اختر اثنين)
*أ. تعظيم استخدام مثيلات Amazon EC2.
ب. تقليل استخدام مثيلات Amazon EC2.
ج. تقليل استخدام الخدمات المُدارة.
د. إجبار المستخدمين على إعادة تثبيت التطبيقات بشكل متكرر.
*هـ. تقليل حاجة المستخدمين إلى إعادة تثبيت التطبيقات.
https://www.examtopics.com/discussions/amazon/view/129884-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: بأي الطرق تقدم AWS Cloud تكلفة إجمالية أقل للملكية (TCO) لموارد الحوسبة مقارنة بمراكز البيانات المحلية؟ (اختر اثنين)
*أ. تستبدل AWS النفقات الرأسمالية المقدمة بتكاليف الدفع حسب الاستخدام.
ب. تم تصميم AWS لتحقيق التوفر العالي، مما يلغي وقت توقف المستخدم.
ج. تلغي AWS الحاجة إلى موظفي تكنولوجيا المعلومات المحليين.
*د. تستخدم AWS وفورات الحجم لخفض الأسعار باستمرار.
هـ. تقدم AWS نموذج تسعير واحد لمثيلات Amazon EC2.
https://www.examtopics.com/discussions/amazon/view/129571-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نشر بعض مواردها في AWS Cloud. للامتثال للمتطلبات التنظيمية، يجب أن تبقى البيانات محلية وعلى premises. يجب أن يكون هناك زمن وصول منخفض بين AWS وموارد الشركة. ما هي خدمة أو ميزة AWS التي يمكن استخدامها لتلبية هذه المتطلبات؟
أ. AWS Local Zones
ب. مناطق التوفر (Availability Zones)
*ج. AWS Outposts
د. AWS Wavelength Zones
https://www.examtopics.com/discussions/amazon/view/129570-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من خدمات AWS التالية تعتبر بدون خادم (serverless)؟ (اختر اثنين)
أ. AWS Outposts
ب. Amazon EC2
ج. Amazon Elastic Kubernetes Service (Amazon EKS)
*د. AWS Fargate
*هـ. AWS Lambda
https://www.examtopics.com/discussions/amazon/view/130755-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: عندما يريد مستخدم استخدام تراخيص البرامج الحالية لكل مقبس (per-socket) أو لكل نواة (per-core) أو لكل آلة افتراضية (per-virtual machine) لخادم Microsoft Windows يعمل على AWS، ما هو نوع مثيل Amazon EC2 المطلوب؟
أ. Spot Instances
ب. Dedicated Instances
*ج. Dedicated Hosts
د. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/130756-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مهندس حلول إلى الحفاظ على أسطول من مثيلات Amazon EC2 بحيث يتم استبدال أي مثيلات معطلة بأخرى جديدة. ما هي خدمة AWS التي يجب على مهندس الحلول استخدامها؟
أ. Amazon Elastic Container Service (Amazon ECS)
ب. Amazon GuardDuty
ج. AWS Shield
*د. AWS Auto Scaling
https://www.examtopics.com/discussions/amazon/view/129786-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي توفر للتطبيقات المحلية (on-premises) وصولاً منخفض زمن الوصول إلى البيانات المخزنة في AWS Cloud؟
أ. Amazon CloudFront
*ب. AWS Storage Gateway
ج. AWS Backup
د. AWS DataSync
https://www.examtopics.com/discussions/amazon/view/129787-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ماذا يوفر Amazon CloudFront؟
أ. توسعاً تلقائياً لجميع الموارد لتشغيل تطبيق من واجهة واحدة موحدة
*ب. تسليمًا آمنًا للبيانات ومقاطع الفيديو والتطبيقات وواجهات برمجة التطبيقات للمستخدمين عالمياً بزمن وصول منخفض
ج. القدرة على إدارة حركة المرور مباشرة على مستوى العالم من خلال مجموعة متنوعة من أنواع التوجيه، بما في ذلك التوجيه القائم على زمن الوصول، وDNS الجغرافي، والتقارب الجغرافي، والوزن المتناوب
د. التوزيع التلقائي لحركة مرور التطبيقات الواردة عبر أهداف متعددة، مثل مثيلات Amazon EC2 والحاويات وعناوين IP ووظائف AWS Lambda
https://www.examtopics.com/discussions/amazon/view/129888-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تدعم نشر وإدارة التطبيقات في AWS Cloud؟
أ. Amazon CodeGuru
ب. AWS Fargate
ج. AWS CodeCommit
*د. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/129889-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة دمج معالجة اللغة الطبيعية (NLP) في لوحات معلومات ذكاء الأعمال (BI). تريد الشركة طرح الأسئلة وتلقي الإجابات مع تصورات ذات صلة. ما هي خدمة أو أداة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon Macie
ب. Amazon Rekognition
*ج. Amazon QuickSight Q
د. Amazon Lex
https://www.examtopics.com/discussions/amazon/view/130757-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي ميزة أو فئة تخزين Amazon S3 التي تستخدم شبكة AWS الأساسية ومواقع الحافة لتقليل زمن الوصول من المستخدم النهائي إلى Amazon S3؟
أ. النسخ المتماثل عبر مناطق S3 (S3 Cross-Region Replication)
*ب. تسريع نقل S3 (S3 Transfer Acceleration)
ج. إشعارات أحداث S3 (S3 Event Notifications)
د. S3 Standard-Infrequent Access (S3 Standard-IA)
https://www.examtopics.com/discussions/amazon/view/129890-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي توفر القدرة على استضافة قاعدة بيانات NoSQL في AWS Cloud؟
أ. Amazon Aurora
*ب. Amazon DynamoDB
ج. Amazon RDS
د. Amazon Redshift
https://www.examtopics.com/discussions/amazon/view/131206-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تعتبر قاعدة بيانات علائقية متوافقة مع MySQL و PostgreSQL؟
أ. Amazon Redshift
ب. Amazon DynamoDB
*ج. Amazon Aurora
د. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/129788-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو مبدأ التصميم المعماري الذي يصف الحاجة إلى عزل حالات الفشل بين المكونات المعتمدة في AWS Cloud؟
أ. استخدام تصميم متجانس.
ب. التصميم للأتمتة.
ج. التصميم لنقاط الفشل الفردية.
*د. اقتران المكونات بشكل ضعيف (Loosely couple components).
https://www.examtopics.com/discussions/amazon/view/129789-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي فائدة الحوسبة السحابية التي تمنح الشركة القدرة على نشر التطبيقات للمستخدمين في جميع أنحاء العالم من خلال شبكة من مناطق AWS ومناطق التوفر ومواقع الحافة؟
أ. اقتصاد الحجم
*ب. الانتشار العالمي
ج. المرونة (Agility)
د. التوفر العالي
https://www.examtopics.com/discussions/amazon/view/129790-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تسهل مراقبة واستكشاف أخطاء سجلات التطبيقات وموارد السحابة وإصلاحها؟
أ. Amazon EC2
ب. AWS Identity and Access Management (IAM)
*ج. Amazon CloudWatch
د. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/129791-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تستخدم AWS Compute Optimizer لتقديم توصيات بحجم (sizing) بناءً على مقاييس عبء العمل؟
*أ. Amazon EC2
ب. Amazon RDS
ج. Amazon Lightsail
د. AWS Step Functions
https://www.examtopics.com/discussions/amazon/view/129792-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي ستساعد الشركة في تخطيط النقل إلى AWS من خلال جمع بيانات التكوين والاستخدام والسلوك لمراكز البيانات المحلية (on-premises)؟
أ. AWS Resource Groups
*ب. AWS Application Discovery Service
ج. AWS Service Catalog
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/129793-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تستخدم مزيجاً من الناشرين (publishers) والمشتركين (subscribers)؟
أ. AWS Lambda
*ب. Amazon Simple Notification Service (Amazon SNS)
ج. Amazon CloudWatch
د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/129794-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: شركة في المراحل الأولى من التخطيط لنقل إلى AWS. تريد الشركة الحصول على التكلفة الإجمالية للملكية الشهرية المتوقعة ل AWS لمثيلات Amazon EC2 المستقبلية والتخزين المرتبط بها. ما هي خدمة أو أداة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
*أ. AWS Pricing Calculator
ب. AWS Compute Optimizer
ج. AWS Trusted Advisor
د. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/129795-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو أداة AWS التي ستراقب موارد وتطبيقات AWS في الوقت الفعلي؟
أ. AWS Trusted Advisor
*ب. Amazon CloudWatch
ج. AWS CloudTrail
د. AWS Cost Explorer
https://www.examtopics.com/discussions/amazon/view/137916-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي قدرة من قدرات إطار عمل اعتماد السحابة AWS (AWS CAF) تنتمي إلى منظور الأعمال (business perspective)؟
أ. إدارة البرامج والمشاريع
*ب. علم البيانات (Data science)
ج. المراقبة (Observability)
د. إدارة التغيير والإصدار
https://www.examtopics.com/discussions/amazon/view/137917-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو مورد AWS الذي يمكن أن يساعد الشركة في تقليل تكاليفها مقابل الالتزام بالاستخدام عند استخدام مثيلات Amazon EC2؟
*أ. Compute Savings Plans
ب. مجموعة Auto Scaling (Auto Scaling group)
ج. On-Demand Instance
د. مخزن مثيل EC2 (EC2 instance store)
https://www.examtopics.com/discussions/amazon/view/137918-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي منظور في إطار عمل اعتماد السحابة AWS (AWS CAF) يتضمن قدرة على هندسة البيانات والتحليلات جيدة التصميم؟
أ. الأمان
ب. الحوكمة
ج. العمليات
*د. المنصة
https://www.examtopics.com/discussions/amazon/view/137919-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الخيارات التي تمثل قدرات منظور الأشخاص (people perspective) في إطار عمل اعتماد السحابة AWS (AWS CAF)؟ (اختر اثنين)
*أ. المواءمة التنظيمية (Organizational alignment)
ب. إدارة المحفظة
*ج. تصميم المؤسسة (Organization design)
د. إدارة المخاطر
هـ. تطوير التطبيقات الحديثة
https://www.examtopics.com/discussions/amazon/view/137920-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى جسر بين التكنولوجيا والأعمال للمساعدة في التطور إلى ثقافة النمو والتعلم المستمرين. أي منظور في إطار عمل اعتماد السحابة AWS (AWS CAF) يعمل كجسر؟
*أ. الأشخاص
ب. الحوكمة
ج. العمليات
د. الأمان
https://www.examtopics.com/discussions/amazon/view/137921-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار يعتبر مسؤولية AWS بموجب نموذج المسؤولية المشتركة AWS؟
أ. أمان بيانات التطبيق
ب. إدارة التصحيحات للتطبيقات التي تعمل على مثيلات Amazon EC2
*ج. إدارة تصحيحات (patch management) البنية التحتية الأساسية للخدمات المُدارة
د. إدارة هوية التطبيق والوصول إليه
https://www.examtopics.com/discussions/amazon/view/137922-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو مورد AWS الذي يمكنه تحديد وتقديم تقارير حول موارد IAM في حساب AWS واحد تتم مشاركتها مع حساب AWS آخر؟
أ. تقرير بيانات اعتماد IAM (IAM credential report)
ب. AWS IAM Identity Center (دخول موحد AWS)
*ج. AWS Identity and Access Management Access Analyzer
د. مجموعة مستخدمي Amazon Cognito
https://www.examtopics.com/discussions/amazon/view/139884-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي ركيزة من ركائز إطار عمل AWS Well-Architected تركز على التخصيص المنظم والمبسّط لموارد الحوسبة؟
أ. الموثوقية
ب. التميز التشغيلي
*ج. كفاءة الأداء
د. الاستدامة
https://www.examtopics.com/discussions/amazon/view/138027-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي قدرات إطار عمل اعتماد السحابة AWS (AWS CAF) التي تنتمي إلى منظور الحوكمة (governance perspective)؟ (اختر اثنين)
*أ. إدارة البرامج والمشاريع
ب. إدارة المنتج
ج. إدارة المحفظة
*د. إدارة المخاطر
هـ. إدارة الأحداث
https://www.examtopics.com/discussions/amazon/view/138028-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام AWS Managed Services (AMS) للدعم التشغيلي وتريد فهم نطاق AMS. ما هي ميزة AMS التي ستلبي هذه المتطلبات؟
*أ. إدارة منطقة الهبوط (landing zone) والشبكة
ب. تطوير تطبيقات العملاء
ج. تكوين pipeline DevSecOps
د. مراقبة سجلات التطبيق
https://www.examtopics.com/discussions/amazon/view/138046-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل عبء عمل NoSQL المحلي (on-premises) إلى Amazon DynamoDB. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. AWS Migration Hub
*ب. AWS Database Migration Service (AWS DMS)
ج. Migration Evaluator
د. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/138047-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: شركة في طور إيجاد أنواع وأحجام مثيلات Amazon EC2 الصحيحة لتلبية متطلبات الأداء والسعة. تريد الشركة إيجاد أقل تكلفة ممكنة. أي خيار يصف بدقة إجراءات الشركة؟
أ. Auto Scaling
ب. تنظيم التخزين (Storage tiering)
*ج. تحسين الحجم (Rightsizing)
د. جدولة المثيلات (Instance scheduling)
https://www.examtopics.com/discussions/amazon/view/138048-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إدارة أمان تسجيل الدخول لمستخدمي القوى العاملة. تحتاج الشركة إلى إنشاء مستخدمين للقوى العاملة وإدارة وصولهم مركزياً عبر جميع حسابات AWS وتطبيقات الشركة. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Audit Manager
ب. Amazon Cognito
ج. AWS Security Hub
*د. AWS IAM Identity Center (دخول موحد AWS)
https://www.examtopics.com/discussions/amazon/view/138561-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تقريراً يدرج حالة أجهزة المصادقة متعددة العوامل (MFA) التي يستخدمها جميع المستخدمين في حساب AWS الخاص بالشركة. ما هي ميزة أو خدمة AWS التي ستلبي هذا المطلب؟
أ. تقارير التكلفة والاستخدام AWS (AWS Cost and Usage Reports)
*ب. تقارير بيانات اعتماد IAM (IAM credential reports)
ج. Detailed Billing Reports - د تقارير AWS Cost Explorer
https://www.examtopics.com/discussions/amazon/view/144065-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام قدرات التعلم الآلي لتحليل بيانات السجل من مثيلات Amazon EC2 الخاصة بها وإجراء تحقيقات أمنية بكفاءة. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon Inspector
ب. Amazon QuickSight
*ج. Amazon Detective
د Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/137985-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بإطلاق تطبيق جوال في AWS Cloud. تريد الشركة أن يتمكن مستخدمو التطبيق من تسجيل الدخول من خلال موفري هوية (IdPs) لوسائل التواصل الاجتماعي. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. AWS Lambda
*ب. Amazon Cognito
ج. AWS Secrets Manager
د. Amazon CloudFront
https://www.examtopics.com/discussions/amazon/view/137984-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو أداة AWS المجانية التي تنشئ حالات عمل مبنية على البيانات (data-driven business cases) لتخطيط السحابة؟
*أ. Migration Evaluator
ب. AWS Billing Conductor
ج. AWS Billing Console
د. Amazon Forecast
https://www.examtopics.com/discussions/amazon/view/137978-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو مفهوم السحابة الذي يتجلى باستخدام AWS Cost Explorer؟
*أ. تحسين الحجم (Rightsizing)
ب. الموثوقية
ج. المرونة (Resilience)
د. التحديث (Modernization)
https://www.examtopics.com/discussions/amazon/view/140118-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نشر تطبيق ويب قائم على Java (غير معبأ في حاويات) على AWS. تريد الشركة استخدام خدمة مُدارة لنشر التطبيق بسرعة. تريد الشركة أن تقوم الخدمة تلقائياً بتوفير السعة وموازنة التحميل والتوسع ومراقبة صحة التطبيق. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon Elastic Container Service (Amazon ECS)
ب. AWS Lambda
ج. Amazon Elastic Kubernetes Service (Amazon EKS)
*د. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/137983-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو أداة AWS التي تتيح للمستخدمين الاتصال بـ AWS ونشر الموارد برمجياً؟
أ. Amazon QuickSight
ب. AWS PrivateLink
ج. AWS Direct Connect
*د. AWS SDKs
https://www.examtopics.com/discussions/amazon/view/137982-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة بنشر تطبيق ويب على مثيلات Amazon EC2. استخدام مثيلات EC2 منخفض. ما هي خدمة أو ميزة AWS التي يجب على الشركة استخدامها لتحسين حجم (rightsize) مثيلات EC2؟
أ. AWS Config
ب. AWS Cost Anomaly Detection
ج. AWS Budgets
*د. AWS Compute Optimizer
https://www.examtopics.com/discussions/amazon/view/138777-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تعريف سياسة مركزية لحماية البيانات تعمل عبر خدمات AWS للحوسبة والتخزين وموارد قواعد البيانات. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. AWS Batch
ب. AWS Elastic Disaster Recovery
*ج. AWS Backup
د. Amazon FSx
https://www.examtopics.com/discussions/amazon/view/138049-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تصنيف وتتبع تكلفة استخدام AWS بناءً على فئات الأعمال. ما هي خدمة أو ميزة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
*أ. علامات توزيع التكلفة (Cost allocation tags)
ب. AWS Organizations
ج. AWS Security Hub
د. تقرير التكلفة والاستخدام AWS (AWS Cost and Usage Report)
https://www.examtopics.com/discussions/amazon/view/137986-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكنها نقل البيانات بين خدمات تخزين AWS؟
*أ. AWS DataSync
ب. AWS Direct Connect
ج. AWS Lake Formation
د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/140726-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي العبارات التي تمثل فعالية تكلفة AWS Cloud؟ (اختر اثنين)
*أ. يمكن للمستخدمين استبدال النفقات الثابتة بنفقات متغيرة.
ب. يمكن للمستخدمين النشر في جميع أنحاء العالم في دقائق.
ج. تقدم AWS زيادة في السرعة والمرونة.
د. AWS مسؤولة عن تصحيح (patching) البنية التحتية.
*هـ. يستفيد المستخدمون من وفورات الحجم.
https://www.examtopics.com/discussions/amazon/view/142943-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تصميم بنيتها السحابية بحيث يمكنها دعم ابتكارات التطوير، وتحسين العمليات والإجراءات باستمرار. هذا مثال على أي ركيزة من ركائز إطار عمل AWS Well-Architected؟
أ. الأمان
ب. كفاءة الأداء
*ج. التميز التشغيلي
د. الموثوقية
https://www.examtopics.com/discussions/amazon/view/144068-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى توحيد الفوترة لحسابات AWS متعددة. تحتاج الشركة إلى استخدام حساب واحد للدفع نيابة عن جميع الحسابات الأخرى. ما هي خدمة أو أداة AWS التي يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. AWS Trusted Advisor
*ب. AWS Organizations
ج. AWS Budgets
د. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/143146-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بنقل بعض خدمات تكنولوجيا المعلومات المحلية (on-premises) إلى AWS Cloud. يريد قسم المالية رؤية الفاتورة بأكملها حتى يتمكن من توقع حدود الإنفاق. ما هي خدمة AWS التي يمكن للشركة استخدامها لتعيين حدود الإنفاق وتلقي إشعارات إذا تم تجاوز تلك الحدود؟
أ. تقارير التكلفة والاستخدام AWS (AWS Cost and Usage Reports)
*ب. AWS Budgets
ج. الفوترة الموحدة لـ AWS Organizations
د. Cost Explorer
https://www.examtopics.com/discussions/amazon/view/142696-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خطط دعم AWS التي توفر الوصول إلى مدير حساب تقني AWS (TAM)؟ (اختر اثنين)
أ. AWS Basic Support
ب. AWS Developer Support
ج. AWS Business Support
*د. AWS Enterprise On-Ramp Support
*هـ. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/141581-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أين يمكن للمستخدمين العثور على أمثلة لتصميمات حلول AWS Cloud؟
أ. AWS Marketplace
ب. AWS Service Catalog
*ج. مركز AWS المعماري (AWS Architecture Center)
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/141313-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهمة التي تقع على عاتق الشركة التي تستخدم Amazon RDS؟
أ. توفير البنية التحتية الأساسية.
*ب. إنشاء سياسات IAM للتحكم في الوصول الإداري إلى الخدمة.
ج. تثبيت الكابلات لتوصيل الأجهزة للحوسبة والتخزين.
د. تثبيت وتصحيح (patch) نظام تشغيل RDS.
https://www.examtopics.com/discussions/amazon/view/141324-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر ميزة توفرها AWS Cloud للمستخدمين؟
*أ. يلغي المستخدمون الحاجة إلى تخمين متطلبات سعة البنية التحتية.
ب. يقلل المستخدمون من تكاليفهم المتغيرة من خلال الحفاظ على الملكية الوحيدة لأجهزة تكنولوجيا المعلومات.
ج. يحتفظ المستخدمون بالسيطرة على أجهزة البنية التحتية الأساسية لتكنولوجيا المعلومات.
د. يحتفظ المستخدمون بالسيطرة على أنظمة التشغيل للخدمات المُدارة.
https://www.examtopics.com/discussions/amazon/view/142945-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي ميزة Amazon RDS التي توفر القدرة على إنشاء مثيل قاعدة بيانات أساسي تلقائياً ونسخ البيانات بشكل متزامن إلى مثيل في منطقة توفر أخرى؟
أ. النسخ المتماثلة للقراءة (Read replicas)
ب. النشر الأزرق/الأخضر (Blue/green deployment)
*ج. نشر متعدد مناطق التوفر (Multi-AZ deployment)
د. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/142698-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى التحقق من مفاتيح الوصول IAM التي لم يتم تدويرها مؤخراً. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. AWS WAF
ب. AWS Shield
ج. Amazon Cognito
*د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/143147-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة العديد من مثيلات Amazon EC2 في VPC الخاصة بها. تريد الشركة استخدام مورد أمان AWS أصلي للتحكم في حركة مرور الشبكة بين مثيلات EC2 معينة. ما هي خدمة أو ميزة AWS التي ستلبي هذا المطلب؟
أ. قوائم ACL للشبكة (Network ACLs)
ب. AWS WAF
ج. Amazon GuardDuty
*د. مجموعات الأمان (Security groups)
https://www.examtopics.com/discussions/amazon/view/142699-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يمكن أن يكون مكونات لشبكة VPC في AWS Cloud؟ (اختر اثنين)
أ. Amazon API Gateway
ب. دلاء وكائنات Amazon S3
ج. AWS Storage Gateway
*د. بوابة إنترنت (Internet gateway)
*هـ. شبكة فرعية (Subnet)
https://www.examtopics.com/discussions/amazon/view/142946-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة ببناء تطبيق جديد على AWS. تحتاج الشركة إلى بقاء التطبيق متاحاً إذا فشل أحد مكونات التطبيق الفردية. ما هو مبدأ التصميم الذي يجب على الشركة استخدامه لتلبية هذا المطلب؟
أ. الموارد القابلة للاستبدال (Disposable resources)
ب. الأتمتة
ج. تحسين الحجم (Rightsizing)
*د. الاقتران الضعيف (Loose coupling)
https://www.examtopics.com/discussions/amazon/view/144069-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام خدمة مُدارة لتحديد وحماية البيانات الحساسة المخزنة في Amazon S3. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS IAM Access Analyzer
ب. Amazon GuardDuty
ج. Amazon Inspector
*د. Amazon Macie
https://www.examtopics.com/discussions/amazon/view/147523-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي يمكن للمستخدم تكوينها لتقييد الوصول إلى الشبكة على مستوى الشبكة الفرعية (subnet)؟
أ. AWS Shield
ب. AWS WAF
*ج. قائمة ACL للشبكة (Network ACL)
د. مجموعة أمان (Security group)
https://www.examtopics.com/discussions/amazon/view/143148-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكن للشركة استخدامها لإدارة مفاتيح التشفير في السحابة؟
أ. AWS License Manager
ب. AWS Certificate Manager (ACM)
*ج. AWS CloudHSM
د. AWS Directory Service
https://www.examtopics.com/discussions/amazon/view/141200-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تعزيز الأمان من خلال تشغيل نظام كشف التسلل (intrusion detection system) من مزود خدمة إنترنت تابع لجهة خارجية من حساب AWS الخاص بها. ما هي خدمة أو مورد AWS الذي يجب على الشركة استخدامه لتلبية هذا المطلب؟
أ. AWS Security Hub
*ب. AWS Marketplace
ج. AWS Quick Starts
د. AWS Security Center
https://www.examtopics.com/discussions/amazon/view/143149-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: كيف تساعد AWS Cloud الشركات على بناء المرونة (agility) في عملياتها وبنيتها التحتية السحابية؟
أ. يمكن للشركات تجنب توفير الكثير من السعة عندما لا تعرف مقدار السعة المطلوبة.
ب. يمكن للشركات التوسع في مناطق جغرافية جديدة.
*ج. يمكن للشركات الوصول إلى مجموعة من التقنيات للتجربة والابتكار بسرعة.
د. يمكن للشركات الدفع مقابل موارد تكنولوجيا المعلومات فقط عند استخدامها للموارد.
https://www.examtopics.com/discussions/amazon/view/141201-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو أداة AWS التي تمنح الشركة القدرة على إصدار تغييرات التطبيق بطريقة آلية؟
أ. Amazon AppFlow
*ب. AWS CodeDeploy
ج. AWS PrivateLink
د. Amazon EKS Distro
https://www.examtopics.com/discussions/amazon/view/141314-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي منظور في إطار عمل اعتماد السحابة AWS (AWS CAF) يركز على إدارة الهويات والأذونات على نطاق واسع؟
أ. العمليات
ب. المنصة
ج. الحوكمة
*د. الأمان
https://www.examtopics.com/discussions/amazon/view/141315-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي تسمح للمستخدمين بتخزين بيانات الاعتماد المشفرة بشكل آمن واسترداد هذه البيانات عند الحاجة؟
أ. AWS Encryption SDK
ب. AWS Security Hub
*ج. AWS Secrets Manager
د. AWS Artifact
https://www.examtopics.com/discussions/amazon/view/141316-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو مورد AWS الذي يمكن للشركة استخدامه لنشر قواعد AWS WAF؟
أ. Amazon EC2
*ب. Application Load Balancer
ج. AWS Trusted Advisor
د. Network Load Balancer
https://www.examtopics.com/discussions/amazon/view/140727-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستضيف شركة موقعها على الويب على مثيلات Amazon EC2. تحتاج الشركة إلى التأكد من أن موقع الويب يصل إلى جمهور عالمي ويوفر الحد الأدنى من زمن الوصول للمستخدمين. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon Route 53
*ب. Amazon CloudFront
ج. Elastic Load Balancing
د. AWS Lambda
https://www.examtopics.com/discussions/amazon/view/142786-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة منح أحد موظفيها حق الوصول إلى Amazon RDS. وتريد الشركة أيضًا قصر التفاعل على AWS CLI ومجموعات أدوات تطوير البرامج AWS (SDKs) فقط. ما هي مجموعة الإجراءات التي يجب على الشركة اتخاذها لتلبية هذه المتطلبات مع اتباع مبادئ الامتياز الأقل؟ (اختر اثنين)
أ. إنشاء مستخدم IAM وتوفير الوصول إلى AWS Management Console فقط.
*ب. إنشاء مستخدم IAM وتوفير الوصول البرمجي فقط.
ج. إنشاء دور IAM وتوفير الوصول إلى AWS Management Console فقط.
د. إنشاء سياسة IAM بصلاحيات المسؤول وإرفاقها بمستخدم IAM.
*هـ. إنشاء سياسة IAM مع صلاحية الوصول إلى Amazon RDS وإرفاقها بمستخدم IAM.
https://www.examtopics.com/discussions/amazon/view/144452-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة اكتشاف البيانات وإعدادها ونقلها ودمجها من مصادر متعددة لتحليلات البيانات والتعلم الآلي. ما هي خدمة تكامل البيانات بدون خادم (serverless data integration) من AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
*أ. AWS Glue
ب. AWS Data Exchange
ج. Amazon Athena
د. Amazon EMR
https://www.examtopics.com/discussions/amazon/view/141317-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة بناء تطبيق يستخدم AWS Lambda لتشغيل كود Python. بموجب نموذج المسؤولية المشتركة AWS، ما هي المهام التي ستكون مسؤولية الشركة؟ (اختر اثنين)
أ. إدارة البنية التحتية الأساسية.
ب. إدارة نظام التشغيل.
*ج. كتابة كود منطق الأعمال.
د. تثبيت بيئة تشغيل لغة البرمجة.
*هـ. توفير وصول AWS Identity and Access Management (IAM) إلى خدمة Lambda.
https://www.examtopics.com/discussions/amazon/view/146539-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام خدمة AWS مركزية لفرض الامتثال لمعايير الأعمال التنظيمية. تريد الشركة استخدام خدمة AWS يمكنها حوكمة والتحكم في من يمكنه نشر وإدارة وإيقاف تشغيل موارد AWS. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon CloudWatch
*ب. AWS Service Catalog
ج. Amazon GuardDuty
د. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/143768-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ماذا يعني "أمان السحابة" (security of the cloud) في نموذج المسؤولية المشتركة AWS؟
أ. توفر خدمات AWS مثل Amazon EC2
*ب. أمان البنية التحتية السحابية التي تشغل جميع خدمات AWS
ج. تنفيذ سياسات كلمات المرور لمستخدمي IAM
د. أمان بيئات العملاء باستخدام شركاء AWS Network Firewall
https://www.examtopics.com/discussions/amazon/view/146541-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة تطبيق ينتج بيانات غير منظمة بشكل مستمر. تحتاج الشركة إلى تخزين البيانات بحيث تكون البيانات دائمة وسهلة الاستعلام. ما هي خدمة AWS التي يمكن للشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon RDS
ب. Amazon Aurora
ج. Amazon QuickSight
*د. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/146542-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الخيارات التي تمثل منظورات إطار عمل اعتماد السحابة AWS (AWS CAF)؟ (اختر اثنين)
أ. إتقان السحابة (Cloud fluency)
*ب. الأمان
ج. تسريع التغيير
د. الهندسة المعمارية
*هـ. الأعمال
https://www.examtopics.com/discussions/amazon/view/142848-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل البنية التحتية للحاويات المحلية (on-premises) إلى AWS Cloud. تريد الشركة منع التكاليف غير المخطط لها للإدارة والتشغيل والتكيف مع بنية بدون خادم (serverless architecture). ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon Connect
*ب. AWS Fargate
ج. Amazon Lightsail
د. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/145240-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة أن تكون مثيلات Amazon EC2 الخاصة بها في مواقع مختلفة ولكنها تشترك في نفس المنطقة الجغرافية. تريد الشركة أيضاً استخدام شبكات كهرباء متعددة واتصال شبكة مستقل لمثيلات EC2. ما هو الحل الذي يلبي هذه المتطلبات؟
أ. استخدام مثيلات EC2 في مواقع حافة متعددة في نفس منطقة AWS.
*ب. استخدام مثيلات EC2 في مناطق توفر متعددة في نفس منطقة AWS.
ج. استخدام مثيلات EC2 في مواقع Amazon Connect متعددة في نفس منطقة AWS.
د. استخدام مثيلات EC2 في مواقع AWS Artifact متعددة في نفس منطقة AWS.
https://www.examtopics.com/discussions/amazon/view/145242-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة تجارة إلكترونية بنشر تطبيق ويب جديد على مثيلات Amazon EC2. تريد الشركة توزيع حركة مرور HTTP الواردة بالتساوي عبر جميع المثيلات قيد التشغيل. ما هي خدمة أو مورد AWS الذي سيلبي هذا المطلب؟
أ. Amazon EC2 Auto Scaling
*ب. Application Load Balancer
ج. Gateway Load Balancer
د. Network Load Balancer
https://www.examtopics.com/discussions/amazon/view/145241-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي تتيح للمستخدمين ربط شبكات VPC والشبكات المحلية (on-premises) بمحور مركزي؟
أ. بوابة افتراضية خاصة (Virtual private gateway)
*ب. AWS Transit Gateway
ج. بوابة إنترنت (Internet gateway)
د. بوابة العميل (Customer gateway)
https://www.examtopics.com/discussions/amazon/view/142678-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بربط شبكات VPC متعددة وشبكات محلية (on-premises). تحتاج الشركة إلى استخدام خدمة AWS كموجه سحابي لتبسيط علاقات الاقتران (peering). ما هي خدمة AWS التي يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. AWS Direct Connect
*ب. AWS Transit Gateway
ج. Amazon Connect
د. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/143380-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخزن شركة كمية كبيرة من البيانات التي لا يصل إليها المدققون إلا مرتين كل عام. ما هي فئة تخزين Amazon S3 التي يجب على الشركة استخدامها لتخزين البيانات بأقل تكلفة؟
أ. Amazon S3 Outposts
*ب. Amazon S3 Glacier Instant Retrieval
ج. Amazon S3 Standard
د. Amazon S3 Intelligent-Tiering
https://www.examtopics.com/discussions/amazon/view/142852-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر طرقاً لتحسين الأمان على AWS؟ (اختر اثنين)
أ. استخدام AWS Artifact
ب. منح أوسع الصلاحيات لجميع أدوار IAM
ج. تشغيل كود التطبيق مع AWS Cloud
*د. تمكين المصادقة متعددة العوامل (MFA) مع Amazon Cognito
*هـ. استخدام فحوصات أمان AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/141620-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكن للشركة استخدامها لإدارة مفاتيح التشفير في السحابة؟
أ. AWS License Manager
ب. AWS Certificate Manager (ACM)
*ج. AWS CloudHSM
د. AWS Directory Service
https://www.examtopics.com/discussions/amazon/view/146543-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة AWS لجميع البنية التحتية لتكنولوجيا المعلومات الخاصة بها. يُسمح لمطوري الشركة بنشر التطبيقات بأنفسهم. يريد المطورون نشر تطبيقاتهم دون الحاجة إلى توفير البنية التحتية بأنفسهم. ما هي خدمة AWS التي يجب على المطورين استخدامها لتلبية هذه المتطلبات؟
أ. AWS CloudFormation
ب. AWS CodeBuild
*ج. AWS Elastic Beanstalk
د. AWS CodeDeploy
https://www.examtopics.com/discussions/amazon/view/142503-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة الحصول على رؤى من بياناتها وبناء لوحات معلومات تفاعلية لتصور البيانات. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon SageMaker
ب. Amazon Rekognition
*ج. Amazon QuickSight
د. Amazon Kinesis
https://www.examtopics.com/discussions/amazon/view/145248-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مهندس سحابي تخزين البيانات في Amazon S3. سيصل المهندس إلى بعض البيانات سنوياً وبعض البيانات يومياً. ما هي فئة تخزين S3 التي ستلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. S3 Standard
ب. S3 Glacier Deep Archive
ج. S3 One Zone-Infrequent Access (S3 One Zone-IA)
*د. S3 Intelligent-Tiering
https://www.examtopics.com/discussions/amazon/view/147611-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يقوم مستخدم بنقل عبء عمل من مركز بيانات محلي إلى بنية موزعة بين مركز البيانات المحلي و AWS Cloud. ما هو نوع هذا النقل؟
أ. من محلي (on-premises) إلى مولود في السحابة (cloud native)
ب. من هجين (hybrid) إلى مولود في السحابة
*ج. من محلي (on-premises) إلى هجين (hybrid)
د. من مولود في السحابة إلى هجين
https://www.examtopics.com/discussions/amazon/view/142940-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تزود المستخدمين بتقارير صادرة عن AWS وشهادات واعتمادات وإقرارات من طرف ثالث؟
*أ. AWS Artifact
ب. AWS Trusted Advisor
ج. لوحة معلومات صحة AWS (AWS Health Dashboard)
د. AWS Config
https://www.examtopics.com/discussions/amazon/view/142948-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة مركز اتصال محلي (on-premises) للعملاء. تحتاج الشركة إلى الانتقال إلى حل قائم على السحابة يمكنه تقديم ميزات الذكاء الاصطناعي لتحسين تجربة المستخدم. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Wavelength
ب. AWS IAM Identity Center (دخول موحد AWS)
ج. AWS Direct Connect
*د. Amazon Connect
https://www.examtopics.com/discussions/amazon/view/144460-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لنقل تطبيق التسويق المخصص وتطبيق معالجة الطلبات إلى AWS. تحتاج الشركة إلى نشر التطبيقات على أنواع مختلفة من المثيلات بتكوينات متنوعة من وحدة المعالجة المركزية والذاكرة والتخزين وسعة الشبكة. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Lambda
ب. Amazon Cognito
ج. Amazon Athena
*د. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/141191-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة مراقبة وحظر طلبات HTTP و HTTPS الضارة التي تتلقاها توزيعات Amazon CloudFront الخاصة بها. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon GuardDuty
ب. Amazon Inspector
*ج. AWS WAF
د. Amazon Detective
https://www.examtopics.com/discussions/amazon/view/150407-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكنها إنشاء معلومات يمكن استخدامها من قبل مدققين خارجيين؟
أ. Amazon Cognito
ب. Amazon FSx
*ج. AWS Config
د. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/151152-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي تتطلب مزود خدمة إنترنت (ISP) ومنشأة مشتركة (colocation facility) لتنفيذها؟
أ. AWS VPN
ب. Amazon Connect
*ج. AWS Direct Connect
د. بوابة إنترنت (Internet gateway)
https://www.examtopics.com/discussions/amazon/view/148056-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بنقل موقعها الإلكتروني العام إلى AWS. تريد الشركة استضافة اسم المجال للموقع على AWS. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. AWS Lambda
*ب. Amazon Route 53
ج. Amazon CloudFront
د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/148586-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة موفر هوية خارجي (IdP) تابع لجهة خارجية. تريد الشركة تزويد موظفيها بإمكانية الوصول إلى حسابات وخدمات AWS دون الحاجة إلى مجموعة أخرى من بيانات اعتماد تسجيل الدخول. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. AWS Directory Service
ب. Amazon Cognito
*ج. AWS IAM Identity Center
د. AWS Resource Access Manager (AWS RAM)
https://www.examtopics.com/discussions/amazon/view/140270-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة عبء عمل قديم في مركز بيانات محلي (on-premises). تريد الشركة نقل عبء العمل إلى AWS. لا ترغب الشركة في إجراء أي تغييرات على عبء العمل. ما هي استراتيجية النقل التي يجب على الشركة استخدامها؟
أ. إعادة الشراء (Repurchase)
ب. إعادة التأسيس (Replatform)
*ج. إعادة الاستضافة (Rehost)
د. إعادة البناء (Refactor)
https://www.examtopics.com/discussions/amazon/view/146686-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لنقل التطبيقات إلى AWS Cloud. أثناء تدقيق النظام، تجد الشركة أن تطبيق نظام إدارة المحتوى (CMS) الخاص بها غير متوافق مع البيئات السحابية. ما هي استراتيجيات النقل التي ستساعد الشركة على نقل تطبيق CMS بأقل جهد؟ (اختر اثنين)
أ. الإيقاف (Retire)
*ب. إعادة الاستضافة (Rehost)
*ج. إعادة الشراء (Repurchase)
د. إعادة التأسيس (Replatform)
هـ. إعادة البناء (Refactor)
https://www.examtopics.com/discussions/amazon/view/140728-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار تعتبر AWS مسؤولة عنه بموجب نموذج المسؤولية المشتركة AWS؟
أ. تكوين الشبكة وجدار الحماية
ب. تشفير البيانات من جانب العميل
ج. إدارة أذونات المستخدم
*د. الأجهزة والبنية التحتية
https://www.examtopics.com/discussions/amazon/view/145257-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة أن يكون استخدامها لـ AWS أكثر استدامة. تريد الشركة تتبع وقياس ومراجعة والتنبؤ بالانبعاثات الملوثة الناتجة عن تطبيقات AWS الخاصة بها. ما هي خدمة أو أداة AWS التي يمكن للشركة استخدامها لتلبية هذه المتطلبات؟
أ. لوحة معلومات صحة AWS (AWS Health Dashboard)
*ب. أداة البصمة الكربونية للعميل AWS (AWS customer carbon footprint tool)
ج. مركز دعم AWS (AWS Support Center)
د. Amazon QuickSight
https://www.examtopics.com/discussions/amazon/view/151232-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي أداة أو ميزة AWS التي تعمل كجدار حماية VPC على مستوى الشبكة الفرعية (subnet)؟
أ. مجموعة أمان (Security group)
*ب. قائمة ACL للشبكة (Network ACL)
ج. Traffic Mirroring
د. بوابة إنترنت (Internet gateway)
https://www.examtopics.com/discussions/amazon/view/151256-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: وفقاً لنموذج المسؤولية المشتركة AWS، ما هي المهمة التي تقع على عاتق العميل؟
أ. الحفاظ على البنية التحتية اللازمة لتشغيل AWS Lambda
ب. تحديث نظام التشغيل لمثيلات Amazon DynamoDB
ج. الحفاظ على البنية التحتية لـ Amazon S3
*د. تحديث نظام التشغيل الضيف على مثيلات Amazon EC2
https://www.examtopics.com/discussions/amazon/view/144072-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة أعباء عمل قاعدة بيانات MySQL على خوادم مدارة ذاتياً في مركز بيانات محلي (on-premises). تريد الشركة نقل أعباء عمل قاعدة البيانات إلى خدمة AWS مُدارة. ما هي استراتيجية النقل التي يجب على الشركة استخدامها؟
أ. إعادة الاستضافة (Rehost)
ب. إعادة الشراء (Repurchase)
ج. إعادة البناء (Refactor)
*د. إعادة التأسيس (Replatform)
https://www.examtopics.com/discussions/amazon/view/140730-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تنفيذ تتبع تفصيلي لتكاليفها السحابية حسب القسم والمشروع. ما هي ميزة أو خدمة AWS التي يجب على الشركة استخدامها؟
أ. الفوترة الموحدة (Consolidated billing)
*ب. علامات توزيع التكلفة (Cost allocation tags)
ج. AWS Marketplace
د. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/143584-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة قاعدة بيانات MariaDB محلياً (on premises). تريد الشركة نقل البيانات إلى AWS Cloud. ما هي خدمة AWS التي ستستضيف قاعدة البيانات هذه بأقل قدر من الأعباء التشغيلية؟
*أ. Amazon RDS
ب. Amazon Neptune
ج. Amazon S3
د. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/144186-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى خدمة كشف التهديدات (threat detection) التي ستراقب بشكل مستمر حسابات AWS الخاصة بها وأعباء العمل ودلاء Amazon S3 بحثاً عن الأنشطة الضارة والسلوك غير المصرح به. ما هي خدمة AWS التي تلبي هذه المتطلبات؟
أ. AWS Shield
ب. AWS Firewall Manager
*ج. Amazon GuardDuty
د. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/144965-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إدارة مواردها السحابية باستخدام قوالب البنية التحتية كرمز (IaC). تحتاج الشركة إلى تلبية متطلبات الامتثال. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Artifact
ب. AWS Resource Explorer
ج. AWS License Manager
*د. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/142885-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مسؤول أنظمة مراقبة استخدام وحدة المعالجة المركزية لمثيلات Amazon EC2 الخاصة بالشركة. ما هي خدمة AWS التي يمكنها توفير هذه المعلومات؟
أ. AWS Config
ب. AWS Trusted Advisor
ج. AWS CloudTrail
*د. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/143586-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد بائع برامج مستقل تسليم ومشاركة صور آلة Amazon المخصصة (AMIs) الخاصة به مع العملاء المحتملين. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
*أ. AWS Marketplace
ب. AWS Data Exchange
ج. Amazon EC2
د. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/146161-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو المكون الذي يجب إرفاقه بـ VPC لتمكين الوصول إلى الإنترنت الوارد؟
أ. بوابة NAT (NAT gateway)
ب. نقطة نهاية VPC (VPC endpoint)
ج. اتصال VPN (VPN connection)
*د. بوابة إنترنت (Internet gateway)
https://www.examtopics.com/discussions/amazon/view/146162-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خطة دعم AWS التي توفر المجموعة الكاملة من فحوصات AWS Trusted Advisor بأقل تكلفة؟
أ. AWS Developer Support
*ب. AWS Business Support
ج. AWS Enterprise On-Ramp Support
د. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/142143-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تطبيق شركة يعمل على مثيلات Amazon EC2. تخطط الشركة لنقل جزئي إلى بنية بدون خادم (serverless) في العام القادم وتريد الدفع مقابل الموارد مسبقاً. ما هو خيار شراء AWS الذي سيعمل على تحسين تكاليف الشركة؟
أ. Convertible Reserved Instances
ب. Spot Instances
ج. EC2 Instance Savings Plans
*د. Compute Savings Plan
https://www.examtopics.com/discussions/amazon/view/141434-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بيع بالتجزئة ببناء تطبيق جوال جديد. تقوم الشركة بتقييم ما إذا كانت ستبني التطبيق في مركز بيانات محلي (on-premises) أم في AWS Cloud. أي من التالي يعتبر من فوائد بناء هذا التطبيق في AWS Cloud؟ (اختر اثنين)
أ. نفقات رأسمالية كبيرة مقدماً ونفقات متغيرة منخفضة
*ب. زيادة سرعة تجربة مشاريع جديدة
ج. سيطرة كاملة على الأمان المادي للبنية التحتية
*د. مرونة التوسع في دقائق مع زيادة شعبية التطبيق
هـ. القدرة على اختيار مراكز البيانات المحددة التي ستستضيف خوادم التطبيق
https://www.examtopics.com/discussions/amazon/view/143626-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يجب على الشركة أرشفة مستنداتها باستخدام نموذج الكتابة مرة واحدة والقراءة عدة مرات (WORM) للوفاء بالالتزامات القانونية ومتطلبات الامتثال. ما هي ميزة Amazon S3 التي يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. إصدار S3 (S3 Versioning)
ب. سياسة دلو S3 (S3 bucket policy)
*ج. قفل مخزن S3 Glacier (S3 Glacier Vault Lock)
د. حذف S3 متعدد العوامل (S3 multi-factor authentication - MFA delete)
https://www.examtopics.com/discussions/amazon/view/140776-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة أعباء عمل مجمعة (batch workloads) تحتاج إلى التشغيل لفترات قصيرة على Amazon EC2. يمكن لأعباء العمل التعامل مع الانقطاعات ويمكن أن تبدأ مرة أخرى من حيث توقفت. ما هو خيار شراء مثيل EC2 الأكثر فعالية من حيث التكلفة لتلبية هذه المتطلبات؟
أ. Reserved Instances
*ب. Spot Instances
ج. Dedicated Instances
د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/141830-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى استضافة تطبيق في منطقة جغرافية محددة للامتثال للوائح. ما هي ميزة البنية التحتية العالمية لـ AWS التي ستساعد الشركة على تلبية هذا المطلب؟
أ. قابلية التوسع
*ب. الانتشار العالمي (Global footprint)
ج. التوفر
د. الأداء
https://www.examtopics.com/discussions/amazon/view/140805-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة تجارة إلكترونية لنقل عبء عمل مركز البيانات الخاص بها إلى AWS Cloud لدعم أنماط الاستخدام الديناميكية العالية. ما هي الفوائد التي تجعل AWS Cloud فعالة من حيث التكلفة لنقل هذا النوع من عبء العمل؟ (اختر اثنين)
أ. الموثوقية
ب. الأمان
*ج. المرونة (Elasticity)
*د. موارد الدفع حسب الاستخدام
هـ. التوفر العالي
https://www.examtopics.com/discussions/amazon/view/147624-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو حل AWS الذي يمنح الشركات القدرة على استخدام بروتوكولات مثل NFS لتخزين واسترجاع الكائنات في Amazon S3؟
أ. Amazon FSx for Lustre
ب. AWS Storage Gateway volume gateway
*ج. AWS Storage Gateway file gateway
د. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/143774-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام تحليل الفيديو الآلي لتحديد الموظفين الذين يدخلون إلى مكاتبها. ما هي خدمة AWS التي ستلبي هذا المطلب؟
*أ. Amazon Rekognition
ب. Amazon Polly
ج. Amazon Cognito
د. AWS Lambda
https://www.examtopics.com/discussions/amazon/view/144990-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى استضافة خادم ويب على مثيلات Amazon EC2 لمدة عام واحد على الأقل. لا يمكن لخادم الويب تحمل الانقطاع. ما هو خيار شراء مثيل EC2 الذي سيلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. On-Demand Instances
*ب. Partial Upfront Reserved Instances
ج. Spot Instances
د. No Upfront Reserved Instances
https://www.examtopics.com/discussions/amazon/view/151270-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تطلب شركة تقارير PCI (Payment Card Industry) التي تتحقق من فعالية التشغيل لضوابط أمان AWS. كيف يجب على الشركة الحصول على هذه التقارير؟
أ. الاتصال بـ AWS Support.
*ب. تنزيل التقارير من AWS Artifact.
ج. تنزيل التقارير من AWS Security Hub.
د. الاتصال بمدير حساب تقني AWS (TAM).
https://www.examtopics.com/discussions/amazon/view/142140-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة Amazon Aurora كخدمة قاعدة بيانات. تريد الشركة تشفير قواعد البيانات والنسخ الاحتياطية لقواعد البيانات. أي طرف يدير تشفير مجموعات قاعدة البيانات (database clusters) ولقطات قاعدة البيانات (database snapshots)، وفقاً لنموذج المسؤولية المشتركة AWS؟
أ. AWS
*ب. الشركة
ج. شركاء AWS Marketplace
د. شركاء خارجيون
https://www.examtopics.com/discussions/amazon/view/140766-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستضيف شركة تطبيق ويب على مثيلات Amazon EC2. تريد الشركة تنفيذ شروط مخصصة لتصفية والتحكم في حركة مرور الويب الواردة. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon GuardDuty
*ب. AWS WAF
ج. Amazon Macie
د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/140806-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة الحفاظ على إنتاجية النطاق الترددي (bandwidth throughput) وتوفير تجربة شبكة أكثر اتساقاً من الاتصالات القائمة على الإنترنت العام. ما هي خدمة AWS التي يجب على الشركة اختيارها؟
أ. AWS VPN
*ب. AWS Direct Connect
ج. Amazon Connect
د. Amazon CloudFront
https://www.examtopics.com/discussions/amazon/view/143208-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى استخدام صياغة SQL لإجراء استعلام مباشر عن الكائنات في دلو Amazon S3. ما هي خدمة AWS التي يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. AWS Glue
*ب. Amazon Athena
ج. AWS Lambda
د. Amazon Kinesis
https://www.examtopics.com/discussions/amazon/view/141280-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي مبادئ التصميم المضمنة في ركيزة الموثوقية لإطار عمل AWS Well-Architected؟ (اختر اثنين)
*أ. التعافي تلقائياً من الفشل.
ب. منح الجميع حق الوصول لزيادة حصص خدمة AWS.
*ج. التوقف عن تخمين السعة.
د. تصميم التطبيقات للعمل في منطقة توفر واحدة.
هـ. التخطيط أولاً لزيادة حصص خدمة AWS في منطقة AWS ثانوية.
https://www.examtopics.com/discussions/amazon/view/151278-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكن للشركات استخدامها للاشتراك في خلاصات RSS للحصول على تحديثات حول جميع مشكلات خدمة AWS؟
أ. Amazon Simple Notification Service (Amazon SNS)
*ب. لوحة معلومات صحة AWS (AWS Health Dashboard)
ج. AWS Config
د. AWS CodeCommit
https://www.examtopics.com/discussions/amazon/view/140792-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة مثيلات Amazon EC2 في مختبر أبحاث. تعمل المثيلات لمدة 3 ساعات كل أسبوع ولا يمكن مقاطعتها. ما هو خيار شراء المثيل الأكثر فعالية من حيث التكلفة لتلبية هذه المتطلبات؟
أ. Compute Savings Plan
*ب. On-Demand Instances
ج. Convertible Reserved Instances
د. Spot Instances
https://www.examtopics.com/discussions/amazon/view/142886-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مستخدم AWS جديد إلى التفاعل مع AWS Support باستخدام استدعاءات API. ما هي خطة دعم AWS التي ستلبي هذا المطلب بأكبر قدر من الفعالية من حيث التكلفة؟
أ. AWS Basic Support
ب. AWS Developer Support
*ج. AWS Business Support
د. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/140767-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: انتقلت شركة إلى AWS Cloud. الآن تدفع الشركة مقابل الخدمات على أساس الحاجة. ما هي ميزة الحوسبة السحابية التي تستفيد منها الشركة؟
أ. التوقف عن إنفاق الأموال على تشغيل وصيانة مراكز البيانات
ب. زيادة السرعة والمرونة
ج. الانتشار عالمياً في دقائق
*د. استبدال النفقات الثابتة بنفقات متغيرة
https://www.examtopics.com/discussions/amazon/view/144995-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ستقوم شركة بتشغيل عبء عمل حاسوبي يمكن التنبؤ به على مثيلات Amazon EC2 للسنوات الثلاث القادمة. عبء العمل حاسم بالنسبة للشركة. تريد الشركة تحسين التكاليف لتشغيل عبء العمل. ما هو الحل الذي سيلبي هذه المتطلبات؟
أ. Spot Instances
ب. Dedicated Hosts
*ج. Savings Plans
د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/142508-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تقدير تكلفة حل AWS المعماري الخاص بها قبل النقل. ما هي خدمة أو ميزة AWS التي ستلبي هذا المطلب؟
أ. Amazon Detective
ب. AWS Budgets
ج. AWS Resource Explorer
*د. AWS Pricing Calculator
https://www.examtopics.com/discussions/amazon/view/140768-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إدارة وصول موظفيها إلى حسابات AWS متعددة بشكل مركزي. ما هي خدمة أو ميزة AWS التي يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. AWS Identity and Access Management Access Analyzer
ب. AWS Secrets Manager
*ج. AWS IAM Identity Center
د. AWS Security Token Service (AWS STS)
https://www.examtopics.com/discussions/amazon/view/144491-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تتلقى جامعة منحة لإجراء بحث باستخدام خدمات AWS. يحتاج فريق البحث إلى التأكد من أن أموال المنحة تدوم طوال العام الدراسي. قرر الفريق تخصيص مبلغ شهري يساوي إجمالي مبلغ المنحة. ما هي خدمة أو ميزة AWS التي ستخطر الفريق إذا تجاوز الإنفاق المبلغ المخطط له؟
*أ. AWS Budgets
ب. Cost Explorer
ج. علامات توزيع التكلفة (Cost allocation tags)
د. فئات التكلفة (Cost categories)
https://www.examtopics.com/discussions/amazon/view/141003-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة حسابات وفرق متعددة وتريد إعداد بيئة AWS جديدة متعددة الحسابات. ما هي خدمة AWS التي تدعم هذا المطلب؟
أ. AWS CloudFormation
*ب. AWS Control Tower
ج. AWS Config
د. Amazon Virtual Private Cloud (Amazon VPC)
https://www.examtopics.com/discussions/amazon/view/141005-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى الوصول إلى فحوصات وتوصيات تساعد الشركة على اتباع أفضل ممارسات AWS لتحسين التكلفة والأمان وتحمل الأخطاء والأداء وحصص الخدمة. ما هي مجموعة خدمة AWS وخطة دعم AWS على حساب AWS التي ستلبي هذه المتطلبات؟
أ. AWS Trusted Advisor مع AWS Developer Support
ب. AWS Health Dashboard مع AWS Enterprise Support
*ج. AWS Trusted Advisor مع AWS Business Support
د. AWS Health Dashboard مع AWS Enterprise On-Ramp Support
https://www.examtopics.com/discussions/amazon/view/141006-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تساعد المستخدمين على تخطيط وتتبع بيانات نقل مخزون الخادم والتطبيق إلى AWS؟
أ. Amazon CloudWatch
ب. AWS DataSync
*ج. AWS Migration Hub
د. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/141007-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي فريق أو عرض AWS يساعد المستخدمين على تسريع اعتماد السحابة من خلال engagements مدفوعة في أي من عدة مجالات ممارسة تخصصية؟
أ. AWS Enterprise Support
ب. مهندسو حلول AWS
*ج. AWS Professional Services
د. مديرو حسابات AWS
https://www.examtopics.com/discussions/amazon/view/141008-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى شراء مثيلات Amazon EC2 لدعم تطبيق سيعمل بشكل مستمر لأكثر من عام واحد. ما هو خيار شراء مثيل EC2 الذي يلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. Dedicated Instances
ب. Spot Instances
*ج. Reserved Instances
د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/141009-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي لغات البرمجة التي يدعمها AWS Cloud Development Kit (AWS CDK) حالياً؟ (اختر اثنين)
*أ. Python
ب. Swift
*ج. TypeScript
د. Ruby
هـ. PHP
https://www.examtopics.com/discussions/amazon/view/141010-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي تتيح للمستخدمين القدرة على توفير البنية التحتية لـ AWS برمجياً؟
*أ. AWS Cloud Development Kit (AWS CDK)
ب. Amazon CodeGuru
ج. AWS Config
د. AWS CodeCommit
https://www.examtopics.com/discussions/amazon/view/144997-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي تسمح للشركة بالحصول على قسم معزول منطقياً خاص بها من AWS Cloud؟
أ. AWS VPN
ب. مناطق التوفر (Availability Zones)
*ج. Amazon Virtual Private Cloud (Amazon VPC)
د. مناطق AWS (AWS Regions)
https://www.examtopics.com/discussions/amazon/view/147627-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من الإجراءات التالية يتم التحكم فيها باستخدام AWS Identity and Access Management (IAM)؟ (اختر اثنين)
*أ. التحكم في الوصول إلى واجهات برمجة تطبيقات خدمة AWS والموارد المحددة الأخرى.
ب. توفير كشف التهديدات الذكي والمراقبة المستمرة.
*ج. حماية بيئة AWS باستخدام المصادقة متعددة العوامل (MFA).
د. منح المستخدمين حق الوصول إلى مراكز بيانات AWS.
هـ. توفير حماية جدار الحماية للتطبيقات من هجمات الويب الشائعة.
https://www.examtopics.com/discussions/amazon/view/151281-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لماذا يتم استخدام قوالب AWS CloudFormation؟
*أ. لتقليل وقت التوفير باستخدام الأتمتة.
ب. لنقل البنية التحتية الحالية إلى شركة أخرى.
ج. لإعادة استخدام البنية التحتية المحلية في AWS Cloud.
د. لنشر بنية تحتية كبيرة بدون آثار على التكلفة.
https://www.examtopics.com/discussions/amazon/view/151282-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة AWS Identity and Access Management (IAM). من يمكنه إدارة مفاتيح الوصول للمستخدم الجذر لحساب AWS؟
أ. مستخدمو IAM في نفس الحساب الذين تم منحهم الإذن
ب. أدوار IAM في أي حساب تم منحهم الإذن
ج. مستخدمو وأدوار IAM الذين تم منحهم الإذن
*د. مالك حساب AWS
https://www.examtopics.com/discussions/amazon/view/147628-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مجموعة تشارك المسؤولية مع AWS لأمن وامتثال حسابات وموارد AWS؟
أ. بائعو الطرف الثالث
*ب. العملاء
ج. شركاء إعادة البيع
د. مزودو الإنترنت
https://www.examtopics.com/discussions/amazon/view/151283-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تحديث تطبيق معالجة البيانات عبر الإنترنت الخاص بها من خلال تنفيذ خدمات قائمة على الحاويات تعمل لمدة 4 ساعات في المرة الواحدة. لا ترغب الشركة في توفير أو إدارة مثيلات الخادم. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Lambda
*ب. AWS Fargate
ج. Amazon EC2
د. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/148241-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي منظور في إطار عمل اعتماد السحابة AWS (AWS CAF) يركز على تنظيم جرد لمنتجات البيانات في كتالوج البيانات؟
أ. العمليات
*ب. الحوكمة
ج. الأعمال
د. المنصة
https://www.examtopics.com/discussions/amazon/view/144137-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة عبء عمل الإنتاج في AWS Cloud. تحتاج الشركة إلى اختيار واحدة من خطط دعم AWS. ما هي خطة دعم AWS التي ستلبي هذه المتطلبات بأقل تكلفة؟
أ. Developer
ب. Enterprise On-Ramp
ج. Enterprise
*د. Business
https://www.examtopics.com/discussions/amazon/view/144492-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى استخدام Amazon S3 لتخزين ملفات صوتية يبلغ حجم كل منها 5 ميغابايت. نادراً ما تصل الشركة إلى الملفات، ولكن يجب أن تكون الشركة قادرة على استرداد الملفات فوراً. ما هي فئة تخزين S3 التي ستلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. S3 Standard
*ب. S3 Standard-Infrequent Access (S3 Standard-IA)
ج. S3 Glacier Flexible Retrieval
د. S3 Glacier Deep Archive
https://www.examtopics.com/discussions/amazon/view/150492-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إعداد اتصال شبكة آمن من موقع محلي (on premises) إلى AWS Cloud في غضون أسبوع واحد. ما هو الحل الذي سيلبي هذه المتطلبات؟
أ. AWS Direct Connect
ب. Amazon VPC
*ج. AWS Site-to-Site VPN
د. موقع حافة (Edge location)
https://www.examtopics.com/discussions/amazon/view/145421-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مسؤول الامتثال في شركة مراجعة تقارير AWS Service Organization Control (SOC). ما هي خدمة أو ميزة AWS التي يجب على مسؤول الامتثال استخدامها لإكمال هذه المهمة؟
*أ. AWS Artifact
ب. AWS Concierge Support
ج. AWS Support
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/147642-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بتصميم أعباء العمل في AWS Cloud. تريد الشركة أن تؤدي أعباء العمل وظيفتها المقصودة بشكل صحيح ومتسق طوال دورة حياتها. أي ركيزة من ركائز إطار عمل AWS Well-Architected يمثل هذا الهدف؟
أ. التميز التشغيلي
ب. الأمان
*ج. الموثوقية
د. كفاءة الأداء
https://www.examtopics.com/discussions/amazon/view/147650-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS المستخدمة لتوفير بيانات اعتماد أمان اتحادية (federated) مؤقتة للوصول إلى موارد AWS؟
أ. Amazon GuardDuty
*ب. AWS Simple Token Service (AWS STS)
ج. AWS Secrets Manager
د. AWS Certificate Manager
https://www.examtopics.com/discussions/amazon/view/147651-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تحويل ملفات الفيديو والملفات الصوتية إلى تنسيق يمكن تشغيله على الهواتف الذكية. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. Amazon Comprehend
ب. Amazon Rekognition
*ج. Amazon Elastic Transcoder
د. Amazon Polly
https://www.examtopics.com/discussions/amazon/view/145422-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مطور إلى استخدام قالب موحد لإنشاء نسخ من البنية التحتية AWS لشركة ما لبيئات التطوير والاختبار والإنتاج. ما هي خدمة AWS التي يجب على المطور استخدامها لتلبية هذا المطلب؟
أ. AWS Cloud Map
*ب. AWS CloudFormation
ج. Amazon Cloud Front
د. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/151290-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكنها إنشاء اتصال شبكة خاص من موقع محلي (on premises) إلى AWS Cloud؟
أ. AWS Config
ب. Virtual Private Cloud (Amazon VPC)
*ج. AWS Direct Connect
د. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/147660-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: بموجب نموذج المسؤولية المشتركة AWS، أي من التالي يعتبر مسؤولية العميل؟
أ. تمزيق محركات الأقراص قبل مغادرتها مركز البيانات.
ب. منع العملاء من جمع الحزم (packets) أو حركة المرور على مستوى المشرف (hypervisor).
*ج. تصحيح (patch) نظام التشغيل الضيف بأحدث التصحيحات الأمنية.
د. الحفاظ على أنظمة الأمان التي توفر مراقبة مادية لمراكز البيانات.
https://www.examtopics.com/discussions/amazon/view/147661-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تستخدم تحويل الكلام إلى نص لمساعدة المستخدمين على إنشاء ملاحظات الاجتماع؟
أ. Amazon Polly
ب. Amazon Textract
ج. Amazon Rekognition
*د. Amazon Transcribe
https://www.examtopics.com/discussions/amazon/view/147662-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو أداة AWS التي توفر للمستخدمين واجهة رسومية يمكنهم استخدامها لإدارة خدمات AWS؟
أ. AWS Copilot
ب. AWS CLI
*ج. AWS Management Console
د. مجموعات أدوات تطوير البرامج AWS (SDKs)
https://www.examtopics.com/discussions/amazon/view/147663-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة عبء عمل سيعمل بشكل مستمر لمدة عام واحد. لا يمكن لعبء العمل تحمل انقطاعات الخدمة. ما هو خيار شراء Amazon EC2 الأكثر فعالية من حيث التكلفة؟
*أ. All Upfront Reserved Instances
ب. Partial Upfront Reserved Instances
ج. Dedicated Instances
د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/147664-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: نقلت شركة أنظمتها إلى AWS Cloud. تم تحسين حجم (rightsized) الأنظمة، ولم تكشف مراجعة الأمان عن أي مشكلات. يجب على الشركة التأكد من أن التطورات الإضافية والتكاملات والتغييرات ونمو استخدام النظام لا تعرض هذه البنية التحتية المحسنة لـ AWS للخطر. ما هي خدمة AWS التي يجب على الشركة استخدامها للإبلاغ عن التحسين والأمان المستمرين؟
*أ. AWS Trusted Advisor
ب. AWS Health Dashboard
ج. Amazon Connect
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/147665-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تتكامل مع خدمات AWS الأخرى لتوفير القدرة على تشفير البيانات غير النشطة (at rest)؟
*أ. AWS Key Management Service (AWS KMS)
ب. AWS Certificate Manager (ACM)
ج. AWS Identity and Access Management (IAM)
د. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/147666-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تتبع التكلفة والاستخدام الشهري لجميع مثيلات Amazon EC2 في بيئة AWS محددة. ما هي خدمة أو أداة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Cost Anomaly Detection
*ب. AWS Budgets
ج. AWS Compute Optimizer
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/147667-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تستخدم مواقع الحافة لتخزين المحتوى مؤقتاً (caching)؟
أ. Amazon Kinesis
ب. Amazon Simple Queue Service (Amazon SQS)
*ج. Amazon CloudFront
د. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/147673-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة الوصول بأمان إلى دلو Amazon S3 من مثيل Amazon EC2 دون الوصول إلى الإنترنت. ما الذي يجب على الشركة استخدامه لتحقيق هذا الهدف؟
أ. اتصال VPN
ب. بوابة إنترنت (Internet gateway)
*ج. نقطة نهاية VPC (VPC endpoint)
د. بوابة NAT (NAT gateway)
https://www.examtopics.com/discussions/amazon/view/147674-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمات AWS التي تعتبر بدون خادم (serverless)؟ (اختر اثنين)
*أ. AWS Fargate
ب. Amazon Managed Streaming for Apache Kafka
ج. Amazon EMR
*د. Amazon S3
هـ. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/147676-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تحسين العمليات والإجراءات باستمرار لتقديم قيمة الأعمال. أي ركيزة من ركائز إطار عمل AWS Well-Architected يمثل هذا الهدف؟
أ. كفاءة الأداء
*ب. التميز التشغيلي
ج. الموثوقية
د. الاستدامة
https://www.examtopics.com/discussions/amazon/view/146252-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يجب على الشركة استخدامها لتنظيم وتوصيف والبحث عن أعداد كبيرة من الصور؟
أ. Amazon Transcribe
*ب. Amazon Rekognition
ج. Amazon Aurora
د. Amazon QuickSight
https://www.examtopics.com/discussions/amazon/view/147678-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS المتاحة دائماً مجاناً للمستخدمين؟
أ. Amazon Athena
*ب. AWS Identity and Access Management (IAM)
ج. AWS Secrets Manager
د. Amazon ElastiCache
https://www.examtopics.com/discussions/amazon/view/147679-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تشغيل بعض أعباء العمل الخاصة بها محلياً (on premises) للامتثال للمبادئ التوجيهية التنظيمية. تريد الشركة استخدام AWS Cloud لتشغيل أعباء العمل غير المطلوبة أن تكون محلية. تريد الشركة أيضاً أن تكون قادرة على استخدام نفس استدعاءات API لأعباء العمل المحلية وأعباء العمل السحابية. ما هي خدمة أو ميزة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Dedicated Hosts
*ب. AWS Outposts
ج. مناطق التوفر (Availability Zones)
د. AWS Wavelength
https://www.examtopics.com/discussions/amazon/view/147680-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي حالة الاستخدام الموصى بها لـ Amazon EC2 On-Demand Instances؟
أ. عبء عمل ثابت الحالة (steady-state) يتطلب تكوين مثيل EC2 معين لفترة طويلة من الزمن
ب. عبء عمل يمكن مقاطعته لمشروع يتطلب أقل تكلفة ممكنة
*ج. عبء عمل لا يمكن التنبؤ به ولا يتطلب التزاماً طويل الأجل
د. عبء عمل من المتوقع أن يستمر لأكثر من عام واحد
https://www.examtopics.com/discussions/amazon/view/147681-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لاحظ مسؤول أنه تم حذف العديد من موارد AWS بالأمس. ما هي خدمة AWS التي ستساعد في تحديد السبب وتحديد المستخدم الذي قام بحذف الموارد؟
*أ. AWS CloudTrail
ب. Amazon Inspector
ج. Amazon GuardDuty
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/146253-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: في أي الحالات يجب على الشركة إنشاء مستخدم IAM بدلاً من دور IAM؟
أ. عندما يحتاج تطبيق يعمل على مثيلات Amazon EC2 إلى الوصول إلى خدمات AWS الأخرى
*ب. عندما تقوم الشركة بإنشاء بيانات اعتماد وصول AWS للأفراد
ج. عندما تقوم الشركة بإنشاء تطبيق يعمل على هاتف محمول يقوم بتقديم طلبات إلى AWS
د. عندما تحتاج الشركة إلى إضافة مستخدمين إلى مجموعات IAM
هـ. عندما يتم مصادقة المستخدمين في شبكة الشركة ويريدون استخدام AWS دون الحاجة إلى تسجيل الدخول مرة ثانية
https://www.examtopics.com/discussions/amazon/view/147684-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستضيف شركة تطبيق ويب على AWS. قامت الشركة بتحسين توفر تطبيقها من خلال توفير مثيلات Amazon EC2 متعددة. تريد الشركة توزيع حركة المرور الخاصة بها عبر مثيلات EC2 مع توفير نقطة اتصال واحدة لعملاء الويب. ما هي خدمة AWS التي يمكنها توزيع حركة المرور إلى مثيلات EC2 متعددة كأهداف؟
أ. نقاط نهاية VPC (VPC endpoints)
*ب. Application Load Balancer
ج. بوابة NAT (NAT gateway)
د. بوابة إنترنت (Internet gateway)
https://www.examtopics.com/discussions/amazon/view/146255-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل خادم Windows Server 2022 افتراضي يعمل حالياً في مركز البيانات الخاص بها إلى AWS. تريد الشركة تحويل الخادم الحالي تلقائياً ليعمل مباشرة على البنية التحتية لـ AWS بدلاً من الأجهزة الافتراضية. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS DataSync
ب. AWS Database Migration Service (AWS DMS)
ج. AWS Application Discovery Service
*د. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/146257-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل تطبيقاتها القائمة على الخادم إلى AWS Cloud. تريد الشركة تحديد التكلفة الإجمالية للملكية لموارد الحوسبة الخاصة بها التي سيتم استضافتها على AWS Cloud. ما هي مجموعة خدمات أو أدوات AWS التي ستلبي هذه المتطلبات؟ (اختر اثنين)
*أ. AWS Pricing Calculator
*ب. Migration Evaluator
ج. AWS Support Center
د. AWS Application Discovery Service
هـ. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/147718-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة بحيرات بيانات (data lakes) مصممة لأعباء عمل الحوسبة عالية الأداء (HPC). ما هو نوع مثيل Amazon EC2 الذي يجب على الشركة استخدامه لتلبية هذه المتطلبات؟
أ. مثيلات للأغراض العامة
*ب. مثيلات محسّنة للحوسبة
ج. مثيلات محسّنة للذاكرة
د. مثيلات محسّنة للتخزين
https://www.examtopics.com/discussions/amazon/view/147719-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة للنقل إلى AWS Cloud. تقوم الشركة بإجراء تحول تنظيمي وتريد أن تصبح أكثر استجابة لاستفسارات العملاء وملاحظاتهم. ما هي المهمة التي يجب على الشركة القيام بها لتلبية هذه المتطلبات، وفقاً لإطار عمل اعتماد السحابة AWS (AWS CAF)؟ (اختر اثنين)
*أ. إعادة تنظيم الفرق للتركيز على المنتجات وتدفقات القيمة.
ب. إنشاء مقترحات قيمة جديدة مع منتجات وخدمات جديدة.
*ج. استخدام أساليب رشيقة (agile) للتكرار والتطور بسرعة.
د. استخدام منصة بيانات وتحليلات جديدة لإنشاء رؤى قابلة للتنفيذ.
هـ. نقل وتحديث البنية التحتية القديمة.
https://www.examtopics.com/discussions/amazon/view/147721-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة بناء وتدريب ونشر نماذج التعلم الآلي (ML). ما هي خدمة AWS التي يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. Amazon Personalize
ب. Amazon Comprehend
ج. Amazon Forecast
*د. Amazon SageMaker
https://www.examtopics.com/discussions/amazon/view/147732-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو أداة AWS التي تقدم توصيات لمساعدة المستخدمين في الحصول على مثيلات Amazon EC2 محسّنة الحجم (rightsized) بناءً على بيانات استخدام عبء العمل التاريخية؟
أ. AWS Pricing Calculator
*ب. AWS Compute Optimizer
ج. AWS App Runner
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/147733-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تشغيل تطبيق على مثيلات Amazon EC2 دون انقطاع. ما هو خيار شراء مثيل EC2 الذي سيلبي هذا المطلب بأكبر قدر من الفعالية من حيث التكلفة؟
أ. Standard Reserved Instances
ب. Convertible Reserved Instances
*ج. On-Demand Instances
د. Spot Instances
https://www.examtopics.com/discussions/amazon/view/147735-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مبدأ تصميم يتوافق مع ركيزة كفاءة الأداء في إطار عمل AWS Well-Architected؟
*أ. استخدام البنى بدون خادم (serverless architectures)
ب. التوسع الأفقي
ج. قياس تكلفة أعباء العمل
د. استخدام الخدمات المُدارة
https://www.examtopics.com/discussions/amazon/view/145417-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي نوع من عبء العمل يجب على الشركة تشغيله على Amazon EC2 Spot Instances؟
أ. عبء عمل ثابت الحالة (steady-state) يتطلب تكوين مثيل EC2 معين لفترة طويلة من الزمن
*ب. عبء عمل يمكن مقاطعته ويمكنه التحكم في التكاليف
ج. عبء عمل ثابت الحالة لا يتطلب التزاماً طويل الأجل
د. عبء عمل لا يمكن مقاطعته ويمكنه التحكم في التكاليف
https://www.examtopics.com/discussions/amazon/view/147739-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة حسابات AWS متعددة. تحتاج الشركة إلى تلقي فاتورة موحدة من AWS ويجب عليها إدارة الأمان والامتثال مركزياً. ما هي خدمة أو ميزة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. تقرير التكلفة والاستخدام AWS (AWS Cost and Usage Report)
*ب. AWS Organizations
ج. AWS Config
د. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/147740-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي حالة الاستخدام التي تعتبر On-Demand Instances الأكثر فعالية من حيث التكلفة؟
أ. تحويل الفيديو المكثف حسابياً والذي يمكن إعادة تشغيله إذا لزم الأمر
*ب. مثيل قيد الاستخدام المستمر لمدة شهر واحد لإجراء اختبارات ضمان الجودة
ج. مثيل يقوم بتشغيل خادم ويب سيعمل لمدة عام واحد
د. مثيل يقوم بتشغيل قاعدة بيانات ستعمل لمدة 3 سنوات
https://www.examtopics.com/discussions/amazon/view/146791-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو عرض AWS الذي يمكنه تحليل بيئة AWS لشركة ما لاكتشاف الثغرات الأمنية على مثيلات Amazon EC2؟
*أ. Amazon Inspector
ب. Amazon Macie
ج. AWS Shield Standard
د. مجموعات الأمان (Security groups)
https://www.examtopics.com/discussions/amazon/view/147742-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لتعيين موظفين جدد سيعملون عن بُعد. تحتاج الشركة إلى إعداد أجهزة سطح مكتب Windows افتراضية لإنشاء بيئة عمل للموظفين الجدد. يجب أن يتمكن الموظفون من الوصول إلى بيئة العمل من أي مكان وباستخدام جهاز الكمبيوتر الخاص بهم أو متصفح الويب. ما هي خدمة أو ميزة AWS التي ستلبي هذه المتطلبات؟
أ. Dedicated Hosts
ب. AWS Global Accelerator
*ج. Amazon Workspaces
د. Amazon CloudFront
https://www.examtopics.com/discussions/amazon/view/147743-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تصور وإدارة تكاليف واستخدام AWS Cloud لفترة زمنية محددة. ما هي خدمة أو ميزة AWS التي ستلبي هذه المتطلبات؟
*أ. Cost Explorer
ب. الفوترة الموحدة (Consolidated billing)
ج. AWS Organizations
د. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/146263-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تدعم محركات قواعد بيانات MySQL؟
أ. Amazon Dynamo DВ
*ب. Amazon RDS
ج. Amazon DocumentDB (مع التوافق مع MongoDB)
د. Amazon ElastiCache
https://www.examtopics.com/discussions/amazon/view/147744-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بإطلاق تطبيق حاسم للأعمال. قبل الإطلاق، تحتاج الشركة إلى مساعدة في التخطيط الاستراتيجي من AWS. أثناء الإطلاق، تحتاج الشركة إلى إدارة أحداث البنية التحتية AWS ودعم في الوقت الفعلي. ما الذي يجب على الشركة فعله لتلبية هذه المتطلبات؟
أ. الوصول إلى AWS Trusted Advisor
ب. الاتصال بشبكة شركاء AWS (APN)
*ج. الاشتراك في AWS Enterprise Support
د. الاتصال بـ AWS Professional Services
https://www.examtopics.com/discussions/amazon/view/147746-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تحسين إنتاجية الموظفين من خلال توفير طريقة للموظفين للبحث عن الأسئلة واسترداد إجابات محددة. تريد الشركة استخدام واجهة بحث ذكية واحدة. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon Connect
*ب. Amazon Kendra
ج. Amazon Lex
د. Amazon Comprehend
https://www.examtopics.com/discussions/amazon/view/147747-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة حلاً لـ Amazon S3 يوفر الوصول إلى تخزين الكائنات خلال أجزاء من الثانية (single-digit milliseconds). ما هو الحل الذي سيلبي هذه المتطلبات؟
*أ. S3 Express One Zone
ب. S3 Standard
ج. S3 Glacier Flexible Retrieval
د. S3 Glacier Instant Retrieval
https://www.examtopics.com/discussions/amazon/view/145956-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة عبء عمل Amazon EC2 غير قابل للانقطاع على AWS 24 ساعة في اليوم، 7 أيام في الأسبوع. ستحتاج الشركة إلى نفس عائلة المثيل ونوع المثيل لتشغيل عبء العمل للأشهر الـ 12 القادمة. ما هي مجموعة خيارات الشراء التي يجب على الشركة اختيارها لتحسين التكاليف إلى أقصى حد؟ (اختر اثنين)
*أ. Standard Reserved Instance
ب. Convertible Reserved Instance
ج. Compute Savings Plan
د. Spot Instance
*هـ. الدفع المسبق بالكامل (All Upfront payment)
https://www.examtopics.com/discussions/amazon/view/147111-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل كود تطبيقها دون الحاجة إلى توفير وإدارة الخوادم. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. AWS Glue
*ب. AWS Lambda
ج. AWS CodeDeploy
د. Amazon CodeGuru
https://www.examtopics.com/discussions/amazon/view/147748-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة للنقل إلى AWS Cloud. تحتاج الشركة إلى فهم الاستخدام والتكوين المحلي (on-premises) الحالي. لا ترغب الشركة في نسخ أعباء العمل الخاصة بها إلى AWS، بعد. ما هي خدمة أو أداة AWS التي ستلبي هذه المتطلبات؟
*أ. AWS Application Discovery Service
ب. AWS Application Migration Service
ج. Cloud Migration Factory
د. AWS Transfer Family
https://www.examtopics.com/discussions/amazon/view/147185-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لإطلاق موقع ويب للتجارة الإلكترونية يحتوي على العديد من الصور لكتالوج المنتجات. تريد الشركة إبقاء تكلفة تشغيل موقع الويب ضمن ميزانية محددة. ما هي خدمة أو أداة AWS التي يجب على الشركة استخدامها لمراقبة التكاليف المستمرة لموقع الويب؟
*أ. AWS Cost Explorer
ب. AWS SDKs
ج. EC2 Image Builder
د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/147751-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة بنشر العديد من التطبيقات العامة خلف Application Load Balancers. تريد الشركة تحسين أداء التطبيقات. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
*أ. AWS Global Accelerator
ب. Amazon Connect
ج. Amazon ElastiCache
د. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/147752-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة تطبيق محلي (on-premises). أوقات معالجة التطبيق أقل من 5 دقائق ويتم استدعاؤه فقط بضع مرات كل يوم. تريد الشركة نقل التطبيق إلى AWS Cloud. ما هي خدمة AWS التي ستدعم هذا التطبيق بأكبر قدر من الفعالية من حيث التكلفة؟
أ. Amazon Elastic Container Service (Amazon ECS)
*ب. AWS Lambda
ج. Amazon Elastic Kubernetes Service (Amazon EKS)
د. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/147186-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة توحيد مراكز الاتصال الخاصة بها لتحسين تجربة الصوت والدردشة مع العملاء مع وكلاء مركز الاتصال. ما هي خدمة أو أداة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon Simple Notification Service (Amazon SNS)
ب. AWS Support Center
ج. Amazon Cognito
*د. Amazon Connect
https://www.examtopics.com/discussions/amazon/view/147754-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى توفير مثيلات Amazon EC2 غير قابلة للانقطاع، عند الحاجة، والدفع مقابل سعة الحوسبة بالثانية. ما هو خيار شراء مثيل EC2 الذي سيلبي هذه المتطلبات؟
أ. Reserved Instances
ب. Spot Instances
*ج. On-Demand Instances
د. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/147755-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكنها نقل مثيلات Amazon EC2 من منطقة AWS إلى أخرى؟
*أ. AWS Application Migration Service
ب. AWS Database Migration Service (AWS DMS)
ج. AWS DataSync
د. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/147187-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى منع هجمات SQL injection. ما هي خدمة أو ميزة AWS التي توفر هذه الوظيفة؟
*أ. AWS WAF
ب. قوائم ACL للشبكة (Network ACLs)
ج. مجموعات الأمان (Security groups)
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/147756-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل تطبيقها على مثيلات Amazon EC2. تحتاج الشركة إلى الاحتفاظ بالتطبيق محلياً (on-premises) لتلبية متطلب امتثال. ما هو عرض AWS الذي سيلبي هذه المتطلبات؟
أ. Dedicated Instances
ب. Amazon CloudFront
ج. AWS Fargate
*د. AWS Outposts
https://www.examtopics.com/discussions/amazon/view/147757-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة ربط خدمات AWS المدعومة وشبكات VPC الخاصة بها. لا ترغب الشركة في كشف حركة المرور الداخلية للإنترنت العام. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon Inspector
*ب. AWS PrivateLink
ج. Amazon Connect
د. AWS Internet Gateway
https://www.examtopics.com/discussions/amazon/view/147758-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكنها إدارة أذونات موارد AWS باستخدام السياسات؟
أ. Amazon Inspector
ب. Amazon Detective
*ج. AWS Identity and Access Management (IAM)
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/147759-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تشغيل جزء من عبء العمل الخاص بها في AWS Cloud. تحتاج الشركة إلى الاحتفاظ بجزء من عبء العمل في مركز البيانات المحلي (on-site) الخاص بها لأسباب تتعلق بالامتثال. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWSConfig
*ب. AWS Outposts
ج. Amazon Lightsail
د. Amazon Connect
https://www.examtopics.com/discussions/amazon/view/147760-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نشر تطبيق يخزن البيانات في قاعدة بيانات علائقية. تريد الشركة أن تتم مهام قاعدة البيانات، مثل النسخ الاحتياطية التلقائية ولقطات قاعدة البيانات، بواسطة AWS. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon DocumentDB
*ب. Amazon RDS
ج. Amazon Elastic Block Store (Amazon EBS)
د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/147188-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: شركة تدير خوادم محلية (on-premises) تقرر بدء خط جديد من الأعمال. تحدد الشركة أن هناك حاجة إلى خوادم إضافية لأعباء العمل الجديدة. ما هي ميزة الحوسبة السحابية التي يمكن أن تساعد الشركة في توفير بنية تحتية إضافية في أسرع وقت ممكن؟
أ. الاستفادة من وفورات الحجم الهائلة
*ب. زيادة السرعة والمرونة
ج. استبدال النفقات الثابتة بنفقات متغيرة
د. الانتشار عالمياً في دقائق
https://www.examtopics.com/discussions/amazon/view/147761-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي ركيزة من ركائز إطار عمل AWS Well-Architected تتوافق مع القدرة على إجراء تغييرات متكررة وصغيرة وقابلة للعكس على بنية AWS Cloud التحتية؟
أ. الأمان
ب. تحسين التكلفة
*ج. التميز التشغيلي
د. كفاءة الأداء
https://www.examtopics.com/discussions/amazon/view/147524-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مبدأ تصميم AWS يؤكد على تقليل الاعتماد المتبادل بين مكونات التطبيق؟
أ. قابلية التوسع
*ب. الاقتران الضعيف (Loose coupling)
ج. الأتمتة
د. التخزين المؤقت (Caching)
https://www.examtopics.com/discussions/amazon/view/141202-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة تطبيق خادم ويب للتقارير على مثيلات Amazon EC2. يعمل التطبيق مرة واحدة كل أسبوع ومرة أخرى في نهاية الشهر. يمكن إيقاف تشغيل مثيلات EC2 عندما لا تكون قيد الاستخدام. ما هو نموذج الفوترة الأكثر فعالية من حيث التكلفة لحالة الاستخدام هذه؟
أ. Standard Reserved Instances
ب. Convertible Reserved Instances
ج. On-Demand Capacity Reservations
*د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/147525-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بنقل بيئات التطوير والاختبار الخاصة بها إلى AWS لزيادة المرونة وتقليل التكلفة. نظراً لأن هذه ليست أعباء عمل إنتاجية وأن الخوادم غير مستغلة بالكامل، فإن عدم التوفر العرضي مقبول. ما هو نموذج تسعير Amazon EC2 الأكثر فعالية من حيث التكلفة الذي سيلبي هذه المتطلبات؟
أ. Reserved Instances
ب. On-Demand Instances
*ج. Spot Instances
د. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/144148-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تنشر شركة تطبيقها على مثيلات Amazon EC2. يواجه التطبيق أحياناً زيادات مفاجئة في الطلب. تريد الشركة التأكد من أن تطبيقها يمكنه الاستجابة للتغيرات في الطلب بأقل تكلفة ممكنة. ما هي خدمة أو مفهوم AWS الذي سيلبي هذه المتطلبات؟
*أ. AWS Auto Scaling
ب. AWS Compute Optimizer
ج. AWS Cost Explorer
د. إطار عمل AWS Well-Architected
https://www.examtopics.com/discussions/amazon/view/151213-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تنظيم مستخدميها بحيث يمكنها منح الأذونات للمستخدمين كمجموعة. ما هي خدمة أو أداة AWS التي يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. مجموعات الأمان (Security groups)
*ب. AWS Identity and Access Management (IAM)
ج. مجموعات الموارد (Resource groups)
د. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/151214-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تحديد من قام بالوصول إلى خدمة AWS وما هو الإجراء الذي تم تنفيذه لفترة زمنية معينة. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. Amazon CloudWatch
*ب. AWS CloudTrail
ج. AWS Security Hub
د. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/147526-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل عبء عمل مكثف لوحدة المعالجة المركزية عبر مثيلات Amazon EC2 متعددة. ما هو نوع مثيل EC2 الذي يجب على الشركة استخدامه لتلبية هذا المطلب؟
أ. مثيلات للأغراض العامة
*ب. مثيلات محسّنة للحوسبة
ج. مثيلات محسّنة للذاكرة
د. مثيلات محسّنة للتخزين
https://www.examtopics.com/discussions/amazon/view/147610-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو الإجراء الذي يجب على الشركة اتخاذه لتحسين الأمان في حساب AWS الخاص بها؟
*أ. طلب المصادقة متعددة العوامل (MFA) للمستخدمين المميزين.
ب. إزالة حساب المستخدم الجذر.
ج. إنشاء مفتاح وصول للمستخدم الجذر لحساب AWS.
د. إنشاء مفتاح وصول لكل مستخدم مميز.
https://www.examtopics.com/discussions/amazon/view/151216-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تخزين ملفاتها في AWS Cloud. يحتاج المستخدمون إلى أن يكونوا قادرين على تنزيل هذه الملفات مباشرة باستخدام عنوان URL عام. ما هي خدمة أو ميزة AWS التي ستلبي هذا المطلب؟
أ. Amazon Redshift
ب. Amazon Elastic Block Store (Amazon EBS)
ج. Amazon Elastic File System (Amazon EFS)
*د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/142849-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر من الفوائد الاقتصادية لاستخدام AWS Cloud؟ (اختر اثنين)
*أ. التسعير على أساس الاستهلاك (Consumption-based pricing)
ب. التراخيص الدائمة
*ج. وفورات الحجم
د. AWS Enterprise Support بدون تكلفة إضافية
هـ. نموذج إحضار الأجهزة الخاصة بك (Bring-your-own-hardware)
https://www.examtopics.com/discussions/amazon/view/147612-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تخزين بيانات نادراً ما تستخدم لأرشفة البيانات والنسخ الاحتياطية طويلة الأجل. ما هي خدمة أو فئة تخزين AWS التي ستلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. Amazon FSx for Lustre
ب. Amazon Elastic Block Store (Amazon EBS)
ج. Amazon Elastic File System (Amazon EFS)
*د. Amazon S3 Glacier Flexible Retrieval
https://www.examtopics.com/discussions/amazon/view/148583-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى إنشاء ونشر لوحات معلومات تفاعلية لذكاء الأعمال. تتطلب لوحات المعلومات رؤى مدعومة بالتعلم الآلي. ما هي خدمة أو أداة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Glue Studio
*ب. Amazon QuickSight
ج. Amazon Redshift
د. Amazon Athena
https://www.examtopics.com/discussions/amazon/view/151218-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام AWS. لدى الشركة متطلبات صارمة بشأن الوصول منخفض زمن الوصول إلى الأنظمة المحلية (on-premises) وموقع البيانات (data residency). ما هي خدمة AWS التي يجب على الشركة استخدامها لتصميم حل يلبي هذه المتطلبات؟
أ. AWS Wavelength
ب. AWS Transit Gateway
ج. AWS Ground Station
*د. AWS Outposts
https://www.examtopics.com/discussions/amazon/view/144123-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى القدرة على الحصول على الموارد عند الحاجة إليها. تحتاج الشركة أيضاً إلى القدرة على تحرير الموارد عندما لا تكون هناك حاجة إليها. ما هو مفهوم AWS الذي يمثل أهداف الشركة؟
أ. قابلية التوسع
ب. الاستدامة
*ج. المرونة (Elasticity)
د. التميز التشغيلي
https://www.examtopics.com/discussions/amazon/view/151219-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام مثيلات Amazon EC2 لعبء عمل إنتاجي ثابت سيعمل لمدة عام واحد. ما هو خيار شراء المثيل الذي يلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. Dedicated Hosts
*ب. Reserved Instances
ج. On-Demand Instances
د. Spot Instances
https://www.examtopics.com/discussions/amazon/view/151221-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تسجيل الدخول بأمان إلى مثيلات Linux Amazon EC2. كيف يمكن للشركة تحقيق هذا الهدف؟
*أ. استخدام مفاتيح SSH.
ب. استخدام VPN.
ج. استخدام التشفير من طرف إلى طرف.
د. استخدام Amazon Route 53.
https://www.examtopics.com/discussions/amazon/view/148514-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام خدمة حوسبة بدون خادم (serverless) لتطبيق ما. ما هي خدمة AWS التي ستلبي هذا المطلب؟
*أ. AWS Lambda
ب. AWS CloudFormation
ج. AWS Elastic Beanstalk
د. Elastic Load Balancing
https://www.examtopics.com/discussions/amazon/view/148584-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة حلاً من شأنه أن يعدل تلقائياً عدد مثيلات Amazon EC2 المستخدمة بناءً على الحمل الحالي. ما هو عرض AWS الذي سيلبي هذه المتطلبات؟
أ. Dedicated Hosts
ب. مجموعات التنسيب (Placement groups)
*ج. مجموعات Auto Scaling (Auto Scaling groups)
د. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/148055-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة ببناء بنية AWS التحتية لتوصيل خلاصات بيانات في الوقت الفعلي من مركز بيانات محلي (on-premises) إلى تطبيق يعمل على AWS. تحتاج الشركة إلى اتصال شبكة ثابت مع الحد الأدنى من زمن الوصول. ما الذي يجب على الشركة استخدامه لربط التطبيق ومركز البيانات لتلبية هذه المتطلبات؟
*أ. AWS Direct Connect
ب. الإنترنت العام
ج. AWS VPN
د. Amazon Connect
https://www.examtopics.com/discussions/amazon/view/151222-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمات AWS التي يمكنها استضافة قواعد بيانات PostgreSQL؟ (اختر اثنين)
أ. Amazon S3
*ب. Amazon Aurora
*ج. Amazon EC2
د. Amazon OpenSearch Service
هـ. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/148515-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة أن تعمل مثيلات Amazon EC2 الخاصة بها في بيئة عالية التوفر، حتى في حالة وقوع كارثة طبيعية في منطقة جغرافية معينة. ما هو الحل الذي يحقق هذا الهدف؟
*أ. استخدام مثيلات EC2 في مناطق AWS متعددة.
ب. استخدام مثيلات EC2 في مواقع حافة متعددة.
ج. استخدام مثيلات EC2 في نفس منطقة التوفر ولكن في مناطق AWS مختلفة.
د. استخدام Amazon CloudFront مع تكوين مثيلات EC2 كمصدر.
https://www.examtopics.com/discussions/amazon/view/143583-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تسمح بمشاركة الملفات بين مثيلات Amazon EC2 متعددة؟
أ. AWS Direct Connect
ب. AWS Snowball Edge
ج. AWS Backup
*د. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/148585-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى إدارة عمليات تسجيل دخول متعددة عبر حسابات AWS داخل نفس المؤسسة في AWS Organizations. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. Amazon VPC
ب. Amazon GuardDuty
ج. Amazon Cognito
*د. AWS IAM Identity Center
https://www.examtopics.com/discussions/amazon/view/148387-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة Amazon WorkSpaces. ما هي المهمة التي تقع على عاتق AWS، وفقاً لنموذج المسؤولية المشتركة AWS؟
أ. إعداد المصادقة متعددة العوامل (MFA) لكل حساب مستخدم WorkSpaces.
*ب. ضمان السلامة البيئية والأمن للبنية التحتية AWS التي تستضيف WorkSpaces.
ج. توفير الأمان لحسابات مستخدمي WorkSpaces من خلال AWS Identity and Access Management (IAM).
د. تكوين AWS CloudTrail لتسجيل استدعاءات API ونشاط المستخدم.
https://www.examtopics.com/discussions/amazon/view/151226-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي مجموعة خدمات AWS التي يمكن استخدامها لنقل قاعدة بيانات علائقية تجارية إلى قاعدة بيانات مفتوحة المصدر مُدارة من Amazon؟ (اختر اثنين)
*أ. AWS Database Migration Service (AWS DMS)
ب. AWS software development kits (SDKs)
*ج. AWS Schema Conversion Tool
د. AWS Systems Manager
هـ. Amazon EMR
https://www.examtopics.com/discussions/amazon/view/151228-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تتيح للمستخدمين وصولاً ذاتياً عند الطلب إلى تقارير مراقبة امتثال AWS؟
أ. AWS Config
ب. Amazon GuardDuty
ج. AWS Trusted Advisor
*د. AWS Artifact
https://www.examtopics.com/discussions/amazon/view/151229-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر من توصيات أفضل ممارسات AWS لاستخدام AWS Identity and Access Management (IAM)؟ (اختر اثنين)
أ. استخدام المستخدم الجذر لحساب AWS للوصول اليومي.
ب. استخدام مفاتيح الوصول والمفاتيح السرية للوصول على Amazon EC2.
*ج. تدوير بيانات الاعتماد على أساس منتظم.
د. إنشاء مجموعة مشتركة من مفاتيح الوصول لمسؤولي النظام.
*هـ. تكوين المصادقة متعددة العوامل (MFA).
https://www.examtopics.com/discussions/amazon/view/151230-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل استعلام رسوم بيانية (graph query) يوفر أسماء مستخدمي بطاقات الائتمان وعناوينهم ومعاملاتهم. تريد الشركة أن يُظهر الرسم البياني ما إذا كانت الأسماء والعناوين والمعاملات تشير إلى احتمال وجود احتيال. ما هي خدمة قاعدة بيانات AWS التي ستلبي هذه المتطلبات؟
أ. Amazon DocumentDB (مع التوافق مع MongoDB)
ب. Amazon Timestream
ج. Amazon DynamoDB
*د. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/144181-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي توفر قدرة التعلم الآلي لاكتشاف وتحليل المحتوى في الصور ومقاطع الفيديو؟
أ. Amazon Connect
ب. Amazon Lightsail
ج. Amazon Personalize
*د. Amazon Rekognition
https://www.examtopics.com/discussions/amazon/view/151231-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تتيح للمستخدمين القدرة على نشر تكوينات بنية تحتية عالية التكرار؟
*أ. AWS CloudFormation
ب. AWS CodeDeploy
ج. AWS CodeBuild
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/148520-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تقديم خدمة عملاء باستخدام مكالمات صوتية وميزات الدردشة عبر الويب. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon Aurora
*ب. Amazon Connect
ج. Amazon WorkSpaces
د. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/147613-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS المصممة لمساعدة المستخدمين على التعامل مع كميات كبيرة من البيانات في بيئة مستودع بيانات (data warehouse)؟
أ. Amazon RDS
ب. Amazon DynamoDB
*ج. Amazon Redshift
د. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/144183-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة ببناء تطبيق ويب باستخدام AWS. ما هي خدمة AWS التي ستساعد في منع هجمات DDoS على طبقة الشبكة ضد تطبيق الويب؟
أ. AWS WAF
ب. AWS Firewall Manager
ج. Amazon GuardDuty
*د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/147614-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر من مزايا الانتقال إلى AWS Cloud؟ (اختر اثنين)
أ. يمكن للمستخدمين تنفيذ جميع خدمات AWS في ثوانٍ.
ب. تتحمل AWS جميع مسؤوليات أمان البنية التحتية والتطبيقات.
*ج. يتمتع المستخدمون بزيادة في السرعة والمرونة.
*د. يستفيد المستخدمون من وفورات الحجم الهائلة.
هـ. يمكن للمستخدمين نقل الأجهزة من مركز البيانات الخاص بهم إلى AWS Cloud.
https://www.examtopics.com/discussions/amazon/view/175890-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة الحوسبة AWS التي تتيح للمستخدمين القدرة على تشغيل الحاويات بشكل آمن وموثوق على نطاق واسع؟
*أ. Amazon Elastic Container Service (Amazon ECS)
ب. Amazon Aurora
ج. Amazon Athena
د. Amazon Polly
https://www.examtopics.com/discussions/amazon/view/169698-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة تطبيقاً على AWS يقوم بمهام مجمعة (batch jobs). التطبيق متسامح مع الأخطاء ويمكنه التعامل مع الانقطاعات. تريد الشركة تحسين التكلفة لتشغيل التطبيق. ما هو عرض AWS الذي سيلبي هذه المتطلبات؟
أ. Amazon Macie
ب. Amazon Neptune
*ج. Amazon EC2 Spot Instances
د. Amazon EC2 On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/151257-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي يمكن استخدامها لإرسال تنبيهات عند استدعاء تنبيه Amazon CloudWatch محدد؟
أ. AWS CloudTrail
*ب. Amazon Simple Notification Service (Amazon SNS)
ج. Amazon Simple Queue Service (Amazon SQS)
د. Amazon EventBridge
https://www.examtopics.com/discussions/amazon/view/151258-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد ممارس سحابي استخدام خدمة DNS عالية التوفر وقابلة للتوسع لعبء عمل AWS الخاص به. ما هي خدمة AWS التي ستلبي هذا المطلب؟
*أ. Amazon Route 53
ب. Amazon Lightsail
ج. AWS Amplify Hosting
د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/151259-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تتعلم شركة عن مسؤولياتها المتعلقة بإدارة مثيلات Amazon EC2. ما هي المهام المتعلقة بمثيلات EC2 التي تقع على عاتق الشركة، وفقاً لنموذج المسؤولية المشتركة AWS؟ (اختر اثنين)
أ. تثبيت وتصحيح (patch) برنامج المشرف (hypervisor) على الجهاز.
*ب. تصحيح (patch) نظام التشغيل الضيف.
*ج. تشفير البيانات غير النشطة (at rest) على التخزين المرتبط.
د. تثبيت الأجهزة المادية والكابلات.
هـ. توفير الأمان المادي لمثيلات EC2.
https://www.examtopics.com/discussions/amazon/view/151260-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لنقل تطبيق متجانس (monolithic) إلى AWS. تريد الشركة تحديث التطبيق عن طريق تقسيمه إلى خدمات مصغرة (microservices). ستنشر الشركة الخدمات المصغرة على AWS. ما هي استراتيجية النقل التي يجب على الشركة استخدامها؟
أ. إعادة الاستضافة (Rehost)
ب. إعادة الشراء (Repurchase)
ج. إعادة التأسيس (Replatform)
*د. إعادة البناء (Refactor)
https://www.examtopics.com/discussions/amazon/view/151154-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مستخدم استدعاء دالة AWS Lambda عندما يدخل مثيل Amazon EC2 في حالة "الإيقاف" (stopping). ما هي خدمة AWS المناسبة لحالة الاستخدام هذه؟
*أ. Amazon EventBridge
ب. AWS Config
ج. Amazon Simple Notification Service (Amazon SNS)
د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/143585-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي تدعم الحوكمة والامتثال وتدقيق المخاطر لحسابات AWS؟
أ. المصادقة متعددة العوامل (MFA)
ب. AWS Lambda
ج. Amazon Simple Notification Service (Amazon SNS)
*د. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/148074-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو مبدأ تصميم AWS Cloud الذي تطبقه شركة عندما تقوم بتنفيذ AWS CloudTrail؟
*أ. تفعيل إمكانية التتبع (Activate traceability).
ب. استخدام بنى حوسبة بدون خادم (serverless).
ج. تنفيذ العمليات كرمز.
د. الانتشار عالمياً في دقائق.
https://www.examtopics.com/discussions/amazon/view/147619-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة للنقل إلى AWS Cloud. تقوم الشركة بإجراء تحول تنظيمي وتريد أن تصبح أكثر استجابة لاستفسارات العملاء وملاحظاتهم. ما هي المهمة التي يجب على الشركة القيام بها لتلبية هذه المتطلبات، وفقاً لإطار عمل اعتماد السحابة AWS (AWS CAF)؟
*أ. إعادة تنظيم الفرق للتركيز على المنتجات وتدفقات القيمة.
ب. إنشاء مقترحات قيمة جديدة مع منتجات وخدمات جديدة.
ج. استخدام منصة بيانات وتحليلات جديدة لإنشاء رؤى قابلة للتنفيذ.
د. نقل وتحديث البنية التحتية القديمة.
https://www.examtopics.com/discussions/amazon/view/148521-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تحسين حجم (rightsize) مثيلات Amazon EC2 الخاصة بها. ما هو تغيير التكوين الذي سيلبي هذا المطلب بأقل جهد تشغيلي؟
أ. إضافة مثيلات EC2 في منطقة توفر أخرى.
*ب. تغيير حجم ونوع مثيلات EC2 بناءً على الاستخدام.
ج. تحويل طريقة الدفع من On-Demand إلى Savings Plans.
د. إعادة توفير مثيلات EC2 بنوع مثيل أكبر.
https://www.examtopics.com/discussions/amazon/view/147620-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تدعم وظيفة تسجيل المستخدم والمصادقة على تطبيقات الجوال والويب؟
*أ. Amazon Cognito
ب. AWS Config
ج. Amazon GuardDuty
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/148581-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي فائدة AWS Cloud التي تساعد الشركات على تحقيق تكاليف استخدام أقل بسبب الاستخدام الإجمالي لجميع مستخدمي AWS؟
أ. لا حاجة لتخمين السعة
ب. القدرة على الانتشار عالمياً في دقائق
*ج. وفورات الحجم
د. زيادة السرعة والمرونة
https://www.examtopics.com/discussions/amazon/view/151155-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهمة التي تقع على عاتق العميل، وفقاً لنموذج المسؤولية المشتركة AWS؟
أ. تصحيح (patch) نظام تشغيل Amazon DynamoDB.
ب. تأمين مواقع Amazon CloudFront الحافة من خلال السماح بالوصول المادي وفقاً لمبدأ الامتياز الأقل.
ج. حماية الأجهزة التي تشغل خدمات AWS.
*د. استخدام AWS Identity and Access Management (IAM) وفقاً لمبدأ الامتياز الأقل.
https://www.examtopics.com/discussions/amazon/view/151261-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل جميع بنيتها التحتية المحلية (on-premises) إلى AWS Cloud. قبل النقل، تريد الشركة تقدير التكاليف لتشغيل بنيتها التحتية الحالية كما هي. ما هي خدمة أو مبدأ AWS الذي يجب على الشركة استخدامه لتلبية هذا المطلب؟
*أ. AWS Pricing Calculator
ب. إطار عمل AWS Well-Architected
ج. نموذج المسؤولية المشتركة AWS
د. إطار عمل اعتماد السحابة AWS (AWS CAF)
https://www.examtopics.com/discussions/amazon/view/151262-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تدعم قدرة الشركة على التعامل مع البنية التحتية كرمز (infrastructure as code)؟
أ. AWS CodeDeploy
ب. AWS Elastic Beanstalk
ج. Amazon API Gateway
*د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/151263-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة ببناء تطبيق سيتلقى ملايين استعلامات قاعدة البيانات كل ثانية. تحتاج الشركة إلى متجر البيانات للتطبيق للتوسع لتلبية هذه الاحتياجات. ما هي خدمة AWS التي ستلبي هذا المطلب؟
*أ. Amazon DynamoDB
ب. AWS Cloud9
ج. Amazon ElastiCache for Memcached
د. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/148076-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مستخدم AWS اكتشافاً استباقياً عند احتمال اختراق مثيل أو حساب أو وجود تهديدات من هجمات. ما هي خدمة AWS التي يجب على المستخدم اختيارها؟
*أ. Amazon GuardDuty
ب. AWS WAF
ج. AWS Shield
د. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/148077-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى نشر قاعدة بيانات PostgreSQL في Amazon RDS. يجب أن تكون قاعدة البيانات عالية التوفر ومتسامحة مع الأخطاء. ما هو حل AWS الذي يجب على الشركة استخدامه لتلبية هذه المتطلبات؟
أ. Amazon RDS مع منطقة توفر واحدة
ب. لقطات Amazon RDS (snapshots)
*ج. Amazon RDS مع مناطق توفر متعددة
د. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/147622-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الطريقة الأكثر أماناً لتخزين كلمات المرور على AWS؟
أ. تخزين كلمات المرور في دلو Amazon S3.
ب. تخزين كلمات المرور كمعلمات AWS CloudFormation.
ج. تخزين كلمات المرور في AWS Storage Gateway.
*د. تخزين كلمات المرور في AWS Secrets Manager.
https://www.examtopics.com/discussions/amazon/view/148078-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي العبارات التي تصف بدقة العلاقات بين مكونات البنية التحتية العالمية لـ AWS؟ (اختر اثنين)
أ. يوجد عدد من مناطق AWS أكبر من عدد مناطق التوفر.
*ب. يوجد عدد من مواقع الحافة أكبر من عدد مناطق AWS.
ج. موقع الحافة هو منطقة توفر.
د. يوجد عدد من مناطق AWS أكبر من عدد مواقع الحافة.
*هـ. يوجد عدد من مناطق التوفر أكبر من عدد مناطق AWS.
https://www.examtopics.com/discussions/amazon/view/147623-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي توفر تحليل أسماء النطاقات (DNS resolution)؟
أ. Amazon CloudFront
ب. Amazon VPC
*ج. Amazon Route 53
د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/151265-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: عند تصميم أعباء عمل AWS لتكون قيد التشغيل حتى في حالة وجود أعطال في المكونات، ما هي أفضل ممارسات AWS؟
أ. إجراء اختبارات التعافي من الكوارث ربع السنوية.
ب. وضع المكون الرئيسي في منطقة us-east-1.
*ج. التصميم لتجاوز الفشل التلقائي (automatic failover) إلى الموارد السليمة.
د. تصميم أعباء العمل لتناسب مثيل Amazon EC2 واحد.
https://www.examtopics.com/discussions/amazon/view/151266-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مما يلي يمكن أن تقوم به AWS Pricing Calculator؟
*أ. تقدير تكاليف AWS الشهرية.
ب. حساب تكاليف AWS التاريخية.
ج. توفير معلومات متعمقة حول استراتيجيات تسعير AWS.
د. تزويد المستخدمين بإمكانية الوصول إلى فواتيرهم الشهرية.
https://www.examtopics.com/discussions/amazon/view/151267-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تم منح مستخدم الإذن لتغيير كلمة مرور مستخدم IAM الخاصة به. ما هي خدمات AWS التي يمكن للمستخدم استخدامها لتغيير كلمة المرور؟ (اختر اثنين)
*أ. AWS Command Line Interface (AWS CLI)
ب. AWS Key Management Sen/ice (AWS KMS)
*ج. AWS Management Console
د. AWS Resource Access Manager (AWS RAM)
هـ. AWS Secrets Manager
https://www.examtopics.com/discussions/amazon/view/148582-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهمة التي تقع على عاتق العميل، وفقاً لنموذج المسؤولية المشتركة AWS؟
*أ. تصحيح (patch) نظام تشغيل ضيف منشور على مثيل Amazon EC2.
ب. التحكم في الوصول المادي إلى مركز بيانات AWS.
ج. التحكم في الوصول إلى الأجهزة الأساسية لـ AWS.
د. تصحيح (patch) نظام تشغيل مضيف منشور على Amazon S3.
https://www.examtopics.com/discussions/amazon/view/151268-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي توفر جدار حماية على مستوى الشبكة الفرعية (subnet) داخل VPC؟
أ. مجموعة أمان (Security group)
*ب. قائمة ACL للشبكة (Network ACL)
ج. واجهة شبكة مرنة (Elastic network interface)
د. AWS WAF
https://www.examtopics.com/discussions/amazon/view/151269-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الإرشادات التي تعتبر من أفضل الممارسات لاستخدام AWS Identity and Access Management (IAM)؟ (اختر اثنين)
أ. مشاركة مفاتيح الوصول.
*ب. إنشاء مستخدمي IAM فرديين.
ج. استخدام السياسات المضمنة (inline policies) بدلاً من السياسات المدارة من قبل العميل.
د. منح أقصى الامتيازات لمستخدمي IAM.
*هـ. استخدام المجموعات لتعيين الأذونات لمستخدمي IAM.
https://www.examtopics.com/discussions/amazon/view/151271-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي ميزة الحوسبة السحابية التي تسمح للمستخدمين بتوسيع نطاق الموارد لأعلى ولأسفل بناءً على مقدار الحمل الذي يدعمه التطبيق؟
أ. الانتشار عالمياً في دقائق
*ب. التوقف عن تخمين السعة
ج. الاستفادة من وفورات الحجم الهائلة
د. استبدال النفقات الثابتة بنفقات متغيرة
https://www.examtopics.com/discussions/amazon/view/151272-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تجارة إلكترونية توزيع حركة المرور بين مثيلات Amazon EC2 التي تستضيف موقعها على الويب. ما هي خدمة أو مورد AWS الذي سيلبي هذه المتطلبات؟
*أ. Application Load Balancer
ب. AWS WAF
ج. AWS CloudHSM
د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/148101-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمات أو ميزات AWS التي تشكل البنية التحتية العالمية لـ AWS Cloud؟ (اختر اثنين)
*أ. مناطق التوفر (Availability Zones)
ب. Amazon ElastiCache
*ج. مناطق AWS (AWS Regions)
د. Amazon S3
هـ. Amazon VPC
https://www.examtopics.com/discussions/amazon/view/151273-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: وفقاً لنموذج المسؤولية المشتركة AWS، أي من التالي يعتبر من مسؤوليات AWS؟ (اختر اثنين)
*أ. البنية التحتية للشبكة والمحاكاة الافتراضية للبنية التحتية
ب. أمان بيانات التطبيق
ج. أنظمة التشغيل الضيفة
*د. الأمان المادي للأجهزة
هـ. بيانات الاعتماد والسياسات
https://www.examtopics.com/discussions/amazon/view/150428-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة عبء عمل مؤقت ومتغير أيضاً. تحتاج الشركة إلى استخدام مثيلات Amazon EC2 لعبء العمل. تحتاج مثيلات EC2 إلى التعامل مع دفعات قصيرة من العمل لا يمكن أن تتوقف قبل الانتهاء. ما هو خيار الشراء الذي سيلبي هذه المتطلبات؟
أ. Spot Instances
*ب. On-Demand Instances
ج. Savings Plan
د. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/141279-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: موظفو شركة يعملون من المنزل. تريد الشركة أن يستخدم موظفوها أجهزتهم الشخصية للاتصال بمحطة عمل مُدارة في AWS Cloud. ما هي خدمة AWS التي يجب على الشركة استخدامها لتوفير البيئة البعيدة؟
*أ. Amazon Workspaces
ب. AWS Cloud9
ج. AWS Outposts
د. Amazon Lightsail
https://www.examtopics.com/discussions/amazon/view/151175-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة Amazon RDS لقاعدة بيانات المنتج. تريد الشركة التأكد من أن قاعدة البيانات عالية التوفر. ما هي ميزة Amazon RDS التي ستلبي هذا المطلب؟
أ. النسخ المتماثلة للقراءة (Read replicas)
ب. النشر الأزرق/الأخضر (Blue/green deployment)
*ج. نشر متعدد مناطق التوفر (Multi-AZ deployment)
د. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/151274-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي توفر حوسبة بدون خادم (serverless) للاستخدام مع الحاويات؟
أ. Amazon Simple Queue Service (Amazon SQS)
*ب. AWS Fargate
ج. AWS Elastic Beanstalk
د. Amazon SageMaker
https://www.examtopics.com/discussions/amazon/view/151275-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة حسابات AWS متعددة لفرق أعمال مختلفة. يريد فريق المالية تلقي فاتورة واحدة لجميع حسابات الشركة. ما هي خدمة أو أداة AWS التي يجب على فريق المالية استخدامها لتلبية هذا المطلب؟
*أ. AWS Organizations
ب. AWS Trusted Advisor
ج. Cost Explorer
د. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/151276-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى جدار حماية يتحكم في اتصالات الشبكة إلى ومن مثيل Amazon EC2 واحد. لن يتحكم جدار الحماية هذا في اتصالات الشبكة إلى ومن المثيلات الأخرى الموجودة في نفس الشبكة الفرعية. ما هي خدمة أو ميزة AWS التي يمكن للشركة استخدامها لتلبية هذه المتطلبات؟
أ. قائمة ACL للشبكة (Network ACL)
ب. AWS WAF
ج. جدول التوجيه (Route table)
*د. مجموعة أمان (Security group)
https://www.examtopics.com/discussions/amazon/view/143630-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لاستخدام مثيلات Amazon EC2 كخوادم ويب. سيستخدم العملاء من جميع أنحاء العالم خوادم الويب. سيستخدم معظم العملاء خوادم الويب فقط خلال ساعات معينة من اليوم. كيف يجب على الشركة نشر مثيلات EC2 لتحقيق أقل تكلفة تشغيلية؟
أ. في مناطق توفر متعددة
*ب. في مجموعة Auto Scaling
ج. في مجموعة تنسيب (placement group)
د. في شبكات فرعية خاصة
https://www.examtopics.com/discussions/amazon/view/151277-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الفائدة المتاحة دائماً مجاناً مع AWS، بغض النظر عن خطة دعم AWS للمستخدم؟
أ. AWS Developer Support
*ب. منتديات مطوري AWS (AWS Developer Forums)
ج. إدارة الحالات برمجياً (Programmatic case management)
د. مدير حساب تقني AWS (TAM)
https://www.examtopics.com/discussions/amazon/view/147625-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة مثيلات Amazon EC2 لتشغيل تطبيقها. يجب أن يكون التطبيق متاحاً ويعمل بشكل مستمر لمدة ثلاث سنوات أو أكثر. ما هو نوع مثيل EC2 الذي يجب على الشركة شراؤه للحصول على خصم على تسعير EC2؟
*أ. Reserved Instances
ب. Spot Instances
ج. On-Demand Instances
د. EC2 Fleet
https://www.examtopics.com/discussions/amazon/view/140999-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى إجراء تدقيق لنشاط حساب AWS الأخير. سيقوم التدقيق بالتحقيق في من بدأ حدثاً وما هي الإجراءات التي تم تنفيذها. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Config
ب. Amazon Rekognition
*ج. AWS CloudTrail
د. Amazon Simple Notification Service (Amazon SNS)
https://www.examtopics.com/discussions/amazon/view/141000-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى استخدام تقنية AWS لنشر موقع ويب ثابت. ما هو الحل الذي يلبي هذا المطلب بأقل قدر من الأعباء التشغيلية؟
أ. نشر موقع الويب على Amazon EC2.
ب. استضافة موقع الويب على AWS Elastic Beanstalk.
ج. نشر موقع الويب باستخدام Amazon Lightsail.
*د. استضافة موقع الويب على Amazon S3.
https://www.examtopics.com/discussions/amazon/view/148525-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي التوصية التي يمكن أن يقدمها AWS Cost Explorer للمساعدة في تقليل التكلفة؟
أ. استخدام محرك قاعدة بيانات محدد.
ب. تغيير لغة البرمجة لتطبيق ما.
ج. نشر نظام تشغيل محدد.
*د. إنهاء مثيل خامل (idle instance).
https://www.examtopics.com/discussions/amazon/view/141001-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نشر تطبيق في مناطق توفر متعددة في منطقة AWS واحدة. ما هي الفائدة التي سيوفرها هذا النشر للشركة؟
أ. تحسين أداء الاتصال للعملاء العالميين
*ب. بنية مرنة (resilient) وحل عالي التوفر
ج. تقليل تكاليف تخزين البيانات الإجمالية
د. القدرة على إيقاف تشغيل منطقة توفر خلال فترات انخفاض الطلب
https://www.examtopics.com/discussions/amazon/view/141002-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو الالتزام طويل الأجل لـ Amazon EC2 Reserved Instances الذي سيمنح المستخدمين أكبر قدر من التوفير في التكاليف؟
أ. سنة واحدة
ب. سنتان
*ج. 3 سنوات
د. 5 سنوات
https://www.examtopics.com/discussions/amazon/view/140924-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بتشغيل تحليلات البيانات الضخمة والحوسبة المتوازية الهائلة على خوادم الاختبار والتطوير AWS الخاصة بها. يمكن للشركة تحمل فترات التوقف العرضية. ما هو خيار شراء Amazon EC2 الأكثر فعالية من حيث التكلفة للشركة لاستخدامه؟
أ. On-Demand Instances
*ب. Spot Instances
ج. Reserved Instances
د. Savings Plans
https://www.examtopics.com/discussions/amazon/view/151279-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة بنقل عبء العمل الخاص بها إلى AWS Cloud. تريد الشركة تحسين موارد Amazon EC2 الحالية. ما هي خدمات أو أدوات AWS التي توفر هذه الوظيفة؟ (اختر اثنين)
أ. AWS Elastic Beanstalk
*ب. AWS Cost Explorer
ج. Amazon Detective
*د. AWS Compute Optimizer
هـ. AWS Billing Conductor
https://www.examtopics.com/discussions/amazon/view/141004-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى سجل تاريخي للأحداث (event history) لموارد AWS التي أنشأتها الشركة. ما هي خدمة AWS التي ستوفر هذه المعلومات؟
أ. Amazon CloudWatch
*ب. AWS CloudTrail
ج. Amazon Aurora
د. Amazon EventBridge
https://www.examtopics.com/discussions/amazon/view/147629-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل قواعد بيانات علائقية في AWS Cloud. تريد الشركة استخدام خدمة مُدارة ستقوم بتثبيت قاعدة البيانات وتشغيل تحديثات البرامج بانتظام. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon S3
*ب. Amazon RDS
ج. Amazon Elastic Block Store (Amazon EBS)
د. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/151284-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي توفر قاعدة بيانات رسوم بيانية (graph database) مُدارة بالكامل لمجموعات البيانات شديدة الترابط؟
أ. Amazon DynamoDB
ب. Amazon RDS
*ج. Amazon Neptune
د. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/151285-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تشمل بيئة السحابة لشركة ما مثيلات Amazon EC2 و Application Load Balancers. تريد الشركة تحسين الحماية لمواردها السحابية ضد هجمات DDoS. تريد الشركة أيضاً أن تكون لديها رؤية في الوقت الفعلي لأي هجمات DDoS. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Shield Standard
ب. AWS Firewall Manager
*ج. AWS Shield Advanced
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/148240-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تمكّن المستخدمين من إنشاء نسخ من الموارد عبر مناطق AWS؟
أ. Amazon ElastiCache
*ب. AWS CloudFormation
ج. AWS CloudTrail
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/148245-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهمة التي تقع على عاتق AWS، وفقاً لنموذج المسؤولية المشتركة AWS؟
أ. تطبيق تصحيحات نظام التشغيل الضيف على مثيلات Amazon EC2.
ب. توفير مراقبة أنظمة إدارة معلومات الموارد البشرية (HRIM).
*ج. إجراء النسخ الاحتياطية التلقائية لمثيلات Amazon RDS.
د. تحسين تكاليف تشغيل خدمات AWS.
https://www.examtopics.com/discussions/amazon/view/151287-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مستخدم إلى إجراء نسخ احتياطي لمرة واحدة لحجم Amazon Elastic Block Store (Amazon EBS) مرفق بمثيل Amazon EC2. ما هي الطريقة الأكثر كفاءة من الناحية التشغيلية لإجراء هذا النسخ الاحتياطي؟
أ. إرفاق حجم EBS آخر بمثيل EC2، ونسخ المحتويات.
ب. نسخ حجم EBS إلى خادم يعمل خارج AWS ومتصل بـ AWS Direct Connect.
*ج. إنشاء لقطة EBS (snapshot) للحجم.
د. إنشاء برنامج نصي مخصص لنسخ محتويات ملف EBS إلى Amazon S3.
https://www.examtopics.com/discussions/amazon/view/147631-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: مطور ليس لديه خبرة في AWS Cloud يريد استخدام تقنية AWS لبناء تطبيق ويب. ما هي خدمة AWS التي يجب على المطور استخدامها لبدء بناء التطبيق؟
أ. Amazon SageMaker
ب. AWS Lambda
*ج. Amazon Lightsail
د. Amazon Elastic Container Service (Amazon ECS)
https://www.examtopics.com/discussions/amazon/view/147632-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إدارة الوصول والأذونات لتطبيقات البرامج كخدمة (SaaS) التابعة لجهات خارجية. تريد الشركة استخدام بوابة حيث يمكن للمستخدمين النهائيين الوصول إلى حسابات AWS المعينة وتطبيقات AWS Cloud. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon Cognito
*ب. AWS IAM Identity Center (دخول موحد AWS)
ج. AWS Identity and Access Management (IAM)
د. AWS Directory Service for Microsoft Active Directory
https://www.examtopics.com/discussions/amazon/view/148255-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS المصممة للمستخدمين الذين يديرون أعباء عمل تتضمن قاعدة بيانات NoSQL؟
أ. Amazon RDS
ب. Amazon S3
ج. Amazon Redshift
*د. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/150416-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة موقع ويب على AWS. تريد الشركة توصيل موقع الويب إلى جمهور عالمي وتوفير أوقات استجابة منخفضة زمن الوصول للمستخدمين العالميين. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS CloudFormation
*ب. Amazon CloudFront
ج. Amazon ElastiCache
د. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/151288-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إضافة روبوت محادثة (chatbot) تفاعلي إلى موقعها على الويب. ما هي خدمة AWS التي يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. Amazon Textract
*ب. Amazon Lex
ج. AWS Glue
د. Amazon Rekognition
https://www.examtopics.com/discussions/amazon/view/147635-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو ميزة AWS التي يمكن استخدامها لمراقبة الارتفاعات المحتملة في كتابة القرص (disk write spikes) على نظام يعمل على Amazon EC2؟
أ. AWS CloudTrail
ب. AWS Health Dashboard
ج. AWS Trusted Advisor
*د. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/147634-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة تطبيقات تتحكم في معدات المصنع المحلية (on-premises). ما هي خدمة AWS التي يجب على الشركة استخدامها لتشغيل هذه التطبيقات بأقل زمن وصول؟
*أ. AWS Outposts
ب. Amazon EC2
ج. AWS Lambda
د. AWS Fargate
https://www.examtopics.com/discussions/amazon/view/147633-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي حالة الاستخدام الأساسية لـ Amazon GuardDuty؟
أ. منع هجمات DDoS
ب. الحماية من هجمات SQL injection
*ج. المراقبة التلقائية للتهديدات التي تتعرض لها أعباء عمل AWS
د. التوفير التلقائي لموارد AWS
https://www.examtopics.com/discussions/amazon/view/147636-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو مكون VPC الذي يمكن للشركة استخدامه لإعداد جدار حماية افتراضي على مستوى مثيل Amazon EC2؟
أ. قائمة ACL للشبكة (Network ACL)
*ب. مجموعة أمان (Security group)
ج. جدول التوجيه (Route table)
د. بوابة NAT (NAT gateway)
https://www.examtopics.com/discussions/amazon/view/147637-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مطور إلى التفاعل مع AWS باستخدام AWS CLI. ما هي ميزة الأمان أو خدمة AWS التي يجب توفيرها في حساب المطور لتلبية هذا المطلب؟
أ. اسم المستخدم وكلمة المرور
ب. AWS Systems Manager
ج. الوصول بكلمة مرور الجذر
*د. مفتاح وصول AWS (AWS access key)
https://www.examtopics.com/discussions/amazon/view/147638-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة توصيل طعام إلى منع المستخدمين في بلدان معينة من الوصول إلى موقعها على الويب. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذا المطلب؟
*أ. AWS WAF
ب. AWS Control Tower
ج. Amazon Fraud Detector
د. Amazon Pinpoint
https://www.examtopics.com/discussions/amazon/view/147639-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي مسؤولية العميل بموجب نموذج المسؤولية المشتركة AWS عند استخدام AWS Lambda؟
أ. صيانة أجهزة Lambda الأساسية.
ب. صيانة البنية التحتية لشبكة Lambda.
*ج. الكود والمكتبات التي تعمل في وظائف Lambda.
د. برنامج خادم Lambda.
https://www.examtopics.com/discussions/amazon/view/147640-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهام التي تقع على عاتق AWS وفقاً لنموذج المسؤولية المشتركة AWS؟ (اختر اثنين)
أ. تكوين AWS Identity and Access Management (IAM).
ب. تكوين مجموعات الأمان على مثيلات Amazon EC2.
*ج. تأمين الوصول إلى مرافق AWS المادية.
د. تصحيح (patch) التطبيقات التي تعمل على مثيلات Amazon EC2.
*هـ. إجراء تصحيحات وصيانة البنية التحتية (infrastructure patching and maintenance).
https://www.examtopics.com/discussions/amazon/view/147641-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة متطلب امتثال لتسجيل وتقييم تغييرات التكوين، بالإضافة إلى إجراء إجراءات تصحيحية (remediation) على موارد AWS. ما هي خدمة AWS التي يجب على الشركة استخدامها؟
*أ. AWS Config
ب. AWS Secrets Manager
ج. AWS CloudTrail
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/147643-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لإجراء نقل لمرة واحدة لمجموعة بيانات كبيرة تحتوي على ملايين الملفات من مركز البيانات المحلي (on-premises) إلى AWS Cloud. ما هي خدمة AWS التي يجب على الشركة استخدامها للنقل؟
أ. AWS Database Migration Service (AWS DMS)
*ب. AWS DataSync
ج. AWS Migration Hub
د. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/147644-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمات أو ميزات شبكة AWS التي تسمح بترميز CIDR block عند توفير نطاق عناوين IP؟ (اختر اثنين)
*أ. مجموعات الأمان (Security groups)
ب. Amazon Machine Image (AMI)
*ج. قائمة التحكم في الوصول إلى الشبكة (network ACL)
د. AWS Budgets
هـ. Amazon Elastic Block Store (Amazon EBS)
https://www.examtopics.com/discussions/amazon/view/147645-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تطوير تطبيق إمكانية الوصول (accessibility application) الذي سيحول النص إلى كلام مسموع. ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. Amazon MQ
*ب. Amazon Polly
ج. Amazon Neptune
د. Amazon Timestream
https://www.examtopics.com/discussions/amazon/view/147646-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى إعداد اتصال شبكة مخصص بين مركز البيانات المحلي (on-premises) و AWS Cloud. لا يمكن للشبكة استخدام الإنترنت العام. ما هي خدمة أو ميزة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Transit Gateway
ب. AWS VPN
ج. Amazon CloudFront
*د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/147647-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى استخدام لوحات المعلومات والرسوم البيانية لتحليل الرؤى من بيانات الأعمال. ما هي خدمة AWS التي ستوفر لوحات المعلومات والرسوم البيانية لهذه الرؤى؟
أ. Amazon Macie
ب. Amazon Aurora
*ج. Amazon QuickSight
د. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/147648-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل البنية التحتية المحلية (on-premises) إلى AWS Cloud. ما هي ميزة الحوسبة السحابية التي ستساعد الشركة على تقليل التكاليف الأولية؟
أ. الانتشار عالمياً في دقائق
ب. زيادة السرعة والمرونة
ج. الاستفادة من وفورات الحجم الهائلة
*د. استبدال النفقات الثابتة بنفقات متغيرة
https://www.examtopics.com/discussions/amazon/view/147649-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي فائدة استخدام موازن تحميل Elastic Load Balancing (ELB) مع التطبيقات التي تعمل في AWS Cloud؟
أ. سيقوم ELB تلقائياً بتوسيع نطاق الموارد لتلبية احتياجات السعة.
*ب. يمكن لـ ELB موازنة حركة المرور عبر موارد حوسبة متعددة.
ج. يمكن لـ ELB أن يمتد عبر مناطق AWS متعددة.
د. يمكن لـ ELB موازنة حركة المرور بين بوابات إنترنت متعددة.
https://www.examtopics.com/discussions/amazon/view/147652-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تخزين بيانات اعتماد قاعدة بيانات Amazon RDS بشكل آمن وتدوير كلمات مرور المستخدم تلقائياً بشكل دوري. ما هي خدمة أو قدرة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon S3
ب. AWS Systems Manager Parameter Store
*ج. AWS Secrets Manager
د. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/147654-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى أن تكون لديها القدرة على إعداد بنية تحتية لتطبيقات جديدة في دقائق. ما هي ميزة الحوسبة السحابية التي ستساعد الشركة على تلبية هذا المطلب؟
أ. استبدال النفقات الثابتة بنفقات متغيرة
ب. الانتشار عالمياً في دقائق
*ج. زيادة السرعة والمرونة
د. التوقف عن تخمين السعة
https://www.examtopics.com/discussions/amazon/view/147655-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى نظام ملفات NFS مُدار يمكن للشركة استخدامه مع موارد الحوسبة AWS الخاصة بها. ما هي خدمة أو ميزة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon Elastic Block Store (Amazon EBS)
ب. AWS Storage Gateway Tape Gateway
ج. Amazon S3 Glacier Flexible Retrieval
*د. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/147656-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة للنقل إلى AWS Cloud. تريد الشركة جمع معلومات حول مركز البيانات المحلي (on-premises) الخاص بها. ما هي خدمة AWS التي يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
*أ. AWS Application Discovery Service
ب. AWS DataSync
ج. AWS Storage Gateway
د. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/147657-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي المهام التي تقع على عاتق العميل، وفقاً لنموذج المسؤولية المشتركة AWS؟ (اختر اثنين)
أ. تأمين طبقة المحاكاة الافتراضية.
*ب. تشفير البيانات والحفاظ على سلامة البيانات.
ج. تصحيح (patch) نظام تشغيل Amazon RDS.
*د. الحفاظ على ضوابط إدارة الهوية والوصول.
هـ. تأمين مناطق التوفر.
https://www.examtopics.com/discussions/amazon/view/147658-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة بيع بالتجزئة عبر الإنترنت نقل عبء العمل المحلي (on-premises) إلى AWS. تحتاج الشركة إلى التعامل تلقائياً مع الزيادة الموسمية في عبء العمل بطريقة فعالة من حيث التكلفة. ما هي ميزات AWS Cloud التي ستساعد الشركة على تلبية هذا المطلب؟ (اختر اثنين)
أ. نشر عبء العمل عبر مناطق متعددة
*ب. تسعير الدفع حسب الاستخدام
ج. قدرات تدقيق AWS CloudTrail المضمنة
*د. سياسات Auto Scaling
هـ. تسجيل مركزي
https://www.examtopics.com/discussions/amazon/view/147659-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة القدرة على الحصول على الموارد تلقائياً عند الحاجة وتحرير الموارد عندما لا تكون هناك حاجة إليها. ما هو مفهوم السحابة الذي يصف هذه الوظيفة؟
أ. التوفر
*ب. المرونة (Elasticity)
ج. المتانة (Durability)
د. الموثوقية
https://www.examtopics.com/discussions/amazon/view/147668-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة خياراً فعالاً من حيث التكلفة عند تشغيل تطبيقاتها في مثيل Amazon EC2 لفترات زمنية قصيرة. يمكن مقاطعة التطبيقات. ما هو نوع مثيل EC2 الذي سيلبي هذه المتطلبات؟
*أ. Spot Instances
ب. On-Demand Instances
ج. Reserved Instances
د. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/147669-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة خطة AWS Business Support. تحتاج الشركة إلى الوصول إلى فريق الاستجابة DDoS من AWS (DRT) للمساعدة في تخفيف أحداث DDoS. ما هي خدمة أو مورد AWS الذي يجب على الشركة استخدامه لتلبية هذه المتطلبات؟
أ. AWS Shield Standard
ب. AWS Enterprise Support
ج. AWS WAF
*د. AWS Shield Advanced
https://www.examtopics.com/discussions/amazon/view/147670-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة أو أداة AWS التي توفر تصوراً لأنماط الإنفاق التاريخية لـ AWS وتوقعات التكاليف المستقبلية لـ AWS؟
أ. تقرير التكلفة والاستخدام AWS (AWS Cost and Usage Report)
ب. AWS Budgets
*ج. Cost Explorer
د. Amazon Cloud Watch
https://www.examtopics.com/discussions/amazon/view/147671-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بالنقل إلى AWS Cloud بدلاً من تشغيل البنية التحتية محلياً (on premises). أي من التالي يعتبر من مزايا هذا النقل؟ (اختر اثنين)
أ. التخلص من الحاجة إلى إجراء تدقيق أمني
*ب. زيادة الانتشار العالمي والمرونة (agility)
*ج. القدرة على النشر عالمياً في دقائق
د. التخلص من تكلفة أعضاء فريق تكنولوجيا المعلومات
هـ. التكرار بشكل افتراضي لجميع خدمات الحوسبة
https://www.examtopics.com/discussions/amazon/view/147672-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة خدمة AWS يمكنها أتمتة نشر البرامج في مثيلات Amazon EC2 والمثيلات المحلية (on-premises). ما هي خدمة AWS التي ستلبي هذا المطلب؟
أ. AWS CodeCommit
ب. AWS CodeBuild
*ج. AWS CodeDeploy
د. AWS CodePipeline
https://www.examtopics.com/discussions/amazon/view/147675-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يعتبر مسؤولية العميل وفقاً لنموذج المسؤولية المشتركة AWS؟
أ. تطبيق تصحيحات الأمان لأجهزة البنية التحتية لـ Amazon S3.
ب. توفير الأمان المادي لمراكز بيانات AWS.
ج. تثبيت تحديثات نظام التشغيل على Lambda@Edge.
*د. تنفيذ المصادقة متعددة العوامل (MFA) لحسابات مستخدمي IAM.
https://www.examtopics.com/discussions/amazon/view/147677-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام حل شبكات AWS يمكنه العمل كبوابة مركزية بين شبكات VPC متعددة وشبكات محلية (on-premises). ما هي خدمة أو ميزة AWS التي ستلبي هذا المطلب؟
أ. Gateway VPC endpoint
ب. AWS Direct Connect
*ج. AWS Transit Gateway
د. AWS PrivateLink
https://www.examtopics.com/discussions/amazon/view/147682-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لمساعدة الشركات على الامتثال لمعيار أمان بيانات صناعة بطاقات الدفع (PCI DSS) في السحابة، توفر AWS:
أ. عمليات تفتيش مادية لمراكز البيانات عن طريق التعيين.
ب. شهادات امتثال PCI مطلوبة لأي تطبيق يعمل على AWS.
*ج. تقرير إقرار الامتثال AWS (AOC) لخدمات AWS محددة.
د. خدمات امتثال PCI احترافية.
https://www.examtopics.com/discussions/amazon/view/147683-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو الحجم الإجمالي للبيانات التي يمكن تخزينها في Amazon S3؟
أ. 10 PB
ب. 50 PB
ج. 100 PB
*د. غير محدود تقريباً (Virtually unlimited)
https://www.examtopics.com/discussions/amazon/view/147685-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو مبدأ التصميم المرتبط بركيزة الموثوقية وفقاً لإطار عمل AWS Well-Architected؟
*أ. اختبار إجراءات التعافي
ب. التجربة أكثر في كثير من الأحيان
ج. الانتشار عالمياً في دقائق
د. تحليل وإسناد الإنفاق
https://www.examtopics.com/discussions/amazon/view/147686-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخزن شركة بيانات في دلو Amazon S3. ما هي المهمة التي تقع على عاتق AWS؟
أ. تكوين سياسة دورة حياة S3 (S3 Lifecycle policy).
ب. تفعيل إصدار S3 (S3 Versioning).
ج. تكوين سياسات دلو S3 (S3 bucket policies).
*د. حماية البنية التحتية التي تدعم تخزين S3.
https://www.examtopics.com/discussions/amazon/view/147687-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي خدمة AWS التي تعتبر خدمة قاعدة بيانات NoSQL مُدارة بالكامل؟
أ. Amazon RDS
ب. Amazon Redshift
*ج. Amazon DynamoDB
د. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/147713-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة بنشر تطبيق في مناطق AWS متعددة حول العالم. تريد الشركة تحسين أداء التطبيق وتوافره. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
*أ. AWS Global Accelerator
ب. Amazon DataZone
ج. AWS Cloud Map
د. AWS Auto Scaling
https://www.examtopics.com/discussions/amazon/view/147714-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل قاعدة بيانات SQL Server المحلية (on-premises) إلى AWS Cloud. تريد الشركة أن تتولى AWS الإدارة اليومية لقاعدة البيانات. ما هي خدمة AWS التي ستلبي متطلبات الشركة؟
أ. Amazon EC2 for Microsoft SQL Server
ب. Amazon DynamoDB
*ج. Amazon RDS
د. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/147715-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تصفية شبكة عديمة الحالة (stateless network filtering) لشبكة VPC الخاصة بها. ما هي خدمة أو أداة أو ميزة AWS التي ستلبي هذا المطلب؟
أ. AWS PrivateLink
ب. مجموعة أمان (Security group)
*ج. قائمة التحكم في الوصول إلى الشبكة (Network access control list - ACL)
د. AWS WAF
https://www.examtopics.com/discussions/amazon/view/147716-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار يعتبر ميزة من مزايا حوسبة AWS Cloud التي تقلل التكاليف المتغيرة؟
أ. التوفر العالي
*ب. وفورات الحجم
ج. الانتشار العالمي
د. المرونة (Agility)
https://www.examtopics.com/discussions/amazon/view/147717-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الفوائد التي تحصل عليها الشركة عندما تنتقل من بنية تكنولوجيا المعلومات المحلية (on-premises) إلى AWS Cloud؟ (اختر اثنين)
*أ. تقليل أو إلغاء مهام استكشاف أخطاء الأجهزة وتخطيط السعة والمشتريات
ب. التخلص من الحاجة إلى موظفي تكنولوجيا معلومات مدربين
ج. التكوين الأمني التلقائي لجميع التطبيقات التي يتم نقلها إلى السحابة
د. التخلص من الحاجة إلى تخطيط التعافي من الكوارث
*هـ. نشر أسرع للميزات والتطبيقات الجديدة
https://www.examtopics.com/discussions/amazon/view/147720-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: شركة تخطط للنقل إلى AWS Cloud مقرها في منطقة نائية ذات اتصال إنترنت محدود. تحتاج الشركة إلى إجراء معالجة بيانات محلية على premises. تحتاج الشركة إلى حل يمكنه العمل بدون اتصال إنترنت مستقر. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon S3
*ب. AWS Snowball Edge
ج. AWS Storage Gateway
د. AWS Backup
https://www.examtopics.com/discussions/amazon/view/147722-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة بناء استعلامات رسوم بيانية (graph queries) للكشف عن أنماط الاحتيال في الوقت الفعلي. ما هي خدمة AWS التي ستلبي هذا المطلب؟
*أ. Amazon Neptune
ب. Amazon DynamoDB
ج. Amazon Timestream
د. Amazon Forecast
https://www.examtopics.com/discussions/amazon/view/147723-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة الانتقال إلى AWS Cloud. تحتاج الشركة إلى القدرة على الحصول على الموارد عندما تكون الموارد ضرورية. تحتاج الشركة أيضاً إلى القدرة على تحرير تلك الموارد عندما لا تكون هناك حاجة إليها. ما هو مفهوم البنية التحتية لـ AWS Cloud الذي يلبي هذه المتطلبات؟
*أ. المرونة (Elasticity)
ب. التوفر
ج. الموثوقية
د. المتانة (Durability)
https://www.examtopics.com/discussions/amazon/view/147724-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نشر تطبيق ويب كتطبيق معبأ في حاويات (containerized). تريد الشركة استخدام خدمة مُدارة يمكنها إنشاء صور الحاويات تلقائياً من كود المصدر ونشر التطبيق المعبأ في حاويات. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Elastic Beanstalk
ب. Amazon Elastic Container Service (Amazon ECS)
*ج. AWS App Runner
د. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/147725-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة بنقل جميع بنيتها التحتية إلى AWS Cloud. للتخطيط المسبق لكل ربع سنة، يريد فريق المالية تتبع بيانات التكلفة والاستخدام لجميع الموارد من الأشهر السابقة. يريد فريق المالية إنشاء تقارير تلقائياً تحتوي على البيانات. ما هي خدمة أو ميزة AWS التي يجب على فريق المالية استخدامها لتلبية هذه المتطلبات؟
أ. Amazon Detective
ب. AWS Pricing Calculator
*ج. AWS Budgets
د. AWS Savings Plans
https://www.examtopics.com/discussions/amazon/view/147726-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي منظور في إطار عمل اعتماد السحابة AWS (AWS CAF) يركز على الرؤى في الوقت الفعلي والإجابة على الأسئلة حول الإستراتيجية؟
أ. العمليات
ب. الأشخاص
*ج. الأعمال
د. المنصة
https://www.examtopics.com/discussions/amazon/view/147727-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل أنظمة الإنتاج المحلية الهامة (critical on-premises) إلى مثيلات Amazon EC2. سيتم استخدام مثيلات الإنتاج لمدة 3 سنوات على الأقل. تريد الشركة خيار تسعير يقلل التكلفة. ما هو الحل الذي سيلبي هذه المتطلبات؟
أ. On-Demand Instances
*ب. Reserved Instances
ج. Spot Instances
د. AWS Free Tier
https://www.examtopics.com/discussions/amazon/view/147728-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مفهوم من إطار عمل AWS Well-Architected يمثل قدرة النظام على البقاء عاملاً عندما يواجه النظام مشاكل تشغيلية؟
أ. الاتساق
ب. المرونة (Elasticity)
*ج. المتانة (Durability)
د. زمن الوصول (Latency)
https://www.examtopics.com/discussions/amazon/view/147729-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي ركيزة من ركائز إطار عمل AWS Well-Architected تركز على القدرة على التعافي تلقائياً من انقطاعات الخدمة؟
أ. الأمان
ب. كفاءة الأداء
ج. التميز التشغيلي
*د. الموثوقية
https://www.examtopics.com/discussions/amazon/view/147730-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة قواعد بيانات متعددة قائمة على SQL موجودة في مركز بيانات. تحتاج الشركة إلى نقل جميع خوادم قاعدة البيانات إلى AWS Cloud لتقليل تكلفة تشغيل الخوادم المادية. ما هي خدمة أو مورد AWS الذي سيلبي هذه المتطلبات بأقل جهد تشغيلي؟
أ. مثيلات Amazon EC2
*ب. Amazon RDS
ج. Amazon DynamoDB
د. OpenSearch
https://www.examtopics.com/discussions/amazon/view/147731-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استكشاف وتحليل البيانات في Amazon S3 باستخدام لغة برمجة. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. Amazon Kendra
*ب. Amazon Athena
ج. Amazon Comprehend
د. Amazon SageMaker
https://www.examtopics.com/discussions/amazon/view/147734-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة خدمة مُدارة بالكامل تقوم بمركزية وأتمتة حماية البيانات عبر خدمات AWS وأعباء العمل الهجينة (hybrid workloads). ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Artifact
*ب. AWS Backup
ج. AWS Batch
د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/147736-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لنقل تطبيقها من المحلي (on premises) إلى AWS Cloud. تحتاج الشركة إلى جمع بيانات الاستخدام والتكوين لمكونات التطبيق. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Database Migration Service (AWS DMS)
ب. AWS Transfer Family
*ج. AWS Application Discovery Service
د. AWS Global Accelerator
https://www.examtopics.com/discussions/amazon/view/147737-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة توفير زمن وصول منخفض لمستخدميها حول العالم. ما هي ميزة AWS Cloud التي تلبي هذا المطلب؟
*أ. البنية التحتية العالمية
ب. تسعير الدفع حسب الاستخدام
ج. الخدمات المُدارة
د. اقتصاد الحجم
https://www.examtopics.com/discussions/amazon/view/147738-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: طورت شركة تطبيقاً داخلياً جديداً. ليس لدى الشركة طريقة لتحديد أو توقع طلب الاستخدام الذي سيخلقه التطبيق. ما هي فائدة الحوسبة السحابية AWS التي تبحث عنها الشركة؟
أ. سهولة الاستخدام
ب. فعالية التكلفة
ج. الأمان
*د. قابلية التوسع والأداء العالي
https://www.examtopics.com/discussions/amazon/view/147741-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: اشترت شركة Amazon EC2 Standard Reserved Instances (RIs) لعبء عمل في AWS Cloud. تحتاج الشركة إلى نقل جزء من عبء العمل إلى عائلة مثيل لا تتطابق مع عائلة المثيل لهذه Standard RIs. كيف يمكن للشركة الاستفادة من Standard RIs التي لم تعد بحاجة إليها؟
أ. الاتصال بفريق AWS Support، وطلب من الفريق بيع Standard RIs
*ب. بيع Standard RIs في سوق Amazon EC2 Reserved Instance Marketplace
ج. بيع Standard RIs كبائع طرف ثالث في AWS Marketplace
د. تحويل Standard RIs إلى Savings Plans
https://www.examtopics.com/discussions/amazon/view/147745-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة السماح لموظفيها بالعمل عن بُعد من المنزل. يستخدم موظفو الشركة أجهزة سطح مكتب Windows أو Linux. يحتاج موظفو الشركة إلى الوصول من أي مكان وفي أي وقت باستخدام أي أجهزة مدعومة. ما هي خدمة AWS التي ستلبي هذه المتطلبات؟
*أ. Amazon Workspaces
ب. Amazon AppStream 2.0
ج. Amazon Keyspaces (for Apache Cassandra)
د. AWS Cloud9
https://www.examtopics.com/discussions/amazon/view/147749-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة اختبار تطبيق جديد. ما هو مبدأ AWS الذي سيساعد الشركة على اختبار التطبيق؟
أ. القيام بالتزامات طويلة الأجل مقابل خصم على التكلفة.
*ب. التوسع لأعلى ولأسفل عند الحاجة دون أي التزامات طويلة الأجل.
ج. السيطرة الكاملة على البنية التحتية للتطبيق.
د. إدارة جميع مهام الصيانة المرتبطة بالسحابة.
https://www.examtopics.com/discussions/amazon/view/147750-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تتعلم شركة عن منظورات إطار عمل اعتماد السحابة AWS (AWS CAF). أي منظور من AWS CAF يتناول قدرة إدارة الإستراتيجية (strategy management capability)؟
*أ. منظور الأعمال
ب. منظور الأشخاص
ج. منظور الحوكمة
د. منظور العمليات
https://www.examtopics.com/discussions/amazon/view/147753-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/


`;
