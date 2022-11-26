class SponsorsController < ApplicationController
    def index 
        render json: Sponsor.all, status: :ok
    end

    def show 
        sponsor = Sponsor.find(params[:id])
        render json: sponsor, status: :ok 
    end

    def create 
        sponsor = Sponsor.create!(sponsor_params)
        render json: sponsor, status: :created 
    end

    def update
        sponsor = Sponsor.find(params[:id])
        sponsor.update!(sponsor_params)
        render json: sponsor, status: :accepted
    end

    def destroy
        sponsor = Sponsor.find(params[:id])
        sponsor.destroy 
        render json: {}, status: :ok
    end

    private 

    def sponsor_params 
        params.permit(:name, :email)
    end
end
