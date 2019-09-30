<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Models\User;

class SendMailUser extends Mailable
{
    use Queueable, SerializesModels;
    public $user;
    public $randomid;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user, $randomid)
    {
        $this->user = $user;
        $this->randomid = $randomid;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail')->subject('Alterar Senha')->with(['user' => $this->user,'codigo'=>$this->randomid]);
    }
}
