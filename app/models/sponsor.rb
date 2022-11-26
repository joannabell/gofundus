class Sponsor < ApplicationRecord
    has_many :signups, dependent: :destroy 
    has_many :sponsorships, through: :signups
end
