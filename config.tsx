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
      id: 'job1',
      position: 'Reception',
      time: 'Fulltime',
      salary: '800$',
      description: [
        {
          title: 'MÔ TẢ CÔNG VIỆC',
          contents: [
            'Tìm hiểu, nghiên cứu và phân tích rõ yêu cầu dự án thông qua tài liệu hoặc trao đổi với khách hàng',
            'Lên kế hoạch test, thiết kế kịch bản test, chuẩn bị dữ liệu test',
            'Quản lý, phân tích, theo dõi và báo cáo kết quả test',
            'Trao đổi, thảo luận, đề xuất với các thành viên trong team để hoàn thiện dự án',
            'Trao đổi trực tiếp với khách hàng, tiếp nhận feedback, bug report và các vấn đề về chất lượng dự án.'
          ]
        },
        {
          title: 'ƯU TIÊN',
          contents: []
        },
        {
          title: 'YÊU CẦU KHÁC',
          contents: ['Có chứng chỉ về QA/Tester']
        },
        {
          title: 'LƯƠNG & THƯỞNG',
          contents: []
        },
        {
          title: 'CHẾ ĐỘ ĐÃI NGỘ & PHÚC LỢI',
          contents: [
            'Nghỉ T7& CN + nghỉ phép theo quy định của pháp luật hiện hành',
            'Được tham gia BHXH, BHYT, BHTN theo quy định pháp luật hiện hành và quy định của công ty',
            'Khám sức khỏe định kì 1 lần/năm',
            'Du lịch định kỳ 1 lần/năm',
            'Phụ cấp ăn trưa, Gửi xe miễn phí, Hỗ trợ bữa chiều...',
            'Được nhận quà tặng/tiền hỗ trợ vào các dịp: Sinh nhật, Nghỉ Lễ, sự kiện cá nhân khác...',
            'Tham gia các hoạt động tập thể: Ăn nhậu, Kick Off, Đấu giải Game, Sinh nhật..'
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
          title: 'THỜI GIAN LÀM VIỆC',
          contents: [
            'Sáng: 8h30p – 12h00p',
            'Chiều: 13h15p – 17h30p (Từ thứ 2 đến thứ 6 hàng tuần)'
          ]
        },
        {
          title: 'CÁCH THỨC ỨNG TUYỂN',
          contents: [
            'Gửi CV đính kèm các chứng chỉ về test',
            'Địa chỉ nhận CV : hr@sphinx-software.com',
            'Tiêu đề mail      : [QA/Tester] - Họ tên'
          ]
        }
      ]
    },
    {
      id: 'job2',
      position: 'QA/Tester Mobile',
      time: 'Fulltime',
      salary: '1200$',
      description: [
        {
          title: 'MÔ TẢ CÔNG VIỆC',
          contents: [
            'Tìm hiểu, nghiên cứu và phân tích rõ yêu cầu dự án thông qua tài liệu hoặc trao đổi với khách hàng',
            'Lên kế hoạch test, thiết kế kịch bản test, chuẩn bị dữ liệu test',
            'Quản lý, phân tích, theo dõi và báo cáo kết quả test',
            'Trao đổi, thảo luận, đề xuất với các thành viên trong team để hoàn thiện dự án',
            'Trao đổi trực tiếp với khách hàng, tiếp nhận feedback, bug report và các vấn đề về chất lượng dự án.'
          ]
        },
        {
          title: 'YÊU CẦU CÔNG VIỆC',
          contents: [
            'Có tư duy logic, Test mindset và khả năng phân tích tốt',
            'Có khả năng đọc hiểu tiếng anh',
            'Cẩn thận, tỉ mỉ và có tinh thần trách nhiệm cao trong công việc',
            'Có khả năng giao tiếp và tư duy phản biện',
            'Kỹ năng phân tích và giải quyết vấn đề, sáng tạo, năng động hòa đồng, ham muốn học hỏi nâng cao chuyên môn, chịu được áp lực công việc.',
            'Biết lắng nghe, đưa ra các gợi ý nhằm tổng hợp thông tin từ khách hàng, từ đó nắm bắt được yêu cầu sản phẩm, dịch vụ',
            'Có khả năng làm việc độc lập/teamwork'
          ]
        },
        {
          title: 'ƯU TIÊN',
          contents: [
            'Có chứng chỉ tiếng Nhật hoặc biết sử dụng tiếng Nhật;',
            'Có kinh nghiệm làm việc với sản phẩm mobile',
            'Có kinh nghiệm làm việc với thị trường Nhật Bản.'
          ]
        },
        {
          title: 'YÊU CẦU KHÁC',
          contents: ['Có chứng chỉ về QA/Tester']
        },
        {
          title: 'LƯƠNG & THƯỞNG',
          contents: [
            'Lương NET - Mức lương khởi điểm hấp dẫn',
            'Thưởng lương tháng 13/năm + Thưởng dự án, thưởng Tết và các dịp Lễ...',
            'Có lộ trình đào tạo và thăng tiến rõ ràng',
            'Checkpoint 2 lần/năm.'
          ]
        },
        {
          title: 'CHẾ ĐỘ ĐÃI NGỘ & PHÚC LỢI',
          contents: [
            'Nghỉ T7& CN + nghỉ phép theo quy định của pháp luật hiện hành',
            'Được tham gia BHXH, BHYT, BHTN theo quy định pháp luật hiện hành và quy định của công ty',
            'Khám sức khỏe định kì 1 lần/năm',
            'Du lịch định kỳ 1 lần/năm',
            'Phụ cấp ăn trưa, Gửi xe miễn phí, Hỗ trợ bữa chiều...',
            'Được nhận quà tặng/tiền hỗ trợ vào các dịp: Sinh nhật, Nghỉ Lễ, sự kiện cá nhân khác...',
            'Tham gia các hoạt động tập thể: Ăn nhậu, Kick Off, Đấu giải Game, Sinh nhật..'
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
          title: 'THỜI GIAN LÀM VIỆC',
          contents: [
            'Sáng: 8h30p – 12h00p',
            'Chiều: 13h15p – 17h30p (Từ thứ 2 đến thứ 6 hàng tuần)'
          ]
        },
        {
          title: 'CÁCH THỨC ỨNG TUYỂN',
          contents: [
            'Gửi CV đính kèm các chứng chỉ về test',
            'Địa chỉ nhận CV : hr@sphinx-software.com',
            'Tiêu đề mail      : [QA/Tester] - Họ tên'
          ]
        }
      ]
    },
    {
      id: 'job3',
      position: 'UI/UX Designer',
      time: 'Fulltime',
      salary: '1500$',
      description: [
        {
          title: 'MÔ TẢ CÔNG VIỆC',
          contents: []
        },
        {
          title: 'YÊU CẦU CÔNG VIỆC',
          contents: [
            'Có tư duy logic, Test mindset và khả năng phân tích tốt',
            'Có khả năng đọc hiểu tiếng anh',
            'Cẩn thận, tỉ mỉ và có tinh thần trách nhiệm cao trong công việc',
            'Có khả năng giao tiếp và tư duy phản biện',
            'Kỹ năng phân tích và giải quyết vấn đề, sáng tạo, năng động hòa đồng, ham muốn học hỏi nâng cao chuyên môn, chịu được áp lực công việc.',
            'Biết lắng nghe, đưa ra các gợi ý nhằm tổng hợp thông tin từ khách hàng, từ đó nắm bắt được yêu cầu sản phẩm, dịch vụ',
            'Có khả năng làm việc độc lập/teamwork'
          ]
        },
        {
          title: 'ƯU TIÊN',
          contents: [
            'Có chứng chỉ tiếng Nhật hoặc biết sử dụng tiếng Nhật;',
            'Có kinh nghiệm làm việc với sản phẩm mobile',
            'Có kinh nghiệm làm việc với thị trường Nhật Bản.'
          ]
        },
        {
          title: 'YÊU CẦU KHÁC',
          contents: ['Có chứng chỉ về QA/Tester']
        },
        {
          title: 'LƯƠNG & THƯỞNG',
          contents: [
            'Lương NET - Mức lương khởi điểm hấp dẫn',
            'Thưởng lương tháng 13/năm + Thưởng dự án, thưởng Tết và các dịp Lễ...',
            'Có lộ trình đào tạo và thăng tiến rõ ràng',
            'Checkpoint 2 lần/năm.'
          ]
        },
        {
          title: 'CHẾ ĐỘ ĐÃI NGỘ & PHÚC LỢI',
          contents: []
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
          title: 'THỜI GIAN LÀM VIỆC',
          contents: [
            'Sáng: 8h30p – 12h00p',
            'Chiều: 13h15p – 17h30p (Từ thứ 2 đến thứ 6 hàng tuần)'
          ]
        },
        {
          title: 'CÁCH THỨC ỨNG TUYỂN',
          contents: [
            'Gửi CV đính kèm các chứng chỉ về test',
            'Địa chỉ nhận CV : hr@sphinx-software.com',
            'Tiêu đề mail      : [QA/Tester] - Họ tên'
          ]
        }
      ]
    },
    {
      id: 'job4',
      position: 'Software Engineer (PHP/NodeJS)',
      time: 'Fulltime',
      salary: '2000$',
      description: [
        {
          title: 'MÔ TẢ CÔNG VIỆC',
          contents: [
            'Tìm hiểu, nghiên cứu và phân tích rõ yêu cầu dự án thông qua tài liệu hoặc trao đổi với khách hàng',
            'Lên kế hoạch test, thiết kế kịch bản test, chuẩn bị dữ liệu test',
            'Quản lý, phân tích, theo dõi và báo cáo kết quả test',
            'Trao đổi, thảo luận, đề xuất với các thành viên trong team để hoàn thiện dự án',
            'Trao đổi trực tiếp với khách hàng, tiếp nhận feedback, bug report và các vấn đề về chất lượng dự án.'
          ]
        },
        {
          title: 'YÊU CẦU CÔNG VIỆC',
          contents: [
            'Có tư duy logic, Test mindset và khả năng phân tích tốt',
            'Có khả năng đọc hiểu tiếng anh',
            'Cẩn thận, tỉ mỉ và có tinh thần trách nhiệm cao trong công việc',
            'Có khả năng giao tiếp và tư duy phản biện',
            'Kỹ năng phân tích và giải quyết vấn đề, sáng tạo, năng động hòa đồng, ham muốn học hỏi nâng cao chuyên môn, chịu được áp lực công việc.',
            'Biết lắng nghe, đưa ra các gợi ý nhằm tổng hợp thông tin từ khách hàng, từ đó nắm bắt được yêu cầu sản phẩm, dịch vụ',
            'Có khả năng làm việc độc lập/teamwork'
          ]
        },
        {
          title: 'ƯU TIÊN',
          contents: [
            'Có chứng chỉ tiếng Nhật hoặc biết sử dụng tiếng Nhật;',
            'Có kinh nghiệm làm việc với sản phẩm mobile',
            'Có kinh nghiệm làm việc với thị trường Nhật Bản.'
          ]
        },
        {
          title: 'YÊU CẦU KHÁC',
          contents: ['Có chứng chỉ về QA/Tester']
        },
        {
          title: 'LƯƠNG & THƯỞNG',
          contents: [
            'Lương NET - Mức lương khởi điểm hấp dẫn',
            'Thưởng lương tháng 13/năm + Thưởng dự án, thưởng Tết và các dịp Lễ...',
            'Có lộ trình đào tạo và thăng tiến rõ ràng',
            'Checkpoint 2 lần/năm.'
          ]
        },
        {
          title: 'CHẾ ĐỘ ĐÃI NGỘ & PHÚC LỢI',
          contents: []
        },
        {
          title: 'CƠ HỘI HỌC HỎI VÀ PHÁT TRIỂN',
          contents: []
        },
        {
          title: 'TIỆN ÍCH',
          contents: ['Máy PS4, Đàn Piano, Đàn Guitar, tủ sách, BoardGame...']
        },
        {
          title: 'THỜI GIAN LÀM VIỆC',
          contents: [
            'Sáng: 8h30p – 12h00p',
            'Chiều: 13h15p – 17h30p (Từ thứ 2 đến thứ 6 hàng tuần)'
          ]
        },
        {
          title: 'CÁCH THỨC ỨNG TUYỂN',
          contents: [
            'Gửi CV đính kèm các chứng chỉ về test',
            'Địa chỉ nhận CV : hr@sphinx-software.com',
            'Tiêu đề mail      : [QA/Tester] - Họ tên'
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
  contact_receive_email: 'long97vip@gmail.com',
  receiver_reply_email: 'longlh@sphinx-software.com'
}
