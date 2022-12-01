class SponsorSerializer < ActiveModel::Serializer
  attributes :id, :name, :email 

  has_many :sponsorships
end
