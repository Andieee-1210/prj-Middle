# eproject_cicd
<!-- Project econome -->
1️/ Hệ thống giải quyết vấn đề gì

  Hệ thống mô phỏng nền tảng thương mại điện tử theo kiến trúc microservices, cho phép đăng nhập, quản lý sản phẩm, tạo và theo dõi đơn hàng.

2️/ Hệ thống có bao nhiêu dịch vụ

  Gồm 3 dịch vụ chính và 2 thành phần hỗ trợ:
  
  Auth Service: Xác thực, đăng ký, đăng nhập.
  
  Product Service: Quản lý sản phẩm, tạo đơn hàng.
  
  Gateway Service: Định tuyến request.
  
  RabbitMQ: Truyền thông điệp giữa các service.
  
  MongoDB: Lưu trữ dữ liệu.

3️/ Ý nghĩa từng dịch vụ
  
  Auth: Quản lý người dùng, cấp JWT token.
  
  Product: Xử lý sản phẩm và đơn hàng.
  
  Gateway: Trung gian giữa client và các service.
  
  RabbitMQ: Giao tiếp bất đồng bộ.
  
  MongoDB: Lưu dữ liệu người dùng và sản phẩm.

️4/ Các mẫu thiết kế sử dụng

  Controller Pattern: Tách logic và route.
  
  Middleware Pattern: Xác thực qua JWT.
  
  Pub/Sub Pattern: Trao đổi dữ liệu qua RabbitMQ.
  
  Singleton: Kết nối RabbitMQ dùng chung.

5️/ Cách các dịch vụ giao tiếp
  
  HTTP REST: Gateway ↔ Auth/Product.
  
  RabbitMQ: Product gửi và nhận message đơn hàng.

 1. Auth Service
    - Đăng ký và đăng nhập người dùng
    - Tạo JWT token để xác thực cho các service khác

#### **Các route chính**
| Method | Endpoint | Mô tả |
|--------|-----------|-------|
| `POST` | `/register` | Tạo tài khoản mới |
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/16303933-3b5b-4f16-88e2-bb1e0dfedb5e" />

| `POST` | `/login` | Đăng nhập, trả về JWT token |
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a95df0f5-289a-43dd-a747-e8c670308de5" />

| `GET` | `/dashboard` | Kiểm tra token và trả về thông tin test |
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dfc9bb9f-df77-4b0e-90cd-f9e8fa7eddf9" />

---

2. Product Service
    Quản lý thông tin sản phẩm và tạo đơn hàng.

#### **Các route chính**
| Method | Endpoint | Mô tả |
|--------|-----------|-------|
| `POST` | `/` | Tạo sản phẩm mới |  + Token
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dcca531b-f8ce-4d87-8b61-a534ec3132cd" />

| `GET` | `/` | Lấy danh sách tất cả sản phẩm |
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5cdc66ce-031d-4d09-b7e2-2561dee3a0ff" />

| `GET` | `/:id` | Lấy chi tiết sản phẩm theo ID |
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5d9b383f-3808-4276-8999-7c134ee5c5de" />

| `POST` | `/buy` | Tạo đơn hàng (gửi message qua RabbitMQ) |
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6e13acc9-a0c8-4137-aa0f-862e14705b89" />

| `GET` | `/order-status/:orderId` | Kiểm tra trạng thái đơn hàng |
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dd78b641-b89d-4e0b-9661-ff940d5989f7" />

| `DELETE` | `/delete` | Xóa toàn bộ sản phẩm (chỉ dùng test) |
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bb96fe6b-32da-462d-9f92-26186d7eadc6" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3ed6b885-32e5-49f3-af10-956d1d16d38b" />





