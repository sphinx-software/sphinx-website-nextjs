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
            'FB: https://www.facebook.com/LifeatSphinxSoftware'
          ]
        }
      ]
    },
    {
      id: 'ui-ux-designer',
      position: 'UI/UX Designer',
      time: 'Full Time',
      salary: 'Negotiation',
      description: [
        {
          title: 'MÔ TẢ CÔNG VIỆC',
          contents: [
            'Tham gia trực tiếp vào quá trình phát triển sản phẩm, thiết kế UI/UX cho App Mobile, Website, System và các sản phẩm/dịch vụ khác theo yêu cầu;',
            'Phối hợp với các bộ phận liên quan (QA, Development...) để lựa chọn phương án thiết kế phù hợp với dự án, sản phẩm/dịch vụ;',
            'Hỗ trợ thực hiện các yêu cầu thiết kế của các bộ phận liên quan và các công việc khác theo sự phân công của quản lý trực tiếp.'
          ]
        },
        {
          title: 'YÊU CẦU CÔNG VIỆC',
          contents: [
            'Có ít nhất 1 năm kinh nghiệm làm việc ở vị trí tương đương;',
            'Sử dụng thành thạo các công cụ thiết kế đồ họa thông dụng như: Figma, Sketch, Photoshop, Illustrator...;',
            'Thành thạo vẽ wireframe, userflow;',
            'Có khả năng tạo và trình diễn prototype thành thạo;',
            'Có năng khiếu thẩm mỹ, tư duy sáng tạo tốt. Nắm vững các kiến thức cơ bản về đồ họa. Có khả năng cập nhật những xu hướng thiết kế mới;',
            'Biết lắng nghe, đưa ra các gợi ý nhằm tổng hợp thông tin từ khách hàng, từ đó nắm bắt được yêu cầu sản phẩm, dịch vụ;',
            'Có khả năng giao tiếp/đọc hiểu tiếng Anh;'
          ]
        },
        {
          title: 'ƯU TIÊN',
          contents: [
            'Có kinh nghiệm làm việc với thị trường Nhật Bản;',
            'Có hiểu biết về HTML, CSS;',
            'Có thể làm việc trong môi trường áp lực;'
          ]
        },
        {
          title: 'YÊU CẦU KHÁC',
          contents: [
            'Có khả năng làm việc độc lập & team-work;',
            'Có tinh thần trách nhiệm cao trong công việc;'
          ]
        },
        {
          title: 'LƯƠNG & THƯỞNG',
          contents: [
            'Lương NET - Mức lương khởi điểm hấp dẫn',
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
            'Thường xuyên tổ chức các buổi đào nội nội bộ Team, Seminar để nâng cao kỹ năng và kiến thức.'
          ]
        },
        {
          title: 'TIỆN ÍCH',
          contents: ['Máy PS4, Đàn Piano, Đàn Guitar, tủ sách, BoardGame...']
        },
        {
          title: 'CÁCH THỨC ỨNG TUYỂN',
          contents: [
            'Gửi CV đính kèm portfolio nêu rõ quá trình công tác, kinh nghiệm làm việc...',
            'Tiêu đề mail: <b>[UI/UX Designer] - Họ tên</b>',
            'Địa chỉ nhận CV: <b>recruit.sphinx@gmail.com</b>'
          ]
        },
        {
          title: 'LIÊN HỆ HỖ TRỢ',
          contents: [
            'Tel: 024.2266.3888',
            'Địa chỉ: Tầng 8, tòa Trường Thịnh, Tràng An Complex, số1 Phùng Chí Kiên, Nghĩa Đô, Cầu Giấy, Hà Nội.',
            'Website: https://sphinx.vn/',
            'FB: https://www.facebook.com/LifeatSphinxSoftware'
          ]
        }
      ]
    },
    {
      id: 'se-reactjs-nodejs',
      position: 'NodeJS/ReactJS Developer (Fresher - Junior)',
      time: 'Full Time',
      salary: 'Negotiation',
      description: [
        {
          title: 'MÔ TẢ CÔNG VIỆC',
          contents: [
            'Tham gia phát triển dự án Web/Mobile với đối tác Mỹ, Nhật...',
            'Phối hợp chặt chẽ với đội ngũ thiết kế để tìm kiếm cách tiếp cận thực tế nhất giúp phát triển UI mới. (Mọi chi tiết công việc sẽ trao đổi khi phỏng vấn)'
          ]
        },
        {
          title: 'YÊU CẦU CÔNG VIỆC',
          contents: [
            'Có hiểu biết về ES6, ReactJS và API BackEnd.',
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
            'Tiếng anh giao tiếp/đọc hiểu.',
            'Có khả năng làm việc độc lập/teamwork.'
          ]
        },
        {
          title: 'LƯƠNG & THƯỞNG',
          contents: [
            'Mức lương NET: <b>Thỏa thuận</b>',
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
            'Tiêu đề mail: <b>[ReactJS/NodeJS] - Họ tên</b>',
            'Địa chỉ nhận CV: <b>recruit.sphinx@gmail.com</b>'
          ]
        },
        {
          title: 'LIÊN HỆ HỖ TRỢ',
          contents: [
            'Tel: 024.2266.3888',
            'Địa chỉ: Tầng 8, tòa Trường Thịnh, Tràng An Complex, số1 Phùng Chí Kiên, Nghĩa Đô, Cầu Giấy, Hà Nội.',
            'Website: https://sphinx.vn/',
            'FB: https://www.facebook.com/LifeatSphinxSoftware'
          ]
        }
      ]
    },
    {
      id: 'intern-developer',
      position: 'Intern Developer',
      time: 'Full Time',
      salary: 'Negotiation',
      description: [
        {
          title: 'THÔNG TIN CHUNG',
          contents: [
            'Vị trí: Lập trình viên NodeJS/ReactJS',
            'Trình độ: Thực tập',
            'Phòng ban: Phát triển'
          ]
        },
        {
          title: 'VAI TRÒ & MỤC TIÊU (Vai trò của vị trí này trong công ty là gì?)',
          contents: [
            'NHIỆM VỤ CHÍNH' +
            '<ul style="list-style-type: circle;padding-inline-start: 24px">' +
            '  <li>Tham gia vào khóa đào tạo nội bộ dành cho Thực tập sinh lập trình của công ty</li>' +
            '  <li>Học hỏi và phát triển các kỹ năng mềm tại môi trường công sở</li>' +
            '</ul>',

            '<b>OUTPUTS</b>' +
            '<ul style="list-style-type: circle;padding-inline-start: 24px">' +
            '  <li>Thuần thục trong việc lập trình các dự án sử dụng NodeJs/ReactJs</li>' +
            '  <li>Vận dụng tốt các kỹ năng làm việc tại môi trường công sở</li>' +
            '</ul>'
          ]
        },
        {
          title: 'YÊU CẦU CƠ BẢN',
          contents: [
            '<b>KIẾN THỨC (60%)</b>' +
            '<ul style="list-style-type: circle;padding-inline-start: 24px">' +
            '  <li><p style="font-weight: 500">Trình độ: (20%)</p>' +
            '    <ul style="list-style-type: square;padding-inline-start: 24px">' +
            '      <li>Chuyên ngành: Công nghệ thông tin hoặc các chuyên ngành khác có liên quan đến CNTT (đã tốt nghiệp hoặc là sinh viên năm cuối)</li>' +
            '      <li>Ngoại ngữ: Tiếng anh cơ bản (ưu tiên)</li>' +
            '      <li>Chứng chỉ MOS (ưu tiên)</li>' +
            '    </ul>' +
            '  </li>' +
            '  <li><p style="font-weight: 500">Kiến thức: (40%)</p>' +
            '    <ul style="list-style-type: square;padding-inline-start: 24px">' +
            '      <li>Có hiểu biết về quy trình xây dựng và phát triển phần mềm: 10%</li>' +
            '      <li>Có kiến thức cơ bản về NodeJs, ReactJs, ES6, API BackEnd: 30%</li>' +
            '    </ul>' +
            '  </li>' +
            '</ul>',

            '<b>KỸ NĂNG CHÍNH (40%)</b>' +
            '<ul style="list-style-type: circle;padding-inline-start: 24px">' +
            '  <li><p style="font-weight: 500">Kỹ năng</p>' +
            '    <ul style="list-style-type: square;padding-inline-start: 24px">' +
            '      <li>Gõ bàn phím 10 ngón</li>' +
            '      <li>Tự học và tìm kiếm thông tin</li>' +
            '    </ul>' +
            '  </li>' +
            '  <li><p style="font-weight: 500">Yêu cầu khác</p>' +
            '    <ul style="list-style-type: square;padding-inline-start: 24px">' +
            '      <li>Thực tập toàn thời gian (5 ngày/tuần)</li>' +
            '    </ul>' +
            '  </li>' +
            '</ul>'
          ]
        },
        {
          title: 'QUYỀN LỢI',
          contents: [
            'Nghỉ Thứ 7 và Chủ Nhật',
            'Phụ cấp: Gửi xe, ăn trưa, snack chiều...',
            'Được tham gia vào các hoạt động nội bộ của công ty: Open-Talk; Sharing; Kick-off, Du lịch...',
            'Cơ hội nhận thu nhập khủng khi tham gia vào các dự án chính thức của công ty',
            'Cơ hội trở thành nhân viên chính thức'
          ]
        },
        {
          title: 'ỨNG TUYỂN',
          contents: [
            'Tiêu đề: [Họ tên] - Intern NodeJS/ReactJS',
            'Email: recruit.sphinx@gmail.com',
            'Hotline: 024-2266-3888',
            'Địa chỉ: Tầng 8, tòa Trường Thịnh, Tràng An Complex, số 1 Phùng Chí Kiên, Nghĩa Đô, Cầu Giấy, Hà Nội.'
          ]
        }
      ]
    },
    {
      id: 'se-php-developer',
      position: 'PHP Developer',
      time: 'Full Time',
      salary: 'Upto 1500$',
      description: [
        {
          title: 'MÔ TẢ CÔNG VIỆC',
          contents: [
            'Tham gia xây dựng và phát triển dự án cho thị trường Mỹ, Úc, Nhật',
            'Hỗ trợ thực hiện các yêu cầu thiết kế của các bộ phận liên quan và các công việc khác theo sự phân công của quản lý trực tiếp (chi tiết công việc sẽ trao đổi khi phỏng vấn)'
          ]
        },
        {
          title: 'YÊU CẦU CÔNG VIỆC',
          contents: [
            'Tối thiểu 01 năm kinh nghiệm ở vị trí PHP Developer',
            'Có hiểu biết về HTML, CSS; JavaScript',
            'Có kinh nghiệm về Laravel; Wordpress',

          ]
        },
        {
          title: 'ƯU TIÊN',
          contents: [
            'Có kinh nghiệm làm việc với Docker là một lợi thế.',
            'Có kiến thức.',
            'Có thể làm việc trong môi trường áp lực.'
          ]
        },
        {
          title: 'YÊU CẦU KHÁC',
          contents: [
            'Có khả năng làm việc độc lập & team-work;',
            'Có tinh thần trách nhiệm cao trong công việc.'
          ]
        },
        {
          title: 'LƯƠNG & THƯỞNG',
          contents: [
            'Mức lương NET: 500$ - 1500$',
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
            'Tham gia các hoạt động tập thể: Ăn nhậu, Kick Oﬀ, Đấu giải Game, Sinh nhật…',
            'Cơ hội làm việc on-site quốc tế'
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
            'Tiêu đề mail: <b>[ReactJS/NodeJS] - Họ tên</b>',
            'Địa chỉ nhận CV: <b>recruit.sphinx@gmail.com</b>'
          ]
        },
        {
          title: 'LIÊN HỆ HỖ TRỢ',
          contents: [
            'Tel: 024.2266.3888',
            'Địa chỉ: Tầng 8, tòa Trường Thịnh, Tràng An Complex, số1 Phùng Chí Kiên, Nghĩa Đô, Cầu Giấy, Hà Nội.',
            'Website: https://sphinx.vn/',
            'FB: https://www.facebook.com/LifeatSphinxSoftware'
          ]
        }
      ]
    },
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
