class CreateSignups < ActiveRecord::Migration[7.0]
  def change
    create_table :signups do |t|
      t.string :sponsor_id
      t.string :sponsorship_id

      t.timestamps
    end
  end
end
