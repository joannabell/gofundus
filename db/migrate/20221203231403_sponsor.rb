class Sponsor < ActiveRecord::Migration[7.0]
  def up
    drop_table :sponsors 
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
