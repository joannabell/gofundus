class SponsorshipsController < ApplicationController
    def index 
        render json: Sponsorship.all, status: :ok
    end

    def create 
        sponsorship = Sponsorship.create!(sponsorship_params)
        render json: sponsorship, status: :created
    end

    def destroy
        sponsorship = Sponsorship.find(params[:id])
        sponsorship.destroy 
        render json: {}, status: :ok
    end

    private 
    def sponsorship_params 
        params.permit(:name, :description, :image)
    end
end
