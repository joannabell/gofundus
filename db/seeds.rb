puts "Seeding sponsorships..."
sponsorship1 = Sponsorship.create(name: "Jenny B.", image: "Has two children who love their dad. Cleans office buildings at night. Has a heart of gold", needs: "High", shelter: "Bethlehem Inn")
sponsorship2 = Sponsorship.create(name: "Karla B.", image: "Works at a diner. Loves her job. Has four grandchildren and a heart of gold. ", needs: "High", shelter: "Bethlehem Inn")
sponsorship3 = Sponsorship.create(name: "Caitlin B.", image: "Loves yoga. Wants to be an instructor someday. Has a heart of gold", needs: "High", shelter: "Bethlehem Inn")
sponsorship4 = Sponsorship.create(name: "George B.", image: "Works as a janitor in an elementary school. Is really good at math and has been married for 45 years to his beautiful wife. Has a heart of gold.", needs: "High", shelter: "Bethlehem Inn")
sponsorship5 = Sponsorship.create(name: "Jim B.", image: "He has skied for 50 years. Works at Mt. Bachelor teaching kids how to ski. He has a chocolate lab named Bob who also loves the snow. Has a heart of gold.", needs: "High", shelter: "Bethlehem Inn")
sponsorship6 = Sponsorship.create(name: "Leannie B.", image: "Has been a esthetician for 30 years. Survived the Holocaust. Can talk all day and has a wonderful sense of humor. Has a heart of gold.", needs: "High", shelter: "Bethlehem Inn")

puts "Seeding users..."
user1 = User.create(name: "Greta Thunberg", email: "greta@gmail.com", password: "password")
user2 = User.create(name: "Joanna Bell", email: "jjbdigital@gmail.com", password: "password")
user3 = User.create(name: "Steve Whitney", email: "steve@gmail.com", password: "password")
user4 = User.create(name: "Jackie Bell", email: "jackie@gmail.com", password: "password")
user5 = User.create(name: "Grandma Rhode", email: "grams@gmail.com", password: "password")
user6 = User.create(name: "Erin Sunday", email: "erin@gmail.com", password: "password")

puts "Seeding signups..."
30.times do
    Signup.create(
      sponsorship_id: rand(0..7),
      user_id: rand(0..7)
    )
end


# require 'faker'

# # generate 10 sponsorships
# # sponsorships represent people
# (1..10).each do |id|
#     Sponsorship.create!(
#         id: rand(1..20),
#         name: Faker::Name.name,
#         description: Faker::Gender.binary_type,
#         image: Faker::LoremFlickr.image
#     )
# end

# # generate 20 sponsors
# (1..20).each do |id|
#     Sponsor.create!(
#         id: rand(1..20),
#         name: Faker::Name.name,
#         email: Faker::Internet.email
# # issue each sponsor the same password
#         # password: "password", 
#         # password_confirmation: "password"
#     )
# end

# # generate signups 
# # signups belong to sponsor and sponsorship
# (1..10).each do |id|
#     Signup.create!(
#         sponsor_id: rand(1..20),
#         sponsorship_id: rand(1..20)
#     )
# end


