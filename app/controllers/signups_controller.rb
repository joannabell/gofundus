class SignupsController < ApplicationController
    def index 
        render json: Signup.all, status: :ok
    end

    def show 
        signup = Signup.find(params[:id])
        render json: signup, status: :ok 
    end

    def create
        signup = Signup.new(signup_params)
        binding.pry
        if (signup.user == current_user) && signup.create                  
            render json: signup, status: :created
        else
            render json: signup&.errors || { error: 'Record not found' }, status: :unprocessable_entity 
        end
    end

    def update
        signup = Signup.find(params[:signup_id])
        if (signup.user == current_user) && signup&.update(signup_params)                       
            render json: signup, status: :success
        else
            render json: signup&.errors || { error: 'Record not found' }, status: :unprocessable_entity 
        end
    end

    def destroy
        signup = Signup.find(params[:signup_id])
        if (signup.user == current_user) && signup&.destroy
            render json: signup, status: :ok
        else
            render json: signup&.errors || { error: 'Record not found' }, status: :unprocessable_entity 
        end
    end

    private 
    
    def signup_params
        # TODO: figure out #permit args
        params.require(:signup).permit(:sponsorship_id, :user_id)
    end
end
