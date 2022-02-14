
a = MsgBox("Your computer may be infected.", 0+48, "WARNING!")
b = MsgBox("Unidentified signal found. Your (C:) drive is at risk.", 48, "WARNING")
c = MsgBox("Would you like to delete entire (C:) drive?", vbQuestion + vbYesNo + vbDefaultButton2, "Prompt")

If c = vbYes Then
  MsgBox "ERROR: COULD NOT DELETE. ATTEMPT REPAIR?"
Else 
    MsgBox "Attempting to repair (C:) drive"
End If

d = MsgBox("Admin permission required. OK to continue.")
e = MsgBox("Fixing (C:) drive requires love...", 48, "Problem Found!")
f = MsgBox("Will you be my Valentine (last chance)", vbQuestion + vbYesNo + vbDefaultButton2, "Yes or (C:) drive is gg")

While f = vbNo
    f = MsgBox("Error: invalid answer. Will you be my Valentine?", vbYesNo, "ERROR")
Wend

q = MsgBox("Yay! Now select yes smh")