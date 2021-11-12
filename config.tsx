export type NavConfig = {
  name: string
  href: string
}

export declare type Information = {
  icon: any
  title: string
  subTitle: string
}

export const NAVS: NavConfig[] = [
  {
    name: 'About SPHINX',
    href: '/about'
  },
  // {
  //   name: 'Services',
  //   href: '/services'
  // },
  // {
  //   name: 'Blogs',
  //   href: '/blogs'
  // },
  {
    name: 'Contact',
    href: '/contact'
  }
]

export const tableConfig = {
  resource: [
    {
      id: 'qa-tester',
      position: 'QA/Tester',
      time: 'Full Time',
      salary: 'Negotiation',
      description: [
        {
          title: 'MÔ TẢ CÔNG VIỆC',
          contents: [
            'Tìm hiểu, nghiên cứu và phân tích rõ yêu cầu dự án thông qua tài liệu hoặc trao đổi với khách hàng.',
            'Lên kế hoạch test, thiết kế kịch bản test, chuẩn bị dữ liệu test.',
            'Quản lý, phân tích, theo dõi và báo cáo kết quả test.',
            'Trao đổi, thảo luận, đề xuất với các thành viên trong team để hoàn thiện dự án.',
            'Trao đổi trực tiếp với khách hàng, tiếp nhận feedback, bug report và các vấn đề về chất lượng dự án.'
          ]
        },
        {
          title: 'YÊU CẦU CÔNG VIỆC',
          contents: [
            'Có tư duy logic, Test mindset và khả năng phân tích tốt.',
            'Có khả năng đọc hiểu tiếng anh.',
            'Cẩn thận, tỉ mỉ và có tinh thần trách nhiệm cao trong công việc.',
            'Có khả năng giao tiếp và tư duy phản biện.',
            'Kỹ năng phân tích và giải quyết vấn đề, sáng tạo, năng động hòa đồng, ham muốn học hỏi nâng cao chuyên môn, chịu được áp lực công việc.',
            'Biết lắng nghe, đưa ra các gợi ý nhằm tổng hợp thông tin từ khách hàng, từ đó nắm bắt được yêu cầu sản phẩm, dịch vụ.',
            'Có khả năng làm việc độc lập/teamwork.'
          ]
        },
        {
          title: 'ƯU TIÊN',
          contents: [
            'Có chứng chỉ tiếng Nhật hoặc biết sử dụng tiếng Nhật.',
            'Có kinh nghiệm làm việc với sản phẩm mobile.',
            'Có kinh nghiệm làm việc với thị trường Nhật Bản.'
          ]
        },
        {
          title: 'YÊU CẦU KHÁC',
          contents: ['Có chứng chỉ về QA/Tester.']
        },
        {
          title: 'LƯƠNG & THƯỞNG',
          contents: [
            'Lương NET - Mức lương khởi điểm hấp dẫn.',
            'Thưởng lương tháng 13/năm + Thưởng dự án, thưởng Tết và các dịp Lễ…',
            'Có lộ trình đào tạo và thăng tiến rõ ràng.',
            'Checkpoint 2 lần/năm.',
            'Nghỉ T7 & CN + nghỉ phép theo quy định của pháp luật hiện hành.',
            'Được tham gia BHXH, BHYT, BHTN theo quy định pháp luật hiện hành và quy định của công ty.',
            'Khám sức khỏe định kì 1 lần/năm.'
          ]
        },
        {
          title: 'CHẾ ĐỘ ĐÃI NGỘ & PHÚC LỢI',
          contents: [
            'Du lịch định kỳ 1 lần/năm.',
            'Phụ cấp ăn trưa; Gửi xe miễn phí; Hỗ trợ bữa chiều…',
            'Được nhận quà tặng/tiền hỗ trợ vào các dịp: Sinh nhật, Nghỉ Lễ, sự kiện cá nhân khác…',
            'Tham gia các hoạt động tập thể: Ăn nhậu, Kick Oﬀ, Đấu giải Game, Sinh nhật…'
          ]
        },
        {
          title: 'CƠ HỘI HỌC HỎI VÀ PHÁT TRIỂN',
          contents: [
            'Trợ cấp tiếng Nhật và các chứng chỉ IT liên quan với nhiều hình thức hấp dẫn',
            'Thường xuyên tổ chức các buổi đào nội nội bộ Team, Seminar để nâng cao kỹnăng và kiến thức'
          ]
        },
        {
          title: 'TIỆN ÍCH',
          contents: ['Máy PS4, Đàn Piano, Đàn Guitar, tủ sách, BoardGame...']
        },
        {
          title: 'CÁCH THỨC ỨNG TUYỂN',
          contents: [
            'Gửi CV đính kèm các chứng chỉ về QA/Tester (nếu có)',
            'Địa chỉ nhận CV: Recruit.sphinx@gmail.com',
            'Tiêu đề mail: [QA/Tester] - Họ tên'
          ]
        },
        {
          title: 'LIÊN HỆ HỖ TRỢ',
          contents: [
            'Phòng Hành chính Nhân sự: hr@sphinx-software.com',
            'Tel: 024 2266 3888 (Ms. Hà)',
            'Địa chỉ: Tầng 8, tòa Trường Thịnh, Tràng An Complex, số1 Phùng Chí Kiên, Nghĩa Đô, Cầu Giấy, Hà Nội.',
            'FB: https://www.facebook.com/SphinxSoftware'
          ]
        }
      ]
    },
    {
      id: 'se-php-nodejs',
      position: 'Software Engineer (PHP/NodeJS)',
      time: 'Full Time',
      salary: 'Negotiation',
      description: [
        {
          title: 'MÔ TẢ CÔNG VIỆC',
          contents: [
            'Tham gia phát triển các dự án về Web/Mobile với khách hàng quốc tế: Mỹ, Úc, Nhật.',
            'Hỗ trợ xây dựng các kế hoạch kiểm thử, triển khai dự án.',
            'Công việc khác sẽ trao đổi cụ thể khi phỏng vấn.'
          ]
        },
        {
          title: 'YÊU CẦU CÔNG VIỆC',
          contents: [
            'Sử dụng thành thạo ngôn ngữ/framework: PHP (Laravel) hoặc NodeJS(TypeScript).',
            'Có kinh nghiệm phát triển dự án Web/Mobile.',
            'Có kinh nghiệm làm việc với Docker.'
          ]
        },
        {
          title: 'ƯU TIÊN',
          contents: [
            'Có hiểu biết về React và/hoặc NestJS.',
            'Có kinh nghiệm làm việc với thị trường quốc tế.'
          ]
        },
        {
          title: 'YÊU CẦU KHÁC',
          contents: [
            'Tiếng anh giao tiếp/đọc hiểu.',
            'Có khả năng làm việc độc lập/teamwork.'
          ]
        },
        {
          title: 'LƯƠNG & THƯỞNG',
          contents: [
            'Mức lương NET: <b>từ 15 triệu</b> (thỏa thuận thêm tùy theo năng lực)',
            'Thưởng lương tháng 13/năm + Thưởng dự án, thưởng Tết và các dịp Lễ...',
            'Có lộ trình đào tạo và thăng tiến rõ ràng',
            'Checkpoint 2 lần/năm.'
          ]
        },
        {
          title: 'CHẾ ĐỘ ĐÃI NGỘ & PHÚC LỢI',
          contents: [
            'Nghỉ T7& CN + nghỉ phép theo quy định của pháp luật hiện hành',
            'Được tham gia BHXH, BHYT, BHTN theo quy định pháp luật hiện hành và quy định của công ty.',
            'Khám sức khỏe định kì 1 lần/năm.',
            'Du lịch định kỳ 1 lần/năm.',
            'Phụ cấp ăn trưa, Gửi xe miễn phí, Hỗ trợ bữa chiều...',
            'Được nhận quà tặng/tiền hỗ trợ vào các dịp: Sinh nhật, Nghỉ Lễ, sự kiện cá nhân khác...',
            'Tham gia các hoạt động tập thể: Ăn nhậu, Kick Off, Đấu giải Game, Sinh nhật..'
          ]
        },
        {
          title: 'CƠ HỘI HỌC HỎI VÀ PHÁT TRIỂN',
          contents: [
            'Trợ cấp tiếng Nhật và các chứng chỉ IT liên quan với nhiều hình thức hấp dẫn',
            'Thường xuyên tổ chức các buổi đào nội nội bộ Team, Seminar để nâng cao kỹnăng và kiến thức',
            'Máy PS4, Đàn Piano, Đàn Guitar, tủ sách, BoardGame…'
          ]
        },
        {
          title: 'CÁCH THỨC ỨNG TUYỂN',
          contents: [
            'Gửi CV đính kèm link GitHub hoặc các dự án đã từng thực hiện(nếu có)',
            'Địa chỉ nhận CV: recruit.sphinx@gmail.com',
            'Tiêu đề mail: [PHP/NODEJS] - Họ tên',
            'Bộ phận tuyển dụng: recruit.sphinx@gmail.com'
          ]
        },
        {
          title: 'LIÊN HỆ HỖ TRỢ',
          contents: [
            'Tel: 024.2266.3888 (Ms. An)',
            'Địa chỉ: Tầng 8, tòa Trường Thịnh, Tràng An Complex, số1 Phùng Chí Kiên, Nghĩa Đô, Cầu Giấy, Hà Nội.',
            'Website: https://sphinx.vn/',
            'FB: https://www.facebook.com/SphinxSoftware'
          ]
        }
      ]
    },
    {
      id: 'se-reactjs-nodejs',
      position: 'Software Engineer (ReactJS/NodeJS)',
      time: 'Full Time',
      salary: 'Negotiation',
      description: [
        {
          title: 'MÔ TẢ CÔNG VIỆC',
          contents: [
            'Phân tích yêu cầu người dùng. Phối hợp với khách hàng để triển khai và kiểm thử hệ thống phần mềm.',
            'Lập trình web app theo thiết kế UI/UX.',
            'Phối hợp chặt chẽ với đội ngũ thiết kế để tìm kiếm cách tiếp cận thực tế nhất giúp phát triển UI mới. (Mọi chi tiết công việc sẽ trao đổi khi phỏng vấn)'
          ]
        },
        {
          title: 'YÊU CẦU CÔNG VIỆC',
          contents: [
            'Lập trình UI/UX của ứng dụng web hiện đại, giàu tương tác với yêu cầu cao về chất lượng và độ tin cậy dựa trên ES6, ReactJS, Redux.',
            'Có kinh nghiệm phát triển dự án Web/Mobile.',
            'Đảm bảo tiến độ, chất lượng công việc và báo cáo thường xuyên tới quản lý. Tích cực cung cấp sản phẩm nhanh chóng tới khách hàng.'
          ]
        },
        {
          title: 'ƯU TIÊN',
          contents: [
            'Có hiểu biết về ReactJS và/hoặc NodeJS.',
            'Có kinh nghiệm làm việc với thị trường quốc tế.'
          ]
        },
        {
          title: 'YÊU CẦU KHÁC',
          contents: [
            'Tiếng anh giao tiếp/đọc hiểu.',
            'Có khả năng làm việc độc lập/teamwork.'
          ]
        },
        {
          title: 'LƯƠNG & THƯỞNG',
          contents: [
            'Mức lương NET: <b>từ 7,5 triệu</b> (thỏa thuận thêm tùy theo năng lực).',
            'Thưởng lương tháng 13/năm + Thưởng dự án, thưởng Tết và các dịp Lễ...',
            'Có lộ trình đào tạo và thăng tiến rõ ràng.',
            'Checkpoint 2 lần/năm.'
          ]
        },
        {
          title: 'CHẾ ĐỘ ĐÃI NGỘ & PHÚC LỢI',
          contents: [
            'Nghỉ T7 & CN + nghỉ phép theo quy định của pháp luật hiện hành.',
            'Được tham gia BHXH, BHYT, BHTN theo quy định pháp luật hiện hành và quy định của công ty.',
            'Khám sức khỏe định kì 1 lần/năm.',
            'Du lịch định kỳ 1 lần/năm.',
            'Phụ cấp ăn trưa; Gửi xe miễn phí; Hỗ trợ bữa chiều…',
            'Được nhận quà tặng/các khoản hỗ trợ vào các dịp: Sinh nhật, NghỉLễ, sự kiện cá nhân khác…',
            'Tham gia các hoạt động tập thể: Ăn nhậu, Kick Oﬀ, Đấu giải Game, Sinh nhật…'
          ]
        },
        {
          title: 'CƠ HỘI HỌC HỎI VÀ PHÁT TRIỂN',
          contents: [
            'Trợ cấp khóa học ngoại ngữ và các chứng chỉ IT liên quan với nhiều hình thức hấp dẫn;',
            'Thường xuyên tổ chức các buổi đào nội nội bộ Team, Seminar để nâng cao kỹ năng và kiến thức.',
            'Máy PS4, Đàn Piano, Đàn Guitar, tủ sách, Board Game…'
          ]
        },
        {
          title: 'CÁCH THỨC ỨNG TUYỂN',
          contents: [
            'Gửi CV đính kèm link GitHub hoặc các dự án đã từng thực hiện.(nếu có)',
            'Tiêu đề mail: [ReactJS/NodeJS] - Họ tên',
            'Địa chỉ nhận CV:recruit.sphinx@gmail.com'
          ]
        },
        {
          title: 'LIÊN HỆ HỖ TRỢ',
          contents: [
            'Tel: 024.2266.3888 (Ms. Hà)',
            'Địa chỉ: Tầng 8, tòa Trường Thịnh, Tràng An Complex, số1 Phùng Chí Kiên, Nghĩa Đô, Cầu Giấy, Hà Nội.',
            'Website: https://sphinx.vn/',
            'FB: https://www.facebook.com/SphinxSoftware'
          ]
        }
      ]
    },
    {
      id: 'junior-nodejs-reactjs',
      position: 'Junior - NodeJs/ReactJs',
      time: 'Full Time',
      salary: 'Up To 1000$',
      description: [
        {
          title: 'SỐ LƯỢNG',
          contents: ['02 Người.']
        },
        {
          title: 'MÔ TẢ CÔNG VIỆC',
          contents: [
            'Tham gia phát triển dự án Web/Mobile với đối tác Mỹ, Nhật…',
            'Phối hợp với khách hàng/đội nhóm để triển khai và kiểm thử hệ thống phần mềm. '
          ]
        },
        {
          title: 'YÊU CẦU CÔNG VIỆC',
          contents: [
            'Tối thiểu 2 năm kinh nghiệm ở vị trí tương đương.',
            'Có hiểu biết về ES6, ReactJS, Redux và API BackEnd.',
            'Có khả năng làm việc độc lập/teamwork.'
          ]
        },
        {
          title: 'ƯU TIÊN',
          contents: [
            'Có kinh nghiệm sử dụng Docker.',
            'Có kinh nghiệm làm việc với thị trường quốc tế.'
          ]
        },
        {
          title: 'YÊU CẦU KHÁC',
          contents: [
            'Tiếng anh giao tiếp/đọc hiểu cơ bản.',
            'Có khả năng chịu áp lực cao trong công việc.'
          ]
        },
        {
          title: 'LƯƠNG & THƯỞNG',
          contents: [
            'Mức lương NET: <b>up to 1000$</b> (thỏa thuận thêm tùy theo năng lực).',
            'Thưởng lương tháng 13/năm + Thưởng dự án, thưởng Tết và các dịp Lễ…',
            'Lộ trình thăng tiến rõ ràng.',
            'Checkpoint 2 lần/năm.'
          ]
        },
        {
          title: 'CHẾ ĐỘ ĐÃI NGỘ & PHÚC LỢI',
          contents: [
            'Nghỉ T7& CN + nghỉ phép theo quy định của pháp luật hiện hành.',
            'Được tham gia BHXH, BHYT, BHTN theo quy định pháp luật hiện hành và quy định của công ty.',
            'Khám sức khỏe định kì 1 lần/năm.',
            'Du lịch định kỳ 1 lần/năm.',
            'Phụ cấp ăn trưa; Gửi xe miễn phí; Hỗ trợ bữa chiều…',
            'Được nhận quà tặng/các khoản hỗ trợ vào các dịp: Sinh nhật, Nghỉ Lễ, sự kiện cá nhân khác…',
            'Tham gia các hoạt động tập thể: Ăn nhậu, Kick Off, Đấu giải Game, Sinh nhật…'
          ]
        },
        {
          title: 'CƠ HỘI HỌC HỎI VÀ PHÁT TRIỂN',
          contents: [
            'Trợ cấp khóa học ngoại ngữ và các chứng chỉ IT liên quan với nhiều hình thức hấp dẫn;',
            'Thường xuyên tổ chức các buổi đào nội nội bộ Team, Seminar để nâng cao kỹ năng và kiến thức.',
            'Máy PS4, Đàn Piano, Đàn Guitar, tủ sách, BoardGame…'
          ]
        },
        {
          title: 'CÁCH THỨC ỨNG TUYỂN',
          contents: [
            'Gửi CV đính kèm link GitHub hoặc các dự án đã từng thực hiện (nếu có)',
            'Tiêu đề mail: <b>[NodeJS/ReactJS] - Họ tên</b>',
            'Địa chỉ nhận CV: <b>recruit.sphinx@gmail.com</b>'
          ]
        },
        {
          title: 'LIÊN HỆ HỖ TRỢ',
          contents: [
            'Tel: 024.2266.3888 ',
            'Địa chỉ: Tầng 8, tòa Trường Thịnh, Tràng An Complex, số 1 Phùng Chí Kiên, Nghĩa Đô, Cầu Giấy, Hà Nội.',
            'Website: https://sphinx.vn/',
            'FB: https://www.facebook.com/SphinxSoftware'
          ]
        }
      ]
    }
  ]
}

export const emailConfig = {
  user_id: 'user_1QWwEOBnJe1QVt1thEeTO',
  email_service_ids: {
    gmail_test: 'service_bwzvvnt'
  },
  template_ids: {
    custom_template: 'template_f6kzd16'
  },
  contact_receive_email:
    process.env.NEXT_PUBLIC_CONTACT_RECEIVE_EMAIL || 'hr@sphinx-software.com',
  apply_job_receive_email:
    process.env.NEXT_PUBLIC_APPLY_JOB_RECEIVE_EMAIL ||
    'recruit.sphinx@gmail.com'
}

export const screen = {
  ssm: 384,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1792,
  fullHD: 1920,
  '4xl': 2048,
  '5xl': 2304,
  '6xl': 2560
}

export const homeMenu = {
  COMPANY_OVERVIEW: 'COMPANY_OVERVIEW',
  OUR_FEATURES: 'OUR_FEATURES',
  SERVICES: 'SERVICES',
  WORKING_PROGRESS: 'WORKING_PROGRESS'
}
