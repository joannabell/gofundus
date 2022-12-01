class CreateSponsorships < ActiveRecord::Migration[7.0]
  def change
    create_table :sponsorships do |t|
      t.string :name
      t.string :image
      t.string :needs
      t.string :shelter

      t.timestamps
    end
  end
end
