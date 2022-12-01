class SponsorshipSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :needs, :shelter
end
