/*
!Axios
adalah library yang digunakan untuk menyimpelkan http request ke suatu client.
*npm install axios

!how to set express application generator
*npm install -g express-generator 
to create express generator set as public
*express -h 
to see the what commands express generator have
*express --view=pug 
name_folder to create folder and set to Pug view engine
*express --no-view folder_name
to set with no view engiine to the file directory

! Setup with sequelize
* npm instal sequelize sequelize-cli --save
* npx sequelize init

? npx sequelize migration:create --name=create-table-user
berguna untuk membuat file migration dengna nama create-table-user dengan hanya membuat migration tanpa membuat models

* seeder
digunakan untuk mengisi table yang ada sebelumnya, biasanya digunakan jika butuh pengisian data yang otomatis harus ada pada table dan tidak perlu lagi memasukkan manual pada tabel seperti akun admin.
? npx sequelize seed:generate --name=<file-name>
nama pada //*await queryInterface.bulkInsert  ('users', [
disesuaikan dengan isi file migration
cara mengirim file nya
* npx sequeliz db:seed:all (jika file lebih dari satu jika tidak hanya menggunakan db:seed ajah)

!fastest-validator
digunakan untuk memvalidasi semua request yang masuk handler.

! attributes in sequelize
    const user = await User.findByPk(id, {
      attributes: ['id', 'name', 'email', 'profession', 'avatar']
    });
* attributes berguna untuk menampilkan field yang akan ditampilkan.
*/
<iframe width="726" height="560" src="https://www.youtube.com/embed/Gr1-JyAPpss" title="14. BWA Micro - Membuat API Get Users" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
