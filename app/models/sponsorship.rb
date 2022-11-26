class Sponsorship < ApplicationRecord
    has_many :signups, dependent: :destroy 
    has_many :sponsors, through: :signups
end
