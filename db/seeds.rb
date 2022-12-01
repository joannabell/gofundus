puts "Seeding sponsorships..."
sponsorship1 = Sponsorship.create(name: "Jenny B.", image: "Has a heart of gold. Has two children who live with their dad. Cleans office buildings at night and saving money for a car.")
sponsorship2 = Sponsorship.create(name: "Karla B.", image: "Has a heart of gold. Has two children who live with their dad. Cleans office buildings at night and saving money for a car.")
sponsorship3 = Sponsorship.create(name: "Caitlin B.", image: "Has a heart of gold. Has two children who live with their dad. Cleans office buildings at night and saving money for a car.")

puts "Seeding sponsors..."
sponsor1 = Sponsor.create(name: "Greta Thunberg", email: "greta@gmail.com")
sponsor2 = Sponsor.create(name: "Greta Thunberg", email: "greta@gmail.com")
sponsor3 = Sponsor.create(name: "Greta Thunberg", email: "greta@gmail.com")

puts "Seeding signups..."
30.times do
    Signup.create(
      sponsorship_id: rand(0..7),
      sponsor_id: rand(0..7)
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


